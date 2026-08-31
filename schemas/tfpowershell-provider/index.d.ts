/* eslint-disable */

/**
 * One attribute declaration.
 */
export type Attribute =
  | (
      | ((
          | {
              required: true;
              optional?: false;
              [k: string]: unknown | undefined;
            }
          | {
              optional: true;
              required?: false;
              [k: string]: unknown | undefined;
            }
        ) & {
          [k: string]: unknown | undefined;
        } & {
          /**
           * The attribute's Terraform type. `json` is a string attribute validated as a JSON object, decoded into a real object in $InputData, and re-encoded on the way out.
           */
          type: 'string' | 'bool' | 'int' | 'number' | 'list' | 'set' | 'map' | 'json';
          /**
           * Element type of a list, set, or map attribute. Required for those three types and not allowed on any other.
           */
          element_type?: 'string' | 'bool' | 'int' | 'number';
          /**
           * The practitioner must set this attribute. Exactly one of required, optional, or computed must be true.
           */
          required?: boolean;
          /**
           * The practitioner may set this attribute. Exactly one of required, optional, or computed must be true.
           */
          optional?: boolean;
          /**
           * Provider attributes cannot be computed, so only false is accepted. Exactly one of required or optional must be true.
           */
          computed?: false;
          /**
           * Redact the value in CLI output and plans.
           */
          sensitive?: boolean;
          /**
           * What the attribute means. Surfaced in the Terraform Registry docs and in `terraform providers schema`.
           */
          description?: string;
          /**
           * Value injected into $InputData when the practitioner leaves this optional attribute null. Terraform state still records null - the default is visible to your scripts, not to Terraform. Its JSON type must match the declared type.
           */
          default?: {
            [k: string]: unknown | undefined;
          };
          /**
           * Plan-time value constraints. Only string, int, and number config attributes can carry them.
           */
          validators?: {
            /**
             * The permitted values. Each must match the attribute's declared type.
             *
             * @minItems 1
             */
            one_of: [unknown, ...unknown[]];
          }[];
          /**
           * Environment variable consulted when the practitioner leaves this attribute unset. Optional string attributes only.
           */
          env?: string;
        })
      | undefined
    )
  | undefined;

/**
 * A provider.tfps.json manifest, declaring the custom provider-block attributes of a provider built on terraform-provider-powershell. Values reach PowerShell scripts as $global:ProviderData.Config.<name>. The file is optional; omit it when the provider block needs nothing beyond the built-in attributes.
 */
export interface TerraformPowerShellProviderBlockManifest {
  /**
   * Link to this document. The provider engine accepts and ignores it.
   */
  $schema?: string;
  /**
   * Manifest format version. Only 1 exists; the engine rejects any other value rather than half-applying a manifest written for a newer format.
   */
  version: 1;
  /**
   * What the provider manages. Surfaced in the Terraform Registry docs and in `terraform providers schema`.
   */
  description?: string;
  /**
   * The custom provider-block attributes, keyed by attribute name. At least one is required. A name that collides with a built-in provider attribute (timeout, startup_script, session_*, ...) is a load error.
   */
  attributes: {
    [k: string]: Attribute | undefined;
  };
}
