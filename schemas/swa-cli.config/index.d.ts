/* eslint-disable */

export interface HttpsJsonSchemastoreOrgSwaCliConfigJson {
  configurations?: {
    [k: string]:
      | ({
          /**
           * API folder or Azure Functions emulator address
           */
          apiLocation?: string;
          /**
           * API backend port
           */
          apiPort?: number;
          apiPrefix?: 'api';
          /**
           * Location of the build output directory relative to the appLocation
           */
          appArtifactLocation?: string;
          /**
           * Location for the static app source code
           */
          appLocation?: string;
          build?: boolean;
          customUrlScheme?: string;
          /**
           * Time to wait(in ms) for the dev server to start
           */
          devserverTimeout?: number;
          /**
           * CLI host address
           */
          host?: string;
          overridableErrorCode?: number[];
          /**
           * set the cli port
           */
          port?: number;
          /**
           * Run a command at startup
           */
          run?: string;
          /**
           * Serve the app and API over HTTPS
           */
          ssl?: boolean;
          /**
           * SSL certificate (.crt) to use for serving HTTPS
           */
          sslCert?: string;
          /**
           * SSL key (.key) to use for serving HTTPS
           */
          sslKey?: string;
          swaConfigFilename?: 'staticwebapp.config.json';
          swaConfigFilenameLegacy?: 'routes.json';
          swaConfigLocation?: string;
          verbose?: string;
          [k: string]: unknown | undefined;
        } & {
          context?: string;
          [k: string]: unknown | undefined;
        })
      | undefined;
  };
  [k: string]: unknown | undefined;
}
