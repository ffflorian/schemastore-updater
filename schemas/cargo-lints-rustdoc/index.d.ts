/* eslint-disable */

/**
 * detects URLs that are not hyperlinks.
 */
export type BareURLs = LintLevel | DetailedLint;
/**
 * Specify the [lint level](https://doc.rust-lang.org/rustc/lints/levels.html) for a lint or lint group.
 */
export type LintLevel = 'forbid' | 'deny' | 'warn' | 'allow';
/**
 * failures in resolving intra-doc link targets.
 */
export type BrokenIntraDocLinks = LintLevel | DetailedLint;
/**
 * codeblock attribute looks a lot like a known one.
 */
export type InvalidCodeblockAttributes = LintLevel | DetailedLint;
/**
 * detects invalid HTML tags in doc comments.
 */
export type InvalidHTMLTags = LintLevel | DetailedLint;
/**
 * codeblock could not be parsed as valid Rust or is empty.
 */
export type InvalidRustCodeblocks = LintLevel | DetailedLint;
/**
 * detects crates with no crate-level documentation.
 */
export type MissingCrateLevelDocs = LintLevel | DetailedLint;
/**
 * detects publicly-exported items without code samples in their documentation.
 */
export type MissingDocCodeExamples = LintLevel | DetailedLint;
/**
 * detects code samples in docs of private items not documented by rustdoc.
 */
export type PrivateDocTests = LintLevel | DetailedLint;
/**
 * linking from a public item to a private one.
 */
export type PrivateIntraDocLinks = LintLevel | DetailedLint;
/**
 * detects redundant explicit links in doc comments.
 */
export type RedundantExplicitLinks = LintLevel | DetailedLint;
/**
 * detects unescaped backticks in doc comments.
 */
export type UnescapedBackticks = LintLevel | DetailedLint;
/**
 * The group of all rustdoc lints (`#![allow(rustdoc::all)]`).
 */
export type All = LintLevel | DetailedLint;
export type Lint = (LintLevel | DetailedLint) | undefined;

/**
 * Lint settings for rustdoc individual lints and the `all` lint.
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
  [k: string]: Lint | undefined;
}
export interface DetailedLint {
  level?: LintLevel;
  /**
   * The priority that controls which lints or [lint groups](https://doc.rust-lang.org/rustc/lints/groups.html) override other lint groups. Lower (particularly negative) numbers have lower priority, being overridden by higher numbers, and show up first on the command-line to tools like rustc.
   */
  priority?: number;
  [k: string]: unknown | undefined;
}
