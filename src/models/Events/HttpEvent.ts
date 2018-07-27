import { Readable } from "stream";

// CN Documentation: https://help.aliyun.com/document_detail/71229.html

export enum HttpMethods {
    HTTP_METHOD_HEAD = "HEAD",
    HTTP_METHOD_GET = "GET",
    HTTP_METHOD_POST = "POST",
    HTTP_METHOD_PUT = "PUT",
    HTTP_METHOD_DELETE = "DELETE",
}

export class FuncCompHttpTrigRequest extends Readable {
    public clientIP: string;
    public headers: Headers;
    public method: HttpMethods;
    public path: string;
    public queries: URLSearchParams;
    public url: URL;

    constructor(
        method: HttpMethods,
        url: URL,
        clientIP: string,
        queries?: URLSearchParams,
        headers?: Headers,
        path?: string,
    ) {
        super();

        this.method = method;
        this.url = url;
        this.clientIP = clientIP;
        this.queries = queries;
        this.headers = headers;
        this.path = path;
    }
}

export interface IFuncCompHttpTrigResponse {
    setStatusCode(statusCode: number): void;
    setHeader(headerKey: string, headerValue: string): void;
    deleteHeader(headerKey: string): void;
    send(body: string | Buffer | Readable);
}
