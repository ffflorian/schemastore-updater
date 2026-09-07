/* eslint-disable */

export type Component = Cargo | Git | Go | Linux | Maven | Npm | NuGet | Other | Pip | Pod | RubyGems | VCPKG;

export interface ComponentDetectionManifest {
  registrations: Registration[];
  version: number;
  [k: string]: unknown | undefined;
}
export interface Registration {
  component: Component;
  dependencyRoots?: Component[];
  developmentDependency?: boolean;
  /**
   * Additional locations impacted by this component, relative to the cgmanifest.json file or using the {SourceFileRoot} placeholder.
   */
  detectedComponentLocations?: string[];
  /**
   * SPDX license expression(s) as resolved via ClearlyDefined API or curations.
   */
  licensesConcluded?: string[];
  /**
   * Entities that supplied/published the component.
   */
  suppliers?: ActorInfo[];
  [k: string]: unknown | undefined;
}
export interface Cargo {
  type: 'cargo';
  cargo: {
    name: string;
    version: string;
    /**
     * SPDX license expression(s) declared by the package author.
     */
    licenses?: string[];
    /**
     * Structured author/creator identity (SPDX 3.0.1 originatedBy).
     */
    authorsInfo?: ActorInfo[];
    /**
     * Package URL per the purl-spec.
     */
    packageUrl?: string;
    /**
     * Direct download URL for the package binary.
     */
    downloadUrl?: string;
    /**
     * Source code repository URL.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Represents an actor (person, organization, or software agent). At least one of name, email, or url should be populated.
 */
export interface ActorInfo {
  name?: string;
  email?: string;
  url?: string;
  type?: 'Person' | 'Organization' | 'SoftwareAgent';
  [k: string]: unknown | undefined;
}
export interface Git {
  type: 'git';
  git: {
    commitHash: string;
    repositoryUrl: string;
    tag?: string;
    /**
     * SPDX license expression(s) declared by the package author.
     */
    licenses?: string[];
    /**
     * Structured author/creator identity (SPDX 3.0.1 originatedBy).
     */
    authorsInfo?: ActorInfo[];
    /**
     * Package URL per the purl-spec.
     */
    packageUrl?: string;
    /**
     * Direct download URL for the package binary.
     */
    downloadUrl?: string;
    /**
     * Source code repository URL.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface Go {
  type: 'go';
  go: {
    name: string;
    version: string;
    /**
     * SPDX license expression(s) declared by the package author.
     */
    licenses?: string[];
    /**
     * Structured author/creator identity (SPDX 3.0.1 originatedBy).
     */
    authorsInfo?: ActorInfo[];
    /**
     * Package URL per the purl-spec.
     */
    packageUrl?: string;
    /**
     * Direct download URL for the package binary.
     */
    downloadUrl?: string;
    /**
     * Source code repository URL.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface Linux {
  type: 'linux';
  linux: {
    name: string;
    version: string;
    distribution: string;
    release: string;
    'key-URL'?: string;
    'pool-URL'?: string;
    /**
     * SPDX license expression(s) declared by the package author.
     */
    licenses?: string[];
    /**
     * Structured author/creator identity (SPDX 3.0.1 originatedBy).
     */
    authorsInfo?: ActorInfo[];
    /**
     * Package URL per the purl-spec.
     */
    packageUrl?: string;
    /**
     * Direct download URL for the package binary.
     */
    downloadUrl?: string;
    /**
     * Source code repository URL.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface Maven {
  type: 'maven';
  maven: {
    groupId: string;
    artifactId: string;
    version: string;
    /**
     * SPDX license expression(s) declared by the package author.
     */
    licenses?: string[];
    /**
     * Structured author/creator identity (SPDX 3.0.1 originatedBy).
     */
    authorsInfo?: ActorInfo[];
    /**
     * Package URL per the purl-spec.
     */
    packageUrl?: string;
    /**
     * Direct download URL for the package binary.
     */
    downloadUrl?: string;
    /**
     * Source code repository URL.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface Npm {
  type: 'npm';
  npm: {
    name: string;
    version: string;
    /**
     * SPDX license expression(s) declared by the package author.
     */
    licenses?: string[];
    /**
     * Structured author/creator identity (SPDX 3.0.1 originatedBy).
     */
    authorsInfo?: ActorInfo[];
    /**
     * Package URL per the purl-spec.
     */
    packageUrl?: string;
    /**
     * Direct download URL for the package binary.
     */
    downloadUrl?: string;
    /**
     * Source code repository URL.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface NuGet {
  type: 'nuget';
  nuget: {
    name: string;
    version: string;
    /**
     * SPDX license expression(s) declared by the package author.
     */
    licenses?: string[];
    /**
     * Structured author/creator identity (SPDX 3.0.1 originatedBy).
     */
    authorsInfo?: ActorInfo[];
    /**
     * Package URL per the purl-spec.
     */
    packageUrl?: string;
    /**
     * Direct download URL for the package binary.
     */
    downloadUrl?: string;
    /**
     * Source code repository URL.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface Other {
  type: 'other';
  other: Other1;
  [k: string]: unknown | undefined;
}
export interface Other1 {
  name: string;
  version: string;
  downloadUrl: string;
  hash: string;
  /**
   * SPDX license expression(s) declared by the package author.
   */
  licenses?: string[];
  /**
   * Structured author/creator identity (SPDX 3.0.1 originatedBy).
   */
  authorsInfo?: ActorInfo[];
  /**
   * Package URL per the purl-spec.
   */
  packageUrl?: string;
  /**
   * Source code repository URL.
   */
  sourceUrl?: string;
  [k: string]: unknown | undefined;
}
export interface Pip {
  type: 'pip';
  pip: {
    name: string;
    version: string;
    /**
     * SPDX license expression(s) declared by the package author.
     */
    licenses?: string[];
    /**
     * Structured author/creator identity (SPDX 3.0.1 originatedBy).
     */
    authorsInfo?: ActorInfo[];
    /**
     * Package URL per the purl-spec.
     */
    packageUrl?: string;
    /**
     * Direct download URL for the package binary.
     */
    downloadUrl?: string;
    /**
     * Source code repository URL.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface Pod {
  type: 'pod';
  pod: {
    name: string;
    version: string;
    /**
     * SPDX license expression(s) declared by the package author.
     */
    licenses?: string[];
    /**
     * Structured author/creator identity (SPDX 3.0.1 originatedBy).
     */
    authorsInfo?: ActorInfo[];
    /**
     * Package URL per the purl-spec.
     */
    packageUrl?: string;
    /**
     * Direct download URL for the package binary.
     */
    downloadUrl?: string;
    /**
     * Source code repository URL.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface RubyGems {
  type: 'rubygems';
  rubygems: {
    name: string;
    version: string;
    /**
     * SPDX license expression(s) declared by the package author.
     */
    licenses?: string[];
    /**
     * Structured author/creator identity (SPDX 3.0.1 originatedBy).
     */
    authorsInfo?: ActorInfo[];
    /**
     * Package URL per the purl-spec.
     */
    packageUrl?: string;
    /**
     * Direct download URL for the package binary.
     */
    downloadUrl?: string;
    /**
     * Source code repository URL.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface VCPKG {
  type: 'vcpkg';
  vcpkg: {
    spdxId: string;
    name: string;
    version?: string;
    downloadLocation?: string;
    triplet?: string;
    description?: string;
    portVersion?: number;
    /**
     * SPDX license expression(s) declared by the package author.
     */
    licenses?: string[];
    /**
     * Structured author/creator identity (SPDX 3.0.1 originatedBy).
     */
    authorsInfo?: ActorInfo[];
    /**
     * Package URL per the purl-spec.
     */
    packageUrl?: string;
    /**
     * Direct download URL for the package binary.
     */
    downloadUrl?: string;
    /**
     * Source code repository URL.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
