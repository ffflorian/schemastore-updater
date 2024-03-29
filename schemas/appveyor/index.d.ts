/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type JSONSchemaForAppVeyorCIConfigurationFiles = Job;
/**
 * Build worker image (VM template) -DEV_VERSION
 */
export type Image = ImageName[] | ImageName;
export type ImageName =
  | "macOS"
  | "macOS-Mojave"
  | "Previous macOS"
  | "Previous macOS-Mojave"
  | "Ubuntu"
  | "Ubuntu1604"
  | "Ubuntu1804"
  | "Ubuntu2004"
  | "Previous Ubuntu"
  | "Previous Ubuntu1604"
  | "Previous Ubuntu1804"
  | "Previous Ubuntu2004"
  | "Visual Studio 2013"
  | "Visual Studio 2015"
  | "Visual Studio 2017"
  | "Visual Studio 2019"
  | "Visual Studio 2022"
  | "Visual Studio 2017 Preview"
  | "Visual Studio 2019 Preview"
  | "Previous Visual Studio 2013"
  | "Previous Visual Studio 2015"
  | "Previous Visual Studio 2017"
  | "zhaw18"
  | "WMF 5";
export type Command =
  | string
  | {
      /**
       * Run a PowerShell command
       */
      ps?: string;
    }
  | {
      /**
       * Run a PowerShell Core command
       */
      pwsh?: string;
    }
  | {
      cmd?: string;
    }
  | {
      sh?: string;
    };
export type PossiblySecretString =
  | (
      | string
      | number
      | {
          /**
           * This should have been encrypted by the same user account to which the project belongs
           */
          secure?: string;
        }
    )
  | undefined;
export type JobScalars = JobScalars1 & {
  image?: Image;
  /**
   * Build platform, i.e. x86, x64, Any CPU. This setting is optional
   */
  platform?: Platform | Platform[];
  /**
   * Build Configuration, i.e. Debug, Release, etc.
   */
  configuration?: Configuration | Configuration[];
  [k: string]: unknown | undefined;
};
export type JobScalars1 = {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
};
export type Platform = "x86" | "x64" | "ARM" | "ARM64" | "Win32" | "Any CPU";
export type Configuration = string;

export interface Job {
  /**
   * Version format
   */
  version?: string;
  /**
   * Branches to build
   */
  branches?: {
    /**
     * Whitelist
     */
    only?: string[];
    /**
     * Blacklist
     */
    except?: string[];
  };
  /**
   * Do not build on tags (GitHub and BitBucket)
   */
  skip_tags?: boolean;
  /**
   * Start builds on tags only (GitHub and BitBucket)
   */
  skip_non_tags?: boolean;
  skip_commits?: CommitFilter;
  only_commits?: CommitFilter1;
  /**
   * Do not build feature branch with open Pull Requests
   */
  skip_branch_with_pr?: boolean;
  /**
   * Maximum number of concurrent jobs for the project
   */
  max_jobs?: number;
  notifications?: {
    [k: string]: unknown | undefined;
  }[];
  image?: Image;
  /**
   * Scripts that are called at very beginning, before repo cloning
   */
  init?: Command[];
  /**
   * Clone directory
   */
  clone_folder?: string;
  /**
   * Fetch repository as zip archive
   */
  shallow_clone?: boolean;
  /**
   * Set git clone depth
   */
  clone_depth?: number;
  /**
   * Setting up etc\hosts file
   */
  hosts?: {
    [k: string]:
      | (
          | {
              [k: string]: unknown | undefined;
            }
          | (undefined & string)
          | undefined
        )
      | undefined;
  };
  /**
   * Environment variables
   */
  environment?:
    | {
        global?: EnvVarHash;
        /**
         * an array of environment variables, each member of which is one dimension in the build matrix calculation
         */
        matrix?: EnvVarHash1[];
        [k: string]: unknown | undefined;
      }
    | EnvVarHash1;
  matrix?: {
    /**
     * Set this flag to immediately finish build once one of the jobs fails
     */
    fast_finish?: boolean;
    /**
     * This is how to allow failing jobs in the matrix
     */
    allow_failures?: JobScalars[];
    /**
     * Exclude configuration from the matrix. Works similarly to 'allow_failures' but build not even being started for excluded combination.
     */
    exclude?: Job[];
  };
  /**
   * Build cache to preserve files/folders between builds
   */
  cache?: string[];
  /**
   * Enable service required for build/tests
   */
  services?: (
    | "docker"
    | "iis"
    | "mongodb"
    | "msmq"
    | "mssql2008r2sp2"
    | "mssql2008r2sp2rs"
    | "mssql2012sp1"
    | "mssql2012sp1rs"
    | "mssql2014"
    | "mssql2014rs"
    | "mysql"
    | "postgresql"
    | "postgresql93"
    | "postgresql94"
    | "postgresql95"
    | "postgresql96"
    | "postgresql10"
  )[];
  /**
   * Scripts that run after cloning repository
   */
  install?: Command[];
  /**
   * Enable patching of AssemblyInfo.* files
   */
  assembly_info?: {
    patch?: boolean;
    file?: string;
    assembly_version?: string;
    assembly_file_version?: string;
    assembly_informational_version?: string;
  };
  /**
   * Automatically register private account and/or project AppVeyor NuGet feeds
   */
  nuget?: {
    account_feed?: boolean;
    project_feed?: boolean;
    /**
     * Disable publishing of .nupkg artifacts to account/project feeds for pull request builds
     */
    disable_publish_on_pr?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Build platform, i.e. x86, x64, Any CPU. This setting is optional
   */
  platform?: Platform | Platform[];
  /**
   * Build Configuration, i.e. Debug, Release, etc.
   */
  configuration?: Configuration | Configuration[];
  build?:
    | false
    | {
        /**
         * Enable MSBuild parallel builds
         */
        parallel?: boolean;
        /**
         * Path to Visual Studio solution or project
         */
        project?: string;
        /**
         * Package Web Application Projects (WAP) for Web Deploy
         */
        publish_wap?: boolean;
        /**
         * Package Web Application Projects (WAP) for XCopy deployment
         */
        publish_wap_xcopy?: boolean;
        /**
         * Package Azure Cloud Service projects and push to artifacts
         */
        publish_azure?: boolean;
        /**
         * Package projects with .nuspec files and push to artifacts
         */
        publish_nuget?: boolean;
        /**
         * Generate and publish NuGet symbol packages
         */
        publish_nuget_symbols?: boolean;
        /**
         * Add -IncludeReferencedProjects option while packaging NuGet artifacts
         */
        include_nuget_references?: boolean;
        /**
         * MSBuild verbosity level
         */
        verbosity?: "quiet" | "minimal" | "normal" | "detailed";
      };
  /**
   * Scripts to run before build
   */
  before_build?: Command[];
  /**
   * Scripts to run *after* solution is built and *before* automatic packaging occurs (web apps, NuGet packages, Azure Cloud Services)
   */
  before_package?: Command[];
  /**
   * Scripts to run after build
   */
  after_build?: Command[];
  /**
   * To run your custom scripts instead of automatic MSBuild
   */
  build_script?: Command[];
  /**
   * Scripts to run before tests
   */
  before_test?: Command[];
  test?:
    | false
    | {
        assemblies?: {
          only?: string[];
          except?: string[];
        };
        categories?:
          | {
              only?: string[];
              except?: string[];
            }
          | (string | string[])[];
      };
  /**
   * To run your custom scripts instead of automatic tests
   */
  test_script?: Command[];
  /**
   * Scripts to run after tests
   */
  after_test?: Command[];
  artifacts?: {
    path: string;
    name?: string;
  }[];
  /**
   * Scripts to run before deployment
   */
  before_deploy?: Command[];
  deploy?:
    | "off"
    | {
        [k: string]: unknown | undefined;
      }[];
  /**
   * To run your custom scripts instead of provider deployments
   */
  deploy_script?: Command[];
  /**
   * Scripts to run after deployment
   */
  after_deploy?: Command[];
  /**
   * On successful build
   */
  on_success?: Command[];
  /**
   * On build failure
   */
  on_failure?: Command[];
  /**
   * After build failure or success
   */
  on_finish?: Command[];
  [k: string]: unknown | undefined;
}
/**
 * Skipping commits with particular message or from specific user
 */
export interface CommitFilter {
  /**
   * Regex for matching commit message
   */
  message?: string;
  /**
   * Commit author's username, name, email or regexp matching one of these.
   */
  author?: string;
  /**
   * Only specific files (glob patterns)
   */
  files?: string[];
}
/**
 * Including commits with particular message or from specific user
 */
export interface CommitFilter1 {
  /**
   * Regex for matching commit message
   */
  message?: string;
  /**
   * Commit author's username, name, email or regexp matching one of these.
   */
  author?: string;
  /**
   * Only specific files (glob patterns)
   */
  files?: string[];
}
/**
 * variables defined here are no different than those defined at top level of 'environment' node
 */
export interface EnvVarHash {
  [k: string]: PossiblySecretString | undefined;
}
export interface EnvVarHash1 {
  [k: string]: PossiblySecretString | undefined;
}
