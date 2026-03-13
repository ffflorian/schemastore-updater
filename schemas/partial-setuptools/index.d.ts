/* eslint-disable */

/**
 * Valid package name (importable or :pep:`561`).
 */
export type ValidPackageName = PackageName & PackageName1;
export type PackageName = string;
export type PackageName1 = string;
export type ArrayOfPythonPackageIdentifiers = ValidPackageName[];
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".+".
 */
export type FileDirectiveForDependencies = {
  [k: string]: unknown | undefined;
} & FileDirective;

/**
 * ``setuptools``-specific configurations that can be set by users that require customization. These configurations are completely optional and probably can be skipped when creating simple packages. They are equivalent to some of the `Keywords <https://setuptools.pypa.io/en/latest/references/keywords.html>`_ used by the ``setup.py`` file, and can be set via the ``tool.setuptools`` table. It considers only ``setuptools`` `parameters <https://setuptools.pypa.io/en/latest/userguide/pyproject_config.html#setuptools-specific-configuration>`_ that are not covered by :pep:`621`; and intentionally excludes ``dependency_links`` and ``setup_requires`` (incompatible with modern workflows/standards).
 */
export interface ToolSetuptoolsTable {
  platforms?: string[];
  /**
   * Package and virtual package names contained within this package **(not supported by pip)**
   */
  provides?: string[];
  /**
   * Packages which this package renders obsolete **(not supported by pip)**
   */
  obsoletes?: string[];
  /**
   * Whether the project can be safely installed and run from a zip file. **OBSOLETE**: only relevant for ``pkg_resources``, ``easy_install`` and ``setup.py install`` in the context of ``eggs`` (**DEPRECATED**).
   */
  'zip-safe'?: boolean;
  /**
   * Legacy way of defining scripts (entry-points are preferred). Equivalent to the ``script`` keyword in ``setup.py`` (it was renamed to avoid confusion with entry-point based ``project.scripts`` defined in :pep:`621`). **DISCOURAGED**: generic script wrappers are tricky and may not work properly. Whenever possible, please use ``project.scripts`` instead.
   */
  'script-files'?: string[];
  /**
   * Resources that should be extracted together, if any of them is needed, or if any C extensions included in the project are imported. **OBSOLETE**: only relevant for ``pkg_resources``, ``easy_install`` and ``setup.py install`` in the context of ``eggs`` (**DEPRECATED**).
   */
  'eager-resources'?: string[];
  /**
   * Packages that should be included in the distribution. It can be given either as a list of package identifiers or as a ``dict``-like structure with a single key ``find`` which corresponds to a dynamic call to ``setuptools.config.expand.find_packages`` function. The ``find`` key is associated with a nested ``dict``-like structure that can contain ``where``, ``include``, ``exclude`` and ``namespaces`` keys, mimicking the keyword arguments of the associated function.
   */
  packages?: ArrayOfPythonPackageIdentifiers | FindDirective;
  /**
   * :class:`dict`-like structure mapping from package names to directories where their code can be found. The empty string (as key) means that all packages are contained inside the given directory will be included in the distribution.
   */
  'package-dir'?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]: string;
  };
  /**
   * Mapping from package names to lists of glob patterns. Usually this option is not needed when using ``include-package-data = true`` For more information on how to include data files, check ``setuptools`` `docs <https://setuptools.pypa.io/en/latest/userguide/datafiles.html>`_.
   */
  'package-data'?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]: string[];
  };
  /**
   * Automatically include any data files inside the package directories that are specified by ``MANIFEST.in`` For more information on how to include data files, check ``setuptools`` `docs <https://setuptools.pypa.io/en/latest/userguide/datafiles.html>`_.
   */
  'include-package-data'?: boolean;
  /**
   * Mapping from package names to lists of glob patterns that should be excluded For more information on how to include data files, check ``setuptools`` `docs <https://setuptools.pypa.io/en/latest/userguide/datafiles.html>`_.
   */
  'exclude-package-data'?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]: string[];
  };
  /**
   * **DEPRECATED**: use implicit namespaces instead (:pep:`420`).
   */
  'namespace-packages'?: string[];
  /**
   * Modules that setuptools will manipulate
   */
  'py-modules'?: string[];
  /**
   * ``dict``-like structure where each key represents a directory and the value is a list of glob patterns that should be installed in them. **DISCOURAGED**: please notice this might not work as expected with wheels. Whenever possible, consider using data files inside the package directories (or create a new namespace package that only contains data files). See `data files support <https://setuptools.pypa.io/en/latest/userguide/datafiles.html>`_.
   */
  'data-files'?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]: string[];
  };
  /**
   * Mapping of distutils-style command names to ``setuptools.Command`` subclasses which in turn should be represented by strings with a qualified class name (i.e., "dotted" form with module), e.g.::
   *
   *      cmdclass = {mycmd = "pkg.subpkg.module.CommandClass"}
   *
   *  The command class should be a directly defined at the top-level of the containing module (no class nesting).
   */
  cmdclass?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]: string;
  };
  /**
   * **PROVISIONAL**: list of glob patterns for all license files being distributed. (likely to become standard with :pep:`639`). By default: ``['LICEN[CS]E*', 'COPYING*', 'NOTICE*', 'AUTHORS*']``
   */
  'license-files'?: string[];
  /**
   * Instructions for loading :pep:`621`-related metadata dynamically
   */
  dynamic?: {
    /**
     * A version dynamically loaded via either the ``attr:`` or ``file:`` directives. Please make sure the given file or attribute respects :pep:`440`. Also ensure to set ``project.dynamic`` accordingly.
     */
    version?: AttrDirective | FileDirective;
    classifiers?: FileDirective;
    description?: FileDirective;
    'entry-points'?: FileDirective;
    dependencies?: FileDirectiveForDependencies;
    'optional-dependencies'?: {
      [k: string]: FileDirectiveForDependencies;
    };
    readme?:
      | FileDirective
      | {
          'content-type'?: string;
          file?: string | string[];
        };
  };
}
export interface FindDirective {
  /**
   * Dynamic `package discovery <https://setuptools.pypa.io/en/latest/userguide/package_discovery.html>`_.
   */
  find?: {
    /**
     * Directories to be searched for packages (Unix-style relative path)
     */
    where?: string[];
    /**
     * Exclude packages that match the values listed in this field. Can container shell-style wildcards (e.g. ``'pkg.*'``)
     */
    exclude?: string[];
    /**
     * Restrict the found packages to just the ones listed in this field. Can container shell-style wildcards (e.g. ``'pkg.*'``)
     */
    include?: string[];
    /**
     * When ``True``, directories without a ``__init__.py`` file will also be scanned for :pep:`420`-style implicit namespaces
     */
    namespaces?: boolean;
  };
}
/**
 * Value is read from a module attribute. Supports callables and iterables; unsupported types are cast via ``str()``
 */
export interface AttrDirective {
  attr: string;
}
/**
 * Value is read from a file (or list of files and then concatenated)
 */
export interface FileDirective {
  file: string | string[];
}
