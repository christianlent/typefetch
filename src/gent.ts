import fs from "fs";
import { TypescriptParser, InterfaceDeclaration } from "typescript-parser";
import prettier from "prettier";
import { createApi } from "./typefetch";

export async function gent(input: string, output: string): Promise<void> {
	console.error(`Creating declaration tests for "${input}": ${output}...`);

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

	const api = await createApi(input);
	const parser = new TypescriptParser();
	const parsed = await parser.parseSource(api);

	function describeDeclaration(declaration: InterfaceDeclaration): string {
		const declarationName = getName(declaration.name);

		return `
            it("Ensure ${declarationName} is properly declared", async function () {
                const ${declarationName}Declaration = parsed.declarations.find(
                    (x) => x.name === "${declaration.name}"
                ) as InterfaceDeclaration;
                const properties = ${declarationName}Declaration.properties;
                ${
									!declaration.properties.length &&
									`expect(properties.length).to.equal(0);`
								}
                ${declaration.properties
									.map((property) => {
										const propertyName = getName(property.name);
										return `const ${propertyName}Declaration = properties.find((x) => x.name === "${property.name}");
                                expect(${propertyName}Declaration).be.an("object");
                                expect(${propertyName}Declaration.type).be.equal('${property.type}');`;
									})
									.join("\n\n")}
            });
        `;
	}

	const declarations = parsed.declarations.filter((x) =>
		x.hasOwnProperty("properties")
	) as InterfaceDeclaration[];

	const test = `
        import { expect } from "chai";
        import { createApi } from "../../src/typefetch";
        import {
            TypescriptParser,
            InterfaceDeclaration,
            File,
        } from "typescript-parser";
        
        let parsed: File;
        
        describe("Test declarations for ${input}", function () {
            this.beforeAll(async () => {
                const api = await createApi("${input}");
                const parser = new TypescriptParser();
                parsed = await parser.parseSource(api);
            });
        
            ${declarations.map(describeDeclaration).join("\n")}
        });
    `;

	fs.writeFileSync(output, test);
	fs.writeFileSync(output, prettier.format(test, { parser: "typescript" }));
}
