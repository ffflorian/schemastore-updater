/* eslint-disable */

/**
 * A config to enable `bosh deploy` flags on a BOSH Director-wide or per-deployment basis.
 */
export type BOSHCLIDeployConfig =
  | {
      flags: Flags;
      exclude?: Deployments;
    }
  | {
      flags: Flags;
      include?: Deployments;
    };
export type Flags = string[];
export type Deployments = string[];
