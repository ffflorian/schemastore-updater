/* eslint-disable */

/**
 * There are two valid formats for shortcut keys: as a key combination or as a media key.
 *
 * Key combinations must consist of 2 or 3 keys (<modifier>+[<secondary_modifier>]+<key>), e.g.: "Ctrl+Shift+Z"
 *
 * If a key combination is already used by the browser (like "Ctrl+P") or by an existing add-on, then you can't override it. You can define it, but your event handler will not be called when the user presses the key combination.
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands#shortcut_values
 */
export type CommandShortcut = string;
export type MatchPattern = string;
/**
 *  An array of paths, relative to manifest.json, referencing JavaScript files that will be injected into matching pages.<br>Files are injected in the order given. This means that, injected scripts cab utilize scripts included prior to them.<br>The files are injected after any files in `css`, and at the time specified by `run_at`.
 */
export type Scripts = string[];
export type GlobPattern = string;
export type MatchPatternStrict = string;
export type Icon = {
  /**
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^[1-9]\d+$".
   *
   * This interface was referenced by `undefined`'s JSON-Schema definition
   * via the `patternProperty` "^[1-9]\d+$".
   */
  [k: string]: string;
} & Icon1;
export type Icon1 =
  | string
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[1-9]\d+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[1-9]\d+$".
       */
      [k: string]: string;
    };

/**
 * The manifest.json file is the only file that every extension using WebExtension APIs must contain.
 *
 * Using manifest.json, you specify basic metadata about your extension such as the name and version, and can also specify aspects of your extension's functionality (such as background scripts, content scripts, and browser actions).
 *
 * It is a JSON-formatted file, with one exception: it is allowed to contain "//"-style comments.
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json
 */
export interface JSONSchemaForWebExtensionsManifestFiles {
  /**
   * The extension's author, intended for display in the browser's user interface. If the developer key is supplied and it contains the "name`" property, it will override the author key. There's no way to specify multiple authors.
   *
   * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author
   */
  author?: string;
  background?: BackgroundScriptInclusions;
  browser_specific_settings?: BrowserSpecificSettings;
  chrome_settings_overrides?: BrowserHomePage;
  chrome_url_overrides?: CustomSpecialPages;
  commands?: KeyboardShortcuts;
  /**
   * Instructs the browser to load content scripts into web pages whose URL matches a given pattern.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
   *
   * @minItems 1
   */
  content_scripts?: [ContentScript, ...ContentScript[]];
  /**
   * Extensions have a content security policy (CSP) applied to them by default. The default policy restricts the sources from which extensions can load code (such as <script> resources) and disallows potentially unsafe practices such as the use of eval().<br>You can use this key to loosen or tighten the default policy. This key is specified in the same way as the Content-Security-Policy HTTP header.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
   */
  content_security_policy?: string;
  declarative_net_request?: DeclarativeNetRequestRulesets;
  /**
   * This key must be present if the extension contains the _locales directory, and must be absent otherwise. It identifies a subdirectory of _locales, and this subdirectory will be used to find the default strings for your extension.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale
   */
  default_locale?: string;
  /**
   * A short description of the extension, intended for display in the browser's user interface. In Firefox and Chrome this value can be up to 132 characters. The limit in other browsers may differ.<br>This is a localizable property.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description
   */
  description?: string;
  developer?: DeveloperInformation;
  /**
   * Use this key to enable your extension to extend the browser's built-in devtools.<br>This key is defined as a URL to an HTML file. The HTML file must be bundled with the extension, and the URL is relative to the extension's root.<br>The use of this manifest key triggers an install-time permission warning about devtools. To avoid an install-time permission warning, mark the feature as optional by listing the "devtools" permission in the optional_permissions manifest key.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page
   */
  devtools_page?: string;
  dictionaries?: Localization;
  externally_connectable?: ExternalExtensionAPI;
  /**
   * URL for the extension's home page.<br>If a developer key containing the "url" property and "homepage_url" are defined, Firefox uses "developer.url" while Opera uses "homepage_url". Chrome and Safari do not support the "developer" key.<br>This is a localizable property.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
   */
  homepage_url?: string;
  /**
   * The icons key specifies icons for your extension. Those icons will be used to represent the extension in components such as the Add-ons Manager.<br>It consists of key-value pairs of image size in px and image path relative to the root directory of the extension.<br>If icons is not supplied, a standard extension icon will be used by default.<br>You should supply at least a main extension icon, ideally 48x48 px in size. This is the default icon that will be used in the Add-ons Manager.<br>You can use SVG and the browser will scale your icon appropriately. There are currently two caveats though.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons
   */
  icons?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[1-9]\d*$".
     */
    [k: string]: string;
  };
  /**
   * Use the incognito key to control how the extension works with private browsing windows.<br><br>Note: By default, extensions do not run in private browsing windows. Whether an extension can access private browsing windows is under user control. For details, see Extensions in Private Browsing. Your extension can check whether it can access private browsing windows using extension.isAllowedIncognitoAccess.<br><br>This is a string that can take any of these values:<br>"spanning" (the default): the extension will see events from private and non-private windows and tabs. Windows and tabs will get an incognito property in the `Window` or `Tab` that represents them. This property indicates whether or not the object is private<br>"split": the extension will be split between private and non-private windows. There are effectively two copies of the extension running: one sees only non-private windows, the other sees only private windows. Each copy has isolated access to Web APIs (so, for example, localStorage is not shared). However, the WebExtension API storage.local is shared. (Note: this setting is not supported by Firefox.)<br>"not_allowed": private tabs and windows are invisible to the extension.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito
   */
  incognito?: 'spanning' | 'split' | 'not_allowed';
  /**
   * This key specifies the version of manifest.json used by this extension.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version
   */
  manifest_version: 2 | 3;
  /**
   * Name of the extension. This is used to identify the extension in the browser's user interface and on sites like addons.mozilla.org.<br>It's good practice to keep the name short enough to display in the UI. Also, the length of the name of a published extension may be limited.<br>These restrictions do not apply to self-hosted extensions or extensions distributed outside the stores.<br>This is a localizable property.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name
   */
  name: string;
  /**
   * Whether the app or extension is expected to work offline. When Chrome detects that it is offline, apps with this field set to true will be highlighted on the New Tab page.
   *
   * As of Chrome 35, apps (ChromeOS only from 2018) are assumed to be offline enabled and the default value of "offline_enabled" is true unless "webview" permission is requested. In this case, network connectivity is assumed to be required and "offline_enabled" defaults to false.
   *
   * The "offline_enabled" value is also used to determine whether a network connectivity check will be performed when launching an app in ChromeOS kiosk mode. A network connectivity check will be performed when apps are not offline enabled, and app launching put on hold until the device obtains connectivity to the Internet. https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled
   */
  offline_enabled?: boolean;
  omnibox?: Keywords;
  /**
   * Use the optional_permissions key to list permissions which you want to ask for at runtime, after your add-on has been installed.
   * The key can contain two kinds of permissions: host permissions and API permissions.
   * Not all permissions are compatible with all browsers
   * Some are granted silently, without user prompt
   *
   * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions
   */
  optional_permissions?: (
    | string
    | (
        | 'activeTab'
        | 'background'
        | 'bookmarks'
        | 'browserSettings'
        | 'browsingData'
        | 'clipboardRead'
        | 'clipboardWrite'
        | 'contentSettings'
        | 'contextMenus'
        | 'cookies'
        | 'debugger'
        | 'declarativeNetRequest'
        | 'declarativeNetRequestFeedback'
        | 'declarativeNetRequestWithHostAccess'
        | 'devtools'
        | 'downloads'
        | 'downloads.open'
        | 'find'
        | 'geolocation'
        | 'history'
        | 'idle'
        | 'management'
        | 'nativeMessaging'
        | 'notifications'
        | 'pageCapture'
        | 'pkcs11'
        | 'privacy'
        | 'proxy'
        | 'scripting'
        | 'search'
        | 'sessions'
        | 'tabHide'
        | 'tabs'
        | 'topSites'
        | 'webNavigation'
        | 'webRequest'
        | 'webRequestBlocking'
        | 'webRequestFilterResponse'
        | 'webRequestFilterResponse.serviceWorkerScript'
      )
  )[];
  /**
   * Use the options_page key to define an options page for your extension.
   *
   * The options page contains settings for the extension. The user can access it from the browser's add-ons manager, and you can open it from within your extension using runtime.openOptionsPage().
   *
   * Unlike options pages specified using the newer options_ui key, options pages specified using the deprecated options_page key don't receive browser styles and always open in a normal browser tab.
   *
   * WARNING: This manifest key has been deprecated. Use `options_ui` instead.
   *
   * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page#browser_compatibility
   */
  options_page?: string;
  options_ui?: OptionsPage;
  page_action?: PagePopup;
  /**
   * Use the permissions key to request special powers for your extension. This key is an array of strings, and each string is a request for a permission.
   *
   * If you request permissions using this key, then the browser may inform the user at install time that the extension is requesting certain privileges, and ask them to confirm that they are happy to grant these privileges.
   *
   * The key can contain three kinds of permissions:
   *  - host permissions: Specified as match patterns, and each pattern identifies a group of URLs for which the extension is requesting extra privileges. For example, a host permission could be "*://developer.mozilla.org/*".
   * - API permissions: Specified as keywords, and each keyword names a WebExtension API that the extension would like to use.
   * - activeTab: This permission is specified as "activeTab". If an extension has the activeTab permission, then when the user interacts with the extension, the extension is granted extra privileges for the active tab only.
   *
   * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions
   */
  permissions?: (
    | string
    | (
        | '<all_urls>'
        | 'activeTab'
        | 'alarms'
        | 'background'
        | 'bookmarks'
        | 'browserSettings'
        | 'browsingData'
        | 'captivePortal'
        | 'clipboardRead'
        | 'clipboardWrite'
        | 'contentSettings'
        | 'contextMenus'
        | 'contextualIdentities'
        | 'cookies'
        | 'debugger'
        | 'declarativeNetRequest'
        | 'declarativeNetRequestFeedback'
        | 'declarativeNetRequestWithHostAccess'
        | 'devtools '
        | 'dns'
        | 'downloads'
        | 'downloads.open'
        | 'find'
        | 'geolocation'
        | 'history'
        | 'identity'
        | 'idle'
        | 'management'
        | 'menus'
        | 'menus.overrideContext'
        | 'nativeMessaging'
        | 'notifications'
        | 'pageCapture'
        | 'pkcs11'
        | 'privacy'
        | 'proxy'
        | 'scripting'
        | 'search'
        | 'sessions'
        | 'storage'
        | 'tabHide'
        | 'tabs'
        | 'theme'
        | 'topSites'
        | 'unlimitedStorage'
        | 'webNavigation'
        | 'webRequest'
        | 'webRequestBlocking'
        | 'webRequestFilterResponse'
        | 'webRequestFilterResponse.serviceWorkerScript'
      )
  )[];
  /**
   * Use this key to register one or more web-based protocol handlers.
   *
   * A protocol handler is an application that knows how to handle particular types of links: for example, a mail client is a protocol handler for "mailto:" links. When the user clicks a "mailto:" link, the browser opens the application selected as the handler for the "mailto:" protocol (or offers them a choice of handlers, depending on their settings).
   *
   * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers
   */
  protocol_handlers?: ProtocolHandler[];
  /**
   * Short name for the extension. If given, this will be used in contexts where the name field is too long. It's recommended that the short name should not exceed 12 characters. If the short name field is not included in manifest.json, then name will be used instead and may be truncated.
   *
   * This is a localizable property.
   *
   * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/short_name
   */
  short_name?: string;
  sidebar_action?: SidebarPage;
  storage?: StoragePolicies;
  theme?: Theme;
  user_scripts?: UserScripts;
  /**
   * The version string for the extension.
   *
   * The version string consists of 1 to 4 numbers separated by dots, for example, 1.2.3.4. Non-zero numbers must not include a leading zero.
   *
   * Extension stores and browsers may enforce or warn if the version string doesn't comply with this format. They may also apply restrictions to the range of numbers available.
   *
   * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version
   */
  version: string;
  /**
   * In addition to the version field, which is used for update purposes, version_name can be set to a descriptive version string and will be used for display purposes if present.
   *
   * If no version_name is present, the version field will be used for display purposes as well.https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name
   */
  version_name?: string;
  web_accessible_resources?: Scripts;
  [k: string]: unknown | undefined;
}
/**
 * Use the background key to include one or more background scripts, a background page, or a Service worker in your extension.
 *
 * Background scripts are the place to put code that needs to maintain a long-term state or perform long-term operations independently of the lifetime of any particular web pages or browser windows.
 *
 * Background scripts are loaded as soon as the extension is loaded and stay loaded until the extension is disabled or uninstalled unless persistent is specified as false. You can use any WebExtension APIs in the script if you have requested the necessary permissions.
 *
 * See Background scripts for some more details.
 *
 * The background key is an object that must have one of these properties (for more information on how these properties are supported, see Browser support)
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background
 */
export interface BackgroundScriptInclusions {
  /**
   *  If you need specific content in the background page, you can define a page using the page property. This is a String representing a path relative to the manifest.json file to an HTML document included in your extension bundle.
   *
   * If you use this property, you can not specify background scripts using scripts, but you can include scripts from the page, just like a normal web page.
   */
  page?: string;
  /**
   *  An Array of Strings, each of which is a path to a JavaScript source. The path is relative to the manifest.json file itself. These are the scripts that are executed in the extension's background page.
   * The scripts share the same window global context.
   * The scripts are loaded in the order they appear in the array.
   * If you specify scripts, an empty page is created where your scripts run.
   * Note: If you want to fetch a script from a remote location with the <script> tag (e.g., <script src = "https://code.jquery.com/jquery-3.6.0.min.js">), you have to change the content_security_policy key in the manifest.json file of your extension.
   */
  scripts?: string[];
  /**
   * Specify a JavaScript file as the extension service worker. A service worker is a background script that acts as the extension's main event handler.
   */
  service_worker?: string;
  /**
   * If omitted, this property defaults to true in Manifest V2 and false in Manifest V3. Setting to true in Manifest V3 results in an error.
   *
   * `true` indicates the background page is to be kept in memory from when the extension is loaded or the browser starts until the extension is unloaded or disabled, or the browser is closed (that is, the background page is persistent).
   * `false` indicates the background page may be unloaded from memory when idle and recreated when needed. Such background pages are often called Event Pages, because they are loaded into memory to allow the background page to handle the events to which it has added listeners. Registration of listeners is persistent when the page is unloaded from memory, but other values are not persistent. If you want to store data persistently in an event page, then you should use the storage API.
   */
  persistent?: boolean;
  /**
   * Determines whether the scripts specified in "scripts" are loaded as ES modules.
   *
   * `classic` indicates the background scripts or service workers are not included as an ES Module.
   *
   * If omitted, this property defaults to classic.
   */
  type?: 'classic' | 'module';
}
/**
 * The browser_specific_settings key contains keys that are specific to a particular host application.
 */
export interface BrowserSpecificSettings {
  gecko?: GeckoSpecificSettings;
  gecko_android?: GeckoAndroidSpecificSettings;
  safari?: SafariSpecificSettings;
  [k: string]: unknown | undefined;
}
export interface GeckoSpecificSettings {
  /**
   * id is the extension ID
   */
  id?: string;
  /**
   * Link to an add-on update manifest. (Requires Gecko 45)
   */
  update_url?: string;
  [k: string]: unknown | undefined;
}
/**
 * When not defined, it falls back to `gecko`
 */
export interface GeckoAndroidSpecificSettings {
  /**
   * Minimum version of Gecko to support. If the Browser version on which the extension is being installed or run is below this version, the extension is not installed or not run. If not provided, all versions earlier than strict_max_version are supported. "*" is not valid in this field.
   *
   * See the list of valid Gecko versions: https://addons.mozilla.org/api/v5/applications/firefox/
   */
  strict_min_version?: string;
  /**
   * Maximum version of Gecko to support. If the Browser version on which the extension is being installed or run is above this version, the extension is not installed or not run. Defaults to "*", which disables checking for a maximum version.
   *
   * See the list of valid Gecko versions: https://addons.mozilla.org/api/v5/applications/firefox/
   */
  strict_max_version?: string;
  [k: string]: unknown | undefined;
}
/**
 * Specific for Safari and Safari on IOS
 */
export interface SafariSpecificSettings {
  /**
   * Minimum version of Gecko to support. If the Browser version on which the extension is being installed or run is below this version, the extension is not installed or not run. If not provided, all versions earlier than strict_max_version are supported. "*" is not valid in this field.
   *
   * See the list of valid Gecko versions: https://addons.mozilla.org/api/v5/applications/firefox/
   */
  strict_min_version?: string;
  /**
   * Maximum version of Gecko to support. If the Browser version on which the extension is being installed or run is above this version, the extension is not installed or not run. Defaults to "*", which disables checking for a maximum version.
   *
   * See the list of valid Gecko versions: https://addons.mozilla.org/api/v5/applications/firefox/
   */
  strict_max_version?: string;
  [k: string]: unknown | undefined;
}
/**
 * Use the chrome_settings_overrides key to override the browser's home page and add a new search engine.
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides
 */
export interface BrowserHomePage {
  /**
   * Defines the page to be used as the browser's homepage.
   *
   * The replacement is given as a URL. The URL may:
   * - point to a file bundled with the extension, in which case it is given as a URL relative to the manifest.json file
   * - be a remote URL, such as "https://developer.mozilla.org/".
   *
   * If two or more extensions both set this value, then the setting from the most recently installed one will take precedence.
   *
   * To override new tabs, use "chrome_url_overrides" instead.
   *
   * This is a localizable property.
   */
  homepage?: string;
  search_provider?: SearchProviders;
}
/**
 * Defines a search provider to add to the browser.
 *
 * In the URLs you supply, use "{searchTerms}" to interpolate the search term into the URL, like: https://www.discogs.com/search/?q={searchTerms}. You can also provide POST parameters to be sent along with the search.
 *
 * The search provider will be presented to the user alongside the built-in providers.
 *
 * All string properties are localizable.
 */
export interface SearchProviders {
  /**
   * The search engine's name, displayed to the user.
   */
  name: string;
  /**
   * URL used by the search engine. This must be an HTTPS URL.
   */
  search_url: string;
  /**
   * True if the search engine should be the default choice. On Firefox, this is opt-in and the user will only be asked the first time the extension is installed. They will not be asked again if a search engine is added later.
   */
  is_default?: boolean;
  /**
   * An array of alternative URLs that can be used instead of search_url.
   */
  alternate_urls?: string[];
  /**
   * Encoding of the search term, specified as a standard character encoding name, such as "UTF-8".
   */
  encoding?: string;
  /**
   * URL pointing to an icon for the search engine. This must be an absolute HTTP or HTTPS URL.
   */
  favicon_url?: string;
  /**
   * URL used for image search.
   */
  image_url?: string;
  /**
   * POST parameters to send to image_url.
   */
  image_url_post_params?: string;
  /**
   * URL used for instant search.
   */
  instant_url?: string;
  /**
   * POST parameters to send to instant_url.
   */
  instant_url_post_params?: string;
  /**
   * Address bar keyword for the search engine.
   */
  keyword?: string;
  /**
   * The ID of a built-in search engine to use.
   */
  prepopulated_id?: string;
  /**
   * POST parameters to send to search_url.
   */
  search_url_post_params?: string;
  /**
   * URL used for search suggestions. This must be an HTTPS URL.
   */
  suggest_url?: string;
  /**
   * POST parameters to send to suggest_url.
   */
  suggest_url_post_params?: string;
}
/**
 * Use the chrome_url_overrides key to provide a custom replacement for the documents loaded into various special pages usually provided by the browser itself.
 *
 * The replacements are given as a URL to an HTML file. The file must be bundled with the extension: you can't specify a remote URL here. You can specify it relative to the extension's root folder, like: "path/to/newtab.html".
 *
 * The document can load CSS and JavaScript, just like a normal web page. JavaScript running in the page gets access to the same privileged "browser.*" APIs as the extension's background script.
 *
 * If two or more extensions both define custom new tab pages, then the last one to be installed or enabled gets to use its value.
 *
 * All properties are localizable.
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides
 */
export interface CustomSpecialPages {
  /**
   * Provide a replacement for the page that shows the bookmarks.
   */
  bookmarks?: string;
  /**
   * Provide a replacement for the page that shows the browsing history.
   */
  history?: string;
  /**
   * Provide a replacement for the document that's shown in the "new tab" page
   */
  newtab?: string;
}
/**
 * Use the commands key to define one or more keyboard shortcuts for your extension.
 *
 * Each keyboard shortcut is defined with a name, a combination of keys, and a description. Once you've defined commands in your extension's manifest.json, you can listen for their associated key combinations with the commands JavaScript API.
 *
 * The properties' name is the name of the shortcut.
 *
 * There are these 4 special shortcuts with default actions for which the commands.onCommand event does not fire
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands
 */
export interface KeyboardShortcuts {
  _execute_browser_action?: Command;
  _execute_page_action?: Command1;
  _execute_sidebar_action?: Command2;
  [k: string]: Command3 | undefined;
}
/**
 * Works like a click on a toolbar button created with browserAction or specified in the browser_action key in the manifest.json key.
 */
export interface Command {
  /**
   * A description of the shortcut; i.e. what it does
   */
  description?: string;
  /**
   * The value of each property is the keyboard shortcut for the command on that platform, as a string containing keys separated by "+". The value for "default" is used on all platforms that are not explicitly listed.
   */
  suggested_key?: {
    default?: CommandShortcut;
    mac?: CommandShortcut;
    linux?: CommandShortcut;
    windows?: CommandShortcut;
    chromeos?: CommandShortcut;
    android?: CommandShortcut;
    ios?: CommandShortcut;
  };
}
/**
 * Works like a click on an address bar button created with pageAction or specified in the page_action key in the manifest.json key.
 */
export interface Command1 {
  /**
   * A description of the shortcut; i.e. what it does
   */
  description?: string;
  /**
   * The value of each property is the keyboard shortcut for the command on that platform, as a string containing keys separated by "+". The value for "default" is used on all platforms that are not explicitly listed.
   */
  suggested_key?: {
    default?: CommandShortcut;
    mac?: CommandShortcut;
    linux?: CommandShortcut;
    windows?: CommandShortcut;
    chromeos?: CommandShortcut;
    android?: CommandShortcut;
    ios?: CommandShortcut;
  };
}
/**
 * Opens the extension's sidebar specified in the sidebar_action manifest.json key.
 */
export interface Command2 {
  /**
   * A description of the shortcut; i.e. what it does
   */
  description?: string;
  /**
   * The value of each property is the keyboard shortcut for the command on that platform, as a string containing keys separated by "+". The value for "default" is used on all platforms that are not explicitly listed.
   */
  suggested_key?: {
    default?: CommandShortcut;
    mac?: CommandShortcut;
    linux?: CommandShortcut;
    windows?: CommandShortcut;
    chromeos?: CommandShortcut;
    android?: CommandShortcut;
    ios?: CommandShortcut;
  };
}
/**
 * A custom command
 */
export interface Command3 {
  /**
   * A description of the shortcut; i.e. what it does
   */
  description?: string;
  /**
   * The value of each property is the keyboard shortcut for the command on that platform, as a string containing keys separated by "+". The value for "default" is used on all platforms that are not explicitly listed.
   */
  suggested_key?: {
    default?: CommandShortcut;
    mac?: CommandShortcut;
    linux?: CommandShortcut;
    windows?: CommandShortcut;
    chromeos?: CommandShortcut;
    android?: CommandShortcut;
    ios?: CommandShortcut;
  };
}
export interface ContentScript {
  /**
   * Specifies which pages this content script will be injected into.<br>There are other optional keys including and excluding.<br>In summary: Match the `matches` property, AND match the `include_globs` property, if present, AND NOT match the `exclude_matches` property, if present, AND NOT match the `exclude_globs` property, if present
   *
   * @minItems 1
   */
  matches: [MatchPattern, ...MatchPattern[]];
  /**
   * Excludes pages that this content script would otherwise be injected into.
   */
  exclude_matches?: MatchPattern[];
  /**
   *  An array of paths, relative to manifest.json, referencing CSS files that will be injected into matching pages.<br>Files are injected in the order given, and at the time specified by run_at.<br>Note: Firefox resolves URLs in injected CSS files relative to the CSS file itself, rather than to the page it's injected into.
   */
  css?: string[];
  js?: Scripts;
  /**
   *  This option determines when the files specified in css and js are injected. You can supply one of three strings here, each of which identifies a state in the process of loading a document. The states directly correspond to Document.readyState:<br>"document_start": Corresponds to loading. The DOM is still loading.<br>"document_end": Corresponds to interactive. The DOM has finished loading, but resources such as scripts and images may still be loading.<br>"document_idle": Corresponds to complete. The document and all its resources have finished loading.
   */
  run_at?: 'document_start' | 'document_end' | 'document_idle';
  /**
   * `true`: Inject the scripts specified in `js` and `css` into all frames matching the specified URL requirements, even if the frame is not the topmost frame in a tab. This does not inject into child frames where only their parent matches the URL requirements and the child frame does not match the URL requirements. The URL requirements are checked for each frame independently.<br>Note: This also applies to any tracker or ad that uses iframes, which means that enabling this could make your content script get called dozens of times on some pages.<br><br>false`: Inject only into frames matching the URL requirements which are the topmost frame in a tab.
   */
  all_frames?: boolean;
  /**
   * Applied after matches to include only those URLs that also match this glob.
   */
  include_globs?: GlobPattern[];
  /**
   * Applied after matches to exclude URLs that match this glob.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#matching_url_patterns
   */
  exclude_globs?: GlobPattern[];
  /**
   *  Insert the content scripts into pages whose URL is "about:blank" or "about:srcdoc", if the URL of the page that opened or created this page matches the patterns specified in the rest of the content_scripts key.<br>This is especially useful to run scripts in empty iframes, whose URL is "about:blank". To do this you should also set the all_frames key.
   */
  match_about_blank?: boolean;
  /**
   * The JavaScript world the script executes in.<br>"ISOLATED": The default content scripts execution environment. This environment is isolated from the page's context: while they share the same document, the global scopes and available APIs differ.<br>"MAIN": The web page's execution environment. This environment is shared with the web page without isolation. Scripts in this environment don't have any access to the APIs that are only available to content scripts.<br><br>Warning: Due to the lack of isolation, the web page can detect and interfere with the executed code. Do not use the MAIN world unless it is acceptable for web pages to read, access, or modify the logic or data that flows through the executed code. world, and therefore "MAIN", is not supported in Firefox (although it is planned, and the work to introduce it is tracked by Bug 1736575). In the meantime, JavaScript code running in the isolated content script sandbox can use the Firefox "Xray vision" feature, as described in Share objects with page scripts.
   */
  world?: 'ISOLATED' | 'MAIN';
}
/**
 * Specify static rulesets for use with declarativeNetRequest.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request
 */
export interface DeclarativeNetRequestRulesets {
  /**
   * An array of rulesets
   */
  rule_resources: Ruleset[];
}
/**
 * Definition of a ruleset
 */
export interface Ruleset {
  /**
   * A non-empty string uniquely identifying the ruleset. IDs beginning with '_' are reserved for internal use.
   */
  id: string;
  /**
   * Whether the ruleset is enabled by default. The declarativeNetRequest.updateEnabledRulesets method can be used to enable or disable a ruleset at runtime.
   */
  enabled: boolean;
  /**
   * The path of the JSON ruleset relative to the extension directory. See the Rules section of the declarativeNetRequest API for information on the content of the ruleset JSON file.
   */
  path: string;
}
/**
 * The name of the extension's developer and their homepage URL, intended for display in the browser's user interface.<br>This object only allows for a single developer name and URL to be specified.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer
 */
export interface DeveloperInformation {
  /**
   * Overrides the `author` key
   */
  name?: string;
  /**
   * Overrides the `homepage_url` key
   */
  url?: string;
}
/**
 * The dictionaries key specifies the locale_code for which your extension supplies a dictionary (like `en-US`).<br>If you use the dictionaries key, you must also set an ID for your extension using the browser_specific_settings manifest.json key.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dictionaries
 */
export interface Localization {}
/**
 * Externally connectable controls which other extensions and web pages can communicate with an extension using runtime.connect() and runtime.sendMessage() message passing. If externally_connectable is not specified, all extensions can communicate with each other but not with web pages.<br><br>Note: For communication with web pages:<br>In Chrome, chrome.runtime.connect and chrome.runtime.sendMessage are used. These methods are only available when there is at least one extension listening for messages, see chrome.runtime will no longer be defined unconditionally in Chrome 106 for more details.<br>In Safari, browser.runtime.connect and browser.runtime.sendMessage are used.<br>In Firefox, neither API is supported. See Firefox bug 1319168.<br><br>https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable
 */
export interface ExternalExtensionAPI {
  /**
   * Enables communication between this extension and other installed extensions specified by extension identifiers. Use the pattern "*" to communicate with all extensions.
   */
  ids?: string[];
  /**
   * A list of regular expressions that enables communication between an extension and the web pages that match the expression.<br><br>Note: If `externally_connectable` is not specified, communication among extensions is allowed as if `externally_connectable` specified `{"ids": ["*"] }`. Therefore, if you specify `externally_connectable.matches`, don't forget to add `ids` if you want to communicate with other extensions.
   */
  matches?: string[];
}
/**
 * Use the omnibox key to define an omnibox keyword for your extension.
 *
 * When the user types this keyword into the browser's address bar, followed by a space, then any subsequent characters will be sent to the extension using the omnibox API. The extension will then be able to populate the address bar's drop-down suggestions list with its own suggestions.
 *
 * If two or more extensions define the same keyword, then the extension that was installed last gets to control the keyword. Any previously installed extensions that defined the same keyword will no longer be able to use the omnibox API.
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox
 */
export interface Keywords {
  /**
   * The keyword that will trigger your extension.
   */
  keyword: string;
}
/**
 * Use the options_ui key to define an options page for your extension.
 *
 * The options page contains settings for the extension. The user can access it from the browser's add-ons manager, and you can open it from within your extension using runtime.openOptionsPage().
 *
 * You specify options_ui as a path to an HTML file packaged with your extension. The HTML file can include CSS and JavaScript files, just like a normal web page. Unlike a normal page, though, the JavaScript can use all the WebExtension APIs that the extension has permissions for. However, it runs in a different scope than your background scripts.
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui
 */
export interface OptionsPage {
  /**
   * The path to an HTML file containing the specification of your options page.
   *
   * The path is relative to the location of manifest.json itself.
   */
  page: string;
  browser_style?: BrowserStyle;
  /**
   * If true, the options page will open in a normal browser tab, rather than being integrated into the browser's add-ons manager.
   */
  open_in_tab?: boolean;
}
/**
 * @deprecated
 * Do not set browser_style to true: its not support in Manifest V3 from Firefox 118. See Manifest V3 migration for browser_style.
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration
 */
export interface BrowserStyle {
  [k: string]: unknown | undefined;
}
/**
 * A page action is an icon that your extension adds inside the browser's URL bar.
 *
 * Your extension may optionally also supply an associated popup whose content is specified using HTML, CSS, and JavaScript.
 *
 * If you supply a popup, then the popup is opened when the user clicks the icon, and your JavaScript running in the popup can handle the user's interaction with it. If you don't supply a popup, then a click event is dispatched to your extension's background scripts when the user clicks the icon.
 *
 * Page actions are like browser actions, except that they are associated with particular web pages rather than with the browser as a whole. If an action is only relevant on certain pages, then you should use a page action and display it only on relevant pages. If an action is relevant to all pages or to the browser itself, use a browser action.
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action
 */
export interface PagePopup {
  /**
   * Hide the page action by default for pages whose URLs match any of the given match patterns.
   *
   * Note that page actions are always hidden by default unless show_matches is given. Therefore, it only makes sense to include this property if show_matches is also given, and will override the patterns in show_matches.
   */
  hide_matches?: MatchPatternStrict[];
  /**
   * Show the page action by default for pages whose URLs match any of the given patterns.
   */
  show_matches?: MatchPattern[];
  /**
   * Controls whether or not the page action should appear in the location bar by default when the user installs the extension.
   */
  pinned?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * A protocol handler specification
 */
export interface ProtocolHandler {
  /**
   * A string defining the protocol. It can either be one of the predefined protocols, or a custom name prefixed with "web+" or "ext+". For example: "web+foo" or "ext+foo". The custom name must consist only of lower-case ASCII characters. It's recommended that extensions use the "ext+" form.
   */
  protocol:
    | string
    | (
        | 'bitcoin'
        | 'dat'
        | 'dweb'
        | 'ftp'
        | 'geo'
        | 'gopher'
        | 'im'
        | 'ipfs'
        | 'ipns'
        | 'irc'
        | 'ircs'
        | 'magnet'
        | 'mailto'
        | 'matrix'
        | 'mms'
        | 'news'
        | 'nntp'
        | 'sip'
        | 'sms'
        | 'smsto'
        | 'ssb'
        | 'ssh'
        | 'tel'
        | 'urn'
        | 'webcal'
        | 'wtai'
        | 'xmpp'
      );
  /**
   * A string representing the name of the protocol handler. This will be displayed to the user when they are being asked if they want this handler to open the link.
   */
  name: string;
  /**
   * A string representing the URL of the handler. This string must include "%s" as a placeholder: this will be replaced with the escaped URL of the document to be handled. This URL might be a true URL, or it could be a phone number, email address, or so forth. This is a localizable property.
   */
  uriTemplate: {
    [k: string]: unknown | undefined;
  };
}
/**
 * A sidebar is a pane that is displayed at the left-hand side of the browser window, next to the web page. The browser provides a UI that enables the user to see the currently available sidebars and to select a sidebar to display.
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action
 */
export interface SidebarPage {
  default_icon?: Icon;
  /**
   * The path to an HTML file that specifies the sidebar's contents.
   *
   * Unlike a normal web page, JavaScript running in the panel can access all the WebExtension APIs (subject, of course, to the extension having the appropriate permissions).
   *
   * This is a localizable property.
   */
  default_panel: string;
  /**
   *  Title for the sidebar. This is used in the browser UI for listing and opening sidebars, and is displayed at the top of the sidebar when it is open.
   *
   * This property is optional: if it is omitted, the sidebar's title is the extension's name.
   *
   * This is a localizable property.
   */
  default_title?: string;
  /**
   * Determines whether the sidebar should open on install. The default behavior is to open the sidebar when installation is completed.
   */
  open_at_install?: boolean;
  browser_style?: BrowserStyle;
}
/**
 * Use the storage key to specify the name of the schema file that defines the structure of data in managed storage.
 *
 * Managed data declares the enterprise policies supported by the app. Policies are analogous to options but are configured by a system administrator instead of the user, enabling the app to be configured for all users of an organization.
 *
 * After declaring the policies, they are read from the storage.managed API. However, if a policy value does not conform to the schema, then it is not published by the storage.managed API. It's up to the app to enforce the policies configured by the administrator.
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage
 */
export interface StoragePolicies {
  /**
   * The full path of the file within the extension that defines the schema of the manage storage.
   */
  managed_schema: string;
}
/**
 * Use the theme key to define a static theme to apply to Firefox.
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme
 */
export interface Theme {
  images?: Images;
  colors?: Colors;
  properties?: Properties;
}
/**
 * Represents the images to display in various parts of the browser.
 */
export interface Images {
  /**
   * The URL of a foreground image to be added to the header area and anchored to the upper right corner of the header area.
   */
  theme_frame?: string;
  /**
   * An array of URLs for additional background images to be added to the header area and displayed behind the "theme_frame": image. These images layer the first image in the array on top, the last image in the array at the bottom.
   */
  additional_backgrounds?: string[];
}
/**
 * Represents the colors of various parts of the browser.
 *
 * These properties define the colors used for different parts of the browser. How these properties affect the Firefox UI can be seen at https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme#colors.
 *
 * All these properties can be specified as either a string containing any valid CSS color string including hexadecimal (see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value), or an RGB array
 *
 * Note: Where a component is affected by multiple color properties, the properties are listed in order of precedence.
 */
export interface Colors {
  /**
   * The color of text and icons in the bookmark and find bars. Also, if tab_text isn't defined it sets the color of the active tab text and if icons isn't defined the color of the toolbar icons. Provided as Chrome compatible alias for toolbar_text.
   */
  bookmark_text?: string | [number, number, number];
  /**
   * The color of the background of the pressed toolbar buttons.
   */
  button_background_active?: string | [number, number, number];
  /**
   * The color of the background of the toolbar buttons on hover.
   */
  button_background_hover?: string | [number, number, number];
  /**
   * The color of toolbar icons, excluding those in the find toolbar.
   */
  icons?: string | [number, number, number];
  /**
   * The color of toolbar icons in attention state such as the starred bookmark icon or finished download icon.
   */
  icons_attention?: string | [number, number, number];
  /**
   * The color of the header area background, displayed in the part of the header not covered or visible through the images specified in "theme_frame" and "additional_backgrounds".
   */
  frame?: string | [number, number, number];
  /**
   * The color of the header area background when the browser window is inactive, displayed in the part of the header not covered or visible through the images specified in "theme_frame" and "additional_backgrounds".
   */
  frame_inactive?: string | [number, number, number];
  /**
   * The new tab page background color.
   */
  ntp_background?: string | [number, number, number];
  /**
   * The new tab page card background color.
   */
  ntp_card_background?: string | [number, number, number];
  /**
   * The new tab page text color.
   */
  ntp_text?: string | [number, number, number];
  /**
   * The background color of popups (such as the URL bar dropdown and the arrow panels).
   */
  popup?: string | [number, number, number];
  /**
   * The border color of popups.
   */
  popup_border?: string | [number, number, number];
  /**
   * The background color of items highlighted using the keyboard inside popups (such as the selected URL bar dropdown item).
   */
  popup_highlight?: string | [number, number, number];
  /**
   * The text color of items highlighted inside popups.
   */
  popup_highlight_text?: string | [number, number, number];
  /**
   * The text color of popups.
   */
  popup_text?: string | [number, number, number];
  /**
   * The background color of the sidebar.
   */
  sidebar?: string | [number, number, number];
  /**
   * The border and splitter color of the browser sidebar
   */
  sidebar_border?: string | [number, number, number];
  /**
   * The background color of highlighted rows in built-in sidebars
   */
  sidebar_highlight?: string | [number, number, number];
  /**
   * The text color of highlighted rows in sidebars.
   */
  sidebar_highlight_text?: string | [number, number, number];
  /**
   * The text color of sidebars.
   */
  sidebar_text?: string | [number, number, number];
  /**
   * The color of the vertical separator of the background tabs.
   *
   * DEPRECATED
   */
  tab_background_separator?: string | [number, number, number];
  /**
   * The color of the text displayed in the inactive page tabs. If tab_text or bookmark_text isn't specified, applies to the active tab text.
   */
  tab_background_text?: string | [number, number, number];
  /**
   * The color of the selected tab line.
   */
  tab_line?: string | [number, number, number];
  /**
   * The color of the tab loading indicator and the tab loading burst.
   */
  tab_loading?: string | [number, number, number];
  /**
   * The background color of the selected tab. When not in use selected tab color is set by frame and the frame_inactive.
   */
  tab_selected?: string | [number, number, number];
  /**
   * Represents the text color for the selected tab. If tab_line isn't specified, it also defines the color of the selected tab line.
   */
  tab_text?: string | [number, number, number];
  /**
   * The background color for the navigation bar, the bookmarks bar, and the selected tab.
   *
   * This also sets the background color of the "Find" bar.
   */
  toolbar?: string | [number, number, number];
  /**
   * The color of the line separating the bottom of the toolbar from the region below.
   */
  toolbar_bottom_separator?: string | [number, number, number];
  /**
   * The background color for fields in the toolbar, such as the URL bar.
   *
   * This also sets the background color of the Find in page field.
   */
  toolbar_field?: string | [number, number, number];
  /**
   * The border color for fields in the toolbar.
   *
   * This also sets the border color of the Find in page field.
   */
  toolbar_field_border?: string | [number, number, number];
  /**
   * The focused border color for fields in the toolbar.
   */
  toolbar_field_border_focus?: string | [number, number, number];
  /**
   * The focused background color for fields in the toolbar, such as the URL bar.
   */
  toolbar_field_focus?: string | [number, number, number];
  /**
   * The background color used to indicate the current selection of text in the URL bar (and the search bar, if it's configured to be separate).
   */
  toolbar_field_highlight?: string | [number, number, number];
  /**
   * The color used to draw text that's currently selected in the URL bar (and the search bar, if it's configured to be separate box).
   */
  toolbar_field_highlight_text?: string | [number, number, number];
  /**
   * The color of separators inside the URL bar. In Firefox 58 this was implemented as toolbar_vertical_separator.
   *
   * DEPRECATED
   */
  toolbar_field_separator?: string | [number, number, number];
  /**
   * The color of text in fields in the toolbar, such as the URL bar. This also sets the color of text in the Find in page field.
   */
  toolbar_field_text?: string | [number, number, number];
  /**
   * The color of text in focused fields in the toolbar, such as the URL bar.
   */
  toolbar_field_text_focus?: string | [number, number, number];
  /**
   * The color of toolbar text. This also sets the color of text in the "Find" bar.
   */
  toolbar_text?: string | [number, number, number];
  /**
   * The color of the line separating the top of the toolbar from the region above.
   */
  toolbar_top_separator?: string | [number, number, number];
  /**
   * The color of the separator in the bookmarks toolbar.
   */
  toolbar_vertical_separator?: string | [number, number, number];
}
/**
 * Affects how the "additional_backgrounds" images are displayed and color schemes are applied.
 */
export interface Properties {
  /**
   * An array of enumeration values defining the alignment of the corresponding "additional_backgrounds": array item.
   */
  additional_backgrounds_alignment?: (
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top'
    | 'center bottom'
    | 'center center'
    | 'center top'
    | 'left bottom'
    | 'left center'
    | 'left top'
    | 'right bottom'
    | 'right center'
    | 'right top'
  )[];
  /**
   * Defines how the corresponding "additional_backgrounds": array item repeats.
   */
  additional_backgrounds_tiling?: ('no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y')[];
  /**
   * Determines which color scheme is applied to the chrome (for example, context menus) and content (for example, built-in pages and the preferred color scheme for web pages).
   */
  color_scheme?: ('auto' | 'light' | 'dark' | 'system')[];
  /**
   * Determines which color scheme is applied to the content (for example, built-in pages and preferred color scheme for web pages). Overrides color_scheme.
   */
  content_color_scheme?: ('auto' | 'light' | 'dark' | 'system')[];
}
/**
 * Instructs the browser to load a script packaged in the extension, known as the API script, this script is used to export a set of custom API methods for use in user scripts.
 *
 * Note: The user_script key is required for the userScripts API to function, even if no API script is specified.
 *
 * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts
 */
export interface UserScripts {
  /**
   * The API script:
   * - runs in the content processes.
   * - has access to the window and document globals related to the webpage it is attached to.
   * - has access to the same subset of WebExtension APIs usually available in a content script.
   *
   * The script executes automatically on any webpage defined in matches by userScripts.register. However, this is before the user script sandbox object is created and the custom API methods can be exported.
   *
   * To export the custom API methods, the script listens for userScripts.onBeforeScript and then export the custom API methods.
   *
   * Not every user script may need to consume all of the custom API methods. You can, therefore, include details of the APIs needed in scriptMetadata when running userScripts.register. The API script then accesses the scriptMetadata through the script parameter received by the userScripts.onBeforeScript listener (as script.metadata).
   */
  api_script?: string;
}
