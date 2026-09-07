/* eslint-disable */

export type VolumeRestricted = VolumeCommon & {
  path?: string;
  /**
   * Whether or not BPM should share the mount (internal mountpoints are visible in all namespaces).
   */
  shared?: boolean & string;
  [k: string]: unknown | undefined;
};
/**
 * An unrestricted list of additional volumes to mount inside this process.
 */
export type VolumeUnrestricted = VolumeCommon & {
  path?: string;
  [k: string]: unknown | undefined;
};

export interface HttpsJsonSchemastoreOrgBoshJobBpmConfigJson {
  /**
   * A top-level listing of all of the processes in your job.
   */
  processes?: Process[];
  [k: string]: unknown | undefined;
}
export interface Process {
  /**
   * The name of this process.
   */
  name: string;
  /**
   * The path to the executable file for this process.
   */
  executable: string;
  /**
   * The arguments which will be passed to the `executable` of this process.
   */
  args?: (string | number | boolean)[];
  /**
   * Any additional environment variables to be included in the environment of this process.
   */
  env?: {
    [k: string]: string | undefined;
  };
  /**
   * The working directory for this process.
   */
  workdir?: string;
  hooks?: Hooks;
  /**
   * The list of [capabilities](https://man7.org/linux/man-pages/man7/capabilities.7.html) (without `CAP_`) which should be granted to this process.
   */
  capabilities?: string[];
  limits?: Limits;
  /**
   * Whether or not an ephemeral disk should be mounted into the container at `/var/vcap/data/<job>`.
   */
  ephemeral_disk?: boolean;
  /**
   * Whether or not an persistent disk should be mounted into the container at `/var/vcap/store/<job>`.
   */
  persistent_disk?: boolean;
  /**
   * A list of additional volumes to mount inside this process. The paths which can be used are restricted.
   */
  additional_volumes?: VolumeRestricted[];
  unsafe?: Unsafe;
  /**
   * The first signal to send to the process when trying to shut it down.
   */
  shutdown_signal?: 'TERM' | 'INT';
  [k: string]: unknown | undefined;
}
/**
 * The hook configuration for this process.
 */
export interface Hooks {
  /**
   * The startup hook must finish with time to spare before the `monit start` timeout (default: 30s)
   */
  pre_start?: string;
  [k: string]: unknown | undefined;
}
export interface Limits {
  /**
   * The memory limit to apply to this process.
   */
  memory?: string;
  /**
   * The number of files this process is allowed to have open at any one time.
   */
  open_files?: number;
  /**
   * The number of processes which this process is allowed to have running at any one moment (inclusive of the main process).
   */
  processes?: number;
  /**
   * The maximum size (in bytes) of a core dump file. Set to enable core dump generation for post-mortem debugging.
   */
  core_file_size?: number;
  [k: string]: unknown | undefined;
}
export interface VolumeCommon {
  /**
   * Whether or not this volume is writable by the process.
   */
  writable?: boolean;
  /**
   * Whether or not executable files can be executed from this volume.
   */
  allow_executions?: boolean;
  /**
   * Whether or not BPM should just mount this directory rather than creating (if it doesn't exist) and chowning a backing directory too.
   */
  mount_only?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The unsafe configuration for this process.
 */
export interface Unsafe {
  /**
   * Whether or not this process should execute with increased privileges.
   * This removes some the safeguards which surround a BPM process:
   * - Runs as user `root` and group `root`
   * - Grants a larger list of privileges (taken from Docker's privileged list)
   * - Allows new privileges to be gained
   * - Removes seccomp limitations
   * - Removes masked and readonly paths (still applies to volumes and `/var/vcap/{data,store})
   * - All mounts have their `nosuid` option removed
   */
  privileges?: boolean;
  unrestricted_volumes?: VolumeUnrestricted[];
  /**
   * Use the host's PID namespace inside the container.
   */
  host_pid_namespace?: boolean;
  [k: string]: unknown | undefined;
}
