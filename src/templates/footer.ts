interface Map<T> {
	[key: string]: T;
}
const e = encodeURIComponent;
function bq(p: Map<string> = {}): string {
	if (!Object.keys(p).length) return "";
	function r(key: string): string {
		const value = p[key];
		if (Array.isArray(value)) {
			return value.map((v) => `${key}=${e(v)}`).join("&");
		}
		return `${e(key)}=${e(value)}`;
	}
	return "?" + Object.keys(p).map(r).join("&");
}

function bp(r: string, p: Map<string>): string {
	return Object.keys(p).reduce((k, c) => c.replace(`{${k}}`, p[k]), r);
}

const h = {
	get: function (o, v): Map<() => void> | (() => void) {
		const { l } = o;
		if (!l) {
			return new Proxy({ l: v }, h);
		}

		return async (
			params: Map<string> = {},
			body: Map<string> = {},
			options: RequestInit = {}
		): Promise<{ code: string; content: any; headers: Headers }> => {
			const { m, p } = pathLookup[l];
			const full = `${host}${basePath}${bp(p, params)}${bq(params)}`;
			const r = await fetch(full, {
				...options,
				method: m,
				body: JSON.stringify(body),
			});
			const content = await r.json();
			const { headers, status } = r;
			return { code: status.toString(), content, headers };
		};
	},
};

export const api = new Proxy({}, h) as Api;
