/* eslint-disable */

export type SourceSchema = SourceSchema1 & {
  path: string;
  matchCase?: boolean;
};
export type SourceSchema1 =
  | string
  | {
      [k: string]: unknown | undefined;
    };
/**
 * @minItems 1
 */
export type ScopesSchema = ScopesSchema1 & {
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
} & ScopesSchema2;
export type ScopesSchema1 =
  | string
  | unknown[]
  | {
      [k: string]: unknown | undefined;
    };
/**
 * @minItems 1
 */
export type ScopeTemplate = ScopeTemplate1 & ScopeTemplate2;
export type ScopeTemplate1 = string | unknown[];
export type ScopeTemplate2 = [string, ...string[]];
export type ScopesSchema2 = [string, ...string[]];
export type HostPatternSchema =
  | string
  | {
      [k: string]: unknown | undefined;
    };

/**
 * Application Router Configuration Schema
 */
export interface SAPApplicationRouterConfiguration {
  welcomeFile?: string;
  authenticationMethod?: 'none' | 'route';
  stateProtection?: boolean;
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
    destinationAuth?: 'ias' | 'xsuaa';
    setBackendSessionCookies?: boolean;
    localDir?: string;
    csrfProtection?: boolean;
    preferLocal?: boolean;
    service?: string;
    endpoint?: string;
    authenticationType?: 'xsuaa' | 'ias' | 'basic' | 'none';
    identityProvider?: string;
    dynamicIdentityProvider?: boolean;
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
  responseHeaders?: {
    name: string;
    value: string;
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
    backChannelLogoutEndpoint?: string;
    logoutEndpoint?: string;
    logoutPage?: string;
    logoutMethod?: 'POST' | 'GET';
    csrfProtection?: boolean;
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
    compressResponseMixedTypeContent?: boolean;
  };
  websockets?: {
    enabled: boolean;
  };
  errorPage?: ({
    [k: string]: unknown | undefined;
  } & {
    /**
     * @minItems 1
     */
    status: (number | unknown[]) & [number, ...number[]];
    file?: string;
    path?: string;
    [k: string]: unknown | undefined;
  })[];
  /**
   * @minItems 1
   */
  cors?: [CorsConfigItem, ...CorsConfigItem[]];
  [k: string]: unknown | undefined;
}
export interface CorsConfigItem {
  uriPattern: SourceSchema;
  hostPattern?: HostPatternSchema;
  allowedOrigin: AllowedOriginItem[];
  /**
   * @minItems 1
   */
  allowedMethods?: [
    'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'TRACE' | 'PATCH',
    ...('DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'TRACE' | 'PATCH')[]
  ];
  /**
   * @minItems 1
   */
  allowedHeaders?: [string, ...string[]];
  allowedCredentials?: boolean;
  /**
   * @minItems 1
   */
  exposeHeaders?: [string, ...string[]];
  maxAge?: number;
}
export interface AllowedOriginItem {
  host: string;
  protocol?: string;
  port?: number;
}
