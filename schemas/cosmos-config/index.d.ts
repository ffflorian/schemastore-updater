/* eslint-disable */

export interface JSONSchemaForReactCosmosConfigs {
  $schema?: string;
  /**
   * The root directory that all others paths in this config are relative to. Usually the root of your repo. If omitted, rootDir is equal to the directory containing your Cosmos config. When you don't use a Cosmos config, rootDir defaults to the current working directory.
   */
  rootDir?: string;
  /**
   * Where to generate static exports on disk. [default: "cosmos-export"]
   */
  exportPath?: string;
  /**
   * Automatically detect and load local plugins
   */
  detectLocalPlugins?: boolean;
  /**
   * Disable plugins
   */
  disablePlugins?: boolean;
  /**
   * Dir path to serve static assets from.
   */
  staticPath?: string;
  /**
   * Module IDs of Cosmos plugins (eg. "react-cosmos-plugin-open-fixture" or "../path/to/my-plugin").
   */
  plugins?: string[];
  /**
   * Base URL for static assets. [default: "/"]
   */
  publicUrl?: string;
  /**
   * Name for directories that contain fixtures (eg. __fixtures__/example.jsx). [default: "__fixtures__"]
   */
  fixturesDir?: string;
  /**
   * Suffix for fixture files (eg. example.fixture.jsx). [default: "fixture"]
   */
  fixtureFileSuffix?: string;
  /**
   * Patterns for ignoring fixture and decorator files (eg. ["** /dist/**"]]).
   */
  ignore?: string[];
  /**
   * Directories where the Cosmos server watches for fixture files changes while running. [default: ["."]]
   */
  watchDirs?: string[];
  /**
   * Dynamically import fixture and decorator modules as they are loaded. When false all fixture and decorator modules are imported statically and bundled together. [default: false]
   */
  lazy?: boolean;
  /**
   * Expose user imports and config required for the Cosmos renderer. Used with React Native and in custom integrations. When a path is specified it requires a file extension (eg. "src/cosmos.imports.ts"). [default: false]
   */
  exposeImports?: string | boolean;
  /**
   * Dev server hostname. Set to null to accept connections with any hostname. [default: null]
   */
  hostname?: string | null;
  /**
   * Dev server port. [default: 5000]
   */
  port?: number;
  /**
   * Max number of port retries. [default: 10]
   */
  portRetries?: number;
  /**
   * Server will be served over HTTPS.
   */
  https?: boolean;
  /**
   * Additional options for HTTPS server.
   */
  httpsOptions?: {
    /**
     * Path of a certificate file
     */
    certPath?: string;
    /**
     * Path of a certificate's key file
     */
    keyPath?: string;
  };
  /**
   * Proxy some URLs to a different HTTP server (eg. an API backend dev server). Similar to devServer.proxy in webpack config.
   */
  httpProxy?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Modules to be imported before loading components. Stuff like reset.css, polyfills, etc.
   */
  globalImports?: string[];
  /**
   * Required when renderer doesn't run on the same port (or host) as the Playground. Useful for integrations with build tools. [default: null]
   */
  rendererUrl?: string | null;
  /**
   * DOM-related options
   */
  dom?: {
    /**
     * Document selector for existing element to use as component parent (eg. #root). A blank container element is created from scratch if no selector is provided. [default: null]
     */
    containerQuerySelector?: string | null;
    [k: string]: unknown | undefined;
  };
  /**
   * Vite-related options
   */
  vite?: {
    /**
     * Path to Vite config. Set to false to disable reading it from the default path. [default: "vite.config.js"]
     */
    configPath?: string | false;
    /**
     * Path to index module (eg. "src/my-index.tsx"). [default: matches common index/main module paths]
     */
    indexPath?: string | null;
    /**
     * Vite renderer port. [default: 5050]
     */
    port?: number;
  };
  /**
   * Webpack-related options
   */
  webpack?: {
    /**
     * Path to an existing webpack config, which Cosmos will reuse to build your code. Set to null to disable this behavior. [default: "webpack.config.js"]
     */
    configPath?: string | null;
    /**
     * Path to a user module that customizes the webpack config used by Cosmos. Set to null to disable this behavior. [default: "webpack.override.js"]
     */
    overridePath?: string | null;
    /**
     * Changes output filename from "[name].js" to "[name].[contenthash].js". [default: false]
     */
    includeHashInOutputFilename?: boolean;
    /**
     * Enable webpack's Hot Module Replacement. [default: true]
     */
    hotReload?: boolean;
    /**
     * When using webpack's Hot Module Replacement, enable automatic location reload after webpack fails to update modules. [default: false]
     */
    reloadOnFail?: boolean;
  };
  /**
   * UI plugin options
   */
  ui?: {
    responsivePreview?: {
      /**
       * List of device viewports
       */
      devices?: {
        label: string;
        width: number;
        height: number;
      }[];
    };
    [k: string]: unknown | undefined;
  };
}
