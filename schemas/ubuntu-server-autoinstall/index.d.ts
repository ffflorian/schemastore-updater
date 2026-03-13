/* eslint-disable */

/**
 * Settings file for Ubuntu Autoinstall
 */
export interface UbuntuServerAutoinstall {
  autoinstall?: {
    version: number;
    'early-commands'?: (string | string[])[];
    reporting?: {
      [k: string]:
        | {
            type: string;
            [k: string]: unknown | undefined;
          }
        | undefined;
    };
    'error-commands'?: (string | string[])[];
    'user-data'?: {
      [k: string]: unknown | undefined;
    };
    packages?: string[];
    'debconf-selections'?: string;
    locale?: string;
    'refresh-installer'?: {
      update?: boolean;
      channel?: string;
    };
    keyboard?: {
      layout: string;
      variant?: string;
      toggle?: string | null;
    };
    network?:
      | {
          version: number;
          ethernets?: {
            match?: {
              name?: string;
              macaddress?: string;
              driver?: string;
            };
            [k: string]: unknown | undefined;
          };
          wifis?: {
            match?: {
              name?: string;
              macaddress?: string;
              driver?: string;
            };
            [k: string]: unknown | undefined;
          };
          bridges?: {
            [k: string]: unknown | undefined;
          };
          bonds?: {
            [k: string]: unknown | undefined;
          };
          tunnels?: {
            [k: string]: unknown | undefined;
          };
          vlans?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        }
      | {
          network: {
            version: number;
            ethernets?: {
              match?: {
                name?: string;
                macaddress?: string;
                driver?: string;
              };
              [k: string]: unknown | undefined;
            };
            wifis?: {
              match?: {
                name?: string;
                macaddress?: string;
                driver?: string;
              };
              [k: string]: unknown | undefined;
            };
            bridges?: {
              [k: string]: unknown | undefined;
            };
            bonds?: {
              [k: string]: unknown | undefined;
            };
            tunnels?: {
              [k: string]: unknown | undefined;
            };
            vlans?: {
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
    proxy?: string | null;
    apt?: {
      preserve_sources_list?: boolean;
      primary?: unknown[];
      geoip?: boolean;
      sources?: {
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    storage?: {
      [k: string]: unknown | undefined;
    };
    identity?: {
      realname?: string;
      username: string;
      hostname: string;
      password: string;
    };
    ssh?: {
      'install-server'?: boolean;
      'authorized-keys'?: string[];
      'allow-pw'?: boolean;
      [k: string]: unknown | undefined;
    };
    snaps?: {
      name: string;
      channel?: string;
      classic?: boolean;
    }[];
    'late-commands'?: (string | string[])[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
