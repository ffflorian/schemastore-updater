/* eslint-disable */

/**
 * This is a JSON schema representation of the schema.org Action schema: https://schema.org/Action
 */
export type JSONSchemaForSchemaOrgAction = JSONSchemaForSchemaOrgThing & {
  /**
   * override the @context property to ensure the schema.org URI is used
   */
  '@context'?: string;
  /**
   * override the @type property to ensure Action is used
   */
  '@type': string;
  /**
   * Indicates the current disposition of the Action.
   */
  actionStatus?: {
    [k: string]: unknown | undefined;
  };
  /**
   * The direct performer or driver of the action (animate or inanimate). e.g. John wrote a book.
   */
  agent?: JSONSchemaForSchemaOrgThing1 | JSONSchemaForSchemaOrgThing2;
  /**
   * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to December.
   */
  endTime?: string;
  error?: JSONSchemaForSchemaOrgThing3;
  instrument?: JSONSchemaForSchemaOrgThing4;
  /**
   * The location of for example where the event is happening, an organization is located, or where an action takes place.
   */
  location?: JSONSchemaForSchemaOrgThing5 | JSONSchemaForSchemaOrgThing6 | string;
  object?: JSONSchemaForSchemaOrgThing7;
  /**
   * Other co-agents that participated in the action indirectly. e.g. John wrote a book with Steve.
   */
  participant?:
    | JSONSchemaForSchemaOrgThing8
    | JSONSchemaForSchemaOrgThing9
    | ((JSONSchemaForSchemaOrgThing10 | JSONSchemaForSchemaOrgThing11) & unknown[]);
  result?: JSONSchemaForSchemaOrgThing12;
  /**
   * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to December.
   */
  startTime?: string;
  /**
   * Indicates a target EntryPoint for an Action.
   */
  target?: {
    [k: string]: unknown | undefined;
  };
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
 * Organization
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
 * Person
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
 * For failed actions, more information on the cause of the failure.
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
 * The object that helped the agent perform the action. e.g. John wrote a book with a pen.
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
 * Place
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
 * PostalAddress
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
 * The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read a book.
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
 * Organization
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
 * Person
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
 * Organization
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
 * Person
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
/**
 * The result produced in the action. e.g. John wrote a book.
 */
export type JSONSchemaForSchemaOrgThing12 = SchemaForJSONLD & {
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
