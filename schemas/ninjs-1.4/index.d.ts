/* eslint-disable */

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
 * The identifier for this news object. nar:newsItem@guid
 */
export type UniformResourceIdentifier = string;
/**
 * The generic news type of this news object. (Value 'component' added in version 1.2 as issue #21.). nar:itemClass
 */
export type Type = 'text' | 'audio' | 'video' | 'picture' | 'graphic' | 'composite' | 'component';
/**
 * A MIME type which applies to this news object. nar:contentType
 */
export type MIMEType = string;
/**
 * Indicates how complete this representation of a news item is. No mapping to nar. Specific for ninjs.
 */
export type RepresentationType = 'complete' | 'incomplete';
/**
 * An identifier for the structure of the news object. This can be any string but we suggest something identifying the structure of the content such as 'text-only' or 'text-photo'. Profiles are typically provider-specific. nar:profile
 */
export type Profile = string;
/**
 * The version of the news object which is identified by the uri property. nar:newsItem@version
 */
export type Version = string;
/**
 * Indicates when the first version of the item was created. (Added in version 1.2 from issue #5). nar:firstCreated
 */
export type FirstCreated = string;
/**
 * The date and time when this version of the news object was created. nar:versionCreated
 */
export type VersionCreated = string;
/**
 * The date and time when the content of this ninjs object was originally created. For example an old photo that is now handled as a ninjs object. nar:contentCreated (Added in 1.4)
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
 * The editorial urgency of the content from 1 to 9. 1 represents the highest urgency, 9 the lowest. nar:urgency
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
 * A note that is intended to be read by internal staff at the receiving organisation, but not published to the end-user. (Added in version 1.2 from issue #6.) . ednote: nar:edNote
 */
export type EditorialNote = string;
/**
 * The human language used by the content. The value should follow IETF BCP47. nar:language
 */
export type Language = string;
/**
 * The name of a person
 */
export type Name = string;
/**
 * The relationship of the content of the news object to the person
 */
export type Relationship = string;
/**
 * The identifier of a scheme (= controlled vocabulary) which includes a code for the person
 */
export type Scheme = string;
/**
 * The code for the person in a scheme (= controlled vocabulary) which is identified by the scheme property
 */
export type Code = string;
/**
 * An individual human being. nar:subject
 */
export type Person = {
  name?: Name;
  rel?: Relationship;
  scheme?: Scheme;
  code?: Code;
}[];
/**
 * The name of the organisation
 */
export type Name1 = string;
/**
 * The relationship of the content of the news object to the organisation
 */
export type Relationship1 = string;
/**
 * The identifier of a scheme (= controlled vocabulary) which includes a code for the organisation
 */
export type Scheme1 = string;
/**
 * The code for the organisation in a scheme (= controlled vocabulary) which is identified by the scheme property
 */
export type Code1 = string;
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
 * An administrative and functional structure which may act as as a business, as a political party or not-for-profit party. nar:subject
 */
export type Organisation = {
  name?: Name1;
  rel?: Relationship1;
  scheme?: Scheme1;
  code?: Code1;
  symbols?: Symbols;
}[];
/**
 * The name of the place
 */
export type Name2 = string;
/**
 * The relationship of the content of the news object to the place
 */
export type Relationship2 = string;
/**
 * The identifier of a scheme (= controlled vocabulary) which includes a code for the place
 */
export type Scheme2 = string;
/**
 * The code for the place in a scheme (= controlled vocabulary) which is identified by the scheme property
 */
export type Code2 = string;
/**
 * A named location. nar:subject
 */
export type Place = {
  name?: Name2;
  rel?: Relationship2;
  scheme?: Scheme2;
  code?: Code2;
  /**
   * An object holding geo data of this place. Could be of any relevant geo data JSON object definition.
   *
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^geometry_[a-zA-Z0-9_]+".
   */
  [k: string]: {
    [k: string]: unknown | undefined;
  };
}[];
/**
 * The name of the subject
 */
export type Name3 = string;
/**
 * The relationship of the content of the news object to the subject
 */
export type Relationship3 = string;
/**
 * The identifier of a scheme (= controlled vocabulary) which includes a code for the subject
 */
export type Scheme3 = string;
/**
 * The code for the subject in a scheme (= controlled vocabulary) which is identified by the scheme property
 */
export type Code3 = string;
/**
 * A concept with a relationship to the content. nar:subject
 */
export type Subject = {
  name?: Name3;
  rel?: Relationship3;
  scheme?: Scheme3;
  code?: Code3;
}[];
/**
 * The name of the event
 */
export type Name4 = string;
/**
 * The relationship of the content of the news object to the event
 */
export type Relationship4 = string;
/**
 * The identifier of a scheme (= controlled vocabulary) which includes a code for the event
 */
export type Scheme4 = string;
/**
 * The code for the event in a scheme (= controlled vocabulary) which is identified by the scheme property
 */
export type Code4 = string;
/**
 * Something which happens in a planned or unplanned manner. nar:?
 */
export type Event = {
  name?: Name4;
  rel?: Relationship4;
  scheme?: Scheme4;
  code?: Code4;
}[];
/**
 * The name of the object
 */
export type Name5 = string;
/**
 * The relationship of the content of the news object to the object
 */
export type Relationship5 = string;
/**
 * The identifier of a scheme (= controlled vocabulary) which includes a code for the object
 */
export type Scheme5 = string;
/**
 * The code for the object in a scheme (= controlled vocabulary) which is identified by the scheme property
 */
export type Code5 = string;
/**
 * Something material, excluding persons. nar:subject
 */
export type Object = {
  name?: Name5;
  rel?: Relationship5;
  scheme?: Scheme5;
  code?: Code5;
}[];
/**
 * The name of the infosource
 */
export type Name6 = string;
/**
 * The relationship of the content of the news object to the infosource
 */
export type Relationship6 = string;
/**
 * The identifier of a scheme (= controlled vocabulary) which includes a code for the infosource
 */
export type Schema1 = string;
/**
 * The code for the infosource in a scheme (= controlled vocabulary) which is identified by the scheme property
 */
export type Code6 = string;
/**
 * A party (person or organisation) which originated, modified, enhanced, distributed, aggregated or supplied the content or provided some information used to create or enhance the content. (Added in version 1.2 according to issue #15.) .    infosource:  nar:infoSource
 */
export type InfoSource = {
  name?: Name6;
  rel?: Relationship6;
  scheme?: Schema1;
  code?: Code6;
}[];
/**
 * A short natural-language name for the item. (Added in version 1.2 according to issue #9). nar:itemMeta/title
 */
export type Title = string;
/**
 * The name(s) of the creator(s) of the content. nar:by
 */
export type Byline = string;
/**
 * A brief and snappy introduction to the content, designed to catch the reader's attention. nar:headline
 */
export type Headline = string;
/**
 * A human-readable identifier for the item. (Added in version 1.2 from issue #4.). nar:slugline
 */
export type Slugline = string;
/**
 * The name of the location from which the content originates. nar:located
 */
export type Located = string;
/**
 * The total character count in the article excluding figure captions. (Added in version 1.2 according to issue #27.). nar:charcount
 */
export type CharacterCount = number;
/**
 * The total number of words in the article excluding figure captions. (Added in version 1.2 according to issue #27.). nar:wordcount
 */
export type WordCount = number;
/**
 * The URL for accessing the rendition as a resource. nar:remoteContent@ref
 */
export type Href = string;
/**
 * A MIME type which applies to the rendition. nar:remoteContent@contenttype
 */
export type Mimetype = string;
/**
 * A title for the link to the rendition resource
 */
export type Title1 = string;
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
 * A refinement of a generic content type (i.e. IANA MIME type) by a literal string value. (Added in version 1.2. Issue #18). nar:remoteContent@contenttypevariant and nar:remoteContent@format
 */
export type Format = string;
/**
 * The identifier of a scheme (= controlled vocabulary) which includes a code for the trust indicator
 */
export type Scheme6 = string;
/**
 * The code for the trust indicator in a scheme (= controlled vocabulary) which is identified by the scheme property
 */
export type Code7 = string;
/**
 * The title of the resource being referenced.
 */
export type Title2 = string;
/**
 * The URL for accessing the trust indicator resource.
 */
export type Href1 = string;
/**
 * An array of objects to allow links to documents about trust indicators. (nar:link) issue #44. (Added in version 1.3)
 */
export type TrustIndicator = {
  scheme?: Scheme6;
  code?: Code7;
  title?: Title2;
  href?: Href1;
}[];
/**
 * The name of the genre
 */
export type Name7 = string;
/**
 * The identifier of a scheme (= controlled vocabulary) which includes a code for the genre. Normally  http://cv.iptc.org/newscodes/genre/
 */
export type Scheme7 = string;
/**
 * The code for the genre in a scheme (= controlled vocabulary) which is identified by the scheme property
 */
export type Code8 = string;
/**
 * A nature, intellectual or journalistic form of the content. nar:genre. (Added in version 1.3)
 */
export type Genre = {
  name?: Name7;
  scheme?: Scheme7;
  code?: Code8;
}[];
/**
 * The date and time after which the Item is no longer considered editorially relevant by its provider. nar:expires (Added in 1.4)
 */
export type Expires = string;
/**
 * Expression of rights to be applied to content. nar:rightsInfo (Added in 1.4)
 */
export type RightsInformation = {
  [k: string]: unknown | undefined;
};
/**
 * A free-form textual description of the content of the item. (The string appended to description_ in the property name should reflect the format and/or the purpose of the text, separating the parts with _). nar:description
 *
 * This interface was referenced by `IPTCNinjsNewsInJSONVersion14Approved18May2022`'s JSON-Schema definition
 * via the `patternProperty` "^description_[a-zA-Z0-9_]+".
 */
export type Description = string;
/**
 * The textual content of the news object. (The string appended to body_ in the property name should reflect the format and/or the purpose of the text, separating the parts with _). nar:inlineData or nar:inlineXML
 *
 * This interface was referenced by `IPTCNinjsNewsInJSONVersion14Approved18May2022`'s JSON-Schema definition
 * via the `patternProperty` "^body_[a-zA-Z0-9_]+".
 */
export type Body = string;
/**
 * Additional headlines or strings of that type can be handled here. This is not replacing the main headline-property in ninjs. (The string appended to headline_ in the property name should reflect the format and/or the purpose of the text, separating the parts with _) nar:headline with roles issue #13. (Added in 1.3)
 *
 * This interface was referenced by `IPTCNinjsNewsInJSONVersion14Approved18May2022`'s JSON-Schema definition
 * via the `patternProperty` "^headline_[a-zA-Z0-9_]+".
 */
export type ExtraHeadlines = string;

/**
 * A news item as JSON object -- copyright 2022 IPTC - International Press Telecommunications Council - www.iptc.org - This document is published under the Creative Commons Attribution 4.0 license, see  http://creativecommons.org/licenses/by/4.0/
 */
export interface IPTCNinjsNewsInJSONVersion14Approved18May2022 {
  $standard?: Standard;
  uri: UniformResourceIdentifier;
  type?: Type;
  mimetype?: MIMEType;
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
  person?: Person;
  organisation?: Organisation;
  place?: Place;
  subject?: Subject;
  event?: Event;
  object?: Object;
  infosource?: InfoSource;
  title?: Title;
  byline?: Byline;
  headline?: Headline;
  slugline?: Slugline;
  located?: Located;
  charcount?: CharacterCount;
  wordcount?: WordCount;
  renditions?: Renditions;
  /**
   * Content of news objects which are associated with this news object. nar:link
   */
  associations?: {
    [k: string]: IPTCNinjsNewsInJSONVersion14Approved18May2022;
  };
  altids?: AlternativeId;
  trustindicator?: TrustIndicator;
  genre?: Genre;
  expires?: Expires;
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
/**
 * Wrapper for different renditions of the news object. nar:remoteContent
 */
export interface Renditions {
  /**
   * A specific rendition of the content of the news object. (Description changed in version 1.2 according to issue #17.)
   *
   * This interface was referenced by `Renditions`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9_]+".
   */
  [k: string]: {
    href?: Href;
    mimetype?: Mimetype;
    title?: Title1;
    height?: Height;
    width?: Width;
    sizeinbytes?: SizeInBytes;
    duration?: Duration;
    format?: Format;
  };
}
/**
 * Alternative identifiers of the item. It is up to the individual provider to name and set type on the alternative identifiers they like to use. nar:altId issue #3. (Added in version 1.3)
 */
export interface AlternativeId {
  [k: string]: unknown | undefined;
}
