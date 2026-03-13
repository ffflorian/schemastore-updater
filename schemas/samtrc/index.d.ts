/* eslint-disable */

export type LevelType = 'error' | 'warn' | 'info' | 'off';
export type NamingType = 'PascalCase' | 'camelCase' | 'kebab-case' | 'snake_case' | 'SCREAMING_SNAKE_CASE';

export interface HttpsJsonSchemastoreOrgSamtrcJson {
  /**
   * The name of the configuration file to extend from, used to determine the default rules to apply
   */
  extends: string | ('recommended' | 'strict');
  /**
   * Configuration for linter rules for the current project
   */
  rules?: (
    | {
        type: 'split-model-and-providers';
        level?: LevelType;
      }
    | {
        type: 'naming-conventions';
        level?: LevelType;
        record?: NamingType;
        recordField?: NamingType;
        enum?: NamingType;
        enumValue?: NamingType;
        typeAlias?: NamingType;
        service?: NamingType;
        serviceOperation?: NamingType;
        serviceOperationParameter?: NamingType;
        provider?: NamingType;
        package?: NamingType;
        fileName?: NamingType;
      }
  )[];
}
