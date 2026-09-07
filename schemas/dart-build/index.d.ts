/* eslint-disable */

export type InputSet =
  | {
      include?: _ListOfGlobs;
      exclude?: _ListOfGlobs;
    }
  | _ListOfGlobs;
export type _ListOfGlobs = string[];
/**
 * A target key has two parts, a package and a name. They are separated by a colon.
 */
export type AnIdentifierForATarget = string;
/**
 * To construct a key, you join the package name and the builder name with a colon.
 */
export type AnIdentifierForABuilder = string;
export type RunsBefore = AnIdentifierForABuilder[];
/**
 */
export type TheNameOfTheDartLibraryTargetThatContainsTheImport = string;

/**
 * Configuration for Dart's build system
 */
export interface BuildYamlFiles {
  targets?: {
    [k: string]: BuildTarget | undefined;
  };
  builders?: {
    [k: string]: BuilderDefinition | undefined;
  };
  post_process_builders?: {
    [k: string]: PostProcessBuilderDefinition | undefined;
  };
  global_options?: {
    [k: string]: GlobalBuilderOptions | undefined;
  };
  additional_public_assets?: _ListOfGlobs;
}
export interface BuildTarget {
  auto_apply_builders?: boolean;
  builders?: {
    [k: string]: TargetBuilderConfig | undefined;
  };
  dependencies?: AnIdentifierForATarget[];
  sources?: InputSet;
}
export interface TargetBuilderConfig {
  enabled?: boolean;
  generate_for?: InputSet;
  options?: OptionsToApplyToABuilder;
  dev_options?: OptionsToApplyToABuilder;
  release_options?: OptionsToApplyToABuilder;
}
/**
 * An arbitrary Map<String, dynamic> of configuration options exposed by the individual builders. See the documentation for the builder you are configuring for guidance.
 */
export interface OptionsToApplyToABuilder {
  [k: string]: unknown | undefined;
}
export interface BuilderDefinition {
  builder_factories?: string[];
  import?: string;
  build_extensions?: {
    [k: string]: string[] | undefined;
  };
  /**
   * On which packages the builder is applied by default
   */
  auto_apply?: 'none' | 'dependents' | 'all_packages' | 'root_package';
  required_inputs?: string[];
  runs_before?: RunsBefore;
  applies_builders?: AnIdentifierForABuilder[];
  is_optional?: boolean;
  /**
   * Whether the outputs should be stored in a hidden cache or in the source directory.
   */
  build_to?: 'cache' | 'source';
  defaults?: TargetBuilderConfigDefaults;
  target?: TheNameOfTheDartLibraryTargetThatContainsTheImport;
}
export interface TargetBuilderConfigDefaults {
  generate_for?: InputSet;
  options?: OptionsToApplyToABuilder;
  dev_options?: OptionsToApplyToABuilder;
  release_options?: OptionsToApplyToABuilder;
}
export interface PostProcessBuilderDefinition {
  builder_factory?: string;
  import?: string;
  input_extensions?: string[];
  defaults?: TargetBuilderConfigDefaults;
}
export interface GlobalBuilderOptions {
  options?: OptionsToApplyToABuilder;
  dev_options?: OptionsToApplyToABuilder;
  release_options?: OptionsToApplyToABuilder;
  runs_before?: RunsBefore;
}
