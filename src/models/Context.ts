import { AliCloudRegions } from "./Regions";

// [CN] Documentation: https://help.aliyun.com/document_detail/73331.html#h2-context2

export class Credentials {
    public accessKeyId: string;
    public accessKeySecret: string;
    public securityToken: string;
}

export class FunctionInfo {
    public name: string;
    public handler: string;
    public memory: number;
    public timeout: number;
}

export class ServiceInfo {
    public name: string;
    public logProject: string;
    public logStore: string;
}

export default class Context {
    public requestId: string;
    public region: AliCloudRegions;
    public accountId: string;

    public credentials: Credentials;
    public function: FunctionInfo;
    public service: ServiceInfo;
}
