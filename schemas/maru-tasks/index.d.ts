/* eslint-disable */

export interface HttpsWwwSchemastoreOrgMaruTasksJson {
  /**
   * List of local task files to include
   */
  includes?: {
    [k: string]: string | undefined;
  }[];
  /**
   * Definitions and default values for variables used in run.yaml
   */
  variables?: InteractiveVariable[];
  /**
   * The list of tasks that can be run
   */
  tasks: Task[];
  /**
   * This interface was referenced by `HttpsWwwSchemastoreOrgMaruTasksJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
export interface InteractiveVariable {
  /**
   * The name to be used for the variable
   */
  name: string;
  /**
   * An optional regex pattern that a variable value must match before a package deployment can continue.
   */
  pattern?: string;
  /**
   * A description of the variable to be used when prompting the user a value
   */
  description?: string;
  /**
   * The default value to use for the variable
   */
  default?: string;
  /**
   * Whether to prompt the user for input for this variable
   */
  prompt?: boolean;
  /**
   * This interface was referenced by `InteractiveVariable`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
export interface Task {
  /**
   * Name of the task
   */
  name: string;
  /**
   * Description of the task
   */
  description?: string;
  /**
   * Actions to take when running the task
   */
  actions?: Action[];
  /**
   * Input parameters for the task
   */
  inputs?: {
    [k: string]: InputParameter | undefined;
  };
  /**
   * Path to file containing environment variables
   */
  envPath?: string;
  /**
   * This interface was referenced by `Task`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
export interface Action {
  /**
   * Description of the action to be displayed during package execution instead of the command
   */
  description?: string;
  /**
   * The command to run. Must specify either cmd or wait for the action to do anything.
   */
  cmd?: string;
  wait?: ActionWait;
  /**
   * Additional environment variables to set for the command
   */
  env?: string[];
  /**
   * Hide the output of the command during package deployment (default false)
   */
  mute?: boolean;
  /**
   * Timeout in seconds for the command (default to 0
   */
  maxTotalSeconds?: number;
  /**
   * Retry the command if it fails up to given number of times (default 0)
   */
  maxRetries?: number;
  /**
   * The working directory to run the command in (default is CWD)
   */
  dir?: string;
  shell?: ShellPreference;
  /**
   * (onDeploy/cmd only) An array of variables to update with the output of the command. These variables will be available to all remaining actions and components in the package.
   */
  setVariables?: Variable[];
  /**
   * The task to run
   */
  task?: string;
  /**
   * Input parameters to pass to the task
   */
  with?: {
    [k: string]: string | undefined;
  };
  /**
   * Conditional to determine if the action should run
   */
  if?: string;
  /**
   * This interface was referenced by `Action`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
/**
 * Wait for a condition to be met before continuing. Must specify either cmd or wait for the action.
 */
export interface ActionWait {
  cluster?: ActionWaitCluster;
  network?: ActionWaitNetwork;
  /**
   * This interface was referenced by `ActionWait`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
/**
 * Wait for a condition to be met in the cluster before continuing. Only one of cluster or network can be specified.
 */
export interface ActionWaitCluster {
  /**
   * The kind of resource to wait for
   */
  kind: string;
  /**
   * The name of the resource or selector to wait for
   */
  name: string;
  /**
   * The namespace of the resource to wait for
   */
  namespace?: string;
  /**
   * The condition or jsonpath state to wait for; defaults to exist
   */
  condition?: string;
  /**
   * This interface was referenced by `ActionWaitCluster`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
/**
 * Wait for a condition to be met on the network before continuing. Only one of cluster or network can be specified.
 */
export interface ActionWaitNetwork {
  /**
   * The protocol to wait for
   */
  protocol: 'tcp' | 'http' | 'https';
  /**
   * The address to wait for
   */
  address: string;
  /**
   * The HTTP status code to wait for if using http or https
   */
  code?: number;
  /**
   * This interface was referenced by `ActionWaitNetwork`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
/**
 * (cmd only) Indicates a preference for a shell for the provided cmd to be executed in on supported operating systems
 */
export interface ShellPreference {
  /**
   * (default 'powershell') Indicates a preference for the shell to use on Windows systems (note that choosing 'cmd' will turn off migrations like touch -> New-Item)
   */
  windows?: string;
  /**
   * (default 'sh') Indicates a preference for the shell to use on Linux systems
   */
  linux?: string;
  /**
   * (default 'sh') Indicates a preference for the shell to use on macOS systems
   */
  darwin?: string;
  /**
   * This interface was referenced by `ShellPreference`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
export interface Variable {
  /**
   * The name to be used for the variable
   */
  name: string;
  /**
   * An optional regex pattern that a variable value must match before a package deployment can continue.
   */
  pattern?: string;
  /**
   * This interface was referenced by `Variable`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
export interface InputParameter {
  /**
   * Description of the parameter
   */
  description: string;
  /**
   * Message to display when the parameter is deprecated
   */
  deprecatedMessage?: string;
  /**
   * Whether the parameter is required
   */
  required?: boolean;
  /**
   * Default value for the parameter
   */
  default?: string;
  /**
   * An optional regex pattern that the input value must match
   */
  pattern?: string;
  /**
   * This interface was referenced by `InputParameter`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
