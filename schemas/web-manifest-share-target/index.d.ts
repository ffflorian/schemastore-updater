/* eslint-disable */

export interface JSONSchemaForWebApplicationManifestFilesWithWebShareTargetAndWebShareTargetLevel2Extensions {
  share_target?: ShareTarget;
  [k: string]: unknown | undefined;
}
/**
 * Declares the application to be a web share target, and describes how it receives share data.
 */
export interface ShareTarget {
  /**
   * The URL for the web share target.
   */
  action: string;
  /**
   * The HTTP request method for the web share target.
   */
  method?: 'GET' | 'POST' | 'get' | 'post';
  /**
   * This member specifies the encoding in the share request.
   */
  enctype?:
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'APPLICATION/X-WWW-FORM-URLENCODED'
    | 'MULTIPART/FORM-DATA';
  params: ShareTargetParams;
  [k: string]: unknown | undefined;
}
/**
 * Specifies what data gets shared in the request.
 */
export interface ShareTargetParams {
  /**
   * The name of the query parameter used for the title of the document being shared.
   */
  title?: string;
  /**
   * The name of the query parameter used for the message body, made of arbitrary text.
   */
  text?: string;
  /**
   * The name of the query parameter used for the URL string referring to a resource being shared.
   */
  url?: string;
  /**
   * Description of how the application receives files from share requests.
   */
  files?: ShareTargetFiles | ShareTargetFiles[];
  [k: string]: unknown | undefined;
}
/**
 * Description of how the application receives files from share requests.
 */
export interface ShareTargetFiles {
  /**
   * The name of the form field used to share the files.
   */
  name: string;
  /**
   * Sequence of accepted MIME types or file extensions can be shared to the application.
   */
  accept: string | string[];
  [k: string]: unknown | undefined;
}
