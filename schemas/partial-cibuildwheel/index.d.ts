/* eslint-disable */

/**
 * Change the architectures built on your machine by default.
 */
export type CIBW_ARCHS = string | string[];
/**
 * Execute a shell command on the build system before any wheels are built.
 */
export type CIBW_BEFORE_ALL = string | string[];
/**
 * Execute a shell command preparing each wheel's build.
 */
export type CIBW_BEFORE_BUILD = string | string[];
/**
 * Execute a shell command before testing each wheel.
 */
export type CIBW_BEFORE_TEST = string | string[];
/**
 * Choose the Python versions to build.
 */
export type CIBW_BUILD = string | string[];
/**
 * Set the tool to use to build, either "build" (default), "build[uv]", "uv", or "pip"
 */
export type CIBW_BUILD_FRONTEND =
  | ('pip' | 'build' | 'build[uv]' | 'uv' | 'default')
  | string
  | {
      name: 'pip' | 'build' | 'build[uv]' | 'uv';
      args?: string[];
    };
/**
 * Increase/decrease the output of pip wheel.
 */
export type CIBW_BUILD_VERBOSITY = number;
/**
 * Specify config-settings for the build backend.
 */
export type CIBW_CONFIG_SETTINGS =
  | string
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".+".
       */
      [k: string]: string | string[];
    };
export type CIBW_CONTAINER_ENGINE =
  | ('docker' | 'podman')
  | string
  | {
      name: 'docker' | 'podman';
      'create-args'?: string[];
      'disable-host-mount'?: boolean;
    };
/**
 * Specify how cibuildwheel controls the versions of the tools it uses
 */
export type CIBW_DEPENDENCY_VERSIONS =
  | ('pinned' | 'latest')
  | string
  | {
      file?: string;
    }
  | {
      packages?: string[];
    };
/**
 * Enable or disable certain builds.
 */
export type CIBW_ENABLE = Enable | Enable[];
export type Enable =
  | 'cpython-freethreading'
  | 'cpython-prerelease'
  | 'graalpy'
  | 'pyodide-prerelease'
  | 'pypy'
  | 'pypy-eol';
/**
 * Set environment variables needed during the build.
 */
export type CIBW_ENVIRONMENT =
  | string
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".+".
       */
      [k: string]: string;
    };
/**
 * Set environment variables on the host to pass-through to the container during the build.
 */
export type CIBW_ENVIRONMENT_PASS = string | string[];
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MANYLINUX_AARCH64_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MANYLINUX_ARMV7L_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MANYLINUX_I686_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MANYLINUX_PPC64LE_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MANYLINUX_PYPY_AARCH64_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MANYLINUX_PYPY_I686_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MANYLINUX_PYPY_X86_64_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MANYLINUX_RISCV64_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MANYLINUX_S390X_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MANYLINUX_X86_64_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MUSLLINUX_AARCH64_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MUSLLINUX_ARMV7L_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MUSLLINUX_I686_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MUSLLINUX_PPC64LE_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MUSLLINUX_RISCV64_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MUSLLINUX_S390X_IMAGE = string;
/**
 * Specify alternative manylinux / musllinux container images
 */
export type CIBW_MUSLLINUX_X86_64_IMAGE = string;
/**
 * Binaries on the path that should be included in an isolated cross-build environment
 */
export type CIBW_XBUILD_TOOLS = string | string[];
/**
 * Specify the version of Pyodide to use
 */
export type CIBW_PYODIDE_VERSION = string;
/**
 * Execute a shell command to repair each built wheel.
 */
export type CIBW_REPAIR_WHEEL_COMMAND = string | string[];
/**
 * Choose the Python versions to skip.
 */
export type CIBW_SKIP = string | string[];
/**
 * Execute a shell command to test each built wheel.
 */
export type CIBW_TEST_COMMAND = string | string[];
/**
 * Install your wheel for testing using `extras_require`
 */
export type CIBW_TEST_EXTRAS = string | string[];
/**
 * Test files that are required by the test environment
 */
export type CIBW_TEST_SOURCES = string | string[];
/**
 * Install extra groups when testing
 */
export type CIBW_TEST_GROUPS = string | string[];
/**
 * Install Python dependencies before running the tests
 */
export type CIBW_TEST_REQUIRES = string | string[];
/**
 * Skip running tests on some builds.
 */
export type CIBW_TEST_SKIP = string | string[];
/**
 * Set environment variables for the test environment
 */
export type CIBW_TEST_ENVIRONMENT =
  | string
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".+".
       */
      [k: string]: string;
    };
/**
 * Additional configuration for the test runner
 */
export type CIBW_TEST_RUNTIME =
  | string
  | {}
  | {
      args: string[];
    };
/**
 * How to inherit the parent's value.
 */
export type Inherit = 'none' | 'prepend' | 'append';
/**
 * Execute a shell command to repair each built wheel.
 */
export type CIBW_REPAIR_WHEEL_COMMAND1 = string | string[];
/**
 * Execute a shell command to repair each built wheel.
 */
export type CIBW_REPAIR_WHEEL_COMMAND2 = string | string[];

/**
 * cibuildwheel's settings. Generated with ./bin/generate_schema.py --schemastore from cibuildwheel.
 */
export interface HttpsJsonSchemastoreOrgPartialCibuildwheelJson {
  archs?: CIBW_ARCHS;
  'before-all'?: CIBW_BEFORE_ALL;
  'before-build'?: CIBW_BEFORE_BUILD;
  'before-test'?: CIBW_BEFORE_TEST;
  build?: CIBW_BUILD;
  'build-frontend'?: CIBW_BUILD_FRONTEND;
  'build-verbosity'?: CIBW_BUILD_VERBOSITY;
  'config-settings'?: CIBW_CONFIG_SETTINGS;
  'container-engine'?: CIBW_CONTAINER_ENGINE;
  'dependency-versions'?: CIBW_DEPENDENCY_VERSIONS;
  enable?: CIBW_ENABLE;
  environment?: CIBW_ENVIRONMENT;
  'environment-pass'?: CIBW_ENVIRONMENT_PASS;
  'manylinux-aarch64-image'?: CIBW_MANYLINUX_AARCH64_IMAGE;
  'manylinux-armv7l-image'?: CIBW_MANYLINUX_ARMV7L_IMAGE;
  'manylinux-i686-image'?: CIBW_MANYLINUX_I686_IMAGE;
  'manylinux-ppc64le-image'?: CIBW_MANYLINUX_PPC64LE_IMAGE;
  'manylinux-pypy_aarch64-image'?: CIBW_MANYLINUX_PYPY_AARCH64_IMAGE;
  'manylinux-pypy_i686-image'?: CIBW_MANYLINUX_PYPY_I686_IMAGE;
  'manylinux-pypy_x86_64-image'?: CIBW_MANYLINUX_PYPY_X86_64_IMAGE;
  'manylinux-riscv64-image'?: CIBW_MANYLINUX_RISCV64_IMAGE;
  'manylinux-s390x-image'?: CIBW_MANYLINUX_S390X_IMAGE;
  'manylinux-x86_64-image'?: CIBW_MANYLINUX_X86_64_IMAGE;
  'musllinux-aarch64-image'?: CIBW_MUSLLINUX_AARCH64_IMAGE;
  'musllinux-armv7l-image'?: CIBW_MUSLLINUX_ARMV7L_IMAGE;
  'musllinux-i686-image'?: CIBW_MUSLLINUX_I686_IMAGE;
  'musllinux-ppc64le-image'?: CIBW_MUSLLINUX_PPC64LE_IMAGE;
  'musllinux-riscv64-image'?: CIBW_MUSLLINUX_RISCV64_IMAGE;
  'musllinux-s390x-image'?: CIBW_MUSLLINUX_S390X_IMAGE;
  'musllinux-x86_64-image'?: CIBW_MUSLLINUX_X86_64_IMAGE;
  'xbuild-tools'?: CIBW_XBUILD_TOOLS;
  'pyodide-version'?: CIBW_PYODIDE_VERSION;
  'repair-wheel-command'?: CIBW_REPAIR_WHEEL_COMMAND;
  skip?: CIBW_SKIP;
  'test-command'?: CIBW_TEST_COMMAND;
  'test-extras'?: CIBW_TEST_EXTRAS;
  'test-sources'?: CIBW_TEST_SOURCES;
  'test-groups'?: CIBW_TEST_GROUPS;
  'test-requires'?: CIBW_TEST_REQUIRES;
  'test-skip'?: CIBW_TEST_SKIP;
  'test-environment'?: CIBW_TEST_ENVIRONMENT;
  'test-runtime'?: CIBW_TEST_RUNTIME;
  /**
   * An overrides array
   */
  overrides?: {
    select: string | string[];
    inherit?: {
      'before-all'?: Inherit;
      'before-build'?: Inherit;
      'xbuild-tools'?: Inherit;
      'before-test'?: Inherit;
      'config-settings'?: Inherit;
      'container-engine'?: Inherit;
      environment?: Inherit;
      'environment-pass'?: Inherit;
      'repair-wheel-command'?: Inherit;
      'test-command'?: Inherit;
      'test-extras'?: Inherit;
      'test-sources'?: Inherit;
      'test-requires'?: Inherit;
      'test-environment'?: Inherit;
      'test-runtime'?: Inherit;
    };
    'before-all'?: CIBW_BEFORE_ALL;
    'before-build'?: CIBW_BEFORE_BUILD;
    'before-test'?: CIBW_BEFORE_TEST;
    'build-frontend'?: CIBW_BUILD_FRONTEND;
    'build-verbosity'?: CIBW_BUILD_VERBOSITY;
    'config-settings'?: CIBW_CONFIG_SETTINGS;
    'container-engine'?: CIBW_CONTAINER_ENGINE;
    'dependency-versions'?: CIBW_DEPENDENCY_VERSIONS;
    environment?: CIBW_ENVIRONMENT;
    'environment-pass'?: CIBW_ENVIRONMENT_PASS;
    'manylinux-aarch64-image'?: CIBW_MANYLINUX_AARCH64_IMAGE;
    'manylinux-armv7l-image'?: CIBW_MANYLINUX_ARMV7L_IMAGE;
    'manylinux-i686-image'?: CIBW_MANYLINUX_I686_IMAGE;
    'manylinux-ppc64le-image'?: CIBW_MANYLINUX_PPC64LE_IMAGE;
    'manylinux-pypy_aarch64-image'?: CIBW_MANYLINUX_PYPY_AARCH64_IMAGE;
    'manylinux-pypy_i686-image'?: CIBW_MANYLINUX_PYPY_I686_IMAGE;
    'manylinux-pypy_x86_64-image'?: CIBW_MANYLINUX_PYPY_X86_64_IMAGE;
    'manylinux-riscv64-image'?: CIBW_MANYLINUX_RISCV64_IMAGE;
    'manylinux-s390x-image'?: CIBW_MANYLINUX_S390X_IMAGE;
    'manylinux-x86_64-image'?: CIBW_MANYLINUX_X86_64_IMAGE;
    'musllinux-aarch64-image'?: CIBW_MUSLLINUX_AARCH64_IMAGE;
    'musllinux-armv7l-image'?: CIBW_MUSLLINUX_ARMV7L_IMAGE;
    'musllinux-i686-image'?: CIBW_MUSLLINUX_I686_IMAGE;
    'musllinux-ppc64le-image'?: CIBW_MUSLLINUX_PPC64LE_IMAGE;
    'musllinux-riscv64-image'?: CIBW_MUSLLINUX_RISCV64_IMAGE;
    'musllinux-s390x-image'?: CIBW_MUSLLINUX_S390X_IMAGE;
    'musllinux-x86_64-image'?: CIBW_MUSLLINUX_X86_64_IMAGE;
    'xbuild-tools'?: CIBW_XBUILD_TOOLS;
    'pyodide-version'?: CIBW_PYODIDE_VERSION;
    'repair-wheel-command'?: CIBW_REPAIR_WHEEL_COMMAND;
    'test-command'?: CIBW_TEST_COMMAND;
    'test-extras'?: CIBW_TEST_EXTRAS;
    'test-sources'?: CIBW_TEST_SOURCES;
    'test-groups'?: CIBW_TEST_GROUPS;
    'test-requires'?: CIBW_TEST_REQUIRES;
    'test-environment'?: CIBW_TEST_ENVIRONMENT;
    'test-runtime'?: CIBW_TEST_RUNTIME;
  }[];
  linux?: {
    archs?: CIBW_ARCHS;
    'before-all'?: CIBW_BEFORE_ALL;
    'before-build'?: CIBW_BEFORE_BUILD;
    'before-test'?: CIBW_BEFORE_TEST;
    'build-frontend'?: CIBW_BUILD_FRONTEND;
    'build-verbosity'?: CIBW_BUILD_VERBOSITY;
    'config-settings'?: CIBW_CONFIG_SETTINGS;
    'container-engine'?: CIBW_CONTAINER_ENGINE;
    environment?: CIBW_ENVIRONMENT;
    'environment-pass'?: CIBW_ENVIRONMENT_PASS;
    'manylinux-aarch64-image'?: CIBW_MANYLINUX_AARCH64_IMAGE;
    'manylinux-armv7l-image'?: CIBW_MANYLINUX_ARMV7L_IMAGE;
    'manylinux-i686-image'?: CIBW_MANYLINUX_I686_IMAGE;
    'manylinux-ppc64le-image'?: CIBW_MANYLINUX_PPC64LE_IMAGE;
    'manylinux-pypy_aarch64-image'?: CIBW_MANYLINUX_PYPY_AARCH64_IMAGE;
    'manylinux-pypy_i686-image'?: CIBW_MANYLINUX_PYPY_I686_IMAGE;
    'manylinux-pypy_x86_64-image'?: CIBW_MANYLINUX_PYPY_X86_64_IMAGE;
    'manylinux-riscv64-image'?: CIBW_MANYLINUX_RISCV64_IMAGE;
    'manylinux-s390x-image'?: CIBW_MANYLINUX_S390X_IMAGE;
    'manylinux-x86_64-image'?: CIBW_MANYLINUX_X86_64_IMAGE;
    'musllinux-aarch64-image'?: CIBW_MUSLLINUX_AARCH64_IMAGE;
    'musllinux-armv7l-image'?: CIBW_MUSLLINUX_ARMV7L_IMAGE;
    'musllinux-i686-image'?: CIBW_MUSLLINUX_I686_IMAGE;
    'musllinux-ppc64le-image'?: CIBW_MUSLLINUX_PPC64LE_IMAGE;
    'musllinux-riscv64-image'?: CIBW_MUSLLINUX_RISCV64_IMAGE;
    'musllinux-s390x-image'?: CIBW_MUSLLINUX_S390X_IMAGE;
    'musllinux-x86_64-image'?: CIBW_MUSLLINUX_X86_64_IMAGE;
    'xbuild-tools'?: CIBW_XBUILD_TOOLS;
    'pyodide-version'?: CIBW_PYODIDE_VERSION;
    'repair-wheel-command'?: CIBW_REPAIR_WHEEL_COMMAND1;
    'test-command'?: CIBW_TEST_COMMAND;
    'test-extras'?: CIBW_TEST_EXTRAS;
    'test-sources'?: CIBW_TEST_SOURCES;
    'test-groups'?: CIBW_TEST_GROUPS;
    'test-requires'?: CIBW_TEST_REQUIRES;
    'test-environment'?: CIBW_TEST_ENVIRONMENT;
    'test-runtime'?: CIBW_TEST_RUNTIME;
  };
  windows?: {
    archs?: CIBW_ARCHS;
    'before-all'?: CIBW_BEFORE_ALL;
    'before-build'?: CIBW_BEFORE_BUILD;
    'before-test'?: CIBW_BEFORE_TEST;
    'build-frontend'?: CIBW_BUILD_FRONTEND;
    'build-verbosity'?: CIBW_BUILD_VERBOSITY;
    'config-settings'?: CIBW_CONFIG_SETTINGS;
    'dependency-versions'?: CIBW_DEPENDENCY_VERSIONS;
    environment?: CIBW_ENVIRONMENT;
    'xbuild-tools'?: CIBW_XBUILD_TOOLS;
    'pyodide-version'?: CIBW_PYODIDE_VERSION;
    'repair-wheel-command'?: CIBW_REPAIR_WHEEL_COMMAND;
    'test-command'?: CIBW_TEST_COMMAND;
    'test-extras'?: CIBW_TEST_EXTRAS;
    'test-sources'?: CIBW_TEST_SOURCES;
    'test-groups'?: CIBW_TEST_GROUPS;
    'test-requires'?: CIBW_TEST_REQUIRES;
    'test-environment'?: CIBW_TEST_ENVIRONMENT;
    'test-runtime'?: CIBW_TEST_RUNTIME;
  };
  macos?: {
    archs?: CIBW_ARCHS;
    'before-all'?: CIBW_BEFORE_ALL;
    'before-build'?: CIBW_BEFORE_BUILD;
    'before-test'?: CIBW_BEFORE_TEST;
    'build-frontend'?: CIBW_BUILD_FRONTEND;
    'build-verbosity'?: CIBW_BUILD_VERBOSITY;
    'config-settings'?: CIBW_CONFIG_SETTINGS;
    'dependency-versions'?: CIBW_DEPENDENCY_VERSIONS;
    environment?: CIBW_ENVIRONMENT;
    'xbuild-tools'?: CIBW_XBUILD_TOOLS;
    'pyodide-version'?: CIBW_PYODIDE_VERSION;
    'repair-wheel-command'?: CIBW_REPAIR_WHEEL_COMMAND2;
    'test-command'?: CIBW_TEST_COMMAND;
    'test-extras'?: CIBW_TEST_EXTRAS;
    'test-sources'?: CIBW_TEST_SOURCES;
    'test-groups'?: CIBW_TEST_GROUPS;
    'test-requires'?: CIBW_TEST_REQUIRES;
    'test-environment'?: CIBW_TEST_ENVIRONMENT;
    'test-runtime'?: CIBW_TEST_RUNTIME;
  };
  pyodide?: {
    archs?: CIBW_ARCHS;
    'before-all'?: CIBW_BEFORE_ALL;
    'before-build'?: CIBW_BEFORE_BUILD;
    'before-test'?: CIBW_BEFORE_TEST;
    'build-frontend'?: CIBW_BUILD_FRONTEND;
    'build-verbosity'?: CIBW_BUILD_VERBOSITY;
    'config-settings'?: CIBW_CONFIG_SETTINGS;
    'dependency-versions'?: CIBW_DEPENDENCY_VERSIONS;
    environment?: CIBW_ENVIRONMENT;
    'xbuild-tools'?: CIBW_XBUILD_TOOLS;
    'pyodide-version'?: CIBW_PYODIDE_VERSION;
    'repair-wheel-command'?: CIBW_REPAIR_WHEEL_COMMAND;
    'test-command'?: CIBW_TEST_COMMAND;
    'test-extras'?: CIBW_TEST_EXTRAS;
    'test-sources'?: CIBW_TEST_SOURCES;
    'test-groups'?: CIBW_TEST_GROUPS;
    'test-requires'?: CIBW_TEST_REQUIRES;
    'test-environment'?: CIBW_TEST_ENVIRONMENT;
    'test-runtime'?: CIBW_TEST_RUNTIME;
  };
  android?: {
    archs?: CIBW_ARCHS;
    'before-all'?: CIBW_BEFORE_ALL;
    'before-build'?: CIBW_BEFORE_BUILD;
    'before-test'?: CIBW_BEFORE_TEST;
    'build-frontend'?: CIBW_BUILD_FRONTEND;
    'build-verbosity'?: CIBW_BUILD_VERBOSITY;
    'config-settings'?: CIBW_CONFIG_SETTINGS;
    'dependency-versions'?: CIBW_DEPENDENCY_VERSIONS;
    environment?: CIBW_ENVIRONMENT;
    'xbuild-tools'?: CIBW_XBUILD_TOOLS;
    'pyodide-version'?: CIBW_PYODIDE_VERSION;
    'repair-wheel-command'?: CIBW_REPAIR_WHEEL_COMMAND;
    'test-command'?: CIBW_TEST_COMMAND;
    'test-extras'?: CIBW_TEST_EXTRAS;
    'test-sources'?: CIBW_TEST_SOURCES;
    'test-groups'?: CIBW_TEST_GROUPS;
    'test-requires'?: CIBW_TEST_REQUIRES;
    'test-environment'?: CIBW_TEST_ENVIRONMENT;
    'test-runtime'?: CIBW_TEST_RUNTIME;
  };
  ios?: {
    archs?: CIBW_ARCHS;
    'before-all'?: CIBW_BEFORE_ALL;
    'before-build'?: CIBW_BEFORE_BUILD;
    'before-test'?: CIBW_BEFORE_TEST;
    'build-frontend'?: CIBW_BUILD_FRONTEND;
    'build-verbosity'?: CIBW_BUILD_VERBOSITY;
    'config-settings'?: CIBW_CONFIG_SETTINGS;
    'dependency-versions'?: CIBW_DEPENDENCY_VERSIONS;
    environment?: CIBW_ENVIRONMENT;
    'xbuild-tools'?: CIBW_XBUILD_TOOLS;
    'pyodide-version'?: CIBW_PYODIDE_VERSION;
    'repair-wheel-command'?: CIBW_REPAIR_WHEEL_COMMAND;
    'test-command'?: CIBW_TEST_COMMAND;
    'test-extras'?: CIBW_TEST_EXTRAS;
    'test-sources'?: CIBW_TEST_SOURCES;
    'test-groups'?: CIBW_TEST_GROUPS;
    'test-requires'?: CIBW_TEST_REQUIRES;
    'test-environment'?: CIBW_TEST_ENVIRONMENT;
    'test-runtime'?: CIBW_TEST_RUNTIME;
  };
}
