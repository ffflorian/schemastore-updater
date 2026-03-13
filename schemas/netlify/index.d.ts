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
  label_singular?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Folder collections represent one or more files with the same format, fields, and configuration options, all stored within the same folder in the repository.
   * Note: Folder collections must have at least one field with the name title for creating new entry slugs. That field should use the default string widget. The label for the field can be any string value. If you wish to use a different field as your identifier, set identifier_field to the field name. See the Collections reference doc for details on how collections and fields are configured. If you forget to add this field, you will get an error that your collection "must have a field that is a valid entry identifier".
   */
  folder?: string;
  files?: Files;
  /**
   * Path
   */
  path?: string;
  /**
   * determines how collection files are parsed and saved. It will be inferred if the extension field or existing collection file extensions match one of the supported extensions.
   */
  format?:
    | 'yml'
    | 'yaml'
    | 'toml'
    | 'json'
    | 'frontmatter'
    | 'yaml-frontmatter'
    | 'toml-frontmatter'
    | 'json-frontmatter';
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
   * optional filter for folder collections
   */
  filter?: {
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
  [k: string]: unknown | undefined;
} & CollectionItems1;
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
   * makes a field required; defaults to true
   */
  required?: boolean;
  /**
   * add field validation by specifying a list with a regex pattern and an error message (first entry in array is regex pattern, second is the error message)
   */
  pattern?: unknown[];
  fields?: Fields;
  [k: string]: unknown | undefined;
}[];
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
  [k: string]: unknown | undefined;
}[];
export type CollectionItems1 = {
  [k: string]: unknown | undefined;
};

/**
 * Config file for Netlify CMS
 */
export interface NetlifyConfigSchema {
  /**
   * specifies how to access the content for your site, including authentication
   */
  backend: {
    [k: string]: unknown | undefined;
  };
  /**
   * Set this property to connect Netlify to a local Git repo instead of a live one
   */
  local_backend?: boolean;
  publish_mode?: unknown;
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
   * Logo at the top of the login page. Assumed to be a URL to an image file
   */
  logo_url?: string;
  locale?: string;
  /**
   * shows Deploy Preview Links
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
  /**
   * This setting changes options for the editor view of the collection. It has one option so far: preview
   */
  editor?: {
    /**
     * Enable preview pane for this collection; defaults to true
     */
    preview?: boolean;
    [k: string]: unknown | undefined;
  };
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
  [k: string]: unknown | undefined;
}
export interface Widget {
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
