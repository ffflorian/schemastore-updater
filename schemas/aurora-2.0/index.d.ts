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
  | 'getRaw'
  | 'sum'
  | 'updateAndIncrement'
  | 'updateById'
  | 'update'
  | 'upsert'
)[];

/**
 * Aurora module definition: describes a bounded context module with its aggregate, properties, relationships and front configuration
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
  /**
   * Description of the module and its function and interaction with the other modules in the package
   */
  description?: string;
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
   * Grammatical gender to be used in the front application
   */
  gender?: 'masculine' | 'feminine';
  /**
   * Icon library to be used in the front application
   */
  iconModule?:
    | '@ng-icons/bootstrap-icons'
    | '@ng-icons/heroicons'
    | '@ng-icons/ionicons'
    | '@ng-icons/material-icons'
    | '@ng-icons/material-file-icons'
    | '@ng-icons/css.gg'
    | '@ng-icons/feather-icons'
    | '@ng-icons/jam-icons'
    | '@ng-icons/octicons'
    | '@ng-icons/radix-icons'
    | '@ng-icons/tabler-icons'
    | '@ng-icons/akar-icons'
    | '@ng-icons/iconoir'
    | '@ng-icons/cryptocurrency-icons'
    | '@ng-icons/simple-icons'
    | '@ng-icons/typicons'
    | '@ng-icons/dripicons'
    | '@ng-icons/ux-aspects'
    | '@ng-icons/circum-icons'
    | '@ng-icons/remixicon'
    | '@ng-icons/font-awesome'
    | '@ng-icons/iconsax'
    | '@ng-icons/tdesign-icons'
    | '@ng-icons/phosphor-icons'
    | '@ng-icons/lets-icons'
    | '@ng-icons/huge-icons'
    | '@ng-icons/devicon'
    | '@ng-icons/game-icons'
    | '@ng-icons/solar-icons'
    | '@ng-icons/svgl'
    | '@ng-icons/material-symbols'
    | '@ng-icons/mynaui'
    | '@ng-icons/boxicons'
    | '@ng-icons/mono-icons'
    | '@ng-icons/lucide'
    | '@ng-icons/coolicons';
  /**
   * Outline icon to be used in the front application
   */
  outlineIcon?: string;
  /**
   * Solid icon to be used in the front application
   */
  solidIcon?: string;
  /**
   * Detail view mode for the front application, define detail in a dialog or in a separated view
   */
  detailMode?: 'view' | 'dialog';
  /**
   * When true, the module generates embed-mode artifacts (form-embed component, embed columns config, list mode embed). Required when another module references this one via widget.type: grid-elements-manager. Default: false.
   */
  embedSupport?: boolean;
  /**
   * Human-readable display label for this aggregate. Accepts either an identifier (a single property name, e.g. 'name', 'email') or an interpolation template with {fieldName} placeholders (e.g. '{code} - {name}', 'Plan: {planId}'). Codegen substitutes placeholders with the corresponding property reference at emit time; segments that are not valid JS identifiers inside braces are emitted as literal text. Defaults to 'name' when unset. Used for list-component delete confirmation toasts and FK column display rendering.
   */
  displayField?: string;
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
    | 'dateTime'
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
     * The type of each array element
     */
    type: 'char' | 'date' | 'dateTime' | 'decimal' | 'enum' | 'id' | 'int' | 'timestamp' | 'varchar';
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
   * Set property as unsigned
   */
  unsigned?: boolean;
  /**
   * Set property to primary key
   */
  primaryKey?: boolean;
  /**
   * Define an index on this property: 'index' for a regular index or 'unique' for a uniqueness constraint
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
   * Index access method/algorithm used by the database engine (Btree, GIN, HASH, etc.)
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
  defaultValue?: string | number | boolean | unknown[];
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
   * Set property as read only
   */
  readonly?: boolean;
  /**
   * Apply timezone to date property, by default is true
   */
  applyTimezone?: boolean;
  relationship?: RelationshipDefinition;
  widget?: WidgetDefinition;
}
/**
 * Relationship definition for this property
 */
export interface RelationshipDefinition {
  /**
   * The type of relationship
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
 * UI widget that will be rendered for this property
 */
export interface WidgetDefinition {
  /**
   * The type of widget
   */
  type?:
    | 'async-multiple-search-select'
    | 'async-search-select'
    | 'color-picker'
    | 'grid-elements-manager'
    | 'grid-select-element'
    | 'grid-select-multiple-elements'
    | 'multiple-search-select'
    | 'multiple-select'
    | 'search-select'
    | 'select';
  /**
   * CSS class for widget
   */
  className?: string;
  /**
   * Web component order on detail view
   */
  detailSort?: number;
  /**
   * Set hidden widget on detail view
   */
  isDetailHidden?: boolean;
  /**
   * Web component order on list view
   */
  listSort?: number;
  /**
   * Set hidden widget on list view
   */
  isListHidden?: boolean;
  /**
   * Fields to display in the grid-select-element widget
   *
   * @minItems 1
   */
  displayFields?: [string, ...string[]];
  /**
   * Name of the tab where the field will be placed, enabling a tab-based form layout
   */
  tab?: string;
  /**
   * Name of the group that groups fields into a section within the form, either inside a tab or standalone
   */
  group?: string;
  /**
   * Per-property column span override on the form's 12-column grid. Integer 1-12. When omitted, the codegen picks a default by type (and by maxLength for varchar)
   */
  span?: number;
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
