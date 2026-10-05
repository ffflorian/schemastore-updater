/* eslint-disable */

/**
 * Dofigen is a Dockerfile generator using a simplified description in YAML or JSON format
 */
export type Dofigen = {
  arg?: HashMapPatchStringString | null;
  bind?: VecDeepPatchParsableStruct_Bind | null;
  builders?: HashMapDeepPatchStringStage | null;
  cache?: VecDeepPatchParsableStruct_Cache | null;
  cmd?: VecPatchString | null;
  context?: VecPatchString | null;
  copy?: VecDeepPatchParsableStruct_CopyResourcePatch | null;
  entrypoint?: VecPatchString | null;
  env?: HashMapPatchStringString | null;
  expose?: VecDeepPatchParsableStruct_Port | null;
  extend?: OneOrManyResource;
  globalArg?: HashMapPatchStringString | null;
  healthcheck?: Healthcheck | null;
  ignore?: VecPatchString | null;
  label?: NestedMap | null;
  network?: Network | null;
  root?: Run | null;
  run?: VecPatchString | null;
  secret?: VecDeepPatchSecret | null;
  security?: Security | null;
  shell?: VecPatchString | null;
  ssh?: VecDeepPatchSsh | null;
  tmpfs?: VecDeepPatchParsableStruct_TmpFs | null;
  user?: ParsableStructUser | null;
  volume?: VecPatchString | null;
  workdir?: string | null;
  [k: string]: unknown | undefined;
};
export type VecDeepPatchParsableStruct_Bind =
  | ParsableStructBind
  | ParsableStructBind[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+\d+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\d+\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "_".
       */
      [k: string]: ParsableStructBind[] | ParsableStructBind | undefined;
    };
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+<$".
 */
export type ParsableStructBind = Bind | string;
export type Bind = Bind2;
export type Stage = Stage2;
export type VecDeepPatchParsableStruct_Cache =
  | ParsableStructCache
  | ParsableStructCache[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+\d+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\d+\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "_".
       */
      [k: string]: ParsableStructCache[] | ParsableStructCache | undefined;
    };
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+<$".
 */
export type ParsableStructCache = Cache | string;
export type Cache = Cache2;
/**
 * Represents a cache sharing strategy
 */
export type CacheSharing = 'shared' | 'private' | 'locked';
export type VecDeepPatchParsableStruct_CopyResourcePatch =
  | ParsableStructCopyResourcePatch
  | ParsableStructCopyResourcePatch[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+\d+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\d+\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "_".
       */
      [k: string]: ParsableStructCopyResourcePatch[] | ParsableStructCopyResourcePatch | undefined;
    };
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+<$".
 */
export type ParsableStructCopyResourcePatch = CopyResourcePatch | string;
export type CopyResourcePatch = Copy | CopyContent | AddGitRepo | Add | CopyOptions;
export type Copy = Copy2;
export type VecPatchString =
  | string
  | string[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+\d+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\d+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\d+\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "_".
       */
      [k: string]: string[] | string | undefined;
    };
export type VecPatchResource =
  | Resource
  | Resource[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+\d+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\d+\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "_".
       */
      [k: string]: Resource[] | Resource | undefined;
    };
/**
 * Represents a resource
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+$".
 */
export type Resource = string;
export type NestedMapValue = string | NestedMap | null;
/**
 * Represents a network configuration
 */
export type Network = 'default' | 'none' | 'host';
export type VecDeepPatchSecret =
  | Secret
  | Secret[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+\d+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\d+\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "_".
       */
      [k: string]: Secret[] | Secret | undefined;
    };
/**
 * Represents a security mode
 */
export type Security = 'sandbox' | 'insecure';
export type VecDeepPatchSsh =
  | Ssh
  | Ssh[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+\d+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\d+\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "_".
       */
      [k: string]: Ssh[] | Ssh | undefined;
    };
export type VecDeepPatchParsableStruct_TmpFs =
  | ParsableStructTmpFs
  | ParsableStructTmpFs[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+\d+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\d+\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "_".
       */
      [k: string]: ParsableStructTmpFs[] | ParsableStructTmpFs | undefined;
    };
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+<$".
 */
export type ParsableStructTmpFs = TmpFs | string;
export type ParsableStructUser = User | string;
export type VecDeepPatchParsableStruct_Port =
  | ParsableStructPort
  | ParsableStructPort[]
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\+\d+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\d+\+$".
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "_".
       */
      [k: string]: ParsableStructPort[] | ParsableStructPort | undefined;
    };
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+<$".
 */
export type ParsableStructPort = Port | string;
/**
 * Represents a port protocol
 */
export type PortProtocol = 'tcp' | 'udp';
export type OneOrManyResource = Resource | Resource[];

export interface HashMapPatchStringString {
  /**
   * This interface was referenced by `HashMapPatchStringString`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | null | undefined;
}
export interface Bind2 {
  readwrite?: boolean | null;
  source?: string | null;
  target?: string | null;
  [k: string]: unknown | undefined;
}
export interface HashMapDeepPatchStringStage {
  /**
   * This interface was referenced by `HashMapDeepPatchStringStage`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: Stage | null | undefined;
}
export interface Stage2 {
  arg?: HashMapPatchStringString | null;
  bind?: VecDeepPatchParsableStruct_Bind | null;
  cache?: VecDeepPatchParsableStruct_Cache | null;
  copy?: VecDeepPatchParsableStruct_CopyResourcePatch | null;
  env?: HashMapPatchStringString | null;
  label?: NestedMap | null;
  network?: Network | null;
  root?: Run | null;
  run?: VecPatchString | null;
  secret?: VecDeepPatchSecret | null;
  security?: Security | null;
  shell?: VecPatchString | null;
  ssh?: VecDeepPatchSsh | null;
  tmpfs?: VecDeepPatchParsableStruct_TmpFs | null;
  user?: ParsableStructUser | null;
  workdir?: string | null;
  [k: string]: unknown | undefined;
}
export interface Cache2 {
  chmod?: string | number | null;
  chown?: User | null;
  id?: string | null;
  readonly?: boolean | null;
  sharing?: CacheSharing | null;
  source?: string | null;
  target?: string | null;
  [k: string]: unknown | undefined;
}
export interface User {
  group?: string | null;
  user?: string | null;
}
export interface Copy2 {
  chmod?: string | number | null;
  chown?: User | null;
  exclude?: VecPatchString | null;
  fromBuilder?: unknown;
  fromContext?: unknown;
  fromImage?: unknown;
  link?: boolean | null;
  parents?: boolean | null;
  paths?: VecPatchString | null;
  target?: string | null;
}
export interface CopyContent {
  chmod?: string | number | null;
  chown?: User | null;
  content?: string | null;
  link?: boolean | null;
  substitute?: boolean | null;
  target?: string | null;
}
export interface AddGitRepo {
  checksum?: string | null;
  chmod?: string | number | null;
  chown?: User | null;
  exclude?: VecPatchString | null;
  keepGitDir?: boolean | null;
  link?: boolean | null;
  repo?: string | null;
  target?: string | null;
}
export interface Add {
  checksum?: string | null;
  chmod?: string | number | null;
  chown?: User | null;
  files?: VecPatchResource | null;
  link?: boolean | null;
  target?: string | null;
  unpack?: boolean | null;
}
export interface CopyOptions {
  chmod?: string | number | null;
  chown?: User | null;
  exclude?: VecPatchString | null;
  link?: boolean | null;
  target?: string | null;
  [k: string]: unknown | undefined;
}
/**
 * A multilevel key map
 */
export interface NestedMap {
  [k: string]: NestedMapValue | undefined;
}
export interface Run {
  bind?: VecDeepPatchParsableStruct_Bind | null;
  cache?: VecDeepPatchParsableStruct_Cache | null;
  network?: Network | null;
  run?: VecPatchString | null;
  secret?: VecDeepPatchSecret | null;
  security?: Security | null;
  shell?: VecPatchString | null;
  ssh?: VecDeepPatchSsh | null;
  tmpfs?: VecDeepPatchParsableStruct_TmpFs | null;
  [k: string]: unknown | undefined;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+<$".
 */
export interface Secret {
  env?: string | null;
  gid?: number | null;
  id?: string | null;
  mode?: string | null;
  required?: boolean | null;
  target?: string | null;
  uid?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^\d+<$".
 */
export interface Ssh {
  gid?: number | null;
  id?: string | null;
  mode?: string | null;
  required?: boolean | null;
  target?: string | null;
  uid?: number | null;
  [k: string]: unknown | undefined;
}
export interface TmpFs {
  size?: string | null;
  target?: string | null;
  [k: string]: unknown | undefined;
}
export interface Port {
  port?: number | null;
  protocol?: PortProtocol | null;
}
export interface Healthcheck {
  cmd?: string | null;
  interval?: string | null;
  retries?: number | null;
  start?: string | null;
  timeout?: string | null;
}
