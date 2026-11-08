/* eslint-disable */

/**
 * Form set in Configuration/Form/<SetFolder>/config.yaml.
 */
export interface TYPO3FormConfiguration {
  /**
   * Other YAML files to include.
   */
  imports?: {
    /**
     * Absolute, relative or "EXT:" path of the file.
     */
    resource: string;
    /**
     * Treats resource as a pattern like "*.yaml".
     */
    glob?: boolean;
  }[];
  /**
   * Unique name like "my-vendor/my-form-set".
   */
  name?: string;
  /**
   * Label shown in diagnostic output.
   */
  label?: string;
  /**
   * Lower priorities are loaded first.
   */
  priority?: number;
  /**
   * Where forms are stored.
   */
  persistenceManager?: {
    /**
     * Deprecated.
     */
    allowedFileMounts?:
      | {
          [k: string]: string | undefined;
        }
      | string[];
    /**
     * Extension paths to load forms from, for example "EXT:my_extension/Resources/Private/Forms/".
     */
    allowedExtensionPaths?:
      | {
          [k: string]: string | undefined;
        }
      | string[];
    /**
     * Allows saving forms in extension paths.
     */
    allowSaveToExtensionPaths?: boolean;
    /**
     * Allows deleting forms in extension paths.
     */
    allowDeleteFromExtensionPaths?: boolean;
    /**
     * Sort keys in the form manager.
     */
    sortByKeys?:
      | {
          [k: string]: string | undefined;
        }
      | string[];
    /**
     * Sorts ascending in the form manager.
     */
    sortAscending?: boolean;
  };
  /**
   * Prototypes, keyed by name.
   */
  prototypes?: {
    [k: string]:
      | {
          /**
           * Form element types, keyed by type.
           */
          formElementsDefinition?: {
            [k: string]:
              | {
                  /**
                   * Class implementing the element.
                   */
                  implementationClassName?: string;
                  /**
                   * Default properties of the element.
                   */
                  properties?: {
                    [k: string]: unknown | undefined;
                  };
                  /**
                   * Default rendering options of the element.
                   */
                  renderingOptions?: {
                    [k: string]: unknown | undefined;
                  };
                  /**
                   * Configuration of the element in the form editor.
                   */
                  formEditor?: {
                    [k: string]: unknown | undefined;
                  };
                  /**
                   * Validators added to every element of this type.
                   */
                  validators?: unknown[];
                  /**
                   * Variants added to every element of this type.
                   */
                  variants?: unknown[];
                  [k: string]: unknown | undefined;
                }
              | null
              | undefined;
          };
          /**
           * Finishers, keyed by identifier.
           */
          finishersDefinition?: {
            [k: string]:
              | {
                  /**
                   * Class implementing the finisher.
                   */
                  implementationClassName?: string;
                  /**
                   * Default options of the finisher.
                   */
                  options?: {
                    [k: string]: unknown | undefined;
                  };
                  /**
                   * Configuration of the finisher in the form editor.
                   */
                  formEditor?: {
                    [k: string]: unknown | undefined;
                  };
                  /**
                   * Configuration of the finisher in the form plugin.
                   */
                  FormEngine?: {
                    [k: string]: unknown | undefined;
                  };
                  [k: string]: unknown | undefined;
                }
              | null
              | undefined;
          };
          /**
           * Validators, keyed by identifier.
           */
          validatorsDefinition?: {
            [k: string]:
              | {
                  /**
                   * Class implementing the validator.
                   */
                  implementationClassName?: string;
                  /**
                   * Default options of the validator.
                   */
                  options?: {
                    [k: string]: unknown | undefined;
                  };
                  /**
                   * Configuration of the validator in the form editor.
                   */
                  formEditor?: {
                    [k: string]: unknown | undefined;
                  };
                  [k: string]: unknown | undefined;
                }
              | null
              | undefined;
          };
          /**
           * Configuration of the form editor.
           */
          formEditor?: {
            [k: string]: unknown | undefined;
          };
          /**
           * Configuration of the form plugin in the backend.
           */
          formEngine?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  /**
   * Configuration of the form manager backend module.
   */
  formManager?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
