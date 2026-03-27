/* eslint-disable */

/**
 * A globally unique identifier.
 */
export type SpecifId = string;
/**
 * A globally unique revision tag with one or multiple blocks with alphanumeric characters separated by a special character [.:,;/-]. Sequential as well as branching/merging notations are possible.
 */
export type SpecifRevision = string;
/**
 * A list of items with text and language properties. If the information is be provided in multiple languages, the language must be specified for proper selection; it is however not required by the schema to avoid a lot of overhead in most cases with a single language.
 */
export type SpecifMultiLanguageText = {
  /**
   * A string containing some text.
   */
  text: string;
  /**
   * By default, the format is assumed 'plain'.
   */
  format?: 'plain' | 'xhtml';
  /**
   * An IETF language tag such as 'en', 'en-US, 'fr' or 'de'.
   */
  language?: string;
}[];
/**
 * An ISO-8601 dateTime string. For reduced accuracy, any number of values may be dropped, but only from right to left.
 */
export type SpecifDateTime = string;
export type SpecifDataType =
  | {
      type: DataTypeBoolean;
      id: SpecifId;
      title: SpecifText;
      description?: SpecifMultiLanguageText;
      revision?: SpecifRevision;
      replaces?: SpecifReplaces;
      changedAt: SpecifDateTime;
      changedBy?: string;
    }
  | {
      type: DataTypeDateTimeDurationOrURI;
      id: SpecifId;
      title: SpecifText;
      description?: SpecifMultiLanguageText;
      enumeration?: EnumeratedValues;
      /**
       * Indicates whether multiple values are allowed; by default the value is 'false'.
       */
      multiple?: boolean;
      revision?: SpecifRevision;
      replaces?: SpecifReplaces;
      changedAt: SpecifDateTime;
      changedBy?: string;
    }
  | {
      type: DataTypeInteger;
      id: SpecifId;
      title: SpecifText;
      description?: SpecifMultiLanguageText;
      minInclusive?: MinimumValueOfANumber;
      maxInclusive?: MaximumValueOfANumber;
      enumeration?: EnumeratedValues;
      /**
       * Indicates whether multiple values are allowed; by default the value is 'false'.
       */
      multiple?: boolean;
      revision?: SpecifRevision;
      replaces?: SpecifReplaces;
      changedAt: SpecifDateTime;
      changedBy?: string;
    }
  | {
      type: DataTypeDouble;
      id: SpecifId;
      title: SpecifText;
      description?: SpecifMultiLanguageText;
      fractionDigits?: NumberOfFractionDigitsOfADecimalNumber;
      minInclusive?: MinimumValueOfANumber;
      maxInclusive?: MaximumValueOfANumber;
      enumeration?: EnumeratedValues;
      /**
       * Indicates whether multiple values are allowed; by default the value is 'false'.
       */
      multiple?: boolean;
      revision?: SpecifRevision;
      replaces?: SpecifReplaces;
      changedAt: SpecifDateTime;
      changedBy?: string;
    }
  | {
      type: DataTypeStringWithPlainOrFormattedTextThePropertySTextObjectMAYSpecifyTheFormatAndLanguage;
      id: SpecifId;
      title: SpecifText;
      description?: SpecifMultiLanguageText;
      maxLength?: MaximumStringLength;
      enumeration?: EnumeratedValues;
      /**
       * Indicates whether multiple values are allowed; by default the value is 'false'.
       */
      multiple?: boolean;
      revision?: SpecifRevision;
      replaces?: SpecifReplaces;
      changedAt: SpecifDateTime;
      changedBy?: string;
    };
/**
 * The corresponding definition in https://www.w3.org/TR/xmlschema-2/ applies.
 */
export type DataTypeBoolean = 'xs:boolean';
/**
 * A good class name indicates it's role. The use of a vocabulary-term is recommended, which in turn can be translated to any natural or domain language.
 */
export type SpecifText = string;
/**
 * For change and configuration management; the first revision has 0 entries, a simple modification has 1 entry and the result of a merge has 2 entries.
 *
 * @maxItems 2
 */
export type SpecifReplaces = [] | [SpecifRevision] | [SpecifRevision, SpecifRevision];
/**
 * The corresponding definition in https://www.w3.org/TR/xmlschema-2/ applies.
 */
export type DataTypeDateTimeDurationOrURI = 'xs:dateTime' | 'xs:duration' | 'xs:anyURI';
export type SpecifValue = string | SpecifMultiLanguageText;
/**
 * An optional list of values to choose from for a specific instance; multiple values are allowed, if 'multiple' is set to 'true'.
 */
export type EnumeratedValues = SpecifEnumeratedValue[];
/**
 * The corresponding definition in https://www.w3.org/TR/xmlschema-2/ applies.
 */
export type DataTypeInteger = 'xs:integer';
/**
 * Optional use by dataTypes 'xs:integer' and 'xs:double'.
 */
export type MinimumValueOfANumber = number;
/**
 * Optional use by dataTypes 'xs:integer' and 'xs:double'.
 */
export type MaximumValueOfANumber = number;
/**
 * The corresponding definition in https://www.w3.org/TR/xmlschema-2/ applies.
 */
export type DataTypeDouble = 'xs:double';
/**
 * Optional use by dataType 'xs:double', indicates the number of decimals.
 */
export type NumberOfFractionDigitsOfADecimalNumber = number;
/**
 * The corresponding definition in https://www.w3.org/TR/xmlschema-2/ applies.
 */
export type DataTypeStringWithPlainOrFormattedTextThePropertySTextObjectMAYSpecifyTheFormatAndLanguage = 'xs:string';
/**
 * Optional use by dataType 'xs:string'.
 */
export type MaximumStringLength = number;
/**
 * An optional list of default values in case the instantiated resource's or statement's property is missing.
 *
 * @minItems 1
 */
export type SpecifValues = [SpecifValue, ...SpecifValue[]];
/**
 * A symbol for display as a prefix to titles; applicable to all instances of the class. Is usually a XML-encoded UTF-8 symbol, can be an URL or dataURL.
 */
export type SpecifIcon = string;
/**
 * Indicates whether an instance of the class is created automatically, manually or both. All is allowed, if the property is omitted. The class is abstract and cannot be instantiated, if the property list is present, but empty.
 */
export type SpecifInstantiation = ('auto' | 'user')[];
/**
 * A list of keys referencing propertyClasses; a base resourceClass must have at least one propertyClass, whereas an extending class may have none.
 */
export type SpecifKeys = SpecifKey2[];
/**
 * The list of consolidated items to be used in case a consolidated item shall be updated.
 */
export type SpecifAlternativeIds = SpecifAlternativeId[];
/**
 * A list of properties of a resource or statement; the number of properties including any parent's properties must be >0.
 */
export type SpecifProperties = SpecifProperty[];
/**
 * A list of hierarchies with pointers to resources; may be nested to build a tree, i.e. a hierarchy of pointers.
 */
export type SpecifNodes = SpecifNode[];

/**
 * The Specification Integration Facility (SpecIF) integrates partial system models from different methods and tools in a semantic net. Collaborators shall browse, search and audit engineering results in a common context. Also, the exchange of model information between organizations and tools is facilitated. SpecIF represents the visible, i.e. the diagrams and the text, as well as the semantics of system specifications.
 */
export interface JSONSchemaForSpecIFV11 {
  /**
   * An absolute URL pointing to this SpecIF schema. Supports both specif.de and schemastore.org.
   */
  $schema: string;
  id: SpecifId;
  revision?: SpecifRevision;
  title?: SpecifMultiLanguageText;
  description?: SpecifMultiLanguageText;
  /**
   * Indicates that the project is not schema-compliant on its own; by default the value is 'false'. Of course, it is expected that once extended the project is schema-compliant.
   */
  isExtension?: boolean;
  generator?: string;
  generatorVersion?: string;
  rights?: SpecifRights;
  createdAt?: SpecifDateTime;
  createdBy?: SpecifCreatedBy;
  /**
   * An IETF language tag such as 'en', 'en-US, 'fr' or 'de' showing the used language of the project. Is superseded by a resource's, statement's or property's language value. By default, 'en' is assumed.
   */
  language?: string;
  /**
   * The base data types for use by property class definitions.
   */
  dataTypes: SpecifDataType[];
  /**
   * Class definition of a property for resources or statements. Is a sub-element of the respective resourceClass or statementClass. If no revision or change information is specified, the respective values of the parent element apply.
   */
  propertyClasses: SpecifPropertyClass[];
  /**
   * The class definitions for resources.
   */
  resourceClasses: SpecifResourceClass[];
  /**
   * The class definitions for statements in subject-predicate-object statements, where subject and object are resources.
   */
  statementClasses: SpecifStatementClass[];
  /**
   * The resources such as diagrams, model elements or requirements.
   */
  resources: SpecifResource[];
  /**
   * Subject-predicate-Object statements, where subject and object are resources. In other terms, statements are directed relations between two resources building a semantic net.
   */
  statements: SpecifStatement[];
  hierarchies: SpecifNodes;
  /**
   * A list of files being referenced by a resource's or statement's property of dataType XHTML using an <object> tag. A file should have a media type as defined by IANA (see below).
   */
  files?: SpecifFile[];
  [k: string]: unknown | undefined;
}
export interface SpecifRights {
  title: string;
  url: string;
  [k: string]: unknown | undefined;
}
/**
 * The creator of the SpecIF data-set (file). If specified, at least an e-mail address must be given.
 */
export interface SpecifCreatedBy {
  familyName?: string;
  givenName?: string;
  org?: SpecifOrg;
  email: string;
  [k: string]: unknown | undefined;
}
export interface SpecifOrg {
  organizationName: string;
  [k: string]: unknown | undefined;
}
export interface SpecifEnumeratedValue {
  id: SpecifId;
  value: SpecifValue;
  [k: string]: unknown | undefined;
}
export interface SpecifPropertyClass {
  id: SpecifId;
  title: SpecifText;
  description?: SpecifMultiLanguageText;
  dataType: SpecifKey;
  /**
   * Optional use by all propertyClasses. Indicates whether multiple values can be given. If omitted, the 'multiple' property of the dataType applies; by default the value is 'false'.
   */
  multiple?: boolean;
  values?: SpecifValues;
  /**
   * The default format of a property's text value. Is superseded by a text value's format attribute.
   */
  format?: 'plain' | 'xhtml';
  /**
   * The unit of a property's numeric value; preferably an SI unit symbol such as 'm^3/kg' (Système international (d'unités)) or a currency symbol.
   */
  unit?: string;
  revision?: SpecifRevision;
  replaces?: SpecifReplaces;
  changedAt: SpecifDateTime;
  changedBy?: string;
}
/**
 * A key for a particular revision of an identifiable item, e.g. of a resource. A key consists of a globally unique identifier and a revision. No or an undefined revision means the latest revision of the identified item.
 */
export interface SpecifKey {
  id: SpecifId;
  /**
   * A globally unique revision tag with one or multiple blocks with alphanumeric characters separated by a special character [.:,;/-]. Sequential as well as branching/merging notations are possible.
   */
  revision?: string;
}
export interface SpecifResourceClass {
  id: SpecifId;
  title: SpecifText;
  description?: SpecifMultiLanguageText;
  extends?: SpecifKey1;
  icon?: SpecifIcon;
  isHeading?: boolean;
  instantiation?: SpecifInstantiation;
  propertyClasses: SpecifKeys;
  revision?: SpecifRevision;
  replaces?: SpecifReplaces;
  changedAt: SpecifDateTime;
  changedBy?: string;
}
/**
 * A key for a particular revision of an identifiable item, e.g. of a resource. A key consists of a globally unique identifier and a revision. No or an undefined revision means the latest revision of the identified item.
 */
export interface SpecifKey1 {
  id: SpecifId;
  /**
   * A globally unique revision tag with one or multiple blocks with alphanumeric characters separated by a special character [.:,;/-]. Sequential as well as branching/merging notations are possible.
   */
  revision?: string;
}
/**
 * A key for a particular revision of an identifiable item, e.g. of a resource. A key consists of a globally unique identifier and a revision. No or an undefined revision means the latest revision of the identified item.
 */
export interface SpecifKey2 {
  id: SpecifId;
  /**
   * A globally unique revision tag with one or multiple blocks with alphanumeric characters separated by a special character [.:,;/-]. Sequential as well as branching/merging notations are possible.
   */
  revision?: string;
}
export interface SpecifStatementClass {
  id: SpecifId;
  title: SpecifText;
  description?: SpecifMultiLanguageText;
  extends?: SpecifKey3;
  icon?: SpecifIcon;
  instantiation?: SpecifInstantiation;
  /**
   * Indicates that an instance's subject and object are equivalent and can be exchanged without change in meaning.
   */
  isUndirected?: boolean;
  propertyClasses?: SpecifKeys;
  subjectClasses?: SpecifKeys;
  objectClasses?: SpecifKeys;
  revision?: SpecifRevision;
  replaces?: SpecifReplaces;
  changedAt: SpecifDateTime;
  changedBy?: string;
}
/**
 * A key for a particular revision of an identifiable item, e.g. of a resource. A key consists of a globally unique identifier and a revision. No or an undefined revision means the latest revision of the identified item.
 */
export interface SpecifKey3 {
  id: SpecifId;
  /**
   * A globally unique revision tag with one or multiple blocks with alphanumeric characters separated by a special character [.:,;/-]. Sequential as well as branching/merging notations are possible.
   */
  revision?: string;
}
export interface SpecifResource {
  id: SpecifId;
  alternativeIds?: SpecifAlternativeIds;
  class: SpecifKey4;
  /**
   * An IETF language tag such as 'en', 'en-US, 'fr' or 'de' showing the used language of the resource. Is superseded by a property's language value.
   */
  language?: string;
  properties: SpecifProperties;
  revision?: SpecifRevision;
  replaces?: SpecifReplaces;
  changedAt: SpecifDateTime;
  changedBy?: string;
  [k: string]: unknown | undefined;
}
/**
 * A list of pointers to resources resp. statements which have been merged to this one.
 */
export interface SpecifAlternativeId {
  /**
   * A string with a valid identifier of a model-element
   */
  id: string;
  /**
   * If missing, the latest revision is implied.
   */
  revision?: string;
  /**
   * A string with a valid project identifier in case the identifier is not globally unique.
   */
  project?: string;
}
/**
 * A key for a particular revision of an identifiable item, e.g. of a resource. A key consists of a globally unique identifier and a revision. No or an undefined revision means the latest revision of the identified item.
 */
export interface SpecifKey4 {
  id: SpecifId;
  /**
   * A globally unique revision tag with one or multiple blocks with alphanumeric characters separated by a special character [.:,;/-]. Sequential as well as branching/merging notations are possible.
   */
  revision?: string;
}
export interface SpecifProperty {
  class: SpecifKey5;
  values: SpecifValues;
  [k: string]: unknown | undefined;
}
/**
 * A key for a particular revision of an identifiable item, e.g. of a resource. A key consists of a globally unique identifier and a revision. No or an undefined revision means the latest revision of the identified item.
 */
export interface SpecifKey5 {
  id: SpecifId;
  /**
   * A globally unique revision tag with one or multiple blocks with alphanumeric characters separated by a special character [.:,;/-]. Sequential as well as branching/merging notations are possible.
   */
  revision?: string;
}
export interface SpecifStatement {
  id: SpecifId;
  alternativeIds?: SpecifAlternativeIds;
  class: SpecifKey6;
  /**
   * An IETF language tag such as 'en', 'en-US, 'fr' or 'de' showing the used language of the statement. Is superseded by a property's language value.
   */
  language?: string;
  subject: SpecifKey7;
  object: SpecifKey8;
  /**
   * A list of properties of a resource or statement; the number of properties including any parent's properties must be >0.
   */
  properties?: SpecifProperty[];
  revision?: SpecifRevision;
  replaces?: SpecifReplaces;
  changedAt: SpecifDateTime;
  changedBy?: string;
  [k: string]: unknown | undefined;
}
/**
 * A key for a particular revision of an identifiable item, e.g. of a resource. A key consists of a globally unique identifier and a revision. No or an undefined revision means the latest revision of the identified item.
 */
export interface SpecifKey6 {
  id: SpecifId;
  /**
   * A globally unique revision tag with one or multiple blocks with alphanumeric characters separated by a special character [.:,;/-]. Sequential as well as branching/merging notations are possible.
   */
  revision?: string;
}
/**
 * A key for a particular revision of an identifiable item, e.g. of a resource. A key consists of a globally unique identifier and a revision. No or an undefined revision means the latest revision of the identified item.
 */
export interface SpecifKey7 {
  id: SpecifId;
  /**
   * A globally unique revision tag with one or multiple blocks with alphanumeric characters separated by a special character [.:,;/-]. Sequential as well as branching/merging notations are possible.
   */
  revision?: string;
}
/**
 * A key for a particular revision of an identifiable item, e.g. of a resource. A key consists of a globally unique identifier and a revision. No or an undefined revision means the latest revision of the identified item.
 */
export interface SpecifKey8 {
  id: SpecifId;
  /**
   * A globally unique revision tag with one or multiple blocks with alphanumeric characters separated by a special character [.:,;/-]. Sequential as well as branching/merging notations are possible.
   */
  revision?: string;
}
export interface SpecifNode {
  id: SpecifId;
  title?: SpecifMultiLanguageText;
  description?: SpecifMultiLanguageText;
  resource: SpecifKey9;
  nodes?: SpecifNodes;
  revision?: SpecifRevision;
  replaces?: SpecifReplaces;
  changedAt: SpecifDateTime;
  changedBy?: string;
  [k: string]: unknown | undefined;
}
/**
 * A key for a particular revision of an identifiable item, e.g. of a resource. A key consists of a globally unique identifier and a revision. No or an undefined revision means the latest revision of the identified item.
 */
export interface SpecifKey9 {
  id: SpecifId;
  /**
   * A globally unique revision tag with one or multiple blocks with alphanumeric characters separated by a special character [.:,;/-]. Sequential as well as branching/merging notations are possible.
   */
  revision?: string;
}
export interface SpecifFile {
  id: SpecifId;
  /**
   * The file's name.
   */
  title: string;
  description?: SpecifMultiLanguageText;
  /**
   * An absolute or relative URL to the file; will be of format 'uri-reference' in future. If missing, the title applies.
   */
  url?: string;
  /**
   * The file's media type (formerly MIME-type) according to https://www.iana.org/assignments/media-types/media-types.xhtml.
   */
  type: string;
  revision?: SpecifRevision;
  replaces?: SpecifReplaces;
  changedAt: SpecifDateTime;
  changedBy?: string;
  [k: string]: unknown | undefined;
}
