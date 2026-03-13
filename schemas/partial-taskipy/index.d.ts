/* eslint-disable */

/**
 * This interface was referenced by `Tasks`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export type Task =
  | Command
  | {
      cmd: Command;
      help?: string;
      use_vars?: UseVariables;
      cwd?: CurrentWorkingDirectory;
      [k: string]: unknown | undefined;
    };
/**
 * command as a string
 */
export type Command = string;
/**
 * use variables flag
 */
export type UseVariables = boolean;
/**
 * Set the working directory of the task relative to the root of the project (where the pyproject.toml file is)
 */
export type CurrentWorkingDirectory = string;
/**
 * variable in your tasks
 *
 * This interface was referenced by `Variables`'s JSON-Schema definition
 * via the `patternProperty` "^[0-9a-zA-Z_-]+$".
 */
export type Variable = VariableValue | Variable1;
export type VariableValue = string;

/**
 * tasks runner for python projects
 */
export interface Taskipy {
  tasks?: Tasks;
  variables?: Variables;
  settings?: Settings;
}
/**
 * task definitions
 */
export interface Tasks {
  [k: string]: Task;
}
/**
 * variables used in your tasks
 */
export interface Variables {
  [k: string]: Variable;
}
export interface Variable1 {
  var?: VariableValue;
  recursive?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * global scope settings for taskipy
 */
export interface Settings {
  use_vars?: UseVariables;
  cwd?: CurrentWorkingDirectory;
}
