/* eslint-disable */

export type ControllerMapping = {
  [k: string]: unknown | undefined;
} & {
  service?: string;
  controller?: string;
  filter?: string;
  pattern?: string;
  invertPattern?: boolean;
  match?: string;
  order?: number;
};

/**
 * YAML descriptor for Enonic XP Sites.
 * https://developer.enonic.com/docs/code/stable/sites
 */
export interface HttpsJsonSchemastoreOrgEnonicXpSite800Json {
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
