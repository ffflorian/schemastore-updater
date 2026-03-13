/* eslint-disable */

export type Header = string;
export type Footer = string;
export type Name = string;
export type Labels = Label[];

/**
 * Configuration for Actions Label Commenter, for posting messages triggered by labels.
 */
export interface HttpsJsonSchemastoreOrgLabelCommenterConfigJson {
  comment?: Comment;
  labels?: Labels;
  [k: string]: unknown | undefined;
}
export interface Comment {
  header?: Header;
  footer?: Footer;
  [k: string]: unknown | undefined;
}
export interface Label {
  name?: Name;
  [k: string]: unknown | undefined;
}
