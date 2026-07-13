/* eslint-disable */

export interface AIHarnessOrgPolicy {
  schemaVersion: 1;
  minimumPosture: 'vibe' | 'team' | 'enterprise';
  references: {
    repoContract: string;
    [k: string]: unknown | undefined;
  };
  command?: {
    deny?: {
      add?: {
        pattern: string;
        reason?: string;
        [k: string]: unknown | undefined;
      }[];
      remove?: string[];
    };
    ask?: {
      add?: {
        pattern: string;
        reason?: string;
        [k: string]: unknown | undefined;
      }[];
      remove?: string[];
    };
  };
  riskGates?: {
    add?: {
      name: string;
      description: string;
      pathPatterns?: string[];
      commandPatterns?: string[];
      [k: string]: unknown | undefined;
    }[];
    override?: {
      [k: string]:
        | {
            description?: string;
            pathPatterns?: string[];
            commandPatterns?: string[];
          }
        | undefined;
    };
  };
  licenses?: {
    disposition?: {
      [k: string]: ('auto-approve' | 'alert' | 'fail' | 'block') | undefined;
    };
  };
  mcp?: {
    allowedServers?: string[];
    allowManagedOnly?: boolean;
  };
  trust?: {
    approvedSources?: {
      owner: string;
      repo: string;
      pinnedSha?: string;
      reason?: string;
    }[];
    requireSignedSource?: boolean;
    requiredDetectors?: ('skillspector' | 'cisco' | 'mcp-scanner')[];
    requiredChecks?: string[];
    internalScopes?: string[];
  };
}
