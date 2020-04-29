module.exports = (template, scope = {}, defaults = {}) => {
	with ({ ...defaults, ...scope }) {
		return eval(`\`${template}\``);
	}
};
