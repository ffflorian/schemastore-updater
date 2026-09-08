/* eslint-disable */

export type File =
  | {
      /**
       * The file to import content from
       */
      from_file?: string;
      [k: string]: unknown | undefined;
    }
  | string;

export interface HttpsJsonSchemastoreOrgCtfdJson {
  appearance: Appearance;
  theme?: Theme;
  accounts?: Accounts;
  challenges?: Challenges;
  pages?: Pages;
  major_league_cyber?: MajorLeagueCyber;
  settings?: Settings;
  security?: Security;
  email?: Email;
  time?: Time;
  social?: Social;
  legal?: Legal;
  admin: Admin;
  /**
   * The mode of your CTFd, either users or teams
   */
  mode?: 'users' | 'teams';
  uploads?: Upload[];
}
/**
 * Appearance of the CTFd
 */
export interface Appearance {
  /**
   * The name of your CTF, displayed as is
   */
  name: string;
  /**
   * The description of your CTF, displayed as is
   */
  description: string;
  /**
   * The default language for the users
   */
  default_locale?: string;
}
/**
 * Theme displayed to end-users
 */
export interface Theme {
  /**
   * The frontend logo
   */
  logo?:
    | {
        /**
         * The file to import content from
         */
        from_file?: string;
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * The frontend small icon
   */
  small_icon?:
    | {
        /**
         * The file to import content from
         */
        from_file?: string;
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * The frontend theme name
   */
  name?: string;
  /**
   * The frontend theme color
   */
  color?: string;
  /**
   * The frontend header
   */
  header?:
    | {
        /**
         * The file to import content from
         */
        from_file?: string;
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * The frontend footer
   */
  footer?:
    | {
        /**
         * The file to import content from
         */
        from_file?: string;
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * The frontend settings (JSON)
   */
  settings?:
    | {
        /**
         * The file to import content from
         */
        from_file?: string;
        [k: string]: unknown | undefined;
      }
    | string;
}
/**
 * Accounts parameters, like rate limiting or default permissions
 */
export interface Accounts {
  /**
   * The domain whitelist (a list separated by colons) to allow users to have email addresses from
   */
  domain_whitelist?: string;
  /**
   * The domain blacklist (a list separated by colons) to blocks users to have email addresses from
   */
  domain_blacklist?: string;
  /**
   * Whether to verify emails once a user register or not
   */
  verify_emails?: boolean;
  /**
   * Whether to allow team creation by players or not
   */
  team_creation?: boolean;
  /**
   * Maximum size (number of players) in a team
   */
  team_size?: number;
  /**
   * Minimal length of passwords
   */
  password_min_length?: number;
  /**
   * The total number of teams allowed
   */
  num_teams?: number;
  /**
   * The total number of users allowed
   */
  num_users?: number;
  /**
   * Whether to allow teams to be disbanded or not. Could be inactive_only or disabled
   */
  team_disbanding?: string;
  /**
   * Maximum number of invalid submissions per minute (per user/team). We suggest you use it as part of an anti-brute-force strategy (rate limiting)
   */
  incorrect_submissions_per_minute?: number;
  /**
   * Whether a user can change its name or not
   */
  name_changes?: boolean;
}
/**
 * Challenge-related configurations
 */
export interface Challenges {
  /**
   * Whether a player can see itw own previous submissions
   */
  view_self_submissions: boolean;
  /**
   * The behavior to adopt in case a player reached the submission rate limiting
   */
  max_attempts_behavior: 'lockout' | 'timeout';
  /**
   * The duration of the submission rate limit for further submissions
   */
  max_attempts_timeout: number;
  /**
   * Control whether users must be logged in to see free hints
   */
  hints_free_public_access: boolean;
  /**
   * Who can see and submit challenge ratings
   */
  challenge_ratings: 'public' | 'private' | 'disabled';
}
/**
 * Pages global configuration
 */
export interface Pages {
  /**
   * Define the /robots.txt file content, for web crawlers indexing
   */
  robots_txt?:
    | {
        /**
         * The file to import content from
         */
        from_file?: string;
        [k: string]: unknown | undefined;
      }
    | string;
  additional?: Page[];
}
/**
 * Page to configure and display on the CTFd
 */
export interface Page {
  /**
   * Title of the page
   */
  title: string;
  /**
   * Route to serve
   */
  route: string;
  /**
   * Format to consume the content
   */
  format?: 'markdown' | 'html';
  /**
   * The page content. If you need to use images, please use an external CDN to make sure the content is replicable
   */
  content:
    | {
        /**
         * The file to import content from
         */
        from_file?: string;
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * Set the page as a draft
   */
  draft?: boolean;
  /**
   * Hide or show the page to users
   */
  hidden?: boolean;
  /**
   * Configure whether the page require authentication or not
   */
  auth_required?: boolean;
}
/**
 * MajorLeagueCyber credentials to register the CTF
 */
export interface MajorLeagueCyber {
  /**
   * The MajorLeagueCyber OAuth ClientID
   */
  client_id?: string;
  /**
   * The MajorLeagueCyber OAuth Client Secret
   */
  client_secret?: string;
}
/**
 * Settings for resources visibility
 */
export interface Settings {
  /**
   * The visibility for the challenges. Please refer to CTFd documentation (https://docs.ctfd.io/docs/settings/visibility-settings/)
   */
  challenge_visibility?: 'public' | 'private' | 'admins';
  /**
   * The visibility for the accounts. Please refer to CTFd documentation (https://docs.ctfd.io/docs/settings/visibility-settings/)
   */
  account_visibility?: 'public' | 'private' | 'admins';
  /**
   * The visibility for the scoreboard. Please refer to CTFd documentation (https://docs.ctfd.io/docs/settings/visibility-settings/)
   */
  score_visibility?: 'public' | 'private' | 'admins';
  /**
   * The visibility for the registration. Please refer to CTFd documentation (https://docs.ctfd.io/docs/settings/visibility-settings/)
   */
  registration_visibility?: 'public' | 'private' | 'admins';
  /**
   * Whether the CTFd is paused or not
   */
  paused?: boolean;
}
/**
 * Security of contents and accesses
 */
export interface Security {
  /**
   * Whether to turn on HTML sanitization or not
   */
  html_sanitization?: boolean;
  /**
   * The registration code (secret) to join the CTF
   */
  registration_code?: string;
}
/**
 * Email rules and server credentials
 */
export interface Email {
  registration: EmailContent;
  confirmation: EmailContent1;
  new_account: EmailContent2;
  password_reset: EmailContent3;
  password_reset_confirmation: EmailContent4;
  /**
   * The 'From:' to sent to mail with
   */
  from?: string;
  /**
   * The mail server to use
   */
  server?: string;
  /**
   * The mail server port to reach
   */
  port?: string;
  /**
   * The username to log in to the mail server
   */
  username?: string;
  /**
   * The password to log in to the mail server
   */
  password?: string;
  /**
   * Whether to turn on TLS/SSL or not
   */
  tls_ssl?: boolean;
  /**
   * Whether to turn on STARTTLS or not
   */
  starttls?: boolean;
}
/**
 * The registration email
 */
export interface EmailContent {
  /**
   * Subject of the email
   */
  subject?: string;
  /**
   * Body (or content) or the email
   */
  body?: string;
}
/**
 * The confirmation email
 */
export interface EmailContent1 {
  /**
   * Subject of the email
   */
  subject?: string;
  /**
   * Body (or content) or the email
   */
  body?: string;
}
/**
 * The new account email
 */
export interface EmailContent2 {
  /**
   * Subject of the email
   */
  subject?: string;
  /**
   * Body (or content) or the email
   */
  body?: string;
}
/**
 * The password reset email
 */
export interface EmailContent3 {
  /**
   * Subject of the email
   */
  subject?: string;
  /**
   * Body (or content) or the email
   */
  body?: string;
}
/**
 * The password reset confirmation email
 */
export interface EmailContent4 {
  /**
   * Subject of the email
   */
  subject?: string;
  /**
   * Body (or content) or the email
   */
  body?: string;
}
/**
 * Time settings of the CTF
 */
export interface Time {
  /**
   * The start timestamp at which the CTFd will open
   */
  start?: string;
  /**
   * The end timestamp at which the CTFd will close
   */
  end?: string;
  /**
   * The freeze timestamp at which the CTFd will remain open but won't accept any further submissions
   */
  freeze?: string;
  /**
   * Whether allows users to view challenges after end or not
   */
  view_after?: boolean;
}
/**
 * Social network configuration
 */
export interface Social {
  /**
   * Whether to enable users share they solved a challenge or not
   */
  shares?: boolean;
  /**
   * A template for social shares
   */
  template?:
    | {
        /**
         * The file to import content from
         */
        from_file?: string;
        [k: string]: unknown | undefined;
      }
    | string;
}
/**
 * Legal contents for players
 */
export interface Legal {
  tos: ExternalReference;
  privacy_policy: ExternalReference1;
}
/**
 * The Terms of Services
 */
export interface ExternalReference {
  /**
   * The URL to access the content
   */
  url?: string;
  /**
   * The content of the reference
   */
  content?:
    | {
        /**
         * The file to import content from
         */
        from_file?: string;
        [k: string]: unknown | undefined;
      }
    | string;
}
/**
 * The Privacy Policy
 */
export interface ExternalReference1 {
  /**
   * The URL to access the content
   */
  url?: string;
  /**
   * The content of the reference
   */
  content?:
    | {
        /**
         * The file to import content from
         */
        from_file?: string;
        [k: string]: unknown | undefined;
      }
    | string;
}
/**
 * Admin accesses
 */
export interface Admin {
  /**
   * The administrator name. Immutable, or need the administrator to change the CTFd data AND the configuration file
   */
  name:
    | {
        /**
         * The environment variable to look at
         */
        from_env?: string;
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * The administrator email address. Immutable, or need the administrator to change the CTFd data AND the configuration file
   */
  email:
    | {
        /**
         * The environment variable to look at
         */
        from_env?: string;
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * The administrator password, recommended to use the varenvs. Immutable, or need the administrator to change the CTFd data AND the configuration file
   */
  password:
    | {
        /**
         * The environment variable to look at
         */
        from_env?: string;
        [k: string]: unknown | undefined;
      }
    | string;
}
/**
 * Upload defines a file or content to upload as per the setup
 */
export interface Upload {
  file: File;
  /**
   * Where to upload it.
   * This enables to use a file at a static location in, e.g., custom pages
   */
  location: string;
}
