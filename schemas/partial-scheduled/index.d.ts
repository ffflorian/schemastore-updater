/* eslint-disable */

/**
 * How often to run the job. For example, `every = "day"` would run the job once per day.
 *
 * ```toml
 * [tool.scheduled.clean-files]
 * every = "day"
 * entrypoint = "app.jobs:clean_files"
 * ```
 *
 * Supported values are:
 *
 * * `minute`
 * * `hour`
 * * `day`
 * * `week`
 * * `month`
 *
 * Providers should run each job at least once per configured cadence and may support only a subset of these values.
 */
export type Every = 'minute' | 'hour' | 'day' | 'week' | 'month';
/**
 * Python callable to run, in the format:
 * ```
 * importable.module:some_callable
 * ```
 *
 * For example, for a scheduled job like:
 *
 * ```python
 * def clean_files():
 *     ...
 * ```
 *
 * in a file at `app/jobs.py`, the config could look like:
 *
 * ```toml
 * [tool.scheduled.clean-files]
 * every = "day"
 * entrypoint = "app.jobs:clean_files"
 * ```
 *
 * This is equivalent to:
 *
 * ```python
 * from importable.module import some_callable
 *
 * some_callable()
 * ```
 *
 * So, `app.jobs:clean_files` is equivalent to:
 *
 * ```python
 * from app.jobs import clean_files
 *
 * clean_files()
 * ```
 */
export type Entrypoint = string;

export interface HttpsJsonSchemastoreOrgPartialScheduledJson {
  [k: string]: ScheduledJob | undefined;
}
/**
 * A recurring scheduled job. The table key under `[tool.scheduled]` is the unique job ID.
 *
 * ```toml
 * [tool.scheduled.<job-id>]
 * every = "<cadence>"
 * entrypoint = "<module>:<function>"
 * ```
 */
export interface ScheduledJob {
  every: Every;
  entrypoint: Entrypoint;
}
