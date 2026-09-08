/* eslint-disable */

export type Active = 'ALWAYS' | 'NEVER' | 'RELEASE' | 'PRERELEASE' | 'RELEASE_PRERELEASE' | 'SNAPSHOT';
export type Authorization = 'NONE' | 'BASIC' | 'BEARER';
export type Method = 'PUT' | 'POST';
export type MimeType = 'TEXT' | 'HTML';
export type Transport = 'SMTP' | 'SMTPS';
export type Command1 = 'MAJOR' | 'MINOR';
export type DistributionType =
  'BINARY' | 'FLAT_BINARY' | 'JAVA_BINARY' | 'JLINK' | 'SINGLE_JAR' | 'NATIVE_IMAGE' | 'NATIVE_PACKAGE';
export type Format1 = 'ZIP' | 'TAR' | 'TAR_BZ2' | 'TAR_GZ' | 'TAR_XZ' | 'TAR_ZST' | 'TBZ2' | 'TGZ' | 'TXZ';
export type TarMode = 'GNU' | 'POSIX' | 'ERROR' | 'TRUNCATE';
export type Stereotype = 'NONE' | 'CLI' | 'DESKTOP' | 'WEB' | 'MOBILE';
export type Format2 = 'JSON' | 'XML' | 'PROTOBUF';
export type Format3 = 'SYFT_JSON' | 'CYCLONEDX_XML' | 'CYCLONEDX_JSON' | 'GITHUB_JSON' | 'SPDX_JSON' | 'TABLE' | 'TEXT';
export type Algorithm =
  | 'MD2'
  | 'MD5'
  | 'RMD160'
  | 'SHA_1'
  | 'SHA_256'
  | 'SHA_384'
  | 'SHA_512'
  | 'SHA3_224'
  | 'SHA3_256'
  | 'SHA3_384'
  | 'SHA3_512';
export type Type1 = 'SOURCE' | 'THUMBNAIL';
export type Runtime = 'FREEDESKTOP' | 'GNOME' | 'KDE' | 'ELEMENTARY';
export type Format4 = 'DOCKER' | 'OCI';
export type Mode1 = 'INTERACTIVE' | 'SILENT' | 'SILENT_WITH_PROGRESS';
export type Scope = 'USER' | 'MACHINE';
export type Type2 = 'MSIX' | 'MSI' | 'APPX' | 'EXE' | 'ZIP' | 'INNO' | 'NULLSOFT' | 'WIX' | 'BURN' | 'PWA';
export type UpgradeBehavior = 'INSTALL' | 'UNINSTALL_PREVIOUS';
export type Shell = 'BASH' | 'SH' | 'CMD' | 'PWSH' | 'POWERSHELL';
export type Type3 = 'SEMVER' | 'CALVER' | 'CHRONVER' | 'JAVA_RUNTIME' | 'JAVA_MODULE' | 'CUSTOM';
export type Sort = 'ASC' | 'DESC';
export type Apply = 'NEVER' | 'ALWAYS' | 'WARN' | 'FORCE';
export type UpdateSection = 'TITLE' | 'BODY' | 'ASSETS';
export type Mode2 = 'MEMORY' | 'FILE' | 'COMMAND' | 'COSIGN';
export type FileType =
  | 'ASC'
  | 'BAT'
  | 'CMD'
  | 'DEB'
  | 'DMG'
  | 'EXE'
  | 'JAR'
  | 'MSI'
  | 'NUGET'
  | 'PKG'
  | 'PS1'
  | 'RPM'
  | 'SH'
  | 'SIG'
  | 'TAR'
  | 'TAR_BZ2'
  | 'TAR_GZ'
  | 'TAR_XZ'
  | 'TAR_ZST'
  | 'TBZ2'
  | 'TGZ'
  | 'TXZ'
  | 'ZIP'
  | 'ZST';

/**
 * JReleaser 1.9.0
 */
export interface HttpsJsonSchemastoreOrgJreleaser190Json {
  announce?: Announce;
  assemble?: Assemble;
  catalog?: Catalog;
  checksum?: Checksum;
  deploy?: Deploy;
  distributions?: DistributionMap &
    ({
      [k: string]: Distribution | undefined;
    } | null);
  download?: Download;
  environment?: Environment;
  extensions?: ExtensionMap &
    ({
      [k: string]: Extension | undefined;
    } | null);
  files?: Files;
  hooks?: Hooks;
  packagers?: Packagers;
  platform?: Platform;
  project?: Project;
  release?: Release;
  signing?: Signing;
  upload?: Upload;
}
export interface Announce {
  active?: Active;
  article?: ArticleAnnouncer;
  bluesky?: BlueskyAnnouncer;
  configuredHttp?: HttpAnnouncers;
  configuredWebhooks?: WebhooksAnnouncer;
  discord?: DiscordAnnouncer & {
    [k: string]: unknown | undefined;
  };
  discourse?: DiscourseAnnouncer;
  discussions?: DiscussionsAnnouncer;
  gitter?: GitterAnnouncer & {
    [k: string]: unknown | undefined;
  };
  googleChat?: GoogleChatAnnouncer & {
    [k: string]: unknown | undefined;
  };
  http?: HttpAnnouncerMap &
    ({
      [k: string]: HttpAnnouncer | undefined;
    } | null);
  linkedin?: LinkedinAnnouncer;
  mail?: SmtpAnnouncer & {
    [k: string]: unknown | undefined;
  };
  mastodon?: MastodonAnnouncer;
  mattermost?: MattermostAnnouncer & {
    [k: string]: unknown | undefined;
  };
  openCollective?: OpenCollectiveAnnouncer;
  sdkman?: SdkmanAnnouncer;
  slack?: SlackAnnouncer;
  smtp?: SmtpAnnouncer;
  teams?: TeamsAnnouncer & {
    [k: string]: unknown | undefined;
  };
  telegram?: TelegramAnnouncer;
  twitter?: TwitterAnnouncer;
  webhooks?: WebhookAnnouncerMap &
    ({
      [k: string]: WebhookAnnouncer | undefined;
    } | null);
  zulip?: ZulipAnnouncer;
}
export interface ArticleAnnouncer {
  active?: Active;
  commitAuthor?: CommitAuthor;
  connectTimeout?: number;
  extraProperties?: Properties;
  files?: Artifact[];
  readTimeout?: number;
  repository?: Repository;
  templateDirectory?: string;
}
export interface CommitAuthor {
  email?: string;
  name?: string;
}
export interface Properties {
  [k: string]: string | undefined;
}
export interface Artifact {
  active?: Active;
  extraProperties?: Properties;
  path?: string;
  platform?: string;
  transform?: string;
}
export interface Repository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface BlueskyAnnouncer {
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  handle?: string;
  host?: string;
  password?: string;
  readTimeout?: number;
  status?: string;
  statusTemplate?: string;
  statuses?: string[];
}
export interface HttpAnnouncers {
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  http?: HttpAnnouncerMap &
    ({
      [k: string]: HttpAnnouncer | undefined;
    } | null);
  readTimeout?: number;
}
export interface HttpAnnouncerMap {
  [k: string]: HttpAnnouncer | undefined;
}
/**
 * This interface was referenced by `HttpAnnouncerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface HttpAnnouncer {
  active?: Active;
  authorization?: Authorization;
  bearerKeyword?: string;
  connectTimeout?: number;
  extraProperties?: Properties;
  headers?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  method?: Method;
  password?: string;
  payload?: string;
  payloadTemplate?: string;
  readTimeout?: number;
  url?: string;
  username?: string;
}
export interface StringProperties {
  [k: string]: string | undefined;
}
export interface WebhooksAnnouncer {
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  readTimeout?: number;
  webhooks?: WebhookAnnouncerMap &
    ({
      [k: string]: WebhookAnnouncer | undefined;
    } | null);
}
export interface WebhookAnnouncerMap {
  [k: string]: WebhookAnnouncer | undefined;
}
/**
 * This interface was referenced by `WebhookAnnouncerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface WebhookAnnouncer {
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  message?: string;
  messageProperty?: string;
  messageTemplate?: string;
  readTimeout?: number;
  structuredMessage?: boolean;
  webhook?: string;
}
export interface DiscordAnnouncer {
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  message?: string;
  messageTemplate?: string;
  readTimeout?: number;
  webhook?: string;
}
export interface DiscourseAnnouncer {
  active?: Active;
  apiKey?: string;
  categoryName?: string;
  connectTimeout?: number;
  extraProperties?: Properties;
  host?: string;
  message?: string;
  messageTemplate?: string;
  readTimeout?: number;
  title?: string;
  username?: string;
}
export interface DiscussionsAnnouncer {
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  message?: string;
  messageTemplate?: string;
  organization?: string;
  readTimeout?: number;
  team?: string;
  title?: string;
}
export interface GitterAnnouncer {
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  message?: string;
  messageTemplate?: string;
  readTimeout?: number;
  webhook?: string;
}
export interface GoogleChatAnnouncer {
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  message?: string;
  messageTemplate?: string;
  readTimeout?: number;
  webhook?: string;
}
export interface LinkedinAnnouncer {
  accessToken?: string;
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  message?: string;
  messageTemplate?: string;
  owner?: string;
  readTimeout?: number;
  subject?: string;
}
export interface SmtpAnnouncer {
  active?: Active;
  auth?: boolean;
  bcc?: string;
  cc?: string;
  connectTimeout?: number;
  extraProperties?: Properties;
  from?: string;
  host?: string;
  message?: string;
  messageTemplate?: string;
  mimeType?: MimeType;
  password?: string;
  port?: number;
  properties?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  readTimeout?: number;
  subject?: string;
  to?: string;
  transport?: Transport;
  username?: string;
}
export interface MastodonAnnouncer {
  accessToken?: string;
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  host?: string;
  readTimeout?: number;
  status?: string;
  statusTemplate?: string;
  statuses?: string[];
}
export interface MattermostAnnouncer {
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  message?: string;
  messageTemplate?: string;
  readTimeout?: number;
  structuredMessage?: boolean;
  webhook?: string;
}
export interface OpenCollectiveAnnouncer {
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  host?: string;
  message?: string;
  messageTemplate?: string;
  readTimeout?: number;
  slug?: string;
  title?: string;
  token?: string;
}
export interface SdkmanAnnouncer {
  active?: Active;
  candidate?: string;
  command?: Command1;
  connectTimeout?: number;
  consumerKey?: string;
  consumerToken?: string;
  downloadUrl?: string;
  extraProperties?: Properties;
  readTimeout?: number;
  releaseNotesUrl?: string;
}
export interface SlackAnnouncer {
  active?: Active;
  channel?: string;
  connectTimeout?: number;
  extraProperties?: Properties;
  message?: string;
  messageTemplate?: string;
  readTimeout?: number;
  token?: string;
  webhook?: string;
}
export interface TeamsAnnouncer {
  active?: Active;
  connectTimeout?: number;
  extraProperties?: Properties;
  messageTemplate?: string;
  readTimeout?: number;
  webhook?: string;
}
export interface TelegramAnnouncer {
  active?: Active;
  chatId?: string;
  connectTimeout?: number;
  extraProperties?: Properties;
  message?: string;
  messageTemplate?: string;
  readTimeout?: number;
  token?: string;
}
export interface TwitterAnnouncer {
  accessToken?: string;
  accessTokenSecret?: string;
  active?: Active;
  connectTimeout?: number;
  consumerKey?: string;
  consumerSecret?: string;
  extraProperties?: Properties;
  readTimeout?: number;
  status?: string;
  statusTemplate?: string;
  statuses?: string[];
}
export interface ZulipAnnouncer {
  account?: string;
  active?: Active;
  apiHost?: string;
  apiKey?: string;
  channel?: string;
  connectTimeout?: number;
  extraProperties?: Properties;
  message?: string;
  messageTemplate?: string;
  readTimeout?: number;
  subject?: string;
}
export interface Assemble {
  active?: Active;
  archive?: ArchiveAssemblerMap &
    ({
      [k: string]: ArchiveAssembler | undefined;
    } | null);
  javaArchive?: JavaArchiveAssemblerMap &
    ({
      [k: string]: JavaArchiveAssembler | undefined;
    } | null);
  jlink?: JlinkAssemblerMap &
    ({
      [k: string]: JlinkAssembler | undefined;
    } | null);
  jpackage?: JpackageAssemblerMap &
    ({
      [k: string]: JpackageAssembler | undefined;
    } | null);
  nativeImage?: NativeImageAssemblerMap &
    ({
      [k: string]: NativeImageAssembler | undefined;
    } | null);
}
export interface ArchiveAssemblerMap {
  [k: string]: ArchiveAssembler | undefined;
}
/**
 * This interface was referenced by `ArchiveAssemblerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface ArchiveAssembler {
  active?: Active;
  archiveName?: string;
  artifacts?: Artifact[];
  attachPlatform?: boolean;
  distributionType?: DistributionType;
  exported?: boolean;
  extraProperties?: Properties;
  fileSets?: FileSet[];
  files?: Glob[];
  formats?: Format1[];
  options?: ArchiveOptions;
  platform?: Platform;
  skipTemplates?: string[];
  stereotype?: Stereotype;
  templateDirectory?: string;
}
export interface FileSet {
  active?: Active;
  excludes?: string[];
  extraProperties?: Properties;
  failOnMissingInput?: boolean;
  includes?: string[];
  input?: string;
  output?: string;
  platform?: string;
}
export interface Glob {
  active?: Active;
  directory?: string;
  extraProperties?: Properties;
  pattern?: string;
  platform?: string;
}
export interface ArchiveOptions {
  bigNumberMode?: TarMode;
  longFileMode?: TarMode;
  timestamp?: string;
}
export interface Platform {
  replacements?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
}
export interface JavaArchiveAssemblerMap {
  [k: string]: JavaArchiveAssembler | undefined;
}
/**
 * This interface was referenced by `JavaArchiveAssemblerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface JavaArchiveAssembler {
  active?: Active;
  archiveName?: string;
  artifacts?: Artifact[];
  executable?: Executable;
  exported?: boolean;
  extraProperties?: Properties;
  fileSets?: FileSet[];
  files?: Glob[];
  formats?: Format1[];
  jars?: Glob[];
  java?: Java1;
  mainJar?: Artifact;
  options?: ArchiveOptions;
  platform?: Platform;
  skipTemplates?: string[];
  stereotype?: Stereotype;
  templateDirectory?: string;
}
export interface Executable {
  name?: string;
  unixExtension?: string;
  windowsExtension?: string;
}
export interface Java1 {
  mainClass?: string;
  mainModule?: string;
  options?: string[];
}
export interface JlinkAssemblerMap {
  [k: string]: JlinkAssembler | undefined;
}
/**
 * This interface was referenced by `JlinkAssemblerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface JlinkAssembler {
  active?: Active;
  additionalModuleNames?: string[];
  archiveFormat?: Format1;
  args?: string[];
  artifacts?: Artifact[];
  copyJars?: boolean;
  executable?: string;
  exported?: boolean;
  extraProperties?: Properties;
  fileSets?: FileSet[];
  files?: Glob[];
  imageName?: string;
  imageNameTransform?: string;
  jars?: Glob[];
  java?: Java2;
  javaArchive?: JavaArchive;
  jdeps?: Jdeps;
  jdk?: Artifact;
  mainJar?: Artifact;
  moduleNames?: string[];
  options?: ArchiveOptions;
  platform?: Platform;
  skipTemplates?: string[];
  stereotype?: Stereotype;
  targetJdks?: Artifact[];
  templateDirectory?: string;
}
export interface Java2 {
  artifactId?: string;
  enabled?: boolean;
  extraProperties?: Properties;
  groupId?: string;
  mainClass?: string;
  mainModule?: string;
  multiProject?: boolean;
  version?: string;
}
export interface JavaArchive {
  libDirectoryName?: string;
  mainJarName?: string;
  path?: string;
}
export interface Jdeps {
  enabled?: boolean;
  ignoreMissingDeps?: boolean;
  multiRelease?: string;
  targets?: string[];
  useWildcardInPath?: boolean;
}
export interface JpackageAssemblerMap {
  [k: string]: JpackageAssembler | undefined;
}
/**
 * This interface was referenced by `JpackageAssemblerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface JpackageAssembler {
  active?: Active;
  applicationPackage?: ApplicationPackage;
  artifacts?: Artifact[];
  attachPlatform?: boolean;
  executable?: string;
  exported?: boolean;
  extraProperties?: Properties;
  fileSets?: FileSet[];
  files?: Glob[];
  jars?: Glob[];
  java?: Java2;
  jlink?: string;
  launcher?: Launcher;
  linux?: Linux1;
  mainJar?: Artifact;
  osx?: Osx1;
  platform?: Platform;
  runtimeImages?: Artifact[];
  skipTemplates?: string[];
  stereotype?: Stereotype;
  templateDirectory?: string;
  verbose?: boolean;
  windows?: Windows1;
}
export interface ApplicationPackage {
  appName?: string;
  appVersion?: string;
  copyright?: string;
  fileAssociations?: string[];
  licenseFile?: string;
  vendor?: string;
}
export interface Launcher {
  arguments?: string[];
  javaOptions?: string[];
  launchers?: string[];
}
export interface Linux1 {
  appCategory?: string;
  appName?: string;
  appRelease?: string;
  icon?: string;
  installDir?: string;
  jdk?: Artifact;
  license?: string;
  maintainer?: string;
  menuGroup?: string;
  packageDeps?: string[];
  packageName?: string;
  platform?: string;
  resourceDir?: string;
  shortcut?: boolean;
  types?: string[];
  validTypes?: string[];
}
export interface Osx1 {
  appName?: string;
  icon?: string;
  installDir?: string;
  jdk?: Artifact;
  packageIdentifier?: string;
  packageName?: string;
  packageSigningPrefix?: string;
  platform?: string;
  resourceDir?: string;
  sign?: boolean;
  signingKeyUsername?: string;
  signingKeychain?: string;
  types?: string[];
  validTypes?: string[];
}
export interface Windows1 {
  appName?: string;
  console?: boolean;
  dirChooser?: boolean;
  icon?: string;
  installDir?: string;
  jdk?: Artifact;
  menu?: boolean;
  menuGroup?: string;
  perUserInstall?: boolean;
  platform?: string;
  resourceDir?: string;
  shortcut?: boolean;
  types?: string[];
  upgradeUuid?: string;
  validTypes?: string[];
}
export interface NativeImageAssemblerMap {
  [k: string]: NativeImageAssembler | undefined;
}
/**
 * This interface was referenced by `NativeImageAssemblerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface NativeImageAssembler {
  active?: Active;
  archiveFormat?: Format1;
  args?: string[];
  artifacts?: Artifact[];
  components?: string[];
  executable?: string;
  exported?: boolean;
  extraProperties?: Properties;
  fileSets?: FileSet[];
  files?: Glob[];
  graal?: Artifact;
  graalJdks?: Artifact[];
  imageName?: string;
  imageNameTransform?: string;
  jars?: Glob[];
  java?: Java2;
  linux?: Linux2;
  mainJar?: Artifact;
  options?: ArchiveOptions;
  osx?: Osx2;
  platform?: Platform;
  skipTemplates?: string[];
  stereotype?: Stereotype;
  templateDirectory?: string;
  upx?: Upx;
  windows?: Windows2;
}
export interface Linux2 {
  args?: string[];
  platform?: string;
}
export interface Osx2 {
  args?: string[];
  platform?: string;
}
export interface Upx {
  active?: Active;
  args?: string[];
  version?: string;
}
export interface Windows2 {
  args?: string[];
  platform?: string;
}
export interface Catalog {
  active?: Active;
  sbom?: Sbom;
  slsa?: SlsaCataloger;
}
export interface Sbom {
  active?: Active;
  cyclonedx?: CyclonedxSbomCataloger;
  syft?: SyftSbomCataloger;
}
export interface CyclonedxSbomCataloger {
  active?: Active;
  distributions?: boolean;
  extraProperties?: Properties;
  files?: boolean;
  formats?: Format2[];
  pack?: Pack;
  version?: string;
}
export interface Pack {
  enabled?: boolean;
  name?: string;
}
export interface SyftSbomCataloger {
  active?: Active;
  distributions?: boolean;
  extraProperties?: Properties;
  files?: boolean;
  formats?: Format3[];
  pack?: Pack;
  version?: string;
}
export interface SlsaCataloger {
  active?: Active;
  artifacts?: boolean;
  attestationName?: string;
  deployables?: boolean;
  extraProperties?: Properties;
  files?: boolean;
}
export interface Checksum {
  algorithms?: Algorithm[];
  artifacts?: boolean;
  files?: boolean;
  individual?: boolean;
  name?: string;
}
export interface Deploy {
  active?: Active;
  maven?: Maven;
}
export interface Maven {
  active?: Active;
  artifactory?: ArtifactoryMavenDeployerMap &
    ({
      [k: string]: ArtifactoryMavenDeployer | undefined;
    } | null);
  azure?: AzureMavenDeployerMap &
    ({
      [k: string]: AzureMavenDeployer | undefined;
    } | null);
  gitea?: GiteaMavenDeployerMap &
    ({
      [k: string]: GiteaMavenDeployer | undefined;
    } | null);
  github?: GithubMavenDeployerMap &
    ({
      [k: string]: GithubMavenDeployer | undefined;
    } | null);
  gitlab?: GitlabMavenDeployerMap &
    ({
      [k: string]: GitlabMavenDeployer | undefined;
    } | null);
  nexus2?: Nexus2MavenDeployerMap &
    ({
      [k: string]: Nexus2MavenDeployer | undefined;
    } | null);
  pomchecker?: Pomchecker;
}
export interface ArtifactoryMavenDeployerMap {
  [k: string]: ArtifactoryMavenDeployer | undefined;
}
/**
 * This interface was referenced by `ArtifactoryMavenDeployerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface ArtifactoryMavenDeployer {
  active?: Active;
  applyMavenCentralRules?: boolean;
  artifactOverrides?: ArtifactOverride[];
  authorization?: Authorization;
  checksums?: boolean;
  connectTimeout?: number;
  extraProperties?: Properties;
  javadocJar?: boolean;
  password?: string;
  readTimeout?: number;
  sign?: boolean;
  sourceJar?: boolean;
  stagingRepositories?: string[];
  url?: string;
  username?: string;
  verifyPom?: boolean;
}
export interface ArtifactOverride {
  artifactId?: string;
  groupId?: string;
  javadocJar?: boolean;
  sourceJar?: boolean;
}
export interface AzureMavenDeployerMap {
  [k: string]: AzureMavenDeployer | undefined;
}
/**
 * This interface was referenced by `AzureMavenDeployerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface AzureMavenDeployer {
  active?: Active;
  applyMavenCentralRules?: boolean;
  artifactOverrides?: ArtifactOverride[];
  authorization?: Authorization;
  checksums?: boolean;
  connectTimeout?: number;
  extraProperties?: Properties;
  javadocJar?: boolean;
  password?: string;
  readTimeout?: number;
  sign?: boolean;
  sourceJar?: boolean;
  stagingRepositories?: string[];
  url?: string;
  username?: string;
  verifyPom?: boolean;
}
export interface GiteaMavenDeployerMap {
  [k: string]: GiteaMavenDeployer | undefined;
}
/**
 * This interface was referenced by `GiteaMavenDeployerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface GiteaMavenDeployer {
  active?: Active;
  applyMavenCentralRules?: boolean;
  artifactOverrides?: ArtifactOverride[];
  authorization?: Authorization;
  checksums?: boolean;
  connectTimeout?: number;
  extraProperties?: Properties;
  javadocJar?: boolean;
  password?: string;
  readTimeout?: number;
  sign?: boolean;
  sourceJar?: boolean;
  stagingRepositories?: string[];
  url?: string;
  username?: string;
  verifyPom?: boolean;
}
export interface GithubMavenDeployerMap {
  [k: string]: GithubMavenDeployer | undefined;
}
/**
 * This interface was referenced by `GithubMavenDeployerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface GithubMavenDeployer {
  active?: Active;
  applyMavenCentralRules?: boolean;
  artifactOverrides?: ArtifactOverride[];
  authorization?: Authorization;
  checksums?: boolean;
  connectTimeout?: number;
  extraProperties?: Properties;
  javadocJar?: boolean;
  password?: string;
  readTimeout?: number;
  repository?: string;
  sign?: boolean;
  sourceJar?: boolean;
  stagingRepositories?: string[];
  url?: string;
  username?: string;
  verifyPom?: boolean;
}
export interface GitlabMavenDeployerMap {
  [k: string]: GitlabMavenDeployer | undefined;
}
/**
 * This interface was referenced by `GitlabMavenDeployerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface GitlabMavenDeployer {
  active?: Active;
  applyMavenCentralRules?: boolean;
  artifactOverrides?: ArtifactOverride[];
  authorization?: Authorization;
  checksums?: boolean;
  connectTimeout?: number;
  extraProperties?: Properties;
  javadocJar?: boolean;
  password?: string;
  projectIdentifier?: string;
  readTimeout?: number;
  sign?: boolean;
  sourceJar?: boolean;
  stagingRepositories?: string[];
  url?: string;
  username?: string;
  verifyPom?: boolean;
}
export interface Nexus2MavenDeployerMap {
  [k: string]: Nexus2MavenDeployer | undefined;
}
/**
 * This interface was referenced by `Nexus2MavenDeployerMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface Nexus2MavenDeployer {
  active?: Active;
  applyMavenCentralRules?: boolean;
  artifactOverrides?: ArtifactOverride[];
  authorization?: Authorization;
  checksums?: boolean;
  closeRepository?: boolean;
  connectTimeout?: number;
  extraProperties?: Properties;
  javadocJar?: boolean;
  password?: string;
  readTimeout?: number;
  releaseRepository?: boolean;
  sign?: boolean;
  snapshotUrl?: string;
  sourceJar?: boolean;
  stagingRepositories?: string[];
  transitionDelay?: number;
  transitionMaxRetries?: number;
  url?: string;
  username?: string;
  verifyPom?: boolean;
}
export interface Pomchecker {
  failOnError?: boolean;
  failOnWarning?: boolean;
  version?: string;
}
export interface DistributionMap {
  [k: string]: Distribution | undefined;
}
/**
 * This interface was referenced by `DistributionMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface Distribution {
  active?: Active;
  appImage?: AppImagePackager;
  artifacts?: Artifact[];
  asdf?: AsdfPackager;
  brew?: BrewPackager;
  chocolatey?: ChocolateyPackager;
  docker?: DockerPackager;
  executable?: Executable;
  extraProperties?: Properties;
  flatpak?: FlatpakPackager;
  gofish?: GofishPackager;
  java?: Java2;
  jbang?: JbangPackager;
  jib?: JibPackager;
  macports?: MacportsPackager;
  name?: string;
  platform?: Platform;
  scoop?: ScoopPackager;
  sdkman?: SdkmanPackager;
  snap?: SnapPackager;
  spec?: SpecPackager;
  stereotype?: Stereotype;
  tags?: string[];
  type?: DistributionType;
  winget?: WingetPackager;
}
export interface AppImagePackager {
  active?: Active;
  categories?: string[];
  commitAuthor?: CommitAuthor;
  componentId?: string;
  continueOnError?: boolean;
  developerName?: string;
  downloadUrl?: string;
  extraProperties?: Properties;
  icons?: Icon[];
  repository?: AppImageRepository;
  requiresTerminal?: boolean;
  screenshots?: Screenshot[];
  skipReleases?: string[];
  skipTemplates?: string[];
  templateDirectory?: string;
}
export interface Icon {
  extraProperties?: Properties;
  height?: number;
  primary?: boolean;
  url?: string;
  width?: number;
}
export interface AppImageRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface Screenshot {
  caption?: string;
  extraProperties?: Properties;
  height?: number;
  primary?: boolean;
  type?: Type1;
  url?: string;
  width?: number;
}
export interface AsdfPackager {
  active?: Active;
  commitAuthor?: CommitAuthor;
  continueOnError?: boolean;
  downloadUrl?: string;
  extraProperties?: Properties;
  repository?: AsdfRepository;
  skipTemplates?: string[];
  templateDirectory?: string;
  toolCheck?: string;
}
export interface AsdfRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface BrewPackager {
  active?: Active;
  cask?: Cask;
  commitAuthor?: CommitAuthor;
  continueOnError?: boolean;
  dependencies?: Dependency[];
  downloadUrl?: string;
  extraProperties?: Properties;
  formulaName?: string;
  livecheck?: string[];
  multiPlatform?: boolean;
  repository?: HomebrewRepository;
  skipTemplates?: string[];
  templateDirectory?: string;
}
export interface Cask {
  appName?: string;
  appcast?: string;
  displayName?: string;
  enabled?: boolean;
  name?: string;
  pkgName?: string;
  uninstall?: CaskItem[];
  zap?: CaskItem[];
}
export interface CaskItem {
  items?: string[];
  name?: string;
}
export interface Dependency {
  key?: string;
  value?: string;
}
export interface HomebrewRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface ChocolateyPackager {
  active?: Active;
  apiKey?: string;
  commitAuthor?: CommitAuthor;
  continueOnError?: boolean;
  downloadUrl?: string;
  extraProperties?: Properties;
  iconUrl?: string;
  packageName?: string;
  packageVersion?: string;
  remoteBuild?: boolean;
  repository?: ChocolateyRepository;
  skipTemplates?: string[];
  source?: string;
  templateDirectory?: string;
  title?: string;
  username?: string;
}
export interface ChocolateyRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface DockerPackager {
  active?: Active;
  baseImage?: string;
  buildArgs?: string[];
  buildx?: Buildx;
  commitAuthor?: CommitAuthor;
  continueOnError?: boolean;
  downloadUrl?: string;
  extraProperties?: Properties;
  imageNames?: string[];
  labels?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  postCommands?: string[];
  preCommands?: string[];
  registries?: Registry1[];
  repository?: DockerRepository;
  skipTemplates?: string[];
  specs?: DockerSpecMap &
    ({
      [k: string]: DockerSpec | undefined;
    } | null);
  templateDirectory?: string;
  useLocalArtifact?: boolean;
}
export interface Buildx {
  createBuilder?: boolean;
  createBuilderFlags?: string[];
  enabled?: boolean;
  platforms?: string[];
}
export interface Registry1 {
  externalLogin?: boolean;
  password?: string;
  repositoryName?: string;
  server?: string;
  serverName?: string;
  username?: string;
}
export interface DockerRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
  versionedSubfolders?: boolean;
}
export interface DockerSpecMap {
  [k: string]: DockerSpec | undefined;
}
/**
 * This interface was referenced by `DockerSpecMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface DockerSpec {
  active?: Active;
  artifact?: Artifact;
  baseImage?: string;
  buildArgs?: string[];
  buildx?: Buildx;
  extraProperties?: Properties;
  imageNames?: string[];
  labels?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  matchers?: Properties;
  name?: string;
  postCommands?: string[];
  preCommands?: string[];
  registries?: Registry1[];
  skipTemplates?: string[];
  templateDirectory?: string;
  useLocalArtifact?: boolean;
}
export interface FlatpakPackager {
  active?: Active;
  categories?: string[];
  commitAuthor?: CommitAuthor;
  componentId?: string;
  continueOnError?: boolean;
  developerName?: string;
  downloadUrl?: string;
  extraProperties?: Properties;
  finishArgs?: string[];
  icons?: Icon[];
  repository?: FlatpakRepository;
  runtime?: Runtime;
  runtimeVersion?: string;
  screenshots?: Screenshot[];
  sdkExtensions?: string[];
  skipReleases?: string[];
  skipTemplates?: string[];
  templateDirectory?: string;
}
export interface FlatpakRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface GofishPackager {
  active?: Active;
  commitAuthor?: CommitAuthor;
  continueOnError?: boolean;
  downloadUrl?: string;
  extraProperties?: Properties;
  repository?: GofishRepository;
  skipTemplates?: string[];
  templateDirectory?: string;
}
export interface GofishRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface JbangPackager {
  active?: Active;
  alias?: string;
  commitAuthor?: CommitAuthor;
  continueOnError?: boolean;
  downloadUrl?: string;
  extraProperties?: Properties;
  repository?: JbangRepository;
  skipTemplates?: string[];
  templateDirectory?: string;
}
export interface JbangRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface JibPackager {
  active?: Active;
  baseImage?: string;
  commitAuthor?: CommitAuthor;
  continueOnError?: boolean;
  creationTime?: string;
  downloadUrl?: string;
  environment?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  exposedPorts?: string[];
  extraProperties?: Properties;
  format?: Format4;
  imageNames?: string[];
  labels?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  registries?: Registry2[];
  repository?: JibRepository;
  skipTemplates?: string[];
  specs?: JibSpecMap &
    ({
      [k: string]: JibSpec | undefined;
    } | null);
  templateDirectory?: string;
  user?: string;
  version?: string;
  volumes?: string[];
  workingDirectory?: string;
}
export interface Registry2 {
  fromPassword?: string;
  fromUsername?: string;
  name?: string;
  password?: string;
  server?: string;
  toPassword?: string;
  toUsername?: string;
  username?: string;
}
export interface JibRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
  versionedSubfolders?: boolean;
}
export interface JibSpecMap {
  [k: string]: JibSpec | undefined;
}
/**
 * This interface was referenced by `JibSpecMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface JibSpec {
  active?: Active;
  artifact?: Artifact;
  baseImage?: string;
  creationTime?: string;
  environment?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  exposedPorts?: string[];
  extraProperties?: Properties;
  format?: Format4;
  imageNames?: string[];
  labels?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  matchers?: Properties;
  name?: string;
  registries?: Registry2[];
  skipTemplates?: string[];
  templateDirectory?: string;
  user?: string;
  volumes?: string[];
  workingDirectory?: string;
}
export interface MacportsPackager {
  active?: Active;
  categories?: string[];
  commitAuthor?: CommitAuthor;
  continueOnError?: boolean;
  downloadUrl?: string;
  extraProperties?: Properties;
  maintainers?: string[];
  packageName?: string;
  repository?: MacportsRepository;
  revision?: number;
  skipTemplates?: string[];
  templateDirectory?: string;
}
export interface MacportsRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface ScoopPackager {
  active?: Active;
  autoupdateUrl?: string;
  checkverUrl?: string;
  commitAuthor?: CommitAuthor;
  continueOnError?: boolean;
  downloadUrl?: string;
  extraProperties?: Properties;
  packageName?: string;
  repository?: ScoopRepository;
  skipTemplates?: string[];
  templateDirectory?: string;
}
export interface ScoopRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface SdkmanPackager {
  active?: Active;
  candidate?: string;
  command?: Command1;
  connectTimeout?: number;
  consumerKey?: string;
  consumerToken?: string;
  continueOnError?: boolean;
  downloadUrl?: string;
  extraProperties?: Properties;
  readTimeout?: number;
  releaseNotesUrl?: string;
}
export interface SnapPackager {
  active?: Active;
  architectures?: Architecture[];
  base?: string;
  commitAuthor?: CommitAuthor;
  confinement?: string;
  continueOnError?: boolean;
  downloadUrl?: string;
  exportedLogin?: string;
  extraProperties?: Properties;
  grade?: string;
  localPlugs?: string[];
  localSlots?: string[];
  packageName?: string;
  plugs?: Plug[];
  remoteBuild?: boolean;
  repository?: SnapRepository;
  skipTemplates?: string[];
  slots?: Slot[];
  templateDirectory?: string;
}
export interface Architecture {
  buildOn?: string[];
  ignoreError?: boolean;
  runOn?: string[];
}
export interface Plug {
  attributes?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  name?: string;
  reads?: string[];
  writes?: string[];
}
export interface SnapRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface Slot {
  attributes?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  name?: string;
  reads?: string[];
  writes?: string[];
}
export interface SpecPackager {
  active?: Active;
  commitAuthor?: CommitAuthor;
  continueOnError?: boolean;
  downloadUrl?: string;
  extraProperties?: Properties;
  packageName?: string;
  release?: string;
  repository?: SpecRepository;
  requires?: string[];
  skipTemplates?: string[];
  templateDirectory?: string;
}
export interface SpecRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface WingetPackager {
  active?: Active;
  author?: string;
  commitAuthor?: CommitAuthor;
  continueOnError?: boolean;
  defaultLocale?: string;
  downloadUrl?: string;
  extraProperties?: Properties;
  installer?: Installer;
  minimumOsVersion?: string;
  moniker?: string;
  package?: Package;
  productCode?: string;
  publisher?: Publisher;
  repository?: WingetRepository;
  skipTemplates?: string[];
  tags?: string[];
  templateDirectory?: string;
}
export interface Installer {
  command?: string;
  modes?: Mode1[];
  scope?: Scope;
  type?: Type2;
  upgradeBehavior?: UpgradeBehavior;
}
export interface Package {
  identifier?: string;
  name?: string;
  url?: string;
  version?: string;
}
export interface Publisher {
  name?: string;
  supportUrl?: string;
  url?: string;
}
export interface WingetRepository {
  active?: Active;
  branch?: string;
  branchPush?: string;
  commitMessage?: string;
  name?: string;
  owner?: string;
  tagName?: string;
  token?: string;
  username?: string;
}
export interface Download {
  active?: Active;
  ftp?: FtpDownloaderMap &
    ({
      [k: string]: FtpDownloader | undefined;
    } | null);
  http?: HttpDownloaderMap &
    ({
      [k: string]: HttpDownloader | undefined;
    } | null);
  scp?: ScpDownloaderMap &
    ({
      [k: string]: ScpDownloader | undefined;
    } | null);
  sftp?: SftpDownloaderMap &
    ({
      [k: string]: SftpDownloader | undefined;
    } | null);
}
export interface FtpDownloaderMap {
  [k: string]: FtpDownloader | undefined;
}
/**
 * This interface was referenced by `FtpDownloaderMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface FtpDownloader {
  active?: Active;
  assets?: Asset[];
  connectTimeout?: number;
  extraProperties?: Properties;
  host?: string;
  password?: string;
  port?: number;
  readTimeout?: number;
  username?: string;
}
export interface Asset {
  input?: string;
  output?: string;
  unpack?: Unpack;
}
export interface Unpack {
  enabled?: boolean;
  skipRootEntry?: boolean;
}
export interface HttpDownloaderMap {
  [k: string]: HttpDownloader | undefined;
}
/**
 * This interface was referenced by `HttpDownloaderMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface HttpDownloader {
  active?: Active;
  assets?: Asset[];
  authorization?: Authorization;
  connectTimeout?: number;
  extraProperties?: Properties;
  headers?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  password?: string;
  readTimeout?: number;
  username?: string;
}
export interface ScpDownloaderMap {
  [k: string]: ScpDownloader | undefined;
}
/**
 * This interface was referenced by `ScpDownloaderMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface ScpDownloader {
  active?: Active;
  assets?: Asset[];
  connectTimeout?: number;
  extraProperties?: Properties;
  fingerprint?: string;
  host?: string;
  knownHostsFile?: string;
  passphrase?: string;
  password?: string;
  port?: number;
  privateKey?: string;
  publicKey?: string;
  readTimeout?: number;
  username?: string;
}
export interface SftpDownloaderMap {
  [k: string]: SftpDownloader | undefined;
}
/**
 * This interface was referenced by `SftpDownloaderMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface SftpDownloader {
  active?: Active;
  assets?: Asset[];
  connectTimeout?: number;
  extraProperties?: Properties;
  fingerprint?: string;
  host?: string;
  knownHostsFile?: string;
  passphrase?: string;
  password?: string;
  port?: number;
  privateKey?: string;
  publicKey?: string;
  readTimeout?: number;
  username?: string;
}
export interface Environment {
  properties?: Properties;
  variables?: string;
}
export interface ExtensionMap {
  [k: string]: Extension | undefined;
}
/**
 * This interface was referenced by `ExtensionMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface Extension {
  directory?: string;
  enabled?: boolean;
  gav?: string;
  name?: string;
  providers?: Provider[];
}
export interface Provider {
  properties?: Properties;
  type?: string;
}
export interface Files {
  active?: Active;
  artifacts?: Artifact[];
  globs?: Glob[];
}
export interface Hooks {
  active?: Active;
  command?: CommandHooks;
  environment?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  script?: ScriptHooks;
}
export interface CommandHooks {
  active?: Active;
  before?: CommandHook[];
  environment?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  failure?: CommandHook[];
  success?: CommandHook[];
}
export interface CommandHook {
  active?: Active;
  cmd?: string;
  condition?: string;
  continueOnError?: boolean;
  environment?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  filter?: Filter;
  platforms?: string[];
  verbose?: boolean;
}
export interface Filter {
  excludes?: string[];
  includes?: string[];
}
export interface ScriptHooks {
  active?: Active;
  before?: ScriptHook[];
  environment?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  failure?: ScriptHook[];
  success?: ScriptHook[];
}
export interface ScriptHook {
  active?: Active;
  condition?: string;
  continueOnError?: boolean;
  environment?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  filter?: Filter;
  platforms?: string[];
  run?: string;
  shell?: Shell;
  verbose?: boolean;
}
export interface Packagers {
  active?: Active;
  appImage?: AppImagePackager;
  asdf?: AsdfPackager;
  brew?: BrewPackager;
  chocolatey?: ChocolateyPackager;
  docker?: DockerPackager;
  flatpak?: FlatpakPackager;
  gofish?: GofishPackager;
  jbang?: JbangPackager;
  jib?: JibPackager;
  macports?: MacportsPackager;
  scoop?: ScoopPackager;
  sdkman?: SdkmanPackager;
  snap?: SnapPackager;
  spec?: SpecPackager;
  winget?: WingetPackager;
}
export interface Project {
  authors?: string[];
  copyright?: string;
  description?: string;
  extraProperties?: Properties;
  icons?: Icon[];
  inceptionYear?: string;
  java?: Java2;
  license?: string;
  links?: Links;
  longDescription?: string;
  maintainers?: string[];
  name?: string;
  screenshots?: Screenshot[];
  snapshot?: Snapshot;
  stereotype?: Stereotype;
  tags?: string[];
  vendor?: string;
  version?: string;
  versionPattern?: VersionPattern;
}
export interface Links {
  bugTracker?: string;
  contact?: string;
  contribute?: string;
  documentation?: string;
  donation?: string;
  faq?: string;
  help?: string;
  homepage?: string;
  license?: string;
  translate?: string;
  vcsBrowser?: string;
}
export interface Snapshot {
  fullChangelog?: boolean;
  label?: string;
  pattern?: string;
}
export interface VersionPattern {
  format?: string;
  type?: Type3;
}
export interface Release {
  codeberg?: CodebergReleaser;
  generic?: GenericGitReleaser;
  gitea?: GiteaReleaser;
  github?: GithubReleaser;
  gitlab?: GitlabReleaser;
}
export interface CodebergReleaser {
  apiEndpoint?: string;
  artifacts?: boolean;
  branch?: string;
  branchPush?: string;
  catalogs?: boolean;
  changelog?: Changelog;
  checksums?: boolean;
  commitAuthor?: CommitAuthor;
  commitUrl?: string;
  connectTimeout?: number;
  downloadUrl?: string;
  draft?: boolean;
  enabled?: boolean;
  files?: boolean;
  host?: string;
  issueTrackerUrl?: string;
  issues?: Issues;
  latestReleaseUrl?: string;
  milestone?: Milestone;
  name?: string;
  overwrite?: boolean;
  owner?: string;
  prerelease?: Prerelease;
  previousTagName?: string;
  readTimeout?: number;
  releaseName?: string;
  releaseNotesUrl?: string;
  repoCloneUrl?: string;
  repoUrl?: string;
  sign?: boolean;
  signatures?: boolean;
  skipRelease?: boolean;
  skipTag?: boolean;
  srcUrl?: string;
  tagName?: string;
  token?: string;
  update?: Update;
  uploadAssets?: Active;
  username?: string;
}
export interface Changelog {
  append?: Append;
  categories?: Category[];
  categoryTitleFormat?: string;
  content?: string;
  contentTemplate?: string;
  contributors?: Contributors;
  contributorsTitleFormat?: string;
  enabled?: boolean;
  excludeLabels?: string[];
  external?: string;
  extraProperties?: Properties;
  format?: string;
  formatted?: Active;
  hide?: Hide;
  includeLabels?: string[];
  labelers?: Labeler[];
  links?: boolean;
  preset?: string;
  replacers?: Replacer[];
  skipMergeCommits?: boolean;
  sort?: Sort;
}
export interface Append {
  content?: string;
  contentTemplate?: string;
  enabled?: boolean;
  target?: string;
  title?: string;
}
export interface Category {
  format?: string;
  key?: string;
  labels?: string[];
  order?: number;
  title?: string;
}
export interface Contributors {
  enabled?: boolean;
  format?: string;
}
export interface Hide {
  categories?: string[];
  contributors?: string[];
  uncategorized?: boolean;
}
export interface Labeler {
  body?: string;
  label?: string;
  order?: number;
  title?: string;
}
export interface Replacer {
  replace?: string;
  search?: string;
}
export interface Issues {
  applyMilestone?: Apply;
  comment?: string;
  enabled?: boolean;
  label?: Label;
}
export interface Label {
  color?: string;
  description?: string;
  name?: string;
}
export interface Milestone {
  close?: boolean;
  name?: string;
}
export interface Prerelease {
  enabled?: boolean;
  pattern?: string;
}
export interface Update {
  enabled?: boolean;
  sections?: UpdateSection[];
}
export interface GenericGitReleaser {
  apiEndpoint?: string;
  artifacts?: boolean;
  branch?: string;
  branchPush?: string;
  catalogs?: boolean;
  changelog?: Changelog;
  checksums?: boolean;
  commitAuthor?: CommitAuthor;
  commitUrl?: string;
  connectTimeout?: number;
  downloadUrl?: string;
  enabled?: boolean;
  files?: boolean;
  host?: string;
  issueTrackerUrl?: string;
  issues?: Issues;
  latestReleaseUrl?: string;
  milestone?: Milestone;
  name?: string;
  overwrite?: boolean;
  owner?: string;
  prerelease?: Prerelease;
  previousTagName?: string;
  readTimeout?: number;
  releaseName?: string;
  releaseNotesUrl?: string;
  repoCloneUrl?: string;
  repoUrl?: string;
  sign?: boolean;
  signatures?: boolean;
  skipRelease?: boolean;
  skipTag?: boolean;
  srcUrl?: string;
  tagName?: string;
  token?: string;
  update?: Update;
  uploadAssets?: Active;
  username?: string;
}
export interface GiteaReleaser {
  apiEndpoint?: string;
  artifacts?: boolean;
  branch?: string;
  branchPush?: string;
  catalogs?: boolean;
  changelog?: Changelog;
  checksums?: boolean;
  commitAuthor?: CommitAuthor;
  commitUrl?: string;
  connectTimeout?: number;
  downloadUrl?: string;
  draft?: boolean;
  enabled?: boolean;
  files?: boolean;
  host?: string;
  issueTrackerUrl?: string;
  issues?: Issues;
  latestReleaseUrl?: string;
  milestone?: Milestone;
  name?: string;
  overwrite?: boolean;
  owner?: string;
  prerelease?: Prerelease;
  previousTagName?: string;
  readTimeout?: number;
  releaseName?: string;
  releaseNotesUrl?: string;
  repoCloneUrl?: string;
  repoUrl?: string;
  sign?: boolean;
  signatures?: boolean;
  skipRelease?: boolean;
  skipTag?: boolean;
  srcUrl?: string;
  tagName?: string;
  token?: string;
  update?: Update;
  uploadAssets?: Active;
  username?: string;
}
export interface GithubReleaser {
  apiEndpoint?: string;
  artifacts?: boolean;
  branch?: string;
  branchPush?: string;
  catalogs?: boolean;
  changelog?: Changelog;
  checksums?: boolean;
  commitAuthor?: CommitAuthor;
  commitUrl?: string;
  connectTimeout?: number;
  discussionCategoryName?: string;
  downloadUrl?: string;
  draft?: boolean;
  enabled?: boolean;
  files?: boolean;
  host?: string;
  issueTrackerUrl?: string;
  issues?: Issues;
  latestReleaseUrl?: string;
  milestone?: Milestone;
  name?: string;
  overwrite?: boolean;
  owner?: string;
  prerelease?: Prerelease;
  previousTagName?: string;
  readTimeout?: number;
  releaseName?: string;
  releaseNotes?: ReleaseNotes;
  releaseNotesUrl?: string;
  repoCloneUrl?: string;
  repoUrl?: string;
  sign?: boolean;
  signatures?: boolean;
  skipRelease?: boolean;
  skipTag?: boolean;
  srcUrl?: string;
  tagName?: string;
  token?: string;
  update?: Update;
  uploadAssets?: Active;
  username?: string;
}
export interface ReleaseNotes {
  configurationFile?: string;
  enabled?: boolean;
}
export interface GitlabReleaser {
  apiEndpoint?: string;
  artifacts?: boolean;
  branch?: string;
  branchPush?: string;
  catalogs?: boolean;
  changelog?: Changelog;
  checksums?: boolean;
  commitAuthor?: CommitAuthor;
  commitUrl?: string;
  connectTimeout?: number;
  downloadUrl?: string;
  enabled?: boolean;
  files?: boolean;
  host?: string;
  issueTrackerUrl?: string;
  issues?: Issues;
  latestReleaseUrl?: string;
  milestone?: Milestone;
  name?: string;
  overwrite?: boolean;
  owner?: string;
  prerelease?: Prerelease;
  previousTagName?: string;
  projectIdentifier?: string;
  readTimeout?: number;
  releaseName?: string;
  releaseNotesUrl?: string;
  repoCloneUrl?: string;
  repoUrl?: string;
  sign?: boolean;
  signatures?: boolean;
  skipRelease?: boolean;
  skipTag?: boolean;
  srcUrl?: string;
  tagName?: string;
  token?: string;
  update?: Update;
  uploadAssets?: Active;
  uploadLinks?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  username?: string;
}
export interface Signing {
  active?: Active;
  armored?: boolean;
  artifacts?: boolean;
  catalogs?: boolean;
  checksums?: boolean;
  command?: Command2;
  cosign?: Cosign;
  files?: boolean;
  mode?: Mode2;
  passphrase?: string;
  publicKey?: string;
  secretKey?: string;
  verify?: boolean;
}
export interface Command2 {
  args?: string[];
  defaultKeyring?: boolean;
  executable?: string;
  homeDir?: string;
  keyName?: string;
  publicKeyring?: string;
}
export interface Cosign {
  privateKeyFile?: string;
  publicKeyFile?: string;
  version?: string;
}
export interface Upload {
  active?: Active;
  artifactory?: ArtifactoryUploaderMap &
    ({
      [k: string]: ArtifactoryUploader | undefined;
    } | null);
  ftp?: FtpUploaderMap &
    ({
      [k: string]: FtpUploader | undefined;
    } | null);
  gitea?: GiteaUploaderMap &
    ({
      [k: string]: GiteaUploader | undefined;
    } | null);
  gitlab?: GitlabUploaderMap &
    ({
      [k: string]: GitlabUploader | undefined;
    } | null);
  http?: HttpUploaderMap &
    ({
      [k: string]: HttpUploader | undefined;
    } | null);
  s3?: S3UploaderMap &
    ({
      [k: string]: S3Uploader | undefined;
    } | null);
  scp?: ScpUploaderMap &
    ({
      [k: string]: ScpUploader | undefined;
    } | null);
  sftp?: SftpUploaderMap &
    ({
      [k: string]: SftpUploader | undefined;
    } | null);
}
export interface ArtifactoryUploaderMap {
  [k: string]: ArtifactoryUploader | undefined;
}
/**
 * This interface was referenced by `ArtifactoryUploaderMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface ArtifactoryUploader {
  active?: Active;
  artifacts?: boolean;
  authorization?: Authorization;
  catalogs?: boolean;
  checksums?: boolean;
  connectTimeout?: number;
  extraProperties?: Properties;
  files?: boolean;
  headers?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  host?: string;
  password?: string;
  readTimeout?: number;
  repositories?: ArtifactoryRepository[];
  signatures?: boolean;
  username?: string;
}
export interface ArtifactoryRepository {
  active?: Active;
  fileTypes?: FileType[];
  path?: string;
}
export interface FtpUploaderMap {
  [k: string]: FtpUploader | undefined;
}
/**
 * This interface was referenced by `FtpUploaderMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface FtpUploader {
  active?: Active;
  artifacts?: boolean;
  catalogs?: boolean;
  checksums?: boolean;
  connectTimeout?: number;
  downloadUrl?: string;
  extraProperties?: Properties;
  files?: boolean;
  host?: string;
  password?: string;
  path?: string;
  port?: number;
  readTimeout?: number;
  signatures?: boolean;
  username?: string;
}
export interface GiteaUploaderMap {
  [k: string]: GiteaUploader | undefined;
}
/**
 * This interface was referenced by `GiteaUploaderMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface GiteaUploader {
  active?: Active;
  artifacts?: boolean;
  catalogs?: boolean;
  checksums?: boolean;
  connectTimeout?: number;
  extraProperties?: Properties;
  files?: boolean;
  host?: string;
  owner?: string;
  packageName?: string;
  packageVersion?: string;
  readTimeout?: number;
  signatures?: boolean;
  token?: string;
}
export interface GitlabUploaderMap {
  [k: string]: GitlabUploader | undefined;
}
/**
 * This interface was referenced by `GitlabUploaderMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface GitlabUploader {
  active?: Active;
  artifacts?: boolean;
  catalogs?: boolean;
  checksums?: boolean;
  connectTimeout?: number;
  extraProperties?: Properties;
  files?: boolean;
  host?: string;
  packageName?: string;
  packageVersion?: string;
  projectIdentifier?: string;
  readTimeout?: number;
  signatures?: boolean;
  token?: string;
}
export interface HttpUploaderMap {
  [k: string]: HttpUploader | undefined;
}
/**
 * This interface was referenced by `HttpUploaderMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface HttpUploader {
  active?: Active;
  artifacts?: boolean;
  authorization?: Authorization;
  catalogs?: boolean;
  checksums?: boolean;
  connectTimeout?: number;
  downloadUrl?: string;
  extraProperties?: Properties;
  files?: boolean;
  headers?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  method?: Method;
  password?: string;
  readTimeout?: number;
  signatures?: boolean;
  uploadUrl?: string;
  username?: string;
}
export interface S3UploaderMap {
  [k: string]: S3Uploader | undefined;
}
/**
 * This interface was referenced by `S3UploaderMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface S3Uploader {
  accessKeyId?: string;
  active?: Active;
  artifacts?: boolean;
  bucket?: string;
  catalogs?: boolean;
  checksums?: boolean;
  connectTimeout?: number;
  downloadUrl?: string;
  endpoint?: string;
  extraProperties?: Properties;
  files?: boolean;
  headers?: StringProperties &
    ({
      [k: string]: string | undefined;
    } | null);
  path?: string;
  readTimeout?: number;
  region?: string;
  secretKey?: string;
  sessionToken?: string;
  signatures?: boolean;
}
export interface ScpUploaderMap {
  [k: string]: ScpUploader | undefined;
}
/**
 * This interface was referenced by `ScpUploaderMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface ScpUploader {
  active?: Active;
  artifacts?: boolean;
  catalogs?: boolean;
  checksums?: boolean;
  connectTimeout?: number;
  downloadUrl?: string;
  extraProperties?: Properties;
  files?: boolean;
  fingerprint?: string;
  host?: string;
  knownHostsFile?: string;
  passphrase?: string;
  password?: string;
  path?: string;
  port?: number;
  privateKey?: string;
  publicKey?: string;
  readTimeout?: number;
  signatures?: boolean;
  username?: string;
}
export interface SftpUploaderMap {
  [k: string]: SftpUploader | undefined;
}
/**
 * This interface was referenced by `SftpUploaderMap`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]?$".
 */
export interface SftpUploader {
  active?: Active;
  artifacts?: boolean;
  catalogs?: boolean;
  checksums?: boolean;
  connectTimeout?: number;
  downloadUrl?: string;
  extraProperties?: Properties;
  files?: boolean;
  fingerprint?: string;
  host?: string;
  knownHostsFile?: string;
  passphrase?: string;
  password?: string;
  path?: string;
  port?: number;
  privateKey?: string;
  publicKey?: string;
  readTimeout?: number;
  signatures?: boolean;
  username?: string;
}
