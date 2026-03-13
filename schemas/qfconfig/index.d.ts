/* eslint-disable */

/**
 * A configuration file for Queryfirst (https://queryfirst.net), named qfconfig.json
 */
export interface HttpsJsonSchemastoreOrgQfconfigJson {
  defaultConnection?: string;
  provider?: 'Microsoft.Data.SqlClient' | 'MySql.Data.MySqlClient' | 'Npgsql' | 'System.Data.SqlClient';
  generators?: Generator[];
  connectEditor2DB?: boolean;
  helperAssemblies?: string[];
  /**
   * Should QueryFirst add a selfTest method to the generated code? You will need add xunit and QueryFirst.CoreLib nugets to your project.
   */
  makeSelfTest?: boolean;
  /**
   * Suffix to append to the query base name to get the generated repository class name
   */
  repoSuffix?: string;
  /**
   * Suffix to append to the query base name to get the result class name
   */
  dtoSuffix?: string;
}
export interface Generator {
  name: 'CSharp' | 'TsInterfaceFromDto';
  /**
   * Generators are loosely coupled. Options are passed as a string dictionary. Only strings here sorry.
   */
  options?: {
    [k: string]: string | undefined;
  };
}
