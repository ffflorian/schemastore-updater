/* eslint-disable */

/**
 * An object hash containing an `items` array and optionally a `config` object
 */
export interface ConfigurationForTheNPMPackageBadges {
  /**
   * Array of badges. Use "---" to denote a separation.
   */
  list?: (
    | '---'
    | 'npmversion'
    | 'npmdownloads'
    | 'daviddm'
    | 'daviddmdev'
    | 'nodeico'
    | 'saucelabsbm'
    | 'saucelabs'
    | 'travisci'
    | 'githubworkflow'
    | 'codeship'
    | 'coveralls'
    | 'codeclimate'
    | 'bithound'
    | 'waffle'
    | 'sixtydevstips'
    | 'patreon'
    | 'opencollective'
    | 'gratipay'
    | 'flattr'
    | 'paypal'
    | 'bitcoin'
    | 'wishlist'
    | 'slackinscript'
    | 'slackin'
    | 'gabeacon'
    | 'googleplusone'
    | 'redditsubmit'
    | 'hackernewssubmit'
    | 'facebooklike'
    | 'facebookfollow'
    | 'twittertweet'
    | 'twitterfollow'
    | 'githubfollow'
    | 'githubstar'
    | 'quorafollow'
  )[];
  /**
   * Configuration object
   */
  config?: {
    /**
     * The npm package name
     */
    npmPackageName?: string;
    /**
     * The username of the SauceLabs account
     */
    saucelabsUsername?: string;
    /**
     * SauceLabs auth token, should probably not be used.
     * Use `SAUCELABS_AUTH_TOKEN` env var instead.
     */
    saucelabsAuthToken?: string;
    /**
     * The TLD to use for Travis CI. Use "com" if you have moved to travis-ci.com
     */
    travisTLD?: string;
    /**
     * The UUID for the project, available in the General tab of your project setting.
     */
    codeshipProjectUUID?: string;
    /**
     * The ID for the project, available in the URL for the codeship project.
     */
    codeshipProjectID?: string;
    /**
     * The Github slug of the project (e.g., SchemaStore/schemastore)
     */
    githubSlug?: string;
    /**
     * The name or location of the workflow file to show the badge for.
     */
    githubWorkflow?: string;
    /**
     * The branch to constrain the badge to.
     */
    githubBranch?: string;
    /**
     * The event to constrain the badge to.
     */
    githubEvent?: string;
    /**
     * Either a query string as a string, or an object containing the options.
     *
     * See https://nodei.co for details
     */
    nodeicoQueryString?:
      | string
      | {
          compact?: true;
          mini?: true;
          downloads?: true;
          downloadRank?: true;
          stars?: true;
          months?: number;
          height?: 1 | 2 | 3;
        };
    /**
     * The 60devs username to donate to.
     */
    sixtydevstipsID?: string;
    /**
     * The URL to the 60devs donate page.
     */
    sixtydevstipsURL?: string;
    /**
     * The Patreon username to donate to.
     */
    patreonUsername?: string;
    /**
     * The URL to the Patreon donate page.
     */
    patreonURL?: string;
    /**
     * The Open Collective username to donate to.
     */
    opencollectiveUsername?: string;
    /**
     * The URL to the Open Collective donate page.
     */
    opencollectiveURL?: string;
    gratipayUsername?: string;
    flattrUsername?: string;
    paypalURL?: string;
    paypalButtonID?: string;
    paypalUsername?: string;
    bitcoinURL?: string;
    wishlistURL?: string;
    slackinURL?: string;
    gaTrackingID?: string;
    /**
     * The home page URL
     */
    homepage?: string;
    facebookApplicationID?: string;
    facebookUsername?: string;
    /**
     * The twitter username to tweet at
     */
    twitterUsername?: string;
    /**
     * The Github username to use
     */
    githubUsername?: string;
    quoraUsername?: string;
    quoraRealname?: string;
  };
}
