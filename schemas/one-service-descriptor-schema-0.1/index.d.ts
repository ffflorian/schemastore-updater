/* eslint-disable */

export type Consumes = string[];
export type Produces = string[];

export interface ServiceDescriptor {
  description: string;
  requires: Require[];
  events: Events;
}
export interface Require {
  service: string;
  version: string;
  uses: Use[];
}
export interface Use {
  api: 'internal' | 'external' | 'integration';
  type: 'REST' | 'library';
}
export interface Events {
  produces: Consumes;
  consumes: Produces;
}
