/* eslint-disable */

/**
 * <head> resources block the page from rendering while your code executes.
 *
 * @minItems 1
 */
export type JavaScriptAndCSSFilesIncludedInTheHeadOfASite = [Resource, ...Resource[]];
export type WhichHTMLElementYourResourceShouldBeInsertedAs = 'script' | 'style';
/**
 * This should be relative to the root of the project e.g. "./source/app.js"
 * . Declared options may interpolate option keys in the path. e.g. ./path/{{options.optionName}}/file.ext. This allows you to include different files based on the options set by the customer.
 */
export type NixStylePathToYourResource = string;
/**
 * Specify that a resource should be conditionally included. Prefix the option's name with a ! to invert the match.
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
export type TheKeyWhichYourOptionWillBeDefinedUnder = {
  [k: string]: unknown | undefined;
} & {
  title?: TheTitleRelatedToYourFormField;
  description?: TheDescriptionWhichAppearsNextToYourFormField;
  helpvalue?: ExtraInstructionsOrContextToTheInstallProcess;
  services?: ServiceAlias;
  showIf?: ConditionallyShowAField;
  required?: RequireField;
  enum?: DeclareAListOfValuesToSelectFrom;
  enumNames?: DeclareHumanReadableNames;
  order: TheOrderTheOptionAppearsInTheInstallForm;
  properties?: AnObjectContainingYourAppSInstallOptions;
  maxItems?: SpecifyTheMaxNumberOfEntriesInAnArrayObject;
  minimum?: TheMinimumNumberAllowedInTheField;
  maximum?: TheMaximumNumberAllowedInTheField;
  step?: DeclareTheIncrementOfASliderUsedWithTypeNumberFormatSlider;
  products?: LimitThisOptionToASetOfEligibleProducts;
  units?: DeclareWhichUnitsTheInstallerCanChooseUsedWithTypeObjectFormatNumber;
  type: DeclaresTheTypeThisOptionWillUseInYourAppSINSTALL_OPTIONSConstant;
  placeholder?: AValueThatDescribesWhatShouldBeProvidedInTheFormField;
  default?: ADefaultValueThatAppearsTheFormField;
  format?: TheFormatYourInputWillAppearAsInTheInstallForm;
  add?: AddItemButtonDeclaration;
  items?: DeclarationsForEachItemInAnArray;
  [k: string]: unknown | undefined;
};
/**
 * Each word should be capitalized.
 */
export type TheTitleRelatedToYourFormField = string;
/**
 * This should be omitted unless the field needs further detail. Descriptions often pose a question e.g. "Where should the button appear on your site?"
 * Supports sanitized HTML. External links should be used sparingly e.g.
 * 	<a target="_blank" href="https://example.com">External Link</a>
 */
export type TheDescriptionWhichAppearsNextToYourFormField = string;
/**
 * Unlike every other option type, this doesn't collect any input nor set any value on the INSTALL_OPTIONS object.
 * **This should be used sparingly.** If you believe your install option needs more context, consider separating the installation flow in to more steps, or move this content into the app configuration page "Additional Install Instructions" field.
 */
export type ExtraInstructionsOrContextToTheInstallProcess = string;
/**
 * An string alias defined in the Cloudflare service creator.
 * https://www.cloudflare.com/apps/services/new
 *
 * @minItems 1
 * @maxItems 1
 */
export type ServiceAlias = [string];
/**
 * The `showIf` property can accept a boolean option property key:
 *
 *
 * 	"showIf": "optionName"
 *
 * An object with a property key, operator, and expected value can also be used for more complex matching:
 * 	"showIf": {"optionName": {"op": "==", "value": "foo"}}
 * The showIf property can also accept multiple criteria, all of which must be matched for the field to be visible.
 * You can also use `showIf` to show options based on the current product the customer has elected to purchase:
 * 	"showIf": {"INSTALL_PRODUCT.id": "business"}
 */
export type ConditionallyShowAField =
  | string
  | {
      [k: string]: AStringMatchingAnotherDefinedOptionKeyOrINSTALL_PRODUCTId | undefined;
    };
export type JavaScriptOperator = '==' | '!=' | '<' | '>' | '<=' | '>=';
export type ExpectedValue = string | number | null;
export type RequireField = boolean;
/**
 * Presented as a <select> element with enum strings as <option>s.
 * Declare "enumNames" for human-readable names
 * Declare "format": "radios" for radio buttons.
 */
export type DeclareAListOfValuesToSelectFrom = string[];
/**
 * Note that JavaScript does **not** retain the order of keys in an object. This property must be added to ensure your options are rendered in the right order.
 */
export type TheOrderTheOptionAppearsInTheInstallForm = number;
export type SpecifyTheMaxNumberOfEntriesInAnArrayObject = number;
export type TheMinimumNumberAllowedInTheField = number;
export type TheMaximumNumberAllowedInTheField = number;
export type DeclareTheIncrementOfASliderUsedWithTypeNumberFormatSlider = number;
/**
 * Most option types can be limited to a set of eligible products with an array of qualifying product IDs:
 * 	{"products": ["pro", "enterprise"]}
 * Radio options can be limited to specific products with products. Much like `enumNames`, each key in the object is a string from the enum array. However the value is an array containing a string `productId` for each eligible product:
 * 	"{enumNames":{
 * 	"announcement": "Just show a message",
 * 	"cta": "Redirect them to a special page",
 * 	"signup": "Gather emails to sign visitors up for your newsletter"
 * 	},
 * 	"products": {
 * 	"cta": ["plus", "pro"],
 * 	"signup": ["pro"]
 * 	}
 */
export type LimitThisOptionToASetOfEligibleProducts =
  | AnArrayContainingAProductIdForEachEligibleProduct[]
  | {
      [k: string]: unknown[] | undefined;
    };
export type AnArrayContainingAProductIdForEachEligibleProduct = string;
/**
 * Presented as a floating-point number input and unit selector. This is useful when a customer has to set a specific size on an element.
 */
export type DeclareWhichUnitsTheInstallerCanChooseUsedWithTypeObjectFormatNumber = string[];
export type DeclaresTheTypeThisOptionWillUseInYourAppSINSTALL_OPTIONSConstant =
  'array' | 'boolean' | 'help' | 'hidden' | 'integer' | 'number' | 'object' | 'string';
/**
 * Many developers duplicate the placeholder content as a default text in their app. This allows customers to always have sane default labels that can be overridden for localization. If this proves cumbersome, we recommend importing the install.json contents into your app JavaScript with Webpack.
 */
export type AValueThatDescribesWhatShouldBeProvidedInTheFormField = string;
/**
 * Used with the "selector" and "element" formats.
 */
export type CSSSelectorMatchingAnElementOnThePage = string;
/**
 * `INSTALL` provides a method, `createElement`, which can turn this resulting object into a new element on the page in the specified location. To use it, pass the value of the element option into the method.
 */
export type TheInsertionStrategyUsedByINSTALLCreateElementOptionNamePreviousElement =
  'before' | 'after' | 'prepend' | 'replace';
export type TheFormatYourInputWillAppearAsInTheInstallForm =
  | 'account'
  | 'code'
  | 'color'
  | 'date-time'
  | 'date'
  | 'element'
  | 'email'
  | 'image'
  | 'number'
  | 'page'
  | 'radios'
  | 'richtext'
  | 'selector'
  | 'slider'
  | 'textarea'
  | 'time'
  | 'url';
export type ButtonLabel = string;

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
export interface AStringMatchingAnotherDefinedOptionKeyOrINSTALL_PRODUCTId {
  op?: JavaScriptOperator;
  value?: ExpectedValue;
}
/**
 * Used with "enum"
 */
export interface DeclareHumanReadableNames {
  [k: string]: string | undefined;
}
/**
 * Ensure that your app renders correctly without the default value. Alternatively, use a "placeholder" property.
 */
export interface ADefaultValueThatAppearsTheFormField {
  selector?: CSSSelectorMatchingAnElementOnThePage;
  method?: TheInsertionStrategyUsedByINSTALLCreateElementOptionNamePreviousElement;
  [k: string]: unknown | undefined;
}
export interface AddItemButtonDeclaration {
  description?: ModalDescription;
  properties?: AnObjectContainingYourAppSInstallOptions;
  buttonLabel?: ButtonLabel;
  [k: string]: unknown | undefined;
}
export interface ModalDescription {
  [k: string]: unknown | undefined;
}
/**
 * Used with {"type": "array"}. Must have "properties" key.
 */
export interface DeclarationsForEachItemInAnArray {
  properties?: AnObjectContainingYourAppSInstallOptions;
  [k: string]: unknown | undefined;
}
