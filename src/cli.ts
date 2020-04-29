import { gent } from "./gent";
import { createApi } from "./typefetch";
import { program } from "commander";
import fs from "fs";

program
	.command("convert [input] [output]")
	.description(
		"Convert open api specifications into useable typescript APIs using fetch."
	)
	.version("1.0.0")
	.action(async function (input, output) {
		console.error(`Transforming open api "${input}" to ${output}...`);
		const api = await createApi(input);
		fs.writeFileSync(output, api);
	});

program.command("gent [input] [output]").action(async function (input, output) {
	return gent(input, output);
});

program.parse(process.argv);
