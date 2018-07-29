import { HttpMethods } from "./HttpEvent";

export default class GatewayEvent {
    public path: string;
    public httpMethod: HttpMethods;
    public headers: Map<string, string>;
    public queryParameters: Map<string, string>;
    public pathParameters: Map<string, string>;
    public body: string;
    public isBase64Envoded: boolean;
}
