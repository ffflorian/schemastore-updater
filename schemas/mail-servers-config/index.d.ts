/* eslint-disable */

/**
 * Schema for storing mail server configurations
 */
export interface MailServersConfiguration {
  /**
   * Mail service configuration for a domain
   */
  [k: string]:
    | {
        /**
         * POP3 server configuration
         */
        pop?: {
          /**
           * POP3 server hostname
           */
          host: string;
          /**
           * POP3 server port
           */
          port: number;
        };
        /**
         * IMAP server configuration
         */
        imap?: {
          /**
           * IMAP server hostname
           */
          host: string;
          /**
           * IMAP server port
           */
          port: number;
        };
        /**
         * SMTP server configuration
         */
        smtp?: {
          /**
           * SMTP server hostname
           */
          host: string;
          /**
           * SMTP server port
           */
          port: number;
        };
      }
    | undefined;
}
