/* eslint-disable */

/**
 * https://buf.build/docs/lint/rules
 */
export type LintRule = string;
/**
 * https://buf.build/docs/breaking/rules
 */
export type BreakingRule = string;

/**
 * buf.policy.yaml defines a policy containing a subset of Buf configuration focused on lint, breaking change detection, and plugins. Policies can be shared across modules in the Buf Schema Registry.
 */
export interface BufPolicyYaml {
  /**
   * Required. The version key defines the current configuration version. The only accepted value is v2.
   */
  version: 'v2';
  /**
   * Optional. A BSR path that uniquely identifies this policy. Must be a valid policy name in the format buf.build/ORGANIZATION/POLICY_NAME.
   */
  name?: string;
  /**
   * Optional. The lint settings for this policy.
   */
  lint?: {
    /**
     * Optional. Lists the categories and/or specific rules to use. The STANDARD category is used if lint is unset.
     */
    use?: LintRule[];
    /**
     * Optional. Removes rules or categories from the use list.
     */
    except?: LintRule[];
    /**
     * Optional. Controls the behavior of the ENUM_ZERO_VALUE_SUFFIX lint rule. By default, this rule verifies that the zero value of all enums ends in _UNSPECIFIED.
     */
    enum_zero_value_suffix?: string;
    /**
     * Optional. Allows the same message type to be used for a single RPC's request and response type. We don't recommend using this option.
     */
    rpc_allow_same_request_response?: boolean;
    /**
     * Optional. Allows RPC requests to be google.protobuf.Empty messages. We don't recommend using this option.
     */
    rpc_allow_google_protobuf_empty_requests?: boolean;
    /**
     * Optional. Allows RPC responses to be google.protobuf.Empty messages. We don't recommend using this option.
     */
    rpc_allow_google_protobuf_empty_responses?: boolean;
    /**
     * Optional. Controls the behavior of the SERVICE_SUFFIX lint rule. By default, this rule verifies that all service names are suffixed with Service.
     */
    service_suffix?: string;
    /**
     * Optional. Disables Buf's built-in lint rules when set to true. Defaults to false.
     */
    disable_builtin?: boolean;
  };
  /**
   * Optional. The breaking change detection settings for this policy.
   */
  breaking?: {
    /**
     * Optional. Lists the rules or categories to use for breaking change detection. The FILE category is used if breaking is unset.
     */
    use?: BreakingRule[];
    /**
     * Optional. Removes rules or categories from the use list. We don't recommend using this option.
     */
    except?: BreakingRule[];
    /**
     * Optional. Ignores packages with a last component that's one of the unstable forms recognized by the Buf linter's PACKAGE_VERSION_SUFFIX rule.
     */
    ignore_unstable_packages?: boolean;
    /**
     * Optional. Disables Buf's built-in breaking change detection rules when set to true. Defaults to false.
     */
    disable_builtin?: boolean;
  };
  /**
   * Optional. Custom Buf plugins that provide additional lint or breaking change rules.
   */
  plugins?: {
    /**
     * Required. References a Buf plugin via local binary path, filesystem location, or remote BSR plugin path.
     */
    plugin: string;
    /**
     * Optional. Key-value configuration pairs for plugin customization.
     */
    options?: {
      [k: string]: unknown | undefined;
    };
  }[];
}
