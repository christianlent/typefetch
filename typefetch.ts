type Method = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' | 'OPTIONS';

export const GET = 'GET';
export const POST = 'POST';
export const DELETE = 'DELETE';
export const PUT = 'PUT';
export const PATCH = 'PATCH';
export const OPTIONS = 'OPTIONS';

export interface Call {
    body?: object;
    query?: {[key: string]: string};
    header?: {[key: string]: string};
    path?: {[key: string]: string};
    result?: object;
}

export interface CallCollection {
    [key: string]: Call
}

export type CallFunction<T extends Call, U> = (params: T) => U;

export type Recipe<T extends Call, U = any> = (path: string, method: Method) => CallFunction<T, U>;

export function encodeQueryParams(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}

export function fetchJsonRecipe<T extends Call>(path: string, method: Method): CallFunction<T, Promise<T['result']>> {
    return async (params: T) => {
        let endpoint = path;
        Object.keys(params.path || {}).forEach((paramName) =>
            endpoint = endpoint.replace(`{${paramName}}`, params.path[paramName])
        )
        endpoint = params.query
            ? `${endpoint}?${encodeQueryParams(params.query)}`
            : endpoint
        ;
        const body = params.body ? JSON.stringify(params.body) : '';
        const response = await fetch(endpoint, {
            body,
            method,
            headers: params.header,
        });
        const result = await response.json();
        return JSON.parse(result);
    }
}

export function call<T extends Call>(path: string, method: Method, recipe: Recipe<T> = fetchJsonRecipe) {
    return recipe(path, method);
}
