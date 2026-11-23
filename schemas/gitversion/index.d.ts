/* eslint-disable */

/**
 * The branches that this branch is a source branch.
 */
export type HashSetOfString = string[];

/**
 * GitVersion configuration schema (7.0)
 */
export interface GitVersionConfigurationSchema {
  /**
   * Settings that participate in semantic-version calculation.
   */
  calculation?: {
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
             * The label to use for this branch. Use {BranchName} or another named capture group from a regular expression, {Sha} for the current commit's full hash, or {ShortSha} for its abbreviated hash. Named regular expression capture groups take precedence over commit placeholders.
             */
            label?: null | string;
            /**
             * The deployment mode for this branch. Can be 'ManualDeployment', 'ContinuousDelivery', 'ContinuousDeployment'.
             */
            mode?: 'ManualDeployment' | 'ContinuousDelivery' | 'ContinuousDeployment' | null;
            'prevent-increment'?: PreventIncrementConfiguration;
            /**
             * The regular expression pattern to use to match this branch. Matching is case-insensitive by default; use (?-i) to enable case-sensitive matching.
             */
            regex?: null | string;
            'source-branches'?: HashSetOfString;
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
          }
        | undefined;
    };
    /**
     * Sets whether it should be possible to increment the version with special syntax in the commit message. Can be 'Disabled', 'Enabled' or 'MergeMessageOnly'.
     */
    'commit-message-incrementing'?: 'Enabled' | 'Disabled' | 'MergeMessageOnly' | null;
    /**
     * The header property for the ignore configuration.
     */
    ignore?: {
      branches?: HashSetOfString;
      /**
       * Commits before this date will be ignored. Format: yyyy-MM-ddTHH:mm:ss.
       */
      'commits-before'?: null | string;
      paths?: HashSetOfString;
      sha?: HashSetOfString;
      tags?: HashSetOfString;
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
    'is-source-branch-for'?: HashSetOfString;
    /**
     * The label to use for this branch. Use {BranchName} or another named capture group from a regular expression, {Sha} for the current commit's full hash, or {ShortSha} for its abbreviated hash. Named regular expression capture groups take precedence over commit placeholders.
     */
    label?: null | string;
    /**
     * The regular expression to match commit messages with to perform a major version increment. Defaults to '[+=]semver:\s?(breaking|major)'. Matching is case-insensitive by default; use (?-i) to enable case-sensitive matching.
     */
    'major-version-bump-message'?: null | string;
    /**
     * Custom regular expression merge message formats to enable identification of merge messages that do not follow the built-in conventions. Matching is case-insensitive by default; use (?-i) to enable case-sensitive matching.
     */
    'merge-message-formats'?: {
      [k: string]: string | undefined;
    };
    /**
     * The regular expression to match commit messages with to perform a minor version increment. Defaults to '[+=]semver:\s?(feature|minor)'. Matching is case-insensitive by default; use (?-i) to enable case-sensitive matching.
     */
    'minor-version-bump-message'?: null | string;
    /**
     * The deployment mode for this branch. Can be 'ManualDeployment', 'ContinuousDelivery', 'ContinuousDeployment'.
     */
    mode?: 'ManualDeployment' | 'ContinuousDelivery' | 'ContinuousDeployment' | null;
    /**
     * Allows you to bump the next version explicitly. Useful for bumping main or a feature branch with breaking changes
     */
    'next-version'?: null | string;
    /**
     * Used to tell GitVersion not to increment when in Mainline development mode. Defaults to '[+=]semver:\s?(none|skip)'. Matching is case-insensitive by default; use (?-i) to enable case-sensitive matching.
     */
    'no-bump-message'?: null | string;
    /**
     * The regular expression to match commit messages with to perform a patch version increment. Defaults to '[+=]semver:\s?(fix|patch)'. Matching is case-insensitive by default; use (?-i) to enable case-sensitive matching.
     */
    'patch-version-bump-message'?: null | string;
    'prevent-increment'?: PreventIncrementConfiguration;
    /**
     * The regular expression pattern to use to match this branch. Matching is case-insensitive by default; use (?-i) to enable case-sensitive matching.
     */
    regex?: null | string;
    /**
     * Specifies the semantic version format that is used when parsing the string. Can be 'Strict' or 'Loose'. Defaults to 'Strict'.
     */
    'semantic-version-format'?: 'Strict' | 'Loose';
    'source-branches'?: HashSetOfString;
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
     * A regular expression which is used to trim Git tags before processing. Defaults to '[vV]?'. Matching is case-insensitive by default; use (?-i) to enable case-sensitive matching.
     */
    'tag-prefix'?: null | string;
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
     * The regular expression to match commit messages that reset the version bump baseline and suppress the configured branch increment. Defaults to '=semver:'. Matching is case-insensitive by default; use (?-i) to enable case-sensitive matching.
     */
    'version-bump-reset-message'?: null | string;
    /**
     * A regular expression which is used to determine the version number in the branch name or commit message (e.g., v1.0.0-LTS). Defaults to '(?<version>[vV]?\d+(\.\d+)?(\.\d+)?).*'. Matching is case-insensitive by default; use (?-i) to enable case-sensitive matching.
     */
    'version-in-branch-pattern'?: null | string;
  };
  /**
   * Settings that affect assembly, build-server, and formatted version output.
   */
  output?: {
    /**
     * Specifies the format of AssemblyFileVersion and overwrites the value of assembly-file-versioning-scheme.
     */
    'assembly-file-versioning-format'?: null | string;
    /**
     * The scheme to use when setting AssemblyFileVersion attribute. Can be 'MajorMinorPatchTag', 'MajorMinorPatch', 'MajorMinor', 'Major', 'None'. Defaults to 'MajorMinorPatch'.
     */
    'assembly-file-versioning-scheme'?:
      'MajorMinorPatchTag' | 'MajorMinorPatch' | 'MajorMinor' | 'Major' | 'None' | null;
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
             * Specifies the format of CustomVersion.
             */
            'custom-version-format'?: null | string;
            /**
             * Provides a way to translate the PreReleaseLabelName to a number.
             */
            'pre-release-weight'?: null | number;
          }
        | undefined;
    };
    /**
     * The format to use when calculating the commit date. Defaults to 'yyyy-MM-dd'. See [Standard Date and Time Format Strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings) and [Custom Date and Time Format Strings](https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings).
     */
    'commit-date-format'?: null | string;
    /**
     * Specifies the format of CustomVersion.
     */
    'custom-version-format'?: null | string;
    /**
     * Provides a way to translate the PreReleaseLabelName to a number.
     */
    'pre-release-weight'?: null | number;
    /**
     * The pre-release weight in case of tagged commits. Defaults to 60000.
     */
    'tag-pre-release-weight'?: null | number;
    /**
     * Whether to update the build number in the project file. Defaults to true.
     */
    'update-build-number'?: boolean & string;
  };
  /**
   * The base template of the configuration to use. Possible values are: 'GitFlow/v1' or 'GitHubFlow/v1'
   */
  workflow?: null | string;
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
