/* eslint-disable */

/**
 * character.yaml for OpenUtau, including the basic information of a voicebank
 */
export interface HttpsJsonSchemastoreOrgOpenutauCharacterJson {
  /**
   * The encoding used to read character.txt, prefix.map and oto.ini
   */
  text_file_encoding?: string;
  /**
   * The name of the voicebank
   */
  name?: string;
  /**
   * display localized names for the user's selected singer name display language
   */
  localized_names?: {
    /**
     * English (United States)
     */
    'en-US'?: string;
    /**
     * German (Germany)
     */
    'de-DE'?: string;
    /**
     * Spanish (Spain)
     */
    'es-ES'?: string;
    /**
     * Spanish (Mexico)
     */
    'es-MX'?: string;
    /**
     * Finnish (Finland)
     */
    'fi-FI'?: string;
    /**
     * French (France)
     */
    'fr-FR'?: string;
    /**
     * Indonesian (Indonesia)
     */
    'id-ID'?: string;
    /**
     * Italian (Italy)
     */
    'it-IT'?: string;
    /**
     * Japanese (Japan)
     */
    'ja-JP'?: string;
    /**
     * Korean (Korea)
     */
    'ko-KR'?: string;
    /**
     * Dutch (Netherlands)
     */
    'nl-NL'?: string;
    /**
     * Polish (Poland)
     */
    'pl-PL'?: string;
    /**
     * Portuguese (Brazil)
     */
    'pt-BR'?: string;
    /**
     * Russian (Russia)
     */
    'ru-RU'?: string;
    /**
     * Thai (Thailand)
     */
    'th-TH'?: string;
    /**
     * Vietnamese (Vietnam)
     */
    'vi-VN'?: string;
    /**
     * Chinese (Simplified, China)
     */
    'zh-CN'?: string;
    /**
     * Chinese (Traditional, Taiwan)
     */
    'zh-TW'?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The type of the voicebank
   */
  singer_type?: 'utau' | 'enunu' | 'diffsinger';
  /**
   * relative path to the icon of the voicebank
   */
  image?: string;
  /**
   * The author of the voicebank
   */
  author?: string;
  /**
   * The voice provider of the voicebank
   */
  voice?: string;
  /**
   * The version number of the voicebank
   */
  version?: string;
  /**
   * The website of the voicebank
   */
  web?: string;
  /**
   * Relative path to the portrait of the voicebank
   */
  portrait?: string;
  /**
   * Opacity of the portrait, from 0 to 1
   */
  portrait_opacity?: number;
  /**
   * The default phonemizer of the voicebank
   */
  default_phonemizer?: string;
  /**
   * The subbanks of the voicebank for different pitch and voice color
   */
  subbanks?: {
    /**
     * Voice color that this subbank belongs to
     */
    color?: string;
    /**
     * Prefix for this subbank in the oto.ini
     */
    prefix?: string;
    /**
     * Suffix for this subbank in the oto.ini
     */
    suffix?: string;
    /**
     * The tone ranges that this subbank covers
     */
    tone_ranges?: string[];
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
