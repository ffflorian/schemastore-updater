/* eslint-disable */

/**
 * Identifies which Bamboo server the spec applies to. Can be a regular expression pattern.
 */
export type ServerName = string;
/**
 * These permissions apply to all environments defined in this deployment project
 */
export type DefaultEnvironmentPermissions = Permission[];
export type Deployment = string | DeploymentProjects;
/**
 * These permissions apply to the deployment project
 */
export type DeploymentPermissions = Permission[];
/**
 * Builds and deployments are normally run on the Bamboo agent's native operating system
 */
export type Docker =
  | string
  | {
      image: string;
      volumes?: {
        [k: string]: unknown | undefined;
      };
      'use-default-volumes'?: boolean;
      'docker-run-arguments'?: string[];
      [k: string]: unknown | undefined;
    };
/**
 * Permissions specific to an environment
 */
export type EnvironmentPermissions = {
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "[a-zA-Z0-9\s+_-]".
   */
  [k: string]: Permission[];
}[];
export type Events =
  | 'plan-failed'
  | 'plan-completed'
  | 'plan-status-changed'
  | 'plan-comment-added'
  | 'plan-responsibility-changed'
  | 'job-completed'
  | 'job-status-changed'
  | 'job-failed'
  | 'job-error'
  | 'job-first-failed'
  | 'job-hung'
  | 'job-queue-timeout'
  | 'job-queued-without-capable-agents';
export type PlanPermissions = Permission[];
export type Triggers = (Polling | Cron | Remote | Tag | string)[];
/**
 * Branch management configuration for the plan.
 */
export type Branches =
  | string
  | {
      /**
       * Branch creation strategy.
       */
      create?: string;
      delete?:
        | string
        | {
            'after-deleted-days'?: number;
            'after-inactive-days'?: number;
            'after-issue-status-changed'?: boolean;
            'after-successful-builds'?: number;
            [k: string]: unknown | undefined;
          };
      integration?:
        | string
        | {
            'merge-from'?: string;
            'push-on-success'?: boolean;
            enabled?: boolean;
            [k: string]: unknown | undefined;
          };
      'link-to-jira'?: boolean;
      notifications?: unknown[];
      [k: string]: unknown | undefined;
    };
/**
 * Plan dependencies configuration.
 */
export type Dependencies =
  | string
  | {
      'enabled-for-branches'?: boolean;
      'require-all-stages-passing'?: boolean;
      'block-strategy'?: string;
      plans?: string[];
      dependencies?: unknown[];
      [k: string]: unknown | undefined;
    };
/**
 * A task entry. Either a predefined task string, or an object with a single task type key.
 */
export type TaskItem =
  | PredefinedTask
  | {
      script?: Task;
      maven?: Maven;
      'inject-variables'?:
        | string
        | {
            file?: string;
            scope?: string;
            namespace?: string;
            /**
             * UNDOCUMENTED. Task execution conditions.
             */
            conditions?: {
              [k: string]: unknown | undefined;
            }[];
          };
      'any-task'?: AnyTask;
      'vcs-branch'?: VCSBranch;
      'vcs-tag'?: VCSTag;
      'vcs-commit'?: VCSCommit;
      /**
       * The Test Results Parser task in Bamboo parses test data
       */
      'test-parser'?:
        | TestParser
        | {
            type: TestParser;
            'ignore-time'?: boolean;
            'test-results'?: string[];
            [k: string]: unknown | undefined;
          };
      checkout?: Checkout;
      clean?: {
        [k: string]: unknown | undefined;
      };
      /**
       * UNDOCUMENTED. Other task types supported by Bamboo Specs.
       */
      [k: string]:
        | (
            | string
            | {
                [k: string]: unknown | undefined;
              }
            | unknown[]
            | number
            | boolean
            | null
          )
        | undefined;
    }
  | Script
  | Task;
export type PredefinedTask = 'inject-variables' | 'clean' | 'checkout' | 'artifact-download';
export type TestParser = 'junit' | 'mstest' | 'nunit' | 'mocha' | 'testng';
export type Script =
  | string
  | {
      script?: string;
      [k: string]: unknown | undefined;
    };

/**
 * Full spec reference: https://docs.atlassian.com/bamboo-specs-docs/12.1.2/specs.html
 */
export interface BambooCISpecification {
  'server-name'?: ServerName;
  'default-environment-permissions'?: DefaultEnvironmentPermissions;
  deployment?: Deployment;
  'deployment-permissions'?: DeploymentPermissions;
  docker?: Docker;
  'environment-permissions'?: EnvironmentPermissions;
  /**
   * An environment represents the servers or groups of servers where the software release has been deployed to, and the tasks that are needed for the deployment to work smoothly
   */
  environments?: string[];
  labels?: string[];
  notifications?: {
    recipients?: (
      | string
      | {
          users?: string[];
          emails?: string[];
          [k: string]: unknown | undefined;
        }
    )[];
    events?: (
      | Events
      | {
          [k: string]: unknown | undefined;
        }
    )[];
    [k: string]: unknown | undefined;
  }[];
  plan?: Plan;
  'plan-permissions'?: PlanPermissions;
  /**
   * You can define how releases should be named when they are created by Bamboo
   */
  'release-naming'?: ReleaseNaming | string;
  repositories?: (
    | string
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "[a-zA-Z0-9_]".
         */
        [k: string]: {
          scope?: 'project' | 'global';
          type?: string;
          slug?: string;
          url?: string;
          branch?: string;
          viewer?: string;
          'ssh-key'?: string;
          'ssh-key-passphrase'?: string;
          username?: string;
          password?: string;
          'shared-credentials'?:
            | string
            | {
                name?: string;
                scope?: 'project' | 'global';
                [k: string]: unknown | undefined;
              };
          lfs?: boolean;
          'use-shallow-clones'?: boolean;
          submodules?: boolean;
          'change-detection'?: {
            'quiet-period'?: {
              'quiet-period-seconds'?: number;
              'max-retries'?: number;
              [k: string]: unknown | undefined;
            };
            'exclude-changeset-pattern'?: string;
            'file-filter-type'?: string;
            'file-filter-pattern'?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
      }
  )[];
  /**
   * Stages group jobs to individual steps within a plan's build process.
   */
  stages?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "[a-zA-Z0-9\s+_-]".
     */
    [k: string]: string[] | Stage;
  }[];
  triggers?: Triggers;
  variables?: KeyValue;
  version?: number;
  /**
   * Overrides for specific branches in the plan
   */
  'branch-overrides'?: {
    [k: string]: BambooCISpecification;
  }[];
  other?: {
    [k: string]: unknown | undefined;
  };
  branches?: Branches;
  dependencies?: Dependencies;
  [k: string]: Job | undefined;
}
/**
 * Plan permissions allow a user to control access to the functions of the build plan.
 */
export interface Permission {
  groups?: string | string[];
  permissions?:
    | ('view' | 'edit' | 'build' | 'admin' | 'clone' | 'deploy')[]
    | ('view' | 'edit' | 'build' | 'admin' | 'clone' | 'deploy');
  roles?: string[];
  users?: string[];
  [k: string]: unknown | undefined;
}
/**
 * A deployment project in Bamboo is a container for holding the software project you are deploying: releases that have been built and tested, and the environments to which releases are deployed
 */
export interface DeploymentProjects {
  name?: string;
  'source-plan'?: string;
  [k: string]: unknown | undefined;
}
/**
 * A plan defines everything about your continuous integration build process in Bamboo.
 */
export interface Plan {
  'project-key'?: string;
  key?: string;
  name?: string;
  [k: string]: unknown | undefined;
}
export interface ReleaseNaming {
  'next-version-name'?: string;
  'applies-to-branches'?: boolean;
  'auto-increment'?: boolean;
  'auto-increment-variables'?: string | string[];
  [k: string]: unknown | undefined;
}
/**
 * Stages group jobs to individual steps within a plan's build process.
 */
export interface Stage {
  /**
   * Will await for execution by user
   */
  manual?: boolean;
  /**
   * Will be executed regardless of other stages state (pass or fail)
   */
  final?: boolean;
  jobs?: string[];
}
export interface Polling {
  polling?:
    | number
    | {
        period?: number;
        /**
         * Cron expression for polling trigger.
         */
        cron?: string;
        /**
         * Repositories to poll.
         */
        repositories?: string[];
        /**
         * Trigger description.
         */
        description?: string;
        conditions?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "[a-zA-Z0-9\s+_-]+".
           */
          [k: string]:
            | string[]
            | {
                [k: string]: boolean | undefined;
              };
        }[];
      };
}
/**
 * Execute deployment by schedule.
 */
export interface Cron {
  cron?:
    | string
    | {
        expression?: string;
        [k: string]: unknown | undefined;
      };
}
export interface Remote {
  remote?:
    | string
    | {
        ip?: string;
        [k: string]: unknown | undefined;
      };
}
export interface Tag {
  /**
   * UNDOCUMENTED. Bamboo detects new tags in repository and builds for all these tags
   */
  tag?: {
    /**
     * Use a regular expression to only build for tag that match specific names.
     */
    filter?: string;
    /**
     * Only run build if the branch contains the matched tag. The build will be triggered only if the tag revision is in the vcs branch.
     */
    tagInBranch?: boolean;
    /**
     * Trigger description.
     */
    description?: string;
    /**
     * Only run Build if other Plans are currently passing.
     */
    conditions?: {
      'green-plan'?: string[];
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Variables can be used to make values available when building plans in Bamboo.
 */
export interface KeyValue {
  /**
   * This interface was referenced by `KeyValue`'s JSON-Schema definition
   * via the `patternProperty` "[a-zA-Z0-9_]".
   */
  [k: string]: string | number | boolean;
}
/**
 * A job is a single build unit within a plan and is made up of one or more tasks.
 */
export interface Job {
  docker?: Docker;
  'final-tasks'?: TaskItem[];
  key?: string;
  other?: {
    'clean-working-dir'?: boolean;
    [k: string]: unknown | undefined;
  };
  requirements?: (
    | string
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".".
         */
        [k: string]: string;
      }
  )[];
  tasks?: TaskItem[];
  artifacts?: Artifact[];
  'artifact-subscriptions'?: ArtifactSubscription[];
  [k: string]: unknown | undefined;
}
/**
 * A task is a small unit of work, such as source code checkout, or running a script
 */
export interface Task {
  interpreter?: string;
  clean?: {
    [k: string]: unknown | undefined;
  };
  checkout?: Checkout;
  'inject-variables'?:
    | string
    | {
        file?: string;
        scope?: string;
        namespace?: string;
        /**
         * Task execution conditions.
         */
        conditions?: {
          [k: string]: unknown | undefined;
        }[];
      };
  /**
   * The Test Results Parser task in Bamboo parses test data
   */
  'test-parser'?:
    | TestParser
    | {
        type: TestParser;
        'ignore-time'?: boolean;
        'test-results'?: string[];
        [k: string]: unknown | undefined;
      };
  /**
   * @minItems 1
   */
  scripts?: [Script, ...Script[]];
  [k: string]: unknown | undefined;
}
export interface Checkout {
  repository?: string;
  path?: string;
  'force-clean-build'?: boolean & string;
  [k: string]: unknown | undefined;
}
export interface Maven {
  executable?: string;
  jdk?: string;
  goal?: string;
  tests?: string;
  environment?: string;
  'working-dir'?: string;
  'project-file'?: string;
  'use-return-code'?: boolean;
  description?: string;
  [k: string]: unknown | undefined;
}
/**
 * Run a task provided by a plugin.
 */
export interface AnyTask {
  'plugin-key': string;
  configuration?: {
    [k: string]: unknown | undefined;
  };
  description?: string;
  [k: string]: unknown | undefined;
}
export interface VCSBranch {
  branch?: string;
  description?: string;
  [k: string]: unknown | undefined;
}
export interface VCSTag {
  tag?: string;
  description?: string;
  [k: string]: unknown | undefined;
}
export interface VCSCommit {
  message?: string;
  description?: string;
  [k: string]: unknown | undefined;
}
/**
 * Artifacts are files created by a job build (e.g. JAR files)
 */
export interface Artifact {
  /**
   * The relative path to find your artifact; it's a path relative to the workspace directory; do not use absolute paths.
   */
  location?: string;
  /**
   * Name of the artifact; in case artifact is shared, name must be unique within the plan.
   */
  name?: string;
  /**
   * Name or Ant pattern of file(s) to keep.
   */
  pattern?: string;
  required?: boolean;
  /**
   * You can share an artifact among other jobs or plans.
   */
  shared?: boolean;
  [k: string]: unknown | undefined;
}
export interface ArtifactSubscription {
  /**
   * Artifact name to download.
   */
  artifact: string;
  /**
   * Destination directory in workspace.
   */
  destination?: string;
  required?: boolean;
  [k: string]: unknown | undefined;
}
