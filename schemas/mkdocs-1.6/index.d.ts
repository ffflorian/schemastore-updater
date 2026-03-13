/* eslint-disable */

export type ValidationValues = 'warn' | 'info' | 'ignore';
export type ValidationAbsoluteLinkValues = 'warn' | 'info' | 'ignore' | 'relative_to_docs';

/**
 * JSON schema for MkDocs configuration file
 */
export interface MkDocsConfiguration {
  /**
   * This is a required setting, and should be a string that is used as the main title for the project documentation.
   * https://www.mkdocs.org/user-guide/configuration/#site_name
   */
  site_name: string;
  /**
   * Set the canonical URL of the site. This will add a link tag with the canonical URL to the head section of each HTML page. If the 'root' of the MkDocs site will be within a subdirectory of a domain, be sure to include that subdirectory in the setting (https://example.com/foo/).
   * https://www.mkdocs.org/user-guide/configuration/#site_url
   */
  site_url?: string;
  /**
   * When set, provides a link to your repository (GitHub, Bitbucket, GitLab, ...) on each page.
   * https://www.mkdocs.org/user-guide/configuration/#repo_url
   */
  repo_url?: string;
  /**
   * When set, provides the name for the link to your repository on each page.
   * https://www.mkdocs.org/user-guide/configuration/#repo_name
   */
  repo_name?: string;
  /**
   * The path from the base repo_url to the docs directory when directly viewing a page, accounting for specifics of the repository host (e.g. GitHub, Bitbucket, etc), the branch, and the docs directory itself.
   * https://www.mkdocs.org/user-guide/configuration/#edit_uri
   */
  edit_uri?: string;
  /**
   * The more flexible variant of edit_uri.
   * https://www.mkdocs.org/user-guide/configuration/#edit_uri_template
   */
  edit_uri_template?: string;
  /**
   * Set the site description. This will add a meta tag to the generated HTML header.
   * https://www.mkdocs.org/user-guide/configuration/#site_description
   */
  site_description?: string;
  /**
   * Set the name of the author. This will add a meta tag to the generated HTML header.
   * https://www.mkdocs.org/user-guide/configuration/#site_author
   */
  site_author?: string;
  /**
   * Set the copyright information to be included in the documentation by the theme.
   * https://www.mkdocs.org/user-guide/configuration/#copyright
   */
  copyright?: string;
  /**
   * Set the remote branch to commit to when using gh-deploy to deploy to GitHub Pages. This option can be overridden by a command line option in gh-deploy.
   * https://www.mkdocs.org/user-guide/configuration/#remote_branch
   */
  remote_branch?: string;
  /**
   * Set the remote name to push to when using gh-deploy to deploy to GitHub Pages. This option can be overridden by a command line option in gh-deploy.
   * https://www.mkdocs.org/user-guide/configuration/#remote_name
   */
  remote_name?: string;
  /**
   * This setting is used to determine the format and layout of the global navigation for the site.
   * https://www.mkdocs.org/user-guide/configuration/#nav
   */
  nav?: (
    | {
        [k: string]: unknown | undefined;
      }
    | string
  )[];
  /**
   * This config defines patterns of files (under docs_dir) to not be picked up into the built site.
   * https://www.mkdocs.org/user-guide/configuration/#exclude_docs
   */
  exclude_docs?: string;
  /**
   * This config defines patterns of files (under docs_dir) to be treated as a draft. Draft files are available during mkdocs serve and include a "DRAFT" mark but will not be included in the build. To prevent this effect and make "serve" behave the same as "build", you can run mkdocs serve --clean.
   * https://www.mkdocs.org/user-guide/configuration/#draft_docs
   */
  draft_docs?: string;
  /**
   * If you want to include some docs into the site but intentionally exclude them from the nav, normally MkDocs warns about this.
   * https://www.mkdocs.org/user-guide/configuration/#not_in_nav
   */
  not_in_nav?: string;
  /**
   * Configure the strictness of MkDocs' diagnostic messages when validating links to documents.
   * https://www.mkdocs.org/user-guide/configuration/#validation
   */
  validation?: {
    nav?: {
      omitted_files?: 'warn' | 'info' | 'ignore';
      not_found?: 'warn' | 'info' | 'ignore';
      absolute_links?: 'warn' | 'info' | 'ignore';
      [k: string]: unknown | undefined;
    };
    links?: {
      not_found?: 'warn' | 'info' | 'ignore';
      anchors?: 'warn' | 'info' | 'ignore';
      absolute_links?: 'warn' | 'info' | 'ignore' | 'relative_to_docs';
      unrecognized_links?: 'warn' | 'info' | 'ignore';
      [k: string]: unknown | undefined;
    };
    omitted_files?: ValidationValues;
    not_found?: ValidationValues;
    absolute_links?: ValidationAbsoluteLinkValues;
    anchors?: ValidationValues;
    unrecognized_links?: ValidationValues;
    [k: string]: unknown | undefined;
  };
  /**
   * Sets the theme and theme specific configuration of your documentation site.
   * https://www.mkdocs.org/user-guide/configuration/#theme
   */
  theme?:
    | {
        /**
         * The string name of a known installed theme, or null if using a local custom theme.
         */
        name?: string | null;
        /**
         * A code representing the language of your site.
         */
        locale?: string;
        /**
         * A directory containing a custom theme. This can either be a relative directory, in which case it is resolved relative to the directory containing your configuration file or it can be an absolute directory path from the root of your local file system.
         */
        custom_dir?: string;
        /**
         * A list of templates to render as static pages. The templates must be located in either the theme's template directory or in the custom_dir defined in the theme configuration.
         */
        static_templates?: unknown[];
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * The directory containing the documentation source markdown files. This can either be a relative directory, in which case it is resolved relative to the directory containing your configuration file, or it can be an absolute directory path from the root of your local file system.
   * https://www.mkdocs.org/user-guide/configuration/#docs_dir
   */
  docs_dir?: string;
  /**
   * The directory where the output HTML and other files are created. This can either be a relative directory, in which case it is resolved relative to the directory containing your configuration file, or it can be an absolute directory path from the root of your local file system.
   * https://www.mkdocs.org/user-guide/configuration/#site_dir
   */
  site_dir?: string;
  /**
   * Set a list of CSS files (relative to docs_dir) to be included by the theme, typically as <link> tags.
   * https://www.mkdocs.org/user-guide/configuration/#extra_css
   */
  extra_css?: string[];
  /**
   * Set a list of JavaScript files in your docs_dir to be included by the theme, as <script> tags.
   * https://www.mkdocs.org/user-guide/configuration/#extra_javascript
   */
  extra_javascript?: (
    | string
    | {
        path: string;
        type?: string;
        async?: boolean;
        defer?: boolean;
        [k: string]: unknown | undefined;
      }
  )[];
  /**
   * Set a list of templates in your docs_dir to be built by MkDocs. To see more about writing templates for MkDocs read the documentation about [custom themes] and specifically the section about the [available variables] to templates. See the example in extra_css for usage.
   * https://www.mkdocs.org/user-guide/configuration/#extra_templates
   */
  extra_templates?: string[];
  /**
   * A set of key-value pairs, where the values can be any valid YAML construct, that will be passed to the template. This allows for great flexibility when creating custom themes.
   * https://www.mkdocs.org/user-guide/configuration/#extra
   */
  extra?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Determines additional directories to watch when running mkdocs serve.
   * https://www.mkdocs.org/user-guide/configuration/#watch
   */
  watch?: string[];
  /**
   * This setting controls the style used for linking to pages within the documentation.
   * https://www.mkdocs.org/user-guide/configuration/#use_directory_urls
   */
  use_directory_urls?: boolean;
  /**
   * Determines how warnings are handled. Set to true to halt processing when a warning is raised. Set to false to print a warning and continue processing.
   * https://www.mkdocs.org/user-guide/configuration/#strict
   */
  strict?: boolean;
  /**
   * Determines the address used when running mkdocs serve. Must be of the format IP:PORT.
   * https://www.mkdocs.org/user-guide/configuration/#dev_addr
   */
  dev_addr?: string;
  /**
   * This setting lets you enable a list of extensions beyond the ones that MkDocs uses by default (meta, toc, tables, and fenced_code).
   * https://www.mkdocs.org/user-guide/configuration/#markdown_extensions
   */
  markdown_extensions?:
    | unknown[]
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * A list of paths to Python scripts (relative to mkdocs.yml) that are loaded and used as plugin instances.
   * https://www.mkdocs.org/user-guide/configuration/#hooks
   */
  hooks?: unknown[];
  /**
   * A list of plugins (with optional configuration settings) to use when building the site. See the Plugins documentation for full details.
   * https://www.mkdocs.org/user-guide/configuration/#plugins
   */
  plugins?:
    | unknown[]
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Define the parent for a configuration file. The path must be relative to the location of the primary file.
   * https://www.mkdocs.org/user-guide/configuration/#configuration-inheritance
   */
  INHERIT?: string;
  [k: string]: unknown | undefined;
}
