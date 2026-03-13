/* eslint-disable */

export interface HttpsJsonSchemastoreOrgTizenWorkspaceJson {
  auto_gen_build_files: boolean;
  type: string;
  profile: string;
  api_version: number;
  profiles_xml_path: string;
  signing_profile: string;
  build_type: string;
  rootstrap: string;
  compiler: string;
  skip_vs_files: boolean;
  dotnet_cli_path: string;
  msbuild_path: string;
  dotnet_build_tool: string;
  tizen_net_version: string;
  tizen_net_sdk_verison: string;
  xamarin_forms_version: string;
  msbuild_tasks_version: string;
  tizen_wearable_circleui_version: string;
  tizen_opentk_version: string;
  tizen_nuixaml_version: string;
  tizen_hotreload_version: string;
  working_folder: string | null;
  chrome_path: string;
  chrome_simulator_options: string[];
  chrome_simulator_data_path: string;
  tv_simulator_path: string;
  chrome_inspector_options: string[];
  chrome_inspector_data_path: string;
  arch: string;
  opt: boolean;
  src_file_patterns: string[];
  test_file_patterns: string[];
  projects: {
    [k: string]: string[] | undefined;
  };
  [k: string]: unknown | undefined;
}
