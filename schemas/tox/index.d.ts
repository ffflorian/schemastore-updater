/* eslint-disable */

export type Subs =
  | string
  | {
      replace: string;
      name?: string;
      default?: string | Subs[];
      extend?: boolean;
    }
  | {
      replace: string;
      of: string[];
      default?: string | Subs[];
      extend?: boolean;
    };
/**
 * Deprecated: use 'env_list' instead
 */
export type EnvList = (
  | Subs
  | {
      /**
       * factor groups for cartesian product expansion
       */
      product: (
        | string[]
        | {
            prefix: string;
            start?: number;
            stop?: number;
          }
        | {
            [k: string]: string[] | undefined;
          }
      )[];
      /**
       * environment names to exclude from product
       */
      exclude?: string[];
    }
)[];
/**
 * Deprecated: use 'pass_env' instead
 */
export type PassEnv = Subs[];

/**
 * tox configuration file (tox.toml or [tool.tox] in pyproject.toml)
 */
export interface ToxConfiguration {
  /**
   * the root directory (where the configuration file is found)
   */
  tox_root?: string;
  /**
   * @deprecated
   * Deprecated: use 'tox_root' instead
   */
  toxinidir?: string;
  /**
   * working directory
   */
  work_dir?: string;
  /**
   * @deprecated
   * Deprecated: use 'work_dir' instead
   */
  toxworkdir?: string;
  /**
   * a folder for temporary files (is not cleaned at start)
   */
  temp_dir?: string;
  /**
   * define environments to automatically run
   */
  env_list?: (
    | Subs
    | {
        /**
         * factor groups for cartesian product expansion
         */
        product: (
          | string[]
          | {
              prefix: string;
              start?: number;
              stop?: number;
            }
          | {
              [k: string]: string[] | undefined;
            }
        )[];
        /**
         * environment names to exclude from product
         */
        exclude?: string[];
      }
  )[];
  envlist?: EnvList;
  /**
   * inherit missing keys from these sections
   */
  base?: Subs[];
  /**
   * Define the minimal tox version required to run
   */
  min_version?: string;
  /**
   * @deprecated
   * Deprecated: use 'min_version' instead
   */
  minversion?: string;
  /**
   * Name of the virtual environment used to provision a tox.
   */
  provision_tox_env?: string;
  /**
   * Name of the virtual environment used to provision a tox.
   */
  requires?: Subs[];
  /**
   * core labels
   */
  labels?: {
    [k: string]:
      | (
          | Subs
          | {
              /**
               * factor groups for cartesian product expansion
               */
              product: (
                | string[]
                | {
                    prefix: string;
                    start?: number;
                    stop?: number;
                  }
                | {
                    [k: string]: string[] | undefined;
                  }
              )[];
              /**
               * environment names to exclude from product
               */
              exclude?: string[];
            }
        )[]
      | undefined;
  };
  /**
   * do not raise error if the environment name conflicts with base python
   */
  ignore_base_python_conflict?: boolean;
  /**
   * @deprecated
   * Deprecated: use 'ignore_base_python_conflict' instead
   */
  ignore_basepython_conflict?: boolean;
  /**
   * skip running missing interpreters
   */
  skip_missing_interpreters?: boolean;
  /**
   * is there any packaging involved in this project
   */
  no_package?: boolean;
  /**
   * @deprecated
   * Deprecated: use 'no_package' instead
   */
  skipsdist?: boolean;
  /**
   * tox environment used to package
   */
  package_env?: string;
  /**
   * @deprecated
   * Deprecated: use 'package_env' instead
   */
  isolated_build_env?: string;
  /**
   * indicates where the packaging root file exists (historically setup.py file or pyproject.toml now)
   */
  package_root?: string;
  /**
   * @deprecated
   * Deprecated: use 'package_root' instead
   */
  setupdir?: string;
  env_run_base?: EnvRunBase;
  env_pkg_base?: EnvRunBase1;
  /**
   * per-environment overrides (keyed by environment name)
   */
  env?: {
    [k: string]: EnvRunBase;
  };
  /**
   * tox configuration in INI format embedded in a TOML file
   */
  legacy_tox_ini?: string;
  [k: string]: unknown | undefined;
}
/**
 * base configuration for run environments
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.*$".
 */
export interface EnvRunBase {
  /**
   * environment variables to set when running commands in the tox environment
   */
  set_env?: {
    [k: string]: Subs;
  };
  setenv?: SetEnv;
  /**
   * inherit missing keys from these sections
   */
  base?: Subs[];
  /**
   * the tox execute used to evaluate this environment
   */
  runner?: string;
  /**
   * description attached to the tox environment
   */
  description?: string;
  /**
   * tox environments that this environment depends on (must be run after those)
   */
  depends?: (
    | Subs
    | {
        /**
         * factor groups for cartesian product expansion
         */
        product: (
          | string[]
          | {
              prefix: string;
              start?: number;
              stop?: number;
            }
          | {
              [k: string]: string[] | undefined;
            }
        )[];
        /**
         * environment names to exclude from product
         */
        exclude?: string[];
      }
  )[];
  /**
   * labels attached to the tox environment
   */
  labels?: Subs[];
  /**
   * directory assigned to the tox environment
   */
  env_dir?: string;
  /**
   * @deprecated
   * Deprecated: use 'env_dir' instead
   */
  envdir?: string;
  /**
   * a folder that is always reset at the start of the run
   */
  env_tmp_dir?: string;
  /**
   * @deprecated
   * Deprecated: use 'env_tmp_dir' instead
   */
  envtmpdir?: string;
  /**
   * a folder for logging where tox will put logs of tool invocation
   */
  env_log_dir?: string;
  /**
   * @deprecated
   * Deprecated: use 'env_log_dir' instead
   */
  envlogdir?: string;
  /**
   * timeout to allow process to exit before sending SIGINT
   */
  suicide_timeout?: number;
  /**
   * timeout before sending SIGTERM after SIGINT
   */
  interrupt_timeout?: number;
  /**
   * timeout before sending SIGKILL after SIGTERM
   */
  terminate_timeout?: number;
  /**
   * run on platforms that match this regular expression (empty means any platform)
   */
  platform?: string;
  /**
   * environment variables to pass on to the tox environment
   */
  pass_env?: Subs[];
  passenv?: PassEnv;
  /**
   * environment variable patterns to exclude after pass_env glob expansion
   */
  disallow_pass_env?: Subs[];
  /**
   * if set to True the content of the output will always be shown  when running in parallel mode
   */
  parallel_show_output?: boolean;
  /**
   * always recreate virtual environment if this option is true, otherwise leave it up to tox
   */
  recreate?: boolean;
  /**
   * external command glob to allow calling
   */
  allowlist_externals?: Subs[];
  /**
   * command used to list installed packages
   */
  list_dependencies_command?: Subs[];
  /**
   * install the latest available pre-release (alpha/beta/rc) of dependencies without a specified version
   */
  pip_pre?: boolean;
  /**
   * command used to install packages
   */
  install_command?: Subs[];
  /**
   * constraints to apply to installed python dependencies
   */
  constraints?: string;
  /**
   * If true, apply constraints during install_package_deps.
   */
  constrain_package_deps?: boolean;
  /**
   * Use the exact versions of installed deps as constraints, otherwise use the listed deps.
   */
  use_frozen_constraints?: boolean;
  /**
   * the commands to be called before testing
   */
  commands_pre?: Subs[][];
  /**
   * the commands to be called for testing
   */
  commands?: Subs[][];
  /**
   * the commands to be called after testing
   */
  commands_post?: Subs[][];
  /**
   * commands to run before the environment is removed during recreation (e.g. cache cleanup)
   */
  recreate_commands?: Subs[][];
  /**
   * change to this working directory when executing the test command
   */
  change_dir?: string;
  /**
   * @deprecated
   * Deprecated: use 'change_dir' instead
   */
  changedir?: string;
  /**
   * if True rewrite relative posargs paths from cwd to change_dir
   */
  args_are_paths?: boolean;
  /**
   * when executing the commands keep going even if a sub-command exits with non-zero exit code
   */
  ignore_errors?: boolean;
  /**
   * number of times to retry a failed command (0 means no retries)
   */
  commands_retry?: number;
  /**
   * if set to true a failing result of this testenv will not make tox fail (instead just warn)
   */
  ignore_outcome?: boolean;
  /**
   * if set to true, tox will stop executing remaining environments when this environment fails
   */
  fail_fast?: boolean;
  /**
   * fallback python interpreter used when no factor or explicit base_python is defined
   */
  default_base_python?: Subs[] | string;
  /**
   * environment identifier for python, first one found wins
   */
  base_python?: Subs[] | string;
  /**
   * @deprecated
   * Deprecated: use 'base_python' instead
   */
  basepython?: Subs[] | string;
  /**
   * python dependencies with optional version specifiers, as specified by PEP-440
   */
  deps?: string;
  /**
   * dependency groups to install of the target package
   */
  dependency_groups?: Subs[];
  /**
   * extras to install of the target package
   */
  extras?: Subs[];
  /**
   * PEP 751 pylock.toml lock file path to install locked dependencies from
   */
  pylock?: string;
  /**
   * commands to execute after setup (deps and package install) but before test commands
   */
  extra_setup_commands?: Subs[][];
  /**
   * override core skip_missing_interpreters for this environment
   */
  skip_missing_interpreters?: boolean;
  /**
   * create virtual environments that also have access to globally installed packages.
   */
  system_site_packages?: boolean;
  /**
   * @deprecated
   * Deprecated: use 'system_site_packages' instead
   */
  sitepackages?: boolean;
  /**
   * force virtualenv to always copy rather than symlink
   */
  always_copy?: boolean;
  /**
   * @deprecated
   * Deprecated: use 'always_copy' instead
   */
  alwayscopy?: boolean;
  /**
   * true if you want virtualenv to upgrade pip/wheel/setuptools to the latest version
   */
  download?: boolean;
  /**
   * PEP 440 version spec for virtualenv (e.g. virtualenv<20.22.0). When set, tox bootstraps this version in an isolated environment and runs it via subprocess, enabling Python versions incompatible with the installed virtualenv.
   */
  virtualenv_spec?: string;
  /**
   * skip installation
   */
  skip_install?: boolean;
  /**
   * use develop mode
   */
  use_develop?: boolean;
  /**
   * @deprecated
   * Deprecated: use 'use_develop' instead
   */
  usedevelop?: boolean;
  /**
   * package installation mode - wheel | sdist | sdist-wheel | editable | editable-legacy | deps-only | skip | external
   */
  package?: string;
  /**
   * tox environment used to package
   */
  package_env?: string;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * Deprecated: use 'set_env' instead
 */
export interface SetEnv {
  [k: string]: Subs;
}
/**
 * base configuration for packaging environments
 */
export interface EnvRunBase1 {
  /**
   * environment variables to set when running commands in the tox environment
   */
  set_env?: {
    [k: string]: Subs;
  };
  setenv?: SetEnv;
  /**
   * inherit missing keys from these sections
   */
  base?: Subs[];
  /**
   * the tox execute used to evaluate this environment
   */
  runner?: string;
  /**
   * description attached to the tox environment
   */
  description?: string;
  /**
   * tox environments that this environment depends on (must be run after those)
   */
  depends?: (
    | Subs
    | {
        /**
         * factor groups for cartesian product expansion
         */
        product: (
          | string[]
          | {
              prefix: string;
              start?: number;
              stop?: number;
            }
          | {
              [k: string]: string[] | undefined;
            }
        )[];
        /**
         * environment names to exclude from product
         */
        exclude?: string[];
      }
  )[];
  /**
   * labels attached to the tox environment
   */
  labels?: Subs[];
  /**
   * directory assigned to the tox environment
   */
  env_dir?: string;
  /**
   * @deprecated
   * Deprecated: use 'env_dir' instead
   */
  envdir?: string;
  /**
   * a folder that is always reset at the start of the run
   */
  env_tmp_dir?: string;
  /**
   * @deprecated
   * Deprecated: use 'env_tmp_dir' instead
   */
  envtmpdir?: string;
  /**
   * a folder for logging where tox will put logs of tool invocation
   */
  env_log_dir?: string;
  /**
   * @deprecated
   * Deprecated: use 'env_log_dir' instead
   */
  envlogdir?: string;
  /**
   * timeout to allow process to exit before sending SIGINT
   */
  suicide_timeout?: number;
  /**
   * timeout before sending SIGTERM after SIGINT
   */
  interrupt_timeout?: number;
  /**
   * timeout before sending SIGKILL after SIGTERM
   */
  terminate_timeout?: number;
  /**
   * run on platforms that match this regular expression (empty means any platform)
   */
  platform?: string;
  /**
   * environment variables to pass on to the tox environment
   */
  pass_env?: Subs[];
  passenv?: PassEnv;
  /**
   * environment variable patterns to exclude after pass_env glob expansion
   */
  disallow_pass_env?: Subs[];
  /**
   * if set to True the content of the output will always be shown  when running in parallel mode
   */
  parallel_show_output?: boolean;
  /**
   * always recreate virtual environment if this option is true, otherwise leave it up to tox
   */
  recreate?: boolean;
  /**
   * external command glob to allow calling
   */
  allowlist_externals?: Subs[];
  /**
   * command used to list installed packages
   */
  list_dependencies_command?: Subs[];
  /**
   * install the latest available pre-release (alpha/beta/rc) of dependencies without a specified version
   */
  pip_pre?: boolean;
  /**
   * command used to install packages
   */
  install_command?: Subs[];
  /**
   * constraints to apply to installed python dependencies
   */
  constraints?: string;
  /**
   * If true, apply constraints during install_package_deps.
   */
  constrain_package_deps?: boolean;
  /**
   * Use the exact versions of installed deps as constraints, otherwise use the listed deps.
   */
  use_frozen_constraints?: boolean;
  /**
   * the commands to be called before testing
   */
  commands_pre?: Subs[][];
  /**
   * the commands to be called for testing
   */
  commands?: Subs[][];
  /**
   * the commands to be called after testing
   */
  commands_post?: Subs[][];
  /**
   * commands to run before the environment is removed during recreation (e.g. cache cleanup)
   */
  recreate_commands?: Subs[][];
  /**
   * change to this working directory when executing the test command
   */
  change_dir?: string;
  /**
   * @deprecated
   * Deprecated: use 'change_dir' instead
   */
  changedir?: string;
  /**
   * if True rewrite relative posargs paths from cwd to change_dir
   */
  args_are_paths?: boolean;
  /**
   * when executing the commands keep going even if a sub-command exits with non-zero exit code
   */
  ignore_errors?: boolean;
  /**
   * number of times to retry a failed command (0 means no retries)
   */
  commands_retry?: number;
  /**
   * if set to true a failing result of this testenv will not make tox fail (instead just warn)
   */
  ignore_outcome?: boolean;
  /**
   * if set to true, tox will stop executing remaining environments when this environment fails
   */
  fail_fast?: boolean;
  /**
   * fallback python interpreter used when no factor or explicit base_python is defined
   */
  default_base_python?: Subs[] | string;
  /**
   * environment identifier for python, first one found wins
   */
  base_python?: Subs[] | string;
  /**
   * @deprecated
   * Deprecated: use 'base_python' instead
   */
  basepython?: Subs[] | string;
  /**
   * python dependencies with optional version specifiers, as specified by PEP-440
   */
  deps?: string;
  /**
   * dependency groups to install of the target package
   */
  dependency_groups?: Subs[];
  /**
   * extras to install of the target package
   */
  extras?: Subs[];
  /**
   * PEP 751 pylock.toml lock file path to install locked dependencies from
   */
  pylock?: string;
  /**
   * commands to execute after setup (deps and package install) but before test commands
   */
  extra_setup_commands?: Subs[][];
  /**
   * override core skip_missing_interpreters for this environment
   */
  skip_missing_interpreters?: boolean;
  /**
   * create virtual environments that also have access to globally installed packages.
   */
  system_site_packages?: boolean;
  /**
   * @deprecated
   * Deprecated: use 'system_site_packages' instead
   */
  sitepackages?: boolean;
  /**
   * force virtualenv to always copy rather than symlink
   */
  always_copy?: boolean;
  /**
   * @deprecated
   * Deprecated: use 'always_copy' instead
   */
  alwayscopy?: boolean;
  /**
   * true if you want virtualenv to upgrade pip/wheel/setuptools to the latest version
   */
  download?: boolean;
  /**
   * PEP 440 version spec for virtualenv (e.g. virtualenv<20.22.0). When set, tox bootstraps this version in an isolated environment and runs it via subprocess, enabling Python versions incompatible with the installed virtualenv.
   */
  virtualenv_spec?: string;
  /**
   * skip installation
   */
  skip_install?: boolean;
  /**
   * use develop mode
   */
  use_develop?: boolean;
  /**
   * @deprecated
   * Deprecated: use 'use_develop' instead
   */
  usedevelop?: boolean;
  /**
   * package installation mode - wheel | sdist | sdist-wheel | editable | editable-legacy | deps-only | skip | external
   */
  package?: string;
  /**
   * tox environment used to package
   */
  package_env?: string;
  [k: string]: unknown | undefined;
}
