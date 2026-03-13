/* eslint-disable */

/**
 * Buffer or string that contains a private key for either key-based or hostbased user authentication (OpenSSH format).
 */
export type PrivateKey =
  | string
  | {
      [k: string]: unknown | undefined;
    };
/**
 * For an encrypted privateKey, this is the passphrase used to decrypt it.
 */
export type Passphrase = string;
/**
 * Execute script commands.
 */
export type Script = string;
/**
 * Old version backup name.
 */
export type BackupName = string;
/**
 * Delete localpath after deployment.
 */
export type RemoveLocalDir = boolean;
/**
 * Empty the old version before deploying the new version.
 */
export type ClearRemoteDir = boolean;

/**
 * JSON schema for the deployed cli config file.
 *
 * See also: https://hyhello.github.io/deployed
 *
 *
 */
export interface DeployedCli {
  /**
   * JSON Schema for deployed.
   */
  $schema?: string;
  /**
   * Name of project to be released.
   */
  projectName: string;
  /**
   * Alias collection of environment to be deployed.
   */
  cluster?: string[];
  privateKey?: PrivateKey;
  passphrase?: Passphrase;
  script?: Script;
  backupName?: BackupName;
  removeLocalDir?: RemoveLocalDir;
  clearRemoteDir?: ClearRemoteDir;
  /**
   * @minItems 1
   */
  modeList: [
    {
      /**
       * Deployment environment alias.
       */
      mode: string;
      /**
       * Deployment environment name.
       */
      name: string;
      /**
       * Hostname or IP address of the server.
       */
      host: string;
      /**
       * Port number of the server.
       */
      port: number;
      /**
       * Username for authentication.
       */
      username: string;
      /**
       * Password for password-based user authentication.
       */
      password?: string;
      /**
       * Deployment path.
       */
      remotePath: string;
      /**
       * Local upload path.
       */
      localPath: string;
      /**
       * Backup path.
       */
      backupPath?: string;
      privateKey?: PrivateKey;
      passphrase?: Passphrase;
      script?: Script;
      backupName?: BackupName;
      removeLocalDir?: RemoveLocalDir;
      clearRemoteDir?: ClearRemoteDir;
    },
    ...{
      /**
       * Deployment environment alias.
       */
      mode: string;
      /**
       * Deployment environment name.
       */
      name: string;
      /**
       * Hostname or IP address of the server.
       */
      host: string;
      /**
       * Port number of the server.
       */
      port: number;
      /**
       * Username for authentication.
       */
      username: string;
      /**
       * Password for password-based user authentication.
       */
      password?: string;
      /**
       * Deployment path.
       */
      remotePath: string;
      /**
       * Local upload path.
       */
      localPath: string;
      /**
       * Backup path.
       */
      backupPath?: string;
      privateKey?: PrivateKey;
      passphrase?: Passphrase;
      script?: Script;
      backupName?: BackupName;
      removeLocalDir?: RemoveLocalDir;
      clearRemoteDir?: ClearRemoteDir;
    }[]
  ];
  /**
   * List of plugins to load and use.
   */
  plugin?: (
    | string
    | []
    | [string]
    | [
        string,
        {
          [k: string]: unknown | undefined;
        }
      ]
  )[];
}
