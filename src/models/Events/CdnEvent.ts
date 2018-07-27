import BaseEvent from "./BaseEvent";

// CN Documentation: https://help.aliyun.com/document_detail/73333.html

export default class CdnEvent extends BaseEvent {
    public eventParameter: EventParams;
    public resource: CdnResource;
    public traceId: string;
}

export class CdnResource {
    public domain: string;
}

export class EventParams {
    public completeTime: Date;
    public createTime: Date;
    public domain: string;
    public objectPath: string[];
    public objectType: string;
    public taskId: number;

    // TODO: get/set operation on completeTime and createTime so we can use them as Date instead of number
}
