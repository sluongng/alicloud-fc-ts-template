// [CN] Documentation https://help.aliyun.com/document_detail/84386.html

export default class SlsEvent {
    public parameter: Map<string, string>;
    public source: SlsSource;
    public jobName: string;
    public taskId: string;
    public cursorTime: Date;
}

export class SlsSource {
    public endpoint: string;
    public projectName: string;
    public logstoreName: string;
    public shardId: number;
    public beginCursor: string;
    public endCursor: string;
}
