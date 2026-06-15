/* eslint-disable */

/**
 * JSON Schema reference for editor autocomplete and validation.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type SchemaReference = string;
/**
 * Human-readable explanation of the dependency.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type Description = string;
/**
 * Connection type for the dependency. The currently documented MCP transport is streamable_http.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type Transport = string;
/**
 * Dependency category. The currently documented value is mcp.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type Type = string;
/**
 * Dependency server URL.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type Url = string;
/**
 * Identifier of the tool or dependency.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type Value = string;
/**
 * External tools the skill depends on.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type Tools = ToolDependency[];
/**
 * Hex color used for UI accents, such as badges.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type BrandColor = string;
/**
 * Default prompt snippet inserted when invoking the skill.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type DefaultPrompt = string;
/**
 * Human-facing skill name shown in UI skill lists and chips.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type DisplayName = string;
/**
 * Path to a large icon asset, relative to the skill directory.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type LargeIcon = string;
/**
 * Path to a small icon asset, relative to the skill directory.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type SmallIcon = string;
/**
 * Human-facing short description for quick scanning.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type ShortDescription = string;
/**
 * When false, Codex will not implicitly invoke the skill based on the user prompt. Explicit $skill invocation still works.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export type AllowImplicitInvocation = boolean;

/**
 * Metadata for OpenAI Codex skills.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export interface CodexSkillMetadata {
  $schema?: SchemaReference;
  dependencies?: Dependencies;
  interface?: Interface;
  policy?: Policy;
  [k: string]: unknown | undefined;
}
/**
 * Tool dependencies used by the skill.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export interface Dependencies {
  tools?: Tools;
  [k: string]: unknown | undefined;
}
/**
 * External tool dependency declaration.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export interface ToolDependency {
  description?: Description;
  transport?: Transport;
  type: Type;
  url?: Url;
  value: Value;
  [k: string]: unknown | undefined;
}
/**
 * UI metadata shown by Codex clients.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export interface Interface {
  brand_color?: BrandColor;
  default_prompt?: DefaultPrompt;
  display_name?: DisplayName;
  icon_large?: LargeIcon;
  icon_small?: SmallIcon;
  short_description?: ShortDescription;
  [k: string]: unknown | undefined;
}
/**
 * Skill invocation policy.
 * https://developers.openai.com/codex/skills#optional-metadata
 */
export interface Policy {
  allow_implicit_invocation?: AllowImplicitInvocation;
  [k: string]: unknown | undefined;
}
