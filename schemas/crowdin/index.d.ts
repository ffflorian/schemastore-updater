/* eslint-disable */

export type ProjectID = string;
export type ProjectIDEnvironmentVariable = string;
export type APIToken = string;
export type APITokenEnvironmentVariable = string;
export type BasePath = string;
export type BasePathEnvironmentVariable = string;
export type BaseURL = string;
export type BaseURLEnvironmentVariable = string;
export type PreserveHierarchy = boolean;
export type CommitMessage = string;
/**
 * Replace the default commit message with the one specified in commit_message.
 */
export type AppendCommitMessage = boolean;
export type Language = string;
/**
 * Specify a list of specific languages to export.
 */
export type ExportLanguages = Language[];
export type Source = string;
export type Translation = string;
export type Ignore = string[];
export type ExcludedTargetLanguage = string;
export type ExcludedTargetLanguages = ExcludedTargetLanguage[];
export type Scheme = string;
export type Destination = string;
export type Type = string;
export type UpdateOption = 'update_as_unapproved' | 'update_without_changes';
/**
 * Defines whether to translate texts placed inside the tags.
 */
export type TranslateContent = number;
/**
 * Defines whether to translate tags' attributes.
 */
export type TranslateAttributes = number;
/**
 * Defines whether to split long texts into smaller text segments.
 */
export type ContentSegmentation = number;
export type TranslatableElement = string;
/**
 * An array of strings, where each item is the XPaths to DOM element that should be imported.
 */
export type TranslatableElements = TranslatableElement[];
export type SkipUntranslatedStrings = boolean;
export type SkipUntranslatedFiles = boolean;
export type ExportOnlyApproved = boolean;
/**
 * Defines whether a single quote should be escaped by another single quote or backslash in exported translations.
 */
export type EscapeQuotes = number;
/**
 * Defines whether any special characters (=, :, ! and #) should be escaped by backslash in exported translations.
 */
export type EscapeSpecialCharacters = number;
export type FirstLineContainsHeader = boolean;
export type Label = string;
export type Labels = Label[];
export type Files = File[];

/**
 * Configuration for Crowdin, a crowd-translation platform.
 */
export interface HttpsJsonSchemastoreOrgCrowdinJson {
  project_id?: ProjectID;
  project_id_env?: ProjectIDEnvironmentVariable;
  api_token?: APIToken;
  api_token_env?: APITokenEnvironmentVariable;
  base_path?: BasePath;
  base_path_env?: BasePathEnvironmentVariable;
  base_url?: BaseURL;
  base_url_env?: BaseURLEnvironmentVariable;
  preserve_hierarchy?: PreserveHierarchy;
  commit_message?: CommitMessage;
  append_commit_message?: AppendCommitMessage;
  export_languages?: ExportLanguages;
  files?: Files;
  [k: string]: unknown | undefined;
}
export interface File {
  source?: Source;
  translation?: Translation;
  ignore?: Ignore;
  translation_replace?: TranslationReplace;
  excluded_target_languages?: ExcludedTargetLanguages;
  scheme?: Scheme;
  dest?: Destination;
  type?: Type;
  update_option?: UpdateOption;
  translate_content?: TranslateContent;
  translate_attributes?: TranslateAttributes;
  content_segmentation?: ContentSegmentation;
  translatable_elements?: TranslatableElements;
  skip_untranslated_strings?: SkipUntranslatedStrings;
  skip_untranslated_files?: SkipUntranslatedFiles;
  export_only_approved?: ExportOnlyApproved;
  escape_quotes?: EscapeQuotes;
  escape_special_characters?: EscapeSpecialCharacters;
  first_line_contains_header?: FirstLineContainsHeader;
  languages_mapping?: LanguageMapping;
  labels?: Labels;
  [k: string]: unknown | undefined;
}
export interface TranslationReplace {
  [k: string]: string | undefined;
}
export interface LanguageMapping {
  two_letters_code?: {
    [k: string]: string | undefined;
  };
  android_code?: {
    [k: string]: string | undefined;
  };
  [k: string]: unknown | undefined;
}
