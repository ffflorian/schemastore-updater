/* eslint-disable */

export type SourceSchema = {
  path: string;
  matchCase?: boolean;
} & SourceSchema1;
export type SourceSchema1 =
  | string
  | {
      path: string;
      matchCase?: boolean;
    };
/**
 * @minItems 1
 */
export type ScopesSchema = {
  GET?: ScopeTemplate;
  POST?: ScopeTemplate;
  HEAD?: ScopeTemplate;
  PUT?: ScopeTemplate;
  DELETE?: ScopeTemplate;
  TRACE?: ScopeTemplate;
  PATCH?: ScopeTemplate;
  OPTIONS?: ScopeTemplate;
  CONNECT?: ScopeTemplate;
  default?: ScopeTemplate;
} & ScopesSchema1;
/**
 * @minItems 1
 */
export type ScopeTemplate = string | [string, ...string[]];
export type ScopesSchema1 =
  | string
  | [string, ...string[]]
  | {
      GET?: ScopeTemplate;
      POST?: ScopeTemplate;
      HEAD?: ScopeTemplate;
      PUT?: ScopeTemplate;
      DELETE?: ScopeTemplate;
      TRACE?: ScopeTemplate;
      PATCH?: ScopeTemplate;
      OPTIONS?: ScopeTemplate;
      CONNECT?: ScopeTemplate;
      default?: ScopeTemplate;
    };

/**
 * Application Router Configuration Schema
 */
export interface ComSapXsappSchema_82 {
  welcomeFile?: string;
  authenticationMethod?: 'none' | 'route';
  sessionTimeout?: number;
  pluginMetadataEndpoint?: string;
  routes?: {
    source: SourceSchema;
    /**
     * @minItems 1
     */
    httpMethods?: [
      'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'TRACE' | 'PATCH',
      ...('DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'TRACE' | 'PATCH')[]
    ];
    target?: string;
    destination?: string;
    localDir?: string;
    csrfProtection?: boolean;
    service?: string;
    endpoint?: string;
    authenticationType?: 'xsuaa' | 'basic' | 'ias' | 'none';
    identityProvider?: string;
    scope?: ScopesSchema;
    replace?: {
      pathSuffixes: string[];
      vars?: string[];
      services?: {
        [k: string]: unknown | undefined;
      };
    };
    cacheControl?: string;
  }[];
  destinations?: {
    [k: string]:
      | {
          logoutPath?: string;
          logoutMethod?: 'PUT' | 'POST' | 'GET';
        }
      | undefined;
  };
  services?: {
    [k: string]:
      | {
          endpoint?: string;
          logoutPath?: string;
          logoutMethod?: 'PUT' | 'POST' | 'GET';
        }
      | undefined;
  };
  logout?: {
    logoutEndpoint?: string;
    logoutPage?: string;
  };
  login?: {
    callbackEndpoint: string;
  };
  whitelistService?: {
    endpoint: string;
  };
  compression?: {
    enabled?: boolean;
    minSize?: number;
  };
  websockets?: {
    enabled: boolean;
  };
  errorPage?: {
    /**
     * @minItems 1
     */
    status: number | [number, ...number[]];
    file: string;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
