/* eslint-disable */

/**
 * Import string entrypoint for the **FastAPI** application, in the format:
 * ```
 * importable.module:attribute
 * ```
 *
 * For example, for an app like:
 *
 *  ```python
 * from fastapi import FastAPI
 *
 * app = FastAPI()
 * ```
 *
 * in a file at `backend/main.py`
 *  the config could look like:
 *
 * ```toml
 * [tool.fastapi]
 * entrypoint = "backend.main:app"
 * ```
 *
 * Docs: https://fastapi.tiangolo.com/fastapi-cli/
 */
export type ApplicationEntrypoint = string;

export interface HttpsJsonSchemastoreOrgPartialFastapiJson {
  entrypoint?: ApplicationEntrypoint;
}
