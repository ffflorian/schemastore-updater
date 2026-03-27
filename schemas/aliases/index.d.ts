/* eslint-disable */

/**
 * A command of the current alias
 * https://github.com/sebglazebrook/aliases#usage
 */
export type Command = string;
/**
 * Whether to confirm a command execution of the current alias
 * https://github.com/sebglazebrook/aliases#usage
 */
export type Confirm = boolean;
/**
 * A confirmation message of the current alias
 * https://github.com/sebglazebrook/aliases#usage
 */
export type ConfirmationMessage = string;
/**
 * A conditional of the current alias
 * https://github.com/sebglazebrook/aliases#usage
 */
export type Conditional = string;
/**
 * A backout of the current alias
 * https://github.com/sebglazebrook/aliases#usage
 */
export type BackoutSeconds = number;
/**
 * Whether to display a command before execution of the current alias
 * https://github.com/sebglazebrook/aliases#usage
 */
export type Quiet = boolean;

/**
 * An alias of the current directory
 * https://github.com/sebglazebrook/aliases#usage
 */
export interface Alias {
  [k: string]: Alias1;
}
/**
 * An alias of the current directory
 * https://github.com/sebglazebrook/aliases#usage
 *
 * This interface was referenced by `Alias`'s JSON-Schema definition
 * via the `patternProperty` "^[^ ]+$".
 */
export interface Alias1 {
  command: Command;
  confirm?: Confirm;
  confirmation_message?: ConfirmationMessage;
  conditional?: Conditional;
  backout_seconds?: BackoutSeconds;
  unit_test?: Conditional;
  quiet?: Quiet;
}
