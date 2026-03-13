/* eslint-disable */

/**
 * A manifest file for a Slack app, as described on this page: https://api.slack.com/reference/manifests
 */
export interface SlackAppManifest {
  /**
   * Settings that describe the manifest.
   * https://api.slack.com/reference/manifests#metadata
   */
  _metadata?: {
    /**
     * An integer that specifies the major version of the manifest schema to target.
     */
    major_version?: number;
    /**
     * An integer that specifies the minor version of the manifest schema to target.
     */
    minor_version?: number;
  };
  /**
   * Settings that describe parts of an app's appearance within Slack. If you're distributing the app via the App Directory, read our listing guidelines to pick the best values for these settings.
   * https://api.slack.com/reference/manifests#display
   */
  display_information: {
    /**
     * The name of the app.
     */
    name: string;
    /**
     * A short description of the app for display to users.
     */
    description?: string;
    /**
     * A longer version of the description of the app.
     */
    long_description?: string;
    /**
     * A hex color value that specifies the background color used on hovercards that display information about your app. Can be 3-digit (#000) or 6-digit (#000000) hex values. Once an app has set a background color value, it cannot be removed, only updated.
     */
    background_color?: string;
  };
  /**
   * Settings section of the app config pages.
   * https://api.slack.com/reference/manifests#settings
   */
  settings?: {
    /**
     * IP addresses that conform to the Allowed IP Ranges feature
     */
    allowed_ip_address_ranges?: string[];
    /**
     * Events API configuration for the app.
     */
    event_subscriptions?: {
      /**
       * The full https URL that acts as the Events API request URL. If set, you'll need to manually verify the Request URL in the App Manifest section of App Management.
       */
      request_url?: string;
      /**
       * The event types you want to the app to subscribe to.
       *
       * @maxItems 100
       */
      bot_events?: string[];
      /**
       * The event types you want to the app to subscribe to on behalf of authorized users.
       *
       * @maxItems 100
       */
      user_events?: string[];
    };
    /**
     * Interactivity configuration for the app.
     */
    interactivity?: {
      /**
       * Whether or not interactivity features are enabled.
       */
      is_enabled: boolean;
      /**
       * The full https URL that acts as the interactive Request URL.
       */
      request_url?: string;
      /**
       * The full https URL that acts as the interactive Options Load URL.
       */
      message_menu_options_url?: string;
    };
    /**
     * Whether or not org-wide deploy is enabled.
     */
    org_deploy_enabled?: boolean;
    /**
     * Whether or not Socket Mode is enabled.
     */
    socket_mode_enabled?: boolean;
    /**
     * Whether or not token rotation is enabled for access tokens.
     */
    token_rotation_enabled?: boolean;
  };
  /**
   * Features section of the app config pages.
   * https://api.slack.com/reference/manifests#features
   */
  features?: {
    /**
     * App Home configuration.
     */
    app_home?: {
      /**
       * Whether or not the Home tab is enabled.
       */
      home_tab_enabled?: boolean;
      /**
       * Whether or not the Messages tab in your App Home is enabled.
       */
      messages_tab_enabled?: boolean;
      /**
       * Whether or not the users can send messages to your app in the Messages tab of your App Home.
       */
      messages_tab_read_only_enabled?: boolean;
    };
    /**
     * Bot user configuration.
     */
    bot_user?: {
      /**
       * The display name of the bot user. Allowed characters: a-z, 0-9, -, _, and .
       */
      display_name: string;
      /**
       * Whether or not the bot user will always appear to be online.
       */
      always_online?: boolean;
    };
    /**
     * Shortcuts configuration.
     */
    shortcuts?: {
      /**
       * The name of the shortcut.
       */
      name: string;
      /**
       * The callback_id of this shortcut.
       */
      callback_id: string;
      /**
       * A short description of this shortcut.
       */
      description: string;
      /**
       * Specifies which type of shortcut is being described.
       */
      type: 'message' | 'global';
    }[];
    /**
     * Slash commands configuration.
     */
    slash_commands?: {
      /**
       * The actual slash command. Should include the leading / character
       */
      command: string;
      /**
       * A description of the slash command that will be displayed to users.
       */
      description: string;
      /**
       * Whether or not channels, users, and links typed with the slash command should be escaped.
       */
      should_escape?: boolean;
      /**
       * The full https URL that acts as the slash command's request URL.
       */
      url?: string;
      /**
       * A short usage hint about the slash command for users.
       */
      usage_hint?: string;
    }[];
    /**
     * Valid unfurl domains to register. Please consult the unfurl docs for a list of domain requirements.
     *
     * @maxItems 5
     */
    unfurl_domains?:
      | []
      | [string]
      | [string, string]
      | [string, string, string]
      | [string, string, string, string]
      | [string, string, string, string, string];
    /**
     * Workflow steps configuration.
     *
     * @maxItems 10
     */
    workflow_steps?:
      | []
      | [
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          }
        ]
      | [
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          }
        ]
      | [
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          }
        ]
      | [
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          }
        ]
      | [
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          }
        ]
      | [
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          }
        ]
      | [
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          }
        ]
      | [
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          }
        ]
      | [
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          }
        ]
      | [
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          },
          {
            /**
             * The name of the workflow step.
             */
            name: string;
            /**
             * The callback_id of the workflow step.
             */
            callback_id: string;
          }
        ];
  };
  /**
   * OAuth configuration for the app.
   * https://api.slack.com/reference/manifests#oauth
   */
  oauth_config?: {
    /**
     * OAuth redirect URLs.
     *
     * @maxItems 1000
     */
    redirect_urls?: string[];
    /**
     * Permission scopes configuration.
     */
    scopes?: {
      /**
       * Bot scopes to request upon app installation.
       *
       * @maxItems 255
       */
      bot?: string[];
      /**
       * User scopes to request upon app installation.
       *
       * @maxItems 255
       */
      user?: string[];
    };
  };
}
