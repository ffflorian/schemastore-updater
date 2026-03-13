/* eslint-disable */

export type BranchOutputArm = 'False' | 'True';
export type Arity = number | 'unbounded';
export type WasmGraphConfigConnectionOperator =
  | 'source'
  | 'map'
  | 'filter'
  | 'branch'
  | 'concatenate'
  | 'accumulate'
  | 'delay'
  | 'sink';

export interface AzureIoTOperationsWasmGraphConfig {
  connections: WasmGraphConfigConnection[];
  metadata: WasmGraphMetadata;
  moduleConfigurations?: ModuleConfiguration[];
  moduleRequirements: ModuleVersions;
  operations: WasmGraphConfigModule[];
  schemas?: SchemaConfiguration[];
}
export interface WasmGraphConfigConnection {
  from: WasmGraphConfigConnectionFromPoint;
  to: WasmGraphConfigConnectionToPoint;
}
export interface WasmGraphConfigConnectionFromPoint {
  arm?: BranchOutputArm | null;
  name: string;
  schemaName?: string | null;
}
export interface WasmGraphConfigConnectionToPoint {
  name: string;
}
export interface WasmGraphMetadata {
  $schema: string;
  description?: string | null;
  name: string;
  vendor?: string | null;
  version: string;
}
export interface ModuleConfiguration {
  name: string;
  parameters: {
    [k: string]: ConfigParameters | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface ConfigParameters {
  default?: string | null;
  description?: string | null;
  name: string;
  required?: boolean;
  schema?: string | null;
  [k: string]: unknown | undefined;
}
export interface ModuleVersions {
  apiVersion: string;
  features?: ModuleVersionFeature[] | null;
  runtimeVersion: string;
}
export interface ModuleVersionFeature {
  name: string;
  value?: string | null;
}
export interface WasmGraphConfigModule {
  arity?: Arity;
  module?: string | null;
  name: string;
  operationType: WasmGraphConfigConnectionOperator;
}
export interface SchemaConfiguration {
  format: string;
  name: string;
  schema: string;
  [k: string]: unknown | undefined;
}
