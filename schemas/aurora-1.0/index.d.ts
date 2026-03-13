/* eslint-disable */

/**
 * Make agile applications without technical debt
 */
export interface AuroraAgileMetaFramework {
  /**
   * Schema version
   */
  version?: string;
  /**
   * The name of the bounded context, singular in kebab-case
   */
  boundedContextName: string;
  /**
   * The name of the module, singular in kebab-case
   */
  moduleName: string;
  /**
   * The name of the module, plural in kebab-case
   */
  moduleNames: string;
  /**
   * The name of the aggregateName, singular in PascalCase
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
  aggregateProperties?: Property[];
  aggregateI18nProperties?: Property[];
  additionalApis?: ApiDefinition[];
}
export interface Property {
  /**
   * The name of property, in camelCase
   */
  name: string;
  /**
   * The type of property
   */
  type:
    | 'bigint.unsigned'
    | 'bigint'
    | 'blob.long'
    | 'blob.medium'
    | 'blob.tiny'
    | 'blob'
    | 'boolean'
    | 'char'
    | 'date'
    | 'decimal'
    | 'enum'
    | 'float'
    | 'id'
    | 'int.unsigned'
    | 'int'
    | 'json'
    | 'manyToMany'
    | 'password'
    | 'relationship'
    | 'smallint.unsigned'
    | 'smallint'
    | 'text'
    | 'timestamp'
    | 'tinyint.unsigned'
    | 'tinyint'
    | 'varchar';
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
   * Set property to primary key
   */
  primaryKey?: boolean;
  /**
   * To define property like a index
   */
  index?: 'index' | 'unique';
  /**
   * The name of index, if there are various indexes with the same name, they will be grouped
   */
  indexName?: string;
  /**
   * Values for enum type
   */
  enumOptions?: string[];
  /**
   * Default value for property
   */
  defaultValue?: number | string | boolean;
  /**
   * Example value for property, this value will be used in swagger documentation
   */
  example?: number | string | boolean;
  /**
   * Total digits of the number and length of the decimal places in the back of the number, example: [10, 2].
   */
  decimals?: number[];
  /**
   * Set number property as auto increment
   */
  autoIncrement?: boolean;
  relationship?: Relationship;
  webComponent?: WebComponent;
}
/**
 * Relationship definition for this property
 */
export interface Relationship {
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
  aggregate?: string;
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
  pivot?: PivotTable;
}
/**
 * Relationship pivot table definition for this relationship
 */
export interface PivotTable {
  /**
   * AggregateName of Pivot table, example: IamRolesAccounts
   */
  aggregate?: string;
  /**
   * Module path where table model file will be saved, example: iam/role
   */
  modulePath?: string;
  /**
   * Filename of pivot table model file, example: roles-accounts
   */
  fileName?: string;
}
/**
 * Web Component that will be rendered for this property
 */
export interface WebComponent {
  /**
   * The type of web component
   */
  type?: 'grid-select-element' | 'grid-elements-manager' | 'select';
}
export interface ApiDefinition {
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
