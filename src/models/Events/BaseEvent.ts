// Base event contains shared attributes from CdnEvent and CronEvent

export default abstract class BaseEvent {
    public eventName: string;
    public eventSource: string;
    public eventTime: Date;
    public eventVersion: string;
    public region: string;
    public userIdentity: UserIdentity;
}

export class UserIdentity {
    public principalId?: string;
    public aliUid?: string;
}
