# schemastore-updater

Fresh TypeScript implementation focused on a repeatable CLI workflow.

## Agent Notes

For coding-agent specific workflows, repository conventions, and safety rules, see [AGENTS.md](./AGENTS.md).

## What it does

- Clones/updates `SchemaStore/schemastore` automatically (or uses `--source-dir`).
- Converts JSON schemas with `json-schema-to-typescript`.
- Creates one npm package folder per schema under `schemas/<schema-name>`.
- Generates `index.d.ts`, `README.md`, `package.json`, and `LICENSE` for each schema package.
- Type-checks each generated schema declaration immediately after generation.
- Writes a lock file (`schema-lock.json`) with SHA-256 hashes for generated declaration files.
- Skips schemas that cannot be converted or do not type-check.

## Prerequisites

- [Node.js](https://nodejs.org/) > 24
- [yarn](https://yarnpkg.com/)

## Usage

```bash
yarn install
yarn build
node dist/cli.js update
```

Options:

- `-f, --force`: regenerate all schemas.
- `--source-dir <dir>`: use an existing local SchemaStore checkout.

## Regular execution

Run this on a schedule (for example CI cron or local cron):

```bash
yarn update
```

## Testing

```bash
yarn test
```

Watch mode:

```bash
yarn test:watch
```

## Publishing

```bash
yarn publish:schemas
```

Publishing attempts every generated schema package under `schemas/`. If one package fails to publish, the remaining packages are still attempted. Publish failures are written to `publish-errors.log`.

All published schemastore packages are visible under the [@schemastore](https://www.npmjs.com/org/schemastore) npm organization page.

Dry-run mode:

```bash
yarn publish:schemas:dry-run
```

This prints the packages that would be published without sending anything to npm.

## GitHub Actions Publishing

The publish job in `.github/workflows/lint_test_build.yml` requires an `NPM_TOKEN` repository secret with permission to publish the generated `@schemastore/*` packages.

## Output

- Per-schema npm packages: `schemas/<schema-name>/`
- Generated declaration per package: `schemas/<schema-name>/index.d.ts`
- Package license per package: `schemas/<schema-name>/LICENSE`
- Lock file: `schema-lock.json`
