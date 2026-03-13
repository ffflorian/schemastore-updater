/* eslint-disable */

export interface JSONSchemaForPDMPythonPackageManagerConfigurationHttpsPdmProjectOrgLatestReferenceConfiguration {
  /**
   * Isolate the build environment from the project environment
   * Env var: PDM_BUILD_ISOLATION
   */
  build_isolation?: boolean;
  /**
   * Use uv for faster resolution and installation
   * Env var: PDM_USE_UV
   */
  use_uv?: boolean;
  install?: {
    /**
     * Enable caching of wheel installations
     */
    cache?: boolean;
    /**
     * Specify how to create links to the caches
     */
    cache_method?: 'symlink' | 'symlink_individual' | 'hardlink' | 'pth';
    /**
     * Whether to perform installation and uninstallation in parallel
     * Env var: PDM_PARALLEL_INSTALL
     */
    parallel?: boolean;
  };
  python?: {
    /**
     * Use the pyenv interpreter
     */
    use_pyenv?: boolean;
    /**
     * Use virtual environments when available
     * Env var: PDM_USE_VENV
     */
    use_venv?: boolean;
    /**
     * List of python provider names for findpython
     */
    providers?: unknown[];
  };
  pypi?: {
    /**
     * The URL of PyPI mirror
     * Env var: PDM_PYPI_URL
     */
    url?: string;
    /**
     * The username to access PyPI
     * Env var: PDM_PYPI_USERNAME
     */
    username?: string;
    /**
     * The password to access PyPI
     * Env var: PDM_PYPI_PASSWORD
     */
    password?: string;
    /**
     * Ignore the configured indexes
     * Env var: PDM_IGNORE_STORED_INDEX
     */
    ignore_stored_index?: boolean;
    /**
     * Verify SSL certificate when query PyPI
     */
    verify_ssl?: boolean & string;
    /**
     * Consult PyPI's JSON API for package metadata
     * Env var: PDM_PYPI_JSON_API
     */
    json_api?: boolean;
    [k: string]: PypiDef | undefined;
  };
  strategy?: {
    /**
     * Specify how to save versions when a package is added
     */
    save?: 'exact' | 'wildcard' | 'minimum' | 'compatible';
    /**
     * The default strategy for updating packages
     */
    update?: 'eager' | 'reuse' | 'all' | 'reuse-installed';
    /**
     * Specify the max rounds of resolution process
     * Env var: PDM_RESOLVE_MAX_ROUNDS
     */
    resolve_max_rounds?: number;
    /**
     * Inherit the groups and markers from parents for each package
     */
    inherit_metadata?: boolean;
  };
  venv?: {
    /**
     * Default backend to create virtualenv
     * Env var: PDM_VENV_BACKEND
     */
    backend?: string;
    /**
     * Formatted string to be displayed in the prompt when virtualenv is active
     * Env var: PDM_VENV_PROMPT
     */
    prompt?: string;
    /**
     * Create virtualenv in .venv under project root
     * Env var: PDM_VENV_IN_PROJECT
     */
    in_project?: boolean;
    /**
     * Install pip when creating a new venv
     *  Env var: PDM_VENV_WITH_PIP
     */
    with_pip?: boolean;
  };
  repository?: {
    [k: string]: RepositoryDef | undefined;
  };
}
export interface PypiDef {
  /**
   * The URL of custom package source
   */
  url: string;
  /**
   * The username to access custom source
   */
  username?: string;
  /**
   * The password to access custom source
   */
  password?: string;
  /**
   * index or find_links
   */
  type?: 'index' | 'find_links';
  /**
   * Verify SSL certificate when query custom source
   */
  verify_ssl?: boolean;
}
export interface RepositoryDef {
  /**
   * The URL of custom package source
   */
  url?: string;
  /**
   * The username to access custom repository
   */
  username?: string;
  /**
   * The password to access custom repository
   */
  password?: string;
  /**
   * Path to a PEM-encoded CA cert bundle (used for server cert verification)
   */
  ca_certs?: string;
  /**
   * Verify SSL certificate when uploading to repository
   */
  verify_ssl?: boolean;
}
