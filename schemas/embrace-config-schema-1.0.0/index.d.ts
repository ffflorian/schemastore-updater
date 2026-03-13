/* eslint-disable */

/**
 * JSON Schema definition for the Embrace configuration file.
 */
export interface EmbraceConfigSchema {
  /**
   * Your 5 character app ID.
   */
  app_id?: string;
  /**
   * Your API 32-hexdigit token.
   */
  api_token?: string;
  /**
   * Enables NDK crash capture. Defaults to false.
   */
  ndk_enabled?: boolean;
  sdk_config?: {
    automatic_data_capture?: {
      /**
       * Enables memory warning capture. Defaults to true.
       */
      memory_info?: boolean;
      /**
       * Enables power save mode capture. Defaults to true.
       */
      power_save_mode_info?: boolean;
      /**
       * Enables network connectivity capture. Defaults to true.
       */
      network_connectivity_info?: boolean;
      /**
       * Enables ANR capture. Defaults to true.
       */
      anr_info?: boolean;
      [k: string]: unknown | undefined;
    };
    taps?: {
      /**
       * Set to false to disable capturing tap coordinates. Defaults to true.
       */
      capture_coordinates?: boolean;
      [k: string]: unknown | undefined;
    };
    view_config?: {
      /**
       * Enables capturing activity lifecycle changes in breadcrumbs. Defaults to true.
       */
      enable_automatic_activity_capture?: boolean;
      [k: string]: unknown | undefined;
    };
    webview?: {
      /**
       * Set to false to disable capturing of web view query parameters. Defaults to true. If webview:enable is set to false, this setting has no effect since all capture of web view information is disabled.
       */
      capture_query_params?: boolean;
      /**
       * Set to false to disable capturing of web views. Defaults to true.
       */
      enable?: boolean;
      [k: string]: unknown | undefined;
    };
    crash_handler?: {
      /**
       * Set to false to prevent the SDK from connecting to the uncaught exception handler. Defaults to true.
       */
      enabled?: boolean;
      [k: string]: unknown | undefined;
    };
    compose?: {
      /**
       * Enables capture of Jetpack Compose click events. Defaults to false.
       */
      capture_compose_onclick?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     * Enables PII data within FCM capture. Defaults to false.
     */
    capture_fcm_pii_data?: boolean;
    networking?: {
      /**
       * Default capture limit for specified domains. Defaults to 1000.
       */
      default_capture_limit?: number;
      /**
       * List of domain names and their respective limits.
       *
       * @minItems 1
       */
      domains?: [
        {
          /**
           * Domain URL.
           */
          domain_name?: string;
          /**
           * Limit for the number of requests to be tracked.
           */
          domain_limit?: number;
          [k: string]: unknown | undefined;
        },
        ...{
          /**
           * Domain URL.
           */
          domain_name?: string;
          /**
           * Limit for the number of requests to be tracked.
           */
          domain_limit?: number;
          [k: string]: unknown | undefined;
        }[]
      ];
      /**
       * Disable capture of network length which can interfere with certain streaming network requests. Defaults to true.
       */
      capture_request_content_length?: boolean;
      /**
       * Specify one or more regular expressions to exclude network request with URLs matching one of the regular expressions from being captured.
       *
       * @minItems 1
       */
      disabled_url_patterns?: [string, ...string[]];
      /**
       * Enable capture of network requests made using the native Java network API. Defaults to true.
       */
      enable_native_monitoring?: boolean;
      /**
       * Enables network span forwarding. Defaults to false.
       */
      enable_network_span_forwarding?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     * Declares the key that should be used to capture network request bodies, if any.
     */
    capture_public_key?: string;
    /**
     * List of sensitive keys whose values should be redacted on capture.
     *
     * @minItems 1
     */
    sensitive_keys_denylist?: [string, ...string[]];
    anr?: {
      /**
       * Enables Unity ANR capture. Defaults to false.
       */
      capture_unity_thread?: boolean;
      [k: string]: unknown | undefined;
    };
    app?: {
      /**
       * The SDK collects the disk usage for the app. You can disable this if your app has a large number of local files to prevent excessive resource usage, especially on lower-end devices. Defaults to true.
       */
      report_disk_usage?: boolean;
      [k: string]: unknown | undefined;
    };
    background_activity?: {
      /**
       * Enables background activity capture. Defaults to false.
       */
      capture_enabled?: boolean;
      [k: string]: unknown | undefined;
    };
    base_urls?: {
      /**
       * Base config URL for the SDK.
       */
      config?: string;
      /**
       * Base data URL for the SDK.
       */
      data?: number;
      [k: string]: unknown | undefined;
    };
    session?: {
      /**
       * Allowlist of session components that should be included in the session payload. The presence of this property denotes that the gating feature is enabled.
       */
      components?: string[];
      /**
       * List of events allowed to send a full session payload if the gating feature is enabled.
       *
       * @minItems 1
       */
      send_full_for?: [string, ...string[]];
      [k: string]: unknown | undefined;
    };
    /**
     * Enables 3rd party signal handler detection. Defaults to true.
     */
    sig_handler_detection?: boolean;
    app_exit_info?: {
      /**
       * Defines the max size of bytes to allow capturing AppExitInfo NDK/ANR traces.
       */
      app_exit_info_traces_limit?: boolean;
      /**
       * Enables Application Exit Info capture. Defaults to true.
       */
      aei_enabled?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     * Project's app framework, one of react_native, unity, flutter or native.
     */
    app_framework?: string;
    [k: string]: unknown | undefined;
  };
  unity?: {
    /**
     * Custom file name for unity symbols
     */
    symbols_archive_name?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
