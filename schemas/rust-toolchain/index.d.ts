/* eslint-disable */

/**
 * https://rust-lang.github.io/rustup/overrides.html#the-toolchain-file
 */
export interface SchemaForRustToolchainToml {
  /**
   * A `toolchain` is a complete installation of the Rust compiler (`rustc`) and related tools (like `cargo`). A toolchain specification includes the release channel or version, and the host platform that the toolchain runs on.
   *
   *  Get more from [`Toolchains`](https://rust-lang.github.io/rustup/concepts/toolchains.html)
   */
  toolchain: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
