/* eslint-disable */

/**
 * A relative forward-slash path inside the workspace, such as packages/shared or libraries/vendor. Absolute paths, .. segments, .git segments, backslashes, and symlink checkout locations are not supported.
 */
export type RelativePath = string;

/**
 * Configures repository discovery, cloning, optional Pub workspace generation, and package exclusions. Save as .dep-sync/manifest.yaml at the shared workspace root.
 */
export interface DepSyncWorkspaceManifest {
  /**
   * Workspace settings. All paths are relative to the folder containing .dep-sync, not to the manifest file. Omit fields to use their defaults.
   */
  workspace?: {
    /**
     * Folders searched recursively for existing Git repositories. Repositories are matched by their origin URLs, not directory names. The default_clone_root is always searched too. Defaults to [apps, packages].
     */
    search_roots?: RelativePath[];
    /**
     * Parent folder for missing dependency clones, relative to the workspace root. New clones use the Git repository basename. This folder is also searched for existing clones. Defaults to packages.
     */
    default_clone_root?: RelativePath;
    /**
     * When true, pull prepares a root Pub workspace for the selected app, managed Git packages, local path dependencies, and explicit nested workspace members. Requires each member's Dart SDK lower bound to be at least 3.6.0. Creates resolution overrides when needed, preserves compatible user configuration, and rejects conflicts without rewriting SDK constraints. Does not run pub get or Melos. Defaults to false; disabling it leaves existing generated files in place.
     */
    use_resolution_workspace?: boolean;
  };
  /**
   * Exact Dart dependency names excluded from cloning, checkout, and ref pinning. These are package names, not folder names, URLs, or globs. Pub still resolves them normally. A repository cannot contain both managed and ignored Git declarations. Defaults to an empty list.
   *
   * Items: Exact dependency name from the consuming app's pubspec.yaml.
   */
  ignore_packages?: string[];
}
