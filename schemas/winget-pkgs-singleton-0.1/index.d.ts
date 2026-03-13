/* eslint-disable */

export interface HttpsJsonSchemastoreOrgWingetPkgsSingleton01Json {
  /**
   * publisher.package format
   */
  Id?: string;
  /**
   * the name of the publisher
   */
  Publisher?: string;
  /**
   * the name of the application
   */
  Name?: string;
  /**
   * version numbering format
   */
  Version?: string;
  /**
   * the open source license or copyright
   */
  License?: string;
  Installers?: {
    /**
     * enumeration of supported architectures
     */
    Arch?: string;
    /**
     * path to download installation file
     */
    URL?: string;
    /**
     * SHA256 calculated from installer
     */
    Sha256?: string;
    /**
     * enumeration of supported installer types (exe, msi, msix, inno, nullsoft)
     */
    InstallerType?: 'exe' | 'msi' | 'msix' | 'inno' | 'nullsoft';
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
