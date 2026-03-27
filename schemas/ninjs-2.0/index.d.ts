/* eslint-disable */

/**
 * The global unique identifier for this news object. This is the only required property and should identify the ninjs object, not be used for links to external resources etc.  nar:newsItem@guid
 */
export type UniformResourceIdentifier = string;
/**
 * The generic news type of this news object. (Value 'component' added in version 1.2 as issue #21.). See: http://cv.iptc.org/newscodes/ninature/ nar:itemClass
 */
export type Type = 'text' | 'audio' | 'video' | 'picture' | 'graphic' | 'composite' | 'component';
/**
 * Indicates how complete this representation of a news item is. No mapping to nar. Specific for ninjs.
 */
export type RepresentationType = 'full' | 'partial';
/**
 * An identifier for the structure of the news object. This can be any string but we suggest something identifying the structure of the content such as 'text-only' or 'text-photo'. Profiles are typically provider-specific. nar:profile
 */
export type Profile = string;
/**
 * The version of the news object which is identified by the uri property. nar:newsItem@version
 */
export type Version = string;
/**
 * Indicates when the first version of this ninjs object was created. (Added in version 1.2 from issue #5). nar:firstCreated
 */
export type FirstCreated = string;
/**
 * The date and time when this version of this ninjs object was created. nar:versionCreated
 */
export type VersionCreated = string;
/**
 * The date and time when the content of this ninjs object was originally created. For example and old photo that is now handled as a ninjs object. nar:contentCreated
 */
export type ContentCreated = string;
/**
 * The date and time before which all versions of the news object are embargoed. If absent, this object is not embargoed. nar:embargoed
 */
export type Embargoed = string;
/**
 * The publishing status of the news object, its value is *usable* by default. nar:pubStatus
 */
export type PublicationStatus = 'usable' | 'withheld' | 'canceled';
/**
 * The editorial urgency of the content. Values from 1 to 9. 1 represents the highest urgency, 9 the lowest. nar:urgency
 */
export type Urgency = number;
/**
 * The person or organisation claiming the intellectual property for the content. nar:copyrightHolder
 */
export type CopyrightHolder = string;
/**
 * Any necessary copyright notice for claiming the intellectual property for the content. nar:copyrightNotice
 */
export type CopyrightNotice = string;
/**
 * A natural-language statement about the usage terms pertaining to the content. nar:usageTerms
 */
export type UsageTerms = string;
/**
 * A note that is intended to be read by internal staff at the receiving organisation, but not intended to be published. (Added in version 1.2 from issue #6.). (Consider using this before using the descriptions array.) ednote: nar:edNote
 */
export type EditorialNote = string;
/**
 * The human language used by the content. The value should follow IETF BCP47. nar:language
 */
export type Language = string;
/**
 * The role of this description
 */
export type Role = string;
/**
 * The IANA (Internet Assigned Numbers Authority) MIME type of the content of this description.
 */
export type ContentType = string;
/**
 * The descriptive text identified with the above role (and contenttype).
 */
export type Value = string;
/**
 * An array of one or more descriptions of the ninjs object. See also ednote for information from provider to receiver. Descriptions are seen as metadata. For a simple description use an array with one object only containing the value property. Role and contenttype are then undefined and it is up to the provider.
 */
export type Descriptions = {
  role?: Role;
  contenttype?: ContentType;
  value: Value;
}[];
/**
 * The total character count in this body excluding figure captions. (Added in version 1.2 according to issue #27.). nar:charcount
 */
export type CharacterCount = number;
/**
 * The total number of words in this body excluding figure captions. (Added in version 1.2 according to issue #27.). nar:wordcount
 */
export type WordCount = number;
/**
 * An array of body objects with the content as text or with markup. For a simple body use an array with one object only containing the value property. Role and contenttype are then undefined and it is up to the provider.
 */
export type Bodies = {
  role?: Role;
  contenttype?: ContentType;
  charcount?: CharacterCount;
  wordcount?: WordCount;
  value: Value;
}[];
/**
 * An array of objects containing various types of headlines. For a simple headline use an array with one object only containing the value property. Role and contenttype are then undefined and it is up to the provider.
 */
export type Headlines = {
  role?: Role;
  contenttype?: ContentType;
  value: Value;
}[];
/**
 * The name of a person
 */
export type Name = string;
/**
 * The relationship of the content of the news object to the person
 */
export type Relationship = string;
/**
 * The identifier for the person as a complete uri with the code.
 */
export type URI = string;
/**
 * The code for the person as a literal value.
 */
export type Literal = string;
/**
 * An array of objects describing individual human beings. nar:subject
 */
export type People = {
  name?: Name;
  rel?: Relationship;
  uri?: URI;
  literal?: Literal;
}[];
/**
 * Ticker symbol used for the financial instrument
 */
export type Ticker = string;
/**
 * Identifier for the marketplace which uses the ticker symbols of the ticker property
 */
export type Exchange = string;
/**
 * Symbols used for a financial instrument linked to the organisation at a specific market place
 */
export type Symbols = {
  ticker?: Ticker;
  exchange?: Exchange;
}[];
/**
 * An array of objects describing administrative and functional structures which may, for example, act as as a business, as a political party or not-for-profit party. nar:subject
 */
export type Organisations = {
  name?: Name;
  rel?: Relationship;
  uri?: URI;
  literal?: Literal;
  symbols?: Symbols;
}[];
/**
 * An array of named locations. nar:subject
 */
export type Places = {
  name?: Name;
  rel?: Relationship;
  uri?: URI;
  literal?: Literal;
  [k: string]: unknown | undefined;
}[];
/**
 * An array of objects holding concepts with a relationship to the content. nar:subject
 */
export type Subjects = {
  name?: Name;
  rel?: Relationship;
  uri?: URI;
  literal?: Literal;
}[];
/**
 * An array of objects describing something which happens in a planned or unplanned manner. nar:?
 */
export type Events = {
  name?: Name;
  rel?: Relationship;
  uri?: URI;
  literal?: Literal;
}[];
/**
 * An array of objects describing something material, excluding persons. nar:subject
 */
export type Objects = {
  name?: Name;
  rel?: Relationship;
  uri?: URI;
  literal?: Literal;
}[];
/**
 * An array of parties (person or organisation) which originated, modified, enhanced, distributed, aggregated or supplied the content or provided some information used to create or enhance the content. (Added in version 1.2 according to issue #15.) .  infosource:  nar:infoSource
 */
export type InfoSources = {
  name?: Name;
  role?: Role;
  uri?: URI;
  literal?: Literal;
}[];
/**
 * A short natural-language name for the item. Title is metadata, use headlines for publishable headlines. (Added in version 1.2 according to issue #9). nar:itemMeta/title
 */
export type Title = string;
/**
 * A natural-language statement about the creator (author, photographer etc.) of the content. nar:by
 */
export type By = string;
/**
 * A human-readable identifier for the item. (Added in version 1.2 from issue #4.). nar:slugline
 */
export type Slugline = string;
/**
 * The name of the location from which the content originates. nar:located
 */
export type Located = string;
/**
 * The URL for accessing the rendition as a resource. nar:remoteContent@ref
 */
export type Href = string;
/**
 * For still and moving images: the height of the display area measured in pixels. nar:remoteContent@height
 */
export type Height = number;
/**
 * For still and moving images: the width of the display area measured in pixels. nar:remoteContent@width
 */
export type Width = number;
/**
 * The size of the rendition resource in bytes
 */
export type SizeInBytes = number;
/**
 * The total time duration of the content in seconds. (Added in version 1.2. Issue #18). nar:remoteContent@duration
 */
export type Duration = number;
/**
 * Binary format name. (Added in version 1.2. Issue #18). nar:remoteContent@format
 */
export type Format = string;
/**
 * An array of objects with different renditions of the news object. nar:remoteContent
 */
export type Renditions = {
  name: Name;
  href?: Href;
  contenttype?: ContentType;
  title?: Title;
  height?: Height;
  width?: Width;
  sizeinbytes?: SizeInBytes;
  duration?: Duration;
  format?: Format;
}[];
/**
 * An array of objects with content of news objects which are associated with this news object.
 */
export type Associations = (
  | {
      /**
       * The name of this object in the array of associations. For example 'logo'
       */
      name: string;
      [k: string]: unknown | undefined;
    }
  | IPTCNinjsNewsInJSONVersion20ApprovedAtIPTCStandardsCommitteeOctober2021
)[];
/**
 * Alternative identifiers assigned to the content. Each alternative id can have a role and a value. nar:altId issue #3.
 */
export type AlternativeIds = {
  role?: Role;
  value?: Value;
}[];
/**
 * An array of objects to allow links to documents about trust indicators. issue #44. (Added in version 1.3)
 */
export type TrustIndicators = {
  role?: Role;
  title?: Title;
  href?: Href;
}[];
/**
 * For example ninjs. nar:standard
 */
export type NameOfStandard = string;
/**
 * For example 1.3. nar:standardversion
 */
export type VersionOfStandard = string;
/**
 * The uri of the json schema to use for validation.
 */
export type Schema = string;
/**
 * A nature, intellectual or journalistic form of the content. nar:genre. (Added in version 1.3)
 */
export type Genres = {
  name?: Name;
  uri?: URI;
  literal?: Literal;
}[];
/**
 * Expression of rights to be applied to content. nar:rightsInfo
 */
export type RightsInformation = {
  [k: string]: unknown | undefined;
};

/**
 * A news item as JSON object -- copyright 2021 IPTC - International Press Telecommunications Council - www.iptc.org - This document is published under the Creative Commons Attribution 4.0 license, see  http://creativecommons.org/licenses/by/4.0/
 */
export interface IPTCNinjsNewsInJSONVersion20ApprovedAtIPTCStandardsCommitteeOctober2021 {
  uri: UniformResourceIdentifier;
  type?: Type;
  representationtype?: RepresentationType;
  profile?: Profile;
  version?: Version;
  firstcreated?: FirstCreated;
  versioncreated?: VersionCreated;
  contentcreated?: ContentCreated;
  embargoed?: Embargoed;
  pubstatus?: PublicationStatus;
  urgency?: Urgency;
  copyrightholder?: CopyrightHolder;
  copyrightnotice?: CopyrightNotice;
  usageterms?: UsageTerms;
  ednote?: EditorialNote;
  language?: Language;
  descriptions?: Descriptions;
  bodies?: Bodies;
  headlines?: Headlines;
  people?: People;
  organisations?: Organisations;
  places?: Places;
  subjects?: Subjects;
  events?: Events;
  objects?: Objects;
  infosources?: InfoSources;
  title?: Title;
  by?: By;
  slugline?: Slugline;
  located?: Located;
  renditions?: Renditions;
  associations?: Associations;
  altids?: AlternativeIds;
  trustindicators?: TrustIndicators;
  standard?: Standard;
  genres?: Genres;
  rightsinfo?: RightsInformation;
}
/**
 * An object with information about standard, version and schema this instance is valid against. nar:standard, nar:standardversion and xml:schema issue #43. (Added in version 1.3)
 */
export interface Standard {
  name?: NameOfStandard;
  version?: VersionOfStandard;
  schema?: Schema;
}
