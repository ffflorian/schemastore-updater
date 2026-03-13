/* eslint-disable */

export type Execution = {
  concurrency?:
    | {
        local?: number;
        [k: string]: unknown | undefined;
      }
    | number;
  executor?: string;
  'hold-for'?: string;
  scenario?: string;
  throughput?: {
    local?: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}[];
export type ReportingModules = 'final-stats' | 'console' | 'blazemeter' | 'junit-xml';
export type Reporting = (
  | {
      module?: ReportingModules;
      criteria?: string[];
      [k: string]: unknown | undefined;
    }[]
  | ReportingModules[]
)[];
export type Services = {
  local?: {
    metrics?: string[];
    [k: string]: unknown | undefined;
  }[];
  module?: string;
  [k: string]: unknown | undefined;
}[];
export type Executor =
  | 'ab'
  | 'apiritif'
  | 'gatling'
  | 'grinder'
  | 'jmeter'
  | 'junit'
  | 'locust'
  | 'mocha'
  | 'molotov'
  | 'newman'
  | 'nunit'
  | 'pbench'
  | 'pytest'
  | 'rspec'
  | 'selenium'
  | 'siege'
  | 'tsung'
  | 'wdio';
export type IncludedConfigs = string[];

export interface HttpsJsonSchemastoreOrgTaurusJson {
  execution?: Execution;
  reporting?: Reporting;
  services?: Services;
  modules?: Modules;
  settings?: Settings;
  'included-configs'?: IncludedConfigs;
  [k: string]: unknown | undefined;
}
export interface Modules {
  ab?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  'android-emulator'?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  apiritif?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  appium?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  blazemeter?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  capturehar?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  cloud?: {
    class?: string;
    'default-location'?: string;
    [k: string]: unknown | undefined;
  };
  console?: {
    class?: string;
    disable?: boolean;
    screen?: string;
    [k: string]: unknown | undefined;
  };
  consolidator?: {
    class?: string;
    percentiles?: number[];
    [k: string]: unknown | undefined;
  };
  'external-results-loader'?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  'final-stats'?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  final_stats?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  'functional-consolidator'?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  gatling?: {
    class?: string;
    'java-opts'?: string;
    version?: string;
    properties?: {
      'gatling.data.file.bufferSize'?: number;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  grinder?: {
    class?: string;
    properties?: {
      'grinder.useConsole'?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  'install-checker'?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  jmeter?: {
    class?: string;
    plugins?: string[];
    properties?: {
      'jmeter.save.saveservice.autoflush'?: string;
      'jmeter.save.saveservice.connect_time'?: string;
      'jmeterengine.force.system.exit'?: string;
      'summariser.name'?: string;
      [k: string]: unknown | undefined;
    };
    'protocol-handlers'?: {
      http?: string;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  junit?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  'junit-xml'?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  local?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  locust?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  mocha?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  molotov?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  monitoring?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  newman?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  nunit?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  passfail?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  pbench?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  proxy2jmx?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  pytest?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  robot?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  rspec?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  screenshoter?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  selenium?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  shellexec?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  siege?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  testng?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  tsung?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  unpacker?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  'virtual-display'?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  wdio?: {
    class?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface Settings {
  aggregator?: 'consolidator';
  'artifacts-dir'?: string;
  'check-updates'?: boolean;
  'check-interval'?: number | string;
  'default-executor'?: Executor;
  env?: {
    [k: string]: unknown | undefined;
  };
  proxy?: {
    address?: string;
    username?: string;
    password?: string;
    'ssl-cert'?: string;
    'ssl-client-cert'?: string;
    [k: string]: unknown | undefined;
  };
  verbose?: boolean;
  [k: string]: unknown | undefined;
}
