/* eslint-disable */

/**
 * https://www.jfrog.com/confluence/display/JFROG/Pipelines+Developer+Guide
 */
export type JFrogPipelines = (
  | {
      pipelines: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      resources: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      include: unknown;
      [k: string]: unknown | undefined;
    }
) & {
  resources?: Resource[];
  pipelines?: Pipeline[];
  template?: boolean;
  valuesFilePath?: string;
  include?: {
    template?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
};
/**
 * https://www.jfrog.com/confluence/display/JFROG/Pipelines+Resources
 */
export type Resource = Resource1;
export type Execution = (string | Task)[];
/**
 * https://www.jfrog.com/confluence/display/JFROG/Pipelines+Steps
 */
export type Step = Step1 & Step1;

export interface Resource1 {
  name?: string;
  type?:
    | 'Aql'
    | 'BuildInfo'
    | 'CronTrigger'
    | 'DistributionRule'
    | 'FileSpec'
    | 'GitRepo'
    | 'HelmChart'
    | 'Image'
    | 'IncomingWebhook'
    | 'OutgoingWebhook'
    | 'PropertyBag'
    | 'ReleaseBundle'
    | 'RemoteFile'
    | 'VmCluster';
  [k: string]: unknown | undefined;
}
/**
 * https://www.jfrog.com/confluence/display/JFROG/Creating+Pipelines
 */
export interface Pipeline {
  name: string;
  configuration?: {
    environmentVariables?: {
      readOnly: {
        [k: string]:
          | string
          | number
          | ((
              | {
                  default: unknown;
                  [k: string]: unknown | undefined;
                }
              | {
                  defaultMultipleValues: unknown;
                  [k: string]: unknown | undefined;
                }
            ) & {
              description?: string;
              default?: string | number;
              /**
               * @minItems 1
               */
              values?: [string | number, ...(string | number)[]];
              allowCustom?: boolean;
              allowMultipleValues?: boolean;
              /**
               * @minItems 1
               */
              defaultMultipleValues?: [string | number, ...(string | number)[]];
              [k: string]: unknown | undefined;
            })
          | undefined;
      };
      [k: string]: unknown | undefined;
    };
    nodePool?: string;
    affinityGroup?: string;
    jfrogCliVersion?: (string | number) & ('1' | '2' | 1 | 2);
    runtime?: {
      type: 'image' | 'host';
      [k: string]: unknown | undefined;
    };
    /**
     * @minItems 1
     */
    integrations?: [
      {
        name: string;
      },
      ...{
        name: string;
      }[]
    ];
    /**
     * @minItems 1
     */
    inputResources?: [
      {
        name: string;
        branch?: string;
        trigger?: boolean;
        newVersionOnly?: boolean;
      },
      ...{
        name: string;
        branch?: string;
        trigger?: boolean;
        newVersionOnly?: boolean;
      }[]
    ];
    /**
     * @minItems 1
     */
    outputResources?: [
      {
        name: string;
        branch?: string;
      },
      ...{
        name: string;
        branch?: string;
      }[]
    ];
    chronological?: boolean;
    dependencyMode?: {
      waitOnParentComplete?: boolean;
      waitOnParentSuccess?: boolean;
      waitOnChildComplete?: boolean;
    };
    retentionPolicy?: {
      maxAgeDays?: number;
      minRuns?: number;
    };
    reTriggerOnSyncFailure?: boolean;
  };
  preRun?: {
    configuration?: {
      environmentVariables?: {
        readOnly: {
          [k: string]:
            | string
            | number
            | ((
                | {
                    default: unknown;
                    [k: string]: unknown | undefined;
                  }
                | {
                    defaultMultipleValues: unknown;
                    [k: string]: unknown | undefined;
                  }
              ) & {
                description?: string;
                default?: string | number;
                /**
                 * @minItems 1
                 */
                values?: [string | number, ...(string | number)[]];
                allowCustom?: boolean;
                allowMultipleValues?: boolean;
                /**
                 * @minItems 1
                 */
                defaultMultipleValues?: [string | number, ...(string | number)[]];
                [k: string]: unknown | undefined;
              })
            | undefined;
        };
        [k: string]: unknown | undefined;
      };
      nodePool?: string;
      affinityGroup?: string;
      jfrogCliVersion?: (string | number) & ('1' | '2' | 1 | 2);
      runtime?: {
        type: 'image' | 'host';
        [k: string]: unknown | undefined;
      };
      /**
       * @minItems 1
       */
      integrations?: [
        {
          name: string;
        },
        ...{
          name: string;
        }[]
      ];
      /**
       * @minItems 1
       */
      inputResources?: [
        {
          name: string;
          branch?: string;
          trigger?: boolean;
          newVersionOnly?: boolean;
        },
        ...{
          name: string;
          branch?: string;
          trigger?: boolean;
          newVersionOnly?: boolean;
        }[]
      ];
      /**
       * @minItems 1
       */
      outputResources?: [
        {
          name: string;
          branch?: string;
        },
        ...{
          name: string;
          branch?: string;
        }[]
      ];
      chronological?: boolean;
    };
    execution?: {
      onStart?: Execution;
      onExecute?: Execution;
      onSuccess?: Execution;
      onFailure?: Execution;
      onComplete?: Execution;
      onCancel?: Execution;
    };
  };
  postRun?: {
    configuration?: {
      environmentVariables?: {
        readOnly: {
          [k: string]:
            | string
            | number
            | ((
                | {
                    default: unknown;
                    [k: string]: unknown | undefined;
                  }
                | {
                    defaultMultipleValues: unknown;
                    [k: string]: unknown | undefined;
                  }
              ) & {
                description?: string;
                default?: string | number;
                /**
                 * @minItems 1
                 */
                values?: [string | number, ...(string | number)[]];
                allowCustom?: boolean;
                allowMultipleValues?: boolean;
                /**
                 * @minItems 1
                 */
                defaultMultipleValues?: [string | number, ...(string | number)[]];
                [k: string]: unknown | undefined;
              })
            | undefined;
        };
        [k: string]: unknown | undefined;
      };
      nodePool?: string;
      affinityGroup?: string;
      jfrogCliVersion?: (string | number) & ('1' | '2' | 1 | 2);
      runtime?: {
        type: 'image' | 'host';
        [k: string]: unknown | undefined;
      };
      /**
       * @minItems 1
       */
      integrations?: [
        {
          name: string;
        },
        ...{
          name: string;
        }[]
      ];
      /**
       * @minItems 1
       */
      inputResources?: [
        {
          name: string;
          branch?: string;
          trigger?: boolean;
          newVersionOnly?: boolean;
        },
        ...{
          name: string;
          branch?: string;
          trigger?: boolean;
          newVersionOnly?: boolean;
        }[]
      ];
      /**
       * @minItems 1
       */
      outputResources?: [
        {
          name: string;
          branch?: string;
        },
        ...{
          name: string;
          branch?: string;
        }[]
      ];
      chronological?: boolean;
    };
    execution?: {
      onStart?: Execution;
      onExecute?: Execution;
      onSuccess?: Execution;
      onFailure?: Execution;
      onComplete?: Execution;
      onCancel?: string | Task;
    };
  };
  /**
   * @minItems 1
   */
  steps: [Step, ...Step[]];
}
export interface Task {
  task: string;
  repository?: string;
  id?: string;
  condition?: string;
  input?: {
    [k: string]: unknown | undefined;
  };
  rtIntegration?: string;
}
export interface Step1 {
  name?: string;
  type?:
    | 'Bash'
    | 'CreateReleaseBundle'
    | 'DistributeReleaseBundle'
    | 'DockerBuild'
    | 'DockerPush'
    | 'GoBuild'
    | 'GoPublishBinary'
    | 'GoPublishModule'
    | 'GradleBuild'
    | 'HelmBlueGreenCleanup'
    | 'HelmBlueGreenDeploy'
    | 'HelmBlueGreenRoleSwitch'
    | 'HelmDeploy'
    | 'HelmPublish'
    | 'Jenkins'
    | 'Matrix'
    | 'MvnBuild'
    | 'NpmBuild'
    | 'NpmPublish'
    | 'PostMatrix'
    | 'PowerShell'
    | 'PreMatrix'
    | 'PromoteBuild'
    | 'PublishBuildInfo'
    | 'PushArtifactoryPackage'
    | 'SignReleaseBundle'
    | 'TriggerPipeline'
    | 'XrayScan';
  [k: string]: unknown | undefined;
}
