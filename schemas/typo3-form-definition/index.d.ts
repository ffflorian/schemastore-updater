/* eslint-disable */

/**
 * Form in Resources/Private/Forms/<name>.form.yaml.
 */
export interface TYPO3FormDefinition {
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
   * Unique identifier of the form.
   */
  identifier: string;
  /**
   * Always "Form".
   */
  type: 'Form';
  /**
   * Title of the form.
   */
  label?: string;
  /**
   * Prototype the form is based on.
   */
  prototypeName?: string;
  /**
   * Class rendering the form.
   */
  rendererClassName?: string;
  /**
   * Rendering options, for example submitButtonLabel.
   */
  renderingOptions?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Actions run after submitting.
   */
  finishers?:
    | Finisher[]
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Pages of the form.
   */
  renderables?:
    | Renderable[]
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Variants of the form.
   */
  variants?:
    | Variant[]
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Options for the form editor.
   */
  formEditor?: {
    [k: string]: unknown | undefined;
  };
}
export interface Finisher {
  /**
   * Finisher, as defined in the prototype.
   */
  identifier:
    | (
        | 'Closure'
        | 'Confirmation'
        | 'DeleteUploads'
        | 'EmailToReceiver'
        | 'EmailToSender'
        | 'FlashMessage'
        | 'Redirect'
        | 'SaveToDatabase'
      )
    | string;
  /**
   * Options of the finisher.
   */
  options?: {
    [k: string]: unknown | undefined;
  };
}
export interface Renderable {
  /**
   * Unique identifier of the element.
   */
  identifier: string;
  /**
   * Type of the element.
   */
  type:
    | (
        | 'AdvancedPassword'
        | 'Checkbox'
        | 'ContentElement'
        | 'CountrySelect'
        | 'Date'
        | 'Email'
        | 'Fieldset'
        | 'FileUpload'
        | 'GridColumn'
        | 'GridRow'
        | 'Hidden'
        | 'Honeypot'
        | 'ImageUpload'
        | 'MultiCheckbox'
        | 'MultiSelect'
        | 'Number'
        | 'Page'
        | 'Password'
        | 'RadioButton'
        | 'SingleSelect'
        | 'StaticText'
        | 'SummaryPage'
        | 'Telephone'
        | 'Text'
        | 'Textarea'
        | 'Url'
      )
    | string;
  /**
   * Label of the element.
   */
  label?: string;
  /**
   * Initial value of the element.
   */
  defaultValue?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Properties of the element, for example options of a select.
   */
  properties?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Rendering options.
   */
  renderingOptions?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Validators applied to the submitted value.
   */
  validators?:
    | Validator[]
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Elements of this page or section.
   */
  renderables?:
    | Renderable[]
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Variants of the element.
   */
  variants?:
    | Variant[]
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Options for the form editor.
   */
  formEditor?: {
    [k: string]: unknown | undefined;
  };
}
export interface Validator {
  /**
   * Validator, as defined in the prototype.
   */
  identifier:
    | (
        | 'Alphanumeric'
        | 'Count'
        | 'DateRange'
        | 'DateTime'
        | 'EmailAddress'
        | 'FileSize'
        | 'Float'
        | 'Integer'
        | 'NotEmpty'
        | 'Number'
        | 'NumberRange'
        | 'RegularExpression'
        | 'StringLength'
        | 'Text'
      )
    | string;
  /**
   * Options of the validator.
   */
  options?: {
    [k: string]: unknown | undefined;
  };
}
export interface Variant {
  /**
   * Identifier of the variant.
   */
  identifier: string;
  /**
   * Expression, for example 'stepType == "SummaryPage"'.
   */
  condition?: string;
  [k: string]: unknown | undefined;
}
