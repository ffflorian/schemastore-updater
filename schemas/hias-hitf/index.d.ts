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
     * RFC 5646 language codes. First element is source language, rest are target languages. Examples: "zh-CN" (Chinese Simplified), "zh-TW" (Chinese Traditional), "en-US" (English US), "en-GB" (English UK), "ja-JP" (Japanese), "ko-KR" (Korean), "fr-FR" (French), "de-DE" (German), "es-ES" (Spanish), "ar-SA" (Arabic), "ru-RU" (Russian), "pt-BR" (Portuguese), "it-IT" (Italian), "nl-NL" (Dutch), "pl-PL" (Polish), "th-TH" (Thai), "vi-VN" (Vietnamese), "id-ID" (Indonesian), "ms-MY" (Malay)
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
     * When true, use i18n key as fallback text if translation is unavailable. When false, keep original source text
     */
    fallbackToKey?: boolean;
    /**
     * When true, replace source text in original files with $t() calls. When false, generate translated files in outDir only
     */
    replaceOriginalFile?: boolean;
    i18nCallTemplate?: string | string[];
    i18nImport?: string | string[];
    /**
     * Custom file extensions to process. Empty array uses defaults: .vue, .nvue, .uvue, .js, .ts, .jsx, .tsx, .json
     */
    extensions?: string[];
    /**
     * Capitalize first letter of each word in English translations (e.g., 'save success' → 'Save Success')
     */
    capitalizeTranslations?: boolean;
    /**
     * Maximum word count to apply capitalization. 0 = capitalize all words regardless of count
     */
    capitalizeMaxWords?: number;
    /**
     * Remove keys from locale files that are no longer referenced in source code
     */
    pruneUnusedKeys?: boolean;
    /**
     * Key generation strategy for i18n keys
     */
    keyStrategy?: {
      /**
       * Maximum key length. Longer keys will be truncated
       */
      maxLength?: number;
      /**
       * Strategy for handling key collisions: 'number' appends _1, _2, etc. 'hash' appends short hash suffix
       */
      collision?: 'number' | 'hash';
      /**
       * Length of hash suffix when collision strategy is 'hash' (4-8 chars recommended)
       */
      hashLength?: number;
      [k: string]: unknown | undefined;
    };
    /**
     * Primary translation service provider. Supported: 'baidu' (Baidu Translate), 'tencent' (Tencent Cloud), 'openai' (OpenAI GPT), 'google' (Google Cloud Translation)
     */
    translationService?: 'baidu' | 'tencent' | 'openai' | 'google';
    /**
     * Fallback order when primary translation service fails. Services are tried in order
     */
    servicePriority?: ('baidu' | 'tencent' | 'openai' | 'google')[];
    /**
     * Translation service credentials and configuration options
     */
    services?: {
      /**
       * OpenAI / compatible API configuration
       */
      openai?: {
        /**
         * OpenAI API key (sk-xxx...)
         */
        apiKey?: string;
        /**
         * API base URL. Use custom endpoint for compatible APIs (e.g., Azure OpenAI, Moonshot)
         */
        baseUrl?: string;
        /**
         * Model name for translation
         */
        model?: string;
        [k: string]: unknown | undefined;
      };
      /**
       * Google Cloud Translation API configuration
       */
      google?: {
        /**
         * Google Cloud API key (AIza...)
         */
        apiKey?: string;
        [k: string]: unknown | undefined;
      };
      /**
       * Baidu Translate API configuration
       */
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
      /**
       * Tencent Cloud Translation API configuration
       */
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
         * Tencent Cloud service region
         */
        region?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Git repository sync configuration for shared translation resources
   */
  gitRepoSetting?: {
    /**
     * Auto-pull latest changes from git repositories before translation
     */
    gitRepoAutoUpdate?: boolean;
    /**
     * Sync conflict resolution: 'merge' keeps local changes, 'overwrite' replaces with remote
     */
    gitRepoMode?: 'merge' | 'overwrite';
    /**
     * Map project name to git repository URL for shared translation resources
     */
    gitRepo?: {
      [k: string]: string | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * CLI interface display language (global config only, not project config)
   */
  language?: 'zh-CN' | 'en-US';
  [k: string]: unknown | undefined;
}
