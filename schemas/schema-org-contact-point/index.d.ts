/* eslint-disable */

/**
 * This is a JSON schema representation of the schema.org Action schema: https://schema.org/ContactPoint
 */
export type JSONSchemaForSchemaOrgContactPoint = JSONSchemaForSchemaOrgThing & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * override the @type property to ensure ContactPoint is used
   */
  '@type': string;
  /**
   * The geographic area where a service or offered item is provided. Supersedes serviceArea.
   */
  areaServed?:
    | (JSONSchemaForSchemaOrgThing1 | JSONSchemaForSchemaOrgThing2 | JSONSchemaForSchemaOrgThing3 | string)[]
    | (JSONSchemaForSchemaOrgThing4 | JSONSchemaForSchemaOrgThing5 | JSONSchemaForSchemaOrgThing6 | string);
  /**
   * A language someone may use with the item. Please use one of the language codes from the IETF BCP 47 standard. See also inLanguage
   */
  availableLanguage?: (string | JSONSchemaForSchemaOrgThing7) | (string | JSONSchemaForSchemaOrgThing8)[];
  /**
   * An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).
   */
  contactOption?: ('HearingImpairedSupported' | 'TollFree')[] | ('HearingImpairedSupported' | 'TollFree');
  /**
   * A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.
   */
  contactType?: string;
  /**
   * Email address.
   */
  email?: string;
  /**
   * The fax number.
   */
  faxNumber?: string;
  hoursAvailable?: JSONSchemaForSchemaOrgThing9;
  /**
   * The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones").
   */
  productSupported?: (string | JSONSchemaForSchemaOrgThing10)[] | (string | JSONSchemaForSchemaOrgThing11);
  /**
   * The telephone number.
   */
  telephone?: string;
  [k: string]: unknown | undefined;
};
/**
 * This is a JSON schema representation of the schema.org Thing schema: https://schema.org/Thing
 */
export type JSONSchemaForSchemaOrgThing = SchemaForJSONLD & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a URL or a fully described ImageObject.
   */
  image?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property mainEntity.
   */
  mainEntityOfPage?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: {
    [k: string]: unknown | undefined;
  };
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
   */
  sameAs?: string;
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown | undefined;
};
export type SchemaForJSONLD = Context &
  Graph &
  Common &
  (
    | {
        [k: string]: unknown | undefined;
      }
    | unknown[]
  );
/**
 * AdministrativeArea
 */
export type JSONSchemaForSchemaOrgThing1 = SchemaForJSONLD & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a URL or a fully described ImageObject.
   */
  image?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property mainEntity.
   */
  mainEntityOfPage?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: {
    [k: string]: unknown | undefined;
  };
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
   */
  sameAs?: string;
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown | undefined;
};
/**
 * GeoShape
 */
export type JSONSchemaForSchemaOrgThing2 = SchemaForJSONLD & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a URL or a fully described ImageObject.
   */
  image?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property mainEntity.
   */
  mainEntityOfPage?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: {
    [k: string]: unknown | undefined;
  };
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
   */
  sameAs?: string;
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown | undefined;
};
/**
 * Place
 */
export type JSONSchemaForSchemaOrgThing3 = SchemaForJSONLD & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a URL or a fully described ImageObject.
   */
  image?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property mainEntity.
   */
  mainEntityOfPage?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: {
    [k: string]: unknown | undefined;
  };
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
   */
  sameAs?: string;
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown | undefined;
};
/**
 * AdministrativeArea
 */
export type JSONSchemaForSchemaOrgThing4 = SchemaForJSONLD & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a URL or a fully described ImageObject.
   */
  image?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property mainEntity.
   */
  mainEntityOfPage?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: {
    [k: string]: unknown | undefined;
  };
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
   */
  sameAs?: string;
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown | undefined;
};
/**
 * GeoShape
 */
export type JSONSchemaForSchemaOrgThing5 = SchemaForJSONLD & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a URL or a fully described ImageObject.
   */
  image?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property mainEntity.
   */
  mainEntityOfPage?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: {
    [k: string]: unknown | undefined;
  };
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
   */
  sameAs?: string;
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown | undefined;
};
/**
 * Place
 */
export type JSONSchemaForSchemaOrgThing6 = SchemaForJSONLD & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a URL or a fully described ImageObject.
   */
  image?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property mainEntity.
   */
  mainEntityOfPage?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: {
    [k: string]: unknown | undefined;
  };
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
   */
  sameAs?: string;
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown | undefined;
};
/**
 * Language
 */
export type JSONSchemaForSchemaOrgThing7 = SchemaForJSONLD & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a URL or a fully described ImageObject.
   */
  image?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property mainEntity.
   */
  mainEntityOfPage?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: {
    [k: string]: unknown | undefined;
  };
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
   */
  sameAs?: string;
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown | undefined;
};
/**
 * Language
 */
export type JSONSchemaForSchemaOrgThing8 = SchemaForJSONLD & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a URL or a fully described ImageObject.
   */
  image?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property mainEntity.
   */
  mainEntityOfPage?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: {
    [k: string]: unknown | undefined;
  };
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
   */
  sameAs?: string;
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown | undefined;
};
/**
 * The hours during which this service or contact is available. (OpeningHoursSpecification)
 */
export type JSONSchemaForSchemaOrgThing9 = SchemaForJSONLD & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a URL or a fully described ImageObject.
   */
  image?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property mainEntity.
   */
  mainEntityOfPage?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: {
    [k: string]: unknown | undefined;
  };
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
   */
  sameAs?: string;
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown | undefined;
};
/**
 * Product
 */
export type JSONSchemaForSchemaOrgThing10 = SchemaForJSONLD & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a URL or a fully described ImageObject.
   */
  image?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property mainEntity.
   */
  mainEntityOfPage?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: {
    [k: string]: unknown | undefined;
  };
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
   */
  sameAs?: string;
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown | undefined;
};
/**
 * Product
 */
export type JSONSchemaForSchemaOrgThing11 = SchemaForJSONLD & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a URL or a fully described ImageObject.
   */
  image?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details. Inverse property mainEntity.
   */
  mainEntityOfPage?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: {
    [k: string]: unknown | undefined;
  };
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
   */
  sameAs?: string;
  /**
   * URL of the item.
   */
  url?: string;
  [k: string]: unknown | undefined;
};

export interface Context {
  /**
   * Used to define the short-hand names that are used throughout a JSON-LD document.
   */
  '@context'?:
    | {
        [k: string]: unknown | undefined;
      }
    | string
    | unknown[]
    | null;
  [k: string]: unknown | undefined;
}
export interface Graph {
  /**
   * Used to express a graph.
   */
  '@graph'?: Common[] | Common1;
  [k: string]: unknown | undefined;
}
export interface Common {
  /**
   * Used to uniquely identify things that are being described in the document with IRIs or blank node identifiers.
   */
  '@id'?: string;
  /**
   * Used to specify the data that is associated with a particular property in the graph.
   */
  '@value'?: string | boolean | number | null;
  /**
   * Used to specify the language for a particular string value or the default language of a JSON-LD document.
   */
  '@language'?: string | null;
  /**
   * Used to set the data type of a node or typed value.
   */
  '@type'?: string | null | unknown[];
  /**
   * Used to set the default container type for a term.
   */
  '@container'?: ('@language' | '@list' | '@index' | '@set') | null;
  /**
   * Used to express an ordered set of data.
   */
  '@list'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Used to express an unordered set of data and to ensure that values are always represented as arrays.
   */
  '@set'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Used to express reverse properties.
   */
  '@reverse'?:
    | string
    | {
        [k: string]: Common | undefined;
      }
    | null;
  /**
   * Used to set the base IRI against which relative IRIs are resolved
   */
  '@base'?: string | null;
  /**
   * Used to expand properties and values in @type with a common prefix IRI
   */
  '@vocab'?: string | null;
  [k: string]: Common | undefined;
}
export interface Common1 {
  /**
   * Used to uniquely identify things that are being described in the document with IRIs or blank node identifiers.
   */
  '@id'?: string;
  /**
   * Used to specify the data that is associated with a particular property in the graph.
   */
  '@value'?: string | boolean | number | null;
  /**
   * Used to specify the language for a particular string value or the default language of a JSON-LD document.
   */
  '@language'?: string | null;
  /**
   * Used to set the data type of a node or typed value.
   */
  '@type'?: string | null | unknown[];
  /**
   * Used to set the default container type for a term.
   */
  '@container'?: ('@language' | '@list' | '@index' | '@set') | null;
  /**
   * Used to express an ordered set of data.
   */
  '@list'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Used to express an unordered set of data and to ensure that values are always represented as arrays.
   */
  '@set'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Used to express reverse properties.
   */
  '@reverse'?:
    | string
    | {
        [k: string]: Common | undefined;
      }
    | null;
  /**
   * Used to set the base IRI against which relative IRIs are resolved
   */
  '@base'?: string | null;
  /**
   * Used to expand properties and values in @type with a common prefix IRI
   */
  '@vocab'?: string | null;
  [k: string]: Common | undefined;
}
