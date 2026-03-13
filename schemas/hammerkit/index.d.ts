/* eslint-disable */

/**
 * Task for the current build file
 * https://no0dles.gitbook.io/hammerkit/task
 */
export type Task = (ContainerTask | LocalTask) | undefined;
export type TaskCommand = Command | TaskCommandWithPathExtension;
/**
 * Command to be executed for the current task
 */
export type Command = string;
/**
 * Command to be executed for the task
 */
export type Command1 = string;
/**
 * Path below build file path
 */
export type CommandPath = string;
/**
 * Extension task as a base template
 * https://no0dles.gitbook.io/hammerkit/task/extending
 */
export type TaskExtend = string;
/**
 * compare type for detecting changes in source files
 * https://no0dles.gitbook.io/hammerkit/task/caching
 */
export type TaskCache = 'checksum' | 'modify-date' | 'none';
/**
 * The task runs continuous and does not end without cancellation
 * https://no0dles.gitbook.io/hammerkit/task/watching#continuous-tasks
 */
export type TaskContinuous = boolean;
/**
 * Service needs that need to get ready before the current task
 * https://no0dles.gitbook.io/hammerkit/task/needs
 */
export type TaskNeeds = string[];
/**
 * Task dependencies that get executed before the current task
 * https://no0dles.gitbook.io/hammerkit/task/dependencies
 */
export type TaskDeps = string[];
/**
 * Source files and folders for the current task
 * https://no0dles.gitbook.io/hammerkit/task#source
 */
export type TaskSrc = string[];
/**
 * Generated files and folders for the current task
 *
 * https://no0dles.gitbook.io/hammerkit/task#generate
 */
export type TaskGenerates = string[];
/**
 * Define which shell is used to execute the commands
 */
export type TaskShell = string;
/**
 * Container image for the current task to run commands in
 */
export type TaskImage = string;
/**
 * A daemon in the background
 */
export type Service = (ContainerService | KubernetesService) | undefined;

/**
 * Build tool with support for containerization
 * https://no0dles.gitbook.io/hammerkit/build-file
 */
export interface JSONSchemaForHammerkitSBuildFile {
  envs?: EnvironmentVariables;
  tasks?: Tasks;
  services?: Services;
  includes?: Includes;
  references?: References;
}
/**
 * Environment values for the current build task
 * https://no0dles.gitbook.io/hammerkit/build-file/environment-variables
 */
export interface EnvironmentVariables {
  /**
   * environment variable
   */
  [k: string]: string | undefined;
}
/**
 * Task for the current build file
 * https://no0dles.gitbook.io/hammerkit/task
 */
export interface Tasks {
  [k: string]: Task | undefined;
}
/**
 * Container task for the current build file
 * https://no0dles.gitbook.io/hammerkit/task/container
 */
export interface ContainerTask {
  description?: TaskCommand;
  extend?: TaskExtend;
  labels?: LabelOptions;
  cache?: TaskCache;
  continuous?: TaskContinuous;
  envs?: TaskEnvironmentVariables;
  needs?: TaskNeeds;
  deps?: TaskDeps;
  src?: TaskSrc;
  generates?: TaskGenerates;
  /**
   * Commands for the current task
   */
  cmds: TaskCommand[];
  shell?: TaskShell;
  image: TaskImage;
  /**
   * A list of ports that get exposed on the host from the container <localPort>:<targetPort>
   */
  ports?: string[];
  /**
   * File paths that get mounted into the container
   * https://no0dles.gitbook.io/hammerkit/task/container#adding-mounts
   */
  mounts?: string[];
}
/**
 * Command to be executed in sub directory for the current task
 */
export interface TaskCommandWithPathExtension {
  cmd: Command1;
  path?: CommandPath;
}
/**
 * A map of label values for the current task
 * https://no0dles.gitbook.io/hammerkit/labels
 */
export interface LabelOptions {
  /**
   * label value
   */
  [k: string]: string | undefined;
}
/**
 * Environment values for the current build file
 * https://no0dles.gitbook.io/hammerkit/build-file/environment-variables
 */
export interface TaskEnvironmentVariables {
  /**
   * environment value
   */
  [k: string]: string | undefined;
}
/**
 * Task that gets executed in the local shell in the current directory
 */
export interface LocalTask {
  description?: TaskCommand;
  labels?: LabelOptions;
  extend?: TaskExtend;
  cache?: TaskCache;
  continuous?: TaskContinuous;
  envs?: TaskEnvironmentVariables;
  needs?: TaskNeeds;
  deps?: TaskDeps;
  src?: TaskSrc;
  generates?: TaskGenerates;
  /**
   * Commands for the current task
   */
  cmds: TaskCommand[];
}
/**
 * Services for the current build file
 * https://no0dles.gitbook.io/hammerkit/service
 */
export interface Services {
  [k: string]: Service | undefined;
}
/**
 * Container service for the current build file
 * https://no0dles.gitbook.io/hammerkit/service/kubernetes
 */
export interface ContainerService {
  labels?: LabelOptions1;
  envs?: ServiceEnvironmentVariables;
  healthcheck?: ServiceHealthcheck;
  /**
   * Container image for the current service to run commands in
   */
  image: string;
  /**
   * A list of ports that get exposed on the host from the container <localPort>:<targetPort>
   * https://no0dles.gitbook.io/hammerkit/service/container#mounts
   */
  ports?: string[];
  /**
   * A list of volumes that get attached to the container <name>:<containerPath>
   * https://no0dles.gitbook.io/hammerkit/service/container#mounts
   */
  volumes?: string[];
  /**
   * File paths that get mounted into the container <localPath>:<containerPath>
   * https://no0dles.gitbook.io/hammerkit/service/container#mounts
   */
  mounts?: string[];
}
/**
 * A map of label values for the current service
 * https://no0dles.gitbook.io/hammerkit/labels
 */
export interface LabelOptions1 {
  [k: string]: string | undefined;
}
/**
 * Environment values for the current service
 * https://no0dles.gitbook.io/hammerkit/build-file/environment-variables
 */
export interface ServiceEnvironmentVariables {
  /**
   * environment value
   */
  [k: string]: string | undefined;
}
/**
 * Check to detect if the service is started and ready
 * https://no0dles.gitbook.io/hammerkit/service/container#healthcheck
 */
export interface ServiceHealthcheck {
  /**
   * task to check if the service is healthy
   */
  cmd: string;
}
/**
 * Kubernetes service for the current build file
 * https://no0dles.gitbook.io/hammerkit/service/kubernetes
 */
export interface KubernetesService {
  /**
   * Kube config for the current service
   * https://no0dles.gitbook.io/hammerkit/service/kubernetes#config
   */
  kubeconfig?: string;
  /**
   * Kubernetes context for the current service
   * https://no0dles.gitbook.io/hammerkit/service/kubernetes#config
   */
  context: string;
  /**
   * A list of ports that get exposed on the host from the service <localPort>:<targetPort>
   */
  ports: string[];
  selector: ServiceSelector;
}
/**
 * Selector to specify which resource gets forwarded to
 * https://no0dles.gitbook.io/hammerkit/service/kubernetes
 */
export interface ServiceSelector {
  /**
   * resource type for the current service
   */
  type: 'deployment' | 'service' | 'pod';
  /**
   * resource name for the kubernetes resource
   */
  name: string;
}
/**
 * Includes to other build files
 * https://no0dles.gitbook.io/hammerkit/build-file/includes
 */
export interface Includes {
  [k: string]: string;
}
/**
 * References to other build files
 * https://no0dles.gitbook.io/hammerkit/build-file/references
 */
export interface References {
  [k: string]: string;
}
