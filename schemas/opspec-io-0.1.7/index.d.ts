/* eslint-disable */

/**
 * Description of the op
 */
export type Markdown = string;
/**
 * JSON Schema [additionalItems keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.10)
 */
export type TypeConstraints =
  | {
      /**
       * JSON Schema [description](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-6.1)
       */
      description?: string;
      /**
       * JSON Schema [title](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-6.1)
       */
      title?: string;
      /**
       * JSON Schema [type](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.21)
       */
      type?: unknown[] | string;
      /**
       * JSON Schema [writeOnly](https://tools.ietf.org/html/draft-handrews-json-schema-validation-00#section-10.3)
       */
      writeOnly?: boolean;
      [k: string]: unknown | undefined;
    }
  | ArrayConstraints
  | NumberConstraints
  | ObjectConstraints
  | StringConstraints;
/**
 * Requires the number be an integer
 */
export type Integer = 'integer';
/**
 * JSON Schema [date-time format](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-7.3.1)
 */
export type DateTime = 'date-time';
/**
 * A docker image reference as defined by [github.com/docker/distribution/reference](https://github.com/docker/distribution/tree/docker/1.13/reference)
 */
export type DockerImageRef = 'docker-image-ref';
/**
 * JSON Schema [email format](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-7.3.2)
 */
export type Email = 'email';
/**
 * JSON Schema [hostname format](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-7.3.3)
 */
export type Hostname = 'hostname';
/**
 * JSON Schema [ipv4 format](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-7.3.4)
 */
export type Ipv4 = 'ipv4';
/**
 * JSON Schema [ipv6 format](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-7.3.5)
 */
export type Ipv6 = 'ipv6';
/**
 * JSON Schema [uri format](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-7.3.6)
 */
export type Uri = 'uri';
/**
 * A semantic version as defined by [semver.org](http://semver.org/)
 */
export type Semver = 'semver';
/**
 * A single node of the [call graph](https://en.wikipedia.org/wiki/Call_graph)
 */
export type Call = {
  [k: string]: unknown | undefined;
} & {
  container?: ContainerCall;
  /**
   * If any predicate evaluates to false, the call will be skipped.
   */
  if?: Items[];
  op?: {
    /**
     * Initializes INPUT_NAME from VALUE in format 'INPUT_NAME: VALUE'. If VALUE is null, it MUST be assumed VALUE == $(INPUT_NAME)
     */
    inputs?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "[-_.a-zA-Z0-9]+".
       */
      [k: string]:
        | null
        | unknown[]
        | boolean
        | number
        | {
            [k: string]: unknown | undefined;
          }
        | string
        | undefined;
    };
    /**
     * Initializes NAME from OUTPUT_NAME in format 'NAME: OUTPUT_NAME'. If OUTPUT_NAME is null, it MUST be assumed NAME == OUTPUT_NAME
     */
    outputs?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "[-_.a-zA-Z0-9]+".
       */
      [k: string]: null | string | undefined;
    };
    pullCreds?: PullCreds;
    /**
     * Reference to an op
     */
    ref: string;
  };
  parallel?: ParallelCall;
  /**
   * Loop in which all iterations are called simultaneously.
   */
  parallelLoop?: {
    range: Range;
    run: Call;
    vars?: Vars;
  };
  serial?: SerialCall;
  /**
   * Loop in which each iteration gets called sequentially.
   */
  serialLoop?: {
    [k: string]: unknown | undefined;
  } & {
    range?: Range;
    run?: Call;
    /**
     * Exit condition of the loop; evaluated before each iteration.
     */
    until?: Items[];
    vars?: Vars;
  };
};
/**
 * Expression coercible to string value
 */
export type Name =
  | unknown[]
  | boolean
  | number
  | {
      [k: string]: unknown | undefined;
    }
  | string;
/**
 * Condition which evaluates to true or false
 */
export type Items = {
  /**
   * True if all items are equal
   *
   * Items: Expression coercible to string value
   */
  eq?: (
    | unknown[]
    | boolean
    | number
    | {
        [k: string]: unknown | undefined;
      }
    | string
  )[];
  /**
   * True if value exists w/ reference
   */
  exists?: string;
  /**
   * True if any items aren't equal
   *
   * Items: Expression coercible to string value
   */
  ne?: (
    | unknown[]
    | boolean
    | number
    | {
        [k: string]: unknown | undefined;
      }
    | string
  )[];
  /**
   * True if no value exists w/ reference
   */
  notExists?: string;
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
};
export type ParallelCall = Call[];
/**
 * Range of the loop, i.e. the value to loop over
 */
export type Range =
  | unknown[]
  | {
      [k: string]: unknown | undefined;
    }
  | string;
export type SerialCall = Call[];
/**
 * Version of the op
 */
export type SemVer = string;

/**
 * Defines an op
 */
export interface OpFile {
  /**
   * Name of the op
   */
  name: string;
  description?: Markdown;
  inputs?: Inputs;
  outputs?: Inputs;
  run?: Call;
  version?: SemVer;
  opspec?: SemVer;
}
/**
 * Parameter of an op
 */
export interface Inputs {
  /**
   * This interface was referenced by `Inputs`'s JSON-Schema definition
   * via the `patternProperty` "[-_.a-zA-Z0-9]+".
   */
  [k: string]:
    | ({
        [k: string]: unknown | undefined;
      } & {
        array?: ArrayParam;
        boolean?: BooleanParam;
        dir?: DirParam;
        file?: FileParam;
        number?: NumberParam;
        object?: ObjectParam;
        socket?: SocketParam;
        string?: StringParam;
        [k: string]: unknown | undefined;
      })
    | undefined;
}
/**
 * Array parameter of an op
 */
export interface ArrayParam {
  description?: Markdown;
  default?: unknown[];
  /**
   * If the array is secret
   */
  isSecret?: boolean;
  constraints?: ArrayConstraints;
}
export interface ArrayConstraints {
  additionalItems?: TypeConstraints;
  /**
   * JSON Schema [items keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.9)
   */
  items?: TypeConstraints | TypeConstraints[];
  /**
   * JSON Schema [maxItems keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.10)
   */
  maxItems?: number;
  /**
   * JSON Schema [minItems keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.11)
   */
  minItems?: number;
  /**
   * JSON Schema [uniqueItems keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-01#section-6.13)
   */
  uniqueItems?: boolean;
}
export interface NumberConstraints {
  /**
   * JSON Schema [allOf keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.22)
   */
  allOf?: NumberConstraints[];
  /**
   * JSON Schema [anyOf keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.23)
   */
  anyOf?: NumberConstraints[];
  /**
   * JSON Schema [enum keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.20)
   */
  enum?: number[];
  format?: Integer;
  /**
   * JSON Schema [maximum keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.2)
   */
  maximum?: number;
  /**
   * JSON Schema [minimum keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.4)
   */
  minimum?: number;
  /**
   * JSON Schema [multipleOf keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.1)
   */
  multipleOf?: number;
  not?: NumberConstraints;
  /**
   * JSON Schema [oneOf keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.24)
   */
  oneOf?: NumberConstraints[];
}
export interface ObjectConstraints {
  /**
   * JSON Schema [additionalProperties keyword](https://tools.ietf.org/html/draft-handrews-json-schema-validation-00#section-6.5.6)
   */
  additionalProperties?: boolean | TypeConstraints;
  /**
   * JSON Schema [allOf keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.22)
   */
  allOf?: ObjectConstraints[];
  /**
   * JSON Schema [anyOf keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.23)
   */
  anyOf?: ObjectConstraints[];
  /**
   * JSON Schema [dependencies keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.19)
   */
  dependencies?: TypeConstraints | string[];
  /**
   * JSON Schema [enum keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.20)
   */
  enum?: (null | {
    [k: string]: unknown | undefined;
  })[];
  /**
   * JSON Schema [maxProperties keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.13)
   */
  maxProperties?: number;
  /**
   * JSON Schema [minProperties keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.14)
   */
  minProperties?: number;
  not?: ObjectConstraints;
  /**
   * JSON Schema [oneOf keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.24)
   */
  oneOf?: ObjectConstraints[];
  /**
   * JSON Schema [properties keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.16)
   */
  properties?: {
    [k: string]: TypeConstraints | undefined;
  };
  /**
   * JSON Schema [patternProperties keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.17)
   */
  patternProperties?: {
    [k: string]: TypeConstraints | undefined;
  };
  /**
   * JSON Schema [required keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.15)
   */
  required?: string[];
}
export interface StringConstraints {
  /**
   * JSON Schema [allOf keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.22)
   */
  allOf?: StringConstraints[];
  /**
   * JSON Schema [anyOf keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.23)
   */
  anyOf?: StringConstraints[];
  /**
   * JSON Schema [enum keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.20)
   */
  enum?: string[];
  /**
   * Superset of JSON Schema [format keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-7)
   */
  format?: DateTime | DockerImageRef | Email | Hostname | Ipv4 | Ipv6 | Uri | Semver;
  /**
   * JSON Schema [maxLength keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.6)
   */
  maxLength?: number;
  /**
   * JSON Schema [minLength keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.7)
   */
  minLength?: number;
  not?: StringConstraints;
  /**
   * JSON Schema [oneOf keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.24)
   */
  oneOf?: StringConstraints[];
  /**
   * JSON Schema [pattern keyword](https://tools.ietf.org/html/draft-wright-json-schema-validation-00#section-5.8)
   */
  pattern?: string;
}
/**
 * Boolean parameter of an op
 */
export interface BooleanParam {
  description?: Markdown;
  /**
   * Default value
   */
  default?: boolean;
}
/**
 * Directory parameter of an op
 */
export interface DirParam {
  description?: Markdown;
  /**
   * Default value; an absolute path rooted at dir containing op.yml or, a relative path interpreted from where the op is started
   */
  default?: string;
  /**
   * If the directory is secret
   */
  isSecret?: boolean;
}
/**
 * File parameter of an op
 */
export interface FileParam {
  description?: Markdown;
  /**
   * Default value; an absolute path rooted at dir containing op.yml or, a relative path interpreted from where the op is started
   */
  default?: string;
  /**
   * If the file is secret
   */
  isSecret?: boolean;
}
/**
 * Number parameter of an op
 */
export interface NumberParam {
  description?: Markdown;
  default?: number;
  /**
   * If the number is secret
   */
  isSecret?: boolean;
  constraints?: NumberConstraints;
}
/**
 * Object parameter of an op
 */
export interface ObjectParam {
  description?: Markdown;
  default?: {
    [k: string]: unknown | undefined;
  };
  /**
   * If the object is secret
   */
  isSecret?: boolean;
  constraints?: ObjectConstraints;
}
/**
 * Socket parameter of an op
 */
export interface SocketParam {
  description?: Markdown;
  /**
   * If the socket is secret
   */
  isSecret?: boolean;
}
/**
 * String parameter of an op
 */
export interface StringParam {
  description?: Markdown;
  default?: string;
  /**
   * If the string is secret
   */
  isSecret?: boolean;
  constraints?: StringConstraints;
}
export interface ContainerCall {
  /**
   * Command run by a container; overrides any set at the image level
   *
   * Items: Expression coercible to string value
   */
  cmd?: (
    | unknown[]
    | boolean
    | number
    | {
        [k: string]: unknown | undefined;
      }
    | string
  )[];
  /**
   * Directories in the container
   */
  dirs?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^([a-zA-Z]:)?[-_.\/a-zA-Z0-9]+$".
     */
    [k: string]:
      | null
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
      | undefined;
  };
  /**
   * Environment variables in the container
   */
  envVars?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[^=]+$".
         */
        [k: string]: null | Name | undefined;
      }
    | string;
  /**
   * Files in the container
   */
  files?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^([a-zA-Z]:)?[-_.\/a-zA-Z0-9]+$".
     */
    [k: string]: null | Name | undefined;
  };
  image: {
    /**
     * Reference to an image
     */
    ref:
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string;
    pullCreds?: PullCreds;
  };
  /**
   * Name the container can be referenced by from other containers
   */
  name?:
    | unknown[]
    | boolean
    | number
    | {
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * Ports bound from the container to the host
   */
  ports?: {
    /**
     * Host port(s) to bind to
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "[0-9]+(-[0-9]+)?(tcp|udp)?".
     */
    [k: string]: string | number | undefined;
  };
  sockets?: {
    /**
     * Container socket address mapped to a socket ref
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "[:a-zA-Z0-9]+".
     */
    [k: string]: string | undefined;
  };
  /**
   * Working directory path (overrides any defined by image)
   */
  workDir?: string;
}
/**
 * Credentials used during authentication with the source of an image or op
 */
export interface PullCreds {
  /**
   * Expression coercible to string value
   */
  username:
    | unknown[]
    | boolean
    | number
    | {
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * Expression coercible to string value
   */
  password:
    | unknown[]
    | boolean
    | number
    | {
        [k: string]: unknown | undefined;
      }
    | string;
}
/**
 * Variables added to scope on each iteration
 */
export interface Vars {
  /**
   * Variable each iterations associated index will be made available through
   */
  index?: string;
  /**
   * Variable each iterations associated key will be made available through
   */
  key?: string;
  /**
   * Variable each iterations associated value will be made available through
   */
  value?: string;
}
