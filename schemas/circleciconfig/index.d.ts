/* eslint-disable */

export type SelfHostedRunner = string;
export type Environment =
  | (string | null)
  | Environment[]
  | {
      [k: string]: string | boolean | number | null | undefined;
    };
export type Step =
  | string
  | {
      run?:
        | string
        | {
            command: string;
            name?: string;
            shell?: string;
            environment?:
              | (string | null)
              | Environment[]
              | {
                  [k: string]: string | boolean | number | null | undefined;
                };
            background?: boolean;
            working_directory?: string;
            no_output_timeout?: string;
            when?: StepWhen;
            max_auto_reruns?: number;
            auto_rerun_delay?: string;
            [k: string]: unknown | undefined;
          };
      checkout?:
        | 'checkout'
        | {
            path?: string;
            method?: 'blobless' | 'full' | 'shallow';
            depth?: number;
            when?: StepWhen;
          };
      setup_remote_docker?:
        | 'setup_remote_docker'
        | {
            docker_layer_caching?: boolean;
            version?:
              | (
                  | '20.10.24'
                  | '20.10.23'
                  | '20.10.18'
                  | '20.10.17'
                  | '20.10.14'
                  | '20.10.12'
                  | '20.10.11'
                  | '20.10.7'
                  | '20.10.6'
                  | '20.10.2'
                  | '19.03.13'
                )
              | string;
            when?: StepWhen;
          };
      save_cache?: {
        paths: string[];
        key: string;
        name?: string;
        when?: StepWhen;
      };
      restore_cache?:
        | {
            key: string;
            name?: string;
            when?: StepWhen;
          }
        | {
            keys: string[];
            name?: string;
            when?: StepWhen;
          };
      store_artifacts?: {
        path: string;
        destination?: string;
        name?: string;
        when?: StepWhen;
      };
      store_test_results?: {
        path: string;
        name?: string;
        when?: StepWhen;
      };
      persist_to_workspace?: {
        root: string;
        paths: string[];
        name?: string;
        when?: StepWhen;
      };
      attach_workspace?: {
        at: string;
        name?: string;
        when?: StepWhen;
      };
      add_ssh_keys?:
        | 'add_ssh_keys'
        | {
            fingerprints?: string[];
            when?: StepWhen;
          };
      [k: string]:
        | {
            [k: string]: unknown | undefined;
          }
        | string
        | {
            command: string;
            name?: string;
            shell?: string;
            environment?:
              | (string | null)
              | Environment[]
              | {
                  [k: string]: string | boolean | number | null | undefined;
                };
            background?: boolean;
            working_directory?: string;
            no_output_timeout?: string;
            when?: StepWhen;
            max_auto_reruns?: number;
            auto_rerun_delay?: string;
            [k: string]: unknown | undefined;
          }
        | 'checkout'
        | {
            path?: string;
            method?: 'blobless' | 'full' | 'shallow';
            depth?: number;
            when?: StepWhen;
          }
        | 'setup_remote_docker'
        | {
            docker_layer_caching?: boolean;
            version?:
              | (
                  | '20.10.24'
                  | '20.10.23'
                  | '20.10.18'
                  | '20.10.17'
                  | '20.10.14'
                  | '20.10.12'
                  | '20.10.11'
                  | '20.10.7'
                  | '20.10.6'
                  | '20.10.2'
                  | '19.03.13'
                )
              | string;
            when?: StepWhen;
          }
        | {
            paths: string[];
            key: string;
            name?: string;
            when?: StepWhen;
          }
        | {
            key: string;
            name?: string;
            when?: StepWhen;
          }
        | {
            keys: string[];
            name?: string;
            when?: StepWhen;
          }
        | {
            path: string;
            destination?: string;
            name?: string;
            when?: StepWhen;
          }
        | {
            path: string;
            name?: string;
            when?: StepWhen;
          }
        | {
            root: string;
            paths: string[];
            name?: string;
            when?: StepWhen;
          }
        | {
            at: string;
            name?: string;
            when?: StepWhen;
          }
        | 'add_ssh_keys'
        | {
            fingerprints?: string[];
            when?: StepWhen;
          }
        | undefined;
    }
  | {
      when?: {
        condition:
          | (string | boolean | number)
          | {
              /**
               * @minItems 1
               */
              and?: [Logic, ...Logic[]];
              /**
               * @minItems 1
               */
              or?: [Logic, ...Logic[]];
              not?: Logic;
              /**
               * @minItems 1
               */
              equal?: [Logic, ...Logic[]];
              matches?: {
                pattern: string;
                value: string;
              };
            }
          | {
              [k: string]: unknown | undefined;
            };
        steps: Step[] | Step;
        [k: string]: unknown | undefined;
      };
      unless?: {
        condition:
          | (string | boolean | number)
          | {
              /**
               * @minItems 1
               */
              and?: [Logic, ...Logic[]];
              /**
               * @minItems 1
               */
              or?: [Logic, ...Logic[]];
              not?: Logic;
              /**
               * @minItems 1
               */
              equal?: [Logic, ...Logic[]];
              matches?: {
                pattern: string;
                value: string;
              };
            }
          | {
              [k: string]: unknown | undefined;
            };
        steps: Step[] | Step;
        [k: string]: unknown | undefined;
      };
    };
export type StepWhen = 'always' | 'on_success' | 'on_fail';
export type Logic =
  | (string | boolean | number)
  | {
      /**
       * @minItems 1
       */
      and?: [Logic, ...Logic[]];
      /**
       * @minItems 1
       */
      or?: [Logic, ...Logic[]];
      not?: Logic;
      /**
       * @minItems 1
       */
      equal?: [Logic, ...Logic[]];
      matches?: {
        pattern: string;
        value: string;
      };
    }
  | {
      [k: string]: unknown | undefined;
    };
export type WorkflowJobInvocation =
  | string
  | {
      [k: string]:
        | {
            requires?: (
              | string
              | {
                  /**
                   * This interface was referenced by `undefined`'s JSON-Schema definition
                   * via the `patternProperty` "^[A-Za-z][A-Za-z\s\d_-]*$".
                   */
                  [k: string]:
                    | 'success'
                    | 'failed'
                    | 'canceled'
                    | 'not_run'
                    | 'unauthorized'
                    | 'terminal'
                    | [
                        'success' | 'failed' | 'canceled' | 'unauthorized' | 'not_run',
                        ...('success' | 'failed' | 'canceled' | 'unauthorized' | 'not_run')[]
                      ]
                    | undefined;
                }
            )[];
            filters?:
              | {
                  branches?: {
                    only?: string | string[];
                    ignore?: string | string[];
                  };
                  tags?: {
                    only?: string | string[];
                    ignore?: string | string[];
                  };
                  [k: string]: unknown | undefined;
                }
              | string;
            context?: string | string[];
            type?: string;
            'pre-steps'?: {
              [k: string]: unknown | undefined;
            };
            'post-steps'?: {
              [k: string]: unknown | undefined;
            };
            matrix?: {
              parameters: {
                [k: string]: unknown | undefined;
              };
              exclude?: {
                [k: string]: unknown | undefined;
              }[];
              alias?: string;
              [k: string]: unknown | undefined;
            };
            'serial-group'?: string;
            'override-with'?: string;
            [k: string]: unknown | undefined;
          }
        | undefined;
    };
export type JobInvocation =
  | string
  | {
      type?: 'build' | 'release' | 'lock' | 'unlock' | 'approval' | 'no-op';
      [k: string]: unknown | undefined;
    };
export type Orbs = {
  [k: string]:
    | string
    | {
        jobs?: {
          [k: string]: JobInvocation | undefined;
        };
        commands?: {
          [k: string]:
            | {
                description?: string;
                parameters?: {
                  [k: string]:
                    | {
                        type: 'boolean' | 'string' | 'steps' | 'enum' | 'executor' | 'integer' | 'env_var_name';
                        default?: string | boolean | number | Step[];
                        description?: string;
                        enum?: string[];
                      }
                    | undefined;
                };
                /**
                 * @minItems 1
                 */
                steps: [Step, ...Step[]];
              }
            | string
            | undefined;
        };
        executors?: {
          [k: string]:
            | {
                description?: string;
                macos?: {
                  xcode: string | number;
                  resource_class?: string;
                  shell?: string;
                };
                resource_class?: string;
                /**
                 * @minItems 1
                 */
                docker?: [
                  {
                    image: string;
                    name?: string;
                    entrypoint?: string | string[];
                    command?: string | string[];
                    user?: string;
                    environment?:
                      | (string | null)
                      | Environment[]
                      | {
                          [k: string]: string | boolean | number | null | undefined;
                        };
                    aws_auth?:
                      | {
                          aws_access_key_id: string;
                          aws_secret_access_key: string;
                        }
                      | {
                          oidc_role_arn: string;
                        };
                    auth?: {
                      username: string;
                      password: string;
                    };
                  },
                  ...{
                    image: string;
                    name?: string;
                    entrypoint?: string | string[];
                    command?: string | string[];
                    user?: string;
                    environment?:
                      | (string | null)
                      | Environment[]
                      | {
                          [k: string]: string | boolean | number | null | undefined;
                        };
                    aws_auth?:
                      | {
                          aws_access_key_id: string;
                          aws_secret_access_key: string;
                        }
                      | {
                          oidc_role_arn: string;
                        };
                    auth?: {
                      username: string;
                      password: string;
                    };
                  }[]
                ];
                working_directory?: string;
                machine?:
                  | (string | boolean | number)
                  | {
                      enabled?: string | boolean | number;
                      image?: string;
                      docker_layer_caching?: string | boolean | number;
                      resource_class?: string;
                      shell?: string;
                    };
                environment?:
                  | (string | null)
                  | Environment[]
                  | {
                      [k: string]: string | boolean | number | null | undefined;
                    };
                shell?: string | string[];
                parameters?: {
                  [k: string]:
                    | {
                        type: 'boolean' | 'string' | 'steps' | 'enum' | 'executor' | 'integer' | 'env_var_name';
                        default?: string | boolean | number | Step[];
                        description?: string;
                        enum?: string[];
                      }
                    | undefined;
                };
              }
            | string
            | undefined;
        };
        orbs?: Orbs;
        [k: string]: unknown | undefined;
      }
    | undefined;
} | null;

export interface CircleCIConfig {
  executors?: {
    [k: string]:
      | {
          description?: string;
          macos?: {
            xcode: string | number;
            resource_class?: string;
            shell?: string;
          };
          resource_class?:
            | (
                | 'small'
                | 'medium'
                | 'medium+'
                | 'large'
                | 'xlarge'
                | '2xlarge'
                | '2xlarge+'
                | 'arm.medium'
                | 'arm.large'
                | 'arm.xlarge'
                | 'arm.2xlarge'
                | 'gpu.nvidia.small'
                | 'gpu.nvidia.medium'
                | 'windows.gpu.nvidia.medium'
                | 'm4pro.medium'
                | 'm4pro.large'
                | 'small.gen2'
                | 'medium.gen2'
                | 'medium+.gen2'
                | 'large.gen2'
                | 'xlarge.gen2'
                | '2xlarge.gen2'
                | '2xlarge+.gen2'
              )
            | SelfHostedRunner;
          /**
           * @minItems 1
           */
          docker?: [
            {
              image: string;
              name?: string;
              entrypoint?: string | string[];
              command?: string | string[];
              user?: string;
              environment?:
                | (string | null)
                | Environment[]
                | {
                    [k: string]: string | boolean | number | null | undefined;
                  };
              aws_auth?:
                | {
                    aws_access_key_id: string;
                    aws_secret_access_key: string;
                  }
                | {
                    oidc_role_arn: string;
                  };
              auth?: {
                username: string;
                password: string;
              };
            },
            ...{
              image: string;
              name?: string;
              entrypoint?: string | string[];
              command?: string | string[];
              user?: string;
              environment?:
                | (string | null)
                | Environment[]
                | {
                    [k: string]: string | boolean | number | null | undefined;
                  };
              aws_auth?:
                | {
                    aws_access_key_id: string;
                    aws_secret_access_key: string;
                  }
                | {
                    oidc_role_arn: string;
                  };
              auth?: {
                username: string;
                password: string;
              };
            }[]
          ];
          working_directory?: string;
          machine?:
            | (string | boolean | number)
            | {
                enabled?: string | boolean | number;
                image?: string;
                docker_layer_caching?: string | boolean | number;
                resource_class?: string;
                shell?: string;
              };
          environment?:
            | (string | null)
            | Environment[]
            | {
                [k: string]: string | boolean | number | null | undefined;
              };
          shell?: string | string[];
          parameters?: {
            [k: string]:
              | {
                  type: 'boolean' | 'string' | 'steps' | 'enum' | 'executor' | 'integer' | 'env_var_name';
                  default?: string | boolean | number | Step[];
                  description?: string;
                  enum?: string[];
                }
              | undefined;
          };
        }
      | string
      | undefined;
  } | null;
  experimental?: {
    notify: {
      branches: {
        only?: string | string[];
        ignore?: string | string[];
      };
    };
  };
  workflows?: {
    version?: number | string;
    [k: string]:
      | {
          triggers?: {
            schedule?: {
              cron?: string;
              filters?: {
                branches?: {
                  only?: string | string[];
                  ignore?: string | string[];
                };
              };
              [k: string]: unknown | undefined;
            };
          }[];
          max_auto_reruns?: number;
          when?:
            | (string | boolean | number)
            | {
                /**
                 * @minItems 1
                 */
                and?: [Logic, ...Logic[]];
                /**
                 * @minItems 1
                 */
                or?: [Logic, ...Logic[]];
                not?: Logic;
                /**
                 * @minItems 1
                 */
                equal?: [Logic, ...Logic[]];
                matches?: {
                  pattern: string;
                  value: string;
                };
              }
            | {
                [k: string]: unknown | undefined;
              };
          unless?:
            | (string | boolean | number)
            | {
                /**
                 * @minItems 1
                 */
                and?: [Logic, ...Logic[]];
                /**
                 * @minItems 1
                 */
                or?: [Logic, ...Logic[]];
                not?: Logic;
                /**
                 * @minItems 1
                 */
                equal?: [Logic, ...Logic[]];
                matches?: {
                  pattern: string;
                  value: string;
                };
              }
            | {
                [k: string]: unknown | undefined;
              };
          /**
           * @minItems 1
           */
          jobs: [WorkflowJobInvocation, ...WorkflowJobInvocation[]];
          [k: string]: unknown | undefined;
        }
      | number
      | string
      | undefined;
  };
  jobs?: {
    [k: string]: JobInvocation | undefined;
  };
  'job-groups'?: {
    [k: string]:
      | {
          /**
           * @minItems 1
           */
          jobs: [WorkflowJobInvocation, ...WorkflowJobInvocation[]];
        }
      | undefined;
  };
  orbs?: Orbs;
  commands?: {
    [k: string]:
      | {
          description?: string;
          parameters?: {
            [k: string]:
              | {
                  type: 'boolean' | 'string' | 'steps' | 'enum' | 'executor' | 'integer' | 'env_var_name';
                  default?: string | boolean | number | Step[];
                  description?: string;
                  enum?: string[];
                }
              | undefined;
          };
          /**
           * @minItems 1
           */
          steps: [Step, ...Step[]];
        }
      | string
      | undefined;
  } | null;
  examples?: {
    [k: string]:
      | {
          description?: string;
          usage: {
            [k: string]: unknown | undefined;
          };
          result?: {
            [k: string]: unknown | undefined;
          };
        }
      | undefined;
  };
  display?: {
    home_url?: string;
    source_url?: string;
    [k: string]: unknown | undefined;
  };
  version: '2.1' | 2.1;
  parameters?: {
    [k: string]:
      | {
          type: 'boolean' | 'string' | 'enum' | 'integer';
          default: string | boolean | number;
          description?: string;
          enum?: string[];
        }
      | undefined;
  } | null;
  [k: string]: unknown | undefined;
}
