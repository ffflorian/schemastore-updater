/* eslint-disable */

export type ControllerMapping = {
  service?: string;
  controller?: string;
  filter?: string;
  pattern?: string;
  invertPattern?: boolean;
  match?: string;
  order?: number;
} & ControllerMapping1;
export type ControllerMapping1 = {
  [k: string]: unknown | undefined;
};

/**
 * YAML descriptor for Enonic XP Sites.
 * https://developer.enonic.com/docs/code/stable/sites
 */
export interface HttpsJsonSchemastoreOrgEnonicXpSite800B4Json {
  kind: 'Site';
  processors?: Processor[];
  mappings?: ControllerMapping[];
  apis?: string[];
  config?: GenericValueDef;
}
export interface Processor {
  name: string;
  order?: number;
}
export interface GenericValueDef {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
