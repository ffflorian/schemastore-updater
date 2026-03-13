/* eslint-disable */

export interface HttpsJsonSchemastoreOrgTldrJson {
  platform?: 'linux' | string;
  pagesRepository?: string;
  repository?: string;
  skipUpdateWhenPageNotFound?: boolean;
  theme?: string;
  themes?: {
    [k: string]:
      | {
          commandName?: string;
          mainDescription?: string;
          exampleDescription?: string;
          exampleCode?: string;
          exampleToken?: string;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
