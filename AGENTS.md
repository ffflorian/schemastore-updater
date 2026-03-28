# AGENTS Guide

This file explains how coding agents should work in this repository.

## Mission

Maintain and evolve a TypeScript CLI that:

1. Pulls JSON schemas from SchemaStore (or a local source directory).
2. Converts schemas to TypeScript definitions.
3. Publishes output as one npm package folder per schema under `schemas/`.
4. Tracks generated declaration hashes in `schema-lock.json`.

## Repository Structure

- `src/cli.ts`: CLI entrypoint using Commander.
- `src/updater.ts`: core generation workflow.
- `src/publisher.ts`: npm publishing workflow for generated schema packages.
- `src/hash.ts`: hashing helpers.
- `src/types.ts`: shared TS interfaces.
- `tests/updater.test.ts`: vitest integration tests for generation behavior.
- `tests/publisher.test.ts`: vitest coverage for package publishing behavior.
- `schemas/`: generated per-schema package folders (kept in repo).
- `.cache/schemastore/`: local clone cache of SchemaStore.
- `schema-lock.json`: lock file with per-schema source and generated hashes.
- `publish-errors.log`: per-run publish failure log.
- `.github/workflows/lint_test_build.yml`: main CI for lint/test/build
- `.github/workflows/publish_generated_packages.yml`: publishing workflow for generated npm packages.
- `.github/workflows/yarn_update.yml`: scheduled yarn version maintenance.
- `.github/workflows/weekly_schema_update.yml`: weekly automated schema refresh PR.
- `.github/workflows/force_regenerate_schemas.yml`: manual workflow to force-regenerate all schemas.

## Output Contract (Per Schema)

Each generated schema package must contain:

1. `index.d.ts`
2. `README.md`
3. `package.json`
4. `LICENSE` (copied from repository root `LICENSE`)

`index.d.ts` must begin with:

- `/* eslint-disable */`

## Versioning Rules for Generated Schema Packages

- Read existing version from the generated schema package `package.json`.
- On regeneration, apply a **patch** bump via `semver`.
- If package does not exist or version is invalid, start at `1.0.0`.

## Update Workflow Rules

- Preferred command for real updates: `yarn update`.
- For local smoke tests: `yarn update --source-dir <dir>` where `<dir>` contains `src/schemas/json`.
- To regenerate a single schema: `yarn update --schema <id>` (e.g. `yarn update --schema package`).
  - The `--schema` option always regenerates — it bypasses the hash-based skip check so errors are surfaced even when the source hasn't changed.
  - All other `schema-lock.json` entries are preserved; only the targeted entry is updated.
- To force-regenerate all schemas ignoring source hash matches: `yarn update --force`.
- Schemas that cannot be converted or fail type-check are skipped; errors are written to stderr and to `schemagenerator.log`.
- When a schema fails to build (conversion error or type-check failure), its **previous** `schema-lock.json` entry is preserved unchanged. The lock file must never silently drop entries for schemas that already had a valid generated package.
- Non-publishable schema IDs must be blocklisted and always skipped during generation and publishing.
- Source of truth for the non-publishable blocklist is `schema-blocklist.json`.
- Current non-publishable blocklist includes: `cheatsheets`.
- The repository also runs a weekly GitHub Actions workflow that opens a PR with refreshed generated schema packages.

## GitHub Actions Automation

- Weekly schema refresh is defined in `.github/workflows/weekly_schema_update.yml`.
  - Runs `yarn update`, then validates with `yarn check` and `yarn test`.
  - Changes are proposed via an automated pull request instead of pushing directly to the default branch.
  - If generation behavior changes, make sure this workflow still matches the required validation steps and committed outputs.
- Force regeneration is defined in `.github/workflows/force_regenerate_schemas.yml`.
  - `workflow_dispatch` only — never scheduled.
  - Runs `yarn update --force`, then validates with `yarn check` and `yarn test`.
  - Opens a PR on branch `chore/force-regenerate-schemas` with the result.
  - Use this when the generation pipeline itself changes (e.g. new post-processing steps) and all schemas need to be rebuilt.
- npm publishing is defined in `.github/workflows/publish_generated_packages.yml`.
- Publishing runs only on pushes to the default branch.
- Publishing is additionally gated to commits whose message starts with `chore(schemas): weekly schema update`.
- CI publishing uses `yarn publish:schemas` and should rely on an `NPM_TOKEN` secret.
- `yarn publish:schemas` must skip schema packages whose matching `schema-lock.json` entry already has `published: true`.
- The publish step must continue through per-package failures so successful publishes still update lock state.
- After publish attempts, the workflow opens a pull request with the updated `schema-lock.json` so published flags stay in sync with git history, then marks the job as failed when publish attempts had errors.
- Publish failures should be logged to `publish-errors.log`, but publishing must continue for the remaining packages.

## Tooling and Commands

Use yarn only.

- Install deps: `yarn install`
- Build: `yarn build`
- Type-check: `yarn check`
- Lint: `yarn lint`
- Auto-fix: `yarn fix`
- Tests: `yarn test`
- Test watch: `yarn test:watch`
- Publish generated schema packages: `yarn publish:schemas`
- Dry-run publish: `yarn publish:schemas:dry-run`

## Writing Conventions

- Always use `yarn`, never `npm`, `pnpm`, or other package manager commands.
- Always write `yarn` in lowercase.
- Always write `vite` in lowercase.
- Always write `git` in lowercase.
- When joining only literal path segments, prefer `path.join('a/b/c')` over `path.join('a', 'b', 'c')`.
- Do not use dynamic imports in the middle of functions when the module can be imported at the top of the file.
- Prefer `for (const entry of entries)` loops over `await Promise.all(entries.map(...))` for recursive directory walking in this repository.
- Follow the repository prettier code style.
- Run `yarn fix:other` for formatting changes.

## Testing Expectations for Code Changes

When touching generation logic (`src/updater.ts`), publishing logic (`src/publisher.ts`), or CLI behavior:

1. Update/add tests in `tests/updater.test.ts`.
2. Update/add tests in `tests/publisher.test.ts` when publishing behavior changes.
3. Run `yarn test`.
4. Run `yarn check`.
5. Always run `yarn fix` afterwards to remove linting and formatting issues.
6. Run `yarn lint`.

## Safety and Consistency Guidelines

- Do not manually edit generated files in `schemas/` unless intentionally regenerating.
- Preserve lockfile semantics in `schema-lock.json`.
- Keep Node compatibility at `>=22`.
- Keep code ESM (`"type": "module"`, NodeNext TS settings).
- Keep command behavior idempotent for unchanged schemas.
- Always accept new workspace changes made by the user between requests and adapt to them instead of reverting them.

## Post-Processing Pipeline for Generated Declarations

After `compileFromFile` produces a `.d.ts` string, two post-processing steps run before writing to disk:

1. **`deduplicateGeneratedTypes`** — `json-schema-to-typescript` sometimes emits `TypeName`, `TypeName1` … `TypeNameN` for the same sub-schema used multiple times (see [issue #1402](https://github.com/ffflorian/schemastore-updater/issues/1402)). This function removes the numbered duplicates and replaces all references with the base name.
   - Uses the TypeScript compiler API (`ts.createSourceFile`) to parse type alias declarations and compare their body texts.
   - Only removes `TypeNameN` when `TypeName` already exists with the identical body.

2. **`fixIndexSignatureCompatibility`** — a known upstream bug in `json-schema-to-typescript` ([bcherny/json-schema-to-typescript#235](https://github.com/bcherny/json-schema-to-typescript/issues/235)) omits `| undefined` from typed `additionalProperties` index signatures. Without it, TypeScript reports **TS2411** (`Property 'x' of type 'T | undefined' is not assignable to 'string' index type 'T'`) when a type literal has optional properties.
   - Walks the AST looking for `TypeLiteralNode`s with at least one optional property (`questionToken !== undefined`).
   - For each such literal, finds index signatures whose type text does not already contain `undefined`, and inserts ` | undefined` immediately after the type.
   - Insertions are applied end-to-start to keep earlier offsets valid.

Pipeline order: `fixIndexSignatureCompatibility(deduplicateGeneratedTypes(await compileFromFile(...)))`.

## Type-Checking Generated Declarations

`typeCheckSingleFile` in `src/updater.ts` type-checks each generated `.tmp.d.ts` before it is renamed to the final `index.d.ts`.

Key compiler options:

- `skipDefaultLibCheck: true` — skips only the default lib files, **not** the file under test. Do **not** use `skipLibCheck: true` — that skips all `.d.ts` files and silently passes broken generated declarations.
- No `strict: true` — `strictNullChecks` (part of strict) makes optional properties compatible with non-`undefined` index signatures, which would suppress the TS2411 class of errors that `fixIndexSignatureCompatibility` is designed to catch.

## Common Pitfalls

- Assuming SchemaStore default branch is `main`: avoid hardcoded branch names.
- Forgetting to copy `LICENSE` into each generated schema package.
- Bumping minor/major versions instead of patch.
- Writing README/package templates that break expected format.
- Using `skipLibCheck: true` in `typeCheckSingleFile` — this skips all `.d.ts` files and makes the type check a no-op for the generated file.
- Adding `strict: true` to `typeCheckSingleFile` — `strictNullChecks` suppresses TS2411 errors that the post-processing pipeline is designed to catch.

## If You Add New Features

- Keep the generator deterministic where possible.
- Extend tests before/with implementation.
- Update root `README.md` when behavior or commands change.
- Always update `AGENTS.md` when user feedback adds or changes repository rules.
