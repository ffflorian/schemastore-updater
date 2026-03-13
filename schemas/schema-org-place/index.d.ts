/* eslint-disable */

/**
 * This is a JSON schema representation of the schema.org Place schema: https://schema.org/Place
 */
export type JSONSchemaForSchemaOrgPlace = JSONSchemaForSchemaOrgThing & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * override the @type property to ensure Place is used
   */
  '@type': string;
  /**
   * A property-value pair representing an additional characteristics of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
   */
  additionalProperty?: {
    [k: string]: unknown | undefined;
  }[];
  address?:
    | {
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * AggregateRating -- The overall rating, based on a collection of reviews or ratings, of the item.
   */
  aggregateRating?: {
    [k: string]: unknown | undefined;
  };
  /**
   * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
   */
  amenityFeature?: {
    [k: string]: unknown | undefined;
  }[];
  /**
   * A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.
   */
  branchCode?: string;
  containedInPlace?: JSONSchemaForSchemaOrgThing1;
  containsPlace?: JSONSchemaForSchemaOrgThing2;
  /**
   * Event
   */
  event?: {
    [k: string]: unknown | undefined;
  };
  /**
   * The fax number.
   */
  faxNumber?: string;
  /**
   * The geo coordinates of the place.
   */
  geo?: {
    [k: string]: unknown | undefined;
  };
  /**
   * The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
   */
  globalLocationNumber?: string;
  /**
   * A URL to a map of the place. Supersedes map, maps.
   */
  hasMap?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
   */
  isicV4?: string;
  /**
   * An associated logo.
   */
  logo?:
    | {
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * OpeningHoursSpecification
   */
  openingHoursSpecification?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A photograph of this place. Supersedes photos.
   */
  photo?: {
    [k: string]: unknown | undefined;
  }[];
  /**
   * A review of the item. Supersedes reviews.
   */
  review?: {
    [k: string]: unknown | undefined;
  }[];
  /**
   * Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.
   */
  smokingAllowed?: boolean;
  /**
   * The special opening hours of a certain place. Use this to explicitly override general opening hours brought in scope by openingHoursSpecification or openingHours.
   */
  specialOpeningHoursSpecification?: {
    [k: string]: unknown | undefined;
  }[];
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
 * Place
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
 * Place
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
