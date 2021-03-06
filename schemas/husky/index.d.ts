/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type SkippingGitHooksInstallation = boolean;

/**
 * Husky can prevent bad `git commit`, `git push` and more 🐶 woof!
 */
export interface HuskyConfiguration {
  $schema?: string;
  skipCI?: SkippingGitHooksInstallation;
  hooks: GitHooks;
}
export interface GitHooks {
  "applypatch-msg"?: string;
  "pre-applypatch"?: string;
  "post-applypatch"?: string;
  "pre-commit"?: string;
  "prepare-commit-msg"?: string;
  "commit-msg"?: string;
  "post-commit"?: string;
  "pre-rebase"?: string;
  "post-checkout"?: string;
  "post-merge"?: string;
  "pre-push"?: string;
  "post-update"?: string;
  "push-to-checkout"?: string;
  "pre-auto-gc"?: string;
  "post-rewrite"?: string;
  "sendemail-validate"?: string;
  "fsmonitor-watchman"?: string;
  "p4-pre-submit"?: string;
}
