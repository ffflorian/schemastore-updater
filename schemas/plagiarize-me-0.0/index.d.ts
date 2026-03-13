/* eslint-disable */

/**
 * plagiarize-me.yaml configuration schema
 */
export interface PlagiarizeMeConfiguration {
  /**
   * Git repo of where this plagiarizable project is hosted
   */
  repo?: {
    /**
     * The git repo url of this project
     */
    url: string;
    /**
     * The default branch that downstream projects should checkout when plagiarizing this project
     */
    checkout?: string;
  };
  /**
   * Files to move in target project from their previous locations
   */
  move?: {
    /**
     * Directories to move from the target repo to the target repo. Useful for refactoring project structures
     */
    directories?: MoveItems[];
    /**
     * Files to move from the target repo to the target repo. Useful for refactoring
     */
    files?: MoveItems[];
    [k: string]: unknown | undefined;
  };
  /**
   * Shell commands to run after plagiarize files are done being copied and updated
   */
  run?: {
    /**
     * The shell command to run
     */
    command: string;
    /**
     * Whether or not to run this command synchronously or in parallel to other commands where `parallel: true`
     */
    parallel?: boolean;
    when?:
      | 'always'
      | {
          /**
           * Condition type
           */
          type: 'if-missing';
          options: {
            path: string;
            [k: string]: unknown | undefined;
          };
        }
      | {
          /**
           * Condition type
           */
          type: 'always';
        };
    [k: string]: unknown | undefined;
  }[];
  /**
   * Configuration for strings, files, and file paths to replace in target file
   */
  replace: {
    /**
     * Strings to find in target project and be replaced with plagiarized project's values
     */
    strings: {
      project: string;
      [k: string]: (string | number | boolean) | undefined;
    };
    /**
     * Variables available to be used for finding and replacing by variable name. For example `$var_name: hello` would replace string '$var_name' with 'hello' in target project
     */
    vars?: {
      [k: string]: (string | number | boolean) | undefined;
    };
    /**
     * Relative path to target files that will be completely overwritten by source files in the same path
     */
    files?: string[];
    [k: string]: unknown | undefined;
  };
  create?: {
    /**
     * Files to copy from plagiarized project if they do not exist in the target project
     */
    files?: string[];
    /**
     * Files to remove commented sections from. Eg code between `// plagiarize:start:always:delete` and `// plagiarize:end:always:delete`
     */
    andClean?: string[];
    [k: string]: unknown | undefined;
  };
  merge?: (MergeJson | MergeYaml | MergeGit | MergeEnv)[];
  /**
   * Files that are used the have similarities between instances of that that. .env files for example are similar and could be templated
   */
  templates?: {
    /**
     * The name of the template
     */
    name: string;
    replace: {
      /**
       * Values to be used as variables within the target project. So `var_name: hello` in the template configuration and `var_name: world` would replace instances of 'hello' found in the source file with with 'world' found in the target file
       */
      strings: {
        [k: string]: (string | boolean | number) | undefined;
      };
      /**
       * Values to be used as variables within the target project. So `var_name: hello` would replace instances of '$var_name' with 'hello' in the target file
       */
      values?: {
        [k: string]: (string | boolean | number | null) | undefined;
      };
      /**
       * Values to be used as variables within the plagiarize-me.yaml file only. So `var_name: hello` would replace '$var_name' with 'hello' in plagiarize-me.yaml
       */
      vars?: {
        [k: string]: (string | boolean | number | null) | undefined;
      };
    };
    merge?: (MergeJson | MergeYaml | MergeGit | MergeEnv)[];
    create?: {
      files?: string[];
    };
    configs?: {
      strings?: {
        [k: string]: (string | boolean | number) | undefined;
      };
      vars?: {
        [k: string]: (string | boolean | number | null) | undefined;
      };
    }[];
  }[];
  push?: {
    /**
     * Values to set when iterating through each instance
     */
    values?: {
      [k: string]: string | undefined;
    };
    instances?: {
      [k: string]: string | undefined;
    }[];
    git?: {
      repos: {
        local?: string;
        remote: {
          url: string;
          checkout: string;
          defaultName: string;
        };
      }[];
      commit: {
        create?: boolean;
        message: string;
      };
      branch: string;
      push?: boolean;
      /**
       * A list of removes to push to (if `push: true`)
       */
      remotes: string[];
      hooks?: {
        'post-push'?: {
          type: 'create-merge-request';
          api: 'gitlab';
          envVars?: {
            [k: string]: string | undefined;
          };
          remote: string;
          targetBranch: string;
          removeSourceBranch?: boolean;
          [k: string]: unknown | undefined;
        }[];
      };
    };
  }[];
}
export interface MoveItems {
  /**
   * The path to move the directory to
   */
  to: string;
  names: string[];
  [k: string]: unknown | undefined;
}
/**
 * Merge json file with jq command line tool pattern matching
 */
export interface MergeJson {
  /**
   * Merge type
   */
  type: 'jq';
  /**
   * Path to file to merge
   */
  path: string;
  /**
   * JQ pattern of property to replace
   */
  replace?: string[];
  /**
   * JQ pattern of property to create if the property does not exist in target project file
   */
  create?: string[];
  /**
   * A set of properties to replace if the condition evaluates to truthy
   */
  replaceIf?: {
    /**
     * The condition to evaluate for truthiness. If truthy will replace property matched by pattern
     */
    condition: string;
    /**
     * JQ pattern of property to replace
     */
    pattern: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Set the value of these items to the value. So `'.license':MIT` would set the `license` property of the json file to 'MIT'
   */
  set?: {
    [k: string]: string | undefined;
  };
  /**
   * A list of items to not create, copy, replace, or remove in target file
   */
  skip?: string[];
  skipIfNotSameFileName?: string[];
}
/**
 * Merge yaml file with yq command line tool pattern matching
 */
export interface MergeYaml {
  /**
   * Merge type
   */
  type: 'yq';
  /**
   * Path to file to merge
   */
  path: string;
  /**
   * YQ pattern of property to replace
   */
  replace?: string[];
  /**
   * YQ pattern of property to create if the property does not exist in target project file
   */
  create?: string[];
  /**
   * A set of properties to replace if the condition evaluates to truthy
   */
  replaceIf?: {
    /**
     * The condition to evaluate for truthiness. If truthy will replace property matched by pattern
     */
    condition: string;
    /**
     * YQ pattern of property to replace
     */
    pattern: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Set the value of these items to the value. So `'license':MIT` would set the `license` property of the yaml file to 'MIT'
   */
  set?: {
    [k: string]: string | undefined;
  };
  /**
   * A list of items to not create, copy, replace, or remove in target file
   */
  skip?: string[];
  skipIfNotSameFileName?: string[];
}
/**
 * Merge file using git merge (use with varied reliability)
 */
export interface MergeGit {
  /**
   * Merge type
   */
  type: 'git';
  /**
   * Path to file to merge
   */
  path: string;
}
export interface MergeEnv {
  type: 'env';
  path: string;
  set?: {
    [k: string]: string | undefined;
  };
  skip?: string[];
  /**
   * List of Environment variable names to create in target project if they are not already created
   */
  create?: string[];
  skipIfNotSameFileName?: string[];
}
