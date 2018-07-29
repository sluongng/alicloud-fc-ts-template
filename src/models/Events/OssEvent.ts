import { BaseEvent } from "./GenericEvent";

// CN Documentation: https://help.aliyun.com/document_detail/62922.html

export default class OssEvent extends BaseEvent {
    public oss: OssMeta;
    public requestParameters: OssRequestParams;
    public responseElements: OssResponseElements;
}

export class OssMeta {
    public bucket: OssBucket;
    public object: OssObject;
    public ossSchemaVersion: string;
    public ruleId: string;
}

export class OssBucket {
    public arn: string;
    public name: string;
    public ownerIdentity: string;
    public virtualBucket: string;
}

export class OssObject {
    public deltaSize: number;
    public eTag: string;
    public key: string;
    public size: number;
}

export class OssRequestParams {
    public sourceIPAddress: string;
}

export class OssResponseElements {
    public requestId: string;
}

export class UserIdentity {
    public principalId: string;
}
