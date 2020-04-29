import { dereference } from "swagger-parser";
import fs from "fs";
import templateRunner from "./template-runner";
import prettier from "prettier";
import { OpenAPIV2, IJsonSchema, OpenAPI } from "openapi-types";

type MethodType = "GET" | "POST" | "DELETE" | "PUT" | "PATCH" | "OPTIONS";
type PathLookup = { [key: string]: { p: string; m: string } };
type Parameter = OpenAPIV2.ReferenceObject | OpenAPIV2.ParameterObject;
interface Call {
	content: string;
	name: string;
}

function getTemplate<T>(
	name: string,
	defaults?: Partial<T>
): (scope?: T) => string {
	const template = fs.readFileSync(name);
	if (name.indexOf(".ts") >= 0) {
		return (): string => template.toString();
	}
	return (scope?: T): string =>
		templateRunner(template.toString(), scope, defaults);
}

const parameterTemplate = getTemplate<{
	name: string;
	parameters: Parameter[];
	schemaTemplate: ({ schema: SchemaObject }) => string;
}>("./src/templates/parameter.template");

const callTemplate = getTemplate<{
	name: string;
	pathInfo: OpenAPIV2.OperationObject;
	bodyName: string;
	queryName: string;
	headerName: string;
	pathName: string;
	responseNames: string[];
}>("./src/templates/call.template");

const footerTemplate = getTemplate<{
	name: string;
	path: string;
	pathInfo: OpenAPIV2.OperationObject;
	method: string;
	bodyParameters: string[];
	queryParameters: string[];
	headerParameters: string[];
	pathParameters: string[];
}>("./src/templates/footer.ts");

const apiTemplate = getTemplate<{
	calls: Call[];
}>("./src/templates/api.template");

type SchemaLookup = { [key: string]: OpenAPIV2.SchemaObject | IJsonSchema };

const schemaTemplate = (
	schema: OpenAPIV2.SchemaObject | IJsonSchema
): string => {
	function getProperties(
		schema: OpenAPIV2.SchemaObject | IJsonSchema
	): SchemaLookup {
		if (schema.properties) {
			return schema.properties;
		}

		if (schema.allOf) {
			let lookup: SchemaLookup = {};
			schema.allOf.forEach((inner) => {
				lookup = { ...lookup, ...getProperties(inner) };
			});
			return lookup;
		}
		return {};
	}
	const getType = (type: string): string => {
		if (type === "integer") {
			return "number";
		}
		if (type === "object") {
			const properties = getProperties(schema);
			return (
				"{" +
				Object.keys(properties)
					.map((key) => `${key}: ${schemaTemplate(properties[key])};`)
					.join("\n") +
				"}"
			);
		}
		if (type === "array") {
			if (!schema.items) return "any[]";

			return schemaTemplate(schema.items) + "[]";
		}
		return type;
	};
	if (Array.isArray(schema.type)) {
		return schema.type.map(getType).join(" | ");
	}
	return getType(schema.type);
};

const responseTemplate = getTemplate<{
	code: string;
	name: string;
	response: OpenAPIV2.ResponseObject;
	schemaTemplate: ({ schema: SchemaObject }) => string;
}>("./src/templates/response.template");

const definitionsTemplate = getTemplate<{
	basePath: string;
	host: string;
	pathLookup: PathLookup;
}>("./src/templates/definitions.template");

function toTitleCase(word: string): string {
	return word[0].toUpperCase() + word.slice(1);
}

function getComponents(path: string): string[] {
	let components = path.split(/[\/ ._]/);
	if (!components[0]) {
		components = components.slice(1);
	}
	return components.map((x) => x.replace(/[{}]/g, ""));
}

function getName(path: string): string {
	const name = getComponents(path)
		.map((x) => toTitleCase(x))
		.join("");
	return name;
}

export async function createApi(
	sourceApi: string | OpenAPI.Document
): Promise<string> {
	const registry: string[] = [];
	const pathLookup: PathLookup = {};
	const api = (await dereference(sourceApi)) as OpenAPIV2.Document;
	const { basePath, host, paths } = api;

	const calls: Call[] = [];
	Object.keys(paths).forEach((path) => {
		const methods = paths[path];

		Object.keys(methods).forEach((rawMethod) => {
			const pathInfo = methods[rawMethod] as OpenAPIV2.OperationObject;
			const method = rawMethod.toUpperCase() as MethodType;
			const name = pathInfo.operationId
				? getName(pathInfo.operationId)
				: `${getName(path)}_${method}`;
			pathLookup[name] = {
				p: path,
				m: method,
			};
			const { parameters, responses } = pathInfo;

			const bodyName = `${name}Body`;
			const bodyParameters = parameterTemplate({
				name: bodyName,
				parameters: (parameters || []).filter(
					(x: Parameter) => (x as OpenAPIV2.ParameterObject).in === "body"
				),
				schemaTemplate,
			});
			registry.push(bodyParameters);

			const queryName = `${name}Query`;
			const queryParameters = parameterTemplate({
				name: queryName,
				parameters: (parameters || []).filter(
					(x: Parameter) => (x as OpenAPIV2.ParameterObject).in === "query"
				),
				schemaTemplate,
			});
			registry.push(queryParameters);

			const headerName = `${name}Header`;
			const headerParameters = parameterTemplate({
				name: headerName,
				parameters: (parameters || []).filter(
					(x: Parameter) => (x as OpenAPIV2.ParameterObject).in === "header"
				),
				schemaTemplate,
			});
			registry.push(headerParameters);

			const pathName = `${name}Path`;
			const pathParameters = parameterTemplate({
				name: pathName,
				parameters: (parameters || []).filter(
					(x: Parameter) => (x as OpenAPIV2.ParameterObject).in === "path"
				),
				schemaTemplate,
			});
			registry.push(pathParameters);

			const responseNames = Object.keys(responses).map((code) => {
				const responseName = `${name}${code}`;
				const response = responses[code];
				registry.push(
					responseTemplate({
						name: responseName,
						code,
						response,
						schemaTemplate,
					})
				);
				return responseName;
			});

			registry.push(
				callTemplate({
					name,
					pathInfo,
					bodyName,
					queryName,
					headerName,
					pathName,
					responseNames,
				})
			);

			calls.push({ name, content: name });
		});
	});

	registry.push(apiTemplate({ calls }));
	registry.push(
		definitionsTemplate({
			basePath,
			host,
			pathLookup,
		})
	);
	registry.push(footerTemplate());

	return prettier.format(registry.join("\n\n"), { parser: "typescript" });
}
