/* eslint-disable */

/**
 * Operations to be excluded from the module
 */
export type ExcludedOperationDefinition = (
  | 'count'
  | 'create'
  | 'createBatch'
  | 'deleteById'
  | 'delete'
  | 'findById'
  | 'find'
  | 'get'
  | 'max'
  | 'min'
  | 'paginate'
  | 'rawSql'
  | 'getRaw'
  | 'sum'
  | 'updateAndIncrement'
  | 'updateById'
  | 'update'
  | 'upsert'
)[];

/**
 * Make agile applications without technical debt
 */
export interface AuroraAgileMetaFramework {
  /**
   * Schema version
   */
  version?: string;
  /**
   * The name of the package, singular in kebab case
   */
  boundedContextName: string;
  /**
   * The name of the module, singular in kebab case
   */
  moduleName: string;
  /**
   * The name of the module, plural in kebab case
   */
  moduleNames: string;
  /**
   * The name of the aggregateName, singular in pascal case, is composed of the boundedContextName plus the moduleName
   */
  aggregateName: string;
  /**
   * Enabled authentication for this module
   */
  hasOAuth?: boolean;
  /**
   * Enabled tenant for this module
   */
  hasTenant?: boolean;
  /**
   * Enabled auditing for this module
   */
  hasAuditing?: boolean;
  front?: FrontDefinition;
  aggregateProperties?: PropertyDefinition[];
  additionalApis?: AdditionalApisDefinition[];
  /**
   * Files to be excluded from the module
   */
  excludedFiles?: string[];
  excludedOperations?: ExcludedOperationDefinition;
}
/**
 * Appearance properties for front application
 */
export interface FrontDefinition {
  /**
   * Font set outline icon to be used in the front application
   */
  outlineFontSetIcon?: string;
  /**
   * Outline icon to be used in the front application
   */
  outlineIcon?: string;
  /**
   * Font set solid icon to be used in the front application
   */
  solidFontSetIcon?: string;
  /**
   * Solid icon to be used in the front application
   */
  solidIcon?: string;
}
export interface PropertyDefinition {
  /**
   * The name of property, in camelCase
   */
  name: string;
  /**
   * The description of the property
   */
  description?: string;
  /**
   * The type of property
   */
  type:
    | 'array'
    | 'bigint'
    | 'blob.long'
    | 'blob.medium'
    | 'blob.tiny'
    | 'blob'
    | 'boolean'
    | 'char'
    | 'date'
    | 'decimal'
    | 'encrypted'
    | 'enum'
    | 'float'
    | 'id'
    | 'int'
    | 'json'
    | 'jsonb'
    | 'manyToMany'
    | 'password'
    | 'relationship'
    | 'smallint'
    | 'text'
    | 'timestamp'
    | 'varchar';
  /**
   * Options to define array property
   */
  arrayOptions?: {
    /**
     * The type of property
     */
    type: 'char' | 'date' | 'decimal' | 'enum' | 'id' | 'int' | 'timestamp' | 'varchar';
    /**
     * Set max length to property
     */
    length?: number;
    /**
     * Set max length to property
     */
    maxLength?: number;
    /**
     * Values for enum type
     */
    enumOptions?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   * Set max length to property
   */
  length?: number;
  /**
   * Set max length to property
   */
  maxLength?: number;
  /**
   * Set property to nullable
   */
  nullable?: boolean;
  /**
   * Set property like unsigned
   */
  unsigned?: boolean;
  /**
   * Set property to primary key
   */
  primaryKey?: boolean;
  /**
   * To define property like a index
   */
  index?: 'index' | 'unique';
  /**
   * Fields to do composite unique index
   */
  indexFields?: string[];
  /**
   * The name of index, if there are various indexes with the same name, they will be grouped
   */
  indexName?: string;
  /**
   * To define property like a index
   */
  indexUsing?: 'Btree' | 'GIN' | 'HASH' | 'spgist' | 'GiST' | 'BRIN';
  /**
   * Set property as i18n, this property will be used to translate the entity in the translation table
   */
  isI18n?: boolean;
  /**
   * Values for enum type
   */
  enumOptions?: string[];
  /**
   * Default value for property
   */
  defaultValue?: string | number | boolean;
  /**
   * Example value for property, this value will be used in swagger documentation
   */
  example?: number | string | boolean | unknown[];
  /**
   * Total digits of the number and length of the decimal places in the back of the number, example: [10, 2].
   */
  decimals?: number[];
  /**
   * Set number property as auto increment
   */
  autoIncrement?: boolean;
  /**
   * Apply timezone to date property, by default is true
   */
  applyTimezone?: boolean;
  relationship?: RelationshipDefinition;
  webComponent?: WebComponentDefinition;
}
/**
 * Relationship definition for this property
 */
export interface RelationshipDefinition {
  /**
   * The type of web component
   */
  type?: 'many-to-many' | 'many-to-one' | 'none' | 'one-to-many' | 'one-to-one';
  /**
   * Singular name of the property referred to in the relationship, only for one-to-many and many-to-many relationship, example: book
   */
  singularName?: string;
  /**
   * Aggregate referring to this relationship, example: LibraryAuthor
   */
  aggregateName?: string;
  /**
   * Path to the module that refers to this relationship, example: library/author
   */
  modulePath?: string;
  /**
   * Property key that refers to this relationship, only for many-to-one relationship, example: id
   */
  key?: string;
  /**
   * Field to obtain the relationship data, example: author
   */
  field?: string;
  /**
   * The description of the relationship field
   */
  description?: string;
  /**
   * Avoid constraint rules for this relationship
   */
  avoidConstraint?: boolean;
  /**
   * Path to packageName where is the relationship, example: @aurora-ts/core
   */
  packageName?: string;
  /**
   * Set many-to-many relationship as denormalized, creating a field to store the selected ids
   */
  isDenormalized?: boolean;
  pivot?: PivotTableDefinition;
}
/**
 * Relationship pivot table definition for this relationship
 */
export interface PivotTableDefinition {
  /**
   * The name of the package, singular in kebab-case
   */
  boundedContextName?: string;
  /**
   * The name of the module, singular in kebab-case
   */
  moduleName?: string;
  /**
   * The name of the module, plural in kebab-case
   */
  moduleNames?: string;
  /**
   * The name of the aggregateName, singular in PascalCase
   */
  aggregateName?: string;
  /**
   * Enabled authentication for this pivot table
   */
  hasOAuth?: boolean;
  /**
   * Enabled auditing for pivot table
   */
  hasAuditing?: boolean;
  aggregateProperties?: PropertyDefinition[];
  excludedFiles?: string[];
  excludedOperations?: ExcludedOperationDefinition;
}
/**
 * Web Component that wil be rendered for this property
 */
export interface WebComponentDefinition {
  /**
   * The type of web component
   */
  type?:
    | 'async-search-multiple-select'
    | 'async-search-select'
    | 'grid-elements-manager'
    | 'grid-select-element'
    | 'grid-select-multiple-elements'
    | 'multiple-select'
    | 'search-multiple-select'
    | 'search-select'
    | 'select';
  /**
   * CSS class for web component
   */
  className?: string;
  /**
   * Web component order on detail view
   */
  detailSort?: number;
  /**
   * Set hidden web component on detail view
   */
  isDetailHidden?: boolean;
  /**
   * Web component order on list view
   */
  listSort?: number;
  /**
   * Set hidden web component on list view
   */
  isListHidden?: boolean;
}
export interface AdditionalApisDefinition {
  /**
   * Path to access api
   */
  path: string;
  /**
   * Type of resolver, query or mutation
   */
  resolverType: 'query' | 'mutation';
  /**
   * Verb of api rest
   */
  httpMethod: 'get' | 'post' | 'put' | 'delete' | 'patch';
  [k: string]: unknown | undefined;
}
