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
- `.github/workflows/lint_test_build.yml`: main CI for lint/test/build.
- `.github/workflows/publish_generated_packages.yml`: publishing workflow for generated npm packages.
- `.github/workflows/yarn_update.yml`: scheduled yarn version maintenance.
- `.github/workflows/weekly_schema_update.yml`: weekly automated schema refresh PR.

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
- Schemas that cannot be converted or fail type-check are skipped.
- Do not introduce blocklist/ignore-list behavior for failed schemas.
- The repository also runs a weekly GitHub Actions workflow that opens a PR with refreshed generated schema packages.

## GitHub Actions Automation

- Weekly schema refresh is defined in `.github/workflows/weekly_schema_update.yml`.
- It runs `yarn update`, then validates with `yarn check` and `yarn test`.
- Changes are proposed via an automated pull request instead of pushing directly to the default branch.
- If generation behavior changes, make sure this workflow still matches the required validation steps and committed outputs.
- npm publishing is defined in `.github/workflows/publish_generated_packages.yml`.
- Publishing runs only on pushes to the default branch.
- Publishing is additionally gated to commits whose message is exactly `chore(schemas): weekly schema update`.
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
- Prefer `try/catch` over Promise `.catch(...)` chains in repository TypeScript code.
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
5. Run `yarn lint` (or `yarn fix` then `yarn lint`).

## Safety and Consistency Guidelines

- Do not manually edit generated files in `schemas/` unless intentionally regenerating.
- Preserve lockfile semantics in `schema-lock.json`.
- Keep Node compatibility at `>=22`.
- Keep code ESM (`"type": "module"`, NodeNext TS settings).
- Keep command behavior idempotent for unchanged schemas.
- Always accept new workspace changes made by the user between requests and adapt to them instead of reverting them.

## Common Pitfalls

- Assuming SchemaStore default branch is `main`: avoid hardcoded branch names.
- Forgetting to copy `LICENSE` into each generated schema package.
- Bumping minor/major versions instead of patch.
- Writing README/package templates that break expected format.

## If You Add New Features

- Keep the generator deterministic where possible.
- Extend tests before/with implementation.
- Update root `README.md` when behavior or commands change.
- Always update `AGENTS.md` when user feedback adds or changes repository rules.
