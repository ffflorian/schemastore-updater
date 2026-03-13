/* eslint-disable */

export type FieldName = string;
export type FieldType =
  | 'INT64'
  | 'INTEGER'
  | 'FLOAT64'
  | 'FLOAT'
  | 'NUMERIC'
  | 'BIGNUMERIC'
  | 'BOOL'
  | 'BOOLEAN'
  | 'STRING'
  | 'BYTES'
  | 'DATE'
  | 'DATETIME'
  | 'TIME'
  | 'TIMESTAMP'
  | 'STRUCT'
  | 'RECORD'
  | 'JSON'
  | 'GEOGRAPHY';
export type FieldMode = 'NULLABLE' | 'REQUIRED' | 'REPEATED';
export type FieldDescription = string;
/**
 * BigQuery lets you specify a table's schema when you load data into a table or when you create an empty table. A table schema is a JSON file.
 */
export type HttpsJsonSchemastoreOrgBigqueryTable = Field[];

export interface Field {
  name: FieldName;
  type: FieldType;
  mode?: FieldMode;
  description?: FieldDescription;
  [k: string]: unknown | undefined;
}
