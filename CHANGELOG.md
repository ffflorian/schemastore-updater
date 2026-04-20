# [3.3.0](https://github.com/ffflorian/schemastore-updater/compare/v3.2.0...v3.3.0) (2026-04-20)


### Features

* Add details tag to markdown summary ([6e706c2](https://github.com/ffflorian/schemastore-updater/commit/6e706c2312cff132d5dff1237eec8746f52196e1))

# [3.2.0](https://github.com/ffflorian/schemastore-updater/compare/v3.1.0...v3.2.0) (2026-04-13)


### Features

* add detailed context to schema update, force-regenerate, and publish PRs ([#1428](https://github.com/ffflorian/schemastore-updater/issues/1428)) ([bd18c90](https://github.com/ffflorian/schemastore-updater/commit/bd18c90161344bc4fe4938e7c37329d50cf79582))

# [3.1.0](https://github.com/ffflorian/schemastore-updater/compare/v3.0.0...v3.1.0) (2026-03-29)


### Bug Fixes

* Add npm token to npmrc ([5fc3cab](https://github.com/ffflorian/schemastore-updater/commit/5fc3caba1dfc2bdd6e194d5328e824c9f7848db0))
* Add repository URL to generated package.json ([f37a136](https://github.com/ffflorian/schemastore-updater/commit/f37a13626f01c2f54e9aa033f32aa5a016afddda))
* Add workflow_dispatch option to publish_generated_packages ([41a3a1e](https://github.com/ffflorian/schemastore-updater/commit/41a3a1ed7bc12b17f76699432a2ba4a414d4d219))
* **ci:** fix semantic-release token, permissions, and PR guard ([#1412](https://github.com/ffflorian/schemastore-updater/issues/1412)) ([b872995](https://github.com/ffflorian/schemastore-updater/commit/b8729953c2b344c2fea17f6962a0c14a7a0d73b3))
* do not ignore published field ([cad70e6](https://github.com/ffflorian/schemastore-updater/commit/cad70e6f84a7ca29d003e9563427b51639d3f6a6))
* preserve lock entry for schemas that fail to build ([#1408](https://github.com/ffflorian/schemastore-updater/issues/1408)) ([a45405b](https://github.com/ffflorian/schemastore-updater/commit/a45405b6b52dc0cb6ef26f8981494cb05a417ce1))
* Run publish_generated_packages for every schema update ([d807cc9](https://github.com/ffflorian/schemastore-updater/commit/d807cc96bd59021abb201aa7dc03eb3e024cdbd7))
* Skip publishing after 10 failed packages ([5787252](https://github.com/ffflorian/schemastore-updater/commit/57872520250d9c54a38f2e90450dd6e415fa45b6))
* use repository object format in schema package.json files ([#1410](https://github.com/ffflorian/schemastore-updater/issues/1410)) ([999c345](https://github.com/ffflorian/schemastore-updater/commit/999c345e2ddbe91ad443304972535419584e15fd))


### Features

* add --schema option and fix type-check for generated declarations ([#1403](https://github.com/ffflorian/schemastore-updater/issues/1403)) ([6dbf5bb](https://github.com/ffflorian/schemastore-updater/commit/6dbf5bb8396b5c8d7cf1fbacc665b6dbaa05b6fd))
* Add blocklist ([cb43718](https://github.com/ffflorian/schemastore-updater/commit/cb4371896f9ca9faed84cc346a91ebb6e5354f9c))
* Add OIDC publishing ([6ce0176](https://github.com/ffflorian/schemastore-updater/commit/6ce0176171692950e9ba311f003723d74a516ee1))
* Add update log to schema update PRs ([d2832c9](https://github.com/ffflorian/schemastore-updater/commit/d2832c91993b64d4d8300178540264995c812a8e))
* add workflow to force regenerate all schemas ([#1405](https://github.com/ffflorian/schemastore-updater/issues/1405)) ([7ddae68](https://github.com/ffflorian/schemastore-updater/commit/7ddae68c912e91f7bd30ee8e2f20e4d5576cc17d))
* deduplicate generated types and fix index signature compatibility ([#1404](https://github.com/ffflorian/schemastore-updater/issues/1404)) ([a92f8d9](https://github.com/ffflorian/schemastore-updater/commit/a92f8d99b365e4aafb042afba934c339ca688ffc)), closes [#235](https://github.com/ffflorian/schemastore-updater/issues/235)
* Move publish_generated_packages to its own job ([8b78f88](https://github.com/ffflorian/schemastore-updater/commit/8b78f885009def9936709dd736daf7158062f9de))
* Skip published schemas ([7916c05](https://github.com/ffflorian/schemastore-updater/commit/7916c05f83c76b7daee656ed304a3ffe41c9e68b))
