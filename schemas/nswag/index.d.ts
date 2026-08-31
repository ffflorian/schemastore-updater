/* eslint-disable */

export type SwaggerToCSharpController = unknown;

export interface HttpsJsonSchemastoreOrgNswagJson {
  swaggerGenerator?: SwaggerGenerator;
  codeGenerators?: CodeGenerators;
  [k: string]: unknown | undefined;
}
export interface SwaggerGenerator {
  webApiToSwagger?: WebApiToSwagger;
  [k: string]: unknown | undefined;
}
export interface WebApiToSwagger {
  assemblyPaths?: string[];
  referencePaths?: string[];
  useNuGetCache?: boolean;
  isAspNetCore?: boolean;
  controllerNames?: string[];
  defaultUrlTemplate?: string;
  defaultPropertyNameHandling?: 'Default' | 'CamelCase' | 'SnakeCase';
  defaultEnumHandling?: 'Integer' | 'String' | 'CamelCaseString';
  flattenInheritanceHierarchy?: boolean;
  generateKnownTypes?: boolean;
  generateXmlObjects?: boolean;
  addMissingPathParameters?: boolean;
  infoTitle?: string;
  infoVersion?: string;
  output?: null;
  [k: string]: unknown | undefined;
}
export interface CodeGenerators {
  swaggerToTypeScriptClient?: SwaggerToTypeScriptClient;
  swaggerToCSharpClient?: SwaggerToCSharpClient;
  swaggerToCSharpController?: SwaggerToCSharpController;
  [k: string]: unknown | undefined;
}
export interface SwaggerToTypeScriptClient {
  template?: 'JQueryCallbacks' | 'JQueryPromises' | 'AngularJS' | 'Angular' | 'Fetch' | 'Aurelia';
  promiseType?: 'Promise' | 'QPromise';
  wrapDtoExceptions?: boolean;
  clientBaseClass?: string;
  configurationClass?: string;
  useTransformOptionsMethod?: boolean;
  useTransformResultMethod?: boolean;
  baseUrlTokenName?: string;
  protectedMethods?: string[];
  importRequiredTypes?: boolean;
  useGetBaseUrlMethod?: boolean;
  queryNullValue?: string;
  httpClass?: 'Http' | 'HttpClient';
  rxJsVersion?: number;
  useSingletonProvider?: boolean;
  injectionTokenType?: 'OpaqueToken' | 'InjectionToken';
  markOptionalProperties?: boolean;
  typeScriptVersion?: number;
  moduleName?: string;
  nullValue?: string;
  typeStyle?: 'Interface' | 'Class' | 'KnockoutClass';
  [k: string]: unknown | undefined;
}
export interface SwaggerToCSharpClient {
  [k: string]: unknown | undefined;
}
