import * as getRawBody from "raw-body";
import { FuncCompContext } from "./alicloud/functionCompute";
import { FuncCompHttpTrigRequest, IFuncCompHttpTrigResponse } from "./alicloud/httpModels";

export function httpFunc(
    request: FuncCompHttpTrigRequest,
    response: IFuncCompHttpTrigResponse,
    context: FuncCompContext,
) {
    getRawBody(request)
        .then((data) => data.toString())
        .then((bodyString) => {
            const respBody = {
                requestHeader: request.headers,
                url: request.url,
                path: request.path,
                queryStr: request.queries,
                method: request.method,
                clientIP: request.clientIP,
                body: bodyString,
            };

            return respBody;
        })
        .then((respBody) => {
            response.setStatusCode(200);
            response.setHeader("content-type", "application/json");
            response.send(JSON.stringify(respBody));
        })
        .catch((err) => {
            console.error(err);
        });
}
