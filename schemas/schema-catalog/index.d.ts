/* eslint-disable */

export interface JSONSchemaForSchemaStoreOrgCatalogFiles {
  /**
   * Link to https://www.schemastore.org/schema-catalog.json
   */
  $schema: 'https://www.schemastore.org/schema-catalog.json' | 'https://json.schemastore.org/schema-catalog.json';
  /**
   * A list of JSON schema references.
   */
  schemas: {
    /**
     * A Minimatch glob expression for matching up file names with a schema.
     */
    fileMatch?: string[];
    /**
     * An absolute URL to the schema location
     */
    url: string;
    /**
     * The name of the schema
     */
    name: string;
    /**
     * A description of the schema
     */
    description: string;
    /**
     * A set of specific version to schema mappings
     */
    versions?: {
      [k: string]: string | undefined;
    };
  }[];
  /**
   * The schema version of the catalog
   */
  version: number;
}
