/* eslint-disable */

export type KeyValue = string;
export type Ulimit = string;

/**
 * The Bake file is a file for defining workflows that you run using docker buildx bake.
 */
export interface DockerBakeJSONSchema {
  $schema?: string;
  /**
   * A target reflects a single docker build invocation.
   */
  target?: {
    [k: string]: Target | undefined;
  };
  /**
   * Groups allow you to invoke multiple builds (targets) at once.
   */
  group?: {
    default?: Group;
    [k: string]: Group;
  };
  /**
   * The HCL file format supports variable block definitions. You can use variables as build arguments in your Dockerfile, or interpolate them in attribute values in your Bake file.
   * You can assign a default value for a variable in the Bake file, or assign a null value to it. If you assign a null value, Buildx uses the default value from the Dockerfile instead.
   * You can override variable defaults set in the Bake file using environment variables.
   */
  variable?: {
    [k: string]:
      | {
          default?: string | null;
        }
      | undefined;
  };
  /**
   * Functions allow you to define custom functions that you can use in your Bake file. You can use functions to generate values for attributes in your targets.
   */
  function?: {
    [k: string]:
      | {
          /**
           * Arguments for the function.
           */
          params?: string[];
          /**
           * Variable-length argument list.
           */
          variadic_params?: string;
          /**
           * Return value. It can take not only just string but also other functions, variables and etc.
           * If you want to interpolate variables or logic, put them in ${}.
           * For example, if you want to increment a number param, you can do it like this: ${number+1}
           */
          result: string;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
export interface Target {
  /**
   * Use the args attribute to define build arguments for the target. This has the same effect as passing a --build-arg flag to the build command.
   * You can set args attributes to use null values. Doing so forces the target to use the ARG value specified in the Dockerfile.
   */
  args?: {
    [k: string]: (string | null) | undefined;
  };
  /**
   * The annotations attribute lets you add annotations to images built with bake. The key takes a list of annotations, in the format of KEY=VALUE.
   */
  annotations?: (KeyValue | null)[];
  /**
   * The attest attribute lets you apply build attestations to the target. This attribute accepts the long-form CSV version of attestation parameters.
   */
  attest?: KeyValue[];
  /**
   * Build cache sources. The builder imports cache from the locations you specify. It uses the Buildx cache storage backends, and it works the same way as the --cache-from flag. This takes a list value, so you can specify multiple cache sources.
   */
  'cache-from'?: string[];
  /**
   * Build cache export destinations. The builder exports its build cache to the locations you specify. It uses the Buildx cache storage backends, and it works the same way as the --cache-to flag. This takes a list value, so you can specify multiple cache export targets.
   */
  'cache-to'?: string[];
  /**
   * Specifies the location of the build context to use for this target. Accepts a URL or a directory path. This is the same as the build context positional argument that you pass to the build command.
   */
  context?: string;
  /**
   * Additional build contexts. This is the same as the --build-context flag. This attribute takes a map, where keys result in named contexts that you can reference in your builds.
   * You can specify different types of contexts, such local directories, Git URLs, and even other Bake targets. Bake automatically determines the type of a context based on the pattern of the context value.
   */
  contexts?: {
    [k: string]: string | undefined;
  };
  /**
   * Uses the string value as an inline Dockerfile for the build target.
   * The dockerfile-inline takes precedence over the dockerfile attribute. If you specify both, Bake uses the inline version.
   */
  'dockerfile-inline'?: string;
  /**
   * Name of the Dockerfile to use for the build. This is the same as the --file flag for the docker build command.
   */
  dockerfile?: string;
  /**
   * A target can inherit attributes from other targets. Use inherits to reference from one target to another.
   */
  inherits?: string[];
  /**
   * Assigns image labels to the build. This is the same as the --label flag for docker build.
   * t's possible to use a null value for labels. If you do, the builder uses the label value specified in the Dockerfile.
   */
  labels?: {
    [k: string]: (string | null) | undefined;
  };
  /**
   * A matrix strategy lets you fork a single target into multiple different variants, based on parameters that you specify. This works in a similar way to [Matrix strategies for GitHub Actions]. You can use this to reduce duplication in your bake definition.
   * The matrix attribute is a map of parameter names to lists of values. Bake builds each possible combination of values as a separate target.
   * Each generated target must have a unique name. To specify how target names should resolve, use the name attribute.
   */
  matrix?: {
    [k: string]: unknown[] | undefined;
  };
  /**
   * Specify name resolution for targets that use a matrix strategy.
   */
  name?: string;
  /**
   * Don't use build cache for the specified stages. This is the same as the --no-cache-filter flag for docker build.
   */
  'no-cache-filter'?: string[];
  /**
   * Don't use cache when building the image. This is the same as the --no-cache flag for docker build.
   */
  'no-cache'?: boolean;
  /**
   * Configuration for exporting the build output. This is the same as the --output flag.
   */
  output?: string[];
  /**
   * Set target platforms for the build target. This is the same as the --platform flag.
   */
  platforms?: string[];
  /**
   * Configures whether the builder should attempt to pull images when building the target. This is the same as the --pull flag for docker build.
   */
  pull?: boolean;
  /**
   * Defines secrets to expose to the build target. This is the same as the --secret flag.
   */
  secret?: string[];
  /**
   * Sets the size of the shared memory allocated for build containers when using RUN instructions.
   * The format is <number><unit>. number must be greater than 0. Unit is optional and can be b (bytes), k (kilobytes), m (megabytes), or g (gigabytes). If you omit the unit, the system uses bytes.
   * This is the same as the --shm-size flag for docker build.
   */
  'shm-size'?: string;
  /**
   * Defines SSH agent sockets or keys to expose to the build. This is the same as the --ssh flag. This can be useful if you need to access private repositories during a build.
   */
  ssh?: string[];
  /**
   * Image names and tags to use for the build target. This is the same as the --tag flag.
   */
  tags?: string[];
  /**
   * Set the target build stage to build. This is the same as the --target flag.
   */
  target?: string;
  /**
   * Ulimits overrides the default ulimits of build's containers when using RUN instructions and are specified with a soft and hard limit as such: <type>=<soft limit>[:<hard limit>].
   */
  ulimits?: Ulimit[];
}
export interface Group {
  targets: string[];
  [k: string]: unknown | undefined;
}
