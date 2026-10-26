/* eslint-disable */

/**
 * Configuration schema for release-please-config.json in Haijun projects. Release Please automates releases and changelogs.
 *
 * Documentation: https://github.com/googleapis/release-please
 * Haijun Ecosystem: https://tracks.web.id
 */
export interface HaijunReleasePleaseConfig {
  /**
   * JSON Schema URL for validation.
   */
  $schema?: string | null;
  /**
   * Package-level configuration for release-please.
   */
  packages?: {
    [k: string]:
      | {
          /**
           * The release type for this package.
           */
          'release-type'?:
            | (
                | 'node'
                | 'python'
                | 'rust'
                | 'go'
                | 'java'
                | 'helm'
                | 'typescript'
                | 'elixir'
                | 'ruby'
                | 'godart'
                | 'maven'
                | 'monorepo'
              )
            | null;
          /**
           * Whether to bump minor version before major version.
           */
          'bump-minor-pre-major'?: boolean | null;
          /**
           * Whether to bump patch version for minor pre-major changes.
           */
          'bump-patch-for-minor-pre-major'?: boolean | null;
          /**
           * Sections to include in the changelog.
           */
          'changelog-sections'?:
            | {
                type?: string;
                section?: string;
                hidden?: boolean;
                [k: string]: unknown | undefined;
              }[]
            | null;
          /**
           * Path to the changelog file.
           */
          'changelog-path'?: string | null;
          /**
           * Title for the changelog.
           */
          'changelog-title'?: string | null;
          /**
           * Name of the component for this package.
           */
          component?: string | null;
          /**
           * Whether this is a draft release.
           */
          draft?: boolean | null;
          /**
           * Additional files to update during release.
           */
          'extra-files'?: string[] | null;
          /**
           * Whether to include the component name in the release tag.
           */
          'include-component-in-tag'?: boolean | null;
          /**
           * Whether to include a 'v' prefix in the release tag.
           */
          'include-v-in-tag'?: boolean | null;
          /**
           * Override the package name for this package.
           */
          'package-name'?: string | null;
          /**
           * The path to the package directory.
           */
          path?: string | null;
          /**
           * Whether this is a prerelease.
           */
          prerelease?: boolean | null;
          /**
           * The type of prerelease (alpha, beta, rc).
           */
          'prerelease-type'?: ('alpha' | 'beta' | 'rc') | null;
          /**
           * Pattern for the pull request title.
           */
          'pull-request-title-pattern'?: string | null;
          /**
           * Whether to create separate pull requests for each package.
           */
          'separate-pull-requests'?: boolean | null;
          /**
           * Whether to sign off commits.
           */
          signoff?: boolean | null;
          /**
           * Separator between component and version in tag.
           */
          'tag-separator'?: string | null;
          /**
           * Override the version file path.
           */
          'version-file'?: string | null;
          [k: string]: unknown | undefined;
        }
      | undefined;
  } | null;
  /**
   * SHA of the initial commit for release-please.
   */
  'bootstrap-sha'?: string | null;
  /**
   * Whether to bump minor version before major version.
   */
  'bump-minor-pre-major'?: boolean | null;
  /**
   * Whether to bump patch version for minor pre-major changes.
   */
  'bump-patch-for-minor-pre-major'?: boolean | null;
  /**
   * Sections to include in the changelog.
   */
  'changelog-sections'?:
    | {
        type?: string;
        section?: string;
        hidden?: boolean;
        [k: string]: unknown | undefined;
      }[]
    | null;
  /**
   * Path to the changelog file.
   */
  'changelog-path'?: string | null;
  /**
   * Title for the changelog.
   */
  'changelog-title'?: string | null;
  /**
   * Whether this is a draft release.
   */
  draft?: boolean | null;
  /**
   * Additional files to update during release.
   */
  'extra-files'?: string[] | null;
  /**
   * Pattern for the group pull request title.
   */
  'group-pull-request-title-pattern'?: string | null;
  /**
   * Whether to include the component name in the release tag.
   */
  'include-component-in-tag'?: boolean | null;
  /**
   * Whether to include a 'v' prefix in the release tag.
   */
  'include-v-in-tag'?: boolean | null;
  /**
   * Pattern for the pull request title.
   */
  'pull-request-title-pattern'?: string | null;
  /**
   * Default release type for all packages.
   */
  'release-type'?:
    | (
        | 'node'
        | 'python'
        | 'rust'
        | 'go'
        | 'java'
        | 'helm'
        | 'typescript'
        | 'elixir'
        | 'ruby'
        | 'godart'
        | 'maven'
        | 'monorepo'
      )
    | null;
  /**
   * Whether to create separate pull requests for each package.
   */
  'separate-pull-requests'?: boolean | null;
  /**
   * Whether to make sequential API calls.
   */
  'sequential-calls'?: boolean | null;
  /**
   * Whether to sign off commits.
   */
  signoff?: boolean | null;
  /**
   * Separator between component and version in tag.
   */
  'tag-separator'?: string | null;
  [k: string]: unknown | undefined;
}
