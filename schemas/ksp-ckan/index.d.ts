/* eslint-disable */

/**
 * Schema for validating CKAN meta files
 */
export type CKANJSONSchema = {
  /**
   * Version of the CKAN spec this document uses
   */
  spec_version: number | string;
  /**
   * Human readable name of the mod
   */
  name: string;
  /**
   * Unique identifier for this mod
   */
  identifier: string;
  /**
   * Package type, defaults to package
   */
  kind?: 'package' | 'metapackage' | 'dlc';
  /**
   * Short description of the mod
   */
  abstract: string;
  /**
   * Longer description of the mod
   */
  description?: string;
  /**
   * Free-form comment. Not displayed to users
   */
  comment?: string;
  /**
   * Author, or list of authors
   */
  author: string | string[];
  /**
   * URL where mod can be downloaded by tools
   */
  download?: string | string[];
  /**
   * The size of the download in bytes
   */
  download_size?: number;
  /**
   * A object of hashes of the downloaded file
   */
  download_hash?: {
    /**
     * SHA1 hash of the file
     */
    sha1?: string;
    /**
     * SHA256 hash of the file
     */
    sha256?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The content type of the download
   */
  download_content_type?: string;
  /**
   * The size of the installed files
   */
  install_size?: number;
  /**
   * Machine readable license, or array of licenses
   */
  license: License | License[];
  /**
   * Version of the mod
   */
  version: string;
  /**
   * Optional release status
   */
  release_status?: 'stable' | 'testing' | 'development';
  /**
   * Optional target game version
   */
  ksp_version?: string;
  /**
   * Optional minimum game version
   */
  ksp_version_min?: string;
  /**
   * Optional maximum game version
   */
  ksp_version_max?: string;
  /**
   * Optional enforcement of strict version checks (defaults to false)
   */
  ksp_version_strict?: boolean;
  /**
   * A series of descriptive keywords to provide quick filtering and organization
   */
  tags?: string[];
  /**
   * A list of locale strings for which this mod includes localizations
   */
  localizations?: string[];
  depends?: Relationship;
  recommends?: Relationship;
  suggests?: Relationship;
  supports?: Relationship;
  conflicts?: Relationship;
  /**
   * A list of virtual packages this mod provides
   */
  provides?: Identifier[];
  /**
   * Optional pointer to mod that should be selected instead and treated as an update to this mod
   */
  replaced_by?: {
    /**
     * Unique identifier for this mod.
     */
    name: string;
    /**
     * Optional version
     */
    version?: string;
    /**
     * Optional minimum version
     */
    min_version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Additional resources
   */
  resources?: {
    /**
     * Mod homepage
     */
    homepage?: string;
    /**
     * Mod bugtracker
     */
    bugtracker?: string;
    /**
     * Mod discussions
     */
    discussions?: string;
    /**
     * Mod license
     */
    license?: string;
    /**
     * Mod repository
     */
    repository?: string;
    /**
     * Continuous Integration
     */
    ci?: string;
    /**
     * Project on SpaceDock
     */
    spacedock?: string;
    /**
     * Project on Curse
     */
    curse?: string;
    /**
     * Mod's manual
     */
    manual?: string;
    /**
     * Mod's remote hosted netkan
     */
    metanetkan?: string;
    /**
     * Mod's remote hosted version file
     */
    'remote-avc'?: string;
    /**
     * Mod's remote hosted swinfo file
     */
    'remote-swinfo'?: string;
    /**
     * Purchase DLC here
     */
    store?: string;
    /**
     * Purchase DLC on Steam here
     */
    steamstore?: string;
    /**
     * Purchase DLC on GOG here
     */
    gogstore?: string;
    /**
     * Purchase DLC on Epic Games Store here
     */
    epicstore?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * List of install directives
   */
  install?: {
    [k: string]: unknown | undefined;
  }[];
  /**
   * Optional timestamp when the described version of the mod was released
   */
  release_date?: string;
  [k: string]: unknown | undefined;
} & (
  | {
      [k: string]: unknown | undefined;
    }
  | {
      kind: 'metapackage' | 'dlc';
      [k: string]: unknown | undefined;
    }
);
/**
 * A license.
 */
export type License =
  | 'public-domain'
  | 'AFL-3.0'
  | 'AGPL-3.0'
  | 'Apache'
  | 'Apache-1.0'
  | 'Apache-2.0'
  | 'APSL-2.0'
  | 'Artistic'
  | 'Artistic-1.0'
  | 'Artistic-2.0'
  | 'BSD-2-clause'
  | 'BSD-3-clause'
  | 'BSD-4-clause'
  | 'ISC'
  | 'CC-BY'
  | 'CC-BY-1.0'
  | 'CC-BY-2.0'
  | 'CC-BY-2.5'
  | 'CC-BY-3.0'
  | 'CC-BY-4.0'
  | 'CC-BY-SA'
  | 'CC-BY-SA-1.0'
  | 'CC-BY-SA-2.0'
  | 'CC-BY-SA-2.5'
  | 'CC-BY-SA-3.0'
  | 'CC-BY-SA-4.0'
  | 'CC-BY-NC'
  | 'CC-BY-NC-1.0'
  | 'CC-BY-NC-2.0'
  | 'CC-BY-NC-2.5'
  | 'CC-BY-NC-3.0'
  | 'CC-BY-NC-4.0'
  | 'CC-BY-NC-SA'
  | 'CC-BY-NC-SA-1.0'
  | 'CC-BY-NC-SA-2.0'
  | 'CC-BY-NC-SA-2.5'
  | 'CC-BY-NC-SA-3.0'
  | 'CC-BY-NC-SA-4.0'
  | 'CC-BY-NC-ND'
  | 'CC-BY-NC-ND-1.0'
  | 'CC-BY-NC-ND-2.0'
  | 'CC-BY-NC-ND-2.5'
  | 'CC-BY-NC-ND-3.0'
  | 'CC-BY-NC-ND-4.0'
  | 'CC-BY-ND'
  | 'CC-BY-ND-1.0'
  | 'CC-BY-ND-2.0'
  | 'CC-BY-ND-2.5'
  | 'CC-BY-ND-3.0'
  | 'CC-BY-ND-4.0'
  | 'CC0'
  | 'CDDL'
  | 'CPL'
  | 'EFL-1.0'
  | 'EFL-2.0'
  | 'Expat'
  | 'MIT'
  | 'GPL-1.0'
  | 'GPL-2.0'
  | 'GPL-3.0'
  | 'LGPL-2.0'
  | 'LGPL-2.1'
  | 'LGPL-3.0'
  | 'GFDL-1.0'
  | 'GFDL-1.1'
  | 'GFDL-1.2'
  | 'GFDL-1.3'
  | 'GFDL-NIV-1.0'
  | 'GFDL-NIV-1.1'
  | 'GFDL-NIV-1.2'
  | 'GFDL-NIV-1.3'
  | 'LPPL-1.0'
  | 'LPPL-1.1'
  | 'LPPL-1.2'
  | 'LPPL-1.3c'
  | 'MPL-1.0'
  | 'MPL-1.1'
  | 'MPL-2.0'
  | 'Ms-PL'
  | 'Ms-RL'
  | 'Perl'
  | 'Python-2.0'
  | 'QPL-1.0'
  | 'Unlicense'
  | 'W3C'
  | 'WTFPL'
  | 'Zlib'
  | 'Zope'
  | 'open-source'
  | 'restricted'
  | 'unrestricted'
  | 'unknown';
/**
 * Optional list of dependencies
 */
export type Relationship = (
  | {
      /**
       * Identifier of the mod
       */
      name: string;
      /**
       * Optional version
       */
      version?: string;
      /**
       * Optional minimum version
       */
      min_version?: string;
      /**
       * Optional maximum version
       */
      max_version?: string;
      /**
       * Optional help text shown when user has to choose among multiple modules
       */
      choice_help_text?: string;
      /**
       * If true, don't check this mod or its dependencies for recommendations or suggestions
       */
      suppress_recommendations?: boolean;
      [k: string]: unknown | undefined;
    }
  | {
      any_of: Relationship;
      /**
       * Optional help text shown when user has to choose among multiple modules
       */
      choice_help_text?: string;
      [k: string]: unknown | undefined;
    }
)[];
/**
 * Unique identifier for this mod.
 */
export type Identifier = string;
