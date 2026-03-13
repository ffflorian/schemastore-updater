/* eslint-disable */

/**
 * A value that can be a string, boolean, or number.
 * This is used for default values where columns can use literal values directly.
 */
export type DefaultValue = boolean | number | string;
export type ForeignKeySyntax = string | ForeignKeyDef;
export type ReferenceAction = 'cascade' | 'restrict' | 'set_null' | 'set_default' | 'no_action';
export type StrOrBoolOrArray = string | string[] | boolean;
export type PrimaryKeySyntax = boolean | PrimaryKeyDef;
export type ColumnType = SimpleColumnType | ComplexColumnType;
export type SimpleColumnType =
  | 'small_int'
  | 'integer'
  | 'big_int'
  | 'real'
  | 'double_precision'
  | 'text'
  | 'boolean'
  | 'date'
  | 'time'
  | 'timestamp'
  | 'timestamptz'
  | 'interval'
  | 'bytea'
  | 'uuid'
  | 'json'
  | 'jsonb'
  | 'inet'
  | 'cidr'
  | 'macaddr'
  | 'xml';
export type ComplexColumnType =
  | {
      kind: 'varchar';
      length: number;
      [k: string]: unknown | undefined;
    }
  | {
      kind: 'numeric';
      precision: number;
      scale: number;
      [k: string]: unknown | undefined;
    }
  | {
      kind: 'char';
      length: number;
      [k: string]: unknown | undefined;
    }
  | {
      custom_type: string;
      kind: 'custom';
      [k: string]: unknown | undefined;
    }
  | {
      kind: 'enum';
      name: string;
      values: EnumValues;
      [k: string]: unknown | undefined;
    };
/**
 * Enum values definition - either all string or all integer
 */
export type EnumValues = string[] | NumValue[];
export type TableConstraint =
  | {
      auto_increment?: boolean;
      columns: string[];
      type: 'primary_key';
      [k: string]: unknown | undefined;
    }
  | {
      columns: string[];
      name?: string | null;
      type: 'unique';
      [k: string]: unknown | undefined;
    }
  | {
      columns: string[];
      name?: string | null;
      on_delete?: ReferenceAction | null;
      on_update?: ReferenceAction | null;
      ref_columns: string[];
      ref_table: string;
      type: 'foreign_key';
      [k: string]: unknown | undefined;
    }
  | {
      expr: string;
      name: string;
      type: 'check';
      [k: string]: unknown | undefined;
    }
  | {
      columns: string[];
      name?: string | null;
      type: 'index';
      [k: string]: unknown | undefined;
    };

export interface TableDef {
  columns: ColumnDef[];
  constraints: TableConstraint[];
  description?: string | null;
  name: string;
  [k: string]: unknown | undefined;
}
export interface ColumnDef {
  comment?: string | null;
  default?: DefaultValue | null;
  foreign_key?: ForeignKeySyntax | null;
  index?: StrOrBoolOrArray | null;
  name: string;
  nullable: boolean;
  primary_key?: PrimaryKeySyntax | null;
  type: ColumnType;
  unique?: StrOrBoolOrArray | null;
  [k: string]: unknown | undefined;
}
export interface ForeignKeyDef {
  on_delete?: ReferenceAction | null;
  on_update?: ReferenceAction | null;
  ref_columns: string[];
  ref_table: string;
  [k: string]: unknown | undefined;
}
export interface PrimaryKeyDef {
  auto_increment?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Integer enum variant with name and numeric value
 */
export interface NumValue {
  name: string;
  value: number;
  [k: string]: unknown | undefined;
}
