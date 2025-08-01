/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * JSON Schema for Starlake Data Pipeline
 */
export type StarlakeDataPipeline = {
  types?: Type[];
  extract?: JDBCSchemas;
  load?: Domain;
  transform?: AutoJobDesc;
  env?: MapString8;
  assertions?: MapString9;
  views?: MapString8;
  /**
   * List of schemas for each dataset in this domain.
   * A domain usually contains multiple schemas. Each schema defining how the contents of the input file should be parsed.
   * See Schema for more details.
   */
  schemas?: Table[];
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
};
export type PrimitiveType =
  | "string"
  | "long"
  | "int"
  | "short"
  | "double"
  | "boolean"
  | "byte"
  | "date"
  | "timestamp"
  | "decimal"
  | "struct";
export type PrimitiveType1 = string;
export type Domain = Domain1 & {
  /**
   * Domain name. Make sure you use a name that may be used as a folder name on the target storage.
   *                    - When using HDFS or Cloud Storage,  files once ingested are stored in a sub-directory named after the domain name.
   *                    - When used with BigQuery, files are ingested and sorted in tables under a dataset named after the domain name.
   */
  name?: string;
  /**
   * If present, the attribute is renamed with this name
   */
  rename?: string;
  metadata?: Metadata;
  /**
   * List of files containing the schemas. Should start with an '_' and be located in the same folder.
   */
  tableRefs?: string[];
  /**
   * List of schemas for each dataset in this domain.
   * A domain usually contains multiple schemas. Each schema defining how the contents of the input file should be parsed.
   * See Schema for more details.
   */
  tables?: Table[];
  /**
   * Domain Description (free text)
   */
  comment?: string;
  /**
   * Moved to metadata section since 0.2.8
   */
  directory?: string;
  /**
   * Moved to metadata section since 0.2.8
   */
  extensions?: string[];
  /**
   * Moved to metadata section since 0.2.8
   */
  ack?: string;
  [k: string]: unknown | undefined;
};
export type Domain1 = {
  [k: string]: unknown | undefined;
};
export type Mode = "FILE" | "STREAM" | "FILE_AND_STREAM";
export type Mode1 = string;
export type Format = "DSV" | "POSITION" | "JSON" | "ARRAY_JSON" | "SIMPLE_JSON" | "XML";
export type Format1 = string;
export type Trim = "LEFT" | "RIGHT" | "BOTH" | "NONE";
export type Trim1 = string;
export type WriteMode = "OVERWRITE" | "APPEND" | "ERROR_IF_EXISTS" | "IGNORE";
export type WriteMode1 = string;
export type Engine = "BQ" | "SPARK";
export type Engine1 = string;

export interface Type {
  name: string;
  primitiveType: PrimitiveType & PrimitiveType1;
  pattern: string;
  /**
   * Useful for timestamp / dates
   */
  zone?: string;
  sample?: string;
  comment?: string;
  indexMapping?: string;
  ddlMapping?: MapString;
  [k: string]: unknown | undefined;
}
/**
 * Configure here the type mapping for each datawarehouse.\nWill be used when inferring DDL from schema.
 */
export interface MapString {
  [k: string]: string | undefined;
}
export interface JDBCSchemas {
  /**
   * List database connections to use to extract the data
   */
  jdbcSchemas?: JDBCSchema[];
  [k: string]: unknown | undefined;
}
export interface JDBCSchema {
  /**
   * Connection name as defined in the connections section of the application.conf file
   */
  connection: string;
  /**
   * Optional catalog name in the source database
   */
  catalog?: string;
  /**
   * Database schema where source tables are located
   */
  schema?: string;
  /**
   * Metadata to use for the generated YAML file.
   */
  template?: string;
  /**
   * List of tables to extract
   */
  tables: JDBCTable[];
  /**
   * One or many of the predefined table types
   */
  tableTypes?: string[];
  [k: string]: unknown | undefined;
}
export interface JDBCTable {
  /**
   * table name. Set to '*' to extract all tables
   */
  name: string;
  /**
   * List of columns to extract. All columns by default.
   */
  columns?: string[];
  [k: string]: unknown | undefined;
}
export interface Metadata {
  /**
   * FILE mode by default.\nFILE and STREAM are the two accepted values.\nFILE is currently the only supported mode.
   */
  mode?: Mode & Mode1;
  /**
   * DSV by default. Supported file formats are :\n- DSV : Delimiter-separated values file. Delimiter value is specified in the "separator" field.\n- POSITION : FIXED format file where values are located at an exact position in each line.\n- SIMPLE_JSON : For optimisation purpose, we differentiate JSON with top level values from JSON\n  with deep level fields. SIMPLE_JSON are JSON files with top level fields only.\n- JSON :  Deep JSON file. Use only when your json documents contain subdocuments, otherwise prefer to\n  use SIMPLE_JSON since it is much faster.\n- XML : XML files
   */
  format?: Format & Format1;
  /**
   * UTF-8 if not specified.
   */
  encoding?: string;
  /**
   * are json objects on a single line or multiple line ? Single by default.  false means single. false also means faster
   */
  multiline?: boolean;
  /**
   * Is the json stored as a single object array ? false by default. This means that by default we have on json document per line.
   */
  array?: boolean;
  /**
   * does the dataset has a header ? true bu default
   */
  withHeader?: boolean;
  /**
   * the values delimiter,  ';' by default value may be a multichar string starting from Spark3
   */
  separator?: string;
  /**
   * The String quote char, '"' by default
   */
  quote?: string;
  /**
   * escaping char '\' by default
   */
  escape?: string;
  /**
   * Write mode, APPEND by default
   */
  write?: ("OVERWRITE" | "APPEND" | "ERROR_IF_EXISTS" | "IGNORE") & string;
  partition?: Partition;
  sink?: Sink;
  /**
   * Pattern to ignore or UDF to apply to ignore some lines
   */
  ignore?: string;
  /**
   * List of attributes to use for clustering
   */
  clustering?: string[];
  xml?: MapString2;
  /**
   * Folder on the local filesystem where incoming files are stored.
   *  Typically, this folder will be scanned periodically to move the dataset to the cluster for ingestion.
   *                      Files located in this folder are moved to the pending folder for ingestion by the "import" command.
   */
  directory?: string;
  /**
   * recognized filename extensions. json, csv, dsv, psv are recognized by default.
   * Only files with these extensions will be moved to the pending folder.
   */
  extensions?: string[];
  /**
   * Ack extension used for each file. ".ack" if not specified.
   * Files are moved to the pending folder only once a file with the same name as the source file and with this extension is present.
   * To move a file without requiring an ack file to be present, set explicitly this property to the empty string value "".
   */
  ack?: string;
  options?: MapString3;
  /**
   * Row validator to use
   */
  validator?: string;
  schedule?: MapString4;
  [k: string]: unknown | undefined;
}
/**
 * Partition columns, no partitioning by default
 */
export interface Partition {
  /**
   * 0.0 means no sampling, > 0  && < 1 means sample dataset, >=1 absolute number of partitions.
   */
  sampling?: number;
  attributes?: string[];
  [k: string]: unknown | undefined;
}
export interface Sink {
  /**
   * Once ingested, files may be sinked to BigQuery, Elasticsearch or any JDBC compliant Database.
   */
  type: ("NONE" | "JBDC" | "BQ" | "ES" | "FS" | "KAFKA") & string;
  /**
   * Once ingested, files may be sinked to BigQuery, Elasticsearch or any JDBC compliant Database.
   */
  name?: string;
  options?: MapString1;
  /**
   * ES: Attribute to use as id of the document. Generated by Elasticsearch if not specified.
   */
  id?: string;
  /**
   * ES or BQ: The timestamp column to use for table partitioning if any. No partitioning by default\nES:Timestamp field format as expected by Elasticsearch ("{beginTs|yyyy.MM.dd}" for example).
   */
  timestamp?: string;
  /**
   * BQ: Database location (EU, US, ...)
   */
  location?: string;
  /**
   * FS or BQ: List of attributes to use for clustering
   */
  clustering?: string[];
  /**
   * BQ: Number of days before this table is set as expired and deleted. Never by default.
   */
  days?: number;
  /**
   * BQ: Should be require a partition filter on every request ? No by default.
   */
  requirePartitionFilter?: boolean;
  /**
   * FS: File format
   */
  format?: string;
  /**
   * FS: File extension
   */
  extension?: string;
  partition?: Partition1;
  /**
   * JDBC: Connection String
   */
  connection?: string;
  /**
   * JDBC: Number of Spark partitions
   */
  partitions?: number;
  /**
   * JDBC: Batch size of each JDBC bulk insert
   */
  batchSize?: number;
  [k: string]: unknown | undefined;
}
/**
 * spark  options to use
 */
export interface MapString1 {
  [k: string]: string | undefined;
}
/**
 * FS or BQ: List of partition attributes
 */
export interface Partition1 {
  /**
   * 0.0 means no sampling, > 0  && < 1 means sample dataset, >=1 absolute number of partitions.
   */
  sampling?: number;
  attributes?: string[];
  [k: string]: unknown | undefined;
}
/**
 * com.databricks.spark.xml options to use (eq. rowTag)
 */
export interface MapString2 {
  [k: string]: string | undefined;
}
/**
 * Options to add to the spark reader
 */
export interface MapString3 {
  [k: string]: string | undefined;
}
/**
 * Scheduler Options
 */
export interface MapString4 {
  [k: string]: string | undefined;
}
export interface Table {
  /**
   * Schema name, must be unique among all the schemas belonging to the same domain.
   *   *                     Will become the hive table name On Premise or BigQuery Table name on GCP.
   */
  name?: string;
  /**
   * If present, the attribute is renamed with this name
   */
  rename?: string;
  /**
   * filename pattern to which this schema must be applied.
   *   *                     This instructs the framework to use this schema to parse any file with a filename that match this pattern.
   */
  pattern?: string;
  /**
   * Attributes parsing rules.
   */
  attributes?: Attribute[];
  metadata?: Metadata1;
  merge?: MergeOptions;
  /**
   * free text
   */
  comment?: string;
  /**
   * Reserved for future use.
   */
  presql?: string[];
  /**
   * Reserved for future use.
   */
  postsql?: string[];
  /**
   * Set of string to attach to this Schema
   */
  tags?: string[];
  /**
   *  Row level security on this schema.
   */
  rls?: RowLevelSecurity[];
  assertions?: MapString5;
  /**
   * List of columns that make up the primary key
   */
  primaryKey?: string[];
  /**
   * Map of rolename -> List[Users].
   */
  acl?: AccessControlEntry[];
  [k: string]: unknown | undefined;
}
export interface Attribute {
  /**
   * Attribute name as defined in the source dataset and as received in the file
   */
  name: string;
  /**
   * semantic type of the attribute
   */
  type: string;
  /**
   * Is it an array ?
   */
  array?: boolean;
  /**
   * Should this attribute always be present in the source
   */
  required?: boolean;
  /**
   * Should this attribute be applied a privacy transformation at ingestion time
   */
  privacy?: string;
  /**
   * free text for attribute description
   */
  comment?: string;
  /**
   * If present, the attribute is renamed with this name
   */
  rename?: string;
  /**
   * If present, what kind of stat should be computed for this field
   */
  metricType?: string;
  /**
   * List of sub-attributes (valid for JSON and XML files only)
   */
  attributes?: Attribute[];
  position?: Position;
  /**
   * Default value for this attribute when it is not present.
   */
  default?: string;
  /**
   * Tags associated with this attribute
   */
  tags?: string[];
  trim?: Trim & Trim1;
  /**
   * Scripted field : SQL request on renamed column
   */
  script?: string;
  /**
   * If this attribute is a foreign key, reference to [domain.]table[.attribute]
   */
  foreignKey?: string;
  /**
   * Should this attribute be ignored on ingestion. Default to false
   */
  ignore?: boolean;
  /**
   * Policy tag to assign to this attribute. Used for column level security
   */
  accessPolicy?: string;
  [k: string]: unknown | undefined;
}
export interface Position {
  first: number;
  last: number;
  [k: string]: unknown | undefined;
}
/**
 * Dataset metadata
 */
export interface Metadata1 {
  /**
   * FILE mode by default.\nFILE and STREAM are the two accepted values.\nFILE is currently the only supported mode.
   */
  mode?: Mode & Mode1;
  /**
   * DSV by default. Supported file formats are :\n- DSV : Delimiter-separated values file. Delimiter value is specified in the "separator" field.\n- POSITION : FIXED format file where values are located at an exact position in each line.\n- SIMPLE_JSON : For optimisation purpose, we differentiate JSON with top level values from JSON\n  with deep level fields. SIMPLE_JSON are JSON files with top level fields only.\n- JSON :  Deep JSON file. Use only when your json documents contain subdocuments, otherwise prefer to\n  use SIMPLE_JSON since it is much faster.\n- XML : XML files
   */
  format?: Format & Format1;
  /**
   * UTF-8 if not specified.
   */
  encoding?: string;
  /**
   * are json objects on a single line or multiple line ? Single by default.  false means single. false also means faster
   */
  multiline?: boolean;
  /**
   * Is the json stored as a single object array ? false by default. This means that by default we have on json document per line.
   */
  array?: boolean;
  /**
   * does the dataset has a header ? true bu default
   */
  withHeader?: boolean;
  /**
   * the values delimiter,  ';' by default value may be a multichar string starting from Spark3
   */
  separator?: string;
  /**
   * The String quote char, '"' by default
   */
  quote?: string;
  /**
   * escaping char '\' by default
   */
  escape?: string;
  /**
   * Write mode, APPEND by default
   */
  write?: ("OVERWRITE" | "APPEND" | "ERROR_IF_EXISTS" | "IGNORE") & string;
  partition?: Partition;
  sink?: Sink;
  /**
   * Pattern to ignore or UDF to apply to ignore some lines
   */
  ignore?: string;
  /**
   * List of attributes to use for clustering
   */
  clustering?: string[];
  xml?: MapString2;
  /**
   * Folder on the local filesystem where incoming files are stored.
   *  Typically, this folder will be scanned periodically to move the dataset to the cluster for ingestion.
   *                      Files located in this folder are moved to the pending folder for ingestion by the "import" command.
   */
  directory?: string;
  /**
   * recognized filename extensions. json, csv, dsv, psv are recognized by default.
   * Only files with these extensions will be moved to the pending folder.
   */
  extensions?: string[];
  /**
   * Ack extension used for each file. ".ack" if not specified.
   * Files are moved to the pending folder only once a file with the same name as the source file and with this extension is present.
   * To move a file without requiring an ack file to be present, set explicitly this property to the empty string value "".
   */
  ack?: string;
  options?: MapString3;
  /**
   * Row validator to use
   */
  validator?: string;
  schedule?: MapString4;
  [k: string]: unknown | undefined;
}
export interface MergeOptions {
  /**
   * list of attributes to join existing with incoming dataset. Use renamed columns here.
   */
  key: string[];
  /**
   * Optional valid sql condition on the incoming dataset. Use renamed column here.
   */
  delete?: string;
  /**
   * Timestamp column used to identify last version, if not specified currently ingested row is considered the last
   */
  timestamp?: string;
  queryFilter?: string;
  [k: string]: unknown | undefined;
}
/**
 * Row level security policy to apply to the output data.
 */
export interface RowLevelSecurity {
  /**
   * This Row Level Security unique name
   */
  name: string;
  /**
   * Description for this access policy
   */
  description?: string;
  /**
   * The condition that goes to the WHERE clause and limit the visible rows.
   */
  predicate?: string;
  /**
   * user / groups / service accounts to which this security level is applied.
   * ex : user:me@mycompany.com,group:group@mycompany.com,serviceAccount:mysa@google-accounts.com
   */
  grants: string[];
  [k: string]: unknown | undefined;
}
/**
 * Assertions to check after Load / Transform has succeeded
 */
export interface MapString5 {
  [k: string]: string | undefined;
}
/**
 * Column level security policy to apply to the attribute.
 */
export interface AccessControlEntry {
  /**
   * This role to give to the granted users
   */
  role: string;
  /**
   * user / groups / service accounts to which this security level is applied.
   * ex : user:me@mycompany.com,group:group@mycompany.com,serviceAccount:mysa@google-accounts.com
   */
  grants: string[];
  [k: string]: unknown | undefined;
}
export interface AutoJobDesc {
  /**
   * Job name. Must be set to the prefix of the filename. [JOBNAME].comet.yml
   */
  name: string;
  tasks: AutoTaskDesc[];
  /**
   * Area where the data is located.\nWhen using the BigQuery engine, the area corresponds to the dataset name we will be working on in this job.\nWhen using the Spark engine, this is folder where the data should be store. Default value is "business"
   */
  area?: string;
  /**
   * output file format when using Spark engine. Ignored for BigQuery. Default value is "parquet"
   */
  format?: string;
  /**
   * When outputting files, should we coalesce it to a single file. Useful when CSV is the output format.
   */
  coalesce?: boolean;
  /**
   * Register UDFs written in this JVM class when using Spark engine.\nRegister UDFs stored at this location when using BigQuery engine
   */
  udf?: string;
  views?: MapString7;
  /**
   * SPARK or BQ. Default value is SPARK.
   */
  engine?: Engine & Engine1;
  [k: string]: unknown | undefined;
}
/**
 * List of transform tasks to execute
 */
export interface AutoTaskDesc {
  /**
   * Main SQL request to execute (do not forget to prefix table names with the database name to avoid conflicts)
   */
  sql?: string;
  /**
   * Output domain in output Area (Will be the Database name in Hive or Dataset in BigQuery)
   */
  domain: string;
  /**
   * Dataset Name in output Area (Will be the Table name in Hive & BigQuery)
   */
  table: string;
  /**
   * Append to or overwrite existing data
   */
  write: WriteMode & WriteMode1;
  /**
   * List of columns used for partitioning the output.
   */
  partition?: string[];
  /**
   * List of SQL requests to executed before the main SQL request is run
   */
  presql?: string[];
  /**
   * List of SQL requests to executed after the main SQL request is run
   */
  postsql?: string[];
  /**
   * Target Area where domain / dataset will be stored.
   */
  area?: string;
  sink?: Sink;
  rls?: RowLevelSecurity[];
  assertions?: MapString6;
  /**
   * When BigQuery, The Spark engine is not required, the whole task is executed inside the datawarehouse, including when data saving in the table.
   */
  engine?: ("BQ" | "SPARK") & string;
  [k: string]: unknown | undefined;
}
/**
 * Assertions to check after Load / Transform has succeeded
 */
export interface MapString6 {
  [k: string]: string | undefined;
}
/**
 * Create temporary views using where the key is the view name and the map the SQL request corresponding to this view using the SQL engine supported syntax.
 */
export interface MapString7 {
  [k: string]: string | undefined;
}
export interface MapString8 {
  [k: string]: string | undefined;
}
/**
 * Assertions library defined as a map name(params) -> sql request that should return 0 record
 */
export interface MapString9 {
  [k: string]: string | undefined;
}
