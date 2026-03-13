/* eslint-disable */

export interface MicrosoftServiceHubService {
  /**
   * The name of the host that should activate the service.
   */
  host: string;
  /**
   * A non-empty value will cause this service to be activated on a dedicated host with this ID. All services with the same host / hostId combination will run in the same host process such that they may share global data. If unspecified or empty, a service will share its host process with other services that require the same host and also leave this field empty. If specified, the value must not have spaces in it.
   */
  hostId?: string;
  /**
   * A value of 'true' will allow a client to specify a host group when requesting this service.
   */
  hostGroupAllowed?: boolean;
  /**
   * Host-specific parameters that describe how to activate this service.
   */
  entryPoint:
    | {
        /**
         * The path to the assembly that carries the service entrypoint class, relative to this file.
         */
        assemblyPath: string;
        /**
         * The full name of the class to instantiate (that accepts a Stream in its constructor) when a new client requests this service.
         */
        fullClassName: string;
        /**
         * The path that the AppDomain hosting the service should be configured to consider the ApplicationBase, relative to this file.
         */
        appBasePath?: string;
        /**
         * The config file used to initialize the service's AppDomain. It may be omitted if the config file has the same name (+.config) as the service assembly, and resides in the same directory. It is also possible to have the service without the config file.
         */
        configPath?: string;
      }
    | {
        /**
         * The path to the .js file to 'require', relative to this file.
         */
        scriptPath: string;
        /**
         * The name of the constructor function to use (that accepts a stream) when a new client requests this service.
         */
        constructorFunction: string;
      };
  /**
   * Defines the version of the service.
   */
  versionRange?: string;
  [k: string]: unknown | undefined;
}
