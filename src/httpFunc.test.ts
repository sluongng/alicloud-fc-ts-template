import { FuncCompHttpTrigRequest, HttpMethods, IFuncCompHttpTrigResponse } from "alicloud/httpModels";
import { Readable } from "stream";
import { httpFunc } from "./httpFunc";

class MockHttpResponse implements IFuncCompHttpTrigResponse {

    public setStatusCode(statusCode: number): void {
        console.log("setStatusCode was called: %d", statusCode);
    }

    public setHeader(headerKey: string, headerValue: string): void {
        console.log("setHeader was called key: %s, value: %s", headerKey, headerValue);
    }

    public deleteHeader(headerKey: string): void {
        console.log("deleteHeader was called key: %s", headerKey);
    }

    public send(body: string | Buffer | Readable) {
        console.log("send was called with body type: %s", typeof (body));
    }
}

const test = new FuncCompHttpTrigRequest(HttpMethods.HTTP_METHOD_GET, new URL("http://google.com"), "0.0.0.0");
test.push("123123");
test.push("456456");
test.push("abcdef");

httpFunc(test, new MockHttpResponse(), null);
