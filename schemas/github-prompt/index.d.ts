/* eslint-disable */

/**
 * YAML prompt files used with GitHub Models (.prompt.yml / .prompt.yaml)
 */
export interface GitHubModelsPromptFile {
  /**
   * Human-readable name of the prompt
   */
  name?: string;
  /**
   * Short description of what the prompt does
   */
  description?: string;
  /**
   * Model identifier (for example openai/gpt-4o-mini)
   */
  model?: string;
  /**
   * Model parameters such as temperature
   */
  modelParameters?: {
    temperature?: number;
    top_p?: number;
    max_tokens?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Prompt templates with simple {{variable}} placeholders
   *
   * @minItems 1
   */
  messages: [
    {
      /**
       * Message role (commonly system, user, or assistant)
       */
      role: string;
      content: string;
      [k: string]: unknown | undefined;
    },
    ...{
      /**
       * Message role (commonly system, user, or assistant)
       */
      role: string;
      content: string;
      [k: string]: unknown | undefined;
    }[]
  ];
  /**
   * Sample inputs and expected outputs for evaluation
   */
  testData?: {
    input?: unknown;
    expected?: unknown;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Evaluator definitions for prompt tests
   */
  evaluators?: {
    name: string;
    string?: {
      startsWith?: string;
      endsWith?: string;
      contains?: string;
      equals?: string;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
