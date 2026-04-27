/* eslint-disable */

/**
 * JSON Schema for Starlake Data Pipeline
 */
export type StarlakeDataPipeline = StarlakeV1Base & {
  version: 1;
  [k: string]: unknown | undefined;
};
export type StarlakeV1Base = {
  types?: TypeV1[];
  dag?: DagGenerationConfigV1;
  extract?: JDBCSchemasV1 | OpenAPIsV1 | RestAPIsV1;
  load?: DomainV1;
  transform?: AutoJobDescV1;
  task?: AutoTaskDescV12;
  env?: MapString12;
  table?: TableV1;
  refs?: RefV1[];
  application?: AppConfigV1;
  [k: string]: unknown | undefined;
} & StarlakeV1Base1;
export type ConvertibleToString = (string | boolean | number | null) | undefined;
export type JDBCSchemasV1 = ExtractV1Base & {
  /**
   * Describe what to fetch from a database connection. Scope: Schema and Data extraction.
   */
  jdbcSchemas?: JDBCSchemaV1[];
  /**
   * Connection used to read/store audit from it. If not defined, fallbacks to connectionRef. Expected connection name as defined in the connections section of the application.conf file. Scope: Data extraction.
   */
  auditConnectionRef?: string | boolean | number | null;
  output?: OutputV1;
  default?: DefaultJDBCSchemaV1;
  [k: string]: unknown | undefined;
};
export type AttributeNameIsSanitizedAndStoredAsRenamePropertyWhenAttributeSNameDiffersFromSanitizedName = 'ON_LOAD';
export type JDBCSchemaV1 = JDBCSchemaBase & {
  /**
   * List of tables to extract. Scope: Schema and Data extraction.
   */
  tables?: JDBCTableV1[];
  /**
   * List of tables to exclude. Applied on tables list. Scope: Schema and Data extraction.
   */
  exclude?: ConvertibleToString | undefined[];
  [k: string]: unknown | undefined;
};
/**
 * Defines OpenAPI schemas extraction
 */
export type OpenAPIsV1 = ExtractV1Base & {
  openAPI: OpenAPIV1;
  [k: string]: unknown | undefined;
};
export type RetainOperationOfTypePOSTInOpenAPI = 'POST';
export type KeepPropertiesOfTypeObjectOrArray = 'ALL';
export type KeepPropertiesOfTypeObjectDonTDiveOnArrayType = 'OBJECT';
export type KeepPropertiesOfTypeArrayIfEncountersAnObjectDiveDeeper = 'ARRAY';
/**
 * Defines REST API data extraction
 */
export type RestAPIsV1 = ExtractV1Base & {
  restAPI: RestAPIV1;
  [k: string]: unknown | undefined;
};
export type StarlakeV1Base1 = {
  [k: string]: unknown | undefined;
};

/**
 * Custom type definition. Custom types are defined in the types/types.sl.yml file
 */
export interface TypeV1 {
  /**
   * unique id for this type
   */
  name: string | boolean | number | null;
  /**
   * Regex used to validate the input field
   */
  pattern: string | boolean | number | null;
  /**
   * To what primitive type should this type be mapped.
   *  This is the memory representation of the type, When saving, this primitive type is mapped to the database specific type. Default: string
   */
  primitiveType?: (string | boolean | number | null) &
    (
      | 'string'
      | 'long'
      | 'int'
      | 'short'
      | 'double'
      | 'boolean'
      | 'byte'
      | 'date'
      | 'timestamp'
      | 'decimal'
      | 'variant'
      | 'struct'
    );
  /**
   * Context-specific parsing configuration:
   * - For double: locale for decimal parsing (e.g., 'fr_FR' for comma as decimal separator)
   * - For decimal: precision and scale as 'precision,scale' (e.g., '38,9')
   * - For timestamp: timezone (e.g., 'UTC', 'Europe/Paris')
   */
  zone?: string | boolean | number | null;
  /**
   * This field makes sure that the pattern matches the value you want to match. This will be checked on startup
   */
  sample?: string | boolean | number | null;
  /**
   * Describes this type
   */
  comment?: string | boolean | number | null;
  ddlMapping?: MapString;
  [k: string]: unknown | undefined;
}
/**
 * Configure here the type mapping for each datawarehouse.\nWill be used when inferring DDL from schema.
 */
export interface MapString {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Dag configuration.
 */
export interface DagGenerationConfigV1 {
  /**
   * Dag config description
   */
  comment?: string | boolean | number | null;
  /**
   * Dag template to use for this config. Usually a .py.j2 file
   */
  template: string | boolean | number | null;
  /**
   * {schedule}, {domain}, {table} in the file name are used for DAG generation purposes
   */
  filename: string | boolean | number | null;
  options?: MapString1;
  [k: string]: unknown | undefined;
}
/**
 * DAG generation options
 */
export interface MapString1 {
  [k: string]: ConvertibleToString | undefined;
}
export interface ExtractV1Base {
  sanitizeAttributeName?: (
    | 'ON_EXTRACT'
    | AttributeNameIsSanitizedAndStoredAsRenamePropertyWhenAttributeSNameDiffersFromSanitizedName
  ) &
    string;
  /**
   * With OpenAPI: connection used to reference OpenAPI spec. Supports file (local, storage) or public http url. With others, connection used to retrieve schema and then data. If not defined, fallback to application settings.
   */
  connectionRef?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
export interface JDBCSchemaBase {
  /**
   * Optional catalog name in the source database. Scope: Schema and Data extraction.
   */
  catalog?: string | boolean | number | null;
  /**
   * Database schema where source tables are located. For mysql use this instead of catalog. Scope: Schema and Data extraction.
   */
  schema?: string | boolean | number | null;
  /**
   * Query template used to retrieve table remarks. Available variables: catalog, schema, table. Scope: Schema extraction.
   */
  tableRemarks?: string | boolean | number | null;
  /**
   * Query template used to retrieve all columns' remark of a table. Available variables: catalog, schema, table. Scope: Schema extraction.
   */
  columnRemarks?: string | boolean | number | null;
  /**
   * One or many of the predefined table types. Scope: Schema and Data extraction.
   */
  tableTypes?: ((string | boolean | number | null) &
    (
      | ((string | boolean | number | null) &
          (
            | 'TABLE'
            | 'VIEW'
            | 'SYSTEM TABLE'
            | 'MATERIALIZED VIEW'
            | 'GLOBAL TEMPORARY'
            | 'LOCAL TEMPORARY'
            | 'ALIAS'
            | 'SYNONYM'
          ))
      | (string | boolean | number | null)
    ))[];
  /**
   * Template used during schema extraction in order to generate load files (domain and tables). Scope: Schema extraction.
   */
  template?: string | boolean | number | null;
  /**
   * Pattern template used to define load tables' file pattern. Available variables: catalog, schema, table. Scope: Schema extraction.
   */
  pattern?: string | boolean | number | null;
  /**
   * Trim strategies applied to numeric fields set on load table's definition. Scope: Schema extraction.
   */
  numericTrim?: (string | boolean | number | null) & ('LEFT' | 'RIGHT' | 'BOTH' | 'NONE');
  /**
   * Column to use in order to parallelize data extraction. Scope: Data extraction.
   */
  partitionColumn?: string | boolean | number | null;
  /**
   * Number of data partitions to create. Scope: Data extraction.
   */
  numPartitions?: number;
  connectionOptions?: MapString2;
  /**
   * Number of rows to be fetched from the database when additional rows are needed. By default, most JDBC drivers use a fetch size of 10, so if you are reading 1000 objects, increasing the fetch size to 256 can significantly reduce the time required to fetch the query's results. The optimal fetch size is not always obvious. Scope: Data extraction.
   */
  fetchSize?: number;
  /**
   * SQL template used on partition column's of type String. Some implementations are already defined, see ai.starlake.extract.JdbcDbUtils.getStringPartitionFunc. Mandatory variables: col, nb_partitions. Scope: Data extraction.
   */
  stringPartitionFunc?: string | boolean | number | null;
  /**
   * Define if we should fetch the entire table's or not. If not, maximum value of partitionColumn seen during last extraction is used in order to fetch incremental data. Scope: Data extraction.
   */
  fullExport?: boolean;
  /**
   * Sanitize domain's name by keeping alpha numeric characters only. Scope: Schema and Data extraction.
   */
  sanitizeName?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Options to set on database connection if no connectionRef is provided. Scope: Data extraction.
 */
export interface MapString2 {
  [k: string]: ConvertibleToString | undefined;
}
export interface JDBCTableV1 {
  /**
   * Table name. Set to '*' to extract all tables. Scope: Schema and Data extraction.
   */
  name?: string | boolean | number | null;
  /**
   * Optional SQL SELECT statement used to extract schema and data. Ignore columns attribute if set. Generated by default
   */
  sql?: string | boolean | number | null;
  /**
   * List of columns to extract. All columns by default.
   *
   * @minItems 1
   */
  columns?: [
    (
      | (string | boolean | number | number | null)
      | {
          /**
           * Column name to extract. Scope: Schema and Data extraction.
           */
          name: string | boolean | number | number | null;
          /**
           * Rename database column name. Scope: Schema and Data extraction.
           */
          rename?: string | boolean | number | number | null;
          [k: string]: unknown | undefined;
        }
    ),
    ...(
      | (string | boolean | number | number | null)
      | {
          /**
           * Column name to extract. Scope: Schema and Data extraction.
           */
          name: string | boolean | number | number | null;
          /**
           * Rename database column name. Scope: Schema and Data extraction.
           */
          rename?: string | boolean | number | number | null;
          [k: string]: unknown | undefined;
        }
    )[]
  ];
  /**
   * Column to use in order to parallelize data extraction. Scope: Data extraction.
   */
  partitionColumn?: string | boolean | number | null;
  /**
   * Number of data partitions to create. Scope: Data extraction.
   */
  numPartitions?: number;
  connectionOptions?: MapString3;
  /**
   * Number of rows to be fetched from the database when additional rows are needed. By default, most JDBC drivers use a fetch size of 10, so if you are reading 1000 objects, increasing the fetch size to 256 can significantly reduce the time required to fetch the query's results. The optimal fetch size is not always obvious. Scope: Data extraction.
   */
  fetchSize?: number;
  /**
   * If true, extract all data from the table. Scope: Data extraction.
   */
  fullExport?: boolean;
  /**
   * Optional SQL WHERE clause to filter data. This is used to exclude part of the data. This is not related to incremental extraction which is handled automatically by Starlake. Scope: Data extraction.
   */
  filter?: string | boolean | number | null;
  /**
   * SQL template used on partition column's of type String. Some implementations are already defined, see ai.starlake.extract.JdbcDbUtils.getStringPartitionFunc. Mandatory variables: col, nb_partitions. Scope: Data extraction.
   */
  stringPartitionFunc?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * Options to set on database connection, only when connectionRef is not defined. Scope: Data extraction.
 */
export interface MapString3 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Define the output format of data extraction. Scope: Data extraction.
 */
export interface OutputV1 {
  /**
   * Specifies encoding (charset) of saved CSV files.
   */
  encoding?: string | boolean | number | null;
  /**
   * If true, writes the names of columns as the first line.
   */
  withHeader?: boolean;
  /**
   * Character used as a separator for each field and value.
   */
  separator?: string | boolean | number | null;
  /**
   * Character used for escaping quoted values where the separator can be part of the value.
   */
  quote?: string | boolean | number | null;
  /**
   * Character used for escaping quotes inside an already quoted value.
   */
  escape?: string | boolean | number | null;
  /**
   * String representation of a null value.
   */
  nullValue?: string | boolean | number | null;
  /**
   * Java date pattern to apply on date object. Have a look at https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
   */
  datePattern?: string | boolean | number | null;
  /**
   * Java timestamp pattern to apply on timestamp object. Have a look at https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
   */
  timestampPattern?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration merged into each of the jdbcSchemas defined in the YAML file. Scope: Schema and Data extraction.
 */
export interface DefaultJDBCSchemaV1 {
  /**
   * Optional catalog name in the source database. Scope: Schema and Data extraction.
   */
  catalog?: string | boolean | number | null;
  /**
   * Database schema where source tables are located. For mysql use this instead of catalog. Scope: Schema and Data extraction.
   */
  schema?: string | boolean | number | null;
  /**
   * Query template used to retrieve table remarks. Available variables: catalog, schema, table. Scope: Schema extraction.
   */
  tableRemarks?: string | boolean | number | null;
  /**
   * Query template used to retrieve all columns' remark of a table. Available variables: catalog, schema, table. Scope: Schema extraction.
   */
  columnRemarks?: string | boolean | number | null;
  /**
   * One or many of the predefined table types. Scope: Schema and Data extraction.
   */
  tableTypes?: ((string | boolean | number | null) &
    (
      | ((string | boolean | number | null) &
          (
            | 'TABLE'
            | 'VIEW'
            | 'SYSTEM TABLE'
            | 'MATERIALIZED VIEW'
            | 'GLOBAL TEMPORARY'
            | 'LOCAL TEMPORARY'
            | 'ALIAS'
            | 'SYNONYM'
          ))
      | (string | boolean | number | null)
    ))[];
  /**
   * Template used during schema extraction in order to generate load files (domain and tables). Scope: Schema extraction.
   */
  template?: string | boolean | number | null;
  /**
   * Pattern template used to define load tables' file pattern. Available variables: catalog, schema, table. Scope: Schema extraction.
   */
  pattern?: string | boolean | number | null;
  /**
   * Trim strategies applied to numeric fields set on load table's definition. Scope: Schema extraction.
   */
  numericTrim?: (string | boolean | number | null) & ('LEFT' | 'RIGHT' | 'BOTH' | 'NONE');
  /**
   * Column to use in order to parallelize data extraction. Scope: Data extraction.
   */
  partitionColumn?: string | boolean | number | null;
  /**
   * Number of data partitions to create. Scope: Data extraction.
   */
  numPartitions?: number;
  connectionOptions?: MapString2;
  /**
   * Number of rows to be fetched from the database when additional rows are needed. By default, most JDBC drivers use a fetch size of 10, so if you are reading 1000 objects, increasing the fetch size to 256 can significantly reduce the time required to fetch the query's results. The optimal fetch size is not always obvious. Scope: Data extraction.
   */
  fetchSize?: number;
  /**
   * SQL template used on partition column's of type String. Some implementations are already defined, see ai.starlake.extract.JdbcDbUtils.getStringPartitionFunc. Mandatory variables: col, nb_partitions. Scope: Data extraction.
   */
  stringPartitionFunc?: string | boolean | number | null;
  /**
   * Define if we should fetch the entire table's or not. If not, maximum value of partitionColumn seen during last extraction is used in order to fetch incremental data. Scope: Data extraction.
   */
  fullExport?: boolean;
  /**
   * Sanitize domain's name by keeping alpha numeric characters only. Scope: Schema and Data extraction.
   */
  sanitizeName?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Describe how to extract domains and tables from OpenAPI spec
 */
export interface OpenAPIV1 {
  /**
   * Common base path used to remove from path in order to generate final table name.
   */
  basePath?: string | boolean | number | null;
  formatTypeMapping?: MapString4;
  /**
   * Describe what to fetch from data connection. Scope: Schema and Data extraction.
   *
   * @minItems 1
   */
  domains?: [OpenAPIDomainV1, ...OpenAPIDomainV1[]];
  [k: string]: unknown | undefined;
}
/**
 * mapping a format used for string and the starlake attribute type
 */
export interface MapString4 {
  [k: string]: ConvertibleToString | undefined;
}
export interface OpenAPIDomainV1 {
  /**
   * Domain name used to group tables extracted from openAPI spec
   */
  name: string | boolean | number | number | null;
  /**
   * Common base path used to remove from path in order to generate final table name.
   */
  basePath?: string | boolean | number | number | null;
  schemas?: OpenAPIObjectSchemasV1;
  /**
   * Describe what to fetch from data connection. Scope: Schema and Data extraction.
   *
   * @minItems 1
   */
  routes?: [OpenAPIRoutesV1, ...OpenAPIRoutesV1[]];
  [k: string]: unknown | undefined;
}
/**
 * Describe what to fetch from data connection. Scope: Schema and Data extraction.
 */
export interface OpenAPIObjectSchemasV1 {
  /**
   * List of regex used to include open api schemas (#/components/schemas). Defaults to ['.*']. 'Includes' is evaluated before 'excludes'
   *
   * @minItems 1
   */
  include?: [ConvertibleToString | undefined, ...(ConvertibleToString | undefined)[]];
  /**
   * List of regex used to exclude open api schemas (#/components/schemas). Defaults to [].
   */
  exclude?: ConvertibleToString | undefined[];
  [k: string]: unknown | undefined;
}
export interface OpenAPIRoutesV1 {
  /**
   * List of regex used to include open api path '.*'
   *
   * @minItems 1
   */
  paths?: [ConvertibleToString | undefined, ...(ConvertibleToString | undefined)[]];
  /**
   * Force all routes matching the pattern to be saved as the given name if they don't conflict
   */
  as?: string | boolean | number | number | null;
  /**
   * List of operations to retrieve schema from. Defaults to ['GET']. Supported values are GET and POST.
   *
   * @minItems 1
   */
  operations?: ['GET' | RetainOperationOfTypePOSTInOpenAPI, ...('GET' | RetainOperationOfTypePOSTInOpenAPI)[]];
  /**
   * List of regex used to excludes api path []
   *
   * @minItems 1
   */
  exclude?: [ConvertibleToString | undefined, ...(ConvertibleToString | undefined)[]];
  /**
   * List of regex used to excludes fields. Fields and their subfields are separated by _.
   *
   * @minItems 1
   */
  excludeFields?: [ConvertibleToString | undefined, ...(ConvertibleToString | undefined)[]];
  explode?: OpenAPIRouteObjectExplosionV1;
  [k: string]: unknown | undefined;
}
/**
 * Explodes on route's object and split the schema.
 */
export interface OpenAPIRouteObjectExplosionV1 {
  /**
   * Explode route's object to more object definition. Use object's path with route path as final name. Defaults to ALL
   */
  on?: (
    | KeepPropertiesOfTypeObjectOrArray
    | KeepPropertiesOfTypeObjectDonTDiveOnArrayType
    | KeepPropertiesOfTypeArrayIfEncountersAnObjectDiveDeeper
  ) &
    string;
  /**
   * filter out on field path. Each field is separated by _. Default to []
   */
  exclude?: ConvertibleToString | undefined[];
  /**
   * Regex applied on object path. If matches, use the given name otherwise fallback to route_path + object path as final name
   */
  rename?: {
    [k: string]: ConvertibleToString | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Describe how to extract data from REST API endpoints
 */
export interface RestAPIV1 {
  /**
   * Base URL of the REST API (e.g. https://api.example.com/v2).
   */
  baseUrl: string | boolean | number | null;
  auth?: RestAPIAuthV1;
  headers?: MapString5;
  rateLimit?: RestAPIRateLimitV1;
  defaults?: RestAPIDefaultsV1;
  /**
   * List of API endpoints to extract data from.
   *
   * @minItems 1
   */
  endpoints: [RestAPIEndpointV1, ...RestAPIEndpointV1[]];
  [k: string]: unknown | undefined;
}
/**
 * Authentication configuration.
 */
export interface RestAPIAuthV1 {
  /**
   * Authentication type
   */
  type: 'bearer' | 'api_key' | 'basic' | 'oauth2_client_credentials';
  /**
   * Bearer token value. Supports {{ENV_VAR}} syntax.
   */
  token?: string | boolean | number | null;
  /**
   * API key value for api_key auth.
   */
  key?: string | boolean | number | null;
  /**
   * Header name for api_key auth. Defaults to X-API-Key.
   */
  header?: string | boolean | number | null;
  /**
   * Username for basic auth.
   */
  username?: string | boolean | number | null;
  /**
   * Password for basic auth.
   */
  password?: string | boolean | number | null;
  /**
   * Token endpoint URL for OAuth2 client credentials.
   */
  tokenUrl?: string | boolean | number | null;
  /**
   * Client ID for OAuth2.
   */
  clientId?: string | boolean | number | null;
  /**
   * Client secret for OAuth2.
   */
  clientSecret?: string | boolean | number | null;
  /**
   * OAuth2 scope (optional).
   */
  scope?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * Global HTTP headers applied to all requests.
 */
export interface MapString5 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Rate limiting configuration.
 */
export interface RestAPIRateLimitV1 {
  /**
   * Maximum number of requests per second. Defaults to 10.
   */
  requestsPerSecond?: number;
  [k: string]: unknown | undefined;
}
/**
 * Default settings applied to all endpoints.
 */
export interface RestAPIDefaultsV1 {
  pagination?: RestAPIPaginationV1;
  headers?: MapString6;
  queryParams?: MapString7;
  [k: string]: unknown | undefined;
}
/**
 * Default pagination strategy for all endpoints.
 */
export interface RestAPIPaginationV1 {
  /**
   * Pagination strategy type
   */
  type: 'offset' | 'cursor' | 'link_header' | 'page_number';
  /**
   * Query parameter name for page size limit.
   */
  limitParam?: string | boolean | number | null;
  /**
   * Query parameter name for offset (offset pagination).
   */
  offsetParam?: string | boolean | number | null;
  /**
   * Query parameter name for cursor value (cursor pagination).
   */
  cursorParam?: string | boolean | number | null;
  /**
   * JSONPath to extract cursor from response (e.g. $.meta.next_cursor).
   */
  cursorPath?: string | boolean | number | null;
  /**
   * Query parameter name for page number (page_number pagination).
   */
  pageParam?: string | boolean | number | null;
  /**
   * Number of records per page. Defaults to 100.
   */
  pageSize?: number;
  [k: string]: unknown | undefined;
}
/**
 * Default headers applied to all endpoints.
 */
export interface MapString6 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Default query parameters applied to all endpoints.
 */
export interface MapString7 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * REST API endpoint definition for data extraction
 */
export interface RestAPIEndpointV1 {
  /**
   * API endpoint path (e.g. /api/v2/customers).
   */
  path: string | boolean | number | number | null;
  /**
   * HTTP method. Defaults to GET.
   */
  method?: 'GET' | 'POST';
  /**
   * Table name override. If not set, derived from the last path segment.
   */
  as?: string | boolean | number | number | null;
  /**
   * Domain name to group this endpoint under. Defaults to 'default'.
   */
  domain?: string | boolean | number | number | null;
  headers?: MapString8;
  queryParams?: MapString9;
  /**
   * JSON request body for POST endpoints.
   */
  requestBody?: string | boolean | number | number | null;
  pagination?: RestAPIPaginationV11;
  /**
   * JSONPath to the data array in the response (e.g. $.data or $.results).
   */
  responsePath?: string | boolean | number | number | null;
  /**
   * Field name used for incremental extraction. The max value is saved between runs.
   */
  incrementalField?: string | boolean | number | number | null;
  /**
   * Child endpoints that depend on parent records. Use {parent.fieldName} in path.
   */
  children?: RestAPIEndpointV1[];
  /**
   * List of regex patterns to exclude fields from extraction.
   */
  excludeFields?: ConvertibleToString | undefined[];
  [k: string]: unknown | undefined;
}
/**
 * Additional HTTP headers for this endpoint.
 */
export interface MapString8 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Additional query parameters for this endpoint.
 */
export interface MapString9 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Pagination strategy for this endpoint. Overrides defaults.
 */
export interface RestAPIPaginationV11 {
  /**
   * Pagination strategy type
   */
  type: 'offset' | 'cursor' | 'link_header' | 'page_number';
  /**
   * Query parameter name for page size limit.
   */
  limitParam?: string | boolean | number | null;
  /**
   * Query parameter name for offset (offset pagination).
   */
  offsetParam?: string | boolean | number | null;
  /**
   * Query parameter name for cursor value (cursor pagination).
   */
  cursorParam?: string | boolean | number | null;
  /**
   * JSONPath to extract cursor from response (e.g. $.meta.next_cursor).
   */
  cursorPath?: string | boolean | number | null;
  /**
   * Query parameter name for page number (page_number pagination).
   */
  pageParam?: string | boolean | number | null;
  /**
   * Number of records per page. Defaults to 100.
   */
  pageSize?: number;
  [k: string]: unknown | undefined;
}
/**
 * A schema in JDBC database or a folder in HDFS or a dataset in BigQuery.
 */
export interface DomainV1 {
  /**
   * Domain name. Make sure you use a name that may be used as a folder name on the target storage.
   *                    - When using HDFS or Cloud Storage,  files once ingested are stored in a sub-directory named after the domain name.
   *                    - When used with BigQuery, files are ingested and sorted in tables under a dataset named after the domain name.
   */
  name?: string | boolean | number | null;
  metadata?: MetadataV1;
  /**
   * Domain Description (free text)
   */
  comment?: string | boolean | number | null;
  /**
   * Set of string to attach to this domain
   */
  tags?: ConvertibleToString | undefined[];
  /**
   * If present, the domain is renamed to this name in the target database
   */
  rename?: string | boolean | number | null;
  /**
   * Output Database (refer to a project id in BigQuery). Default to SL_DATABASE env var if set.
   */
  database?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
export interface MetadataV1 {
  /**
   * DSV by default. Supported file formats are :\n- DSV : Delimiter-separated values file. Delimiter value is specified in the "separator" field.\n- POSITION : FIXED format file where values are located at an exact position in each line.\n- JSON_FLAT : For optimisation purpose, we differentiate JSON with top level values from JSON\n  with deep level fields. JSON_FLAT are JSON files with top level fields only.\n- JSON :  Deep JSON file. Use only when your json documents contain sub-documents, otherwise prefer to\n  use JSON_FLAT since it is much faster.\n- XML : XML files
   */
  format?: (string | boolean | number | null) &
    (
      | 'DATAFRAME'
      | 'DSV'
      | 'POSITION'
      | 'JSON'
      | 'JSON_ARRAY'
      | 'JSON_FLAT'
      | 'XML'
      | 'TEXT_XML'
      | 'KAFKA'
      | 'KAFKASTREAM'
      | 'GENERIC'
      | 'PARQUET'
    );
  /**
   * UTF-8 if not specified.
   */
  encoding?: string | boolean | number | null;
  /**
   * are json objects on a single line or multiple line ? Single by default.  false means single. false also means faster
   */
  multiline?: boolean;
  /**
   * Is the json stored as a single object array ? false by default. This means that by default we have on json document per line.
   */
  array?: boolean;
  /**
   * does the dataset has a header ? true by default
   */
  withHeader?: boolean;
  /**
   * the values delimiter,  ';' by default value may be a multichar string starting from Spark3
   */
  separator?: string | boolean | number | null;
  /**
   * The String quote char, '"' by default
   */
  quote?: string | boolean | number | null;
  /**
   * escaping char '\' by default
   */
  escape?: string | boolean | number | null;
  sink?: AllSinksV1;
  /**
   * Folder on the local filesystem where incoming files are stored.
   *  Typically, this folder will be scanned periodically to move the dataset to the cluster for ingestion.
   *                      Files located in this folder are moved to the stage folder for ingestion by the "import" command.
   */
  directory?: string | boolean | number | null;
  /**
   * recognized filename extensions. json, csv, dsv, psv are recognized by default.
   * Only files with these extensions will be moved to the stage folder.
   */
  extensions?: ConvertibleToString | undefined[];
  /**
   * Ack extension used for each file. ".ack" if not specified.
   * Files are moved to the stage folder only once a file with the same name as the source file and with this extension is present.
   * To move a file without requiring an ack file to be present, set explicitly this property to the empty string value "".
   */
  ack?: string | boolean | number | null;
  options?: MapString11;
  /**
   * Loader to use, 'spark' or 'native'. Default to 'spark' of SL_LOADER env variable is set to 'native'
   */
  loader?: string | boolean | number | null;
  /**
   * Treat empty columns as null in DSV files. Default to false
   */
  emptyIsNull?: boolean;
  /**
   * Cron expression to use for this domain/table
   */
  dagRef?: string | boolean | number | null;
  freshness?: FreshnessV1;
  /**
   * Treat a specific input string as a null value indicator
   */
  nullValue?: string | boolean | number | null;
  /**
   * Cron expression to use for this domain/table
   */
  schedule?: string | boolean | number | null;
  writeStrategy?: WriteStrategyV1;
  [k: string]: unknown | undefined;
}
export interface AllSinksV1 {
  /**
   * JDBC: Connection String
   */
  connectionRef?: string | boolean | number | null;
  /**
   * FS or BQ: List of attributes to use for clustering
   */
  clustering?: ConvertibleToString | undefined[];
  /**
   * BQ: Number of days before this table is set as expired and deleted. Never by default.
   */
  days?: number;
  /**
   * BQ: Should be require a partition filter on every request ? No by default.
   */
  requirePartitionFilter?: boolean;
  /**
   * Should we materialize as a table or as a view when saving the results ? TABLE by default.
   */
  materializedView?: (string | boolean | number | null) & ('TABLE' | 'VIEW' | 'MATERIALIZED_VIEW' | 'HYBRID');
  /**
   * BQ: Enable automatic refresh of materialized view ? false by default.
   */
  enableRefresh?: boolean;
  /**
   * BQ: Refresh interval in milliseconds. Default to BigQuery default value
   */
  refreshIntervalMs?: number;
  /**
   * ES: Attribute to use as id of the document. Generated by Elasticsearch if not specified.
   */
  id?: string | boolean | number | null;
  /**
   * FS: File format
   */
  format?: string | boolean | number | null;
  /**
   * FS: File extension
   */
  extension?: string | boolean | number | null;
  /**
   * columns to use for sharding. table will be named table_{sharding(0)}_{sharding(1)}
   */
  sharding?: ConvertibleToString | undefined[];
  /**
   * FS or BQ: List of partition attributes
   */
  partition?: string[];
  /**
   * When outputting files, should we coalesce it to a single file. Useful when CSV is the output format.
   */
  coalesce?: boolean;
  /**
   * Optional path attribute if you want to save the file outside of the default location (datasets folder)
   */
  path?: string;
  options?: MapString10;
  [k: string]: unknown | undefined;
}
/**
 * Additional Spark writer options (e.g., compression, partitionOverwriteMode)
 */
export interface MapString10 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Options to add to the spark reader
 */
export interface MapString11 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Configure freshness checks on this dataset
 */
export interface FreshnessV1 {
  /**
   * How old may be the data before a warning is raised. Use syntax like '3 day' or '2 hour' or '30 minute'
   */
  warn?: string | boolean | number | null;
  /**
   * How old may be the data before an error is raised. Use syntax like '3 day' or '2 hour' or '30 minute'
   */
  error?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * Write strategy to use when writing the data. Default is APPEND
 */
export interface WriteStrategyV1 {
  /**
   * Write strategy type: OVERWRITE, APPEND, UPSERT_BY_KEY, UPSERT_BY_KEY_AND_TIMESTAMP, DELETE_THEN_INSERT, SCD2, or OVERWRITE_BY_PARTITION
   */
  type?: (string | boolean | number | null) &
    (
      | ((string | boolean | number | null) &
          (
            | 'OVERWRITE'
            | 'APPEND'
            | 'UPSERT_BY_KEY'
            | 'UPSERT_BY_KEY_AND_TIMESTAMP'
            | 'DELETE_THEN_INSERT'
            | 'SCD2'
            | 'OVERWRITE_BY_PARTITION'
          ))
      | (string | boolean | number | null)
    );
  /**
   * Map of connection type to write strategy. Allows different strategies per target database
   */
  types?: {
    /**
     * Write strategy type including custom strategies. Allows predefined strategies or custom strategy names
     */
    [k: string]:
      | (
          | (string | boolean | number | null)
          | (undefined &
              (
                | ((string | boolean | number | null) &
                    (
                      | 'OVERWRITE'
                      | 'APPEND'
                      | 'UPSERT_BY_KEY'
                      | 'UPSERT_BY_KEY_AND_TIMESTAMP'
                      | 'DELETE_THEN_INSERT'
                      | 'SCD2'
                      | 'OVERWRITE_BY_PARTITION'
                    ))
                | (string | boolean | number | null)
              ))
          | undefined
        )
      | undefined;
  };
  /**
   * List of columns to use as key(s) for the target table.
   *   This is used to update existing records in the target table.
   */
  key?: ConvertibleToString | undefined[];
  /**
   * timestamp column to use for the target table.
   *  This is used to update existing records in the target table by strategies UPSERT_BY_KEY_AND_TIMESTAMP and SCD2.
   */
  timestamp?: string | boolean | number | null;
  /**
   * SQL WHERE clause filter applied when reading from the target table during merge operations
   */
  queryFilter?: string | boolean | number | null;
  /**
   * Merge strategy: TARGET or SOURCE_AND_TARGET.
   *   TARGET means that the merge operation will be applied on the target table only.
   *   SOURCE_AND_TARGET means that the merge operation will be applied on the incoming source data and target tables.
   */
  on?: 'TARGET' | 'SOURCE_AND_TARGET';
  /**
   * column name to use for the start timestamp.
   *  This is used to update existing records in the target table by strategy SCD2.
   */
  startTs?: string | boolean | number | null;
  /**
   * column name to use for the end timestamp.
   *  This is used to update existing records in the target table by strategy SCD2.
   */
  endTs?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
export interface AutoJobDescV1 {
  /**
   * Optional name. If not specified, the name of the file without the extension is used.
   */
  name?: string | boolean | number | null;
  tasks?: AutoTaskDescV1[];
  /**
   * Optional description.
   */
  comment?: string | boolean | number | null;
  default?: AutoTaskDescV11;
  [k: string]: unknown | undefined;
}
/**
 * List of transform tasks to execute
 */
export interface AutoTaskDescV1 {
  /**
   * Task name. If not specified, defaults to the filename without extension
   */
  name?: string | boolean | number | null;
  /**
   * Used internally. The SQL should always be written in a separate file named after the transform name. If the transform is named transf.sl.yml then then the sql should be stored in the file transf.sql. It will contain the main SQL request to execute
   */
  sql?: string | boolean | number | null;
  /**
   * attach streams to task (Snowflake only)
   */
  streams?: ConvertibleToString | undefined[];
  /**
   * List of columns that make up the primary key for the output table
   */
  primaryKey?: ConvertibleToString | undefined[];
  /**
   * Output Database (refer to a project id in BigQuery). Default to SL_DATABASE env var if set.
   */
  database?: string | boolean | number | null;
  /**
   * Output domain in output Area (Will be the Database name in Hive or Dataset in BigQuery)
   */
  domain?: string | boolean | number | null;
  /**
   * Dataset Name in output Area (Will be the Table name in Hive & BigQuery)
   */
  table?: string | boolean | number | null;
  /**
   * List of columns used for partitioning the output.
   */
  partition?: ConvertibleToString | undefined[];
  /**
   * List of SQL requests to executed before the main SQL request is run
   */
  presql?: ConvertibleToString | undefined[];
  /**
   * List of SQL requests to executed after the main SQL request is run
   */
  postsql?: ConvertibleToString | undefined[];
  sink?: AllSinksV1;
  rls?: RowLevelSecurityV1[];
  /**
   * Expectations to check after Load / Transform has succeeded
   */
  expectations?: ExpectationItemV1[];
  /**
   * Map of rolename -> List[Users].
   */
  acl?: AccessControlEntryV1[];
  /**
   * Output table description
   */
  comment?: string | boolean | number | null;
  freshness?: FreshnessV11;
  /**
   * Attributes
   */
  attributes?: AttributeV1[];
  /**
   * Python script URI to execute instead of the SQL request
   */
  python?: string | boolean | number | null;
  /**
   * Set of string to attach to the output table
   */
  tags?: ConvertibleToString | undefined[];
  writeStrategy?: WriteStrategyV11;
  /**
   * Cron expression to use for this task
   */
  schedule?: string | boolean | number | null;
  /**
   * Cron expression to use for this domain/table
   */
  dagRef?: string | boolean | number | null;
  /**
   * Number of milliseconds before a communication timeout.
   */
  taskTimeoutMs?: number;
  /**
   * Should we parse this SQL make it update the table according to write strategy or just execute it ?
   */
  parseSQL?: boolean;
  /**
   * Used when the default connection ref present in the application.sl.yml file is not the one to use to run the SQL request for this task.
   */
  connectionRef?: string;
  /**
   * Schema synchronization strategy: NONE (no sync), ADD (add missing columns), or ALL (full sync with source)
   */
  syncStrategy?: (string | boolean | number | null) & ('NONE' | 'ADD' | 'ALL');
  /**
   * Dataset triggering strategy to determine when this task should be executed based on dataset changes: & and | operators are allowed (dataset1 & dataset2) | dataset3
   */
  dataset_triggering_strategy?: string;
  [k: string]: unknown | undefined;
}
/**
 * Row level security policy to apply to the output data.
 */
export interface RowLevelSecurityV1 {
  /**
   * This Row Level Security unique name
   */
  name: string | boolean | number | null;
  /**
   * The condition that goes to the WHERE clause and limit the visible rows.
   */
  predicate?: string | boolean | number | null;
  /**
   * user / groups / service accounts to which this security level is applied.
   * ex : user:me@mycompany.com,group:group@mycompany.com,serviceAccount:mysa@google-accounts.com
   */
  grants: ConvertibleToString | undefined[];
  /**
   * Description for this access policy
   */
  description?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
export interface ExpectationItemV1 {
  /**
   * SQL expression that must evaluate to true for the expectation to pass. Use {{table}} to reference the output table
   */
  expect?: string | boolean | number | null;
  /**
   * should load / transform fail on expectation error ?
   */
  failOnError?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Column level security policy to apply to the attribute.
 */
export interface AccessControlEntryV1 {
  /**
   * This role to give to the granted users
   */
  role: string | boolean | number | null;
  /**
   * user / groups / service accounts to which this security level is applied.
   * ex : user:me@mycompany.com,group:group@mycompany.com,serviceAccount:mysa@google-accounts.com
   */
  grants: ConvertibleToString | undefined[];
  /**
   * This Access Control Entry unique name
   */
  name?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * Configure freshness checks on the output table
 */
export interface FreshnessV11 {
  /**
   * How old may be the data before a warning is raised. Use syntax like '3 day' or '2 hour' or '30 minute'
   */
  warn?: string | boolean | number | null;
  /**
   * How old may be the data before an error is raised. Use syntax like '3 day' or '2 hour' or '30 minute'
   */
  error?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
export interface AttributeV1 {
  /**
   * Attribute name as defined in the source dataset and as received in the file
   */
  name: string | boolean | number | null;
  /**
   * Semantic type of the attribute. Can be a primitive type (string, long, int, double, boolean, date, timestamp, decimal) or a custom type defined in types.sl.yml. Default is 'string'
   */
  type?: string | boolean | number | null;
  /**
   * Is this attribute an array/list of values? Default is false
   */
  array?: boolean;
  /**
   * Should this attribute always be present in the source. Default to true.
   */
  required?: boolean;
  /**
   * Should this attribute be applied a privacy transformation at ingestion time
   */
  privacy?: string | boolean | number | null;
  /**
   * Column description that will be stored as column comment in the target database
   */
  comment?: string | boolean | number | null;
  /**
   * If present, the attribute is renamed with this name
   */
  rename?: string | boolean | number | null;
  /**
   * Sample data for this attribute
   */
  sample?: string | boolean | number | null;
  /**
   * If present, what kind of stat should be computed for this field
   */
  metricType?: (string | boolean | number | null) & ('DISCRETE' | 'CONTINUOUS' | 'TEXT' | 'NONE');
  /**
   * List of sub-attributes (valid for JSON and XML files only)
   */
  attributes?: AttributeV1[];
  position?: PositionV1;
  /**
   * Default value for this attribute when it is not present.
   */
  default?: string | boolean | number | null;
  /**
   * Tags associated with this attribute
   */
  tags?: ConvertibleToString | undefined[];
  /**
   * How to trim the input string
   */
  trim?: (string | boolean | number | null) & ('LEFT' | 'RIGHT' | 'BOTH' | 'NONE');
  /**
   * Scripted field : SQL request on renamed column
   */
  script?: string | boolean | number | null;
  /**
   * If this attribute is a foreign key, reference to [domain.]table[.attribute]
   */
  foreignKey?: string | boolean | number | null;
  /**
   * Should this attribute be ignored on ingestion. Default to false
   */
  ignore?: boolean;
  /**
   * Policy tag to assign to this attribute. Used for column level security
   */
  accessPolicy?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * First and last char positions of an attribute in a fixed length record
 */
export interface PositionV1 {
  /**
   * Zero based position of the first character for this attribute
   */
  first: number;
  /**
   * Zero based position of the last character to include in this attribute
   */
  last: number;
  [k: string]: unknown | undefined;
}
/**
 * Write strategy to use when writing the data. Default is APPEND
 */
export interface WriteStrategyV11 {
  /**
   * Write strategy type: OVERWRITE, APPEND, UPSERT_BY_KEY, UPSERT_BY_KEY_AND_TIMESTAMP, DELETE_THEN_INSERT, SCD2, or OVERWRITE_BY_PARTITION
   */
  type?: (string | boolean | number | null) &
    (
      | ((string | boolean | number | null) &
          (
            | 'OVERWRITE'
            | 'APPEND'
            | 'UPSERT_BY_KEY'
            | 'UPSERT_BY_KEY_AND_TIMESTAMP'
            | 'DELETE_THEN_INSERT'
            | 'SCD2'
            | 'OVERWRITE_BY_PARTITION'
          ))
      | (string | boolean | number | null)
    );
  /**
   * Map of connection type to write strategy. Allows different strategies per target database
   */
  types?: {
    /**
     * Write strategy type including custom strategies. Allows predefined strategies or custom strategy names
     */
    [k: string]:
      | (
          | (string | boolean | number | null)
          | (undefined &
              (
                | ((string | boolean | number | null) &
                    (
                      | 'OVERWRITE'
                      | 'APPEND'
                      | 'UPSERT_BY_KEY'
                      | 'UPSERT_BY_KEY_AND_TIMESTAMP'
                      | 'DELETE_THEN_INSERT'
                      | 'SCD2'
                      | 'OVERWRITE_BY_PARTITION'
                    ))
                | (string | boolean | number | null)
              ))
          | undefined
        )
      | undefined;
  };
  /**
   * List of columns to use as key(s) for the target table.
   *   This is used to update existing records in the target table.
   */
  key?: ConvertibleToString | undefined[];
  /**
   * timestamp column to use for the target table.
   *  This is used to update existing records in the target table by strategies UPSERT_BY_KEY_AND_TIMESTAMP and SCD2.
   */
  timestamp?: string | boolean | number | null;
  /**
   * SQL WHERE clause filter applied when reading from the target table during merge operations
   */
  queryFilter?: string | boolean | number | null;
  /**
   * Merge strategy: TARGET or SOURCE_AND_TARGET.
   *   TARGET means that the merge operation will be applied on the target table only.
   *   SOURCE_AND_TARGET means that the merge operation will be applied on the incoming source data and target tables.
   */
  on?: 'TARGET' | 'SOURCE_AND_TARGET';
  /**
   * column name to use for the start timestamp.
   *  This is used to update existing records in the target table by strategy SCD2.
   */
  startTs?: string | boolean | number | null;
  /**
   * column name to use for the end timestamp.
   *  This is used to update existing records in the target table by strategy SCD2.
   */
  endTs?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * Default task properties to apply to all tasks defined in tasks section and in included files
 */
export interface AutoTaskDescV11 {
  /**
   * Task name. If not specified, defaults to the filename without extension
   */
  name?: string | boolean | number | null;
  /**
   * Used internally. The SQL should always be written in a separate file named after the transform name. If the transform is named transf.sl.yml then then the sql should be stored in the file transf.sql. It will contain the main SQL request to execute
   */
  sql?: string | boolean | number | null;
  /**
   * attach streams to task (Snowflake only)
   */
  streams?: ConvertibleToString | undefined[];
  /**
   * List of columns that make up the primary key for the output table
   */
  primaryKey?: ConvertibleToString | undefined[];
  /**
   * Output Database (refer to a project id in BigQuery). Default to SL_DATABASE env var if set.
   */
  database?: string | boolean | number | null;
  /**
   * Output domain in output Area (Will be the Database name in Hive or Dataset in BigQuery)
   */
  domain?: string | boolean | number | null;
  /**
   * Dataset Name in output Area (Will be the Table name in Hive & BigQuery)
   */
  table?: string | boolean | number | null;
  /**
   * List of columns used for partitioning the output.
   */
  partition?: ConvertibleToString | undefined[];
  /**
   * List of SQL requests to executed before the main SQL request is run
   */
  presql?: ConvertibleToString | undefined[];
  /**
   * List of SQL requests to executed after the main SQL request is run
   */
  postsql?: ConvertibleToString | undefined[];
  sink?: AllSinksV1;
  rls?: RowLevelSecurityV1[];
  /**
   * Expectations to check after Load / Transform has succeeded
   */
  expectations?: ExpectationItemV1[];
  /**
   * Map of rolename -> List[Users].
   */
  acl?: AccessControlEntryV1[];
  /**
   * Output table description
   */
  comment?: string | boolean | number | null;
  freshness?: FreshnessV11;
  /**
   * Attributes
   */
  attributes?: AttributeV1[];
  /**
   * Python script URI to execute instead of the SQL request
   */
  python?: string | boolean | number | null;
  /**
   * Set of string to attach to the output table
   */
  tags?: ConvertibleToString | undefined[];
  writeStrategy?: WriteStrategyV11;
  /**
   * Cron expression to use for this task
   */
  schedule?: string | boolean | number | null;
  /**
   * Cron expression to use for this domain/table
   */
  dagRef?: string | boolean | number | null;
  /**
   * Number of milliseconds before a communication timeout.
   */
  taskTimeoutMs?: number;
  /**
   * Should we parse this SQL make it update the table according to write strategy or just execute it ?
   */
  parseSQL?: boolean;
  /**
   * Used when the default connection ref present in the application.sl.yml file is not the one to use to run the SQL request for this task.
   */
  connectionRef?: string;
  /**
   * Schema synchronization strategy: NONE (no sync), ADD (add missing columns), or ALL (full sync with source)
   */
  syncStrategy?: (string | boolean | number | null) & ('NONE' | 'ADD' | 'ALL');
  /**
   * Dataset triggering strategy to determine when this task should be executed based on dataset changes: & and | operators are allowed (dataset1 & dataset2) | dataset3
   */
  dataset_triggering_strategy?: string;
  [k: string]: unknown | undefined;
}
export interface AutoTaskDescV12 {
  /**
   * Task name. If not specified, defaults to the filename without extension
   */
  name?: string | boolean | number | null;
  /**
   * Used internally. The SQL should always be written in a separate file named after the transform name. If the transform is named transf.sl.yml then then the sql should be stored in the file transf.sql. It will contain the main SQL request to execute
   */
  sql?: string | boolean | number | null;
  /**
   * attach streams to task (Snowflake only)
   */
  streams?: ConvertibleToString | undefined[];
  /**
   * List of columns that make up the primary key for the output table
   */
  primaryKey?: ConvertibleToString | undefined[];
  /**
   * Output Database (refer to a project id in BigQuery). Default to SL_DATABASE env var if set.
   */
  database?: string | boolean | number | null;
  /**
   * Output domain in output Area (Will be the Database name in Hive or Dataset in BigQuery)
   */
  domain?: string | boolean | number | null;
  /**
   * Dataset Name in output Area (Will be the Table name in Hive & BigQuery)
   */
  table?: string | boolean | number | null;
  /**
   * List of columns used for partitioning the output.
   */
  partition?: ConvertibleToString | undefined[];
  /**
   * List of SQL requests to executed before the main SQL request is run
   */
  presql?: ConvertibleToString | undefined[];
  /**
   * List of SQL requests to executed after the main SQL request is run
   */
  postsql?: ConvertibleToString | undefined[];
  sink?: AllSinksV1;
  rls?: RowLevelSecurityV1[];
  /**
   * Expectations to check after Load / Transform has succeeded
   */
  expectations?: ExpectationItemV1[];
  /**
   * Map of rolename -> List[Users].
   */
  acl?: AccessControlEntryV1[];
  /**
   * Output table description
   */
  comment?: string | boolean | number | null;
  freshness?: FreshnessV11;
  /**
   * Attributes
   */
  attributes?: AttributeV1[];
  /**
   * Python script URI to execute instead of the SQL request
   */
  python?: string | boolean | number | null;
  /**
   * Set of string to attach to the output table
   */
  tags?: ConvertibleToString | undefined[];
  writeStrategy?: WriteStrategyV11;
  /**
   * Cron expression to use for this task
   */
  schedule?: string | boolean | number | null;
  /**
   * Cron expression to use for this domain/table
   */
  dagRef?: string | boolean | number | null;
  /**
   * Number of milliseconds before a communication timeout.
   */
  taskTimeoutMs?: number;
  /**
   * Should we parse this SQL make it update the table according to write strategy or just execute it ?
   */
  parseSQL?: boolean;
  /**
   * Used when the default connection ref present in the application.sl.yml file is not the one to use to run the SQL request for this task.
   */
  connectionRef?: string;
  /**
   * Schema synchronization strategy: NONE (no sync), ADD (add missing columns), or ALL (full sync with source)
   */
  syncStrategy?: (string | boolean | number | null) & ('NONE' | 'ADD' | 'ALL');
  /**
   * Dataset triggering strategy to determine when this task should be executed based on dataset changes: & and | operators are allowed (dataset1 & dataset2) | dataset3
   */
  dataset_triggering_strategy?: string;
  [k: string]: unknown | undefined;
}
/**
 * Map of string
 */
export interface MapString12 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Table Schema definition.
 */
export interface TableV1 {
  /**
   * Schema name, must be unique among all the schemas belonging to the same domain.
   *   *                     Will become the hive table name On Premise or BigQuery Table name on GCP.
   */
  name: string | boolean | number | null;
  /**
   * filename pattern to which this schema must be applied.
   *   *                     This instructs the framework to use this schema to parse any file with a filename that match this pattern.
   */
  pattern: string | boolean | number | null;
  /**
   * Attributes parsing rules.
   */
  attributes: AttributeV1[];
  metadata?: MetadataV11;
  /**
   * Table description that will be stored as table comment in the target database
   */
  comment?: string | boolean | number | null;
  /**
   * attach streams to table (Snowflake only)
   */
  streams?: ConvertibleToString | undefined[];
  /**
   * Reserved for future use.
   */
  presql?: ConvertibleToString | undefined[];
  /**
   * List of SQL requests to executed after the table has been loaded.
   */
  postsql?: ConvertibleToString | undefined[];
  /**
   * Set of string to attach to this Schema
   */
  tags?: ConvertibleToString | undefined[];
  /**
   *  Row level security on this schema.
   */
  rls?: RowLevelSecurityV1[];
  /**
   * Expectations to check after Load / Transform has succeeded
   */
  expectations?: ExpectationItemV1[];
  /**
   * List of columns that make up the primary key
   */
  primaryKey?: ConvertibleToString | undefined[];
  /**
   * Map of rolename -> List[Users].
   */
  acl?: AccessControlEntryV1[];
  /**
   * If present, the table is renamed with this name. Useful when use in conjunction with the 'extract' module
   */
  rename?: string | boolean | number | null;
  /**
   * Store here a couple of records illustrating the table data.
   */
  sample?: string | boolean | number | null;
  /**
   * remove all records that do not match this condition
   */
  filter?: string | boolean | number | null;
  /**
   * Sample of filename matching this schema
   */
  patternSample?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * Dataset metadata
 */
export interface MetadataV11 {
  /**
   * DSV by default. Supported file formats are :\n- DSV : Delimiter-separated values file. Delimiter value is specified in the "separator" field.\n- POSITION : FIXED format file where values are located at an exact position in each line.\n- JSON_FLAT : For optimisation purpose, we differentiate JSON with top level values from JSON\n  with deep level fields. JSON_FLAT are JSON files with top level fields only.\n- JSON :  Deep JSON file. Use only when your json documents contain sub-documents, otherwise prefer to\n  use JSON_FLAT since it is much faster.\n- XML : XML files
   */
  format?: (string | boolean | number | null) &
    (
      | 'DATAFRAME'
      | 'DSV'
      | 'POSITION'
      | 'JSON'
      | 'JSON_ARRAY'
      | 'JSON_FLAT'
      | 'XML'
      | 'TEXT_XML'
      | 'KAFKA'
      | 'KAFKASTREAM'
      | 'GENERIC'
      | 'PARQUET'
    );
  /**
   * UTF-8 if not specified.
   */
  encoding?: string | boolean | number | null;
  /**
   * are json objects on a single line or multiple line ? Single by default.  false means single. false also means faster
   */
  multiline?: boolean;
  /**
   * Is the json stored as a single object array ? false by default. This means that by default we have on json document per line.
   */
  array?: boolean;
  /**
   * does the dataset has a header ? true by default
   */
  withHeader?: boolean;
  /**
   * the values delimiter,  ';' by default value may be a multichar string starting from Spark3
   */
  separator?: string | boolean | number | null;
  /**
   * The String quote char, '"' by default
   */
  quote?: string | boolean | number | null;
  /**
   * escaping char '\' by default
   */
  escape?: string | boolean | number | null;
  sink?: AllSinksV1;
  /**
   * Folder on the local filesystem where incoming files are stored.
   *  Typically, this folder will be scanned periodically to move the dataset to the cluster for ingestion.
   *                      Files located in this folder are moved to the stage folder for ingestion by the "import" command.
   */
  directory?: string | boolean | number | null;
  /**
   * recognized filename extensions. json, csv, dsv, psv are recognized by default.
   * Only files with these extensions will be moved to the stage folder.
   */
  extensions?: ConvertibleToString | undefined[];
  /**
   * Ack extension used for each file. ".ack" if not specified.
   * Files are moved to the stage folder only once a file with the same name as the source file and with this extension is present.
   * To move a file without requiring an ack file to be present, set explicitly this property to the empty string value "".
   */
  ack?: string | boolean | number | null;
  options?: MapString11;
  /**
   * Loader to use, 'spark' or 'native'. Default to 'spark' of SL_LOADER env variable is set to 'native'
   */
  loader?: string | boolean | number | null;
  /**
   * Treat empty columns as null in DSV files. Default to false
   */
  emptyIsNull?: boolean;
  /**
   * Cron expression to use for this domain/table
   */
  dagRef?: string | boolean | number | null;
  freshness?: FreshnessV1;
  /**
   * Treat a specific input string as a null value indicator
   */
  nullValue?: string | boolean | number | null;
  /**
   * Cron expression to use for this domain/table
   */
  schedule?: string | boolean | number | null;
  writeStrategy?: WriteStrategyV1;
  [k: string]: unknown | undefined;
}
/**
 * Describe how to resolve a reference in a transform task
 */
export interface RefV1 {
  input: InputRefV1;
  output: OutputRefV1;
  [k: string]: unknown | undefined;
}
/**
 * The input table to resolve
 */
export interface InputRefV1 {
  /**
   * Database pattern to match, none if any database
   */
  database?: string | boolean | number | null;
  /**
   * Domain pattern to match, none if any domain match
   */
  domain?: string | boolean | number | null;
  /**
   * Table pattern to match
   */
  table: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * The output table resolved with the domain and database
 */
export interface OutputRefV1 {
  /**
   * Target database name for the resolved reference
   */
  database: string | boolean | number | null;
  /**
   * Target domain/dataset name for the resolved reference
   */
  domain: string | boolean | number | null;
  /**
   * Target table name for the resolved reference
   */
  table: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
export interface AppConfigV1 {
  /**
   * Default environment to use. May be also set using the SL_ENV environment variable
   */
  env?: string | boolean | number | null;
  /**
   * When using filesystem storage, default path to store the datasets
   */
  datasets?: string | boolean | number | null;
  /**
   * Incoming folder to use during autoload
   */
  incoming?: string | boolean | number | null;
  /**
   * DAG generation config folder. metadata/dags by default
   */
  dags?: string | boolean | number | null;
  /**
   * types config folder. metadata/types by default
   */
  types?: string | boolean | number | null;
  /**
   * Macros config folder. metadata/macros by default
   */
  macros?: string | boolean | number | null;
  /**
   * Path to tests folder. Default is ${metadata}/tests
   */
  tests?: string | boolean | number | null;
  /**
   * Pre-compute incoming partitions to prune partitions on merge statement
   */
  prunePartitionOnMerge?: boolean;
  /**
   * Location where are located user defined write strategies; Default is ${metadata}/write-strategies
   */
  writeStrategies?: string | boolean | number | null;
  /**
   * Location where are located user defined load strategies; Default is ${metadata}/load-strategies
   */
  loadStrategies?: string | boolean | number | null;
  /**
   * default metadata folder name. May be also set using the SL_METADATA environment variable
   */
  metadata?: string | boolean | number | null;
  metrics?: MetricsV1;
  /**
   * Validate the YAML file when loading it. If set to true fails on any error
   */
  validateOnLoad?: boolean;
  /**
   * Add value along with the rejection error. Not enabled by default for security reason. Default: false
   */
  rejectWithValue?: boolean;
  audit?: AuditV1;
  /**
   * Should ingested files be archived after ingestion ?
   */
  archive?: boolean;
  /**
   * Should invalid records be stored in a replay file ?
   */
  sinkReplayToFile?: boolean;
  lock?: LockV1;
  /**
   * Default write format in Spark. parquet is the default
   */
  defaultWriteFormat?: string | boolean | number | null;
  /**
   * Default write format in Spark for rejected records. parquet is the default
   */
  defaultRejectedWriteFormat?: string | boolean | number | null;
  /**
   * Default write format in Spark for audit records. parquet is the default
   */
  defaultAuditWriteFormat?: string | boolean | number | null;
  /**
   * output files in CSV format ? Default is false
   */
  csvOutput?: boolean;
  /**
   * CSV file extension when csvOutput is true. Default is .csv
   */
  csvOutputExt?: string | boolean | number | null;
  /**
   * Only generate privacy tasks. Reserved for internal use
   */
  privacyOnly?: boolean;
  /**
   * Should empty strings be considered as null values ?
   */
  emptyIsNull?: boolean;
  /**
   * Default loader to use when none is specified in the schema. Valid values are 'spark' or 'native'. Default is 'spark'
   */
  loader?: string | boolean | number | null;
  /**
   * Custom row validator class for advanced validation logic. Must implement RowValidator interface
   */
  rowValidatorClass?: string | boolean | number | null;
  /**
   * In what order should the files for a same table be loaded ? By time (default) or by or name ?
   *
   */
  loadStrategyClass?: string | boolean | number | null;
  /**
   * Should we load of the files to be stored in the same table in a single task or one by one ?
   */
  grouped?: boolean;
  /**
   * Maximum number of files to be stored in the same table in a single task
   */
  groupedMax?: number;
  /**
   * Column name to use for SCD2 start timestamp.@
   */
  scd2StartTimestamp?: string | boolean | number | null;
  /**
   * Column name to use for SCD2 end timestamp.
   */
  scd2EndTimestamp?: string | boolean | number | null;
  area?: AreaV1;
  hadoop?: MapString13;
  connections?: MapConnectionV1;
  jdbcEngines?: MapJdbcEngineV1;
  privacy?: PrivacyV1;
  /**
   * Root folder for the application. May be also set using the SL_ROOT environment variable
   */
  root?: string | boolean | number | null;
  internal?: InternalV1;
  accessPolicies?: AccessPoliciesV1;
  sparkScheduling?: SparkSchedulingV1;
  /**
   * Coma separated list of UDF to register in Spark jobs. May be also set using the SL_UDFS environment variable
   */
  udfs?: string | boolean | number | null;
  expectations?: ExpectationsConfigV1;
  /**
   * Pattern to use to replace parameters in SQL queries in addition to the jinja syntax {{param}}. Default is ${param}
   */
  sqlParameterPattern?: string | boolean | number | null;
  /**
   * Should we reject all records when an error occurs ? Default is false
   */
  rejectAllOnError?: string | boolean | number | null;
  /**
   * Maximum number of records to reject when an error occurs. Default is 100
   */
  rejectMaxRecords?: number;
  /**
   * Maximum number of parallel file copy operations during import. Default is 1
   */
  maxParCopy?: number;
  kafka?: KafkaConfigV1;
  dsvOptions?: MapString20;
  /**
   * reserved
   */
  forceViewPattern?: string | boolean | number | null;
  /**
   * reserved
   */
  forceDomainPattern?: string | boolean | number | null;
  /**
   * reserved
   */
  forceTablePattern?: string | boolean | number | null;
  /**
   * reserved
   */
  forceJobPattern?: string | boolean | number | null;
  /**
   * reserved
   */
  forceTaskPattern?: string | boolean | number | null;
  /**
   * reserved
   */
  useLocalFileSystem?: string | boolean | number | null;
  /**
   * reserved
   */
  sessionDurationServe?: string | boolean | number | null;
  /**
   * Default target database (projectId in GCP). May be also set using the SL_DATABASE environment variable
   */
  database?: string | boolean | number | null;
  /**
   * reserved
   */
  tenant?: string | boolean | number | null;
  /**
   * Default connection to use when loading / transforming data
   */
  connectionRef?: string | boolean | number | null;
  /**
   * Default connection to use when loading / transforming data
   */
  loadConnectionRef?: string | boolean | number | null;
  /**
   * Default connection to use when loading / transforming data
   */
  transformConnectionRef?: string | boolean | number | null;
  schedulePresets?: MapString21;
  /**
   * How many job to run simultaneously in dev mode (experimental)
   */
  maxParTask?: number;
  /**
   * Reference mappings for resolving table references in SQL queries across different environments
   */
  refs?: RefV1[];
  dagRef?: DagRefV1;
  /**
   * Force application to stop even when there is some pending thread.
   */
  forceHalt?: boolean;
  /**
   * Environment variable name containing the job ID for tracking purposes
   */
  jobIdEnvName?: string | boolean | number | null;
  /**
   * Pattern for naming archive tables. Use {table} as placeholder for the original table name
   */
  archiveTablePattern?: string | boolean | number | null;
  /**
   * Enable table archiving before overwrite operations. Default is false
   */
  archiveTable?: boolean;
  /**
   * Application configuration version for compatibility tracking
   */
  version?: string | boolean | number | null;
  /**
   * Automatically export table schemas after load/transform operations. Default is false
   */
  autoExportSchema?: boolean;
  /**
   * Timeout in milliseconds for long-running jobs. Default is 3600000 (1 hour)
   */
  longJobTimeoutMs?: number;
  /**
   * Timeout in milliseconds for short-running jobs. Default is 300000 (5 minutes)
   */
  shortJobTimeoutMs?: number;
  /**
   * Automatically create database schema/dataset if it does not exist. Default is true
   */
  createSchemaIfNotExists?: boolean;
  http?: HttpV1;
  /**
   * Default timezone for date/time operations. Default is UTC
   */
  timezone?: string | boolean | number | null;
  /**
   * Maximum number of records to return in interactive query mode. Default is 1000
   */
  maxInteractiveRecords?: number;
  /**
   * is duckdb mode active
   */
  duckdbMode?: boolean;
  /**
   * Comma separated list of duckdb extensions to load. Default is spatial, json, httpfs
   */
  duckdbExtensions?: string;
  /**
   * Where to store duckdb files if not using default
   */
  duckdbPath?: string | boolean | number | null;
  /**
   * null string value in tests
   */
  testCsvNullString?: string | boolean | number | null;
  /**
   * Internal use only
   */
  hiveInTest?: string | boolean | number | null;
  /**
   * Map of string
   */
  spark?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Map of string
   */
  extra?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Allow DuckDB to load / Save data from / to external sources. Default to true
   */
  duckDbEnableExternalAccess?: boolean;
  /**
   * Update attributes in YAMl file when SQL is updated. Default to true
   */
  syncSqlWithYaml?: boolean;
  /**
   * Update database with YAML transform is run. Default to true
   */
  syncYamlWithDb?: boolean;
  /**
   * Number of retries on transient exceptions
   */
  onExceptionRetries?: number;
  /**
   * Directory containing python libraries to use instead of pip install
   */
  pythonLibsDir?: string;
  gizmosql?: GizmoV1;
  [k: string]: unknown | undefined;
}
export interface MetricsV1 {
  /**
   * When using filesystem storage, the path to the metrics file
   */
  path?: string | boolean | number | null;
  /**
   * Max number of unique values accepted for a discrete column. Default is 10
   */
  discreteMaxCardinality?: number;
  /**
   * Should metrics be computed ?
   */
  active?: boolean;
  [k: string]: unknown | undefined;
}
export interface AuditV1 {
  /**
   * Path where audit logs are stored when using filesystem storage
   */
  path?: string | boolean | number | null;
  sink?: AllSinksV11;
  /**
   * Maximum number of errors to tolerate before failing the job. Default is unlimited
   */
  maxErrors?: string | boolean | number | null;
  /**
   * Database name where audit tables are stored (project ID in BigQuery)
   */
  database?: string | boolean | number | null;
  /**
   * Domain/dataset name for audit tables. Default is 'audit'
   */
  domain?: string | boolean | number | null;
  /**
   * Domain/dataset name for expectation results. Default is 'expectations'
   */
  domainExpectation?: string | boolean | number | null;
  /**
   * Domain/dataset name for rejected records. Default is 'rejected'
   */
  domainRejected?: string | boolean | number | null;
  /**
   * Create individual entry for each ingested file instead of a global one. Default: false
   */
  detailedLoadAudit?: boolean;
  /**
   * Enable or disable audit logging. Default is true
   */
  active?: boolean;
  /**
   * Custom SQL query to use for audit table creation or data insertion
   */
  sql?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * Sink configuration for audit logs storage
 */
export interface AllSinksV11 {
  /**
   * JDBC: Connection String
   */
  connectionRef?: string | boolean | number | null;
  /**
   * FS or BQ: List of attributes to use for clustering
   */
  clustering?: ConvertibleToString | undefined[];
  /**
   * BQ: Number of days before this table is set as expired and deleted. Never by default.
   */
  days?: number;
  /**
   * BQ: Should be require a partition filter on every request ? No by default.
   */
  requirePartitionFilter?: boolean;
  /**
   * Should we materialize as a table or as a view when saving the results ? TABLE by default.
   */
  materializedView?: (string | boolean | number | null) & ('TABLE' | 'VIEW' | 'MATERIALIZED_VIEW' | 'HYBRID');
  /**
   * BQ: Enable automatic refresh of materialized view ? false by default.
   */
  enableRefresh?: boolean;
  /**
   * BQ: Refresh interval in milliseconds. Default to BigQuery default value
   */
  refreshIntervalMs?: number;
  /**
   * ES: Attribute to use as id of the document. Generated by Elasticsearch if not specified.
   */
  id?: string | boolean | number | null;
  /**
   * FS: File format
   */
  format?: string | boolean | number | null;
  /**
   * FS: File extension
   */
  extension?: string | boolean | number | null;
  /**
   * columns to use for sharding. table will be named table_{sharding(0)}_{sharding(1)}
   */
  sharding?: ConvertibleToString | undefined[];
  /**
   * FS or BQ: List of partition attributes
   */
  partition?: string[];
  /**
   * When outputting files, should we coalesce it to a single file. Useful when CSV is the output format.
   */
  coalesce?: boolean;
  /**
   * Optional path attribute if you want to save the file outside of the default location (datasets folder)
   */
  path?: string;
  options?: MapString10;
  [k: string]: unknown | undefined;
}
export interface LockV1 {
  /**
   * Name of the lock
   */
  path?: string | boolean | number | null;
  /**
   * reserved
   */
  timeout?: number;
  /**
   * Default 5 seconds
   */
  pollTime?: number;
  /**
   * Default 5 seconds
   */
  refreshTime?: number;
  [k: string]: unknown | undefined;
}
/**
 * stage, ingesting ... areas configuration
 */
export interface AreaV1 {
  /**
   * Files are read from  this folder for ingestion by the "import" command.
   */
  incoming?: string | boolean | number | null;
  /**
   * Files recognized by the extensions property are moved to this folder for ingestion by the "import" command.
   */
  stage?: string | boolean | number | null;
  /**
   * Files that cannot be ingested (do not match by any table pattern) are moved to this folder.
   */
  unresolved?: string | boolean | number | null;
  /**
   * Files that have been ingested are moved to this folder if SL_ARCHIVE is set to true.
   */
  archive?: string | boolean | number | null;
  /**
   * Files that are being ingested are moved to this folder.
   */
  ingesting?: string | boolean | number | null;
  /**
   * Invalid records are stored in this folder in source format when SL_SINK_REPLAY_TO_FILE is set to true.
   */
  replay?: string | boolean | number | null;
  /**
   * Hive database name to use when running on Spark with Hive support enabled
   */
  hiveDatabase?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * Map of string
 */
export interface MapString13 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Connections configurations
 */
export interface MapConnectionV1 {
  [k: string]: ConnectionV1 | undefined;
}
/**
 * Connection properties to a datawarehouse.
 */
export interface ConnectionV1 {
  /**
   * Connection type: jdbc, bigquery, snowflake, redshift, databricks, duckdb, or any Spark-supported format
   */
  type: string | boolean | number | null;
  /**
   * Spark data source format to use (e.g., 'jdbc', 'bigquery', 'parquet'). Required when using Spark engine
   */
  sparkFormat?: string | boolean | number | null;
  /**
   * Loader we should use with this connection. Superseded by the loader defined in the YAML table metadata
   */
  loader?: string | boolean | number | null;
  /**
   * Character to use when quoting column and table names
   */
  quote?: string | boolean | number | null;
  /**
   * Catalog/schema separator character used in fully qualified table names. Default is '.'
   */
  separator?: string | boolean | number | null;
  options?: MapString14;
  [k: string]: unknown | undefined;
}
/**
 * Map of string
 */
export interface MapString14 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * JDBC engine configurations
 */
export interface MapJdbcEngineV1 {
  [k: string]: JdbcEngineV1 | undefined;
}
/**
 * Jdbc engine
 */
export interface JdbcEngineV1 {
  tables: MapTableDdlV1;
  /**
   * How to quote identifiers
   */
  quote: string;
  /**
   * When creating views, how they should be prefixed. Some databases like redshift require view name to be prefixed by the character '#'.
   * This is not required for other databases like snowflake or bigquery.
   * Default is empty string
   */
  viewPrefix?: string;
  /**
   * SQL statements to execute immediately after the database connection is opened (e.g., SET commands)
   */
  preActions?: string;
  /**
   * keyword used to partition the table. Default is PARTITION BY
   */
  partitionBy?: string;
  /**
   * keyword used to cluster the table. Default is CLUSTER BY
   */
  clusterBy?: string;
  /**
   * Override the default strategy builder used to write data. A strategy is a folder located under metadata/templates/write-strategies/[strategyBuilder]
   */
  strategyBuilder: string;
  /**
   * How to get column remarks
   */
  columnRemarks?: string;
  /**
   * How to get table remarks
   */
  tableRemarks?: string;
  [k: string]: unknown | undefined;
}
/**
 * List of all SQL create statements used to create audit tables for this JDBC engine.
 * Tables are created only if the execution of the pingSQL statement fails
 */
export interface MapTableDdlV1 {
  [k: string]: TableDdlV1 | undefined;
}
/**
 * DDL used to create a table
 */
export interface TableDdlV1 {
  /**
   * SQL CREATE DDL statement
   */
  createSql: string | boolean | number | null;
  /**
   * How to test if the table exist.
   * Use the following statement by default: 'select count(*) from tableName where 1=0'
   */
  pingSql?: string | boolean | number | null;
  /**
   * Override the default select defined by Starlake
   */
  selectSql?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * Privacy algorithms
 */
export interface PrivacyV1 {
  options?: MapString15;
  [k: string]: unknown | undefined;
}
/**
 * Map of string
 */
export interface MapString15 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Internal configuration
 */
export interface InternalV1 {
  /**
   * How the dataframe are cached. Default is MEMORY_AND_DISK_SER.
   * Available options are (https://spark.apache.org/docs/latest/api/java/index.html?org/apache/spark/storage/StorageLevel.html):
   * - MEMORY_ONLY
   * - MEMORY_AND_DISK
   * - MEMORY_ONLY_SER
   * - MEMORY_AND_DISK_SER
   * - DISK_ONLY
   * - OFF_HEAP
   */
  cacheStorageLevel?: string | boolean | number | null;
  /**
   * May be parquet or ORC. Default is parquet. Used for BigQuery intermediate storage. Use ORC for for JSON files to keep the original data structure.
   * https://stackoverflow.com/questions/53674838/spark-writing-parquet-arraystring-converts-to-a-different-datatype-when-loadin
   */
  intermediateBigqueryFormat?: string | boolean | number | null;
  /**
   * The GCS bucket that temporarily holds the data before it is loaded to BigQuery.
   */
  temporaryGcsBucket?: string | boolean | number | null;
  /**
   * Internal use. Do not modify.
   */
  substituteVars?: boolean;
  /**
   * Should audit logs when using BigQuery be saved in batch or interactive mode ? Interactive by default (false)
   */
  bqAuditSaveInBatchMode?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Access policies configuration
 */
export interface AccessPoliciesV1 {
  /**
   * Should access policies be enforced ?
   */
  apply?: boolean;
  /**
   * GCP project location. Required if apply is true.
   */
  location?: string | boolean | number | null;
  /**
   * GCP Project id. Required if apply is true.
   */
  database?: string | boolean | number | null;
  /**
   * Taxonomy name. Required if apply is true.
   */
  taxonomy?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * Spark Job scheduling configuration
 */
export interface SparkSchedulingV1 {
  /**
   * Max number of Spark jobs to run in parallel, default is 1
   */
  maxJobs?: number;
  /**
   * Pool name to use for Spark jobs, default is 'default'
   */
  poolName?: string | boolean | number | null;
  /**
   * This can be FIFO or FAIR, to control whether jobs within the pool queue up behind each other (the default) or share the pool’s resources fairly.
   */
  mode?: string | boolean | number | null;
  /**
   * Scheduler filename in the metadata folder. If not set, defaults to fairscheduler.xml.
   */
  file?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * Expectations configuration
 */
export interface ExpectationsConfigV1 {
  /**
   * When using filesystem storage, the path to the expectations file
   */
  path?: string | boolean | number | null;
  /**
   * should expectations be executed ?
   */
  active?: boolean;
  /**
   * should load / transform fail on expectation error ?
   */
  failOnError?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Kafka configuration for streaming ingestion and message processing
 */
export interface KafkaConfigV1 {
  serverOptions?: MapString16;
  /**
   * Map of topic name to topic configuration
   */
  topics?: {
    [k: string]: KafkaTopicConfigV1 | undefined;
  };
  /**
   * Offset management mode: 'STREAM' for Spark streaming checkpoints or 'FILE' for file-based offset tracking
   */
  cometOffsetsMode?: string | boolean | number | null;
  customDeserializers?: MapString19;
  [k: string]: unknown | undefined;
}
/**
 * Map of string
 */
export interface MapString16 {
  [k: string]: ConvertibleToString | undefined;
}
export interface KafkaTopicConfigV1 {
  /**
   * Kafka topic name to consume from or produce to
   */
  topicName?: string | boolean | number | null;
  /**
   * Maximum number of records to read from the topic in a single batch. Default is unlimited
   */
  maxRead?: number;
  /**
   * List of fields to extract from Kafka messages
   */
  fields?: ConvertibleToString | undefined[];
  /**
   * Number of partitions for the Kafka topic when creating it
   */
  partitions?: number;
  /**
   * Replication factor for the Kafka topic when creating it
   */
  replicationFactor?: number;
  createOptions?: MapString17;
  accessOptions?: MapString18;
  /**
   * HTTP headers to include when accessing Kafka via HTTP proxy
   */
  headers?: {
    [k: string]: MapString12;
  };
  [k: string]: unknown | undefined;
}
/**
 * Map of string
 */
export interface MapString17 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Map of string
 */
export interface MapString18 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Map of string
 */
export interface MapString19 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Map of string
 */
export interface MapString20 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Map of string
 */
export interface MapString21 {
  [k: string]: ConvertibleToString | undefined;
}
/**
 * Default DAG configuration references for load and transform tasks
 */
export interface DagRefV1 {
  /**
   * Dag config to use for load tasks. May be redefined at the table level
   */
  load?: string | boolean | number | null;
  /**
   * Dag config to use for transform tasks. May be redefined at the task level
   */
  transform?: string | boolean | number | null;
  [k: string]: unknown | undefined;
}
/**
 * HTTP server configuration for the Starlake REST API
 */
export interface HttpV1 {
  /**
   * Network interface to bind the HTTP server to. Default is '0.0.0.0' (all interfaces)
   */
  interface?: string | boolean | number | null;
  /**
   * Port number for the HTTP server. Default is 8080
   */
  port?: number;
  [k: string]: unknown | undefined;
}
/**
 * Gizmo server configuration
 */
export interface GizmoV1 {
  /**
   * Gizmo server URL. Default is 'http://localhost:10900'
   */
  url?: string;
  /**
   * API key for authenticating with the Gizmo server
   */
  apiKey?: string;
  [k: string]: unknown | undefined;
}
