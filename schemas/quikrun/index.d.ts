/* eslint-disable */

/**
 * Command string, fallback array, or platform-specific object
 */
export type CommandValue = SingleCommand | CommandValue[] | ShellFamilySpecific;
export type SingleCommand = string | CompileRun;

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
  linux?: SingleCommand | CommandValue[] | ShellFamilySpecific;
  /**
   * Command for macOS (Darwin)
   */
  darwin?: SingleCommand | CommandValue[] | ShellFamilySpecific;
  /**
   * Command for Windows
   */
  win?: SingleCommand | CommandValue[] | ShellFamilySpecific;
}
