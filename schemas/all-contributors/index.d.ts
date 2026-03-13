/* eslint-disable */

export type NameOfTheProject = string;
export type NameOfTheUserTheProjectIsHostedBy = string;
export type TypeOfRepository = 'github' | 'gitlab';
/**
 * Change it if you use a self-hosted repository.
 * Default: https://github.com if repoType is github, and https://gitlab.com if repoType is gitlab
 */
export type PointsToTheRepositoryHostname = string;
export type ArrayOfFilesToUpdate = string[];
export type SizeInPxOfTheUserSAvatar = number;
export type AutoCommitBadgeWhenAddingContributors = boolean;
export type CommitConvention = 'angular' | 'atom' | 'ember' | 'eslint' | 'jshint' | 'gitmoji' | 'none';
export type MaximumNumberOfColumnsForTheContributorsTable = number;
export type TrueSortAlphabeticallyFalseDisplayInOrderOfAddition = boolean;
export type YourOwnLodashTemplateToGenerateTheBadge = string;
export type YourOwnLodashTemplateToGenerateTheContributor = string;
export type SymbolToUseForTheContributionType = string;
export type DescriptionOfTheContributionType = string;
export type LinkToUseForTheContributionType = string;
export type AddsAFooterWithLinkToUsage = boolean;
export type MakesTheCIIgnoreTheCommit = boolean;
export type GithubUsernameOfTheContributor = string;
export type NameOfTheContributor = string;
export type URLOfTheContributorSAvatar = string;
export type URLOfTheContributorSProfilePageOrWebsite = string;
/**
 * @minItems 1
 */
export type ArrayOfContributionsMadeByTheContributor = [
  (
    | (
        | 'a11y'
        | 'audio'
        | 'blog'
        | 'bug'
        | 'business'
        | 'code'
        | 'content'
        | 'data'
        | 'design'
        | 'doc'
        | 'eventOrganizing'
        | 'example'
        | 'financial'
        | 'fundingFinding'
        | 'ideas'
        | 'infra'
        | 'maintenance'
        | 'mentoring'
        | 'platform'
        | 'plugin'
        | 'projectManagement'
        | 'promotion'
        | 'question'
        | 'research'
        | 'review'
        | 'security'
        | 'talk'
        | 'test'
        | 'tool'
        | 'translation'
        | 'tutorial'
        | 'userTesting'
        | 'video'
      )
    | string
  ),
  ...(
    | (
        | 'a11y'
        | 'audio'
        | 'blog'
        | 'bug'
        | 'business'
        | 'code'
        | 'content'
        | 'data'
        | 'design'
        | 'doc'
        | 'eventOrganizing'
        | 'example'
        | 'financial'
        | 'fundingFinding'
        | 'ideas'
        | 'infra'
        | 'maintenance'
        | 'mentoring'
        | 'platform'
        | 'plugin'
        | 'projectManagement'
        | 'promotion'
        | 'question'
        | 'research'
        | 'review'
        | 'security'
        | 'talk'
        | 'test'
        | 'tool'
        | 'translation'
        | 'tutorial'
        | 'userTesting'
        | 'video'
      )
    | string
  )[]
];
export type ListOfContributorsForThisProject = {
  login: GithubUsernameOfTheContributor;
  name: NameOfTheContributor;
  avatar_url: URLOfTheContributorSAvatar;
  profile: URLOfTheContributorSProfilePageOrWebsite;
  contributions: ArrayOfContributionsMadeByTheContributor;
}[];

/**
 * The configuration file used by the All Contributors CLI and GitHub bot.
 * https://allcontributors.org/docs/en/bot/configuration
 */
export interface AllContributorsConfigurationFile {
  projectName: NameOfTheProject;
  projectOwner: NameOfTheUserTheProjectIsHostedBy;
  repoType?: TypeOfRepository;
  repoHost?: PointsToTheRepositoryHostname;
  files?: ArrayOfFilesToUpdate;
  imageSize?: SizeInPxOfTheUserSAvatar;
  commit?: AutoCommitBadgeWhenAddingContributors;
  commitConvention?: CommitConvention;
  /**
   * UNDOCUMENTED: Sets Conventional Commits commit type to be used by the all contributors bot. See https://www.conventionalcommits.org.
   */
  commitType?: string;
  contributorsPerLine?: MaximumNumberOfColumnsForTheContributorsTable;
  contributorsSortAlphabetically?: TrueSortAlphabeticallyFalseDisplayInOrderOfAddition;
  badgeTemplate?: YourOwnLodashTemplateToGenerateTheBadge;
  contributorTemplate?: YourOwnLodashTemplateToGenerateTheContributor;
  types?: CustomSymbolsOrLinkTemplatesForContributionTypesCanOverrideTheDocumentedTypes;
  linkToUsage?: AddsAFooterWithLinkToUsage;
  skipCi?: MakesTheCIIgnoreTheCommit;
  contributors?: ListOfContributorsForThisProject;
}
export interface CustomSymbolsOrLinkTemplatesForContributionTypesCanOverrideTheDocumentedTypes {
  [k: string]:
    | {
        symbol?: SymbolToUseForTheContributionType;
        description?: DescriptionOfTheContributionType;
        link?: LinkToUseForTheContributionType;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
