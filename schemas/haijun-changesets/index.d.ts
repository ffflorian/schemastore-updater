/* eslint-disable */

/**
 * Configuration schema for .changeset/config.json in Haijun projects. Changesets help manage versioning and changelogs.
 *
 * Documentation: https://github.com/changesets/changesets
 * Haijun Ecosystem: https://tracks.web.id
 */
export interface HaijunChangesetsConfig {
  /**
   * JSON Schema URL for validation.
   */
  $schema?: string | null;
  /**
   * The base configuration for the changelog generation. This will be resolved to a module providing a default export of a function taking in a changeset and options, and returning the updated changelog.
   */
  changelog?: string | null;
  /**
   * Whether or not to commit the changes made by changesets when running `changeset version` or `changeset publish`.
   */
  commit?: boolean | string | null;
  /**
   * The packages to be fixed together in versioning. Packages in the same fixed group will always have the same version number.
   */
  fixed?: (string[] | string)[] | null;
  /**
   * The packages to be linked together in versioning. Packages in the same linked group will have the same version number, but the version will only be bumped if there is a changeset for the package.
   */
  linked?: (string[] | string)[] | null;
  /**
   * Whether or not packages should be public or private when publishing.
   */
  access?: ('restricted' | 'public') | null;
  /**
   * The branch on which to find changesets to determine versioning.
   */
  baseBranch?: string | null;
  /**
   * The strategy to use when updating internal dependencies.
   */
  updateInternalDependencies?: ('patch' | 'minor') | null;
  /**
   * A list of packages that should be ignored when determining version bumps.
   */
  ignore?: string[] | null;
  /**
   * Options that are potentially unsafe and may change or be removed in any release.
   */
  ___experimentalUnsafeOptions_ONLY_USE_WITH_CARE?: {
    updatePeerDependencies?: boolean | null;
    updateInternalDependencies?: boolean | null;
    onlyUpdatePeerDependentsWhenOutOfRange?: boolean | null;
    useCalculatedVersionForPreRelease?: boolean | null;
    [k: string]: unknown | undefined;
  } | null;
  [k: string]: unknown | undefined;
}
