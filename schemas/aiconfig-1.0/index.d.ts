/* eslint-disable */

/**
 * Model inference result.
 */
export type Output =
  | {
      /**
       * Type of output.
       */
      output_type: 'execute_result';
      /**
       * A result's prompt number.
       */
      execution_count?: number;
      /**
       * The result of executing the prompt.
       */
      data: {
        [k: string]: unknown | undefined;
      };
      /**
       * The MIME type of the result. If not specified, the MIME type will be assumed to be plain text.
       */
      mime_type?: string;
      /**
       * Output metadata.
       */
      metadata?: {
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * Type of output.
       */
      output_type: 'error';
      /**
       * The name of the error.
       */
      ename: string;
      /**
       * The value, or message, of the error.
       */
      evalue: string;
      /**
       * The error's traceback, represented as an array of strings.
       */
      traceback: string[];
      [k: string]: unknown | undefined;
    };

export interface HttpsJsonSchemastoreOrgAiconfig10Json {
  /**
   * Friendly name descriptor for the AIConfig. Could default to the filename if not specified.
   */
  name: string;
  /**
   * Description of the AIConfig.
   * If you have a collection of different AIConfigs, this may be used for dynamic prompt routing.
   */
  description?: string;
  /**
   * The version of the AIConfig schema.
   */
  schema_version:
    | {
        major: number;
        minor: number;
        [k: string]: unknown | undefined;
      }
    | ('latest' | 'v1');
  /**
   * Root-level metadata that applies to the entire AIConfig.
   */
  metadata: {
    /**
     * Parameter definitions that are accessible to all prompts in this AIConfig.
     * These parameters can be referenced in the prompts using {{param_name}} handlebars syntax.
     * For more information, see https://handlebarsjs.com/guide/#basic-usage.
     */
    parameters?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Globally defined model settings. Any prompts that use these models will have these settings applied by default,
     * unless they override them with their own model settings.
     */
    models?: {
      [k: string]:
        | {
            [k: string]: unknown | undefined;
          }
        | undefined;
    };
    /**
     * Default model to use for prompts that do not specify a model.
     */
    default_model?: string;
    /**
     * Model ID to ModelParser ID mapping.
     * This is useful if you want to use a custom ModelParser for a model, or if a single ModelParser can handle multiple models.
     */
    model_parsers?: {
      [k: string]: string | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Array of prompts that make up the AIConfig.
   */
  prompts: {
    /**
     * A unique identifier for the prompt. This is used to reference the prompt in other parts of the AIConfig (such as other prompts)
     */
    name: string;
    /**
     * The prompt string, or a more complex prompt object.
     */
    input:
      | {
          /**
           * Input to the model. This can represent a single input, or multiple inputs.
           * The structure of the data object is up to the ModelParser. Attachments field should be leveraged for non-text inputs (e.g. image, audio).
           */
          data?: {
            [k: string]: unknown | undefined;
          };
          /**
           * Used to include non-text inputs (e.g. image, audio) of specified MIME types in the prompt
           */
          attachments?: Attachment[];
          [k: string]: unknown | undefined;
        }
      | string;
    metadata?: {
      /**
       * Parameter definitions that are accessible to this prompt.
       * These parameters can be referenced in the prompt using {{param_name}} handlebars syntax.
       * For more information, see https://handlebarsjs.com/guide/#basic-usage.
       */
      parameters?: {
        [k: string]: unknown | undefined;
      };
      /**
       * Model name/settings that apply to this prompt.
       * These settings override any global model settings that may have been defined in the AIConfig metadata.
       * If this is a string, it is assumed to be the model name.
       * If this is undefined, the default model specified in the default_model property will be used for this Prompt.
       */
      model?:
        | {
            /**
             * The ID of the model to use.
             */
            name: string;
            /**
             * Model inference settings that apply to this prompt.
             */
            settings?: {
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          }
        | string;
      /**
       * Tags for this prompt. Tags must be unique, and must not contain commas.
       */
      tags?: string[];
      [k: string]: unknown | undefined;
    };
    /**
     * Execution, display, or stream outputs.
     */
    outputs?: Output[];
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
/**
 * Data of specified MIME type to attach to a prompt
 */
export interface Attachment {
  /**
   * MIME type of the attachment. If not specified, the MIME type will be assumed to be text/plain.
   */
  mime_type?: string;
  /**
   * Data representing the attachment
   */
  data: {
    [k: string]: unknown | undefined;
  };
  /**
   * Attachment metadata.
   */
  metadata?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
