/* eslint-disable */

/**
 * One attribute declaration.
 */
export type Attribute = (
  | {
      required: true;
      optional?: false;
      computed?: false;
      [k: string]: unknown | undefined;
    }
  | {
      optional: true;
      required?: false;
      computed?: false;
      [k: string]: unknown | undefined;
    }
  | {
      computed: true;
      required?: false;
      optional?: false;
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
   * The scripts supply this attribute; it never appears in configuration. Exactly one of required, optional, or computed must be true.
   */
  computed?: boolean;
  /**
   * Redact the value in CLI output and plans.
   */
  sensitive?: boolean;
  /**
   * What the attribute means. Surfaced in the Terraform Registry docs and in `terraform providers schema`.
   */
  description?: string;
  /**
   * Changing this attribute destroys and recreates the object instead of running update.ps1. Config attributes only.
   */
  requires_replace?: boolean;
  /**
   * Value injected into $InputData when the practitioner leaves this optional attribute null. Terraform state still records null - the default is visible to your scripts, not to Terraform. Its JSON type must match the declared type.
   */
  default?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Plan-time value constraints. Only string, int, and number config attributes can carry them.
   *
   * Items: One validator. Each entry is an object with exactly one recognized key.
   */
  validators?: {
    /**
     * The permitted values. Each must match the attribute's declared type.
     *
     * @minItems 1
     */
    one_of: [unknown, ...unknown[]];
  }[];
};

/**
 * A resource.tfps.json manifest, declaring the typed Terraform attributes of one resource in a provider built on terraform-provider-powershell. It sits in provider/resources/<name>/ next to the create.ps1, read.ps1, delete.ps1, and optional update.ps1 scripts that implement it.
 */
export interface TerraformPowerShellProviderResourceManifest {
  /**
   * Link to this document. The provider engine accepts and ignores it.
   */
  $schema?: string;
  /**
   * Manifest format version. Only 1 exists; the engine rejects any other value rather than half-applying a manifest written for a newer format.
   */
  version: 1;
  /**
   * What the resource manages. Surfaced in the Terraform Registry docs and in `terraform providers schema`.
   */
  description?: string;
  /**
   * Per-operation timeout for this resource's scripts. Omit to inherit the provider's timeout attribute.
   */
  timeout_seconds?: number;
  /**
   * The resource's attributes, keyed by attribute name. At least one is required.
   */
  attributes: {
    /**
     * Reserved. Every resource automatically gets a computed `id` populated from the value create.ps1 emits, so declaring one is a load error.
     */
    id?: {
      [k: string]: unknown | undefined;
    };
    [k: string]:
      | Attribute
      | {
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
