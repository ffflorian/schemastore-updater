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
    | OnePriv[]
    | {
        grantor?: string;
        privs?: OnePriv[];
      }
    | undefined;
}[];

export interface Db {
  /**
   * This interface was referenced by `Db`'s JSON-Schema definition
   * via the `patternProperty` "^cast ".
   *
   * This interface was referenced by `Db`'s JSON-Schema definition
   * via the `patternProperty` "^extension ".
   *
   * This interface was referenced by `Db`'s JSON-Schema definition
   * via the `patternProperty` "^event trigger ".
   *
   * This interface was referenced by `Db`'s JSON-Schema definition
   * via the `patternProperty` "^foreign data wrapper ".
   *
   * This interface was referenced by `Db`'s JSON-Schema definition
   * via the `patternProperty` "^language ".
   */
  [k: string]:
    | Schema
    | {
        context?: string;
        method?: string;
        description?: string;
        function?: string;
        depends_on?: string[];
      }
    | {
        description?: string;
        owner?: string;
        schema?: string;
        version?: string;
      }
    | {
        description?: string;
        enabled?: boolean;
        event?: string;
        procedure?: string;
        tags?: string[];
        owner?: string;
      }
    | {
        description?: string;
        validator?: string;
        options?: string[];
        handler?: string;
        owner?: string;
        privileges?: Privileges;
      }
    | {
        description?: string;
        trusted?: boolean;
        owner?: string;
        privileges?: Privileges;
      }
    | undefined;
}
/**
 * This interface was referenced by `Db`'s JSON-Schema definition
 * via the `patternProperty` "^schema ".
 */
export interface Schema {
  owner?: string;
  description?: string;
  privileges?: Privileges;
  /**
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^table ".
   *
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^aggregate ".
   *
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^domain ".
   *
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^function ".
   *
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^sequence ".
   *
   * 5 types: Base Type, Composite, Enum, Domain, Range
   *
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^type ".
   *
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^view ".
   *
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^foreign table ".
   *
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^collation ".
   */
  [k: string]:
    | {
        owner?: string;
        description?: string;
        columns?: {
          [k: string]:
            | {
                type?: string;
                default?: string;
                not_null?: boolean;
                inherited?: boolean;
                collation?: string;
                statistics?: number;
                identity?: 'always' | 'by default';
                description?: string;
              }
            | undefined;
        }[];
        unique_constraints?: {
          [k: string]:
            | {
                columns?: string[];
                description?: string;
              }
            | undefined;
        };
        foreign_keys?: {
          [k: string]:
            | {
                columns?: string[];
                on_delete?: string;
                on_update?: string;
                description?: string;
                references?: {
                  columns?: string[];
                  schema?: string;
                  table?: string;
                };
              }
            | undefined;
        };
        check_constraints?: {
          [k: string]:
            | {
                columns?: string[];
                expression?: string;
                inherited?: boolean;
                description?: string;
              }
            | undefined;
        };
        primary_key?: {
          [k: string]:
            | {
                columns?: string[];
                cluster?: boolean;
              }
            | undefined;
        };
        indexes?: {
          [k: string]:
            | {
                keys?: string[];
                access_method?: string;
                unique?: boolean;
                description?: string;
              }
            | undefined;
        };
        triggers?: {
          [k: string]:
            | {
                events?: string[];
                level?: string;
                procedure?: string;
                timing?: string;
                description?: string;
              }
            | undefined;
        };
        inherits?: string[];
        unlogged?: boolean;
        options?: string[];
        partition_bound_spec?: string;
        partition_by?: string;
        partition_cols?: string[];
        partition_exprs?: string;
        tablespace?: string;
        rules?: {
          [k: string]:
            | {
                actions?: string;
                condition?: string;
                event?: string;
                instead?: boolean;
                depends_on?: string[];
                description?: string;
              }
            | undefined;
        };
        privileges?: Privileges;
        depends_on?: string[];
      }
    | {
        owner?: string;
        privileges?: Privileges;
        sfunc?: string;
        stype?: string;
        sspace?: number;
        finalfunc?: string;
        finalfunc_extra?: boolean;
        initcond?: string;
        sortop?: string;
        msfunc?: string;
        minvfunc?: string;
        mstype?: string;
        msspace?: number;
        mfinalfunc?: string;
        mfinalfunc_extra?: boolean;
        minitcond?: string;
        kind?: string;
        combinefunc?: string;
        serialfunc?: string;
        deseriafunc?: string;
        parallel?: string;
        arguments?: string;
      }
    | {
        owner?: string;
        type?: string;
        not_null?: boolean;
        default?: string | number;
        check_constraints?: {
          [k: string]:
            | {
                expression?: string;
                depends_on?: string[];
              }
            | undefined;
        };
      }
    | {
        language?: string;
        owner?: string;
        privileges?: Privileges;
        returns?: string;
        source?: string;
        volatility?: string;
        strict?: boolean;
        security_definer?: boolean;
        description?: string;
        obj_file?: string;
        link_symbol?: string;
        configuration?: string[];
        arguments?: string;
        cost?: number;
        rows?: number;
        leakproof?: boolean;
      }
    | {
        description?: string;
        cache_value?: number;
        increment_by?: number;
        max_value?: number | 'null';
        min_value?: number | 'null';
        owner?: string;
        start_value?: number;
        owner_table?: string;
        owner_column?: string;
        privileges?: Privileges;
        data_type?: string;
      }
    | {
        labels?: string[];
        owner?: string;
        description?: string;
        privileges?: Privileges;
        attributes?: {
          [k: string]:
            | {
                type?: string;
                oldname?: string;
              }
            | undefined;
        }[];
        subtype?: string;
        oldname?: string;
        input?: string;
        output?: string;
        internallength?: string | number;
        alignment?: string;
        storage?: string;
        category?: string;
        subtype_diff?: string;
        type?: string;
        not_null?: boolean;
        default?: string;
        canonical?: string;
        receive?: string;
        send?: string;
        typmod_in?: string;
        typmod_out?: string;
        analyze?: string;
        delimiter?: string;
        preferred?: boolean;
      }
    | {
        definition?: string;
        description?: string;
        owner?: string;
        depends_on?: string[];
      }
    | {
        owner?: string;
        description?: string;
        privileges?: Privileges;
        columns?: {
          [k: string]:
            | {
                type?: string;
              }
            | undefined;
        }[];
        server?: string;
        options?: string[];
      }
    | {
        lc_collate?: string;
        lc_ctype?: string;
        owner?: string;
        description?: string;
      }
    | string
    | Privileges
    | undefined;
}
