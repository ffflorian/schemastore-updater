/* eslint-disable */

/**
 * YAML flow file for Maestro (mobile & web UI automation). A single file is usually two YAML documents separated by ---: (1) flow configuration, (2) command list. Assign this schema to *.flow.yaml or ** /.maestro/** /*.yaml. Official docs: https://docs.maestro.dev/
 */
export type MaestroFlow = FlowConfiguration | CommandList;
/**
 * Android package name or iOS bundle ID under test. May use ${ENV_VAR} interpolation.
 */
export type ApplicationID = string;
/**
 * For web flows, the starting URL (see Maestro web testing docs).
 */
export type WebURLUnderTest = string;
export type CommandStep = BareCommand | CommandObject;
/**
 * Shorthand step with no parameters (YAML scalar list item).
 */
export type BareCommand = string;
/**
 * Depends on the command: omitted/null, boolean, string selector, number, array of nested steps, or parameter object.
 */
export type CommandArguments = (null | boolean | number | string | CommandStep[] | ArgumentMap) | undefined;
/**
 * Commands run before the main flow body; failure fails the flow.
 */
export type CommandList = CommandStep[];

/**
 * First document: app/url, env, tags, hooks.
 */
export interface FlowConfiguration {
  appId?: ApplicationID;
  url?: WebURLUnderTest;
  /**
   * Human-readable flow name for reports.
   */
  name?: string;
  /**
   * Tags for filtering and organization.
   */
  tags?: string[];
  /**
   * Default environment variables for this flow (${VAR_NAME} in commands).
   */
  env?: {
    [k: string]: string | undefined;
  };
  onFlowStart?: CommandList;
  onFlowComplete?: CommandList;
  [k: string]: unknown | undefined;
}
/**
 * Single-key object: command name -> arguments map, string, or null.
 */
export interface CommandObject {
  [k: string]: CommandArguments | undefined;
}
/**
 * Command-specific parameters. Commands: https://docs.maestro.dev/reference/commands-available/ — Selectors: https://docs.maestro.dev/reference/selectors — Conditions (when): https://docs.maestro.dev/maestro-flows/flow-control-and-logic/conditions — runFlow: https://docs.maestro.dev/reference/commands-available/runflow — launchApp: https://docs.maestro.dev/reference/commands-available/launchapp — extendedWaitUntil: https://docs.maestro.dev/reference/commands-available/extendedwaituntil
 */
export interface ArgumentMap {
  [k: string]: unknown | undefined;
}
