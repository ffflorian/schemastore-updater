/* eslint-disable */

export type JSONSchemaForPyrseasYamlFiles = Db | Schema;
export type OnePriv =
  | (
      | 'all'
      | 'insert'
      | 'delete'
      | 'select'
      | 'update'
      | 'truncate'
      | 'references'
      | 'trigger'
      | 'usage'
      | 'execute'
      | 'create'
    )
  | {
      all?: {
        grantable?: boolean;
      };
    }
  | {
      insert?: {
        grantable?: boolean;
      };
    }
  | {
      delete?: {
        grantable?: boolean;
      };
    }
  | {
      select?: {
        grantable?: boolean;
      };
    }
  | {
      update?: {
        grantable?: boolean;
      };
    }
  | {
      truncate?: {
        grantable?: boolean;
      };
    }
  | {
      references?: {
        grantable?: boolean;
      };
    }
  | {
      trigger?: {
        grantable?: boolean;
      };
    }
  | {
      usage?: {
        grantable?: boolean;
      };
    }
  | {
      execute?: {
        grantable?: boolean;
      };
    }
  | {
      create?: {
        grantable?: boolean;
      };
    };
export type Privileges = {
  [k: string]:
    | (
        | OnePriv[]
        | {
            grantor?: string;
            privs?: OnePriv[];
          }
      )
    | undefined;
}[];

export interface Db {}
/**
 * This interface was referenced by `Db`'s JSON-Schema definition
 * via the `patternProperty` "^schema ".
 */
export interface Schema {
  owner?: string;
  description?: string;
  privileges?: Privileges;
}
