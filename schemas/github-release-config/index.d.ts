/* eslint-disable */

export interface GitHubAutomaticallyGeneratedReleaseNotesConfig {
  changelog?: {
    exclude?: {
      /**
       * A list of labels that exclude a pull request from appearing in release notes
       */
      labels?: string[];
      /**
       * A list of user or bot login handles whose pull requests are to be excluded from release notes
       */
      authors?: string[];
    };
    categories?: {
      /**
       * The title of a category of changes in release notes
       */
      title: string;
      /**
       * Labels that qualify a pull request for this category. Use * as a catch-all for pull requests that didn't match any of the previous categories
       */
      labels: string[];
      exclude?: {
        /**
         * A list of labels that exclude a pull request from appearing in this category
         */
        labels?: string[];
        /**
         * A list of user or bot login handles whose pull requests are to be excluded from this category
         */
        authors?: string[];
      };
      [k: string]: unknown | undefined;
    }[];
  };
  [k: string]: unknown | undefined;
}
