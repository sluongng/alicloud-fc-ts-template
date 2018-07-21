import axios from 'axios';

class FC_Credentials {
    accessKeyId: string;
    accessKeySecret: string;
    securityToken: string;
}

class FC_Function {
    name: string;
    handler: string;
    memory: number;
    timeout: number;
}

class FC_Service {
    name: string;
    logProject: string;
    logStore: string;
}

class FC_Context {
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
class FC_Event_TimeTrigger {
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