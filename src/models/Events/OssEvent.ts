import BaseEvent from "./BaseEvent";

// CN Documentation: https://help.aliyun.com/document_detail/62922.html

export default class OssEvent extends BaseEvent {
    public eventName: OssEventName;
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

export enum OssEventName {
    ObjectCreatedAll = "ObjectCreated:*",
    ObjectCreatedPutObject = "ObjectCreated:PutObject",
    ObjectCreatedPutSymlink = "ObjectCreated:PutSymlink",
    ObjectCreatedPostObject = "ObjectCreated:PostObject",
    ObjectCreatedCopyObject = "ObjectCreated:CopyObject",
    ObjectCreatedInitiateMultipartUpload = "ObjectCreated:InitiateMultipartUpload",
    ObjectCreatedUploadPart = "ObjectCreated:UploadPart",
    ObjectCreatedUploadPartCopy = "ObjectCreated:UploadPartCopy",
    ObjectCreatedCompleteMultipartUpload = "ObjectCreated:CompleteMultipartUpload",
    ObjectCreatedAppendObject = "ObjectCreated:AppendObject",
    ObjectRemovedDeleteObject = "ObjectRemoved:DeleteObject",
    ObjectRemovedDeleteObjects = "ObjectRemoved:DeleteObjects",
    ObjectRemovedAbortMultipartUpload = "ObjectRemoved:AbortMultipartUpload",
}
