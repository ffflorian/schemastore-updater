/* eslint-disable */

/**
 * JSON Schema for Jovo language Models (https://www.jovo.tech/docs/model)
 */
export interface JSONSchemaForJovoLanguageModels {
  invocation: string;
  intents?: {
    name: string;
    phrases: string[];
    dialogflow?: {
      priority?: number;
      webhookForSlotFilling?: boolean;
      [k: string]: unknown | undefined;
    };
    inputs?: {
      name: string;
      type:
        | string
        | {
            alexa?: string;
            dialogflow?: string;
            [k: string]: unknown | undefined;
          };
      dialogflow?: DialogflowEntity;
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  }[];
  inputTypes?: {
    name: string;
    dialogflow?: {
      automatedExpansion?: boolean;
      [k: string]: unknown | undefined;
    };
    values?: {
      value: string;
      synonyms?: string[];
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  }[];
  alexa?: {
    interactionModel?: {
      languageModel?: {
        intents?: {
          name: string;
          samples: string[];
          [k: string]: unknown | undefined;
        }[];
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  dialogflow?: {
    intents?: {
      name: string;
      auto?: boolean;
      webhookUsed?: boolean;
      fallbackIntent?: boolean;
      events?: {
        name: string;
        [k: string]: unknown | undefined;
      }[];
      [k: string]: unknown | undefined;
    }[];
    entities?: (DialogflowEntity & {
      [k: string]: unknown | undefined;
    })[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface DialogflowEntity {
  name?: string;
  isOverridable?: boolean;
  isEnum?: boolean;
  automatedExpansion?: boolean;
  isList?: boolean;
  [k: string]: unknown | undefined;
}
