/* eslint-disable */

export type ProviderDatas = ProviderData[];
export type CasesToTest = {
  case_id?: string;
  /**
   * sleep after the case execution
   */
  sleep?: number;
  describe?: string;
  assert?: {
    [k: string]: unknown | undefined;
  };
  request_body?: RequestBody;
  provider_data?: ProviderDatas;
  set_up?: ReadyData;
  tear_down?: ReadyData1;
  [k: string]: unknown | undefined;
}[];

/**
 * a schema for auto api cases
 */
export interface Case {
  api?: ApiUrlInfo;
  template?: SetUpDataForAllRequest;
  cases?: CasesToTest;
  [k: string]: unknown | undefined;
}
export interface ApiUrlInfo {
  host?: string;
  uri?: string;
  method?: string;
  header?: string;
  [k: string]: unknown | undefined;
}
export interface SetUpDataForAllRequest {
  headers?: {
    authorization?: string;
    [k: string]: unknown | undefined;
  };
  request_body?: RequestBody;
  provider_data?: ProviderDatas;
  [k: string]: unknown | undefined;
}
export interface RequestBody {
  [k: string]: unknown | undefined;
}
/**
 * api or sql return data for later use
 */
export interface ProviderData {
  provider_type?: string;
  provider_db?: string;
  api_id?: string;
  provider_sql?: string;
  request_body?: RequestBody;
  [k: string]: unknown | undefined;
}
export interface ReadyData {
  type?: string;
  content?: string;
  [k: string]: unknown | undefined;
}
export interface ReadyData1 {
  type?: string;
  content?: string;
  [k: string]: unknown | undefined;
}
