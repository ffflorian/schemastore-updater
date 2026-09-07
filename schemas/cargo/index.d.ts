/* eslint-disable */

/**
 * Cargo bakes in the concept of [Semantic Versioning](https://semver.org/), so make sure you follow some basic rules:
 *
 * * Before you reach 1.0.0, anything goes, but if you make breaking changes,
 *     increment the minor version. In Rust, breaking changes include adding fields to
 *     structs or variants to enums.
 * * After 1.0.0, only make breaking changes when you increment the major version.
 *     Don't break the build.
 * * After 1.0.0, don't add any new public API (no new `pub` anything) in patch-level
 *     versions. Always increment the minor version if you add any new `pub` structs,
 *     traits, fields, types, functions, methods or anything else.
 * * Use version numbers with three numeric parts such as 1.0.0 rather than 1.0.
 */
export type SemanticVersion = SemanticVersion1 | WorkspaceInheritance;
/**
 * Cargo bakes in the concept of [Semantic Versioning](https://semver.org/), so make sure you follow some basic rules:
 *
 * * Before you reach 1.0.0, anything goes, but if you make breaking changes,
 *     increment the minor version. In Rust, breaking changes include adding fields to
 *     structs or variants to enums.
 * * After 1.0.0, only make breaking changes when you increment the major version.
 *     Don't break the build.
 * * After 1.0.0, don't add any new public API (no new `pub` anything) in patch-level
 *     versions. Always increment the minor version if you add any new `pub` structs,
 *     traits, fields, types, functions, methods or anything else.
 * * Use version numbers with three numeric parts such as 1.0.0 rather than 1.0.
 */
export type SemanticVersion1 = string;
/**
 * The `workspace` field allow keys to be inherited by defining them in the member package with `{key}.workspace = true`
 */
export type Workspace = true;
/**
 * The `authors` field lists people or organizations that are considered the
 * "authors" of the package. The exact meaning is open to interpretation — it may
 * list the original or primary authors, current maintainers, or owners of the
 * package. These names will be listed on the crate's page on
 * [crates.io](https://crates.io). An optional email address may be included within angled
 * brackets at the end of each author.
 *
 * > **Note**: This field is deprecated.
 */
export type Authors = Authors1 | WorkspaceInheritance;
/**
 * The optional `authors` field lists in an array the people or organizations that are considered
 * the "authors" of the package. An optional email address may be included within angled brackets at
 * the end of each author entry.
 *
 * ```toml
 * [package]
 * # ...
 * authors = ["Graydon Hoare", "Fnu Lnu <no-reply@rust-lang.org>"]
 * ```
 *
 * This field is surfaced in package metadata and in the `CARGO_PKG_AUTHORS`
 * environment variable within `build.rs` for backwards compatibility.
 *
 * Items: The optional `authors` field lists in an array the people or organizations that are considered
 * the "authors" of the package. An optional email address may be included within angled brackets at
 * the end of each author entry.
 *
 * ```toml
 * [package]
 * # ...
 * authors = ["Graydon Hoare", "Fnu Lnu <no-reply@rust-lang.org>"]
 * ```
 *
 * This field is surfaced in package metadata and in the `CARGO_PKG_AUTHORS`
 * environment variable within `build.rs` for backwards compatibility.
 */
export type Authors1 = string[];
/**
 * The `edition` key affects which edition your package is compiled with. Cargo
 * will always generate packages via [`cargo new`](https://doc.rust-lang.org/cargo/commands/cargo-new.html) with the `edition` key set to the
 * latest edition. Setting the `edition` key in `[package]` will affect all
 * targets/crates in the package, including test suites, benchmarks, binaries,
 * examples, etc.
 */
export type Edition = Edition1 | WorkspaceInheritance;
/**
 * The `edition` key affects which edition your package is compiled with. Cargo
 * will always generate packages via [`cargo new`](https://doc.rust-lang.org/cargo/commands/cargo-new.html) with the `edition` key set to the
 * latest edition. Setting the `edition` key in `[package]` will affect all
 * targets/crates in the package, including test suites, benchmarks, binaries,
 * examples, etc.
 */
export type Edition1 = '2015' | '2018' | '2021' | '2024';
/**
 * The `rust-version` field is an optional key that tells cargo what version of the
 * Rust language and compiler your package can be compiled with. If the currently
 * selected version of the Rust compiler is older than the stated version, cargo
 * will exit with an error, telling the user what version is required.
 *
 * The first version of Cargo that supports this field was released with Rust 1.56.0.
 * In older releases, the field will be ignored, and Cargo will display a warning.
 *
 * ```toml
 * [package]
 * # ...
 * rust-version = "1.56"
 * ```
 *
 * The Rust version must be a bare version number with two or three components; it
 * cannot include semver operators or pre-release identifiers. Compiler pre-release
 * identifiers such as -nightly will be ignored while checking the Rust version.
 * The `rust-version` must be equal to or newer than the version that first
 * introduced the configured `edition`.
 *
 * The `rust-version` may be ignored using the `--ignore-rust-version` option.
 *
 * Setting the `rust-version` key in `[package]` will affect all targets/crates in
 * the package, including test suites, benchmarks, binaries, examples, etc.
 */
export type RustVersion = RustVersion1 | WorkspaceInheritance;
/**
 * The `rust-version` field is an optional key that tells cargo what version of the
 * Rust language and compiler your package can be compiled with. If the currently
 * selected version of the Rust compiler is older than the stated version, cargo
 * will exit with an error, telling the user what version is required.
 *
 * The first version of Cargo that supports this field was released with Rust 1.56.0.
 * In older releases, the field will be ignored, and Cargo will display a warning.
 *
 * ```toml
 * [package]
 * # ...
 * rust-version = "1.56"
 * ```
 *
 * The Rust version must be a bare version number with two or three components; it
 * cannot include semver operators or pre-release identifiers. Compiler pre-release
 * identifiers such as -nightly will be ignored while checking the Rust version.
 * The `rust-version` must be equal to or newer than the version that first
 * introduced the configured `edition`.
 *
 * The `rust-version` may be ignored using the `--ignore-rust-version` option.
 *
 * Setting the `rust-version` key in `[package]` will affect all targets/crates in
 * the package, including test suites, benchmarks, binaries, examples, etc.
 */
export type RustVersion1 = string;
/**
 * The description is a short blurb about the package. [crates.io](https://crates.io) will display
 * this with your package. This should be plain text (not Markdown).
 *
 * ```toml
 * [package]
 * # ...
 * description = "A short description of my package"
 * ```
 *
 * > **Note**: [crates.io](https://crates.io) requires the `description` to be set.
 */
export type Description = Description1 | WorkspaceInheritance;
/**
 * The description is a short blurb about the package. [crates.io](https://crates.io) will display
 * this with your package. This should be plain text (not Markdown).
 *
 * ```toml
 * [package]
 * # ...
 * description = "A short description of my package"
 * ```
 *
 * > **Note**: [crates.io](https://crates.io) requires the `description` to be set.
 */
export type Description1 = string;
/**
 *
 * The `documentation` field specifies a URL to a website hosting the crate's
 * documentation. If no URL is specified in the manifest file, [crates.io](https://crates.io) will
 * automatically link your crate to the corresponding [docs.rs](https://docs.rs) page.
 *
 * ```toml
 * [package]
 * # ...
 * documentation = "https://docs.rs/bitflags"
 * ```
 *
 */
export type Documentation = Documentation1 | WorkspaceInheritance;
/**
 *
 * The `documentation` field specifies a URL to a website hosting the crate's
 * documentation. If no URL is specified in the manifest file, [crates.io](https://crates.io) will
 * automatically link your crate to the corresponding [docs.rs](https://docs.rs) page.
 *
 * ```toml
 * [package]
 * # ...
 * documentation = "https://docs.rs/bitflags"
 * ```
 *
 */
export type Documentation1 = string;
/**
 * The `readme` field should be the path to a file in the package root (relative
 * to this `Cargo.toml`) that contains general information about the package.
 * This file will be transferred to the registry when you publish. [crates.io](https://crates.io)
 * will interpret it as Markdown and render it on the crate's page.
 *
 * ```toml
 * [package]
 * # ...
 * readme = "README.md"
 * ```
 *
 * If no value is specified for this field, and a file named `README.md`,
 * `README.txt` or `README` exists in the package root, then the name of that
 * file will be used. You can suppress this behavior by setting this field to
 * `false`. If the field is set to `true`, a default value of `README.md` will
 * be assumed.
 *
 */
export type Readme = Readme1 | WorkspaceInheritance;
/**
 * The `readme` field should be the path to a file in the package root (relative
 * to this `Cargo.toml`) that contains general information about the package.
 * This file will be transferred to the registry when you publish. [crates.io](https://crates.io)
 * will interpret it as Markdown and render it on the crate's page.
 *
 * ```toml
 * [package]
 * # ...
 * readme = "README.md"
 * ```
 *
 * If no value is specified for this field, and a file named `README.md`,
 * `README.txt` or `README` exists in the package root, then the name of that
 * file will be used. You can suppress this behavior by setting this field to
 * `false`. If the field is set to `true`, a default value of `README.md` will
 * be assumed.
 *
 */
export type Readme1 = string | boolean;
/**
 * The `homepage` field should be a URL to a site that is the home page for your
 * package.
 *
 * ```toml
 * [package]
 * # ...
 * homepage = "https://serde.rs/"
 * ```
 */
export type Homepage = Homepage1 | WorkspaceInheritance;
/**
 * The `homepage` field should be a URL to a site that is the home page for your
 * package.
 *
 * ```toml
 * [package]
 * # ...
 * homepage = "https://serde.rs/"
 * ```
 */
export type Homepage1 = string;
/**
 * The `repository` field should be a URL to the source repository for your
 * package.
 *
 * ```toml
 * [package]
 * # ...
 * repository = "https://github.com/rust-lang/cargo/"
 * ```
 */
export type Repository = Repository1 | WorkspaceInheritance;
/**
 * The `repository` field should be a URL to the source repository for your
 * package.
 *
 * ```toml
 * [package]
 * # ...
 * repository = "https://github.com/rust-lang/cargo/"
 * ```
 */
export type Repository1 = string;
/**
 * The `license` field contains the name of the software license that the package
 * is released under.
 *
 * [crates.io](https://crates.io/) interprets the `license` field as an [SPDX 2.1 license
 * expression](https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60). The name must be a known license
 * from the [SPDX license list 3.6](https://github.com/spdx/license-list-data/tree/v3.6). Parentheses are not
 * currently supported. See the [SPDX site](https://spdx.org/license-list) for more information.
 *
 * SPDX license expressions support AND and OR operators to combine multiple
 * licenses.
 *
 * ```toml
 * [package]
 * # ...
 * license = "MIT OR Apache-2.0"
 * ```
 *
 * Using `OR` indicates the user may choose either license. Using `AND` indicates
 * the user must comply with both licenses simultaneously. The `WITH` operator
 * indicates a license with a special exception. Some examples:
 *
 * * `MIT OR Apache-2.0`
 * * `LGPL-2.1 AND MIT AND BSD-2-Clause`
 * * `GPL-2.0+ WITH Bison-exception-2.2`
 *
 * If a package is using a nonstandard license, then the `license-file` field may
 * be specified in lieu of the `license` field.
 */
export type License = License1 | WorkspaceInheritance;
/**
 * The `license` field contains the name of the software license that the package
 * is released under.
 *
 * [crates.io](https://crates.io/) interprets the `license` field as an [SPDX 2.1 license
 * expression](https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60). The name must be a known license
 * from the [SPDX license list 3.6](https://github.com/spdx/license-list-data/tree/v3.6). Parentheses are not
 * currently supported. See the [SPDX site](https://spdx.org/license-list) for more information.
 *
 * SPDX license expressions support AND and OR operators to combine multiple
 * licenses.
 *
 * ```toml
 * [package]
 * # ...
 * license = "MIT OR Apache-2.0"
 * ```
 *
 * Using `OR` indicates the user may choose either license. Using `AND` indicates
 * the user must comply with both licenses simultaneously. The `WITH` operator
 * indicates a license with a special exception. Some examples:
 *
 * * `MIT OR Apache-2.0`
 * * `LGPL-2.1 AND MIT AND BSD-2-Clause`
 * * `GPL-2.0+ WITH Bison-exception-2.2`
 *
 * If a package is using a nonstandard license, then the `license-file` field may
 * be specified in lieu of the `license` field.
 */
export type License1 = string;
/**
 * The `license-file` field contains the path to a file
 * containing the text of the license (relative to this `Cargo.toml`).
 *
 * ```toml
 * [package]
 * # ...
 * license-file = "LICENSE.txt"
 * ```
 *
 * > **Note**: [crates.io](https://crates.io) requires either `license` or `license-file` to be set.
 */
export type LicenseFile = LicenseFile1 | WorkspaceInheritance;
/**
 * The `license-file` field contains the path to a file
 * containing the text of the license (relative to this `Cargo.toml`).
 *
 * ```toml
 * [package]
 * # ...
 * license-file = "LICENSE.txt"
 * ```
 *
 * > **Note**: [crates.io](https://crates.io) requires either `license` or `license-file` to be set.
 */
export type LicenseFile1 = string;
/**
 * The `keywords` field is an array of strings that describe this package. This
 * can help when searching for the package on a registry, and you may choose any
 * words that would help someone find this crate.
 *
 * ```toml
 * [package]
 * # ...
 * keywords = ["gamedev", "graphics"]
 * ```
 *
 * > **Note**: [crates.io](https://crates.io) has a maximum of 5 keywords. Each keyword must be
 * > ASCII text, start with a letter, and only contain letters, numbers, `_` or
 * > `-`, and have at most 20 characters.
 */
export type Keywords = Keywords1 | WorkspaceInheritance;
/**
 * The `keywords` field is an array of strings that describe this package. This
 * can help when searching for the package on a registry, and you may choose any
 * words that would help someone find this crate.
 *
 * ```toml
 * [package]
 * # ...
 * keywords = ["gamedev", "graphics"]
 * ```
 *
 * > **Note**: [crates.io](https://crates.io) has a maximum of 5 keywords. Each keyword must be
 * > ASCII text, start with a letter, and only contain letters, numbers, `_` or
 * > `-`, and have at most 20 characters.
 *
 * Items: The `keywords` field is an array of strings that describe this package. This
 * can help when searching for the package on a registry, and you may choose any
 * words that would help someone find this crate.
 *
 * ```toml
 * [package]
 * # ...
 * keywords = ["gamedev", "graphics"]
 * ```
 *
 * > **Note**: [crates.io](https://crates.io) has a maximum of 5 keywords. Each keyword must be
 * > ASCII text, start with a letter, and only contain letters, numbers, `_` or
 * > `-`, and have at most 20 characters.
 */
export type Keywords1 = string[];
/**
 * The `categories` field is an array of strings of the categories this package
 * belongs to.
 *
 * ```toml
 * categories = ["command-line-utilities", "development-tools::cargo-plugins"]
 * ```
 *
 * > **Note**: [crates.io](https://crates.io) has a maximum of 5 categories. Each category should
 * > match one of the strings available at https://crates.io/category_slugs, and
 * > must match exactly.
 */
export type Categories = Categories1 | WorkspaceInheritance;
/**
 * The `categories` field is an array of strings of the categories this package
 * belongs to.
 *
 * ```toml
 * categories = ["command-line-utilities", "development-tools::cargo-plugins"]
 * ```
 *
 * > **Note**: [crates.io](https://crates.io) has a maximum of 5 categories. Each category should
 * > match one of the strings available at https://crates.io/category_slugs, and
 * > must match exactly.
 *
 * Items: The `categories` field is an array of strings of the categories this package
 * belongs to.
 *
 * ```toml
 * categories = ["command-line-utilities", "development-tools::cargo-plugins"]
 * ```
 *
 * > **Note**: [crates.io](https://crates.io) has a maximum of 5 categories. Each category should
 * > match one of the strings available at https://crates.io/category_slugs, and
 * > must match exactly.
 */
export type Categories1 = string[];
/**
 * The `build` field specifies a file in the package root which is a [build script](https://doc.rust-lang.org/cargo/reference/build-scripts.html) for building native code. More information can be found in the [build script guide](https://doc.rust-lang.org/cargo/reference/build-scripts.html).
 *
 *
 * ```toml
 * [package]
 * # ...
 * build = "build.rs"
 * ```
 *
 * The default is `"build.rs"`, which loads the script from a file named
 * `build.rs` in the root of the package. Use `build = "custom_build_name.rs"` to
 * specify a path to a different file or `build = false` to disable automatic
 * detection of the build script.
 *
 */
export type Build = string | boolean;
/**
 * You can explicitly specify that a set of file patterns should be ignored or
 * included for the purposes of packaging. The patterns specified in the
 * `exclude` field identify a set of files that are not included, and the
 * patterns in `include` specify files that are explicitly included.
 *
 * The patterns should be [gitignore](https://git-scm.com/docs/gitignore)-style patterns. Briefly:
 *
 * - `foo` matches any file or directory with the name `foo` anywhere in the
 *   package. This is equivalent to the pattern `** /foo`.
 * - `/foo` matches any file or directory with the name `foo` only in the root of
 *   the package.
 * - `foo/` matches any *directory* with the name `foo` anywhere in the package.
 * - Common glob patterns like `*`, `?`, and `[]` are supported:
 *   - `*` matches zero or more characters except `/`.  For example, `*.html`
 *     matches any file or directory with the `.html` extension anywhere in the
 *     package.
 *   - `?` matches any character except `/`. For example, `foo?` matches `food`,
 *     but not `foo`.
 *   - `[]` allows for matching a range of characters. For example, `[ab]`
 *     matches either `a` or `b`. `[a-z]` matches letters a through z.
 * - `** /` prefix matches in any directory. For example, `** /foo/bar` matches the
 *   file or directory `bar` anywhere that is directly under directory `foo`.
 * - `/**` suffix matches everything inside. For example, `foo/**` matches all
 *   files inside directory `foo`, including all files in subdirectories below
 *   `foo`.
 * - `/** /` matches zero or more directories. For example, `a/** /b` matches
 *   `a/b`, `a/x/b`, `a/x/y/b`, and so on.
 * - `!` prefix negates a pattern. For example, a pattern of `src/**.rs` and
 *   `!foo.rs` would match all files with the `.rs` extension inside the `src`
 *   directory, except for any file named `foo.rs`.
 *
 * If git is being used for a package, the `exclude` field will be seeded with
 * the `gitignore` settings from the repository.
 *
 * ```toml
 * [package]
 * # ...
 * exclude = ["build/** /*.o", "doc/** /*.html"]
 * ```
 *
 * ```toml
 * [package]
 * # ...
 * include = ["src/** /*", "Cargo.toml"]
 * ```
 *
 * The options are mutually exclusive: setting `include` will override an
 * `exclude`. Note that `include` must be an exhaustive list of files as otherwise
 * necessary source files may not be included. The package's `Cargo.toml` is
 * automatically included.
 *
 * The include/exclude list is also used for change tracking in some situations.
 * For targets built with `rustdoc`, it is used to determine the list of files to
 * track to determine if the target should be rebuilt. If the package has a
 * [build script](https://doc.rust-lang.org/cargo/reference/build-scripts.html) that does not emit any `rerun-if-*` directives, then the
 * include/exclude list is used for tracking if the build script should be re-run
 * if any of those files change.
 */
export type Exclude = Exclude1 | WorkspaceInheritance;
/**
 * You can explicitly specify that a set of file patterns should be ignored or
 * included for the purposes of packaging. The patterns specified in the
 * `exclude` field identify a set of files that are not included, and the
 * patterns in `include` specify files that are explicitly included.
 *
 * The patterns should be [gitignore](https://git-scm.com/docs/gitignore)-style patterns. Briefly:
 *
 * - `foo` matches any file or directory with the name `foo` anywhere in the
 *   package. This is equivalent to the pattern `** /foo`.
 * - `/foo` matches any file or directory with the name `foo` only in the root of
 *   the package.
 * - `foo/` matches any *directory* with the name `foo` anywhere in the package.
 * - Common glob patterns like `*`, `?`, and `[]` are supported:
 *   - `*` matches zero or more characters except `/`.  For example, `*.html`
 *     matches any file or directory with the `.html` extension anywhere in the
 *     package.
 *   - `?` matches any character except `/`. For example, `foo?` matches `food`,
 *     but not `foo`.
 *   - `[]` allows for matching a range of characters. For example, `[ab]`
 *     matches either `a` or `b`. `[a-z]` matches letters a through z.
 * - `** /` prefix matches in any directory. For example, `** /foo/bar` matches the
 *   file or directory `bar` anywhere that is directly under directory `foo`.
 * - `/**` suffix matches everything inside. For example, `foo/**` matches all
 *   files inside directory `foo`, including all files in subdirectories below
 *   `foo`.
 * - `/** /` matches zero or more directories. For example, `a/** /b` matches
 *   `a/b`, `a/x/b`, `a/x/y/b`, and so on.
 * - `!` prefix negates a pattern. For example, a pattern of `src/**.rs` and
 *   `!foo.rs` would match all files with the `.rs` extension inside the `src`
 *   directory, except for any file named `foo.rs`.
 *
 * If git is being used for a package, the `exclude` field will be seeded with
 * the `gitignore` settings from the repository.
 *
 * ```toml
 * [package]
 * # ...
 * exclude = ["build/** /*.o", "doc/** /*.html"]
 * ```
 *
 * ```toml
 * [package]
 * # ...
 * include = ["src/** /*", "Cargo.toml"]
 * ```
 *
 * The options are mutually exclusive: setting `include` will override an
 * `exclude`. Note that `include` must be an exhaustive list of files as otherwise
 * necessary source files may not be included. The package's `Cargo.toml` is
 * automatically included.
 *
 * The include/exclude list is also used for change tracking in some situations.
 * For targets built with `rustdoc`, it is used to determine the list of files to
 * track to determine if the target should be rebuilt. If the package has a
 * [build script](https://doc.rust-lang.org/cargo/reference/build-scripts.html) that does not emit any `rerun-if-*` directives, then the
 * include/exclude list is used for tracking if the build script should be re-run
 * if any of those files change.
 *
 * Items: You can explicitly specify that a set of file patterns should be ignored or
 * included for the purposes of packaging. The patterns specified in the
 * `exclude` field identify a set of files that are not included, and the
 * patterns in `include` specify files that are explicitly included.
 *
 * The patterns should be [gitignore](https://git-scm.com/docs/gitignore)-style patterns. Briefly:
 *
 * - `foo` matches any file or directory with the name `foo` anywhere in the
 *   package. This is equivalent to the pattern `** /foo`.
 * - `/foo` matches any file or directory with the name `foo` only in the root of
 *   the package.
 * - `foo/` matches any *directory* with the name `foo` anywhere in the package.
 * - Common glob patterns like `*`, `?`, and `[]` are supported:
 *   - `*` matches zero or more characters except `/`.  For example, `*.html`
 *     matches any file or directory with the `.html` extension anywhere in the
 *     package.
 *   - `?` matches any character except `/`. For example, `foo?` matches `food`,
 *     but not `foo`.
 *   - `[]` allows for matching a range of characters. For example, `[ab]`
 *     matches either `a` or `b`. `[a-z]` matches letters a through z.
 * - `** /` prefix matches in any directory. For example, `** /foo/bar` matches the
 *   file or directory `bar` anywhere that is directly under directory `foo`.
 * - `/**` suffix matches everything inside. For example, `foo/**` matches all
 *   files inside directory `foo`, including all files in subdirectories below
 *   `foo`.
 * - `/** /` matches zero or more directories. For example, `a/** /b` matches
 *   `a/b`, `a/x/b`, `a/x/y/b`, and so on.
 * - `!` prefix negates a pattern. For example, a pattern of `src/**.rs` and
 *   `!foo.rs` would match all files with the `.rs` extension inside the `src`
 *   directory, except for any file named `foo.rs`.
 *
 * If git is being used for a package, the `exclude` field will be seeded with
 * the `gitignore` settings from the repository.
 *
 * ```toml
 * [package]
 * # ...
 * exclude = ["build/** /*.o", "doc/** /*.html"]
 * ```
 *
 * ```toml
 * [package]
 * # ...
 * include = ["src/** /*", "Cargo.toml"]
 * ```
 *
 * The options are mutually exclusive: setting `include` will override an
 * `exclude`. Note that `include` must be an exhaustive list of files as otherwise
 * necessary source files may not be included. The package's `Cargo.toml` is
 * automatically included.
 *
 * The include/exclude list is also used for change tracking in some situations.
 * For targets built with `rustdoc`, it is used to determine the list of files to
 * track to determine if the target should be rebuilt. If the package has a
 * [build script](https://doc.rust-lang.org/cargo/reference/build-scripts.html) that does not emit any `rerun-if-*` directives, then the
 * include/exclude list is used for tracking if the build script should be re-run
 * if any of those files change.
 */
export type Exclude1 = string[];
/**
 * You can explicitly specify that a set of file patterns should be ignored or
 * included for the purposes of packaging. The patterns specified in the
 * `exclude` field identify a set of files that are not included, and the
 * patterns in `include` specify files that are explicitly included.
 *
 * The patterns should be [gitignore](https://git-scm.com/docs/gitignore)-style patterns. Briefly:
 *
 * - `foo` matches any file or directory with the name `foo` anywhere in the
 *   package. This is equivalent to the pattern `** /foo`.
 * - `/foo` matches any file or directory with the name `foo` only in the root of
 *   the package.
 * - `foo/` matches any *directory* with the name `foo` anywhere in the package.
 * - Common glob patterns like `*`, `?`, and `[]` are supported:
 *   - `*` matches zero or more characters except `/`.  For example, `*.html`
 *     matches any file or directory with the `.html` extension anywhere in the
 *     package.
 *   - `?` matches any character except `/`. For example, `foo?` matches `food`,
 *     but not `foo`.
 *   - `[]` allows for matching a range of characters. For example, `[ab]`
 *     matches either `a` or `b`. `[a-z]` matches letters a through z.
 * - `** /` prefix matches in any directory. For example, `** /foo/bar` matches the
 *   file or directory `bar` anywhere that is directly under directory `foo`.
 * - `/**` suffix matches everything inside. For example, `foo/**` matches all
 *   files inside directory `foo`, including all files in subdirectories below
 *   `foo`.
 * - `/** /` matches zero or more directories. For example, `a/** /b` matches
 *   `a/b`, `a/x/b`, `a/x/y/b`, and so on.
 * - `!` prefix negates a pattern. For example, a pattern of `src/**.rs` and
 *   `!foo.rs` would match all files with the `.rs` extension inside the `src`
 *   directory, except for any file named `foo.rs`.
 *
 * If git is being used for a package, the `exclude` field will be seeded with
 * the `gitignore` settings from the repository.
 *
 * ```toml
 * [package]
 * # ...
 * exclude = ["build/** /*.o", "doc/** /*.html"]
 * ```
 *
 * ```toml
 * [package]
 * # ...
 * include = ["src/** /*", "Cargo.toml"]
 * ```
 *
 * The options are mutually exclusive: setting `include` will override an
 * `exclude`. Note that `include` must be an exhaustive list of files as otherwise
 * necessary source files may not be included. The package's `Cargo.toml` is
 * automatically included.
 *
 * The include/exclude list is also used for change tracking in some situations.
 * For targets built with `rustdoc`, it is used to determine the list of files to
 * track to determine if the target should be rebuilt. If the package has a
 * [build script](https://doc.rust-lang.org/cargo/reference/build-scripts.html) that does not emit any `rerun-if-*` directives, then the
 * include/exclude list is used for tracking if the build script should be re-run
 * if any of those files change.
 *
 * Items: You can explicitly specify that a set of file patterns should be ignored or
 * included for the purposes of packaging. The patterns specified in the
 * `exclude` field identify a set of files that are not included, and the
 * patterns in `include` specify files that are explicitly included.
 *
 * The patterns should be [gitignore](https://git-scm.com/docs/gitignore)-style patterns. Briefly:
 *
 * - `foo` matches any file or directory with the name `foo` anywhere in the
 *   package. This is equivalent to the pattern `** /foo`.
 * - `/foo` matches any file or directory with the name `foo` only in the root of
 *   the package.
 * - `foo/` matches any *directory* with the name `foo` anywhere in the package.
 * - Common glob patterns like `*`, `?`, and `[]` are supported:
 *   - `*` matches zero or more characters except `/`.  For example, `*.html`
 *     matches any file or directory with the `.html` extension anywhere in the
 *     package.
 *   - `?` matches any character except `/`. For example, `foo?` matches `food`,
 *     but not `foo`.
 *   - `[]` allows for matching a range of characters. For example, `[ab]`
 *     matches either `a` or `b`. `[a-z]` matches letters a through z.
 * - `** /` prefix matches in any directory. For example, `** /foo/bar` matches the
 *   file or directory `bar` anywhere that is directly under directory `foo`.
 * - `/**` suffix matches everything inside. For example, `foo/**` matches all
 *   files inside directory `foo`, including all files in subdirectories below
 *   `foo`.
 * - `/** /` matches zero or more directories. For example, `a/** /b` matches
 *   `a/b`, `a/x/b`, `a/x/y/b`, and so on.
 * - `!` prefix negates a pattern. For example, a pattern of `src/**.rs` and
 *   `!foo.rs` would match all files with the `.rs` extension inside the `src`
 *   directory, except for any file named `foo.rs`.
 *
 * If git is being used for a package, the `exclude` field will be seeded with
 * the `gitignore` settings from the repository.
 *
 * ```toml
 * [package]
 * # ...
 * exclude = ["build/** /*.o", "doc/** /*.html"]
 * ```
 *
 * ```toml
 * [package]
 * # ...
 * include = ["src/** /*", "Cargo.toml"]
 * ```
 *
 * The options are mutually exclusive: setting `include` will override an
 * `exclude`. Note that `include` must be an exhaustive list of files as otherwise
 * necessary source files may not be included. The package's `Cargo.toml` is
 * automatically included.
 *
 * The include/exclude list is also used for change tracking in some situations.
 * For targets built with `rustdoc`, it is used to determine the list of files to
 * track to determine if the target should be rebuilt. If the package has a
 * [build script](https://doc.rust-lang.org/cargo/reference/build-scripts.html) that does not emit any `rerun-if-*` directives, then the
 * include/exclude list is used for tracking if the build script should be re-run
 * if any of those files change.
 */
export type Include = string[];
/**
 * The `publish` field can be used to prevent a package from being published to a package registry (like *crates.io*) by mistake, for instance to keep a package
 * private in a company.
 *
 * ```toml
 * [package]
 * # ...
 * publish = false
 * ```
 *
 * The value may also be an array of strings which are registry names that are
 * allowed to be published to.
 *
 * ```toml
 * [package]
 * # ...
 * publish = ["some-registry-name"]
 * ```
 */
export type Publish = Publish1 | WorkspaceInheritance;
/**
 * The `publish` field can be used to prevent a package from being published to a package registry (like *crates.io*) by mistake, for instance to keep a package
 * private in a company.
 *
 * ```toml
 * [package]
 * # ...
 * publish = false
 * ```
 *
 * The value may also be an array of strings which are registry names that are
 * allowed to be published to.
 *
 * ```toml
 * [package]
 * # ...
 * publish = ["some-registry-name"]
 * ```
 */
export type Publish1 = boolean | string[];
/**
 * Path of files to include. Can be absolute, relative to the crate root, or/and glob.
 *
 * Left hand is where to put files, path in the resulting package.
 *
 * Right hand is a path or pattern to match files to include.
 */
export type Path = string;
/**
 * Include or exclude the file or glob-pattern.
 */
export type Include1 = boolean;
/**
 * List of paths to include.
 */
export type AssetsList = Path[];
/**
 * Command string, fallback array, or platform-specific object
 */
export type CommandValue = (string | CompileRun) | CommandValue[] | ShellFamilySpecific;
/**
 * A different feature resolver algorithm can be used by specifying the resolver version in `Cargo.toml` like this:
 *
 * [package]
 * name = "my-package"
 * version = "1.0.0"
 * resolver = "2"
 *
 * The version "1" resolver is the original resolver that shipped with Cargo up to version 1.50. The default is "2" if the root package specifies edition = "2021" or a newer edition. Otherwise the default is "1".
 *
 * The version "2" resolver introduces changes in feature unification. See the features chapter for more details.
 *
 * The resolver is a global option that affects the entire workspace. The resolver version in dependencies is ignored, only the value in the top-level package will be used. If using a virtual workspace, the version should be specified in the [workspace] table, for example:
 *
 * [workspace]
 * members = ["member1", "member2"]
 * resolver = "2"
 */
export type Resolver = '1' | '2' | '3';
export type MetaBuild = string[];
export type Dependency = SemanticVersionRequirement | DetailedDependency;
/**
 * The [version requirement](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html) of the target dependency.
 */
export type SemanticVersionRequirement = string;
/**
 * The `aarch64_softfloat_neon` lint detects usage of `#[target_feature(enable = "neon")]` on softfloat aarch64 targets. Enabling this target feature causes LLVM to alter the ABI of function calls, making this attribute unsound to use.
 */
export type Aarch64SoftfloatNeon = LintLevel | DetailedLint;
/**
 * Specify the [lint level](https://doc.rust-lang.org/rustc/lints/levels.html) for a lint or lint group.
 */
export type LintLevel = 'forbid' | 'deny' | 'warn' | 'allow';
/**
 * The `absolute_paths_not_starting_with_crate` lint detects fully qualified paths that start with a module name instead of `crate`, `self`, or an extern crate name
 */
export type AbsolutePathsNotStartingWithCrate = LintLevel | DetailedLint;
/**
 * The `ambiguous_associated_items` lint detects ambiguity between associated items and enum variants.
 */
export type AmbiguousAssociatedItems = LintLevel | DetailedLint;
/**
 * The `ambiguous_glob_imports` lint detects glob imports that should report ambiguity errors, but previously didn’t do that due to rustc bugs.
 */
export type AmbiguousGlobImports = LintLevel | DetailedLint;
/**
 * The `ambiguous_glob_reexports` lint detects cases where names re-exported via globs collide. Downstream users trying to use the same name re-exported from multiple globs will receive a warning pointing out redefinition of the same name.
 */
export type AmbiguousGlobReexports = LintLevel | DetailedLint;
/**
 * The `ambiguous_negative_literals` lint checks for cases that are confusing between a negative literal and a negation that’s not part of the literal.
 */
export type AmbiguousNegativeLiterals = LintLevel | DetailedLint;
/**
 * The `ambiguous_wide_pointer_comparisons` lint checks comparison of `*const/*mut ?Sized` as the operands.
 */
export type AmbiguousWidePointerComparisons = LintLevel | DetailedLint;
/**
 * The `anonymous_parameters` lint detects anonymous parameters in trait definitions.
 */
export type AnonymousParameters = LintLevel | DetailedLint;
/**
 * The `arithmetic_overflow` lint detects that an arithmetic operation will overflow.
 */
export type ArithmeticOverflow = LintLevel | DetailedLint;
/**
 * The `array_into_iter` lint detects calling `into_iter` on arrays.
 */
export type ArrayIntoIter = LintLevel | DetailedLint;
/**
 * The `asm_sub_register` lint detects using only a subset of a register for inline asm inputs.
 */
export type AsmSubRegister = LintLevel | DetailedLint;
/**
 * The `async_fn_in_trait` lint detects use of `async fn` in the definition of a publicly-reachable trait.
 */
export type AsyncFnInTrait = LintLevel | DetailedLint;
/**
 * The `bad_asm_style` lint detects the use of the `.intel_syntax` and `.att_syntax` directives.
 */
export type BadAsmStyle = LintLevel | DetailedLint;
/**
 * The `bare_trait_objects` lint suggests using `dyn Trait` for trait objects.
 */
export type BareTraitObjects = LintLevel | DetailedLint;
/**
 * The `binary_asm_labels` lint detects the use of numeric labels containing only binary digits in the inline `asm!` macro.
 */
export type BinaryAsmLabels = LintLevel | DetailedLint;
/**
 * The `bindings_with_variant_name` lint detects pattern bindings with the same name as one of the matched variants.
 */
export type BindingsWithVariantName = LintLevel | DetailedLint;
/**
 * The `boxed_slice_into_iter` lint detects calling `into_iter` on boxed slices.
 */
export type BoxedSliceIntoIter = LintLevel | DetailedLint;
/**
 * The `break_with_label_and_loop` lint detects labeled `break` expressions with an unlabeled loop as their value expression.
 */
export type BreakWithLabelAndLoop = LintLevel | DetailedLint;
/**
 * The `clashing_extern_declarations` lint detects when an `extern fn` has been declared with the same name but different types.
 */
export type ClashingExternDeclarations = LintLevel | DetailedLint;
/**
 * The `closure_returning_async_block` lint detects cases where users write a closure that returns an async block.
 */
export type ClosureReturningAsyncBlock = LintLevel | DetailedLint;
/**
 * The `coherence_leak_check` lint detects conflicting implementations of a trait that are only distinguished by the old leak-check code.
 */
export type CoherenceLeakCheck = LintLevel | DetailedLint;
/**
 * The `conflicting_repr_hints` lint detects `repr` attributes with conflicting hints.
 */
export type ConflictingReprHints = LintLevel | DetailedLint;
/**
 * The `confusable_idents` lint detects visually confusable pairs between identifiers.
 */
export type ConfusableIdents = LintLevel | DetailedLint;
/**
 * The `const_evaluatable_unchecked` lint detects a generic constant used in a type.
 */
export type ConstEvaluatableUnchecked = LintLevel | DetailedLint;
/**
 * The `const_item_interior_mutations` lint checks for calls which mutates an interior mutable const-item.
 */
export type ConstItemInteriorMutations = LintLevel | DetailedLint;
/**
 * The `const_item_mutation` lint detects attempts to mutate a `const` item.
 */
export type ConstItemMutation = LintLevel | DetailedLint;
/**
 * The `dangerous_implicit_autorefs` lint checks for implicitly taken references to dereferences of raw pointers.
 */
export type DangerousImplicitAutorefs = LintLevel | DetailedLint;
/**
 * The `dangling_pointers_from_temporaries` lint detects getting a pointer to data of a temporary that will immediately get dropped.
 */
export type DanglingPointersFromTemporaries = LintLevel | DetailedLint;
/**
 * The `dead_code` lint detects unused, unexported items.
 */
export type DeadCode = LintLevel | DetailedLint;
/**
 * The `default_overrides_default_fields` lint checks for manual `impl` blocks of the `Default` trait of types with default field values.
 */
export type DefaultOverridesDefaultFields = LintLevel | DetailedLint;
/**
 * The `dependency_on_unit_never_type_fallback` lint detects cases where code compiles with never type fallback being `()`, but will stop compiling with fallback being `!`.
 */
export type DependencyOnUnitNeverTypeFallback = LintLevel | DetailedLint;
/**
 * The `deprecated` lint detects use of deprecated items.
 */
export type Deprecated = LintLevel | DetailedLint;
/**
 * detects use of items that will be deprecated in a future version.
 */
export type DeprecatedInFuture = LintLevel | DetailedLint;
/**
 * The `deprecated_where_clause_location` lint detects when a where clause in front of the equals in an associated type.
 */
export type DeprecatedWhereClauseLocation = LintLevel | DetailedLint;
/**
 * The `deref_into_dyn_supertrait` lint is emitted whenever there is a `Deref` implementation for `dyn SubTrait` with a `dyn SuperTrait` type as the `Output` type.
 */
export type DerefIntoDynSupertrait = LintLevel | DetailedLint;
/**
 * The `deref_nullptr` lint detects when a null pointer is dereferenced, which causes undefined behavior.
 */
export type DerefNullptr = LintLevel | DetailedLint;
/**
 * The `double_negations` lint detects expressions of the form `--x`.
 */
export type DoubleNegations = LintLevel | DetailedLint;
/**
 * The `drop_bounds` lint checks for generics with `std::ops::Drop` as bounds.
 */
export type DropBounds = LintLevel | DetailedLint;
/**
 * The `dropping_copy_types` lint checks for calls to `std::mem::drop` with a value that derives the Copy trait.
 */
export type DroppingCopyTypes = LintLevel | DetailedLint;
/**
 * The `dropping_references` lint checks for calls to `std::mem::drop` with a reference instead of an owned value.
 */
export type DroppingReferences = LintLevel | DetailedLint;
/**
 * The `duplicate_macro_attributes` lint detects when a `#[test]`-like built-in macro attribute is duplicated on an item. This lint may trigger on `bench`, `cfg_eval`, `test` and `test_case`.
 */
export type DuplicateMacroAttributes = LintLevel | DetailedLint;
/**
 * The `dyn_drop` lint checks for trait objects with `std::ops::Drop`.
 */
export type DynDrop = LintLevel | DetailedLint;
/**
 * The `edition_2024_expr_fragment_specifier` lint detects the use of `expr` fragments in macros during migration to the 2024 edition.
 */
export type Edition2024ExprFragmentSpecifier = LintLevel | DetailedLint;
/**
 * The `elided_lifetimes_in_associated_constant` lint detects elided lifetimes in associated constants when there are other lifetimes in scope. This was accidentally supported, and this lint was later relaxed to allow eliding lifetimes to `'static` when there are no lifetimes in scope.
 */
export type ElidedLifetimesInAssociatedConstant = LintLevel | DetailedLint;
/**
 * The `elided_lifetimes_in_paths` lint detects the use of hidden lifetime parameters.
 */
export type ElidedLifetimesInPaths = LintLevel | DetailedLint;
/**
 * The `ellipsis_inclusive_range_patterns` lint detects the `...` range pattern, which is deprecated.
 */
export type EllipsisInclusiveRangePatterns = LintLevel | DetailedLint;
/**
 * The `enum_intrinsics_non_enums` lint detects calls to intrinsic functions that require an enum (`core::mem::discriminant`, `core::mem::variant_count`), but are called with a non-enum type.
 */
export type EnumIntrinsicsNonEnums = LintLevel | DetailedLint;
/**
 * The `explicit_builtin_cfgs_in_flags` lint detects builtin cfgs set via the `--cfg` flag.
 */
export type ExplicitBuiltinCfgsInFlags = LintLevel | DetailedLint;
/**
 * The `explicit_outlives_requirements` lint detects unnecessary lifetime bounds that can be inferred.
 */
export type ExplicitOutlivesRequirements = LintLevel | DetailedLint;
/**
 * The `exported_private_dependencies` lint detects private dependencies that are exposed in a public interface.
 */
export type ExportedPrivateDependencies = LintLevel | DetailedLint;
/**
 * The `ffi_unwind_calls` lint detects calls to foreign functions or function pointers with `C-unwind` or other FFI-unwind ABIs.
 */
export type FfiUnwindCalls = LintLevel | DetailedLint;
/**
 * The `for_loops_over_fallibles` lint checks for `for` loops over `Option` or `Result` values.
 */
export type ForLoopsOverFallibles = LintLevel | DetailedLint;
/**
 * The `forbidden_lint_groups` lint detects violations of `forbid` applied to a lint group. Due to a bug in the compiler, these used to be overlooked entirely. They now generate a warning.
 */
export type ForbiddenLintGroups = LintLevel | DetailedLint;
/**
 * The `forgetting_copy_types` lint checks for calls to `std::mem::forget` with a value that derives the Copy trait.
 */
export type ForgettingCopyTypes = LintLevel | DetailedLint;
/**
 * The `forgetting_references` lint checks for calls to `std::mem::forget` with a reference instead of an owned value.
 */
export type ForgettingReferences = LintLevel | DetailedLint;
/**
 * The `function_casts_as_integer` lint detects cases where a function item is cast to an integer.
 */
export type FunctionCastsAsInteger = LintLevel | DetailedLint;
/**
 * The `function_item_references` lint detects function references that are formatted with `fmt::Pointer` or transmuted.
 */
export type FunctionItemReferences = LintLevel | DetailedLint;
/**
 * The `fuzzy_provenance_casts` lint detects an `as` cast between an integer and a pointer.
 */
export type FuzzyProvenanceCasts = LintLevel | DetailedLint;
/**
 * The `hidden_glob_reexports` lint detects cases where glob re-export items are shadowed by private items.
 */
export type HiddenGlobReexports = LintLevel | DetailedLint;
/**
 * The `if_let_rescope` lint detects cases where a temporary value with significant drop is generated on the right hand side of `if let` and suggests a rewrite into `match` when possible.
 */
export type IfLetRescope = LintLevel | DetailedLint;
/**
 * The `ill_formed_attribute_input` lint detects ill-formed attribute inputs that were previously accepted and used in practice.
 */
export type IllFormedAttributeInput = LintLevel | DetailedLint;
/**
 * The `impl_trait_overcaptures` lint warns against cases where lifetime capture behavior will differ in edition 2024.
 */
export type ImplTraitOvercaptures = LintLevel | DetailedLint;
/**
 * The `impl_trait_redundant_captures` lint warns against cases where use of the precise capturing `use ` syntax is not needed.
 */
export type ImplTraitRedundantCaptures = LintLevel | DetailedLint;
/**
 * The `improper_ctypes` lint detects incorrect use of types in foreign modules.
 */
export type ImproperCtypes = LintLevel | DetailedLint;
/**
 * The `improper_ctypes_definitions` lint detects incorrect use of `extern` function definitions.
 */
export type ImproperCtypesDefinitions = LintLevel | DetailedLint;
/**
 * The `incomplete_features` lint detects unstable features enabled with the `feature` attribute that may function improperly in some or all cases.
 */
export type IncompleteFeatures = LintLevel | DetailedLint;
/**
 * The `incomplete_include` lint detects the use of the `include!` macro with a file that contains more than one expression.
 */
export type IncompleteInclude = LintLevel | DetailedLint;
/**
 * The `ineffective_unstable_trait_impl` lint detects `#[unstable]` attributes which are not used.
 */
export type IneffectiveUnstableTraitImpl = LintLevel | DetailedLint;
/**
 * The `inline_no_sanitize` lint detects incompatible use of `#[inline(always)]` and `#[sanitize(xyz = "off")]`.
 */
export type InlineNoSanitize = LintLevel | DetailedLint;
/**
 * The `internal_features` lint detects unstable features enabled with the `feature` attribute that are internal to the compiler or standard library.
 */
export type InternalFeatures = LintLevel | DetailedLint;
/**
 * The `invalid_atomic_ordering` lint detects passing an `Ordering` to an atomic operation that does not support that ordering.
 */
export type InvalidAtomicOrdering = LintLevel | DetailedLint;
/**
 * The `invalid_doc_attributes` lint detects when the `#[doc(...)]` is misused.
 */
export type InvalidDocAttributes = LintLevel | DetailedLint;
/**
 * The `invalid_from_utf8` lint checks for calls to `std::str::from_utf8` and `std::str::from_utf8_mut` with a known invalid UTF-8 value.
 */
export type InvalidFromUtf8 = LintLevel | DetailedLint;
/**
 * The `invalid_from_utf8_unchecked` lint checks for calls to `std::str::from_utf8_unchecked` and `std::str::from_utf8_unchecked_mut` with a known invalid UTF-8 value.
 */
export type InvalidFromUtf8Unchecked = LintLevel | DetailedLint;
/**
 * The `invalid_macro_export_arguments` lint detects cases where `#[macro_export]` is being used with invalid arguments.
 */
export type InvalidMacroExportArguments = LintLevel | DetailedLint;
/**
 * The `invalid_nan_comparisons` lint checks comparison with `f32::NAN` or `f64::NAN` as one of the operand.
 */
export type InvalidNanComparisons = LintLevel | DetailedLint;
/**
 * The `invalid_null_arguments` lint checks for invalid usage of null pointers in arguments.
 */
export type InvalidNullArguments = LintLevel | DetailedLint;
/**
 * The `invalid_reference_casting` lint checks for casts of `&T` to `&mut T` without using interior mutability.
 */
export type InvalidReferenceCasting = LintLevel | DetailedLint;
/**
 * The `invalid_type_param_default` lint detects type parameter defaults erroneously allowed in an invalid location.
 */
export type InvalidTypeParamDefault = LintLevel | DetailedLint;
/**
 * The `invalid_value` lint detects creating a value that is not valid, such as a null reference.
 */
export type InvalidValue = LintLevel | DetailedLint;
/**
 * The `irrefutable_let_patterns` lint detects irrefutable patterns in `if let`s, `while let`s, and `if let` guards.
 */
export type IrrefutableLetPatterns = LintLevel | DetailedLint;
/**
 * The `large_assignments` lint detects when objects of large types are being moved around.
 */
export type LargeAssignments = LintLevel | DetailedLint;
/**
 * The `late_bound_lifetime_arguments` lint detects generic lifetime arguments in path segments with late bound lifetime parameters.
 */
export type LateBoundLifetimeArguments = LintLevel | DetailedLint;
/**
 * The `legacy_derive_helpers` lint detects derive helper attributes that are used before they are introduced.
 */
export type LegacyDeriveHelpers = LintLevel | DetailedLint;
/**
 * The `let_underscore_drop` lint checks for statements which don’t bind an expression which has a non-trivial Drop implementation to anything, causing the expression to be dropped immediately instead of at end of scope.
 */
export type LetUnderscoreDrop = LintLevel | DetailedLint;
/**
 * The `let_underscore_lock` lint checks for statements which don’t bind a mutex to anything, causing the lock to be released immediately instead of at end of scope, which is typically incorrect.
 */
export type LetUnderscoreLock = LintLevel | DetailedLint;
/**
 * The `linker_messages` lint forwards warnings from the linker.
 */
export type LinkerMessages = LintLevel | DetailedLint;
/**
 * The `long_running_const_eval` lint is emitted when const eval is running for a long time to ensure rustc terminates even if you accidentally wrote an infinite loop.
 */
export type LongRunningConstEval = LintLevel | DetailedLint;
/**
 * The `lossy_provenance_casts` lint detects an `as` cast between a pointer and an integer.
 */
export type LossyProvenanceCasts = LintLevel | DetailedLint;
/**
 * The `macro_expanded_macro_exports_accessed_by_absolute_paths` lint detects macro-expanded `macro_export` macros from the current crate that cannot be referred to by absolute paths.
 */
export type MacroExpandedMacroExportsAccessedByAbsolutePaths = LintLevel | DetailedLint;
/**
 * The `macro_use_extern_crate` lint detects the use of the `macro_use` attribute.
 */
export type MacroUseExternCrate = LintLevel | DetailedLint;
/**
 * The `malformed_diagnostic_attributes` lint detects malformed diagnostic attributes.
 */
export type MalformedDiagnosticAttributes = LintLevel | DetailedLint;
/**
 * The `malformed_diagnostic_format_literals` lint detects malformed diagnostic format literals.
 */
export type MalformedDiagnosticFormatLiterals = LintLevel | DetailedLint;
/**
 * The `map_unit_fn` lint checks for `Iterator::map` receive a callable that returns `()`.
 */
export type MapUnitFn = LintLevel | DetailedLint;
/**
 * The `meta_variable_misuse` lint detects possible meta-variable misuse in macro definitions.
 */
export type MetaVariableMisuse = LintLevel | DetailedLint;
/**
 * The `mismatched_lifetime_syntaxes` lint detects when the same lifetime is referred to by different syntaxes between function arguments and return values.
 */
export type MismatchedLifetimeSyntaxes = LintLevel | DetailedLint;
/**
 * The `misplaced_diagnostic_attributes` lint detects wrongly placed diagnostic attributes.
 */
export type MisplacedDiagnosticAttributes = LintLevel | DetailedLint;
/**
 * The `missing_abi` lint detects cases where the ABI is omitted from `extern` declarations.
 */
export type MissingAbi = LintLevel | DetailedLint;
/**
 * The `missing_copy_implementations` lint detects potentially-forgotten implementations of `Copy` for public types.
 */
export type MissingCopyImplementations = LintLevel | DetailedLint;
/**
 * The `missing_debug_implementations` lint detects missing implementations of `fmt::Debug` for public types.
 */
export type MissingDebugImplementations = LintLevel | DetailedLint;
/**
 * The `missing_docs` lint detects missing documentation for public items.
 */
export type MissingDocs = LintLevel | DetailedLint;
/**
 * The `missing_unsafe_on_extern` lint detects missing unsafe keyword on extern declarations.
 */
export type MissingUnsafeOnExtern = LintLevel | DetailedLint;
/**
 * The `mixed_script_confusables` lint detects visually confusable characters in identifiers between different scripts.
 */
export type MixedScriptConfusables = LintLevel | DetailedLint;
/**
 * The `multiple_supertrait_upcastable` lint detects when a dyn-compatible trait has multiple supertraits.
 */
export type MultipleSupertraitUpcastable = LintLevel | DetailedLint;
/**
 * The `must_not_suspend` lint guards against values that shouldn’t be held across suspend points (`.await`)
 */
export type MustNotSuspend = LintLevel | DetailedLint;
/**
 * The `mutable_transmutes` lint catches transmuting from `&T` to `&mut T` because it is undefined behavior.
 */
export type MutableTransmutes = LintLevel | DetailedLint;
/**
 * The `named_arguments_used_positionally` lint detects cases where named arguments are only used positionally in format strings. This usage is valid but potentially very confusing.
 */
export type NamedArgumentsUsedPositionally = LintLevel | DetailedLint;
/**
 * The `named_asm_labels` lint detects the use of named labels in the inline `asm!` macro.
 */
export type NamedAsmLabels = LintLevel | DetailedLint;
/**
 * The `never_type_fallback_flowing_into_unsafe` lint detects cases where never type fallback affects unsafe function calls.
 */
export type NeverTypeFallbackFlowingIntoUnsafe = LintLevel | DetailedLint;
/**
 * The `no_mangle_const_items` lint detects any `const` items with the `no_mangle` attribute.
 */
export type NoMangleConstItems = LintLevel | DetailedLint;
/**
 * The `no_mangle_generic_items` lint detects generic items that must be mangled.
 */
export type NoMangleGenericItems = LintLevel | DetailedLint;
/**
 * The `non_ascii_idents` lint detects non-ASCII identifiers.
 */
export type NonAsciiIdents = LintLevel | DetailedLint;
/**
 * The `non_camel_case_types` lint detects types, variants, traits and type parameters that don’t have camel case names.
 */
export type NonCamelCaseTypes = LintLevel | DetailedLint;
/**
 * The `non_contiguous_range_endpoints` lint detects likely off-by-one errors when using exclusive range patterns.
 */
export type NonContiguousRangeEndpoints = LintLevel | DetailedLint;
/**
 * The `non_exhaustive_omitted_patterns` lint aims to help consumers of a `#[non_exhaustive]` struct or enum who want to match all of its fields/variants explicitly.
 */
export type NonExhaustiveOmittedPatterns = LintLevel | DetailedLint;
/**
 * The `non_fmt_panics` lint detects `panic!(..)` invocations where the first argument is not a formatting string.
 */
export type NonFmtPanics = LintLevel | DetailedLint;
/**
 * The `non_local_definitions` lint checks for `impl` blocks and `#[macro_export]` macro inside bodies (functions, enum discriminant, …).
 */
export type NonLocalDefinitions = LintLevel | DetailedLint;
/**
 * The `non_shorthand_field_patterns` lint detects using `Struct { x: x }` instead of `Struct { x }` in a pattern.
 */
export type NonShorthandFieldPatterns = LintLevel | DetailedLint;
/**
 * The `non_snake_case` lint detects variables, methods, functions, lifetime parameters and modules that don’t have snake case names.
 */
export type NonSnakeCase = LintLevel | DetailedLint;
/**
 * The `non_upper_case_globals` lint detects static items that don’t have uppercase identifiers.
 */
export type NonUpperCaseGlobals = LintLevel | DetailedLint;
/**
 * The `noop_method_call` lint detects specific calls to noop methods such as a calling ` ::clone` where `T: !Clone`.
 */
export type NoopMethodCall = LintLevel | DetailedLint;
/**
 * The `opaque_hidden_inferred_bound` lint detects cases in which nested `impl Trait` in associated type bounds are not written generally enough to satisfy the bounds of the associated type.
 */
export type OpaqueHiddenInferredBound = LintLevel | DetailedLint;
/**
 * The `out_of_scope_macro_calls` lint detects `macro_rules` called when they are not in scope, above their definition, which may happen in key-value attributes.
 */
export type OutOfScopeMacroCalls = LintLevel | DetailedLint;
/**
 * The `overflowing_literals` lint detects literals out of range for their type.
 */
export type OverflowingLiterals = LintLevel | DetailedLint;
/**
 * The `overlapping_range_endpoints` lint detects `match` arms that have range patterns that overlap on their endpoints.
 */
export type OverlappingRangeEndpoints = LintLevel | DetailedLint;
/**
 * The `path_statements` lint detects path statements with no effect.
 */
export type PathStatements = LintLevel | DetailedLint;
/**
 * The `patterns_in_fns_without_body` lint detects `mut` identifier patterns as a parameter in functions without a body.
 */
export type PatternsInFnsWithoutBody = LintLevel | DetailedLint;
/**
 * The `private_bounds` lint detects types in a secondary interface of an item, that are more private than the item itself. Secondary interface of an item consists of bounds on generic parameters and where clauses, including supertraits for trait items.
 */
export type PrivateBounds = LintLevel | DetailedLint;
/**
 * The `private_interfaces` lint detects types in a primary interface of an item, that are more private than the item itself. Primary interface of an item is all its interface except for bounds on generic parameters and where clauses.
 */
export type PrivateInterfaces = LintLevel | DetailedLint;
/**
 * The `proc_macro_derive_resolution_fallback` lint detects proc macro derives using inaccessible names from parent modules.
 */
export type ProcMacroDeriveResolutionFallback = LintLevel | DetailedLint;
/**
 * The `ptr_to_integer_transmute_in_consts` lint detects pointer to integer transmute in const functions and associated constants.
 */
export type PtrToIntegerTransmuteInConsts = LintLevel | DetailedLint;
/**
 * The `pub_use_of_private_extern_crate` lint detects a specific situation of re-exporting a private `extern crate`.
 */
export type PubUseOfPrivateExternCrate = LintLevel | DetailedLint;
/**
 * The `redundant_imports` lint detects imports that are redundant due to being imported already; either through a previous import, or being present in the prelude.
 */
export type RedundantImports = LintLevel | DetailedLint;
/**
 * The `redundant_lifetimes` lint detects lifetime parameters that are redundant because they are equal to another named lifetime.
 */
export type RedundantLifetimes = LintLevel | DetailedLint;
/**
 * The `redundant_semicolons` lint detects unnecessary trailing semicolons.
 */
export type RedundantSemicolons = LintLevel | DetailedLint;
/**
 * The `refining_impl_trait_internal` lint detects `impl Trait` return types in method signatures that are refined by a trait implementation, meaning the implementation adds information about the return type that is not present in the trait.
 */
export type RefiningImplTraitInternal = LintLevel | DetailedLint;
/**
 * The `refining_impl_trait_reachable` lint detects `impl Trait` return types in method signatures that are refined by a publicly reachable trait implementation, meaning the implementation adds information about the return type that is not present in the trait.
 */
export type RefiningImplTraitReachable = LintLevel | DetailedLint;
/**
 * The `renamed_and_removed_lints` lint detects lints that have been renamed or removed.
 */
export type RenamedAndRemovedLints = LintLevel | DetailedLint;
/**
 * transparent type contains an external ZST that is marked #[non_exhaustive] or contains private fields.
 */
export type ReprTransparentExternalPrivateFields = LintLevel | DetailedLint;
/**
 * The `rust_2021_incompatible_closure_captures` lint detects variables that aren’t completely captured in Rust 2021, such that the `Drop` order of their fields may differ between Rust 2018 and 2021.
 */
export type Rust2021IncompatibleClosureCaptures = LintLevel | DetailedLint;
/**
 * The `rust_2021_incompatible_or_patterns` lint detects usage of old versions of or-patterns.
 */
export type Rust2021IncompatibleOrPatterns = LintLevel | DetailedLint;
/**
 * The `rust_2021_prefixes_incompatible_syntax` lint detects identifiers that will be parsed as a prefix instead in Rust 2021.
 */
export type Rust2021PrefixesIncompatibleSyntax = LintLevel | DetailedLint;
/**
 * The `rust_2021_prelude_collisions` lint detects the usage of trait methods which are ambiguous with traits added to the prelude in future editions.
 */
export type Rust2021PreludeCollisions = LintLevel | DetailedLint;
/**
 * The `rust_2024_guarded_string_incompatible_syntax` lint detects `#` tokens that will be parsed as part of a guarded string literal in Rust 2024.
 */
export type Rust2024GuardedStringIncompatibleSyntax = LintLevel | DetailedLint;
/**
 * The `rust_2024_incompatible_pat` lint detects patterns whose meaning will change in the Rust 2024 edition.
 */
export type Rust2024IncompatiblePat = LintLevel | DetailedLint;
/**
 * The `rust_2024_prelude_collisions` lint detects the usage of trait methods which are ambiguous with traits added to the prelude in future editions.
 */
export type Rust2024PreludeCollisions = LintLevel | DetailedLint;
/**
 * The `self_constructor_from_outer_item` lint detects cases where the `Self` constructor was silently allowed due to a bug in the resolver, and which may produce surprising and unintended behavior.
 */
export type SelfConstructorFromOuterItem = LintLevel | DetailedLint;
/**
 * The `semicolon_in_expressions_from_macros` lint detects trailing semicolons in macro bodies when the macro is invoked in expression position. This was previous accepted, but is being phased out.
 */
export type SemicolonInExpressionsFromMacros = LintLevel | DetailedLint;
/**
 * The `single_use_lifetimes` lint detects lifetimes that are only used once.
 */
export type SingleUseLifetimes = LintLevel | DetailedLint;
/**
 * The `soft_unstable` lint detects unstable features that were unintentionally allowed on stable. This is a future-incompatible lint to transition this to a hard error in the future. See issue #64266 for more details.
 */
export type SoftUnstable = LintLevel | DetailedLint;
/**
 * The `special_module_name` lint detects module declarations for files that have a special meaning.
 */
export type SpecialModuleName = LintLevel | DetailedLint;
/**
 * The `stable_features` lint detects a `feature` attribute that has since been made stable.
 */
export type StableFeatures = LintLevel | DetailedLint;
/**
 * The `static_mut_refs` lint checks for shared or mutable references of mutable static inside `unsafe` blocks and `unsafe` functions.
 */
export type StaticMutRefs = LintLevel | DetailedLint;
/**
 * detects when a supertrait item is shadowed by a subtrait item.
 */
export type SupertraitItemShadowingDefinition = LintLevel | DetailedLint;
/**
 * detects when a supertrait item is shadowed by a subtrait item.
 */
export type SupertraitItemShadowingUsage = LintLevel | DetailedLint;
/**
 * The `suspicious_double_ref_op` lint checks for usage of `.clone()`/`.borrow()`/`.deref()` on an `&&T` when `T: !Deref/Borrow/Clone`, which means the call will return the inner `&T`, instead of performing the operation on the underlying `T` and can be confusing.
 */
export type SuspiciousDoubleRefOp = LintLevel | DetailedLint;
/**
 * The `tail_expr_drop_order` lint looks for those values generated at the tail expression location, that runs a custom `Drop` destructor. Some of them may be dropped earlier in Edition 2024 that they used to in Edition 2021 and prior. This lint detects those cases and provides you information on those values and their custom destructor implementations. Your discretion on this information is required.
 */
export type TailExprDropOrder = LintLevel | DetailedLint;
/**
 * The `test_unstable_lint` lint tests unstable lints and is perma-unstable.
 */
export type TestUnstableLint = LintLevel | DetailedLint;
/**
 * The `text_direction_codepoint_in_comment` lint detects Unicode codepoints in comments that change the visual representation of text on screen in a way that does not correspond to their on memory representation.
 */
export type TextDirectionCodepointInComment = LintLevel | DetailedLint;
/**
 * The `text_direction_codepoint_in_literal` lint detects Unicode codepoints that change the visual representation of text on screen in a way that does not correspond to their on memory representation.
 */
export type TextDirectionCodepointInLiteral = LintLevel | DetailedLint;
/**
 * The `trivial_bounds` lint detects trait bounds that don’t depend on any type parameters.
 */
export type TrivialBounds = LintLevel | DetailedLint;
/**
 * The `trivial_casts` lint detects trivial casts which could be replaced with coercion, which may require a temporary variable.
 */
export type TrivialCasts = LintLevel | DetailedLint;
/**
 * The `trivial_numeric_casts` lint detects trivial numeric casts of types which could be removed.
 */
export type TrivialNumericCasts = LintLevel | DetailedLint;
/**
 * The `type_alias_bounds` lint detects bounds in type aliases.
 */
export type TypeAliasBounds = LintLevel | DetailedLint;
/**
 * The `tyvar_behind_raw_pointer` lint detects raw pointer to an inference variable.
 */
export type TyvarBehindRawPointer = LintLevel | DetailedLint;
/**
 * The `uncommon_codepoints` lint detects uncommon Unicode codepoints in identifiers.
 */
export type UncommonCodepoints = LintLevel | DetailedLint;
/**
 * The `unconditional_panic` lint detects an operation that will cause a panic at runtime.
 */
export type UnconditionalPanic = LintLevel | DetailedLint;
/**
 * The `unconditional_recursion` lint detects functions that cannot return without calling themselves.
 */
export type UnconditionalRecursion = LintLevel | DetailedLint;
/**
 * The `uncovered_param_in_projection` lint detects a violation of one of Rust’s orphan rules for foreign trait implementations that concerns the use of type parameters inside trait associated type paths (“projections”) whose output may not be a local type that is mistakenly considered to “cover” said parameters which is unsound and which may be rejected by a future version of the compiler.
 */
export type UncoveredParamInProjection = LintLevel | DetailedLint;
/**
 * The `undropped_manually_drops` lint check for calls to `std::mem::drop` with a value of `std::mem::ManuallyDrop` which doesn’t drop.
 */
export type UndroppedManuallyDrops = LintLevel | DetailedLint;
/**
 * The `unexpected_cfgs` lint detects unexpected conditional compilation conditions.
 */
export type UnexpectedCfgs = LintLevel | DetailedLint;
/**
 * The `unfulfilled_lint_expectations` lint detects when a lint expectation is unfulfilled.
 */
export type UnfulfilledLintExpectations = LintLevel | DetailedLint;
/**
 * The `ungated_async_fn_track_caller` lint warns when the `#[track_caller]` attribute is used on an async function without enabling the corresponding unstable feature flag.
 */
export type UngatedAsyncFnTrackCaller = LintLevel | DetailedLint;
/**
 * The `uninhabited_static` lint detects uninhabited statics.
 */
export type UninhabitedStatic = LintLevel | DetailedLint;
/**
 * The `unit_bindings` lint detects cases where bindings are useless because they have the unit type `()` as their inferred type. The lint is suppressed if the user explicitly annotates the let binding with the unit type `()`, or if the let binding uses an underscore wildcard pattern, i.e. `let _ = expr`, or if the binding is produced from macro expansions.
 */
export type UnitBindings = LintLevel | DetailedLint;
/**
 * The `unknown_crate_types` lint detects an unknown crate type found in a `crate_type` attribute.
 */
export type UnknownCrateTypes = LintLevel | DetailedLint;
/**
 * The `unknown_diagnostic_attributes` lint detects unknown diagnostic attributes.
 */
export type UnknownDiagnosticAttributes = LintLevel | DetailedLint;
/**
 * The `unknown_lints` lint detects unrecognized lint attributes.
 */
export type UnknownLints = LintLevel | DetailedLint;
/**
 * The `unnameable_test_items` lint detects `#[test]` functions that are not able to be run by the test harness because they are in a position where they are not nameable.
 */
export type UnnameableTestItems = LintLevel | DetailedLint;
/**
 * The `unnameable_types` lint detects types for which you can get objects of that type, but cannot name the type itself.
 */
export type UnnameableTypes = LintLevel | DetailedLint;
/**
 * The `unnecessary_transmutes` lint detects transmutations that have safer alternatives.
 */
export type UnnecessaryTransmutes = LintLevel | DetailedLint;
/**
 * The `unpredictable_function_pointer_comparisons` lint checks comparison of function pointer as the operands.
 */
export type UnpredictableFunctionPointerComparisons = LintLevel | DetailedLint;
/**
 * The `unqualified_local_imports` lint checks for `use` items that import a local item using a path that does not start with `self::`, `super::`, or `crate::`.
 */
export type UnqualifiedLocalImports = LintLevel | DetailedLint;
/**
 * The `unreachable_code` lint detects unreachable code paths.
 */
export type UnreachableCode = LintLevel | DetailedLint;
/**
 * The `unreachable_patterns` lint detects unreachable patterns.
 */
export type UnreachablePatterns = LintLevel | DetailedLint;
/**
 * The `unreachable_pub` lint triggers for `pub` items not reachable from other crates - that means neither directly accessible, nor reexported (with `pub use`), nor leaked through things like return types (which the `unnameable_types` lint can detect if desired).
 */
export type UnreachablePub = LintLevel | DetailedLint;
/**
 * The `unsafe_attr_outside_unsafe` lint detects a missing unsafe keyword on attributes considered unsafe.
 */
export type UnsafeAttrOutsideUnsafe = LintLevel | DetailedLint;
/**
 * The `unsafe_code` lint catches usage of `unsafe` code and other potentially unsound constructs like `no_mangle`, `export_name`, and `link_section`.
 */
export type UnsafeCode = LintLevel | DetailedLint;
/**
 * The `unsafe_op_in_unsafe_fn` lint detects unsafe operations in unsafe functions without an explicit unsafe block.
 */
export type UnsafeOpInUnsafeFn = LintLevel | DetailedLint;
/**
 * The `unstable_features` lint detects uses of `#![feature]`.
 */
export type UnstableFeatures = LintLevel | DetailedLint;
/**
 * The `unstable_name_collisions` lint detects that you have used a name that the standard library plans to add in the future.
 */
export type UnstableNameCollisions = LintLevel | DetailedLint;
/**
 * The `unstable_syntax_pre_expansion` lint detects the use of unstable syntax that is discarded during attribute expansion.
 */
export type UnstableSyntaxPreExpansion = LintLevel | DetailedLint;
/**
 * The `unsupported_calling_conventions` lint is output whenever there is a use of the `stdcall`, `fastcall`, and `cdecl` calling conventions (or their unwind variants) on targets that cannot meaningfully be supported for the requested target.
 */
export type UnsupportedCallingConventions = LintLevel | DetailedLint;
/**
 * The `unused_allocation` lint detects unnecessary allocations that can be eliminated.
 */
export type UnusedAllocation = LintLevel | DetailedLint;
/**
 * The `unused_assignments` lint detects assignments that will never be read.
 */
export type UnusedAssignments = LintLevel | DetailedLint;
/**
 * The `unused_associated_type_bounds` lint is emitted when an associated type bound is added to a trait object, but the associated type has a `where Self: Sized` bound, and is thus unavailable on the trait object anyway.
 */
export type UnusedAssociatedTypeBounds = LintLevel | DetailedLint;
/**
 * The `unused_attributes` lint detects attributes that were not used by the compiler.
 */
export type UnusedAttributes = LintLevel | DetailedLint;
/**
 * The `unused_braces` lint detects unnecessary braces around an expression.
 */
export type UnusedBraces = LintLevel | DetailedLint;
/**
 * The `unused_comparisons` lint detects comparisons made useless by limits of the types involved.
 */
export type UnusedComparisons = LintLevel | DetailedLint;
/**
 * The `unused_crate_dependencies` lint detects crate dependencies that are never used.
 */
export type UnusedCrateDependencies = LintLevel | DetailedLint;
/**
 * The `unused_doc_comments` lint detects doc comments that aren’t used by `rustdoc`.
 */
export type UnusedDocComments = LintLevel | DetailedLint;
/**
 * The `unused_extern_crates` lint guards against `extern crate` items that are never used.
 */
export type UnusedExternCrates = LintLevel | DetailedLint;
/**
 * The `unused_features` lint detects unused or unknown features found in crate-level `feature` attributes.
 */
export type UnusedFeatures = LintLevel | DetailedLint;
/**
 * The `unused_import_braces` lint catches unnecessary braces around an imported item.
 */
export type UnusedImportBraces = LintLevel | DetailedLint;
/**
 * The `unused_imports` lint detects imports that are never used.
 */
export type UnusedImports = LintLevel | DetailedLint;
/**
 * The `unused_labels` lint detects labels that are never used.
 */
export type UnusedLabels = LintLevel | DetailedLint;
/**
 * The `unused_lifetimes` lint detects lifetime parameters that are never used.
 */
export type UnusedLifetimes = LintLevel | DetailedLint;
/**
 * The `unused_macro_rules` lint detects macro rules that were not used.
 */
export type UnusedMacroRules = LintLevel | DetailedLint;
/**
 * The `unused_macros` lint detects macros that were not used.
 */
export type UnusedMacros = LintLevel | DetailedLint;
/**
 * The `unused_must_use` lint detects unused result of a type flagged as `#[must_use]`.
 */
export type UnusedMustUse = LintLevel | DetailedLint;
/**
 * The `unused_mut` lint detects mut variables which don’t need to be mutable.
 */
export type UnusedMut = LintLevel | DetailedLint;
/**
 * The `unused_parens` lint detects `if`, `match`, `while` and `return` with parentheses; they do not need them.
 */
export type UnusedParens = LintLevel | DetailedLint;
/**
 * The `unused_qualifications` lint detects unnecessarily qualified names.
 */
export type UnusedQualifications = LintLevel | DetailedLint;
/**
 * The `unused_results` lint checks for the unused result of an expression in a statement.
 */
export type UnusedResults = LintLevel | DetailedLint;
/**
 * The `unused_unsafe` lint detects unnecessary use of an `unsafe` block.
 */
export type UnusedUnsafe = LintLevel | DetailedLint;
/**
 * The `unused_variables` lint detects variables which are not used in any way.
 */
export type UnusedVariables = LintLevel | DetailedLint;
/**
 * The `unused_visibilities` lint detects visibility qualifiers (like `pub`) on a `const _` item.
 */
export type UnusedVisibilities = LintLevel | DetailedLint;
/**
 * The `useless_deprecated` lint detects deprecation attributes with no effect.
 */
export type UselessDeprecated = LintLevel | DetailedLint;
/**
 * The `useless_ptr_null_checks` lint checks for useless null checks against pointers obtained from non-null types.
 */
export type UselessPtrNullChecks = LintLevel | DetailedLint;
/**
 * The `uses_power_alignment` lint detects specific `repr(C)` aggregates on AIX. In its platform C ABI, AIX uses the “power” (as in PowerPC) alignment rule (detailed in https://www.ibm.com/docs/en/xl-c-and-cpp-aix/16.1?topic=data-using-alignment-modes#alignment), which can also be set for XLC by `#pragma align(power)` or `-qalign=power`. Aggregates with a floating-point type as the recursively first field (as in “at offset 0”) modify the layout of subsequent fields of the associated structs to use an alignment value where the floating-point type is aligned on a 4-byte boundary.
 */
export type UsesPowerAlignment = LintLevel | DetailedLint;
/**
 * The `variant_size_differences` lint detects enums with widely varying variant sizes.
 */
export type VariantSizeDifferences = LintLevel | DetailedLint;
/**
 * All lints that are set to issue warnings
 */
export type Warnings = LintLevel | DetailedLint;
/**
 * The `while_true` lint detects `while true { }`.
 */
export type WhileTrue = LintLevel | DetailedLint;
/**
 * Deprecated alias for `nonstandard-style`.
 */
export type BadStyle = LintLevel | DetailedLint;
/**
 * Lints for functions which were erroneously marked as safe in the past
 */
export type DeprecatedSafe = LintLevel | DetailedLint;
/**
 * Lints that detect code that has future-compatibility problems
 */
export type FutureIncompatible = LintLevel | DetailedLint;
/**
 * Lints that detect identifiers which will be come keywords in later editions
 */
export type KeywordIdents = LintLevel | DetailedLint;
/**
 * Lints that detect wildcard let bindings that are likely to be invalid
 */
export type LetUnderscore = LintLevel | DetailedLint;
/**
 * Violation of standard naming conventions
 */
export type NonstandardStyle = LintLevel | DetailedLint;
/**
 * Detects refinement of `impl Trait` return types by trait implementations
 */
export type RefiningImplTrait = LintLevel | DetailedLint;
/**
 * Lints used to transition code from the 2015 edition to 2018
 */
export type Rust2018Compatibility = LintLevel | DetailedLint;
/**
 * Lints to nudge you toward idiomatic features of Rust 2018
 */
export type Rust2018Idioms = LintLevel | DetailedLint;
/**
 * Lints used to transition code from the 2018 edition to 2021
 */
export type Rust2021Compatibility = LintLevel | DetailedLint;
/**
 * Lints used to transition code from the 2021 edition to 2024
 */
export type Rust2024Compatibility = LintLevel | DetailedLint;
/**
 * detects unknown or malformed diagnostic attributes
 */
export type UnknownOrMalformedDiagnosticAttributes = LintLevel | DetailedLint;
/**
 * Lints that detect things being declared but not used, or excess syntax
 */
export type Unused = LintLevel | DetailedLint;
export type Lint = LintLevel | DetailedLint;
/**
 * detects URLs that are not hyperlinks.
 */
export type BareURLs = LintLevel | DetailedLint1;
/**
 * failures in resolving intra-doc link targets.
 */
export type BrokenIntraDocLinks = LintLevel | DetailedLint1;
/**
 * codeblock attribute looks a lot like a known one.
 */
export type InvalidCodeblockAttributes = LintLevel | DetailedLint1;
/**
 * detects invalid HTML tags in doc comments.
 */
export type InvalidHTMLTags = LintLevel | DetailedLint1;
/**
 * codeblock could not be parsed as valid Rust or is empty.
 */
export type InvalidRustCodeblocks = LintLevel | DetailedLint1;
/**
 * detects crates with no crate-level documentation.
 */
export type MissingCrateLevelDocs = LintLevel | DetailedLint1;
/**
 * detects publicly-exported items without code samples in their documentation.
 */
export type MissingDocCodeExamples = LintLevel | DetailedLint1;
/**
 * detects code samples in docs of private items not documented by rustdoc.
 */
export type PrivateDocTests = LintLevel | DetailedLint1;
/**
 * linking from a public item to a private one.
 */
export type PrivateIntraDocLinks = LintLevel | DetailedLint1;
/**
 * detects redundant explicit links in doc comments.
 */
export type RedundantExplicitLinks = LintLevel | DetailedLint1;
/**
 * detects unescaped backticks in doc comments.
 */
export type UnescapedBackticks = LintLevel | DetailedLint1;
/**
 * The group of all rustdoc lints (`#![allow(rustdoc::all)]`).
 */
export type All = LintLevel | DetailedLint1;
export type Lint1 = LintLevel | DetailedLint1;
/**
 * Checks for usage of items through absolute paths, like `std::env::current_dir`.
 */
export type AbsolutePaths = LintLevel | DetailedLint2;
/**
 * Checks for comparisons where one side of the relation is either the minimum or maximum value for its type and warns if it involves a case that is always true or always false. Only integer and boolean types are checked.
 */
export type AbsurdExtremeComparisons = LintLevel | DetailedLint2;
/**
 * The whole set of warn-by-default lints using the `clippy` lint group (`#![allow(clippy::all)]`).
 */
export type AllClippyLints = LintLevel | DetailedLint2;
/**
 * Finds items imported through `alloc` when available through `core`.
 */
export type AllocInsteadOfCore = LintLevel | DetailedLint2;
/**
 * Checks for usage of the `#[allow]` attribute and suggests replacing it with the `#[expect]` attribute (See RFC 2383)
 */
export type AllowAttributes = LintLevel | DetailedLint2;
/**
 * Checks for attributes that allow lints without a reason.
 */
export type AllowAttributesWithoutReason = LintLevel | DetailedLint2;
/**
 * Checks for ranges which almost include the entire range of letters from 'a' to 'z' or digits from '0' to '9', but don't because they're a half open range.
 */
export type AlmostCompleteRange = LintLevel | DetailedLint2;
/**
 * Checks for `foo = bar; bar = foo` sequences.
 */
export type AlmostSwapped = LintLevel | DetailedLint2;
/**
 * Checks for floating point literals that approximate constants which are defined in `std::f32::consts` or `std::f64::consts`, respectively, suggesting to use the predefined constant.
 */
export type ApproxConstant = LintLevel | DetailedLint2;
/**
 * Confirms that items are sorted in source files as per configuration.
 */
export type ArbitrarySourceItemOrdering = LintLevel | DetailedLint2;
/**
 * This lint warns when you use `Arc` with a type that does not implement `Send` or `Sync`.
 */
export type ArcWithNonSendSync = LintLevel | DetailedLint2;
/**
 * Checks any kind of arithmetic operation of any type.
 */
export type ArithmeticSideEffects = LintLevel | DetailedLint2;
/**
 * Checks for usage of `as` conversions.
 */
export type AsConversions = LintLevel | DetailedLint2;
/**
 * Checks for the usage of `as *const _` or `as *mut _` conversion using inferred type.
 */
export type AsPointerUnderscore = LintLevel | DetailedLint2;
/**
 * Checks for the result of a `&self`-taking `as_ptr` being cast to a mutable pointer.
 */
export type AsPtrCastMut = LintLevel | DetailedLint2;
/**
 * Checks for the usage of `as _` conversion using inferred type.
 */
export type AsUnderscore = LintLevel | DetailedLint2;
/**
 * Checks for `assert!(true)` and `assert!(false)` calls.
 */
export type AssertionsOnConstants = LintLevel | DetailedLint2;
/**
 * Checks for `assert!(r.is_ok())` or `assert!(r.is_err())` calls.
 */
export type AssertionsOnResultStates = LintLevel | DetailedLint2;
/**
 * Checks for `a = a op b` or `a = b commutative_op a` patterns.
 */
export type AssignOpPattern = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type AssignOps = LintLevel | DetailedLint2;
/**
 * Checks for code like `foo = bar.clone();`
 */
export type AssigningClones = LintLevel | DetailedLint2;
/**
 * Checks for async blocks that yield values of types that can themselves be awaited.
 */
export type AsyncYieldsAsync = LintLevel | DetailedLint2;
/**
 * Allows users to configure types which should not be held across await suspension points.
 */
export type AwaitHoldingInvalidType = LintLevel | DetailedLint2;
/**
 * Checks for calls to `await` while holding a non-async-aware `MutexGuard`.
 */
export type AwaitHoldingLock = LintLevel | DetailedLint2;
/**
 * Checks for calls to `await` while holding a `RefCell`, `Ref`, or `RefMut`.
 */
export type AwaitHoldingRefcellRef = LintLevel | DetailedLint2;
/**
 * Checks for incompatible bit masks in comparisons.
 */
export type BadBitMask = LintLevel | DetailedLint2;
/**
 * Checks for the usage of the `to_be_bytes` method and/or the function `from_be_bytes`.
 */
export type BigEndianBytes = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.and_then(|x| Some(y))`, `_.and_then(|x| Ok(y))` or `_.or_else(|x| Err(y))`.
 */
export type BindInsteadOfMap = LintLevel | DetailedLint2;
/**
 * Checks for `warn`/`deny`/`forbid` attributes targeting the whole clippy::restriction category.
 */
export type BlanketClippyRestrictionLints = LintLevel | DetailedLint2;
/**
 * Checks for `if` and `match` conditions that use blocks containing an expression, statements or conditions that use closures with blocks.
 */
export type BlocksInConditions = LintLevel | DetailedLint2;
/**
 * This lint warns about boolean comparisons in assert-like macros.
 */
export type BoolAssertComparison = LintLevel | DetailedLint2;
/**
 * Checks for expressions of the form `x == true`, `x!= true` and order comparisons such as `x
 */
export type BoolComparison = LintLevel | DetailedLint2;
/**
 * Instead of using an if statement to convert a bool to an int, this lint suggests using a `from()` function or an `as` coercion.
 */
export type BoolToIntWithIf = LintLevel | DetailedLint2;
/**
 * Checks for the usage of `&expr as *const T` or `&mut expr as *mut T`, and suggest using `&raw const` or `&raw mut` instead.
 */
export type BorrowAsPtr = LintLevel | DetailedLint2;
/**
 * Checks for `&*(&T)`.
 */
export type BorrowDerefRef = LintLevel | DetailedLint2;
/**
 * Checks for a borrow of a named constant with interior mutability.
 */
export type BorrowInteriorMutableConst = LintLevel | DetailedLint2;
/**
 * Checks for usage of `&Box ` anywhere in the code. Check the Box documentation for more information.
 */
export type BorrowedBox = LintLevel | DetailedLint2;
/**
 * Checks for usage of `Box ` where T is a collection such as Vec anywhere in the code. Check the Box documentation for more information.
 */
export type BoxCollection = LintLevel | DetailedLint2;
/**
 * checks for `Box::new(Default::default())`, which can be written as `Box::default()`.
 */
export type BoxDefault = LintLevel | DetailedLint2;
/**
 * Checks for usage of `Box ` where an unboxed `T` would work fine.
 */
export type BoxedLocal = LintLevel | DetailedLint2;
/**
 * Checks if the `if` and `else` block contain shared code that can be moved out of the blocks.
 */
export type BranchesSharingCode = LintLevel | DetailedLint2;
/**
 * Warns if a generic shadows a built-in type.
 */
export type BuiltinTypeShadow = LintLevel | DetailedLint2;
/**
 * Checks for hard to read slices of byte characters, that could be more easily expressed as a byte string.
 */
export type ByteCharSlices = LintLevel | DetailedLint2;
/**
 * It checks for `str::bytes().count()` and suggests replacing it with `str::len()`.
 */
export type BytesCountToLen = LintLevel | DetailedLint2;
/**
 * Checks for the use of `.bytes().nth()`.
 */
export type BytesNth = LintLevel | DetailedLint2;
/**
 * The `clippy::cargo` group gives you suggestions on how to improve your `Cargo.toml` file. This might be especially interesting if you want to publish your crate and are not sure if you have all useful information in your `Cargo.toml`.
 */
export type Cargo = LintLevel | DetailedLint2;
/**
 * Checks to see if all common metadata is defined in `Cargo.toml`. See: https://rust-lang-nursery.github.io/api-guidelines/documentation.html#cargotoml-includes-all-common-metadata-c-metadata
 */
export type CargoCommonMetadata = LintLevel | DetailedLint2;
/**
 * Checks for calls to `ends_with` with possible file extensions and suggests to use a case-insensitive approach instead.
 */
export type CaseSensitiveFileExtensionComparisons = LintLevel | DetailedLint2;
/**
 * Checks for usage of the `abs()` method that cast the result to unsigned.
 */
export type CastAbsToUnsigned = LintLevel | DetailedLint2;
/**
 * Checks for casts from an enum tuple constructor to an integer.
 */
export type CastEnumConstructor = LintLevel | DetailedLint2;
/**
 * Checks for casts from an enum type to an integral type that will definitely truncate the value.
 */
export type CastEnumTruncation = LintLevel | DetailedLint2;
/**
 * Checks for casts between numeric types that can be replaced by safe conversion functions.
 */
export type CastLossless = LintLevel | DetailedLint2;
/**
 * Checks for a known NaN float being cast to an integer
 */
export type CastNanToInt = LintLevel | DetailedLint2;
/**
 * Checks for casts between numeric types that may truncate large values. This is expected behavior, so the cast is `Allow` by default. It suggests user either explicitly ignore the lint, or use `try_from()` and handle the truncation, default, or panic explicitly.
 */
export type CastPossibleTruncation = LintLevel | DetailedLint2;
/**
 * Checks for casts from an unsigned type to a signed type of the same size, or possibly smaller due to target-dependent integers. Performing such a cast is a no-op for the compiler (that is, nothing is changed at the bit level), and the binary representation of the value is reinterpreted. This can cause wrapping if the value is too big for the target signed type. However, the cast works as defined, so this lint is `Allow` by default.
 */
export type CastPossibleWrap = LintLevel | DetailedLint2;
/**
 * Checks for casts from any numeric type to a float type where the receiving type cannot store all values from the original type without rounding errors. This possible rounding is to be expected, so this lint is `Allow` by default.
 */
export type CastPrecisionLoss = LintLevel | DetailedLint2;
/**
 * Checks for casts, using `as` or `pointer::cast`, from a less strictly aligned pointer to a more strictly aligned pointer.
 */
export type CastPtrAlignment = LintLevel | DetailedLint2;
/**
 * Checks for casts from a signed to an unsigned numeric type. In this case, negative values wrap around to large positive values, which can be quite surprising in practice. However, since the cast works as defined, this lint is `Allow` by default.
 */
export type CastSignLoss = LintLevel | DetailedLint2;
/**
 * Checks for `as` casts between raw pointers to slices with differently sized elements.
 */
export type CastSliceDifferentSizes = LintLevel | DetailedLint2;
/**
 * Checks for a raw slice being cast to a slice pointer
 */
export type CastSliceFromRawParts = LintLevel | DetailedLint2;
/**
 * Checks for usage of `cfg` that excludes code from `test` builds. (i.e., `#[cfg(not(test))]`)
 */
export type CfgNotTest = LintLevel | DetailedLint2;
/**
 * Checks for usage of a character position yielded by `.chars().enumerate()` in a context where a byte index is expected, such as an argument to a specific `str` method or indexing into a `str` or `String`.
 */
export type CharIndicesAsByteIndices = LintLevel | DetailedLint2;
/**
 * Checks for expressions where a character literal is cast to `u8` and suggests using a byte literal instead.
 */
export type CharLitAsU8 = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.chars().last()` or `_.chars().next_back()` on a `str` to check if it ends with a given char.
 */
export type CharsLastCmp = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.chars().next()` on a `str` to check if it starts with a given char.
 */
export type CharsNextCmp = LintLevel | DetailedLint2;
/**
 * Checks for explicit bounds checking when casting.
 */
export type CheckedConversions = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.drain(..)` for the sole purpose of clearing a container.
 */
export type ClearWithDrain = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.clone()` on a `Copy` type.
 */
export type CloneOnCopy = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.clone()` on a ref-counted pointer, (`Rc`, `Arc`, `rc::Weak`, or `sync::Weak`), and suggests calling Clone via unified function syntax instead (e.g., `Rc::clone(foo)`).
 */
export type CloneOnRefPtr = LintLevel | DetailedLint2;
/**
 * Checks for usage of `cloned()` on an `Iterator` or `Option` where `copied()` could be used instead.
 */
export type ClonedInsteadOfCopied = LintLevel | DetailedLint2;
/**
 * Checks for slice references with cloned references such as `&[f.clone()]`.
 */
export type ClonedRefToSliceRefs = LintLevel | DetailedLint2;
/**
 * This lint checks for equality comparisons with `ptr::null` or `ptr::null_mut`
 */
export type CmpNull = LintLevel | DetailedLint2;
/**
 * Checks for conversions to owned values just for the sake of a comparison.
 */
export type CmpOwned = LintLevel | DetailedLint2;
/**
 * Protects against unintended coercion of references to container types to `&dyn Any` when the container type dereferences to a `dyn Any` which could be directly referenced instead.
 */
export type CoerceContainerToAny = LintLevel | DetailedLint2;
/**
 * We used to think it measured how hard a method is to understand.
 */
export type CognitiveComplexity = LintLevel | DetailedLint2;
/**
 * Checks for collapsible `else { if... }` expressions that can be collapsed to `else if...`.
 */
export type CollapsibleElseIf = LintLevel | DetailedLint2;
/**
 * Checks for nested `if` statements which can be collapsed by `&&`-combining their conditions.
 */
export type CollapsibleIf = LintLevel | DetailedLint2;
/**
 * Finds nested `match` or `if let` expressions where the patterns may be "collapsed" together without adding any branches.
 */
export type CollapsibleMatch = LintLevel | DetailedLint2;
/**
 * Checks for consecutive calls to `str::replace` (2 or more) that can be collapsed into a single call.
 */
export type CollapsibleStrReplace = LintLevel | DetailedLint2;
/**
 * Checks for collections that are never queried.
 */
export type CollectionIsNeverRead = LintLevel | DetailedLint2;
/**
 * Checks comparison chains written with `if` that can be rewritten with `match` and `cmp`.
 */
export type ComparisonChain = LintLevel | DetailedLint2;
/**
 * Checks for comparing to an empty slice such as `""` or `[]`, and suggests using `.is_empty()` where applicable.
 */
export type ComparisonToEmpty = LintLevel | DetailedLint2;
/**
 * The `clippy::complexity` group offers lints that give you suggestions on how to simplify your code. It mostly focuses on code that can be written in a shorter and more readable way, while preserving the semantics.
 */
export type Complexity = LintLevel | DetailedLint2;
/**
 * Checks for casts of a primitive method pointer like `max`/`min` to any integer type.
 */
export type ConfusingMethodToNumericCast = LintLevel | DetailedLint2;
/**
 * It identifies calls to `.is_empty()` on constant values.
 */
export type ConstIsEmpty = LintLevel | DetailedLint2;
/**
 * Checks for types that implement `Copy` as well as `Iterator`.
 */
export type CopyIterator = LintLevel | DetailedLint2;
/**
 * The `clippy::correctness` group is the only lint group in Clippy which lints are deny-by-default and abort the compilation when triggered. This is for good reason: If you see a `correctness` lint, it means that your code is outright wrong or useless, and you should try to fix it.
 */
export type Correctness = LintLevel | DetailedLint2;
/**
 * Checks for usage of `crate` as opposed to `$crate` in a macro definition.
 */
export type CrateInMacroDef = LintLevel | DetailedLint2;
/**
 * Checks usage of `std::fs::create_dir` and suggest using `std::fs::create_dir_all` instead.
 */
export type CreateDir = LintLevel | DetailedLint2;
/**
 * Checks for transmutes between a type `T` and `*T`.
 */
export type CrosspointerTransmute = LintLevel | DetailedLint2;
/**
 * Checks for usage of the `dbg!` macro.
 */
export type DbgMacro = LintLevel | DetailedLint2;
/**
 * Checks for function/method calls with a mutable parameter in `debug_assert!`, `debug_assert_eq!` and `debug_assert_ne!` macros.
 */
export type DebugAssertWithMutCall = LintLevel | DetailedLint2;
/**
 * Checks for decimal literals used as bit masks in bitwise operations.
 */
export type DecimalBitwiseOperands = LintLevel | DetailedLint2;
/**
 * Warns if there is a better representation for a numeric literal.
 */
export type DecimalLiteralRepresentation = LintLevel | DetailedLint2;
/**
 * Checks for the declaration of named constant which contain interior mutability.
 */
export type DeclareInteriorMutableConst = LintLevel | DetailedLint2;
/**
 * Checks for construction on unit struct using `default`.
 */
export type DefaultConstructedUnitStructs = LintLevel | DetailedLint2;
/**
 * It checks for `std::iter::Empty::default()` and suggests replacing it with `std::iter::empty()`.
 */
export type DefaultInsteadOfIterEmpty = LintLevel | DetailedLint2;
/**
 * Checks for usage of unconstrained numeric literals which may cause default numeric fallback in type inference.
 */
export type DefaultNumericFallback = LintLevel | DetailedLint2;
/**
 * Checks for literal calls to `Default::default()`.
 */
export type DefaultTraitAccess = LintLevel | DetailedLint2;
/**
 * Displays a warning when a union is declared with the default representation (without a `#[repr(C)]` attribute).
 */
export type DefaultUnionRepresentation = LintLevel | DetailedLint2;
/**
 * The `clippy::deprecated` is empty lints that exist to ensure that `#[allow(lintname)]` still compiles after the lint was deprecated. Deprecation "removes" lints by removing their functionality and marking them as deprecated, which may cause further warnings but cannot cause a compiler error.
 */
export type Deprecated1 = LintLevel | DetailedLint2;
/**
 * Checks for `#[cfg_attr(rustfmt, rustfmt_skip)]` and suggests to replace it with `#[rustfmt::skip]`.
 */
export type DeprecatedCfgAttr = LintLevel | DetailedLint2;
/**
 * Checks for `#[cfg_attr(feature = "cargo-clippy",...)]` and for `#[cfg(feature = "cargo-clippy")]` and suggests to replace it with `#[cfg_attr(clippy,...)]` or `#[cfg(clippy)]`.
 */
export type DeprecatedClippyCfgAttr = LintLevel | DetailedLint2;
/**
 * Checks for `#[deprecated]` annotations with a `since` field that is not a valid semantic version. Also allows "TBD" to signal future deprecation.
 */
export type DeprecatedSemver = LintLevel | DetailedLint2;
/**
 * Checks for usage of `*&` and `*&mut` in expressions.
 */
export type DerefAddrof = LintLevel | DetailedLint2;
/**
 * Checks for slicing expressions which are equivalent to dereferencing the value.
 */
export type DerefBySlicing = LintLevel | DetailedLint2;
/**
 * Detects manual `std::default::Default` implementations that are identical to a derived implementation.
 */
export type DerivableImpls = LintLevel | DetailedLint2;
/**
 * Lints against manual `PartialOrd` and `Ord` implementations for types with a derived `Ord` or `PartialOrd` implementation.
 */
export type DeriveOrdXorPartialOrd = LintLevel | DetailedLint2;
/**
 * Checks for types that derive `PartialEq` and could implement `Eq`.
 */
export type DerivePartialEqWithoutEq = LintLevel | DetailedLint2;
/**
 * Lints against manual `PartialEq` implementations for types with a derived `Hash` implementation.
 */
export type DerivedHashWithManualEq = LintLevel | DetailedLint2;
/**
 * Denies the configured fields in clippy.toml
 */
export type DisallowedFields = LintLevel | DetailedLint2;
/**
 * Denies the configured macros in clippy.toml
 */
export type DisallowedMacros = LintLevel | DetailedLint2;
/**
 * Denies the configured methods and functions in clippy.toml
 */
export type DisallowedMethods = LintLevel | DetailedLint2;
/**
 * Checks for usage of disallowed names for variables, such as `foo`.
 */
export type DisallowedNames = LintLevel | DetailedLint2;
/**
 * Checks for usage of unicode scripts other than those explicitly allowed by the lint config.
 */
export type DisallowedScriptIdents = LintLevel | DetailedLint2;
/**
 * Denies the configured types in clippy.toml.
 */
export type DisallowedTypes = LintLevel | DetailedLint2;
/**
 * Checks for diverging calls that are not match arms or statements.
 */
export type DivergingSubExpression = LintLevel | DetailedLint2;
/**
 * Checks the doc comments have unbroken links, mostly caused by bad formatted links such as broken across multiple lines.
 */
export type DocBrokenLink = LintLevel | DetailedLint2;
/**
 * Detects doc comment linebreaks that use double spaces to separate lines, instead of back-slash (`\`).
 */
export type DocCommentDoubleSpaceLinebreaks = LintLevel | DetailedLint2;
/**
 * Checks if included files in doc comments are included only for `cfg(doc)`.
 */
export type DocIncludeWithoutCfg = LintLevel | DetailedLint2;
/**
 * In CommonMark Markdown, the language used to write doc comments, a paragraph nested within a list or block quote does not need any line after the first one to be indented or marked. The specification calls this a "lazy paragraph continuation."
 */
export type DocLazyContinuation = LintLevel | DetailedLint2;
/**
 * Checks for links with code directly adjacent to code text: `[`MyItem`]` ``.
 */
export type DocLinkCode = LintLevel | DetailedLint2;
/**
 * Detects the syntax `['foo']` in documentation comments (notice quotes instead of backticks) outside of code blocks
 */
export type DocLinkWithQuotes = LintLevel | DetailedLint2;
/**
 * Checks for the presence of `_`, `::` or camel-case words outside ticks in documentation.
 */
export type DocMarkdown = LintLevel | DetailedLint2;
/**
 * Warns if a link reference definition appears at the start of a list item or quote.
 */
export type DocNestedRefdefs = LintLevel | DetailedLint2;
/**
 * Detects overindented list items in doc comments where the continuation lines are indented more than necessary.
 */
export type DocOverindentedListItems = LintLevel | DetailedLint2;
/**
 * Checks for doc comments whose paragraphs do not end with a period or another punctuation mark. Various Markdowns constructs are taken into account to avoid false positives.
 */
export type DocParagraphsMissingPunctuation = LintLevel | DetailedLint2;
/**
 * Detects syntax that looks like a footnote reference.
 */
export type DocSuspiciousFootnotes = LintLevel | DetailedLint2;
/**
 * Checks for double comparisons that could be simplified to a single expression.
 */
export type DoubleComparisons = LintLevel | DetailedLint2;
/**
 * Checks for `Iterator::last` being called on a `DoubleEndedIterator`, which can be replaced with `DoubleEndedIterator::next_back`.
 */
export type DoubleEndedIteratorLast = LintLevel | DetailedLint2;
/**
 * Checks for a `#[must_use]` attribute without further information on functions and methods that return a type already marked as `#[must_use]`.
 */
export type DoubleMustUse = LintLevel | DetailedLint2;
/**
 * Checks for unnecessary double parentheses.
 */
export type DoubleParens = LintLevel | DetailedLint2;
/**
 * Checks for calls to `.drain()` that clear the collection, immediately followed by a call to `.collect()`.
 */
export type DrainCollect = LintLevel | DetailedLint2;
/**
 * Checks for calls to `std::mem::drop` with a value that does not implement `Drop`.
 */
export type DropNonDrop = LintLevel | DetailedLint2;
/**
 * Checks for files that are included as modules multiple times.
 */
export type DuplicateMod = LintLevel | DetailedLint2;
/**
 * Checks for function arguments having the similar names differing by an underscore.
 */
export type DuplicateUnderscoreArgument = LintLevel | DetailedLint2;
/**
 * Checks for attributes that appear two or more times.
 */
export type DuplicatedAttributes = LintLevel | DetailedLint2;
/**
 * Checks for instances where a `std::time::Duration` is constructed using a smaller time unit when the value could be expressed more clearly using a larger unit.
 */
export type DurationSuboptimalUnits = LintLevel | DetailedLint2;
/**
 * Checks for calculation of subsecond microseconds or milliseconds from other `Duration` methods.
 */
export type DurationSubsec = LintLevel | DetailedLint2;
/**
 * Checks for integer validity checks, followed by a transmute that is (incorrectly) evaluated eagerly (e.g. using `bool::then_some`).
 */
export type EagerTransmute = LintLevel | DetailedLint2;
/**
 * Checks for lifetime annotations which can be replaced with anonymous lifetimes (`'_`).
 */
export type ElidableLifetimeNames = LintLevel | DetailedLint2;
/**
 * Checks for usage of if expressions with an `else if` branch, but without a final `else` branch.
 */
export type ElseIfWithoutElse = LintLevel | DetailedLint2;
/**
 * Detects documentation that is empty.
 */
export type EmptyDocs = LintLevel | DetailedLint2;
/**
 * Checks for empty `Drop` implementations.
 */
export type EmptyDrop = LintLevel | DetailedLint2;
/**
 * Finds enum variants without fields that are declared with empty brackets.
 */
export type EmptyEnumVariantsWithBrackets = LintLevel | DetailedLint2;
/**
 * Checks for `enum`s with no variants, which therefore are uninhabited types (cannot be instantiated).
 */
export type EmptyEnums = LintLevel | DetailedLint2;
/**
 * Checks for empty lines after doc comments.
 */
export type EmptyLineAfterDocComments = LintLevel | DetailedLint2;
/**
 * Checks for empty lines after outer attributes
 */
export type EmptyLineAfterOuterAttr = LintLevel | DetailedLint2;
/**
 * Checks for empty `loop` expressions.
 */
export type EmptyLoop = LintLevel | DetailedLint2;
/**
 * Finds structs without fields (a so-called "empty struct") that are declared with brackets.
 */
export type EmptyStructsWithBrackets = LintLevel | DetailedLint2;
/**
 * Checks for C-like enumerations that are `repr(isize/usize)` and have values that don't fit into an `i32`.
 */
export type EnumClikeUnportableVariant = LintLevel | DetailedLint2;
/**
 * Checks for `use Enum::*`.
 */
export type EnumGlobUse = LintLevel | DetailedLint2;
/**
 * Detects enumeration variants that are prefixed or suffixed by the same characters.
 */
export type EnumVariantNames = LintLevel | DetailedLint2;
/**
 * Checks for equal operands to comparison, logical and bitwise, difference and division binary operators (`==`, `>`, etc., `&&`, `||`, `&`, `|`, `^`, `-` and `/`).
 */
export type EqOp = LintLevel | DetailedLint2;
/**
 * Checks for pattern matchings that can be expressed using equality.
 */
export type EquatableIfLet = LintLevel | DetailedLint2;
/**
 * Checks for erasing operations, e.g., `x * 0`.
 */
export type ErasingOp = LintLevel | DetailedLint2;
/**
 * Checks for `.err().expect()` calls on the `Result` type.
 */
export type ErrExpect = LintLevel | DetailedLint2;
/**
 * Checks for types named `Error` that implement `Error`.
 */
export type ErrorImplError = LintLevel | DetailedLint2;
/**
 * Checks for blocks which are nested beyond a certain threshold.
 */
export type ExcessiveNesting = LintLevel | DetailedLint2;
/**
 * Checks for float literals with a precision greater than that supported by the underlying type.
 */
export type ExcessivePrecision = LintLevel | DetailedLint2;
/**
 * Warns on any exported `enum`s that are not tagged `#[non_exhaustive]`
 */
export type ExhaustiveEnums = LintLevel | DetailedLint2;
/**
 * Warns on any exported `struct`s that are not tagged `#[non_exhaustive]`
 */
export type ExhaustiveStructs = LintLevel | DetailedLint2;
/**
 * Detects calls to the `exit()` function that are not in the `main` function. Calls to `exit()` immediately terminate the program.
 */
export type Exit = LintLevel | DetailedLint2;
/**
 * Checks for calls to `.expect(&format!(...))`, `.expect(foo(..))`, etc., and suggests to use `unwrap_or_else` instead
 */
export type ExpectFunCall = LintLevel | DetailedLint2;
/**
 * Checks for `.expect()` or `.expect_err()` calls on `Result`s and `.expect()` call on `Option`s.
 */
export type ExpectUsed = LintLevel | DetailedLint2;
/**
 * Checks for explicit `Clone` implementations for `Copy` types.
 */
export type ExplImplCloneOnCopy = LintLevel | DetailedLint2;
/**
 * Checks for dereferencing expressions which would be covered by auto-deref.
 */
export type ExplicitAutoDeref = LintLevel | DetailedLint2;
/**
 * Checks `for` loops over slices with an explicit counter and suggests the use of `.enumerate()`.
 */
export type ExplicitCounterLoop = LintLevel | DetailedLint2;
/**
 * Checks for explicit `deref()` or `deref_mut()` method calls.
 */
export type ExplicitDerefMethods = LintLevel | DetailedLint2;
/**
 * Checks for loops on `y.into_iter()` where `y` will do, and suggests the latter.
 */
export type ExplicitIntoIterLoop = LintLevel | DetailedLint2;
/**
 * Checks for loops on `x.iter()` where `&x` will do, and suggests the latter.
 */
export type ExplicitIterLoop = LintLevel | DetailedLint2;
/**
 * Checks for usage of `write!()` / `writeln()!` which can be replaced with `(e)print!()` / `(e)println!()`
 */
export type ExplicitWrite = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type ExtendFromSlice = LintLevel | DetailedLint2;
/**
 * Checks for occurrences where one vector gets extended instead of append
 */
export type ExtendWithDrain = LintLevel | DetailedLint2;
/**
 * Checks for lifetimes in generics that are never used anywhere else.
 */
export type ExtraUnusedLifetimes = LintLevel | DetailedLint2;
/**
 * Checks for type parameters in generics that are never used anywhere else.
 */
export type ExtraUnusedTypeParameters = LintLevel | DetailedLint2;
/**
 * Checks for impls of `From ` that contain `panic!()` or `unwrap()`
 */
export type FallibleImplFrom = LintLevel | DetailedLint2;
/**
 * Checks for immediate reassignment of fields initialized with Default::default().
 */
export type FieldReassignWithDefault = LintLevel | DetailedLint2;
/**
 * Checks for usage of scoped visibility modifiers, like `pub(crate)`, on fields. These make a field visible within a scope between public and private.
 */
export type FieldScopedVisibilityModifiers = LintLevel | DetailedLint2;
/**
 * Checks for `FileType::is_file()`.
 */
export type FiletypeIsFile = LintLevel | DetailedLint2;
/**
 * Checks for usage of `bool::then` in `Iterator::filter_map`.
 */
export type FilterMapBoolThen = LintLevel | DetailedLint2;
/**
 * Checks for usage of `filter_map(|x| x)`.
 */
export type FilterMapIdentity = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.filter_map(_).next()`.
 */
export type FilterMapNext = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.filter(_).next()`.
 */
export type FilterNext = LintLevel | DetailedLint2;
/**
 * Checks for usage of `flat_map(|x| x)`.
 */
export type FlatMapIdentity = LintLevel | DetailedLint2;
/**
 * Checks for usage of `Iterator::flat_map()` where `filter_map()` could be used instead.
 */
export type FlatMapOption = LintLevel | DetailedLint2;
/**
 * Checks for float arithmetic.
 */
export type FloatArithmetic = LintLevel | DetailedLint2;
/**
 * Checks for (in-)equality comparisons on floating-point values (apart from zero), except in functions called `*eq*` (which probably implement equality for a type involving floats).
 */
export type FloatCmp = LintLevel | DetailedLint2;
/**
 * Checks for (in-)equality comparisons on constant floating-point values (apart from zero), except in functions called `*eq*` (which probably implement equality for a type involving floats).
 */
export type FloatCmpConst = LintLevel | DetailedLint2;
/**
 * Checks for statements of the form `(a - b)
 */
export type FloatEqualityWithoutAbs = LintLevel | DetailedLint2;
/**
 * Checks for excessive use of bools in function definitions.
 */
export type FnParamsExcessiveBools = LintLevel | DetailedLint2;
/**
 * Checks for casts of function pointers to something other than `usize`.
 */
export type FnToNumericCast = LintLevel | DetailedLint2;
/**
 * Checks for casts of a function pointer to any integer type.
 */
export type FnToNumericCastAny = LintLevel | DetailedLint2;
/**
 * Checks for casts of a function pointer to a numeric type not wide enough to store an address.
 */
export type FnToNumericCastWithTruncation = LintLevel | DetailedLint2;
/**
 * Checks for iterating a map (`HashMap` or `BTreeMap`) and ignoring either the keys or values.
 */
export type ForKvMap = LintLevel | DetailedLint2;
/**
 * Checks for calls to `std::mem::forget` with a value that does not implement `Drop`.
 */
export type ForgetNonDrop = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.map(|_| format!(..)).collect:: ()`.
 */
export type FormatCollect = LintLevel | DetailedLint2;
/**
 * Detects `format!` within the arguments of another macro that does formatting such as `format!` itself, `write!` or `println!`. Suggests inlining the `format!` call.
 */
export type FormatInFormatArgs = LintLevel | DetailedLint2;
/**
 * Detects cases where the result of a `format!` call is appended to an existing `String`.
 */
export type FormatPushString = LintLevel | DetailedLint2;
/**
 * Checks for outer doc comments written with 4 forward slashes (`////`).
 */
export type FourForwardSlashes = LintLevel | DetailedLint2;
/**
 * Checks for `from_iter()` function calls on types that implement the `FromIterator` trait.
 */
export type FromIterInsteadOfCollect = LintLevel | DetailedLint2;
/**
 * Searches for implementations of the `Into ` trait and suggests to implement `From ` instead.
 */
export type FromOverInto = LintLevel | DetailedLint2;
/**
 * Checks if we're passing a `c_void` raw pointer to `{Box,Rc,Arc,Weak}::from_raw(_)`
 */
export type FromRawWithVoidPtr = LintLevel | DetailedLint2;
/**
 * Checks for function invocations of the form `primitive::from_str_radix(s, 10)`
 */
export type FromStrRadix10 = LintLevel | DetailedLint2;
/**
 * This lint requires Future implementations returned from functions and methods to implement the `Send` marker trait, ignoring type parameters.
 */
export type FutureNotSend = LintLevel | DetailedLint2;
/**
 * Checks for usage of `x.get(0)` instead of `x.first()` or `x.front()`.
 */
export type GetFirst = LintLevel | DetailedLint2;
/**
 * Checks for usage of `x.get(x.len() - 1)` instead of `x.last()`.
 */
export type GetLastWithLen = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.get().unwrap()` (or `.get_mut().unwrap`) on a standard library type which implements `Index`
 */
export type GetUnwrap = LintLevel | DetailedLint2;
/**
 * Checks for the usage of the `to_ne_bytes` method and/or the function `from_ne_bytes`.
 */
export type HostEndianBytes = LintLevel | DetailedLint2;
/**
 * Checks for identity operations, e.g., `x + 0`.
 */
export type IdentityOp = LintLevel | DetailedLint2;
/**
 * Checks for `Mutex::lock` calls in `if let` expression with lock calls in any of the else blocks.
 */
export type IfLetMutex = LintLevel | DetailedLint2;
/**
 * Checks for usage of `!` or `!=` in an if condition with an else branch.
 */
export type IfNotElse = LintLevel | DetailedLint2;
/**
 * Checks for `if/else` with the same body as the then part and the else part.
 */
export type IfSameThenElse = LintLevel | DetailedLint2;
/**
 * Checks for if-else that could be written using either `bool::then` or `bool::then_some`.
 */
export type IfThenSomeElseNone = LintLevel | DetailedLint2;
/**
 * Checks for consecutive `if`s with the same condition.
 */
export type IfsSameCond = LintLevel | DetailedLint2;
/**
 * Checks for ignored tests without messages.
 */
export type IgnoreWithoutReason = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_` in patterns of type `()`.
 */
export type IgnoredUnitPatterns = LintLevel | DetailedLint2;
/**
 * This lint is concerned with the semantics of `Borrow` and `Hash` for a type that implements all three of `Hash`, `Borrow ` and `Borrow ` as it is impossible to satisfy the semantics of Borrow and `Hash` for both `Borrow ` and `Borrow `.
 */
export type ImplHashBorrowWithStrAndBytes = LintLevel | DetailedLint2;
/**
 * Lints when `impl Trait` is being used in a function's parameters.
 */
export type ImplTraitInParams = LintLevel | DetailedLint2;
/**
 * Checks for the usage of `_.to_owned()`, `vec.to_vec()`, or similar when calling `_.clone()` would be clearer.
 */
export type ImplicitClone = LintLevel | DetailedLint2;
/**
 * Checks for public `impl` or `fn` missing generalization over different hashers and implicitly defaulting to the default hashing algorithm (`SipHash`).
 */
export type ImplicitHasher = LintLevel | DetailedLint2;
/**
 * Checks for missing return statements at the end of a block.
 */
export type ImplicitReturn = LintLevel | DetailedLint2;
/**
 * Checks for implicit saturating addition.
 */
export type ImplicitSaturatingAdd = LintLevel | DetailedLint2;
/**
 * Checks for implicit saturating subtraction.
 */
export type ImplicitSaturatingSub = LintLevel | DetailedLint2;
/**
 * Looks for bounds in `impl Trait` in return position that are implied by other bounds. This can happen when a trait is specified that another trait already has as a supertrait (e.g. `fn() -> impl Deref + DerefMut ` has an unnecessary `Deref` bound, because `Deref` is a supertrait of `DerefMut`)
 */
export type ImpliedBoundsInImpls = LintLevel | DetailedLint2;
/**
 * Checks for double comparisons that can never succeed
 */
export type ImpossibleComparisons = LintLevel | DetailedLint2;
/**
 * Looks for floating-point expressions that can be expressed using built-in methods to improve accuracy at the cost of performance.
 */
export type ImpreciseFlops = LintLevel | DetailedLint2;
/**
 * This lint checks that no function newer than the defined MSRV (minimum supported rust version) is used in the crate.
 */
export type IncompatibleMsrv = LintLevel | DetailedLint2;
/**
 * Warns if an integral or floating-point constant is grouped inconsistently with underscores.
 */
export type InconsistentDigitGrouping = LintLevel | DetailedLint2;
/**
 * Checks for struct constructors where the order of the field init in the constructor is inconsistent with the order in the struct definition.
 */
export type InconsistentStructConstructor = LintLevel | DetailedLint2;
/**
 * The lint checks for slice bindings in patterns that are only used to access individual slice values.
 */
export type IndexRefutableSlice = LintLevel | DetailedLint2;
/**
 * Checks for usage of indexing or slicing that may panic at runtime.
 */
export type IndexingSlicing = LintLevel | DetailedLint2;
/**
 * Checks for bit masks in comparisons which can be removed without changing the outcome. The basic structure can be seen in the following table:
 */
export type IneffectiveBitMask = LintLevel | DetailedLint2;
/**
 * Checks if both `.write(true)` and `.append(true)` methods are called on a same `OpenOptions`.
 */
export type IneffectiveOpenOptions = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.to_string()` on an `&&T` where `T` implements `ToString` directly (like `&&str` or `&&String`).
 */
export type InefficientToString = LintLevel | DetailedLint2;
/**
 * Checks for matches being used to destructure a single-variant enum or tuple struct where a `let` will suffice.
 */
export type InfallibleDestructuringMatch = LintLevel | DetailedLint2;
/**
 * Finds manual impls of `TryFrom` with infallible error types.
 */
export type InfallibleTryFrom = LintLevel | DetailedLint2;
/**
 * Checks for iteration that is guaranteed to be infinite.
 */
export type InfiniteIter = LintLevel | DetailedLint2;
/**
 * Checks for infinite loops in a function where the return type is not `!` and lint accordingly.
 */
export type InfiniteLoop = LintLevel | DetailedLint2;
/**
 * Checks for the definition of inherent methods with a signature of `to_string(&self) -> String`.
 */
export type InherentToString = LintLevel | DetailedLint2;
/**
 * Checks for the definition of inherent methods with a signature of `to_string(&self) -> String` and if the type implementing this method also implements the `Display` trait.
 */
export type InherentToStringShadowDisplay = LintLevel | DetailedLint2;
/**
 * Checks for tuple structs initialized with field syntax. It will however not lint if a base initializer is present. The lint will also ignore code in macros.
 */
export type InitNumberedFields = LintLevel | DetailedLint2;
/**
 * Checks for items annotated with `#[inline(always)]`, unless the annotated function is empty or simply panics.
 */
export type InlineAlways = LintLevel | DetailedLint2;
/**
 * Checks for usage of AT&T x86 assembly syntax.
 */
export type InlineAsmX86AttSyntax = LintLevel | DetailedLint2;
/**
 * Checks for usage of Intel x86 assembly syntax.
 */
export type InlineAsmX86IntelSyntax = LintLevel | DetailedLint2;
/**
 * Checks for `#[inline]` on trait methods without bodies
 */
export type InlineFnWithoutBody = LintLevel | DetailedLint2;
/**
 * Checks for usage of `inspect().for_each()`.
 */
export type InspectForEach = LintLevel | DetailedLint2;
/**
 * Checks for usage of `x >= y + 1` or `x - 1 >= y` (and `
 */
export type IntPlusOne = LintLevel | DetailedLint2;
/**
 * Checks for division of integers
 */
export type IntegerDivision = LintLevel | DetailedLint2;
/**
 * Checks for the usage of division (`/`) and remainder (`%`) operations when performed on any integer types using the default `Div` and `Rem` trait implementations.
 */
export type IntegerDivisionRemainderUsed = LintLevel | DetailedLint2;
/**
 * Checks for `into_iter` calls on references which should be replaced by `iter` or `iter_mut`.
 */
export type IntoIterOnRef = LintLevel | DetailedLint2;
/**
 * This is the opposite of the `iter_without_into_iter` lint. It looks for `IntoIterator for (&|&mut) Type` implementations without an inherent `iter` or `iter_mut` method on the type or on any of the types in its `Deref` chain.
 */
export type IntoIterWithoutIter = LintLevel | DetailedLint2;
/**
 * Checks regex creation (with `Regex::new`, `RegexBuilder::new`, or `RegexSet::new`) for correct regex syntax.
 */
export type InvalidRegex = LintLevel | DetailedLint2;
/**
 * Checks for comparisons where the relation is always either true or false, but where one side has been upcast so that the comparison is necessary. Only integer types are checked.
 */
export type InvalidUpcastComparisons = LintLevel | DetailedLint2;
/**
 * Checks for comparisons between integers, followed by subtracting the greater value from the lower one.
 */
export type InvertedSaturatingSub = LintLevel | DetailedLint2;
/**
 * Checks for invisible Unicode characters in the code.
 */
export type InvisibleCharacters = LintLevel | DetailedLint2;
/**
 * This lint warns on calling `io::Error::new(..)` with a kind of `io::ErrorKind::Other`.
 */
export type IoOtherError = LintLevel | DetailedLint2;
/**
 * Checks for IP addresses that could be replaced with predefined constants such as `Ipv4Addr::new(127, 0, 0, 1)` instead of using the appropriate constants.
 */
export type IpConstant = LintLevel | DetailedLint2;
/**
 * Finds usages of `char::is_digit` that can be replaced with `is_ascii_digit` or `is_ascii_hexdigit`.
 */
export type IsDigitAsciiRadix = LintLevel | DetailedLint2;
/**
 * Checks for items declared after some statement in a block.
 */
export type ItemsAfterStatements = LintLevel | DetailedLint2;
/**
 * Triggers if an item is declared after the testing module marked with `#[cfg(test)]`.
 */
export type ItemsAfterTestModule = LintLevel | DetailedLint2;
/**
 * Checks for the use of `.cloned().collect()` on slice to create a `Vec`.
 */
export type IterClonedCollect = LintLevel | DetailedLint2;
/**
 * Checks for the use of `.iter().count()`.
 */
export type IterCount = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.filter(Result::is_ok)` that may be replaced with a `.flatten()` call. This lint will require additional changes to the follow-up calls as it affects the type.
 */
export type IterFilterIsOk = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.filter(Option::is_some)` that may be replaced with a `.flatten()` call. This lint will require additional changes to the follow-up calls as it affects the type.
 */
export type IterFilterIsSome = LintLevel | DetailedLint2;
/**
 * Checks for iterating a map (`HashMap` or `BTreeMap`) and ignoring either the keys or values.
 */
export type IterKvMap = LintLevel | DetailedLint2;
/**
 * Checks for loops on `x.next()`.
 */
export type IterNextLoop = LintLevel | DetailedLint2;
/**
 * Checks for usage of `iter().next()` on a Slice or an Array
 */
export type IterNextSlice = LintLevel | DetailedLint2;
/**
 * Detects methods named `iter` or `iter_mut` that do not have a return type that implements `Iterator`.
 */
export type IterNotReturningIterator = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.iter().nth()`/`.iter_mut().nth()` on standard library types that have equivalent `.get()`/`.get_mut()` methods.
 */
export type IterNth = LintLevel | DetailedLint2;
/**
 * Checks for the use of `iter.nth(0)`.
 */
export type IterNthZero = LintLevel | DetailedLint2;
/**
 * Checks for calls to `iter`, `iter_mut` or `into_iter` on empty collections
 */
export type IterOnEmptyCollections = LintLevel | DetailedLint2;
/**
 * Checks for calls to `iter`, `iter_mut` or `into_iter` on collections containing a single item
 */
export type IterOnSingleItems = LintLevel | DetailedLint2;
/**
 * Looks for iterator combinator calls such as `.take(x)` or `.skip(x)` where `x` is greater than the amount of items that an iterator will produce.
 */
export type IterOutOfBounds = LintLevel | DetailedLint2;
/**
 * This is a restriction lint which prevents the use of hash types (i.e., `HashSet` and `HashMap`) in for loops.
 */
export type IterOverHashType = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.cloned(). ()` where call to `.cloned()` can be postponed.
 */
export type IterOvereagerCloned = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.skip(x).next()` on iterators.
 */
export type IterSkipNext = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.skip(0)` on iterators.
 */
export type IterSkipZero = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.drain(..)` on `Vec` and `VecDeque` for iteration.
 */
export type IterWithDrain = LintLevel | DetailedLint2;
/**
 * Looks for `iter` and `iter_mut` methods without an associated `IntoIterator for (&|&mut) Type` implementation.
 */
export type IterWithoutIntoIter = LintLevel | DetailedLint2;
/**
 * Checks for calling `.step_by(0)` on iterators which panics.
 */
export type IteratorStepByZero = LintLevel | DetailedLint2;
/**
 * Checks for calls to `Path::join` that start with a path separator (`\\` or `/`).
 */
export type JoinAbsolutePaths = LintLevel | DetailedLint2;
/**
 * Checks if you have variables whose name consists of just underscores and digits.
 */
export type JustUnderscoresAndDigits = LintLevel | DetailedLint2;
/**
 * Checks for large `const` arrays that should be defined as `static` instead.
 */
export type LargeConstArrays = LintLevel | DetailedLint2;
/**
 * Warns if the digits of an integral or floating-point constant are grouped into groups that are too large.
 */
export type LargeDigitGroups = LintLevel | DetailedLint2;
/**
 * Checks for large size differences between variants on `enum`s.
 */
export type LargeEnumVariant = LintLevel | DetailedLint2;
/**
 * It checks for the size of a `Future` created by `async fn` or `async {}`.
 */
export type LargeFutures = LintLevel | DetailedLint2;
/**
 * Checks for the inclusion of large files via `include_bytes!()` or `include_str!()`.
 */
export type LargeIncludeFile = LintLevel | DetailedLint2;
/**
 * Checks for local arrays that may be too large.
 */
export type LargeStackArrays = LintLevel | DetailedLint2;
/**
 * Checks for functions that use a lot of stack space.
 */
export type LargeStackFrames = LintLevel | DetailedLint2;
/**
 * Checks for functions taking arguments by value, where the argument type is `Copy` and large enough to be worth considering passing by reference. Does not trigger if the function is being exported, because that might induce API breakage, if the parameter is declared as mutable, or if the argument is a `self`.
 */
export type LargeTypesPassedByValue = LintLevel | DetailedLint2;
/**
 * Checks for usage of `::max_value()`, `std::::MAX`, `std::::EPSILON`, etc.
 */
export type LegacyNumericConstants = LintLevel | DetailedLint2;
/**
 * Checks for items that implement `.len()` but not `.is_empty()`.
 */
export type LenWithoutIsEmpty = LintLevel | DetailedLint2;
/**
 * Checks for getting the length of something via `.len()` just to compare to zero, and suggests using `.is_empty()` where applicable.
 */
export type LenZero = LintLevel | DetailedLint2;
/**
 * Checks for `let`-bindings, which are subsequently returned.
 */
export type LetAndReturn = LintLevel | DetailedLint2;
/**
 * Checks for `let _ = ` where the resulting type of expr implements `Future`
 */
export type LetUnderscoreFuture = LintLevel | DetailedLint2;
/**
 * Checks for `let _ = sync_lock`. This supports `mutex` and `rwlock` in `parking_lot`. For `std` locks see the `rustc` lint `let_underscore_lock`
 */
export type LetUnderscoreLock1 = LintLevel | DetailedLint2;
/**
 * Checks for `let _ = ` where expr is `#[must_use]`
 */
export type LetUnderscoreMustUse = LintLevel | DetailedLint2;
/**
 * Checks for `let _ = ` without a type annotation, and suggests to either provide one, or remove the `let` keyword altogether.
 */
export type LetUnderscoreUntyped = LintLevel | DetailedLint2;
/**
 * Checks for binding a unit value.
 */
export type LetUnitValue = LintLevel | DetailedLint2;
/**
 * Detects when a variable is declared with an explicit type of `_`.
 */
export type LetWithTypeUnderscore = LintLevel | DetailedLint2;
/**
 * Checks for usage of `lines.filter_map(Result::ok)` or `lines.flat_map(Result::ok)` when `lines` has type `std::io::Lines`.
 */
export type LinesFilterMapOk = LintLevel | DetailedLint2;
/**
 * Checks for usage of any `LinkedList`, suggesting to use a `Vec` or a `VecDeque` (formerly called `RingBuf`).
 */
export type Linkedlist = LintLevel | DetailedLint2;
/**
 * Checks for lint groups with the same priority as lints in the `Cargo.toml` `[lints]` table.
 */
export type LintGroupsPriority = LintLevel | DetailedLint2;
/**
 * Checks if string literals have formatting arguments outside of macros using them (like `format!`).
 */
export type LiteralStringWithFormattingArgs = LintLevel | DetailedLint2;
/**
 * Checks for the usage of the `to_le_bytes` method and/or the function `from_le_bytes`.
 */
export type LittleEndianBytes = LintLevel | DetailedLint2;
/**
 * Checks for whole number float literals that cannot be represented as the underlying type without loss.
 */
export type LossyFloatLiteral = LintLevel | DetailedLint2;
/**
 * Looks for macros that expand metavariables in an unsafe block.
 */
export type MacroMetavarsInUnsafe = LintLevel | DetailedLint2;
/**
 * Checks for `#[macro_use] use...`.
 */
export type MacroUseImports = LintLevel | DetailedLint2;
/**
 * Checks for recursion using the entrypoint.
 */
export type MainRecursion = LintLevel | DetailedLint2;
/**
 * Detects patterns like `if a > b { a - b } else { b - a }` and suggests using `a.abs_diff(b)`.
 */
export type ManualAbsDiff = LintLevel | DetailedLint2;
/**
 * Detects `if`-then-`panic!` that can be replaced with `assert!`.
 */
export type ManualAssert = LintLevel | DetailedLint2;
/**
 * It checks for manual implementations of `async` functions.
 */
export type ManualAsyncFn = LintLevel | DetailedLint2;
/**
 * Checks for usage of `size_of:: () * 8` when `T::BITS` is available.
 */
export type ManualBits = LintLevel | DetailedLint2;
/**
 * Checks for the manual creation of C strings (a string with a `NUL` byte at the end), either through one of the `CStr` constructor functions, or more plainly by calling `.as_ptr()` on a (byte) string literal with a hardcoded `\0` byte at the end.
 */
export type ManualCStrLiterals = LintLevel | DetailedLint2;
/**
 * Detects manual zero checks before dividing integers, such as `if x!= 0 { y / x }`.
 */
export type ManualCheckedOps = LintLevel | DetailedLint2;
/**
 * Identifies good opportunities for a clamp function from std or core, and suggests using it.
 */
export type ManualClamp = LintLevel | DetailedLint2;
/**
 * Checks for usage of `iter().any()` on slices when it can be replaced with `contains()` and suggests doing so.
 */
export type ManualContains = LintLevel | DetailedLint2;
/**
 * Checks for casts of small constant literals or `mem::align_of` results to raw pointers.
 */
export type ManualDanglingPtr = LintLevel | DetailedLint2;
/**
 * Checks for an expression like `(x + (y - 1)) / y` which is a common manual reimplementation of `x.div_ceil(y)`.
 */
export type ManualDivCeil = LintLevel | DetailedLint2;
/**
 * Checks for usage of `match` which could be implemented using `filter`
 */
export type ManualFilter = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.filter(_).map(_)` that can be written more simply as `filter_map(_)`.
 */
export type ManualFilterMap = LintLevel | DetailedLint2;
/**
 * Checks for manual implementations of Iterator::find
 */
export type ManualFind = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.find(_).map(_)` that can be written more simply as `find_map(_)`.
 */
export type ManualFindMap = LintLevel | DetailedLint2;
/**
 * Checks for unnecessary `if let` usage in a for loop where only the `Some` or `Ok` variant of the iterator element is used.
 */
export type ManualFlatten = LintLevel | DetailedLint2;
/**
 * Checks for cases where `BuildHasher::hash_one` can be used.
 */
export type ManualHashOne = LintLevel | DetailedLint2;
/**
 * Checks for manual case-insensitive ASCII comparison.
 */
export type ManualIgnoreCaseCmp = LintLevel | DetailedLint2;
/**
 * Checks for expressions like `N - x.leading_zeros()` (where `N` is one less than bit width of `x`) or `x.ilog(2)`, which are manual reimplementations of `x.ilog2()`
 */
export type ManualIlog2 = LintLevel | DetailedLint2;
/**
 * Checks for uses of `map` which return the original item.
 */
export type ManualInspect = LintLevel | DetailedLint2;
/**
 * Lints subtraction between `Instant::now()` and another `Instant`.
 */
export type ManualInstantElapsed = LintLevel | DetailedLint2;
/**
 * Suggests to use dedicated built-in methods, `is_ascii_(lowercase|uppercase|digit|hexdigit)` for checking on corresponding ascii range
 */
export type ManualIsAsciiCheck = LintLevel | DetailedLint2;
/**
 * Checks for manual `is_finite` reimplementations (i.e., `x!=::INFINITY && x!=::NEG_INFINITY`).
 */
export type ManualIsFinite = LintLevel | DetailedLint2;
/**
 * Checks for manual `is_infinite` reimplementations (i.e., `x ==::INFINITY || x ==::NEG_INFINITY`).
 */
export type ManualIsInfinite = LintLevel | DetailedLint2;
/**
 * Checks for manual implementation of `.is_multiple_of()` on unsigned integer types.
 */
export type ManualIsMultipleOf = LintLevel | DetailedLint2;
/**
 * Checks for expressions like `x.count_ones() == 1` or `x & (x - 1) == 0`, with x and unsigned integer, which may be manual reimplementations of `x.is_power_of_two()`.
 */
export type ManualIsPowerOfTwo = LintLevel | DetailedLint2;
/**
 * Checks for usage of `option.map(f).unwrap_or_default()` and `result.map(f).unwrap_or_default()` where `f` is a function or closure that returns the `bool` type.
 */
export type ManualIsVariantAnd = LintLevel | DetailedLint2;
/**
 * Warn of cases where `let...else` could be used
 */
export type ManualLetElse = LintLevel | DetailedLint2;
/**
 * Checks for references on `std::path::MAIN_SEPARATOR.to_string()` used to build a `&str`.
 */
export type ManualMainSeparatorStr = LintLevel | DetailedLint2;
/**
 * Checks for usage of `match` which could be implemented using `map`
 */
export type ManualMap = LintLevel | DetailedLint2;
/**
 * Checks for for-loops that manually copy items between slices that could be optimized by having a memcpy.
 */
export type ManualMemcpy = LintLevel | DetailedLint2;
/**
 * Checks for manual implementation of `midpoint`.
 */
export type ManualMidpoint = LintLevel | DetailedLint2;
/**
 * Checks for `.rev().next()` on a `DoubleEndedIterator`
 */
export type ManualNextBack = LintLevel | DetailedLint2;
/**
 * Checks for manual implementations of the non-exhaustive pattern.
 */
export type ManualNonExhaustive = LintLevel | DetailedLint2;
/**
 * Checks for manual implementations of `std::task::Wake` that are empty.
 */
export type ManualNoopWaker = LintLevel | DetailedLint2;
/**
 * Checks for manual implementation of `.ok()` or `.err()` on `Result` values.
 */
export type ManualOkErr = LintLevel | DetailedLint2;
/**
 * Finds patterns that reimplement `Option::ok_or`.
 */
export type ManualOkOr = LintLevel | DetailedLint2;
/**
 * This detects various manual reimplementations of `Option::as_slice`.
 */
export type ManualOptionAsSlice = LintLevel | DetailedLint2;
/**
 * Checks for usage of `a.and_then(|a| b.map(|b| (a, b)))` which can be more concisely expressed as `a.zip(b)`.
 */
export type ManualOptionZip = LintLevel | DetailedLint2;
/**
 * Checks for manual `char` comparison in string patterns
 */
export type ManualPatternCharComparison = LintLevel | DetailedLint2;
/**
 * Checks for code to be replaced by `pop_if` methods.
 */
export type ManualPopIf = LintLevel | DetailedLint2;
/**
 * Checks for expressions like `x >= 3 && x
 */
export type ManualRangeContains = LintLevel | DetailedLint2;
/**
 * Looks for combined OR patterns that are all contained in a specific range, e.g. `6 | 4 | 5 | 9 | 7 | 8` can be rewritten as `4..=9`.
 */
export type ManualRangePatterns = LintLevel | DetailedLint2;
/**
 * Checks for an expression like `((x % 4) + 4) % 4` which is a common manual reimplementation of `x.rem_euclid(4)`.
 */
export type ManualRemEuclid = LintLevel | DetailedLint2;
/**
 * Checks for `repeat().take()` that can be replaced with `repeat_n()`.
 */
export type ManualRepeatN = LintLevel | DetailedLint2;
/**
 * Checks for code to be replaced by `.retain()`.
 */
export type ManualRetain = LintLevel | DetailedLint2;
/**
 * It detects manual bit rotations that could be rewritten using standard functions `rotate_left` or `rotate_right`.
 */
export type ManualRotate = LintLevel | DetailedLint2;
/**
 * Checks for `.checked_add/sub(x).unwrap_or(MAX/MIN)`.
 */
export type ManualSaturatingArithmetic = LintLevel | DetailedLint2;
/**
 * Checks for manually filling a slice with a value.
 */
export type ManualSliceFill = LintLevel | DetailedLint2;
/**
 * When `a` is `&[T]`, detect `a.len() * size_of:: ()` and suggest `size_of_val(a)` instead.
 */
export type ManualSliceSizeCalculation = LintLevel | DetailedLint2;
/**
 * Checks for usage of `str::splitn(2, _)`
 */
export type ManualSplitOnce = LintLevel | DetailedLint2;
/**
 * Checks for manual implementations of `str::repeat`
 */
export type ManualStrRepeat = LintLevel | DetailedLint2;
/**
 * Checks for usage of `""` to create a `String`, such as `"".to_string()`, `"".to_owned()`, `String::from("")` and others.
 */
export type ManualStringNew = LintLevel | DetailedLint2;
/**
 * Suggests using `strip_{prefix,suffix}` over `str::{starts,ends}_with` and slicing using the pattern's length.
 */
export type ManualStrip = LintLevel | DetailedLint2;
/**
 * Checks for manual swapping.
 */
export type ManualSwap = LintLevel | DetailedLint2;
/**
 * Detects manual re-implementations of `std::mem::take`.
 */
export type ManualTake = LintLevel | DetailedLint2;
/**
 * Checks for usage of `Iterator::fold` with a type that implements `Try`.
 */
export type ManualTryFold = LintLevel | DetailedLint2;
/**
 * Finds patterns that reimplement `Option::unwrap_or` or `Result::unwrap_or`.
 */
export type ManualUnwrapOr = LintLevel | DetailedLint2;
/**
 * Checks if a `match` or `if let` expression can be simplified using `.unwrap_or_default()`.
 */
export type ManualUnwrapOrDefault = LintLevel | DetailedLint2;
/**
 * Looks for loops that check for emptiness of a `Vec` in the condition and pop an element in the body as a separate operation.
 */
export type ManualWhileLetSome = LintLevel | DetailedLint2;
/**
 * Checks for too many variables whose name consists of a single character.
 */
export type ManySingleCharNames = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.map(…)`, followed by `.all(identity)` or `.any(identity)`.
 */
export type MapAllAnyIdentity = LintLevel | DetailedLint2;
/**
 * Checks for usage of `map(|x| x.clone())` or dereferencing closures for `Copy` types, on `Iterator` or `Option`, and suggests `cloned()` or `copied()` instead
 */
export type MapClone = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.map(_).collect:: ()`.
 */
export type MapCollectResultUnit = LintLevel | DetailedLint2;
/**
 * Checks for usage of `contains_key` + `insert` on `HashMap` or `BTreeMap`.
 */
export type MapEntry = LintLevel | DetailedLint2;
/**
 * Checks for instances of `map_err(|_| Some::Enum)`
 */
export type MapErrIgnore = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.map(_).flatten(_)` on `Iterator` and `Option`
 */
export type MapFlatten = LintLevel | DetailedLint2;
/**
 * Checks for instances of `map(f)` where `f` is the identity function.
 */
export type MapIdentity = LintLevel | DetailedLint2;
/**
 * Checks for usage of `option.map(_).unwrap_or(_)` or `option.map(_).unwrap_or_else(_)` or `result.map(_).unwrap_or_else(_)`.
 */
export type MapUnwrapOr = LintLevel | DetailedLint2;
/**
 * Checks for `Iterator::map` over ranges without using the parameter which could be more clearly expressed using `std::iter::repeat(...).take(...)` or `std::iter::repeat_n`.
 */
export type MapWithUnusedArgumentOverRanges = LintLevel | DetailedLint2;
/**
 * Checks for match which is used to add a reference to an `Option` value.
 */
export type MatchAsRef = LintLevel | DetailedLint2;
/**
 * Checks for matches where match expression is a `bool`. It suggests to replace the expression with an `if...else` block.
 */
export type MatchBool = LintLevel | DetailedLint2;
/**
 * Checks for `match` or `if let` expressions producing a `bool` that could be written using `matches!`
 */
export type MatchLikeMatchesMacro = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type MatchOnVecItems = LintLevel | DetailedLint2;
/**
 * Checks for overlapping match arms.
 */
export type MatchOverlappingArm = LintLevel | DetailedLint2;
/**
 * Checks for matches where all arms match a reference, suggesting to remove the reference and deref the matched expression instead. It also checks for `if let &foo = bar` blocks.
 */
export type MatchRefPats = LintLevel | DetailedLint2;
/**
 * Checks for unnecessary `ok()` in `while let`.
 */
export type MatchResultOk = LintLevel | DetailedLint2;
/**
 * Checks for `match` with identical arm bodies.
 */
export type MatchSameArms = LintLevel | DetailedLint2;
/**
 * Checks for useless match that binds to only one value.
 */
export type MatchSingleBinding = LintLevel | DetailedLint2;
/**
 * Checks for `match` expressions modifying the case of a string with non-compliant arms
 */
export type MatchStrCaseMismatch = LintLevel | DetailedLint2;
/**
 * Checks for arm which matches all errors with `Err(_)` and take drastic actions like `panic!`.
 */
export type MatchWildErrArm = LintLevel | DetailedLint2;
/**
 * Checks for wildcard enum matches for a single variant.
 */
export type MatchWildcardForSingleVariants = LintLevel | DetailedLint2;
/**
 * Checks for iteration that may be infinite.
 */
export type MaybeInfiniteIter = LintLevel | DetailedLint2;
/**
 * Checks for usage of `std::mem::forget(t)` where `t` is `Drop` or has a field that implements `Drop`.
 */
export type MemForget = LintLevel | DetailedLint2;
/**
 * Checks for `mem::replace()` on an `Option` with `None`.
 */
export type MemReplaceOptionWithNone = LintLevel | DetailedLint2;
/**
 * Checks for `mem::replace()` on an `Option` with `Some(…)`.
 */
export type MemReplaceOptionWithSome = LintLevel | DetailedLint2;
/**
 * Checks for `std::mem::replace` on a value of type `T` with `T::default()`.
 */
export type MemReplaceWithDefault = LintLevel | DetailedLint2;
/**
 * Checks for `mem::replace(&mut _, mem::uninitialized())` and `mem::replace(&mut _, mem::zeroed())`.
 */
export type MemReplaceWithUninit = LintLevel | DetailedLint2;
/**
 * Checks for identifiers which consist of a single character (or fewer than the configured threshold).
 */
export type MinIdentChars = LintLevel | DetailedLint2;
/**
 * Checks for expressions where `std::cmp::min` and `max` are used to clamp values, but switched so that the result is constant.
 */
export type MinMax = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type MisalignedTransmute = LintLevel | DetailedLint2;
/**
 * Checks for type parameters which are positioned inconsistently between a type definition and impl block. Specifically, a parameter in an impl block which has the same name as a parameter in the type def, but is in a different place.
 */
export type MismatchingTypeParamOrder = LintLevel | DetailedLint2;
/**
 * Checks for getter methods that return a field that doesn't correspond to the name of the method, when there is a field's whose name matches that of the method.
 */
export type MisnamedGetters = LintLevel | DetailedLint2;
/**
 * Checks for `a op= a op b` or `a op= b op a` patterns.
 */
export type MisrefactoredAssignOp = LintLevel | DetailedLint2;
/**
 * Checks assertions without a custom panic message.
 */
export type MissingAssertMessage = LintLevel | DetailedLint2;
/**
 * Checks for repeated slice indexing without asserting beforehand that the length is greater than the largest index used to index into the slice.
 */
export type MissingAssertsForIndexing = LintLevel | DetailedLint2;
/**
 * Suggests the use of `const` in functions and methods where possible.
 */
export type MissingConstForFn = LintLevel | DetailedLint2;
/**
 * Suggests to use `const` in `thread_local!` macro if possible.
 */
export type MissingConstForThreadLocal = LintLevel | DetailedLint2;
/**
 * Warns if there is missing documentation for any private documentable item.
 */
export type MissingDocsInPrivateItems = LintLevel | DetailedLint2;
/**
 * Checks for imports that do not rename the item as specified in the `enforced-import-renames` config option.
 */
export type MissingEnforcedImportRenames = LintLevel | DetailedLint2;
/**
 * Checks the doc comments of publicly visible functions that return a `Result` type and warns if there is no `# Errors` section.
 */
export type MissingErrorsDoc = LintLevel | DetailedLint2;
/**
 * Checks for manual `core::fmt::Debug` implementations that do not use all fields.
 */
export type MissingFieldsInDebug = LintLevel | DetailedLint2;
/**
 * It lints if an exported function, method, trait method with default impl, or trait method impl is not `#[inline]`.
 */
export type MissingInlineInPublicItems = LintLevel | DetailedLint2;
/**
 * Checks the doc comments of publicly visible functions that may panic and warns if there is no `# Panics` section.
 */
export type MissingPanicsDoc = LintLevel | DetailedLint2;
/**
 * Checks for the doc comments of publicly visible unsafe functions and warns if there is no `# Safety` section.
 */
export type MissingSafetyDoc = LintLevel | DetailedLint2;
/**
 * Checks for empty spin loops
 */
export type MissingSpinLoop = LintLevel | DetailedLint2;
/**
 * Checks if a provided method is used implicitly by a trait implementation.
 */
export type MissingTraitMethods = LintLevel | DetailedLint2;
/**
 * Checks if transmute calls have all generics specified.
 */
export type MissingTransmuteAnnotations = LintLevel | DetailedLint2;
/**
 * Warns for mistyped suffix in literals
 */
export type MistypedLiteralSuffixes = LintLevel | DetailedLint2;
/**
 * Checks for items that have the same kind of attributes with mixed styles (inner/outer).
 */
export type MixedAttributesStyle = LintLevel | DetailedLint2;
/**
 * Warns on hexadecimal literals with mixed-case letter digits.
 */
export type MixedCaseHexLiterals = LintLevel | DetailedLint2;
/**
 * Checks for a read and a write to the same variable where whether the read occurs before or after the write depends on the evaluation order of sub-expressions.
 */
export type MixedReadWriteInExpression = LintLevel | DetailedLint2;
/**
 * Checks that module layout uses only self named module files; bans `mod.rs` files.
 */
export type ModModuleFiles = LintLevel | DetailedLint2;
/**
 * Checks for modules that have the same name as their parent module
 */
export type ModuleInception = LintLevel | DetailedLint2;
/**
 * Detects public item names that are prefixed or suffixed by the containing public module's name.
 */
export type ModuleNameRepetitions = LintLevel | DetailedLint2;
/**
 * Checks for modulo arithmetic.
 */
export type ModuloArithmetic = LintLevel | DetailedLint2;
/**
 * Checks for getting the remainder of integer division by one or minus one.
 */
export type ModuloOne = LintLevel | DetailedLint2;
/**
 * Checks for nested assignments.
 */
export type MultiAssignments = LintLevel | DetailedLint2;
/**
 * Check if a generic is defined both in the bound predicate and in the `where` clause.
 */
export type MultipleBoundLocations = LintLevel | DetailedLint2;
/**
 * Checks to see if multiple versions of a crate are being used.
 */
export type MultipleCrateVersions = LintLevel | DetailedLint2;
/**
 * Checks for multiple inherent implementations of a struct
 */
export type MultipleInherentImpl = LintLevel | DetailedLint2;
/**
 * Checks for `unsafe` blocks that contain more than one unsafe operation.
 */
export type MultipleUnsafeOpsPerBlock = LintLevel | DetailedLint2;
/**
 * Checks for public functions that have no `#[must_use]` attribute, but return something not already marked must-use, have no mutable arg and mutate no statics.
 */
export type MustUseCandidate = LintLevel | DetailedLint2;
/**
 * Checks for a `#[must_use]` attribute on unit-returning functions and methods.
 */
export type MustUseUnit = LintLevel | DetailedLint2;
/**
 * This lint checks for functions that take immutable references and return mutable ones. This will not trigger if no unsafe code exists as there are multiple safe functions which will do this transformation
 */
export type MutFromRef = LintLevel | DetailedLint2;
/**
 * Checks for instances of `mut mut` references.
 */
export type MutMut = LintLevel | DetailedLint2;
/**
 * Checks for `&mut Mutex::lock` calls
 */
export type MutMutexLock = LintLevel | DetailedLint2;
/**
 * Checks for loops with a range bound that is a mutable variable.
 */
export type MutRangeBound = LintLevel | DetailedLint2;
/**
 * Checks for sets/maps with mutable key types.
 */
export type MutableKeyType = LintLevel | DetailedLint2;
/**
 * Checks for usage of `Mutex ` where an atomic will do.
 */
export type MutexAtomic = LintLevel | DetailedLint2;
/**
 * Checks for usage of `Mutex ` where `X` is an integral type.
 */
export type MutexInteger = LintLevel | DetailedLint2;
/**
 * Checks for naive byte counts
 */
export type NaiveBytecount = LintLevel | DetailedLint2;
/**
 * The lint checks for `self` in fn parameters that specify the `Self`-type explicitly
 */
export type NeedlessArbitrarySelfType = LintLevel | DetailedLint2;
/**
 * It detects useless calls to `str::as_bytes()` before calling `len()` or `is_empty()`.
 */
export type NeedlessAsBytes = LintLevel | DetailedLint2;
/**
 * Checks for usage of bitwise and/or operators between booleans, where performance may be improved by using a lazy and.
 */
export type NeedlessBitwiseBool = LintLevel | DetailedLint2;
/**
 * Checks for expressions of the form `if c { true } else { false }` (or vice versa) and suggests using the condition directly.
 */
export type NeedlessBool = LintLevel | DetailedLint2;
/**
 * Checks for expressions of the form `if c { x = true } else { x = false }` (or vice versa) and suggest assigning the variable directly from the condition.
 */
export type NeedlessBoolAssign = LintLevel | DetailedLint2;
/**
 * Checks for address of operations (`&`) that are going to be dereferenced immediately by the compiler.
 */
export type NeedlessBorrow = LintLevel | DetailedLint2;
/**
 * Checks for bindings that needlessly destructure a reference and borrow the inner value with `&ref`.
 */
export type NeedlessBorrowedReference = LintLevel | DetailedLint2;
/**
 * Checks for borrow operations (`&`) that are used as a generic argument to a function when the borrowed value could be used.
 */
export type NeedlessBorrowsForGenericArgs = LintLevel | DetailedLint2;
/**
 * Checks if an iterator is used to check if a string is ascii.
 */
export type NeedlessCharacterIteration = LintLevel | DetailedLint2;
/**
 * Checks for functions collecting an iterator when collect is not needed.
 */
export type NeedlessCollect = LintLevel | DetailedLint2;
/**
 * The lint checks for `if`-statements appearing in loops that contain a `continue` statement in either their main blocks or their `else`-blocks, when omitting the `else`-block possibly with some rearrangement of code can make the code easier to understand. The lint also checks if the last statement in the loop is a `continue`
 */
export type NeedlessContinue = LintLevel | DetailedLint2;
/**
 * Checks for `fn main() {.. }` in doctests
 */
export type NeedlessDoctestMain = LintLevel | DetailedLint2;
/**
 * Checks for empty `else` branches.
 */
export type NeedlessElse = LintLevel | DetailedLint2;
/**
 * Checks for usage of `for_each` that would be more simply written as a `for` loop.
 */
export type NeedlessForEach = LintLevel | DetailedLint2;
/**
 * Checks for empty `if` branches with no else branch.
 */
export type NeedlessIfs = LintLevel | DetailedLint2;
/**
 * Checks for late initializations that can be replaced by a `let` statement with an initializer.
 */
export type NeedlessLateInit = LintLevel | DetailedLint2;
/**
 * Checks for lifetime annotations which can be removed by relying on lifetime elision.
 */
export type NeedlessLifetimes = LintLevel | DetailedLint2;
/**
 * Checks for unnecessary `match` or match-like `if let` returns for `Option` and `Result` when function signatures are the same.
 */
export type NeedlessMatch = LintLevel | DetailedLint2;
/**
 * Lints `?Sized` bounds applied to type parameters that cannot be unsized
 */
export type NeedlessMaybeSized = LintLevel | DetailedLint2;
/**
 * Checks for no-op uses of `Option::{as_deref, as_deref_mut}`, for example, `Option::as_deref()` returns the same type.
 */
export type NeedlessOptionAsDeref = LintLevel | DetailedLint2;
/**
 * Checks for calling `take` function after `as_ref`.
 */
export type NeedlessOptionTake = LintLevel | DetailedLint2;
/**
 * The lint checks for parenthesis on literals in range statements that are superfluous.
 */
export type NeedlessParensOnRangeLiterals = LintLevel | DetailedLint2;
/**
 * Check if a `&mut` function argument is actually used mutably.
 */
export type NeedlessPassByRefMut = LintLevel | DetailedLint2;
/**
 * Checks for functions taking arguments by value, but not consuming them in its body.
 */
export type NeedlessPassByValue = LintLevel | DetailedLint2;
/**
 * Checks for usage of `pub(self)` and `pub(in self)`.
 */
export type NeedlessPubSelf = LintLevel | DetailedLint2;
/**
 * Suggests replacing `Ok(x?)` or `Some(x?)` with `x` in return positions where the `?` operator is not needed to convert the type of `x`.
 */
export type NeedlessQuestionMark = LintLevel | DetailedLint2;
/**
 * Checks for looping over the range of `0..len` of some collection just to get the values by index.
 */
export type NeedlessRangeLoop = LintLevel | DetailedLint2;
/**
 * Checks for raw string literals with an unnecessary amount of hashes around them.
 */
export type NeedlessRawStringHashes = LintLevel | DetailedLint2;
/**
 * Checks for raw string literals where a string literal can be used instead.
 */
export type NeedlessRawStrings = LintLevel | DetailedLint2;
/**
 * Checks for return statements at the end of a block.
 */
export type NeedlessReturn = LintLevel | DetailedLint2;
/**
 * Checks for return statements on `Err` paired with the `?` operator.
 */
export type NeedlessReturnWithQuestionMark = LintLevel | DetailedLint2;
/**
 * Checks for usage of `str::splitn` (or `str::rsplitn`) where using `str::split` would be the same.
 */
export type NeedlessSplitn = LintLevel | DetailedLint2;
/**
 * Checks for bindings (constants, statics, or let bindings) that are defined with one numeric type but are consistently cast to a different type in all usages.
 */
export type NeedlessTypeCast = LintLevel | DetailedLint2;
/**
 * Checks for needlessly including a base struct on update when all fields are changed anyway.
 */
export type NeedlessUpdate = LintLevel | DetailedLint2;
/**
 * Checks for the usage of negated comparison operators on types which only implement `PartialOrd` (e.g., `f64`).
 */
export type NegCmpOpOnPartialOrd = LintLevel | DetailedLint2;
/**
 * Checks for multiplication by -1 as a form of negation.
 */
export type NegMultiply = LintLevel | DetailedLint2;
/**
 * Checks for negative feature names with prefix `no-` or `not-`
 */
export type NegativeFeatureNames = LintLevel | DetailedLint2;
/**
 * Checks for loops that will always `break`, `return` or `continue` an outer loop.
 */
export type NeverLoop = LintLevel | DetailedLint2;
/**
 * Checks for `new` not returning a type that contains `Self`.
 */
export type NewRetNoSelf = LintLevel | DetailedLint2;
/**
 * Checks for public types with a `pub fn new() -> Self` method and no implementation of `Default`.
 */
export type NewWithoutDefault = LintLevel | DetailedLint2;
/**
 * Checks for statements which have no effect.
 */
export type NoEffect = LintLevel | DetailedLint2;
/**
 * Checks for `replace` statements which have no effect.
 */
export type NoEffectReplace = LintLevel | DetailedLint2;
/**
 * Checks for binding to underscore prefixed variable without side-effects.
 */
export type NoEffectUnderscoreBinding = LintLevel | DetailedLint2;
/**
 * Checks for Rust ABI functions with the `#[no_mangle]` attribute.
 */
export type NoMangleWithRustAbi = LintLevel | DetailedLint2;
/**
 * Checks for non-ASCII characters in string and char literals.
 */
export type NonAsciiLiteral = LintLevel | DetailedLint2;
/**
 * Checks for non-canonical implementations of `Clone` when `Copy` is already implemented.
 */
export type NonCanonicalCloneImpl = LintLevel | DetailedLint2;
/**
 * Checks for non-canonical implementations of `PartialOrd` when `Ord` is already implemented.
 */
export type NonCanonicalPartialOrdImpl = LintLevel | DetailedLint2;
/**
 * Checks for `any` and `all` combinators in `cfg` with only one condition.
 */
export type NonMinimalCfg = LintLevel | DetailedLint2;
/**
 * Checks for non-octal values used to set Unix file permissions.
 */
export type NonOctalUnixPermissions = LintLevel | DetailedLint2;
/**
 * This lint warns about a `Send` implementation for a type that contains fields that are not safe to be sent across threads. It tries to detect fields that can cause a soundness issue when sent to another thread (e.g., `Rc`) while allowing `!Send` fields that are expected to exist in a `Send` type, such as raw pointers.
 */
export type NonSendFieldsInSendTy = LintLevel | DetailedLint2;
/**
 * Lints when `once_cell::sync::Lazy` or `lazy_static!` are used to define a static variable, and suggests replacing such cases with `std::sync::LazyLock` instead.
 */
export type NonStdLazyStatics = LintLevel | DetailedLint2;
/**
 * Checks for conversions from `NonZero` types to regular integer types, and suggests using `NonZero` types for the target as well.
 */
export type NonZeroSuggestions = LintLevel | DetailedLint2;
/**
 * Checks for boolean expressions that can be written more concisely.
 */
export type NonminimalBool = LintLevel | DetailedLint2;
/**
 * Checks for duplicate open options as well as combinations that make no sense.
 */
export type NonsensicalOpenOptions = LintLevel | DetailedLint2;
/**
 * Checks that common macros are used with consistent bracing.
 */
export type NonstandardMacroBraces = LintLevel | DetailedLint2;
/**
 * Checks for public functions that dereference raw pointer arguments but are not marked `unsafe`.
 */
export type NotUnsafePtrArgDeref = LintLevel | DetailedLint2;
/**
 * The `clippy::nursery` group contains lints which are buggy or need more work. It is not recommended to enable the whole group, but rather cherry-pick lints that are useful for your code base and your use case.
 */
export type Nursery = LintLevel | DetailedLint2;
/**
 * Checks for unnecessary method chains that can be simplified into `if.. else..`.
 */
export type ObfuscatedIfElse = LintLevel | DetailedLint2;
/**
 * Checks for `\0` escapes in string and byte literals that look like octal character escapes in C.
 */
export type OctalEscapes = LintLevel | DetailedLint2;
/**
 * Checks for usage of `ok().expect(..)`.
 */
export type OkExpect = LintLevel | DetailedLint2;
/**
 * Checks for arguments that are only used in recursion with no side-effects.
 */
export type OnlyUsedInRecursion = LintLevel | DetailedLint2;
/**
 * Checks for arguments to `==` which have their address taken to satisfy a bound and suggests to dereference the other argument instead
 */
export type OpRef = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.as_ref().cloned()` and `.as_mut().cloned()` on `Option`s
 */
export type OptionAsRefCloned = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.as_ref().map(Deref::deref)` or its aliases (such as String::as_str).
 */
export type OptionAsRefDeref = LintLevel | DetailedLint2;
/**
 * Checks for usage of `option_env!(...).unwrap()` and suggests usage of the `env!` macro.
 */
export type OptionEnvUnwrap = LintLevel | DetailedLint2;
/**
 * Checks for iterators of `Option`s using `.filter(Option::is_some).map(Option::unwrap)` that may be replaced with a `.flatten()` call.
 */
export type OptionFilterMap = LintLevel | DetailedLint2;
/**
 * Lints usage of `if let Some(v) =... { y } else { x }` and `match.. { Some(v) => y, None/_ => x }` which are more idiomatically done with `Option::map_or` (if the else bit is a pure expression) or `Option::map_or_else` (if the else bit is an impure expression).
 */
export type OptionIfLetElse = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type OptionMapOrErrOk = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.map_or(None, _)`.
 */
export type OptionMapOrNone = LintLevel | DetailedLint2;
/**
 * Checks for usage of `option.map(f)` where f is a function or closure that returns the unit type `()`.
 */
export type OptionMapUnitFn = LintLevel | DetailedLint2;
/**
 * Checks for usage of `Option >` in function signatures and type definitions
 */
export type OptionOption = LintLevel | DetailedLint2;
/**
 * Checks for calls to `.or(foo(..))`, `.unwrap_or(foo(..))`, `.or_insert(foo(..))` etc., and suggests to use `.or_else(|| foo(..))`, `.unwrap_or_else(|| foo(..))`, `.unwrap_or_default()` or `.or_default()` etc. instead.
 */
export type OrFunCall = LintLevel | DetailedLint2;
/**
 * Checks for `.or(…).unwrap()` calls to Options and Results.
 */
export type OrThenUnwrap = LintLevel | DetailedLint2;
/**
 * Checks for out of bounds array indexing with a constant index.
 */
export type OutOfBoundsIndexing = LintLevel | DetailedLint2;
/**
 * Checks for boolean expressions that contain terminals that can be eliminated.
 */
export type OverlyComplexBoolExpr = LintLevel | DetailedLint2;
/**
 * Detects needlessly owned `Cow` types.
 */
export type OwnedCow = LintLevel | DetailedLint2;
/**
 * Checks for usage of `panic!`.
 */
export type Panic = LintLevel | DetailedLint2;
/**
 * Checks for usage of `panic!` or assertions in a function whose return type is `Result`.
 */
export type PanicInResultFn = LintLevel | DetailedLint2;
/**
 * Detects C-style underflow/overflow checks.
 */
export type PanickingOverflowChecks = LintLevel | DetailedLint2;
/**
 * Checks for calls of `unwrap[_err]()` that will always fail.
 */
export type PanickingUnwrap = LintLevel | DetailedLint2;
/**
 * Checks whether some but not all fields of a `struct` are public.
 */
export type PartialPubFields = LintLevel | DetailedLint2;
/**
 * Checks for manual re-implementations of `PartialEq::ne`.
 */
export type PartialeqNeImpl = LintLevel | DetailedLint2;
/**
 * Checks for binary comparisons to a literal `Option::None`.
 */
export type PartialeqToNone = LintLevel | DetailedLint2;
/**
 * Checks for push calls on `PathBuf` that can cause overwrites.
 */
export type PathBufPushOverwrite = LintLevel | DetailedLint2;
/**
 * Looks for calls to `Path::ends_with` calls where the argument looks like a file extension.
 */
export type PathEndsWithExt = LintLevel | DetailedLint2;
/**
 * Checks for calls to `push` immediately after creating a new `PathBuf`.
 */
export type PathbufInitThenPush = LintLevel | DetailedLint2;
/**
 * Checks for patterns that aren't exact representations of the types they are applied to.
 */
export type PatternTypeMismatch = LintLevel | DetailedLint2;
/**
 * The `clippy::pedantic` group makes Clippy even more pedantic. You can enable the whole group with `#![warn(clippy::pedantic)]` in the `lib.rs`/`main.rs` of your crate. This lint group is for Clippy power users that want an in depth check of their code.
 */
export type Pedantic = LintLevel | DetailedLint2;
/**
 * The `clippy::perf` group gives you suggestions on how you can increase the performance of your code. Those lints are mostly about code that the compiler can't trivially optimize, but has to be written in a slightly different way to make the optimizer job easier.
 */
export type Perf = LintLevel | DetailedLint2;
/**
 * Checks for calls to `std::fs::Permissions.set_readonly` with argument `false`.
 */
export type PermissionsSetReadonlyFalse = LintLevel | DetailedLint2;
/**
 * Detects pointer format as well as `Debug` formatting of raw pointers or function pointers or any types that have a derived `Debug` impl that recursively contains them.
 */
export type PointerFormat = LintLevel | DetailedLint2;
/**
 * Checks if any pointer is being passed to an asm! block with `nomem` option.
 */
export type PointersInNomemAsmBlock = LintLevel | DetailedLint2;
/**
 * Checks for possible missing comma in an array. It lints if an array element is a binary operator expression and it lies on two lines.
 */
export type PossibleMissingComma = LintLevel | DetailedLint2;
/**
 * Checks for an `if` expression followed by either a block or another `if` that looks like it should have an `else` between them.
 */
export type PossibleMissingElse = LintLevel | DetailedLint2;
/**
 * Checks for operations where precedence may be unclear and suggests to add parentheses. It catches a mixed usage of arithmetic and bit shifting/combining operators, as well as method calls applied to closures.
 */
export type Precedence = LintLevel | DetailedLint2;
/**
 * Checks for bit shifting operations combined with bit masking/combining operators and suggest using parentheses.
 */
export type PrecedenceBits = LintLevel | DetailedLint2;
/**
 * Checks for usage of `println`, `print`, `eprintln` or `eprint` in an implementation of a formatting trait.
 */
export type PrintInFormatImpl = LintLevel | DetailedLint2;
/**
 * This lint warns about the use of literals as `print!`/`println!` args.
 */
export type PrintLiteral = LintLevel | DetailedLint2;
/**
 * Checks for printing on stderr. The purpose of this lint is to catch debugging remnants.
 */
export type PrintStderr = LintLevel | DetailedLint2;
/**
 * Checks for printing on stdout. The purpose of this lint is to catch debugging remnants.
 */
export type PrintStdout = LintLevel | DetailedLint2;
/**
 * This lint warns when you use `print!()` with a format string that ends in a newline.
 */
export type PrintWithNewline = LintLevel | DetailedLint2;
/**
 * This lint warns when you use `println!("")` to print a newline.
 */
export type PrintlnEmptyString = LintLevel | DetailedLint2;
/**
 * This lint checks for function arguments of type `&String`, `&Vec`, `&PathBuf`, and `Cow `. It will also suggest you replace `.clone()` calls with the appropriate `.to_owned()`/`to_string()` calls.
 */
export type PtrArg = LintLevel | DetailedLint2;
/**
 * Checks for `as` casts between raw pointers that don't change their constness, namely `*const T` to `*const U` and `*mut T` to `*mut U`.
 */
export type PtrAsPtr = LintLevel | DetailedLint2;
/**
 * Checks for `as` casts between raw pointers that change their constness, namely `*const T` to `*mut T` and `*mut T` to `*const T`.
 */
export type PtrCastConstness = LintLevel | DetailedLint2;
/**
 * Use `std::ptr::eq` when applicable
 */
export type PtrEq = LintLevel | DetailedLint2;
/**
 * Checks for usage of the `offset` pointer method with an integer literal.
 */
export type PtrOffsetByLiteral = LintLevel | DetailedLint2;
/**
 * Checks for usage of the `offset` pointer method with a `usize` casted to an `isize`.
 */
export type PtrOffsetWithCast = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type PubEnumVariantNames = LintLevel | DetailedLint2;
/**
 * Checks whether any field of the struct is prefixed with an `_` (underscore) and also marked `pub` (public)
 */
export type PubUnderscoreFields = LintLevel | DetailedLint2;
/**
 * Restricts the usage of `pub use...`
 */
export type PubUse = LintLevel | DetailedLint2;
/**
 * Checks for usage of `pub()` with `in`.
 */
export type PubWithShorthand = LintLevel | DetailedLint2;
/**
 * Checks for usage of `pub()` without `in`.
 */
export type PubWithoutShorthand = LintLevel | DetailedLint2;
/**
 * Checks for expressions that could be replaced by the `?` operator.
 */
export type QuestionMark = LintLevel | DetailedLint2;
/**
 * Checks for expressions that use the `?` operator and rejects them.
 */
export type QuestionMarkUsed = LintLevel | DetailedLint2;
/**
 * Checks for inclusive ranges where 1 is subtracted from the upper bound, e.g., `x..=(y-1)`.
 */
export type RangeMinusOne = LintLevel | DetailedLint2;
/**
 * Checks for exclusive ranges where 1 is added to the upper bound, e.g., `x..(y+1)`.
 */
export type RangePlusOne = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type RangeStepByZero = LintLevel | DetailedLint2;
/**
 * Checks for zipping a collection with the range of `0.._.len()`.
 */
export type RangeZipWithLen = LintLevel | DetailedLint2;
/**
 * Checks for `Rc ` and `Arc ` when `T` is a mutable buffer type such as `String` or `Vec`.
 */
export type RcBuffer = LintLevel | DetailedLint2;
/**
 * Checks for reference-counted pointers (`Arc`, `Rc`, `rc::Weak`, and `sync::Weak`) in `vec![elem; len]`
 */
export type RcCloneInVecInit = LintLevel | DetailedLint2;
/**
 * Checks for `Rc >`.
 */
export type RcMutex = LintLevel | DetailedLint2;
/**
 * Looks for calls to [`Stdin::read_line`] to read a line from the standard input into a string, then later attempting to use that string for an operation that will never work for strings with a trailing newline character in it (e.g. parsing into a `i32`).
 */
export type ReadLineWithoutTrim = LintLevel | DetailedLint2;
/**
 * This lint catches reads into a zero-length `Vec`. Especially in the case of a call to `with_capacity`, this lint warns that read gets the number of bytes from the `Vec`'s length, not its capacity.
 */
export type ReadZeroByteVec = LintLevel | DetailedLint2;
/**
 * Looks for calls to `RwLock::write` where the lock is only used for reading.
 */
export type ReadonlyWriteLock = LintLevel | DetailedLint2;
/**
 * Checks for format trait implementations (e.g. `Display`) with a recursive call to itself which uses `self` as a parameter. This is typically done indirectly with the `write!` macro or with `to_string()`.
 */
export type RecursiveFormatImpl = LintLevel | DetailedLint2;
/**
 * Checks for usage of redundant allocations anywhere in the code.
 */
export type RedundantAllocation = LintLevel | DetailedLint2;
/**
 * Checks for usage of `as_str()` on a `String` chained with a method available on the `String` itself.
 */
export type RedundantAsStr = LintLevel | DetailedLint2;
/**
 * Checks for `async` block that only returns `await` on a future.
 */
export type RedundantAsyncBlock = LintLevel | DetailedLint2;
/**
 * Checks for `[all @..]` patterns.
 */
export type RedundantAtRestPattern = LintLevel | DetailedLint2;
/**
 * Checks for a redundant `clone()` (and its relatives) which clones an owned value that is going to be dropped without further use.
 */
export type RedundantClone = LintLevel | DetailedLint2;
/**
 * Checks for closures which just call another function where the function can be called directly. `unsafe` functions, calls where types get adjusted or where the callee is marked `#[track_caller]` are ignored.
 */
export type RedundantClosure = LintLevel | DetailedLint2;
/**
 * Detects closures called in the same expression where they are defined.
 */
export type RedundantClosureCall = LintLevel | DetailedLint2;
/**
 * Checks for closures which only invoke a method on the closure argument and can be replaced by referencing the method directly.
 */
export type RedundantClosureForMethodCalls = LintLevel | DetailedLint2;
/**
 * Checks for ineffective double comparisons against constants.
 */
export type RedundantComparisons = LintLevel | DetailedLint2;
/**
 * Checks for `else` blocks that can be removed without changing semantics.
 */
export type RedundantElse = LintLevel | DetailedLint2;
/**
 * Checks for feature names with prefix `use-`, `with-` or suffix `-support`
 */
export type RedundantFeatureNames = LintLevel | DetailedLint2;
/**
 * Checks for fields in struct literals where shorthands could be used.
 */
export type RedundantFieldNames = LintLevel | DetailedLint2;
/**
 * Checks for unnecessary guards in match expressions.
 */
export type RedundantGuards = LintLevel | DetailedLint2;
/**
 * Checks for calls to `Iterator::cloned` where the original value could be used instead.
 */
export type RedundantIterCloned = LintLevel | DetailedLint2;
/**
 * Checks for redundant redefinitions of local bindings.
 */
export type RedundantLocals = LintLevel | DetailedLint2;
/**
 * Checks for patterns in the form `name @ _`.
 */
export type RedundantPattern = LintLevel | DetailedLint2;
/**
 * Lint for redundant pattern matching over `Result`, `Option`, `std::task::Poll`, `std::net::IpAddr` or `bool`s
 */
export type RedundantPatternMatching = LintLevel | DetailedLint2;
/**
 * Checks for items declared `pub(crate)` that are not crate visible because they are inside a private module.
 */
export type RedundantPubCrate = LintLevel | DetailedLint2;
/**
 * Checks for redundant slicing expressions which use the full range, and do not change the type.
 */
export type RedundantSlicing = LintLevel | DetailedLint2;
/**
 * Checks for constants and statics with an explicit `'static` lifetime.
 */
export type RedundantStaticLifetimes = LintLevel | DetailedLint2;
/**
 * Checks for test functions (functions annotated with `#[test]`) that are prefixed with `test_` which is redundant.
 */
export type RedundantTestPrefix = LintLevel | DetailedLint2;
/**
 * Warns about needless / redundant type annotations.
 */
export type RedundantTypeAnnotations = LintLevel | DetailedLint2;
/**
 * Checks for casts of references to pointer using `as` and suggests `std::ptr::from_ref` and `std::ptr::from_mut` instead.
 */
export type RefAsPtr = LintLevel | DetailedLint2;
/**
 * Checks for `ref` bindings which create a reference to a reference.
 */
export type RefBindingToReference = LintLevel | DetailedLint2;
/**
 * Warns when a function signature uses `&Option ` instead of `Option `.
 */
export type RefOption = LintLevel | DetailedLint2;
/**
 * Checks for usage of `&Option `.
 */
export type RefOptionRef = LintLevel | DetailedLint2;
/**
 * Checks for usages of the `ref` keyword.
 */
export type RefPatterns = LintLevel | DetailedLint2;
/**
 * Checks for regex compilation inside a loop with a literal.
 */
export type RegexCreationInLoops = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type RegexMacro = LintLevel | DetailedLint2;
/**
 * Lints when the name of function parameters from trait impl is different than its default implementation.
 */
export type RenamedFunctionParams = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.repeat(1)` and suggest the following method for each types.
 */
export type RepeatOnce = LintLevel | DetailedLint2;
/**
 * Looks for patterns such as `vec![Vec::with_capacity(x); n]` or `iter::repeat(Vec::with_capacity(x))`.
 */
export type RepeatVecWithCapacity = LintLevel | DetailedLint2;
/**
 * Detects assignments of `Default::default()` or `Box::new(value)` to a place of type `Box `.
 */
export type ReplaceBox = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type ReplaceConsts = LintLevel | DetailedLint2;
/**
 * Checks for items with `#[repr(packed)]`-attribute without ABI qualification
 */
export type ReprPackedWithoutAbi = LintLevel | DetailedLint2;
/**
 * Informs the user about a more concise way to create a vector with a known capacity.
 */
export type ReserveAfterInitialization = LintLevel | DetailedLint2;
/**
 * Checks for unnecessary '..' pattern binding on struct when all fields are explicitly matched.
 */
export type RestPatInFullyBoundStructs = LintLevel | DetailedLint2;
/**
 * The `clippy::restriction` group contains lints that will restrict you from using certain parts of the Rust language. It is not recommended to enable the whole group, but rather cherry-pick lints that are useful for your code base and your use case.
 */
export type Restriction = LintLevel | DetailedLint2;
/**
 * Checks for iterators of `Result`s using `.filter(Result::is_ok).map(Result::unwrap)` that may be replaced with a `.flatten()` call.
 */
export type ResultFilterMap = LintLevel | DetailedLint2;
/**
 * Checks for functions that return `Result` with an unusually large `Err`-variant.
 */
export type ResultLargeErr = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.map_or(None, Some)`.
 */
export type ResultMapOrIntoOption = LintLevel | DetailedLint2;
/**
 * Checks for usage of `result.map(f)` where f is a function or closure that returns the unit type `()`.
 */
export type ResultMapUnitFn = LintLevel | DetailedLint2;
/**
 * Checks for public functions that return a `Result` with an `Err` type of `()`. It suggests using a custom type that implements `std::error::Error`.
 */
export type ResultUnitErr = LintLevel | DetailedLint2;
/**
 * Detect functions that end with `Option::and_then` or `Result::and_then`, and suggest using the `?` operator instead.
 */
export type ReturnAndThen = LintLevel | DetailedLint2;
/**
 * This lint warns when a method returning `Self` doesn't have the `#[must_use]` attribute.
 */
export type ReturnSelfNotMustUse = LintLevel | DetailedLint2;
/**
 * Checks for range expressions `x..y` where both `x` and `y` are constant and `x` is greater to `y`. Also triggers if `x` is equal to `y` when they are conditions to a `for` loop.
 */
export type ReversedEmptyRanges = LintLevel | DetailedLint2;
/**
 * Checks for consecutive `if`s with the same function call.
 */
export type SameFunctionsInIfCondition = LintLevel | DetailedLint2;
/**
 * Checks whether a for loop is being used to push a constant value into a Vec.
 */
export type SameItemPush = LintLevel | DetailedLint2;
/**
 * Checks for usages of `Vec::from_raw_parts` and `String::from_raw_parts` where the same expression is used for the length and the capacity.
 */
export type SameLengthAndCapacity = LintLevel | DetailedLint2;
/**
 * It lints if a struct has two methods with the same name: one from a trait, another not from a trait.
 */
export type SameNameMethod = LintLevel | DetailedLint2;
/**
 * Checks for an iterator or string search (such as `find()`, `position()`, or `rposition()`) followed by a call to `is_some()` or `is_none()`.
 */
export type SearchIsSome = LintLevel | DetailedLint2;
/**
 * Checks if the `seek` method of the `Seek` trait is called with `SeekFrom::Current(0)`, and if it is, suggests using `stream_position` instead.
 */
export type SeekFromCurrent = LintLevel | DetailedLint2;
/**
 * Checks for jumps to the start of a stream that implements `Seek` and uses the `seek` method providing `Start` as parameter.
 */
export type SeekToStartInsteadOfRewind = LintLevel | DetailedLint2;
/**
 * Checks for explicit self-assignments.
 */
export type SelfAssignment = LintLevel | DetailedLint2;
/**
 * Warns when constructors have the same name as their types.
 */
export type SelfNamedConstructors = LintLevel | DetailedLint2;
/**
 * Checks that module layout uses only `mod.rs` files.
 */
export type SelfNamedModuleFiles = LintLevel | DetailedLint2;
/**
 * Checks for `self` receiver that is only used in recursion with no side-effects.
 */
export type SelfOnlyUsedInRecursion = LintLevel | DetailedLint2;
/**
 * Looks for blocks of expressions and fires if the last expression returns `()` but is not followed by a semicolon.
 */
export type SemicolonIfNothingReturned = LintLevel | DetailedLint2;
/**
 * Suggests moving the semicolon after a block to the inside of the block, after its last expression.
 */
export type SemicolonInsideBlock = LintLevel | DetailedLint2;
/**
 * Suggests moving the semicolon from a block's final expression outside of the block.
 */
export type SemicolonOutsideBlock = LintLevel | DetailedLint2;
/**
 * Warns if literal suffixes are separated by an underscore. To enforce separated literal suffix style, see the `unseparated_literal_suffix` lint.
 */
export type SeparatedLiteralSuffix = LintLevel | DetailedLint2;
/**
 * Checks for misuses of the serde API.
 */
export type SerdeApiMisuse = LintLevel | DetailedLint2;
/**
 * Checks for usage of `contains` to see if a value is not present in a set like `HashSet` or `BTreeSet`, followed by an `insert`.
 */
export type SetContainsOrInsert = LintLevel | DetailedLint2;
/**
 * Checks for bindings that shadow other bindings already in scope, while reusing the original value.
 */
export type ShadowReuse = LintLevel | DetailedLint2;
/**
 * Checks for bindings that shadow other bindings already in scope, while just changing reference level or mutability.
 */
export type ShadowSame = LintLevel | DetailedLint2;
/**
 * Checks for bindings that shadow other bindings already in scope, either without an initialization or with one that does not even use the original value.
 */
export type ShadowUnrelated = LintLevel | DetailedLint2;
/**
 * Checks for the use of short circuit boolean conditions as a statement.
 */
export type ShortCircuitStatement = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type ShouldAssertEq = LintLevel | DetailedLint2;
/**
 * Checks for methods that should live in a trait implementation of a `std` trait (see llogiq's blog post for further information) instead of an inherent implementation.
 */
export type ShouldImplementTrait = LintLevel | DetailedLint2;
/**
 * Checks for `#[should_panic]` attributes without specifying the expected panic message.
 */
export type ShouldPanicWithoutExpect = LintLevel | DetailedLint2;
/**
 * Checks for temporaries returned from function calls in a match scrutinee that have the `clippy::has_significant_drop` attribute.
 */
export type SignificantDropInScrutinee = LintLevel | DetailedLint2;
/**
 * Searches for elements marked with `#[clippy::has_significant_drop]` that could be early dropped but are in fact dropped at the end of their scopes. In other words, enforces the "tightening" of their possible lifetimes.
 */
export type SignificantDropTightening = LintLevel | DetailedLint2;
/**
 * Checks for names that are very similar and thus confusing. In particular, the lint checks for names with a single character change.
 */
export type SimilarNames = LintLevel | DetailedLint2;
/**
 * Checks for functions that are only used once. Does not lint tests.
 */
export type SingleCallFn = LintLevel | DetailedLint2;
/**
 * Warns when using `push_str`/`insert_str` with a single-character string literal where `push`/`insert` with a `char` would work fine.
 */
export type SingleCharAddStr = LintLevel | DetailedLint2;
/**
 * Checks for lifetimes with names which are one character long.
 */
export type SingleCharLifetimeNames = LintLevel | DetailedLint2;
/**
 * Checks for string methods that receive a single-character `str` as an argument, e.g., `_.split("x")`.
 */
export type SingleCharPattern = LintLevel | DetailedLint2;
/**
 * Checking for imports with single component use path.
 */
export type SingleComponentPathImports = LintLevel | DetailedLint2;
/**
 * Checks whether a for loop has a single element.
 */
export type SingleElementLoop = LintLevel | DetailedLint2;
/**
 * Checks for matches with a single arm where an `if let` will usually suffice.
 */
export type SingleMatch = LintLevel | DetailedLint2;
/**
 * Checks for matches with two arms where an `if let else` will usually suffice.
 */
export type SingleMatchElse = LintLevel | DetailedLint2;
/**
 * Checks for functions with method calls to `.map(_)` on an arg of type `Option` as the outermost expression.
 */
export type SingleOptionMap = LintLevel | DetailedLint2;
/**
 * Checks for `Vec` or array initializations that contain only one range.
 */
export type SingleRangeInVecInit = LintLevel | DetailedLint2;
/**
 * Detects expressions where `size_of:: ` or `size_of_val:: ` is used as a count of elements of type `T`
 */
export type SizeOfInElementCount = LintLevel | DetailedLint2;
/**
 * Checks for calls to `size_of_val()` where the argument is a reference to a reference.
 */
export type SizeOfRef = LintLevel | DetailedLint2;
/**
 * Checks for usage of `_.skip_while(condition).next()`.
 */
export type SkipWhileNext = LintLevel | DetailedLint2;
/**
 * Checks for string slices immediately followed by `as_bytes`.
 */
export type SlicedStringAsBytes = LintLevel | DetailedLint2;
/**
 * Checks slow zero-filled vector initialization
 */
export type SlowVectorInitialization = LintLevel | DetailedLint2;
/**
 * When sorting primitive values (integers, bools, chars, as well as arrays, slices, and tuples of such items), it is typically better to use an unstable sort than a stable sort.
 */
export type StableSortPrimitive = LintLevel | DetailedLint2;
/**
 * Finds items imported through `std` when available through `alloc`.
 */
export type StdInsteadOfAlloc = LintLevel | DetailedLint2;
/**
 * Finds items imported through `std` when available through `core`.
 */
export type StdInsteadOfCore = LintLevel | DetailedLint2;
/**
 * Checks for usages of `str.trim().split("\n")` and `str.trim().split("\r\n")`.
 */
export type StrSplitAtNewline = LintLevel | DetailedLint2;
/**
 * This lint checks for `.to_string()` method calls on values of type `&str`.
 */
export type StrToString = LintLevel | DetailedLint2;
/**
 * Checks for all instances of `x + _` where `x` is of type `String`, but only if `string_add_assign` does not match.
 */
export type StringAdd = LintLevel | DetailedLint2;
/**
 * Checks for string appends of the form `x = x + y` (without `let`!).
 */
export type StringAddAssign = LintLevel | DetailedLint2;
/**
 * Checks for the use of `.extend(s.chars())` where s is a `&str` or `String`.
 */
export type StringExtendChars = LintLevel | DetailedLint2;
/**
 * Check if the string is transformed to byte array and casted back to string.
 */
export type StringFromUtf8AsBytes = LintLevel | DetailedLint2;
/**
 * Checks for the `as_bytes` method called on string literals that contain only ASCII characters.
 */
export type StringLitAsBytes = LintLevel | DetailedLint2;
/**
 * Checks for `.chars().any(|i| i == c)`.
 */
export type StringLitCharsAny = LintLevel | DetailedLint2;
/**
 * Checks for slice operations on strings
 */
export type StringSlice = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type StringToString = LintLevel | DetailedLint2;
/**
 * Checks for usage of `libc::strlen` on a `CString` or `CStr` value, and suggest calling `count_bytes()` instead.
 */
export type StrlenOnCStrings = LintLevel | DetailedLint2;
/**
 * Checks for excessive use of bools in structs.
 */
export type StructExcessiveBools = LintLevel | DetailedLint2;
/**
 * Detects struct fields that are prefixed or suffixed by the same characters or the name of the struct itself.
 */
export type StructFieldNames = LintLevel | DetailedLint2;
/**
 * The `clippy::style` group is mostly about writing idiomatic code. Because style is subjective, this lint group is the most opinionated warn-by-default group in Clippy.
 */
export type Style = LintLevel | DetailedLint2;
/**
 * Looks for floating-point expressions that can be expressed using built-in methods to improve both accuracy and performance.
 */
export type SuboptimalFlops = LintLevel | DetailedLint2;
/**
 * The `clippy::suspicious` group is similar to the correctness lints in that it contains lints that trigger on code that is really sus and should be fixed. As opposed to correctness lints, it might be possible that the linted code is intentionally written like it is.
 */
export type Suspicious = LintLevel | DetailedLint2;
/**
 * Lints for suspicious operations in impls of arithmetic operators, e.g. subtracting elements in an Add impl.
 */
export type SuspiciousArithmeticImpl = LintLevel | DetailedLint2;
/**
 * Checks for usage of the non-existent `=*`, `=!` and `=-` operators.
 */
export type SuspiciousAssignmentFormatting = LintLevel | DetailedLint2;
/**
 * Checks for `Command::arg()` invocations that look like they should be multiple arguments instead, such as `arg("-t ext2")`.
 */
export type SuspiciousCommandArgSpace = LintLevel | DetailedLint2;
/**
 * Detects the use of outer doc comments (`///`, `/**`) followed by a bang (`!`): `///!`
 */
export type SuspiciousDocComments = LintLevel | DetailedLint2;
/**
 * Checks for formatting of `else`. It lints if the `else` is followed immediately by a newline or the `else` seems to be missing.
 */
export type SuspiciousElseFormatting = LintLevel | DetailedLint2;
/**
 * Checks for calls to `map` followed by a `count`.
 */
export type SuspiciousMap = LintLevel | DetailedLint2;
/**
 * Lints for suspicious operations in impls of OpAssign, e.g. subtracting elements in an AddAssign impl.
 */
export type SuspiciousOpAssignImpl = LintLevel | DetailedLint2;
/**
 * Checks for the suspicious use of `OpenOptions::create()` without an explicit `OpenOptions::truncate()`.
 */
export type SuspiciousOpenOptions = LintLevel | DetailedLint2;
/**
 * Checks for unlikely usages of binary operators that are almost certainly typos and/or copy/paste errors, given the other usages of binary operators nearby.
 */
export type SuspiciousOperationGroupings = LintLevel | DetailedLint2;
/**
 * Checks for calls to [`splitn`] (https://doc.rust-lang.org/std/primitive.str.html#method.splitn) and related functions with either zero or one splits.
 */
export type SuspiciousSplitn = LintLevel | DetailedLint2;
/**
 * Checks for the usage of `_.to_owned()`, on a `Cow `.
 */
export type SuspiciousToOwned = LintLevel | DetailedLint2;
/**
 * Checks the formatting of a unary operator on the right hand side of a binary operator. It lints if there is no space between the binary and unary operators, but there is a space between the unary and its operand.
 */
export type SuspiciousUnaryOpFormatting = LintLevel | DetailedLint2;
/**
 * Warns for a Bitwise XOR (`^`) operator being probably confused as a powering. It will not trigger if any of the numbers are not in decimal.
 */
export type SuspiciousXorUsedAsPow = LintLevel | DetailedLint2;
/**
 * Checks for calls to `core::mem::swap` where either parameter is derived from a pointer
 */
export type SwapPtrToRef = LintLevel | DetailedLint2;
/**
 * Checks for usage of `std::mem::swap` with temporary values.
 */
export type SwapWithTemporary = LintLevel | DetailedLint2;
/**
 * Checks doc comments for usage of tab characters.
 */
export type TabsInDocComments = LintLevel | DetailedLint2;
/**
 * Checks for construction of a structure or tuple just to assign a value in it.
 */
export type TemporaryAssignment = LintLevel | DetailedLint2;
/**
 * Checks for `#[test]` in doctests unless they are marked with either `ignore`, `no_run` or `compile_fail`.
 */
export type TestAttrInDoctest = LintLevel | DetailedLint2;
/**
 * Triggers when a testing function (marked with the `#[test]` attribute) isn't inside a testing module (marked with `#[cfg(test)]`).
 */
export type TestsOutsideTestModule = LintLevel | DetailedLint2;
/**
 * Checks for `.to_digit(..).is_some()` on `char`s.
 */
export type ToDigitIsSome = LintLevel | DetailedLint2;
/**
 * Checks for `ToString::to_string` applied to a type that implements `Display` in a macro that does formatting.
 */
export type ToStringInFormatArgs = LintLevel | DetailedLint2;
/**
 * Checks for direct implementations of `ToString`.
 */
export type ToStringTraitImpl = LintLevel | DetailedLint2;
/**
 * Checks for usage of `todo!`.
 */
export type Todo = LintLevel | DetailedLint2;
/**
 * Checks if the first paragraph in the documentation of items listed in the module page is too long.
 */
export type TooLongFirstDocParagraph = LintLevel | DetailedLint2;
/**
 * Checks for functions with too many parameters.
 */
export type TooManyArguments = LintLevel | DetailedLint2;
/**
 * Checks for functions with a large amount of lines.
 */
export type TooManyLines = LintLevel | DetailedLint2;
/**
 * Checks for function arguments and let bindings denoted as `ref`.
 */
export type ToplevelRefArg = LintLevel | DetailedLint2;
/**
 * Displays a warning when a struct with a trailing zero-sized array is declared without a `repr` attribute.
 */
export type TrailingEmptyArray = LintLevel | DetailedLint2;
/**
 * Checks for cases where generics or trait objects are being used and multiple syntax specifications for trait bounds are used simultaneously.
 */
export type TraitDuplicationInBounds = LintLevel | DetailedLint2;
/**
 * Checks for transmutes from a `&[u8]` to a `&str`.
 */
export type TransmuteBytesToStr = LintLevel | DetailedLint2;
/**
 * Checks for transmutes from an integer to a `bool`.
 */
export type TransmuteIntToBool = LintLevel | DetailedLint2;
/**
 * Checks for transmutes from `T` to `NonZero `, and suggests the `new_unchecked` method instead.
 */
export type TransmuteIntToNonZero = LintLevel | DetailedLint2;
/**
 * Checks for null function pointer creation through transmute.
 */
export type TransmuteNullToFn = LintLevel | DetailedLint2;
/**
 * Checks for transmutes from a pointer to a pointer, or from a reference to a reference.
 */
export type TransmutePtrToPtr = LintLevel | DetailedLint2;
/**
 * Checks for transmutes from a pointer to a reference.
 */
export type TransmutePtrToRef = LintLevel | DetailedLint2;
/**
 * Checks for transmutes between types which do not have a representation defined relative to each other.
 */
export type TransmuteUndefinedRepr = LintLevel | DetailedLint2;
/**
 * Checks for transmutes that could be a pointer cast.
 */
export type TransmutesExpressibleAsPtrCasts = LintLevel | DetailedLint2;
/**
 * Checks for transmute calls which would receive a null pointer.
 */
export type TransmutingNull = LintLevel | DetailedLint2;
/**
 * Warns about calling `str::trim` (or variants) before `str::split_whitespace`.
 */
export type TrimSplitWhitespace = LintLevel | DetailedLint2;
/**
 * Checks for trivial regex creation (with `Regex::new`, `RegexBuilder::new`, or `RegexSet::new`).
 */
export type TrivialRegex = LintLevel | DetailedLint2;
/**
 * Checks for functions taking arguments by reference, where the argument type is `Copy` and small enough to be more efficient to always pass by value.
 */
export type TriviallyCopyPassByRef = LintLevel | DetailedLint2;
/**
 * Checks for usage of `Err(x)?`.
 */
export type TryErr = LintLevel | DetailedLint2;
/**
 * Checks for tuple<=>array conversions that are not done with `.into()`.
 */
export type TupleArrayConversions = LintLevel | DetailedLint2;
/**
 * Checks for types used in structs, parameters and `let` declarations above a certain complexity threshold.
 */
export type TypeComplexity = LintLevel | DetailedLint2;
/**
 * Looks for calls to `.type_id()` on a `Box `.
 */
export type TypeIdOnBox = LintLevel | DetailedLint2;
/**
 * This lint warns about unnecessary type repetitions in trait bounds
 */
export type TypeRepetitionInBounds = LintLevel | DetailedLint2;
/**
 * Checks for calls to `Read::bytes` on types which don't implement `BufRead`.
 */
export type UnbufferedBytes = LintLevel | DetailedLint2;
/**
 * Lints subtraction between an `Instant` and a `Duration`, or between two `Duration` values.
 */
export type UncheckedTimeSubtraction = LintLevel | DetailedLint2;
/**
 * Checks that there isn't an infinite recursion in trait implementations.
 */
export type UnconditionalRecursion1 = LintLevel | DetailedLint2;
/**
 * Checks for `unsafe` blocks and impls without a `// SAFETY: ` comment explaining why the unsafe operations performed inside the block are safe.
 */
export type UndocumentedUnsafeBlocks = LintLevel | DetailedLint2;
/**
 * Checks for string literals that contain Unicode in a form that is not equal to its NFC-recomposition.
 */
export type UnicodeNotNfc = LintLevel | DetailedLint2;
/**
 * Checks for usage of `unimplemented!`.
 */
export type Unimplemented = LintLevel | DetailedLint2;
/**
 * It detects references to uninhabited types, such as `!` and warns when those are either dereferenced or returned from a function.
 */
export type UninhabitedReferences = LintLevel | DetailedLint2;
/**
 * Checks for `MaybeUninit::uninit().assume_init()`.
 */
export type UninitAssumedInit = LintLevel | DetailedLint2;
/**
 * Checks for `set_len()` call that creates `Vec` with uninitialized elements. This is commonly caused by calling `set_len()` right after allocating or reserving a buffer with `new()`, `default()`, `with_capacity()`, or `reserve()`.
 */
export type UninitVec = LintLevel | DetailedLint2;
/**
 * Detect when a variable is not inlined in a format string, and suggests to inline it.
 */
export type UninlinedFormatArgs = LintLevel | DetailedLint2;
/**
 * Checks for passing a unit value as an argument to a function without using a unit literal (`()`).
 */
export type UnitArg = LintLevel | DetailedLint2;
/**
 * Checks for comparisons to unit. This includes all binary comparisons (like `==` and `
 */
export type UnitCmp = LintLevel | DetailedLint2;
/**
 * Detects `().hash(_)`.
 */
export type UnitHash = LintLevel | DetailedLint2;
/**
 * Checks for functions that expect closures of type Fn(…) -> Ord where the implemented closure returns the unit type. The lint also suggests to remove the semi-colon at the end of the statement if present.
 */
export type UnitReturnExpectingOrd = LintLevel | DetailedLint2;
/**
 * Checks for a return type containing a `Box ` where `T` implements `Sized`
 */
export type UnnecessaryBoxReturns = LintLevel | DetailedLint2;
/**
 * Checks for casts to the same type, casts of int literals to integer types, casts of float literals to float types, and casts between raw pointers that don't change type or constness.
 */
export type UnnecessaryCast = LintLevel | DetailedLint2;
/**
 * Checks for `#[cfg_attr(clippy, allow(clippy::lint))]` and suggests to replace it with `#[allow(clippy::lint)]`.
 */
export type UnnecessaryClippyCfg = LintLevel | DetailedLint2;
/**
 * Checks for `Debug` formatting (`{:?}`) applied to an `OsStr` or `Path`.
 */
export type UnnecessaryDebugFormatting = LintLevel | DetailedLint2;
/**
 * Checks for calls to `TryInto::try_into` and `TryFrom::try_from` when their infallible counterparts could be used.
 */
export type UnnecessaryFallibleConversions = LintLevel | DetailedLint2;
/**
 * Checks for `filter_map` calls that could be replaced by `filter` or `map`. More specifically it checks if the closure provided is only performing one of the filter or map operations and suggests the appropriate option.
 */
export type UnnecessaryFilterMap = LintLevel | DetailedLint2;
/**
 * Checks for `find_map` calls that could be replaced by `find` or `map`. More specifically it checks if the closure provided is only performing one of the find or map operations and suggests the appropriate option.
 */
export type UnnecessaryFindMap = LintLevel | DetailedLint2;
/**
 * Checks the usage of `.first().is_some()` or `.first().is_none()` to check if a slice is empty.
 */
export type UnnecessaryFirstThenCheck = LintLevel | DetailedLint2;
/**
 * Checks for usage of `fold` when a more succinct alternative exists. Specifically, this checks for `fold`s which could be replaced by `any`, `all`, `sum` or `product`.
 */
export type UnnecessaryFold = LintLevel | DetailedLint2;
/**
 * Checks the usage of `.get().is_some()` or `.get().is_none()` on std map types.
 */
export type UnnecessaryGetThenCheck = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.collect:: >().join("")` on iterators.
 */
export type UnnecessaryJoin = LintLevel | DetailedLint2;
/**
 * As the counterpart to `or_fun_call`, this lint looks for unnecessary lazily evaluated closures on `Option` and `Result`.
 */
export type UnnecessaryLazyEvaluations = LintLevel | DetailedLint2;
/**
 * Detects functions that are written to return `&str` that could return `&'static str` but instead return a `&'a str`.
 */
export type UnnecessaryLiteralBound = LintLevel | DetailedLint2;
/**
 * Checks for `.unwrap()` related calls on `Result`s and `Option`s that are constructed.
 */
export type UnnecessaryLiteralUnwrap = LintLevel | DetailedLint2;
/**
 * Suggests removing the use of a `map()` (or `map_err()`) method when an `Option` or `Result` is being constructed.
 */
export type UnnecessaryMapOnConstructor = LintLevel | DetailedLint2;
/**
 * Converts some constructs mapping an Enum value for equality comparison.
 */
export type UnnecessaryMapOr = LintLevel | DetailedLint2;
/**
 * Checks for unnecessary calls to `min()` or `max()` in the following cases
 */
export type UnnecessaryMinOrMax = LintLevel | DetailedLint2;
/**
 * Detects passing a mutable reference to a function that only requires an immutable reference.
 */
export type UnnecessaryMutPassed = LintLevel | DetailedLint2;
/**
 * Checks for expression statements that can be reduced to a sub-expression.
 */
export type UnnecessaryOperation = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.map_or_else()` "map closure" for `Option` type.
 */
export type UnnecessaryOptionMapOrElse = LintLevel | DetailedLint2;
/**
 * Detects cases of owned empty strings being passed as an argument to a function expecting `&str`
 */
export type UnnecessaryOwnedEmptyStrings = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.map_or_else()` "map closure" for `Result` type.
 */
export type UnnecessaryResultMapOrElse = LintLevel | DetailedLint2;
/**
 * Checks for `// SAFETY: ` comments on safe code.
 */
export type UnnecessarySafetyComment = LintLevel | DetailedLint2;
/**
 * Checks for the doc comments of publicly visible safe functions and traits and warns if there is a `# Safety` section.
 */
export type UnnecessarySafetyDoc = LintLevel | DetailedLint2;
/**
 * Checks for imports ending in `::{self}`.
 */
export type UnnecessarySelfImports = LintLevel | DetailedLint2;
/**
 * Checks for the presence of a semicolon at the end of a `match` or `if` statement evaluating to `()`.
 */
export type UnnecessarySemicolon = LintLevel | DetailedLint2;
/**
 * Checks for usage of `Vec::sort_by` passing in a closure which compares the two arguments, either directly or indirectly.
 */
export type UnnecessarySortBy = LintLevel | DetailedLint2;
/**
 * Checks for initialization of an identical `struct` from another instance of the type, either by copying a base without setting any field or by moving all fields individually.
 */
export type UnnecessaryStructInitialization = LintLevel | DetailedLint2;
/**
 * Checks for unnecessary calls to `ToOwned::to_owned` and other `to_owned`-like functions.
 */
export type UnnecessaryToOwned = LintLevel | DetailedLint2;
/**
 * Suggests removing an unnecessary trailing comma before the closing parenthesis in single-line macro invocations.
 */
export type UnnecessaryTrailingComma = LintLevel | DetailedLint2;
/**
 * Checks for calls of `unwrap[_err]()` that cannot fail.
 */
export type UnnecessaryUnwrap = LintLevel | DetailedLint2;
/**
 * Checks for private functions that only return `Ok` or `Some`.
 */
export type UnnecessaryWraps = LintLevel | DetailedLint2;
/**
 * Checks for structure field patterns bound to wildcards.
 */
export type UnneededFieldPattern = LintLevel | DetailedLint2;
/**
 * Checks for struct patterns that match against unit variant.
 */
export type UnneededStructPattern = LintLevel | DetailedLint2;
/**
 * Checks for tuple and struct patterns with a wildcard pattern (`_`) is next to a rest pattern (`..`).
 */
export type UnneededWildcardPattern = LintLevel | DetailedLint2;
/**
 * Checks for unnested or-patterns, e.g., `Some(0) | Some(2)` and suggests replacing the pattern with a nested one, `Some(0 | 2)`.
 */
export type UnnestedOrPatterns = LintLevel | DetailedLint2;
/**
 * Checks for usage of `unreachable!`.
 */
export type Unreachable = LintLevel | DetailedLint2;
/**
 * Warns if a long integral or floating-point constant does not contain underscores.
 */
export type UnreadableLiteral = LintLevel | DetailedLint2;
/**
 * Checks for deriving `serde::Deserialize` on a type that has methods using `unsafe`.
 */
export type UnsafeDeriveDeserialize = LintLevel | DetailedLint2;
/**
 * Checks for imports that remove "unsafe" from an item's name.
 */
export type UnsafeRemovedFromName = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type UnsafeVectorInitialization = LintLevel | DetailedLint2;
/**
 * Warns if literal suffixes are not separated by an underscore. To enforce unseparated literal suffix style, see the `separated_literal_suffix` lint.
 */
export type UnseparatedLiteralSuffix = LintLevel | DetailedLint2;
/**
 * Checks for transmutes between collections whose types have different ABI, size or alignment.
 */
export type UnsoundCollectionTransmute = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type UnstableAsMutSlice = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type UnstableAsSlice = LintLevel | DetailedLint2;
/**
 * Checks for functions that are declared `async` but have no `.await`s inside of them.
 */
export type UnusedAsync = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type UnusedCollect = LintLevel | DetailedLint2;
/**
 * Checks for uses of the `enumerate` method where the index is unused (`_`)
 */
export type UnusedEnumerateIndex = LintLevel | DetailedLint2;
/**
 * Detects formatting parameters that have no effect on the output of `format!()`, `println!()` or similar macros.
 */
export type UnusedFormatSpecs = LintLevel | DetailedLint2;
/**
 * Checks for unused written/read amount.
 */
export type UnusedIoAmount = LintLevel | DetailedLint2;
/**
 * Checks for the creation of a `peekable` iterator that is never `.peek()`ed
 */
export type UnusedPeekable = LintLevel | DetailedLint2;
/**
 * Checks for calls to `Result::ok()` without using the returned `Option`.
 */
export type UnusedResultOk = LintLevel | DetailedLint2;
/**
 * Detects cases where a whole-number literal float is being rounded, using the `floor`, `ceil`, or `round` methods.
 */
export type UnusedRounding = LintLevel | DetailedLint2;
/**
 * Checks methods that contain a `self` argument but don't use it
 */
export type UnusedSelf = LintLevel | DetailedLint2;
/**
 * Checks for `use Trait` where the Trait is only used for its methods and not referenced by a path directly.
 */
export type UnusedTraitNames = LintLevel | DetailedLint2;
/**
 * Checks for unit (`()`) expressions that can be removed.
 */
export type UnusedUnit = LintLevel | DetailedLint2;
/**
 * Warns if hexadecimal or binary literals are not grouped by nibble or byte.
 */
export type UnusualByteGroupings = LintLevel | DetailedLint2;
/**
 * Checks for functions of type `Result` that contain `expect()` or `unwrap()`
 */
export type UnwrapInResult = LintLevel | DetailedLint2;
/**
 * Checks for usages of the following functions with an argument that constructs a default value (e.g., `Default::default` or `String::new`):
 */
export type UnwrapOrDefault = LintLevel | DetailedLint2;
/**
 * Checks for `.unwrap()` or `.unwrap_err()` calls on `Result`s and `.unwrap()` call on `Option`s.
 */
export type UnwrapUsed = LintLevel | DetailedLint2;
/**
 * Checks for fully capitalized names and optionally names containing a capitalized acronym.
 */
export type UpperCaseAcronyms = LintLevel | DetailedLint2;
/**
 * Checks for usage of `Debug` formatting. The purpose of this lint is to catch debugging remnants.
 */
export type UseDebug = LintLevel | DetailedLint2;
/**
 * Checks for unnecessary repetition of structure name when a replacement with `Self` is applicable.
 */
export type UseSelf = LintLevel | DetailedLint2;
/**
 * Checks for the use of bindings with a single leading underscore.
 */
export type UsedUnderscoreBinding = LintLevel | DetailedLint2;
/**
 * Checks for the use of item with a single leading underscore.
 */
export type UsedUnderscoreItems = LintLevel | DetailedLint2;
/**
 * Checks for usage of `.as_ref()` or `.as_mut()` where the types before and after the call are the same.
 */
export type UselessAsref = LintLevel | DetailedLint2;
/**
 * Checks for `extern crate` and `use` items annotated with lint attributes.
 */
export type UselessAttribute = LintLevel | DetailedLint2;
/**
 * Checks that the `concat!` macro has at least two arguments.
 */
export type UselessConcat = LintLevel | DetailedLint2;
/**
 * Checks for `Into`, `TryInto`, `From`, `TryFrom`, or `IntoIter` calls which uselessly convert to the same type.
 */
export type UselessConversion = LintLevel | DetailedLint2;
/**
 * Checks for the use of `format!("string literal with no argument")` and `format!("{}", foo)` where `foo` is a string.
 */
export type UselessFormat = LintLevel | DetailedLint2;
/**
 * Checks for variable declarations immediately followed by a conditional affectation.
 */
export type UselessLetIfSeq = LintLevel | DetailedLint2;
/**
 * Checks for `NonZero*::new_unchecked()` being used in a `const` context.
 */
export type UselessNonzeroNewUnchecked = LintLevel | DetailedLint2;
/**
 * Checks for transmutes to the original type of the object and transmutes that could be a cast.
 */
export type UselessTransmute = LintLevel | DetailedLint2;
/**
 * Checks for usage of `vec![..]` when using `[..]` would be possible.
 */
export type UselessVec = LintLevel | DetailedLint2;
/**
 * Checks for usage of `Vec >` where T: Sized anywhere in the code. Check the Box documentation for more information.
 */
export type VecBox = LintLevel | DetailedLint2;
/**
 * Checks for calls to `push` immediately after creating a new `Vec`.
 */
export type VecInitThenPush = LintLevel | DetailedLint2;
/**
 * Finds occurrences of `Vec::resize(0, an_int)`
 */
export type VecResizeToZero = LintLevel | DetailedLint2;
/**
 * Checks for bit masks that can be replaced by a call to `trailing_zeros`
 */
export type VerboseBitMask = LintLevel | DetailedLint2;
/**
 * Checks for usage of File::read_to_end and File::read_to_string.
 */
export type VerboseFileReads = LintLevel | DetailedLint2;
/**
 * This lint warns when volatile load/store operations (`write_volatile`/`read_volatile`) are applied to composite types.
 */
export type VolatileComposites = LintLevel | DetailedLint2;
/**
 * Checks for usage of `waker.clone().wake()`
 */
export type WakerCloneWake = LintLevel | DetailedLint2;
/**
 * Checks for while loops comparing floating point values.
 */
export type WhileFloat = LintLevel | DetailedLint2;
/**
 * Checks whether variables used within while loop condition can be (and are) mutated in the body.
 */
export type WhileImmutableCondition = LintLevel | DetailedLint2;
/**
 * Detects `loop + match` combinations that are easier written as a `while let` loop.
 */
export type WhileLetLoop = LintLevel | DetailedLint2;
/**
 * Checks for `while let` expressions on iterators.
 */
export type WhileLetOnIterator = LintLevel | DetailedLint2;
/**
 * Checks for wildcard dependencies in the `Cargo.toml`.
 */
export type WildcardDependencies = LintLevel | DetailedLint2;
/**
 * Checks for wildcard enum matches using `_`.
 */
export type WildcardEnumMatchArm = LintLevel | DetailedLint2;
/**
 * Checks for wildcard imports `use _::*`.
 */
export type WildcardImports = LintLevel | DetailedLint2;
/**
 * Checks for wildcard pattern used with others patterns in same match arm.
 */
export type WildcardInOrPatterns = LintLevel | DetailedLint2;
/**
 * This lint warns about the use of literals as `write!`/`writeln!` args.
 */
export type WriteLiteral = LintLevel | DetailedLint2;
/**
 * This lint warns when you use `write!()` with a format string that ends in a newline.
 */
export type WriteWithNewline = LintLevel | DetailedLint2;
/**
 * This lint warns when you use `writeln!(buf, "")` to print a newline.
 */
export type WritelnEmptyString = LintLevel | DetailedLint2;
/**
 * Nothing. This lint has been deprecated
 */
export type WrongPubSelfConvention = LintLevel | DetailedLint2;
/**
 * Checks for methods with certain name prefixes or suffixes, and which do not adhere to standard conventions regarding how `self` is taken. The actual rules are:
 */
export type WrongSelfConvention = LintLevel | DetailedLint2;
/**
 * Checks for transmutes that can't ever be correct on any architecture.
 */
export type WrongTransmute = LintLevel | DetailedLint2;
/**
 * Checks for `0.0 / 0.0`.
 */
export type ZeroDividedByZero = LintLevel | DetailedLint2;
/**
 * Warns if an integral constant literal starts with `0`.
 */
export type ZeroPrefixedLiteral = LintLevel | DetailedLint2;
/**
 * Catch casts from `0` to some pointer type
 */
export type ZeroPtr = LintLevel | DetailedLint2;
/**
 * Checks for array or vec initializations which contain an expression with side effects, but which have a repeat count of zero.
 */
export type ZeroRepeatSideEffects = LintLevel | DetailedLint2;
/**
 * Checks for maps with zero-sized value types anywhere in the code.
 */
export type ZeroSizedMapValues = LintLevel | DetailedLint2;
/**
 * Looks for code that spawns a process but never calls `wait()` on the child.
 */
export type ZombieProcesses = LintLevel | DetailedLint2;
/**
 * Checks for `offset(_)`, `wrapping_`{`add`, `sub`}, etc. on raw pointers to zero-sized types
 */
export type ZstOffset = LintLevel | DetailedLint2;
export type Lint2 = LintLevel | DetailedLint2;
/**
 * Checks if `hint-mostly-unused` is being applied to all dependencies.
 */
export type BlanketHintMostlyUnused = LintLevel | DetailedLint3;
/**
 * Checks for dependency version requirements that do not explicitly specify a full `major.minor.patch` version requirement.
 */
export type ImplicitMinimumVersionReq = LintLevel | DetailedLint3;
/**
 * Checks for unknown lints in the `[lints.cargo]` table.
 */
export type UnknownLints1 = LintLevel | DetailedLint3;
/**
 * Code that does something simple but in a complex way.
 */
export type Complexity1 = LintLevel | DetailedLint3;
/**
 * Code that is outright wrong or useless.
 */
export type Correctness1 = LintLevel | DetailedLint3;
/**
 * New lints that are still under development.
 */
export type Nursery1 = LintLevel | DetailedLint3;
/**
 * Lints which are rather strict or have occasional false positives.
 */
export type Pedantic1 = LintLevel | DetailedLint3;
/**
 * Code that can be written to run faster.
 */
export type Perf1 = LintLevel | DetailedLint3;
/**
 * Lints which prevent the use of Cargo features.
 */
export type Restriction1 = LintLevel | DetailedLint3;
/**
 * Code that should be written in a more idiomatic way.
 */
export type Style1 = LintLevel | DetailedLint3;
/**
 * Code that is most likely wrong or useless.
 */
export type Suspicious1 = LintLevel | DetailedLint3;
export type Lint3 = LintLevel | DetailedLint3;
export type Lint4 = LintLevel | DetailedLint4;
/**
 * The default features of the crate.
 */
export type DefaultFeature = string[];
/**
 * In addition to the built-in profiles, additional custom profiles can be defined.
 */
export type Inherits = string;
/**
 * The `opt-level` setting controls the [`-C opt-level` flag](https://doc.rust-lang.org/rustc/codegen-options/index.html#opt-level) which controls the level
 * of optimization. Higher optimization levels may produce faster runtime code at
 * the expense of longer compiler times. Higher levels may also change and
 * rearrange the compiled code which may make it harder to use with a debugger.
 *
 * It is recommended to experiment with different levels to find the right
 * balance for your project. There may be surprising results, such as level `3`
 * being slower than `2`, or the `"s"` and `"z"` levels not being necessarily
 * smaller. You may also want to reevaluate your settings over time as newer
 * versions of `rustc` changes optimization behavior.
 *
 * See also [Profile Guided Optimization](https://doc.rust-lang.org/rustc/profile-guided-optimization.html) for more advanced optimization
 * techniques.
 */
export type OptimizationLevel = ('s' | 'z') | (0 | 1 | 2 | 3);
/**
 * The `debug` setting controls the [`-C debuginfo` flag](https://doc.rust-lang.org/rustc/codegen-options/index.html#debuginfo) which controls the
 * amount of debug information included in the compiled binary.
 */
export type DebugLevel =
  ('none' | 'line-directives-only' | 'line-tables-only' | 'limited' | 'full') | boolean | (0 | 1 | 2);
/**
 * The split-debuginfo setting controls the -C split-debuginfo flag which controls whether debug information, if generated, is either placed in the executable itself or adjacent to it. This can be useful for reducing the size of the executable, but may make it harder to debug the executable.
 */
export type SplitDebuginfo = 'off' | 'packed' | 'unpacked';
export type Strip = ('none' | 'debuginfo' | 'symbols') | EquivalentToSymbols | EquivalentToNone;
/**
 * The strip option controls the -C strip flag, which directs rustc to strip either symbols or debuginfo from a binary.
 */
export type EquivalentToSymbols = true;
/**
 * The strip option controls the -C strip flag, which directs rustc to strip either symbols or debuginfo from a binary.
 */
export type EquivalentToNone = false;
/**
 * The `debug-assertions` setting controls the [`-C debug-assertions` flag](https://doc.rust-lang.org/rustc/codegen-options/index.html#debug-assertions) which
 * turns `cfg(debug_assertions)` [conditional compilation](https://doc.rust-lang.org/reference/conditional-compilation.html#debug_assertions) on or off. Debug
 * assertions are intended to include runtime validation which is only available
 * in debug/development builds. These may be things that are too expensive or
 * otherwise undesirable in a release build. Debug assertions enables the
 * [`debug_assert!` macro](https://doc.rust-lang.org/std/macro.debug_assert.html) in the standard library.
 */
export type DebugAssertions = boolean;
/**
 * The `overflow-checks` setting controls the [`-C overflow-checks` flag](https://doc.rust-lang.org/rustc/codegen-options/index.html#overflow-checks) which
 * controls the behavior of [runtime integer overflow](https://doc.rust-lang.org/reference/expressions/operator-expr.html#overflow). When overflow-checks are
 * enabled, a panic will occur on overflow.
 */
export type OverflowChecks = boolean;
/**
 * The `lto` setting controls the [`-C lto` flag](https://doc.rust-lang.org/rustc/codegen-options/index.html#lto) which controls LLVM's [link time optimizations](https://llvm.org/docs/LinkTimeOptimization.html). LTO can produce better optimized code, using
 * whole-program analysis, at the cost of longer linking time.
 *
 * See also the [`-C linker-plugin-lto`](https://doc.rust-lang.org/rustc/codegen-options/index.html#linker-plugin-lto) `rustc` flag for cross-language LTO.
 */
export type Lto = ('fat' | 'thin' | 'off') | boolean;
/**
 * The `panic` setting controls the [`-C panic` flag](https://doc.rust-lang.org/rustc/codegen-options/index.html#panic) which controls which panic
 * strategy to use.
 *
 * When set to `"unwind"`, the actual value depends on the default of the target
 * platform. For example, the NVPTX platform does not support unwinding, so it
 * always uses `"abort"`.
 *
 * Tests, benchmarks, build scripts, and proc macros ignore the `panic` setting.
 * The `rustc` test harness currently requires `unwind` behavior. See the
 * [`panic-abort-tests`](https://doc.rust-lang.org/cargo/reference/unstable.html#panic-abort-tests) unstable flag which enables `abort` behavior.
 *
 * Additionally, when using the `abort` strategy and building a test, all of the
 * dependencies will also be forced to built with the `unwind` strategy.
 */
export type Panic1 = 'unwind' | 'abort' | 'immediate-abort';
/**
 * The `incremental` setting controls the [`-C incremental` flag](https://doc.rust-lang.org/rustc/codegen-options/index.html#incremental) which controls
 * whether or not incremental compilation is enabled. Incremental compilation
 * causes `rustc` to to save additional information to disk which will be reused
 * when recompiling the crate, improving re-compile times. The additional
 * information is stored in the `target` directory.
 *
 * The valid options are:
 *
 * * `true`: enabled
 * * `false`: disabled
 *
 * Incremental compilation is only used for workspace members and "path"
 * dependencies.
 *
 * The incremental value can be overridden globally with the `CARGO_INCREMENTAL`
 * [environment variable](https://doc.rust-lang.org/cargo/reference/environment-variables.html) or the [`build.incremental`](https://doc.rust-lang.org/cargo/reference/config.html#buildincremental) config variable.
 */
export type Incremental = boolean;
/**
 * The `codegen-units` setting controls the [`-C codegen-units` flag](https://doc.rust-lang.org/rustc/codegen-options/index.html#codegen-units) which
 * controls how many "code generation units" a crate will be split into. More
 * code generation units allows more of a crate to be processed in parallel
 * possibly reducing compile time, but may produce slower code.
 *
 * This option takes an integer greater than 0.
 *
 * The default is 256 for [incremental](https://doc.rust-lang.org/cargo/reference/profiles.html#incremental) builds, and 16 for
 * non-incremental builds.
 */
export type CodegenUnits = number;
/**
 * The `rpath` setting controls the [`-C rpath` flag](https://doc.rust-lang.org/rustc/codegen-options/index.html#rpath) which controls
 * whether or not [`rpath`](https://en.wikipedia.org/wiki/Rpath) is enabled.
 */
export type Rpath = boolean;

/**
 * A schema for `Cargo.toml`.
 */
export interface CargoToml {
  'cargo-features'?: string[];
  package?: Package;
  project?: Package1;
  workspace?: Workspace1;
  lib?: Target;
  /**
   * Binary targets are executable programs that can be run after being compiled.
   * The default binary filename is `src/main.rs`, which defaults to the name of
   * the package. Additional binaries are stored in the [`src/bin/`
   * directory](https://doc.rust-lang.org/cargo/guide/project-layout.html). The settings for each binary can be [customized](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#configuring-a-target) in the `[[bin]]` tables in `Cargo.toml`.
   *
   * Binaries can use the public API of the package's library. They are also linked
   * with the [`[dependencies]`](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html) defined in `Cargo.toml`.
   *
   * You can run individual binaries with the [`cargo run`](https://doc.rust-lang.org/cargo/commands/cargo-run.html) command with the `--bin
   * <bin-name>` option. [`cargo install`](https://doc.rust-lang.org/cargo/commands/cargo-install.html) can be used to copy the executable to a
   * common location.
   *
   * ```toml
   * # Example of customizing binaries in Cargo.toml.
   * [[bin]]
   * name = "cool-tool"
   * test = false
   * bench = false
   *
   * [[bin]]
   * name = "frobnicator"
   * required-features = ["frobnicate"]
   * ```
   */
  bin?: Target1[];
  /**
   * Files located under the [examples directory](https://doc.rust-lang.org/cargo/guide/project-layout.html) are example uses of the functionality provided by the library. When compiled, they are placed in the[ target/debug/examples directory](https://doc.rust-lang.org/cargo/guide/build-cache.html).
   *
   * Examples can use the public API of the package's library. They are also linked with the [dependencies](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html) and [dev-dependencies](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#development-dependencies) defined in `Cargo.toml`.
   *
   * By default, examples are executable binaries (with a `main()` function). You
   * can specify the [`crate-type` field](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#the-crate-type-field) to make an example
   * be compiled as a library:
   *
   * ```toml
   * [[example]]
   * name = "foo"
   * crate-type = ["staticlib"]
   * ```
   *
   * You can run individual executable examples with the [`cargo run`](https://doc.rust-lang.org/cargo/commands/cargo-run.html) command with
   * the `--example <example-name>` option. Library examples can be built with
   * [`cargo build`](https://doc.rust-lang.org/cargo/commands/cargo-build.html) with the `--example <example-name>` option. [`cargo install`](https://doc.rust-lang.org/cargo/commands/cargo-install.html)
   * with the `--example <example-name>` option can be used to copy executable
   * binaries to a common location. Examples are compiled by [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html) by
   * default to protect them from bit-rotting. Set [the `test`
   * field](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#the-test-field) to `true` if you have `#[test]` functions in the
   * example that you want to run with [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html).
   *
   */
  example?: Target2[];
  /**
   * Files located under the [`tests` directory](https://doc.rust-lang.org/cargo/guide/project-layout.html) are integration
   * tests. When you run [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html), Cargo will compile each of these files as
   * a separate crate, and execute them.
   *
   * Integration tests can use the public API of the package's library. They are
   * also linked with the [`[dependencies]`](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html) and
   * [`[dev-dependencies]`](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#development-dependencies) defined in `Cargo.toml`.
   *
   * If you want to share code among multiple integration tests, you can place it
   * in a separate module such as `tests/common/mod.rs` and then put `mod common;`
   * in each test to import it.
   *
   * Each integration test results in a separate executable binary, and [`cargo
   * test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html) will run them serially. In some cases this can be inefficient, as it
   * can take longer to compile, and may not make full use of multiple CPUs when
   * running the tests. If you have a lot of integration tests, you may want to
   * consider creating a single integration test, and split the tests into multiple
   * modules. The libtest harness will automatically find all of the `#[test]`
   * annotated functions and run them in parallel. You can pass module names to
   * [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html) to only run the tests within that module.
   *
   * Binary targets are automatically built if there is an integration test. This
   * allows an integration test to execute the binary to exercise and test its
   * behavior. The `CARGO_BIN_EXE_<name>` [environment variable](https://doc.rust-lang.org/cargo/reference/environment-variables.html#environment-variables-cargo-sets-for-crates) is set when the
   * integration test is built so that it can use the [`env` macro](https://doc.rust-lang.org/std/macro.env.html) to locate the
   * executable.
   */
  test?: Target3[];
  /**
   * Benchmarks provide a way to test the performance of your code using the
   * [`cargo bench`](https://doc.rust-lang.org/cargo/commands/cargo-bench.html) command. They follow the same structure as [tests](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#tests),
   * with each benchmark function annotated with the `#[bench]` attribute.
   * Similarly to tests:
   *
   * * Benchmarks are placed in the [`benches` directory](https://doc.rust-lang.org/cargo/guide/project-layout.html).
   * * Benchmark functions defined in libraries and binaries have access to the
   *   *private* API within the target they are defined in. Benchmarks in the
   *   `benches` directory may use the *public* API.
   * * [The `bench` field](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#the-bench-field) can be used to define which targets
   *   are benchmarked by default.
   * * [The `harness` field](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#the-harness-field) can be used to disable the
   *   built-in harness.
   *
   * > **Note**: The [`#[bench]`
   * > attribute](https://doc.rust-lang.org/unstable-book/library-features/test.html) is currently
   * > unstable and only available on the [nightly channel](https://doc.rust-lang.org/book/appendix-07-nightly-rust.html). There are some
   * > packages available on [crates.io](https://crates.io/keywords/benchmark) that
   * > may help with running benchmarks on the stable channel, such as
   * > [Criterion](https://crates.io/crates/criterion).
   */
  bench?: Target4[];
  /**
   * Cargo is configured to look for dependencies on [crates.io](https://crates.io) by default. Only
   * the name and a version string are required in this case. In [the cargo
   * guide](https://doc.rust-lang.org/cargo/guide/index.html), we specified a dependency on the `time` crate:
   *
   * ```toml
   * [dependencies]
   * time = "0.1.12"
   * ```
   *
   * The string `"0.1.12"` is a [semver](https://github.com/steveklabnik/semver#requirements) version requirement. Since this
   * string does not have any operators in it, it is interpreted the same way as
   * if we had specified `"^0.1.12"`, which is called a caret requirement.
   *
   * A dependency can also be defined by a table with additional options:
   *
   * ```toml
   * [dependencies]
   * time = { path = "../time", version = "0.1.12" }
   * ```
   */
  dependencies?: {
    [k: string]: Dependency | undefined;
  };
  /**
   * The format of `[dev-dependencies]` is equivalent to `[dependencies]`:
   *
   * ```toml
   * [dev-dependencies]
   * tempdir = "0.3"
   * ```
   *
   * Dev-dependencies are not used when compiling
   * a package for building, but are used for compiling tests, examples, and
   * benchmarks.
   *
   * These dependencies are *not* propagated to other packages which depend on this
   * package.
   *
   * You can also have target-specific development dependencies by using
   * `dev-dependencies` in the target section header instead of `dependencies`. For
   * example:
   *
   * ```toml
   * [target.'cfg(unix)'.dev-dependencies]
   * mio = "0.0.1"
   * ```
   *
   * > **Note**: When a package is published, only dev-dependencies that specify a
   * > `version` will be included in the published crate. For most use cases,
   * > dev-dependencies are not needed when published, though some users (like OS
   * > packagers) may want to run tests within a crate, so providing a `version` if
   * > possible can still be beneficial.
   *
   */
  'dev-dependencies'?: {
    [k: string]: Dependency | undefined;
  };
  /**
   * @deprecated
   * [dev_dependencies] is deprecated. Use [dev-dependencies] instead.
   */
  dev_dependencies?: {
    [k: string]: Dependency | undefined;
  };
  /**
   * You can depend on other Cargo-based crates for use in your build scripts.
   * Dependencies are declared through the `build-dependencies` section of the
   * manifest:
   *
   * ```toml
   * [build-dependencies]
   * cc = "1.0.3"
   * ```
   *
   * The build script **does not** have access to the dependencies listed
   * in the `dependencies` or `dev-dependencies` section. Build
   * dependencies will likewise not be available to the package itself
   * unless listed under the `dependencies` section as well. A package
   * itself and its build script are built separately, so their
   * dependencies need not coincide. Cargo is kept simpler and cleaner by
   * using independent dependencies for independent purposes.
   */
  'build-dependencies'?: {
    [k: string]: Dependency | undefined;
  };
  /**
   * @deprecated
   * [build_dependencies] is deprecated. Use [build-dependencies] instead.
   */
  build_dependencies?: {
    [k: string]: Dependency | undefined;
  };
  target?: {
    [k: string]: Platform | undefined;
  };
  /**
   * [crates.io](https://crates.io) can display various badges for build status, test coverage, etc. for
   * each crate. All badges are optional.
   *
   * - The badges pertaining to build status that are currently available are
   *   Appveyor, CircleCI, Cirrus CI, GitLab, Azure DevOps, Travis CI and Bitbucket
   *   Pipelines.
   * - Available badges pertaining to code test coverage are Codecov and Coveralls.
   * - There are also maintenance-related badges based on isitmaintained.com
   *   which state the issue resolution time, percent of open issues, and future
   *   maintenance intentions.
   *
   * Most badge specifications require a `repository` key. It is expected to be in
   * `user/repo` format.
   *
   * ```toml
   * [badges]
   *
   * # Appveyor: `repository` is required. `branch` is optional; default is `master`
   * # `service` is optional; valid values are `github` (default), `bitbucket`, and
   * # `gitlab`; `id` is optional; you can specify the appveyor project id if you
   * # want to use that instead. `project_name` is optional; use when the repository
   * # name differs from the appveyor project name.
   * appveyor = { repository = "...", branch = "master", service = "github" }
   *
   * # Circle CI: `repository` is required. `branch` is optional; default is `master`
   * circle-ci = { repository = "...", branch = "master" }
   *
   * # Cirrus CI: `repository` is required. `branch` is optional; default is `master`
   * cirrus-ci = { repository = "...", branch = "master" }
   *
   * # GitLab: `repository` is required. `branch` is optional; default is `master`
   * gitlab = { repository = "...", branch = "master" }
   *
   * # Azure DevOps: `project` is required. `pipeline` is required. `build` is optional; default is `1`
   * # Note: project = `organization/project`, pipeline = `name_of_pipeline`, build = `definitionId`
   * azure-devops = { project = "...", pipeline = "...", build="2" }
   *
   * # Travis CI: `repository` in format "<user>/<project>" is required.
   * # `branch` is optional; default is `master`
   * travis-ci = { repository = "...", branch = "master" }
   *
   * # Bitbucket Pipelines: `repository` is required. `branch` is required
   * bitbucket-pipelines = { repository = "...", branch = "master" }
   *
   * # Codecov: `repository` is required. `branch` is optional; default is `master`
   * # `service` is optional; valid values are `github` (default), `bitbucket`, and
   * # `gitlab`.
   * codecov = { repository = "...", branch = "master", service = "github" }
   *
   * # Coveralls: `repository` is required. `branch` is optional; default is `master`
   * # `service` is optional; valid values are `github` (default) and `bitbucket`.
   * coveralls = { repository = "...", branch = "master", service = "github" }
   *
   * # Is it maintained resolution time: `repository` is required.
   * is-it-maintained-issue-resolution = { repository = "..." }
   *
   * # Is it maintained percentage of open issues: `repository` is required.
   * is-it-maintained-open-issues = { repository = "..." }
   *
   * # Maintenance: `status` is required. Available options are:
   * # - `actively-developed`: New features are being added and bugs are being fixed.
   * # - `passively-maintained`: There are no plans for new features, but the maintainer intends to
   * #   respond to issues that get filed.
   * # - `as-is`: The crate is feature complete, the maintainer does not intend to continue working on
   * #   it or providing support, but it works for the purposes it was designed for.
   * # - `experimental`: The author wants to share it with the community but is not intending to meet
   * #   anyone's particular use case.
   * # - `looking-for-maintainer`: The current maintainer would like to transfer the crate to someone
   * #   else.
   * # - `deprecated`: The maintainer does not recommend using this crate (the description of the crate
   * #   can describe why, there could be a better solution available or there could be problems with
   * #   the crate that the author does not want to fix).
   * # - `none`: Displays no badge on crates.io, since the maintainer has not chosen to specify
   * #   their intentions, potential crate users will need to investigate on their own.
   * maintenance = { status = "..." }
   * ```
   */
  badges?: {
    [k: string]:
      | {
          [k: string]: string | undefined;
        }
      | undefined;
  };
  /**
   * Cargo supports features to allow expression of:
   *
   * * conditional compilation options (usable through `cfg` attributes);
   * * optional dependencies, which enhance a package, but are not required; and
   * * clusters of optional dependencies, such as `postgres-all`, that would include the
   *   `postgres` package, the `postgres-macros` package, and possibly other packages
   *   (such as development-time mocking libraries, debugging tools, etc.).
   *
   * A feature of a package is either an optional dependency, or a set of other
   * features.
   *
   */
  features?: {
    default?: DefaultFeature;
    [k: string]: string[] | DefaultFeature | undefined;
  };
  /**
   * Override the default level of lints from different tools by assigning them to a new level in a table.
   */
  lints?:
    | Lints1
    | {
        /**
         * Inherit lints from the workspace manifest.
         */
        workspace: boolean;
      };
  /**
   * The `[patch]` section of `Cargo.toml` can be used to override dependencies
   * with other copies. The syntax is similar to the
   * [`[dependencies]`](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html) section.
   *
   *
   */
  patch?: {
    'crates-io'?: OverrideTheDependencyOnCratesIo;
    [k: string]:
      | {
          [k: string]: Dependency | undefined;
        }
      | OverrideTheDependencyOnCratesIo
      | undefined;
  };
  replace?: {
    [k: string]: Dependency | undefined;
  };
  profile?: Profiles;
}
/**
 * The only field required by Cargo is [`name`](https://doc.rust-lang.org/cargo/reference/manifest.html#the-name-field).
 *  If publishing to a registry, the registry may
 * require additional fields. See the notes below and [the publishing chapter](https://doc.rust-lang.org/cargo/reference/publishing.html) for requirements for publishing to [crates.io](https://crates.io/).
 */
export interface Package {
  /**
   * The package name is an identifier used to refer to the package. It is used
   * when listed as a dependency in another package, and as the default name of
   * inferred lib and bin targets.
   *
   * The name must use only [alphanumeric](https://doc.rust-lang.org/std/primitive.char.html#method.is_alphanumeric) characters or `-` or `_`, and cannot be empty.
   * Note that [`cargo new`](https://doc.rust-lang.org/cargo/commands/cargo-new.html) and [`cargo init`](https://doc.rust-lang.org/cargo/commands/cargo-init.html) impose some additional restrictions on
   * the package name, such as enforcing that it is a valid Rust identifier and not
   * a keyword. [crates.io](https://crates.io) imposes even more restrictions, such as
   * enforcing only ASCII characters, not a reserved name, not a special Windows
   * name such as "nul", is not too long, etc.
   */
  name: string;
  version?: SemanticVersion;
  authors?: Authors;
  edition?: Edition;
  'rust-version'?: RustVersion;
  description?: Description;
  documentation?: Documentation;
  readme?: Readme;
  homepage?: Homepage;
  repository?: Repository;
  license?: License;
  'license-file'?: LicenseFile;
  keywords?: Keywords;
  categories?: Categories;
  /**
   * The `workspace` field can be used to configure the workspace that this package
   * will be a member of. If not specified this will be inferred as the first
   * `Cargo.toml` with `[workspace]` upwards in the filesystem. Setting this is
   * useful if the member is not inside a subdirectory of the workspace root.
   *
   * ```toml
   * [package]
   * # ...
   * workspace = "path/to/workspace/root"
   * ```
   *
   * This field cannot be specified if the manifest already has a `[workspace]`
   * table defined. That is, a crate cannot both be a root crate in a workspace
   * (contain `[workspace]`) and also be a member crate of another workspace
   * (contain `package.workspace`).
   *
   * For more information, see the [workspaces chapter](https://doc.rust-lang.org/cargo/reference/workspaces.html).
   */
  workspace?: string;
  build?: Build;
  /**
   * The `links` field specifies the name of a native library that is being linked
   * to. More information can be found in the [`links`](https://doc.rust-lang.org/cargo/reference/build-scripts.html#the-links-manifest-key) section of the build
   * script guide.
   *
   * ```toml
   * [package]
   * # ...
   * links = "foo"
   * ```
   */
  links?: string;
  exclude?: Exclude;
  /**
   * You can explicitly specify that a set of file patterns should be ignored or
   * included for the purposes of packaging. The patterns specified in the
   * `exclude` field identify a set of files that are not included, and the
   * patterns in `include` specify files that are explicitly included.
   *
   * The patterns should be [gitignore](https://git-scm.com/docs/gitignore)-style patterns. Briefly:
   *
   * - `foo` matches any file or directory with the name `foo` anywhere in the
   *   package. This is equivalent to the pattern `** /foo`.
   * - `/foo` matches any file or directory with the name `foo` only in the root of
   *   the package.
   * - `foo/` matches any *directory* with the name `foo` anywhere in the package.
   * - Common glob patterns like `*`, `?`, and `[]` are supported:
   *   - `*` matches zero or more characters except `/`.  For example, `*.html`
   *     matches any file or directory with the `.html` extension anywhere in the
   *     package.
   *   - `?` matches any character except `/`. For example, `foo?` matches `food`,
   *     but not `foo`.
   *   - `[]` allows for matching a range of characters. For example, `[ab]`
   *     matches either `a` or `b`. `[a-z]` matches letters a through z.
   * - `** /` prefix matches in any directory. For example, `** /foo/bar` matches the
   *   file or directory `bar` anywhere that is directly under directory `foo`.
   * - `/**` suffix matches everything inside. For example, `foo/**` matches all
   *   files inside directory `foo`, including all files in subdirectories below
   *   `foo`.
   * - `/** /` matches zero or more directories. For example, `a/** /b` matches
   *   `a/b`, `a/x/b`, `a/x/y/b`, and so on.
   * - `!` prefix negates a pattern. For example, a pattern of `src/**.rs` and
   *   `!foo.rs` would match all files with the `.rs` extension inside the `src`
   *   directory, except for any file named `foo.rs`.
   *
   * If git is being used for a package, the `exclude` field will be seeded with
   * the `gitignore` settings from the repository.
   *
   * ```toml
   * [package]
   * # ...
   * exclude = ["build/** /*.o", "doc/** /*.html"]
   * ```
   *
   * ```toml
   * [package]
   * # ...
   * include = ["src/** /*", "Cargo.toml"]
   * ```
   *
   * The options are mutually exclusive: setting `include` will override an
   * `exclude`. Note that `include` must be an exhaustive list of files as otherwise
   * necessary source files may not be included. The package's `Cargo.toml` is
   * automatically included.
   *
   * The include/exclude list is also used for change tracking in some situations.
   * For targets built with `rustdoc`, it is used to determine the list of files to
   * track to determine if the target should be rebuilt. If the package has a
   * [build script](https://doc.rust-lang.org/cargo/reference/build-scripts.html) that does not emit any `rerun-if-*` directives, then the
   * include/exclude list is used for tracking if the build script should be re-run
   * if any of those files change.
   */
  include?: Include | WorkspaceInheritance;
  publish?: Publish;
  /**
   * Cargo by default will warn about unused keys in `Cargo.toml` to assist in
   * detecting typos and such. The `package.metadata` table, however, is completely
   * ignored by Cargo and will not be warned about. This section can be used for
   * tools which would like to store package configuration in `Cargo.toml`. For
   * example:
   *
   * ```toml
   * [package]
   * name = "..."
   * # ...
   *
   * # Metadata used when generating an Android APK, for example.
   * [package.metadata.android]
   * package-name = "my-awesome-android-app"
   * assets = "path/to/static"
   * ```
   *
   */
  metadata?: {
    playdate?: PlaydatePackageMetadata;
    quikrun?: Quikrun;
    [k: string]: unknown | undefined;
  };
  /**
   * The `default-run` field in the `[package]` section of the manifest can be used
   * to specify a default binary picked by [`cargo run`](https://doc.rust-lang.org/cargo/commands/cargo-run.html). For example, when there is
   * both `src/bin/a.rs` and `src/bin/b.rs`:
   *
   * ```toml
   * [package]
   * default-run = "a"
   * ```
   */
  'default-run'?: string;
  /**
   * Disable automatic discovery of `lib` targets.
   *
   * Disabling automatic discovery should only be needed for specialized
   * situations. For example, if you have a library where you want a *module* named
   * `bin`, this would present a problem because Cargo would usually attempt to
   * compile anything in the `bin` directory as an executable. Here is a sample
   * layout of this scenario:
   *
   * ```
   * ├── Cargo.toml
   * └── src
   *     ├── lib.rs
   *     └── bin
   *         └── mod.rs
   * ```
   *
   */
  autolib?: boolean;
  /**
   * Disable automatic discovery of `bin` targets.
   *
   * Disabling automatic discovery should only be needed for specialized
   * situations. For example, if you have a library where you want a *module* named
   * `bin`, this would present a problem because Cargo would usually attempt to
   * compile anything in the `bin` directory as an executable. Here is a sample
   * layout of this scenario:
   *
   * ```
   * ├── Cargo.toml
   * └── src
   *     ├── lib.rs
   *     └── bin
   *         └── mod.rs
   * ```
   *
   * To prevent Cargo from inferring `src/bin/mod.rs` as an executable, set
   * this to `false` to disable auto-discovery.
   */
  autobins?: boolean;
  /**
   * Disable automatic discovery of `example` targets.
   *
   * Disabling automatic discovery should only be needed for specialized
   * situations. For example, if you have a library where you want a *module* named
   * `bin`, this would present a problem because Cargo would usually attempt to
   * compile anything in the `bin` directory as an executable. Here is a sample
   * layout of this scenario:
   *
   * ```
   * ├── Cargo.toml
   * └── src
   *     ├── lib.rs
   *     └── bin
   *         └── mod.rs
   * ```
   *
   */
  autoexamples?: boolean;
  /**
   * Disable automatic discovery of `test` targets.
   *
   * Disabling automatic discovery should only be needed for specialized
   * situations. For example, if you have a library where you want a *module* named
   * `bin`, this would present a problem because Cargo would usually attempt to
   * compile anything in the `bin` directory as an executable. Here is a sample
   * layout of this scenario:
   *
   * ```
   * ├── Cargo.toml
   * └── src
   *     ├── lib.rs
   *     └── bin
   *         └── mod.rs
   * ```
   *
   */
  autotests?: boolean;
  /**
   * Disable automatic discovery of `bench` targets.
   *
   * Disabling automatic discovery should only be needed for specialized
   * situations. For example, if you have a library where you want a *module* named
   * `bin`, this would present a problem because Cargo would usually attempt to
   * compile anything in the `bin` directory as an executable. Here is a sample
   * layout of this scenario:
   *
   * ```
   * ├── Cargo.toml
   * └── src
   *     ├── lib.rs
   *     └── bin
   *         └── mod.rs
   * ```
   *
   */
  autobenches?: boolean;
  resolver?: Resolver;
  /**
   * Sets whether the current package is a teapot or something else that is not capable of brewing tea.
   */
  'im-a-teapot'?: boolean;
  metabuild?: MetaBuild;
  'namespaced-features'?: boolean;
  'publish-lockfile'?: boolean;
}
export interface WorkspaceInheritance {
  workspace: Workspace;
}
/**
 * Metadata and build configuration.
 */
export interface PlaydatePackageMetadata {
  /**
   * A unique identifier for your game, in reverse DNS notation.
   */
  'bundle-id': string;
  /**
   * A game version number, formatted any way you wish, that is displayed to players. It is not used to compute when updates should occur.
   */
  name?: string;
  author?: string;
  description?: string;
  version?: string;
  /**
   * A monotonically-increasing integer value used to indicate a unique version of your game. This can be set using an automated build process like Continuous Integration to avoid having to set the value by hand.
   *
   * For sideloaded games, buildNumber is required and is used to determine when a newer version is available to download.
   */
  'build-number'?: number;
  /**
   * A directory of images that will be used by the launcher.
   *
   * More in [official documentation](https://sdk.play.date/#pdxinfo).
   */
  'image-path'?: string;
  /**
   * Should point to the path of a short audio file to be played as the game launch animation is taking place.
   *
   * More in [official documentation](https://sdk.play.date/#pdxinfo).
   */
  'launch-sound-path'?: string;
  /**
   * Optional. A content warning that displays when the user launches your game for the first time. The user will have the option of backing out and not launching your game if they choose.
   */
  'content-warning'?: string;
  /**
   * Optional. A second content warning that displays on a second screen when the user launches your game for the first time. The user will have the option of backing out and not launching your game if they choose.
   *
   * Note: `content-warning2` will only display if a `content-warning` attribute is also specified.
   *
   * The string displayed on the content warning screen can only be so long before it will be truncated with an "…" character. Be sure to keep this in mind when designing your `content-warning` and `content-warning2` text.
   */
  'content-warning2'?: string;
  assets?: AssetsRules | AssetsList;
  'dev-assets'?: AssetsRules | AssetsList;
  options?: Configuration;
  support?: {
    [k: string]: unknown | undefined;
  };
}
/**
 * Rules used to resolve paths to include.
 */
export interface AssetsRules {
  options?: AssetsConfiguration;
  [k: string]: Path | Include1 | AssetsConfiguration | undefined;
}
/**
 * Options for assets paths resolution and how to build assets collection
 */
export interface AssetsConfiguration {
  /**
   * Allow overwriting existing files.
   */
  overwrite?: boolean;
  'follow-symlinks'?: boolean;
  method?: 'copy' | 'link';
  /**
   * Allow build assets for dependencies.
   */
  dependencies?: boolean;
}
/**
 * Package build options.
 */
export interface Configuration {
  assets?: AssetsConfiguration;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for quikrun, a CLI tool to run code files instantly without typing complex commands in terminal.
 */
export interface Quikrun {
  /**
   * Path to the JSON schema
   */
  $schema?: string;
  /**
   * Custom shell to run commands in
   */
  shell?:
    | string
    | {
        /**
         * Custom shell for Windows
         */
        win?: string;
        /**
         * Custom shell for Linux
         */
        linux?: string;
        /**
         * Custom shell for macOS (Darwin)
         */
        darwin?: string;
      };
  /**
   * Clear the terminal before executing commands
   */
  clear_terminal?: boolean;
  /**
   * Show time taken to execute the script
   */
  show_time_took?: boolean;
  /**
   * Show the actual command that is being run
   */
  show_command?: boolean;
  /**
   * Show the shell being used for execution
   */
  show_shell?: boolean;
  /**
   * Show the divider line before command stdout/stderr
   */
  show_divider?: boolean;
  /**
   * Directory to store temporary execution files
   */
  temp_dir?: string | null;
  /**
   * Change directory to the folder containing the file before execution
   */
  cd_to_file_dir?: boolean;
  /**
   * Keep generated binaries or temporary files after execution
   */
  keep_artifacts?: boolean;
  /**
   * Controls closing behavior after execution
   */
  auto_close?: ('always' | 'never' | 'on_success') | number;
  /**
   * Command Templates by file extension
   */
  commands?: {
    [k: string]: CommandValue | undefined;
  };
}
export interface CompileRun {
  /**
   * Command template to compile the file before running (e.g. 'g++ {file} -o {out}')
   */
  compile?: string;
  /**
   * Command template to execute the compiled binary (e.g. '{out}')
   */
  run?: string;
}
export interface ShellFamilySpecific {
  /**
   * Command for POSIX shells (bash, zsh, sh, etc.)
   */
  posix?: CommandValue | OsSpecific;
  /**
   * Command for Windows Command Prompt (cmd.exe)
   */
  cmd?: CommandValue | OsSpecific;
  /**
   * Command for PowerShell Core (pwsh)
   */
  pwsh?: CommandValue | OsSpecific;
}
export interface OsSpecific {
  /**
   * Command for Linux
   */
  linux?: (string | CompileRun) | CommandValue[] | ShellFamilySpecific;
  /**
   * Command for macOS (Darwin)
   */
  darwin?: (string | CompileRun) | CommandValue[] | ShellFamilySpecific;
  /**
   * Command for Windows
   */
  win?: (string | CompileRun) | CommandValue[] | ShellFamilySpecific;
}
/**
 * @deprecated
 * The only field required by Cargo is [`name`](https://doc.rust-lang.org/cargo/reference/manifest.html#the-name-field).
 *  If publishing to a registry, the registry may
 * require additional fields. See the notes below and [the publishing chapter](https://doc.rust-lang.org/cargo/reference/publishing.html) for requirements for publishing to [crates.io](https://crates.io/).
 */
export interface Package1 {
  /**
   * The package name is an identifier used to refer to the package. It is used
   * when listed as a dependency in another package, and as the default name of
   * inferred lib and bin targets.
   *
   * The name must use only [alphanumeric](https://doc.rust-lang.org/std/primitive.char.html#method.is_alphanumeric) characters or `-` or `_`, and cannot be empty.
   * Note that [`cargo new`](https://doc.rust-lang.org/cargo/commands/cargo-new.html) and [`cargo init`](https://doc.rust-lang.org/cargo/commands/cargo-init.html) impose some additional restrictions on
   * the package name, such as enforcing that it is a valid Rust identifier and not
   * a keyword. [crates.io](https://crates.io) imposes even more restrictions, such as
   * enforcing only ASCII characters, not a reserved name, not a special Windows
   * name such as "nul", is not too long, etc.
   */
  name: string;
  version?: SemanticVersion;
  authors?: Authors;
  edition?: Edition;
  'rust-version'?: RustVersion;
  description?: Description;
  documentation?: Documentation;
  readme?: Readme;
  homepage?: Homepage;
  repository?: Repository;
  license?: License;
  'license-file'?: LicenseFile;
  keywords?: Keywords;
  categories?: Categories;
  /**
   * The `workspace` field can be used to configure the workspace that this package
   * will be a member of. If not specified this will be inferred as the first
   * `Cargo.toml` with `[workspace]` upwards in the filesystem. Setting this is
   * useful if the member is not inside a subdirectory of the workspace root.
   *
   * ```toml
   * [package]
   * # ...
   * workspace = "path/to/workspace/root"
   * ```
   *
   * This field cannot be specified if the manifest already has a `[workspace]`
   * table defined. That is, a crate cannot both be a root crate in a workspace
   * (contain `[workspace]`) and also be a member crate of another workspace
   * (contain `package.workspace`).
   *
   * For more information, see the [workspaces chapter](https://doc.rust-lang.org/cargo/reference/workspaces.html).
   */
  workspace?: string;
  build?: Build;
  /**
   * The `links` field specifies the name of a native library that is being linked
   * to. More information can be found in the [`links`](https://doc.rust-lang.org/cargo/reference/build-scripts.html#the-links-manifest-key) section of the build
   * script guide.
   *
   * ```toml
   * [package]
   * # ...
   * links = "foo"
   * ```
   */
  links?: string;
  exclude?: Exclude;
  /**
   * You can explicitly specify that a set of file patterns should be ignored or
   * included for the purposes of packaging. The patterns specified in the
   * `exclude` field identify a set of files that are not included, and the
   * patterns in `include` specify files that are explicitly included.
   *
   * The patterns should be [gitignore](https://git-scm.com/docs/gitignore)-style patterns. Briefly:
   *
   * - `foo` matches any file or directory with the name `foo` anywhere in the
   *   package. This is equivalent to the pattern `** /foo`.
   * - `/foo` matches any file or directory with the name `foo` only in the root of
   *   the package.
   * - `foo/` matches any *directory* with the name `foo` anywhere in the package.
   * - Common glob patterns like `*`, `?`, and `[]` are supported:
   *   - `*` matches zero or more characters except `/`.  For example, `*.html`
   *     matches any file or directory with the `.html` extension anywhere in the
   *     package.
   *   - `?` matches any character except `/`. For example, `foo?` matches `food`,
   *     but not `foo`.
   *   - `[]` allows for matching a range of characters. For example, `[ab]`
   *     matches either `a` or `b`. `[a-z]` matches letters a through z.
   * - `** /` prefix matches in any directory. For example, `** /foo/bar` matches the
   *   file or directory `bar` anywhere that is directly under directory `foo`.
   * - `/**` suffix matches everything inside. For example, `foo/**` matches all
   *   files inside directory `foo`, including all files in subdirectories below
   *   `foo`.
   * - `/** /` matches zero or more directories. For example, `a/** /b` matches
   *   `a/b`, `a/x/b`, `a/x/y/b`, and so on.
   * - `!` prefix negates a pattern. For example, a pattern of `src/**.rs` and
   *   `!foo.rs` would match all files with the `.rs` extension inside the `src`
   *   directory, except for any file named `foo.rs`.
   *
   * If git is being used for a package, the `exclude` field will be seeded with
   * the `gitignore` settings from the repository.
   *
   * ```toml
   * [package]
   * # ...
   * exclude = ["build/** /*.o", "doc/** /*.html"]
   * ```
   *
   * ```toml
   * [package]
   * # ...
   * include = ["src/** /*", "Cargo.toml"]
   * ```
   *
   * The options are mutually exclusive: setting `include` will override an
   * `exclude`. Note that `include` must be an exhaustive list of files as otherwise
   * necessary source files may not be included. The package's `Cargo.toml` is
   * automatically included.
   *
   * The include/exclude list is also used for change tracking in some situations.
   * For targets built with `rustdoc`, it is used to determine the list of files to
   * track to determine if the target should be rebuilt. If the package has a
   * [build script](https://doc.rust-lang.org/cargo/reference/build-scripts.html) that does not emit any `rerun-if-*` directives, then the
   * include/exclude list is used for tracking if the build script should be re-run
   * if any of those files change.
   */
  include?: Include | WorkspaceInheritance;
  publish?: Publish;
  /**
   * Cargo by default will warn about unused keys in `Cargo.toml` to assist in
   * detecting typos and such. The `package.metadata` table, however, is completely
   * ignored by Cargo and will not be warned about. This section can be used for
   * tools which would like to store package configuration in `Cargo.toml`. For
   * example:
   *
   * ```toml
   * [package]
   * name = "..."
   * # ...
   *
   * # Metadata used when generating an Android APK, for example.
   * [package.metadata.android]
   * package-name = "my-awesome-android-app"
   * assets = "path/to/static"
   * ```
   *
   */
  metadata?: {
    playdate?: PlaydatePackageMetadata;
    quikrun?: Quikrun;
    [k: string]: unknown | undefined;
  };
  /**
   * The `default-run` field in the `[package]` section of the manifest can be used
   * to specify a default binary picked by [`cargo run`](https://doc.rust-lang.org/cargo/commands/cargo-run.html). For example, when there is
   * both `src/bin/a.rs` and `src/bin/b.rs`:
   *
   * ```toml
   * [package]
   * default-run = "a"
   * ```
   */
  'default-run'?: string;
  /**
   * Disable automatic discovery of `lib` targets.
   *
   * Disabling automatic discovery should only be needed for specialized
   * situations. For example, if you have a library where you want a *module* named
   * `bin`, this would present a problem because Cargo would usually attempt to
   * compile anything in the `bin` directory as an executable. Here is a sample
   * layout of this scenario:
   *
   * ```
   * ├── Cargo.toml
   * └── src
   *     ├── lib.rs
   *     └── bin
   *         └── mod.rs
   * ```
   *
   */
  autolib?: boolean;
  /**
   * Disable automatic discovery of `bin` targets.
   *
   * Disabling automatic discovery should only be needed for specialized
   * situations. For example, if you have a library where you want a *module* named
   * `bin`, this would present a problem because Cargo would usually attempt to
   * compile anything in the `bin` directory as an executable. Here is a sample
   * layout of this scenario:
   *
   * ```
   * ├── Cargo.toml
   * └── src
   *     ├── lib.rs
   *     └── bin
   *         └── mod.rs
   * ```
   *
   * To prevent Cargo from inferring `src/bin/mod.rs` as an executable, set
   * this to `false` to disable auto-discovery.
   */
  autobins?: boolean;
  /**
   * Disable automatic discovery of `example` targets.
   *
   * Disabling automatic discovery should only be needed for specialized
   * situations. For example, if you have a library where you want a *module* named
   * `bin`, this would present a problem because Cargo would usually attempt to
   * compile anything in the `bin` directory as an executable. Here is a sample
   * layout of this scenario:
   *
   * ```
   * ├── Cargo.toml
   * └── src
   *     ├── lib.rs
   *     └── bin
   *         └── mod.rs
   * ```
   *
   */
  autoexamples?: boolean;
  /**
   * Disable automatic discovery of `test` targets.
   *
   * Disabling automatic discovery should only be needed for specialized
   * situations. For example, if you have a library where you want a *module* named
   * `bin`, this would present a problem because Cargo would usually attempt to
   * compile anything in the `bin` directory as an executable. Here is a sample
   * layout of this scenario:
   *
   * ```
   * ├── Cargo.toml
   * └── src
   *     ├── lib.rs
   *     └── bin
   *         └── mod.rs
   * ```
   *
   */
  autotests?: boolean;
  /**
   * Disable automatic discovery of `bench` targets.
   *
   * Disabling automatic discovery should only be needed for specialized
   * situations. For example, if you have a library where you want a *module* named
   * `bin`, this would present a problem because Cargo would usually attempt to
   * compile anything in the `bin` directory as an executable. Here is a sample
   * layout of this scenario:
   *
   * ```
   * ├── Cargo.toml
   * └── src
   *     ├── lib.rs
   *     └── bin
   *         └── mod.rs
   * ```
   *
   */
  autobenches?: boolean;
  resolver?: Resolver;
  /**
   * Sets whether the current package is a teapot or something else that is not capable of brewing tea.
   */
  'im-a-teapot'?: boolean;
  metabuild?: MetaBuild;
  'namespaced-features'?: boolean;
  'publish-lockfile'?: boolean;
}
/**
 * The `[workspace]` table in `Cargo.toml` defines which packages are members of
 * the workspace:
 *
 * ```toml
 * [workspace]
 * members = ["member1", "path/to/member2", "crates/*"]
 * exclude = ["crates/foo", "path/to/other"]
 * ```
 *
 * An empty `[workspace]` table can be used with a `[package]` to conveniently
 * create a workspace with the package and all of its path dependencies.
 *
 * All [`path` dependencies](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#specifying-path-dependencies) residing in the workspace directory automatically
 * become members. Additional members can be listed with the `members` key, which
 * should be an array of strings containing directories with `Cargo.toml` files.
 *
 * The `members` list also supports [globs](https://docs.rs/glob/0.3.0/glob/struct.Pattern.html) to match multiple paths, using
 * typical filename glob patterns like `*` and `?`.
 *
 * The `exclude` key can be used to prevent paths from being included in a
 * workspace. This can be useful if some path dependencies aren't desired to be
 * in the workspace at all, or using a glob pattern and you want to remove a
 * directory.
 *
 * An empty `[workspace]` table can be used with a `[package]` to conveniently
 * create a workspace with the package and all of its path dependencies.
 */
export interface Workspace1 {
  /**
   * The `workspace.package` table is where you define keys that can be
   * inherited by members of a workspace. These keys can be inherited by
   * defining them in the member package with `{key}.workspace = true`.
   *
   * Keys that are supported:
   *
   * |                |                 |
   * |----------------|-----------------|
   * | `authors`      | `categories`    |
   * | `description`  | `documentation` |
   * | `edition`      | `exclude`       |
   * | `homepage`     | `include`       |
   * | `keywords`     | `license`       |
   * | `license-file` | `publish`       |
   * | `readme`       | `repository`    |
   * | `rust-version` | `version`       |
   *
   * - `license-file` and `readme` are relative to the workspace root
   * - `include` and `exclude` are relative to your package root
   *
   * Example:
   * ```toml
   * # [PROJECT_DIR]/Cargo.toml
   * [workspace]
   * members = ["bar"]
   *
   * [workspace.package]
   * version = "1.2.3"
   * authors = ["Nice Folks"]
   * description = "A short description of my package"
   * documentation = "https://example.com/bar"
   * ```
   *
   * ```toml
   * # [PROJECT_DIR]/bar/Cargo.toml
   * [package]
   * name = "bar"
   * version.workspace = true
   * authors.workspace = true
   * description.workspace = true
   * documentation.workspace = true
   * ```
   */
  package?: {
    version?: SemanticVersion1;
    authors?: Authors1;
    edition?: Edition1;
    'rust-version'?: RustVersion1;
    description?: Description1;
    documentation?: Documentation1;
    readme?: Readme1;
    homepage?: Homepage1;
    repository?: Repository1;
    license?: License1;
    'license-file'?: LicenseFile1;
    keywords?: Keywords1;
    categories?: Categories1;
    exclude?: Exclude1;
    include?: Include;
    publish?: Publish1;
    [k: string]: unknown | undefined;
  };
  resolver?: Resolver;
  /**
   * All [`path` dependencies] residing in the workspace directory automatically
   * become members. Additional members can be listed with the `members` key, which
   * should be an array of strings containing directories with `Cargo.toml` files.
   *
   * The `members` list also supports [globs] to match multiple paths, using
   * typical filename glob patterns like `*` and `?`.
   *
   * Items: All [`path` dependencies] residing in the workspace directory automatically
   * become members. Additional members can be listed with the `members` key, which
   * should be an array of strings containing directories with `Cargo.toml` files.
   *
   * The `members` list also supports [globs] to match multiple paths, using
   * typical filename glob patterns like `*` and `?`.
   */
  members?: string[];
  /**
   * The `exclude` key can be used to prevent paths from being included in a
   * workspace. This can be useful if some path dependencies aren't desired to be
   * in the workspace at all, or using a glob pattern and you want to remove a
   * directory.
   *
   * Items: The `exclude` key can be used to prevent paths from being included in a
   * workspace. This can be useful if some path dependencies aren't desired to be
   * in the workspace at all, or using a glob pattern and you want to remove a
   * directory.
   */
  exclude?: string[];
  /**
   * The optional `default-members` key can be specified to set the members to
   * operate on when in the workspace root and the package selection flags are not
   * used:
   *
   * ```toml
   * [workspace]
   * members = ["path/to/member1", "path/to/member2", "path/to/member3/*"]
   * default-members = ["path/to/member2", "path/to/member3/foo"]
   * ```
   *
   * When specified, `default-members` must expand to a subset of `members`.
   *
   * Items: The optional `default-members` key can be specified to set the members to
   * operate on when in the workspace root and the package selection flags are not
   * used:
   *
   * ```toml
   * [workspace]
   * members = ["path/to/member1", "path/to/member2", "path/to/member3/*"]
   * default-members = ["path/to/member2", "path/to/member3/foo"]
   * ```
   *
   * When specified, `default-members` must expand to a subset of `members`.
   */
  'default-members'?: string[];
  /**
   * The `workspace.dependencies` table is where you define dependencies to be
   * inherited by members of a workspace.
   *
   * Specifying a workspace dependency is similar to [package dependencies](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html) except:
   * - Dependencies from this table cannot be declared as `optional`
   * - [`features`][features] declared in this table are additive with the `features` from `[dependencies]`
   *
   * You can then [inherit the workspace dependency as a package dependency](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#inheriting-a-dependency-from-a-workspace)
   *
   * Example:
   * ```toml
   * # [PROJECT_DIR]/Cargo.toml
   * [workspace]
   * members = ["bar"]
   *
   * [workspace.dependencies]
   * cc = "1.0.73"
   * rand = "0.8.5"
   * regex = { version = "1.6.0", default-features = false, features = ["std"] }
   * ```
   *
   * ```toml
   * # [PROJECT_DIR]/bar/Cargo.toml
   * [package]
   * name = "bar"
   * version = "0.2.0"
   *
   * [dependencies]
   * regex = { workspace = true, features = ["unicode"] }
   *
   * [build-dependencies]
   * cc.workspace = true
   *
   * [dev-dependencies]
   * rand.workspace = true
   * ```
   */
  dependencies?: {
    [k: string]: Dependency | undefined;
  };
  lints?: Lints;
  /**
   * The `workspace.metadata` table is ignored by Cargo and will not be warned
   * about. This section can be used for tools that would like to store workspace
   * configuration in `Cargo.toml`. For example:
   *
   * ```toml
   * [workspace]
   * members = ["member1", "member2"]
   *
   * [workspace.metadata.webcontents]
   * root = "path/to/webproject"
   * tool = ["npm", "run", "build"]
   * # ...
   * ```
   *
   * There is a similar set of tables at the package level at
   * `package.metadata`. While cargo does not specify a
   * format for the content of either of these tables, it is suggested that
   * external tools may wish to use them in a consistent fashion, such as referring
   * to the data in `workspace.metadata` if data is missing from `package.metadata`,
   * if that makes sense for the tool in question.
   *
   */
  metadata?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface DetailedDependency {
  /**
   * Specify the name of the package.
   *
   * When writing a `[dependencies]` section in `Cargo.toml` the key you write for a
   * dependency typically matches up to the name of the crate you import from in the
   * code. For some projects, though, you may wish to reference the crate with a
   * different name in the code regardless of how it's published on crates.io. For
   * example you may wish to:
   *
   * * Avoid the need to  `use foo as bar` in Rust source.
   * * Depend on multiple versions of a crate.
   * * Depend on crates with the same name from different registries.
   *
   * To support this Cargo supports a `package` key in the `[dependencies]` section
   * of which package should be depended on:
   *
   * ```toml
   * [package]
   * name = "mypackage"
   * version = "0.0.1"
   *
   * [dependencies]
   * foo = "0.1"
   * bar = { git = "https://github.com/example/project", package = "foo" }
   * baz = { version = "0.1", registry = "custom", package = "foo" }
   * ```
   *
   * In this example, three crates are now available in your Rust code:
   *
   * ```rust
   * extern crate foo; // crates.io
   * extern crate bar; // git repository
   * extern crate baz; // registry `custom`
   * ```
   *
   * All three of these crates have the package name of `foo` in their own
   * `Cargo.toml`, so we're explicitly using the `package` key to inform Cargo that
   * we want the `foo` package even though we're calling it something else locally.
   * The `package` key, if not specified, defaults to the name of the dependency
   * being requested.
   *
   */
  package?: string;
  /**
   * Inherit this dependency from the workspace manifest.
   */
  workspace?: true;
  /**
   * Cargo supports **path dependencies** which are typically sub-crates that live within one repository.
   * Let's start off by making a new crate inside of our `hello_world` package:
   *
   * ```console
   * # inside of hello_world/
   * $ cargo new hello_utils
   * ```
   *
   * This will create a new folder `hello_utils` inside of which a `Cargo.toml` and
   * `src` folder are ready to be configured. In order to tell Cargo about this, open
   * up `hello_world/Cargo.toml` and add `hello_utils` to your dependencies:
   *
   * ```toml
   * [dependencies]
   * hello_utils = { path = "hello_utils" }
   * ```
   *
   * This tells Cargo that we depend on a crate called `hello_utils` which is found
   * in the `hello_utils` folder (relative to the `Cargo.toml` it's written in).
   */
  path?: string;
  /**
   * To depend on a library located in a `git` repository, the minimum information
   * you need to specify is the location of the repository with the `git` key:
   *
   * ```toml
   * [dependencies]
   * rand = { git = "https://github.com/rust-lang-nursery/rand" }
   * ```
   *
   * Cargo will fetch the `git` repository at this location then look for a
   * `Cargo.toml` for the requested crate anywhere inside the `git` repository
   * (not necessarily at the root - for example, specifying a member crate name
   * of a workspace and setting `git` to the repository containing the workspace).
   *
   * Since we haven't specified any other information, Cargo assumes that
   * we intend to use the latest commit on the main branch to build our package.
   * You can combine the `git` key with the `rev`, `tag`, or `branch` keys to
   * specify something else. Here's an example of specifying that you want to use
   * the latest commit on a branch named `next`:
   *
   * ```toml
   * [dependencies]
   * rand = { git = "https://github.com/rust-lang-nursery/rand", branch = "next" }
   * ```
   *
   * See [Git Authentication](https://doc.rust-lang.org/cargo/appendix/git-authentication.html) for help with git authentication for private repos.
   *
   * > **Note**: [crates.io](https://crates.io/) does not allow packages to be published with `git`
   * > dependencies (`git` [dev-dependencies](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#development-dependencies) are ignored). See the [Multiple
   * > locations](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#multiple-locations) section for a fallback alternative.
   *
   */
  git?: string;
  /**
   * Specify the Git branch to use in case of a [Git dependency](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#specifying-dependencies-from-git-repositories).
   */
  branch?: string;
  /**
   * Specify the Git revision to use in case of a [Git dependency](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#choice-of-commit).
   *
   * This can be a commit hash, or a named reference exposed by the remote repository. GitHub Pull Requests may be specified using the `refs/pull/ID/head` format.
   */
  rev?: string;
  /**
   * Specify the Git tag to use in case of a [Git dependency](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#specifying-dependencies-from-git-repositories).
   */
  tag?: string;
  version?: SemanticVersionRequirement;
  /**
   * Use the default features of the dependency.
   */
  'default-features'?: boolean;
  /**
   * @deprecated
   * "default_features" is deprecated. Use "default-features" instead.
   */
  default_features?: boolean;
  /**
   * List of features to activate in the dependency.
   *
   * Items: List of features to activate in the dependency.
   */
  features?: string[];
  /**
   * Mark the dependency as optional.
   *
   * Optional dependencies can be activated through features.
   */
  optional?: true;
  public?: boolean;
  /**
   * Specifies the Cargo target to build for an artifact dependency.
   */
  artifact?: string | string[];
  /**
   * Whether to also build the dependency's library as a normal Rust lib dependency. This field can only be specified when artifact is specified.
   */
  lib?: boolean;
  /**
   * The platform target to build the artifact dependency for. This field can only be specified when artifact is specified.
   */
  target?: string;
  /**
   * To specify a dependency from a registry other than [crates.io](https://crates.io), first the
   * registry must be configured in a `.cargo/config.toml` file. See the [registries
   * documentation](https://doc.rust-lang.org/cargo/reference/registries.html) for more information. In the dependency, set the `registry` key
   * to the name of the registry to use.
   *
   * ```toml
   * [dependencies]
   * some-crate = { version = "1.0", registry = "my-registry" }
   * ```
   *
   * > **Note**: [crates.io](https://crates.io) does not allow packages to be published with
   * > dependencies on other registries.
   *
   */
  registry?: string;
  'registry-index'?: string;
}
/**
 * The `workspace.lints` table is where you define lint configuration to be inherited by members of a workspace.
 */
export interface Lints {
  rust?: RustCompilerLints;
  rustdoc?: RustdocLints;
  clippy?: ClippyLints;
  cargo?: CargoLints;
  /**
   * Tool lint settings
   */
  [k: string]:
    | {
        [k: string]: Lint4 | undefined;
      }
    | RustCompilerLints
    | RustdocLints
    | ClippyLints
    | CargoLints
    | undefined;
}
/**
 * Lint settings for the Rust compiler. See the Rust compiler's [individual lints](https://doc.rust-lang.org/rustc/lints/listing/index.html) or [lint groups](https://doc.rust-lang.org/rustc/lints/groups.html).
 */
export interface RustCompilerLints {
  aarch64_softfloat_neon?: Aarch64SoftfloatNeon;
  absolute_paths_not_starting_with_crate?: AbsolutePathsNotStartingWithCrate;
  ambiguous_associated_items?: AmbiguousAssociatedItems;
  ambiguous_glob_imports?: AmbiguousGlobImports;
  ambiguous_glob_reexports?: AmbiguousGlobReexports;
  ambiguous_negative_literals?: AmbiguousNegativeLiterals;
  ambiguous_wide_pointer_comparisons?: AmbiguousWidePointerComparisons;
  anonymous_parameters?: AnonymousParameters;
  arithmetic_overflow?: ArithmeticOverflow;
  array_into_iter?: ArrayIntoIter;
  asm_sub_register?: AsmSubRegister;
  async_fn_in_trait?: AsyncFnInTrait;
  bad_asm_style?: BadAsmStyle;
  bare_trait_objects?: BareTraitObjects;
  binary_asm_labels?: BinaryAsmLabels;
  bindings_with_variant_name?: BindingsWithVariantName;
  boxed_slice_into_iter?: BoxedSliceIntoIter;
  break_with_label_and_loop?: BreakWithLabelAndLoop;
  clashing_extern_declarations?: ClashingExternDeclarations;
  closure_returning_async_block?: ClosureReturningAsyncBlock;
  coherence_leak_check?: CoherenceLeakCheck;
  conflicting_repr_hints?: ConflictingReprHints;
  confusable_idents?: ConfusableIdents;
  const_evaluatable_unchecked?: ConstEvaluatableUnchecked;
  const_item_interior_mutations?: ConstItemInteriorMutations;
  const_item_mutation?: ConstItemMutation;
  dangerous_implicit_autorefs?: DangerousImplicitAutorefs;
  dangling_pointers_from_temporaries?: DanglingPointersFromTemporaries;
  dead_code?: DeadCode;
  default_overrides_default_fields?: DefaultOverridesDefaultFields;
  dependency_on_unit_never_type_fallback?: DependencyOnUnitNeverTypeFallback;
  deprecated?: Deprecated;
  deprecated_in_future?: DeprecatedInFuture;
  deprecated_safe_2024?: DeprecatedSafe;
  deprecated_where_clause_location?: DeprecatedWhereClauseLocation;
  deref_into_dyn_supertrait?: DerefIntoDynSupertrait;
  deref_nullptr?: DerefNullptr;
  double_negations?: DoubleNegations;
  drop_bounds?: DropBounds;
  dropping_copy_types?: DroppingCopyTypes;
  dropping_references?: DroppingReferences;
  duplicate_macro_attributes?: DuplicateMacroAttributes;
  dyn_drop?: DynDrop;
  edition_2024_expr_fragment_specifier?: Edition2024ExprFragmentSpecifier;
  elided_lifetimes_in_associated_constant?: ElidedLifetimesInAssociatedConstant;
  elided_lifetimes_in_paths?: ElidedLifetimesInPaths;
  ellipsis_inclusive_range_patterns?: EllipsisInclusiveRangePatterns;
  enum_intrinsics_non_enums?: EnumIntrinsicsNonEnums;
  explicit_builtin_cfgs_in_flags?: ExplicitBuiltinCfgsInFlags;
  explicit_outlives_requirements?: ExplicitOutlivesRequirements;
  exported_private_dependencies?: ExportedPrivateDependencies;
  ffi_unwind_calls?: FfiUnwindCalls;
  for_loops_over_fallibles?: ForLoopsOverFallibles;
  forbidden_lint_groups?: ForbiddenLintGroups;
  forgetting_copy_types?: ForgettingCopyTypes;
  forgetting_references?: ForgettingReferences;
  function_casts_as_integer?: FunctionCastsAsInteger;
  function_item_references?: FunctionItemReferences;
  fuzzy_provenance_casts?: FuzzyProvenanceCasts;
  hidden_glob_reexports?: HiddenGlobReexports;
  if_let_rescope?: IfLetRescope;
  ill_formed_attribute_input?: IllFormedAttributeInput;
  impl_trait_overcaptures?: ImplTraitOvercaptures;
  impl_trait_redundant_captures?: ImplTraitRedundantCaptures;
  improper_ctypes?: ImproperCtypes;
  improper_ctypes_definitions?: ImproperCtypesDefinitions;
  incomplete_features?: IncompleteFeatures;
  incomplete_include?: IncompleteInclude;
  ineffective_unstable_trait_impl?: IneffectiveUnstableTraitImpl;
  inline_no_sanitize?: InlineNoSanitize;
  internal_features?: InternalFeatures;
  invalid_atomic_ordering?: InvalidAtomicOrdering;
  invalid_doc_attributes?: InvalidDocAttributes;
  invalid_from_utf8?: InvalidFromUtf8;
  invalid_from_utf8_unchecked?: InvalidFromUtf8Unchecked;
  invalid_macro_export_arguments?: InvalidMacroExportArguments;
  invalid_nan_comparisons?: InvalidNanComparisons;
  invalid_null_arguments?: InvalidNullArguments;
  invalid_reference_casting?: InvalidReferenceCasting;
  invalid_type_param_default?: InvalidTypeParamDefault;
  invalid_value?: InvalidValue;
  irrefutable_let_patterns?: IrrefutableLetPatterns;
  keyword_idents_2018?: KeywordIdents;
  keyword_idents_2024?: KeywordIdents;
  large_assignments?: LargeAssignments;
  late_bound_lifetime_arguments?: LateBoundLifetimeArguments;
  legacy_derive_helpers?: LegacyDeriveHelpers;
  let_underscore_drop?: LetUnderscoreDrop;
  let_underscore_lock?: LetUnderscoreLock;
  linker_messages?: LinkerMessages;
  long_running_const_eval?: LongRunningConstEval;
  lossy_provenance_casts?: LossyProvenanceCasts;
  macro_expanded_macro_exports_accessed_by_absolute_paths?: MacroExpandedMacroExportsAccessedByAbsolutePaths;
  macro_use_extern_crate?: MacroUseExternCrate;
  malformed_diagnostic_attributes?: MalformedDiagnosticAttributes;
  malformed_diagnostic_format_literals?: MalformedDiagnosticFormatLiterals;
  map_unit_fn?: MapUnitFn;
  meta_variable_misuse?: MetaVariableMisuse;
  mismatched_lifetime_syntaxes?: MismatchedLifetimeSyntaxes;
  misplaced_diagnostic_attributes?: MisplacedDiagnosticAttributes;
  missing_abi?: MissingAbi;
  missing_copy_implementations?: MissingCopyImplementations;
  missing_debug_implementations?: MissingDebugImplementations;
  missing_docs?: MissingDocs;
  missing_unsafe_on_extern?: MissingUnsafeOnExtern;
  mixed_script_confusables?: MixedScriptConfusables;
  multiple_supertrait_upcastable?: MultipleSupertraitUpcastable;
  must_not_suspend?: MustNotSuspend;
  mutable_transmutes?: MutableTransmutes;
  named_arguments_used_positionally?: NamedArgumentsUsedPositionally;
  named_asm_labels?: NamedAsmLabels;
  never_type_fallback_flowing_into_unsafe?: NeverTypeFallbackFlowingIntoUnsafe;
  no_mangle_const_items?: NoMangleConstItems;
  no_mangle_generic_items?: NoMangleGenericItems;
  non_ascii_idents?: NonAsciiIdents;
  non_camel_case_types?: NonCamelCaseTypes;
  non_contiguous_range_endpoints?: NonContiguousRangeEndpoints;
  non_exhaustive_omitted_patterns?: NonExhaustiveOmittedPatterns;
  non_fmt_panics?: NonFmtPanics;
  non_local_definitions?: NonLocalDefinitions;
  non_shorthand_field_patterns?: NonShorthandFieldPatterns;
  non_snake_case?: NonSnakeCase;
  non_upper_case_globals?: NonUpperCaseGlobals;
  noop_method_call?: NoopMethodCall;
  opaque_hidden_inferred_bound?: OpaqueHiddenInferredBound;
  out_of_scope_macro_calls?: OutOfScopeMacroCalls;
  overflowing_literals?: OverflowingLiterals;
  overlapping_range_endpoints?: OverlappingRangeEndpoints;
  path_statements?: PathStatements;
  patterns_in_fns_without_body?: PatternsInFnsWithoutBody;
  private_bounds?: PrivateBounds;
  private_interfaces?: PrivateInterfaces;
  proc_macro_derive_resolution_fallback?: ProcMacroDeriveResolutionFallback;
  ptr_to_integer_transmute_in_consts?: PtrToIntegerTransmuteInConsts;
  pub_use_of_private_extern_crate?: PubUseOfPrivateExternCrate;
  redundant_imports?: RedundantImports;
  redundant_lifetimes?: RedundantLifetimes;
  redundant_semicolons?: RedundantSemicolons;
  refining_impl_trait_internal?: RefiningImplTraitInternal;
  refining_impl_trait_reachable?: RefiningImplTraitReachable;
  renamed_and_removed_lints?: RenamedAndRemovedLints;
  repr_transparent_external_private_fields?: ReprTransparentExternalPrivateFields;
  rust_2021_incompatible_closure_captures?: Rust2021IncompatibleClosureCaptures;
  rust_2021_incompatible_or_patterns?: Rust2021IncompatibleOrPatterns;
  rust_2021_prefixes_incompatible_syntax?: Rust2021PrefixesIncompatibleSyntax;
  rust_2021_prelude_collisions?: Rust2021PreludeCollisions;
  rust_2024_guarded_string_incompatible_syntax?: Rust2024GuardedStringIncompatibleSyntax;
  rust_2024_incompatible_pat?: Rust2024IncompatiblePat;
  rust_2024_prelude_collisions?: Rust2024PreludeCollisions;
  self_constructor_from_outer_item?: SelfConstructorFromOuterItem;
  semicolon_in_expressions_from_macros?: SemicolonInExpressionsFromMacros;
  single_use_lifetimes?: SingleUseLifetimes;
  soft_unstable?: SoftUnstable;
  special_module_name?: SpecialModuleName;
  stable_features?: StableFeatures;
  static_mut_refs?: StaticMutRefs;
  supertrait_item_shadowing_definition?: SupertraitItemShadowingDefinition;
  supertrait_item_shadowing_usage?: SupertraitItemShadowingUsage;
  suspicious_double_ref_op?: SuspiciousDoubleRefOp;
  tail_expr_drop_order?: TailExprDropOrder;
  test_unstable_lint?: TestUnstableLint;
  text_direction_codepoint_in_comment?: TextDirectionCodepointInComment;
  text_direction_codepoint_in_literal?: TextDirectionCodepointInLiteral;
  trivial_bounds?: TrivialBounds;
  trivial_casts?: TrivialCasts;
  trivial_numeric_casts?: TrivialNumericCasts;
  type_alias_bounds?: TypeAliasBounds;
  tyvar_behind_raw_pointer?: TyvarBehindRawPointer;
  uncommon_codepoints?: UncommonCodepoints;
  unconditional_panic?: UnconditionalPanic;
  unconditional_recursion?: UnconditionalRecursion;
  uncovered_param_in_projection?: UncoveredParamInProjection;
  undropped_manually_drops?: UndroppedManuallyDrops;
  unexpected_cfgs?: UnexpectedCfgs;
  unfulfilled_lint_expectations?: UnfulfilledLintExpectations;
  ungated_async_fn_track_caller?: UngatedAsyncFnTrackCaller;
  uninhabited_static?: UninhabitedStatic;
  unit_bindings?: UnitBindings;
  unknown_crate_types?: UnknownCrateTypes;
  unknown_diagnostic_attributes?: UnknownDiagnosticAttributes;
  unknown_lints?: UnknownLints;
  unnameable_test_items?: UnnameableTestItems;
  unnameable_types?: UnnameableTypes;
  unnecessary_transmutes?: UnnecessaryTransmutes;
  unpredictable_function_pointer_comparisons?: UnpredictableFunctionPointerComparisons;
  unqualified_local_imports?: UnqualifiedLocalImports;
  unreachable_code?: UnreachableCode;
  unreachable_patterns?: UnreachablePatterns;
  unreachable_pub?: UnreachablePub;
  unsafe_attr_outside_unsafe?: UnsafeAttrOutsideUnsafe;
  unsafe_code?: UnsafeCode;
  unsafe_op_in_unsafe_fn?: UnsafeOpInUnsafeFn;
  unstable_features?: UnstableFeatures;
  unstable_name_collisions?: UnstableNameCollisions;
  unstable_syntax_pre_expansion?: UnstableSyntaxPreExpansion;
  unsupported_calling_conventions?: UnsupportedCallingConventions;
  unused_allocation?: UnusedAllocation;
  unused_assignments?: UnusedAssignments;
  unused_associated_type_bounds?: UnusedAssociatedTypeBounds;
  unused_attributes?: UnusedAttributes;
  unused_braces?: UnusedBraces;
  unused_comparisons?: UnusedComparisons;
  unused_crate_dependencies?: UnusedCrateDependencies;
  unused_doc_comments?: UnusedDocComments;
  unused_extern_crates?: UnusedExternCrates;
  unused_features?: UnusedFeatures;
  unused_import_braces?: UnusedImportBraces;
  unused_imports?: UnusedImports;
  unused_labels?: UnusedLabels;
  unused_lifetimes?: UnusedLifetimes;
  unused_macro_rules?: UnusedMacroRules;
  unused_macros?: UnusedMacros;
  unused_must_use?: UnusedMustUse;
  unused_mut?: UnusedMut;
  unused_parens?: UnusedParens;
  unused_qualifications?: UnusedQualifications;
  unused_results?: UnusedResults;
  unused_unsafe?: UnusedUnsafe;
  unused_variables?: UnusedVariables;
  unused_visibilities?: UnusedVisibilities;
  useless_deprecated?: UselessDeprecated;
  useless_ptr_null_checks?: UselessPtrNullChecks;
  uses_power_alignment?: UsesPowerAlignment;
  variant_size_differences?: VariantSizeDifferences;
  warnings?: Warnings;
  while_true?: WhileTrue;
  'bad-style'?: BadStyle;
  'deprecated-safe'?: DeprecatedSafe;
  'future-incompatible'?: FutureIncompatible;
  'keyword-idents'?: KeywordIdents;
  'let-underscore'?: LetUnderscore;
  'nonstandard-style'?: NonstandardStyle;
  'refining-impl-trait'?: RefiningImplTrait;
  'rust-2018-compatibility'?: Rust2018Compatibility;
  'rust-2018-idioms'?: Rust2018Idioms;
  'rust-2021-compatibility'?: Rust2021Compatibility;
  'rust-2024-compatibility'?: Rust2024Compatibility;
  'unknown-or-malformed-diagnostic-attributes'?: UnknownOrMalformedDiagnosticAttributes;
  unused?: Unused;
  [k: string]:
    | Lint
    | Aarch64SoftfloatNeon
    | AbsolutePathsNotStartingWithCrate
    | AmbiguousAssociatedItems
    | AmbiguousGlobImports
    | AmbiguousGlobReexports
    | AmbiguousNegativeLiterals
    | AmbiguousWidePointerComparisons
    | AnonymousParameters
    | ArithmeticOverflow
    | ArrayIntoIter
    | AsmSubRegister
    | AsyncFnInTrait
    | BadAsmStyle
    | BareTraitObjects
    | BinaryAsmLabels
    | BindingsWithVariantName
    | BoxedSliceIntoIter
    | BreakWithLabelAndLoop
    | ClashingExternDeclarations
    | ClosureReturningAsyncBlock
    | CoherenceLeakCheck
    | ConflictingReprHints
    | ConfusableIdents
    | ConstEvaluatableUnchecked
    | ConstItemInteriorMutations
    | ConstItemMutation
    | DangerousImplicitAutorefs
    | DanglingPointersFromTemporaries
    | DeadCode
    | DefaultOverridesDefaultFields
    | DependencyOnUnitNeverTypeFallback
    | Deprecated
    | DeprecatedInFuture
    | DeprecatedSafe
    | DeprecatedWhereClauseLocation
    | DerefIntoDynSupertrait
    | DerefNullptr
    | DoubleNegations
    | DropBounds
    | DroppingCopyTypes
    | DroppingReferences
    | DuplicateMacroAttributes
    | DynDrop
    | Edition2024ExprFragmentSpecifier
    | ElidedLifetimesInAssociatedConstant
    | ElidedLifetimesInPaths
    | EllipsisInclusiveRangePatterns
    | EnumIntrinsicsNonEnums
    | ExplicitBuiltinCfgsInFlags
    | ExplicitOutlivesRequirements
    | ExportedPrivateDependencies
    | FfiUnwindCalls
    | ForLoopsOverFallibles
    | ForbiddenLintGroups
    | ForgettingCopyTypes
    | ForgettingReferences
    | FunctionCastsAsInteger
    | FunctionItemReferences
    | FuzzyProvenanceCasts
    | HiddenGlobReexports
    | IfLetRescope
    | IllFormedAttributeInput
    | ImplTraitOvercaptures
    | ImplTraitRedundantCaptures
    | ImproperCtypes
    | ImproperCtypesDefinitions
    | IncompleteFeatures
    | IncompleteInclude
    | IneffectiveUnstableTraitImpl
    | InlineNoSanitize
    | InternalFeatures
    | InvalidAtomicOrdering
    | InvalidDocAttributes
    | InvalidFromUtf8
    | InvalidFromUtf8Unchecked
    | InvalidMacroExportArguments
    | InvalidNanComparisons
    | InvalidNullArguments
    | InvalidReferenceCasting
    | InvalidTypeParamDefault
    | InvalidValue
    | IrrefutableLetPatterns
    | KeywordIdents
    | KeywordIdents
    | LargeAssignments
    | LateBoundLifetimeArguments
    | LegacyDeriveHelpers
    | LetUnderscoreDrop
    | LetUnderscoreLock
    | LinkerMessages
    | LongRunningConstEval
    | LossyProvenanceCasts
    | MacroExpandedMacroExportsAccessedByAbsolutePaths
    | MacroUseExternCrate
    | MalformedDiagnosticAttributes
    | MalformedDiagnosticFormatLiterals
    | MapUnitFn
    | MetaVariableMisuse
    | MismatchedLifetimeSyntaxes
    | MisplacedDiagnosticAttributes
    | MissingAbi
    | MissingCopyImplementations
    | MissingDebugImplementations
    | MissingDocs
    | MissingUnsafeOnExtern
    | MixedScriptConfusables
    | MultipleSupertraitUpcastable
    | MustNotSuspend
    | MutableTransmutes
    | NamedArgumentsUsedPositionally
    | NamedAsmLabels
    | NeverTypeFallbackFlowingIntoUnsafe
    | NoMangleConstItems
    | NoMangleGenericItems
    | NonAsciiIdents
    | NonCamelCaseTypes
    | NonContiguousRangeEndpoints
    | NonExhaustiveOmittedPatterns
    | NonFmtPanics
    | NonLocalDefinitions
    | NonShorthandFieldPatterns
    | NonSnakeCase
    | NonUpperCaseGlobals
    | NoopMethodCall
    | OpaqueHiddenInferredBound
    | OutOfScopeMacroCalls
    | OverflowingLiterals
    | OverlappingRangeEndpoints
    | PathStatements
    | PatternsInFnsWithoutBody
    | PrivateBounds
    | PrivateInterfaces
    | ProcMacroDeriveResolutionFallback
    | PtrToIntegerTransmuteInConsts
    | PubUseOfPrivateExternCrate
    | RedundantImports
    | RedundantLifetimes
    | RedundantSemicolons
    | RefiningImplTraitInternal
    | RefiningImplTraitReachable
    | RenamedAndRemovedLints
    | ReprTransparentExternalPrivateFields
    | Rust2021IncompatibleClosureCaptures
    | Rust2021IncompatibleOrPatterns
    | Rust2021PrefixesIncompatibleSyntax
    | Rust2021PreludeCollisions
    | Rust2024GuardedStringIncompatibleSyntax
    | Rust2024IncompatiblePat
    | Rust2024PreludeCollisions
    | SelfConstructorFromOuterItem
    | SemicolonInExpressionsFromMacros
    | SingleUseLifetimes
    | SoftUnstable
    | SpecialModuleName
    | StableFeatures
    | StaticMutRefs
    | SupertraitItemShadowingDefinition
    | SupertraitItemShadowingUsage
    | SuspiciousDoubleRefOp
    | TailExprDropOrder
    | TestUnstableLint
    | TextDirectionCodepointInComment
    | TextDirectionCodepointInLiteral
    | TrivialBounds
    | TrivialCasts
    | TrivialNumericCasts
    | TypeAliasBounds
    | TyvarBehindRawPointer
    | UncommonCodepoints
    | UnconditionalPanic
    | UnconditionalRecursion
    | UncoveredParamInProjection
    | UndroppedManuallyDrops
    | UnexpectedCfgs
    | UnfulfilledLintExpectations
    | UngatedAsyncFnTrackCaller
    | UninhabitedStatic
    | UnitBindings
    | UnknownCrateTypes
    | UnknownDiagnosticAttributes
    | UnknownLints
    | UnnameableTestItems
    | UnnameableTypes
    | UnnecessaryTransmutes
    | UnpredictableFunctionPointerComparisons
    | UnqualifiedLocalImports
    | UnreachableCode
    | UnreachablePatterns
    | UnreachablePub
    | UnsafeAttrOutsideUnsafe
    | UnsafeCode
    | UnsafeOpInUnsafeFn
    | UnstableFeatures
    | UnstableNameCollisions
    | UnstableSyntaxPreExpansion
    | UnsupportedCallingConventions
    | UnusedAllocation
    | UnusedAssignments
    | UnusedAssociatedTypeBounds
    | UnusedAttributes
    | UnusedBraces
    | UnusedComparisons
    | UnusedCrateDependencies
    | UnusedDocComments
    | UnusedExternCrates
    | UnusedFeatures
    | UnusedImportBraces
    | UnusedImports
    | UnusedLabels
    | UnusedLifetimes
    | UnusedMacroRules
    | UnusedMacros
    | UnusedMustUse
    | UnusedMut
    | UnusedParens
    | UnusedQualifications
    | UnusedResults
    | UnusedUnsafe
    | UnusedVariables
    | UnusedVisibilities
    | UselessDeprecated
    | UselessPtrNullChecks
    | UsesPowerAlignment
    | VariantSizeDifferences
    | Warnings
    | WhileTrue
    | BadStyle
    | DeprecatedSafe
    | FutureIncompatible
    | KeywordIdents
    | LetUnderscore
    | NonstandardStyle
    | RefiningImplTrait
    | Rust2018Compatibility
    | Rust2018Idioms
    | Rust2021Compatibility
    | Rust2024Compatibility
    | UnknownOrMalformedDiagnosticAttributes
    | Unused
    | undefined;
}
export interface DetailedLint {
  level?: LintLevel;
  /**
   * The priority that controls which lints or [lint groups](https://doc.rust-lang.org/rustc/lints/groups.html) override other lint groups. Lower (particularly negative) numbers have lower priority, being overridden by higher numbers, and show up first on the command-line to tools like rustc.
   */
  priority?: number;
  /**
   * A list of `cfg` expressions that this lint should check for.
   */
  'check-cfg'?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Lint settings for [Rustdoc](https://doc.rust-lang.org/rustdoc/). See Rustdoc's [individual lints](https://doc.rust-lang.org/rustdoc/lints.html).
 */
export interface RustdocLints {
  bare_urls?: BareURLs;
  broken_intra_doc_links?: BrokenIntraDocLinks;
  invalid_codeblock_attributes?: InvalidCodeblockAttributes;
  invalid_html_tags?: InvalidHTMLTags;
  invalid_rust_codeblocks?: InvalidRustCodeblocks;
  missing_crate_level_docs?: MissingCrateLevelDocs;
  missing_doc_code_examples?: MissingDocCodeExamples;
  private_doc_tests?: PrivateDocTests;
  private_intra_doc_links?: PrivateIntraDocLinks;
  redundant_explicit_links?: RedundantExplicitLinks;
  unescaped_backticks?: UnescapedBackticks;
  all?: All;
  [k: string]:
    | Lint1
    | BareURLs
    | BrokenIntraDocLinks
    | InvalidCodeblockAttributes
    | InvalidHTMLTags
    | InvalidRustCodeblocks
    | MissingCrateLevelDocs
    | MissingDocCodeExamples
    | PrivateDocTests
    | PrivateIntraDocLinks
    | RedundantExplicitLinks
    | UnescapedBackticks
    | All
    | undefined;
}
export interface DetailedLint1 {
  level?: LintLevel;
  /**
   * The priority that controls which lints or [lint groups](https://doc.rust-lang.org/rustc/lints/groups.html) override other lint groups. Lower (particularly negative) numbers have lower priority, being overridden by higher numbers, and show up first on the command-line to tools like rustc.
   */
  priority?: number;
  [k: string]: unknown | undefined;
}
/**
 * Lint settings for [Clippy](https://doc.rust-lang.org/clippy/). See Clippy's [individual lints](https://rust-lang.github.io/rust-clippy/master/index.html) or [lint groups](https://doc.rust-lang.org/clippy/lints.html) documentation.
 */
export interface ClippyLints {
  absolute_paths?: AbsolutePaths;
  absurd_extreme_comparisons?: AbsurdExtremeComparisons;
  all?: AllClippyLints;
  alloc_instead_of_core?: AllocInsteadOfCore;
  allow_attributes?: AllowAttributes;
  allow_attributes_without_reason?: AllowAttributesWithoutReason;
  almost_complete_range?: AlmostCompleteRange;
  almost_swapped?: AlmostSwapped;
  approx_constant?: ApproxConstant;
  arbitrary_source_item_ordering?: ArbitrarySourceItemOrdering;
  arc_with_non_send_sync?: ArcWithNonSendSync;
  arithmetic_side_effects?: ArithmeticSideEffects;
  as_conversions?: AsConversions;
  as_pointer_underscore?: AsPointerUnderscore;
  as_ptr_cast_mut?: AsPtrCastMut;
  as_underscore?: AsUnderscore;
  assertions_on_constants?: AssertionsOnConstants;
  assertions_on_result_states?: AssertionsOnResultStates;
  assign_op_pattern?: AssignOpPattern;
  assign_ops?: AssignOps;
  assigning_clones?: AssigningClones;
  async_yields_async?: AsyncYieldsAsync;
  await_holding_invalid_type?: AwaitHoldingInvalidType;
  await_holding_lock?: AwaitHoldingLock;
  await_holding_refcell_ref?: AwaitHoldingRefcellRef;
  bad_bit_mask?: BadBitMask;
  big_endian_bytes?: BigEndianBytes;
  bind_instead_of_map?: BindInsteadOfMap;
  blanket_clippy_restriction_lints?: BlanketClippyRestrictionLints;
  blocks_in_conditions?: BlocksInConditions;
  bool_assert_comparison?: BoolAssertComparison;
  bool_comparison?: BoolComparison;
  bool_to_int_with_if?: BoolToIntWithIf;
  borrow_as_ptr?: BorrowAsPtr;
  borrow_deref_ref?: BorrowDerefRef;
  borrow_interior_mutable_const?: BorrowInteriorMutableConst;
  borrowed_box?: BorrowedBox;
  box_collection?: BoxCollection;
  box_default?: BoxDefault;
  boxed_local?: BoxedLocal;
  branches_sharing_code?: BranchesSharingCode;
  builtin_type_shadow?: BuiltinTypeShadow;
  byte_char_slices?: ByteCharSlices;
  bytes_count_to_len?: BytesCountToLen;
  bytes_nth?: BytesNth;
  cargo?: Cargo;
  cargo_common_metadata?: CargoCommonMetadata;
  case_sensitive_file_extension_comparisons?: CaseSensitiveFileExtensionComparisons;
  cast_abs_to_unsigned?: CastAbsToUnsigned;
  cast_enum_constructor?: CastEnumConstructor;
  cast_enum_truncation?: CastEnumTruncation;
  cast_lossless?: CastLossless;
  cast_nan_to_int?: CastNanToInt;
  cast_possible_truncation?: CastPossibleTruncation;
  cast_possible_wrap?: CastPossibleWrap;
  cast_precision_loss?: CastPrecisionLoss;
  cast_ptr_alignment?: CastPtrAlignment;
  cast_sign_loss?: CastSignLoss;
  cast_slice_different_sizes?: CastSliceDifferentSizes;
  cast_slice_from_raw_parts?: CastSliceFromRawParts;
  cfg_not_test?: CfgNotTest;
  char_indices_as_byte_indices?: CharIndicesAsByteIndices;
  char_lit_as_u8?: CharLitAsU8;
  chars_last_cmp?: CharsLastCmp;
  chars_next_cmp?: CharsNextCmp;
  checked_conversions?: CheckedConversions;
  clear_with_drain?: ClearWithDrain;
  clone_on_copy?: CloneOnCopy;
  clone_on_ref_ptr?: CloneOnRefPtr;
  cloned_instead_of_copied?: ClonedInsteadOfCopied;
  cloned_ref_to_slice_refs?: ClonedRefToSliceRefs;
  cmp_null?: CmpNull;
  cmp_owned?: CmpOwned;
  coerce_container_to_any?: CoerceContainerToAny;
  cognitive_complexity?: CognitiveComplexity;
  collapsible_else_if?: CollapsibleElseIf;
  collapsible_if?: CollapsibleIf;
  collapsible_match?: CollapsibleMatch;
  collapsible_str_replace?: CollapsibleStrReplace;
  collection_is_never_read?: CollectionIsNeverRead;
  comparison_chain?: ComparisonChain;
  comparison_to_empty?: ComparisonToEmpty;
  complexity?: Complexity;
  confusing_method_to_numeric_cast?: ConfusingMethodToNumericCast;
  const_is_empty?: ConstIsEmpty;
  copy_iterator?: CopyIterator;
  correctness?: Correctness;
  crate_in_macro_def?: CrateInMacroDef;
  create_dir?: CreateDir;
  crosspointer_transmute?: CrosspointerTransmute;
  dbg_macro?: DbgMacro;
  debug_assert_with_mut_call?: DebugAssertWithMutCall;
  decimal_bitwise_operands?: DecimalBitwiseOperands;
  decimal_literal_representation?: DecimalLiteralRepresentation;
  declare_interior_mutable_const?: DeclareInteriorMutableConst;
  default_constructed_unit_structs?: DefaultConstructedUnitStructs;
  default_instead_of_iter_empty?: DefaultInsteadOfIterEmpty;
  default_numeric_fallback?: DefaultNumericFallback;
  default_trait_access?: DefaultTraitAccess;
  default_union_representation?: DefaultUnionRepresentation;
  deprecated?: Deprecated1;
  deprecated_cfg_attr?: DeprecatedCfgAttr;
  deprecated_clippy_cfg_attr?: DeprecatedClippyCfgAttr;
  deprecated_semver?: DeprecatedSemver;
  deref_addrof?: DerefAddrof;
  deref_by_slicing?: DerefBySlicing;
  derivable_impls?: DerivableImpls;
  derive_ord_xor_partial_ord?: DeriveOrdXorPartialOrd;
  derive_partial_eq_without_eq?: DerivePartialEqWithoutEq;
  derived_hash_with_manual_eq?: DerivedHashWithManualEq;
  disallowed_fields?: DisallowedFields;
  disallowed_macros?: DisallowedMacros;
  disallowed_methods?: DisallowedMethods;
  disallowed_names?: DisallowedNames;
  disallowed_script_idents?: DisallowedScriptIdents;
  disallowed_types?: DisallowedTypes;
  diverging_sub_expression?: DivergingSubExpression;
  doc_broken_link?: DocBrokenLink;
  doc_comment_double_space_linebreaks?: DocCommentDoubleSpaceLinebreaks;
  doc_include_without_cfg?: DocIncludeWithoutCfg;
  doc_lazy_continuation?: DocLazyContinuation;
  doc_link_code?: DocLinkCode;
  doc_link_with_quotes?: DocLinkWithQuotes;
  doc_markdown?: DocMarkdown;
  doc_nested_refdefs?: DocNestedRefdefs;
  doc_overindented_list_items?: DocOverindentedListItems;
  doc_paragraphs_missing_punctuation?: DocParagraphsMissingPunctuation;
  doc_suspicious_footnotes?: DocSuspiciousFootnotes;
  double_comparisons?: DoubleComparisons;
  double_ended_iterator_last?: DoubleEndedIteratorLast;
  double_must_use?: DoubleMustUse;
  double_parens?: DoubleParens;
  drain_collect?: DrainCollect;
  drop_non_drop?: DropNonDrop;
  duplicate_mod?: DuplicateMod;
  duplicate_underscore_argument?: DuplicateUnderscoreArgument;
  duplicated_attributes?: DuplicatedAttributes;
  duration_suboptimal_units?: DurationSuboptimalUnits;
  duration_subsec?: DurationSubsec;
  eager_transmute?: EagerTransmute;
  elidable_lifetime_names?: ElidableLifetimeNames;
  else_if_without_else?: ElseIfWithoutElse;
  empty_docs?: EmptyDocs;
  empty_drop?: EmptyDrop;
  empty_enum_variants_with_brackets?: EmptyEnumVariantsWithBrackets;
  empty_enums?: EmptyEnums;
  empty_line_after_doc_comments?: EmptyLineAfterDocComments;
  empty_line_after_outer_attr?: EmptyLineAfterOuterAttr;
  empty_loop?: EmptyLoop;
  empty_structs_with_brackets?: EmptyStructsWithBrackets;
  enum_clike_unportable_variant?: EnumClikeUnportableVariant;
  enum_glob_use?: EnumGlobUse;
  enum_variant_names?: EnumVariantNames;
  eq_op?: EqOp;
  equatable_if_let?: EquatableIfLet;
  erasing_op?: ErasingOp;
  err_expect?: ErrExpect;
  error_impl_error?: ErrorImplError;
  excessive_nesting?: ExcessiveNesting;
  excessive_precision?: ExcessivePrecision;
  exhaustive_enums?: ExhaustiveEnums;
  exhaustive_structs?: ExhaustiveStructs;
  exit?: Exit;
  expect_fun_call?: ExpectFunCall;
  expect_used?: ExpectUsed;
  expl_impl_clone_on_copy?: ExplImplCloneOnCopy;
  explicit_auto_deref?: ExplicitAutoDeref;
  explicit_counter_loop?: ExplicitCounterLoop;
  explicit_deref_methods?: ExplicitDerefMethods;
  explicit_into_iter_loop?: ExplicitIntoIterLoop;
  explicit_iter_loop?: ExplicitIterLoop;
  explicit_write?: ExplicitWrite;
  extend_from_slice?: ExtendFromSlice;
  extend_with_drain?: ExtendWithDrain;
  extra_unused_lifetimes?: ExtraUnusedLifetimes;
  extra_unused_type_parameters?: ExtraUnusedTypeParameters;
  fallible_impl_from?: FallibleImplFrom;
  field_reassign_with_default?: FieldReassignWithDefault;
  field_scoped_visibility_modifiers?: FieldScopedVisibilityModifiers;
  filetype_is_file?: FiletypeIsFile;
  filter_map_bool_then?: FilterMapBoolThen;
  filter_map_identity?: FilterMapIdentity;
  filter_map_next?: FilterMapNext;
  filter_next?: FilterNext;
  flat_map_identity?: FlatMapIdentity;
  flat_map_option?: FlatMapOption;
  float_arithmetic?: FloatArithmetic;
  float_cmp?: FloatCmp;
  float_cmp_const?: FloatCmpConst;
  float_equality_without_abs?: FloatEqualityWithoutAbs;
  fn_params_excessive_bools?: FnParamsExcessiveBools;
  fn_to_numeric_cast?: FnToNumericCast;
  fn_to_numeric_cast_any?: FnToNumericCastAny;
  fn_to_numeric_cast_with_truncation?: FnToNumericCastWithTruncation;
  for_kv_map?: ForKvMap;
  forget_non_drop?: ForgetNonDrop;
  format_collect?: FormatCollect;
  format_in_format_args?: FormatInFormatArgs;
  format_push_string?: FormatPushString;
  four_forward_slashes?: FourForwardSlashes;
  from_iter_instead_of_collect?: FromIterInsteadOfCollect;
  from_over_into?: FromOverInto;
  from_raw_with_void_ptr?: FromRawWithVoidPtr;
  from_str_radix_10?: FromStrRadix10;
  future_not_send?: FutureNotSend;
  get_first?: GetFirst;
  get_last_with_len?: GetLastWithLen;
  get_unwrap?: GetUnwrap;
  host_endian_bytes?: HostEndianBytes;
  identity_op?: IdentityOp;
  if_let_mutex?: IfLetMutex;
  if_not_else?: IfNotElse;
  if_same_then_else?: IfSameThenElse;
  if_then_some_else_none?: IfThenSomeElseNone;
  ifs_same_cond?: IfsSameCond;
  ignore_without_reason?: IgnoreWithoutReason;
  ignored_unit_patterns?: IgnoredUnitPatterns;
  impl_hash_borrow_with_str_and_bytes?: ImplHashBorrowWithStrAndBytes;
  impl_trait_in_params?: ImplTraitInParams;
  implicit_clone?: ImplicitClone;
  implicit_hasher?: ImplicitHasher;
  implicit_return?: ImplicitReturn;
  implicit_saturating_add?: ImplicitSaturatingAdd;
  implicit_saturating_sub?: ImplicitSaturatingSub;
  implied_bounds_in_impls?: ImpliedBoundsInImpls;
  impossible_comparisons?: ImpossibleComparisons;
  imprecise_flops?: ImpreciseFlops;
  incompatible_msrv?: IncompatibleMsrv;
  inconsistent_digit_grouping?: InconsistentDigitGrouping;
  inconsistent_struct_constructor?: InconsistentStructConstructor;
  index_refutable_slice?: IndexRefutableSlice;
  indexing_slicing?: IndexingSlicing;
  ineffective_bit_mask?: IneffectiveBitMask;
  ineffective_open_options?: IneffectiveOpenOptions;
  inefficient_to_string?: InefficientToString;
  infallible_destructuring_match?: InfallibleDestructuringMatch;
  infallible_try_from?: InfallibleTryFrom;
  infinite_iter?: InfiniteIter;
  infinite_loop?: InfiniteLoop;
  inherent_to_string?: InherentToString;
  inherent_to_string_shadow_display?: InherentToStringShadowDisplay;
  init_numbered_fields?: InitNumberedFields;
  inline_always?: InlineAlways;
  inline_asm_x86_att_syntax?: InlineAsmX86AttSyntax;
  inline_asm_x86_intel_syntax?: InlineAsmX86IntelSyntax;
  inline_fn_without_body?: InlineFnWithoutBody;
  inspect_for_each?: InspectForEach;
  int_plus_one?: IntPlusOne;
  integer_division?: IntegerDivision;
  integer_division_remainder_used?: IntegerDivisionRemainderUsed;
  into_iter_on_ref?: IntoIterOnRef;
  into_iter_without_iter?: IntoIterWithoutIter;
  invalid_regex?: InvalidRegex;
  invalid_upcast_comparisons?: InvalidUpcastComparisons;
  inverted_saturating_sub?: InvertedSaturatingSub;
  invisible_characters?: InvisibleCharacters;
  io_other_error?: IoOtherError;
  ip_constant?: IpConstant;
  is_digit_ascii_radix?: IsDigitAsciiRadix;
  items_after_statements?: ItemsAfterStatements;
  items_after_test_module?: ItemsAfterTestModule;
  iter_cloned_collect?: IterClonedCollect;
  iter_count?: IterCount;
  iter_filter_is_ok?: IterFilterIsOk;
  iter_filter_is_some?: IterFilterIsSome;
  iter_kv_map?: IterKvMap;
  iter_next_loop?: IterNextLoop;
  iter_next_slice?: IterNextSlice;
  iter_not_returning_iterator?: IterNotReturningIterator;
  iter_nth?: IterNth;
  iter_nth_zero?: IterNthZero;
  iter_on_empty_collections?: IterOnEmptyCollections;
  iter_on_single_items?: IterOnSingleItems;
  iter_out_of_bounds?: IterOutOfBounds;
  iter_over_hash_type?: IterOverHashType;
  iter_overeager_cloned?: IterOvereagerCloned;
  iter_skip_next?: IterSkipNext;
  iter_skip_zero?: IterSkipZero;
  iter_with_drain?: IterWithDrain;
  iter_without_into_iter?: IterWithoutIntoIter;
  iterator_step_by_zero?: IteratorStepByZero;
  join_absolute_paths?: JoinAbsolutePaths;
  just_underscores_and_digits?: JustUnderscoresAndDigits;
  large_const_arrays?: LargeConstArrays;
  large_digit_groups?: LargeDigitGroups;
  large_enum_variant?: LargeEnumVariant;
  large_futures?: LargeFutures;
  large_include_file?: LargeIncludeFile;
  large_stack_arrays?: LargeStackArrays;
  large_stack_frames?: LargeStackFrames;
  large_types_passed_by_value?: LargeTypesPassedByValue;
  legacy_numeric_constants?: LegacyNumericConstants;
  len_without_is_empty?: LenWithoutIsEmpty;
  len_zero?: LenZero;
  let_and_return?: LetAndReturn;
  let_underscore_future?: LetUnderscoreFuture;
  let_underscore_lock?: LetUnderscoreLock1;
  let_underscore_must_use?: LetUnderscoreMustUse;
  let_underscore_untyped?: LetUnderscoreUntyped;
  let_unit_value?: LetUnitValue;
  let_with_type_underscore?: LetWithTypeUnderscore;
  lines_filter_map_ok?: LinesFilterMapOk;
  linkedlist?: Linkedlist;
  lint_groups_priority?: LintGroupsPriority;
  literal_string_with_formatting_args?: LiteralStringWithFormattingArgs;
  little_endian_bytes?: LittleEndianBytes;
  lossy_float_literal?: LossyFloatLiteral;
  macro_metavars_in_unsafe?: MacroMetavarsInUnsafe;
  macro_use_imports?: MacroUseImports;
  main_recursion?: MainRecursion;
  manual_abs_diff?: ManualAbsDiff;
  manual_assert?: ManualAssert;
  manual_async_fn?: ManualAsyncFn;
  manual_bits?: ManualBits;
  manual_c_str_literals?: ManualCStrLiterals;
  manual_checked_ops?: ManualCheckedOps;
  manual_clamp?: ManualClamp;
  manual_contains?: ManualContains;
  manual_dangling_ptr?: ManualDanglingPtr;
  manual_div_ceil?: ManualDivCeil;
  manual_filter?: ManualFilter;
  manual_filter_map?: ManualFilterMap;
  manual_find?: ManualFind;
  manual_find_map?: ManualFindMap;
  manual_flatten?: ManualFlatten;
  manual_hash_one?: ManualHashOne;
  manual_ignore_case_cmp?: ManualIgnoreCaseCmp;
  manual_ilog2?: ManualIlog2;
  manual_inspect?: ManualInspect;
  manual_instant_elapsed?: ManualInstantElapsed;
  manual_is_ascii_check?: ManualIsAsciiCheck;
  manual_is_finite?: ManualIsFinite;
  manual_is_infinite?: ManualIsInfinite;
  manual_is_multiple_of?: ManualIsMultipleOf;
  manual_is_power_of_two?: ManualIsPowerOfTwo;
  manual_is_variant_and?: ManualIsVariantAnd;
  manual_let_else?: ManualLetElse;
  manual_main_separator_str?: ManualMainSeparatorStr;
  manual_map?: ManualMap;
  manual_memcpy?: ManualMemcpy;
  manual_midpoint?: ManualMidpoint;
  manual_next_back?: ManualNextBack;
  manual_non_exhaustive?: ManualNonExhaustive;
  manual_noop_waker?: ManualNoopWaker;
  manual_ok_err?: ManualOkErr;
  manual_ok_or?: ManualOkOr;
  manual_option_as_slice?: ManualOptionAsSlice;
  manual_option_zip?: ManualOptionZip;
  manual_pattern_char_comparison?: ManualPatternCharComparison;
  manual_pop_if?: ManualPopIf;
  manual_range_contains?: ManualRangeContains;
  manual_range_patterns?: ManualRangePatterns;
  manual_rem_euclid?: ManualRemEuclid;
  manual_repeat_n?: ManualRepeatN;
  manual_retain?: ManualRetain;
  manual_rotate?: ManualRotate;
  manual_saturating_arithmetic?: ManualSaturatingArithmetic;
  manual_slice_fill?: ManualSliceFill;
  manual_slice_size_calculation?: ManualSliceSizeCalculation;
  manual_split_once?: ManualSplitOnce;
  manual_str_repeat?: ManualStrRepeat;
  manual_string_new?: ManualStringNew;
  manual_strip?: ManualStrip;
  manual_swap?: ManualSwap;
  manual_take?: ManualTake;
  manual_try_fold?: ManualTryFold;
  manual_unwrap_or?: ManualUnwrapOr;
  manual_unwrap_or_default?: ManualUnwrapOrDefault;
  manual_while_let_some?: ManualWhileLetSome;
  many_single_char_names?: ManySingleCharNames;
  map_all_any_identity?: MapAllAnyIdentity;
  map_clone?: MapClone;
  map_collect_result_unit?: MapCollectResultUnit;
  map_entry?: MapEntry;
  map_err_ignore?: MapErrIgnore;
  map_flatten?: MapFlatten;
  map_identity?: MapIdentity;
  map_unwrap_or?: MapUnwrapOr;
  map_with_unused_argument_over_ranges?: MapWithUnusedArgumentOverRanges;
  match_as_ref?: MatchAsRef;
  match_bool?: MatchBool;
  match_like_matches_macro?: MatchLikeMatchesMacro;
  match_on_vec_items?: MatchOnVecItems;
  match_overlapping_arm?: MatchOverlappingArm;
  match_ref_pats?: MatchRefPats;
  match_result_ok?: MatchResultOk;
  match_same_arms?: MatchSameArms;
  match_single_binding?: MatchSingleBinding;
  match_str_case_mismatch?: MatchStrCaseMismatch;
  match_wild_err_arm?: MatchWildErrArm;
  match_wildcard_for_single_variants?: MatchWildcardForSingleVariants;
  maybe_infinite_iter?: MaybeInfiniteIter;
  mem_forget?: MemForget;
  mem_replace_option_with_none?: MemReplaceOptionWithNone;
  mem_replace_option_with_some?: MemReplaceOptionWithSome;
  mem_replace_with_default?: MemReplaceWithDefault;
  mem_replace_with_uninit?: MemReplaceWithUninit;
  min_ident_chars?: MinIdentChars;
  min_max?: MinMax;
  misaligned_transmute?: MisalignedTransmute;
  mismatching_type_param_order?: MismatchingTypeParamOrder;
  misnamed_getters?: MisnamedGetters;
  misrefactored_assign_op?: MisrefactoredAssignOp;
  missing_assert_message?: MissingAssertMessage;
  missing_asserts_for_indexing?: MissingAssertsForIndexing;
  missing_const_for_fn?: MissingConstForFn;
  missing_const_for_thread_local?: MissingConstForThreadLocal;
  missing_docs_in_private_items?: MissingDocsInPrivateItems;
  missing_enforced_import_renames?: MissingEnforcedImportRenames;
  missing_errors_doc?: MissingErrorsDoc;
  missing_fields_in_debug?: MissingFieldsInDebug;
  missing_inline_in_public_items?: MissingInlineInPublicItems;
  missing_panics_doc?: MissingPanicsDoc;
  missing_safety_doc?: MissingSafetyDoc;
  missing_spin_loop?: MissingSpinLoop;
  missing_trait_methods?: MissingTraitMethods;
  missing_transmute_annotations?: MissingTransmuteAnnotations;
  mistyped_literal_suffixes?: MistypedLiteralSuffixes;
  mixed_attributes_style?: MixedAttributesStyle;
  mixed_case_hex_literals?: MixedCaseHexLiterals;
  mixed_read_write_in_expression?: MixedReadWriteInExpression;
  mod_module_files?: ModModuleFiles;
  module_inception?: ModuleInception;
  module_name_repetitions?: ModuleNameRepetitions;
  modulo_arithmetic?: ModuloArithmetic;
  modulo_one?: ModuloOne;
  multi_assignments?: MultiAssignments;
  multiple_bound_locations?: MultipleBoundLocations;
  multiple_crate_versions?: MultipleCrateVersions;
  multiple_inherent_impl?: MultipleInherentImpl;
  multiple_unsafe_ops_per_block?: MultipleUnsafeOpsPerBlock;
  must_use_candidate?: MustUseCandidate;
  must_use_unit?: MustUseUnit;
  mut_from_ref?: MutFromRef;
  mut_mut?: MutMut;
  mut_mutex_lock?: MutMutexLock;
  mut_range_bound?: MutRangeBound;
  mutable_key_type?: MutableKeyType;
  mutex_atomic?: MutexAtomic;
  mutex_integer?: MutexInteger;
  naive_bytecount?: NaiveBytecount;
  needless_arbitrary_self_type?: NeedlessArbitrarySelfType;
  needless_as_bytes?: NeedlessAsBytes;
  needless_bitwise_bool?: NeedlessBitwiseBool;
  needless_bool?: NeedlessBool;
  needless_bool_assign?: NeedlessBoolAssign;
  needless_borrow?: NeedlessBorrow;
  needless_borrowed_reference?: NeedlessBorrowedReference;
  needless_borrows_for_generic_args?: NeedlessBorrowsForGenericArgs;
  needless_character_iteration?: NeedlessCharacterIteration;
  needless_collect?: NeedlessCollect;
  needless_continue?: NeedlessContinue;
  needless_doctest_main?: NeedlessDoctestMain;
  needless_else?: NeedlessElse;
  needless_for_each?: NeedlessForEach;
  needless_ifs?: NeedlessIfs;
  needless_late_init?: NeedlessLateInit;
  needless_lifetimes?: NeedlessLifetimes;
  needless_match?: NeedlessMatch;
  needless_maybe_sized?: NeedlessMaybeSized;
  needless_option_as_deref?: NeedlessOptionAsDeref;
  needless_option_take?: NeedlessOptionTake;
  needless_parens_on_range_literals?: NeedlessParensOnRangeLiterals;
  needless_pass_by_ref_mut?: NeedlessPassByRefMut;
  needless_pass_by_value?: NeedlessPassByValue;
  needless_pub_self?: NeedlessPubSelf;
  needless_question_mark?: NeedlessQuestionMark;
  needless_range_loop?: NeedlessRangeLoop;
  needless_raw_string_hashes?: NeedlessRawStringHashes;
  needless_raw_strings?: NeedlessRawStrings;
  needless_return?: NeedlessReturn;
  needless_return_with_question_mark?: NeedlessReturnWithQuestionMark;
  needless_splitn?: NeedlessSplitn;
  needless_type_cast?: NeedlessTypeCast;
  needless_update?: NeedlessUpdate;
  neg_cmp_op_on_partial_ord?: NegCmpOpOnPartialOrd;
  neg_multiply?: NegMultiply;
  negative_feature_names?: NegativeFeatureNames;
  never_loop?: NeverLoop;
  new_ret_no_self?: NewRetNoSelf;
  new_without_default?: NewWithoutDefault;
  no_effect?: NoEffect;
  no_effect_replace?: NoEffectReplace;
  no_effect_underscore_binding?: NoEffectUnderscoreBinding;
  no_mangle_with_rust_abi?: NoMangleWithRustAbi;
  non_ascii_literal?: NonAsciiLiteral;
  non_canonical_clone_impl?: NonCanonicalCloneImpl;
  non_canonical_partial_ord_impl?: NonCanonicalPartialOrdImpl;
  non_minimal_cfg?: NonMinimalCfg;
  non_octal_unix_permissions?: NonOctalUnixPermissions;
  non_send_fields_in_send_ty?: NonSendFieldsInSendTy;
  non_std_lazy_statics?: NonStdLazyStatics;
  non_zero_suggestions?: NonZeroSuggestions;
  nonminimal_bool?: NonminimalBool;
  nonsensical_open_options?: NonsensicalOpenOptions;
  nonstandard_macro_braces?: NonstandardMacroBraces;
  not_unsafe_ptr_arg_deref?: NotUnsafePtrArgDeref;
  nursery?: Nursery;
  obfuscated_if_else?: ObfuscatedIfElse;
  octal_escapes?: OctalEscapes;
  ok_expect?: OkExpect;
  only_used_in_recursion?: OnlyUsedInRecursion;
  op_ref?: OpRef;
  option_as_ref_cloned?: OptionAsRefCloned;
  option_as_ref_deref?: OptionAsRefDeref;
  option_env_unwrap?: OptionEnvUnwrap;
  option_filter_map?: OptionFilterMap;
  option_if_let_else?: OptionIfLetElse;
  option_map_or_err_ok?: OptionMapOrErrOk;
  option_map_or_none?: OptionMapOrNone;
  option_map_unit_fn?: OptionMapUnitFn;
  option_option?: OptionOption;
  or_fun_call?: OrFunCall;
  or_then_unwrap?: OrThenUnwrap;
  out_of_bounds_indexing?: OutOfBoundsIndexing;
  overly_complex_bool_expr?: OverlyComplexBoolExpr;
  owned_cow?: OwnedCow;
  panic?: Panic;
  panic_in_result_fn?: PanicInResultFn;
  panicking_overflow_checks?: PanickingOverflowChecks;
  panicking_unwrap?: PanickingUnwrap;
  partial_pub_fields?: PartialPubFields;
  partialeq_ne_impl?: PartialeqNeImpl;
  partialeq_to_none?: PartialeqToNone;
  path_buf_push_overwrite?: PathBufPushOverwrite;
  path_ends_with_ext?: PathEndsWithExt;
  pathbuf_init_then_push?: PathbufInitThenPush;
  pattern_type_mismatch?: PatternTypeMismatch;
  pedantic?: Pedantic;
  perf?: Perf;
  permissions_set_readonly_false?: PermissionsSetReadonlyFalse;
  pointer_format?: PointerFormat;
  pointers_in_nomem_asm_block?: PointersInNomemAsmBlock;
  possible_missing_comma?: PossibleMissingComma;
  possible_missing_else?: PossibleMissingElse;
  precedence?: Precedence;
  precedence_bits?: PrecedenceBits;
  print_in_format_impl?: PrintInFormatImpl;
  print_literal?: PrintLiteral;
  print_stderr?: PrintStderr;
  print_stdout?: PrintStdout;
  print_with_newline?: PrintWithNewline;
  println_empty_string?: PrintlnEmptyString;
  ptr_arg?: PtrArg;
  ptr_as_ptr?: PtrAsPtr;
  ptr_cast_constness?: PtrCastConstness;
  ptr_eq?: PtrEq;
  ptr_offset_by_literal?: PtrOffsetByLiteral;
  ptr_offset_with_cast?: PtrOffsetWithCast;
  pub_enum_variant_names?: PubEnumVariantNames;
  pub_underscore_fields?: PubUnderscoreFields;
  pub_use?: PubUse;
  pub_with_shorthand?: PubWithShorthand;
  pub_without_shorthand?: PubWithoutShorthand;
  question_mark?: QuestionMark;
  question_mark_used?: QuestionMarkUsed;
  range_minus_one?: RangeMinusOne;
  range_plus_one?: RangePlusOne;
  range_step_by_zero?: RangeStepByZero;
  range_zip_with_len?: RangeZipWithLen;
  rc_buffer?: RcBuffer;
  rc_clone_in_vec_init?: RcCloneInVecInit;
  rc_mutex?: RcMutex;
  read_line_without_trim?: ReadLineWithoutTrim;
  read_zero_byte_vec?: ReadZeroByteVec;
  readonly_write_lock?: ReadonlyWriteLock;
  recursive_format_impl?: RecursiveFormatImpl;
  redundant_allocation?: RedundantAllocation;
  redundant_as_str?: RedundantAsStr;
  redundant_async_block?: RedundantAsyncBlock;
  redundant_at_rest_pattern?: RedundantAtRestPattern;
  redundant_clone?: RedundantClone;
  redundant_closure?: RedundantClosure;
  redundant_closure_call?: RedundantClosureCall;
  redundant_closure_for_method_calls?: RedundantClosureForMethodCalls;
  redundant_comparisons?: RedundantComparisons;
  redundant_else?: RedundantElse;
  redundant_feature_names?: RedundantFeatureNames;
  redundant_field_names?: RedundantFieldNames;
  redundant_guards?: RedundantGuards;
  redundant_iter_cloned?: RedundantIterCloned;
  redundant_locals?: RedundantLocals;
  redundant_pattern?: RedundantPattern;
  redundant_pattern_matching?: RedundantPatternMatching;
  redundant_pub_crate?: RedundantPubCrate;
  redundant_slicing?: RedundantSlicing;
  redundant_static_lifetimes?: RedundantStaticLifetimes;
  redundant_test_prefix?: RedundantTestPrefix;
  redundant_type_annotations?: RedundantTypeAnnotations;
  ref_as_ptr?: RefAsPtr;
  ref_binding_to_reference?: RefBindingToReference;
  ref_option?: RefOption;
  ref_option_ref?: RefOptionRef;
  ref_patterns?: RefPatterns;
  regex_creation_in_loops?: RegexCreationInLoops;
  regex_macro?: RegexMacro;
  renamed_function_params?: RenamedFunctionParams;
  repeat_once?: RepeatOnce;
  repeat_vec_with_capacity?: RepeatVecWithCapacity;
  replace_box?: ReplaceBox;
  replace_consts?: ReplaceConsts;
  repr_packed_without_abi?: ReprPackedWithoutAbi;
  reserve_after_initialization?: ReserveAfterInitialization;
  rest_pat_in_fully_bound_structs?: RestPatInFullyBoundStructs;
  restriction?: Restriction;
  result_filter_map?: ResultFilterMap;
  result_large_err?: ResultLargeErr;
  result_map_or_into_option?: ResultMapOrIntoOption;
  result_map_unit_fn?: ResultMapUnitFn;
  result_unit_err?: ResultUnitErr;
  return_and_then?: ReturnAndThen;
  return_self_not_must_use?: ReturnSelfNotMustUse;
  reversed_empty_ranges?: ReversedEmptyRanges;
  same_functions_in_if_condition?: SameFunctionsInIfCondition;
  same_item_push?: SameItemPush;
  same_length_and_capacity?: SameLengthAndCapacity;
  same_name_method?: SameNameMethod;
  search_is_some?: SearchIsSome;
  seek_from_current?: SeekFromCurrent;
  seek_to_start_instead_of_rewind?: SeekToStartInsteadOfRewind;
  self_assignment?: SelfAssignment;
  self_named_constructors?: SelfNamedConstructors;
  self_named_module_files?: SelfNamedModuleFiles;
  self_only_used_in_recursion?: SelfOnlyUsedInRecursion;
  semicolon_if_nothing_returned?: SemicolonIfNothingReturned;
  semicolon_inside_block?: SemicolonInsideBlock;
  semicolon_outside_block?: SemicolonOutsideBlock;
  separated_literal_suffix?: SeparatedLiteralSuffix;
  serde_api_misuse?: SerdeApiMisuse;
  set_contains_or_insert?: SetContainsOrInsert;
  shadow_reuse?: ShadowReuse;
  shadow_same?: ShadowSame;
  shadow_unrelated?: ShadowUnrelated;
  short_circuit_statement?: ShortCircuitStatement;
  should_assert_eq?: ShouldAssertEq;
  should_implement_trait?: ShouldImplementTrait;
  should_panic_without_expect?: ShouldPanicWithoutExpect;
  significant_drop_in_scrutinee?: SignificantDropInScrutinee;
  significant_drop_tightening?: SignificantDropTightening;
  similar_names?: SimilarNames;
  single_call_fn?: SingleCallFn;
  single_char_add_str?: SingleCharAddStr;
  single_char_lifetime_names?: SingleCharLifetimeNames;
  single_char_pattern?: SingleCharPattern;
  single_component_path_imports?: SingleComponentPathImports;
  single_element_loop?: SingleElementLoop;
  single_match?: SingleMatch;
  single_match_else?: SingleMatchElse;
  single_option_map?: SingleOptionMap;
  single_range_in_vec_init?: SingleRangeInVecInit;
  size_of_in_element_count?: SizeOfInElementCount;
  size_of_ref?: SizeOfRef;
  skip_while_next?: SkipWhileNext;
  sliced_string_as_bytes?: SlicedStringAsBytes;
  slow_vector_initialization?: SlowVectorInitialization;
  stable_sort_primitive?: StableSortPrimitive;
  std_instead_of_alloc?: StdInsteadOfAlloc;
  std_instead_of_core?: StdInsteadOfCore;
  str_split_at_newline?: StrSplitAtNewline;
  str_to_string?: StrToString;
  string_add?: StringAdd;
  string_add_assign?: StringAddAssign;
  string_extend_chars?: StringExtendChars;
  string_from_utf8_as_bytes?: StringFromUtf8AsBytes;
  string_lit_as_bytes?: StringLitAsBytes;
  string_lit_chars_any?: StringLitCharsAny;
  string_slice?: StringSlice;
  string_to_string?: StringToString;
  strlen_on_c_strings?: StrlenOnCStrings;
  struct_excessive_bools?: StructExcessiveBools;
  struct_field_names?: StructFieldNames;
  style?: Style;
  suboptimal_flops?: SuboptimalFlops;
  suspicious?: Suspicious;
  suspicious_arithmetic_impl?: SuspiciousArithmeticImpl;
  suspicious_assignment_formatting?: SuspiciousAssignmentFormatting;
  suspicious_command_arg_space?: SuspiciousCommandArgSpace;
  suspicious_doc_comments?: SuspiciousDocComments;
  suspicious_else_formatting?: SuspiciousElseFormatting;
  suspicious_map?: SuspiciousMap;
  suspicious_op_assign_impl?: SuspiciousOpAssignImpl;
  suspicious_open_options?: SuspiciousOpenOptions;
  suspicious_operation_groupings?: SuspiciousOperationGroupings;
  suspicious_splitn?: SuspiciousSplitn;
  suspicious_to_owned?: SuspiciousToOwned;
  suspicious_unary_op_formatting?: SuspiciousUnaryOpFormatting;
  suspicious_xor_used_as_pow?: SuspiciousXorUsedAsPow;
  swap_ptr_to_ref?: SwapPtrToRef;
  swap_with_temporary?: SwapWithTemporary;
  tabs_in_doc_comments?: TabsInDocComments;
  temporary_assignment?: TemporaryAssignment;
  test_attr_in_doctest?: TestAttrInDoctest;
  tests_outside_test_module?: TestsOutsideTestModule;
  to_digit_is_some?: ToDigitIsSome;
  to_string_in_format_args?: ToStringInFormatArgs;
  to_string_trait_impl?: ToStringTraitImpl;
  todo?: Todo;
  too_long_first_doc_paragraph?: TooLongFirstDocParagraph;
  too_many_arguments?: TooManyArguments;
  too_many_lines?: TooManyLines;
  toplevel_ref_arg?: ToplevelRefArg;
  trailing_empty_array?: TrailingEmptyArray;
  trait_duplication_in_bounds?: TraitDuplicationInBounds;
  transmute_bytes_to_str?: TransmuteBytesToStr;
  transmute_int_to_bool?: TransmuteIntToBool;
  transmute_int_to_non_zero?: TransmuteIntToNonZero;
  transmute_null_to_fn?: TransmuteNullToFn;
  transmute_ptr_to_ptr?: TransmutePtrToPtr;
  transmute_ptr_to_ref?: TransmutePtrToRef;
  transmute_undefined_repr?: TransmuteUndefinedRepr;
  transmutes_expressible_as_ptr_casts?: TransmutesExpressibleAsPtrCasts;
  transmuting_null?: TransmutingNull;
  trim_split_whitespace?: TrimSplitWhitespace;
  trivial_regex?: TrivialRegex;
  trivially_copy_pass_by_ref?: TriviallyCopyPassByRef;
  try_err?: TryErr;
  tuple_array_conversions?: TupleArrayConversions;
  type_complexity?: TypeComplexity;
  type_id_on_box?: TypeIdOnBox;
  type_repetition_in_bounds?: TypeRepetitionInBounds;
  unbuffered_bytes?: UnbufferedBytes;
  unchecked_time_subtraction?: UncheckedTimeSubtraction;
  unconditional_recursion?: UnconditionalRecursion1;
  undocumented_unsafe_blocks?: UndocumentedUnsafeBlocks;
  unicode_not_nfc?: UnicodeNotNfc;
  unimplemented?: Unimplemented;
  uninhabited_references?: UninhabitedReferences;
  uninit_assumed_init?: UninitAssumedInit;
  uninit_vec?: UninitVec;
  uninlined_format_args?: UninlinedFormatArgs;
  unit_arg?: UnitArg;
  unit_cmp?: UnitCmp;
  unit_hash?: UnitHash;
  unit_return_expecting_ord?: UnitReturnExpectingOrd;
  unnecessary_box_returns?: UnnecessaryBoxReturns;
  unnecessary_cast?: UnnecessaryCast;
  unnecessary_clippy_cfg?: UnnecessaryClippyCfg;
  unnecessary_debug_formatting?: UnnecessaryDebugFormatting;
  unnecessary_fallible_conversions?: UnnecessaryFallibleConversions;
  unnecessary_filter_map?: UnnecessaryFilterMap;
  unnecessary_find_map?: UnnecessaryFindMap;
  unnecessary_first_then_check?: UnnecessaryFirstThenCheck;
  unnecessary_fold?: UnnecessaryFold;
  unnecessary_get_then_check?: UnnecessaryGetThenCheck;
  unnecessary_join?: UnnecessaryJoin;
  unnecessary_lazy_evaluations?: UnnecessaryLazyEvaluations;
  unnecessary_literal_bound?: UnnecessaryLiteralBound;
  unnecessary_literal_unwrap?: UnnecessaryLiteralUnwrap;
  unnecessary_map_on_constructor?: UnnecessaryMapOnConstructor;
  unnecessary_map_or?: UnnecessaryMapOr;
  unnecessary_min_or_max?: UnnecessaryMinOrMax;
  unnecessary_mut_passed?: UnnecessaryMutPassed;
  unnecessary_operation?: UnnecessaryOperation;
  unnecessary_option_map_or_else?: UnnecessaryOptionMapOrElse;
  unnecessary_owned_empty_strings?: UnnecessaryOwnedEmptyStrings;
  unnecessary_result_map_or_else?: UnnecessaryResultMapOrElse;
  unnecessary_safety_comment?: UnnecessarySafetyComment;
  unnecessary_safety_doc?: UnnecessarySafetyDoc;
  unnecessary_self_imports?: UnnecessarySelfImports;
  unnecessary_semicolon?: UnnecessarySemicolon;
  unnecessary_sort_by?: UnnecessarySortBy;
  unnecessary_struct_initialization?: UnnecessaryStructInitialization;
  unnecessary_to_owned?: UnnecessaryToOwned;
  unnecessary_trailing_comma?: UnnecessaryTrailingComma;
  unnecessary_unwrap?: UnnecessaryUnwrap;
  unnecessary_wraps?: UnnecessaryWraps;
  unneeded_field_pattern?: UnneededFieldPattern;
  unneeded_struct_pattern?: UnneededStructPattern;
  unneeded_wildcard_pattern?: UnneededWildcardPattern;
  unnested_or_patterns?: UnnestedOrPatterns;
  unreachable?: Unreachable;
  unreadable_literal?: UnreadableLiteral;
  unsafe_derive_deserialize?: UnsafeDeriveDeserialize;
  unsafe_removed_from_name?: UnsafeRemovedFromName;
  unsafe_vector_initialization?: UnsafeVectorInitialization;
  unseparated_literal_suffix?: UnseparatedLiteralSuffix;
  unsound_collection_transmute?: UnsoundCollectionTransmute;
  unstable_as_mut_slice?: UnstableAsMutSlice;
  unstable_as_slice?: UnstableAsSlice;
  unused_async?: UnusedAsync;
  unused_collect?: UnusedCollect;
  unused_enumerate_index?: UnusedEnumerateIndex;
  unused_format_specs?: UnusedFormatSpecs;
  unused_io_amount?: UnusedIoAmount;
  unused_peekable?: UnusedPeekable;
  unused_result_ok?: UnusedResultOk;
  unused_rounding?: UnusedRounding;
  unused_self?: UnusedSelf;
  unused_trait_names?: UnusedTraitNames;
  unused_unit?: UnusedUnit;
  unusual_byte_groupings?: UnusualByteGroupings;
  unwrap_in_result?: UnwrapInResult;
  unwrap_or_default?: UnwrapOrDefault;
  unwrap_used?: UnwrapUsed;
  upper_case_acronyms?: UpperCaseAcronyms;
  use_debug?: UseDebug;
  use_self?: UseSelf;
  used_underscore_binding?: UsedUnderscoreBinding;
  used_underscore_items?: UsedUnderscoreItems;
  useless_asref?: UselessAsref;
  useless_attribute?: UselessAttribute;
  useless_concat?: UselessConcat;
  useless_conversion?: UselessConversion;
  useless_format?: UselessFormat;
  useless_let_if_seq?: UselessLetIfSeq;
  useless_nonzero_new_unchecked?: UselessNonzeroNewUnchecked;
  useless_transmute?: UselessTransmute;
  useless_vec?: UselessVec;
  vec_box?: VecBox;
  vec_init_then_push?: VecInitThenPush;
  vec_resize_to_zero?: VecResizeToZero;
  verbose_bit_mask?: VerboseBitMask;
  verbose_file_reads?: VerboseFileReads;
  volatile_composites?: VolatileComposites;
  waker_clone_wake?: WakerCloneWake;
  while_float?: WhileFloat;
  while_immutable_condition?: WhileImmutableCondition;
  while_let_loop?: WhileLetLoop;
  while_let_on_iterator?: WhileLetOnIterator;
  wildcard_dependencies?: WildcardDependencies;
  wildcard_enum_match_arm?: WildcardEnumMatchArm;
  wildcard_imports?: WildcardImports;
  wildcard_in_or_patterns?: WildcardInOrPatterns;
  write_literal?: WriteLiteral;
  write_with_newline?: WriteWithNewline;
  writeln_empty_string?: WritelnEmptyString;
  wrong_pub_self_convention?: WrongPubSelfConvention;
  wrong_self_convention?: WrongSelfConvention;
  wrong_transmute?: WrongTransmute;
  zero_divided_by_zero?: ZeroDividedByZero;
  zero_prefixed_literal?: ZeroPrefixedLiteral;
  zero_ptr?: ZeroPtr;
  zero_repeat_side_effects?: ZeroRepeatSideEffects;
  zero_sized_map_values?: ZeroSizedMapValues;
  zombie_processes?: ZombieProcesses;
  zst_offset?: ZstOffset;
  [k: string]:
    | Lint2
    | AbsolutePaths
    | AbsurdExtremeComparisons
    | AllClippyLints
    | AllocInsteadOfCore
    | AllowAttributes
    | AllowAttributesWithoutReason
    | AlmostCompleteRange
    | AlmostSwapped
    | ApproxConstant
    | ArbitrarySourceItemOrdering
    | ArcWithNonSendSync
    | ArithmeticSideEffects
    | AsConversions
    | AsPointerUnderscore
    | AsPtrCastMut
    | AsUnderscore
    | AssertionsOnConstants
    | AssertionsOnResultStates
    | AssignOpPattern
    | AssignOps
    | AssigningClones
    | AsyncYieldsAsync
    | AwaitHoldingInvalidType
    | AwaitHoldingLock
    | AwaitHoldingRefcellRef
    | BadBitMask
    | BigEndianBytes
    | BindInsteadOfMap
    | BlanketClippyRestrictionLints
    | BlocksInConditions
    | BoolAssertComparison
    | BoolComparison
    | BoolToIntWithIf
    | BorrowAsPtr
    | BorrowDerefRef
    | BorrowInteriorMutableConst
    | BorrowedBox
    | BoxCollection
    | BoxDefault
    | BoxedLocal
    | BranchesSharingCode
    | BuiltinTypeShadow
    | ByteCharSlices
    | BytesCountToLen
    | BytesNth
    | Cargo
    | CargoCommonMetadata
    | CaseSensitiveFileExtensionComparisons
    | CastAbsToUnsigned
    | CastEnumConstructor
    | CastEnumTruncation
    | CastLossless
    | CastNanToInt
    | CastPossibleTruncation
    | CastPossibleWrap
    | CastPrecisionLoss
    | CastPtrAlignment
    | CastSignLoss
    | CastSliceDifferentSizes
    | CastSliceFromRawParts
    | CfgNotTest
    | CharIndicesAsByteIndices
    | CharLitAsU8
    | CharsLastCmp
    | CharsNextCmp
    | CheckedConversions
    | ClearWithDrain
    | CloneOnCopy
    | CloneOnRefPtr
    | ClonedInsteadOfCopied
    | ClonedRefToSliceRefs
    | CmpNull
    | CmpOwned
    | CoerceContainerToAny
    | CognitiveComplexity
    | CollapsibleElseIf
    | CollapsibleIf
    | CollapsibleMatch
    | CollapsibleStrReplace
    | CollectionIsNeverRead
    | ComparisonChain
    | ComparisonToEmpty
    | Complexity
    | ConfusingMethodToNumericCast
    | ConstIsEmpty
    | CopyIterator
    | Correctness
    | CrateInMacroDef
    | CreateDir
    | CrosspointerTransmute
    | DbgMacro
    | DebugAssertWithMutCall
    | DecimalBitwiseOperands
    | DecimalLiteralRepresentation
    | DeclareInteriorMutableConst
    | DefaultConstructedUnitStructs
    | DefaultInsteadOfIterEmpty
    | DefaultNumericFallback
    | DefaultTraitAccess
    | DefaultUnionRepresentation
    | Deprecated1
    | DeprecatedCfgAttr
    | DeprecatedClippyCfgAttr
    | DeprecatedSemver
    | DerefAddrof
    | DerefBySlicing
    | DerivableImpls
    | DeriveOrdXorPartialOrd
    | DerivePartialEqWithoutEq
    | DerivedHashWithManualEq
    | DisallowedFields
    | DisallowedMacros
    | DisallowedMethods
    | DisallowedNames
    | DisallowedScriptIdents
    | DisallowedTypes
    | DivergingSubExpression
    | DocBrokenLink
    | DocCommentDoubleSpaceLinebreaks
    | DocIncludeWithoutCfg
    | DocLazyContinuation
    | DocLinkCode
    | DocLinkWithQuotes
    | DocMarkdown
    | DocNestedRefdefs
    | DocOverindentedListItems
    | DocParagraphsMissingPunctuation
    | DocSuspiciousFootnotes
    | DoubleComparisons
    | DoubleEndedIteratorLast
    | DoubleMustUse
    | DoubleParens
    | DrainCollect
    | DropNonDrop
    | DuplicateMod
    | DuplicateUnderscoreArgument
    | DuplicatedAttributes
    | DurationSuboptimalUnits
    | DurationSubsec
    | EagerTransmute
    | ElidableLifetimeNames
    | ElseIfWithoutElse
    | EmptyDocs
    | EmptyDrop
    | EmptyEnumVariantsWithBrackets
    | EmptyEnums
    | EmptyLineAfterDocComments
    | EmptyLineAfterOuterAttr
    | EmptyLoop
    | EmptyStructsWithBrackets
    | EnumClikeUnportableVariant
    | EnumGlobUse
    | EnumVariantNames
    | EqOp
    | EquatableIfLet
    | ErasingOp
    | ErrExpect
    | ErrorImplError
    | ExcessiveNesting
    | ExcessivePrecision
    | ExhaustiveEnums
    | ExhaustiveStructs
    | Exit
    | ExpectFunCall
    | ExpectUsed
    | ExplImplCloneOnCopy
    | ExplicitAutoDeref
    | ExplicitCounterLoop
    | ExplicitDerefMethods
    | ExplicitIntoIterLoop
    | ExplicitIterLoop
    | ExplicitWrite
    | ExtendFromSlice
    | ExtendWithDrain
    | ExtraUnusedLifetimes
    | ExtraUnusedTypeParameters
    | FallibleImplFrom
    | FieldReassignWithDefault
    | FieldScopedVisibilityModifiers
    | FiletypeIsFile
    | FilterMapBoolThen
    | FilterMapIdentity
    | FilterMapNext
    | FilterNext
    | FlatMapIdentity
    | FlatMapOption
    | FloatArithmetic
    | FloatCmp
    | FloatCmpConst
    | FloatEqualityWithoutAbs
    | FnParamsExcessiveBools
    | FnToNumericCast
    | FnToNumericCastAny
    | FnToNumericCastWithTruncation
    | ForKvMap
    | ForgetNonDrop
    | FormatCollect
    | FormatInFormatArgs
    | FormatPushString
    | FourForwardSlashes
    | FromIterInsteadOfCollect
    | FromOverInto
    | FromRawWithVoidPtr
    | FromStrRadix10
    | FutureNotSend
    | GetFirst
    | GetLastWithLen
    | GetUnwrap
    | HostEndianBytes
    | IdentityOp
    | IfLetMutex
    | IfNotElse
    | IfSameThenElse
    | IfThenSomeElseNone
    | IfsSameCond
    | IgnoreWithoutReason
    | IgnoredUnitPatterns
    | ImplHashBorrowWithStrAndBytes
    | ImplTraitInParams
    | ImplicitClone
    | ImplicitHasher
    | ImplicitReturn
    | ImplicitSaturatingAdd
    | ImplicitSaturatingSub
    | ImpliedBoundsInImpls
    | ImpossibleComparisons
    | ImpreciseFlops
    | IncompatibleMsrv
    | InconsistentDigitGrouping
    | InconsistentStructConstructor
    | IndexRefutableSlice
    | IndexingSlicing
    | IneffectiveBitMask
    | IneffectiveOpenOptions
    | InefficientToString
    | InfallibleDestructuringMatch
    | InfallibleTryFrom
    | InfiniteIter
    | InfiniteLoop
    | InherentToString
    | InherentToStringShadowDisplay
    | InitNumberedFields
    | InlineAlways
    | InlineAsmX86AttSyntax
    | InlineAsmX86IntelSyntax
    | InlineFnWithoutBody
    | InspectForEach
    | IntPlusOne
    | IntegerDivision
    | IntegerDivisionRemainderUsed
    | IntoIterOnRef
    | IntoIterWithoutIter
    | InvalidRegex
    | InvalidUpcastComparisons
    | InvertedSaturatingSub
    | InvisibleCharacters
    | IoOtherError
    | IpConstant
    | IsDigitAsciiRadix
    | ItemsAfterStatements
    | ItemsAfterTestModule
    | IterClonedCollect
    | IterCount
    | IterFilterIsOk
    | IterFilterIsSome
    | IterKvMap
    | IterNextLoop
    | IterNextSlice
    | IterNotReturningIterator
    | IterNth
    | IterNthZero
    | IterOnEmptyCollections
    | IterOnSingleItems
    | IterOutOfBounds
    | IterOverHashType
    | IterOvereagerCloned
    | IterSkipNext
    | IterSkipZero
    | IterWithDrain
    | IterWithoutIntoIter
    | IteratorStepByZero
    | JoinAbsolutePaths
    | JustUnderscoresAndDigits
    | LargeConstArrays
    | LargeDigitGroups
    | LargeEnumVariant
    | LargeFutures
    | LargeIncludeFile
    | LargeStackArrays
    | LargeStackFrames
    | LargeTypesPassedByValue
    | LegacyNumericConstants
    | LenWithoutIsEmpty
    | LenZero
    | LetAndReturn
    | LetUnderscoreFuture
    | LetUnderscoreLock1
    | LetUnderscoreMustUse
    | LetUnderscoreUntyped
    | LetUnitValue
    | LetWithTypeUnderscore
    | LinesFilterMapOk
    | Linkedlist
    | LintGroupsPriority
    | LiteralStringWithFormattingArgs
    | LittleEndianBytes
    | LossyFloatLiteral
    | MacroMetavarsInUnsafe
    | MacroUseImports
    | MainRecursion
    | ManualAbsDiff
    | ManualAssert
    | ManualAsyncFn
    | ManualBits
    | ManualCStrLiterals
    | ManualCheckedOps
    | ManualClamp
    | ManualContains
    | ManualDanglingPtr
    | ManualDivCeil
    | ManualFilter
    | ManualFilterMap
    | ManualFind
    | ManualFindMap
    | ManualFlatten
    | ManualHashOne
    | ManualIgnoreCaseCmp
    | ManualIlog2
    | ManualInspect
    | ManualInstantElapsed
    | ManualIsAsciiCheck
    | ManualIsFinite
    | ManualIsInfinite
    | ManualIsMultipleOf
    | ManualIsPowerOfTwo
    | ManualIsVariantAnd
    | ManualLetElse
    | ManualMainSeparatorStr
    | ManualMap
    | ManualMemcpy
    | ManualMidpoint
    | ManualNextBack
    | ManualNonExhaustive
    | ManualNoopWaker
    | ManualOkErr
    | ManualOkOr
    | ManualOptionAsSlice
    | ManualOptionZip
    | ManualPatternCharComparison
    | ManualPopIf
    | ManualRangeContains
    | ManualRangePatterns
    | ManualRemEuclid
    | ManualRepeatN
    | ManualRetain
    | ManualRotate
    | ManualSaturatingArithmetic
    | ManualSliceFill
    | ManualSliceSizeCalculation
    | ManualSplitOnce
    | ManualStrRepeat
    | ManualStringNew
    | ManualStrip
    | ManualSwap
    | ManualTake
    | ManualTryFold
    | ManualUnwrapOr
    | ManualUnwrapOrDefault
    | ManualWhileLetSome
    | ManySingleCharNames
    | MapAllAnyIdentity
    | MapClone
    | MapCollectResultUnit
    | MapEntry
    | MapErrIgnore
    | MapFlatten
    | MapIdentity
    | MapUnwrapOr
    | MapWithUnusedArgumentOverRanges
    | MatchAsRef
    | MatchBool
    | MatchLikeMatchesMacro
    | MatchOnVecItems
    | MatchOverlappingArm
    | MatchRefPats
    | MatchResultOk
    | MatchSameArms
    | MatchSingleBinding
    | MatchStrCaseMismatch
    | MatchWildErrArm
    | MatchWildcardForSingleVariants
    | MaybeInfiniteIter
    | MemForget
    | MemReplaceOptionWithNone
    | MemReplaceOptionWithSome
    | MemReplaceWithDefault
    | MemReplaceWithUninit
    | MinIdentChars
    | MinMax
    | MisalignedTransmute
    | MismatchingTypeParamOrder
    | MisnamedGetters
    | MisrefactoredAssignOp
    | MissingAssertMessage
    | MissingAssertsForIndexing
    | MissingConstForFn
    | MissingConstForThreadLocal
    | MissingDocsInPrivateItems
    | MissingEnforcedImportRenames
    | MissingErrorsDoc
    | MissingFieldsInDebug
    | MissingInlineInPublicItems
    | MissingPanicsDoc
    | MissingSafetyDoc
    | MissingSpinLoop
    | MissingTraitMethods
    | MissingTransmuteAnnotations
    | MistypedLiteralSuffixes
    | MixedAttributesStyle
    | MixedCaseHexLiterals
    | MixedReadWriteInExpression
    | ModModuleFiles
    | ModuleInception
    | ModuleNameRepetitions
    | ModuloArithmetic
    | ModuloOne
    | MultiAssignments
    | MultipleBoundLocations
    | MultipleCrateVersions
    | MultipleInherentImpl
    | MultipleUnsafeOpsPerBlock
    | MustUseCandidate
    | MustUseUnit
    | MutFromRef
    | MutMut
    | MutMutexLock
    | MutRangeBound
    | MutableKeyType
    | MutexAtomic
    | MutexInteger
    | NaiveBytecount
    | NeedlessArbitrarySelfType
    | NeedlessAsBytes
    | NeedlessBitwiseBool
    | NeedlessBool
    | NeedlessBoolAssign
    | NeedlessBorrow
    | NeedlessBorrowedReference
    | NeedlessBorrowsForGenericArgs
    | NeedlessCharacterIteration
    | NeedlessCollect
    | NeedlessContinue
    | NeedlessDoctestMain
    | NeedlessElse
    | NeedlessForEach
    | NeedlessIfs
    | NeedlessLateInit
    | NeedlessLifetimes
    | NeedlessMatch
    | NeedlessMaybeSized
    | NeedlessOptionAsDeref
    | NeedlessOptionTake
    | NeedlessParensOnRangeLiterals
    | NeedlessPassByRefMut
    | NeedlessPassByValue
    | NeedlessPubSelf
    | NeedlessQuestionMark
    | NeedlessRangeLoop
    | NeedlessRawStringHashes
    | NeedlessRawStrings
    | NeedlessReturn
    | NeedlessReturnWithQuestionMark
    | NeedlessSplitn
    | NeedlessTypeCast
    | NeedlessUpdate
    | NegCmpOpOnPartialOrd
    | NegMultiply
    | NegativeFeatureNames
    | NeverLoop
    | NewRetNoSelf
    | NewWithoutDefault
    | NoEffect
    | NoEffectReplace
    | NoEffectUnderscoreBinding
    | NoMangleWithRustAbi
    | NonAsciiLiteral
    | NonCanonicalCloneImpl
    | NonCanonicalPartialOrdImpl
    | NonMinimalCfg
    | NonOctalUnixPermissions
    | NonSendFieldsInSendTy
    | NonStdLazyStatics
    | NonZeroSuggestions
    | NonminimalBool
    | NonsensicalOpenOptions
    | NonstandardMacroBraces
    | NotUnsafePtrArgDeref
    | Nursery
    | ObfuscatedIfElse
    | OctalEscapes
    | OkExpect
    | OnlyUsedInRecursion
    | OpRef
    | OptionAsRefCloned
    | OptionAsRefDeref
    | OptionEnvUnwrap
    | OptionFilterMap
    | OptionIfLetElse
    | OptionMapOrErrOk
    | OptionMapOrNone
    | OptionMapUnitFn
    | OptionOption
    | OrFunCall
    | OrThenUnwrap
    | OutOfBoundsIndexing
    | OverlyComplexBoolExpr
    | OwnedCow
    | Panic
    | PanicInResultFn
    | PanickingOverflowChecks
    | PanickingUnwrap
    | PartialPubFields
    | PartialeqNeImpl
    | PartialeqToNone
    | PathBufPushOverwrite
    | PathEndsWithExt
    | PathbufInitThenPush
    | PatternTypeMismatch
    | Pedantic
    | Perf
    | PermissionsSetReadonlyFalse
    | PointerFormat
    | PointersInNomemAsmBlock
    | PossibleMissingComma
    | PossibleMissingElse
    | Precedence
    | PrecedenceBits
    | PrintInFormatImpl
    | PrintLiteral
    | PrintStderr
    | PrintStdout
    | PrintWithNewline
    | PrintlnEmptyString
    | PtrArg
    | PtrAsPtr
    | PtrCastConstness
    | PtrEq
    | PtrOffsetByLiteral
    | PtrOffsetWithCast
    | PubEnumVariantNames
    | PubUnderscoreFields
    | PubUse
    | PubWithShorthand
    | PubWithoutShorthand
    | QuestionMark
    | QuestionMarkUsed
    | RangeMinusOne
    | RangePlusOne
    | RangeStepByZero
    | RangeZipWithLen
    | RcBuffer
    | RcCloneInVecInit
    | RcMutex
    | ReadLineWithoutTrim
    | ReadZeroByteVec
    | ReadonlyWriteLock
    | RecursiveFormatImpl
    | RedundantAllocation
    | RedundantAsStr
    | RedundantAsyncBlock
    | RedundantAtRestPattern
    | RedundantClone
    | RedundantClosure
    | RedundantClosureCall
    | RedundantClosureForMethodCalls
    | RedundantComparisons
    | RedundantElse
    | RedundantFeatureNames
    | RedundantFieldNames
    | RedundantGuards
    | RedundantIterCloned
    | RedundantLocals
    | RedundantPattern
    | RedundantPatternMatching
    | RedundantPubCrate
    | RedundantSlicing
    | RedundantStaticLifetimes
    | RedundantTestPrefix
    | RedundantTypeAnnotations
    | RefAsPtr
    | RefBindingToReference
    | RefOption
    | RefOptionRef
    | RefPatterns
    | RegexCreationInLoops
    | RegexMacro
    | RenamedFunctionParams
    | RepeatOnce
    | RepeatVecWithCapacity
    | ReplaceBox
    | ReplaceConsts
    | ReprPackedWithoutAbi
    | ReserveAfterInitialization
    | RestPatInFullyBoundStructs
    | Restriction
    | ResultFilterMap
    | ResultLargeErr
    | ResultMapOrIntoOption
    | ResultMapUnitFn
    | ResultUnitErr
    | ReturnAndThen
    | ReturnSelfNotMustUse
    | ReversedEmptyRanges
    | SameFunctionsInIfCondition
    | SameItemPush
    | SameLengthAndCapacity
    | SameNameMethod
    | SearchIsSome
    | SeekFromCurrent
    | SeekToStartInsteadOfRewind
    | SelfAssignment
    | SelfNamedConstructors
    | SelfNamedModuleFiles
    | SelfOnlyUsedInRecursion
    | SemicolonIfNothingReturned
    | SemicolonInsideBlock
    | SemicolonOutsideBlock
    | SeparatedLiteralSuffix
    | SerdeApiMisuse
    | SetContainsOrInsert
    | ShadowReuse
    | ShadowSame
    | ShadowUnrelated
    | ShortCircuitStatement
    | ShouldAssertEq
    | ShouldImplementTrait
    | ShouldPanicWithoutExpect
    | SignificantDropInScrutinee
    | SignificantDropTightening
    | SimilarNames
    | SingleCallFn
    | SingleCharAddStr
    | SingleCharLifetimeNames
    | SingleCharPattern
    | SingleComponentPathImports
    | SingleElementLoop
    | SingleMatch
    | SingleMatchElse
    | SingleOptionMap
    | SingleRangeInVecInit
    | SizeOfInElementCount
    | SizeOfRef
    | SkipWhileNext
    | SlicedStringAsBytes
    | SlowVectorInitialization
    | StableSortPrimitive
    | StdInsteadOfAlloc
    | StdInsteadOfCore
    | StrSplitAtNewline
    | StrToString
    | StringAdd
    | StringAddAssign
    | StringExtendChars
    | StringFromUtf8AsBytes
    | StringLitAsBytes
    | StringLitCharsAny
    | StringSlice
    | StringToString
    | StrlenOnCStrings
    | StructExcessiveBools
    | StructFieldNames
    | Style
    | SuboptimalFlops
    | Suspicious
    | SuspiciousArithmeticImpl
    | SuspiciousAssignmentFormatting
    | SuspiciousCommandArgSpace
    | SuspiciousDocComments
    | SuspiciousElseFormatting
    | SuspiciousMap
    | SuspiciousOpAssignImpl
    | SuspiciousOpenOptions
    | SuspiciousOperationGroupings
    | SuspiciousSplitn
    | SuspiciousToOwned
    | SuspiciousUnaryOpFormatting
    | SuspiciousXorUsedAsPow
    | SwapPtrToRef
    | SwapWithTemporary
    | TabsInDocComments
    | TemporaryAssignment
    | TestAttrInDoctest
    | TestsOutsideTestModule
    | ToDigitIsSome
    | ToStringInFormatArgs
    | ToStringTraitImpl
    | Todo
    | TooLongFirstDocParagraph
    | TooManyArguments
    | TooManyLines
    | ToplevelRefArg
    | TrailingEmptyArray
    | TraitDuplicationInBounds
    | TransmuteBytesToStr
    | TransmuteIntToBool
    | TransmuteIntToNonZero
    | TransmuteNullToFn
    | TransmutePtrToPtr
    | TransmutePtrToRef
    | TransmuteUndefinedRepr
    | TransmutesExpressibleAsPtrCasts
    | TransmutingNull
    | TrimSplitWhitespace
    | TrivialRegex
    | TriviallyCopyPassByRef
    | TryErr
    | TupleArrayConversions
    | TypeComplexity
    | TypeIdOnBox
    | TypeRepetitionInBounds
    | UnbufferedBytes
    | UncheckedTimeSubtraction
    | UnconditionalRecursion1
    | UndocumentedUnsafeBlocks
    | UnicodeNotNfc
    | Unimplemented
    | UninhabitedReferences
    | UninitAssumedInit
    | UninitVec
    | UninlinedFormatArgs
    | UnitArg
    | UnitCmp
    | UnitHash
    | UnitReturnExpectingOrd
    | UnnecessaryBoxReturns
    | UnnecessaryCast
    | UnnecessaryClippyCfg
    | UnnecessaryDebugFormatting
    | UnnecessaryFallibleConversions
    | UnnecessaryFilterMap
    | UnnecessaryFindMap
    | UnnecessaryFirstThenCheck
    | UnnecessaryFold
    | UnnecessaryGetThenCheck
    | UnnecessaryJoin
    | UnnecessaryLazyEvaluations
    | UnnecessaryLiteralBound
    | UnnecessaryLiteralUnwrap
    | UnnecessaryMapOnConstructor
    | UnnecessaryMapOr
    | UnnecessaryMinOrMax
    | UnnecessaryMutPassed
    | UnnecessaryOperation
    | UnnecessaryOptionMapOrElse
    | UnnecessaryOwnedEmptyStrings
    | UnnecessaryResultMapOrElse
    | UnnecessarySafetyComment
    | UnnecessarySafetyDoc
    | UnnecessarySelfImports
    | UnnecessarySemicolon
    | UnnecessarySortBy
    | UnnecessaryStructInitialization
    | UnnecessaryToOwned
    | UnnecessaryTrailingComma
    | UnnecessaryUnwrap
    | UnnecessaryWraps
    | UnneededFieldPattern
    | UnneededStructPattern
    | UnneededWildcardPattern
    | UnnestedOrPatterns
    | Unreachable
    | UnreadableLiteral
    | UnsafeDeriveDeserialize
    | UnsafeRemovedFromName
    | UnsafeVectorInitialization
    | UnseparatedLiteralSuffix
    | UnsoundCollectionTransmute
    | UnstableAsMutSlice
    | UnstableAsSlice
    | UnusedAsync
    | UnusedCollect
    | UnusedEnumerateIndex
    | UnusedFormatSpecs
    | UnusedIoAmount
    | UnusedPeekable
    | UnusedResultOk
    | UnusedRounding
    | UnusedSelf
    | UnusedTraitNames
    | UnusedUnit
    | UnusualByteGroupings
    | UnwrapInResult
    | UnwrapOrDefault
    | UnwrapUsed
    | UpperCaseAcronyms
    | UseDebug
    | UseSelf
    | UsedUnderscoreBinding
    | UsedUnderscoreItems
    | UselessAsref
    | UselessAttribute
    | UselessConcat
    | UselessConversion
    | UselessFormat
    | UselessLetIfSeq
    | UselessNonzeroNewUnchecked
    | UselessTransmute
    | UselessVec
    | VecBox
    | VecInitThenPush
    | VecResizeToZero
    | VerboseBitMask
    | VerboseFileReads
    | VolatileComposites
    | WakerCloneWake
    | WhileFloat
    | WhileImmutableCondition
    | WhileLetLoop
    | WhileLetOnIterator
    | WildcardDependencies
    | WildcardEnumMatchArm
    | WildcardImports
    | WildcardInOrPatterns
    | WriteLiteral
    | WriteWithNewline
    | WritelnEmptyString
    | WrongPubSelfConvention
    | WrongSelfConvention
    | WrongTransmute
    | ZeroDividedByZero
    | ZeroPrefixedLiteral
    | ZeroPtr
    | ZeroRepeatSideEffects
    | ZeroSizedMapValues
    | ZombieProcesses
    | ZstOffset
    | undefined;
}
export interface DetailedLint2 {
  level?: LintLevel;
  /**
   * The priority that controls which lints or [lint groups](https://doc.rust-lang.org/rustc/lints/groups.html) override other lint groups. Lower (particularly negative) numbers have lower priority, being overridden by higher numbers, and show up first on the command-line to tools like rustc.
   */
  priority?: number;
  /**
   * A list of `cfg` expressions that this lint should check for.
   */
  'check-cfg'?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Lint settings for [Cargo](https://doc.rust-lang.org/cargo/). See Cargo's [individual lints](https://doc.rust-lang.org/cargo/reference/lints.html) documentation.
 */
export interface CargoLints {
  blanket_hint_mostly_unused?: BlanketHintMostlyUnused;
  implicit_minimum_version_req?: ImplicitMinimumVersionReq;
  unknown_lints?: UnknownLints1;
  complexity?: Complexity1;
  correctness?: Correctness1;
  nursery?: Nursery1;
  pedantic?: Pedantic1;
  perf?: Perf1;
  restriction?: Restriction1;
  style?: Style1;
  suspicious?: Suspicious1;
  [k: string]:
    | Lint3
    | BlanketHintMostlyUnused
    | ImplicitMinimumVersionReq
    | UnknownLints1
    | Complexity1
    | Correctness1
    | Nursery1
    | Pedantic1
    | Perf1
    | Restriction1
    | Style1
    | Suspicious1
    | undefined;
}
export interface DetailedLint3 {
  level?: LintLevel;
  /**
   * The priority that controls which lints or lint groups override other lint groups. Lower (particularly negative) numbers have lower priority, being overridden by higher numbers, and show up first on the command-line to tools like rustc.
   */
  priority?: number;
  [k: string]: unknown | undefined;
}
export interface DetailedLint4 {
  level?: LintLevel;
  /**
   * The priority that controls which lints or [lint groups](https://doc.rust-lang.org/rustc/lints/groups.html) override other lint groups. Lower (particularly negative) numbers have lower priority, being overridden by higher numbers, and show up first on the command-line to tools like rustc.
   */
  priority?: number;
  /**
   * A list of `cfg` expressions that this lint should check for.
   */
  'check-cfg'?: string[];
  [k: string]: unknown | undefined;
}
export interface Target {
  /**
   * The `bench` field indicates whether or not the target is benchmarked by
   * default by [`cargo bench`](https://doc.rust-lang.org/cargo/commands/cargo-bench.html). The default is `true` for lib, bins, and
   * benchmarks.
   */
  bench?: boolean;
  /**
   * The `crate-type` field defines the [crate types](https://doc.rust-lang.org/reference/linkage.html) that will be generated by the
   * target. It is an array of strings, allowing you to specify multiple crate
   * types for a single target. This can only be specified for libraries and
   * examples. Binaries, tests, and benchmarks are always the "bin" crate type.
   *
   * The available options are `bin`, `lib`, `rlib`, `dylib`, `cdylib`,
   * `staticlib`, and `proc-macro`. You can read more about the different crate
   * types in the [Rust Reference Manual](https://doc.rust-lang.org/reference/linkage.html).
   *
   * Items: The `crate-type` field defines the [crate types](https://doc.rust-lang.org/reference/linkage.html) that will be generated by the
   * target. It is an array of strings, allowing you to specify multiple crate
   * types for a single target. This can only be specified for libraries and
   * examples. Binaries, tests, and benchmarks are always the "bin" crate type.
   *
   * The available options are `bin`, `lib`, `rlib`, `dylib`, `cdylib`,
   * `staticlib`, and `proc-macro`. You can read more about the different crate
   * types in the [Rust Reference Manual](https://doc.rust-lang.org/reference/linkage.html).
   */
  'crate-type'?: ('bin' | 'lib' | 'rlib' | 'dylib' | 'cdylib' | 'staticlib' | 'proc-macro')[];
  crate_type?: string[];
  /**
   * The `doc` field indicates whether or not the target is included in the
   * documentation generated by [`cargo doc`](https://doc.rust-lang.org/cargo/commands/cargo-doc.html) by default. The default is `true` for
   * libraries and binaries.
   *
   * > **Note**: The binary will be skipped if its name is the same as the lib
   * > target.
   */
  doc?: boolean;
  /**
   * The `doctest` field indicates whether or not [documentation examples](https://doc.rust-lang.org/rustdoc/documentation-tests.html) are
   * tested by default by [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html). This is only relevant for libraries, it
   * has no effect on other sections. The default is `true` for the library.
   *
   */
  doctest?: boolean;
  edition?: Edition1;
  /**
   * The `harness` field indicates that the [`--test` flag](https://doc.rust-lang.org/rustc/command-line-arguments.html#option-test) will be passed to
   * `rustc` which will automatically include the libtest library which is the
   * driver for collecting and running tests marked with the [`#[test]` attribute](https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute) or benchmarks with the `#[bench]` attribute. The
   * default is `true` for all targets.
   *
   * If set to `false`, then you are responsible for defining a `main()` function
   * to run tests and benchmarks.
   *
   * Tests have the [`cfg(test)` conditional expression](https://doc.rust-lang.org/reference/conditional-compilation.html#test) enabled whether
   * or not the harness is enabled.
   */
  harness?: boolean;
  /**
   * The `name` field specifies the name of the target, which corresponds to the
   * filename of the artifact that will be generated. For a library, this is the
   * crate name that dependencies will use to reference it.
   *
   * For the `[lib]` and the default binary (`src/main.rs`), this defaults to the
   * name of the package, with any dashes replaced with underscores. For other
   * [auto discovered](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#target-auto-discovery) targets, it defaults to the
   * directory or file name.
   *
   * This is required for all targets except `[lib]`.
   */
  name?: string;
  /**
   * The `path` field specifies where the source for the crate is located, relative
   * to the `Cargo.toml` file.
   *
   * If not specified, the [inferred path](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#target-auto-discovery) is used based on
   * the target name.
   */
  path?: string;
  plugin?: boolean;
  /**
   * The `proc-macro` field indicates that the library is a [procedural macro](https://doc.rust-lang.org/book/ch19-06-macros.html)
   * ([reference](https://doc.rust-lang.org/reference/procedural-macros.html)). This is only valid for the `[lib]`
   * target.
   */
  'proc-macro'?: boolean;
  proc_macro?: boolean;
  /**
   * The `required-features` field specifies which [features](https://doc.rust-lang.org/cargo/reference/features.html) the target needs in
   * order to be built. If any of the required features are not enabled, the
   * target will be skipped. This is only relevant for the `[[bin]]`, `[[bench]]`,
   * `[[test]]`, and `[[example]]` sections, it has no effect on `[lib]`.
   *
   * ```toml
   * [features]
   * # ...
   * postgres = []
   * sqlite = []
   * tools = []
   *
   * [[bin]]
   * name = "my-pg-tool"
   * required-features = ["postgres", "tools"]
   * ```
   *
   *
   * Items: The `required-features` field specifies which [features](https://doc.rust-lang.org/cargo/reference/features.html) the target needs in
   * order to be built. If any of the required features are not enabled, the
   * target will be skipped. This is only relevant for the `[[bin]]`, `[[bench]]`,
   * `[[test]]`, and `[[example]]` sections, it has no effect on `[lib]`.
   *
   * ```toml
   * [features]
   * # ...
   * postgres = []
   * sqlite = []
   * tools = []
   *
   * [[bin]]
   * name = "my-pg-tool"
   * required-features = ["postgres", "tools"]
   * ```
   *
   */
  'required-features'?: string[];
  /**
   * The `test` field indicates whether or not the target is tested by default by
   * [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html). The default is `true` for lib, bins, and tests.
   *
   * > **Note**: Examples are built by [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html) by default to ensure they
   * > continue to compile, but they are not *tested* by default. Setting `test =
   * > true` for an example will also build it as a test and run any
   * > [`#[test]`](https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute) functions defined in the example.
   */
  test?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Binary targets are executable programs that can be run after being compiled.
 * The default binary filename is `src/main.rs`, which defaults to the name of
 * the package. Additional binaries are stored in the [`src/bin/`
 * directory](https://doc.rust-lang.org/cargo/guide/project-layout.html). The settings for each binary can be [customized](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#configuring-a-target) in the `[[bin]]` tables in `Cargo.toml`.
 *
 * Binaries can use the public API of the package's library. They are also linked
 * with the [`[dependencies]`](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html) defined in `Cargo.toml`.
 *
 * You can run individual binaries with the [`cargo run`](https://doc.rust-lang.org/cargo/commands/cargo-run.html) command with the `--bin
 * <bin-name>` option. [`cargo install`](https://doc.rust-lang.org/cargo/commands/cargo-install.html) can be used to copy the executable to a
 * common location.
 *
 * ```toml
 * # Example of customizing binaries in Cargo.toml.
 * [[bin]]
 * name = "cool-tool"
 * test = false
 * bench = false
 *
 * [[bin]]
 * name = "frobnicator"
 * required-features = ["frobnicate"]
 * ```
 */
export interface Target1 {
  /**
   * The `bench` field indicates whether or not the target is benchmarked by
   * default by [`cargo bench`](https://doc.rust-lang.org/cargo/commands/cargo-bench.html). The default is `true` for lib, bins, and
   * benchmarks.
   */
  bench?: boolean;
  /**
   * The `crate-type` field defines the [crate types](https://doc.rust-lang.org/reference/linkage.html) that will be generated by the
   * target. It is an array of strings, allowing you to specify multiple crate
   * types for a single target. This can only be specified for libraries and
   * examples. Binaries, tests, and benchmarks are always the "bin" crate type.
   *
   * The available options are `bin`, `lib`, `rlib`, `dylib`, `cdylib`,
   * `staticlib`, and `proc-macro`. You can read more about the different crate
   * types in the [Rust Reference Manual](https://doc.rust-lang.org/reference/linkage.html).
   *
   * Items: The `crate-type` field defines the [crate types](https://doc.rust-lang.org/reference/linkage.html) that will be generated by the
   * target. It is an array of strings, allowing you to specify multiple crate
   * types for a single target. This can only be specified for libraries and
   * examples. Binaries, tests, and benchmarks are always the "bin" crate type.
   *
   * The available options are `bin`, `lib`, `rlib`, `dylib`, `cdylib`,
   * `staticlib`, and `proc-macro`. You can read more about the different crate
   * types in the [Rust Reference Manual](https://doc.rust-lang.org/reference/linkage.html).
   */
  'crate-type'?: ('bin' | 'lib' | 'rlib' | 'dylib' | 'cdylib' | 'staticlib' | 'proc-macro')[];
  crate_type?: string[];
  /**
   * The `doc` field indicates whether or not the target is included in the
   * documentation generated by [`cargo doc`](https://doc.rust-lang.org/cargo/commands/cargo-doc.html) by default. The default is `true` for
   * libraries and binaries.
   *
   * > **Note**: The binary will be skipped if its name is the same as the lib
   * > target.
   */
  doc?: boolean;
  /**
   * The `doctest` field indicates whether or not [documentation examples](https://doc.rust-lang.org/rustdoc/documentation-tests.html) are
   * tested by default by [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html). This is only relevant for libraries, it
   * has no effect on other sections. The default is `true` for the library.
   *
   */
  doctest?: boolean;
  edition?: Edition1;
  /**
   * The `harness` field indicates that the [`--test` flag](https://doc.rust-lang.org/rustc/command-line-arguments.html#option-test) will be passed to
   * `rustc` which will automatically include the libtest library which is the
   * driver for collecting and running tests marked with the [`#[test]` attribute](https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute) or benchmarks with the `#[bench]` attribute. The
   * default is `true` for all targets.
   *
   * If set to `false`, then you are responsible for defining a `main()` function
   * to run tests and benchmarks.
   *
   * Tests have the [`cfg(test)` conditional expression](https://doc.rust-lang.org/reference/conditional-compilation.html#test) enabled whether
   * or not the harness is enabled.
   */
  harness?: boolean;
  /**
   * The `name` field specifies the name of the target, which corresponds to the
   * filename of the artifact that will be generated. For a library, this is the
   * crate name that dependencies will use to reference it.
   *
   * For the `[lib]` and the default binary (`src/main.rs`), this defaults to the
   * name of the package, with any dashes replaced with underscores. For other
   * [auto discovered](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#target-auto-discovery) targets, it defaults to the
   * directory or file name.
   *
   * This is required for all targets except `[lib]`.
   */
  name?: string;
  /**
   * The `path` field specifies where the source for the crate is located, relative
   * to the `Cargo.toml` file.
   *
   * If not specified, the [inferred path](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#target-auto-discovery) is used based on
   * the target name.
   */
  path?: string;
  plugin?: boolean;
  /**
   * The `proc-macro` field indicates that the library is a [procedural macro](https://doc.rust-lang.org/book/ch19-06-macros.html)
   * ([reference](https://doc.rust-lang.org/reference/procedural-macros.html)). This is only valid for the `[lib]`
   * target.
   */
  'proc-macro'?: boolean;
  proc_macro?: boolean;
  /**
   * The `required-features` field specifies which [features](https://doc.rust-lang.org/cargo/reference/features.html) the target needs in
   * order to be built. If any of the required features are not enabled, the
   * target will be skipped. This is only relevant for the `[[bin]]`, `[[bench]]`,
   * `[[test]]`, and `[[example]]` sections, it has no effect on `[lib]`.
   *
   * ```toml
   * [features]
   * # ...
   * postgres = []
   * sqlite = []
   * tools = []
   *
   * [[bin]]
   * name = "my-pg-tool"
   * required-features = ["postgres", "tools"]
   * ```
   *
   *
   * Items: The `required-features` field specifies which [features](https://doc.rust-lang.org/cargo/reference/features.html) the target needs in
   * order to be built. If any of the required features are not enabled, the
   * target will be skipped. This is only relevant for the `[[bin]]`, `[[bench]]`,
   * `[[test]]`, and `[[example]]` sections, it has no effect on `[lib]`.
   *
   * ```toml
   * [features]
   * # ...
   * postgres = []
   * sqlite = []
   * tools = []
   *
   * [[bin]]
   * name = "my-pg-tool"
   * required-features = ["postgres", "tools"]
   * ```
   *
   */
  'required-features'?: string[];
  /**
   * The `test` field indicates whether or not the target is tested by default by
   * [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html). The default is `true` for lib, bins, and tests.
   *
   * > **Note**: Examples are built by [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html) by default to ensure they
   * > continue to compile, but they are not *tested* by default. Setting `test =
   * > true` for an example will also build it as a test and run any
   * > [`#[test]`](https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute) functions defined in the example.
   */
  test?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Files located under the [examples directory](https://doc.rust-lang.org/cargo/guide/project-layout.html) are example uses of the functionality provided by the library. When compiled, they are placed in the[ target/debug/examples directory](https://doc.rust-lang.org/cargo/guide/build-cache.html).
 *
 * Examples can use the public API of the package's library. They are also linked with the [dependencies](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html) and [dev-dependencies](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#development-dependencies) defined in `Cargo.toml`.
 *
 * By default, examples are executable binaries (with a `main()` function). You
 * can specify the [`crate-type` field](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#the-crate-type-field) to make an example
 * be compiled as a library:
 *
 * ```toml
 * [[example]]
 * name = "foo"
 * crate-type = ["staticlib"]
 * ```
 *
 * You can run individual executable examples with the [`cargo run`](https://doc.rust-lang.org/cargo/commands/cargo-run.html) command with
 * the `--example <example-name>` option. Library examples can be built with
 * [`cargo build`](https://doc.rust-lang.org/cargo/commands/cargo-build.html) with the `--example <example-name>` option. [`cargo install`](https://doc.rust-lang.org/cargo/commands/cargo-install.html)
 * with the `--example <example-name>` option can be used to copy executable
 * binaries to a common location. Examples are compiled by [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html) by
 * default to protect them from bit-rotting. Set [the `test`
 * field](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#the-test-field) to `true` if you have `#[test]` functions in the
 * example that you want to run with [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html).
 *
 */
export interface Target2 {
  /**
   * The `bench` field indicates whether or not the target is benchmarked by
   * default by [`cargo bench`](https://doc.rust-lang.org/cargo/commands/cargo-bench.html). The default is `true` for lib, bins, and
   * benchmarks.
   */
  bench?: boolean;
  /**
   * The `crate-type` field defines the [crate types](https://doc.rust-lang.org/reference/linkage.html) that will be generated by the
   * target. It is an array of strings, allowing you to specify multiple crate
   * types for a single target. This can only be specified for libraries and
   * examples. Binaries, tests, and benchmarks are always the "bin" crate type.
   *
   * The available options are `bin`, `lib`, `rlib`, `dylib`, `cdylib`,
   * `staticlib`, and `proc-macro`. You can read more about the different crate
   * types in the [Rust Reference Manual](https://doc.rust-lang.org/reference/linkage.html).
   *
   * Items: The `crate-type` field defines the [crate types](https://doc.rust-lang.org/reference/linkage.html) that will be generated by the
   * target. It is an array of strings, allowing you to specify multiple crate
   * types for a single target. This can only be specified for libraries and
   * examples. Binaries, tests, and benchmarks are always the "bin" crate type.
   *
   * The available options are `bin`, `lib`, `rlib`, `dylib`, `cdylib`,
   * `staticlib`, and `proc-macro`. You can read more about the different crate
   * types in the [Rust Reference Manual](https://doc.rust-lang.org/reference/linkage.html).
   */
  'crate-type'?: ('bin' | 'lib' | 'rlib' | 'dylib' | 'cdylib' | 'staticlib' | 'proc-macro')[];
  crate_type?: string[];
  /**
   * The `doc` field indicates whether or not the target is included in the
   * documentation generated by [`cargo doc`](https://doc.rust-lang.org/cargo/commands/cargo-doc.html) by default. The default is `true` for
   * libraries and binaries.
   *
   * > **Note**: The binary will be skipped if its name is the same as the lib
   * > target.
   */
  doc?: boolean;
  /**
   * The `doctest` field indicates whether or not [documentation examples](https://doc.rust-lang.org/rustdoc/documentation-tests.html) are
   * tested by default by [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html). This is only relevant for libraries, it
   * has no effect on other sections. The default is `true` for the library.
   *
   */
  doctest?: boolean;
  edition?: Edition1;
  /**
   * The `harness` field indicates that the [`--test` flag](https://doc.rust-lang.org/rustc/command-line-arguments.html#option-test) will be passed to
   * `rustc` which will automatically include the libtest library which is the
   * driver for collecting and running tests marked with the [`#[test]` attribute](https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute) or benchmarks with the `#[bench]` attribute. The
   * default is `true` for all targets.
   *
   * If set to `false`, then you are responsible for defining a `main()` function
   * to run tests and benchmarks.
   *
   * Tests have the [`cfg(test)` conditional expression](https://doc.rust-lang.org/reference/conditional-compilation.html#test) enabled whether
   * or not the harness is enabled.
   */
  harness?: boolean;
  /**
   * The `name` field specifies the name of the target, which corresponds to the
   * filename of the artifact that will be generated. For a library, this is the
   * crate name that dependencies will use to reference it.
   *
   * For the `[lib]` and the default binary (`src/main.rs`), this defaults to the
   * name of the package, with any dashes replaced with underscores. For other
   * [auto discovered](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#target-auto-discovery) targets, it defaults to the
   * directory or file name.
   *
   * This is required for all targets except `[lib]`.
   */
  name?: string;
  /**
   * The `path` field specifies where the source for the crate is located, relative
   * to the `Cargo.toml` file.
   *
   * If not specified, the [inferred path](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#target-auto-discovery) is used based on
   * the target name.
   */
  path?: string;
  plugin?: boolean;
  /**
   * The `proc-macro` field indicates that the library is a [procedural macro](https://doc.rust-lang.org/book/ch19-06-macros.html)
   * ([reference](https://doc.rust-lang.org/reference/procedural-macros.html)). This is only valid for the `[lib]`
   * target.
   */
  'proc-macro'?: boolean;
  proc_macro?: boolean;
  /**
   * The `required-features` field specifies which [features](https://doc.rust-lang.org/cargo/reference/features.html) the target needs in
   * order to be built. If any of the required features are not enabled, the
   * target will be skipped. This is only relevant for the `[[bin]]`, `[[bench]]`,
   * `[[test]]`, and `[[example]]` sections, it has no effect on `[lib]`.
   *
   * ```toml
   * [features]
   * # ...
   * postgres = []
   * sqlite = []
   * tools = []
   *
   * [[bin]]
   * name = "my-pg-tool"
   * required-features = ["postgres", "tools"]
   * ```
   *
   *
   * Items: The `required-features` field specifies which [features](https://doc.rust-lang.org/cargo/reference/features.html) the target needs in
   * order to be built. If any of the required features are not enabled, the
   * target will be skipped. This is only relevant for the `[[bin]]`, `[[bench]]`,
   * `[[test]]`, and `[[example]]` sections, it has no effect on `[lib]`.
   *
   * ```toml
   * [features]
   * # ...
   * postgres = []
   * sqlite = []
   * tools = []
   *
   * [[bin]]
   * name = "my-pg-tool"
   * required-features = ["postgres", "tools"]
   * ```
   *
   */
  'required-features'?: string[];
  /**
   * The `test` field indicates whether or not the target is tested by default by
   * [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html). The default is `true` for lib, bins, and tests.
   *
   * > **Note**: Examples are built by [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html) by default to ensure they
   * > continue to compile, but they are not *tested* by default. Setting `test =
   * > true` for an example will also build it as a test and run any
   * > [`#[test]`](https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute) functions defined in the example.
   */
  test?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Files located under the [`tests` directory](https://doc.rust-lang.org/cargo/guide/project-layout.html) are integration
 * tests. When you run [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html), Cargo will compile each of these files as
 * a separate crate, and execute them.
 *
 * Integration tests can use the public API of the package's library. They are
 * also linked with the [`[dependencies]`](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html) and
 * [`[dev-dependencies]`](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#development-dependencies) defined in `Cargo.toml`.
 *
 * If you want to share code among multiple integration tests, you can place it
 * in a separate module such as `tests/common/mod.rs` and then put `mod common;`
 * in each test to import it.
 *
 * Each integration test results in a separate executable binary, and [`cargo
 * test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html) will run them serially. In some cases this can be inefficient, as it
 * can take longer to compile, and may not make full use of multiple CPUs when
 * running the tests. If you have a lot of integration tests, you may want to
 * consider creating a single integration test, and split the tests into multiple
 * modules. The libtest harness will automatically find all of the `#[test]`
 * annotated functions and run them in parallel. You can pass module names to
 * [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html) to only run the tests within that module.
 *
 * Binary targets are automatically built if there is an integration test. This
 * allows an integration test to execute the binary to exercise and test its
 * behavior. The `CARGO_BIN_EXE_<name>` [environment variable](https://doc.rust-lang.org/cargo/reference/environment-variables.html#environment-variables-cargo-sets-for-crates) is set when the
 * integration test is built so that it can use the [`env` macro](https://doc.rust-lang.org/std/macro.env.html) to locate the
 * executable.
 */
export interface Target3 {
  /**
   * The `bench` field indicates whether or not the target is benchmarked by
   * default by [`cargo bench`](https://doc.rust-lang.org/cargo/commands/cargo-bench.html). The default is `true` for lib, bins, and
   * benchmarks.
   */
  bench?: boolean;
  /**
   * The `crate-type` field defines the [crate types](https://doc.rust-lang.org/reference/linkage.html) that will be generated by the
   * target. It is an array of strings, allowing you to specify multiple crate
   * types for a single target. This can only be specified for libraries and
   * examples. Binaries, tests, and benchmarks are always the "bin" crate type.
   *
   * The available options are `bin`, `lib`, `rlib`, `dylib`, `cdylib`,
   * `staticlib`, and `proc-macro`. You can read more about the different crate
   * types in the [Rust Reference Manual](https://doc.rust-lang.org/reference/linkage.html).
   *
   * Items: The `crate-type` field defines the [crate types](https://doc.rust-lang.org/reference/linkage.html) that will be generated by the
   * target. It is an array of strings, allowing you to specify multiple crate
   * types for a single target. This can only be specified for libraries and
   * examples. Binaries, tests, and benchmarks are always the "bin" crate type.
   *
   * The available options are `bin`, `lib`, `rlib`, `dylib`, `cdylib`,
   * `staticlib`, and `proc-macro`. You can read more about the different crate
   * types in the [Rust Reference Manual](https://doc.rust-lang.org/reference/linkage.html).
   */
  'crate-type'?: ('bin' | 'lib' | 'rlib' | 'dylib' | 'cdylib' | 'staticlib' | 'proc-macro')[];
  crate_type?: string[];
  /**
   * The `doc` field indicates whether or not the target is included in the
   * documentation generated by [`cargo doc`](https://doc.rust-lang.org/cargo/commands/cargo-doc.html) by default. The default is `true` for
   * libraries and binaries.
   *
   * > **Note**: The binary will be skipped if its name is the same as the lib
   * > target.
   */
  doc?: boolean;
  /**
   * The `doctest` field indicates whether or not [documentation examples](https://doc.rust-lang.org/rustdoc/documentation-tests.html) are
   * tested by default by [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html). This is only relevant for libraries, it
   * has no effect on other sections. The default is `true` for the library.
   *
   */
  doctest?: boolean;
  edition?: Edition1;
  /**
   * The `harness` field indicates that the [`--test` flag](https://doc.rust-lang.org/rustc/command-line-arguments.html#option-test) will be passed to
   * `rustc` which will automatically include the libtest library which is the
   * driver for collecting and running tests marked with the [`#[test]` attribute](https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute) or benchmarks with the `#[bench]` attribute. The
   * default is `true` for all targets.
   *
   * If set to `false`, then you are responsible for defining a `main()` function
   * to run tests and benchmarks.
   *
   * Tests have the [`cfg(test)` conditional expression](https://doc.rust-lang.org/reference/conditional-compilation.html#test) enabled whether
   * or not the harness is enabled.
   */
  harness?: boolean;
  /**
   * The `name` field specifies the name of the target, which corresponds to the
   * filename of the artifact that will be generated. For a library, this is the
   * crate name that dependencies will use to reference it.
   *
   * For the `[lib]` and the default binary (`src/main.rs`), this defaults to the
   * name of the package, with any dashes replaced with underscores. For other
   * [auto discovered](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#target-auto-discovery) targets, it defaults to the
   * directory or file name.
   *
   * This is required for all targets except `[lib]`.
   */
  name?: string;
  /**
   * The `path` field specifies where the source for the crate is located, relative
   * to the `Cargo.toml` file.
   *
   * If not specified, the [inferred path](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#target-auto-discovery) is used based on
   * the target name.
   */
  path?: string;
  plugin?: boolean;
  /**
   * The `proc-macro` field indicates that the library is a [procedural macro](https://doc.rust-lang.org/book/ch19-06-macros.html)
   * ([reference](https://doc.rust-lang.org/reference/procedural-macros.html)). This is only valid for the `[lib]`
   * target.
   */
  'proc-macro'?: boolean;
  proc_macro?: boolean;
  /**
   * The `required-features` field specifies which [features](https://doc.rust-lang.org/cargo/reference/features.html) the target needs in
   * order to be built. If any of the required features are not enabled, the
   * target will be skipped. This is only relevant for the `[[bin]]`, `[[bench]]`,
   * `[[test]]`, and `[[example]]` sections, it has no effect on `[lib]`.
   *
   * ```toml
   * [features]
   * # ...
   * postgres = []
   * sqlite = []
   * tools = []
   *
   * [[bin]]
   * name = "my-pg-tool"
   * required-features = ["postgres", "tools"]
   * ```
   *
   *
   * Items: The `required-features` field specifies which [features](https://doc.rust-lang.org/cargo/reference/features.html) the target needs in
   * order to be built. If any of the required features are not enabled, the
   * target will be skipped. This is only relevant for the `[[bin]]`, `[[bench]]`,
   * `[[test]]`, and `[[example]]` sections, it has no effect on `[lib]`.
   *
   * ```toml
   * [features]
   * # ...
   * postgres = []
   * sqlite = []
   * tools = []
   *
   * [[bin]]
   * name = "my-pg-tool"
   * required-features = ["postgres", "tools"]
   * ```
   *
   */
  'required-features'?: string[];
  /**
   * The `test` field indicates whether or not the target is tested by default by
   * [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html). The default is `true` for lib, bins, and tests.
   *
   * > **Note**: Examples are built by [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html) by default to ensure they
   * > continue to compile, but they are not *tested* by default. Setting `test =
   * > true` for an example will also build it as a test and run any
   * > [`#[test]`](https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute) functions defined in the example.
   */
  test?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Benchmarks provide a way to test the performance of your code using the
 * [`cargo bench`](https://doc.rust-lang.org/cargo/commands/cargo-bench.html) command. They follow the same structure as [tests](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#tests),
 * with each benchmark function annotated with the `#[bench]` attribute.
 * Similarly to tests:
 *
 * * Benchmarks are placed in the [`benches` directory](https://doc.rust-lang.org/cargo/guide/project-layout.html).
 * * Benchmark functions defined in libraries and binaries have access to the
 *   *private* API within the target they are defined in. Benchmarks in the
 *   `benches` directory may use the *public* API.
 * * [The `bench` field](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#the-bench-field) can be used to define which targets
 *   are benchmarked by default.
 * * [The `harness` field](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#the-harness-field) can be used to disable the
 *   built-in harness.
 *
 * > **Note**: The [`#[bench]`
 * > attribute](https://doc.rust-lang.org/unstable-book/library-features/test.html) is currently
 * > unstable and only available on the [nightly channel](https://doc.rust-lang.org/book/appendix-07-nightly-rust.html). There are some
 * > packages available on [crates.io](https://crates.io/keywords/benchmark) that
 * > may help with running benchmarks on the stable channel, such as
 * > [Criterion](https://crates.io/crates/criterion).
 */
export interface Target4 {
  /**
   * The `bench` field indicates whether or not the target is benchmarked by
   * default by [`cargo bench`](https://doc.rust-lang.org/cargo/commands/cargo-bench.html). The default is `true` for lib, bins, and
   * benchmarks.
   */
  bench?: boolean;
  /**
   * The `crate-type` field defines the [crate types](https://doc.rust-lang.org/reference/linkage.html) that will be generated by the
   * target. It is an array of strings, allowing you to specify multiple crate
   * types for a single target. This can only be specified for libraries and
   * examples. Binaries, tests, and benchmarks are always the "bin" crate type.
   *
   * The available options are `bin`, `lib`, `rlib`, `dylib`, `cdylib`,
   * `staticlib`, and `proc-macro`. You can read more about the different crate
   * types in the [Rust Reference Manual](https://doc.rust-lang.org/reference/linkage.html).
   *
   * Items: The `crate-type` field defines the [crate types](https://doc.rust-lang.org/reference/linkage.html) that will be generated by the
   * target. It is an array of strings, allowing you to specify multiple crate
   * types for a single target. This can only be specified for libraries and
   * examples. Binaries, tests, and benchmarks are always the "bin" crate type.
   *
   * The available options are `bin`, `lib`, `rlib`, `dylib`, `cdylib`,
   * `staticlib`, and `proc-macro`. You can read more about the different crate
   * types in the [Rust Reference Manual](https://doc.rust-lang.org/reference/linkage.html).
   */
  'crate-type'?: ('bin' | 'lib' | 'rlib' | 'dylib' | 'cdylib' | 'staticlib' | 'proc-macro')[];
  crate_type?: string[];
  /**
   * The `doc` field indicates whether or not the target is included in the
   * documentation generated by [`cargo doc`](https://doc.rust-lang.org/cargo/commands/cargo-doc.html) by default. The default is `true` for
   * libraries and binaries.
   *
   * > **Note**: The binary will be skipped if its name is the same as the lib
   * > target.
   */
  doc?: boolean;
  /**
   * The `doctest` field indicates whether or not [documentation examples](https://doc.rust-lang.org/rustdoc/documentation-tests.html) are
   * tested by default by [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html). This is only relevant for libraries, it
   * has no effect on other sections. The default is `true` for the library.
   *
   */
  doctest?: boolean;
  edition?: Edition1;
  /**
   * The `harness` field indicates that the [`--test` flag](https://doc.rust-lang.org/rustc/command-line-arguments.html#option-test) will be passed to
   * `rustc` which will automatically include the libtest library which is the
   * driver for collecting and running tests marked with the [`#[test]` attribute](https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute) or benchmarks with the `#[bench]` attribute. The
   * default is `true` for all targets.
   *
   * If set to `false`, then you are responsible for defining a `main()` function
   * to run tests and benchmarks.
   *
   * Tests have the [`cfg(test)` conditional expression](https://doc.rust-lang.org/reference/conditional-compilation.html#test) enabled whether
   * or not the harness is enabled.
   */
  harness?: boolean;
  /**
   * The `name` field specifies the name of the target, which corresponds to the
   * filename of the artifact that will be generated. For a library, this is the
   * crate name that dependencies will use to reference it.
   *
   * For the `[lib]` and the default binary (`src/main.rs`), this defaults to the
   * name of the package, with any dashes replaced with underscores. For other
   * [auto discovered](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#target-auto-discovery) targets, it defaults to the
   * directory or file name.
   *
   * This is required for all targets except `[lib]`.
   */
  name?: string;
  /**
   * The `path` field specifies where the source for the crate is located, relative
   * to the `Cargo.toml` file.
   *
   * If not specified, the [inferred path](https://doc.rust-lang.org/cargo/reference/cargo-targets.html#target-auto-discovery) is used based on
   * the target name.
   */
  path?: string;
  plugin?: boolean;
  /**
   * The `proc-macro` field indicates that the library is a [procedural macro](https://doc.rust-lang.org/book/ch19-06-macros.html)
   * ([reference](https://doc.rust-lang.org/reference/procedural-macros.html)). This is only valid for the `[lib]`
   * target.
   */
  'proc-macro'?: boolean;
  proc_macro?: boolean;
  /**
   * The `required-features` field specifies which [features](https://doc.rust-lang.org/cargo/reference/features.html) the target needs in
   * order to be built. If any of the required features are not enabled, the
   * target will be skipped. This is only relevant for the `[[bin]]`, `[[bench]]`,
   * `[[test]]`, and `[[example]]` sections, it has no effect on `[lib]`.
   *
   * ```toml
   * [features]
   * # ...
   * postgres = []
   * sqlite = []
   * tools = []
   *
   * [[bin]]
   * name = "my-pg-tool"
   * required-features = ["postgres", "tools"]
   * ```
   *
   *
   * Items: The `required-features` field specifies which [features](https://doc.rust-lang.org/cargo/reference/features.html) the target needs in
   * order to be built. If any of the required features are not enabled, the
   * target will be skipped. This is only relevant for the `[[bin]]`, `[[bench]]`,
   * `[[test]]`, and `[[example]]` sections, it has no effect on `[lib]`.
   *
   * ```toml
   * [features]
   * # ...
   * postgres = []
   * sqlite = []
   * tools = []
   *
   * [[bin]]
   * name = "my-pg-tool"
   * required-features = ["postgres", "tools"]
   * ```
   *
   */
  'required-features'?: string[];
  /**
   * The `test` field indicates whether or not the target is tested by default by
   * [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html). The default is `true` for lib, bins, and tests.
   *
   * > **Note**: Examples are built by [`cargo test`](https://doc.rust-lang.org/cargo/commands/cargo-test.html) by default to ensure they
   * > continue to compile, but they are not *tested* by default. Setting `test =
   * > true` for an example will also build it as a test and run any
   * > [`#[test]`](https://doc.rust-lang.org/reference/attributes/testing.html#the-test-attribute) functions defined in the example.
   */
  test?: boolean;
  [k: string]: unknown | undefined;
}
export interface Platform {
  /**
   * Cargo is configured to look for dependencies on [crates.io](https://crates.io) by default. Only
   * the name and a version string are required in this case. In [the cargo
   * guide](https://doc.rust-lang.org/cargo/guide/index.html), we specified a dependency on the `time` crate:
   *
   * ```toml
   * [dependencies]
   * time = "0.1.12"
   * ```
   *
   * The string `"0.1.12"` is a [semver](https://github.com/steveklabnik/semver#requirements) version requirement. Since this
   * string does not have any operators in it, it is interpreted the same way as
   * if we had specified `"^0.1.12"`, which is called a caret requirement.
   *
   * A dependency can also be defined by a table with additional options:
   *
   * ```toml
   * [dependencies]
   * time = { path = "../time", version = "0.1.12" }
   * ```
   */
  dependencies?: {
    [k: string]: Dependency | undefined;
  };
  /**
   * The format of `[dev-dependencies]` is equivalent to `[dependencies]`:
   *
   * ```toml
   * [dev-dependencies]
   * tempdir = "0.3"
   * ```
   *
   * Dev-dependencies are not used when compiling
   * a package for building, but are used for compiling tests, examples, and
   * benchmarks.
   *
   * These dependencies are *not* propagated to other packages which depend on this
   * package.
   *
   * You can also have target-specific development dependencies by using
   * `dev-dependencies` in the target section header instead of `dependencies`. For
   * example:
   *
   * ```toml
   * [target.'cfg(unix)'.dev-dependencies]
   * mio = "0.0.1"
   * ```
   *
   * > **Note**: When a package is published, only dev-dependencies that specify a
   * > `version` will be included in the published crate. For most use cases,
   * > dev-dependencies are not needed when published, though some users (like OS
   * > packagers) may want to run tests within a crate, so providing a `version` if
   * > possible can still be beneficial.
   *
   */
  'dev-dependencies'?: {
    [k: string]: Dependency | undefined;
  };
  dev_dependencies?: {
    [k: string]: Dependency | undefined;
  };
  /**
   * You can depend on other Cargo-based crates for use in your build scripts.
   * Dependencies are declared through the `build-dependencies` section of the
   * manifest:
   *
   * ```toml
   * [build-dependencies]
   * cc = "1.0.3"
   * ```
   *
   * The build script **does not** have access to the dependencies listed
   * in the `dependencies` or `dev-dependencies` section. Build
   * dependencies will likewise not be available to the package itself
   * unless listed under the `dependencies` section as well. A package
   * itself and its build script are built separately, so their
   * dependencies need not coincide. Cargo is kept simpler and cleaner by
   * using independent dependencies for independent purposes.
   */
  'build-dependencies'?: {
    [k: string]: Dependency | undefined;
  };
  build_dependencies?: {
    [k: string]: Dependency | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface Lints1 {
  rust?: RustCompilerLints;
  rustdoc?: RustdocLints;
  clippy?: ClippyLints;
  cargo?: CargoLints;
  /**
   * Tool lint settings
   */
  [k: string]:
    | {
        [k: string]: Lint4 | undefined;
      }
    | RustCompilerLints
    | RustdocLints
    | ClippyLints
    | CargoLints
    | undefined;
}
export interface OverrideTheDependencyOnCratesIo {
  [k: string]: Dependency | undefined;
}
/**
 * Profiles provide a way to alter the compiler settings, influencing things like optimizations and debugging symbols.
 *
 * Cargo has 4 built-in profiles: dev, release, test, and bench. It automatically chooses the profile based on which command is being run, the package and target that is being built, and command-line flags like --release.
 */
export interface Profiles {
  bench?: ProfileWithBuildOverride;
  dev?: ProfileWithBuildOverride;
  release?: ProfileWithBuildOverride;
  test?: ProfileWithBuildOverride;
  [k: string]: ProfileWithBuildOverride | undefined;
}
export interface ProfileWithBuildOverride {
  inherits?: Inherits;
  'opt-level'?: OptimizationLevel;
  debug?: DebugLevel;
  'split-debuginfo'?: SplitDebuginfo;
  strip?: Strip;
  'debug-assertions'?: DebugAssertions;
  'overflow-checks'?: OverflowChecks;
  lto?: Lto;
  panic?: Panic1;
  incremental?: Incremental;
  'codegen-units'?: CodegenUnits;
  rpath?: Rpath;
  package?: ProfilePackageOverrides;
  'build-override'?: Profile;
  [k: string]: unknown | undefined;
}
/**
 * Package-specific overrides.
 *
 * The package name is a [Package ID Spec](https://doc.rust-lang.org/cargo/reference/pkgid-spec.html), so you can
 * target individual versions of a package with syntax such as `[profile.dev.package."foo:2.1.0"]`.
 */
export interface ProfilePackageOverrides {
  [k: string]: Profile | undefined;
}
export interface Profile {
  inherits?: Inherits;
  'opt-level'?: OptimizationLevel;
  debug?: DebugLevel;
  'split-debuginfo'?: SplitDebuginfo;
  strip?: Strip;
  'debug-assertions'?: DebugAssertions;
  'overflow-checks'?: OverflowChecks;
  lto?: Lto;
  panic?: Panic1;
  incremental?: Incremental;
  'codegen-units'?: CodegenUnits;
  rpath?: Rpath;
  package?: ProfilePackageOverrides;
  'dir-name'?: string;
  [k: string]: unknown | undefined;
}
