/* eslint-disable */

export type HttpMethodSchema = 'GET' | 'POST' | 'HEAD' | 'OPTIONS' | 'PUT' | 'TRACE' | 'DELETE' | 'PATCH' | 'CONNECT';
export type RequestOverridesValueExpressionSchema = string;

export interface JSONSchemaForAzureFunctionsProxiesProxiesJsonFiles {
  $schema?: string;
  /**
   * The proxies object defines the proxies that will be used by the function app
   */
  proxies: {
    '<ProxyName>'?: ProxySchema;
    [k: string]: ProxySchema1 | undefined;
  };
}
/**
 * Default template for a proxy. Replace "<ProxyName>" with a friendly name you wish to set.
 */
export interface ProxySchema {
  desc?: string[];
  matchCondition: MatchConditionSchema;
  /**
   * The URL of the backend resource to which the request should be proxied. This value may be templated. If this property is not included, Azure Functions will respond with an HTTP 200 OK
   */
  backendUri?: string;
  requestOverrides?: RequestOverridesSchema;
  responseOverrides?: ResponseOverridesSchema;
  debug?: boolean;
  disabled?: boolean;
}
/**
 * Required - an object defining the requests that will trigger the execution of this proxy. It contains two properties shared with HTTP triggers - methods and route
 */
export interface MatchConditionSchema {
  /**
   * Required - This defines the route template, controlling to which request URLs your proxy will respond. Unlike in HTTP triggers, there is no default value
   */
  route: string;
  /**
   * This is an array of the HTTP methods to which the proxy will respond. If not specified, the proxy will respond to all HTTP methods on the route.
   *
   * @minItems 1
   */
  methods?: [HttpMethodSchema, ...HttpMethodSchema[]];
}
/**
 * The requestOverrides object defines changes made to the request when the backend resource is called. You can make changes to the HTTP method, headers, and query string parameters.
 */
export interface RequestOverridesSchema {
  /**
   * This is the HTTP method which will be used to call the backend.
   */
  'backend.request.method'?: HttpMethodSchema | RequestOverridesValueExpressionSchema;
  /**
   * A query string parameter which can be set for the call to the backend. Replace "<ParameterName>" with the name of the parameter you wish to set. If the empty string is provided, the parameter will not be included on the backend request
   */
  'backend.request.querystring.<ParameterName>'?: string;
  /**
   * A header which can be set for the call to the backend. Replace "<HeaderName>" with the name of the header you wish to set. If the empty string is provided, the header will not be included on the backend request.
   */
  'backend.request.headers.<HeaderName>'?: string;
}
/**
 * The responseOverrides object defines changes made to the response passed back to the client. You can make changes to the response's status code, reason phrase, headers, and body.
 */
export interface ResponseOverridesSchema {
  /**
   * The HTTP status code to be returned to the client.
   */
  'response.statusCode'?: string;
  /**
   * The HTTP reason phrase to be returned to the client.
   */
  'response.statusReason'?: string;
  /**
   * The string representation of the body to be returned to the client.
   */
  'response.body'?:
    | string
    | {
        [k: string]: unknown | undefined;
      }
    | [
        {
          [k: string]: unknown | undefined;
        },
        ...{
          [k: string]: unknown | undefined;
        }[]
      ];
  /**
   * A header which can be set for the response to the client. Replace "<HeaderName>" with the name of the header you wish to set. If the empty string is provided, the header will not be included on the response.
   */
  'response.headers.<HeaderName>'?: string;
  /**
   * A header which can be set for the response to the client. Values can reference application settings, parameters from the original client request, and parameters from the backend response. If the empty string is provided, the header will not be included on the response.
   *
   * This interface was referenced by `ResponseOverridesSchema`'s JSON-Schema definition
   * via the `patternProperty` "^response\.headers\..+$".
   */
  [k: string]: string;
}
/**
 * A friendly name for the proxy
 */
export interface ProxySchema1 {
  desc?: string[];
  matchCondition: MatchConditionSchema;
  /**
   * The URL of the backend resource to which the request should be proxied. This value may be templated. If this property is not included, Azure Functions will respond with an HTTP 200 OK
   */
  backendUri?: string;
  requestOverrides?: RequestOverridesSchema;
  responseOverrides?: ResponseOverridesSchema;
  debug?: boolean;
  disabled?: boolean;
}
