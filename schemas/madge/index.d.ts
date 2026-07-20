/* eslint-disable */

/**
 * Configuration for Madge module dependency analysis.
 * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
 */
export interface MadgeConfiguration {
  /**
   * URI of the JSON Schema used to validate this configuration.
   * https://json-schema.org/understanding-json-schema/reference/schema.html
   */
  $schema?: string;
  /**
   * Base directory to use when resolving paths.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  baseDir?: string | null;
  /**
   * Whether to include shallow npm dependencies in the graph.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  includeNpm?: boolean;
  /**
   * File extensions to analyze, without leading periods.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  fileExtensions?: string[];
  /**
   * Regular expression strings used to exclude modules, or false to disable exclusions.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  excludeRegExp?: string[] | false;
  /**
   * Path to a RequireJS configuration used to resolve aliased modules.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  requireConfig?: string | null;
  /**
   * Path to a webpack configuration used to resolve aliased modules.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  webpackConfig?: string | null;
  /**
   * Path to a TypeScript configuration or an embedded TypeScript configuration object.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  tsConfig?:
    | string
    | {
        [k: string]: unknown | undefined;
      }
    | null;
  /**
   * Graphviz layout engine used to render the graph. Common values are dot, neato, fdp, sfdp, twopi, and circo.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  layout?: string;
  /**
   * Graph layout direction. Common Graphviz values are TB, BT, LR, and RL.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  rankdir?: string;
  /**
   * Font name used in the graph.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  fontName?: string;
  /**
   * Font size used in the graph.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  fontSize?: string;
  /**
   * Graph background color in any syntax supported by Graphviz.
   * https://github.com/pahen/madge/blob/v8.0.0/lib/api.js#L9-L30
   */
  backgroundColor?: string;
  /**
   * Graphviz shape used for nodes.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  nodeShape?: string;
  /**
   * Graphviz style used for nodes.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  nodeStyle?: string;
  /**
   * Default node color in any syntax supported by Graphviz.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  nodeColor?: string;
  /**
   * Color used for nodes with no dependencies.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  noDependencyColor?: string;
  /**
   * Color used for nodes involved in circular dependencies.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  cyclicNodeColor?: string;
  /**
   * Color used for graph edges.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  edgeColor?: string;
  /**
   * Additional Graphviz graph, edge, and node attributes, or false to use only Madge defaults.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  graphVizOptions?: GraphVizOptions | false;
  /**
   * Directory containing the Graphviz executables, or false or null to use executables from PATH.
   * https://github.com/pahen/madge/blob/v8.0.0/lib/graph.js#L21-L36
   */
  graphVizPath?: string | false | null;
  /**
   * Parser-specific detective options passed to dependency-tree, or false to use parser defaults.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  detectiveOptions?: DetectiveOptions | false;
  /**
   * Disables the programmatic dependency filter. Functions are supported by the JavaScript API but cannot be represented in JSON configuration.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#configuration
   */
  dependencyFilter?: false;
  [k: string]: unknown | undefined;
}
export interface GraphVizOptions {
  G?: GraphVizAttributes;
  E?: GraphVizAttributes1;
  N?: GraphVizAttributes2;
  [k: string]: unknown | undefined;
}
/**
 * Graph-level Graphviz attributes.
 * https://github.com/pahen/madge/blob/v8.0.0/lib/graph.js#L45-L74
 */
export interface GraphVizAttributes {
  [k: string]: (string | number | boolean) | undefined;
}
/**
 * Edge-level Graphviz attributes.
 * https://github.com/pahen/madge/blob/v8.0.0/lib/graph.js#L45-L74
 */
export interface GraphVizAttributes1 {
  [k: string]: (string | number | boolean) | undefined;
}
/**
 * Node-level Graphviz attributes.
 * https://github.com/pahen/madge/blob/v8.0.0/lib/graph.js#L45-L74
 */
export interface GraphVizAttributes2 {
  [k: string]: (string | number | boolean) | undefined;
}
export interface DetectiveOptions {
  es6?: DetectiveParserOptions;
  ts?: DetectiveParserOptions;
  tsx?: DetectiveParserOptions;
  [k: string]: unknown | undefined;
}
export interface DetectiveParserOptions {
  /**
   * Whether to detect ES module and CommonJS imports in the same file.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#using-mixed-import-syntax-in-the-same-file
   */
  mixedImports?: boolean;
  /**
   * Whether to ignore type-only imports.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#how-to-ignore-import-type-statements-in-es6--flow
   */
  skipTypeImports?: boolean;
  /**
   * Whether to ignore dynamic imports.
   * https://github.com/pahen/madge/blob/v8.0.0/README.md#how-to-ignore-dynamic-imports-in-typescript
   */
  skipAsyncImports?: boolean;
  [k: string]: unknown | undefined;
}
