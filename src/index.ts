import axios from 'axios';

interface FC_Credentials {
    accessKeyId: string;
    accessKeySecret: string;
    securityToken: string;
}

interface FC_Function {
    name: string;
    handler: string;
    memory: number;
    timeout: number;
}

interface FC_Service {
    name: string;
    logProject: string;
    logStore: string;
}

interface FC_Context {
    requestId: string;
    region: string;
    accountId: string;

    credentials: FC_Credentials;
    function: FC_Function;
    service: FC_Service;
}

interface FC_CallBack {
    (error: Error): void;
    (error: Error, result: any): void;
}

// Documentation: https://www.alibabacloud.com/help/doc-detail/70140.htm#Timer
interface FC_Event_TimeTrigger {
    triggerName: string;
    triggerTime: string;
    payload: string;
}

export function handler(event: FC_Event_TimeTrigger, context: FC_Context, callback: FC_CallBack): void {

    axios.get("https://www.google.com")
        .then((response) => {
            callback(null, response.status);
        })
        .catch((error) => {
            console.error(error);
            callback(error);
        });
}