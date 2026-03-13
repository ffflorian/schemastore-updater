/* eslint-disable */

/**
 * Prometheus Alertmanager configuration file
 */
export type HttpsWwwSchemastoreOrgPrometheusAlertmanagerJson = {
  global?: {
    /**
     * The default SMTP From header field
     */
    smtp_from?: string;
    /**
     * The default SMTP smarthost used for sending emails, including port number. Port number usually is 25, or 587 for SMTP over TLS (sometimes referred to as STARTTLS).
     */
    smtp_smarthost?: string;
    /**
     * The default hostname to identify to the SMTP server
     */
    smtp_hello?: string;
    smtp_auth_username?: string;
    smtp_auth_password?: string;
    smtp_auth_password_file?: string;
    smtp_auth_identity?: string;
    smtp_auth_secret?: string;
    /**
     * The default SMTP TLS requirement
     */
    smtp_require_tls?: boolean;
    smtp_tls_config?: TlsConfig;
    jira_api_url?: string;
    slack_api_url?: string;
    slack_api_url_file?: string;
    victorops_api_key?: string;
    victorops_api_key_file?: string;
    victorops_api_url?: string;
    pagerduty_url?: string;
    opsgenie_api_key?: string;
    opsgenie_api_key_file?: string;
    opsgenie_api_url?: string;
    rocketchat_api_url?: string;
    rocketchat_token?: string;
    rocketchat_token_file?: string;
    rocketchat_token_id?: string;
    rocketchat_token_id_file?: string;
    wechat_api_url?: string;
    wechat_api_secret?: string;
    wechat_api_corp_id?: string;
    telegram_api_url?: string;
    webex_api_url?: string;
    http_config?: HttpConfig;
    resolve_timeout?: string;
  };
  /**
   * Files from which custom notification template definitions are read. The last component may use a wildcard matcher, e.g. 'templates/*.tmpl'.
   */
  templates?: string[] | null;
  route?: Route;
  receivers?: Receiver[];
  inhibit_rules?: InhibitRule[] | null;
  /**
   * DEPRECATED. A list of mute time intervals for muting routes. Use time_intervals
   */
  mute_time_intervals?: TimeInterval[] | null;
  time_intervals?: TimeInterval[] | null;
} & ({
  global?: {
    /**
     * The default SMTP From header field
     */
    smtp_from?: string;
    /**
     * The default SMTP smarthost used for sending emails, including port number. Port number usually is 25, or 587 for SMTP over TLS (sometimes referred to as STARTTLS).
     */
    smtp_smarthost?: string;
    /**
     * The default hostname to identify to the SMTP server
     */
    smtp_hello?: string;
    smtp_auth_username?: string;
    smtp_auth_password?: string;
    smtp_auth_password_file?: string;
    smtp_auth_identity?: string;
    smtp_auth_secret?: string;
    /**
     * The default SMTP TLS requirement
     */
    smtp_require_tls?: boolean;
    smtp_tls_config?: TlsConfig;
    jira_api_url?: string;
    slack_api_url?: string;
    slack_api_url_file?: string;
    victorops_api_key?: string;
    victorops_api_key_file?: string;
    victorops_api_url?: string;
    pagerduty_url?: string;
    opsgenie_api_key?: string;
    opsgenie_api_key_file?: string;
    opsgenie_api_url?: string;
    rocketchat_api_url?: string;
    rocketchat_token?: string;
    rocketchat_token_file?: string;
    rocketchat_token_id?: string;
    rocketchat_token_id_file?: string;
    wechat_api_url?: string;
    wechat_api_secret?: string;
    wechat_api_corp_id?: string;
    telegram_api_url?: string;
    webex_api_url?: string;
    http_config?: HttpConfig;
    resolve_timeout?: string;
  };
  /**
   * Files from which custom notification template definitions are read. The last component may use a wildcard matcher, e.g. 'templates/*.tmpl'.
   */
  templates?: string[] | null;
  route?: Route;
  receivers?: Receiver[];
  inhibit_rules?: InhibitRule[] | null;
  /**
   * DEPRECATED. A list of mute time intervals for muting routes. Use time_intervals
   */
  mute_time_intervals?: TimeInterval[] | null;
  time_intervals?: TimeInterval[] | null;
} | null);
export type Labelname = string;
export type Labelvalue = string | undefined;
export type Regex = string | undefined;
/**
 * A list of matchers that an alert has to fulfill to match the node
 */
export type Matcher = string[];
/**
 * A list of matchers that have to be fulfilled by the target alerts to be muted
 */
export type Matcher1 = string[];
/**
 * A list of matchers for which one or more alerts have to exist for the inhibition to take effect
 */
export type Matcher2 = string[];

/**
 * The default TLS configuration for SMTP receivers
 */
export interface TlsConfig {
  /**
   * CA certificate to validate the server certificate with
   */
  ca_file?: string;
  /**
   * Certificate file for client cert authentication to the server
   */
  cert_file?: string;
  /**
   * Key files for client cert authentication to the server
   */
  key_file?: string;
  /**
   * ServerName extension to indicate the name of the server
   */
  server_name?: string;
  /**
   * Disable validation of the server certificate
   */
  insecure_skip_verify?: boolean;
  /**
   * Minimum acceptable TLS version
   */
  min_version?: 'TLS10' | 'TLS11' | 'TLS12' | 'TLS13';
  /**
   * Maximum acceptable TLS version
   */
  max_version?: 'TLS10' | 'TLS11' | 'TLS12' | 'TLS13';
}
/**
 * The default HTTP client configuration
 */
export interface HttpConfig {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * Optional OAuth 2.0 configuration. Cannot be used at the same time as basic_auth or authorization
 */
export interface Oauth2 {
  client_id?: string;
  client_secret?: string;
  /**
   * Read the client secret from a file. It is mutually exclusive with `client_secret`
   */
  client_secret_file?: string;
  /**
   * Scopes for the token request
   */
  scopes?: string[];
  /**
   * The URL to fetch the token from
   */
  token_url?: string;
  /**
   * Optional parameters to append to the token URL
   */
  endpoint_params?: {
    [k: string]: string | undefined;
  };
  tls_config?: TlsConfig1;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, https_proxy, HTTPs_PROXY, https_proxy, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
}
/**
 * Configures the token request's TLS settings
 */
export interface TlsConfig1 {
  /**
   * CA certificate to validate the server certificate with
   */
  ca_file?: string;
  /**
   * Certificate file for client cert authentication to the server
   */
  cert_file?: string;
  /**
   * Key files for client cert authentication to the server
   */
  key_file?: string;
  /**
   * ServerName extension to indicate the name of the server
   */
  server_name?: string;
  /**
   * Disable validation of the server certificate
   */
  insecure_skip_verify?: boolean;
  /**
   * Minimum acceptable TLS version
   */
  min_version?: 'TLS10' | 'TLS11' | 'TLS12' | 'TLS13';
  /**
   * Maximum acceptable TLS version
   */
  max_version?: 'TLS10' | 'TLS11' | 'TLS12' | 'TLS13';
}
/**
 * Configures the TLS settings
 */
export interface TlsConfig2 {
  /**
   * CA certificate to validate the server certificate with
   */
  ca_file?: string;
  /**
   * Certificate file for client cert authentication to the server
   */
  cert_file?: string;
  /**
   * Key files for client cert authentication to the server
   */
  key_file?: string;
  /**
   * ServerName extension to indicate the name of the server
   */
  server_name?: string;
  /**
   * Disable validation of the server certificate
   */
  insecure_skip_verify?: boolean;
  /**
   * Minimum acceptable TLS version
   */
  min_version?: 'TLS10' | 'TLS11' | 'TLS12' | 'TLS13';
  /**
   * Maximum acceptable TLS version
   */
  max_version?: 'TLS10' | 'TLS11' | 'TLS12' | 'TLS13';
}
export interface Route {
  receiver?: string;
  group_by?: ['...'] | Labelname[];
  /**
   * Whether an alert should continue matching subsequent sibling nodes
   */
  continue?: boolean;
  /**
   * DEPRECATED. A set of equality matchers an alert has to fulfill to match the node. Use matchers instead
   */
  match?: {
    [k: string]: Labelvalue | undefined;
  };
  /**
   * DEPRECATED. A set of regex-matchers an alert has to fulfill to match the node. Use matchers instead
   */
  match_re?: {
    [k: string]: Regex | undefined;
  };
  matchers?: Matcher;
  /**
   * How long to initially wait to send a notification for a group of alerts. Allows to wait for an inhibiting alert to arrive or collect more initial alerts for the same group. (Usually ~0s to few minutes.) If omitted, child routes inherit the group_wait of the parent route
   */
  group_wait?: string;
  /**
   * How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.) If omitted, child routes inherit the group_interval of the parent route.
   */
  group_interval?: string;
  /**
   * How long to wait before sending a notification again if it has already been sent successfully for an alert. (Usually ~3h or more). If omitted, child routes inherit the repeat_interval of the parent route. Note that this parameter is implicitly bound by Alertmanager's `--data.retention` configuration flag. Notifications will be resent after either repeat_interval or the data retention period have passed, whichever occurs first. `repeat_interval` should be a multiple of `group_interval`
   */
  repeat_interval?: string;
  /**
   * Times when the route should be muted. These must match the name of a time interval defined in the time_intervals section. Additionally, the root node cannot have any mute times. When a route is muted it will not send any notifications, but otherwise acts normally (including ending the route-matching process if the `continue` option is not set.)
   */
  mute_time_intervals?: string[];
  /**
   * Times when the route should be active. These must match the name of a time interval defined in the time_intervals section. An empty value means that the route is always active. Additionally, the root node cannot have any active times. The route will send notifications only when active, but otherwise acts normally (including ending the route-matching process if the `continue` option is not set).
   */
  active_time_intervals?: string[];
  routes?: Route[];
}
export interface Receiver {
  /**
   * The unique name of the receiver
   */
  name?: string;
  discord_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The Discord webhook URL. webhook_url and webhook_url_file are mutually exclusive
     */
    webhook_url?: string;
    /**
     * The Discord webhook URL. webhook_url and webhook_url_file are mutually exclusive
     */
    webhook_url_file?: string;
    /**
     * Message title template
     */
    title?: string;
    /**
     * Message body template
     */
    message?: string;
    /**
     * Message content template. Limited to 2000 characters
     */
    content?: string;
    /**
     * Message username
     */
    username?: string;
    /**
     * Message avatar URL
     */
    avatar_url?: string;
    http_config?: HttpConfig1;
  }[];
  email_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The email address to send notifications to. Allows a comma separated list of rfc5322 compliant email addresses
     */
    to?: string;
    /**
     * The sender's address
     */
    from?: string;
    /**
     * The SMTP host through which emails are sent
     */
    smarthost?: string;
    /**
     * The hostname to identify to the SMTP server
     */
    hello?: string;
    auth_username?: string;
    auth_password?: string;
    auth_password_file?: string;
    auth_secret?: string;
    auth_identity?: string;
    /**
     *  The SMTP TLS requirement. Note that Go does not support unencrypted connections to remote SMTP endpoints
     */
    require_tls?: boolean;
    tls_config?: TlsConfig3;
    /**
     * The HTML body of the email notification
     */
    html?: string;
    /**
     * The text body of the email notification
     */
    text?: string;
    /**
     * Further headers email header key/value pairs. Overrides any headers previously set by the notification implementation
     */
    headers?: {
      [k: string]: string | undefined;
    };
  }[];
  msteams_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The incoming webhook URL. webhook_url and webhook_url_file are mutually exclusive
     */
    webhook_url?: string;
    /**
     * The incoming webhook URL. webhook_url and webhook_url_file are mutually exclusive
     */
    webhook_url_file?: string;
    /**
     * Message title template
     */
    title?: string;
    /**
     * Message summary template
     */
    summary?: string;
    /**
     * Message body template
     */
    text?: string;
    http_config?: HttpConfig2;
  }[];
  msteamsv2_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The incoming webhook URL. webhook_url and webhook_url_file are mutually exclusive
     */
    webhook_url?: string;
    /**
     * The incoming webhook URL. webhook_url and webhook_url_file are mutually exclusive
     */
    webhook_url_file?: string;
    /**
     * Message title template
     */
    title?: string;
    /**
     * Message body template
     */
    text?: string;
    http_config?: HttpConfig3;
  }[];
  jira_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The URL to send API requests to. The full API path must be included. Example: https://company.atlassian.net/rest/api/2/
     */
    api_url?: string;
    /**
     * The project key where issues are created
     */
    project?: string;
    /**
     * Issue summary template
     */
    summary?: string;
    /**
     * Issue description template
     */
    description?: string;
    /**
     * Labels to be added to the issue
     */
    labels?: string[];
    /**
     * Priority of the issue
     */
    priority?: string;
    /**
     * Type of the issue (e.g. Bug)
     */
    issue_type?: string;
    /**
     * Name of the workflow transition to resolve an issue. The target status must have the category "done". NOTE: The name of the transition can be localized and depends on the language setting of the service account
     */
    resolve_transition?: string;
    /**
     * Name of the workflow transition to reopen an issue. The target status should not have the category "done". NOTE: The name of the transition can be localized and depends on the language setting of the service account
     */
    reopen_transition?: string;
    /**
     * If reopen_transition is defined, ignore issues with that resolution
     */
    wont_fix_resolution?: string;
    /**
     * If reopen_transition is defined, reopen the issue when it is not older than this value (rounded down to the nearest minute). The resolutiondate field is used to determine the age of the issue
     */
    reopen_duration?: string;
    /**
     * Other issue and custom fields
     */
    fields?: {
      [k: string]: unknown | undefined;
    };
    http_config?: HttpConfig4;
  }[];
  opsgenie_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The API key to use when talking to the OpsGenie API
     */
    api_key?: string;
    /**
     * The filepath to API key to use when talking to the OpsGenie API. Conflicts with api_key
     */
    api_key_file?: string;
    /**
     * The host to send OpsGenie API requests to
     */
    api_url?: string;
    /**
     * Alert text limited to 130 characters
     */
    message?: string;
    /**
     * A description of the alert
     */
    description?: string;
    /**
     * A backlink to the sender of the notification
     */
    source?: string;
    details?: {
      [k: string]: string | undefined;
    };
    /**
     * List of responders responsible for notifications
     */
    responders?: {
      id?: string;
      name?: string;
      username?: string;
      /**
       * One of `team`, `teams`, `user`, `escalation` or `schedule`. The `teams` responder is configured using the `name` field above. This field can contain a comma-separated list of team names. If the list is empty, no responders are configured
       */
      type?: string;
    }[];
    /**
     * Comma separated list of tags attached to the notifications
     */
    tags?: string;
    /**
     * Additional alert note
     */
    note?: string;
    /**
     * Priority level of alert
     */
    priority?: 'P1' | 'P2' | 'P3' | 'P4' | 'P5';
    /**
     * Whether to update message and description of the alert in OpsGenie if it already exists. By default, the alert is never updated in OpsGenie, the new message only appears in activity log
     */
    update_alerts?: boolean;
    /**
     * Optional field that can be used to specify which domain alert is related to
     */
    entity?: string;
    /**
     * Comma separated list of actions that will be available for the alert
     */
    actions?: string;
    http_config?: HttpConfig5;
  }[];
  pagerduty_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The routing and service keys are mutually exclusive. The PagerDuty integration key (when using PagerDuty integration type `Events API v2`). It is mutually exclusive with `routing_key_file`
     */
    routing_key?: string;
    /**
     * Read the Pager Duty routing key from a file. It is mutually exclusive with `routing_key`
     */
    routing_key_file?: string;
    /**
     * The PagerDuty integration key (when using PagerDuty integration type `Prometheus`). It is mutually exclusive with `service_key_file`
     */
    service_key?: string;
    /**
     * Read the Pager Duty service key from a file. It is mutually exclusive with `service_key`
     */
    service_key_file?: string;
    /**
     * The URL to send API requests to
     */
    url?: string;
    /**
     * The client identification of the Alertmanager
     */
    client?: string;
    /**
     * A backlink to the sender of the notification
     */
    client_url?: string;
    /**
     * A description of the incident
     */
    description?: string;
    /**
     * Severity of the incident
     */
    severity?: string;
    /**
     * Unique location of the affected system
     */
    source?: string;
    /**
     * A set of arbitrary key/value pairs that provide further detail about the incident
     */
    details?: {
      firing?: string;
      resolved?: string;
      num_firing?: string;
      num_resolved?: string;
      [k: string]: string | undefined;
    };
    /**
     * Images to attach to the incident
     */
    images?: {
      href?: string;
      src?: string;
      alt?: string;
    }[];
    /**
     * Links to attach to the incident
     */
    links?: {
      href?: string;
      text?: string;
    }[];
    /**
     * The part or component of the affected system that is broken
     */
    component?: string;
    /**
     * A cluster or grouping of sources
     */
    group?: string;
    /**
     * The class/type of the event
     */
    class?: string;
    http_config?: HttpConfig6;
  }[];
  pushover_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The recipient user's key. user_key and user_key_file are mutually exclusive
     */
    user_key?: string;
    /**
     * The recipient user's key. user_key and user_key_file are mutually exclusive
     */
    user_key_file?: string;
    /**
     * Your registered application's API token, see https://pushover.net/apps. You can also register a token by cloning this Prometheus app: https://pushover.net/apps/clone/prometheus. token and token_file are mutually exclusive
     */
    token?: string;
    /**
     * Your registered application's API token, see https://pushover.net/apps. You can also register a token by cloning this Prometheus app: https://pushover.net/apps/clone/prometheus. token and token_file are mutually exclusive
     */
    token_file?: string;
    /**
     * Notification title
     */
    title?: string;
    /**
     * Notification message
     */
    message?: string;
    /**
     * A supplementary URL shown alongside the message
     */
    url?: string;
    /**
     * Optional device to send notification to, see https://pushover.net/api#device
     */
    device?: string;
    /**
     * Optional sound to use for notification, see https://pushover.net/api#sound
     */
    sound?: string;
    /**
     * Priority, see https://pushover.net/api#priority
     */
    priority?: string;
    /**
     * How often the Pushover servers will send the same notification to the user. Must be at least 30 seconds
     */
    retry?: string;
    /**
     * How long your notification will continue to be retried for, unless the user acknowledges the notification
     */
    expire?: string;
    /**
     * Optional time to live (TTL) to use for notification, see https://pushover.net/api#ttl
     */
    ttl?: string;
    http_config?: HttpConfig7;
  }[];
  rocketchat_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    api_url?: string;
    channel?: string;
    /**
     * The sender token. token and token_file are mutually exclusive
     */
    token?: string;
    /**
     * The sender token. token and token_file are mutually exclusive
     */
    token_file?: string;
    /**
     * The sender token_id. token_id and token_id_file are mutually exclusive
     */
    token_id?: string;
    /**
     * The sender token_id. token_id and token_id_file are mutually exclusive
     */
    token_id_file?: string;
    color?: string;
    emoji?: string;
    icon_url?: string;
    text?: string;
    title?: string;
    title_link?: string;
    fields?: {
      title?: string;
      value?: string;
      short?: boolean;
    }[];
    image_url?: string;
    thumb_url?: string;
    link_names?: string;
    short_fields?: boolean;
    actions?: {
      /**
       * ignored, only "button" is supported
       */
      type?: string;
      text?: string;
      url?: string;
      msg?: string;
    }[];
  }[];
  slack_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    api_url?: string;
    api_url_file?: string;
    channel?: string;
    icon_emoji?: string;
    icon_url?: string;
    link_names?: boolean;
    username?: string;
    actions?: {
      text: string;
      type: string;
      url?: string;
      name?: string;
      value?: string;
      confirm?: {
        text?: string;
        dismiss_text?: string;
        ok_text?: string;
        title?: string;
      };
      style?: string;
    }[];
    callback_id?: string;
    color?: string;
    fallback?: string;
    fields?: {
      title: string;
      value: string;
      short?: boolean;
    }[];
    footer?: string;
    mrkdwn_in?: string[];
    pretext?: string;
    short_fields?: boolean;
    text?: string;
    title?: string;
    title_link?: string;
    image_url?: string;
    thumb_url?: string;
    http_config?: HttpConfig8;
  }[];
  sns_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The SNS API URL i.e. https://sns.us-east-2.amazonaws.com. If not specified, the SNS API URL from the SNS SDK will be used
     */
    api_url?: string;
    sigv4?: {
      /**
       * The AWS region. If blank, the region from the default credentials chain is used
       */
      region?: string;
      /**
       * The AWS API keys. Both access_key and secret_key must be supplied or both must be blank. If blank the environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` are used
       */
      access_key?: string;
      /**
       * The AWS API keys. Both access_key and secret_key must be supplied or both must be blank. If blank the environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` are used
       */
      secret_key?: string;
      /**
       * Named AWS profile used to authenticate
       */
      profile?: string;
      /**
       * AWS Role ARN, an alternative to using AWS API keys
       */
      role_arn?: string;
    };
    /**
     * SNS topic ARN, i.e. arn:aws:sns:us-east-2:698519295917:My-Topic. If you don't specify this value, you must specify a value for the phone_number or target_arn. If you are using a FIFO SNS topic you should set a message group interval longer than 5 minutes to prevent messages with the same group key being deduplicated by the SNS default deduplication window
     */
    topic_arn?: string;
    /**
     * Subject line when the message is delivered to email endpoints
     */
    subject?: string;
    /**
     * Phone number if message is delivered via SMS in E.164 format. If you don't specify this value, you must specify a value for the topic_arn or target_arn
     */
    phone_number?: string;
    /**
     * The mobile platform endpoint ARN if message is delivered via mobile notifications. If you don't specify this value, you must specify a value for the topic_arn or phone_number
     */
    target_arn?: string;
    /**
     * The message content of the SNS notification
     */
    message?: string;
    attributes?: {
      [k: string]: string | undefined;
    };
    http_config?: HttpConfig9;
  }[];
  telegram_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The Telegram API URL i.e. https://api.telegram.org. If not specified, default API URL will be used
     */
    api_url?: string;
    /**
     * Telegram bot token. It is mutually exclusive with `bot_token_file`
     */
    bot_token?: string;
    /**
     * Telegram bot token. It is mutually exclusive with `bot_token_file`
     */
    bot_token_file?: string;
    /**
     * ID of the chat where to send the messages
     */
    chat_id?: number;
    /**
     * Optional ID of the message thread where to send the messages
     */
    message_thread_id?: number;
    /**
     * Message template
     */
    message?: string;
    /**
     * Disable telegram notifications
     */
    disable_notifications?: boolean;
    /**
     * Parse mode for telegram message, supported values are MarkdownV2, Markdown, HTML and empty string for plain text
     */
    parse_mode?: 'MarkdownV2' | 'Markdown' | 'HTML' | '';
    http_config?: HttpConfig10;
  }[];
  victorops_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The API key to use when talking to the VictorOps API. It is mutually exclusive with `api_key_file`.
     */
    api_key?: string;
    /**
     * Reads the API key to use when talking to the VictorOps API from a file. It is mutually exclusive with `api_key`
     */
    api_key_file?: string;
    /**
     * The VictorOps API URL
     */
    api_url?: string;
    /**
     * A key used to map the alert to a team
     */
    routing_key?: string;
    /**
     * Describes the behavior of the alert (CRITICAL, WARNING, INFO)
     */
    message_type?: string;
    /**
     * Contains summary of the alerted problem
     */
    entity_display_name?: string;
    /**
     * Contains long explanation of the alerted problem
     */
    state_message?: string;
    /**
     * The monitoring tool the state message is from
     */
    monitoring_tool?: string;
    http_config?: HttpConfig11;
  }[];
  webex_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The Webex Teams API URL i.e. https://webexapis.com/v1/messages. If not specified, default API URL will be used.
     */
    api_url?: string;
    /**
     * ID of the Webex Teams room where to send the messages
     */
    room_id?: string;
    /**
     * Message template
     */
    message?: string;
    http_config?: HttpConfig12;
  }[];
  webhook_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The endpoint to send HTTP POST requests to. url and url_file are mutually exclusive.
     */
    url?: string;
    /**
     * The endpoint to send HTTP POST requests to. url and url_file are mutually exclusive.
     */
    url_file?: string;
    http_config?: HttpConfig13;
    /**
     * The maximum number of alerts to include in a single webhook message. Alerts above this threshold are truncated. When leaving this at its default value of 0, all alerts are included.
     */
    max_alerts?: number;
    /**
     * The maximum time to wait for a webhook request to complete, before failing the request and allowing it to be retried. The default value of 0s indicates that no timeout should be applied. NOTE: This will have no effect if set higher than the group_interval.
     */
    timeout?: string;
  }[];
  wechat_configs?: {
    /**
     * Whether to notify about resolved alerts
     */
    send_resolved?: boolean;
    /**
     * The API key to use when talking to the WeChat API
     */
    api_secret?: string;
    /**
     * The WeChat API URL
     */
    api_url?: string;
    /**
     * The corp id for authentication
     */
    corp_id?: string;
    message?: string;
    message_type?: 'text' | 'markdown';
    agent_id?: string;
    to_user?: string;
    to_party?: string;
    to_tag?: string;
  }[];
}
/**
 * The HTTP client's configuration
 */
export interface HttpConfig1 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * TLS configuration
 */
export interface TlsConfig3 {
  /**
   * CA certificate to validate the server certificate with
   */
  ca_file?: string;
  /**
   * Certificate file for client cert authentication to the server
   */
  cert_file?: string;
  /**
   * Key files for client cert authentication to the server
   */
  key_file?: string;
  /**
   * ServerName extension to indicate the name of the server
   */
  server_name?: string;
  /**
   * Disable validation of the server certificate
   */
  insecure_skip_verify?: boolean;
  /**
   * Minimum acceptable TLS version
   */
  min_version?: 'TLS10' | 'TLS11' | 'TLS12' | 'TLS13';
  /**
   * Maximum acceptable TLS version
   */
  max_version?: 'TLS10' | 'TLS11' | 'TLS12' | 'TLS13';
}
/**
 * The HTTP client's configuration
 */
export interface HttpConfig2 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * The HTTP client's configuration
 */
export interface HttpConfig3 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * The HTTP client's configuration. You must use this configuration to supply the personal access token (PAT) as part of the HTTP `Authorization` header. For Jira Cloud, use basic_auth with the email address as the username and the PAT as the password. For Jira Data Center, use the 'authorization' field with 'credentials: <PAT value>'
 */
export interface HttpConfig4 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * The HTTP client's configuration
 */
export interface HttpConfig5 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * The HTTP client's configuration
 */
export interface HttpConfig6 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * The HTTP client's configuration
 */
export interface HttpConfig7 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * The HTTP client's configuration
 */
export interface HttpConfig8 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * The HTTP client's configuration
 */
export interface HttpConfig9 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * The HTTP client's configuration
 */
export interface HttpConfig10 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * The HTTP client's configuration
 */
export interface HttpConfig11 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * The HTTP client's configuration. You must use this configuration to supply the bot token as part of the HTTP `Authorization` header
 */
export interface HttpConfig12 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
/**
 * The HTTP client's configuration
 */
export interface HttpConfig13 {
  /**
   * Sets the `Authorization` header with the configured username and password. password and password_file are mutually exclusive
   */
  basic_auth?: {
    username?: string;
    password?: string;
    password_file?: string;
  };
  /**
   * Optional the `Authorization` header configuration
   */
  authorization?: {
    /**
     * Sets the authentication type
     */
    type?: string;
    /**
     * Sets the credentials. It is mutually exclusive with `credentials_file`
     */
    credentials?: string;
    /**
     * Sets the credentials with the credentials read from the configured file. It is mutually exclusive with `credentials`
     */
    credentials_file?: string;
  };
  oauth2?: Oauth2;
  /**
   * Whether to enable HTTP2
   */
  enable_http2?: boolean;
  /**
   * Optional proxy URL
   */
  proxy_url?: string;
  /**
   * Comma-separated string that can contain IPs, CIDR notation, domain names that should be excluded from proxying. IP and domain names can contain port numbers
   */
  no_proxy?: string;
  /**
   * Use proxy URL indicated by environment variables (HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy, NO_PROXY, and no_proxy)
   */
  proxy_from_environment?: boolean;
  /**
   * Specifies headers to send to proxies during CONNECT requests
   */
  proxy_connect_header?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects
   */
  follow_redirects?: boolean;
  tls_config?: TlsConfig2;
  /**
   * Custom HTTP headers to be sent along with each request. Headers that are set by Prometheus itself can't be overwritten
   */
  http_headers?: {
    [k: string]:
      | {
          /**
           * Header values
           */
          values?: string[];
          /**
           * Headers values. Hidden in configuration page
           */
          secrets?: string[];
          /**
           * Files to read header values from
           */
          files?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
export interface InhibitRule {
  /**
   * DEPRECATED. Matchers that have to be fulfilled in the alerts to be muted. Use target_matchers
   */
  target_match?: {
    [k: string]: Labelvalue | undefined;
  };
  /**
   * DEPRECATED: Use target_matchers
   */
  target_match_re?: {
    [k: string]: Regex | undefined;
  };
  target_matchers?: Matcher1;
  /**
   * DEPRECATED. Matchers for which one or more alerts have to exist for the inhibition to take effect. Use source_matchers
   */
  source_match?: {
    [k: string]: Labelvalue | undefined;
  };
  /**
   * DEPRECATED. Use source_matchers
   */
  source_match_re?: {
    [k: string]: Regex | undefined;
  };
  source_matchers?: Matcher2;
  /**
   * Labels that must have an equal value in the source and target alert for the inhibition to take effect
   */
  equal?: Labelname[];
}
export interface TimeInterval {
  name?: string;
  time_intervals?: TimeIntervalSpec[];
}
export interface TimeIntervalSpec {
  times?: {
    start_time?: string;
    end_time?: string;
  }[];
  weekdays?: string[];
  days_of_month?: string[];
  months?: string[];
  years?: string[];
  location?: string;
}
