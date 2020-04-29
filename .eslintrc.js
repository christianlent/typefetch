module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint/eslint-plugin"],
	extends: [
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	rules: {
		"@typescript-eslint/no-empty-interface": "off",
	},
};
