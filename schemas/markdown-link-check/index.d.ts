/* eslint-disable */

export interface HttpsJsonSchemastoreOrgMarkdownLinkCheckJson {
  ignorePatterns?: {
    pattern: string;
  }[];
  replacementPatterns?: {
    pattern: string;
    replacement: string;
  }[];
  httpHeaders?: {
    urls?: string[];
    headers?: {
      [k: string]: string | undefined;
    };
  }[];
  timeout?: string;
  retryOn429?: boolean;
  retryCount?: number;
  projectBaseUrl?: string;
  fallbackRetryDelay?: string;
  aliveStatusCodes?: number[];
}
