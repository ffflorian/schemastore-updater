# schemastore-updater

This project updates JSON schemas from [SchemaStore](https://github.com/SchemaStore/schemastore), generates TypeScript definitions for them, and prepares a publishable npm package per schema under the `@schemastore` scope.

## Agent Notes

For coding-agent specific workflows, repository conventions, and safety rules, see [AGENTS.md](./AGENTS.md).

## What it does

- Clones/updates `SchemaStore/schemastore` automatically (or uses `--source-dir`).
- Converts JSON schemas with `json-schema-to-typescript`.
- Creates an npm package folder per schema under `schemas/<schema-name>`.
- Generates `index.d.ts`, `README.md`, `package.json`, and `LICENSE` for each schema package.
- Type-checks each generated schema declaration immediately after generation.
- Writes a lock file (`schema-lock.json`) with SHA-256 hashes for generated declaration files.
- Skips schemas that cannot be converted or do not type-check.
- Skips non-publishable schemas listed in `schema-blocklist.json` (manually maintained) during both generation and publishing.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 24
- [yarn](https://yarnpkg.com/)

## Usage

```bash
yarn install
yarn update
```

Options:

- `-f, --force`: regenerate all schemas.
- `--source-dir <dir>`: use an existing local SchemaStore directory.

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

Each package version is submitted with `npm stage publish` rather than published live immediately. A maintainer must separately approve each staged version with 2FA (`npm stage approve`, or via the npmjs.com UI) before it becomes publicly installable. Already-trusted packages authenticate via npm OIDC Trusted Publishing (no npm token involved); an `NPM_TOKEN` secret is used only as a fallback for packages that already exist on npm but have no Trusted Publisher configured yet.

`npm stage publish` cannot create a package for the first time - it fails for any schema that has never been published before, regardless of OIDC or token auth, since npm requires a package to already exist before it can be staged or trusted. To bootstrap a brand-new schema, run `yarn bootstrap:new-packages` **from your own terminal** (not CI). It finds every not-yet-published schema, checks the public registry to tell which ones have genuinely never been published before, logs in once via `npm login --auth-type=web` (printing a browser login URL - open it on any device, a phone works fine, and approve with 2FA/passkey), then runs `npm publish` for each one - no schema IDs to type in. If your account requires 2FA/passkey approval to publish, npm will prompt for it interactively in that same terminal.

This step cannot be automated in CI: npm only resolves a publish-time 2FA challenge interactively (a real terminal), and there's no working way for a second process to complete that challenge on your behalf for WebAuthn/passkey accounts today - not in this project, and not in the wider npm tooling ecosystem (e.g. `changesets/changesets#1773` tracks the same unsolved gap). Once a schema exists on npm this way, configure npm Trusted Publishing for it and this pipeline takes over automatically for future versions.

Schemas listed in `schema-blocklist.json` are always skipped from publishing.

The publish workflow opens a pull request with an updated `schema-lock.json` file after publish attempts so staged/published package versions are tracked in git.

All published schemastore packages are visible under the [@schemastore](https://www.npmjs.com/org/schemastore) npm organization page.

Dry-run mode:

```bash
yarn publish:schemas:dry-run
```

This prints the packages that would be published without sending anything to npm.

## Output

- Per-schema npm packages: `schemas/<schema-name>/`
- Generated declaration per package: `schemas/<schema-name>/index.d.ts`
- Package license per package: `schemas/<schema-name>/LICENSE`
- Lock file: `schema-lock.json`
