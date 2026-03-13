/* eslint-disable */

/**
 * A globally unique identifier.
 */
export type Id = string;
/**
 * A property value according to the property class.
 */
export type Value =
  | string
  | {
      /**
       * A string containing some text.
       */
      text: string;
      /**
       * An IETF language tag such as 'en', 'en-US, 'fr' or 'de'.
       */
      language: string;
    }[];
/**
 * An ISO-8601 dateTime string. For reduced accuracy, any number of values may be dropped, but only from right to left.
 */
export type DateTime = string;
/**
 * The corresponding definition in https://www.w3.org/TR/xmlschema-2/ applies.
 */
export type DataTypeBooleanOrDateTime = 'xs:boolean' | 'xs:dateTime';
/**
 * A globally unique revision tag with one or multiple blocks with alphanumeric characters separated by a special character [.:,;/-]. Sequential as well as branching/merging notations are possible.
 */
export type Revision = string;
/**
 * For change and configuration management; the first revision has 0 entries, a simple modification has 1 entry and the result of a merge has 2 entries.
 *
 * @maxItems 2
 */
export type Replaces = [] | [Revision] | [Revision, Revision];
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
 * Optional use by dataTypes 'xs:integer' and 'xs:double'.
 */
export type MinimumValueOfANumber1 = number;
/**
 * Optional use by dataTypes 'xs:integer' and 'xs:double'.
 */
export type MaximumValueOfANumber1 = number;
/**
 * The corresponding definition in https://www.w3.org/TR/xmlschema-2/ resp. https://www.w3.org/TR/xhtml1/ applies.
 */
export type DataTypeStringOrFormattedText = 'xs:string' | 'xhtml';
/**
 * Optional use by dataTypes 'xs:string' and 'xhtml'.
 */
export type MaximumStringLength = number;
/**
 * The corresponding definition in https://www.w3.org/TR/xmlschema-2/ applies.
 */
export type DataTypeEnumeration = 'xs:enumeration';
/**
 * Mandatory use by dataType 'xs:enumeration'. If 'multiple' is true 0..n options may be selected, otherwise exactly one must be selected.
 */
export type EnumeratedValues = {
  id: Id;
  value: Value;
  [k: string]: unknown | undefined;
}[];
/**
 * A symbol for display as a prefix to titles; applicable to all instances of the class. Is usually a XML-encoded UTF-8 symbol, can be an URL or dataURL.
 */
export type Icon = string;
/**
 * Indicates whether an instance of the class is created automatically, manually or both. All is allowed, if the property is omitted. The class is abstract and cannot be instantiated, if the property list is present, but empty.
 */
export type Instantiation = ('auto' | 'user')[];
/**
 * A collection of id's of eligible resource and statement classes; if 'subjectClasses' is missing, all resource or statement classes are eligible.
 *
 * @minItems 1
 */
export type ResourceAndStatementClassesEligibleAsSubject = [
  (
    | string
    | {
        id: Id;
        revision?: Revision;
        [k: string]: unknown | undefined;
      }
  ),
  ...(
    | string
    | {
        id: Id;
        revision?: Revision;
        [k: string]: unknown | undefined;
      }
  )[]
];
/**
 * A collection of id's of eligible resource and statement classes; if 'objectClasses' is missing, all resource or statement classes are eligible.
 *
 * @minItems 1
 */
export type ResourceAndStatementClassesEligibleAsObject = [
  (
    | string
    | {
        id: Id;
        revision?: Revision;
        [k: string]: unknown | undefined;
      }
  ),
  ...(
    | string
    | {
        id: Id;
        revision?: Revision;
        [k: string]: unknown | undefined;
      }
  )[]
];
/**
 * A list of properties of a resource or statement.
 */
export type Properties = {
  id?: Id;
  /**
   * A property value according to the property class.
   */
  title?:
    | string
    | {
        /**
         * A string containing some text.
         */
        text: string;
        /**
         * An IETF language tag such as 'en', 'en-US, 'fr' or 'de'.
         */
        language: string;
      }[];
  description?: Value;
  /**
   * Must be a member of propertyClasses. In addition, it must be listed in the propertyClasses of the parent's class.
   */
  class:
    | string
    | {
        id: Id;
        revision?: Revision;
        [k: string]: unknown | undefined;
      };
  /**
   * A property value according to the property class.
   */
  value:
    | string
    | {
        /**
         * A string containing some text.
         */
        text: string;
        /**
         * An IETF language tag such as 'en', 'en-US, 'fr' or 'de'.
         */
        language: string;
      }[];
  revision?: Revision;
  replaces?: Replaces;
  /**
   * An ISO-8601 dateTime string. For reduced accuracy, any number of values may be dropped, but only from right to left.
   */
  changedAt?: string;
  changedBy?: string;
  [k: string]: unknown | undefined;
}[];
/**
 * The list of consolidated items which can be used in case a consolidated item shall be updated.
 */
export type AlternativeIds = (
  | string
  | {
      /**
       * A globally unique identifier.
       */
      id: string;
      revision?: Revision;
      /**
       * A globally unique identifier.
       */
      project?: string;
      [k: string]: unknown | undefined;
    }
)[];
/**
 * The next hierarchy level.
 */
export type Nodes1 = {
  id: Id;
  /**
   * The node's label; if missing, the title of the referenced resource is applied.
   */
  title?:
    | string
    | {
        /**
         * A string containing some text.
         */
        text: string;
        /**
         * An IETF language tag such as 'en', 'en-US, 'fr' or 'de'.
         */
        language: string;
      }[];
  description?: Value;
  /**
   * The pointer to the resource to be displayed at this position.
   */
  resource:
    | string
    | {
        id: Id;
        revision?: Revision;
        [k: string]: unknown | undefined;
      };
  nodes?: Nodes1;
  revision?: Revision;
  replaces?: Replaces;
  changedAt: DateTime;
  changedBy?: string;
  [k: string]: unknown | undefined;
}[];
/**
 * A list of hierarchies with pointers to resources; may be nested to build a tree, i.e. a hierarchy of pointers.
 */
export type Nodes = {
  id: Id;
  /**
   * The node's label; if missing, the title of the referenced resource is applied.
   */
  title?:
    | string
    | {
        /**
         * A string containing some text.
         */
        text: string;
        /**
         * An IETF language tag such as 'en', 'en-US, 'fr' or 'de'.
         */
        language: string;
      }[];
  description?: Value;
  /**
   * The pointer to the resource to be displayed at this position.
   */
  resource:
    | string
    | {
        id: Id;
        revision?: Revision;
        [k: string]: unknown | undefined;
      };
  nodes?: Nodes1;
  revision?: Revision;
  replaces?: Replaces;
  changedAt: DateTime;
  changedBy?: string;
  [k: string]: unknown | undefined;
}[];

/**
 * The Specification Integration Facility (SpecIF) integrates partial system models from different methods and tools in a semantic net. Collaborators shall browse, search and audit engineering results in a common context. Also, the exchange of model information between organizations and tools is facilitated. SpecIF represents the visible, i.e. the diagrams and the text, as well as the semantics of system specifications.
 */
export interface JSONSchemaForSpecIFV10 {
  /**
   * An absolute URL pointing to this SpecIF schema.
   */
  $schema: string;
  id: Id;
  title: Value;
  description?: Value;
  /**
   * Indicates that the project is not schema-compliant on its own; by default the value is 'false'. Of course, it is expected that once extended the project is schema-compliant.
   */
  isExtension?: boolean;
  generator?: string;
  generatorVersion?: string;
  rights?: {
    title: string;
    type: string;
    url: string;
    [k: string]: unknown | undefined;
  };
  createdAt?: DateTime;
  /**
   * The creator of the SpecIF data-set (file). If specified, at least an e-mail address must be given.
   */
  createdBy?: {
    familyName?: string;
    givenName?: string;
    org?: {
      organizationName: string;
      [k: string]: unknown | undefined;
    };
    email: {
      type?: string;
      value: string;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * An IETF language tag such as 'en', 'en-US, 'fr' or 'de' showing the used language of simple property values. Is superseded by a resource's, statement's or property's language value.
   */
  language?: string;
  /**
   * The base data types for use by property class definitions.
   */
  dataTypes?: (
    | {
        type: DataTypeBooleanOrDateTime;
        id: Id;
        title: Value;
        description?: Value;
        revision?: Revision;
        replaces?: Replaces;
        changedAt: DateTime;
        changedBy?: string;
      }
    | {
        type: DataTypeInteger;
        id: Id;
        title: Value;
        description?: Value;
        minInclusive?: MinimumValueOfANumber;
        maxInclusive?: MaximumValueOfANumber;
        revision?: Revision;
        replaces?: Replaces;
        changedAt: DateTime;
        changedBy?: string;
      }
    | {
        type: DataTypeDouble;
        id: Id;
        title: Value;
        description?: Value;
        fractionDigits?: NumberOfFractionDigitsOfADecimalNumber;
        minInclusive?: MinimumValueOfANumber1;
        maxInclusive?: MaximumValueOfANumber1;
        revision?: Revision;
        replaces?: Replaces;
        changedAt: DateTime;
        changedBy?: string;
      }
    | {
        type: DataTypeStringOrFormattedText;
        id: Id;
        title: Value;
        description?: Value;
        maxLength?: MaximumStringLength;
        revision?: Revision;
        replaces?: Replaces;
        changedAt: DateTime;
        changedBy?: string;
      }
    | {
        type: DataTypeEnumeration;
        id: Id;
        title: Value;
        description?: Value;
        values?: EnumeratedValues;
        /**
         * Optional use by dataType 'xs:enumeration'. Indicates whether multiple values can be chosen; by default the value is 'false'.
         */
        multiple?: boolean;
        revision?: Revision;
        replaces?: Replaces;
        changedAt: DateTime;
        changedBy?: string;
      }
  )[];
  /**
   * Class definition of a property for resources or statements. Is a sub-element of the respective resourceClass or statementClass. If no revision or change information is specified, the respective values of the parent element apply.
   */
  propertyClasses?: {
    id: Id;
    title: Value;
    description?: Value;
    /**
     * Must be a member of dataTypes.
     */
    dataType:
      | string
      | {
          id: Id;
          revision?: Revision;
          [k: string]: unknown | undefined;
        };
    /**
     * Optional use by a propertyClass with dataType 'xs:enumeration'. Indicates whether multiple values can be chosen. If omitted, the 'multiple' property of the dataType applies; by default the value is 'false'.
     */
    multiple?: boolean;
    /**
     * A property value according to the property class.
     */
    value?:
      | string
      | {
          /**
           * A string containing some text.
           */
          text: string;
          /**
           * An IETF language tag such as 'en', 'en-US, 'fr' or 'de'.
           */
          language: string;
        }[];
    revision?: Revision;
    replaces?: Replaces;
    changedAt: DateTime;
    changedBy?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * The class definitions for resources.
   */
  resourceClasses: {
    id: Id;
    title: Value;
    description?: Value;
    /**
     * Must be a member of resourceClasses.
     */
    extends?:
      | string
      | {
          id: Id;
          revision?: Revision;
          [k: string]: unknown | undefined;
        };
    icon?: Icon;
    isHeading?: boolean;
    instantiation?: Instantiation;
    /**
     * A collection of keys of eligible property classes
     *
     * @minItems 0
     */
    propertyClasses?: (
      | string
      | {
          id: Id;
          revision?: Revision;
          [k: string]: unknown | undefined;
        }
    )[];
    revision?: Revision;
    replaces?: Replaces;
    changedAt: DateTime;
    changedBy?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * The class definitions for statements in subject-predicate-object statements, where subject and object are resources.
   */
  statementClasses: {
    id: Id;
    title: Value;
    description?: Value;
    /**
     * Must be a member of statementClasses.
     */
    extends?:
      | string
      | {
          id: Id;
          revision?: Revision;
          [k: string]: unknown | undefined;
        };
    icon?: Icon;
    instantiation?: Instantiation;
    /**
     * Indicates that an instance's subject and object are equivalent and can be exchanged without changing its meaning. Is superseded by a statement's definition.
     */
    isUndirected?: boolean;
    /**
     * A collection of keys of eligible property classes
     *
     * @minItems 0
     */
    propertyClasses?: (
      | string
      | {
          id: Id;
          revision?: Revision;
          [k: string]: unknown | undefined;
        }
    )[];
    subjectClasses?: ResourceAndStatementClassesEligibleAsSubject;
    objectClasses?: ResourceAndStatementClassesEligibleAsObject;
    revision?: Revision;
    replaces?: Replaces;
    changedAt: DateTime;
    changedBy?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * The resources such as diagrams, model elements or requirements.
   */
  resources: {
    id: Id;
    title: Value;
    description?: Value;
    /**
     * Must be a member of resourceClasses.
     */
    class:
      | string
      | {
          id: Id;
          revision?: Revision;
          [k: string]: unknown | undefined;
        };
    /**
     * An IETF language tag such as 'en', 'en-US, 'fr' or 'de' showing the used language of simple property values. Is superseded by a property's language value.
     */
    language?: string;
    properties?: Properties;
    revision?: Revision;
    replaces?: Replaces;
    alternativeIds?: AlternativeIds;
    changedAt: DateTime;
    changedBy?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Subject-predicate-Object statements, where subject and object are resources. In other terms, statements are directed relations between two resources building a semantic net.
   */
  statements: {
    id: Id;
    /**
     * A property value according to the property class.
     */
    title?:
      | string
      | {
          /**
           * A string containing some text.
           */
          text: string;
          /**
           * An IETF language tag such as 'en', 'en-US, 'fr' or 'de'.
           */
          language: string;
        }[];
    description?: Value;
    /**
     * Must be a member of statementClasses.
     */
    class:
      | string
      | {
          id: Id;
          revision?: Revision;
          [k: string]: unknown | undefined;
        };
    /**
     * Must be a member of resources or statements.
     */
    subject:
      | string
      | {
          id: Id;
          revision?: Revision;
          [k: string]: unknown | undefined;
        };
    /**
     * Must be a member of resources or statements.
     */
    object:
      | string
      | {
          id: Id;
          revision?: Revision;
          [k: string]: unknown | undefined;
        };
    /**
     * An IETF language tag such as 'en', 'en-US, 'fr' or 'de' showing the used language of simple property values. Is superseded by a property's language value.
     */
    language?: string;
    properties?: Properties;
    revision?: Revision;
    replaces?: Replaces;
    alternativeIds?: AlternativeIds;
    changedAt: DateTime;
    changedBy?: string;
    [k: string]: unknown | undefined;
  }[];
  hierarchies: Nodes;
  /**
   * A list of files being referenced by a resource's or statement's property of dataType XHTML using an <object> tag. A file should have a media type as defined by IANA (see below).
   */
  files?: {
    id: Id;
    /**
     * A property value according to the property class.
     */
    title:
      | string
      | {
          /**
           * A string containing some text.
           */
          text: string;
          /**
           * An IETF language tag such as 'en', 'en-US, 'fr' or 'de'.
           */
          language: string;
        }[];
    description?: Value;
    /**
     * The file's media type (formerly MIME-type) according to https://www.iana.org/assignments/media-types/media-types.xhtml.
     */
    type: string;
    revision?: Revision;
    replaces?: Replaces;
    changedAt: DateTime;
    changedBy?: string;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
