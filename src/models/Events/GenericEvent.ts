import { AliCloudRegions } from "../Regions";

// BaseEvent contains shared attributes from CdnEvent and CronEvent

export default class GenericEvent<T extends BaseEvent> {
    public events: T[];
}

export abstract class BaseEvent {
    public eventName: string;
    public eventSource: string;
    public eventTime: Date;
    public eventVersion: string;
    public region: AliCloudRegions;
    public userIdentity: UserIdentity;
}

export class UserIdentity {
    public principalId?: string;
    public aliUid?: string;
}
