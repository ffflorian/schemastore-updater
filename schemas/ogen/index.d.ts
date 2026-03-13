/* eslint-disable */

/**
 * ogen code generator configuration. See https://ogen.dev/docs/config.
 */
export interface OgenConfigurationSchema {
  /**
   * Parser configuration options.
   */
  parser?: {
    /**
     * Enables type inference for schemas. Schema parser will try to detect schema type by its properties.
     *
     */
    infer_types?: boolean;
    /**
     * Enables remote references resolving. See https://github.com/ogen-go/ogen/issues/385.
     *
     */
    allow_remote?: boolean;
    /**
     * Maximum depth of schema generation.
     */
    depth_limit?: number;
    /**
     * Allowed HTTP Authorization schemes in a Security Scheme Object. If empty, the ones registered in https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml are used.
     *
     */
    authentication_schemes?: (
      | 'basic'
      | 'bearer'
      | 'concealed'
      | 'digest'
      | 'dpop'
      | 'gnap'
      | 'hoba'
      | 'mutual'
      | 'negotiate'
      | 'oauth'
      | 'privatetoken'
      | 'scram-sha-1'
      | 'scram-sha-256'
      | 'vapid'
    )[];
    /**
     * Enables interpretation of cross-type schema constraints. When enabled, constraints like pattern on numbers or maximum on strings are allowed and interpreted during code generation.
     *
     */
    allow_cross_type_constraints?: boolean;
    /**
     * Enables strict duplicate normalized path checks. When enabled, duplicate normalized paths are always rejected per strict OpenAPI interpretation. Otherwise, paths with different parameter names and different HTTP methods are allowed, and operations are disambiguated by path + params + method.
     *
     */
    disallow_duplicate_method_paths?: boolean;
  };
  /**
   * Generator configuration options.
   */
  generator?: {
    /**
     * Generator features configuration.
     */
    features?: {
      /**
       * Features to enable. Applied after disable list, so entries here take priority.
       *
       */
      enable?: (
        | 'paths/client'
        | 'paths/server'
        | 'webhooks/client'
        | 'webhooks/server'
        | 'client/security/reentrant'
        | 'client/request/options'
        | 'client/request/validation'
        | 'client/editors'
        | 'server/response/validation'
        | 'ogen/otel'
        | 'ogen/unimplemented'
        | 'debug/example_tests'
      )[];
      /**
       * Features to disable. Applied before enable list, so entries in enable list take priority.
       *
       */
      disable?: (
        | 'paths/client'
        | 'paths/server'
        | 'webhooks/client'
        | 'webhooks/server'
        | 'client/security/reentrant'
        | 'client/request/options'
        | 'client/request/validation'
        | 'client/editors'
        | 'server/response/validation'
        | 'ogen/otel'
        | 'ogen/unimplemented'
        | 'debug/example_tests'
      )[];
      /**
       * Start from an empty feature set instead of default features before applying disable and enable lists.
       *
       */
      disable_all?: boolean;
    };
    /**
     * Operation filtering configuration options.
     */
    filters?: {
      /**
       * Regular expression to filter paths. If empty, all paths are accepted.
       *
       */
      path_regex?: string;
      /**
       * HTTP methods to keep. If empty, all methods are accepted.
       *
       */
      methods?: ('GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'TRACE')[];
    };
    /**
     * Functions that are not yet implemented and should be skipped during generation. "all" is a special list value that skips all not-implemented functions.
     *
     */
    ignore_not_implemented?: string[];
    /**
     * Controls convenient error helper generation. See https://ogen.dev/docs/concepts/convenient_errors.
     *
     */
    convenient_errors?: 'on' | 'off' | 'auto';
    /**
     * Maps exact content types to known encodings.
     */
    content_type_aliases?: {
      [k: string]: string | undefined;
    };
    /**
     * Default encoding to use for wildcard content types (e.g. * /* or application/*) when the schema is not binary. If empty, wildcard content types are treated as unsupported.
     *
     */
    wildcard_content_type_default?: string;
  };
  /**
   * Path to write the expanded OpenAPI spec file. If empty, the expanded spec is not written.
   *
   */
  expand?: string;
}
