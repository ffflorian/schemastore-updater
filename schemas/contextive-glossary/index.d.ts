/* eslint-disable */

/**
 * https://docs.contextive.tech/community/guides/setting-up-glossaries/
 */
export type HttpsJsonSchemastoreOrgContextiveGlossaryJson =
  | {
      /**
       * A list of urls, paths or relative paths to be imported into the current glossary scope. See https://docs.contextive.tech/community/guides/setting-up-glossaries/#terms-defined-in-an-external-data-source.
       *
       * @minItems 1
       */
      imports: [string, ...string[]];
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * A list of contexts. See https://docs.contextive.tech/community/guides/setting-up-glossaries/#bounded-contexts.
       *
       * @minItems 1
       */
      contexts: [Context, ...Context[]];
      [k: string]: unknown | undefined;
    };
/**
 * The name of the Context.
 */
export type Name = string;
/**
 * A statement that describes the purpose of the Context.
 */
export type DomainVisionStatement = string;
/**
 * A list of paths that the Context is involved in.
 *
 * @minItems 1
 */
export type Paths = [Path, ...Path[]];
/**
 * A path that the Context is involved in.
 */
export type Path = string;
/**
 * A list of Terms in the Context - see https://docs.contextive.tech/ide/guides/defining-terminology/.
 *
 * @minItems 1
 */
export type Terms = [Term, ...Term[]];
/**
 * A definition of the Term in this Context.
 */
export type Definition = string;
/**
 * A list of example sentences using the Term.
 *
 * @minItems 1
 */
export type Examples = [ExampleSentence, ...ExampleSentence[]];
/**
 * An example sentence using the Term.
 */
export type ExampleSentence = string;
/**
 * A list of aliases for the Term.
 *
 * @minItems 1
 */
export type Aliases = [Alias, ...Alias[]];
/**
 * An alias for the Term.
 */
export type Alias = string;

/**
 * A context in the ubiquitous language, consisting of a list of terms.
 */
export interface Context {
  name?: Name;
  domainVisionStatement?: DomainVisionStatement;
  paths?: Paths;
  terms: Terms;
  [k: string]: unknown | undefined;
}
/**
 * A Term in the Context.
 */
export interface Term {
  name: Name;
  definition?: Definition;
  examples?: Examples;
  aliases?: Aliases;
  [k: string]: unknown | undefined;
}
