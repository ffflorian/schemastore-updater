/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Step =
  | "checkout"
  | "setup_remote_docker"
  | "add_ssh_keys"
  | string
  | string
  | {
      run?: {
        [k: string]: unknown;
      };
      checkout?: {
        [k: string]: unknown;
      };
      setup_remote_docker?: {
        [k: string]: unknown;
      };
      save_cache?: {
        [k: string]: unknown;
      };
      restore_cache?: {
        [k: string]: unknown;
      };
      deploy?: {
        [k: string]: unknown;
      } & {
        [k: string]: unknown;
      };
      store_artifacts?: {
        [k: string]: unknown;
      };
      store_test_results?: {
        [k: string]: unknown;
      };
      persist_to_workspace?: {
        [k: string]: unknown;
      };
      attach_workspace?: {
        [k: string]: unknown;
      };
      add_ssh_keys?: {
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
/**
 * Options for the [docker executor](https://circleci.com/docs/2.0/configuration-reference/#docker)
 */
export type DockerExecutor = {
  /**
   * The name of a custom docker image to use
   */
  image: string;
  /**
   * The name the container is reachable by. By default, container services are accessible through `localhost`
   */
  name?: string;
  /**
   * The command used as executable when launching the container
   */
  entrypoint?: string | string[];
  /**
   * The command used as pid 1 (or args for entrypoint) when launching the container
   */
  command?: string | string[];
  /**
   * Which user to run the command as
   */
  user?: string;
  /**
   * A map of environment variable names and values
   */
  environment?: {
    [k: string]: string;
  };
  /**
   * Authentication for registries using standard `docker login` credentials
   */
  auth?: {
    username?: string;
    password?: string;
  };
  /**
   * Authentication for AWS EC2 Container Registry (ECR)
   */
  aws_auth?: {
    aws_access_key_id?: string;
    aws_secret_access_key?: string;
  };
}[];
export type ExecutorChoice =
  | {
      docker: DockerExecutor;
      /**
       * Amount of CPU and RAM allocated to each container in a job. (Only works with the `docker` key for paid accounts and is subject to change in a future pricing update. **Note:** Paid accounts must request to use this feature by opening a support ticket (or by contacting their Customer Success Manager when applicable) and non-paid users must request to use this feature by opening a ticket at <https://support.circleci.com/hc/en-us/requests/new>.)
       */
      resource_class?: "small" | "medium" | "medium+" | "large" | "xlarge";
      [k: string]: unknown;
    }
  | {
      machine: MachineExecutor;
      [k: string]: unknown;
    }
  | {
      macos: MacosExecutor;
      [k: string]: unknown;
    };

export interface JSONSchemaForCircleCIConfigurationFiles {
  /**
   * The version field is intended to be used in order to issue warnings for deprecation or breaking changes.
   */
  version: 2 | 2.1;
  orbs?: Orbs;
  commands?: Commands;
  executors?: Executors;
  jobs?: Jobs;
  /**
   * Used for orchestrating all jobs. Each workflow consists of the workflow name as a key and a map as a value
   */
  workflows?: {
    /**
     * The Workflows `version` field is used to issue warnings for deprecation or breaking changes during v2 Beta. It is deprecated as of CircleCI v2.1
     */
    version?: 2;
    [k: string]: {
      /**
       * Specifies which triggers will cause this workflow to be executed. Default behavior is to trigger the workflow when pushing to a branch.
       */
      triggers?: {
        /**
         * A workflow may have a schedule indicating it runs at a certain time, for example a nightly build that runs every day at 12am UTC:
         */
        schedule?: {
          /**
           * See the [crontab man page](http://pubs.opengroup.org/onlinepubs/7908799/xcu/crontab.html)
           */
          cron?: string;
          /**
           * A map defining rules for execution on specific branches
           */
          filters?: {
            branches?: Filter;
          };
          [k: string]: unknown;
        };
      }[];
      jobs?: (
        | string
        | {
            [k: string]: {
              /**
               * Jobs are run in parallel by default, so you must explicitly require any dependencies by their job name.
               */
              requires?: string[];
              /**
               * The name of the context. The default name is `org-global`
               */
              context?: string;
              /**
               * A job may have a `type` of `approval` indicating it must be manually approved before downstream jobs may proceed.
               */
              type?: "approval";
              /**
               * A map defining rules for execution on specific branches
               */
              filters?: {
                [k: string]: {
                  [k: string]: unknown;
                };
              };
              [k: string]: unknown;
            };
          }
      )[];
    };
  };
  [k: string]: unknown;
}
/**
 * https://circleci.com/docs/2.0/configuration-reference/#orbs-requires-version-21
 *
 * Orbs are reusable packages of CircleCI configuration that you may share across projects, enabling you to create encapsulated, parameterized commands, jobs, and executors that can be used across multiple projects.
 */
export interface Orbs {
  [k: string]:
    | string
    | {
        orbs?: Orbs;
        commands?: Commands;
        executors?: Executors;
        jobs?: Jobs;
        [k: string]: unknown;
      };
}
/**
 * https://circleci.com/docs/2.0/configuration-reference/#commands-requires-version-21
 *
 * A command definition defines a sequence of steps as a map to be executed in a job, enabling you to reuse a single command definition across multiple jobs.
 */
export interface Commands {
  /**
   * https://circleci.com/docs/2.0/configuration-reference/#commands-requires-version-21
   *
   * Definition of a custom command.
   */
  [k: string]: {
    /**
     * A sequence of steps run inside the calling job of the command.
     */
    steps: Step[];
    /**
     * https://circleci.com/docs/2.0/reusing-config/#using-the-parameters-declaration
     *
     * A map of parameter keys.
     */
    parameters?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-z][a-z0-9_-]+$".
       */
      [k: string]:
        | {
            type: "string";
            description?: string;
            default?: string;
            [k: string]: unknown;
          }
        | {
            type: "boolean";
            description?: string;
            default?: boolean;
            [k: string]: unknown;
          }
        | {
            type: "integer";
            description?: string;
            default?: number;
            [k: string]: unknown;
          }
        | {
            type: "enum";
            enum: [string, ...string[]];
            description?: string;
            default?: string;
            [k: string]: unknown;
          }
        | {
            type: "executor";
            description?: string;
            default?: string;
            [k: string]: unknown;
          }
        | {
            type: "steps";
            description?: string;
            default?: Step[];
            [k: string]: unknown;
          }
        | {
            type: "env_var_name";
            description?: string;
            default?: string;
            [k: string]: unknown;
          };
    };
    /**
     * A string that describes the purpose of the command.
     */
    description?: string;
    [k: string]: unknown;
  };
}
/**
 * Executors define the environment in which the steps of a job will be run, allowing you to reuse a single executor definition across multiple jobs.
 */
export interface Executors {
  [k: string]:
    | {
        docker: DockerExecutor;
        /**
         * Amount of CPU and RAM allocated to each container in a job. (Only works with the `docker` key for paid accounts and is subject to change in a future pricing update. **Note:** Paid accounts must request to use this feature by opening a support ticket (or by contacting their Customer Success Manager when applicable) and non-paid users must request to use this feature by opening a ticket at <https://support.circleci.com/hc/en-us/requests/new>.)
         */
        resource_class?: "small" | "medium" | "medium+" | "large" | "xlarge";
        [k: string]: unknown;
      }
    | {
        machine: MachineExecutor;
        [k: string]: unknown;
      }
    | {
        macos: MacosExecutor;
        [k: string]: unknown;
      };
}
/**
 * Options for the [machine executor](https://circleci.com/docs/2.0/configuration-reference/#machine)
 */
export interface MachineExecutor {
  /**
   * The VM image to use. View [available images](https://circleci.com/docs/2.0/configuration-reference/#available-machine-images). **Note:** This key is **not** supported on the installable CircleCI. For information about customizing machine executor images on CircleCI installed on your servers, see our [VM Service documentation](https://circleci.com/docs/2.0/vm-service).
   */
  image: string;
  /**
   * Set to `true` to enable [Docker Layer Caching](https://circleci.com/docs/2.0/docker-layer-caching). Note: You must open a support ticket to have a CircleCI Sales representative contact you about enabling this feature on your account for an additional fee.
   */
  docker_layer_caching?: boolean;
}
/**
 * Options for the [macOS executor](https://circleci.com/docs/2.0/configuration-reference/#macos)
 */
export interface MacosExecutor {
  /**
   * The version of Xcode that is installed on the virtual machine, see the [Supported Xcode Versions section of the Testing iOS](https://circleci.com/docs/2.0/testing-ios/#supported-xcode-versions) document for the complete list.
   */
  xcode: string;
}
export interface Jobs {
  [k: string]:
    | ExecutorChoice
    | {
        /**
         * The name of the executor to use (defined via the top level executors map).
         */
        executor: string;
        [k: string]: unknown;
      };
}
/**
 * A map defining rules for execution on specific branches
 */
export interface Filter {
  /**
   * Either a single branch specifier, or a list of branch specifiers
   */
  only?: string | string[];
  /**
   * Either a single branch specifier, or a list of branch specifiers
   */
  ignore?: string | string[];
}
