/* eslint-disable */

/**
 * Path to the project directory or single source file to be processed.
 */
export type InputProjectPath = string;
/**
 * Target output file path for the generated Markdown documentation.
 */
export type OutputFilePath = string;
/**
 * Local or remote Ollama server API base URL.
 */
export type OllamaEndpointURL = string;
/**
 * Ollama model identifier to use for analysis and summarization tasks.
 */
export type OllamaModelName = string;
/**
 * Strategy for pruning or summarizing Tailwind CSS / className strings to optimize token consumption.
 */
export type TailwindCSSPruningMode = 'remove' | 'remove_aggr' | 'summarize' | 'preserve';
/**
 * Character length threshold to trigger Tailwind pruning.
 */
export type TailwindCharacterThreshold = number;
/**
 * Summarize function block bodies using local Ollama or fallback to JSDoc comments.
 */
export type SummarizeFunctions = boolean;
/**
 * Line count threshold to trigger function summarization.
 */
export type FunctionSummarizationLineThreshold = number;
/**
 * Extract and generate an API Route Table from Express, Fastify, Next.js, and NestJS source files.
 */
export type GenerateRouteTable = boolean;
/**
 * Analyze React and React Native components and output detailed explanations.
 */
export type AnalyzeReactComponents = boolean;
/**
 * Generate ASCII File Structure and Module Dependency Graph.
 */
export type GenerateFileGraph = boolean;

/**
 * Configuration schema for urai-ecma: AST commentary, pruning, and LLM context packaging engine for ECMAScript codebases (உரை - explanation & distillation).
 */
export interface UraiEcmaConfig {
  /**
   * Path or URL to the JSON schema definition for IDE validation and autocompletion.
   */
  $schema?: string;
  input_project: InputProjectPath;
  output_file: OutputFilePath;
  ollama_endpoint?: OllamaEndpointURL;
  ollama_modelname?: OllamaModelName;
  tailwind_mode?: TailwindCSSPruningMode;
  tailwind_threshold?: TailwindCharacterThreshold;
  summarize_functions?: SummarizeFunctions;
  summarize_functions_threshold?: FunctionSummarizationLineThreshold;
  generate_route_table?: GenerateRouteTable;
  analyze_react_components?: AnalyzeReactComponents;
  generate_file_graph?: GenerateFileGraph;
}
