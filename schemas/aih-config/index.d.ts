/* eslint-disable */

export interface AIHarnessConfig {
  schemaVersion: 1;
  contextDir: string;
  targets?: string[];
  posture?: 'vibe' | 'team' | 'enterprise';
  adopt?: {
    acknowledged?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
