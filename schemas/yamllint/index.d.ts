/* eslint-disable */

export type Toggle = ('enable' | 'disable') | boolean;
/**
 * Set forbid-undeclared-aliases to true to avoid aliases that reference an anchor that hasn't been declared (either not declared at all, or declared later in the document).
 */
export type ForbidUndeclaredAliases = boolean;
/**
 * Set forbid-duplicated-anchors to true to avoid duplications of a same anchor.
 */
export type ForbidDuplicatedAnchors = boolean;
/**
 * Set forbid-unused-anchors to true to avoid anchors being declared but not used anywhere in the YAML document via alias.
 */
export type ForbidUnusedAnchors = boolean;
/**
 * Use this rule to control the use of flow mappings or number of spaces inside braces ({ and }).
 */
export type Braces = Toggle | Rule1;
/**
 * forbid is used to forbid the use of flow mappings which are denoted by surrounding braces ({ and }). Use true to forbid the use of flow mappings completely. Use non-empty to forbid the use of all flow mappings except for empty ones.
 */
export type Forbid = boolean | 'non-empty';
/**
 * min-spaces-inside defines the minimal number of spaces required inside braces.
 */
export type MinimumSpacesInside = number;
/**
 * max-spaces-inside defines the maximal number of spaces allowed inside braces.
 */
export type MaximumSpacesInside = number;
/**
 * min-spaces-inside-empty defines the minimal number of spaces required inside empty braces. (use -1 to default to the value for min-spaces-inside)
 */
export type MinimumSpacesInsideEmpty = number;
/**
 * max-spaces-inside-empty defines the maximal number of spaces allowed inside empty braces. (use -1 to default to the value for max-spaces-inside)
 */
export type MaximumSpacesInsideEmpty = number;
/**
 * Use this rule to control the use of flow sequences or the number of spaces inside brackets ([ and ]).
 */
export type Brackets = Toggle | Rule2;
/**
 * Use this rule to control the number of spaces before and after colons (:).
 */
export type Colons = Toggle | Rule3;
/**
 * max-spaces-before defines the maximal number of spaces allowed before colons (use -1 to disable).
 */
export type MaximumSpacesBefore = number;
/**
 * max-spaces-after defines the maximal number of spaces allowed after colons (use -1 to disable).
 */
export type MaximumSpacesAfter = number;
/**
 * Use this rule to control the number of spaces before and after commas (,).
 */
export type Commas = Toggle | Rule4;
/**
 * min-spaces-after defines the minimal number of spaces required after commas.
 */
export type MinimumSpacesAfter = number;
/**
 * Use this rule to control the position and formatting of comments.
 */
export type Comments = Toggle | Rule5;
/**
 * Use require-starting-space to require a space character right after the #. Set to true to enable, false to disable.
 */
export type RequireStartingSpace = boolean;
/**
 * Use ignore-shebangs to ignore a shebang at the beginning of the file when require-starting-space is set.
 */
export type IgnoreShebangs = boolean;
/**
 * min-spaces-from-content is used to visually separate inline comments from content. It defines the minimal required number of spaces between a comment and its preceding content.
 */
export type MinimumSpacesFromContent = number;
/**
 * Use this rule to force comments to be indented like content.
 */
export type CommentsIndentation = Toggle | Rule6;
/**
 * Use this rule to require or forbid the use of document end marker (...).
 */
export type DocumentEnd = Toggle | Rule7;
/**
 * Set present to true when the document end marker is required, or to false when it is forbidden.
 */
export type Present = boolean;
/**
 * Use this rule to require or forbid the use of document start marker (---).
 */
export type DocumentStart = Toggle | Rule8;
/**
 * Use this rule to set a maximal number of allowed consecutive blank lines.
 */
export type EmptyLines = Toggle | Rule9;
/**
 * max defines the maximal number of empty lines allowed in the document.
 */
export type Maximum = number;
/**
 * max-start defines the maximal number of empty lines allowed at the beginning of the file. This option takes precedence over max.
 */
export type MaximumStart = number;
/**
 * max-end defines the maximal number of empty lines allowed at the end of the file. This option takes precedence over max.
 */
export type MaximumEnd = number;
/**
 * Use this rule to prevent nodes with empty content, that implicitly result in null values.
 */
export type EmptyValues = Toggle | Rule10;
/**
 * Use forbid-in-block-mappings to prevent empty values in block mappings.
 */
export type ForbidInBlockMappings = boolean;
/**
 * Use forbid-in-flow-mappings to prevent empty values in flow mappings.
 */
export type ForbidInFlowMappings = boolean;
/**
 * Use forbid-in-block-sequences to prevent empty values in block sequences.
 */
export type ForbidInBlockSequences = boolean;
/**
 * Use this rule to limit the permitted values for floating-point numbers. YAML permits three classes of float expressions: approximation to real numbers, positive and negative infinity and "not a number".
 */
export type FloatValues = Toggle | Rule11;
/**
 * Use require-numeral-before-decimal to require floats to start with a numeral (ex 0.0 instead of .0).
 */
export type RequireNumeralBeforeDecimal = boolean;
/**
 * Use forbid-scientific-notation to forbid scientific notation.
 */
export type ForbidScientificNotation = boolean;
/**
 * Use forbid-nan to forbid NaN (not a number) values.
 */
export type ForbidNaN = boolean;
/**
 * Use forbid-inf to forbid infinite values.
 */
export type ForbidInf = boolean;
/**
 * Use this rule to control the number of spaces after hyphens (-).
 */
export type Hyphens = Toggle | Rule12;
/**
 * Use this rule to control the indentation.
 */
export type Indentation = Toggle | Rule13;
/**
 * spaces defines the indentation width, in spaces. Set either to an integer (e.g. 2 or 4, representing the number of spaces in an indentation level) or to consistent to allow any number, as long as it remains the same within the file.
 */
export type Spaces = number | 'consistent';
/**
 * indent-sequences defines whether block sequences should be indented or not (when in a mapping, this indentation is not mandatory - some people perceive the - as part of the indentation). Possible values: true, false, whatever and consistent.
 */
export type IndentSequences = boolean | 'consistent' | 'whatever';
/**
 * check-multi-line-strings defines whether to lint indentation in multi-line strings. Set to true to enable, false to disable.
 */
export type CheckMultiLineStrings = boolean;
/**
 * Use this rule to prevent multiple entries with the same key in mappings.
 */
export type KeyDuplicates = Toggle | Rule14;
/**
 * Use forbid-duplicated-merge-keys to forbid the usage of multiple merge keys <<.
 */
export type ForbidDuplicatedMergeKeys = boolean;
/**
 * Use this rule to enforce alphabetical ordering of keys in mappings. The sorting order uses the Unicode code point number as a default. As a result, the ordering is case-sensitive and not accent-friendly (see examples below). This can be changed by setting the global locale option. This allows one to sort case and accents properly.
 */
export type KeyOrdering = Toggle | Rule15;
/**
 * ignored-keys is a list of PCRE regexes to ignore some keys while checking order, if they match any regex.
 *
 * Items: PCRE regex to ignore some keys while checking order.
 */
export type IgnoredKeys = string[];
/**
 * Use this rule to set a limit to lines length.
 */
export type LineLength = Toggle | Rule16;
/**
 * allow-non-breakable-words is used to allow non breakable words (without spaces inside) to overflow the limit. This is useful for long URLs, for instance. Use true to allow, false to forbid.
 */
export type AllowNonBreakableWords = boolean;
/**
 * allow-non-breakable-inline-mappings implies allow-non-breakable-words and extends it to also allow non-breakable words in inline mappings.
 */
export type AllowNonBreakableInlineMappings = boolean;
/**
 * Use this rule to require a new line character (\n) at the end of files.
 *
 * The POSIX standard requires the last line to end with a new line character. All UNIX tools expect a new line at the end of files. Most text editors use this convention too.
 */
export type NewLineAtEndOfFile = Toggle | Rule17;
/**
 * Use this rule to force the type of new line characters.
 */
export type NewLines = Toggle | Rule18;
/**
 * Set type to unix to enforce UNIX-typed new line characters (\n), set type to dos to enforce DOS-typed new line characters (\r\n), or set type to platform to infer the type from the system running yamllint (\n on POSIX / UNIX / Linux / Mac OS systems or \r\n on DOS / Windows systems).
 */
export type Type = 'unix' | 'dos' | 'platform';
/**
 * Use this rule to prevent values with octal numbers. In YAML, numbers that start with 0 are interpreted as octal, but this is not always wanted. For instance 010 is the city code of Beijing, and should not be converted to 8.
 */
export type OctalValues = Toggle | Rule19;
/**
 * Use forbid-implicit-octal to prevent numbers starting with 0.
 */
export type ForbidImplicitOctal = boolean;
/**
 * Use forbid-explicit-octal to prevent numbers starting with 0o.
 */
export type ForbidExplicitOctal = boolean;
/**
 * Use this rule to forbid any string values that are not quoted, or to prevent quoted strings without needing it. You can also enforce the type of the quote used.
 */
export type QuotedStrings = Toggle | Rule20;
export type Rule20 = {
  'quote-type'?: QuoteType;
  required?: Required;
  'allow-quoted-quotes'?: AllowQuotedQuotes;
  'check-keys'?: CheckKeys;
  [k: string]: unknown | undefined;
};
/**
 * quote-type defines allowed quotes: single, double or any (default).
 */
export type QuoteType = 'single' | 'double' | 'any';
/**
 * required defines whether using quotes in string values is required (true, default) or not (false), or only allowed when really needed (only-when-needed).
 */
export type Required = boolean | 'only-when-needed';
/**
 * allow-quoted-quotes allows (true) using disallowed quotes for strings with allowed quotes inside. Default false.
 */
export type AllowQuotedQuotes = boolean;
/**
 * check-keys defines whether to apply the rules to keys in mappings. By default, quoted-strings rules apply only to values. Set this option to true to apply the rules to keys as well.
 */
export type CheckKeys = boolean;
/**
 * Use this rule to forbid trailing spaces at the end of lines.
 */
export type TrailingSpaces = Toggle | Rule21;
/**
 * Use this rule to forbid non-explicitly typed truthy values other than allowed ones (by default: true and false), for example YES or off.
 *
 * This can be useful to prevent surprises from YAML parsers transforming [yes, FALSE, Off] into [true, false, false] or {y: 1, yes: 2, on: 3, true: 4, True: 5} into {y: 1, true: 5}.
 *
 * Depending on the YAML specification version used by the YAML document, the list of truthy values can differ. In YAML 1.2, only capitalized / uppercased combinations of true and false are considered truthy, whereas in YAML 1.1 combinations of yes, no, on and off are too. To make the YAML specification version explicit in a YAML document, a %YAML 1.2 directive can be used (see example below).
 */
export type Truthy = Toggle | Rule22;
/**
 * A truthy value which will be ignored (allowed) during linting.
 */
export type AllowedValue =
  | 'TRUE'
  | 'True'
  | 'true'
  | 'FALSE'
  | 'False'
  | 'false'
  | 'YES'
  | 'Yes'
  | 'yes'
  | 'NO'
  | 'No'
  | 'no'
  | 'ON'
  | 'On'
  | 'on'
  | 'OFF'
  | 'Off'
  | 'off';
/**
 * allowed-values defines the list of truthy values which will be ignored during linting.
 */
export type AllowedValues = AllowedValue[];

/**
 * yamllint uses a set of rules to check YAML source files for problems.
 */
export interface Yamllint {
  /**
   * When writing a custom configuration file, you don’t need to redefine every rule. Just extend the default configuration (or any already-existing configuration file).
   */
  extends?: string;
  /**
   * To configure what yamllint should consider as YAML files when listing directories, set yaml-files configuration option.
   */
  'yaml-files'?: string[];
  /**
   * This is passed to Python's locale.setlocale.
   */
  locale?: string;
  /**
   * When linting a document with yamllint, a series of rules are checked against. A configuration file can be used to enable or disable these rules, to set their level (error or warning), but also to tweak their options.
   */
  rules?: {
    /**
     * Use this rule to report duplicated anchors and aliases referencing undeclared anchors.
     */
    anchors?: Toggle | Rule;
    braces?: Braces;
    brackets?: Brackets;
    colons?: Colons;
    commas?: Commas;
    comments?: Comments;
    'comments-indentation'?: CommentsIndentation;
    'document-end'?: DocumentEnd;
    'document-start'?: DocumentStart;
    'empty-lines'?: EmptyLines;
    'empty-values'?: EmptyValues;
    'float-values'?: FloatValues;
    hyphens?: Hyphens;
    indentation?: Indentation;
    'key-duplicates'?: KeyDuplicates;
    'key-ordering'?: KeyOrdering;
    'line-length'?: LineLength;
    'new-line-at-end-of-file'?: NewLineAtEndOfFile;
    'new-lines'?: NewLines;
    'octal-values'?: OctalValues;
    'quoted-strings'?: QuotedStrings;
    'trailing-spaces'?: TrailingSpaces;
    truthy?: Truthy;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface Rule {
  'forbid-undeclared-aliases'?: ForbidUndeclaredAliases;
  'forbid-duplicated-anchors'?: ForbidDuplicatedAnchors;
  'forbid-unused-anchors'?: ForbidUnusedAnchors;
  [k: string]: unknown | undefined;
}
export interface Rule1 {
  forbid?: Forbid;
  'min-spaces-inside'?: MinimumSpacesInside;
  'max-spaces-inside'?: MaximumSpacesInside;
  'min-spaces-inside-empty'?: MinimumSpacesInsideEmpty;
  'max-spaces-inside-empty'?: MaximumSpacesInsideEmpty;
  [k: string]: unknown | undefined;
}
export interface Rule2 {
  forbid?: Forbid;
  'min-spaces-inside'?: MinimumSpacesInside;
  'max-spaces-inside'?: MaximumSpacesInside;
  'min-spaces-inside-empty'?: MinimumSpacesInsideEmpty;
  'max-spaces-inside-empty'?: MaximumSpacesInsideEmpty;
  [k: string]: unknown | undefined;
}
export interface Rule3 {
  'max-spaces-before'?: MaximumSpacesBefore;
  'max-spaces-after'?: MaximumSpacesAfter;
  [k: string]: unknown | undefined;
}
export interface Rule4 {
  'max-spaces-before'?: MaximumSpacesBefore;
  'min-spaces-after'?: MinimumSpacesAfter;
  'max-spaces-after'?: MaximumSpacesAfter;
  [k: string]: unknown | undefined;
}
export interface Rule5 {
  'require-starting-space'?: RequireStartingSpace;
  'ignore-shebangs'?: IgnoreShebangs;
  'min-spaces-from-content'?: MinimumSpacesFromContent;
  [k: string]: unknown | undefined;
}
export interface Rule6 {
  level?: 'error' | 'warning';
  [k: string]: unknown | undefined;
}
export interface Rule7 {
  present?: Present;
  [k: string]: unknown | undefined;
}
export interface Rule8 {
  present?: Present;
  [k: string]: unknown | undefined;
}
export interface Rule9 {
  max?: Maximum;
  'max-start'?: MaximumStart;
  'max-end'?: MaximumEnd;
  [k: string]: unknown | undefined;
}
export interface Rule10 {
  'forbid-in-block-mappings'?: ForbidInBlockMappings;
  'forbid-in-flow-mappings'?: ForbidInFlowMappings;
  'forbid-in-block-sequences'?: ForbidInBlockSequences;
  [k: string]: unknown | undefined;
}
export interface Rule11 {
  'require-numeral-before-decimal'?: RequireNumeralBeforeDecimal;
  'forbid-scientific-notation'?: ForbidScientificNotation;
  'forbid-nan'?: ForbidNaN;
  'forbid-inf'?: ForbidInf;
  [k: string]: unknown | undefined;
}
export interface Rule12 {
  'max-spaces-after'?: MaximumSpacesAfter;
  [k: string]: unknown | undefined;
}
export interface Rule13 {
  spaces?: Spaces;
  'indent-sequences'?: IndentSequences;
  'check-multi-line-strings'?: CheckMultiLineStrings;
  [k: string]: unknown | undefined;
}
export interface Rule14 {
  'forbid-duplicated-merge-keys'?: ForbidDuplicatedMergeKeys;
  [k: string]: unknown | undefined;
}
export interface Rule15 {
  'ignored-keys'?: IgnoredKeys;
  [k: string]: unknown | undefined;
}
export interface Rule16 {
  max?: Maximum;
  'allow-non-breakable-words'?: AllowNonBreakableWords;
  'allow-non-breakable-inline-mappings'?: AllowNonBreakableInlineMappings;
  [k: string]: unknown | undefined;
}
export interface Rule17 {
  level?: 'error' | 'warning';
  [k: string]: unknown | undefined;
}
export interface Rule18 {
  type?: Type;
  [k: string]: unknown | undefined;
}
export interface Rule19 {
  'forbid-implicit-octal'?: ForbidImplicitOctal;
  'forbid-explicit-octal'?: ForbidExplicitOctal;
  [k: string]: unknown | undefined;
}
export interface Rule21 {
  level?: 'error' | 'warning';
  [k: string]: unknown | undefined;
}
export interface Rule22 {
  'allowed-values'?: AllowedValues;
  'check-keys'?: CheckKeys;
  [k: string]: unknown | undefined;
}
