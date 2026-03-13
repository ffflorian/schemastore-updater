/* eslint-disable */

/**
 * Skip all or specific commands and scripts
 */
export type Skip = boolean | string[];
/**
 * Force the command, script, or hook to execute only in certain conditions. This acts like the opposite of skip.
 */
export type Only =
  | {
      ref?: string;
      [k: string]: unknown | undefined;
    }[]
  | string;
/**
 * Specify tags for commands and scripts, useful for excluding
 */
export type Tags = string;
/**
 * A list of globs to be excluded or a single regular expression (regex variant is deprecated)
 */
export type Exclude = string[] | string;
/**
 * Text to show when the command or script fails.
 */
export type FailText = string;
/**
 * Only for the 'pre-commit' hooks, this automatically calls 'git add' after running the command or script.
 */
export type StageFixed = boolean;
/**
 * Whether to use interactive mode and provide a STDIN for a command or script.
 */
export type Interactive = boolean;
/**
 * Whether to pass the stdin from the OS to the command/script.
 */
export type UseStdin = boolean;
/**
 * Set command priority from 1 to +Infinity. This option can be used to configure the order of the sequential commands.
 */
export type Priority = number;

export interface HttpsJsonSchemastoreOrgLefthookJson {
  /**
   * If `true`, fail (with exit status 1) if `lefthook` executable can't be found in `$PATH`, under `node_modules/`, or any other supported method.
   */
  assert_lefthook_installed?: boolean;
  /**
   * Whether enable or disable colorful output of Lefthook.
   */
  colors?:
    | boolean
    | {
        [k: string]: (number | string) | undefined;
      };
  /**
   * Whether hide spinner and other interactive things.
   */
  no_tty?: boolean;
  /**
   * Specify files to extend config with.
   */
  extends?: string[];
  /**
   * Specify a minimum version for the lefthook binary.
   */
  min_version?: string;
  /**
   * Manage verbosity by skipping the printing of output of some steps.
   */
  skip_output?: (
    | 'meta'
    | 'success'
    | 'failure'
    | 'summary'
    | 'empty_summary'
    | 'execution'
    | 'execution_out'
    | 'execution_info'
    | 'skips'
  )[];
  /**
   * Change a directory for script files. Directory for script files contains folders with git hook names which contain script files.
   */
  source_dir?: string;
  /**
   * Change a directory for local script files (not stored in VCS).
   */
  source_dir_local?: string;
  /**
   * Provide an rc file, which is actually a simple sh script
   */
  rc?: string;
  /**
   * @deprecated
   * DEPRECATED. Remote configs enable sharing of lefthook configuration across many projects.
   */
  remote?: {
    /**
     * @deprecated
     * DEPRECATED. A URL to Git repository. It will be accessed with privileges of the machine lefthook runs on.
     */
    git_url?: string;
    /**
     * @deprecated
     * DEPRECATED. An optional branch or tag name.
     */
    ref?: string;
    /**
     * @deprecated
     * DEPRECATED. An optional config path from remote's root.
     */
    config?: string;
  };
  /**
   * Provide multiple remote configs to use lefthook configurations shared across projects. Lefthook will automatically download and merge configurations into your local lefthook.yml.
   */
  remotes?: {
    /**
     * A URL to Git repository. It will be accessed with privileges of the machine lefthook runs on.
     */
    git_url?: string;
    /**
     * An optional *branch* or *tag* name.
     */
    ref?: string;
    /**
     * An optional array of config paths from remote's root.
     */
    configs?: string[];
    [k: string]: unknown | undefined;
  }[];
  'pre-applypatch'?: GitHook;
  'applypatch-msg'?: GitHook;
  'post-applypatch'?: GitHook;
  'commit-msg'?: GitHook;
  'fsmonitor-watchman'?: GitHook;
  'p4-changelist'?: GitHook;
  'p4-post-changelist'?: GitHook;
  'p4-pre-submit'?: GitHook;
  'p4-prepare-changelist'?: GitHook;
  'pre-commit'?: GitHook;
  'post-commit'?: GitHook;
  'pre-receive'?: GitHook;
  'proc-receive'?: GitHook;
  'post-receive'?: GitHook;
  'post-merge'?: GitHook;
  'pre-rebase'?: GitHook;
  rebase?: GitHook;
  update?: GitHook;
  'post-update'?: GitHook;
  'post-rewrite'?: GitHook;
  'post-checkout'?: GitHook;
  'post-index-change'?: GitHook;
  'pre-auto-gc'?: GitHook;
  'pre-merge-commit'?: GitHook;
  'pre-push'?: GitHook;
  'prepare-commit-msg'?: GitHook;
  'push-to-checkout'?: GitHook;
  'reference-transaction'?: GitHook;
  'sendemail-validate'?: GitHook;
  [k: string]: unknown | undefined;
}
export interface GitHook {
  skip?: Skip;
  only?: Only;
  /**
   * A custom git command for files to be referenced in {files} template.
   */
  files?: string;
  /**
   * Whether run commands and scripts concurrently.
   */
  parallel?: boolean;
  /**
   * Whether run commands and scripts sequentially. Will stop execution if one of the commands/scripts fail.
   */
  piped?: boolean;
  /**
   * Follow the STDOUT of the running commands and scripts.
   */
  follow?: boolean;
  /**
   * Tags or command names that you want to exclude.
   */
  exclude_tags?: string;
  /**
   * Commands to be executed for the hook.
   */
  commands?: {
    [k: string]: Command | undefined;
  };
  /**
   * Scripts to be executed for the hook.
   */
  scripts?: {
    [k: string]: Script | undefined;
  };
}
export interface Command {
  /**
   * The command that is executed for the hook
   */
  run: string;
  skip?: Skip;
  only?: Only;
  tags?: Tags;
  /**
   * Set a glob to filter files for your command.
   */
  glob?: string;
  /**
   * Custom Git commit for files to be referenced in {files} template for the 'run' setting.
   */
  files?: string;
  env?: Env;
  /**
   * Change the CWD for the command you execute.
   */
  root?: string;
  exclude?: Exclude;
  fail_text?: FailText;
  stage_fixed?: StageFixed;
  interactive?: Interactive;
  use_stdin?: UseStdin;
  priority?: Priority;
}
/**
 * Specify environment variables for the command or script.
 */
export interface Env {
  [k: string]: string | undefined;
}
export interface Script {
  runner?: string;
  skip?: Skip;
  only?: Only;
  tags?: Tags;
  env?: Env;
  fail_text?: FailText;
  stage_fixed?: StageFixed;
  interactive?: Interactive;
  use_stdin?: UseStdin;
}
