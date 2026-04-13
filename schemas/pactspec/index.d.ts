/* eslint-disable */

/**
 * Machine-readable capability declaration for AI agents. Defines what an agent does, how to call it, what it costs, and how to test it. See https://pactspec.dev/spec for documentation.
 */
export interface PactSpecV1 {
  /**
   * PactSpec schema version. Always "1.0.0" for v1 specs.
   */
  specVersion: '1.0.0';
  /**
   * Unique URN identifier, e.g. urn:pactspec:acme:invoice-processor
   */
  id: string;
  /**
   * Human-readable agent name.
   */
  name: string;
  /**
   * Semantic version of this agent, e.g. "1.2.0".
   */
  version: string;
  /**
   * What this agent does.
   */
  description?: string;
  /**
   * Who operates this agent.
   */
  provider: {
    /**
     * Organization or individual name.
     */
    name: string;
    /**
     * Provider's website.
     */
    url?: string;
    /**
     * Contact email.
     */
    contact?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Where to call this agent.
   */
  endpoint: {
    /**
     * Agent endpoint URL.
     */
    url: string;
    /**
     * Authentication configuration.
     */
    auth?: {
      /**
       * Authentication method.
       */
      type?: 'none' | 'bearer' | 'x-agent-id' | 'header';
      /**
       * Custom header name when type is "header".
       */
      header?: string;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Capabilities this agent provides. Each skill has typed input/output schemas.
   *
   * @minItems 1
   */
  skills: [
    {
      /**
       * Skill identifier (lowercase, hyphens allowed).
       */
      id: string;
      /**
       * Human-readable skill name.
       */
      name: string;
      /**
       * What this skill does.
       */
      description: string;
      /**
       * Searchable tags.
       */
      tags?: string[];
      /**
       * JSON Schema for the skill's input.
       */
      inputSchema: {
        [k: string]: unknown | undefined;
      };
      /**
       * JSON Schema for the skill's output.
       */
      outputSchema: {
        [k: string]: unknown | undefined;
      };
      /**
       * Example input/output pairs.
       */
      examples?: {
        description?: string;
        /**
         * Example input value.
         */
        input: {
          [k: string]: unknown | undefined;
        };
        /**
         * Expected output for the example input.
         */
        expectedOutput: {
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      }[];
      /**
       * What this skill costs per invocation.
       */
      pricing?: {
        /**
         * Billing model.
         */
        model: 'per-invocation' | 'per-token' | 'per-second' | 'free';
        /**
         * Price per unit.
         */
        amount: number;
        /**
         * Currency.
         */
        currency: 'USD' | 'USDC' | 'SOL';
        /**
         * Payment protocol.
         */
        protocol?: 'x402' | 'stripe' | 'none';
        [k: string]: unknown | undefined;
      };
      /**
       * URL to a test suite that can be run against the live endpoint.
       */
      testSuite?: {
        /**
         * Test suite URL.
         */
        url: string;
        /**
         * Test format.
         */
        type?: 'http-roundtrip' | 'json-schema-validation';
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    },
    ...{
      /**
       * Skill identifier (lowercase, hyphens allowed).
       */
      id: string;
      /**
       * Human-readable skill name.
       */
      name: string;
      /**
       * What this skill does.
       */
      description: string;
      /**
       * Searchable tags.
       */
      tags?: string[];
      /**
       * JSON Schema for the skill's input.
       */
      inputSchema: {
        [k: string]: unknown | undefined;
      };
      /**
       * JSON Schema for the skill's output.
       */
      outputSchema: {
        [k: string]: unknown | undefined;
      };
      /**
       * Example input/output pairs.
       */
      examples?: {
        description?: string;
        /**
         * Example input value.
         */
        input: {
          [k: string]: unknown | undefined;
        };
        /**
         * Expected output for the example input.
         */
        expectedOutput: {
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      }[];
      /**
       * What this skill costs per invocation.
       */
      pricing?: {
        /**
         * Billing model.
         */
        model: 'per-invocation' | 'per-token' | 'per-second' | 'free';
        /**
         * Price per unit.
         */
        amount: number;
        /**
         * Currency.
         */
        currency: 'USD' | 'USDC' | 'SOL';
        /**
         * Payment protocol.
         */
        protocol?: 'x402' | 'stripe' | 'none';
        [k: string]: unknown | undefined;
      };
      /**
       * URL to a test suite that can be run against the live endpoint.
       */
      testSuite?: {
        /**
         * Test suite URL.
         */
        url: string;
        /**
         * Test format.
         */
        type?: 'http-roundtrip' | 'json-schema-validation';
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }[]
  ];
  /**
   * Searchable tags for the agent.
   */
  tags?: string[];
  /**
   * SPDX license identifier.
   */
  license?: string;
  /**
   * Related links.
   */
  links?: {
    /**
     * Documentation URL.
     */
    documentation?: string;
    /**
     * Source code repository.
     */
    repository?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * If this agent wraps another agent.
   */
  delegation?: {
    /**
     * Spec ID of the upstream agent being wrapped.
     */
    delegatedFrom?: string;
    /**
     * URL to delegation agreement.
     */
    terms?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Interoperability with other protocols.
   */
  interop?: {
    mcp?: {
      /**
       * MCP server endpoint.
       */
      serverUrl?: string;
      /**
       * MCP tool names.
       */
      tools?: string[];
      [k: string]: unknown | undefined;
    };
    openapi?: {
      /**
       * OpenAPI spec URL.
       */
      specUrl?: string;
      [k: string]: unknown | undefined;
    };
    acp?: {
      /**
       * Whether ACP sessions are supported.
       */
      supported?: boolean;
      /**
       * Supported session types.
       */
      sessionTypes?: string[];
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
