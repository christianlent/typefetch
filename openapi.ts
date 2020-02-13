const SwaggerParser = require("swagger-parser");

const bodyParameterTemplate = (x) =>
`/**
 * ${x.description}
 */
'${x.name}'${x.required ? '' : '?'}: ${x.type},`;

const queryParameterTemplate = bodyParameterTemplate;
const headerParameterTemplate = bodyParameterTemplate;
const pathParameterTemplate = bodyParameterTemplate;

const parameterTemplate = (parameters) => {
	if (!parameters.length) {
		return '{}';
	}
	const parameterLines = [];
	parameters.forEach((parameter) => {
		const lines = parameter.split('\n');
		lines.forEach((line) => {
			parameterLines.push(`\t\t${line}`);
		});
	});
	return `{\n${parameterLines.join('\n')}\n\t}`;
}

const callTemplate = (name, pathInfo, method, bodyParameters = [], queryParameters = [], headerParameters = [], pathParameters = []) => `
/** ${pathInfo.summary}
 * ${pathInfo.description}
*/
const ${name} = call<{
	body: ${parameterTemplate(bodyParameters)},
	query: ${parameterTemplate(queryParameters)},
	header: ${parameterTemplate(headerParameters)},
	path: ${parameterTemplate(pathParameters)},
}>('/v1/auth', ${method.toUpperCase()});
`;

const headerTemplate = () =>
`import {
	GET,
	POST,
	DELETE,
	PUT,
	PATCH,
	OPTIONS,
	call,
} from './typefetch';
`;

let x = 0;
function getName(path) {
	return `x${x++}`;
}

const root = {children: {}};

function setComponents(path, name) {
	let components = path.split('/');
	if (!components[0]) {
		components = components.slice(1);
	}
	let el = root;
	components.forEach((component) => {
		if (!el.children[component]) {
			el.children[component] = {children: {}};
		}
		el = el.children[component];
	});
	el.call = name;
}

function printApiSetup() {
	console.log(JSON.stringify(root, undefined, '\t'));
}

async function run(file) {
	let api = await SwaggerParser.parse(file);
	const { paths } = api;
	console.log(headerTemplate());
	Object.keys(paths).forEach((path) => {
		const methods = paths[path];
		Object.keys(methods).forEach((method) => {
			const pathInfo = methods[method];

			const bodyParameters = pathInfo
				.parameters
				.filter((x) => x.in === 'body')
				.map(bodyParameterTemplate)
			;

			const queryParameters = pathInfo
				.parameters
				.filter((x) => x.in === 'query')
				.map(queryParameterTemplate)
			;

			const headerParameters = pathInfo
				.parameters
				.filter((x) => x.in === 'header')
				.map(headerParameterTemplate)
			;

			const pathParameters = pathInfo
				.parameters
				.filter((x) => x.in === 'path')
				.map(pathParameterTemplate)
			;

			const name = getName(path);
			setComponents(path, name);

			console.log(callTemplate(
				name, pathInfo, method, bodyParameters, queryParameters, headerParameters, pathParameters
			));
		})
	});

	printApiSetup();
}

run(process.argv[2]);