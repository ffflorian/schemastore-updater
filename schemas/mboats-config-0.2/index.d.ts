/* eslint-disable */

export interface MBOATSFrameworkProperties {
  /**
   * 5-7 letter capitalized abbreviated word representing the application
   */
  appId: string;
  /**
   * Application Name
   */
  appName: string;
  pageLoadTimeout?: number;
  elementFindTimeout?: number;
  soundfx?: boolean;
  headless?: boolean;
  invocationCount?: number;
  /**
   * The mode of test execution.
   */
  mode?: 'local' | 'remote';
  runnerParallelism?: 'feature' | 'scenario';
  threadCount?: number;
  clients?: 'chrome' | 'firefox' | 'edge';
  clientParallelism?: 'stacked' | 'interleaved';
  video?: Video;
  networkLogs?: NetworkLogs;
  email?: EmailConfiguration;
  mongodb?: MongoDBConfiguration;
  awss3?: AWSS3Configuration;
  awsec2?: AWSEC2Configuration;
  threadbare?: ThreadbareConfiguration;
}
export interface Video {
  enabled: boolean;
  location: string;
  format: string;
  prefix: string;
}
export interface NetworkLogs {
  enabled: boolean;
  request: Request;
  response: Request;
}
export interface Request {
  headers: boolean;
  cookies: boolean;
  body: boolean;
}
export interface EmailConfiguration {
  auth: Auth;
  invitationLinkRegex: string;
  oktaTokenRegex: string;
}
export interface Auth {
  $clientId: string;
  $clientSecret: string;
  $refreshToken: string;
  $refreshUrl: string;
}
export interface MongoDBConfiguration {
  enabled: boolean;
  username: string;
  password: string;
  connectionString: string;
  database: string;
  collection: Collection;
}
export interface Collection {
  report: string;
}
export interface AWSS3Configuration {
  enabled: boolean;
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
  bucket: string;
  identityPoolId: string;
}
export interface AWSEC2Configuration {
  publicName: string;
  serverPort: number;
}
export interface ThreadbareConfiguration {
  server: null;
}
