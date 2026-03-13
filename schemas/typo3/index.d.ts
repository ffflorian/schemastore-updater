/* eslint-disable */

export type ErrorHandling = {
  [k: string]: unknown | undefined;
} & {
  /**
   * Make sure to have at least 0 (not defined otherwise) configured in order to serve helpful error messages to your visitors.
   */
  errorCode?: (0 | 404 | 403 | 500 | 503) | number;
  /**
   * How to handle Errors
   */
  errorHandler?: 'Page' | 'Fluid' | 'PHP';
  [k: string]: unknown | undefined;
};

export interface HttpsJsonSchemastoreOrgTypo3Json {
  /**
   * Base URL. This is the URL under which this site is available
   */
  base: string;
  /**
   * ID of the page where this site begins
   */
  rootPageId: number;
  languages: Language[];
  baseVariants?: BaseVariants[];
  errorHandling?: ErrorHandling[];
  routes?: StaticRoutes[];
  /**
   * Default website title
   */
  websiteTitle?: string;
  /**
   * routeEnhancers transform arguments into nice urls. Docs can be found at https://docs.typo3.org/m/typo3/reference-coreapi/master/en-us/ApiOverview/Routing/Index.html
   */
  routeEnhancers?: {
    /**
     * Each enhancer must have a type
     */
    [k: string]:
      | {
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  settings?: {
    redirects?: Redirects;
    [k: string]: unknown | undefined;
  };
  /**
   * Extension key for site setup (used by EXT:bolt)
   */
  sitePackage?: string;
  /**
   * EXT:solr default core for read
   */
  solr_core_read?: string;
  /**
   * EXT:solr enable default solr read
   */
  solr_enabled_read?: boolean;
  /**
   * EXT:solr default host for read
   */
  solr_host_read?: string;
  /**
   * EXT:solr password for read
   */
  solr_password_read?: string;
  /**
   * EXT:solr username for read
   */
  solr_username_read?: string;
  /**
   * EXT:solr port for read
   */
  solr_port_read?: string;
  /**
   * EXT:solr scheme for read
   */
  solr_scheme_read?: ('http' | 'https' | '%env(SOLR_SCHEME)%') & string;
  /**
   * EXT:solr use write connection
   */
  solr_use_write_connection?: boolean;
  [k: string]: unknown | undefined;
}
export interface Language {
  /**
   * Title
   */
  title: string;
  /**
   * Visible in Frontend
   */
  enabled: boolean;
  /**
   * ID of the related sys_language record
   */
  languageId: number;
  /**
   * Use a full qualified domain "https://www.mydomain.fr/" or "/fr/". Use "/" to keep the main URL for the default language. Add language specific suffixes to use those, or configure complete URLs for independent domains.
   */
  base: string;
  baseVariants?: BaseVariants[];
  /**
   * Select the language to be used from translation files. Keep default if no translation files are available. Deprecated with TYPO3 12.3
   */
  typo3Language?:
    | (
        | 'default'
        | 'af'
        | 'ar'
        | 'bs'
        | 'bg'
        | 'ca'
        | 'ch'
        | 'cs'
        | 'da'
        | 'de'
        | 'el'
        | 'eo'
        | 'es'
        | 'et'
        | 'eu'
        | 'fa'
        | 'fi'
        | 'fo'
        | 'fr'
        | 'fr_CA'
        | 'gl'
        | 'he'
        | 'hi'
        | 'hr'
        | 'hu'
        | 'is'
        | 'it'
        | 'ja'
        | 'ka'
        | 'kl'
        | 'km'
        | 'ko'
        | 'lt'
        | 'lv'
        | 'mi'
        | 'mk'
        | 'ms'
        | 'nl'
        | 'no'
        | 'pl'
        | 'pt'
        | 'pt_BR'
        | 'ro'
        | 'ru'
        | 'rw'
        | 'sk'
        | 'sl'
        | 'sq'
        | 'sr'
        | 'sv'
        | 'th'
        | 'tr'
        | 'uk'
        | 'vi'
        | 'zh'
      )
    | string;
  /**
   * Used for localized date and currency formats. E.g. "de_DE" or "en_US.UTF-8".
   */
  locale: string;
  /**
   * ISO 639-1 code of the Language
   */
  'iso-639-1'?:
    | 'ab'
    | 'aa'
    | 'af'
    | 'ak'
    | 'sq'
    | 'am'
    | 'ar'
    | 'an'
    | 'hy'
    | 'as'
    | 'av'
    | 'ae'
    | 'ay'
    | 'az'
    | 'bm'
    | 'ba'
    | 'eu'
    | 'be'
    | 'bn'
    | 'bh'
    | 'bi'
    | 'bs'
    | 'br'
    | 'bg'
    | 'my'
    | 'ca'
    | 'ch'
    | 'ce'
    | 'ny'
    | 'zh'
    | 'cv'
    | 'kw'
    | 'co'
    | 'cr'
    | 'hr'
    | 'cs'
    | 'da'
    | 'dv'
    | 'nl'
    | 'dz'
    | 'en'
    | 'eo'
    | 'et'
    | 'ee'
    | 'fo'
    | 'fj'
    | 'fi'
    | 'fr'
    | 'ff'
    | 'gl'
    | 'ka'
    | 'de'
    | 'el'
    | 'gn'
    | 'gu'
    | 'ht'
    | 'ha'
    | 'he'
    | 'hz'
    | 'hi'
    | 'ho'
    | 'hu'
    | 'ia'
    | 'id'
    | 'ie'
    | 'ga'
    | 'ig'
    | 'ik'
    | 'io'
    | 'is'
    | 'it'
    | 'iu'
    | 'ja'
    | 'jv'
    | 'kl'
    | 'kn'
    | 'kr'
    | 'ks'
    | 'kk'
    | 'km'
    | 'ki'
    | 'rw'
    | 'ky'
    | 'kv'
    | 'kg'
    | 'ko'
    | 'ku'
    | 'kj'
    | 'la'
    | 'lb'
    | 'lg'
    | 'li'
    | 'ln'
    | 'lo'
    | 'lt'
    | 'lu'
    | 'lv'
    | 'gv'
    | 'mk'
    | 'mg'
    | 'ms'
    | 'ml'
    | 'mt'
    | 'mi'
    | 'mr'
    | 'mh'
    | 'mn'
    | 'na'
    | 'nv'
    | 'nd'
    | 'ne'
    | 'ng'
    | 'nb'
    | 'nn'
    | 'no'
    | 'ii'
    | 'nr'
    | 'oc'
    | 'oj'
    | 'cu'
    | 'om'
    | 'or'
    | 'os'
    | 'pa'
    | 'pi'
    | 'fa'
    | 'pl'
    | 'ps'
    | 'pt'
    | 'qu'
    | 'rm'
    | 'rn'
    | 'ro'
    | 'ru'
    | 'sa'
    | 'sc'
    | 'sd'
    | 'se'
    | 'sm'
    | 'sg'
    | 'sr'
    | 'gd'
    | 'sn'
    | 'si'
    | 'sk'
    | 'sl'
    | 'so'
    | 'st'
    | 'es'
    | 'su'
    | 'sw'
    | 'ss'
    | 'sv'
    | 'ta'
    | 'te'
    | 'tg'
    | 'th'
    | 'ti'
    | 'bo'
    | 'tk'
    | 'tl'
    | 'tn'
    | 'to'
    | 'tr'
    | 'ts'
    | 'tt'
    | 'tw'
    | 'ty'
    | 'ug'
    | 'uk'
    | 'ur'
    | 'uz'
    | 've'
    | 'vi'
    | 'vo'
    | 'wa'
    | 'cy'
    | 'wo'
    | 'fy'
    | 'xh'
    | 'yi'
    | 'yo'
    | 'za'
    | 'zu';
  /**
   * Used within language-related menus
   */
  navigationTitle?: string;
  /**
   * Used within for "lang" and "hreflang" attributes
   */
  hreflang?: string;
  /**
   * Language direction for "dir" attribute
   */
  direction?: '' | 'ltr' | 'rtl';
  flag?:
    | 'global'
    | 'ad'
    | 'ae'
    | 'af'
    | 'ag'
    | 'ai'
    | 'al'
    | 'am'
    | 'an'
    | 'ao'
    | 'aq'
    | 'ar'
    | 'as'
    | 'at'
    | 'au'
    | 'aw'
    | 'ax'
    | 'az'
    | 'ba'
    | 'bb'
    | 'bd'
    | 'be'
    | 'bf'
    | 'bg'
    | 'bh'
    | 'bi'
    | 'bj'
    | 'bl'
    | 'bm'
    | 'bn'
    | 'bo'
    | 'bq'
    | 'br'
    | 'bs'
    | 'bt'
    | 'bv'
    | 'bw'
    | 'by'
    | 'bz'
    | 'ca'
    | 'catalonia'
    | 'cc'
    | 'cd'
    | 'cf'
    | 'cg'
    | 'ch'
    | 'ci'
    | 'ck'
    | 'cl'
    | 'cm'
    | 'cn'
    | 'co'
    | 'cr'
    | 'cs'
    | 'cu'
    | 'cv'
    | 'cw'
    | 'cx'
    | 'cy'
    | 'cz'
    | 'de'
    | 'dj'
    | 'dk'
    | 'dm'
    | 'do'
    | 'dz'
    | 'ec'
    | 'ee'
    | 'eg'
    | 'eh'
    | 'en-us-gb'
    | 'gb-eng'
    | 'er'
    | 'es'
    | 'et'
    | 'eu'
    | 'fi'
    | 'fj'
    | 'fk'
    | 'fm'
    | 'fo'
    | 'fr'
    | 'ga'
    | 'gb'
    | 'gd'
    | 'ge'
    | 'gf'
    | 'gg'
    | 'gh'
    | 'gi'
    | 'gl'
    | 'gm'
    | 'gn'
    | 'gp'
    | 'gq'
    | 'gr'
    | 'gs'
    | 'gt'
    | 'gu'
    | 'gw'
    | 'gy'
    | 'hk'
    | 'hm'
    | 'hn'
    | 'hr'
    | 'ht'
    | 'hu'
    | 'id'
    | 'ie'
    | 'il'
    | 'im'
    | 'in'
    | 'io'
    | 'iq'
    | 'ir'
    | 'is'
    | 'it'
    | 'jm'
    | 'jo'
    | 'jp'
    | 'ke'
    | 'kg'
    | 'kh'
    | 'ki'
    | 'kl'
    | 'km'
    | 'kn'
    | 'kp'
    | 'kr'
    | 'kw'
    | 'ky'
    | 'kz'
    | 'la'
    | 'lb'
    | 'lc'
    | 'li'
    | 'lk'
    | 'lr'
    | 'ls'
    | 'lt'
    | 'lu'
    | 'lv'
    | 'ly'
    | 'ma'
    | 'mc'
    | 'md'
    | 'me'
    | 'mf'
    | 'mg'
    | 'mh'
    | 'mi'
    | 'mk'
    | 'ml'
    | 'mm'
    | 'mn'
    | 'mo'
    | 'mp'
    | 'mq'
    | 'mr'
    | 'ms'
    | 'mt'
    | 'mu'
    | 'mv'
    | 'mw'
    | 'mx'
    | 'my'
    | 'mz'
    | 'na'
    | 'nc'
    | 'ne'
    | 'nf'
    | 'ng'
    | 'ni'
    | 'gb-nir'
    | 'nl'
    | 'no'
    | 'np'
    | 'nr'
    | 'nu'
    | 'nz'
    | 'om'
    | 'pa'
    | 'pe'
    | 'pf'
    | 'pg'
    | 'ph'
    | 'pk'
    | 'pl'
    | 'pm'
    | 'pn'
    | 'pr'
    | 'ps'
    | 'pt'
    | 'pw'
    | 'py'
    | 'qa'
    | 'qc'
    | 're'
    | 'ro'
    | 'rs'
    | 'ru'
    | 'rw'
    | 'sa'
    | 'sb'
    | 'sc'
    | 'gb-sct'
    | 'sd'
    | 'se'
    | 'sg'
    | 'sh'
    | 'si'
    | 'sj'
    | 'sk'
    | 'sl'
    | 'sm'
    | 'sn'
    | 'so'
    | 'sr'
    | 'ss'
    | 'st'
    | 'sv'
    | 'sx'
    | 'sy'
    | 'sz'
    | 'tc'
    | 'td'
    | 'tf'
    | 'tg'
    | 'th'
    | 'tj'
    | 'tk'
    | 'tl'
    | 'tm'
    | 'tn'
    | 'to'
    | 'tr'
    | 'tt'
    | 'tv'
    | 'tw'
    | 'tz'
    | 'ua'
    | 'ug'
    | 'um'
    | 'us'
    | 'uy'
    | 'uz'
    | 'va'
    | 'vc'
    | 've'
    | 'vg'
    | 'vi'
    | 'vn'
    | 'vu'
    | 'gb-wls'
    | 'wf'
    | 'ws'
    | 'ye'
    | 'yt'
    | 'za'
    | 'zm'
    | 'zw';
  /**
   * With this language based Website title, you can override the Website title for this language
   */
  websiteTitle?: string;
  /**
   * Fallback Type
   */
  fallbackType?: 'strict' | 'fallback' | 'free';
  /**
   * Fallback to other Language(s) - order is important! Comma separated list
   */
  fallbacks?: string;
  [k: string]: unknown | undefined;
}
export interface BaseVariants {
  base: string;
  condition: string;
}
export interface StaticRoutes {
  /**
   * Static Route Name
   */
  route: string;
  /**
   * Route Type
   */
  type: 'uri' | 'staticText';
}
export interface Redirects {
  /**
   * Automatically update slugs of all sub pages. Default: true
   */
  autoUpdateSlugs?: boolean;
  /**
   * Automatically create redirects for pages with a new slug (works only in LIVE workspace). Default: true
   */
  autoCreateRedirects?: boolean;
  /**
   * Time To Live in days for redirect records to be created - `0` disables TTL, no expiration. Default: 0
   */
  redirectTTL?: number;
  /**
   * HTTP status code for the redirect, see https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections#Temporary_redirections. Default: 307
   */
  httpStatusCode?: (300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308) & number;
}
