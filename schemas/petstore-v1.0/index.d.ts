/* eslint-disable */

export interface Welcome9 {
  config?: Config;
  scenarios?: Scenario[];
  [k: string]: unknown | undefined;
}
export interface Config {
  http: HTTP;
  tls: TLS;
  plugins: Plugins;
  target: string;
  phases: ConfigPhase[];
  environments: Environments;
  processor: string;
}
export interface HTTP {
  timeout: number;
}
export interface TLS {
  rejectUnauthorized: boolean;
}
export interface Plugins {
  expect: PluginsExpect;
  'publish-metrics': PublishMetric[];
  'metrics-by-endpoint': MetricsByEndpoint;
}
export interface PluginsExpect {
  outputFormat: string;
}
export interface PublishMetric {
  type: string;
  host: string;
  port: string;
  prefix: string;
  tags: string[];
  event: Event;
}
export interface Event {
  title: string;
  send: boolean;
  status: string;
  priority: string;
  tags: string[];
}
export interface MetricsByEndpoint {
  useOnlyRequestNames: boolean;
}
export interface ConfigPhase {
  duration: number;
  arrivalRate: number;
  name: string;
}
export interface Environments {
  dev: Dev;
  qa: Dev;
}
export interface Dev {
  target: string;
  phases: DevPhase[];
}
export interface DevPhase {
  duration: number;
  arrivalRate: number;
}
export interface Scenario {
  flow: Flow[];
}
export interface Flow {
  post?: Post;
  get?: Get;
  delete?: Delete;
  function?: string;
}
export interface Post {
  url: string;
  name: string;
  headers: PostHeaders;
  json: JSON;
  expect: ExpectElement[];
  capture?: Capture[];
}
export interface PostHeaders {
  accept: string;
  'Content-Type': string;
}
export interface JSON {
  photoUrls?: string[];
  name?: string;
  id: number;
  category?: Category;
  tags?: Category[];
  status?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  userStatus?: number;
}
export interface Category {
  name: string;
  id: number;
}
export interface ExpectElement {
  statusCode: number;
}
export interface Capture {
  as: string;
  json: string;
}
export interface Get {
  url: string;
  name: string;
  headers: GetHeaders;
  expect: ExpectElement[];
  qs?: Qs;
}
export interface GetHeaders {
  contentType?: string;
  accept: string;
}
export interface Qs {
  username: string;
  password: string;
}
export interface Delete {
  url: string;
  name: string;
  headers: DeleteHeaders;
  expect: ExpectElement[];
}
export interface DeleteHeaders {
  contentType: string;
  accept: string;
  api_key: string;
}
