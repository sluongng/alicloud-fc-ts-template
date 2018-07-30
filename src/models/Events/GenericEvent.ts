import { AliCloudRegion } from "../Regions";
import BaseEvent from "./BaseEvent";

// BaseEvent contains shared attributes from CdnEvent and CronEvent

export default class GenericEvent<T extends BaseEvent> {
    public events: T[];
}
