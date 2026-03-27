/* eslint-disable */

export type Abstract = boolean;
export type AllowedProjects = string;
export type AnsibleVersion = number | ('2.7' | '2.8' | '2.9' | '2.10' | '2.11');
export type Attempts = number;
export type Branches = string;
export type Description = string;
export type Files = string[] | JobDependencyModel[];
export type Name = string;
export type Soft = boolean;
export type FailureUrl = string;
export type Files1 = string | string[];
export type Final = boolean;
export type IrrelevantFiles = string | string[];
export type OverrideCheckout = string;
export type Parent = string;
export type PostRun = string | string[];
export type PostTimeout = number;
export type PreRun = string | string[];
export type Provides = string[];
export type RequiredProjects = (string | RequiredProjectModel)[];
export type Requires = string[];
export type Zuul = string;
export type Roles = ZuulRoleModel[];
export type Run = string | string[];
export type Secrets = JobSecretModel | (JobSecretModel | string)[];
export type PassToParent = boolean;
export type Secret = string;
export type SemaphoreS = string | JobSemaphoreModel | (JobSemaphoreModel | unknown[]);
export type ResourcesFirst = boolean;
export type SuccessUrl = string;
export type Tags = string | string[];
export type Timeout = number;
export type Voting = boolean;
export type WorkspaceScheme = 'flat' | 'golang' | 'unique';
export type Name6 = string | string[];
export type Label = string;
export type Nodes = NodesetNodeModel[];
export type Nodes1 = string[];
export type Groups = NodesetGroupModel[];
export type Alternatives = (string | NodesetModel)[];
export type FailFast = boolean;
export type Jobs = unknown[];
export type Queue = string;
export type DefaultBranch = string;
export type MergeMode =
  | 'merge'
  | 'merge-resolve'
  | 'merge-recursive'
  | 'merge-ort'
  | 'cherry-pick'
  | 'squash-merge'
  | 'rebase';
export type Templates = string[];
export type ZuulConfigSchema = (JobEntry | NodesetEntry | ProjectEntry | ProjectTemplateEntry | SecretEntry)[];

export interface JobEntry {
  job: JobModel;
}
export interface JobModel {
  abstract?: Abstract;
  'allowed-projects'?: AllowedProjects;
  'ansible-version'?: AnsibleVersion;
  attempts?: Attempts;
  branches?: Branches;
  description?: Description;
  dependencies?: Files;
  'failure-url'?: FailureUrl;
  files?: Files1;
  final?: Final;
  'group-vars'?: GroupVars;
  'host-vars'?: HostVars;
  'irrelevant-files'?: IrrelevantFiles;
  name: Name;
  nodeset?: Nodeset;
  'override-checkout'?: OverrideCheckout;
  parent?: Parent;
  'post-run'?: PostRun;
  'post-timeout'?: PostTimeout;
  'pre-run'?: PreRun;
  provides?: Provides;
  'required-projects'?: RequiredProjects;
  requires?: Requires;
  roles?: Roles;
  run?: Run;
  secrets?: Secrets;
  semaphores?: SemaphoreS;
  'success-url'?: SuccessUrl;
  tags?: Tags;
  timeout?: Timeout;
  vars?: Vars;
  voting?: Voting;
  'workspace-scheme'?: WorkspaceScheme;
}
export interface JobDependencyModel {
  name: Name;
  soft?: Soft;
}
export interface GroupVars {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
export interface HostVars {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
export interface Nodeset {
  [k: string]: unknown | undefined;
}
export interface RequiredProjectModel {
  name: Name;
  'override-checkout'?: OverrideCheckout;
  [k: string]: unknown | undefined;
}
export interface ZuulRoleModel {
  zuul: Zuul;
}
export interface JobSecretModel {
  name: Name;
  'pass-to-parent'?: PassToParent;
  secret: Secret;
}
export interface JobSemaphoreModel {
  name: Name;
  'resources-first'?: ResourcesFirst;
}
export interface Vars {
  [k: string]: unknown | undefined;
}
export interface NodesetEntry {
  nodeset: NodesetModel;
}
export interface NodesetModel {
  name: Name;
  nodes?: Nodes;
  groups?: Groups;
  alternatives?: Alternatives;
}
export interface NodesetNodeModel {
  name: Name6;
  label: Label;
}
export interface NodesetGroupModel {
  name: Name;
  nodes: Nodes1;
}
export interface ProjectEntry {
  project: ProjectModel;
}
export interface ProjectModel {
  check?: PipelineModel;
  'default-branch'?: DefaultBranch;
  description?: Description;
  gate?: PipelineModel;
  'merge-mode'?: MergeMode;
  name?: Name;
  'periodic-weekly'?: PipelineModel;
  post?: PipelineModel;
  promote?: PipelineModel;
  queue?: Queue;
  release?: PipelineModel;
  templates?: Templates;
  'third-party-check'?: PipelineModel;
  vars?: Vars1;
}
export interface PipelineModel {
  'fail-fast'?: FailFast;
  jobs?: Jobs;
  queue?: Queue;
}
export interface Vars1 {
  [k: string]: unknown | undefined;
}
export interface ProjectTemplateEntry {
  'project-template': ProjectTemplateModel;
}
export interface ProjectTemplateModel {
  check?: PipelineModel;
  'default-branch'?: DefaultBranch;
  description?: Description;
  gate?: PipelineModel;
  name: Name;
  'periodic-weekly'?: PipelineModel;
  post?: PipelineModel;
  promote?: PipelineModel;
  queue?: Queue;
  release?: PipelineModel;
  'third-party-check'?: PipelineModel;
  vars?: Vars2;
}
export interface Vars2 {
  [k: string]: unknown | undefined;
}
export interface SecretEntry {
  secret: SecretModel;
}
export interface SecretModel {
  data: Data;
  name: Name;
}
export interface Data {
  [k: string]: unknown | undefined;
}
