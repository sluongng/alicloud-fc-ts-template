export default class TableStoreEvent {
    public Version: string;
    public Records: TableStoreRecord[];
}

enum TableStoreRecordType {
    "PutRow",
    "UpdateRow",
    "DeleteRow",
}

export class TableStoreRecord {
    public Type: TableStoreRecordType;
    public Info: TableStoreInfo;
    public PrimaryKey: TableStorePrimaryKey[];
    public Columns: TableStoreColumn[];
}

export class TableStoreInfo {
    public Timestamp: Date;
}

export class TableStorePrimaryKey {
    public ColumnName: string;
    public Value: number | string | Blob;
}

enum TableStoreColumnType {
    "Put",
    "DeleteOneVersion",
    "DeleteAllVersions",
}

export class TableStoreColumn {
    public Type: TableStoreColumnType;
    public ColumnName: string;
    public Value: number | string | boolean | Blob;
    public Timestamp: Date;
}
