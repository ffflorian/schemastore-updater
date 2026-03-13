/* eslint-disable */

export interface PM2EcosystemConfigFile {
  /**
   * The apps property is an array of object where each object contains the configuration for each process.
   */
  apps?: App[];
  /**
   * The deploy property is an object where each of its properties is an object which defines a deployment environment.
   */
  deploy?: {
    production?: DeploymentEnvironment;
    staging?: DeploymentEnvironment;
    development?: DeploymentEnvironment;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface App {
  /**
   * Path of the script to launch
   */
  script: string;
  /**
   * Process name in the process list. Defaults to script filename without the extension (app for app.js)
   */
  name?: string;
  /**
   * Current working directory to start the process with. Defaults to CWD of the current environment (from your shell)
   */
  cwd?: string;
  /**
   * Arguments to pass to the script
   */
  args?: string | string[];
  /**
   * Interpreter absolute path. Defaults to node
   */
  interpreter?: string;
  /**
   * Options to pass to the interpreter
   */
  interpreter_args?: string | string[];
  /**
   * File path for stderr (each line is appended to this file)
   */
  error_file?: string;
  /**
   * File path for stdout (each line is appended to this file)
   */
  out_file?: string;
  /**
   * If set to true, avoid to suffix logs file with the process id
   */
  combine_logs?: boolean & string;
  /**
   * Alias to combine_logs
   */
  merge_logs?: boolean;
  /**
   * File path where the pid of the started process is written by pm2. Defaults to ~/.pm2/pids/app_name-id.pid
   */
  pid_file?: string;
  /**
   * Disable all logs storage
   */
  disable_logs?: boolean;
  /**
   * Define a specific log output type
   */
  log_type?: 'json';
  /**
   * Format for log timestamps in moment.js format (eg YYYY-MM-DD HH:mm Z)
   */
  log_date_format?: string;
  /**
   * Specify environment variables to be injected
   */
  env?: {
    [k: string]: string | undefined;
  };
  /**
   * Specify environment variables to be injected (when passing --env)
   */
  env_?: {
    [k: string]: string | undefined;
  };
  /**
   * Restart the app if an amount of memory is exceeded (format: /0-9?/ K for KB, 'M' for MB, 'G' for GB, default to B)
   */
  max_memory_restart?: number;
  /**
   * Time in ms to wait before restarting a crashing app
   */
  restart_delay?: number;
  /**
   * Enable or disable the source map support
   */
  source_map_support?: boolean;
  /**
   * Enable or disable the source map support
   */
  disable_source_map_support?: boolean;
  /**
   * Make the process wait for a process.send('ready')
   */
  wait_ready?: boolean;
  /**
   * Number of instances to be started in cluster mode
   */
  instances?: number;
  /**
   * Time in ms before sending the final SIGKILL signal after SIGINT
   */
  kill_timeout?: number;
  /**
   * Time in ms before forcing a reload if app is still not listening/has still not sent ready
   */
  listen_timeout?: number;
  /**
   * A cron pattern to restart your app
   */
  cron_restart?: string;
  /**
   * Enable or disable the versioning metadatas (vizion library)
   */
  vizion?: boolean;
  /**
   * Enable or disable auto restart after process failure
   */
  autorestart?: boolean;
  /**
   * Enable or disable the watch mode
   */
  watch?: boolean;
  /**
   * List of paths to ignore (regex)
   */
  ignore_watch?: string | string[];
  /**
   * Object that will be used as an options with chokidar (refer to chokidar documentation)
   */
  watch_options?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Minimum uptime of the app to be considered started (format is /[0-9]+(h|m|s)?/, for hours, minutes, seconds, default to ms)
   */
  min_uptime?: number;
  /**
   * Number of times a script is restarted when it exits in less than min_uptime
   */
  max_restarts?: number;
  /**
   * Set the execution mode
   */
  exec_mode?: 'fork' | 'cluster';
  /**
   * Start a script even if it is already running (only the script path is considered)
   */
  force?: boolean;
  /**
   * Append the environment name to the app name
   */
  append_env_to_name?: boolean;
  /**
   * List of commands executed after a pull/upgrade operation performed from Keymetrics dashboard
   */
  post_update?: string[];
  /**
   * Shutdown an application with process.send('shutdown') instead of process.kill(pid, SIGINT)
   */
  shutdown_with_message?: boolean;
  /**
   * Enable or disable the transaction tracing
   */
  trace?: boolean;
  /**
   * Enable or disable the transaction tracing
   */
  disable_trace?: boolean;
  /**
   * Specify the name of an environment variable to inject which increments for each cluster
   */
  increment_var?: string;
  /**
   * Rename the NODE_APP_INSTANCE environment variable. Defaults to NODE_APP_INSTANCE
   */
  instance_var?: string;
  /**
   * Excludes global variables starting with "REACT_" and will not allow their penetration into the cluster
   */
  filter_env?: string[];
  /**
   * Enable or disable apm wrapping
   */
  pmx?: boolean;
  /**
   * Enable or disable apm wrapping
   */
  automation?: boolean;
  /**
   * Only kill the main process, not detached children
   */
  treekill?: boolean;
  /**
   * Shortcut to inject a PORT environment variable
   */
  port?: number;
  /**
   * Set user id. Defaults to current user uid
   */
  uid?: string;
  /**
   * Set group id. Defaults to current user gid
   */
  gid?: string;
  /**
   * Specify environment variables to be injected when using --env
   *
   * This interface was referenced by `App`'s JSON-Schema definition
   * via the `patternProperty` "^env_\S+$".
   */
  [k: string]: {
    [k: string]: string | undefined;
  };
}
export interface DeploymentEnvironment {
  /**
   * SSH key path. Defaults to $HOME/.ssh
   */
  key?: string;
  /**
   * SSH user
   */
  user?: string;
  /**
   * SSH host
   */
  host?: string | string[];
  /**
   * SSH options with no command-line flag, see 'man ssh'
   */
  ssh_options?: string | string[];
  /**
   * GIT remote/branch
   */
  ref?: string;
  /**
   * GIT remote
   */
  repo?: string;
  /**
   * path in the server
   */
  path?: string;
  /**
   * Pre-setup command or path to a script on your local machine
   */
  'pre-setup'?: string;
  /**
   * Post-setup commands or path to a script on the host machine
   */
  'post-setup'?: string;
  /**
   * pre-deploy action
   */
  'pre-deploy-local'?: string;
  /**
   * post-deploy action
   */
  'post-deploy'?: string;
  [k: string]: unknown | undefined;
}
