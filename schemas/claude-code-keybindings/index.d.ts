/* eslint-disable */

/**
 * UI context where these bindings apply. Global bindings work everywhere.
 * https://code.claude.com/docs/en/keybindings
 */
export type Context =
  | 'Global'
  | 'Chat'
  | 'Autocomplete'
  | 'Confirmation'
  | 'Help'
  | 'Transcript'
  | 'HistorySearch'
  | 'Task'
  | 'ThemePicker'
  | 'Settings'
  | 'Tabs'
  | 'Attachments'
  | 'Footer'
  | 'MessageSelector'
  | 'DiffDialog'
  | 'ModelPicker'
  | 'Select'
  | 'Plugin';
/**
 * Action to trigger, command to invoke, or null to unbind a default shortcut
 */
export type BindingValue = (BuiltinAction | CommandBinding | null) | undefined;
/**
 * Built-in action identifier.
 * https://code.claude.com/docs/en/keybindings
 */
export type BuiltinAction =
  | 'app:interrupt'
  | 'app:exit'
  | 'app:toggleTodos'
  | 'app:toggleTranscript'
  | 'app:toggleTeammatePreview'
  | 'history:search'
  | 'history:previous'
  | 'history:next'
  | 'chat:cancel'
  | 'chat:cycleMode'
  | 'chat:modelPicker'
  | 'chat:thinkingToggle'
  | 'chat:submit'
  | 'chat:undo'
  | 'chat:externalEditor'
  | 'chat:stash'
  | 'chat:imagePaste'
  | 'autocomplete:accept'
  | 'autocomplete:dismiss'
  | 'autocomplete:previous'
  | 'autocomplete:next'
  | 'confirm:yes'
  | 'confirm:no'
  | 'confirm:previous'
  | 'confirm:next'
  | 'confirm:nextField'
  | 'confirm:previousField'
  | 'confirm:cycleMode'
  | 'confirm:toggleExplanation'
  | 'tabs:next'
  | 'tabs:previous'
  | 'transcript:toggleShowAll'
  | 'transcript:exit'
  | 'historySearch:next'
  | 'historySearch:accept'
  | 'historySearch:cancel'
  | 'historySearch:execute'
  | 'task:background'
  | 'theme:toggleSyntaxHighlighting'
  | 'help:dismiss'
  | 'attachments:next'
  | 'attachments:previous'
  | 'attachments:remove'
  | 'attachments:exit'
  | 'footer:next'
  | 'footer:previous'
  | 'footer:openSelected'
  | 'footer:clearSelection'
  | 'messageSelector:up'
  | 'messageSelector:down'
  | 'messageSelector:top'
  | 'messageSelector:bottom'
  | 'messageSelector:select'
  | 'diff:dismiss'
  | 'diff:previousSource'
  | 'diff:nextSource'
  | 'diff:back'
  | 'diff:viewDetails'
  | 'diff:previousFile'
  | 'diff:nextFile'
  | 'modelPicker:decreaseEffort'
  | 'modelPicker:increaseEffort'
  | 'select:next'
  | 'select:previous'
  | 'select:accept'
  | 'select:cancel'
  | 'plugin:toggle'
  | 'plugin:install'
  | 'permission:toggleDebug'
  | 'settings:search'
  | 'settings:retry';
/**
 * Command binding that executes a slash command as if typed (e.g., "command:commit", "command:help")
 */
export type CommandBinding = string;

/**
 * Keyboard shortcut configuration for Claude Code.
 * https://code.claude.com/docs/en/keybindings
 */
export interface ClaudeCodeKeybindings {
  /**
   * JSON Schema URL for editor validation
   */
  $schema?: string;
  /**
   * Documentation URL
   */
  $docs?: string;
  /**
   * Array of keybinding blocks, each scoping bindings to a UI context
   */
  bindings: KeybindingBlock[];
}
/**
 * A block of keybindings for a specific UI context
 */
export interface KeybindingBlock {
  context: Context;
  /**
   * Map of keystroke patterns to actions.
   * https://code.claude.com/docs/en/keybindings
   */
  bindings: {
    [k: string]: BindingValue | undefined;
  };
}
