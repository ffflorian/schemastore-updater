/* eslint-disable */

export interface JSONSchemaForES6ImportSorter {
  /**
   * The prefixes of your source imports. Ex: import sth from '@data' => '@' can considered as a sourcePrefix
   */
  sourcePrefixes?: string[];
  /**
   * The prefix of your section title
   */
  sectionPrefix?: string;
  /**
   * The names (which comes right after 'sectionPrefix') of your section title
   */
  sectionNames?: string[];
  /**
   * The sign to mark the start of import block. Default is '' - the start of the file
   */
  startImportBlockSign?: string;
  /**
   * The sign to mark the end of import block. Default is '' - the first empty line
   */
  endImportBlockSign?: string;
  /**
   * The sign to mark the end of an import statement. Default is ';'
   */
  statementTerminator?: string;
  /**
   * The command list run before sorting
   */
  preCommands?: (
    | string
    | {
        /**
         * the command you need to execute before sorting. It can be terminal command or vscode command
         */
        command: string;
        /**
         * Define the system will execute the command
         */
        system?: 'vscode' | 'terminal';
      }
  )[];
}
