/* eslint-disable */

/**
 * The command to run for this worker, as a string.
 *
 * ```toml
 * [tool.workers.my-background-worker]
 * command = "python -m app.worker"
 * ```
 *
 * The provider runs the command from the directory containing `pyproject.toml`.
 *
 * The command should keep running in the foreground until the worker is stopped.
 *
 * The provider runs the command using a shell compatible with POSIX `sh`. This lets you use environment variables set by the provider:
 *
 * ```toml
 * [tool.workers.my-tasks-worker]
 * command = 'celery -A app.celery worker --concurrency "$WORKER_CONCURRENCY"'
 * ```
 *
 * The shell replaces `$WORKER_CONCURRENCY` with the value of that environment variable. For example, you could set `WORKER_CONCURRENCY` to `4` in your provider's settings.
 */
export type Command = string;

export interface HttpsJsonSchemastoreOrgPartialWorkersJson {
  [k: string]: Worker | undefined;
}
/**
 * A background worker. The table key under `[tool.workers]` is the worker's ID, a name you choose, like `my-tasks-worker` or `reports`. If you want several workers, give each one a different ID.
 *
 * ```toml
 * [tool.workers.<worker-id>]
 * command = "<command to run>"
 * ```
 */
export interface Worker {
  command: Command;
}
