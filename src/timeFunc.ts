import { FuncCompContext, FuncCompEventTimeTrigger, IFuncCompCallBack } from "alicloud/functionCompute";
import axios from "axios";

export function handler(
    event: FuncCompEventTimeTrigger,
    context: FuncCompContext,
    callback: IFuncCompCallBack,
): void {
    axios.get("https://www.google.com")
        .then((response) => {
            callback(null, response.status);
        })
        .catch((error) => {
            console.error(error);
            callback(error);
        });
}