/* eslint-disable */

export type Esquio = {
  Products: Product[] | null;
  [k: string]: unknown | undefined;
} & Esquio1;
export type Product = {
  Name: string | null;
  Features: Feature[] | null;
  [k: string]: unknown | undefined;
} & Product1;
export type Feature = {
  Name: string | null;
  Enabled: boolean;
  Toggles: Toggle[] | null;
  [k: string]: unknown | undefined;
} & Feature1;
export type Toggle = {
  Type: string | null;
  Parameters: unknown;
  [k: string]: unknown | undefined;
} & Toggle1;
export type Toggle1 = {
  Type: string | null;
  Parameters: unknown;
  [k: string]: unknown | undefined;
} | null;
export type Feature1 = {
  Name: string | null;
  Enabled: boolean;
  Toggles: Toggle[] | null;
  [k: string]: unknown | undefined;
} | null;
export type Product1 = {
  Name: string | null;
  Features: Feature[] | null;
  [k: string]: unknown | undefined;
} | null;
export type Esquio1 = {
  Products: Product[] | null;
  [k: string]: unknown | undefined;
} | null;

export interface JSONSchemaForEsquioConfigurationFiles {
  Esquio: Esquio;
  [k: string]: unknown | undefined;
}
