/* eslint-disable */

/**
 * Project name on CommunityBridge.
 */
export type LFXMentorshipFormerlyCommunityBridge = string;
/**
 * You can add one organization and up to four sponsored developers.
 */
export type GitHubSponsors =
  | string
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string];
/**
 * Username on IssueHunt.
 */
export type IssueHunt = string;
/**
 * Username on Ko-fi.
 */
export type KoFi = string;
/**
 * Username on Liberapay.
 */
export type Liberapay = string;
/**
 * Username on Open Collective.
 */
export type OpenCollective = string;
/**
 * Username on Patreon.
 */
export type Patreon = string;
/**
 * Platform and package on Tidelift, following the format `PLATFORM-NAME/PACKAGE-NAME`.
 */
export type Tidelift = string;
/**
 * Username on Polar.
 */
export type Polar = string;
/**
 * Username on Buy Me a Coffee.
 */
export type BuyMeACoffee = string;
/**
 * Maintainer profile on thanks.dev
 */
export type ThanksDev = string;
/**
 * Link or links where funding is accepted on external locations.
 */
export type CustomURLOrURLS =
  | string
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string];

/**
 * You can add a sponsor button in your repository to increase the visibility of funding options for your open source project.
 */
export interface GitHubFunding {
  community_bridge?: LFXMentorshipFormerlyCommunityBridge;
  github?: GitHubSponsors;
  issuehunt?: IssueHunt;
  ko_fi?: KoFi;
  liberapay?: Liberapay;
  open_collective?: OpenCollective;
  patreon?: Patreon;
  tidelift?: Tidelift;
  polar?: Polar;
  buy_me_a_coffee?: BuyMeACoffee;
  thanks_dev?: ThanksDev;
  custom?: CustomURLOrURLS;
}
