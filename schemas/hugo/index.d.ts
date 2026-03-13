/* eslint-disable */

/**
 * Merge configuration from themes
 * https://gohugo.io/getting-started/configuration/#merge-configuration-from-themes
 */
export type MergeType = 'none' | 'shallow' | 'deep';
/**
 * Cache busters to support development using Tailwind 3.x's JIT compiler
 * https://gohugo.io/getting-started/configuration/#configure-cache-busters
 */
export type CacheBusters = {
  source?: string;
  target?: string;
}[];
/**
 * The front matter options
 * https://gohugo.io/content-management/front-matter#front-matter-cascade
 */
export type FrontMatterOptions = Cascade | Cascade1[];
/**
 * The aliases
 * https://gohugo.io/content-management/front-matter#predefined
 */
export type UniqueStringArray = string[];
/**
 * The audio
 * https://gohugo.io/content-management/front-matter#predefined
 */
export type UniqueStringArray1 = string[];
/**
 * The images
 * https://gohugo.io/content-management/front-matter#predefined
 */
export type UniqueStringArray2 = string[];
/**
 * The keywords
 * https://gohugo.io/content-management/front-matter#predefined
 */
export type UniqueStringArray3 = string[];
/**
 * The series
 * https://gohugo.io/content-management/front-matter#predefined
 */
export type UniqueStringArray4 = string[];
/**
 * The videos
 * https://gohugo.io/content-management/front-matter#predefined
 */
export type UniqueStringArray5 = string[];
/**
 * The disabled languages
 * https://gohugo.io/content-management/multilingual/#disable-a-language
 */
export type UniqueStringArray6 = string[];
/**
 * The mount options
 * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
 */
export type MountOptions = {
  /**
   * The source path
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
   */
  source: string;
  /**
   * The target path
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
   */
  target: string;
  /**
   * Whether to disable watching
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
   */
  disableWatch?: boolean;
  /**
   * The language code
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
   */
  lang?: string;
  /**
   * The included files
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
   */
  includeFiles?: string | string[];
  /**
   * The excluded files
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
   */
  excludeFiles?: string | string[];
}[];
/**
 * The import options
 * https://gohugo.io/hugo-modules/configuration/#module-configuration-imports
 */
export type ImportOptions = {
  /**
   * The path
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-imports
   */
  path: string;
  /**
   * Use/ignore the configuration file
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-imports
   */
  ignoreConfig?: boolean;
  /**
   * Use/ignore the imports
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-imports
   */
  ignoreImports?: boolean;
  /**
   * Enable/disable the module
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-imports
   */
  disable?: boolean;
  /**
   * Enable/disable the folder mounting
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-imports
   */
  noMounts?: boolean;
  /**
   * Enable/disable vendoring this import
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-imports
   */
  noVendor?: boolean;
  /**
   * Set import version
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-imports
   */
  version?: string;
  mounts?: MountOptions;
}[];
/**
 * The mount options
 * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
 */
export type MountOptions1 = {
  /**
   * The source path
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
   */
  source: string;
  /**
   * The target path
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
   */
  target: string;
  /**
   * Whether to disable watching
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
   */
  disableWatch?: boolean;
  /**
   * The language code
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
   */
  lang?: string;
  /**
   * The included files
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
   */
  includeFiles?: string | string[];
  /**
   * The excluded files
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-mounts
   */
  excludeFiles?: string | string[];
}[];
export type PermalinkConfiguration =
  | PermalinkDefinition
  | {
      [k: string]: PermalinkDefinition;
    };
/**
 * A permalink
 */
export type PermalinkDefinition = string;
/**
 * The related content option's entry
 * https://gohugo.io/content-management/related/#config-options-per-index
 */
export type RelatedContentOptionSEntry = {
  /**
   * The index name
   * https://gohugo.io/content-management/related/#config-options-per-index
   */
  name?: string;
  /**
   * The index type
   * https://gohugo.io/content-management/related/#config-options-per-index
   */
  type?: 'basic' | 'fragments';
  /**
   * Apply a type specific filter to the result of a search. This is currently only used for the fragments type
   * https://gohugo.io/content-management/related/#config-options-per-index
   */
  applyFilter?: boolean;
  /**
   * The weight indicating how important this parameter is relative to the other parameters
   * https://gohugo.io/content-management/related/#config-options-per-index
   */
  weight?: number;
  /**
   * A percentage (0-100) used to remove common keywords from the index
   * https://gohugo.io/content-management/related/#config-options-per-index
   */
  cardinalityThreshold?: number;
  /**
   * The date format
   * https://gohugo.io/content-management/related/#config-options-per-index
   */
  pattern?: string;
  /**
   * Enable/disable lowering the case keywords in both the indexes and the queries
   * https://gohugo.io/content-management/related/#config-options-per-index
   */
  toLower?: boolean;
}[];

export interface HugoStaticSiteGeneratorConfigFileSchema {
  /**
   * The directory to store archetype files
   * https://gohugo.io/getting-started/configuration/#archetypedir
   */
  archetypeDir?: string;
  /**
   * The directory to store asset files
   * https://gohugo.io/getting-started/configuration/#assetdir
   */
  assetDir?: string;
  /**
   * The hostname and the path to the root
   * https://gohugo.io/getting-started/configuration/#baseurl
   */
  baseURL?: string;
  build?: BuildOptions;
  /**
   * Include/exclude the drafts when building
   * https://gohugo.io/getting-started/configuration/#builddrafts-false
   */
  buildDrafts?: boolean;
  /**
   * Include/exclude the content already expired
   * https://gohugo.io/getting-started/configuration/#buildexpired
   */
  buildExpired?: boolean;
  /**
   * Include/exclude the content with `publishDate` in the future
   * https://gohugo.io/getting-started/configuration/#buildfuture
   */
  buildFuture?: boolean;
  /**
   * The directory where cached files are stored
   * https://gohugo.io/configuration/all/#cachedir
   */
  cacheDir?: string;
  caches?: CacheOptions;
  cascade?: FrontMatterOptions;
  /**
   * Enable/disable relative URLs to absolute conversion
   * https://gohugo.io/getting-started/configuration/#canonifyurls
   */
  canonifyURLs?: boolean;
  /**
   * Enable/disable the automatic capitalize of list titles
   * https://gohugo.io/configuration/all/#capitalizelisttitles
   */
  capitalizeListTitles?: boolean;
  /**
   * Enable/disable cleaning of the destination directory
   * https://gohugo.io/configuration/all/#cleandestinationdir
   */
  cleanDestinationDir?: boolean;
  /**
   * The directory where content files are stored
   * https://gohugo.io/getting-started/configuration/#contentdir
   */
  contentDir?: string;
  /**
   * The copyright notice for your site
   * https://gohugo.io/getting-started/configuration/#copyright
   */
  copyright?: string;
  /**
   * The directory where data files are stored
   * https://gohugo.io/getting-started/configuration/#datadir
   */
  dataDir?: string;
  /**
   * The default content language for the content without language indicator
   * https://gohugo.io/getting-started/configuration/#defaultcontentlanguage
   */
  defaultContentLanguage?: string;
  /**
   * Enable/disable rendering the default content language in subdir
   * https://gohugo.io/getting-started/configuration/#defaultcontentlanguageinsubdir
   */
  defaultContentLanguageInSubdir?: boolean;
  /**
   * The default output format for the site
   * https://gohugo.io/configuration/all/#defaultoutputformat
   */
  defaultOutputFormat?: string;
  /**
   * Enable/disable generation of the alias redirects
   * https://gohugo.io/getting-started/configuration/#disablealiases
   */
  disableAliases?: boolean;
  /**
   * Enable/disable generation of of the alias redirect to the default language when DefaultContentLanguageInSubdir is true
   * https://gohugo.io/configuration/all/#disabledefaultlanguageredirect
   */
  disableDefaultLanguateRedirect?: boolean;
  /**
   * Enable/disable injecting a generator meta tag in the HTML head on the home page only
   * https://gohugo.io/getting-started/configuration/#disablehugogeneratorinject
   */
  disableHugoGeneratorInject?: boolean;
  /**
   * Disabled kinds of pages
   * https://gohugo.io/getting-started/configuration/#disablekinds
   */
  disableKinds?: ('page' | 'home' | 'section' | 'taxonomy' | 'term' | 'rss' | 'sitemap' | 'robotstxt' | '404')[];
  /**
   * Enable/disable automatic live reloading of browser window
   * https://gohugo.io/getting-started/configuration/#disablelivereload
   */
  disableLiveReload?: boolean;
  /**
   * Enable/disable the url/path to lowercase conversion
   * https://gohugo.io/getting-started/configuration/#disablepathtolower
   */
  disablePathToLower?: boolean;
  /**
   * Enable/disable Emoji emoticons support for page content
   * https://gohugo.io/getting-started/configuration/#enableemoji
   */
  enableEmoji?: boolean;
  /**
   * Enable/disable .GitInfo object for each page
   * https://gohugo.io/getting-started/configuration/#enablegitinfo
   */
  enableGitInfo?: boolean;
  /**
   * Enable/disable inline shortcode support
   * https://gohugo.io/getting-started/configuration/#enableinlineshortcodes
   */
  enableInlineShortcodes?: boolean;
  /**
   * Enable/disable placeholder substitution instead of the default value or an empty string if a translation is missing
   * https://gohugo.io/getting-started/configuration/#enablemissingtranslationplaceholders
   */
  enableMissingTranslationPlaceholders?: boolean;
  /**
   * Enable/disable generation of robots.txt file
   * https://gohugo.io/getting-started/configuration/#enablerobotstxt
   */
  enableRobotsTXT?: boolean;
  /**
   * The build environment
   * https://gohugo.io/configuration/all/#environment
   */
  environment?: string;
  frontmatter?: FrontMatterOptions1;
  /**
   *
   * https://gohugo.io/configuration/http-cache/
   */
  HTTPCache?: {
    cache?: {
      for?: {
        /**
         * List of glob patterns to exclude from caching
         * https://gohugo.io/configuration/http-cache/#cacheforexcludes
         */
        excludes?: string | string[];
        /**
         * A list of glob patterns to cache
         * https://gohugo.io/configuration/http-cache/#cacheforincludes
         */
        includes?: string | string[];
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    polls?: {
      /**
       * Enable/disable polling for this configuration
       * https://gohugo.io/configuration/http-cache/#pollsdisable
       */
      disable?: boolean;
      /**
       * The minimum polling interval. This is used after a recent change and gradually increases towards polls.high
       * https://gohugo.io/configuration/http-cache/#pollslow
       */
      low?: string | 0;
      /**
       * The maximum polling interval. This is used when the resource is considered stable
       * https://gohugo.io/configuration/http-cache/#pollshigh
       */
      high?: string | 0;
      for?: {
        /**
         * A list of glob patterns to exclude from polling for this configuration
         * https://gohugo.io/configuration/http-cache/#pollsforexcludes
         */
        excludes?: string | string[];
        /**
         * A list of glob patterns to include in polling for this configuration
         * https://gohugo.io/configuration/http-cache/#pollsforincludes
         */
        includes?: string | string[];
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  };
  /**
   * The designated directory for translation tables
   * https://gohugo.io/configuration/all/#i18ndir
   */
  i18nDir?: string;
  /**
   * The prefix for footnote anchors
   * https://gohugo.io/getting-started/configuration/#footnoteanchorprefix
   */
  footnoteAnchorPrefix?: string;
  /**
   * The text to display for footnote return links
   * https://gohugo.io/getting-started/configuration/#footnotereturnlinkcontents
   */
  footnoteReturnLinkContents?: string;
  /**
   * The Google Analytics tracking ID
   * https://gohugo.io/getting-started/configuration/#googleanalytics
   */
  googleAnalytics?: string;
  /**
   * Enable/disable auto-detecting Chinese/Japanese/Korean Languages in the content
   * https://gohugo.io/getting-started/configuration/#hascjklanguage
   */
  hasCJKLanguage?: boolean;
  /**
   * Enable/disable usage of the cache directory
   */
  ignoreCache?: boolean;
  /**
   * Array of regular expression used to exclude files from a build
   * https://gohugo.io/configuration/all/#ignorefiles
   */
  ignoreFiles?: string[];
  /**
   * Array of of message identifiers used to suppress warnings and errors
   * https://gohugo.io/configuration/all/#ignorelogs
   */
  ignoreLogs?: string[];
  /**
   * A glob pattern matching the module paths to exclude from the _vendor directory
   * https://gohugo.io/configuration/all/#ignorevendorpaths
   */
  ignoreVendorPaths?: string;
  /**
   * The image processing options
   * https://gohugo.io/getting-started/configuration/#imaging
   */
  imaging?: {
    _merge?: MergeType;
    /**
     * The default resample filter
     * https://gohugo.io/content-management/image-processing/#resampling-filter
     */
    resampleFilter?:
      | 'NearestNeighbor'
      | 'Box'
      | 'Linear'
      | 'Hermite'
      | 'MitchellNetravali'
      | 'CatmullRom'
      | 'BSpline'
      | 'Gaussian'
      | 'Lanczos'
      | 'Hann'
      | 'Hamming'
      | 'Blackman'
      | 'Bartlett'
      | 'Welch'
      | 'Cosine';
    /**
     * The default quality
     * https://gohugo.io/content-management/image-processing/#image-processing-config
     */
    quality?: number;
    /**
     * The default hint about what type of image
     * https://gohugo.io/content-management/image-processing/#image-processing-config
     */
    hint?: 'picture' | 'photo' | 'drawing' | 'icon' | 'text';
    /**
     * The anchor used when cropping pictures with either .Fill or .Crop
     * https://gohugo.io/content-management/image-processing/#image-processing-config
     */
    anchor?:
      | 'Smart'
      | 'TopLeft'
      | 'Top'
      | 'TopRight'
      | 'Left'
      | 'Center'
      | 'Right'
      | 'BottomLeft'
      | 'Bottom'
      | 'BottomRight';
    /**
     * The default background color
     * https://gohugo.io/content-management/image-processing/#image-processing-config
     */
    bgColor?: string;
    exif?: ExifOptions;
  };
  /**
   * The language tag as defined by RFC 5646
   * https://gohugo.io/getting-started/configuration/#languagecode
   */
  languageCode?: string;
  languages?: LanguageOptions;
  /**
   * The directory containing layout templates
   * https://gohugo.io/configuration/all/#layoutdir
   */
  layoutDir?: string;
  disableLanguages?: UniqueStringArray6;
  /**
   * The main sections of a site. Used by the MainSections method
   * https://gohugo.io/configuration/all/#mainsections
   */
  mainSections?: string | string[];
  markup?: MarkdownOptions;
  mediaTypes?: MediaTypeSOptions;
  menu?: MediaMenuOptions;
  menus?: MediaMenuOptions1;
  /**
   *
   * https://gohugo.io/getting-started/configuration/#configure-minify
   */
  minify?: {
    _merge?: MergeType;
    /**
     *
     * https://gohugo.io/getting-started/configuration/#configure-minify
     */
    disableCSS?: boolean;
    /**
     *
     * https://gohugo.io/getting-started/configuration/#configure-minify
     */
    disableHTML?: boolean;
    /**
     *
     * https://gohugo.io/getting-started/configuration/#configure-minify
     */
    disableJS?: boolean;
    /**
     *
     * https://gohugo.io/getting-started/configuration/#configure-minify
     */
    disableJSON?: boolean;
    /**
     *
     * https://gohugo.io/getting-started/configuration/#configure-minify
     */
    disableSVG?: boolean;
    /**
     *
     * https://gohugo.io/getting-started/configuration/#configure-minify
     */
    disableXML?: boolean;
    /**
     *
     * https://gohugo.io/getting-started/configuration/#configure-minify
     */
    minifyOutput?: boolean;
    /**
     *
     * https://gohugo.io/getting-started/configuration/#configure-minify
     */
    tdewolff?: {
      /**
       *
       * https://gohugo.io/getting-started/configuration/#configure-minify
       */
      css?: {
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        keepCSS2?: boolean;
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        precision?: number;
      };
      /**
       *
       * https://gohugo.io/getting-started/configuration/#configure-minify
       */
      html?: {
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        keepComments?: boolean;
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        keepConditionalComments?: boolean;
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        keepDefaultAttrVals?: boolean;
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        keepDocumentTags?: boolean;
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        keepEndTags?: boolean;
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        keepQuotes?: boolean;
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        keepWhitespace?: boolean;
      };
      /**
       *
       * https://gohugo.io/getting-started/configuration/#configure-minify
       */
      js?: {
        /**
         * Keeps variable names as they are and omits shortening variable names.
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        keepVarNames?: boolean;
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        noNullishOperator?: boolean;
        /**
         * Number of significant digits to preserve for numbers, 0 means no trimming.
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        precision?: number;
        /**
         * ECMAScript version to use for output, 0 is the latest.
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        version?: number;
      };
      /**
       *
       * https://gohugo.io/getting-started/configuration/#configure-minify
       */
      json?: {
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        keepNumbers?: boolean;
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        precision?: number;
      };
      /**
       *
       * https://gohugo.io/getting-started/configuration/#configure-minify
       */
      svg?: {
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        precision?: number;
        keepComments?: boolean;
      };
      /**
       *
       * https://gohugo.io/getting-started/configuration/#configure-minify
       */
      xml?: {
        /**
         *
         * https://gohugo.io/getting-started/configuration/#configure-minify
         */
        keepWhitespace?: boolean;
      };
    };
  };
  /**
   * The module options
   * https://gohugo.io/hugo-modules/configuration/
   */
  module?: {
    _merge?: MergeType;
    /**
     * The glob pattern matching the paths to skip when vendoring
     * https://gohugo.io/hugo-modules/configuration/#module-configuration-top-level
     */
    noVendor?: string;
    /**
     * Enable/disable picking the vendored module closest to the module using it
     * https://gohugo.io/hugo-modules/configuration/#module-configuration-top-level
     */
    vendorClosest?: boolean & string;
    /**
     * The proxy server to download the remote modules
     * https://gohugo.io/hugo-modules/configuration/#module-configuration-top-level
     */
    proxy?: string;
    /**
     * The glob list of the matching paths that should not use the proxy configured above
     * https://gohugo.io/hugo-modules/configuration/#module-configuration-top-level
     */
    noProxy?: string;
    /**
     * The glob list of the matching paths that should be treated as private
     * https://gohugo.io/hugo-modules/configuration/#module-configuration-top-level
     */
    private?: string;
    /**
     * The workspace file to use. This enables Go workspace mode.
     * https://gohugo.io/hugo-modules/configuration/#module-configuration-top-level
     */
    workspace?: string;
    /**
     * The list of the module path to directory replacement mapping
     * https://gohugo.io/hugo-modules/configuration/#module-configuration-top-level
     */
    replacements?: string;
    hugoVersion?: Version;
    imports?: ImportOptions;
    mounts?: MountOptions1;
  };
  /**
   * The content editor
   * https://gohugo.io/getting-started/configuration/#newcontenteditor
   */
  newContentEditor?: string;
  /**
   * Enable/disable creation of the .hugo_build.lock file
   * https://gohugo.io/configuration/all/#nobuildlock
   */
  noBuildLock?: boolean;
  /**
   * Enable/disable syncing permission mode of files
   * https://gohugo.io/getting-started/configuration/#nochmod
   */
  noChmod?: boolean;
  /**
   * Enable/disable syncing modification time of files
   * https://gohugo.io/getting-started/configuration/#notimes
   */
  noTimes?: boolean;
  outputFormats?: OutputFormatOptions2;
  /**
   * Enable/disable output formats per page kind
   * https://gohugo.io/configuration/outputs/
   */
  outputs?: {
    _merge?: MergeType;
    [k: string]: string[] | undefined;
  };
  /**
   * UNDOCUMENTED.
   */
  page?: {
    [k: string]: unknown | undefined;
  };
  /**
   * The default number of elements per page in pagination
   * https://gohugo.io/getting-started/configuration/#paginate
   */
  paginate?: number;
  /**
   * The path element used during pagination
   * https://gohugo.io/getting-started/configuration/#paginatepath
   */
  paginatePath?: string;
  /**
   * Pagination settings
   * https://gohugo.io/configuration/pagination/
   */
  pagination?: {
    /**
     * Enable/disable alias generation for the first pager
     * https://gohugo.io/configuration/pagination/#disablealiases
     */
    disableAliases?: boolean;
    /**
     * The number of pages per pager
     * https://gohugo.io/configuration/pagination/#pagersize
     */
    pagerSize?: number;
    /**
     * The segment of each pager URL indicating that the target page is a pager
     * https://gohugo.io/configuration/pagination/#path
     */
    path?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Whether to panic on the first WARNING
   * https://gohugo.io/configuration/all/#paniconwarning
   */
  panicOnWarning?: boolean;
  /**
   * Custom site parameters
   * https://gohugo.io/configuration/params/
   */
  params?: {
    [k: string]: unknown | undefined;
  };
  permalinks?: PermalinkOptions;
  /**
   * Pluralize/leave titles in lists
   * https://gohugo.io/getting-started/configuration/#pluralizelisttitles
   */
  pluralizeListTitles?: boolean;
  /**
   * Enable/disable the logging WARNINGs for each missing translation
   * https://gohugo.io/configuration/all/#printi18nwarnings
   */
  printI18nWarnings?: boolean;
  /**
   * Enable/disable the logging of WARNINGs when publishing two or more files to the same path
   * https://gohugo.io/configuration/all/#printpathwarnings
   */
  printPathWarnings?: boolean;
  /**
   * Enable/disable the logging WARNINGs for each unused template
   * https://gohugo.io/configuration/all/#printunusedtemplates
   */
  printUnusedTemplates?: boolean;
  /**
   * Privacy setting for embedded templates
   * https://gohugo.io/configuration/privacy/
   */
  privacy?: {
    /**
     * Disqus embedded template privacy settings
     */
    dispus?: {
      disable?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     * Google analytics embedded template privacy settings
     */
    googleAnalytics?: {
      disable?: boolean;
      respectDoNotTrack?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     * Instagram embedded template privacy settings
     */
    instagram?: {
      disable?: boolean;
      simple?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     * DEPRECATED. Do not use. Deprecated in v0.141.0. Use the x shortcode instead.
     */
    twitter?: {
      disable?: boolean;
      enableDNT?: boolean;
      simple?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     * Vimeo embedded template privacy settings
     */
    vimeo?: {
      disable?: boolean;
      enableDNT?: boolean;
      simple?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     * X embedded template privacy settings
     * https://gohugo.io/shortcodes/x/#privacy
     */
    x?: {
      /**
       * Enable/disable the X shortcode
       * https://gohugo.io/shortcodes/x/#disable
       */
      disable?: boolean;
      /**
       * Whether to prevent X from using post and embedded page data for personalized suggestions and ads
       * https://gohugo.io/shortcodes/x/#enablednt
       */
      enableDNT?: boolean;
      /**
       * Enable/disable usage of javascript in X shortcode
       * https://gohugo.io/shortcodes/x/#simple
       */
      simple?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     * Toutube embedded template privacy settings
     */
    youtube?: {
      disable?: boolean;
      privacyEnhanced?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * The directory where Hugo writes the final static site
   * https://gohugo.io/getting-started/configuration/#publishdir
   */
  publishDir?: string;
  related?: RelatedContentOptions;
  /**
   * Enable/disable making all relative URLs relative to content root
   * https://gohugo.io/getting-started/configuration/#relativeurls
   */
  relativeURLs?: boolean;
  /**
   * The logging level for page links cannot be resolved
   * https://gohugo.io/getting-started/configuration/#reflinkserrorlevel
   */
  refLinksErrorLevel?: 'ERROR' | 'WARNING';
  /**
   * The placeholder when a page reference cannot be found in `ref` or `relref`
   * https://gohugo.io/getting-started/configuration/#reflinksnotfoundurl
   */
  refLinksNotFoundURL?: string;
  /**
   * Remove/leave non-spacing marks from composite characters in content paths
   * https://gohugo.io/getting-started/configuration/#removepathaccents
   */
  removePathAccents?: boolean;
  /**
   * Array of segments to render
   * https://gohugo.io/configuration/all/#rendersegments
   */
  renderSegments?: string[];
  /**
   * The designated directory for caching output from asset pipelines
   * https://gohugo.io/configuration/all/#resourcedir
   */
  resourceDir?: string;
  /**
   * DEPRECATED. Use 'services.rss.limit' instead
   * https://gohugo.io/getting-started/configuration/#rsslimit
   */
  rssLimit?: number;
  /**
   *
   * https://gohugo.io/templates/menu-templates/#section-menu-for-lazy-bloggers
   */
  sectionPagesMenu?: string;
  security?: SecurityOptions;
  /**
   * Map of named segments. Used to build portions of the site independently
   * https://gohugo.io/configuration/segments/
   */
  segments?: {
    [k: string]:
      | {
          /**
           * An array of glob matchers to exclude pages from the segment
           * https://gohugo.io/configuration/segments/
           */
          excludes?: SegmentIncludesExcludes[];
          /**
           * An array of glob matchers to include pages from the segment
           * https://gohugo.io/configuration/segments/
           */
          includes?: SegmentIncludesExcludes[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  /**
   * Configuration for builtin development server
   * https://gohugo.io/configuration/server/
   */
  server?: {
    /**
     * Array of redirects
     * https://gohugo.io/configuration/server/#redirects
     */
    redirects?: {
      /**
       * Enable/disable redirecting even if there is existing content in the path
       * https://gohugo.io/configuration/server/#force
       */
      force?: boolean;
      /**
       * A glob pattern matching the requested URL
       * https://gohugo.io/configuration/server/#from
       */
      from?: string;
      /**
       * Map of glob patterns to march against the request headers
       * https://gohugo.io/configuration/server/#fromheaders
       */
      formHeaders?: {
        /**
         * Glob pattern to match the headers
         */
        [k: string]: string | undefined;
      };
      /**
       * A regular expression used to match the requested URL
       * https://gohugo.io/configuration/server/#fromre
       */
      fromRe?: string;
      /**
       * The HTTP status code to use for the redirect
       * https://gohugo.io/configuration/server/#status
       */
      status?: number | string;
      /**
       * The URL to forward the request to
       * https://gohugo.io/configuration/server/#to
       */
      to?: string;
      [k: string]: unknown | undefined;
    }[];
    /**
     * Array of headers to add to every response
     * https://gohugo.io/configuration/server/#headers
     */
    headers?: {
      /**
       * Glob pattern to match against request URL path
       * https://gohugo.io/configuration/server/#headers
       */
      for?: string;
      /**
       * Map of headers to add to the response
       */
      values?: {
        [k: string]: string | undefined;
      };
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  };
  services?: {
    disqus?: {
      /**
       *
       * https://gohugo.io/configuration/services/#disqusshortname
       */
      shortname?: string;
      [k: string]: unknown | undefined;
    };
    googleAnalytics?: {
      /**
       *
       * https://gohugo.io/configuration/services/#googleanalyticsid
       */
      id?: string;
      [k: string]: unknown | undefined;
    };
    instagram?: {
      /**
       * DEPRECATED. Do not use. Deprecated in v0.123.0
       * https://gohugo.io/configuration/services/#instagramaccesstoken
       */
      accessToken?: string;
      /**
       * DEPRECATED. Do not use. Deprecated in v0.123.0
       * https://gohugo.io/configuration/services/#instagramdisableinlinecss
       */
      disableInlineCSS?: boolean;
      [k: string]: unknown | undefined;
    };
    rss?: {
      /**
       * The maximum number of items to include in an RSS feed
       * https://gohugo.io/configuration/services/#rsslimit
       */
      limit?: number;
      [k: string]: unknown | undefined;
    };
    /**
     * DEPRECATED. Do not use. Deprecated in v0.141.0. Use the x shortcode instead
     */
    twitter?: {
      disableInlineCSS?: boolean;
      [k: string]: unknown | undefined;
    };
    x?: {
      /**
       *
       * https://gohugo.io/configuration/services/#xdisableinlinecss
       */
      disableInlineCSS?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  sitemap?: SitemapOptions;
  /**
   * The designated directory for static files
   * https://gohugo.io/configuration/all/#staticdir
   */
  staticDir?: string;
  /**
   * The length of text in words to show in a .Summary
   * https://gohugo.io/getting-started/configuration/#summarylength
   */
  summaryLength?: number;
  taxonomies?: TaxonomyOptions;
  /**
   * Enable/disable printing template execution metrics to the console
   * https://gohugo.io/troubleshooting/performance/#template-metrics
   */
  templateMetrics?: boolean;
  /**
   * Enable/disable printing template execution improvement hints to the console
   * https://gohugo.io/troubleshooting/performance/#template-metrics
   */
  templateMetricsHints?: boolean;
  /**
   * Theme or Theme list
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-imports
   */
  theme?: string | string[];
  /**
   * The directory where themes are stored
   * https://gohugo.io/getting-started/configuration/#themesdir
   */
  themesDir?: string;
  /**
   * The timeout for generating page contents
   * https://gohugo.io/getting-started/configuration/#timeout
   */
  timeout?: string;
  /**
   * The time zone
   * https://gohugo.io/getting-started/configuration/#timezone
   */
  timeZone?:
    | 'Africa/Abidjan'
    | 'Africa/Accra'
    | 'Africa/Addis_Ababa'
    | 'Africa/Algiers'
    | 'Africa/Asmara'
    | 'Africa/Asmera'
    | 'Africa/Bamako'
    | 'Africa/Bangui'
    | 'Africa/Banjul'
    | 'Africa/Bissau'
    | 'Africa/Blantyre'
    | 'Africa/Brazzaville'
    | 'Africa/Bujumbura'
    | 'Africa/Cairo'
    | 'Africa/Casablanca'
    | 'Africa/Ceuta'
    | 'Africa/Conakry'
    | 'Africa/Dakar'
    | 'Africa/Dar_es_Salaam'
    | 'Africa/Djibouti'
    | 'Africa/Douala'
    | 'Africa/El_Aaiun'
    | 'Africa/Freetown'
    | 'Africa/Gaborone'
    | 'Africa/Harare'
    | 'Africa/Johannesburg'
    | 'Africa/Juba'
    | 'Africa/Kampala'
    | 'Africa/Khartoum'
    | 'Africa/Kigali'
    | 'Africa/Kinshasa'
    | 'Africa/Lagos'
    | 'Africa/Libreville'
    | 'Africa/Lome'
    | 'Africa/Luanda'
    | 'Africa/Lubumbashi'
    | 'Africa/Lusaka'
    | 'Africa/Malabo'
    | 'Africa/Maputo'
    | 'Africa/Maseru'
    | 'Africa/Mbabane'
    | 'Africa/Mogadishu'
    | 'Africa/Monrovia'
    | 'Africa/Nairobi'
    | 'Africa/Ndjamena'
    | 'Africa/Niamey'
    | 'Africa/Nouakchott'
    | 'Africa/Ouagadougou'
    | 'Africa/Porto-Novo'
    | 'Africa/Sao_Tome'
    | 'Africa/Timbuktu'
    | 'Africa/Tripoli'
    | 'Africa/Tunis'
    | 'Africa/Windhoek'
    | 'America/Adak'
    | 'America/Anchorage'
    | 'America/Anguilla'
    | 'America/Antigua'
    | 'America/Araguaina'
    | 'America/Argentina/Buenos_Aires'
    | 'America/Argentina/Catamarca'
    | 'America/Argentina/ComodRivadavia'
    | 'America/Argentina/Cordoba'
    | 'America/Argentina/Jujuy'
    | 'America/Argentina/La_Rioja'
    | 'America/Argentina/Mendoza'
    | 'America/Argentina/Rio_Gallegos'
    | 'America/Argentina/Salta'
    | 'America/Argentina/San_Juan'
    | 'America/Argentina/San_Luis'
    | 'America/Argentina/Tucuman'
    | 'America/Argentina/Ushuaia'
    | 'America/Aruba'
    | 'America/Asuncion'
    | 'America/Atikokan'
    | 'America/Atka'
    | 'America/Bahia'
    | 'America/Bahia_Banderas'
    | 'America/Barbados'
    | 'America/Belem'
    | 'America/Belize'
    | 'America/Blanc-Sablon'
    | 'America/Boa_Vista'
    | 'America/Bogota'
    | 'America/Boise'
    | 'America/Buenos_Aires'
    | 'America/Cambridge_Bay'
    | 'America/Campo_Grande'
    | 'America/Cancun'
    | 'America/Caracas'
    | 'America/Catamarca'
    | 'America/Cayenne'
    | 'America/Cayman'
    | 'America/Chicago'
    | 'America/Chihuahua'
    | 'America/Coral_Harbour'
    | 'America/Cordoba'
    | 'America/Costa_Rica'
    | 'America/Creston'
    | 'America/Cuiaba'
    | 'America/Curacao'
    | 'America/Danmarkshavn'
    | 'America/Dawson'
    | 'America/Dawson_Creek'
    | 'America/Denver'
    | 'America/Detroit'
    | 'America/Dominica'
    | 'America/Edmonton'
    | 'America/Eirunepe'
    | 'America/El_Salvador'
    | 'America/Ensenada'
    | 'America/Fort_Nelson'
    | 'America/Fort_Wayne'
    | 'America/Fortaleza'
    | 'America/Glace_Bay'
    | 'America/Godthab'
    | 'America/Goose_Bay'
    | 'America/Grand_Turk'
    | 'America/Grenada'
    | 'America/Guadeloupe'
    | 'America/Guatemala'
    | 'America/Guayaquil'
    | 'America/Guyana'
    | 'America/Halifax'
    | 'America/Havana'
    | 'America/Hermosillo'
    | 'America/Indiana/Indianapolis'
    | 'America/Indiana/Knox'
    | 'America/Indiana/Marengo'
    | 'America/Indiana/Petersburg'
    | 'America/Indiana/Tell_City'
    | 'America/Indiana/Vevay'
    | 'America/Indiana/Vincennes'
    | 'America/Indiana/Winamac'
    | 'America/Indianapolis'
    | 'America/Inuvik'
    | 'America/Iqaluit'
    | 'America/Jamaica'
    | 'America/Jujuy'
    | 'America/Juneau'
    | 'America/Kentucky/Louisville'
    | 'America/Kentucky/Monticello'
    | 'America/Knox_IN'
    | 'America/Kralendijk'
    | 'America/La_Paz'
    | 'America/Lima'
    | 'America/Los_Angeles'
    | 'America/Louisville'
    | 'America/Lower_Princes'
    | 'America/Maceio'
    | 'America/Managua'
    | 'America/Manaus'
    | 'America/Marigot'
    | 'America/Martinique'
    | 'America/Matamoros'
    | 'America/Mazatlan'
    | 'America/Mendoza'
    | 'America/Menominee'
    | 'America/Merida'
    | 'America/Metlakatla'
    | 'America/Mexico_City'
    | 'America/Miquelon'
    | 'America/Moncton'
    | 'America/Monterrey'
    | 'America/Montevideo'
    | 'America/Montreal'
    | 'America/Montserrat'
    | 'America/Nassau'
    | 'America/New_York'
    | 'America/Nipigon'
    | 'America/Nome'
    | 'America/Noronha'
    | 'America/North_Dakota/Beulah'
    | 'America/North_Dakota/Center'
    | 'America/North_Dakota/New_Salem'
    | 'America/Nuuk'
    | 'America/Ojinaga'
    | 'America/Panama'
    | 'America/Pangnirtung'
    | 'America/Paramaribo'
    | 'America/Phoenix'
    | 'America/Port-au-Prince'
    | 'America/Port_of_Spain'
    | 'America/Porto_Acre'
    | 'America/Porto_Velho'
    | 'America/Puerto_Rico'
    | 'America/Punta_Arenas'
    | 'America/Rainy_River'
    | 'America/Rankin_Inlet'
    | 'America/Recife'
    | 'America/Regina'
    | 'America/Resolute'
    | 'America/Rio_Branco'
    | 'America/Rosario'
    | 'America/Santa_Isabel'
    | 'America/Santarem'
    | 'America/Santiago'
    | 'America/Santo_Domingo'
    | 'America/Sao_Paulo'
    | 'America/Scoresbysund'
    | 'America/Shiprock'
    | 'America/Sitka'
    | 'America/St_Barthelemy'
    | 'America/St_Johns'
    | 'America/St_Kitts'
    | 'America/St_Lucia'
    | 'America/St_Thomas'
    | 'America/St_Vincent'
    | 'America/Swift_Current'
    | 'America/Tegucigalpa'
    | 'America/Thule'
    | 'America/Thunder_Bay'
    | 'America/Tijuana'
    | 'America/Toronto'
    | 'America/Tortola'
    | 'America/Vancouver'
    | 'America/Virgin'
    | 'America/Whitehorse'
    | 'America/Winnipeg'
    | 'America/Yakutat'
    | 'America/Yellowknife'
    | 'Antarctica/Casey'
    | 'Antarctica/Davis'
    | 'Antarctica/DumontDUrville'
    | 'Antarctica/Macquarie'
    | 'Antarctica/Mawson'
    | 'Antarctica/McMurdo'
    | 'Antarctica/Palmer'
    | 'Antarctica/Rothera'
    | 'Antarctica/South_Pole'
    | 'Antarctica/Syowa'
    | 'Antarctica/Troll'
    | 'Antarctica/Vostok'
    | 'Arctic/Longyearbyen'
    | 'Asia/Aden'
    | 'Asia/Almaty'
    | 'Asia/Amman'
    | 'Asia/Anadyr'
    | 'Asia/Aqtau'
    | 'Asia/Aqtobe'
    | 'Asia/Ashgabat'
    | 'Asia/Ashkhabad'
    | 'Asia/Atyrau'
    | 'Asia/Baghdad'
    | 'Asia/Bahrain'
    | 'Asia/Baku'
    | 'Asia/Bangkok'
    | 'Asia/Barnaul'
    | 'Asia/Beirut'
    | 'Asia/Bishkek'
    | 'Asia/Brunei'
    | 'Asia/Calcutta'
    | 'Asia/Chita'
    | 'Asia/Choibalsan'
    | 'Asia/Chongqing'
    | 'Asia/Chungking'
    | 'Asia/Colombo'
    | 'Asia/Dacca'
    | 'Asia/Damascus'
    | 'Asia/Dhaka'
    | 'Asia/Dili'
    | 'Asia/Dubai'
    | 'Asia/Dushanbe'
    | 'Asia/Famagusta'
    | 'Asia/Gaza'
    | 'Asia/Harbin'
    | 'Asia/Hebron'
    | 'Asia/Ho_Chi_Minh'
    | 'Asia/Hong_Kong'
    | 'Asia/Hovd'
    | 'Asia/Irkutsk'
    | 'Asia/Istanbul'
    | 'Asia/Jakarta'
    | 'Asia/Jayapura'
    | 'Asia/Jerusalem'
    | 'Asia/Kabul'
    | 'Asia/Kamchatka'
    | 'Asia/Karachi'
    | 'Asia/Kashgar'
    | 'Asia/Kathmandu'
    | 'Asia/Katmandu'
    | 'Asia/Khandyga'
    | 'Asia/Kolkata'
    | 'Asia/Krasnoyarsk'
    | 'Asia/Kuala_Lumpur'
    | 'Asia/Kuching'
    | 'Asia/Kuwait'
    | 'Asia/Macao'
    | 'Asia/Macau'
    | 'Asia/Magadan'
    | 'Asia/Makassar'
    | 'Asia/Manila'
    | 'Asia/Muscat'
    | 'Asia/Nicosia'
    | 'Asia/Novokuznetsk'
    | 'Asia/Novosibirsk'
    | 'Asia/Omsk'
    | 'Asia/Oral'
    | 'Asia/Phnom_Penh'
    | 'Asia/Pontianak'
    | 'Asia/Pyongyang'
    | 'Asia/Qatar'
    | 'Asia/Qostanay'
    | 'Asia/Qyzylorda'
    | 'Asia/Rangoon'
    | 'Asia/Riyadh'
    | 'Asia/Saigon'
    | 'Asia/Sakhalin'
    | 'Asia/Samarkand'
    | 'Asia/Seoul'
    | 'Asia/Shanghai'
    | 'Asia/Singapore'
    | 'Asia/Srednekolymsk'
    | 'Asia/Taipei'
    | 'Asia/Tashkent'
    | 'Asia/Tbilisi'
    | 'Asia/Tehran'
    | 'Asia/Tel_Aviv'
    | 'Asia/Thimbu'
    | 'Asia/Thimphu'
    | 'Asia/Tokyo'
    | 'Asia/Tomsk'
    | 'Asia/Ujung_Pandang'
    | 'Asia/Ulaanbaatar'
    | 'Asia/Ulan_Bator'
    | 'Asia/Urumqi'
    | 'Asia/Ust-Nera'
    | 'Asia/Vientiane'
    | 'Asia/Vladivostok'
    | 'Asia/Yakutsk'
    | 'Asia/Yangon'
    | 'Asia/Yekaterinburg'
    | 'Asia/Yerevan'
    | 'Atlantic/Azores'
    | 'Atlantic/Bermuda'
    | 'Atlantic/Canary'
    | 'Atlantic/Cape_Verde'
    | 'Atlantic/Faeroe'
    | 'Atlantic/Faroe'
    | 'Atlantic/Jan_Mayen'
    | 'Atlantic/Madeira'
    | 'Atlantic/Reykjavik'
    | 'Atlantic/South_Georgia'
    | 'Atlantic/St_Helena'
    | 'Atlantic/Stanley'
    | 'Australia/ACT'
    | 'Australia/Adelaide'
    | 'Australia/Brisbane'
    | 'Australia/Broken_Hill'
    | 'Australia/Canberra'
    | 'Australia/Currie'
    | 'Australia/Darwin'
    | 'Australia/Eucla'
    | 'Australia/Hobart'
    | 'Australia/LHI'
    | 'Australia/Lindeman'
    | 'Australia/Lord_Howe'
    | 'Australia/Melbourne'
    | 'Australia/North'
    | 'Australia/NSW'
    | 'Australia/Perth'
    | 'Australia/Queensland'
    | 'Australia/South'
    | 'Australia/Sydney'
    | 'Australia/Tasmania'
    | 'Australia/Victoria'
    | 'Australia/West'
    | 'Australia/Yancowinna'
    | 'Brazil/Acre'
    | 'Brazil/DeNoronha'
    | 'Brazil/East'
    | 'Brazil/West'
    | 'Canada/Atlantic'
    | 'Canada/Central'
    | 'Canada/Eastern'
    | 'Canada/Mountain'
    | 'Canada/Newfoundland'
    | 'Canada/Pacific'
    | 'Canada/Saskatchewan'
    | 'Canada/Yukon'
    | 'Chile/Continental'
    | 'Chile/EasterIsland'
    | 'Cuba'
    | 'Egypt'
    | 'Eire'
    | 'Etc/GMT'
    | 'Etc/GMT+0'
    | 'Etc/GMT+1'
    | 'Etc/GMT+10'
    | 'Etc/GMT+11'
    | 'Etc/GMT+12'
    | 'Etc/GMT+2'
    | 'Etc/GMT+3'
    | 'Etc/GMT+4'
    | 'Etc/GMT+5'
    | 'Etc/GMT+6'
    | 'Etc/GMT+7'
    | 'Etc/GMT+8'
    | 'Etc/GMT+9'
    | 'Etc/GMT-0'
    | 'Etc/GMT-1'
    | 'Etc/GMT-10'
    | 'Etc/GMT-11'
    | 'Etc/GMT-12'
    | 'Etc/GMT-13'
    | 'Etc/GMT-14'
    | 'Etc/GMT-2'
    | 'Etc/GMT-3'
    | 'Etc/GMT-4'
    | 'Etc/GMT-5'
    | 'Etc/GMT-6'
    | 'Etc/GMT-7'
    | 'Etc/GMT-8'
    | 'Etc/GMT-9'
    | 'Etc/GMT0'
    | 'Etc/Greenwich'
    | 'Etc/UCT'
    | 'Etc/Universal'
    | 'Etc/UTC'
    | 'Etc/Zulu'
    | 'Europe/Amsterdam'
    | 'Europe/Andorra'
    | 'Europe/Astrakhan'
    | 'Europe/Athens'
    | 'Europe/Belfast'
    | 'Europe/Belgrade'
    | 'Europe/Berlin'
    | 'Europe/Bratislava'
    | 'Europe/Brussels'
    | 'Europe/Bucharest'
    | 'Europe/Budapest'
    | 'Europe/Busingen'
    | 'Europe/Chisinau'
    | 'Europe/Copenhagen'
    | 'Europe/Dublin'
    | 'Europe/Gibraltar'
    | 'Europe/Guernsey'
    | 'Europe/Helsinki'
    | 'Europe/Isle_of_Man'
    | 'Europe/Istanbul'
    | 'Europe/Jersey'
    | 'Europe/Kaliningrad'
    | 'Europe/Kiev'
    | 'Europe/Kirov'
    | 'Europe/Lisbon'
    | 'Europe/Ljubljana'
    | 'Europe/London'
    | 'Europe/Luxembourg'
    | 'Europe/Madrid'
    | 'Europe/Malta'
    | 'Europe/Mariehamn'
    | 'Europe/Minsk'
    | 'Europe/Monaco'
    | 'Europe/Moscow'
    | 'Europe/Nicosia'
    | 'Europe/Oslo'
    | 'Europe/Paris'
    | 'Europe/Podgorica'
    | 'Europe/Prague'
    | 'Europe/Riga'
    | 'Europe/Rome'
    | 'Europe/Samara'
    | 'Europe/San_Marino'
    | 'Europe/Sarajevo'
    | 'Europe/Saratov'
    | 'Europe/Simferopol'
    | 'Europe/Skopje'
    | 'Europe/Sofia'
    | 'Europe/Stockholm'
    | 'Europe/Tallinn'
    | 'Europe/Tirane'
    | 'Europe/Tiraspol'
    | 'Europe/Ulyanovsk'
    | 'Europe/Uzhgorod'
    | 'Europe/Vaduz'
    | 'Europe/Vatican'
    | 'Europe/Vienna'
    | 'Europe/Vilnius'
    | 'Europe/Volgograd'
    | 'Europe/Warsaw'
    | 'Europe/Zagreb'
    | 'Europe/Zaporozhye'
    | 'Europe/Zurich'
    | 'GB'
    | 'GB-Eire'
    | 'Hongkong'
    | 'Iceland'
    | 'Indian/Antananarivo'
    | 'Indian/Chagos'
    | 'Indian/Christmas'
    | 'Indian/Cocos'
    | 'Indian/Comoro'
    | 'Indian/Kerguelen'
    | 'Indian/Mahe'
    | 'Indian/Maldives'
    | 'Indian/Mauritius'
    | 'Indian/Mayotte'
    | 'Indian/Reunion'
    | 'Iran'
    | 'Israel'
    | 'Jamaica'
    | 'Japan'
    | 'Kwajalein'
    | 'Libya'
    | 'Mexico/BajaNorte'
    | 'Mexico/BajaSur'
    | 'Mexico/General'
    | 'Navajo'
    | 'NZ'
    | 'NZ-CHAT'
    | 'Pacific/Apia'
    | 'Pacific/Auckland'
    | 'Pacific/Bougainville'
    | 'Pacific/Chatham'
    | 'Pacific/Chuuk'
    | 'Pacific/Easter'
    | 'Pacific/Efate'
    | 'Pacific/Enderbury'
    | 'Pacific/Fakaofo'
    | 'Pacific/Fiji'
    | 'Pacific/Funafuti'
    | 'Pacific/Galapagos'
    | 'Pacific/Gambier'
    | 'Pacific/Guadalcanal'
    | 'Pacific/Guam'
    | 'Pacific/Honolulu'
    | 'Pacific/Johnston'
    | 'Pacific/Kanton'
    | 'Pacific/Kiritimati'
    | 'Pacific/Kosrae'
    | 'Pacific/Kwajalein'
    | 'Pacific/Majuro'
    | 'Pacific/Marquesas'
    | 'Pacific/Midway'
    | 'Pacific/Nauru'
    | 'Pacific/Niue'
    | 'Pacific/Norfolk'
    | 'Pacific/Noumea'
    | 'Pacific/Pago_Pago'
    | 'Pacific/Palau'
    | 'Pacific/Pitcairn'
    | 'Pacific/Pohnpei'
    | 'Pacific/Ponape'
    | 'Pacific/Port_Moresby'
    | 'Pacific/Rarotonga'
    | 'Pacific/Saipan'
    | 'Pacific/Samoa'
    | 'Pacific/Tahiti'
    | 'Pacific/Tarawa'
    | 'Pacific/Tongatapu'
    | 'Pacific/Truk'
    | 'Pacific/Wake'
    | 'Pacific/Wallis'
    | 'Pacific/Yap'
    | 'Poland'
    | 'Portugal'
    | 'PRC'
    | 'ROC'
    | 'Singapore'
    | 'US/Alaska'
    | 'US/Aleutian'
    | 'US/Arizona'
    | 'US/Central'
    | 'US/East-Indiana'
    | 'US/Eastern'
    | 'US/Hawaii'
    | 'US/Indiana-Starke'
    | 'US/Michigan'
    | 'US/Mountain'
    | 'US/Pacific'
    | 'US/Samoa';
  /**
   * The site title
   * https://gohugo.io/getting-started/configuration/#title
   */
  title?: string;
  /**
   * The title case style
   * https://gohugo.io/getting-started/configuration/#titlecasestyle
   */
  titleCaseStyle?: 'ap' | 'chicago' | 'go' | 'firstupper' | 'none';
  /**
   * Enable/disable adding file extensions to urls
   * https://gohugo.io/getting-started/configuration/#uglyurls
   */
  uglyURLs?: boolean;
  /**
   * Enable/disable watching filesystem for changes and recreating as needed
   * https://gohugo.io/getting-started/configuration/#watch
   */
  watch?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The build options
 * https://gohugo.io/getting-started/configuration/#configure-build
 */
export interface BuildOptions {
  _merge?: MergeType;
  /**
   * The time when to use the cached resources in `/resources/_gen` for `PostCSS` and `ToCSS`
   * https://gohugo.io/getting-started/configuration/#configure-build
   */
  useResourceCacheWhen?: 'never' | 'always' | 'fallback';
  /**
   * @deprecated
   * Enable/disable `hugo_stats.json` writing to the root project directory.
   * Although still functional, the writeStats key will be deprecated in a future release.
   * https://gohugo.io/getting-started/configuration/#configure-build
   */
  writeStats?: boolean;
  buildStats?: BuildStats;
  /**
   * Enable/disable `jsconfig.json` writing into your `/assets` folder with mapping of imports from running `js.Build`
   * https://gohugo.io/getting-started/configuration/#configure-build
   */
  noJSConfigInAssets?: boolean;
  cachebusters?: CacheBusters;
}
/**
 * When enabled, creates a hugo_stats.json file in the root of your project.
 * https://gohugo.io/getting-started/configuration/#configure-build
 */
export interface BuildStats {
  enable?: boolean;
  disableClasses?: boolean;
  disableIDs?: boolean;
  disableTags?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The cache options
 * https://gohugo.io/getting-started/configuration/#configure-file-caches
 */
export interface CacheOptions {
  _merge?: MergeType;
  /**
   * Cache entry
   */
  [k: string]:
    | {
        /**
         * The duration before the cache entry will be evicted
         * https://gohugo.io/getting-started/configuration/#the-keywords-explained
         */
        maxAge?: number | string;
        /**
         * The absolute path to store cache files
         * https://gohugo.io/getting-started/configuration/#the-keywords-explained
         */
        dir?: string;
      }
    | undefined;
}
export interface Cascade {
  aliases?: UniqueStringArray;
  audio?: UniqueStringArray1;
  /**
   *
   * https://gohugo.io/content-management/build-options/
   */
  build?: {
    /**
     *
     * https://gohugo.io/content-management/build-options/#list
     */
    list?: 'always' | 'local' | 'never';
    /**
     *
     * https://gohugo.io/content-management/build-options/#publishresources
     */
    publishResources?: boolean;
    /**
     *
     * https://gohugo.io/content-management/build-options/#render
     */
    render?: 'always' | 'link' | 'never';
    [k: string]: unknown | undefined;
  };
  /**
   * The datetime
   * https://gohugo.io/content-management/front-matter#predefined
   */
  date?: string;
  /**
   * The description
   * https://gohugo.io/content-management/front-matter#predefined
   */
  description?: string;
  /**
   * Specify that the content is (not) the draft
   * https://gohugo.io/content-management/front-matter#predefined
   */
  draft?: boolean;
  /**
   * The expire date
   * https://gohugo.io/content-management/front-matter#predefined
   */
  expiryDate?: string;
  /**
   * Specify that the content is (not) the headless bundle
   * https://gohugo.io/content-management/front-matter#predefined
   */
  headless?: boolean;
  images?: UniqueStringArray2;
  /**
   * Specify that the page language is (not) the CJK language
   * https://gohugo.io/content-management/front-matter#predefined
   */
  isCJKLanguage?: boolean;
  keywords?: UniqueStringArray3;
  /**
   * The layout
   * https://gohugo.io/content-management/front-matter#predefined
   */
  layout?: string;
  /**
   * The last modification time
   * https://gohugo.io/content-management/front-matter#predefined
   */
  lastmod?: string;
  /**
   * The link title
   * https://gohugo.io/content-management/front-matter#predefined
   */
  linkTitle?: string;
  /**
   *
   * https://gohugo.io/content-management/front-matter#predefined
   */
  markup?: 'rst' | 'md';
  /**
   *
   * https://gohugo.io/content-management/menus/
   */
  menus?:
    | string[]
    | {
        [k: string]:
          | {
              identifier?: string;
              name?: string;
              params?: {
                [k: string]: unknown | undefined;
              };
              parent?: string;
              post?: string;
              pre?: string;
              weight?: number;
              [k: string]: unknown | undefined;
            }
          | undefined;
      };
  /**
   * The last modification time
   * https://gohugo.io/content-management/front-matter#predefined
   */
  modified?: string;
  outputs?: OutputFormatOptions;
  params?: {
    [k: string]: unknown | undefined;
  };
  /**
   * The publish date
   * https://gohugo.io/content-management/front-matter#predefined
   */
  pubdate?: string;
  /**
   * The publish date
   * https://gohugo.io/content-management/front-matter#predefined
   */
  publishDate?: string;
  /**
   * The publish date
   * https://gohugo.io/content-management/front-matter#predefined
   */
  published?: string;
  resources?: ResourceOptions;
  sitemap?: {
    /**
     *
     * https://gohugo.io/configuration/sitemap/#changefreq
     */
    changefreq?: '' | 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    /**
     * https://gohugo.io/configuration/sitemap/#disable
     */
    disable?: boolean;
    priority?: number &
      (
        | -1
        | {
            [k: string]: unknown | undefined;
          }
      );
    [k: string]: unknown | undefined;
  };
  series?: UniqueStringArray4;
  /**
   * The slug
   * https://gohugo.io/content-management/front-matter#predefined
   */
  slug?: string;
  /**
   * The summary
   * https://gohugo.io/content-management/front-matter#predefined
   */
  summary?: string;
  /**
   * The front matter default
   * https://gohugo.io/content-management/front-matter#front-matter-cascade
   */
  target?: {
    environment?: string;
    /**
     * The glob pattern matching the content path below /content
     * https://gohugo.io/content-management/front-matter#front-matter-cascade
     */
    path?: string;
    /**
     * The glob pattern matching the page's kind
     * https://gohugo.io/content-management/front-matter#front-matter-cascade
     */
    kind?: string;
    /**
     * The glob pattern matching the page's language
     * https://gohugo.io/content-management/front-matter#front-matter-cascade
     */
    lang?: string;
  };
  /**
   * The title
   * https://gohugo.io/content-management/front-matter#predefined
   */
  title?: string;
  translationKey?: string;
  /**
   * The type
   * https://gohugo.io/content-management/front-matter#predefined
   */
  type?: string;
  /**
   * The expire date
   * https://gohugo.io/content-management/front-matter#predefined
   */
  unpublishdate?: string;
  /**
   * The url
   * https://gohugo.io/content-management/front-matter#predefined
   */
  url?: string;
  videos?: UniqueStringArray5;
  /**
   * The weight
   * https://gohugo.io/content-management/front-matter#predefined
   */
  weight?: number;
  /**
   * The front matter default
   * https://gohugo.io/content-management/front-matter#front-matter-cascade
   *
   * This interface was referenced by `Cascade`'s JSON-Schema definition
   * via the `patternProperty` "^(?!aliases|audio|build|date|description|draft|expiryDate|headless|images|isCJKLanguage|keywords|layout|lastmod|linkTitle|markup|menus|modified|outputs|params|pubdate|publishDate|published|resources|sitemap|series|slug|summary|target|title|translationKey|type|unpublishdate|url|videos|weight)$".
   *
   * This interface was referenced by `Cascade1`'s JSON-Schema definition
   * via the `patternProperty` "^(?!aliases|audio|build|date|description|draft|expiryDate|headless|images|isCJKLanguage|keywords|layout|lastmod|linkTitle|markup|menus|modified|outputs|params|pubdate|publishDate|published|resources|sitemap|series|slug|summary|target|title|translationKey|type|unpublishdate|url|videos|weight)$".
   */
  [k: string]: {
    [k: string]: unknown | undefined;
  };
}
/**
 * The output format options
 * https://gohugo.io/content-management/front-matter#predefined
 */
export interface OutputFormatOptions {
  [k: string]: OutputFormatOptions1 | undefined;
}
/**
 * The output format options
 * https://gohugo.io/templates/output-formats/#configure-output-formats
 */
export interface OutputFormatOptions1 {
  /**
   * The identifier
   * https://gohugo.io/templates/output-formats/#configure-output-formats
   */
  name?: string;
  /**
   * The media type
   * https://gohugo.io/templates/output-formats/#media-types
   */
  mediaType?: string;
  /**
   * The path
   * https://gohugo.io/templates/output-formats/#configure-output-formats
   */
  path?: string;
  /**
   * The base filename for the list filenames
   * https://gohugo.io/templates/output-formats/#configure-output-formats
   */
  baseName?: string;
  /**
   *
   * https://gohugo.io/templates/output-formats/#configure-output-formats
   */
  rel?: string;
  /**
   * The replacement for `http://` or `https://` in `baseURL`
   * https://gohugo.io/templates/output-formats/#configure-output-formats
   */
  protocol?: string;
  /**
   * Enable/disable Go's plain text templates parser for the templates
   * https://gohugo.io/templates/output-formats/#configure-output-formats
   */
  isPlainText?: boolean;
  /**
   *
   * https://gohugo.io/templates/output-formats/#configure-output-formats
   */
  isHTML?: boolean;
  /**
   * Enable/disable adding file extensions to urls
   * https://gohugo.io/templates/output-formats/#configure-output-formats
   */
  noUgly?: boolean;
  /**
   * Include/exclude this format in an AlternativeOutputFormats format listing
   * https://gohugo.io/templates/output-formats/#configure-output-formats
   */
  notAlternative?: boolean;
  /**
   * Enable/disable .Permalink and .RelPermalink return the rendering output format
   * https://gohugo.io/templates/output-formats/#configure-output-formats
   */
  permalinkable?: boolean;
  /**
   * The weight
   * https://gohugo.io/templates/output-formats/#configure-output-formats
   */
  weight?: number;
}
/**
 * The resource options
 * https://gohugo.io/content-management/front-matter#predefined
 */
export interface ResourceOptions {
  /**
   * The value for `Name`
   * https://gohugo.io/content-management/page-resources/#page-resources-metadata
   */
  name?: string;
  /**
   * The value for `Title`
   * https://gohugo.io/content-management/page-resources/#page-resources-metadata
   */
  title?: string;
  params?: ParamOptions;
}
/**
 * The param options
 * https://gohugo.io/content-management/page-resources/#page-resources-metadata
 */
export interface ParamOptions {
  /**
   * The param
   * https://gohugo.io/content-management/page-resources/#page-resources-metadata
   */
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
export interface Cascade1 {
  aliases?: UniqueStringArray;
  audio?: UniqueStringArray1;
  /**
   *
   * https://gohugo.io/content-management/build-options/
   */
  build?: {
    /**
     *
     * https://gohugo.io/content-management/build-options/#list
     */
    list?: 'always' | 'local' | 'never';
    /**
     *
     * https://gohugo.io/content-management/build-options/#publishresources
     */
    publishResources?: boolean;
    /**
     *
     * https://gohugo.io/content-management/build-options/#render
     */
    render?: 'always' | 'link' | 'never';
    [k: string]: unknown | undefined;
  };
  /**
   * The datetime
   * https://gohugo.io/content-management/front-matter#predefined
   */
  date?: string;
  /**
   * The description
   * https://gohugo.io/content-management/front-matter#predefined
   */
  description?: string;
  /**
   * Specify that the content is (not) the draft
   * https://gohugo.io/content-management/front-matter#predefined
   */
  draft?: boolean;
  /**
   * The expire date
   * https://gohugo.io/content-management/front-matter#predefined
   */
  expiryDate?: string;
  /**
   * Specify that the content is (not) the headless bundle
   * https://gohugo.io/content-management/front-matter#predefined
   */
  headless?: boolean;
  images?: UniqueStringArray2;
  /**
   * Specify that the page language is (not) the CJK language
   * https://gohugo.io/content-management/front-matter#predefined
   */
  isCJKLanguage?: boolean;
  keywords?: UniqueStringArray3;
  /**
   * The layout
   * https://gohugo.io/content-management/front-matter#predefined
   */
  layout?: string;
  /**
   * The last modification time
   * https://gohugo.io/content-management/front-matter#predefined
   */
  lastmod?: string;
  /**
   * The link title
   * https://gohugo.io/content-management/front-matter#predefined
   */
  linkTitle?: string;
  /**
   *
   * https://gohugo.io/content-management/front-matter#predefined
   */
  markup?: 'rst' | 'md';
  /**
   *
   * https://gohugo.io/content-management/menus/
   */
  menus?:
    | string[]
    | {
        [k: string]:
          | {
              identifier?: string;
              name?: string;
              params?: {
                [k: string]: unknown | undefined;
              };
              parent?: string;
              post?: string;
              pre?: string;
              weight?: number;
              [k: string]: unknown | undefined;
            }
          | undefined;
      };
  /**
   * The last modification time
   * https://gohugo.io/content-management/front-matter#predefined
   */
  modified?: string;
  outputs?: OutputFormatOptions;
  params?: {
    [k: string]: unknown | undefined;
  };
  /**
   * The publish date
   * https://gohugo.io/content-management/front-matter#predefined
   */
  pubdate?: string;
  /**
   * The publish date
   * https://gohugo.io/content-management/front-matter#predefined
   */
  publishDate?: string;
  /**
   * The publish date
   * https://gohugo.io/content-management/front-matter#predefined
   */
  published?: string;
  resources?: ResourceOptions;
  sitemap?: {
    /**
     *
     * https://gohugo.io/configuration/sitemap/#changefreq
     */
    changefreq?: '' | 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    /**
     * https://gohugo.io/configuration/sitemap/#disable
     */
    disable?: boolean;
    priority?: number &
      (
        | -1
        | {
            [k: string]: unknown | undefined;
          }
      );
    [k: string]: unknown | undefined;
  };
  series?: UniqueStringArray4;
  /**
   * The slug
   * https://gohugo.io/content-management/front-matter#predefined
   */
  slug?: string;
  /**
   * The summary
   * https://gohugo.io/content-management/front-matter#predefined
   */
  summary?: string;
  /**
   * The front matter default
   * https://gohugo.io/content-management/front-matter#front-matter-cascade
   */
  target?: {
    environment?: string;
    /**
     * The glob pattern matching the content path below /content
     * https://gohugo.io/content-management/front-matter#front-matter-cascade
     */
    path?: string;
    /**
     * The glob pattern matching the page's kind
     * https://gohugo.io/content-management/front-matter#front-matter-cascade
     */
    kind?: string;
    /**
     * The glob pattern matching the page's language
     * https://gohugo.io/content-management/front-matter#front-matter-cascade
     */
    lang?: string;
  };
  /**
   * The title
   * https://gohugo.io/content-management/front-matter#predefined
   */
  title?: string;
  translationKey?: string;
  /**
   * The type
   * https://gohugo.io/content-management/front-matter#predefined
   */
  type?: string;
  /**
   * The expire date
   * https://gohugo.io/content-management/front-matter#predefined
   */
  unpublishdate?: string;
  /**
   * The url
   * https://gohugo.io/content-management/front-matter#predefined
   */
  url?: string;
  videos?: UniqueStringArray5;
  /**
   * The weight
   * https://gohugo.io/content-management/front-matter#predefined
   */
  weight?: number;
  /**
   * The front matter default
   * https://gohugo.io/content-management/front-matter#front-matter-cascade
   *
   * This interface was referenced by `Cascade`'s JSON-Schema definition
   * via the `patternProperty` "^(?!aliases|audio|build|date|description|draft|expiryDate|headless|images|isCJKLanguage|keywords|layout|lastmod|linkTitle|markup|menus|modified|outputs|params|pubdate|publishDate|published|resources|sitemap|series|slug|summary|target|title|translationKey|type|unpublishdate|url|videos|weight)$".
   *
   * This interface was referenced by `Cascade1`'s JSON-Schema definition
   * via the `patternProperty` "^(?!aliases|audio|build|date|description|draft|expiryDate|headless|images|isCJKLanguage|keywords|layout|lastmod|linkTitle|markup|menus|modified|outputs|params|pubdate|publishDate|published|resources|sitemap|series|slug|summary|target|title|translationKey|type|unpublishdate|url|videos|weight)$".
   */
  [k: string]: {
    [k: string]: unknown | undefined;
  };
}
/**
 * The front matter options
 * https://gohugo.io/getting-started/configuration/#configure-front-matter
 */
export interface FrontMatterOptions1 {
  _merge?: MergeType;
  /**
   *
   * https://gohugo.io/getting-started/configuration/#configure-dates
   */
  date?: (
    | ':default'
    | ':fileModTime'
    | ':filename'
    | ':git'
    | 'date'
    | 'lastmod'
    | 'modified'
    | 'pubdate'
    | 'publishDate'
    | 'publishdate'
  )[];
  /**
   *
   * https://gohugo.io/getting-started/configuration/#configure-dates
   */
  expiryDate?: (':default' | 'expirydate' | 'expiryDate' | 'unpublishdate' | 'unpublishDate')[];
  /**
   *
   * https://gohugo.io/getting-started/configuration/#configure-dates
   */
  lastmod?: (
    | ':default'
    | ':fileModTime'
    | ':filename'
    | ':git'
    | 'date'
    | 'lastmod'
    | 'modified'
    | 'pubdate'
    | 'publishDate'
    | 'publishdate'
  )[];
  /**
   *
   * https://gohugo.io/getting-started/configuration/#configure-dates
   */
  publishDate?: (
    | ':default'
    | ':fileModTime'
    | ':filename'
    | ':git'
    | 'date'
    | 'lastmod'
    | 'modified'
    | 'pubdate'
    | 'publishDate'
    | 'publishdate'
  )[];
}
/**
 * Exif options
 * https://gohugo.io/content-management/image-processing/#image-processing-config
 */
export interface ExifOptions {
  /**
   * The regexp matching the included fields
   * https://gohugo.io/content-management/image-processing/#image-processing-config
   */
  includeFields?: string;
  /**
   * The regexp matching the excluded fields
   * https://gohugo.io/content-management/image-processing/#image-processing-config
   */
  excludeFields?: string;
  /**
   * Enable/disable extracting the 'photo taken' date/time into .Date
   * https://gohugo.io/content-management/image-processing/#image-processing-config
   */
  disableDate?: boolean;
  /**
   * Enable/disable extracting the 'photo taken where' into .Long and .Lat
   * https://gohugo.io/content-management/image-processing/#image-processing-config
   */
  disableLatLong?: boolean;
}
/**
 * The language options
 * https://gohugo.io/content-management/multilingual/#configure-languages
 */
export interface LanguageOptions {
  _merge?: MergeType;
  /**
   * The language options
   */
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * The markdown options
 * https://gohugo.io/getting-started/configuration-markup
 */
export interface MarkdownOptions {
  _merge?: MergeType;
  asciidocExt?: AsciidocExtOptions;
  blackfriday?: BlackfridayOptions;
  /**
   * The default markdown renderer
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  defaultMarkdownHandler?: 'goldmark' | 'blackfriday';
  goldmark?: GoldmarkOptions;
  highlight?: HighlightingOptions;
  tableOfContents?: TableOfContentsOptions;
  [k: string]: unknown | undefined;
}
/**
 * AsciidocExt options
 * https://docs.asciidoctor.org/asciidoctor/latest/cli/man1/asciidoctor/#processing-information
 */
export interface AsciidocExtOptions {
  attributes?: DocumentAttributes;
  /**
   * The backend output file format
   * https://docs.asciidoctor.org/asciidoctor/latest/cli/man1/asciidoctor/#document-settings
   */
  backend?: 'html5' | 'docbook5' | 'manpage' | 'html';
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#configure-markup
   */
  extensions?: string[];
  /**
   * The minimum logging level
   * https://docs.asciidoctor.org/asciidoctor/latest/cli/man1/asciidoctor/#processing-information
   */
  failureLevel?: string;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#configure-markup
   */
  noHeaderOrFooter?: boolean;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#configure-markup
   */
  preserveTOC?: boolean;
  /**
   * The safe mode
   * https://docs.asciidoctor.org/asciidoctor/latest/safe-modes/
   */
  safeMode?: 'unsafe' | 'safe' | 'server' | 'secure';
  /**
   * Enable/disable section title's auto-numbering
   * https://docs.asciidoctor.org/asciidoctor.js/latest/cli/options/#document-conversion
   */
  sectionNumbers?: boolean;
  /**
   * Include/exclude the backtrace information on errors
   * https://gohugo.io/getting-started/configuration-markup#configure-markup
   */
  trace?: boolean;
  /**
   * Enable/disable verbose error printing
   * https://gohugo.io/getting-started/configuration-markup#configure-markup
   */
  verbose?: boolean;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#configure-markup
   */
  workingFolderCurrent?: boolean;
}
/**
 * The document attributes
 * https://docs.asciidoctor.org/asciidoctor/latest/cli/man1/asciidoctor/#document-settings
 */
export interface DocumentAttributes {
  [k: string]: string | undefined;
}
/**
 * Blackfriday options
 * https://gohugo.io/getting-started/configuration-markup#blackfriday
 */
export interface BlackfridayOptions {
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  angledQuotes?: boolean;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  extensions?: string[] | null;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  extensionsMask?: string | null;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  footnoteAnchorPrefix?: string;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  footnoteReturnLinkContents?: string;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  fractions?: boolean;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  hrefTargetBlank?: boolean;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  latexDashes?: boolean;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  nofollowLinks?: boolean;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  noreferrerLinks?: boolean;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  plainIDAnchors?: boolean;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  skipHTML?: boolean;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  smartDashes?: boolean;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  smartypants?: boolean;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  smartypantsQuotesNBSP?: boolean;
  /**
   * https://gohugo.io/getting-started/configuration-markup#blackfriday
   */
  taskLists?: boolean;
}
/**
 * Goldmark options
 * https://gohugo.io/getting-started/configuration-markup#goldmark
 */
export interface GoldmarkOptions {
  /**
   * Enable/disable duplication of resources per language
   * https://gohugo.io/configuration/markup/#duplicateresourcefiles
   */
  duplicateResourceFiles?: boolean;
  extensions?: ExtensionOptions;
  parser?: ParserOptions;
  renderHooks?: {
    image?: {
      /**
       * DEPRECATED.
       * https://gohugo.io/configuration/markup/#renderhooksimageenabledefault
       */
      enableDefault?: boolean;
      /**
       * When to use the embedded image render hook
       * https://gohugo.io/configuration/markup/#renderhooksimageuseembedded
       */
      useEmbedded?: 'auto' | 'never' | 'always' | 'fallback';
      [k: string]: unknown | undefined;
    };
    link?: {
      /**
       * DEPRECATED.
       * https://gohugo.io/configuration/markup/#renderhookslinkenabledefault
       */
      enableDefault?: boolean;
      /**
       * When to use the embedded link render hook
       * https://gohugo.io/configuration/markup/#renderhookslinkuseembedded
       */
      useEmbedded?: 'auto' | 'never' | 'always' | 'fallback';
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  renderer?: RendererOptions;
}
/**
 * The extension options
 * https://gohugo.io/getting-started/configuration-markup#goldmark
 */
export interface ExtensionOptions {
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  definitionList?: boolean;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  footnote?: boolean;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  linkify?: boolean;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  linkifyProtocol?: string;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  strikethrough?: boolean;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  table?: boolean;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  taskList?: boolean;
  /**
   *
   * https://github.com/yuin/goldmark?tab=readme-ov-file#cjk-extension
   */
  cjk?: {
    enable?: boolean;
    eastAsianLineBreaks?: boolean;
    eastAsianLineBreaksStyle?: string;
    escapedSpace?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/configuration/markup/#passthrough
   */
  passthrough?: {
    enable?: boolean;
    delimiters?: {
      /**
       * Array of pairs of open/closing block delimiters
       */
      block?: [string, string][];
      /**
       * Array of pairs of open/closing inline delimiters
       */
      inline?: [string, string][];
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  typographer?:
    | boolean
    | {
        disable?: boolean;
        ellipsis?: string;
        apostrophe?: string;
        enDash?: string;
        emDash?: string;
        leftAngleQuote?: string;
        leftDoubleQuote?: string;
        leftSingleQuote?: string;
        rightAngleQuote?: string;
        rightDoubleQuote?: string;
        rightSingleQuote?: string;
        [k: string]: unknown | undefined;
      };
  /**
   *
   * https://gohugo.io/configuration/markup/#extras
   */
  extras?: {
    /**
     *
     * https://gohugo.io/configuration/markup/#extras
     */
    delete?: {
      /**
       *
       * https://gohugo.io/configuration/markup/#extras
       */
      enable?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     *
     * https://gohugo.io/configuration/markup/#extras
     */
    insert?: {
      /**
       *
       * https://gohugo.io/configuration/markup/#extras
       */
      enable?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     *
     * https://gohugo.io/configuration/markup/#extras
     */
    mark?: {
      /**
       *
       * https://gohugo.io/configuration/markup/#extras
       */
      enable?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     *
     * https://gohugo.io/configuration/markup/#extras
     */
    subscript?: {
      /**
       *
       * https://gohugo.io/configuration/markup/#extras
       */
      enable?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     *
     * https://gohugo.io/configuration/markup/#extras
     */
    superscript?: {
      /**
       *
       * https://gohugo.io/configuration/markup/#extras
       */
      enable?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
}
/**
 * The parser options
 * https://gohugo.io/getting-started/configuration-markup#goldmark
 */
export interface ParserOptions {
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  attribute?: {
    /**
     *
     * https://gohugo.io/getting-started/configuration-markup#goldmark
     */
    block?: boolean;
    /**
     *
     * https://gohugo.io/getting-started/configuration-markup#goldmark
     */
    title?: boolean;
  };
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  autoHeadingID?: boolean;
  /**
   * DEPRECATED.
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  autoHeadingIDType?: string;
  /**
   * Enable/disable automatically adding id attributes to description list terms
   * https://gohugo.io/configuration/markup/#parserautodefinitiontermid
   */
  autoDefinitionTermID?: boolean;
  /**
   * The strategy used to automatically generate id attributes
   * https://gohugo.io/configuration/markup/#parserautoidtype
   */
  autoIDType?: 'github' | 'github-ascii' | 'blackfriday';
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  wrapStandAloneImageWithinParagraph?: boolean;
}
/**
 * The renderer options
 * https://gohugo.io/getting-started/configuration-markup#goldmark
 */
export interface RendererOptions {
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  hardWraps?: boolean;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  unsafe?: boolean;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#goldmark
   */
  xhtml?: boolean;
}
/**
 * The highlighting options
 * https://gohugo.io/getting-started/configuration-markup#highlight
 */
export interface HighlightingOptions {
  /**
   * Enable/disable anchors on line numbers
   * https://gohugo.io/getting-started/configuration-markup#highlight
   */
  anchorLineNos?: boolean;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#highlight
   */
  codeFences?: boolean;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#highlight
   */
  guessSyntax?: boolean;
  /**
   * The highlighted line number range
   * https://gohugo.io/getting-started/configuration-markup#highlight
   */
  hl_Lines?: number | string;
  /**
   * Enable/disable rendering the highlighted code without a wrapping container
   * https://gohugo.io/configuration/markup/#hl_inline
   */
  hl_inline?: boolean;
  /**
   * The prefix for the anchors on line numbers
   * https://gohugo.io/getting-started/configuration-markup#highlight
   */
  lineAnchors?: string;
  /**
   * The first line
   * https://gohugo.io/getting-started/configuration-markup#highlight
   */
  lineNoStart?: number;
  /**
   * Enable/disable line numbers
   * https://gohugo.io/getting-started/configuration-markup#highlight
   */
  lineNos?: boolean | ('table' | 'inline');
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#highlight
   */
  lineNumbersInTable?: boolean;
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#highlight
   */
  noClasses?: boolean;
  /**
   * DEPRECATED.
   * https://gohugo.io/getting-started/configuration-markup#highlight
   */
  noHl?: boolean;
  /**
   *
   * https://gohugo.io/quick-reference/syntax-highlighting-styles/
   */
  style?:
    | 'abap'
    | 'algol'
    | 'algol_nu'
    | 'arduino'
    | 'autumn'
    | 'average'
    | 'base16-snazzy'
    | 'borland'
    | 'bw'
    | 'catppuccin-frappe'
    | 'catppuccin-latte'
    | 'catppuccin-macchiato'
    | 'catppuccin-mocha'
    | 'colorful'
    | 'doom-one'
    | 'doom-one2'
    | 'dracula'
    | 'emacs'
    | 'friendly'
    | 'fruity'
    | 'github-dark'
    | 'github'
    | 'gruvbox-light'
    | 'gruvbox'
    | 'hr_high_contrast'
    | 'hrdark'
    | 'igor'
    | 'lovelace'
    | 'manni'
    | 'modus-operandi'
    | 'modus-vivendi'
    | 'monokai'
    | 'monokailight'
    | 'murphy'
    | 'native'
    | 'nord'
    | 'onedark'
    | 'onesenterprise'
    | 'paraiso-dark'
    | 'paraiso-light'
    | 'pastie'
    | 'perldoc'
    | 'pygments'
    | 'rainbow_dash'
    | 'rose-pine-dawn'
    | 'rose-pine-moon'
    | 'rose-pine'
    | 'rrt'
    | 'solarized-dark'
    | 'solarized-dark256'
    | 'solarized-light'
    | 'swapoff'
    | 'tango'
    | 'trac'
    | 'vim'
    | 'vs'
    | 'vulcan'
    | 'witchhazel'
    | 'xcode-dark'
    | 'xcode';
  /**
   *
   * https://gohugo.io/getting-started/configuration-markup#highlight
   */
  tabWidth?: number;
  /**
   * The class or classes to use for the outermost element of the highlighted code
   * https://gohugo.io/configuration/markup/#wrapperclass
   */
  wrapperClass?: string;
}
/**
 * The table of contents options
 * https://gohugo.io/getting-started/configuration-markup#table-of-contents
 */
export interface TableOfContentsOptions {
  /**
   * The start heading level
   * https://gohugo.io/getting-started/configuration-markup#table-of-contents
   */
  startLevel?: number;
  /**
   * The end heading level
   * https://gohugo.io/getting-started/configuration-markup#table-of-contents
   */
  endLevel?: number;
  /**
   * Enable/disable ordered list generation
   * https://gohugo.io/getting-started/configuration-markup#table-of-contents
   */
  ordered?: boolean;
}
/**
 * The media type's options
 * https://gohugo.io/templates/output-formats/#media-types
 */
export interface MediaTypeSOptions {
  _merge?: MergeType;
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'application/json'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'application/manifest+json'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'application/octet-stream'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'application/pdf'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'application/rss+xml'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'application/toml'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'application/wasm'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffix?: string & string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'application/xml'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'application/yaml'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'font/otf'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'font/ttf'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'image/bmp'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'image/gif'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'image/jpeg'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'image/png'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'image/svg+xml'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'image/tiff'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'image/webp'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'text/calendar'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'text/css'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'text/csv'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'text/html'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'text/javascript'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'text/jsx'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'text/markdown'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'text/plain'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'text/tsx'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'text/typescript'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'text/x-sass'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'text/x-scss'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'video/3gpp'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'video/mp4'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'video/mpeg'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'video/ogg'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'video/webm'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  'video/x-msvideo'?: {
    /**
     *
     * https://gohugo.io/templates/output-formats/#media-types
     */
    suffixes?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   *
   * https://gohugo.io/templates/output-formats/#media-types
   */
  [k: string]:
    | {
        /**
         *
         * https://gohugo.io/configuration/media-types/#delimiter
         */
        delimiter?: string;
        /**
         *
         * https://gohugo.io/configuration/media-types/#suffixes
         */
        suffixes?: string[];
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * DEPRECATED. Removed in latest versions use 'menus' instead
 */
export interface MediaMenuOptions {
  _merge?: MergeType;
  /**
   * The menu
   * https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu
   */
  [k: string]:
    | {
        /**
         * Required when two or more menu entries have the same name
         * https://gohugo.io/content-management/menus/#properties-front-matter
         */
        identifier?: string;
        /**
         * The text to display when rendering the menu entry.
         * https://gohugo.io/content-management/menus/#properties-front-matter
         */
        name?: string;
        /**
         * Required for child entries in a nested menu.
         * https://gohugo.io/content-management/menus/#properties-front-matter
         */
        parent?: string;
        /**
         *
         * https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu
         */
        post?: string;
        /**
         *
         * https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu
         */
        pre?: string;
        /**
         *
         * https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu
         */
        title?: string;
        /**
         * A non-zero integer indicating the entry's position relative the root of the menu, or to its parent for a child entry
         * https://gohugo.io/content-management/menus/#properties-front-matter
         */
        weight?: number;
        /**
         * Required for internal links.
         * https://gohugo.io/content-management/menus/#properties-site-configuration
         */
        pageRef?: string;
        /**
         * Required for external links.
         * https://gohugo.io/content-management/menus/#properties-site-configuration
         */
        url?: string;
        /**
         * User-defined properties for the menu entry.
         * https://gohugo.io/content-management/menus/#properties-front-matter
         */
        params?: {
          [k: string]: unknown | undefined;
        };
      }[]
    | undefined;
}
/**
 * The menu options
 * https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu
 */
export interface MediaMenuOptions1 {
  _merge?: MergeType;
  /**
   * The menu
   * https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu
   */
  [k: string]:
    | {
        /**
         * Required when two or more menu entries have the same name
         * https://gohugo.io/content-management/menus/#properties-front-matter
         */
        identifier?: string;
        /**
         * The text to display when rendering the menu entry.
         * https://gohugo.io/content-management/menus/#properties-front-matter
         */
        name?: string;
        /**
         * Required for child entries in a nested menu.
         * https://gohugo.io/content-management/menus/#properties-front-matter
         */
        parent?: string;
        /**
         *
         * https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu
         */
        post?: string;
        /**
         *
         * https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu
         */
        pre?: string;
        /**
         *
         * https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu
         */
        title?: string;
        /**
         * A non-zero integer indicating the entry's position relative the root of the menu, or to its parent for a child entry
         * https://gohugo.io/content-management/menus/#properties-front-matter
         */
        weight?: number;
        /**
         * Required for internal links.
         * https://gohugo.io/content-management/menus/#properties-site-configuration
         */
        pageRef?: string;
        /**
         * Required for external links.
         * https://gohugo.io/content-management/menus/#properties-site-configuration
         */
        url?: string;
        /**
         * User-defined properties for the menu entry.
         * https://gohugo.io/content-management/menus/#properties-front-matter
         */
        params?: {
          [k: string]: unknown | undefined;
        };
      }[]
    | undefined;
}
/**
 * The version
 * https://gohugo.io/hugo-modules/configuration/#module-configuration-hugoversion
 */
export interface Version {
  /**
   * The minimum required version
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-hugoversion
   */
  min?: string;
  /**
   * The maximum required version
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-hugoversion
   */
  max?: string;
  /**
   * Enable/disable requiring the extended version
   * https://gohugo.io/hugo-modules/configuration/#module-configuration-hugoversion
   */
  extended?: boolean;
}
/**
 * The output format options
 * https://gohugo.io/templates/output-formats/#configure-output-formats
 */
export interface OutputFormatOptions2 {
  [k: string]: OutputFormatOptions1 | undefined;
}
/**
 * The permalink options
 * https://gohugo.io/content-management/urls/#permalinks
 */
export interface PermalinkOptions {
  _merge?: MergeType;
  page?: PermalinkConfiguration;
  section?: PermalinkConfiguration;
  term?: PermalinkConfiguration;
  [k: string]: unknown | undefined;
}
/**
 * The related content options
 * https://gohugo.io/getting-started/configuration/#related
 */
export interface RelatedContentOptions {
  _merge?: MergeType;
  /**
   *
   * https://gohugo.io/content-management/related/#top-level-config-options
   */
  threshold?: number;
  /**
   * Include/exclude the pages newer than the current page
   * https://gohugo.io/content-management/related/#top-level-config-options
   */
  includeNewer?: boolean;
  /**
   * Enable/disable lowering the case keywords in both the indexes and the queries
   * https://gohugo.io/content-management/related/#top-level-config-options
   */
  toLower?: boolean;
  indices?: RelatedContentOptionSEntry;
}
/**
 * The security options
 * https://gohugo.io/about/security-model/#security-policy
 */
export interface SecurityOptions {
  _merge?: MergeType;
  /**
   *
   * https://gohugo.io/about/security-model/#security-policy
   */
  enableInlineShortcodes?: boolean;
  /**
   *
   * https://gohugo.io/about/security-model/#security-policy
   */
  exec?: {
    /**
     *
     * https://gohugo.io/about/security-model/#security-policy
     */
    allow?: string[];
    /**
     *
     * https://gohugo.io/about/security-model/#security-policy
     */
    osEnv?: string[];
  };
  /**
   *
   * https://gohugo.io/about/security-model/#security-policy
   */
  funcs?: {
    /**
     *
     * https://gohugo.io/about/security-model/#security-policy
     */
    getenv?: string[];
  };
  /**
   *
   * https://gohugo.io/about/security-model/#security-policy
   */
  http?: {
    /**
     *
     * https://gohugo.io/about/security-model/#security-policy
     */
    methods?: string[];
    /**
     *
     * https://gohugo.io/about/security-model/#security-policy
     */
    urls?: string[];
  };
}
export interface SegmentIncludesExcludes {
  /**
   * A glob pattern matching the page kind
   * https://gohugo.io/configuration/segments/#kind
   */
  kind?: string;
  /**
   *  A glob pattern matching the page language
   * https://gohugo.io/configuration/segments/#lang
   */
  lang?: string;
  /**
   * A glob pattern matching the page output format
   * https://gohugo.io/configuration/segments/#output
   */
  output?: string;
  /**
   * A glob pattern matching the page’s logical path
   * https://gohugo.io/configuration/segments/#path
   */
  path?: string;
  [k: string]: unknown | undefined;
}
/**
 * The sitemap options
 * https://gohugo.io/templates/sitemap/#configuration
 */
export interface SitemapOptions {
  _merge?: MergeType;
  /**
   *
   * https://gohugo.io/configuration/sitemap/#changefreq
   */
  changefreq?: '' | 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  /**
   *
   * https://gohugo.io/configuration/sitemap/#disable
   */
  disable?: boolean;
  /**
   *
   * https://gohugo.io/configuration/sitemap/#filename
   */
  filename?: string;
  /**
   *
   * https://gohugo.io/configuration/sitemap/#priority
   */
  priority?: number &
    (
      | -1
      | {
          [k: string]: unknown | undefined;
        }
    );
}
/**
 * The taxonomy options
 * https://gohugo.io/content-management/taxonomies#configure-taxonomies
 */
export interface TaxonomyOptions {
  _merge?: MergeType;
  /**
   * The default taxonomy
   * https://gohugo.io/content-management/taxonomies#configure-taxonomies
   */
  tag?: string;
  /**
   * The default taxonomy
   * https://gohugo.io/content-management/taxonomies#configure-taxonomies
   */
  category?: string;
  /**
   * The custom taxonomy
   * https://gohugo.io/content-management/taxonomies#configure-taxonomies
   *
   * This interface was referenced by `TaxonomyOptions`'s JSON-Schema definition
   * via the `patternProperty` "^(?!tag|category)$".
   */
  [k: string]: string;
}
