/* eslint-disable */

/**
 * A command line script or scripts.

Available variables:
%project:Directory% - The project directory
%project:Name% - The project name
%project:Version% - The project version
 */
export type Script = string | string[];

export interface JSONSchemaForDNXProjectJsonFiles {
  authors?: string[];
  /**
   * Pairs of destination folders and glob patterns specifying additional files to include in the output NuGet package. (data type: JSON map). Example: { "tools/": "tools/** /*.*" }
   */
  packInclude?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Glob pattern to specify files to exclude from publish output. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  publishExclude?: string | string[];
  /**
   * Glob pattern to specify files to compile. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  compile?: string | string[];
  /**
   * Glob pattern to specify files to exclude from compilation. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  compileExclude?: string | string[];
  /**
   * Files to include in compilation (overrides 'compileExclude'). (data type: string or array). Example: [ "Folder1/File1.ext", "Folder2/File2.ext" ]
   */
  compileFiles?: string | string[];
  /**
   * Glob pattern to specify files to include as content. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  content?: string | string[];
  /**
   * Glob pattern to specify files to exclude from the content list. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  contentExclude?: string | string[];
  /**
   * Files to include as content (overrides 'contentExclude'). (data type: string or array). Example: [ "Folder1/File1.ext", "Folder2/File2.ext" ]
   */
  contentFiles?: string | string[];
  /**
   * Glob pattern to specify files to use for preprocessing. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  preprocess?: string | string[];
  /**
   * Glob pattern to specify files to exclude from use for preprocessing. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  preprocessExclude?: string | string[];
  /**
   * Files to include to use for preprocessing (overrides 'preprocessExclude'). (data type: string or array). Example: [ "Folder1/File1.ext", "Folder2/File2.ext" ]
   */
  preprocessFiles?: string | string[];
  /**
   * Glob pattern to specify files to include as resources. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  resource?: string | string[];
  /**
   * Glob pattern to specify files to exclude from the resources list. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  resourceExclude?: string | string[];
  /**
   * Files to include as resources (overrides 'resourceExclude'). (data type: string or array). Example: [ "Folder1/File1.ext", "Folder2/File2.ext" ]
   */
  resourceFiles?: string | string[];
  /**
   * Glob pattern to specify files to share with dependent projects. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  shared?: string | string[];
  /**
   * Glob pattern to specify files to exclude from sharing with dependent projects. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  sharedExclude?: string | string[];
  /**
   * Files to include for sharing with dependent projects (overrides 'sharedExclude'). (data type: string or array). Example: [ "Folder1/File1.ext", "Folder2/File2.ext" ]
   */
  sharedFiles?: string | string[];
  /**
   * Glob pattern to indicate files to exclude from other glob patterns, in addition to the default patterns specified in 'excludeBuiltIn'. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  exclude?: string | string[];
  /**
   * Default glob pattern to indicate files to exclude from other glob patterns. (data type: string or array with glob pattern(s)). Example: [ "Folder1/*.ext", "Folder2/*.ext" ]
   */
  excludeBuiltIn?: string | string[];
  commands?: {
    [k: string]: string | undefined;
  };
  compilationOptions?: CompilationOptions;
  /**
   * Configurations are named groups of compilation settings. There are two defaults built into the runtime: 'Debug' and 'Release'.
   */
  configurations?: {
    [k: string]:
      | {
          compilationOptions?: CompilationOptions;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  dependencies?: Dependencies;
  /**
   * Copyright details for the package.
   */
  copyright?: string;
  /**
   * A URL for the image to use as the icon for the package. This should be a 32x32-pixel .png file that has a transparent background.
   */
  iconUrl?: string;
  /**
   * A link to the license for the package.
   */
  licenseUrl?: string;
  /**
   * A Boolean value that specifies whether the client needs to ensure that the package license (described by licenseUrl) is accepted before the package is installed.
   */
  requireLicenseAcceptance?: boolean;
  owners?: string[];
  /**
   * A URL for the home page of the package.
   */
  projectUrl?: string;
  /**
   * A short description of the package.
   */
  summary?: string;
  /**
   * A space-delimited list of tags and keywords that describe the package.
   */
  tags?: string[];
  /**
   * The human-friendly title of the package
   */
  title?: string;
  /**
   * A description of the changes made in each release of the package.
   */
  releaseNotes?: string;
  /**
   * The locale ID for the package, such as en-us.
   */
  language?: string;
  /**
   * The description of the project/package.
   */
  description?: string;
  frameworks?: {
    [k: string]: ConfigType | undefined;
  };
  /**
   * Overrides the generated resource names with custom ones.
   */
  namedResource?: {
    [k: string]: string | undefined;
  };
  /**
   * Contains information about the repository where the project is stored.
   */
  repository?: {
    type?: 'git';
    url?: string;
    [k: string]: string | undefined;
  };
  /**
   * Scripts to execute during the various stages.
   */
  scripts?: {
    prebuild?: Script;
    postbuild?: Script;
    prepack?: Script;
    postpack?: Script;
    prepublish?: Script;
    postpublish?: Script;
    prerestore?: Script;
    postrestore?: Script;
    prepare?: Script;
    [k: string]: unknown | undefined;
  };
  /**
   * The version of the project/package. Examples: 1.2.3, 1.2.3-beta, 1.2.3-*
   */
  version?: string;
  [k: string]: unknown | undefined;
}
export interface CompilationOptions {
  define?: string[];
  warningsAsErrors?: boolean;
  allowUnsafe?: boolean;
  emitEntryPoint?: boolean;
  optimize?: boolean;
  languageVersion?: 'csharp1' | 'csharp2' | 'csharp3' | 'csharp4' | 'csharp5' | 'csharp6' | 'experimental';
  keyFile?: string;
  delaySign?: boolean;
  useOssSigning?: boolean;
  [k: string]: unknown | undefined;
}
export interface Dependencies {
  [k: string]:
    | (
        | string
        | {
            version?: string;
            type?: 'default' | 'build';
            /**
             * Restrict this dependency to matching only a Project or a Package
             */
            target?: 'project' | 'package';
            [k: string]: unknown | undefined;
          }
      )
    | undefined;
}
export interface ConfigType {
  dependencies?: Dependencies;
  compilationOptions?: CompilationOptions;
  frameworkAssemblies?: Dependencies;
  [k: string]: unknown | undefined;
}
