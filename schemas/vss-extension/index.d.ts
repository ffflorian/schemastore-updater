/* eslint-disable */

/**
 * This should be 1.
 */
export type ANumberCorrespondingToTheVersionOfTheManifestFormat = 1;
/**
 * This is a string that must be unique among extensions from the same publisher.
 */
export type TheExtensionSIdentifier = IdPattern & string;
/**
 * Should be in the format major.minor.patch, for example 0.1.2 or 1.0.0. You can also add a fourth number for the following format: 0.1.2.3
 */
export type AStringSpecifyingTheVersionOfAnExtension = string;
export type AShortHumanReadableNameOfTheExtensionLimitedTo200Characters = string;
/**
 * This identifier must match the identifier the extension is published under.
 */
export type TheIdentifierOfThePublisher = string;
/**
 * At least one category must be provided and there is no limit to how many categories you may include.
 */
export type ArrayOfStringsRepresentingTheCategoriesYourExtensionBelongsTo = (
  'Azure Repos' | 'Azure Boards' | 'Azure Pipelines' | 'Azure Test Plans' | 'Azure Artifacts'
)[];
/**
 * Id of the product or service which your integration/extension should support
 */
export type InstallationTargetsHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsInstallationTargets =
  | 'Microsoft.VisualStudio.Services'
  | 'Microsoft.TeamFoundation.Server'
  | 'Microsoft.VisualStudio.Services.Integration'
  | 'Microsoft.TeamFoundation.Server.Integration'
  | 'Microsoft.VisualStudio.Services.Cloud'
  | 'Microsoft.VisualStudio.Services.Cloud.Integration';
/**
 * Some installation target identifiers, like and , support an optional version range. This further clarifies the supported releases the extension or integration is supported on.Microsoft.TeamFoundation.ServerMicrosoft.TeamFoundation.Server.Integration
 */
export type InstallationTargetVersionsHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsInstallationTargets =
  string;
export type TheProductsAndServicesSupportedByYourIntegrationOrExtension = {
  id: InstallationTargetsHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsInstallationTargets;
  version?: InstallationTargetVersionsHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsInstallationTargets;
  [k: string]: unknown | undefined;
}[];
/**
 * Authorization Scope.
 */
export type ValidValuesHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsScopes =
  | 'vso.acquisition_write'
  | 'vso.agentpools'
  | 'vso.agentpools_listen'
  | 'vso.agentpools_manage'
  | 'vso.analytics'
  | 'vso.auditlog'
  | 'vso.base'
  | 'vso.build'
  | 'vso.build_execute'
  | 'vso.build_fork'
  | 'vso.code'
  | 'vso.code_full'
  | 'vso.code_manage'
  | 'vso.code_status'
  | 'vso.code_write'
  | 'vso.commerce.write'
  | 'vso.connected_server'
  | 'vso.dashboards'
  | 'vso.dashboards_manage'
  | 'vso.entitlements'
  | 'vso.extension'
  | 'vso.extension.data'
  | 'vso.extension.data_write'
  | 'vso.extension.default'
  | 'vso.extension_manage'
  | 'vso.features'
  | 'vso.features_write'
  | 'vso.gallery'
  | 'vso.gallery_acquire'
  | 'vso.gallery_manage'
  | 'vso.gallery_publish'
  | 'vso.governance_manage'
  | 'vso.graph'
  | 'vso.graph_manage'
  | 'vso.graph_write'
  | 'vso.hooks'
  | 'vso.hooks_interact'
  | 'vso.hooks_write'
  | 'vso.identity'
  | 'vso.identity_manage'
  | 'vso.licensing'
  | 'vso.loadtest'
  | 'vso.loadtest_write'
  | 'vso.machinegroup_manage'
  | 'vso.memberentitlementmanagement'
  | 'vso.memberentitlementmanagement_write'
  | 'vso.notification'
  | 'vso.notification_diagnostics'
  | 'vso.notification_manage'
  | 'vso.notification_publish'
  | 'vso.notification_write'
  | 'vso.packaging'
  | 'vso.packaging_manage'
  | 'vso.packaging_write'
  | 'vso.profile'
  | 'vso.profile_write'
  | 'vso.project'
  | 'vso.project_manage'
  | 'vso.project_write'
  | 'vso.release'
  | 'vso.release_execute'
  | 'vso.release_logs'
  | 'vso.release_manage'
  | 'vso.security_manage'
  | 'vso.serviceendpoint'
  | 'vso.serviceendpoint_manage'
  | 'vso.serviceendpoint_query'
  | 'vso.settings'
  | 'vso.settings_write'
  | 'vso.symbols'
  | 'vso.symbols_manage'
  | 'vso.symbols_write'
  | 'vso.taskgroups_manage'
  | 'vso.taskgroups_read'
  | 'vso.taskgroups_write'
  | 'vso.test'
  | 'vso.test_write'
  | 'vso.tokenadministration'
  | 'vso.tokens'
  | 'vso.variablegroups_manage'
  | 'vso.variablegroups_read'
  | 'vso.variablegroups_write'
  | 'vso.wiki'
  | 'vso.wiki_write'
  | 'vso.work'
  | 'vso.work_full'
  | 'vso.work_write';
/**
 * An array of authorization scopes (strings) listing permissions required by your extension.
 */
export type AuthorizationScopesRequiredByYourExtension =
  ValidValuesHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsScopes[];
/**
 * Demand Scope.
 */
export type ValidValuesHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsDemands = DemandPattern &
  string;
/**
 * An array of demands (strings) listing the capabilities required by your extension.
 */
export type CapabilitiesRequiredByYourExtension =
  ValidValuesHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsDemands[];
/**
 * (Optional) base URL for all relative URLs specified by the extension's contributions.
 */
export type ThisPropertyShouldBeLeftEmptyIfYourExtensionSContentsArePackagedWithYourExtension = string;
export type AFewSentencesDescribingTheExtension = string;
/**
 * The value must be the path to the icon file in the extension
 */
export type X128PixelsOfTypeBMPGIFEXIFJPGPNGAndTIFF = string;
/**
 * The path of each item is the path to the file in the extension.
 */
export type EachImageShouldBe1366X768Pixels = string;
/**
 * Array of images that could not be included in your **content*.
 */
export type ScreenshotsAreMoreValuableWhenFeaturedInYourContentAndShouldBeUsedThereToHelpMakeAQualityMarketDetailsPageForYourExtensionUseScreenshotsForLessImportantImagesNotFeaturedInYourContent =
  AnImageThatCouldNotBeIncludedInYourContent[];
/**
 * GitHub Flavored Markdown file which describes the details of the Extension
 */
export type ExtensionDetailsGitHubFlavoredMarkdownFile = ContentDefinition;
export type ValidFilePathInTheExtension = string;
/**
 * GitHub Flavored Markdown file which describes the license information of the Extension
 */
export type ExtensionLicenseInformationGitHubFlavoredMarkdownFile = ContentDefinition;
/**
 * GitHub Flavored Markdown file which describes the pricing information of the Extension
 */
export type ExtensionPricingInformationGitHubFlavoredMarkdownFile = ContentDefinition;
/**
 * First steps, how to setup or use.
 */
export type GetStartedDocumentationGitHubFlavoredMarkdownFile = LinkDefinition;
/**
 * Deeper content to help users better understand your extension or service.
 */
export type LearningDocumentationGitHubFlavoredMarkdownFile = LinkDefinition;
/**
 * End user license agreement.
 */
export type LicenseDocumentationGitHubFlavoredMarkdownFile = LinkDefinition;
/**
 * Privacy policy for an extension.
 */
export type PrivacyPolicyGitHubFlavoredMarkdownFile = LinkDefinition;
/**
 * Get help and support for an extension.
 */
export type SupportInformationGitHubFlavoredMarkdownFile = LinkDefinition;
export type TypeOfTheRepository = 'git' | 'mercurial' | 'svn' | 'cvs';
export type AbsoluteURIOfTheRepository = string;
export type DescriptionOfTheBadgeToBeDisplayedOnHover = string;
/**
 * Array of links to external metadata badges like TravisCI, Appveyor etc from the approved badges sites.
 */
export type ApprovedBadgeSitesHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestApprovedbadges =
  BadgeInformation[];
/**
 * Items: A file you wish to include in your extension. Both folders and individual files are acceptable
 */
export type TheFilesSectionIsWhereYouReferenceAnyFilesYouWishToIncludeInYourExtensionYouCanAddBothFoldersAndIndividualFiles =
  {
    /**
     * Path of resource, root directory is where your manifest file is located
     */
    path: string;
    /**
     * Set to true if you want your file to be URL-addressable
     */
    addressable?: boolean;
    /**
     * Places your resource from disk to the specified value when packaged
     */
    packagePath?: string;
    [k: string]: unknown | undefined;
  }[];
/**
 * A reference ID (string) for the contribution. Each contribution's ID must be unique within an extension.
 */
export type ReferencingContributionsAndTypesHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsContributionIds =
  string;
/**
 * Contribution IDs that the contribution is targeting.
 */
export type TargetingContributionsHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsTargetingContributions1 =
  string;
/**
 * An array of contribution IDs that the contribution is targeting (contributing to).
 */
export type TargetingContributionsHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsTargetingContributions =
  TargetingContributionsHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsTargetingContributions1[];
/**
 * Valid Values: https://docs.microsoft.com/en-us/azure/devops/extend/develop/public-project?view=azure-devops#contribution-visibility
 */
export type ContributionVisibilityByDefaultContributionsAreOnlyVisibleToOrganizationMembersToGiveNonMemberUsersVisibilityToAContributionSetTheRestrictedToAttributeOnThatContributionTheValueIsAStringArrayThatListsWhichTypesOfUsersShouldHaveVisibilityToTheContribution1 =
  'member' | 'public' | 'anonymous';
/**
 * Valid Values: https://docs.microsoft.com/en-us/azure/devops/extend/develop/public-project?view=azure-devops#contribution-visibility
 */
export type ContributionVisibilityByDefaultContributionsAreOnlyVisibleToOrganizationMembersToGiveNonMemberUsersVisibilityToAContributionSetTheRestrictedToAttributeOnThatContributionTheValueIsAStringArrayThatListsWhichTypesOfUsersShouldHaveVisibilityToTheContribution =
  ContributionVisibilityByDefaultContributionsAreOnlyVisibleToOrganizationMembersToGiveNonMemberUsersVisibilityToAContributionSetTheRestrictedToAttributeOnThatContributionTheValueIsAStringArrayThatListsWhichTypesOfUsersShouldHaveVisibilityToTheContribution1[];
export type AnArrayOfContributionsToTheSystem = ContributionDefinition[];
export type AnArrayOfContributionTypesDefinedByTheExtension = ContributionTypeDefinition[];

export interface JSONSchemaForAzureDevOpsExtensions {
  manifestVersion: ANumberCorrespondingToTheVersionOfTheManifestFormat;
  id: TheExtensionSIdentifier;
  version: AStringSpecifyingTheVersionOfAnExtension;
  name: AShortHumanReadableNameOfTheExtensionLimitedTo200Characters;
  publisher: TheIdentifierOfThePublisher;
  categories: ArrayOfStringsRepresentingTheCategoriesYourExtensionBelongsTo;
  targets: TheProductsAndServicesSupportedByYourIntegrationOrExtension;
  scopes?: AuthorizationScopesRequiredByYourExtension;
  demands?: CapabilitiesRequiredByYourExtension;
  baseUri?: ThisPropertyShouldBeLeftEmptyIfYourExtensionSContentsArePackagedWithYourExtension;
  description?: AFewSentencesDescribingTheExtension;
  /**
   * Dictionary of icons representing the extension.
   */
  icons?: {
    default: X128PixelsOfTypeBMPGIFEXIFJPGPNGAndTIFF;
    [k: string]: unknown | undefined;
  };
  /**
   * Array of string tags to help users find your extension.
   *
   * @minItems 1
   *
   * Items: A tag to help users find your extension.
   */
  tags?: [string, ...string[]];
  /**
   * Array of string tags to classify your extension within the Visual Studio Marketplace
   *
   * @minItems 1
   *
   * Items: A string tag to classify your extension within the Visual Studio Marketplace
   */
  galleryFlags?: ['Paid' | 'Preview' | 'Public', ...('Paid' | 'Preview' | 'Public')[]];
  /**
   * More information: https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#mark-an-extension-as-paid
   */
  licensing?: {
    [k: string]: unknown | undefined;
  };
  /**
   * More information: https://docs.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops#mark-an-extension-as-paid
   */
  galleryproperties?: {
    [k: string]: unknown | undefined;
  };
  screenshots?: ScreenshotsAreMoreValuableWhenFeaturedInYourContentAndShouldBeUsedThereToHelpMakeAQualityMarketDetailsPageForYourExtensionUseScreenshotsForLessImportantImagesNotFeaturedInYourContent;
  content?: DictionaryOfContentFilesThatDescribeYourExtensionToUsers;
  links?: DictionaryOfLinksThatHelpUsersLearnMoreAboutYourExtensionGetSupportAndMove;
  repository?: TheSourceCodeRepositoryForTheExtension;
  badges?: ApprovedBadgeSitesHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestApprovedbadges;
  /**
   * Dictionary of brand-related properties.
   */
  branding?: {
    /**
     * Primary color of the extension or publisher; can be a hex (#ff00ff), RGB (rgb(100,200,50)), or supported HTML color names (blue).
     */
    color: string;
    /**
     * Complements the color; use dark for dark branding colors, or light for lighter branding colors.
     */
    theme?: 'light' | 'dark';
    [k: string]: unknown | undefined;
  };
  /**
   * Set to true to make this extension public in the Visual Studio Market Place
   */
  public?: boolean;
  files?: TheFilesSectionIsWhereYouReferenceAnyFilesYouWishToIncludeInYourExtensionYouCanAddBothFoldersAndIndividualFiles;
  contributions?: AnArrayOfContributionsToTheSystem;
  contributionTypes?: AnArrayOfContributionTypesDefinedByTheExtension;
  [k: string]: unknown | undefined;
}
export interface IdPattern {
  [k: string]: unknown | undefined;
}
export interface DemandPattern {
  [k: string]: unknown | undefined;
}
/**
 * Each image should be 1366x768 pixels.
 */
export interface AnImageThatCouldNotBeIncludedInYourContent {
  path: EachImageShouldBe1366X768Pixels;
  [k: string]: unknown | undefined;
}
export interface DictionaryOfContentFilesThatDescribeYourExtensionToUsers {
  details: ExtensionDetailsGitHubFlavoredMarkdownFile;
  license?: ExtensionLicenseInformationGitHubFlavoredMarkdownFile;
  pricing?: ExtensionPricingInformationGitHubFlavoredMarkdownFile;
  [k: string]: unknown | undefined;
}
export interface ContentDefinition {
  path: ValidFilePathInTheExtension;
  [k: string]: unknown | undefined;
}
export interface DictionaryOfLinksThatHelpUsersLearnMoreAboutYourExtensionGetSupportAndMove {
  getstarted?: GetStartedDocumentationGitHubFlavoredMarkdownFile;
  learn?: LearningDocumentationGitHubFlavoredMarkdownFile;
  license?: LicenseDocumentationGitHubFlavoredMarkdownFile;
  privacypolicy?: PrivacyPolicyGitHubFlavoredMarkdownFile;
  support?: SupportInformationGitHubFlavoredMarkdownFile;
  [k: string]: unknown | undefined;
}
export interface LinkDefinition {
  /**
   * Valid URI
   */
  uri: string;
  [k: string]: unknown | undefined;
}
export interface TheSourceCodeRepositoryForTheExtension {
  type: TypeOfTheRepository;
  uri: AbsoluteURIOfTheRepository;
  [k: string]: unknown | undefined;
}
export interface BadgeInformation {
  /**
   * Link the user navigates to when clicking the badge.
   */
  href: string;
  /**
   * The absolute URL of the badge image to be displayed.
   */
  uri: string;
  description?: DescriptionOfTheBadgeToBeDisplayedOnHover;
  [k: string]: unknown | undefined;
}
/**
 * A contribution that is part of this extension
 */
export interface ContributionDefinition {
  id: ReferencingContributionsAndTypesHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsContributionIds;
  /**
   * The ID of the contributionType of this contribution.
   */
  type: string;
  /**
   * (Optional) A string describing what the contribution is providing.
   */
  description?: string;
  targets: TargetingContributionsHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsTargetingContributions;
  restrictedTo?: ContributionVisibilityByDefaultContributionsAreOnlyVisibleToOrganizationMembersToGiveNonMemberUsersVisibilityToAContributionSetTheRestrictedToAttributeOnThatContributionTheValueIsAStringArrayThatListsWhichTypesOfUsersShouldHaveVisibilityToTheContribution;
  properties?: ForMoreInformationSeeTheContributionModelOverviewHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopContributionsOverviewViewAzureDevops;
  [k: string]: unknown | undefined;
}
/**
 * (Optional) An object that includes properties for the contribution as defined in the contribution type.
 */
export interface ForMoreInformationSeeTheContributionModelOverviewHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopContributionsOverviewViewAzureDevops {
  [k: string]: unknown | undefined;
}
/**
 * A contribution Type that is part of this extension
 */
export interface ContributionTypeDefinition {
  id: ReferencingContributionsAndTypesHttpsDocsMicrosoftComEnUsAzureDevopsExtendDevelopManifestViewAzureDevopsContributionIds;
  /**
   * The friendly name of the contribution type.
   */
  name: string;
  /**
   * (Optional) A string describing in more detail what the contribution type is for.
   */
  description?: string;
  /**
   * (Optional) A dictionary that maps property names to property descriptions. These properties describe the required and optional properties that can be used by contributions of this type.
   *
   * Items: Information about the contributionType Property
   */
  properties?: {
    /**
     * The type of value that the property can have.
     */
    type: 'string' | 'uri' | 'guid' | 'boolean' | 'integer' | 'double' | 'dateTime' | 'array' | 'object';
    /**
     * (Optional) A boolean value which if true indicates that the property is required for all contributions of this type.
     */
    required?: boolean;
    /**
     * (Optional) A string describing what the property is used for.
     */
    description?: string;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
