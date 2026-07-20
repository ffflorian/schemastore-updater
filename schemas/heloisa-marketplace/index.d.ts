/* eslint-disable */

export interface HeloisaAssistantPluginsMarketplace {
  name: string;
  version: string;
  description?: string;
  owner?: {
    name: string;
    email?: string;
  };
  homepage?: string;
  plugins: {
    name: string;
    description?: string;
    version?: string;
    author?: {
      name?: string;
      email?: string;
    };
    source: string;
    category?: string;
  }[];
}
