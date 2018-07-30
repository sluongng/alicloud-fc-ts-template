import { AliCloudRegion } from "../Regions";

export default abstract class BaseEvent {
    public eventName: string;
    public eventSource: string;
    public eventTime: Date;
    public eventVersion: string;
    public region: AliCloudRegion;
    public userIdentity: UserIdentity;
}

export class UserIdentity {
    public principalId?: string;
    public aliUid?: string;
}
