/* eslint-disable */

export interface AiderCLIOptionsSchema {
  /**
   * Use gpt-4-0613 model for the main chat. Default: false
   */
  '4'?: boolean;
  /**
   * Specify the model to use for the main chat. Default: None
   */
  model?: string;
  /**
   * Specify the OpenAI API key. Default: None
   */
  'openai-api-key'?: string;
  /**
   * Specify the Anthropic API key. Default: None
   */
  'anthropic-api-key'?: string;
  /**
   * Specify the api base url. Default: None
   */
  'openai-api-base'?: string;
  /**
   * Specify the OpenAI API type. Default: None
   */
  'openai-api-type'?: string;
  /**
   * Specify the OpenAI API version. Default: None
   */
  'openai-api-version'?: string;
  /**
   * Specify the OpenAI API deployment ID. Default: None
   */
  'openai-api-deployment-id'?: string;
  /**
   * Specify the OpenAI organization ID. Default: None
   */
  'openai-organization-id'?: string;
  /**
   * Set environment variables. Default: []
   */
  'set-env'?: string[];
  /**
   * Set an API key for a provider. Default: []
   */
  'api-key'?: string[];
  /**
   * List known models which match the (partial) MODEL name. Default: None
   */
  'list-models'?: string;
  /**
   * Specify a file with aider model settings for unknown models. Default: .aider.model.settings.yml
   */
  'model-settings-file'?: string;
  /**
   * Specify a file with context window and costs for unknown models. Default: .aider.model.metadata.json
   */
  'model-metadata-file'?: string;
  /**
   * Add a model alias. Default: []
   */
  alias?: string[];
  /**
   * Set the reasoning_effort API parameter. Default: None
   */
  'reasoning-effort'?: string;
  /**
   * Set the thinking token budget for models that support it. Default: None
   */
  'thinking-tokens'?: string;
  /**
   * Verify the SSL cert when connecting to models. Default: true
   */
  'verify-ssl'?: boolean;
  /**
   * Timeout in seconds for API calls. Default: None
   */
  timeout?: string;
  /**
   * Specify what edit format the LLM should use. Default: None
   */
  'edit-format'?: string;
  /**
   * Use architect edit format for the main chat. Default: None
   */
  architect?: boolean;
  /**
   * Enable/disable automatic acceptance of architect changes. Default: true
   */
  'auto-accept-architect'?: boolean;
  /**
   * Specify the model to use for commit messages and chat history summarization. Default: None
   */
  'weak-model'?: string;
  /**
   * Specify the model to use for editor tasks. Default: None
   */
  'editor-model'?: string;
  /**
   * Specify the edit format for the editor model. Default: None
   */
  'editor-edit-format'?: string;
  /**
   * Only work with models that have meta-data available. Default: true
   */
  'show-model-warnings'?: boolean;
  /**
   * Check if model accepts settings like reasoning_effort/thinking_tokens. Default: true
   */
  'check-model-accepts-settings'?: boolean;
  /**
   * Soft limit on tokens for chat history, after which summarization begins. Default: None
   */
  'max-chat-history-tokens'?: string;
  /**
   * Enable caching of prompts. Default: false
   */
  'cache-prompts'?: boolean;
  /**
   * Number of times to ping at 5min intervals to keep prompt cache warm. Default: 0
   */
  'cache-keepalive-pings'?: string;
  /**
   * Suggested number of tokens to use for repo map. Default: None
   */
  'map-tokens'?: string;
  /**
   * Control how often the repo map is refreshed. Default: auto
   */
  'map-refresh'?: string;
  /**
   * Multiplier for map tokens when no files are specified. Default: 2
   */
  'map-multiplier-no-files'?: string;
  /**
   * Specify the chat input history file. Default: .aider.input.history
   */
  'input-history-file'?: string;
  /**
   * Specify the chat history file. Default: .aider.chat.history.md
   */
  'chat-history-file'?: string;
  /**
   * Restore the previous chat history messages. Default: false
   */
  'restore-chat-history'?: boolean;
  /**
   * Log the conversation with the LLM to this file. Default: None
   */
  'llm-history-file'?: string;
  /**
   * Use colors suitable for a dark terminal background. Default: false
   */
  'dark-mode'?: boolean;
  /**
   * Use colors suitable for a light terminal background. Default: false
   */
  'light-mode'?: boolean;
  /**
   * Enable/disable pretty, colorized output. Default: true
   */
  pretty?: boolean;
  /**
   * Enable/disable streaming responses. Default: true
   */
  stream?: boolean;
  /**
   * Set the color for user input. Default: #00cc00
   */
  'user-input-color'?: string;
  /**
   * Set the color for tool output. Default: None
   */
  'tool-output-color'?: string;
  /**
   * Set the color for tool error messages. Default: #FF2222
   */
  'tool-error-color'?: string;
  /**
   * Set the color for tool warning messages. Default: #FFA500
   */
  'tool-warning-color'?: string;
  /**
   * Set the color for assistant output. Default: #0088ff
   */
  'assistant-output-color'?: string;
  /**
   * Set the color for the completion menu. Default: None
   */
  'completion-menu-color'?: string;
  /**
   * Set the background color for the completion menu. Default: None
   */
  'completion-menu-bg-color'?: string;
  /**
   * Set the color for the current item in the completion menu. Default: None
   */
  'completion-menu-current-color'?: string;
  /**
   * Set the background color for the current item in the completion menu. Default: None
   */
  'completion-menu-current-bg-color'?: string;
  /**
   * Set the markdown code theme. Default: default
   */
  'code-theme'?: string;
  /**
   * Show diffs when committing changes. Default: false
   */
  'show-diffs'?: boolean;
  /**
   * Enable/disable looking for a git repo. Default: true
   */
  git?: boolean;
  /**
   * Enable/disable adding .aider* to .gitignore. Default: true
   */
  gitignore?: boolean;
  /**
   * Specify the aider ignore file. Default: .aiderignore
   */
  aiderignore?: string;
  /**
   * Only consider files in the current subtree of the git repository. Default: false
   */
  'subtree-only'?: boolean;
  /**
   * Enable/disable auto commit of LLM changes. Default: true
   */
  'auto-commits'?: boolean;
  /**
   * Enable/disable commits when repo is found dirty. Default: true
   */
  'dirty-commits'?: boolean;
  /**
   * Attribute aider code changes in the git author name. Default: None
   */
  'attribute-author'?: boolean;
  /**
   * Attribute aider commits in the git committer name. Default: None
   */
  'attribute-committer'?: boolean;
  /**
   * Prefix commit messages with ‘aider: ‘ if aider authored the changes. Default: false
   */
  'attribute-commit-message-author'?: boolean;
  /**
   * Prefix all commit messages with ‘aider: ‘. Default: false
   */
  'attribute-commit-message-committer'?: boolean;
  /**
   * Attribute aider edits using the Co-authored-by trailer in the commit message. Default: false
   */
  'attribute-co-authored-by'?: boolean;
  /**
   * Enable/disable git pre-commit hooks with –no-verify. Default: false
   */
  'git-commit-verify'?: boolean;
  /**
   * Commit all pending changes with a suitable commit message, then exit. Default: false
   */
  commit?: boolean;
  /**
   * Specify a custom prompt for generating commit messages. Default: None
   */
  'commit-prompt'?: string;
  /**
   * Perform a dry run without modifying files. Default: false
   */
  'dry-run'?: boolean;
  /**
   * Skip the sanity check for the git repository. Default: false
   */
  'skip-sanity-check-repo'?: boolean;
  /**
   * Enable/disable watching files for ai coding comments. Default: false
   */
  'watch-files'?: boolean;
  /**
   * Lint and fix provided files, or dirty files if none provided. Default: false
   */
  lint?: boolean;
  /**
   * Specify lint commands to run for different languages. Default: []
   */
  'lint-cmd'?: string[];
  /**
   * Enable/disable automatic linting after changes. Default: true
   */
  'auto-lint'?: boolean;
  /**
   * Specify command to run tests. Default: []
   */
  'test-cmd'?: string[];
  /**
   * Enable/disable automatic testing after changes. Default: false
   */
  'auto-test'?: boolean;
  /**
   * Run tests, fix problems found and then exit. Default: false
   */
  test?: boolean;
  /**
   * Enable/disable analytics for current session. Default: None
   */
  analytics?: boolean;
  /**
   * Specify a file to log analytics events. Default: None
   */
  'analytics-log'?: string;
  /**
   * Permanently disable analytics. Default: false
   */
  'analytics-disable'?: boolean;
  /**
   * Check for updates and return status in the exit code. Default: false
   */
  'just-check-update'?: boolean;
  /**
   * Check for new aider versions on launch. Default: true
   */
  'check-update'?: boolean;
  /**
   * Show release notes on first run of new version. Default: None
   */
  'show-release-notes'?: boolean;
  /**
   * Install the latest version from the main branch. Default: false
   */
  'install-main-branch'?: boolean;
  /**
   * Upgrade aider to the latest version from PyPI. Default: false
   */
  upgrade?: boolean;
  /**
   * Show the version number and exit. Default: None
   */
  version?: boolean;
  /**
   * Specify a single message to send the LLM, process reply then exit. Default: None
   */
  message?: string;
  /**
   * Specify a file containing the message to send the LLM, process reply, then exit. Default: None
   */
  'message-file'?: string;
  /**
   * Run aider in your browser. Default: false
   */
  gui?: boolean;
  /**
   * Enable automatic copy/paste of chat between aider and web UI. Default: false
   */
  'copy-paste'?: boolean;
  /**
   * Apply the changes from the given file instead of running the chat. Default: None
   */
  apply?: string;
  /**
   * Apply clipboard contents as edits using the main model’s editor format. Default: false
   */
  'apply-clipboard-edits'?: boolean;
  /**
   * Do all startup activities then exit before accepting user input. Default: false
   */
  exit?: boolean;
  /**
   * Print the repo map and exit. Default: false
   */
  'show-repo-map'?: boolean;
  /**
   * Print the system prompts and exit. Default: false
   */
  'show-prompts'?: boolean;
  /**
   * Audio format for voice recording. Default: wav
   */
  'voice-format'?: string;
  /**
   * Specify the language for voice using ISO 639-1 code. Default: en
   */
  'voice-language'?: string;
  /**
   * Specify the input device name for voice recording. Default: None
   */
  'voice-input-device'?: string;
  /**
   * Never prompt for or attempt to install Playwright for web scraping. Default: false
   */
  'disable-playwright'?: boolean;
  /**
   * Specify a file to edit. Default: []
   */
  file?: string[];
  /**
   * Specify a read-only file. Default: []
   */
  read?: string[];
  /**
   * Use VI editing mode in the terminal. Default: false
   */
  vim?: boolean;
  /**
   * Specify the language to use in the chat. Default: None
   */
  'chat-language'?: string;
  /**
   * Always say yes to every confirmation. Default: None
   */
  'yes-always'?: boolean;
  /**
   * Enable verbose output. Default: false
   */
  verbose?: boolean;
  /**
   * Load and execute /commands from a file on launch. Default: None
   */
  load?: string;
  /**
   * Specify the encoding for input and output. Default: utf-8
   */
  encoding?: string;
  /**
   * Line endings to use when writing files. Default: platform
   */
  'line-endings'?: string;
  /**
   * Specify the config file. Default: None
   */
  config?: string;
  /**
   * Specify the .env file to load. Default: .env
   */
  'env-file'?: string;
  /**
   * Enable/disable suggesting shell commands. Default: true
   */
  'suggest-shell-commands'?: boolean;
  /**
   * Enable/disable fancy input with history and completion. Default: true
   */
  'fancy-input'?: boolean;
  /**
   * Enable/disable multi-line input mode with Meta-Enter to submit. Default: false
   */
  multiline?: boolean;
  /**
   * Enable/disable terminal bell notifications when LLM responses are ready. Default: false
   */
  notifications?: boolean;
  /**
   * Specify a command to run for notifications instead of the terminal bell. Default: None
   */
  'notifications-command'?: string;
  /**
   * Enable/disable detection and offering to add URLs to chat. Default: true
   */
  'detect-urls'?: boolean;
  /**
   * Specify which editor to use for the /editor command. Default: None
   */
  editor?: string;
  /**
   * Use claude-3-opus-20240229 model for the main chat. Default: false
   */
  opus?: boolean;
  /**
   * Use anthropic/claude-3-7-sonnet-20250219 model for the main chat. Default: false
   */
  sonnet?: boolean;
  /**
   * Use claude-3-5-haiku-20241022 model for the main chat. Default: false
   */
  haiku?: boolean;
  /**
   * Use gpt-4o-mini model for the main chat. Default: false
   */
  mini?: boolean;
  /**
   * Use deepseek/deepseek-chat model for the main chat. Default: false
   */
  deepseek?: boolean;
  /**
   * Use o1-mini model for the main chat. Default: false
   */
  'o1-mini'?: boolean;
  /**
   * Use o1-preview model for the main chat. Default: false
   */
  'o1-preview'?: boolean;
  /**
   * Use gpt-4o model for the main chat. Default: false
   */
  '4o'?: boolean;
  /**
   * Use gpt-4-1106-preview model for the main chat. Default: false
   */
  '4-turbo'?: boolean;
  /**
   * Use gpt-3.5-turbo model for the main chat. Default: false
   */
  '35turbo'?: boolean;
  [k: string]: unknown | undefined;
}
