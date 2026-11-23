/* eslint-disable */

/**
 * Configuration for @usex/mikrotik-mcp. Use the structured devices form when including $schema or server settings.
 * https://mikrotik-mcp.usestrict.dev/docs/guides/configuration
 */
export type MikroTikMCPConfiguration =
  | {
      /**
       * JSON Schema used by editors to validate this configuration.
       */
      $schema?: string;
      /**
       * Approved service probe targets and scheduled checks.
       */
      serviceProbes?: {
        scheduled?: {
          /**
           * @maxItems 5
           */
          [k: string]:
            | []
            | [string]
            | [string, string]
            | [string, string, string]
            | [string, string, string, string]
            | [string, string, string, string, string]
            | undefined;
        };
        targets?: {
          [k: string]:
            | {
                kind: 'dns' | 'tcp' | 'tls' | 'https';
                host: string;
                port?: number;
                path?: string;
                /**
                 * @minItems 1
                 * @maxItems 32
                 */
                addresses: [string, ...string[]];
                [k: string]: unknown | undefined;
              }
            | undefined;
        };
        timeoutMs?: number;
        [k: string]: unknown | undefined;
      };
      /**
       * Named routers and their management connection settings.
       */
      devices: {
        [k: string]: Device | undefined;
      };
      /**
       * Name of the router used when a tool call does not specify a device.
       */
      defaultDevice?: string;
      /**
       * MCP transport, listening address and client access settings.
       */
      mcp?: {
        transport?: 'stdio' | 'sse' | 'streamable-http';
        host?: string;
        port?: number;
        allowedHosts?: string;
        allowedOrigins?: string;
        corsOrigins?: string;
        toolPageSize?: number;
        appViews?: boolean;
        capabilityGating?: 'off' | 'annotate' | 'filter';
        [k: string]: unknown | undefined;
      };
      s3?: {
        accessKeyId?: string;
        secretAccessKey?: string;
        sessionToken?: string;
        region?: string;
        endpoint?: string;
        bucket?: string;
        prefix?: string;
        presignExpiresIn?: number;
        [k: string]: unknown | undefined;
      };
      /**
       * Optional local observability dashboard and storage settings.
       */
      dashboard?: {
        enabled?: boolean;
        host?: string;
        port?: number;
        dbPath?: string;
        maxEvents?: number;
        captureBody?: boolean;
        redactInput?: boolean;
        maxBodyBytes?: number;
        token?: string;
        feedLimit?: number;
        [k: string]: unknown | undefined;
      };
      alerts?: {
        enabled?: boolean;
        rules?: unknown[];
        channels?: {
          slack?: {
            url: string;
            [k: string]: unknown | undefined;
          };
          discord?: {
            url: string;
            [k: string]: unknown | undefined;
          };
          ntfy?: {
            url: string;
            token?: string;
            [k: string]: unknown | undefined;
          };
          webhook?: {
            url: string;
            method?: string;
            headers?: {
              [k: string]: string | undefined;
            };
            [k: string]: unknown | undefined;
          };
          mcp?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        maxHistory?: number;
        [k: string]: unknown | undefined;
      };
      flows?: {
        enabled?: boolean;
        port?: number;
        db?: string;
        retentionHours?: number;
        rollupDays?: number;
        maxRows?: number;
        [k: string]: unknown | undefined;
      };
      policy?: {
        paths?: string[];
        includeStarterPack?: boolean;
        [k: string]: unknown | undefined;
      };
      schedules?: {
        enabled?: boolean;
        jobs?: unknown[];
        concurrency?: number;
        timeoutMs?: number;
        jitterMs?: number;
        tickSeconds?: number;
        retainDays?: number;
        [k: string]: unknown | undefined;
      };
      attacks?: {
        enabled?: boolean;
        mode?: 'detect' | 'respond';
        pollSeconds?: number;
        windowMinutes?: number;
        concurrency?: number;
        minConfidence?: 'medium' | 'high' | 'confirmed';
        blockTimeout?: string;
        maxBlocksPerHour?: number;
        neverBlock?: string[];
        autoRespondTo?: string[];
        learningDays?: number;
        readScanList?: boolean;
        retainDays?: number;
        [k: string]: unknown | undefined;
      };
      /**
       * SSH connection pool settings.
       */
      ssh?: {
        keepAlive?: boolean;
        keepAliveInterval?: number;
        idleTimeout?: number;
        [k: string]: unknown | undefined;
      };
      /**
       * Expose only read-only tools when enabled.
       */
      readOnly?: boolean;
      access?: {
        enabled?: boolean;
        maxRisk?: 'READ' | 'WRITE' | 'WRITE_IDEMPOTENT' | 'DESTRUCTIVE' | 'DANGEROUS';
        devices?: string[];
        denyDevices?: string[];
        tools?: string[];
        denyTools?: string[];
        label?: string;
        [k: string]: unknown | undefined;
      };
      /**
       * Limit the tools and modules exposed to MCP clients.
       */
      tools?: {
        enabledModules?: string[];
        disabledModules?: string[];
        enabledGroups?: string[];
        disabledGroups?: string[];
        [k: string]: unknown | undefined;
      };
      /**
       * Persistent network knowledge and memory settings.
       */
      memory?: {
        enabled?: boolean;
        dbPath?: string;
        [k: string]: unknown | undefined;
      };
      backupDir?: string;
      disableUpdateCheck?: boolean;
      [k: string]: unknown | undefined;
    }
  | {
      [k: string]: Device | undefined;
    };

export interface Device {
  host?: string;
  /**
   * @maxItems 7
   */
  fallbackHosts?:
    | []
    | [string | string]
    | [string | string, string | string]
    | [string | string, string | string, string | string]
    | [string | string, string | string, string | string, string | string]
    | [string | string, string | string, string | string, string | string, string | string]
    | [string | string, string | string, string | string, string | string, string | string, string | string]
    | [
        string | string,
        string | string,
        string | string,
        string | string,
        string | string,
        string | string,
        string | string
      ];
  username?: string;
  password?: string;
  bandwidthAuth?: {
    username: string;
    password: string;
    [k: string]: unknown | undefined;
  };
  port?: number;
  keyFilename?: string;
  privateKey?: string;
  keyPassphrase?: string;
  timeoutMs?: number;
  jumpVia?: string;
  jumpHost?: {
    host: string;
    port?: number;
    username?: string;
    password?: string;
    keyFilename?: string;
    privateKey?: string;
    keyPassphrase?: string;
    timeoutMs?: number;
    [k: string]: unknown | undefined;
  };
  mac?: string;
  sourceMac?: string;
  macHost?: string;
  macPort?: number;
  api?: boolean;
  apiPort?: number;
  apiInsecureTls?: boolean;
  description?: string;
  tags?: string[];
  disabled?: boolean;
  [k: string]: unknown | undefined;
}
