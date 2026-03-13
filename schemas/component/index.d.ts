/* eslint-disable */

export interface JSONSchemaForComponentJsonFiles {
  /**
   * Indicates whether the component should be treated as private and not published to public registries.
   */
  private?: boolean;
  /**
   * The name of the component. Must be lowercase, can contain hyphens and underscores.
   */
  name?: string;
  /**
   * Type of the component (e.g., 'component', 'block', 'template').
   */
  type?: string;
  /**
   * URL to the component.
   */
  url?: string;
  /**
   * The repository location in the format 'username/repository'.
   */
  repo?: string;
  /**
   * A brief description of the component's purpose and functionality.
   */
  description?: string;
  /**
   * The semantic version number of the component (e.g., '1.0.0').
   */
  version?: string;
  /**
   * Framework compatibility  (e.g., 'react', 'vue', 'angular', 'svelte', 'alpinejs', 'laravel', 'web-components').
   */
  framework?: string;
  /**
   * An array of keywords that describe the component, used for search and categorization.
   *
   * @minItems 1
   */
  keywords?: [string, ...string[]];
  /**
   * The primary entry point file of the component.
   */
  main?: string;
  /**
   * Scripts that are part of the component. Can be specified as an array of files or an object with named entries.
   */
  scripts?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Styles that are part of the component. Can be specified as an array of files or an object with named entries.
   */
  styles?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Json data that are part of the component. Can be specified as an array of files or an object with named entries.
   */
  json?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Image assets that are part of the component. Can be specified as an array of files or an object with named entries.
   */
  images?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Fonts that are part of the component. Can be specified as an array of files or an object with named entries.
   */
  fonts?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Additional files that are part of the component. Can be specified as an array of files or an object with named entries.
   */
  files?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Dependencies that are required by the component. Can be specified as an array of files or an object with named entries.
   */
  dependencies?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Local dependencies that are required by the component. Can be specified as an array of files or an object with named entries.
   */
  locals?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Remote dependencies that are required by the component. Can be specified as an array of files or an object with named entries.
   */
  remotes?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Custom file paths configuration for the component.
   */
  paths?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Templates that can be imported to be used within the component.
   */
  templates?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Path to or URL of a demonstration of the component.
   */
  demo?: string;
  development?: JSONSchemaForComponentJsonFiles1;
  /**
   * The license identifier under which the component is distributed (e.g., 'MIT', 'Apache-2.0').
   */
  license?: string;
  [k: string]: unknown | undefined;
}
/**
 * Development-specific configuration that extends the main configuration.
 */
export interface JSONSchemaForComponentJsonFiles1 {
  /**
   * Indicates whether the component should be treated as private and not published to public registries.
   */
  private?: boolean;
  /**
   * The name of the component. Must be lowercase, can contain hyphens and underscores.
   */
  name?: string;
  /**
   * Type of the component (e.g., 'component', 'block', 'template').
   */
  type?: string;
  /**
   * URL to the component.
   */
  url?: string;
  /**
   * The repository location in the format 'username/repository'.
   */
  repo?: string;
  /**
   * A brief description of the component's purpose and functionality.
   */
  description?: string;
  /**
   * The semantic version number of the component (e.g., '1.0.0').
   */
  version?: string;
  /**
   * Framework compatibility  (e.g., 'react', 'vue', 'angular', 'svelte', 'alpinejs', 'laravel', 'web-components').
   */
  framework?: string;
  /**
   * An array of keywords that describe the component, used for search and categorization.
   *
   * @minItems 1
   */
  keywords?: [string, ...string[]];
  /**
   * The primary entry point file of the component.
   */
  main?: string;
  /**
   * Scripts that are part of the component. Can be specified as an array of files or an object with named entries.
   */
  scripts?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Styles that are part of the component. Can be specified as an array of files or an object with named entries.
   */
  styles?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Json data that are part of the component. Can be specified as an array of files or an object with named entries.
   */
  json?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Image assets that are part of the component. Can be specified as an array of files or an object with named entries.
   */
  images?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Fonts that are part of the component. Can be specified as an array of files or an object with named entries.
   */
  fonts?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Additional files that are part of the component. Can be specified as an array of files or an object with named entries.
   */
  files?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Dependencies that are required by the component. Can be specified as an array of files or an object with named entries.
   */
  dependencies?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Local dependencies that are required by the component. Can be specified as an array of files or an object with named entries.
   */
  locals?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Remote dependencies that are required by the component. Can be specified as an array of files or an object with named entries.
   */
  remotes?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Custom file paths configuration for the component.
   */
  paths?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Templates that can be imported to be used within the component.
   */
  templates?:
    | [
        (
          | string
          | {
              [k: string]: unknown | undefined;
            }
        ),
        ...(
          | string
          | {
              [k: string]: unknown | undefined;
            }
        )[]
      ]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Path to or URL of a demonstration of the component.
   */
  demo?: string;
  development?: JSONSchemaForComponentJsonFiles1;
  /**
   * The license identifier under which the component is distributed (e.g., 'MIT', 'Apache-2.0').
   */
  license?: string;
  [k: string]: unknown | undefined;
}
