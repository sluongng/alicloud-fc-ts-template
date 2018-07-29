// [EN] Documentation: https://www.alibabacloud.com/help/doc-detail/70140.htm#Timer
// [CN] Documentation: https://help.aliyun.com/document_detail/68172.html

export default class CronEvent {
    public triggerName: string;
    public triggerTime: Date;
    public payload: string;
}
