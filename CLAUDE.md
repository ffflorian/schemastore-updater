# CLAUDE.md

## Package manager

Always use `yarn`, never `npm`. See `AGENTS.md` for full repository rules.

## Common commands

- `yarn test` — run tests (vitest)
- `yarn build` — compile TypeScript
- `yarn check` — type-check without emitting
- `yarn lint` — lint all files
- `yarn fix` — auto-fix lint and formatting issues
- `yarn update` — fetch SchemaStore and regenerate all schemas
- `yarn publish:schemas:dry-run` — dry-run publish

## After making changes

Always run in order: `yarn fix`, `yarn check`, `yarn test`, `yarn lint`.

## Publishing

Never run `yarn publish:schemas` (without `--dry-run`) directly. The CI pipeline handles actual publishing.

## Keeping docs in sync

After gaining new knowledge about how this repo works, update both `CLAUDE.md` and `AGENTS.md`.
