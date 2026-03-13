/* eslint-disable */

/**
 * Semantic version - major.minor.patch
 */
export type Semver = string;
/**
 * Type describes possible operations on property
 */
export type PropertyType = string;
/**
 * Percent value
 */
export type Percent = number;

export interface EvolvingResolutiveProcessNotation {
  type?: {
    /**
     * Standard name
     */
    name: string;
    version: Semver;
    [k: string]: unknown | undefined;
  };
  content?: ContentObject;
  [k: string]: unknown | undefined;
}
/**
 * Main object for notation
 */
export interface ContentObject {
  /**
   * Where to gather info. If exists, other properties are ignored
   */
  link?: string | null;
  name?: string;
  version?: Semver;
  /**
   * Main description
   */
  essence?: {
    /**
     * Why we have to create this object
     */
    contradiction?: {
      /**
       * Construction of contradiction
       */
      fundamental?: {
        /**
         * What we have in reality
         */
        thesis?: string;
        /**
         * Why reality is not enough
         */
        antithesis?: string;
        [k: string]: unknown | undefined;
      };
      /**
       * Where is the problem and where can we act
       */
      space?: {
        space?: string;
        limitations?: string[];
        actors?: string[];
        [k: string]: unknown | undefined;
      };
      /**
       * Limits to make path curved for solving problem
       */
      tradeoff?: string[];
      /**
       * What we have before solving problem
       */
      resources?: string[];
      [k: string]: unknown | undefined;
    };
    /**
     * How to solve main problem
     */
    synthesis?: {
      /**
       * Common solution for contradiction
       */
      fundamental?: string;
      /**
       * What we need to realize solution
       */
      resources?: string[];
      /**
       * What else we will get from solution beside problem solving
       */
      advantages?: string[];
      [k: string]: unknown | undefined;
    };
    /**
     * How main object was solved
     */
    realization?: {
      /**
       * What we have to get from outer space for sustainable functionality
       */
      input?: CommonObject[];
      /**
       * What we produce
       */
      output?: CommonObject[];
      /**
       * Our manipulated objects
       */
      resources?: CommonObject[];
      /**
       * What we produce for main purpose or valuable to outer external world
       */
      value?: CommonObject[];
      /**
       * How it works
       */
      commonDescription?: string;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Time gap of object activity with authors and source of changing
   */
  timing?: {
    start?: string | null;
    end?: string | null;
    /**
     * How much this version affects reality versus old ones
     */
    impactPercent?: number;
    /**
     * Who did it
     */
    authors?: Person[];
    /**
     * What is the reason of changing
     */
    source?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   * Sub level objects
   */
  content?: ContentObject[];
  /**
   * Old versions of object with only changed properties
   */
  history?: ContentObject[];
  [k: string]: unknown | undefined;
}
/**
 * Common object for various reality flashes
 */
export interface CommonObject {
  name?: string;
  type?: PropertyType;
  describe?: string;
  [k: string]: unknown | undefined;
}
/**
 * Person description
 */
export interface Person {
  name?: string;
  impactPercent?: Percent;
  /**
   * Role in organization
   */
  position?: string;
  comment?: string;
  [k: string]: unknown | undefined;
}
