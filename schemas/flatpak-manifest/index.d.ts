/* eslint-disable */

/**
 * Configuration manifest for flatpak-builder describing how to build a Flatpak application or runtime
 */
export type FlatpakBuilderManifest = {
  /**
   * A string defining the application id
   */
  'app-id'?: string;
  /**
   * A string defining the application id
   */
  id?: string;
  /**
   * The branch to use when exporting the application. If this is unset the defaults come from the default-branch option
   */
  branch?: string;
  /**
   * The default branch to use when exporting the application. Defaults to master. This key can be overridden by the --default-branch commandline option
   */
  'default-branch'?: string;
  /**
   * The collection ID of the repository, defaults to being unset. Setting a globally unique collection ID allows the apps in the repository to be shared over peer to peer systems without needing further configuration. If building in an existing repository, the collection ID must match the existing configured collection ID for that repository
   */
  'collection-id'?: string;
  /**
   * If building an extension, the tag for the extension point to use. Since flatpak 0.11.4 a runtime may define multiple locations for the same extension point with the intention that different branches for the extension are mounted at each location. When building an extension it is necessary to know what extension point to install the extension to. This option resolves any ambiguity in which extension point to choose. If not specified, the default choice is to install into either the only location for the extension point or into the location for the untagged extension point. If there are multiple locations for the same extension point defined with different tags then an error will occur
   */
  'extension-tag'?: string;
  /**
   * The name of the runtime that the application uses
   */
  runtime: string;
  /**
   * The version of the runtime that the application uses, defaults to master
   */
  'runtime-version'?: string;
  /**
   * The name of the development runtime that the application builds with
   */
  sdk: string;
  /**
   * Initialize the (otherwise empty) writable /var in the build with a copy of this runtime
   */
  var?: string;
  /**
   * Use this file as the base metadata file when finishing
   */
  metadata?: string;
  /**
   * The filename or path to the main binary of the application. Note that this is really just a single file, not a commandline. If you want to pass arguments, install a shell script wrapper and use that as the command. Also note that the command is used when the application is run via flatpak run, and does not affect what gets executed when the application is run in other ways, e.g. via the desktop file or D-Bus activation
   */
  command?: string;
  /**
   * Build a new runtime instead of an application
   */
  'build-runtime'?: boolean;
  /**
   * Build an extension
   */
  'build-extension'?: boolean;
  /**
   * Separate out locale files and translations to an extension runtime. Defaults to true
   */
  'separate-locales'?: boolean;
  /**
   * When building a runtime sdk, also create a platform based on it with this id
   */
  'id-platform'?: string;
  /**
   * The metadata file to use for the platform we create
   */
  'metadata-platform'?: string;
  /**
   * If true, use a writable copy of the sdk for /usr. Defaults to true if build-runtime is specified
   */
  'writable-sdk'?: boolean;
  /**
   * Run appstream-compose during cleanup phase. Defaults to true
   */
  'appstream-compose'?: boolean;
  /**
   * Install these extra sdk extensions in /usr
   */
  'sdk-extensions'?: string[];
  /**
   * Install these extra sdk extensions when creating the platform
   */
  'platform-extensions'?: string[];
  /**
   * Start with the files from the specified application. This can be used to create applications that extend another application
   */
  base?: string;
  /**
   * Use this specific version of the application specified in base. If unspecified, this uses the value specified in branch
   */
  'base-version'?: string;
  /**
   * Install these extra extensions from the base application when initializing the application directory
   */
  'base-extensions'?: string[];
  /**
   * Inherit these extra extension points from the base application or sdk when finishing the build
   */
  'inherit-extensions'?: string[];
  /**
   * Inherit these extra extension points from the base application or sdk when finishing the build, but do not inherit them into the platform
   */
  'inherit-sdk-extensions'?: string[];
  /**
   * Add these tags to the metadata file
   */
  tags?: string[];
  'build-options'?: BuildOptions;
  modules?: Modules;
  /**
   * This is a dictionary of extension objects. The key is the name of the extension
   */
  'add-extensions'?: {
    [k: string]: Extension;
  };
  /**
   * This is a dictionary of extension objects similar to add-extensions. The main difference is that the extensions are added early and are available for use during the build
   */
  'add-build-extensions'?: {
    [k: string]: Extension;
  };
  /**
   * An array of file patterns that should be removed at the end. Patterns starting with / are taken to be full pathnames (without the /app prefix), otherwise they just match the basename
   */
  cleanup?: string[];
  /**
   * An array of commandlines that are run during the cleanup phase
   */
  'cleanup-commands'?: string[];
  /**
   * Extra files to clean up in the platform
   */
  'cleanup-platform'?: string[];
  /**
   * An array of commandlines that are run during the cleanup phase of the platform
   */
  'cleanup-platform-commands'?: string[];
  /**
   * An array of commandlines that are run after importing the base platform, but before applying the new files from the sdk. This is a good place to e.g. delete things from the base that may conflict with the files added in the sdk
   */
  'prepare-platform-commands'?: string[];
  /**
   * An array of arguments passed to the flatpak build-finish command
   */
  'finish-args'?: string[];
  /**
   * Any desktop file with this name will be renamed to a name based on id during the cleanup phase
   */
  'rename-desktop-file'?: string;
  /**
   * Any appdata (metainfo) file with this name will be renamed to a name based on id during the cleanup phase
   */
  'rename-appdata-file'?: string;
  /**
   * Any mimetypes file with this name will me renamed to a name based on id during the cleanup phase
   */
  'rename-mime-file'?: string;
  /**
   * Any icon with this name will be renamed to a name based on id during the cleanup phase. Note that this is the icon name, not the full filenames, so it should not include a filename extension
   */
  'rename-icon'?: string;
  /**
   * Any mime icons with any of these names will be renamed to a name prefixed with id during the cleanup phase. Note that this is the icon name, not the full filenames, so it should not include a filename extension
   */
  'rename-mime-icons'?: string[];
  /**
   * Replace the appdata (metainfo) project_license field with this string. This is useful as the upstream license is typically only about the application itself, whereas the bundled app can contain other licenses too
   */
  'appdata-license'?: string;
  /**
   * If rename-icon is set, keep a copy of the old icon file
   */
  'copy-icon'?: boolean;
  /**
   * This string will be prefixed to the Name key in the main application desktop file
   */
  'desktop-file-name-prefix'?: string;
  /**
   * This string will be suffixed to the Name key in the main application desktop file
   */
  'desktop-file-name-suffix'?: string;
} & {
  [k: string]: unknown | undefined;
};
/**
 * An array of objects specifying the modules to be built in order. String members in the array are interpreted as the name of a separate json or yaml file that contains a module
 */
export type Modules = {
  [k: string]: unknown | undefined;
}[];

/**
 * Object specifying the build environment
 */
export interface BuildOptions {
  /**
   * This is set in the environment variable CFLAGS during the build. Multiple specifications of this (in e.g. per-arch area) are concatenated, separated by spaces
   */
  cflags?: string;
  /**
   * If this is true, clear cflags from previous build options before adding it from these options
   */
  'cflags-override'?: boolean;
  /**
   * This is set in the environment variable CPPFLAGS during the build. Multiple specifications of this (in e.g. per-arch area) are concatenated, separated by spaces
   */
  cppflags?: string;
  /**
   * If this is true, clear cppflags from previous build options before adding it from these options
   */
  'cppflags-override'?: boolean;
  /**
   * This is set in the environment variable CXXFLAGS during the build. Multiple specifications of this (in e.g. per-arch area) are concatenated, separated by spaces
   */
  cxxflags?: string;
  /**
   * If this is true, clear cxxflags from previous build options before adding it from these options
   */
  'cxxflags-override'?: boolean;
  /**
   * This is set in the environment variable LDFLAGS during the build. Multiple specifications of this (in e.g. per-arch area) are concatenated, separated by spaces
   */
  ldflags?: string;
  /**
   * If this is true, clear ldflags from previous build options before adding it from these options
   */
  'ldflags-override'?: boolean;
  /**
   * The build prefix for the modules (defaults to /app for applications and /usr for runtimes)
   */
  prefix?: string;
  /**
   * The build libdir for the modules (defaults to /app/lib for applications and /usr/lib for runtimes)
   */
  libdir?: string;
  /**
   * This will get appended to PATH in the build environment (with an leading colon if needed)
   */
  'append-path'?: string;
  /**
   * This will get prepended to PATH in the build environment (with an trailing colon if needed)
   */
  'prepend-path'?: string;
  /**
   * This will get appended to LD_LIBRARY_PATH in the build environment (with an leading colon if needed)
   */
  'append-ld-library-path'?: string;
  /**
   * This will get prepended to LD_LIBRARY_PATH in the build environment (with an trailing colon if needed)
   */
  'prepend-ld-library-path'?: string;
  /**
   * This will get appended to PKG_CONFIG_PATH in the build environment (with an leading colon if needed)
   */
  'append-pkg-config-path'?: string;
  /**
   * This will get prepended to PKG_CONFIG_PATH in the build environment (with an trailing colon if needed)
   */
  'prepend-pkg-config-path'?: string;
  /**
   * This is a dictionary defining environment variables to be set during the build. Elements in this override the properties that set the environment, like cflags and ldflags. Keys with a null value unset the corresponding variable
   */
  env?: {
    /**
     * An environment variable
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[^=]+$".
     */
    [k: string]: string;
  };
  /**
   * This is a array defining which host environment variables is transferred to build-commands or post-install environment
   */
  'secret-env'?: string[];
  /**
   * This is an array containing extra options to pass to flatpak build
   */
  'build-args'?: string[];
  /**
   * Similar to build-args but affects the tests, not the normal build
   */
  'test-args'?: string[];
  /**
   * This is an array containing extra options to pass to configure
   */
  'config-opts'?: string[];
  /**
   * This is an array of options that will be passed to configure, meant to be used to pass secrets through host environment variables. Put the option with an environment variables and will be resolved beforehand. '-DSECRET_ID=$CI_SECRET'
   */
  'secret-opts'?: string[];
  /**
   * An array of extra arguments that will be passed to make
   */
  'make-args'?: string[];
  /**
   * An array of extra arguments that will be passed to make install
   */
  'make-install-args'?: string[];
  /**
   * If this is true (the default is false) then all ELF files will be stripped after install
   */
  strip?: boolean;
  /**
   * By default (if strip is not true) flatpak-builder extracts all debug info in ELF files to a separate files and puts this in an extension. If you want to disable this, set no-debuginfo to true
   */
  'no-debuginfo'?: boolean;
  /**
   * By default when extracting debuginfo we compress the debug sections. If you want to disable this, set no-debuginfo-compression to true
   */
  'no-debuginfo-compression'?: boolean;
  /**
   * This is a dictionary defining for each arch a separate build options object that override the main one
   */
  arch?: {
    [k: string]: BuildOptions;
  };
}
/**
 * Extension define extension points in the app/runtime that can be implemented by extensions, supplying extra files which are available during runtime
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface Extension {
  /**
   * The directory where the extension is mounted. If the extension point is for an application, this path is relative to /app, otherwise it is relative to /usr
   */
  directory?: string;
  /**
   * If this is true, then the data created in the extension directory is omitted from the result, and instead packaged in a separate extension
   */
  bundle?: boolean;
  /**
   * If this is true, the extension is removed when finishing. This is only interesting for extensions in the add-build-extensions property
   */
  'remove-after-build'?: boolean;
  /**
   * Whether to automatically delete extensions matching this extension point when deleting a 'related' application or runtime. Available since 0.6.7
   */
  autodelete?: boolean;
  /**
   * Whether to automatically download extensions matching this extension point when updating or installing a 'related' application or runtime. Available since 0.6.7
   */
  'no-autodownload'?: boolean;
  /**
   * If this key is set to true, then flatpak will look for extensions whose name is a prefix of the extension point name, and mount them at the corresponding name below the subdirectory. Available since 0.1
   */
  subdirectories?: boolean;
  /**
   * A condition that must be true for the extension to be auto-downloaded. As of 1.1.1 this supports multiple conditions separated by semi-colons
   */
  'add-ld-path'?: string;
  /**
   * A condition that must be true for the extension to be auto-downloaded
   */
  'download-if'?: (
    | ('active-gl-driver' | 'active-gtk-theme' | 'have-intel-gpu')
    | {
        [k: string]: unknown | undefined;
      }
  ) &
    string;
  /**
   * A condition that must be true for the extension to be enabled. As of 1.1.1 this supports multiple conditions separated by semi-colons
   */
  'enable-if'?: (
    | ('active-gl-driver' | 'active-gtk-theme' | 'have-intel-gpu')
    | {
        [k: string]: unknown | undefined;
      }
  ) &
    string;
  /**
   * A condition that must be false for the extension to be considered unused when pruning. For example, flatpak uninstall --unused uses this information
   */
  'autoprune-unless'?: (
    | ('active-gl-driver' | 'active-gtk-theme' | 'have-intel-gpu')
    | {
        [k: string]: unknown | undefined;
      }
  ) &
    string;
  /**
   * A list of relative paths of directories below the extension point directory that will be merged. Available since 0.9.1, and backported to the 0.8.x branch in 0.8.3
   */
  'merge-dirs'?: string;
  /**
   * A suffix that gets appended to the directory name. This is very useful when the extension point naming scheme is reversed. For example, an extension point for GTK+ themes would be /usr/share/themes/$NAME/gtk-3.0, which could be achieved using subdirectory-suffix=gtk-3.0. Available since 0.9.1, and backported to the 0.8.x branch in 0.8.3
   */
  'subdirectory-suffix'?: string;
  /**
   * If set, then the extensions are partially downloaded by default, based on the currently configured locales. This means that the extension contents should be a set of directories with the language code as name. Available since 0.9.13 (and 0.6.6 for any extensions called *.Locale)
   */
  'locale-subset'?: boolean;
  /**
   * The branch to use when looking for the extension. If this is not specified, it defaults to the branch of the application or runtime that the extension point is for. Available since 0.4.1
   */
  version?: string;
  /**
   * The branches to use when looking for the extension. If this is not specified, it defaults to the branch of the application or runtime that the extension point is for. Available since 0.9.1, and backported to the 0.8.x branch in 0.8.4
   */
  versions?: string;
}
/**
 * Custom property (ignored by flatpak-builder)
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^x-.*".
 */
export interface IgnoredPropCustom {
  [k: string]: unknown | undefined;
}
/**
 * Comment property (ignored by flatpak-builder)
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^//.*".
 */
export interface IgnoredPropComment {
  [k: string]: unknown | undefined;
}
/**
 * JSON schema (ignored by flatpak-builder)
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\$schema$".
 */
export interface IgnoredPropSchema {
  [k: string]: unknown | undefined;
}
