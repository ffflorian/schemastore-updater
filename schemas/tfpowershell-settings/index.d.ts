/* eslint-disable */

/**
 * A settings.tfps.json file, the single place that names a provider built on terraform-provider-powershell. It sits at provider/settings.tfps.json and is read at build time and at provider startup.
 */
export interface TerraformPowerShellProviderSettings {
  /**
   * Link to this schema. The provider engine accepts and ignores it.
   */
  $schema?: string;
  /**
   * The provider type name, e.g. "exchangeonlinemanagement". It prefixes every resource and data source type: a resource folder named `mailbox` becomes `exchangeonlinemanagement_mailbox`.
   */
  name: string;
  /**
   * The registry source address practitioners put in required_providers, e.g. "registry.terraform.io/acme/exchangeonlinemanagement".
   */
  address: string;
  /**
   * URL of the provider's source repository. Used by the release tooling; not read by the provider at runtime.
   */
  repository?: string;
  /**
   * Which terraform-provider-powershell release to build against: "latest" for the newest GA release, or an exact version such as "0.4.2" or "0.5.0-beta.3". Defaults to "latest" when omitted.
   */
  engine_version?: string;
}
