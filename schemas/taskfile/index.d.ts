/* eslint-disable */

/**
 * Schema for Taskfile files.
 */
export type TaskfileYAMLSchema = {
  [k: string]: unknown | undefined;
} & {
  /**
   * Specify the Taskfile format that this file conforms to.
   */
  version: string | 3;
  /**
   * Defines how the STDOUT and STDERR are printed when running tasks in parallel. The interleaved output prints lines in real time (default). The group output will print the entire output of a command once, after it finishes, so you won't have live feedback for commands that take a long time to run. The prefix output will prefix every line printed by a command with [task-name] as the prefix, but you can customize the prefix for a command with the prefix: attribute.
   */
  output?: OutputString | OutputObject;
  /**
   * Defines which method is used to check the task is up-to-date. (default: checksum)
   */
  method?: 'none' | 'checksum' | 'timestamp';
  /**
   * When set to true, files matching .gitignore rules will be excluded from sources and generates glob resolution for all tasks. Can be overridden per task.
   */
  use_gitignore?: boolean;
  /**
   * Imports tasks from the specified taskfiles. The tasks described in the given Taskfiles will be available with the informed namespace.
   */
  includes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]:
      | string
      | ({
          [k: string]: unknown | undefined;
        } & {
          /**
           * The path for the Taskfile or directory to be included. If a directory, Task will look for files named `Taskfile.yml` or `Taskfile.yaml` inside that directory. If a relative path, resolved relative to the directory containing the including Taskfile.
           */
          taskfile?: string;
          /**
           * The working directory of the included tasks when run.
           */
          dir?: string;
          /**
           * If `true`, no errors will be thrown if the specified file does not exist.
           */
          optional?: boolean;
          /**
           * If `true`, the tasks from the included Taskfile will be available in the including Taskfile without a namespace. If a task with the same name already exists in the including Taskfile, an error will be thrown.
           */
          flatten?: boolean;
          /**
           * Stops any task in the included Taskfile from being callable on the command line. These commands will also be omitted from the output when used with `--list`.
           */
          internal?: boolean;
          /**
           * Alternative names for the namespace of the included Taskfile.
           */
          aliases?: string[];
          /**
           * A list of task names or namespace patterns ending in `:*` to be excluded from inclusion.
           */
          excludes?: string[];
          vars?: Vars;
          /**
           * The checksum of the file you expect to include. If the checksum does not match, the file will not be included.
           */
          checksum?: string;
          [k: string]: unknown | undefined;
        })
      | undefined;
  };
  vars?: Vars;
  env?: Env;
  tasks?: Tasks;
  /**
   * Default 'silent' options for this Taskfile. If `false`, can be overridden with `true` in a task by task basis.
   */
  silent?: boolean;
  /**
   * Enables POSIX shell options for all commands in the Taskfile. See https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
   */
  set?: Set[];
  /**
   * Enables Bash shell options for all commands in the Taskfile. See https://www.gnu.org/software/bash/manual/html_node/The-Shopt-Builtin.html
   */
  shopt?: Shopt[];
  /**
   * A list of `.env` file paths to be parsed.
   */
  dotenv?: string[];
  /**
   * Default 'run' option for this Taskfile. Available options: `always`, `once` and `when_changed`.
   */
  run?: 'always' | 'once' | 'when_changed';
  /**
   * Sets a different watch interval when using `--watch`, the default being 100 milliseconds. This string should be a valid Go duration: https://pkg.go.dev/time#ParseDuration.
   */
  interval?: string;
};
export type OutputString = 'interleaved' | 'prefixed' | 'group';
export type Cmd = string | CmdCall | TaskCall | DeferTaskCall | DeferCmdCall | ForCmdCall | ForTaskCall;
export type Set =
  'allexport' | 'a' | 'errexit' | 'e' | 'noexec' | 'n' | 'noglob' | 'f' | 'nounset' | 'u' | 'xtrace' | 'x' | 'pipefail';
export type Shopt = 'expand_aliases' | 'globstar' | 'nullglob';
/**
 * Specifies which platforms the command should be run on.
 */
export type Platforms = string[];
export type For = ForList | ForAttribute | ForVar | ForMatrix;
/**
 * A list of values to iterate over
 */
export type ForList = (string | number)[];
/**
 * The task attribute to iterate over
 */
export type ForAttribute = 'sources' | 'generates';
/**
 * A list of commands to be executed.
 */
export type Cmds = Cmd[];
/**
 * A list of dependencies of this task. Tasks defined here will run in parallel before this task.
 */
export type Deps = (string | TaskCall | ForDepsCall)[];
export type Glob = string | GlobObj;
export type Precondition = string | PreconditionObj;

export interface OutputObject {
  group?: {
    begin?: string;
    end?: string;
    /**
     * Swallows command output on zero exit code
     */
    error_only?: boolean;
    [k: string]: unknown | undefined;
  };
}
/**
 * A set of variables to apply to the included Taskfile.
 */
export interface Vars {
  /**
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Env`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Env`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   */
  [k: string]: boolean | number | null | string | unknown[] | VarSubkey | undefined;
}
export interface VarSubkey {
  /**
   * The value will be treated as a command and the output assigned to the variable
   */
  sh?: string;
  /**
   * The value will be used to lookup the value of another variable which will then be assigned to this variable
   */
  ref?: string;
  /**
   * The value will be treated as a literal map type and stored in the variable
   */
  map?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A literal value assigned to the variable. Useful together with other keys such as 'secret'
   */
  value?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Marks the variable as secret. Secret values will be masked as ***** in command logs to prevent accidental exposure of sensitive information.
   */
  secret?: boolean;
}
/**
 * A set of global environment variables.
 */
export interface Env {
  /**
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Env`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Vars`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Env`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   */
  [k: string]: boolean | number | null | string | unknown[] | VarSubkey | undefined;
}
/**
 * A set of task definitions.
 */
export interface Tasks {
  /**
   * This interface was referenced by `Tasks`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   */
  [k: string]: string | (string | TaskCall | DeferTaskCall | DeferCmdCall)[] | Task | undefined;
}
export interface TaskCall {
  /**
   * Name of the task to run
   */
  task: string;
  vars?: Vars;
  /**
   * Hides task name and command from output. The command's output will still be redirected to `STDOUT` and `STDERR`.
   */
  silent?: boolean;
  /**
   * Prevent the command from aborting the execution of the task when it exits with a non-zero status code
   */
  ignore_error?: boolean;
  /**
   * A shell command to evaluate. If the exit code is non-zero, the command is skipped.
   */
  if?: string;
  /**
   * Maximum duration the command is allowed to run before being terminated. Supports Go duration syntax (e.g., '5m', '30s', '1h').
   */
  timeout?: string;
}
export interface DeferTaskCall {
  /**
   * Run a command when the task completes. This command will run even when the task fails
   */
  defer: DeferredTaskCall;
  /**
   * Maximum duration the command is allowed to run before being terminated. Supports Go duration syntax (e.g., '5m', '30s', '1h').
   */
  timeout?: string;
}
export interface DeferredTaskCall {
  /**
   * Name of the task to run
   */
  task: string;
  vars?: Vars;
  /**
   * Hides task name and command from output. The command's output will still be redirected to `STDOUT` and `STDERR`.
   */
  silent?: boolean;
  /**
   * A shell command to evaluate. If the exit code is non-zero, the command is skipped.
   */
  if?: string;
}
export interface DeferCmdCall {
  /**
   * Name of the command to defer
   */
  defer: string;
  /**
   * Hides task name and command from output. The command's output will still be redirected to `STDOUT` and `STDERR`.
   */
  silent?: boolean;
  /**
   * Maximum duration the command is allowed to run before being terminated. Supports Go duration syntax (e.g., '5m', '30s', '1h').
   */
  timeout?: string;
}
export interface Task {
  cmds?: Cmds;
  /**
   * The command to be executed.
   */
  cmd?: string | CmdCall | TaskCall | DeferTaskCall | DeferCmdCall | ForCmdCall | ForTaskCall;
  deps?: Deps;
  /**
   * Overrides the name of the task in the output when a task is run. Supports variables.
   */
  label?: string;
  /**
   * A short description of the task. This is displayed when calling `task --list`.
   */
  desc?: string;
  /**
   * One or more prompts that will be presented before a task is run. Declining will cancel running the current and any subsequent tasks.
   */
  prompt?: string | string[];
  /**
   * A longer description of the task. This is displayed when calling `task --summary [task]`.
   */
  summary?: string;
  /**
   * A list of alternative names by which the task can be called.
   */
  aliases?: string[];
  /**
   * A list of sources to check before running this task. Relevant for `checksum` and `timestamp` methods. Can be file paths or star globs.
   */
  sources?: Glob[];
  /**
   * A list of files meant to be generated by this task. Relevant for `timestamp` method. Can be file paths or star globs.
   */
  generates?: Glob[];
  /**
   * A list of commands to check if this task should run. The task is skipped otherwise. This overrides `method`, `sources` and `generates`.
   */
  status?: string[];
  /**
   * A list of commands to check if this task should run. If a condition is not met, the task will error.
   */
  preconditions?: Precondition[];
  /**
   * The directory in which this task should run. Defaults to the current working directory.
   */
  dir?: string;
  /**
   * Enables POSIX shell options for all of a task's commands. See https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
   */
  set?: Set[];
  /**
   * Enables Bash shell options for all of a task's commands. See https://www.gnu.org/software/bash/manual/html_node/The-Shopt-Builtin.html
   */
  shopt?: Shopt[];
  vars?: Vars;
  env?: Env;
  /**
   * A list of `.env` file paths to be parsed.
   */
  dotenv?: string[];
  /**
   * Hides task name and command from output. The command's output will still be redirected to `STDOUT` and `STDERR`. When combined with the `--list` flag, task descriptions will be hidden.
   */
  silent?: boolean;
  /**
   * Tells task that the command is interactive.
   */
  interactive?: boolean;
  /**
   * Stops a task from being callable on the command line. It will also be omitted from the output when used with `--list`.
   */
  internal?: boolean;
  /**
   * Defines which method is used to check the task is up-to-date. `timestamp` will compare the timestamp of the sources and generates files. `checksum` will check the checksum (You probably want to ignore the .task folder in your .gitignore file). `none` skips any validation and always run the task.
   */
  method?: 'none' | 'checksum' | 'timestamp';
  /**
   * When set to true, files matching .gitignore rules will be excluded from sources and generates glob resolution. Overrides the global gitignore setting.
   */
  use_gitignore?: boolean;
  /**
   * Defines a string to prefix the output of tasks running in parallel. Only used when the output mode is `prefixed`.
   */
  prefix?: string;
  /**
   * Continue execution if errors happen while executing commands.
   */
  ignore_error?: boolean;
  /**
   * Specifies whether the task should run again or not if called more than once. Available options: `always`, `once` and `when_changed`.
   */
  run?: 'always' | 'once' | 'when_changed';
  platforms?: Platforms;
  /**
   * A shell command to evaluate. If the exit code is non-zero, the task is skipped.
   */
  if?: string;
  requires?: RequiresObj;
  /**
   * Configures a task to run in watch mode automatically.
   */
  watch?: boolean;
  /**
   * When running tasks in parallel, stop all tasks if one fails.
   */
  failfast?: boolean;
}
export interface CmdCall {
  /**
   * Command to run
   */
  cmd: string;
  /**
   * Silent mode disables echoing of command before Task runs it
   */
  silent?: boolean;
  /**
   * Enables POSIX shell options for this command. See https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
   */
  set?: Set[];
  /**
   * Enables Bash shell options for this command. See https://www.gnu.org/software/bash/manual/html_node/The-Shopt-Builtin.html
   */
  shopt?: Shopt[];
  /**
   * Prevent the command from aborting the execution of the task when it exits with a non-zero status code
   */
  ignore_error?: boolean;
  platforms?: Platforms;
  /**
   * A shell command to evaluate. If the exit code is non-zero, the command is skipped.
   */
  if?: string;
  /**
   * Maximum duration the command is allowed to run before being terminated. Supports Go duration syntax (e.g., '5m', '30s', '1h').
   */
  timeout?: string;
}
export interface ForCmdCall {
  for: For;
  /**
   * Command to run
   */
  cmd: string;
  /**
   * Silent mode disables echoing of command before Task runs it
   */
  silent?: boolean;
  /**
   * Enables POSIX shell options for this command. See https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
   */
  set?: Set[];
  /**
   * Enables Bash shell options for this command. See https://www.gnu.org/software/bash/manual/html_node/The-Shopt-Builtin.html
   */
  shopt?: Shopt[];
  /**
   * Prevent the command from aborting the execution of the task when it exits with a non-zero status code
   */
  ignore_error?: boolean;
  platforms?: Platforms;
  /**
   * A shell command to evaluate. If the exit code is non-zero, the command is skipped.
   */
  if?: string;
  /**
   * Maximum duration the command is allowed to run before being terminated. Supports Go duration syntax (e.g., '5m', '30s', '1h').
   */
  timeout?: string;
}
/**
 * Which variables to iterate over. The variable will be split using any whitespace character by default. This can be changed by using the `split` attribute.
 */
export interface ForVar {
  /**
   * Name of the variable to iterate over
   */
  var: string;
  /**
   * String to split the variable on
   */
  split?: string;
  /**
   * What the loop variable should be named
   */
  as?: string;
}
/**
 * A matrix of values to iterate over
 */
export interface ForMatrix {
  [k: string]: unknown | undefined;
}
export interface ForTaskCall {
  for: For;
  /**
   * Task to run
   */
  task: string;
  vars?: Vars;
  /**
   * Silent mode disables echoing of command before Task runs it
   */
  silent?: boolean;
  /**
   * Prevent the command from aborting the execution of the task when it exits with a non-zero status code
   */
  ignore_error?: boolean;
  platforms?: Platforms;
  /**
   * A shell command to evaluate. If the exit code is non-zero, the command is skipped.
   */
  if?: string;
  /**
   * Maximum duration the command is allowed to run before being terminated. Supports Go duration syntax (e.g., '5m', '30s', '1h').
   */
  timeout?: string;
}
export interface ForDepsCall {
  for: For;
  /**
   * Silent mode disables echoing of command before Task runs it
   */
  silent?: boolean;
  /**
   * Task to run
   */
  task: string;
  vars?: Vars;
  /**
   * Maximum duration the command is allowed to run before being terminated. Supports Go duration syntax (e.g., '5m', '30s', '1h').
   */
  timeout?: string;
}
export interface GlobObj {
  /**
   * File or glob pattern to exclude from the list
   */
  exclude?: string;
}
export interface PreconditionObj {
  /**
   * Command to run. If that command returns 1, the condition will fail
   */
  sh?: string;
  /**
   * Failure message to display when the condition fails
   */
  msg?: string;
}
/**
 * A list of variables which should be set if this task is to run, if any of these variables are unset the task will error and not run
 */
export interface RequiresObj {
  /**
   * List of variables that must be defined for the task to run
   */
  vars?: (
    | string
    | {
        name: string;
        enum?:
          | string[]
          | {
              ref: string;
            };
      }
  )[];
}
