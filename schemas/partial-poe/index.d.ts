/* eslint-disable */

/**
 * Provide one or more env files to be loaded before running this task. If an array is provided, files will be loaded in the given order.
 */
export type EnvfileOption =
  | (string | string[])
  | {
      /**
       * Provide one or more env files to be loaded before running this task. Emit a warning if any specified envfile is missing.
       */
      expected?: string | string[];
      /**
       * Provide one or more env files to be loaded before running this task. Do not emit a warning even if a specified envfile is missing.
       */
      optional?: string | string[];
      [k: string]: unknown | undefined;
    };
export type OneOfTasks =
  | string
  | CmdTask
  | ScriptTask
  | ShellTask
  | SequenceTask
  | ParallelTask
  | ExprTask
  | SwitchTask
  | RefTask;
export type CmdTask = StandardOptions &
  CaptureStdoutOption &
  UseExecOption & {
    /**
     * Determines how to handle glob patterns with no matches. The default is 'pass', which causes unmatched patterns to be passed through to the command (just like in bash). Setting it to 'null' will replace an unmatched pattern with nothing, and setting it to 'fail' will cause the task to fail with an error if there are no matches.
     */
    empty_glob?: 'pass' | 'null' | 'fail';
    ignore_fail?: IgnoreFailExecOption;
    cmd: CommandToExecute;
    [k: string]: unknown | undefined;
  };
/**
 * Configure the executor type for running tasks. Can be 'auto', 'poetry', 'virtualenv', or 'simple', with 'auto' being the default.
 */
export type ExecutorOption = unknown | ('auto' | 'poetry' | 'uv' | 'virtualenv' | 'simple');
/**
 * Return exit code 0 even if the task fails, or specify a list of task exit codes to ignore.
 */
export type IgnoreFailExecOption = number[] | boolean;
/**
 * Executes a single command as a subprocess without a shell. Supports glob patterns for file matching, parameter expansion, and pattern matching. Environment variable templating is also supported within the command.
 */
export type CommandToExecute = string;
export type ScriptTask = StandardOptions &
  CaptureStdoutOption &
  UseExecOption & {
    ignore_fail?: IgnoreFailExecOption;
    /**
     * If true then the return value of the Python callable will be output to stdout, unless it is None.
     */
    print_result?: boolean;
    /**
     * A reference to a Python callable to import and execute, and optionally values or expressions to pass as arguments. If the target Python function is an async function then it will be executed with asyncio.run.
     */
    script: string;
    [k: string]: unknown | undefined;
  };
export type ShellTask = StandardOptions &
  CaptureStdoutOption & {
    ignore_fail?: IgnoreFailExecOption;
    /**
     * Specify the shell interpreter that this task should execute with, or a list of interpreters in order of preference.
     */
    interpreter?: string | string[];
    /**
     * A simple command line or a sequence of commands to be executed inside a new shell. It can consist of multiple statements. These tasks can leverage the full syntax of the shell interpreter such as command substitution, pipes, background processes, etc.
     */
    shell: string;
    [k: string]: unknown | undefined;
  };
export type SequenceTask = StandardOptions & {
  /**
   * Change the default item type that strings in the sequence are interpreted as.
   */
  default_item_type?: string;
  ignore_fail?: IgnoreFailTasksOption;
  sequence: TasksArray;
  [k: string]: unknown | undefined;
};
/**
 * If set, the sequence will continue running even if one of the tasks fails.
 */
export type IgnoreFailTasksOption = boolean | ('return_zero' | 'return_non_zero');
/**
 * A sequence task is defined by an array of tasks or command names to be run one after the other. Each item in the sequence can be a command name, a command, script, reference to another task, or another sequence.
 */
export type TasksArray = OneOfTasks[];
export type ParallelTask = StandardOptions & {
  /**
   * Change the default item type that strings in the sequence are interpreted as.
   */
  default_item_type?: string;
  ignore_fail?: IgnoreFailTasksOption;
  /**
   * Set the prefix applied to each line of output from subtasks. By default this is the task name.
   */
  prefix?: string;
  /**
   * Set the maximum width of the prefix. Longer prefixes will be truncated.
   */
  prefix_max?: number;
  /**
   * Specifies a template for how the prefix is applied after truncating it to the prefix_max length.
   */
  prefix_template?: string;
  parallel: TasksArray;
  [k: string]: unknown | undefined;
};
export type ExprTask = StandardOptions &
  CaptureStdoutOption &
  UseExecOption & {
    /**
     * A boolean indicating if the task will fail when the result of the expression is falsy.
     */
    assert?: boolean;
    /**
     * A Python expression to be evaluated. Can include environment variables and arguments.
     */
    expr: string;
    ignore_fail?: IgnoreFailExecOption;
    /**
     * A list of Python modules to be imported for use in the expression.
     */
    imports?: string[];
    [k: string]: unknown | undefined;
  };
export type SwitchTask = StandardOptions &
  CaptureStdoutOption & {
    /**
     * A required definition for a task to be executed to determine which case task to run.
     */
    control: string | CmdTask | ScriptTask | ShellTask | SequenceTask | ParallelTask | ExprTask | SwitchTask | RefTask;
    /**
     * Defines the default behavior if no cases are matched. Can either pass or fail.
     */
    default?: 'pass' | 'fail';
    /**
     * A list of cases with tasks to execute based on the control task's output.
     */
    switch: OneOfTasks1[];
    [k: string]: unknown | undefined;
  };
export type RefTask = StandardOptions &
  CaptureStdoutOption & {
    /**
     * If true the failure of the referenced task will be ignored and the ref task will return exit code 0.
     */
    ignore_fail?: boolean;
    /**
     * A reference to another task by name, with optional additional arguments appended.
     */
    ref: string;
    [k: string]: unknown | undefined;
  };
export type OneOfTasks1 = {
  /**
   * The value(s) that match the control task's output to determine this case should be executed.
   */
  case?: string | string[];
  [k: string]: unknown | undefined;
} & (string | CmdTask | ScriptTask | ShellTask | SequenceTask | ParallelTask | ExprTask | SwitchTask | RefTask);

/**
 * Poe the Poet is a task runner and build tool that uses simple configuration to define project tasks. It can work as a standalone tool or as a plugin for Poetry.
 */
export interface PoeThePoetConfiguration {
  /**
   * When a task is declared as a string inside an array (e.g. inline in a sequence task), then it is interpreted as the default array item task type, which will be 'ref' unless otherwise specified.
   */
  default_array_item_task_type?: 'cmd' | 'expr' | 'ref' | 'script' | 'shell';
  /**
   * When a task is declared as an array (instead of a table), then it is interpreted as the default array task type, which will be 'sequence' unless otherwise specified.
   */
  default_array_task_type?: string;
  /**
   * Sets the default task type for tasks defined as strings. By default, tasks are interpreted as shell commands ('cmd'). This can be overridden to 'script' or other supported types.
   */
  default_task_type?: 'cmd' | 'expr' | 'ref' | 'script' | 'shell';
  env?: EnvOption;
  envfile?: EnvfileOption;
  executor?: unknown;
  /**
   * Specify one or more other toml or json files to load tasks from.
   */
  include?:
    | string
    | (
        | string
        | {
            [k: string]: string | undefined;
          }
      )[]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Load dynamically generated tasks from one or more python functions.
   */
  include_script?:
    | string
    | (
        | string
        | {
            [k: string]: string | undefined;
          }
      )[]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Change the name of the task poe registers with poetry when used as a plugin.
   */
  poetry_command?: string;
  /**
   * Register tasks to run automatically before or after other poetry CLI commands.
   */
  poetry_hooks?: {
    [k: string]: string | undefined;
  };
  /**
   * Change the default shell interpreter for executing shell tasks. Normally, tasks are executed using a posix shell, but this can be overridden here.
   */
  shell_interpreter?: string | string[];
  tasks?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^\w[\w\d\-_\+:]*$".
     */
    [k: string]: OneOfTasks | TasksArray;
  };
  /**
   * Sets the default verbosity level for all commands. '-1' is quieter, '0' is the default level, and '1' is more verbose. The command line arguments are incremental, with '--quiet' or '-q' decreasing verbosity, and '--verbose' or '-v' increasing it.
   */
  verbosity?: number;
}
export interface EnvOption {
  /**
   * A map of environment variables to be set for this task.
   *
   * This interface was referenced by `EnvOption`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]:
    | string
    | {
        /**
         * A default value for an environment variable that will be used only if the variable is not already set.
         */
        default?: string;
        [k: string]: unknown | undefined;
      };
}
export interface StandardOptions {
  /**
   * Define CLI options, positional arguments, or flags that this task should accept.
   */
  args?:
    | (string | Args)[]
    | {
        [k: string]: Args;
      };
  /**
   * Specify the current working directory that this task should run with. This can be a relative path from the project root or an absolute path, and environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption;
  envfile?: EnvfileOption;
  /**
   * Help text to be displayed next to the task name in the documentation when poe is run without specifying a task.
   */
  help?: string;
  /**
   * Allows this task to use the output of other tasks which are executed first. The values are references to the names of the tasks, and the keys are environment variables by which the results of those tasks will be accessible in this task.
   */
  uses?: {
    /**
     * The name of the task whose output will be used. This will be set as an environment variable accessible in the task.
     */
    [k: string]: string | undefined;
  };
  executor?: ExecutorOption;
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2 (most verbose), overriding the project level verbosity setting, which defaults to 0.
   */
  verbosity?: number;
  [k: string]: unknown | undefined;
}
export interface Args {
  /**
   * The default value for the argument when not provided.
   */
  default?: string | number | boolean | null;
  /**
   * A short description of the argument to include in the documentation of the task.
   */
  help?: string;
  /**
   * Indicates if multiple values are allowed for the argument.
   */
  multiple?: boolean | number;
  /**
   * The name of the argument.
   */
  name: string;
  /**
   * A list of options to be provided along with the argument.
   */
  options?: string[];
  /**
   * Indicates if the argument is positional.
   */
  positional?: boolean;
  /**
   * Constrain the accepted values for an argument to a fixed set.
   */
  choices?: (string[] | number[]) & unknown[];
  /**
   * Indicates if the argument is required.
   */
  required?: boolean;
  /**
   * The type of the argument.
   */
  type?:
    | string
    | unknown[]
    | {
        [k: string]: unknown | undefined;
      }
    | boolean
    | number
    | null;
  [k: string]: unknown | undefined;
}
export interface CaptureStdoutOption {
  /**
   * Redirects the task output to a file with the given path. Supports environment variable interpolation.
   */
  capture_stdout?: string;
  [k: string]: unknown | undefined;
}
export interface UseExecOption {
  /**
   * Specify that this task should be executed in the same process, instead of as a subprocess. Note: This feature has limitations, such as not being compatible with tasks that are referenced by other tasks and not working on Windows.
   */
  use_exec?: boolean;
  [k: string]: unknown | undefined;
}
