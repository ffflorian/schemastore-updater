/* eslint-disable */

export type Esquio = {
  Products: Product[] | null;
  [k: string]: unknown | undefined;
} | null;
export type Product = {
  Name: string | null;
  Features: Feature[] | null;
  [k: string]: unknown | undefined;
} | null;
export type Feature = {
  Name: string | null;
  Enabled: boolean;
  Toggles: Toggle[] | null;
  [k: string]: unknown | undefined;
} | null;
export type Toggle = {
  Type: string | null;
  Parameters: unknown;
  [k: string]: unknown | undefined;
} | null;

export interface JSONSchemaForEsquioConfigurationFiles {
  Esquio: Esquio;
  [k: string]: unknown | undefined;
}
