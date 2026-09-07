/* eslint-disable */

export interface HttpsGithubComGoogleCloudPlatformCloudFoundationToolkitCliBpmetadataBlueprintMetadata {
  apiVersion?: string;
  kind?: string;
  metadata?: ResourceTypeMeta;
  spec: BlueprintMetadataSpec;
}
export interface ResourceTypeMeta {
  name?: string;
  labels?: {
    [k: string]: string | undefined;
  };
  annotations?: {
    [k: string]: string | undefined;
  };
}
export interface BlueprintMetadataSpec {
  info?: BlueprintInfo;
  content?: BlueprintContent;
  interfaces?: BlueprintInterface;
  requirements?: BlueprintRequirements;
  ui?: BlueprintUI;
}
export interface BlueprintInfo {
  title: string;
  source?: BlueprintRepoDetail;
  version?: string;
  actuationTool?: BlueprintActuationTool;
  description?: BlueprintDescription;
  icon?: string;
  deploymentDuration?: BlueprintTimeEstimate;
  costEstimate?: BlueprintCostEstimate;
  cloudProducts?: BlueprintCloudProduct[];
  quotaDetails?: BlueprintQuotaDetail[];
  author?: BlueprintAuthor;
  softwareGroups?: BlueprintSoftwareGroup[];
  supportInfo?: BlueprintSupport;
  orgPolicyChecks?: BlueprintOrgPolicyCheck[];
  singleDeployment?: boolean;
}
export interface BlueprintRepoDetail {
  repo: string;
  sourceType: string;
  dir?: string;
}
export interface BlueprintActuationTool {
  flavor?: string;
  version?: string;
}
export interface BlueprintDescription {
  tagline?: string;
  detailed?: string;
  preDeploy?: string;
  html?: string;
  eulaUrls?: string[];
  architecture?: string[];
}
export interface BlueprintTimeEstimate {
  configurationSecs?: number;
  deploymentSecs?: number;
}
export interface BlueprintCostEstimate {
  description: string;
  url: string;
}
export interface BlueprintCloudProduct {
  productId?: string;
  pageUrl: string;
  label?: string;
  isExternal?: boolean;
}
export interface BlueprintQuotaDetail {
  dynamicVariable?: string;
  resourceType: string | number;
  quotaType: {
    [k: string]: string | undefined;
  };
}
export interface BlueprintAuthor {
  title: string;
  description?: string;
  url?: string;
}
export interface BlueprintSoftwareGroup {
  type?: string | number;
  software?: BlueprintSoftware[];
}
export interface BlueprintSoftware {
  title: string;
  version?: string;
  url?: string;
  licenseUrl?: string;
}
export interface BlueprintSupport {
  description: string;
  url?: string;
  entity?: string;
  showSupportId?: boolean;
}
export interface BlueprintOrgPolicyCheck {
  policyId: string;
  requiredValues?: string[];
}
export interface BlueprintContent {
  architecture?: BlueprintArchitecture;
  diagrams?: BlueprintDiagram[];
  documentation?: BlueprintListContent[];
  subBlueprints?: BlueprintMiscContent[];
  examples?: BlueprintMiscContent[];
}
export interface BlueprintArchitecture {
  diagramUrl: string;
  description: string[];
}
export interface BlueprintDiagram {
  name: string;
  altText?: string;
  description?: string;
}
export interface BlueprintListContent {
  title: string;
  url?: string;
}
export interface BlueprintMiscContent {
  name: string;
  location?: string;
}
export interface BlueprintInterface {
  variables?: BlueprintVariable[];
  variableGroups?: BlueprintVariableGroup[];
  outputs?: BlueprintOutput[];
}
export interface BlueprintVariable {
  name?: string;
  description?: string;
  varType?: string;
  defaultValue?: unknown;
  required?: boolean;
}
export interface BlueprintVariableGroup {
  name: string;
  description?: string;
  variables?: string[];
}
export interface BlueprintOutput {
  name: string;
  description?: string;
}
export interface BlueprintRequirements {
  roles?: BlueprintRoles[];
  services?: string[];
}
export interface BlueprintRoles {
  level: string;
  roles: string[];
}
export interface BlueprintUI {
  input?: BlueprintUIInput;
  runtime?: BlueprintUIOutput;
}
export interface BlueprintUIInput {
  variables?: {
    [k: string]: DisplayVariable | undefined;
  };
  sections?: DisplaySection[];
}
export interface DisplayVariable {
  name: string;
  title: string;
  invisible?: boolean;
  tooltip?: string;
  placeholder?: string;
  regexValidation?: string;
  minItems?: number;
  maxItems?: number;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  section?: string;
  xGoogleProperty?: GooglePropertyExtension;
  validation?: string;
  subtext?: string;
  enumValueLabels?: ValueLabel[];
}
export interface GooglePropertyExtension {
  type: string | number;
  zoneProperty?: string;
  gceMachineType?: GCEMachineTypeExtension;
  gceDiskSize?: GCEDiskSizeExtension;
  gceSubnetwork?: GCESubnetworkExtension;
  gceResource?: GCEGenericResourceExtension;
  gceGpuType?: GCEGPUTypeExtension;
  gceGpuCount?: GCEGPUCountExtension;
  gceNetwork?: GCENetworkExtension;
  gceExternalIp?: GCEExternalIPExtension;
  gceIpForwarding?: GCEIPForwardingExtension;
  gceFirewall?: GCEFirewallExtension;
  gceFirewallRange?: GCEFirewallRangeExtension;
  gceZone?: GCELocationExtension;
  gceRegion?: GCELocationExtension;
  iamServiceAccount?: IAMServiceAccountExtension;
  gceDiskType?: GCEDiskTypeExtension;
}
export interface GCEMachineTypeExtension {
  minCpu?: number;
  minRamGb?: number;
  disallowCustomMachineTypes?: boolean;
  diskImageProperty?: string;
}
export interface GCEDiskSizeExtension {
  diskTypeVariable: string;
}
export interface GCESubnetworkExtension {
  networkVariable: string;
}
export interface GCEGenericResourceExtension {
  resourceVariable: string;
}
export interface GCEGPUTypeExtension {
  machineType: string;
  gpuType?: string[];
}
export interface GCEGPUCountExtension {
  machineTypeVariable: string;
}
export interface GCENetworkExtension {
  allowSharedVpcs?: boolean;
  machineTypeVariable: string;
  labels?: string[];
}
export interface GCEExternalIPExtension {
  networkVariable: string;
  type?: string | number;
  notConfigurable?: boolean;
  allowStaticIPs?: boolean;
}
export interface GCEIPForwardingExtension {
  networkVariable: string;
  notConfigurable?: boolean;
}
export interface GCEFirewallExtension {
  networkVariable: string;
}
export interface GCEFirewallRangeExtension {
  firewallVariable: string;
}
export interface GCELocationExtension {
  allowlistedZones?: string[];
  allowlistedRegions?: string[];
}
export interface IAMServiceAccountExtension {
  roles: string[];
}
export interface GCEDiskTypeExtension {
  machineTypeVariable: string;
}
export interface ValueLabel {
  label?: string;
  value?: string;
}
export interface DisplaySection {
  name: string;
  title?: string;
  tooltip?: string;
  subtext?: string;
  parent?: string;
}
export interface BlueprintUIOutput {
  outputMessage?: string;
  suggestedActions?: UIActionItem[];
  outputs?: {
    [k: string]: DisplayOutput | undefined;
  };
}
export interface UIActionItem {
  heading: string;
  description?: string;
  snippet?: string;
  showIf?: string;
}
export interface DisplayOutput {
  openInNewTab?: boolean;
  showInNotification?: boolean;
}
