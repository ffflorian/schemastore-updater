/* eslint-disable */

/**
 * By default, Streamlit displays a warning when a user sets both a widget default value in the function defining the widget and a widget value via the widget's key in st.session_state. If you'd like to turn off this warning, set this to True.
 */
export type DisableWidgetStateDuplicationWarning = boolean;
/**
 * If True, will show a warning when you run a Streamlit-enabled script via 'python my_script.py'.
 */
export type ShowWarningOnDirectExecution = boolean;
/**
 * Level of logging for Streamlit's internal logger
 */
export type LogLevel = 'error' | 'warning' | 'info' | 'debug';
/**
 * String format for logging messages. If logger.datetimeFormat is set, logger messages will default to '%(asctime)s.%(msecs)03d %(message)s'. See Python's documentation for available attributes.
 */
export type MessageFormat = string;
/**
 * Controls whether uncaught app exceptions and deprecation warnings are displayed in the browser
 */
export type ShowErrorDetails = 'full' | 'stacktrace' | 'type' | 'none';
/**
 * Change the visibility of items in the toolbar, options menu, and settings dialog (top right of the app)
 */
export type ToolbarMode = 'auto' | 'developer' | 'viewer' | 'minimal';
/**
 * Controls whether to display the default sidebar page navigation in a multi-page app. This only applies when app's pages are defined by the 'pages/' directory.
 */
export type ShowSidebarNavigation = boolean;
/**
 * Allows you to type a variable or string by itself in a single line of Python code to write it to the app.
 */
export type MagicEnabled = boolean;
/**
 * Handle script rerun requests immediately, rather than waiting for script execution to reach a yield point. This makes Streamlit much more responsive to user interaction, but it can lead to race conditions in apps that mutate session_state data outside of explicit session_state assignment statements.
 */
export type FastReruns = boolean;
/**
 * Raise an exception after adding unserializable data to Session State. Some execution environments may require serializing all data in Session State, so it may be useful to detect incompatibility during development, or when the execution environment will stop supporting it in the future.
 */
export type EnforceSerializableSessionState = boolean;
/**
 * Controls how 'options' widgets (radio, selectbox, multiselect) coerce Enum members. This is particularly useful when Enum classes are redefined during script reruns. 'off' disables coercion completely, 'nameOnly' allows coercion when member names match, and 'nameAndValue' requires both member names and values to match for coercion.
 */
export type EnumCoercion = 'off' | 'nameOnly' | 'nameAndValue';
/**
 * List of directories to watch for changes. By default, Streamlit watches files in the current working directory and its subdirectories. Use this option to specify additional directories to watch. Paths must be absolute.
 */
export type FolderWatchList = string[];
/**
 * List of directories to ignore for changes. By default, Streamlit watches files in the current working directory and its subdirectories. Use this option to specify exceptions within watched directories. Paths can be absolute or relative to the current working directory.
 */
export type FolderWatchBlacklist = string[];
/**
 * Change the type of file watcher used by Streamlit, or turn it off completely. 'auto' attempts to use watchdog module and falls back to polling, 'watchdog' forces watchdog module, 'poll' forces polling, 'none' disables file watching.
 */
export type FileWatcherType = 'auto' | 'watchdog' | 'poll' | 'none';
/**
 * Symmetric key used to produce signed cookies. If deploying on multiple replicas, this should be set to the same value across all replicas to ensure they all share the same secret.
 */
export type CookieSecret = string;
/**
 * If false, will attempt to open a browser window on start. Default is false unless on a Linux box where DISPLAY is unset, or running in the Streamlit Atom plugin.
 */
export type Headless = boolean;
/**
 * Whether to show a terminal prompt for the user's email address when they run Streamlit (locally) for the first time. If server.headless=True, Streamlit will not show this prompt.
 */
export type ShowEmailPrompt = boolean;
/**
 * Automatically rerun script when the file is modified on disk.
 */
export type RunOnSave = boolean;
/**
 * The address where the server will listen for client and browser connections. If set, the server will only be accessible from this address, and not from any aliases (like localhost).
 */
export type Address = string;
/**
 * The port where the server will listen for browser connections.
 */
export type Port = number;
/**
 * The base path for the URL where Streamlit should be served from.
 */
export type BaseURLPath = string;
/**
 * Enables support for Cross-Origin Resource Sharing (CORS) protection, for added security. If XSRF protection is enabled and CORS protection is disabled at the same time, Streamlit will enable them both instead.
 */
export type EnableCORS = boolean;
/**
 * If CORS protection is enabled, use this option to set a list of allowed origins that the Streamlit server will accept traffic from. This config option does nothing if CORS protection is disabled.
 */
export type CORSAllowedOrigins = string[];
/**
 * Enables support for Cross-Site Request Forgery (XSRF) protection, for added security. If XSRF protection is enabled and CORS protection is disabled at the same time, Streamlit will enable them both instead.
 */
export type EnableXSRFProtection = boolean;
/**
 * Max size, in megabytes, for files uploaded with the file_uploader.
 */
export type MaxUploadSize = number;
/**
 * Max size, in megabytes, of messages that can be sent via the WebSocket connection.
 */
export type MaxMessageSize = number;
/**
 * Enables support for websocket compression.
 */
export type EnableWebsocketCompression = boolean;
/**
 * Enable serving files from a 'static' directory in the running app's directory.
 */
export type EnableStaticServing = boolean;
/**
 * TTL in seconds for sessions whose websockets have been disconnected. The server may choose to clean up session state, uploaded files, etc for a given session with no active websocket connection at any point after this time has passed.
 */
export type DisconnectedSessionTTL = number;
/**
 * Server certificate file for connecting via HTTPS. Must be set at the same time as 'server.sslKeyFile'. DO NOT USE THIS OPTION IN A PRODUCTION ENVIRONMENT. It has not gone through security audits or performance tests. For the production environment, we recommend performing SSL termination by the load balancer or the reverse proxy.
 */
export type SSLCertificateFile = string;
/**
 * Cryptographic key file for connecting via HTTPS. Must be set at the same time as 'server.sslCertFile'. DO NOT USE THIS OPTION IN A PRODUCTION ENVIRONMENT. It has not gone through security audits or performance tests. For the production environment, we recommend performing SSL termination by the load balancer or the reverse proxy.
 */
export type SSLKeyFile = string;
/**
 * Address to connect to when opening browser
 */
export type ServerAddress = string;
/**
 * Whether to send usage statistics to Streamlit
 */
export type GatherUsageStats = boolean;
/**
 * Port where users should point their browsers to connect to the app. This is used to set the correct URL for XSRF protection, show the URL on the terminal, and open the browser automatically. This option is for advanced use cases - to change the port of your app, use server.Port instead. Defaults to whatever value is set in server.port.
 */
export type ServerPort = number;
/**
 * Mapbox API token for displaying maps. DEPRECATED: Use MAPBOX_API_KEY environment variable or PyDeck's api_keys argument instead. This option will be removed on or after 2026-05-01.
 */
export type Token = string;
/**
 * The preset Streamlit theme that your custom theme inherits from. Can be either 'light' or 'dark'.
 */
export type BaseTheme = 'light' | 'dark';
/**
 * Primary accent color for interactive elements
 */
export type PrimaryColor = string;
/**
 * Background color of the app
 */
export type BackgroundColor = string;
/**
 * Background color used for most interactive widgets
 */
export type SecondaryBackgroundColor = string;
/**
 * Color used for almost all text
 */
export type TextColor = string;
/**
 * Color used for all links
 */
export type LinkColor = string;
/**
 * Whether or not links should be displayed with an underline
 */
export type LinkUnderline = boolean;
/**
 * Background color used for code blocks
 */
export type CodeBackgroundColor = string;
/**
 * The font family for all text, except code blocks. Can be 'sans-serif', 'serif', 'monospace', a custom font family value, or a comma-separated list of these for fallbacks
 */
export type Font = ('sans-serif' | 'serif' | 'monospace') | string;
/**
 * An array of fonts to use in your app. Each font is a dictionary with attributes like family, url, weight, style, and unicodeRange
 */
export type FontFaces = FontFace[];
/**
 * The root font size in pixels for the app. Must be a positive integer. Defaults to 16px if not set
 */
export type BaseFontSize = number;
/**
 * The root font weight for the app.
 */
export type BaseFontWeight = number;
/**
 * The font family to use for headings. Can be 'sans-serif', 'serif', 'monospace', a custom font family value, or a comma-separated list for fallbacks. Uses theme.font if not set
 */
export type HeadingFont = ('sans-serif' | 'serif' | 'monospace') | string;
/**
 * Font sizes for h1-h6 headings. Can be a single value or array of up to 6 values in pixels or rem
 */
export type HeadingFontSizes =
  | FontSize
  | []
  | [FontSize]
  | [FontSize, FontSize]
  | [FontSize, FontSize, FontSize]
  | [FontSize, FontSize, FontSize, FontSize]
  | [FontSize, FontSize, FontSize, FontSize, FontSize]
  | [FontSize, FontSize, FontSize, FontSize, FontSize, FontSize];
export type FontSize = string;
/**
 * Font weights for h1-h6 headings. Can be a single value or array of up to 6 values between 100 and 900
 */
export type HeadingFontWeights =
  | FontWeight
  | []
  | [FontWeight]
  | [FontWeight, FontWeight]
  | [FontWeight, FontWeight, FontWeight]
  | [FontWeight, FontWeight, FontWeight, FontWeight]
  | [FontWeight, FontWeight, FontWeight, FontWeight, FontWeight]
  | [FontWeight, FontWeight, FontWeight, FontWeight, FontWeight, FontWeight];
export type FontWeight = number;
/**
 * The font family to use for code (monospace) in the sidebar. Can be 'sans-serif', 'serif', 'monospace', a custom font family value, or a comma-separated list for fallbacks
 */
export type CodeFont = ('sans-serif' | 'serif' | 'monospace') | string;
/**
 * The font size for code blocks and code text in pixels or rem. Defaults to 0.875rem if not set
 */
export type FontSize1 = string;
/**
 * The font weight for code blocks and code text.
 */
export type FontWeight1 = number;
/**
 * The radius used as basis for the corners of most UI elements
 */
export type BaseRadius = ('none' | 'small' | 'medium' | 'large' | 'full') | string;
/**
 * The radius used as basis for the corners of buttons. Uses theme.baseRadius if not set
 */
export type ButtonRadius = ('none' | 'small' | 'medium' | 'large' | 'full') | string;
/**
 * The color of the border around elements
 */
export type BorderColor = string;
/**
 * The color of the border around dataframes and tables. Uses theme.borderColor if not set
 */
export type DataframeBorderColor = string;
/**
 * The background color of the dataframe's header. Uses a mix of theme.backgroundColor and theme.secondaryBackgroundColor if not set
 */
export type DataframeHeaderBackgroundColor = string;
/**
 * Whether to show a border around input widgets
 */
export type ShowWidgetBorder = boolean;
/**
 * Whether to show a vertical separator between the sidebar and the main content area
 */
export type ShowSidebarBorder = boolean;
export type Color = string;
/**
 * An array of colors to use for categorical chart data in Plotly, Altair, and Vega-Lite charts
 */
export type ChartCategoricalColors = Color[];
/**
 * An array of exactly ten colors to use for sequential or continuous chart data in Plotly, Altair, and Vega-Lite charts
 *
 * @minItems 10
 * @maxItems 10
 */
export type ChartSequentialColors = [Color, Color, Color, Color, Color, Color, Color, Color, Color, Color];
/**
 * Primary accent color for sidebar elements
 */
export type Color1 = string;
/**
 * Background color of the sidebar
 */
export type Color2 = string;
/**
 * Background color used for most interactive widgets in the sidebar
 */
export type Color3 = string;
/**
 * Color used for almost all text in the sidebar
 */
export type Color4 = string;
/**
 * Color used for all links in the sidebar
 */
export type Color5 = string;
/**
 * Whether or not links should be displayed with an underline in the sidebar
 */
export type LinkUnderline1 = boolean;
/**
 * Background color used for code blocks in the sidebar
 */
export type Color6 = string;
/**
 * The font family for all text in the sidebar, except code blocks
 */
export type Font1 = ('sans-serif' | 'serif' | 'monospace') | string;
/**
 * The font family to use for headings in the sidebar. If this isn't set, Streamlit uses theme.font for headings
 */
export type HeadingFont1 = ('sans-serif' | 'serif' | 'monospace') | string;
/**
 * One or more font sizes for h1-h6 headings in the sidebar
 */
export type HeadingFontSizes1 =
  | FontSize
  | [FontSize]
  | [FontSize, FontSize]
  | [FontSize, FontSize, FontSize]
  | [FontSize, FontSize, FontSize, FontSize]
  | [FontSize, FontSize, FontSize, FontSize, FontSize]
  | [FontSize, FontSize, FontSize, FontSize, FontSize, FontSize];
/**
 * One or more font weights for h1-h6 headings in the sidebar
 */
export type HeadingFontWeights1 =
  | FontWeight
  | [FontWeight]
  | [FontWeight, FontWeight]
  | [FontWeight, FontWeight, FontWeight]
  | [FontWeight, FontWeight, FontWeight, FontWeight]
  | [FontWeight, FontWeight, FontWeight, FontWeight, FontWeight]
  | [FontWeight, FontWeight, FontWeight, FontWeight, FontWeight, FontWeight];
/**
 * The font family to use for code (monospace) in the sidebar
 */
export type CodeFont1 = ('sans-serif' | 'serif' | 'monospace') | string;
/**
 * The font size (in pixels or rem) for code blocks and code text in the sidebar
 */
export type FontSize2 = string;
/**
 * The radius used as basis for the corners of most UI elements in the sidebar
 */
export type BaseRadius1 = ('none' | 'small' | 'medium' | 'large' | 'full') | string;
/**
 * The radius used as basis for the corners of buttons in the sidebar. If this isn't set, Streamlit uses theme.baseRadius instead
 */
export type ButtonRadius1 = ('none' | 'small' | 'medium' | 'large' | 'full') | string;
/**
 * The color of the border around elements in the sidebar. If this isn't set, Streamlit uses theme.borderColor instead
 */
export type Color7 = string;
/**
 * The color of the border around dataframes and tables in the sidebar. If this isn't set, Streamlit uses theme.borderColor instead
 */
export type Color8 = string;
/**
 * The background color of the dataframe's header in the sidebar. If this isn't set, Streamlit uses a mix of theme.backgroundColor and theme.secondaryBackgroundColor
 */
export type Color9 = string;
/**
 * Whether to show a border around input widgets in the sidebar
 */
export type ShowWidgetBorder1 = boolean;
/**
 * An entry can be a path to a TOML file or directory path where Kubernetes style secrets are saved. Order is important, import is first to last, so secrets in later files will take precedence over earlier ones.
 */
export type ListOfLocationsWhereSecretsAreSearched = string[];

/**
 * Schema for Streamlit configuration files that define settings for your working directory or global development environment
 */
export interface JSONSchemaForStreamlitConfigTomlFiles {
  global?: Global;
  logger?: Logger;
  client?: Client;
  runner?: Runner;
  server?: Server;
  browser?: Browser;
  mapbox?: Mapbox;
  theme?: Theme;
  secrets?: Secrets;
  [k: string]: unknown | undefined;
}
/**
 * Global configuration options for Streamlit
 */
export interface Global {
  disableWidgetStateDuplicationWarning?: DisableWidgetStateDuplicationWarning;
  showWarningOnDirectExecution?: ShowWarningOnDirectExecution;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for Streamlit's internal logger
 */
export interface Logger {
  level?: LogLevel;
  messageFormat?: MessageFormat;
  [k: string]: unknown | undefined;
}
/**
 * Client-side configuration options
 */
export interface Client {
  showErrorDetails?: ShowErrorDetails;
  toolbarMode?: ToolbarMode;
  showSidebarNavigation?: ShowSidebarNavigation;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for Streamlit's script runner
 */
export interface Runner {
  magicEnabled?: MagicEnabled;
  fastReruns?: FastReruns;
  enforceSerializableSessionState?: EnforceSerializableSessionState;
  enumCoercion?: EnumCoercion;
  [k: string]: unknown | undefined;
}
/**
 * Server configuration options for Streamlit
 */
export interface Server {
  folderWatchList?: FolderWatchList;
  folderWatchBlacklist?: FolderWatchBlacklist;
  fileWatcherType?: FileWatcherType;
  cookieSecret?: CookieSecret;
  headless?: Headless;
  showEmailPrompt?: ShowEmailPrompt;
  runOnSave?: RunOnSave;
  address?: Address;
  port?: Port;
  baseUrlPath?: BaseURLPath;
  enableCORS?: EnableCORS;
  corsAllowedOrigins?: CORSAllowedOrigins;
  enableXsrfProtection?: EnableXSRFProtection;
  maxUploadSize?: MaxUploadSize;
  maxMessageSize?: MaxMessageSize;
  enableWebsocketCompression?: EnableWebsocketCompression;
  enableStaticServing?: EnableStaticServing;
  disconnectedSessionTTL?: DisconnectedSessionTTL;
  sslCertFile?: SSLCertificateFile;
  sslKeyFile?: SSLKeyFile;
  [k: string]: unknown | undefined;
}
/**
 * Browser configuration options for Streamlit
 */
export interface Browser {
  serverAddress?: ServerAddress;
  gatherUsageStats?: GatherUsageStats;
  serverPort?: ServerPort;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * Configuration for Mapbox integration (DEPRECATED)
 */
export interface Mapbox {
  token?: Token;
  [k: string]: unknown | undefined;
}
/**
 * Theme configuration for Streamlit apps
 */
export interface Theme {
  base?: BaseTheme;
  primaryColor?: PrimaryColor;
  backgroundColor?: BackgroundColor;
  secondaryBackgroundColor?: SecondaryBackgroundColor;
  textColor?: TextColor;
  linkColor?: LinkColor;
  linkUnderline?: LinkUnderline;
  codeBackgroundColor?: CodeBackgroundColor;
  font?: Font;
  fontFaces?: FontFaces;
  baseFontSize?: BaseFontSize;
  baseFontWeight?: BaseFontWeight;
  headingFont?: HeadingFont;
  headingFontSizes?: HeadingFontSizes;
  headingFontWeights?: HeadingFontWeights;
  codeFont?: CodeFont;
  codeFontSize?: FontSize1;
  codeFontWeight?: FontWeight1;
  baseRadius?: BaseRadius;
  buttonRadius?: ButtonRadius;
  borderColor?: BorderColor;
  dataframeBorderColor?: DataframeBorderColor;
  dataframeHeaderBackgroundColor?: DataframeHeaderBackgroundColor;
  showWidgetBorder?: ShowWidgetBorder;
  showSidebarBorder?: ShowSidebarBorder;
  chartCategoricalColors?: ChartCategoricalColors;
  chartSequentialColors?: ChartSequentialColors;
  sidebar?: ThemeSidebar;
  [k: string]: unknown | undefined;
}
export interface FontFace {
  /**
   * The font family name
   */
  family: string;
  /**
   * URL or path to the font file
   */
  url: string;
  /**
   * Font weight (e.g. '400', '700')
   */
  weight?: string;
  /**
   * Font style (e.g. 'normal', 'italic')
   */
  style?: string;
  /**
   * Unicode range for the font
   */
  unicodeRange?: string;
  [k: string]: unknown | undefined;
}
/**
 * Theme configuration specifically for the sidebar
 */
export interface ThemeSidebar {
  primaryColor?: Color1;
  backgroundColor?: Color2;
  secondaryBackgroundColor?: Color3;
  textColor?: Color4;
  linkColor?: Color5;
  linkUnderline?: LinkUnderline1;
  codeBackgroundColor?: Color6;
  font?: Font1;
  headingFont?: HeadingFont1;
  headingFontSizes?: HeadingFontSizes1;
  headingFontWeights?: HeadingFontWeights1;
  codeFont?: CodeFont1;
  codeFontSize?: FontSize2;
  baseRadius?: BaseRadius1;
  buttonRadius?: ButtonRadius1;
  borderColor?: Color7;
  dataframeBorderColor?: Color8;
  dataframeHeaderBackgroundColor?: Color9;
  showWidgetBorder?: ShowWidgetBorder1;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for Streamlit secrets management
 */
export interface Secrets {
  files?: ListOfLocationsWhereSecretsAreSearched;
  [k: string]: unknown | undefined;
}
