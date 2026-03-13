/* eslint-disable */

export type Url = string;
export type Name = string;
/**
 * @minItems 1
 */
export type Includes = [Text, ...Text[]];
export type Text = string;
/**
 * @minItems 1
 */
export type Variables = [
  Constant | File | Counter | RandomNumber | Javascript,
  ...(Constant | File | Counter | RandomNumber | Javascript)[]
];
export type Constant = DefinitionsVariablesGeneric & {
  value?: Text;
  [k: string]: unknown | undefined;
};
export type File = DefinitionsVariablesGeneric & {
  column_names?: [] | [string];
  is_first_line_column_names?: boolean;
  start_from_line?: number;
  delimiter?: Text1;
  path?: Text;
  scope?: 'local' | 'global' | 'unique';
  order?: 'sequential' | 'random' | 'any';
  out_of_value?: 'cycle' | 'stop_test' | 'no_value_code';
  [k: string]: unknown | undefined;
};
export type Text1 = string;
export type Counter = DefinitionsVariablesGeneric & {
  start?: number;
  end?: number;
  increment?: number;
  scope?: 'local' | 'global' | 'unique';
  out_of_value?: 'cycle' | 'stop_test' | 'no_value_code';
  [k: string]: unknown | undefined;
};
export type RandomNumber = DefinitionsVariablesGeneric & {
  min?: number;
  max?: number;
  predictable?: boolean;
  [k: string]: unknown | undefined;
};
export type Javascript = DefinitionsVariablesGeneric & {
  script?: Text;
  [k: string]: unknown | undefined;
};
/**
 * @minItems 1
 */
export type Servers = [Server, ...Server[]];
export type RootServersItemsScheme = 'http' | 'https';
export type BasicAuthentication = DefinitionsAuthenticationAuthGeneric & {
  realm?: Text;
  [k: string]: unknown | undefined;
};
export type NTLMAuthentication = DefinitionsAuthenticationAuthGenericDomain;
export type DefinitionsAuthenticationAuthGenericDomain = DefinitionsAuthenticationAuthGeneric & {
  domain?: Text;
  [k: string]: unknown | undefined;
};
/**
 * @minItems 1
 */
export type SLAProfiles = [SLAProfile, ...SLAProfile[]];
/**
 * @minItems 1
 */
export type Thresholds = [Threshold, ...Threshold[]];
export type Threshold = string;
/**
 * @minItems 1
 */
export type Populations = [Population, ...Population[]];
/**
 * @minItems 1
 */
export type Scenarios = [Scenario, ...Scenario[]];
/**
 * @minItems 1
 */
export type ScenarioPopulations = [DefinitionsScenarioPopulationsItems, ...DefinitionsScenarioPopulationsItems[]];
export type Duration = Time | Iterations;
export type Time = string;
export type Iterations = string;
export type StartAfter = Time | Text;
export type VariationPolicyStopAfterValues = Time | 'current_iteration';
export type PositiveNumber = number;
/**
 * @minItems 1
 */
export type UserPaths = [UserPath, ...UserPath[]];
/**
 * @minItems 1
 */
export type Steps = [
  {
    transaction?: ActionTransaction;
    request?: ActionHTTPSRequest;
    delay?: ActionDelay;
    think_time?: ActionThinkTime;
    javascript?: ActionJavascript;
    if?: ActionIf;
  },
  ...{
    transaction?: ActionTransaction;
    request?: ActionHTTPSRequest;
    delay?: ActionDelay;
    think_time?: ActionThinkTime;
    javascript?: ActionJavascript;
    if?: ActionIf;
  }[]
];
/**
 * @minItems 1
 */
export type Steps1 = [
  {
    transaction?: ActionTransaction;
    request?: ActionHTTPSRequest;
    delay?: ActionDelay;
    think_time?: ActionThinkTime;
    javascript?: ActionJavascript;
    if?: ActionIf;
  },
  ...{
    transaction?: ActionTransaction;
    request?: ActionHTTPSRequest;
    delay?: ActionDelay;
    think_time?: ActionThinkTime;
    javascript?: ActionJavascript;
    if?: ActionIf;
  }[]
];
export type ActionDelay = Text & string & string;
export type ActionThinkTime = Text & string & string;

export interface JSONSchemaForNeoLoadAsCodeFiles {
  $schema?: Url;
  name?: Name;
  includes?: Includes;
  variables?: Variables;
  servers?: Servers;
  sla_profiles?: SLAProfiles;
  populations?: Populations;
  scenarios?: Scenarios;
  user_paths?: UserPaths;
}
export interface DefinitionsVariablesGeneric {
  name?: Name;
  descrption?: Text;
  change_policy?: 'each_use' | 'each_request' | 'each_page' | 'each_iteration' | 'each_user';
  [k: string]: unknown | undefined;
}
export interface Server {
  name?: Text;
  host?: Text;
  scheme?: RootServersItemsScheme;
  port?: number;
  basic_authentication?: BasicAuthentication;
  ntlm_authentication?: NTLMAuthentication;
  negotiate_authentication?: BasicAuthentication;
}
export interface DefinitionsAuthenticationAuthGeneric {
  login?: Text;
  password?: Text;
  [k: string]: unknown | undefined;
}
export interface SLAProfile {
  name?: Text;
  description?: Text;
  thresholds?: Thresholds;
  [k: string]: unknown | undefined;
}
export interface Population {
  name?: Text;
  description?: Text;
  xcomments?: {
    [k: string]: unknown | undefined;
  };
  /**
   * @minItems 1
   */
  user_paths?: [
    {
      name?: Text;
      [k: string]: unknown | undefined;
    },
    ...{
      name?: Text;
      [k: string]: unknown | undefined;
    }[]
  ];
  [k: string]: unknown | undefined;
}
export interface Scenario {
  name?: Text;
  description?: Text;
  populations?: ScenarioPopulations;
  [k: string]: unknown | undefined;
}
export interface DefinitionsScenarioPopulationsItems {
  name: Text;
  constant_load?: ConstantLoad;
  rampup_load?: RampUpLoad;
  peaks_load?: PeaksLoad;
  [k: string]: unknown | undefined;
}
export interface ConstantLoad {
  duration?: Duration;
  start_after?: StartAfter;
  stop_after?: VariationPolicyStopAfterValues;
  users: number;
  rampup?: Time;
  [k: string]: unknown | undefined;
}
export interface RampUpLoad {
  duration?: Duration;
  start_after?: StartAfter;
  stop_after?: VariationPolicyStopAfterValues;
  min_users: PositiveNumber;
  max_users?: PositiveNumber;
  increment_users: number;
  increment_every: Duration;
  increment_rampup?: Time;
}
export interface PeaksLoad {
  minimum: PeakPhase;
  maximum: PeakPhase;
  start: 'minimum' | 'maximum';
  duration?: Duration;
  start_after?: StartAfter;
  step_rampup?: Text;
  stop_after?: VariationPolicyStopAfterValues;
}
export interface PeakPhase {
  users: PositiveNumber;
  duration: Duration;
  [k: string]: unknown | undefined;
}
export interface UserPath {
  name: Text;
  description?: Text;
  user_session?: 'reset_on' | 'reset_off' | 'reset_auto';
  init?: Containers;
  actions: Containers;
  end?: Containers;
  [k: string]: unknown | undefined;
}
export interface Containers {
  sla_profile?: string;
  steps: Steps;
  [k: string]: unknown | undefined;
}
export interface ActionTransaction {
  name: Text;
  description?: Text;
  steps: Steps1;
}
export interface ActionHTTPSRequest {
  url: Text;
  server?: Text;
  method?: 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'OPTIONS' | 'TRACE';
  headers?: {
    name?: string;
    value?: string;
    [k: string]: unknown | undefined;
  }[];
  sla_profile?: Text;
  body?: Text;
  extractors?: Extractor[];
  [k: string]: unknown | undefined;
}
export interface Extractor {
  name?: Text;
  from?: 'header' | 'body' | 'both';
  xpath?: Text;
  jsonpath?: Text;
  regexp?: Text;
  match_number?: number;
  template?: Text;
  decode?: 'html' | 'url';
  extract_once?: boolean;
  default?: string;
  throw_assertion_error?: boolean;
  [k: string]: unknown | undefined;
}
export interface ActionJavascript {
  name?: Text;
  description?: Text;
  script?: Text;
  [k: string]: unknown | undefined;
}
export interface ActionIf {
  name?: Text;
  description?: Text;
  conditions?: Text[];
  match?: 'any' | 'all';
  then?: Containers;
  else?: Containers;
  [k: string]: unknown | undefined;
}
