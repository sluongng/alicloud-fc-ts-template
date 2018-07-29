import axios from "axios";
import { CallBack } from "./models/CallBack";
import Context from "./models/Context";

import CdnEvent from "./models/Events/CdnEvent";
import CronEvent from "./models/Events/CronEvent";
import DataHubEvent from "./models/Events/DataHubEvent";
import GatewayEvent from "./models/Events/GatewayEvent";
import IotEvent from "./models/Events/IotEvent";
import OssEvent from "./models/Events/OssEvent";
import SlsEvent from "./models/Events/SlsEvent";
import TableStoreEvent from "./models/Events/TableStoreEvent";

export function handler(
    event: CdnEvent | CronEvent | DataHubEvent | GatewayEvent | IotEvent | OssEvent | SlsEvent | TableStoreEvent,
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
