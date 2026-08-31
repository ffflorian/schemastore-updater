/* eslint-disable */

/**
 * Configuration file for hitf-cli translation toolkit
 */
export interface HitfCliMdConfiguration {
  /**
   * Translation service and locale configuration
   */
  translationSetting?: {
    /**
     * Language codes. First element is source language, rest are target languages
     *
     * @minItems 2
     */
    locales?: [string, string, ...string[]];
    outDir?:
      | string
      | {
          [k: string]: string | undefined;
        };
    /**
     * Use translation key as fallback when translation is unavailable
     */
    fallbackToKey?: boolean;
    /**
     * Replace Chinese text in source files with $t() calls
     */
    replaceOriginalFile?: boolean;
    i18nCallTemplate?: string | string[];
    i18nImport?: string | string[];
    /**
     * Custom file extensions to process (empty = use defaults)
     */
    extensions?: string[];
    /**
     * Capitalize first letter of translations for target languages
     */
    capitalizeTranslations?: boolean;
    /**
     * Maximum words to capitalize (0 = all)
     */
    capitalizeMaxWords?: number;
    /**
     * Remove unused keys from locale files
     */
    pruneUnusedKeys?: boolean;
    /**
     * Key generation strategy
     */
    keyStrategy?: {
      /**
       * Maximum key length
       */
      maxLength?: number;
      /**
       * Strategy for handling key collisions
       */
      collision?: 'number' | 'hash';
      /**
       * Length of hash suffix when collision strategy is 'hash'
       */
      hashLength?: number;
      [k: string]: unknown | undefined;
    };
    /**
     * Primary translation service
     */
    translationService?: 'baidu' | 'tencent' | 'openai' | 'google';
    /**
     * Fallback order when primary service fails
     */
    servicePriority?: ('baidu' | 'tencent' | 'openai' | 'google')[];
    /**
     * Translation service credentials and options
     */
    services?: {
      openai?: {
        /**
         * OpenAI API key
         */
        apiKey?: string;
        /**
         * API base URL (for custom endpoints)
         */
        baseUrl?: string;
        /**
         * Model name
         */
        model?: string;
        [k: string]: unknown | undefined;
      };
      google?: {
        /**
         * Google Cloud Translation API key
         */
        apiKey?: string;
        [k: string]: unknown | undefined;
      };
      baidu?: {
        /**
         * Baidu Translate App ID
         */
        appId?: string;
        /**
         * Baidu Translate Secret Key
         */
        secretKey?: string;
        [k: string]: unknown | undefined;
      };
      tencent?: {
        /**
         * Tencent Cloud SecretId
         */
        secretId?: string;
        /**
         * Tencent Cloud SecretKey
         */
        secretKey?: string;
        /**
         * Tencent Cloud region
         */
        region?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Git repository sync configuration
   */
  gitRepoSetting?: {
    /**
     * Auto-update git repositories on translation
     */
    gitRepoAutoUpdate?: boolean;
    /**
     * How to handle repository sync conflicts
     */
    gitRepoMode?: 'merge' | 'overwrite';
    /**
     * Map project name to git repository URL
     */
    gitRepo?: {
      [k: string]: string | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * CLI interface language (global config only)
   */
  language?: 'zh-CN' | 'en-US';
  [k: string]: unknown | undefined;
}
