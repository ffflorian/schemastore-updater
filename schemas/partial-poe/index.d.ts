/* eslint-disable */

export type ExecutorTaskOption =
  | ('auto' | 'poetry' | 'simple' | 'uv' | 'virtualenv')
  | ExecutorPoetry
  | ExecutorSimple
  | ExecutorUv
  | ExecutorVirtualenv
  | ExecutorAuto
  | ExecutorPartial;
export type ExecutorPartial =
  | ExecutorPoetryPartial
  | ExecutorSimplePartial
  | ExecutorUvPartial
  | ExecutorVirtualenvPartial
  | ExecutorAutoPartial;
/**
 * This interface was referenced by `TasksMap`'s JSON-Schema definition
 * via the `patternProperty` "^[^\W\d][\w:+-]*$".
 *
 * This interface was referenced by `TasksMap1`'s JSON-Schema definition
 * via the `patternProperty` "^[^\W\d][\w:+-]*$".
 */
export type TaskDef =
  | string
  | TaskDef[]
  | CmdTask
  | ExprTask
  | ParallelTask
  | RefTask
  | ScriptTask
  | SequenceTask
  | ShellTask
  | SwitchTask
  | {
      cmd?: never;
      expr?: never;
      parallel?: never;
      ref?: never;
      script?: never;
      sequence?: never;
      shell?: never;
      switch?: never;
      [k: string]: unknown | undefined;
    };
export type ArgsOption =
  | (string | ArgsItem)[]
  | {
      [k: string]: ArgsItemNoName | undefined;
    };
/**
 * Executes a single command as a subprocess without a shell. Supports glob
 * patterns for filesystem paths, parameter expansion of environment variable
 * or private variables.
 */
export type CommandToExecute = string;
export type EnvfileOption = string | EnvfileFull | (string | EnvfileFull)[];
export type TaskDefWithCase =
  | CmdTaskWithCase
  | ExprTaskWithCase
  | ParallelTaskWithCase
  | RefTaskWithCase
  | ScriptTaskWithCase
  | SequenceTaskWithCase
  | ShellTaskWithCase
  | SwitchTaskWithCase
  | {
      cmd?: never;
      expr?: never;
      parallel?: never;
      ref?: never;
      script?: never;
      sequence?: never;
      shell?: never;
      switch?: never;
      [k: string]: unknown | undefined;
    };

/**
 * Poe the Poet is a task runner that integrates well with uv, poetry, or any project using pyproject.toml
 */
export interface PoeThePoetConfiguration {
  /**
   * When a task is declared as a string inside an array (e.g. inline in a
   * sequence task), then it is interpreted as the default array item task type,
   * which will be 'ref' unless otherwise specified.
   */
  default_array_item_task_type?: 'cmd' | 'expr' | 'ref' | 'script' | 'shell';
  /**
   * When a task is declared as an array (instead of a table), then it is
   * interpreted as the default array task type, which will be 'sequence' unless
   * otherwise specified.
   */
  default_array_task_type?: 'parallel' | 'sequence';
  /**
   * Sets the default task type for tasks defined as strings. By default, tasks
   * are interpreted as shell commands ('cmd'). This can be overridden to
   * 'script' or other supported types.
   */
  default_task_type?: 'cmd' | 'expr' | 'ref' | 'script' | 'shell';
  env?: EnvOption;
  /**
   * Provide one or more env files to be loaded before running tasks. If an
   * array is provided, files will be loaded in the given order.
   */
  envfile?: string | EnvfileFull | (string | EnvfileFull)[];
  /**
   * Configure the executor for running tasks. The type can be 'auto', 'poetry',
   * 'uv', 'virtualenv', or 'simple', with 'auto' being the default. Some
   * executor types accept additional configuration options.
   */
  executor?:
    | ('auto' | 'poetry' | 'simple' | 'uv' | 'virtualenv')
    | ExecutorPoetry
    | ExecutorSimple
    | ExecutorUv
    | ExecutorVirtualenv
    | ExecutorAuto;
  groups?: GroupsMap;
  /**
   * Specify one or more other toml or json files to load tasks from.
   */
  include?:
    | string
    | (
        | string
        | {
            /**
             * Specify the working directory for resolving relative paths referenced by the
             * included config.
             */
            cwd?: string;
            /**
             * The path to the toml or json config file to include, relative to the parent
             * config file.
             */
            path: string;
            /**
             * If true, includes declared in the included file will also be loaded.
             */
            recursive?: boolean;
          }
      )[];
  /**
   * Load dynamically generated tasks from one or more python functions.
   */
  include_script?: string | (string | IncludeScriptItem)[];
  /**
   * Change the name of the task poe registers with poetry when used as a
   * plugin.
   */
  poetry_command?: string;
  /**
   * Register tasks to run automatically before or after other poetry CLI
   * commands.
   */
  poetry_hooks?: {
    [k: string]: string | undefined;
  };
  /**
   * Change the default shell interpreter for executing shell tasks. Normally,
   * tasks are executed using a posix shell, but this can be overridden here.
   */
  shell_interpreter?:
    | ('posix' | 'sh' | 'bash' | 'zsh' | 'fish' | 'pwsh' | 'powershell' | 'python')
    | ('posix' | 'sh' | 'bash' | 'zsh' | 'fish' | 'pwsh' | 'powershell' | 'python')[];
  tasks?: TasksMap1;
  /**
   * Sets the default verbosity level for all commands. '-1' is quieter, '0' is
   * the default level, and '1' is more verbose. The command line arguments are
   * incremental, with '--quiet' or '-q' decreasing verbosity, and '--verbose'
   * or '-v' increasing it.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
/**
 * A map of environment variables to be set for all tasks.
 */
export interface EnvOption {
  [k: string]: (string | EnvDefault) | undefined;
}
export interface EnvDefault {
  /**
   * A default value for an environment variable that will be used only if the
   * variable is not already set.
   */
  default: string;
}
export interface EnvfileFull {
  /**
   * Provide one or more env files to be loaded before running this task. Emit a
   * warning if any specified envfile is missing.
   */
  expected?: string | string[];
  /**
   * Provide one or more env files to be loaded before running this task. Do not
   * emit a warning even if a specified envfile is missing.
   */
  optional?: string | string[];
}
export interface ExecutorPoetry {
  type: 'poetry';
}
export interface ExecutorSimple {
  type: 'simple';
}
export interface ExecutorUv {
  /**
   * Perform an exact sync, removing extraneous packages from the environment.
   */
  exact?: boolean;
  /**
   * Include optional dependencies from the specified extra name.
   */
  extra?: string | string[];
  /**
   * Run without updating the uv.lock file.
   */
  frozen?: boolean;
  /**
   * Include dependencies from the specified dependency group.
   */
  group?: string | string[];
  /**
   * Run the command in an isolated virtual environment.
   */
  isolated?: boolean;
  /**
   * Assert that the uv.lock file is up to date; fail if it would need to be
   * updated.
   */
  locked?: boolean;
  /**
   * Disable the specified dependency group.
   */
  'no-group'?: string | string[];
  /**
   * Avoid discovering the project or workspace.
   */
  'no-project'?: boolean;
  /**
   * Avoid syncing the virtual environment.
   */
  'no-sync'?: boolean;
  /**
   * The Python interpreter to use for the run environment.
   */
  python?: string;
  type: 'uv';
  /**
   * Run with the given packages installed.
   */
  with?: string | string[];
}
export interface ExecutorVirtualenv {
  /**
   * Specifies the location of the virtualenv relative to the parent directory.
   * Relevant when 'type' is set to 'virtualenv'.
   */
  location?: string;
  type: 'virtualenv';
}
export interface ExecutorAuto {
  type: 'auto';
}
/**
 * Define groups of tasks to be displayed together in the help output.
 */
export interface GroupsMap {
  [k: string]: TaskGroup;
}
/**
 * This interface was referenced by `GroupsMap`'s JSON-Schema definition
 * via the `patternProperty` "^[\w-]+$".
 */
export interface TaskGroup {
  executor?: ExecutorTaskOption;
  /**
   * A human-readable name for the group displayed in the help output.
   */
  heading?: string;
  tasks?: TasksMap;
}
export interface ExecutorPoetryPartial {}
export interface ExecutorSimplePartial {}
export interface ExecutorUvPartial {
  /**
   * Perform an exact sync, removing extraneous packages from the environment.
   */
  exact?: boolean;
  /**
   * Include optional dependencies from the specified extra name.
   */
  extra?: string | string[];
  /**
   * Run without updating the uv.lock file.
   */
  frozen?: boolean;
  /**
   * Include dependencies from the specified dependency group.
   */
  group?: string | string[];
  /**
   * Run the command in an isolated virtual environment.
   */
  isolated?: boolean;
  /**
   * Assert that the uv.lock file is up to date; fail if it would need to be
   * updated.
   */
  locked?: boolean;
  /**
   * Disable the specified dependency group.
   */
  'no-group'?: string | string[];
  /**
   * Avoid discovering the project or workspace.
   */
  'no-project'?: boolean;
  /**
   * Avoid syncing the virtual environment.
   */
  'no-sync'?: boolean;
  /**
   * The Python interpreter to use for the run environment.
   */
  python?: string;
  /**
   * Run with the given packages installed.
   */
  with?: string | string[];
}
export interface ExecutorVirtualenvPartial {
  /**
   * Specifies the location of the virtualenv relative to the parent directory.
   * Relevant when 'type' is set to 'virtualenv'.
   */
  location?: string;
}
export interface ExecutorAutoPartial {}
export interface TasksMap {
  [k: string]: TaskDef;
}
export interface CmdTask {
  args?: ArgsOption;
  /**
   * Redirects the task output to a file with the given path. Supports
   * environment variable interpolation.
   */
  capture_stdout?: string;
  cmd: CommandToExecute;
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  /**
   * Determines how to handle glob patterns with no matches. The default is
   * 'pass', which causes unmatched patterns to be passed through to the command
   * (just like in bash). Setting it to 'null' will replace an unmatched pattern
   * with nothing, and setting it to 'fail' will cause the task to fail with an
   * error if there are no matches.
   */
  empty_glob?: 'pass' | 'null' | 'fail';
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * Return exit code 0 even if the task fails, or specify a list of task exit
   * codes to ignore.
   */
  ignore_fail?: boolean | number[];
  /**
   * Specify that this task should be executed in the same process, instead of
   * as a subprocess. Note: This feature has limitations, such as not being
   * compatible with tasks that are referenced by other tasks and not working on
   * Windows.
   */
  use_exec?: boolean;
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface ArgsItem {
  /**
   * Constrain the accepted values for an argument to a fixed set.
   */
  choices?: string[] | number[];
  /**
   * The default value for the argument when not provided.
   */
  default?: string | number | boolean;
  /**
   * A short description of the argument to include in the documentation of the
   * task.
   */
  help?: string;
  /**
   * Indicates if multiple values are allowed for the argument. If an integer is
   * given, exactly that many values are expected.
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
   * Indicates if the argument is positional. If a string is provided, it is used
   * as the dest name for the argument in argparse.
   */
  positional?: boolean | string;
  /**
   * Indicates if the argument is required.
   */
  required?: boolean;
  /**
   * The type of the argument.
   */
  type?: 'string' | 'float' | 'integer' | 'boolean';
}
export interface ArgsItemNoName {
  /**
   * Constrain the accepted values for an argument to a fixed set.
   */
  choices?: string[] | number[];
  /**
   * The default value for the argument when not provided.
   */
  default?: string | number | boolean;
  /**
   * A short description of the argument to include in the documentation of the
   * task.
   */
  help?: string;
  /**
   * Indicates if multiple values are allowed for the argument. If an integer is
   * given, exactly that many values are expected.
   */
  multiple?: boolean | number;
  /**
   * A list of options to be provided along with the argument.
   */
  options?: string[];
  /**
   * Indicates if the argument is positional. If a string is provided, it is used
   * as the dest name for the argument in argparse.
   */
  positional?: boolean | string;
  /**
   * Indicates if the argument is required.
   */
  required?: boolean;
  /**
   * The type of the argument.
   */
  type?: 'string' | 'float' | 'integer' | 'boolean';
}
export interface EnvOption1 {
  [k: string]: (string | EnvDefault) | undefined;
}
export interface ExprTask {
  args?: ArgsOption;
  /**
   * A boolean indicating if the task will fail when the result of the
   * expression is falsy. If an integer is given, the task will exit with that
   * code when the result is falsy.
   */
  assert?: boolean | number;
  /**
   * Redirects the task output to a file with the given path. Supports
   * environment variable interpolation.
   */
  capture_stdout?: string;
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Evaluates a Python expression to produce a result. Can reference
   * environment variables and arguments, and leverage most python builtins.
   */
  expr: string;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * Return exit code 0 even if the task fails, or specify a list of task exit
   * codes to ignore.
   */
  ignore_fail?: boolean | number[];
  /**
   * A list of Python modules to be imported for use in the expression.
   */
  imports?: string[];
  /**
   * Specify that this task should be executed in the same process, instead of
   * as a subprocess. Note: This feature has limitations, such as not being
   * compatible with tasks that are referenced by other tasks and not working on
   * Windows.
   */
  use_exec?: boolean;
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface ParallelTask {
  args?: ArgsOption;
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * Change the default item type that strings in the parallel task are
   * interpreted as. By default this matches the project-level
   * `default_array_item_task_type` setting.
   */
  default_item_type?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * If set, the parallel task will continue running even if one of the subtasks
   * fails.
   */
  ignore_fail?: true | false | 'return_zero' | 'return_non_zero';
  /**
   * Runs an array of subtasks concurrently. Each subtask runs in its own
   * subprocess; output lines are interleaved and prefixed with the subtask
   * name by default.
   */
  parallel: (TaskDef & {
    [k: string]: unknown | undefined;
  })[];
  /**
   * Set the prefix applied to each line of output from subtasks. By default
   * this is the task name. Set to false to disable prefixing.
   */
  prefix?: string | false;
  /**
   * Set the maximum width of the prefix. Longer prefixes will be truncated.
   */
  prefix_max?: number;
  /**
   * Specifies a template for how the prefix is applied after truncating it to
   * the prefix_max length.
   */
  prefix_template?: string;
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface RefTask {
  args?: ArgsOption;
  /**
   * Redirects the task output to a file with the given path. Supports
   * environment variable interpolation.
   */
  capture_stdout?: string;
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * If true the failure of the referenced task will be ignored and the ref task
   * will return exit code 0.
   */
  ignore_fail?: boolean;
  /**
   * Invokes another task by name, with or without arguments.
   */
  ref: string;
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface ScriptTask {
  args?: ArgsOption;
  /**
   * Redirects the task output to a file with the given path. Supports
   * environment variable interpolation.
   */
  capture_stdout?: string;
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * Return exit code 0 even if the task fails, or specify a list of task exit
   * codes to ignore.
   */
  ignore_fail?: boolean | number[];
  /**
   * If true then the return value of the Python callable will be output to
   * stdout, unless it is None.
   */
  print_result?: boolean;
  /**
   * Invokes a Python callable or module, optionally with values or expressions
   * passed as arguments.
   */
  script: string;
  /**
   * Specify that this task should be executed in the same process, instead of
   * as a subprocess. Note: This feature has limitations, such as not being
   * compatible with tasks that are referenced by other tasks and not working on
   * Windows.
   */
  use_exec?: boolean;
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface SequenceTask {
  args?: ArgsOption;
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * Change the default item type that strings in the sequence are interpreted
   * as.
   */
  default_item_type?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * If set, the sequence will continue running even if one of the tasks fails.
   */
  ignore_fail?: true | false | 'return_zero' | 'return_non_zero';
  /**
   * Runs an array of subtasks one after the other. Items may be inline task
   * definitions, task references by name. Nested arrays are run as parallel
   * tasks.
   */
  sequence: (TaskDef & {
    [k: string]: unknown | undefined;
  })[];
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface ShellTask {
  args?: ArgsOption;
  /**
   * Redirects the task output to a file with the given path. Supports
   * environment variable interpolation.
   */
  capture_stdout?: string;
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * Return exit code 0 even if the task fails, or specify a list of task exit
   * codes to ignore.
   */
  ignore_fail?: boolean | number[];
  /**
   * Specify the shell interpreter that this task should execute with, or a list
   * of interpreters in order of preference.
   */
  interpreter?:
    | ('posix' | 'sh' | 'bash' | 'zsh' | 'fish' | 'pwsh' | 'powershell' | 'python')
    | [
        'posix' | 'sh' | 'bash' | 'zsh' | 'fish' | 'pwsh' | 'powershell' | 'python',
        ...('posix' | 'sh' | 'bash' | 'zsh' | 'fish' | 'pwsh' | 'powershell' | 'python')[]
      ];
  /**
   * Executes the content as a shell scripts inside a new shell interpreter.
   * Normally the bash interpreter to used unless specified otherwise.
   */
  shell: string;
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface SwitchTask {
  args?: ArgsOption;
  /**
   * Redirects the task output to a file with the given path. Supports
   * environment variable interpolation.
   */
  capture_stdout?: string;
  /**
   * A required definition for a task to be executed to determine which case
   * task to run.
   */
  control: string | ExprTask | CmdTask | ScriptTask;
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * Defines the default behavior if no cases are matched. Can either pass or
   * fail.
   */
  default?: 'pass' | 'fail';
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * Runs one of several subtasks based on the output of a control task.
   * The control task is executed first; its output is matched against
   * each case to select which subtask to run.
   */
  switch: (TaskDefWithCase & {
    [k: string]: unknown | undefined;
  })[];
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface CmdTaskWithCase {
  args?: ArgsOption;
  /**
   * Redirects the task output to a file with the given path. Supports
   * environment variable interpolation.
   */
  capture_stdout?: string;
  case?: (string | number | boolean) | (string | number | boolean)[];
  cmd: CommandToExecute;
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  /**
   * Determines how to handle glob patterns with no matches. The default is
   * 'pass', which causes unmatched patterns to be passed through to the command
   * (just like in bash). Setting it to 'null' will replace an unmatched pattern
   * with nothing, and setting it to 'fail' will cause the task to fail with an
   * error if there are no matches.
   */
  empty_glob?: 'pass' | 'null' | 'fail';
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * Return exit code 0 even if the task fails, or specify a list of task exit
   * codes to ignore.
   */
  ignore_fail?: boolean | number[];
  /**
   * Specify that this task should be executed in the same process, instead of
   * as a subprocess. Note: This feature has limitations, such as not being
   * compatible with tasks that are referenced by other tasks and not working on
   * Windows.
   */
  use_exec?: boolean;
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface ExprTaskWithCase {
  args?: ArgsOption;
  /**
   * A boolean indicating if the task will fail when the result of the
   * expression is falsy. If an integer is given, the task will exit with that
   * code when the result is falsy.
   */
  assert?: boolean | number;
  /**
   * Redirects the task output to a file with the given path. Supports
   * environment variable interpolation.
   */
  capture_stdout?: string;
  case?: (string | number | boolean) | (string | number | boolean)[];
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Evaluates a Python expression to produce a result. Can reference
   * environment variables and arguments, and leverage most python builtins.
   */
  expr: string;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * Return exit code 0 even if the task fails, or specify a list of task exit
   * codes to ignore.
   */
  ignore_fail?: boolean | number[];
  /**
   * A list of Python modules to be imported for use in the expression.
   */
  imports?: string[];
  /**
   * Specify that this task should be executed in the same process, instead of
   * as a subprocess. Note: This feature has limitations, such as not being
   * compatible with tasks that are referenced by other tasks and not working on
   * Windows.
   */
  use_exec?: boolean;
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface ParallelTaskWithCase {
  args?: ArgsOption;
  case?: (string | number | boolean) | (string | number | boolean)[];
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * Change the default item type that strings in the parallel task are
   * interpreted as. By default this matches the project-level
   * `default_array_item_task_type` setting.
   */
  default_item_type?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * If set, the parallel task will continue running even if one of the subtasks
   * fails.
   */
  ignore_fail?: true | false | 'return_zero' | 'return_non_zero';
  /**
   * Runs an array of subtasks concurrently. Each subtask runs in its own
   * subprocess; output lines are interleaved and prefixed with the subtask
   * name by default.
   */
  parallel: (TaskDef & {
    [k: string]: unknown | undefined;
  })[];
  /**
   * Set the prefix applied to each line of output from subtasks. By default
   * this is the task name. Set to false to disable prefixing.
   */
  prefix?: string | false;
  /**
   * Set the maximum width of the prefix. Longer prefixes will be truncated.
   */
  prefix_max?: number;
  /**
   * Specifies a template for how the prefix is applied after truncating it to
   * the prefix_max length.
   */
  prefix_template?: string;
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface RefTaskWithCase {
  args?: ArgsOption;
  /**
   * Redirects the task output to a file with the given path. Supports
   * environment variable interpolation.
   */
  capture_stdout?: string;
  case?: (string | number | boolean) | (string | number | boolean)[];
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * If true the failure of the referenced task will be ignored and the ref task
   * will return exit code 0.
   */
  ignore_fail?: boolean;
  /**
   * Invokes another task by name, with or without arguments.
   */
  ref: string;
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface ScriptTaskWithCase {
  args?: ArgsOption;
  /**
   * Redirects the task output to a file with the given path. Supports
   * environment variable interpolation.
   */
  capture_stdout?: string;
  case?: (string | number | boolean) | (string | number | boolean)[];
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * Return exit code 0 even if the task fails, or specify a list of task exit
   * codes to ignore.
   */
  ignore_fail?: boolean | number[];
  /**
   * If true then the return value of the Python callable will be output to
   * stdout, unless it is None.
   */
  print_result?: boolean;
  /**
   * Invokes a Python callable or module, optionally with values or expressions
   * passed as arguments.
   */
  script: string;
  /**
   * Specify that this task should be executed in the same process, instead of
   * as a subprocess. Note: This feature has limitations, such as not being
   * compatible with tasks that are referenced by other tasks and not working on
   * Windows.
   */
  use_exec?: boolean;
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface SequenceTaskWithCase {
  args?: ArgsOption;
  case?: (string | number | boolean) | (string | number | boolean)[];
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * Change the default item type that strings in the sequence are interpreted
   * as.
   */
  default_item_type?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * If set, the sequence will continue running even if one of the tasks fails.
   */
  ignore_fail?: true | false | 'return_zero' | 'return_non_zero';
  /**
   * Runs an array of subtasks one after the other. Items may be inline task
   * definitions, task references by name. Nested arrays are run as parallel
   * tasks.
   */
  sequence: (TaskDef & {
    [k: string]: unknown | undefined;
  })[];
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface ShellTaskWithCase {
  args?: ArgsOption;
  /**
   * Redirects the task output to a file with the given path. Supports
   * environment variable interpolation.
   */
  capture_stdout?: string;
  case?: (string | number | boolean) | (string | number | boolean)[];
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * Return exit code 0 even if the task fails, or specify a list of task exit
   * codes to ignore.
   */
  ignore_fail?: boolean | number[];
  /**
   * Specify the shell interpreter that this task should execute with, or a list
   * of interpreters in order of preference.
   */
  interpreter?:
    | ('posix' | 'sh' | 'bash' | 'zsh' | 'fish' | 'pwsh' | 'powershell' | 'python')
    | [
        'posix' | 'sh' | 'bash' | 'zsh' | 'fish' | 'pwsh' | 'powershell' | 'python',
        ...('posix' | 'sh' | 'bash' | 'zsh' | 'fish' | 'pwsh' | 'powershell' | 'python')[]
      ];
  /**
   * Executes the content as a shell scripts inside a new shell interpreter.
   * Normally the bash interpreter to used unless specified otherwise.
   */
  shell: string;
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface SwitchTaskWithCase {
  args?: ArgsOption;
  /**
   * Redirects the task output to a file with the given path. Supports
   * environment variable interpolation.
   */
  capture_stdout?: string;
  case?: (string | number | boolean) | (string | number | boolean)[];
  /**
   * A required definition for a task to be executed to determine which case
   * task to run.
   */
  control: string | ExprTask | CmdTask | ScriptTask;
  /**
   * Specify the current working directory that this task should run with. This
   * can be a relative path from the project root or an absolute path, and
   * environment variables can be used in the format ${VAR_NAME}.
   */
  cwd?: string;
  /**
   * Defines the default behavior if no cases are matched. Can either pass or
   * fail.
   */
  default?: 'pass' | 'fail';
  /**
   * A list of task invocations that will be executed before this one. Each item
   * in the list is a reference to another task defined within the tasks object.
   */
  deps?: string[];
  env?: EnvOption1;
  envfile?: EnvfileOption;
  executor?: ExecutorTaskOption;
  /**
   * Help text to be displayed next to the task name in the documentation when
   * poe is run without specifying a task.
   */
  help?: string;
  /**
   * Runs one of several subtasks based on the output of a control task.
   * The control task is executed first; its output is matched against
   * each case to select which subtask to run.
   */
  switch: (TaskDefWithCase & {
    [k: string]: unknown | undefined;
  })[];
  /**
   * Allows this task to use the output of other tasks which are executed first.
   * The values are references to the names of the tasks, and the keys are
   * environment variables by which the results of those tasks will be
   * accessible in this task.
   */
  uses?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify the verbosity level for this task, from -2 (least verbose) to 2
   * (most verbose), overriding the project level verbosity setting, which
   * defaults to 0.
   */
  verbosity?: -2 | -1 | 0 | 1 | 2;
}
export interface IncludeScriptItem {
  /**
   * Specify the working directory for resolving relative paths referenced by the
   * included script.
   */
  cwd?: string;
  executor?: ExecutorTaskOption;
  /**
   * A reference to a Python callable that returns toml or json-like config to be
   * merged into the project config.
   */
  script: string;
}
/**
 * A mapping of task names to task definitions.
 */
export interface TasksMap1 {
  [k: string]: TaskDef;
}
