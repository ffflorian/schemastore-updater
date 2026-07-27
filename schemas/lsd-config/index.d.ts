/* eslint-disable */

/**
 * Configuration for lsd, the next-generation ls command.
 */
export interface LsdConfigYaml {
  /**
   * Use classic ls-compatible output defaults.
   */
  classic?: boolean | null;
  /**
   * Columns and their order when using the long or tree layout.
   */
  blocks?:
    | (
        | 'permission'
        | 'user'
        | 'group'
        | 'context'
        | 'size'
        | 'size_value'
        | 'date'
        | 'name'
        | 'inode'
        | 'links'
        | 'git'
      )[]
    | null;
  /**
   * Color output settings.
   */
  color?: {
    /**
     * When to colorize output.
     */
    when?: 'never' | 'auto' | 'always' | null;
    /**
     * How to colorize output. Use `custom` to load colors.yaml, `default` for the built-in theme, or a custom theme file path supported by lsd.
     */
    theme?: string | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Date display format. Built-in values include `date`, `locale`, and `relative`; strftime-style custom formats start with `+`.
   */
  date?: string | null;
  /**
   * Dereference symbolic links.
   */
  dereference?: boolean | null;
  /**
   * Which filesystem entries to display.
   */
  display?: 'system-protected' | 'all' | 'almost-all' | 'directory-only' | 'visible-only' | null;
  /**
   * Icon output settings.
   */
  icons?: {
    /**
     * When to show icons.
     */
    when?: 'always' | 'auto' | 'never' | null;
    /**
     * Icon theme to use.
     */
    theme?: 'fancy' | 'unicode' | null;
    /**
     * Separator between icon and filename.
     */
    separator?: string | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Glob patterns to ignore when listing.
   */
  'ignore-globs'?: string[] | null;
  /**
   * Add indicator characters to certain listed files.
   */
  indicators?: boolean | null;
  /**
   * Output layout.
   */
  layout?: 'grid' | 'tree' | 'oneline' | null;
  /**
   * Recursive listing settings.
   */
  recursion?: {
    /**
     * Enable recursion.
     */
    enabled?: boolean | null;
    /**
     * Maximum recursion depth.
     */
    depth?: number | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * File size display format.
   */
  size?: 'default' | 'short' | 'bytes' | null;
  /**
   * Permission column format.
   */
  permission?: 'rwx' | 'octal' | 'attributes' | 'disable' | null;
  /**
   * Sort settings.
   */
  sorting?: {
    /**
     * Column to sort by.
     */
    column?: 'none' | 'extension' | 'name' | 'time' | 'size' | 'version' | 'git-status' | null;
    /**
     * Reverse sort order.
     */
    reverse?: boolean | null;
    /**
     * Where to group directories.
     */
    'dir-grouping'?: 'first' | 'last' | 'none' | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Omit showing symlink targets.
   */
  'no-symlink'?: boolean | null;
  /**
   * Display total directory sizes.
   */
  'total-size'?: boolean | null;
  /**
   * Text shown between symlink and target.
   */
  'symlink-arrow'?: string | null;
  /**
   * When to attach hyperlinks to filenames.
   */
  hyperlink?: 'always' | 'auto' | 'never' | null;
  /**
   * Display block headers.
   */
  header?: boolean | null;
  /**
   * Show quotes on filenames.
   */
  literal?: boolean | null;
  /**
   * Username and group-name truncation settings.
   */
  'truncate-owner'?: {
    /**
     * Number of characters to keep before truncating owner or group names.
     */
    after?: number | null;
    /**
     * String appended to truncated owner or group names.
     */
    marker?: string | null;
    [k: string]: unknown | undefined;
  } | null;
}
