import { AliCloudRegions } from "../Regions";

export default class DataHubEvent {
    public eventSource: string;
    public eventName: string;
    public eventSourceARN: string;
    public region: AliCloudRegions;
    public records: DataHubRecord[];
}

export class DataHubRecord {
    public eventId: string;
    public systemTime: Date;
    public data: string | string[];
}
