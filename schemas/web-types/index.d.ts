/* eslint-disable */

export type RequiredContext =
  | {
      kind: string;
      name: string;
    }
  | {
      anyOf: RequiredContext[];
    }
  | {
      allOf: RequiredContext[];
    }
  | {
      not: RequiredContext;
    };
/**
 * Language in which JavaScript objects types are specified.
 */
export type JsTypesSyntax = 'typescript';
/**
 * Markup language in which descriptions are formatted.
 */
export type DescriptionMarkup = 'html' | 'markdown' | 'none';
/**
 * A RegEx pattern to match whole content. Syntax should work with at least ECMA, Java and Python implementations.
 */
export type Pattern =
  | string
  | {
      regex?: string;
      'case-sensitive'?: boolean;
      [k: string]: unknown | undefined;
    };
/**
 * Since 2024.2. Custom package manager dependencies, which would enable context according to the rules of custom provider.
 */
export type CustomEnablementRules = string[];
/**
 * This interface was referenced by `NameConversionRulesSingle`'s JSON-Schema definition
 * via the `patternProperty` "^/[^/\n\r]+/[^/\n\r]+$".
 *
 * This interface was referenced by `NameConversionRulesSingle1`'s JSON-Schema definition
 * via the `patternProperty` "^/[^/\n\r]+/[^/\n\r]+$".
 */
export type NameConverter =
  'as-is' | 'PascalCase' | 'camelCase' | 'lowercase' | 'UPPERCASE' | 'kebab-case' | 'snake_case';
/**
 * This interface was referenced by `NameConversionRulesMultiple`'s JSON-Schema definition
 * via the `patternProperty` "^/[^/\n\r]+/[^/\n\r]+$".
 *
 * This interface was referenced by `NameConversionRulesMultiple1`'s JSON-Schema definition
 * via the `patternProperty` "^/[^/\n\r]+/[^/\n\r]+$".
 *
 * This interface was referenced by `NameConversionRulesMultiple2`'s JSON-Schema definition
 * via the `patternProperty` "^/[^/\n\r]+/[^/\n\r]+$".
 */
export type NameConverters = NameConverter[];
/**
 * Relative path to the icon representing the symbol or actual SVG of the icon.
 */
export type Icon = string;
/**
 * Deprecated, use top-level js-types-syntax property.
 */
export type DeprecatedTypesSyntax = JsTypesSyntax;
/**
 * Deprecated, use top-level property.
 */
export type DeprecatedDescriptionMarkup = DescriptionMarkup;
export type HtmlElement = BaseContribution & HtmlContributionsHost;
export type Name = string;
/**
 * Short description to be rendered in documentation popup. It will be rendered according to description-markup setting.
 */
export type Description = string;
/**
 * Link to online documentation.
 */
export type DocUrl = string;
/**
 * Allows to specify the source of the entity. For Vue.js component this may be for instance a class.
 */
export type Source =
  | {
      /**
       * Path to the file, relative to the web-types JSON.
       */
      file: string;
      /**
       * Offset in the file under which the source symbol, like class name, is located.
       */
      offset: number;
    }
  | {
      /**
       * Name of module, which exports the symbol. May be omitted, in which case it's assumed to be the name of the library.
       */
      module?: string;
      /**
       * Name of the exported symbol.
       */
      symbol: string;
    };
/**
 * Version since this symbol is available.
 */
export type Since = string;
/**
 * Specifies whether the symbol is deprecated. Deprecated symbol usage is discouraged, but still supported. Value can be a boolean or a string message with explanation and migration information.
 */
export type Deprecated = boolean | string;
/**
 * Version in which this symbol was first deprecated.
 */
export type DeprecatedSince = string;
/**
 * Specifies whether the symbol is obsolete. Obsolete symbols are no longer supported. Value can be a boolean or a string message with explanation and migration information.
 */
export type Obsolete = boolean | string;
/**
 * Version in which this symbol was first made obsolete.
 */
export type ObsoleteSince = string;
/**
 * Specifies whether the symbol is experimental. Value can be a boolean or a string message with explanation. Experimental symbols should be used with caution as the API might change.
 */
export type Experimental = boolean | string;
export type Priority = 'lowest' | 'low' | 'normal' | 'high' | 'highest';
export type Proximity = number;
/**
 * Mark contribution as virtual. Virtual contributions can be filtered out if needed in references. A virtual contribution meaning may differ by framework or kind contexts, but usually means something synthetic or something, which gets erased in the runtime by the framework. E.g. Vue or Angular attribute bindings are virtual.
 */
export type Virtual = boolean;
/**
 * Mark contribution as abstract. Such contributions serve only as super contributions for other contributions.
 */
export type Abstract = boolean;
/**
 * Mark contribution as an extension. Such contributions do not define a new contribution on their own, but can provide additional properties or contributions to existing contributions.
 */
export type Extension = boolean;
/**
 * A reference to an element in Web-Types model.
 */
export type Reference = ReferenceWithProps | string;
export type NamePatternRoot = NamePattern | string;
export type NamePattern =
  | {
      required?: Required;
      unique?: boolean;
      repeat?: boolean;
      template?: NamePatternTemplate;
      or?: NamePatternTemplate;
      delegate?: Reference;
      deprecated?: Deprecated;
      priority?: Priority;
      proximity?: Proximity;
      items?: ListReference;
    }
  | {
      regex: string;
      'case-sensitive'?: boolean;
    };
export type Required = boolean;
/**
 * @minItems 1
 */
export type NamePatternTemplate = [
  string | NamePatternTemplate | NamePattern,
  ...(string | NamePatternTemplate | NamePattern)[]
];
/**
 * A reference to an element in Web-Types model.
 */
export type ListReference = Reference | Reference[];
/**
 * This interface was referenced by `Html1`'s JSON-Schema definition
 * via the `patternProperty` "^(?!pattern|elements|attributes|events)$".
 *
 * This interface was referenced by `Html`'s JSON-Schema definition
 * via the `patternProperty` "^(?!pattern|elements|attributes|events)$".
 */
export type GenericHtmlContributions = GenericHtmlContributionOrProperty | GenericHtmlContributionOrProperty[];
export type GenericHtmlContributionOrProperty = GenericHtmlContribution | string | number | boolean;
export type GenericHtmlContribution = GenericContribution & HtmlContributionsHost;
export type Default = string;
export type HtmlValueType = string | TypeReference | Type[];
export type Type = TypeReference | string;
export type HtmlAttribute = BaseContribution &
  HtmlContributionsHost & {
    value?: HtmlAttributeValue;
    default?: string;
    required?: Required;
    'vue-argument'?: DeprecatedHtmlAttributeVueArgument;
    /**
     * Deprecated vue-specific property - contribute Vue directives to /contributions/html/vue-directives
     */
    'vue-modifiers'?: DeprecatedHtmlAttributeVueModifier[];
    [k: string]: unknown | undefined;
  };
export type CssProperty = BaseContribution &
  CssContributionsHost & {
    values?: string[];
    [k: string]: unknown | undefined;
  };
export type CssPseudoElement = BaseContribution &
  CssContributionsHost & {
    /**
     * Specify whether the pseudo-element requires arguments.
     */
    arguments?: boolean;
    [k: string]: unknown | undefined;
  };
export type CssPseudoClass = BaseContribution &
  CssContributionsHost & {
    /**
     * Specify whether the pseudo-class requires arguments.
     */
    arguments?: boolean;
    [k: string]: unknown | undefined;
  };
export type CssGenericItem = BaseContribution & CssContributionsHost;
/**
 * This interface was referenced by `CssContributionsHost`'s JSON-Schema definition
 * via the `patternProperty` "^(?!pattern|properties|pseudo-elements|pseudo-classes|functions|classes|parts)$".
 *
 * This interface was referenced by `Css`'s JSON-Schema definition
 * via the `patternProperty` "^(?!pattern|properties|pseudo-elements|pseudo-classes|functions|classes|parts)$".
 *
 * This interface was referenced by `Css1`'s JSON-Schema definition
 * via the `patternProperty` "^(?!pattern|properties|pseudo-elements|pseudo-classes|functions|classes|parts)$".
 */
export type GenericCssContributions = GenericCssContributionOrProperty | GenericCssContributionOrProperty[];
export type GenericCssContributionOrProperty = string | number | boolean | GenericCssContribution;
export type GenericCssContribution = GenericContribution & CssContributionsHost;
export type GenericJsContribution = GenericContribution & JsContributionsHost;
export type JsProperty = GenericContribution &
  JsContributionsHost & {
    /**
     * Specifies whether the property is read only.
     */
    'read-only'?: boolean;
    [k: string]: unknown | undefined;
  };
export type JsSymbol = TypedContribution &
  JsContributionsHost & {
    /**
     * Kind of the symbol. Default is variable.
     */
    kind?: 'Variable' | 'Function' | 'Namespace' | 'Class' | 'Interface' | 'Enum' | 'Alias' | 'Module';
    [k: string]: unknown | undefined;
  };
/**
 * Specify type according to selected language for type syntax. The type can be specified by a string expression, an object with list of imports and an expression, or an array of possible types.
 */
export type TypeList = Type | Type[];
/**
 * This interface was referenced by `JsContributionsHost`'s JSON-Schema definition
 * via the `patternProperty` "^(?!pattern|events|properties|symbols)$".
 *
 * This interface was referenced by `Js`'s JSON-Schema definition
 * via the `patternProperty` "^(?!pattern|events|properties|symbols)$".
 *
 * This interface was referenced by `JsGlobal`'s JSON-Schema definition
 * via the `patternProperty` "^(?!pattern|events|symbols)$".
 */
export type GenericJsContributions = GenericJsContributionOrProperty | GenericJsContributionOrProperty[];
export type GenericJsContributionOrProperty = string | number | boolean | GenericJsContribution;
/**
 * Specify list of contribution kinds qualified with a namespace, for which during reference resolution this will be the final contribution host. E.g. if a special HTML element does not accept standard attributes, add:
 * "exclusive-contributions": ["/html/attributes"].
 */
export type ExclusiveContributions = string[];

export interface JSONSchemaForWebTypes {
  $schema?: string;
  /**
   * Framework, for which the components are provided by the library. If the library is not enabled in a particular context, all symbols from this file will not be available as well. If you want symbols to be always available do not specify framework.
   */
  framework?: string;
  /**
   * Since 2024.2. Specify contexts, which are required to enable contributions from this file.
   */
  'required-context'?:
    | {
        kind: string;
        name: string;
      }
    | {
        anyOf: RequiredContext[];
      }
    | {
        allOf: RequiredContext[];
      }
    | {
        not: RequiredContext;
      };
  /**
   * Deprecated since 2024.2 because of ambiguous meaning - use "required-context" instead.
   */
  context?:
    | {
        kind: string;
        name: string;
      }
    | {
        anyOf: RequiredContext[];
      }
    | {
        allOf: RequiredContext[];
      }
    | {
        not: RequiredContext;
      };
  /**
   * Name of the library.
   */
  name: string;
  /**
   * Version of the library, for which Web-Types are provided.
   */
  version: string;
  'js-types-syntax'?: JsTypesSyntax;
  'description-markup'?: DescriptionMarkup;
  'framework-config'?: FrameworkConfig;
  'contexts-config'?: ContextsConfig;
  'default-icon'?: Icon;
  /**
   * Symbol can be contributed to one of the 3 namespaces - HTML, CSS and JS. Within a particular namespace there can be different kinds of symbols. In each of the namespaces, there are several predefined kinds, which integrate directly with IDE, but providers are free to define their own.
   */
  contributions?: {
    html?: Html;
    css?: Css1;
    js?: JsGlobal;
  };
}
/**
 * Provide configuration for the specified web framework. This is an advanced feature, which is used to provide support for templating frameworks like Angular, Vue, Svelte, etc.
 */
export interface FrameworkConfig {
  'enable-when'?: EnablementRules;
  'disable-when'?: DisablementRules;
  'canonical-names'?: NameConversionRulesSingle;
  'match-names'?: NameConversionRulesMultiple;
  'name-variants'?: NameConversionRulesMultiple1;
}
/**
 * Specify rules for enabling web framework support. Only one framework can be enabled in a particular file. If you need your contributions to be enabled in all files, regardless of the context, do not specify the framework.
 */
export interface EnablementRules {
  /**
   * Node.js package names, which enable framework support within the folder containing the package.json.
   */
  'node-packages'?: string[];
  /**
   * Since 2024.2. Ruby gem names, which enable framework support within the particular Ruby module.
   */
  'ruby-gems'?: string[];
  /**
   * Extensions of files, which should have the framework support enabled. Use this to support custom file extensions like '.vue' or '.svelte'. Never specify generic extensions like '.html', '.js' or '.ts'. If you need your contributions to be present in every file don't specify the framework at all
   */
  'file-extensions'?: string[];
  /**
   * RegExp patterns to match file names, which should have the framework support enabled. Use carefully as broken pattern may even freeze IDE.
   */
  'file-name-patterns'?: Pattern[];
  /**
   * Global JavaScript libraries names enabled within the IDE, which enable framework support in the whole project
   */
  'ide-libraries'?: string[];
  /**
   * List of tool executables (without extension), which presence should be checked in the project. In case of Node projects, such tools will be searched in node_modules/.bin/
   */
  'project-tool-executables'?: string[];
  [k: string]: CustomEnablementRules | string[] | Pattern[] | undefined;
}
/**
 * Specify rules for disabling web framework support. These rules take precedence over enable-when rules. They allow to turn off framework support in case of some conflicts between frameworks priority.
 */
export interface DisablementRules {
  /**
   * Extensions of files, which should have the framework support disabled
   */
  'file-extensions'?: string[];
  /**
   * RegExp patterns to match file names, which should have the framework support disabled
   */
  'file-name-patterns'?: Pattern[];
}
/**
 * In many frameworks symbols can have multiple versions of a name. Specify canonical name conversion rule for names of particular symbol kinds against which comparisons will be made. Format of the 'canonical-names' property names is '{namespace}/{symbol kind}'. By default symbol names in HTML namespace are converted to lower-case, and in CSS and JS namespaces are left as-is. In case of name patterns, rules are applied to each part of the pattern separately, so even if the symbol with pattern is in HTML namespace, references to JS events will be case-sensitive.
 */
export interface NameConversionRulesSingle {
  [k: string]: NameConverter | undefined;
}
/**
 * Provide an array of name conversions, in which particular symbol kinds should be matched against canonical names of symbols. By default symbol names are converted using canonical-names rule.
 */
export interface NameConversionRulesMultiple {
  [k: string]: NameConverters | undefined;
}
/**
 * Provide an array of name conversions, in which particular symbol kinds should be proposed in auto completion. Format of the 'name-variants' property names is '{namespace}/{symbol kind}'. All symbol kinds are by default provided as-is.
 */
export interface NameConversionRulesMultiple1 {
  [k: string]: NameConverters | undefined;
}
/**
 * Provide configuration for Web Types contexts. This allows to contribute additional Web Types for example if a particular library is present in the project.
 */
export interface ContextsConfig {
  [k: string]: ContextKindConfig | undefined;
}
export interface ContextKindConfig {
  /**
   * Context kind. Only a single context of the particular kind will be enabled. An example of context kind is framework, which has dedicated support in Web Types.
   */
  kind?: string;
  'enable-when'?: EnablementRules1;
  'disable-when'?: DisablementRules1;
  [k: string]: ContextConfig | string | EnablementRules1 | DisablementRules1 | undefined;
}
/**
 * Specify rules for enabling web framework support. Only one framework can be enabled in a particular file. If you need your contributions to be enabled in all files, regardless of the context, do not specify the framework.
 */
export interface EnablementRules1 {
  /**
   * Node.js package names, which enable framework support within the folder containing the package.json.
   */
  'node-packages'?: string[];
  /**
   * Since 2024.2. Ruby gem names, which enable framework support within the particular Ruby module.
   */
  'ruby-gems'?: string[];
  /**
   * Extensions of files, which should have the framework support enabled. Use this to support custom file extensions like '.vue' or '.svelte'. Never specify generic extensions like '.html', '.js' or '.ts'. If you need your contributions to be present in every file don't specify the framework at all
   */
  'file-extensions'?: string[];
  /**
   * RegExp patterns to match file names, which should have the framework support enabled. Use carefully as broken pattern may even freeze IDE.
   */
  'file-name-patterns'?: Pattern[];
  /**
   * Global JavaScript libraries names enabled within the IDE, which enable framework support in the whole project
   */
  'ide-libraries'?: string[];
  /**
   * List of tool executables (without extension), which presence should be checked in the project. In case of Node projects, such tools will be searched in node_modules/.bin/
   */
  'project-tool-executables'?: string[];
  [k: string]: CustomEnablementRules | string[] | Pattern[] | undefined;
}
/**
 * Specify rules for disabling web framework support. These rules take precedence over enable-when rules. They allow to turn off framework support in case of some conflicts between frameworks priority.
 */
export interface DisablementRules1 {
  /**
   * Extensions of files, which should have the framework support disabled
   */
  'file-extensions'?: string[];
  /**
   * RegExp patterns to match file names, which should have the framework support disabled
   */
  'file-name-patterns'?: Pattern[];
}
/**
 * Since 2024.2. Provide rules for setting a particular name for particular context kind. This allows to contribute additional Web Types for example if a particular library is present in the project.
 */
export interface ContextConfig {
  'enable-when'?: EnablementRules;
  'disable-when'?: DisablementRules;
}
/**
 * Contains contributions to HTML namespace. It's property names represent symbol kinds, its property values contain list of contributions of particular kind. There are 2 predefined kinds, which integrate directly with IDE - HTML elements and HTML attributes. There are also 2 deprecated kinds: tags (which is equivalent to 'elements') and 'events' (which was moved to JS namespace)
 */
export interface Html {
  'types-syntax'?: DeprecatedTypesSyntax;
  'description-markup'?: DeprecatedDescriptionMarkup;
  /**
   * Deprecated, use `elements` property.
   */
  tags?: HtmlElement[];
  [k: string]:
    GenericHtmlContributions | DeprecatedTypesSyntax | DeprecatedDescriptionMarkup | HtmlElement[] | undefined;
}
/**
 * The base for any contributions.
 */
export interface BaseContribution {
  name?: Name;
  description?: Description;
  'description-sections'?: DescriptionSections;
  /**
   * Since 2024.2. Specify contexts, which are required to enable this contribution.
   */
  'required-context'?:
    | {
        kind: string;
        name: string;
      }
    | {
        anyOf: RequiredContext[];
      }
    | {
        allOf: RequiredContext[];
      }
    | {
        not: RequiredContext;
      };
  'doc-url'?: DocUrl;
  icon?: Icon;
  source?: Source;
  since?: Since;
  deprecated?: Deprecated;
  'deprecated-since'?: DeprecatedSince;
  obsolete?: Obsolete;
  'obsolete-since'?: ObsoleteSince;
  experimental?: Experimental;
  priority?: Priority;
  proximity?: Proximity;
  virtual?: Virtual;
  abstract?: Abstract;
  extension?: Extension;
  extends?: Reference;
  pattern?: NamePatternRoot;
  html?: Html1;
  css?: Css;
  js?: Js;
  'exclusive-contributions'?: ExclusiveContributions;
  [k: string]: unknown | undefined;
}
/**
 * Custom sections to be shown below description in the documentation popup.
 */
export interface DescriptionSections {
  [k: string]: string | undefined;
}
export interface ReferenceWithProps {
  path: string;
  includeVirtual?: boolean;
  includeAbstract?: boolean;
  filter?: string;
  'name-conversion'?: ReferenceNameConversion;
  [k: string]: unknown | undefined;
}
/**
 * Override global name conversion rules for matching symbols under the path.
 */
export interface ReferenceNameConversion {
  /**
   * Override global canonical name conversion rule against which comparisons are made for the referenced symbols. When only rule name is specified, it applies to the symbols of the same kind as the last segment of the referenced path. Otherwise format of the property names is '{namespace}/{symbol kind}'. Supported by JetBrains IDEs since 2022.1.
   */
  'canonical-names'?: NameConverter | NameConversionRulesSingle1;
  /**
   * Override global rules, by which referenced symbols should be matched against their canonical names. When only rule names are specified, they applies to the symbols of the same kind as the last segment of the referenced path. Otherwise format of the property names is '{namespace}/{symbol kind}'. Supported by JetBrains IDEs since 2022.1.
   */
  'match-names'?: NameConverters | NameConversionRulesMultiple2;
  /**
   * Override global rules, by which referenced symbol names should be proposed in auto completion. When only rule names are specified, they applies to the symbols of the same kind as the last segment of the referenced path. Otherwise format of the property names is '{namespace}/{symbol kind}'. Supported by JetBrains IDEs since 2022.1.
   */
  'name-variants'?: NameConverters | NameConversionRulesMultiple2;
  [k: string]: unknown | undefined;
}
export interface NameConversionRulesSingle1 {
  [k: string]: NameConverter | undefined;
}
export interface NameConversionRulesMultiple2 {
  [k: string]: NameConverters | undefined;
}
/**
 * Contains contributions to HTML namespace. It's property names represent symbol kinds, its property values contain list of contributions of particular kind. There are 2 predefined kinds, which integrate directly with IDE - HTML elements and HTML attributes. There are also 2 deprecated kinds: tags (which is equivalent to 'elements') and 'events' (which was moved to JS namespace)
 */
export interface Html1 {
  'types-syntax'?: DeprecatedTypesSyntax;
  'description-markup'?: DeprecatedDescriptionMarkup;
  /**
   * Deprecated, use `elements` property.
   */
  tags?: HtmlElement[];
  [k: string]:
    GenericHtmlContributions | DeprecatedTypesSyntax | DeprecatedDescriptionMarkup | HtmlElement[] | undefined;
}
/**
 * A generic contribution. All contributions are of this type, except for HTML attributes and elements, as well as predefined CSS contribution kinds.
 */
export interface GenericContribution {
  default?: Default;
  required?: Required;
  'attribute-value'?: HtmlAttributeValue;
  [k: string]: unknown | undefined;
}
export interface HtmlAttributeValue {
  kind?: 'no-value' | 'plain' | 'expression';
  type?: HtmlValueType;
  required?: boolean;
  default?: string;
}
export interface TypeReference {
  /**
   * Name of module, which exports the type. May be omitted, in which case it's assumed to be the name of the library.
   */
  module?: string;
  /**
   * Name of the symbol to import
   */
  name: string;
}
export interface HtmlContributionsHost {
  /**
   * HTML elements.
   */
  elements?: HtmlElement[];
  /**
   * HTML attributes.
   */
  attributes?: HtmlAttribute[];
  /**
   * DOM events are deprecated in HTML namespace. Contribute events to JS namespace: /js/events
   */
  events?: GenericHtmlContribution[];
  [k: string]: GenericHtmlContributions | HtmlElement[] | HtmlAttribute[] | GenericHtmlContribution[] | undefined;
}
/**
 * Deprecated vue-specific property - contribute Vue directives to /contributions/html/vue-directives
 */
export interface DeprecatedHtmlAttributeVueArgument {
  pattern?: NamePatternRoot;
  description?: Description;
  'doc-url'?: DocUrl;
  /**
   * Whether directive requires an argument
   */
  required?: boolean;
}
export interface DeprecatedHtmlAttributeVueModifier {
  name: Name;
  pattern?: NamePatternRoot;
  description?: Description;
  'doc-url'?: DocUrl;
}
/**
 * Contains contributions to CSS namespace. It's property names represent symbol kinds, its property values contain list of contributions of particular kind. There are predefined kinds, which integrate directly with IDE - properties, classes, functions, pseudo-elements, pseudo-classes and parts.
 */
export interface Css {
  /**
   * CSS properties
   */
  properties?: CssProperty[];
  /**
   * CSS pseudo-elements
   */
  'pseudo-elements'?: CssPseudoElement[];
  /**
   * CSS pseudo-classes
   */
  'pseudo-classes'?: CssPseudoClass[];
  /**
   * CSS functions
   */
  functions?: CssGenericItem[];
  /**
   * CSS classes
   */
  classes?: CssGenericItem[];
  /**
   * CSS parts
   */
  parts?: CssGenericItem[];
  [k: string]:
    GenericCssContributions | CssProperty[] | CssPseudoElement[] | CssPseudoClass[] | CssGenericItem[] | undefined;
}
export interface CssContributionsHost {
  /**
   * CSS properties
   */
  properties?: CssProperty[];
  /**
   * CSS pseudo-elements
   */
  'pseudo-elements'?: CssPseudoElement[];
  /**
   * CSS pseudo-classes
   */
  'pseudo-classes'?: CssPseudoClass[];
  /**
   * CSS functions
   */
  functions?: CssGenericItem[];
  /**
   * CSS classes
   */
  classes?: CssGenericItem[];
  /**
   * CSS parts
   */
  parts?: CssGenericItem[];
  [k: string]:
    GenericCssContributions | CssProperty[] | CssPseudoElement[] | CssPseudoClass[] | CssGenericItem[] | undefined;
}
/**
 * Contains contributions to JS namespace. It's property names represent symbol kinds, its property values contain list of contributions of particular kind. There are 2 predefined kinds, which integrate directly with IDE - properties and events.
 */
export interface Js {
  /**
   * DOM events
   */
  events?: GenericJsContribution[];
  /**
   * JavaScript properties of an object, HTML tag, framework component, etc.
   */
  properties?: JsProperty[];
  /**
   * Symbols available for JavaScript resolve. TypeScript resolve is not supported.
   */
  symbols?: JsSymbol[];
  [k: string]: GenericJsContributions | GenericJsContribution[] | JsProperty[] | JsSymbol[] | undefined;
}
export interface JsContributionsHost {
  /**
   * DOM events
   */
  events?: GenericJsContribution[];
  /**
   * JavaScript properties of an object, HTML tag, framework component, etc.
   */
  properties?: JsProperty[];
  /**
   * Symbols available for JavaScript resolve. TypeScript resolve is not supported.
   */
  symbols?: JsSymbol[];
  [k: string]: GenericJsContributions | GenericJsContribution[] | JsProperty[] | JsSymbol[] | undefined;
}
/**
 * The base for any contribution, which can possibly have a JS type.
 */
export interface TypedContribution {
  type?: TypeList;
  [k: string]: unknown | undefined;
}
/**
 * Contains contributions to CSS namespace. It's property names represent symbol kinds, its property values contain list of contributions of particular kind. There are predefined kinds, which integrate directly with IDE - properties, classes, functions, pseudo-elements, pseudo-classes and parts.
 */
export interface Css1 {
  /**
   * CSS properties
   */
  properties?: CssProperty[];
  /**
   * CSS pseudo-elements
   */
  'pseudo-elements'?: CssPseudoElement[];
  /**
   * CSS pseudo-classes
   */
  'pseudo-classes'?: CssPseudoClass[];
  /**
   * CSS functions
   */
  functions?: CssGenericItem[];
  /**
   * CSS classes
   */
  classes?: CssGenericItem[];
  /**
   * CSS parts
   */
  parts?: CssGenericItem[];
  [k: string]:
    GenericCssContributions | CssProperty[] | CssPseudoElement[] | CssPseudoClass[] | CssGenericItem[] | undefined;
}
/**
 * Contains contributions to JS namespace. It's property names represent symbol kinds, its property values contain list of contributions of particular kind. There are 2 predefined kinds, which integrate directly with IDE - properties and events, but only events can be contributed globally.
 */
export interface JsGlobal {
  /**
   * DOM events
   */
  events?: GenericJsContribution[];
  /**
   * Globally available symbols for JavaScript resolve. TypeScript resolve is not supported. Please note that these symbols will override any normally available global JavaScript symbols.
   */
  symbols?: JsSymbol[];
  [k: string]: GenericJsContributions | GenericJsContribution[] | JsSymbol[] | undefined;
}
