/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * One or more files to watch.
 */
export type Options = Options1 & {
  /**
   * Whether to spawn task runs in a child process.
   */
  spawn?: boolean;
  /**
   * As files are modified this watch task will spawn tasks in child processes.
   */
  interrupt?: boolean;
  /**
   * How long to wait before emitting events in succession for the same filepath and status. For example if your Gruntfile.js file was changed, a 'changed' event will only fire again after the given milliseconds.
   */
  debounceDelay?: number;
  /**
   * The interval is passed to 'fs.watchFile'. Since 'interval' is only used by 'fs.watchFile' and this watcher also uses 'fs.watch'; it is recommended to ignore this option.
   */
  interval?: number;
  /**
   * By default, if Gruntfile.js is being watched, then changes to it will trigger the watch task to restart, and reload the Gruntfile.js changes. When reload is set to true, changes to any of the watched files will trigger the watch task to restart. This is especially useful if your Gruntfile.js is dependent on other files.
   */
  reload?: boolean;
  /**
   * This is only a task level option and cannot be configured per target. By default the watch task will duck punch grunt.fatal and grunt.warn to try and prevent them from exiting the watch process. If you don't want grunt.fatal and grunt.warn to be overridden set the forever option to false.
   */
  forever?: boolean;
  /**
   * This option will trigger the run of each specified task at startup of the watcher.
   */
  atBegin?: boolean;
  /**
   * If enabled a live reload server will be started with the watch task per target. Then after the indicated tasks have run, the live reload server will be triggered with the modified files.
   */
  livereload?: boolean | number;
  /**
   * Ability to set the current working directory.
   */
  cwd?:
    | string
    | {
        [k: string]: unknown;
      };
  /**
   * Option to prevent the livereload if the executed tasks encountered an error. If set to  false , the livereload will only be triggered if all tasks completed successfully.
   */
  livereloadOnError?: boolean;
  [k: string]: unknown;
};
export type Options1 = OptionsWithEvents;
export type OptionsWithEvents =
  | {
      /**
       * Specify the type watch event that trigger the specified task.
       */
      events?: EventType[];
      [k: string]: unknown;
    }
  | {
      events?: EventType;
      [k: string]: unknown;
    };
/**
 * Specify the type watch event that trigger the specified task.
 */
export type EventType = "all" | "changed" | "added" | "deleted";

export interface JSONSchemaForTheGruntWatchTask {
  options?: Options;
  [k: string]: Target;
}
export interface Target {
  /**
   * One or more files to watch.
   */
  files: string[];
  /**
   * One or more tasks to run.
   */
  tasks?: string[];
  options?: Options1;
  [k: string]: unknown;
}
