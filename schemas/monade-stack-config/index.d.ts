/* eslint-disable */

/**
 * The configuration file to get a local stack up and running with Monade CLI
 */
export interface MonadeCLIStackConfiguration {
  /**
   * The name of the stack. It will be used as a prefix for the stack's resources
   */
  name: string;
  /**
   * Specifies whether to use the system-wide nginx service or spawn a local nginx process among other services. If not specified, 'system' is implied. Local nginx requires an nginx binary in the path. System wide nginx configuration is left to the user.
   */
  nginx?: 'system' | 'local';
  /**
   * A command to be run when the stack is stopped. The command will be run in a shell, so you can use shell features like pipes and redirects.
   */
  on_stop?: string;
  /**
   * The services to be run in the stack. Each service is represented by its name, which is the key
   */
  services: {
    [k: string]: ProcConfig | undefined;
  };
  /**
   * The bastion configuration for the stack. Use this to quick connect to the bastion host of the stack with `monade bastion`
   */
  bastion?: {
    /**
     * The bastion host to connect to. Can be an ip address or a domain
     */
    host: string;
    /**
     * The user to connect to the bastion host
     */
    user: string;
    /**
     * The path to the private key to use to connect to the bastion host. Please note that the key should be store in a directory outside the stack directory, to avoid being included in the stack repository
     */
    key_path: string;
  };
  additionalProperties?: never;
  [k: string]: unknown | undefined;
}
export interface ProcConfig {
  /**
   * The command to be run to start the service. If the command has spaces it must be double quoted
   */
  command: string;
  /**
   * The working directory for the command. This directory will be cd'd into before running the command
   */
  cwd?: string;
  /**
   * A list of environment variables to be set for the command. Each item in the list should be a string in the form of `KEY=VALUE`. These variables take precedence over variables set in `env_file` and `env_files`. All values are treated as literal strings
   */
  env?: string[];
  /**
   * If set all environment variables in the file will be set for the command. The file should be in the format of `KEY=VALUE` with each key-value pair on a new line. All values are treated as literal strings
   */
  env_file?: string;
  /**
   * A list of files from which environment variables will be set for the command. Each file should be in the format of `KEY=VALUE` with each key-value pair on a new line. All values are treated as literal strings. If the same variable is set in multiple files, the last file in the list will take precedence. These files takes precedence over `env_file` but are overridden by `env` variables
   */
  env_files?: string[];
  /**
   * A list of domains to be proxied to the service. Each item in the list must be a string. In our local stacks domains should use the `test` tld
   */
  domains?: string[];
  /**
   * This is the port the proxy will use to forward requests to the service. It must be unique for each service in the stack. Please note that the process should be configured to run on this port, and concurrent stacks could interfere one with another.The port must be set along with domains for the service to be proxied
   */
  port?: number;
  /**
   * If set to true, the proxy will forward requests to the service using HTTPS. The service must be configured to accept HTTPS requests. Setting this has no effect on the proxy external connections, that are always https
   */
  proxy_https?: boolean;
  /**
   * If set to true, the service will be started when the stack is started. If set to false, the service will not be started automatically when the stack is started.
   */
  autostart?: boolean;
  /**
   * The key sequence to be used by the stack runner to stop the service. For docker services use 'C-c'. If not set a SIGTERM will be sent. The sequence must be a combination of keys, emacs-style, for example for ctrl+c use 'C-c'. Do not specify SIGTERM or SIGKILL
   */
  stop_sequence?: string;
  /**
   * A list of options to be set for the server block in the nginx configuration for this process. Here should be nginx general configurations. This is a map, the key is the name of the directive, the value is the argument
   */
  nginx_server_options?: {
    [k: string]: string | undefined;
  };
  /**
   * A list of options to be set for the location block in the nginx configuration for this process. Here should be proxy-related configurations. This is a map, the key is the name of the directive, the value is the argument
   */
  nginx_location_options?: {
    [k: string]: string | undefined;
  };
}
