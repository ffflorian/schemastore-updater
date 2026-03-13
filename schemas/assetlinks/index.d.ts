/* eslint-disable */

/**
 * Describe the relation being declared about the target
 *
 * @minItems 1
 */
export type Relation = [
  'delegate_permission/common.handle_all_urls' | 'delegate_permission/common.get_login_creds',
  ...('delegate_permission/common.handle_all_urls' | 'delegate_permission/common.get_login_creds')[]
];
/**
 * Google Digital Assetlinks Schema
 */
export type GoogleDigitalAssetlinks = StatementList[];

/**
 * Website or app statements as JSON objects
 */
export interface StatementList {
  relation?: Relation;
  /**
   * The target asset to whom this statement applies
   */
  target?: AndroidApp | Web;
}
/**
 * The target asset belong to an android application
 */
export interface AndroidApp {
  /**
   * Must be android_app for Android apps
   */
  namespace: 'android_app';
  /**
   * Android application's package name
   */
  package_name: string;
  /**
   * SHA256s from keystore
   *
   * @minItems 1
   */
  sha256_cert_fingerprints: [string, ...string[]];
}
/**
 * The target asset belong to a web application
 */
export interface Web {
  /**
   * Must be web for websites
   */
  namespace: 'web';
  /**
   * Website's uri that following the format http[s]://<hostname>[:<port>]
   */
  site: string;
}
