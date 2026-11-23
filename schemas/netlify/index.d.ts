/* eslint-disable */

export type CollectionItems = {
  fields?: Fields;
  /**
   * label for the collection in the editor UI; defaults to the value of name
   */
  label?: string;
  /**
   * singular label for certain elements in the editor; defaults to the value of label
   */
  label_singular?: string;
  /**
   * Folder collections represent one or more files with the same format, fields, and configuration options, all stored within the same folder in the repository.
   * Note: Folder collections must have at least one field with the name title for creating new entry slugs. That field should use the default string widget. The label for the field can be any string value. If you wish to use a different field as your identifier, set identifier_field to the field name. See the Collections reference doc for details on how collections and fields are configured. If you forget to add this field, you will get an error that your collection "must have a field that is a valid entry identifier".
   */
  folder?: string;
  files?: Files;
  /**
   * A template (like slug) for the path of new entries inside folder, for example {{year}}/{{slug}}.
   * https://decapcms.org/docs/collection-folder/#folder-collections-path
   */
  path?: string;
  /**
   * determines how collection files are parsed and saved. It will be inferred if the extension field or existing collection file extensions match one of the supported extensions.
   */
  format?:
    'yml' | 'yaml' | 'toml' | 'json' | 'frontmatter' | 'yaml-frontmatter' | 'toml-frontmatter' | 'json-frontmatter';
  /**
   * For folder collections where users can create new items, the slug option specifies a template for generating new filenames based on a file's creation date and title field. (This means that all collections with create: true must have a title field (a different field can be used via identifier_field)).
   *
   * Any field can be referenced by wrapping the field name in double curly braces, eg. {{author}}
   * {{slug}}: a url-safe version of the title field (or identifier field) for the file
   * {{year}}: 4-digit year of the file creation date
   * {{month}}: 2-digit month of the file creation date
   * {{day}}: 2-digit day of the month of the file creation date
   * {{hour}}: 2-digit hour of the file creation date
   * {{minute}}: 2-digit minute of the file creation date
   * {{second}}: 2-digit second of the file creation date
   */
  slug?: string;
  /**
   * for folder collections only; allows users to create new items in the collection
   */
  create?: boolean;
  /**
   * hides a collection in the CMS UI; defaults to false. Useful when using the relation widget to hide referenced collections.
   */
  hide?: boolean;
  /**
   * prevents users from deleting items in a collection; defaults to true
   */
  delete?: boolean;
  /**
   * unique identifier for the collection, used as the key when referenced in other contexts
   */
  name: string;
  /**
   * Optional filter for folder collections: only entries whose field has the given value are included.
   * https://decapcms.org/docs/collection-folder/#filtered-folder-collections
   */
  filter?: {
    /**
     * The name of the collection field to filter on.
     */
    field: string;
    /**
     * The desired field value.
     */
    value: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * optional text, displayed below the label when viewing a collection
   */
  description?: string;
  /**
   * the file extension searched for when finding existing entries in a folder collection and it determines the file extension used to save new collection items
   */
  extension?: string;
  /**
   * The name of the field that identifies an entry instead of title; used in the entry list and in slug creation.
   * https://decapcms.org/docs/configuration-options/#identifier_field
   */
  identifier_field?: string;
  /**
   * For folder collections only; the maximum number of entries in the collection, counting unpublished entries in the editorial workflow. No limit by default.
   * https://decapcms.org/docs/configuration-options/#collections
   */
  limit?: number;
  /**
   * For publish_mode: editorial_workflow only; false hides UI publishing controls for a collection; defaults to true.
   * https://decapcms.org/docs/configuration-options/#collections
   */
  publish?: boolean;
  /**
   * A custom frontmatter delimiter such as ~~~, or a pair of beginning and ending delimiters such as ["(", ")"]. Requires an explicit frontmatter format.
   * https://decapcms.org/docs/configuration-options/#frontmatter_delimiter
   */
  frontmatter_delimiter?: string | [string, string];
  /**
   * What happens when a generated slug resolves to an existing entry: append an incrementing number (suffix, the default) or stop the save with an error (reject).
   * https://decapcms.org/docs/configuration-options/#slug_collision
   */
  slug_collision?: 'suffix' | 'reject';
  /**
   * The path where content in this collection can be found on the live site, used for deploy preview links. Supports the same template tags as slug, plus {{dirname}}, {{filename}} and {{extension}}.
   * https://decapcms.org/docs/configuration-options/#preview_path
   */
  preview_path?: string;
  /**
   * The name of a date field used to parse the date-based template tags of preview_path.
   * https://decapcms.org/docs/configuration-options/#preview_path_date_field
   */
  preview_path_date_field?: string;
  /**
   * Keeps slashes inside values inserted into preview_path instead of replacing them. Defaults to true for nested collections and false for all other collections.
   * https://decapcms.org/docs/configuration-options/#preview_path_preserve_slashes
   */
  preview_path_preserve_slashes?: boolean;
  editor?: EditorOptions;
  /**
   * A template for the entries in the collection list view, for example "{{title}} - {{year}}". Overrides the default of the title field and identifier_field.
   * https://decapcms.org/docs/configuration-options/#summary
   */
  summary?: string;
  /**
   * An optional list of sort fields to show in the UI. Each item is a field name (dot notation for nested fields) or an object with field, label and default_sort.
   * https://decapcms.org/docs/configuration-options/#sortable_fields
   */
  sortable_fields?: (
    | string
    | {
        /**
         * The name of the field to sort by.
         */
        field: string;
        /**
         * The text shown in the sort menu; defaults to the label of the field.
         */
        label?: string;
        /**
         * Sorts the collection by this field when it is opened: asc (or true) for ascending, desc for descending. Only one field can have default_sort.
         */
        default_sort?: 'asc' | 'desc' | true;
        [k: string]: unknown | undefined;
      }
  )[];
  /**
   * An optional list of predefined view filters to show in the UI.
   * https://decapcms.org/docs/configuration-options/#view_filters
   */
  view_filters?: {
    label: string;
    field: string;
    /**
     * A regular expression, or a boolean value to match.
     */
    pattern: string | boolean;
    [k: string]: unknown | undefined;
  }[];
  /**
   * An optional list of predefined view groups to show in the UI.
   * https://decapcms.org/docs/configuration-options/#view_groups
   */
  view_groups?: {
    label: string;
    field: string;
    /**
     * A regular expression; groups items based on the value it matches.
     */
    pattern?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Shows a folder collection as a tree of nested entries (beta).
   * https://decapcms.org/docs/collection-nested/
   */
  nested?: {
    /**
     * Max depth to show in the collection tree.
     */
    depth: number;
    /**
     * Optional summary for a tree node; defaults to the inferred title field.
     */
    summary?: string;
    /**
     * If set to false, entries do not need to be in subfolders; defaults to true.
     */
    subfolders?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Allows editing the path of entries in a nested collection.
   * https://decapcms.org/docs/collection-nested/
   */
  meta?: {
    path?: {
      label: string;
      widget: string;
      /**
       * The name of the file, without the extension, that entries are saved as inside their path, for example _index.
       */
      index_file?: string;
      /**
       * Set to false to allow saving an entry with an empty path; defaults to true.
       */
      required?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Collection-level i18n settings; same as the top level, but all options are optional and default to the top level. A boolean accepts the top-level defaults.
   * https://decapcms.org/docs/i18n/
   */
  i18n?: boolean | I18NConfig;
  /**
   * A media folder for this collection, relative to the collection entries when it starts without a slash. An empty string stores media next to the entry.
   * https://decapcms.org/docs/collection-folder/#media-and-public-folder
   */
  media_folder?: string;
  /**
   * The path under which this collection's media is accessed on the built site.
   * https://decapcms.org/docs/collection-folder/#media-and-public-folder
   */
  public_folder?: string;
  [k: string]: unknown | undefined;
} & CollectionItems1;
export type Widget =
  | {
      /**
       * Defaults to True
       */
      required?: boolean;
      /**
       * optionally add helper text directly below a widget.
       */
      hint?: string;
      /**
       * add field validation by specifying a list with a regex pattern and an error message; more extensive validation can be achieved with custom widgets
       */
      pattern?: unknown[];
      [k: string]: unknown | undefined;
    }
  | string;
/**
 * The fields option maps editor UI widgets to field-value pairs in the saved file. The order of the fields in your Netlify CMS config.yml file determines their order in the editor UI and in the saved file.
 */
export type Fields = {
  /**
   * unique identifier for the field, used as the key when referenced in other contexts (like the relation widget)
   */
  name: string;
  /**
   * label for the field in the editor UI; defaults to the value of name
   */
  label?: string;
  widget?: Widget;
  /**
   * specify a default value for a field; available for most widget types. Please note that field default value only works for folder collection type.
   */
  default?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Specify as false to make a field optional; defaults to true.
   */
  required?: boolean;
  /**
   * add field validation by specifying a list with a regex pattern and an error message (first entry in array is regex pattern, second is the error message)
   */
  pattern?: unknown[];
  fields?: Fields;
  /**
   * Optionally add helper text directly below a widget. Useful for including instructions. Accepts markdown for bold, italic, strikethrough, and links.
   */
  hint?: string;
  /**
   * Optional comment to add before the field (only supported for yaml).
   */
  comment?: string;
  /**
   * Whether the field is translated (true or translate), duplicated from the default locale (duplicate) or omitted from translations (none).
   * https://decapcms.org/docs/i18n/#field-level-configuration
   */
  i18n?: true | 'translate' | 'duplicate' | 'none';
  media_processing?: MediaProcessing;
  /**
   * Set to false to keep a string or text field out of visual editing.
   */
  visualEditing?: boolean;
  [k: string]: unknown | undefined;
}[];
/**
 * A list of locales to show in the editor UI.
 */
export type Locales = string[];
export type Files = {
  /**
   * unique identifier for the file
   */
  name?: string;
  /**
   * file label
   */
  label?: string;
  /**
   * unique filepath (relative to the base of the repo).
   */
  file?: string;
  fields?: Fields;
  /**
   * Optional text, displayed below the label when viewing the file.
   */
  description?: string;
  editor?: EditorOptions;
  /**
   * Enables i18n for this file; required in addition to the collection-level setting.
   * https://decapcms.org/docs/i18n/
   */
  i18n?: boolean | I18NConfig;
  media_folder?: string;
  public_folder?: string;
  preview_path?: string;
  preview_path_date_field?: string;
  [k: string]: unknown | undefined;
}[];
export type CollectionItems1 =
  | {
      files: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      folder: unknown;
      [k: string]: unknown | undefined;
    };

/**
 * Config file for Netlify CMS
 */
export interface NetlifyConfigSchema {
  /**
   * Specifies how to access the content for your site, including authentication.
   * https://decapcms.org/docs/backends-overview/
   */
  backend: {
    /**
     * The backend to use, for example github, gitlab, gitea, forgejo, bitbucket, azure, git-gateway, turbo-github, turbo-gitlab or test-repo.
     */
    name: string;
    /**
     * Required for the github, gitlab, azure, gitea, forgejo and bitbucket backends; ignored by git-gateway. Follows the pattern [org-or-username]/[repo-name].
     */
    repo?: string;
    /**
     * The branch where published content is stored. All CMS commits and PRs are made to this branch.
     */
    branch?: string;
    /**
     * The API endpoint. Only necessary in certain cases, like with GitHub Enterprise or self-hosted GitLab or Gitea.
     */
    api_root?: string;
    /**
     * Sets the site_id query param sent to the API endpoint.
     */
    site_domain?: string;
    /**
     * OAuth client hostname (just the base domain, no path). Required when using an external OAuth server or self-hosted GitLab or Gitea.
     */
    base_url?: string;
    /**
     * Path to append to base_url for authentication requests.
     */
    auth_endpoint?: string;
    /**
     * Pull or merge request label prefix when using the editorial workflow; defaults to decap-cms/.
     */
    cms_label_prefix?: string;
    /**
     * The exact name of the build status that provides deploy preview links for unpublished entries.
     */
    preview_context?: string;
    /**
     * Adds a Signed-off-by trailer to the commits written by the CMS; defaults to false.
     */
    signoff_commits?: boolean;
    /**
     * Squashes the commits of a pull request when an entry is published from the editorial workflow (GitHub backends).
     * https://decapcms.org/docs/editorial-workflows/#squash-merge-github-pull-requests
     */
    squash_merges?: boolean;
    /**
     * Templates for the commit messages generated by the CMS.
     * https://decapcms.org/docs/configuration-options/#commit-message-templates
     */
    commit_messages?: {
      create?: string;
      update?: string;
      delete?: string;
      uploadMedia?: string;
      deleteMedia?: string;
      openAuthoring?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Required for the turbo-github and turbo-gitlab backends: the UUID of the site from the Decap Turbo dashboard.
     */
    turbo_site_id?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Set this property to connect Netlify to a local Git repo instead of a live one
   */
  local_backend?: boolean;
  /**
   * Set to editorial_workflow to enable the Editorial Workflow; simple (or an empty string) commits entries directly to the branch.
   * https://decapcms.org/docs/configuration-options/#publish-mode
   */
  publish_mode?: 'simple' | 'editorial_workflow' | '';
  /**
   * specifies the folder path where uploaded files should be saved, relative to the base of the repo.
   */
  media_folder: string;
  /**
   * specifies the folder path where the files uploaded by the media library will be accessed, relative to the base of the built site. For fields controlled by [file] or [image] widgets, the value of the field is generated by prepending this path to the filename of the selected file. Defaults to the value of media_folder, with an opening / if one is not already included.
   */
  public_folder?: string;
  /**
   * Media library integrations are configured via the media_library property, and its value should be an object with at least a name property. A config property can also be used for options that should be passed to the library in use.
   */
  media_library?: {
    name: string;
    config?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * should provide a URL to your published site. May be used by the CMS for various functionality. Used together with a collection's preview_path to create links to live content.
   */
  site_url?: string;
  /**
   * When the display_url setting is specified, the CMS UI will include a link in the fixed area at the top of the page, allowing content authors to easily return to your main site. The text of the link consists of the URL without the protocol portion (e.g., your-site.com).
   * Defaults to site_url.
   */
  display_url?: string;
  /**
   * DEPRECATED. Same as logo.src: a URL to an image file for the top of the login page. Migrate to logo.
   * https://decapcms.org/docs/configuration-options/#custom-logo
   */
  logo_url?: string;
  locale?: string;
  /**
   * Set to false to disable deploy preview links.
   * https://decapcms.org/docs/deploy-preview-links/
   */
  show_preview_links?: boolean;
  /**
   * For folder collections where users can create new items, the slug option specifies a template for generating new filenames based on a file's creation date and title field. (This means that all collections with create: true must have a title field (a different field can be used via identifier_field).
   *
   * The slug template can also reference a field value by name, eg. {{title}}. If a field name conflicts with a built in template tag name - for example, if you have a field named slug, and would like to reference that field via {{slug}}, you can do so by adding the explicit fields. prefix, eg. {{fields.slug}}.
   *
   * Available template tags:
   *
   * Any field can be referenced by wrapping the field name in double curly braces, eg. {{author}}
   * {{slug}}: a url-safe version of the title field (or identifier field) for the file
   * {{year}}: 4-digit year of the file creation date
   * {{month}}: 2-digit month of the file creation date
   * {{day}}: 2-digit day of the month of the file creation date
   * {{hour}}: 2-digit hour of the file creation date
   * {{minute}}: 2-digit minute of the file creation date
   * {{second}}: 2-digit second of the file creation date
   */
  slug?: {
    /**
     *
     * unicode (default): Sanitize filenames (slugs) according to RFC3987 and the WHATWG URL spec. This spec allows non-ASCII (or non-Latin) characters to exist in URLs.
     * ascii: Sanitize filenames (slugs) according to RFC3986. The only allowed characters are (0-9, a-z, A-Z, _, -, ~).
     */
    encoding?: 'unicode' | 'ascii';
    /**
     * Remove diacritics from slug characters before sanitizing. This is often helpful when using ascii encoding.
     */
    clean_accents?: boolean;
    /**
     * The replacement string used to substitute unsafe characters; defaults to -
     */
    sanitize_replacement?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The collections setting is the heart of your Netlify CMS configuration, as it determines how content types and editor fields in the UI generate files and content in your repository. Each collection you configure displays in the left sidebar of the Content page of the editor UI, in the order they are entered into your Netlify CMS config.yml file.
   */
  collections: CollectionItems[];
  editor?: EditorOptions;
  /**
   * This setting allows the customization of the collection list view. Similar to the slug field, a string with templates can be used to include values of different fields, e.g. {{title}}. This option over-rides the default of title field and identifier_field
   * Template tags are the same as those for slug, with the following additions:
   *
   *
   * {{filename}} The file name without the extension part.
   * {{extension}} The file extension.
   * {{commit_date}} The file commit date on supported backends (git based backends).
   * {{commit_author}} The file author date on supported backends (git based backends).
   */
  summary?: string;
  /**
   * An optional list of sort fields to show in the UI.
   * Defaults to inferring title, date, author and description fields and will also show Update On sort field in git based backends.
   * When author field can't be inferred commit author will be used.
   */
  sortableFields?: unknown[];
  /**
   * An optional list of predefined view filters to show in the UI.
   * Defaults to an empty list.
   */
  view_filters?: unknown[];
  /**
   * Brands the login page (and optionally the header) of the CMS with your own logo.
   * https://decapcms.org/docs/configuration-options/#custom-logo
   */
  logo?: {
    /**
     * URL to an image file.
     */
    src: string;
    /**
     * If true, the logo is also shown in the header of the CMS when logged in.
     */
    show_in_header?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Set to false to disable the search, which requires loading all entries of all collections and can exhaust rate limits on large repositories; defaults to true.
   * https://decapcms.org/docs/configuration-options/#search
   */
  search?: boolean;
  /**
   * Customizes where the 'report the issue' link of the error screen points; by default the Decap CMS GitHub repository.
   * https://decapcms.org/docs/configuration-options/#issue-reports
   */
  issue_reports?: {
    url?: string;
    [k: string]: unknown | undefined;
  };
  media_processing?: MediaProcessing;
  /**
   * Top-level i18n configuration for side by side authoring of content in multiple languages.
   * https://decapcms.org/docs/i18n/
   */
  i18n?: {
    /**
     * How translated entries are persisted: <folder>/<locale>/<slug>.<extension> (multiple_folders), <folder>/<slug>.<locale>.<extension> (multiple_files) or a single file (single_file).
     */
    structure: 'multiple_folders' | 'multiple_files' | 'single_file';
    locales: Locales;
    /**
     * The locale used for field validation and as a baseline for the entry. Defaults to the first item in locales.
     */
    default_locale?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Image transformations that run in the browser before an upload is saved. A field-level value overrides the top-level one.
 * https://decapcms.org/docs/configuration-options/#media-processing
 */
export interface MediaProcessing {
  /**
   * Enables or disables image processing.
   */
  enabled: boolean;
  format?: {
    /**
     * Enables or disables format conversion.
     */
    enabled?: boolean;
    /**
     * Output format.
     */
    default?: 'jpeg' | 'webp';
    [k: string]: unknown | undefined;
  };
  /**
   * Output quality, from 1 to 100.
   */
  quality?: number;
  /**
   * Removes image metadata by re-encoding the uploaded image.
   */
  strip_metadata?: boolean;
  /**
   * Output width in pixels. Null or omitted does not force a width.
   */
  width?: number | null;
  /**
   * Output height in pixels. Null or omitted does not force a height.
   */
  height?: number | null;
  /**
   * Crop ratio: a positive number or a ratio string such as 16x9, 16:9 or 16_9.
   */
  aspect_ratio?: number | string;
  [k: string]: unknown | undefined;
}
export interface EditorOptions {
  /**
   * Set to false to disable the preview pane; defaults to true.
   */
  preview?: boolean;
  /**
   * Set to true to enable the notes pane; defaults to false.
   * https://decapcms.org/docs/notes/
   */
  notes?: boolean;
  /**
   * Lets editors click on content in the preview pane to jump to the field that holds it. Only works when set on a collection; defaults to false.
   */
  visualEditing?: boolean;
  [k: string]: unknown | undefined;
}
export interface I18NConfig {
  /**
   * How translated entries are persisted: <folder>/<locale>/<slug>.<extension> (multiple_folders), <folder>/<slug>.<locale>.<extension> (multiple_files) or a single file (single_file).
   */
  structure?: 'multiple_folders' | 'multiple_files' | 'single_file';
  locales?: Locales;
  /**
   * The locale used for field validation and as a baseline for the entry. Defaults to the first item in locales.
   */
  default_locale?: string;
  [k: string]: unknown | undefined;
}
