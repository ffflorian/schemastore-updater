/* eslint-disable */

export type LocalizedTextDef =
  | string
  | {
      text: string;
      i18n?: string;
    };
export type FormItemsDef = InputsDef | FieldSetDef | FormFragmentDef | ItemSetDef | OptionSetDef;
export type InputsDef =
  | TextLineDef
  | TextAreaDef
  | RadioButtonDef
  | CheckBoxDef
  | AttachmentUploaderDef
  | ComboBoxDef
  | ContentSelectorDef
  | ContentTypeFilterDef
  | CustomSelectorDef
  | DateDef
  | DateTimeDef
  | DoubleDef
  | GeoPointDef
  | HtmlAreaDef
  | ImageSelectorDef
  | InstantDef
  | LongDef
  | MediaSelectorDef
  | PrincipalSelectorDef
  | TagDef
  | TimeDef;
export type CustomSelectorDef = {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'CustomSelector';
  /**
   * @deprecated
   * Deprecated. Use 'extension' instead.
   */
  service?: string;
  extension?: string;
  params?: {
    [k: string]: string | undefined;
  };
  galleryMode?: boolean;
  default?: string;
} & CustomSelectorDef1;
export type CustomSelectorDef1 = {
  [k: string]: unknown | undefined;
};
export type FieldSetDef = FormItemDef & {
  label: LocalizedTextDef;
  items?: FormItemsDef[];
  type?: 'FieldSet';
};
export type FormFragmentDef = {
  include?: string;
  name?: string;
  type?: 'FormFragment';
  [k: string]: unknown | undefined;
} & FormFragmentDef1;
export type FormFragmentDef1 = {
  [k: string]: unknown | undefined;
};
export type ItemSetDef = FormItemDef & {
  name: string;
  label?: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  items?: FormItemsDef[];
  type?: 'ItemSet';
};
export type OptionSetDef = FormItemDef & {
  type?: 'OptionSet';
  name: string;
  label?: LocalizedTextDef;
  expanded?: boolean;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  options: OptionSetOptionsDef;
  selection?: OccurrencesDef;
};
export type OptionSetOptionsDef = OptionSetOptionDef[];
export type FormDef = FormItemsDef[];

/**
 * YAML descriptor for Enonic XP Mixins.
 * https://developer.enonic.com/docs/cms/stable/content/mixins
 */
export interface HttpsJsonSchemastoreOrgEnonicXpMixin800B4Json {
  kind: 'Mixin';
  title: LocalizedTextDef;
  description?: LocalizedTextDef;
  form?: FormDef;
  config?: GenericValueDef;
}
export interface TextLineDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'TextLine';
  maxLength?: number;
  regexp?: string;
  showCounter?: boolean;
  default?: string;
}
export interface OccurrencesDef {
  min: number;
  max: number;
}
export interface GenericValueDef {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
export interface TextAreaDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'TextArea';
  maxLength?: number;
  showCounter?: boolean;
  default?: string;
}
export interface RadioButtonDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'RadioButton';
  options: {
    value?: string;
    label?: LocalizedTextDef;
    [k: string]: unknown | undefined;
  }[];
  default?: string;
}
export interface CheckBoxDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'CheckBox';
  alignment?: string;
  default?: 'checked' | 'unchecked';
}
export interface AttachmentUploaderDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'AttachmentUploader';
  default?: string;
}
export interface ComboBoxDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'ComboBox';
  options: {
    value?: string;
    label?: LocalizedTextDef;
  }[];
  default?: string;
}
export interface ContentSelectorDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'ContentSelector';
  allowContentType?: string[];
  allowPath?: string[];
  treeMode?: boolean;
  hideToggleIcon?: boolean;
}
export interface ContentTypeFilterDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'ContentTypeFilter';
  context?: boolean;
  default?: string;
}
export interface DateDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'Date';
  default?: string;
}
export interface DateTimeDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'DateTime';
  default?: string;
}
export interface DoubleDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'Double';
  max?: number;
  min?: number;
  default?: number;
}
export interface GeoPointDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'GeoPoint';
  default?: string;
}
export interface HtmlAreaDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'HtmlArea';
  exclude?: string;
  include?: string;
  allowHeadings?: string;
  default?: string;
}
export interface ImageSelectorDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'ImageSelector';
  allowPath?: string[];
  treeMode?: boolean;
  hideToggleIcon?: boolean;
}
export interface InstantDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'Instant';
  default?: string;
}
export interface LongDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'Long';
  max?: number;
  min?: number;
  default?: number;
}
export interface MediaSelectorDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'MediaSelector';
  allowContentType?: string[];
  allowPath?: string[];
  treeMode?: boolean;
  hideToggleIcon?: boolean;
}
export interface PrincipalSelectorDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'PrincipalSelector';
  principalType?: 'USER' | 'GROUP' | 'ROLE';
  default?: string;
}
export interface TagDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'Tag';
}
export interface TimeDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  occurrences?: OccurrencesDef;
  attributes?: GenericValueDef;
  type: 'Time';
  default?: string;
}
export interface FormItemDef {
  type: string;
  [k: string]: unknown | undefined;
}
export interface OptionSetOptionDef {
  name: string;
  label: LocalizedTextDef;
  helpText?: LocalizedTextDef;
  selected?: boolean;
  items?: FormItemsDef[];
}
