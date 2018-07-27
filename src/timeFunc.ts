import axios from "axios";
import { CallBack } from "./models/CallBack";
import Context from "./models/Context";
import { FuncCompEventTimeTrigger } from "./models/Events/CronEvent";

export function handler(
    event: FuncCompEventTimeTrigger,
    context: Context,
    callback: CallBack,
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
