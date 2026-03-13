/* eslint-disable */

export interface HttpsJsonSchemastoreOrgTaskJson {
  /**
   * The arguments passed to the command. Can be omitted.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell
   * command.
   */
  command?: string;
  /**
   * Specifies whether a global command is a background task.
   */
  isBackground?: boolean;
  linux?: BaseTaskConfiguration;
  options?: CommandOptions1;
  osx?: BaseTaskConfiguration1;
  presentation?: PresentationOptions2;
  /**
   * The problem matcher to be used if a global command is executed (e.g. no tasks
   * are defined). A tasks.json file can either contain a global problemMatcher
   * property or a tasks property but not both.
   */
  problemMatcher?: ProblemMatcher | (ProblemMatcher | string)[] | string;
  /**
   * The configuration of the available tasks. A tasks.json file can either
   * contain a global problemMatcher property or a tasks property but not both.
   */
  tasks?: TaskDescription[];
  /**
   * The type of a custom task. Tasks of type "shell" are executed
   * inside a shell (e.g. bash, cmd, powershell, ...)
   */
  type?: 'process' | 'shell' | 'npm';
  /**
   * The configuration's version number
   */
  version?: '2.0.0';
  windows?: BaseTaskConfiguration2;
  [k: string]: unknown | undefined;
}
/**
 * Linux specific task configuration
 */
export interface BaseTaskConfiguration {
  /**
   * The arguments passed to the command. Can be omitted.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell
   * command.
   */
  command?: string;
  /**
   * Specifies whether a global command is a background task.
   */
  isBackground?: boolean;
  options?: CommandOptions;
  presentation?: PresentationOptions;
  /**
   * The problem matcher to be used if a global command is executed (e.g. no tasks
   * are defined). A tasks.json file can either contain a global problemMatcher
   * property or a tasks property but not both.
   */
  problemMatcher?: ProblemMatcher | (ProblemMatcher | string)[] | string;
  /**
   * The configuration of the available tasks. A tasks.json file can either
   * contain a global problemMatcher property or a tasks property but not both.
   */
  tasks?: TaskDescription[];
  /**
   * The type of a custom task. Tasks of type "shell" are executed
   * inside a shell (e.g. bash, cmd, powershell, ...)
   */
  type?: 'process' | 'shell' | 'npm';
  [k: string]: unknown | undefined;
}
/**
 * The command options used when the command is executed. Can be omitted.
 */
export interface CommandOptions {
  /**
   * The current working directory of the executed program or shell.
   * If omitted the current workspace's root is used.
   */
  cwd?: string;
  /**
   * The environment of the executed program or shell. If omitted
   * the parent process' environment is used.
   */
  env?: {
    [k: string]: string | undefined;
  };
  /**
   * Configuration of the shell when task type is `shell`
   */
  shell?: {
    /**
     * The arguments to be passed to the shell executable to run in command mode
     * (e.g ['-c'] for bash or ['/S', '/C'] for cmd.exe).
     */
    args?: string[];
    /**
     * The shell to use.
     */
    executable?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The presentation options.
 */
export interface PresentationOptions {
  /**
   * Controls whether the terminal is cleared before this task is run.
   * Defaults to `false`.
   */
  clear?: boolean;
  /**
   * Controls whether the command associated with the task is echoed
   * in the user interface. Defaults to `true`.
   */
  echo?: boolean;
  /**
   * Controls whether the panel showing the task output is taking focus.
   * Defaults to `false`.
   */
  focus?: boolean;
  /**
   * Controls whether the task is executed in a specific terminal
   * group using split panes. Tasks in the same group (specified by a string value)
   * will use split terminals to present instead of a new terminal panel.
   */
  group?: string;
  /**
   * Controls if the task panel is used for this task only (dedicated),
   * shared between tasks (shared) or if a new panel is created on
   * every task execution (new). Defaults to `shared`.
   */
  panel?: 'dedicated' | 'new' | 'shared';
  /**
   * Controls whether the task output is reveal in the user interface.
   * Defaults to `always`.
   */
  reveal?: 'always' | 'never' | 'silent';
  /**
   * Controls whether to show the `Terminal will be reused by tasks,
   * press any key to close it` message.
   */
  showReuseMessage?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * A description of a problem matcher that detects problems
 * in build output.
 */
export interface ProblemMatcher {
  background?: BackgroundMatcher;
  /**
   * The name of a base problem matcher to use. If specified the
   * base problem matcher will be used as a template and properties
   * specified here will replace properties of the base problem
   * matcher
   */
  base?: string;
  /**
   * Defines how filename reported in a problem pattern
   * should be read. Valid values are:
   *  - "absolute": the filename is always treated absolute.
   *  - "relative": the filename is always treated relative to
   *    the current working directory. This is the default.
   *  - ["relative", "path value"]: the filename is always
   *    treated relative to the given path value.
   *  - "autodetect": the filename is treated relative to
   *    the current workspace directory, and if the file
   *    does not exist, it is treated as absolute.
   *  - ["autodetect", "path value"]: the filename is treated
   *    relative to the given path value, and if it does not
   *    exist, it is treated as absolute.
   */
  fileLocation?: string[] | string;
  /**
   * The owner of the produced VS Code problem. This is typically
   * the identifier of a VS Code language service if the problems are
   * to be merged with the one produced by the language service
   * or 'external'. Defaults to 'external' if omitted.
   */
  owner?: string;
  /**
   * The name of a predefined problem pattern, the inline definition
   * of a problem pattern or an array of problem patterns to match
   * problems spread over multiple lines.
   */
  pattern?: ProblemPattern | ProblemPattern[] | string;
  /**
   * The severity of the VS Code problem produced by this problem matcher.
   *
   * Valid values are:
   *   "error": to produce errors.
   *   "warning": to produce warnings.
   *   "info": to produce infos.
   *
   * The value is used if a pattern doesn't specify a severity match group.
   * Defaults to "error" if omitted.
   */
  severity?: string;
  [k: string]: unknown | undefined;
}
/**
 * Additional information used to detect when a background task (like a watching task in Gulp)
 * is active.
 */
export interface BackgroundMatcher {
  /**
   * If set to true the watcher is in active mode when the task
   * starts. This is equals of issuing a line that matches the
   * beginPattern.
   */
  activeOnStart?: boolean;
  /**
   * If matched in the output the start of a background task is signaled.
   */
  beginsPattern?: string;
  /**
   * If matched in the output the end of a background task is signaled.
   */
  endsPattern?: string;
  [k: string]: unknown | undefined;
}
export interface ProblemPattern {
  /**
   * The match group index of the problem's code.
   *
   * Defaults to undefined. No code is captured.
   */
  code?: number;
  /**
   * The match group index of the problem's column in the source file.
   */
  column?: number;
  /**
   * The match group index of the problem's end column in the source file.
   *
   * Defaults to undefined. No end column is captured.
   */
  endColumn?: number;
  /**
   * The match group index of the problem's end line in the source file.
   *
   * Defaults to undefined. No end line is captured.
   */
  endLine?: number;
  /**
   * The match group index of the filename.
   */
  file?: number;
  /**
   * Whether the pattern matches a problem for the whole file or for a location
   * inside a file.
   *
   * Defaults to "location".
   */
  kind?: 'file' | 'location';
  /**
   * The match group index of the problem's line in the source file.
   * Can only be omitted if location is specified.
   */
  line?: number;
  /**
   * The match group index of the problem's location. Valid location
   * patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn).
   * If omitted the line and column properties are used.
   */
  location?: number;
  /**
   * Specifies if the last pattern in a multi line problem matcher should
   * loop as long as it does match a line consequently. Only valid on the
   * last problem pattern in a multi line problem matcher.
   */
  loop?: boolean;
  /**
   * The match group index of the message. Defaults to 0.
   */
  message?: number;
  /**
   * The regular expression to find a problem in the console output of an
   * executed task.
   */
  regexp?: string;
  /**
   * The match group index of the problem's severity.
   *
   * Defaults to undefined. In this case the problem matcher's severity
   * is used.
   */
  severity?: number;
  [k: string]: unknown | undefined;
}
/**
 * The description of a task.
 */
export interface TaskDescription {
  /**
   * Additional arguments passed to the command. Should be used if type
   * is "process".
   */
  args?: string[];
  /**
   * The command to execute. If the type is "shell" it should be the full
   * command line including any additional arguments passed to the command.
   */
  command?: string;
  /**
   * Defines the group to which this task belongs. Also supports to mark
   * a task as the default task in a group.
   */
  group?:
    | {
        isDefault?: boolean;
        kind?: 'build' | 'test';
        [k: string]: unknown | undefined;
      }
    | ('build' | 'test');
  /**
   * Whether the executed command is kept alive and runs in the background.
   */
  isBackground?: boolean;
  /**
   * The task's name
   */
  label?: string;
  presentation?: PresentationOptions1;
  /**
   * The problem matcher(s) to use to capture problems in the tasks
   * output.
   */
  problemMatcher?: ProblemMatcher | (ProblemMatcher | string)[] | string;
  runOptions?: RunOptions;
  /**
   * The type of a custom task. Tasks of type "shell" are executed
   * inside a shell (e.g. bash, cmd, powershell, ...)
   */
  type?: 'process' | 'shell' | 'npm';
  [k: string]: unknown | undefined;
}
/**
 * The presentation options.
 */
export interface PresentationOptions1 {
  /**
   * Controls whether the terminal is cleared before this task is run.
   * Defaults to `false`.
   */
  clear?: boolean;
  /**
   * Controls whether the command associated with the task is echoed
   * in the user interface. Defaults to `true`.
   */
  echo?: boolean;
  /**
   * Controls whether the panel showing the task output is taking focus.
   * Defaults to `false`.
   */
  focus?: boolean;
  /**
   * Controls whether the task is executed in a specific terminal
   * group using split panes. Tasks in the same group (specified by a string value)
   * will use split terminals to present instead of a new terminal panel.
   */
  group?: string;
  /**
   * Controls if the task panel is used for this task only (dedicated),
   * shared between tasks (shared) or if a new panel is created on
   * every task execution (new). Defaults to `shared`.
   */
  panel?: 'dedicated' | 'new' | 'shared';
  /**
   * Controls whether the task output is reveal in the user interface.
   * Defaults to `always`.
   */
  reveal?: 'always' | 'never' | 'silent';
  /**
   * Controls whether to show the `Terminal will be reused by tasks,
   * press any key to close it` message.
   */
  showReuseMessage?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Defines when and how a task is run.
 */
export interface RunOptions {
  /**
   * Controls how variables are evaluated when a task is executed through
   * the Rerun Last Task command.
   * The default is `true`, meaning that variables will be re-evaluated when
   * a task is rerun. When set to `false`, the resolved variable values from
   * the previous run of the task will be used.
   */
  reevaluateOnRerun?: boolean;
  /**
   * Specifies when a task is run.
   *
   * Valid values are:
   *   "default": The task will only be run when executed through the Run Task command.
   *   "folderOpen": The task will be run when the containing folder is opened.
   */
  runOn?: string;
  [k: string]: unknown | undefined;
}
/**
 * The command options used when the command is executed. Can be omitted.
 */
export interface CommandOptions1 {
  /**
   * The current working directory of the executed program or shell.
   * If omitted the current workspace's root is used.
   */
  cwd?: string;
  /**
   * The environment of the executed program or shell. If omitted
   * the parent process' environment is used.
   */
  env?: {
    [k: string]: string | undefined;
  };
  /**
   * Configuration of the shell when task type is `shell`
   */
  shell?: {
    /**
     * The arguments to be passed to the shell executable to run in command mode
     * (e.g ['-c'] for bash or ['/S', '/C'] for cmd.exe).
     */
    args?: string[];
    /**
     * The shell to use.
     */
    executable?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * macOS specific task configuration
 */
export interface BaseTaskConfiguration1 {
  /**
   * The arguments passed to the command. Can be omitted.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell
   * command.
   */
  command?: string;
  /**
   * Specifies whether a global command is a background task.
   */
  isBackground?: boolean;
  options?: CommandOptions;
  presentation?: PresentationOptions;
  /**
   * The problem matcher to be used if a global command is executed (e.g. no tasks
   * are defined). A tasks.json file can either contain a global problemMatcher
   * property or a tasks property but not both.
   */
  problemMatcher?: ProblemMatcher | (ProblemMatcher | string)[] | string;
  /**
   * The configuration of the available tasks. A tasks.json file can either
   * contain a global problemMatcher property or a tasks property but not both.
   */
  tasks?: TaskDescription[];
  /**
   * The type of a custom task. Tasks of type "shell" are executed
   * inside a shell (e.g. bash, cmd, powershell, ...)
   */
  type?: 'process' | 'shell' | 'npm';
  [k: string]: unknown | undefined;
}
/**
 * The presentation options.
 */
export interface PresentationOptions2 {
  /**
   * Controls whether the terminal is cleared before this task is run.
   * Defaults to `false`.
   */
  clear?: boolean;
  /**
   * Controls whether the command associated with the task is echoed
   * in the user interface. Defaults to `true`.
   */
  echo?: boolean;
  /**
   * Controls whether the panel showing the task output is taking focus.
   * Defaults to `false`.
   */
  focus?: boolean;
  /**
   * Controls whether the task is executed in a specific terminal
   * group using split panes. Tasks in the same group (specified by a string value)
   * will use split terminals to present instead of a new terminal panel.
   */
  group?: string;
  /**
   * Controls if the task panel is used for this task only (dedicated),
   * shared between tasks (shared) or if a new panel is created on
   * every task execution (new). Defaults to `shared`.
   */
  panel?: 'dedicated' | 'new' | 'shared';
  /**
   * Controls whether the task output is reveal in the user interface.
   * Defaults to `always`.
   */
  reveal?: 'always' | 'never' | 'silent';
  /**
   * Controls whether to show the `Terminal will be reused by tasks,
   * press any key to close it` message.
   */
  showReuseMessage?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Windows specific task configuration
 */
export interface BaseTaskConfiguration2 {
  /**
   * The arguments passed to the command. Can be omitted.
   */
  args?: string[];
  /**
   * The command to be executed. Can be an external program or a shell
   * command.
   */
  command?: string;
  /**
   * Specifies whether a global command is a background task.
   */
  isBackground?: boolean;
  options?: CommandOptions;
  presentation?: PresentationOptions;
  /**
   * The problem matcher to be used if a global command is executed (e.g. no tasks
   * are defined). A tasks.json file can either contain a global problemMatcher
   * property or a tasks property but not both.
   */
  problemMatcher?: ProblemMatcher | (ProblemMatcher | string)[] | string;
  /**
   * The configuration of the available tasks. A tasks.json file can either
   * contain a global problemMatcher property or a tasks property but not both.
   */
  tasks?: TaskDescription[];
  /**
   * The type of a custom task. Tasks of type "shell" are executed
   * inside a shell (e.g. bash, cmd, powershell, ...)
   */
  type?: 'process' | 'shell' | 'npm';
  [k: string]: unknown | undefined;
}
