/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * <head> resources block the page from rendering while your code executes.
 *
 * @minItems 1
 */
export type JavaScriptAndCSSFilesIncludedInTheHeadOfASite = [Resource, ...Resource[]];
export type WhichHTMLElementYourResourceShouldBeInsertedAs = "script" | "style";
/**
 * This should be relative to the root of the project e.g. "./source/app.js"
 * . Declared options may interpolate option keys in the path. e.g. ./path/{{options.optionName}}/file.ext. This allows you to include different files based on the options set by the customer.
 */
export type NixStylePathToYourResource = string;
/**
 * Specify that a resource should be conditionally included. Prefix the option’s name with a ! to invert the match.
 */
export type ConditionallyIncludeResource = string;
/**
 * <body> resources load and execute asynchronously. This is useful if your code should allow the page to render first.
 *
 * @minItems 1
 */
export type JavaScriptAndCSSFilesIncludedInTheBodyOfTheSite = [Resource, ...Resource[]];
/**
 * Preview resources can be used for local hook events, allowing your app to modify the install record e.g. fetching an API key with an OAuth token, then storing the key on an option.
 *
 * @minItems 1
 */
export type AlphaJavaScriptFilesExecutedInTheInstallPreview = [
  {
    src?: NixStylePathToYourResource;
  },
  ...{
    src?: NixStylePathToYourResource;
  }[]
];
export type TheOptionsSectionIsAnArrayOfPropertyKeysWhichThisHandlerShouldApplyToWhenAnyOfThoseOptionsAreChangedDuringAPreviewThisHandlerWillBeTriggeredAGivenPropertyMayHaveMultipleHandlersOptionsCanAlsoBeHandledUsingSpecialKeysDefaultTriggerWhenAnyPropertyThatHasnTYetBeenHandledByAMoreSpecificEntryChangesAnyTriggerWhenAnyPropertyChangesRegardlessOfAnyOtherEntryProductTriggerWhenTheCustomerChangesTheirChosenProduct =
  string[];
export type AFunctionToExecuteWhenAMatchingOptionHasChangedThisFunctionShouldBeDefinedInYourAppSJavaScriptEGWindowINSTALL_SCOPEUpdateOptionsNextOptions =
  string;
export type DeclarationsForEachGroupOfMatchingOptionsAndTheirExecutingFunctionMultipleUpdateHandlersAreUsefulWhenAnAppHasOptionsThatHaveDifferentUpdatingProcedures =
  {
    options?: TheOptionsSectionIsAnArrayOfPropertyKeysWhichThisHandlerShouldApplyToWhenAnyOfThoseOptionsAreChangedDuringAPreviewThisHandlerWillBeTriggeredAGivenPropertyMayHaveMultipleHandlersOptionsCanAlsoBeHandledUsingSpecialKeysDefaultTriggerWhenAnyPropertyThatHasnTYetBeenHandledByAMoreSpecificEntryChangesAnyTriggerWhenAnyPropertyChangesRegardlessOfAnyOtherEntryProductTriggerWhenTheCustomerChangesTheirChosenProduct;
    execute?: AFunctionToExecuteWhenAMatchingOptionHasChangedThisFunctionShouldBeDefinedInYourAppSJavaScriptEGWindowINSTALL_SCOPEUpdateOptionsNextOptions;
    [k: string]: unknown | undefined;
  }[];
/**
 * Some apps don't add anything visually to the site they're being installed upon. Showing a preview when nothing visually on the site has changed can be confusing to the customer, leading them to think your app is broken.
 * Often it still makes sense to embed a message on the previewed page to explain to the customer what is being installed and how it works. For example, if you are building an analytics tool you could take the customer through a tour of the types of things which would be measured.
 * If you can't find such an opportunity however, you can disable the preview to prevent any confusion.
 */
export type HideThePreviewPane = boolean;
export type URLToAServerHandlingThePOSTRequestTriggeredFromTheEvent = string;
/**
 * Unlike most other WebHook implementations, Cloudflare hooks allow you to modify the elements you are being notified about. For example, you might choose to show a new option when the customer has selected a specific entry in one of your option's dropdowns. You may also wish to use the hooks feature to support OAuth-based login in your app.
 */
export type ShowALoadingIndicatorUntilYourResponseHasBeenLoadedYourChangesWillBeIgnoredIfYouDoNotSetThisProperty =
  boolean;
export type EventName = string;
export type EventNamesThatTriggerAHookEvent = EventName[];
export type AStringMatchingAnotherDefinedOptionKey = string;
/**
 * This option should contain:
 * 	{"type": "object", "format": "account"}
 */
export type MatchingOptionKeysOfOAuthAccountFields = AStringMatchingAnotherDefinedOptionKey[];
/**
 * A Cloudflare hook is similar to other WebHooks, the key difference being that Cloudflare hooks are two-way: you can alter the install with your response. Hook events includes information about the customer, their site, and the action that triggered it.
 * Hook events can be handled with preview resources, or by an external server configured as a "service". You can optionally respond with changes we should make to that customer's installation experience.
 */
export type HookDeclarations = {
  endpoint?: URLToAServerHandlingThePOSTRequestTriggeredFromTheEvent;
  block?: ShowALoadingIndicatorUntilYourResponseHasBeenLoadedYourChangesWillBeIgnoredIfYouDoNotSetThisProperty;
  events?: EventNamesThatTriggerAHookEvent;
  authenticate?: MatchingOptionKeysOfOAuthAccountFields;
  [k: string]: unknown | undefined;
}[];
/**
 * For example sub for sub.example.com max length: 255
 */
export type NameOfTheDNSRecord = string;
/**
 * Varies depending on the record type.
 */
export type ContentOfTheDNSRecord = string;
/**
 * valid values: A, AAAA, CNAME, TXT, SRV, LOC, MX, NS, SPF, CERT, DNSKEY, DS, NAPTR, SMIMEA, SSHFP, TLSA, URI
 */
export type TypeOfTheDNSRecord = string;
/**
 * Whether the record is receiving the performance and security benefits of Cloudflare.
 */
export type EventNamesThatTriggerAHookEvent1 = boolean;
/**
 * Used with some records like MX and SRV to determine priority.
 */
export type Priority = number;
/**
 * Time to live for DNS record.
 */
export type MatchingOptionKeysOfOAuthAccountFields1 = number & string;
/**
 * Cloudflare DNS record to be created upon installing a Cloudflare App. Note all other records previously created by the app on the site will be removed. Following the Cloudflare API https://api.cloudflare.com/#dns-records-for-a-zone-create-dns-record.
 */
export type DNSRecordDeclarations = {
  name?: NameOfTheDNSRecord;
  content?: ContentOfTheDNSRecord;
  type?: TypeOfTheDNSRecord;
  proxied?: EventNamesThatTriggerAHookEvent1;
  priority?: Priority;
  ttl?: MatchingOptionKeysOfOAuthAccountFields1;
  /**
   * Metadata about the record.
   */
  data?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}[];
/**
 * Cloudflare workers declarations to be installed through an app onto a site.
 */
export type CloudflareWorkers = {
  src?: NixStylePathToYourResource;
  [k: string]: unknown | undefined;
}[];
/**
 * The key should be camelCased.
 */
export type TheKeyWhichYourOptionWillBeDefinedUnder =
  | {
      [k: string]: unknown | undefined;
    }
  | undefined;

export interface JSONSchemaForConfiguringCloudflareAppsInstallJsonFiles {
  resources?: FilesIncludedInYourAppToBeInsertedOntoHTMLPages;
  preview?: ConfigurationOfTheInstallerPreviewExperience;
  hooks?: HookDeclarations;
  dns?: DNSRecordDeclarations;
  workers?: CloudflareWorkers;
  options?: AParentObjectContainingYourAppSInstallOptions;
  [k: string]: unknown | undefined;
}
/**
 * Each resource should be unminified and human-readable.
 */
export interface FilesIncludedInYourAppToBeInsertedOntoHTMLPages {
  head?: JavaScriptAndCSSFilesIncludedInTheHeadOfASite;
  body?: JavaScriptAndCSSFilesIncludedInTheBodyOfTheSite;
  preview?: AlphaJavaScriptFilesExecutedInTheInstallPreview;
}
export interface Resource {
  type?: WhichHTMLElementYourResourceShouldBeInsertedAs;
  src?: NixStylePathToYourResource;
  if?: ConditionallyIncludeResource;
  [k: string]: unknown | undefined;
}
/**
 * Preview options can be used to declare handlers that execute after an event has been triggered.
 */
export interface ConfigurationOfTheInstallerPreviewExperience {
  handlers?: DeclarationsForEachGroupOfMatchingOptionsAndTheirExecutingFunctionMultipleUpdateHandlersAreUsefulWhenAnAppHasOptionsThatHaveDifferentUpdatingProcedures;
  hide?: HideThePreviewPane;
  [k: string]: unknown | undefined;
}
/**
 * Must contain a "properties" object.
 */
export interface AParentObjectContainingYourAppSInstallOptions {
  properties: AnObjectContainingYourAppSInstallOptions;
  [k: string]: unknown | undefined;
}
/**
 * Each declaration will appear in your app's installer for end-user customization. Their choices will accessible in your app's JavaScript resources as the constant `INSTALL_OPTIONS`.
 */
export interface AnObjectContainingYourAppSInstallOptions {
  [k: string]: TheKeyWhichYourOptionWillBeDefinedUnder | undefined;
}
