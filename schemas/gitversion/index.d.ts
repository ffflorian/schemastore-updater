/* eslint-disable */

/**
 * The branches that this branch is a source branch.
 */
export type HashSetOfString = string[];
/**
 * The source branches for this branch.
 */
export type HashSetOfString1 = string[];
/**
 * A sequence of SHAs to be excluded from the version calculations.
 */
export type HashSetOfString2 = string[];
/**
 * The branches that this branch is a source branch.
 */
export type HashSetOfString3 = string[];
/**
 * The source branches for this branch.
 */
export type HashSetOfString4 = string[];

/**
 * GitVersion configuration schema (6.5)
 */
export interface GitVersionConfigurationSchema {
  /**
   * Specifies the format of AssemblyFileVersion and overwrites the value of assembly-file-versioning-scheme.
   */
  'assembly-file-versioning-format'?: null | string;
  /**
   * The scheme to use when setting AssemblyFileVersion attribute. Can be 'MajorMinorPatchTag', 'MajorMinorPatch', 'MajorMinor', 'Major', 'None'. Defaults to 'MajorMinorPatch'.
   */
  'assembly-file-versioning-scheme'?: 'MajorMinorPatchTag' | 'MajorMinorPatch' | 'MajorMinor' | 'Major' | 'None' | null;
  /**
   * Specifies the format of AssemblyInformationalVersion. Defaults to '{InformationalVersion}'.
   */
  'assembly-informational-format'?: null | string;
  /**
   * Specifies the format of AssemblyVersion and overwrites the value of assembly-versioning-scheme.
   */
  'assembly-versioning-format'?: null | string;
  /**
   * The scheme to use when setting AssemblyVersion attribute. Can be 'MajorMinorPatchTag', 'MajorMinorPatch', 'MajorMinor', 'Major', 'None'. Defaults to 'MajorMinorPatch'.
   */
  'assembly-versioning-scheme'?: 'MajorMinorPatchTag' | 'MajorMinorPatch' | 'MajorMinor' | 'Major' | 'None' | null;
  /**
   * The header for all the individual branch configuration.
   */
  branches?: {
    [k: string]:
      | {
          /**
           * Sets whether it should be possible to increment the version with special syntax in the commit message. Can be 'Disabled', 'Enabled' or 'MergeMessageOnly'.
           */
          'commit-message-incrementing'?: 'Enabled' | 'Disabled' | 'MergeMessageOnly' | null;
          /**
           * The deployment mode for this branch. Can be 'ManualDeployment', 'ContinuousDelivery', 'ContinuousDeployment'.
           */
          mode?: 'ManualDeployment' | 'ContinuousDelivery' | 'ContinuousDeployment' | null;
          /**
           * The increment strategy for this branch. Can be 'Inherit', 'Patch', 'Minor', 'Major', 'None'.
           */
          increment?: 'None' | 'Major' | 'Minor' | 'Patch' | 'Inherit';
          /**
           * When using Mainline mode, this indicates that this branch is a mainline. By default main and support/* are mainlines.
           */
          'is-main-branch'?: null | boolean;
          /**
           * Indicates this branch configuration represents a release branch in GitFlow.
           */
          'is-release-branch'?: null | boolean;
          'is-source-branch-for'?: HashSetOfString;
          /**
           * The label to use for this branch. Use the value {BranchName} or similar as a placeholder to insert a named capture group from RegularExpression (fx. the branch name).
           */
          label?: null | string;
          /**
           * Provides a way to translate the PreReleaseLabel to a number.
           */
          'pre-release-weight'?: null | number;
          'prevent-increment'?: PreventIncrementConfiguration;
          /**
           * The regular expression pattern to use to match this branch.
           */
          regex?: null | string;
          'source-branches'?: HashSetOfString1;
          /**
           * This property is a branch related property and gives the user the possibility to control the behavior of whether the merge commit message will be interpreted as a next version or not.
           */
          'track-merge-message'?: null | boolean;
          /**
           * Strategy which will look for tagged merge commits directly off the current branch.
           */
          'track-merge-target'?: null | boolean;
          /**
           * Indicates this branch configuration represents develop in GitFlow.
           */
          'tracks-release-branches'?: null | boolean;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  /**
   * The format to use when calculating the commit date. Defaults to 'yyyy-MM-dd'. See [Standard Date and Time Format Strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings) and [Custom Date and Time Format Strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings).
   */
  'commit-date-format'?: null | string;
  /**
   * Sets whether it should be possible to increment the version with special syntax in the commit message. Can be 'Disabled', 'Enabled' or 'MergeMessageOnly'.
   */
  'commit-message-incrementing'?: 'Enabled' | 'Disabled' | 'MergeMessageOnly' | null;
  /**
   * The deployment mode for this branch. Can be 'ManualDeployment', 'ContinuousDelivery', 'ContinuousDeployment'.
   */
  mode?: 'ManualDeployment' | 'ContinuousDelivery' | 'ContinuousDeployment' | null;
  /**
   * The header property for the ignore configuration.
   */
  ignore?: {
    /**
     * Commits before this date will be ignored. Format: yyyy-MM-ddTHH:mm:ss.
     */
    'commits-before'?: null | string;
    /**
     * A sequence of file paths to be excluded from the version calculations.
     */
    paths?: string[];
    sha?: HashSetOfString2;
    [k: string]: unknown | undefined;
  };
  /**
   * The increment strategy for this branch. Can be 'Inherit', 'Patch', 'Minor', 'Major', 'None'.
   */
  increment?: 'None' | 'Major' | 'Minor' | 'Patch' | 'Inherit';
  /**
   * When using Mainline mode, this indicates that this branch is a mainline. By default main and support/* are mainlines.
   */
  'is-main-branch'?: null | boolean;
  /**
   * Indicates this branch configuration represents a release branch in GitFlow.
   */
  'is-release-branch'?: null | boolean;
  'is-source-branch-for'?: HashSetOfString3;
  /**
   * The label to use for this branch. Use the value {BranchName} or similar as a placeholder to insert a named capture group from RegularExpression (fx. the branch name).
   */
  label?: null | string;
  /**
   * The regular expression to match commit messages with to perform a major version increment. Defaults to '\+semver:\s?(breaking|major)'
   */
  'major-version-bump-message'?: null | string;
  /**
   * Custom merge message formats to enable identification of merge messages that do not follow the built-in conventions.
   */
  'merge-message-formats'?: {
    [k: string]: string | undefined;
  };
  /**
   * The regular expression to match commit messages with to perform a minor version increment. Defaults to '\+semver:\s?(feature|minor)'
   */
  'minor-version-bump-message'?: null | string;
  /**
   * Allows you to bump the next version explicitly. Useful for bumping main or a feature branch with breaking changes
   */
  'next-version'?: null | string;
  /**
   * Used to tell GitVersion not to increment when in Mainline development mode. Defaults to '\+semver:\s?(none|skip)'
   */
  'no-bump-message'?: null | string;
  /**
   * The regular expression to match commit messages with to perform a patch version increment. Defaults to '\+semver:\s?(fix|patch)'
   */
  'patch-version-bump-message'?: null | string;
  /**
   * Provides a way to translate the PreReleaseLabel to a number.
   */
  'pre-release-weight'?: null | number;
  'prevent-increment'?: PreventIncrementConfiguration1;
  /**
   * The regular expression pattern to use to match this branch.
   */
  regex?: null | string;
  /**
   * Specifies the semantic version format that is used when parsing the string. Can be 'Strict' or 'Loose'. Defaults to 'Strict'.
   */
  'semantic-version-format'?: 'Strict' | 'Loose';
  'source-branches'?: HashSetOfString4;
  /**
   * A regular expression which is used to trim Git tags before processing. Defaults to '[vV]?'
   */
  'tag-prefix'?: null | string;
  /**
   * The pre-release weight in case of tagged commits. Defaults to 60000.
   */
  'tag-pre-release-weight'?: null | number;
  /**
   * This property is a branch related property and gives the user the possibility to control the behavior of whether the merge commit message will be interpreted as a next version or not.
   */
  'track-merge-message'?: null | boolean;
  /**
   * Strategy which will look for tagged merge commits directly off the current branch.
   */
  'track-merge-target'?: null | boolean;
  /**
   * Indicates this branch configuration represents develop in GitFlow.
   */
  'tracks-release-branches'?: null | boolean;
  /**
   * Whether to update the build number in the project file. Defaults to true.
   */
  'update-build-number'?: boolean & string;
  /**
   * A regular expression which is used to determine the version number in the branch name or commit message (e.g., v1.0.0-LTS). Defaults to '(?<version>[vV]?\d+(\.\d+)?(\.\d+)?).*'.
   */
  'version-in-branch-pattern'?: null | string;
  /**
   * Specifies which version strategies (one or more) will be used to determine the next version. Following values are available: 'ConfiguredNextVersion', 'MergeMessage', 'TaggedCommit', 'TrackReleaseBranches', 'VersionInBranchName' and 'Mainline'.
   */
  strategies?: (
    | 'None'
    | 'Fallback'
    | 'ConfiguredNextVersion'
    | 'MergeMessage'
    | 'TaggedCommit'
    | 'TrackReleaseBranches'
    | 'VersionInBranchName'
    | 'Mainline'
  )[];
  /**
   * The base template of the configuration to use. Possible values are: 'GitFlow/v1' or 'GitHubFlow/v1'
   */
  workflow?: null | string;
  [k: string]: unknown | undefined;
}
/**
 * The prevent increment configuration section.
 */
export interface PreventIncrementConfiguration {
  /**
   * Prevent increment when branch merged.
   */
  'of-merged-branch'?: null | boolean;
  /**
   * Prevent increment when branch merged.
   */
  'when-branch-merged'?: null | boolean;
  /**
   * This branch related property controls the behavior whether to use the tagged (value set to true) or the incremented (value set to false) semantic version. Defaults to true.
   */
  'when-current-commit-tagged'?: null | boolean;
  [k: string]: unknown | undefined;
}
/**
 * The prevent increment configuration section.
 */
export interface PreventIncrementConfiguration1 {
  /**
   * Prevent increment when branch merged.
   */
  'of-merged-branch'?: null | boolean;
  /**
   * Prevent increment when branch merged.
   */
  'when-branch-merged'?: null | boolean;
  /**
   * This branch related property controls the behavior whether to use the tagged (value set to true) or the incremented (value set to false) semantic version. Defaults to true.
   */
  'when-current-commit-tagged'?: null | boolean;
  [k: string]: unknown | undefined;
}
