/* eslint-disable */

/**
 * EndpointBinding is a gRPC method - HTTP endpoint binding specification.
 */
export type EndpointBinding =
  | {
      get: string;
      [k: string]: unknown | undefined;
    }
  | {
      put: string;
      [k: string]: unknown | undefined;
    }
  | {
      post: string;
      [k: string]: unknown | undefined;
    }
  | {
      delete: string;
      [k: string]: unknown | undefined;
    }
  | {
      patch: string;
      [k: string]: unknown | undefined;
    }
  | {
      custom: CustomPattern;
      [k: string]: unknown | undefined;
    };
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value1 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value2 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value3 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value4 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value5 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value6 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value7 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * Enum for the data type of a schema.
 */
export type SchemaDataType = (
  | 'UNKNOWN'
  | 0
  | 'ARRAY'
  | 1
  | 'BOOLEAN'
  | 2
  | 'INTEGER'
  | 3
  | 'NULL'
  | 4
  | 'NUMBER'
  | 5
  | 'OBJECT'
  | 6
  | 'STRING'
  | 7
)[];
/**
 * Represents an item in a SchemaList, which can be a schema or another SchemaList.
 */
export type Item =
  | {
      schema: Schema | undefined;
      [k: string]: unknown | undefined;
    }
  | {
      list: SchemaList;
      [k: string]: unknown | undefined;
    };
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value8 =
  | unknown[]
  | boolean
  | number
  | {
      [k: string]: unknown | undefined;
    }
  | string;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value9 =
  | unknown[]
  | boolean
  | number
  | {
      [k: string]: unknown | undefined;
    }
  | string;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value10 =
  | unknown[]
  | boolean
  | number
  | {
      [k: string]: unknown | undefined;
    }
  | string;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value11 =
  | unknown[]
  | boolean
  | number
  | {
      [k: string]: unknown | undefined;
    }
  | string;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value12 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value13 =
  | unknown[]
  | boolean
  | number
  | {
      [k: string]: unknown | undefined;
    }
  | string;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value14 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value15 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value16 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * The Link object represents a possible design-time link for a response. The presence of a link does not guarantee the caller’s ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations. See: https://spec.openapis.org/oas/v3.1.0#link-object
 */
export type Link =
  | (
      | {
          operation_ref: string;
          [k: string]: unknown | undefined;
        }
      | {
          operation_id: string;
          [k: string]: unknown | undefined;
        }
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value17 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value18 =
  | unknown[]
  | boolean
  | number
  | {
      [k: string]: unknown | undefined;
    }
  | string;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value19 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value20 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value21 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value22 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value23 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value24 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value25 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value26 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;
/**
 * `Value` represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values. A producer of value is expected to set one of these variants. Absence of any variant indicates an error. The JSON representation for `Value` is JSON value.
 */
export type Value27 =
  | (
      | unknown[]
      | boolean
      | number
      | {
          [k: string]: unknown | undefined;
        }
      | string
    )
  | undefined;

/**
 * Configuration files for gRPC API Gateway & OpenAPI generation plugin for protobuf (https://github.com/meshapi/grpc-api-gateway)
 */
export interface Config {
  gateway?: GatewaySpec;
  openapi?: OpenAPISpec;
}
/**
 * GatewaySpec holds gRPC gateway configurations.
 */
export interface GatewaySpec {
  /**
   * endpoints hold a series of endpoint binding specs.
   */
  endpoints?: EndpointBinding[];
}
/**
 * CustomPattern describes an HTTP pattern and custom method.
 */
export interface CustomPattern {
  /**
   * method is the custom HTTP method.
   */
  method?: string;
  /**
   * path is the HTTP path pattern.
   */
  path?: string;
}
/**
 * OpenAPISpec defines the overall OpenAPI documentation configuration.
 */
export interface OpenAPISpec {
  document?: Document;
  /**
   * services is used to configure OpenAPI v3.1 output for gRPC services.
   */
  services?: OpenAPIServiceSpec[];
  /**
   * messages is used to configure OpenAPI v3.1 output for protobuf messages.
   */
  messages?: OpenAPIMessageSpec[];
  /**
   * enums is used to configure OpenAPI v3.1 output for protobuf enums.
   */
  enums?: OpenAPIEnumSpec[];
}
/**
 * This is the root object of the OpenAPI document. See: https://spec.openapis.org/oas/v3.1.0#openapi-object
 */
export interface Document {
  info?: Info;
  /**
   * An array of Server Objects, which provide connectivity information to a target server. If the servers property is not provided, or is an empty array, the default value would be a Server Object with a url value of /. See: https://spec.openapis.org/oas/latest.html#server-object
   */
  servers?: Server[];
  components?: Components;
  /**
   * A declaration of which security mechanisms can be used across the API. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition. To make security optional, an empty security requirement ({}) can be included in the array. See: https://spec.openapis.org/oas/v3.1.0#security-requirement-object
   */
  security?: SecurityRequirement[];
  /**
   * A list of tags used by the document with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the Operation Object must be declared. The tags that are not declared MAY be organized randomly or based on the tools’ logic. Each tag name in the list MUST be unique. See: https://spec.openapis.org/oas/v3.1.0#tag-object
   */
  tags?: Tag[];
  external_docs?: ExternalDocumentation;
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value26 | undefined;
  };
  config?: DocumentConfiguration;
}
/**
 * Info captures OpenAPI Info object. NOTE: A generated value will be used for the required fields if they are left empty. See: https://spec.openapis.org/oas/v3.1.0#info-object
 */
export interface Info {
  /**
   * REQUIRED. The title of the API.
   */
  title?: string;
  /**
   * A short summary of the API.
   */
  summary?: string;
  /**
   * A description of the API. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * A URL to the Terms of Service for the API. This MUST be in the form of a URL.
   */
  terms_of_service?: string;
  contact?: Contact;
  license?: License;
  /**
   * REQUIRED. The version of the OpenAPI document.
   */
  version?: string;
  /**
   * Extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value2 | undefined;
  };
}
/**
 * Contact information for the exposed API. See: https://spec.openapis.org/oas/v3.1.0#contact-object
 */
export interface Contact {
  /**
   * The identifying name of the contact person/organization.
   */
  name?: string;
  /**
   * The URL pointing to the contact information. This MUST be in the form of a URL.
   */
  url?: string;
  /**
   * The email address of the contact person/organization. This MUST be in the form of an email address.
   */
  email?: string;
  /**
   * Extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value | undefined;
  };
}
/**
 * License information for the exposed API. See: https://spec.openapis.org/oas/v3.1.0#license-object
 */
export interface License {
  /**
   * REQUIRED. The license name used for the API.
   */
  name?: string;
  /**
   * An SPDX license expression for the API. The identifier field is mutually exclusive of the url field.
   */
  identifier?: string;
  /**
   * A URL to the license used for the API. This MUST be in the form of a URL. The url field is mutually exclusive of the identifier field.
   */
  url?: string;
  /**
   * Extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value1 | undefined;
  };
}
/**
 * An object representing a Server. See: https://spec.openapis.org/oas/v3.1.0#server-object
 */
export interface Server {
  /**
   * REQUIRED. A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the OpenAPI document is being served. Variable substitutions will be made when a variable is named in {brackets}.
   */
  url?: string;
  /**
   * An optional string describing the host designated by the URL. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * A map between a variable name and its value. The value is used for substitution in the server’s URL template.
   */
  variables?: {
    [k: string]: ServerVariable | undefined;
  };
  /**
   * Extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value4 | undefined;
  };
}
/**
 * An object representing a Server Variable for server URL template substitution. See: https://spec.openapis.org/oas/v3.1.0#server-variable-object
 */
export interface ServerVariable {
  /**
   * An enumeration of string values to be used if the substitution options are from a limited set. The array MUST NOT be empty.
   */
  enum_values?: string[];
  /**
   * REQUIRED. The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. Note this behavior is different than the Schema Object’s treatment of default values, because in those cases parameter values are optional. If the enum is defined, the value MUST exist in the enum’s values.
   */
  default_value?: string;
  /**
   * An optional description for the server variable. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * Extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value3 | undefined;
  };
}
/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.  See: https://spec.openapis.org/oas/latest.html#components-object
 */
export interface Components {
  schemas?: {
    [k: string]: Schema | undefined;
  };
  responses?: {
    [k: string]: Response | undefined;
  };
  parameters?: {
    [k: string]: Parameter | undefined;
  };
  examples?: {
    [k: string]: Example | undefined;
  };
  request_bodies?: {
    [k: string]: RequestBody | undefined;
  };
  headers?: {
    [k: string]: Header | undefined;
  };
  security_schemes?: {
    [k: string]: SecurityScheme | undefined;
  };
  links?: {
    [k: string]: Link | undefined;
  };
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value24 | undefined;
  };
}
/**
 * Schema represents an OpenAPI v3.1 Schema object, providing a structured definition for data types used in the API. For detailed information on the Schema object, refer to the OpenAPI Specification: https://spec.openapis.org/oas/v3.1.0#schema-object
 */
export interface Schema {
  discriminator?: Discriminator;
  external_docs?: ExternalDocumentation;
  /**
   * Extra can be used to add any other field in the schema. Since OpenAPI v3.1 arbitrary fields can be used in the schema objects. This field can be utilized to add those extra fields. Some of the JSON schema validation properties or core properties that are not captured as part of the gRPC REST Gateway OpenAPI objects.
   */
  extra?: {
    [k: string]: Value7 | undefined;
  };
  /**
   * Ref is used to define an external reference to include in the message. This could be a fully qualified proto message reference and start with a '.', and that type must be available in the proto files or their dependencies. If no message is identified, the Ref will be used verbatim in the output. For example:  `ref: ".google.protobuf.Timestamp"`. NOTE: This reference will only be honored when used in top-level schemas in responses only.
   */
  ref?: string;
  config?: FieldConfiguration;
  /**
   * The "$schema" keyword is used to identify the schema dialect and its associated URI for validation.  See: https://json-schema.org/draft/2020-12/json-schema-core#name-the-schema-keyword
   */
  schema?: string;
  /**
   * The title of the schema.
   */
  title?: string;
  /**
   * A regular expression pattern that the schema value should match. See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-6.3.3
   */
  pattern?: string;
  /**
   * A list of property names that are required in this schema.
   */
  required?: string[];
  /**
   * An array of unique values for enum validation. See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-6.1.2
   */
  enum?: string[];
  /**
   * The value of "multipleOf" MUST be a number, strictly greater than 0. A numeric instance is valid only if division by this keyword's value results in an integer.  See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-6.2.1
   */
  multiple_of?: number;
  /**
   * Maximum represents an inclusive upper limit for a numeric instance. The value of MUST be a number, representing an inclusive upper limit for a numeric instance. See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-6.2.2
   */
  maximum?: number;
  /**
   * See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-6.2.3
   */
  exclusive_maximum?: number;
  /**
   * minimum represents an inclusive lower limit for a numeric instance. The value of MUST be a number, representing an inclusive lower limit for a numeric instance. See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-6.2.4
   */
  minimum?: number;
  /**
   * See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-6.2.5
   */
  exclusive_minimum?: number;
  /**
   * A string instance is valid against this keyword if its length is less than, or equal to, the value of this keyword. See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-6.3.1
   */
  max_length?: string;
  /**
   * A string instance is valid against this keyword if its length is greater than, or equal to, the value of this keyword. See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-6.3.2
   */
  min_length?: string;
  /**
   * An array instance is valid against "maxItems" if its size is less than, or equal to, the value of this keyword. See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-6.4.1
   */
  max_items?: string;
  /**
   * An array instance is valid against "minItems" if its size is greater than, or equal to, the value of this keyword. See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-6.4.2
   */
  min_items?: string;
  /**
   * If set to true, all items must be unique.
   */
  unique_items?: boolean;
  max_properties?: string;
  min_properties?: string;
  types?: SchemaDataType;
  /**
   * A description of the schema using CommonMark syntax.
   */
  description?: string;
  items?: Item;
  /**
   * The properties keyword specifies the schema for properties in an object. Defining any property here for proto messages merges them with the automatically generated ones.
   */
  properties?: {
    [k: string]: Schema | undefined;
  };
  additional_properties?: Schema | undefined;
  default?: Value8;
  /**
   * The allOf keyword specifies that an instance must validate against all the schemas defined in the array. See: https://json-schema.org/draft/2020-12/json-schema-core#name-allof
   */
  all_of?: Schema | undefined[];
  /**
   * The anyOf keyword specifies that an instance must validate against at least one of the schemas defined in the array. See: https://json-schema.org/draft/2020-12/json-schema-core#name-anyof
   */
  any_of?: Schema | undefined[];
  /**
   * The oneOf keyword specifies that an instance must validate against exactly one of the schemas defined in the array. See: https://json-schema.org/draft/2020-12/json-schema-core#name-oneof
   */
  one_of?: Schema | undefined[];
  not?: Schema | undefined;
  /**
   * The readOnly keyword specifies that a property is read-only. See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-9.4
   */
  read_only?: boolean;
  /**
   * The writeOnly keyword specifies that a property is write-only. See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-9.4
   */
  write_only?: boolean;
  /**
   * Examples of valid instances for the schema. See: https://json-schema.org/draft/2020-12/json-schema-validation#section-9.5
   */
  examples?: Value9[];
  /**
   * The format keyword specifies a predefined format for the schema value. See: https://json-schema.org/draft-06/json-schema-validation#rfc.section.8
   */
  format?: string;
  /**
   * The deprecated keyword specifies that the schema is deprecated. See: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-9.3
   */
  deprecated?: boolean;
}
/**
 * See: https://spec.openapis.org/oas/latest.html#discriminator-object
 */
export interface Discriminator {
  /**
   * REQUIRED. The name of the property in the payload that will hold the discriminator value.
   */
  property_name?: string;
  /**
   * An object to hold mappings between payload values and schema names or references.
   */
  mapping?: {
    [k: string]: string | undefined;
  };
  /**
   * Extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value5 | undefined;
  };
}
/**
 * Allows referencing an external resource for extended documentation. See: https://spec.openapis.org/oas/v3.1.0#external-documentation-object
 */
export interface ExternalDocumentation {
  /**
   * A description of the target documentation. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * REQUIRED. The URL for the target documentation. This MUST be in the form of a URL.
   */
  url?: string;
  /**
   * Extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value6 | undefined;
  };
}
/**
 * FieldConfiguration provides additional field level properties used when generating the OpenAPI v3.1 file. These properties are not defined by OpenAPIv3, but they are used to control the generation.
 */
export interface FieldConfiguration {
  /**
   * Alternative parameter name when used as path parameter. If set, this will be used as the complete parameter name when this field is used as a path parameter. Use this to avoid having auto-generated path parameter names for overlapping paths.
   */
  path_param_name?: string;
  /**
   * Marks this field as required.
   */
  required?: boolean;
}
/**
 * Represents a list of schemas for array validation or for object properties.
 */
export interface SchemaList {
  items?: Schema | undefined[];
}
export interface Response {
  ref?: Reference;
  /**
   * A description which by default SHOULD override that of the referenced component. CommonMark syntax MAY be used for rich text representation. If the referenced object-type does not allow a description field, then this field has no effect.
   */
  description?: string;
  /**
   * Maps a header name to its definition. [RFC7230] states header names are case insensitive. If a response header is defined with the name "Content-Type", it SHALL be ignored.
   */
  headers?: {
    [k: string]: Header | undefined;
  };
  /**
   * A map containing descriptions of potential response payloads. The key is a media type or media type range and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*
   */
  content?: {
    [k: string]: MediaType | undefined;
  };
  /**
   * A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for Component Objects.
   */
  links?: {
    [k: string]: Link | undefined;
  };
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value17 | undefined;
  };
}
/**
 * Reference allows referencing other components in the OpenAPI document, both internally and externally. For detailed information on the Reference object, refer to the OpenAPI Specification: https://spec.openapis.org/oas/latest.html#reference-object
 */
export interface Reference {
  /**
   * REQUIRED. The reference identifier. This MUST be in the form of a URI. For proto messages, a fully qualified message name can be used (relative links are allowed where proto file is deduced). Example: ".google.protobuf.Timestamp"
   */
  uri?: string;
  /**
   * A short summary that, by default, SHOULD override that of the referenced component. If the referenced object-type does not allow a summary field, then this field has no effect.
   */
  summary?: string;
  /**
   * A description that, by default, SHOULD override that of the referenced component. CommonMark syntax MAY be used for rich text representation. If the referenced object-type does not allow a description field, then this field has no effect.
   */
  description?: string;
}
/**
 * Header object follows the structure of the Parameter object with the following changes: 1. name MUST NOT be specified, it is given in the corresponding headers map.  2. in MUST NOT be specified, it is implicitly in header. 3. All traits that are affected by the location MUST be applicable to a location of header (for example, style). See: https://spec.openapis.org/oas/v3.1.0#header-object
 */
export interface Header {
  ref?: Reference;
  /**
   * A description of the link. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * Determines whether this parameter is mandatory. If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.
   */
  required?: boolean;
  /**
   * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false.
   */
  deprecated?: boolean;
  /**
   * Sets the ability to pass empty-valued parameters. This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.
   */
  allow_empty_value?: boolean;
  /**
   * Describes how the parameter value will be serialized depending on the type of the parameter value. Default value for header parameters is "simple".
   */
  style?: string;
  /**
   * When this is true, parameter values of type array or object generate separate parameters for each value of the array or key-value pair of the map. For other types of parameters this property has no effect. When style is form, the default value is true. For all other styles, the default value is false.
   */
  explode?: boolean;
  schema?: Schema | undefined;
  example?: Value10;
  /**
   * Examples of the parameter’s potential value. Each example SHOULD contain a value in the correct format as specified in the parameter encoding. The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema that contains an example, the examples value SHALL override the example provided by the schema.
   */
  examples?: {
    [k: string]: Example | undefined;
  };
  /**
   * A map containing the representations for the parameter. The key is the media type and the value describes it. The map MUST only contain one entry.
   */
  content?: {
    [k: string]: MediaType | undefined;
  };
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value16 | undefined;
  };
}
/**
 * See: https://spec.openapis.org/oas/latest.html#example-object
 */
export interface Example {
  ref?: Reference;
  /**
   * Short description for the example.
   */
  summary?: string;
  /**
   * Long description for the example. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  value?: Value11;
  /**
   * A URI that points to the literal example. This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The value field and externalValue field are mutually exclusive. See the rules for resolving Relative References.
   */
  external_value?: string;
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value12 | undefined;
  };
}
/**
 * Each Media Type Object provides schema and examples for the media type identified by its key. See: https://spec.openapis.org/oas/latest.html#media-type-object
 */
export interface MediaType {
  schema?: Schema | undefined;
  example?: Value13;
  /**
   * Examples of the parameter’s potential value. Each example SHOULD contain a value in the correct format as specified in the parameter encoding. The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema that contains an example, the examples value SHALL override the example provided by the schema.
   */
  examples?: {
    [k: string]: Example | undefined;
  };
  /**
   * A map between a property name and its encoding information. The key, being the property name, MUST exist in the schema as a property. The encoding object SHALL only apply to requestBody objects when the media type is multipart or application/x-www-form-urlencoded.
   */
  encoding?: {
    [k: string]: Encoding | undefined;
  };
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value15 | undefined;
  };
}
/**
 * A single encoding definition applied to a single schema property. See: https://spec.openapis.org/oas/latest.html#encoding-object
 */
export interface Encoding {
  /**
   * The Content-Type for encoding a specific property. Default value depends on the property type: for object - application/json; for array – the default is defined based on the inner type; for all other cases the default is application/octet-stream. The value can be a specific media type (e.g. application/json), a wildcard media type (e.g. image/*), or a comma-separated list of the two types.
   */
  content_type?: string;
  /**
   * A map allowing additional information to be provided as headers, for example Content-Disposition. Content-Type is described separately and SHALL be ignored in this section. This property SHALL be ignored if the request body media type is not a multipart.
   */
  headers?: {
    [k: string]: Header | undefined;
  };
  /**
   * Describes how a specific property value will be serialized depending on its type. See Parameter Object for details on the style property. The behavior follows the same values as query parameters, including default values. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded or multipart/form-data. If a value is explicitly defined, then the value of contentType (implicit or explicit) SHALL be ignored.
   */
  style?: string;
  /**
   * When this is true, property values of type array or object generate separate parameters for each value of the array, or key-value-pair of the map. For other types of properties this property has no effect. When style is form, the default value is true. For all other styles, the default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded or multipart/form-data. If a value is explicitly defined, then the value of contentType (implicit or explicit) SHALL be ignored.
   */
  explode?: boolean;
  /**
   * Determines whether the parameter value SHOULD allow reserved characters, as defined by [RFC3986] :/?#[]@!$&'()*+,;= to be included without percent-encoding. The default value is false. This property SHALL be ignored if the request body media type is not application/x-www-form-urlencoded or multipart/form-data. If a value is explicitly defined, then the value of contentType (implicit or explicit) SHALL be ignored.
   */
  allow_reserved?: boolean;
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value14 | undefined;
  };
}
/**
 * Describes a single operation parameter. A unique parameter is defined by a combination of a name and location. See: https://spec.openapis.org/oas/latest.html#parameter-object
 */
export interface Parameter {
  ref?: Reference;
  /**
   * REQUIRED. The name of the parameter. Parameter names are case sensitive. If in is "path", the name field MUST correspond to a template expression occurring within the path field in the Paths Object. See Path Templating for further information. If in is "header" and the name field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored. For all other cases, the name corresponds to the parameter name used by the in property.
   */
  name?: string;
  /**
   * REQUIRED. The location of the parameter. Possible values are "query", "header", "path" or "cookie".
   */
  in?: string;
  /**
   * A description of the link. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * Determines whether this parameter is mandatory. If the parameter location is "path", this property is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its default value is false.
   */
  required?: boolean;
  /**
   * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false.
   */
  deprecated?: boolean;
  /**
   * Sets the ability to pass empty-valued parameters. This is valid only for query parameters and allows sending a parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.
   */
  allow_empty_value?: boolean;
  /**
   * Describes how the parameter value will be serialized depending on the type of the parameter value. Default value for header parameters is "simple".
   */
  style?: string;
  /**
   * When this is true, parameter values of type array or object generate separate parameters for each value of the array or key-value pair of the map. For other types of parameters this property has no effect. When style is form, the default value is true. For all other styles, the default value is false.
   */
  explode?: boolean;
  /**
   * Determines whether the parameter value SHOULD allow reserved characters, as defined by [RFC3986] :/?#[]@!$&'()*+,;= to be included without percent-encoding. This property only applies to parameters with an in value of query. The default value is false.
   */
  allow_reserved?: boolean;
  schema?: Schema | undefined;
  example?: Value18;
  /**
   * Examples of the parameter’s potential value. Each example SHOULD contain a value in the correct format as specified in the parameter encoding. The examples field is mutually exclusive of the example field. Furthermore, if referencing a schema that contains an example, the examples value SHALL override the example provided by the schema.
   */
  examples?: {
    [k: string]: Example | undefined;
  };
  /**
   * A map containing the representations for the parameter. The key is the media type and the value describes it. The map MUST only contain one entry.
   */
  content?: {
    [k: string]: MediaType | undefined;
  };
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value19 | undefined;
  };
}
/**
 * Describes a single request body. See: https://spec.openapis.org/oas/latest.html#request-body-object
 */
export interface RequestBody {
  ref?: Reference;
  /**
   * A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * REQUIRED. The content of the request body. The key is a media type or media type range and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*
   */
  content?: {
    [k: string]: MediaType | undefined;
  };
  /**
   * Determines if the request body is required in the request. Defaults to false.
   */
  required?: boolean;
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value20 | undefined;
  };
}
/**
 * Defines a security scheme that can be used by the operations. See: https://spec.openapis.org/oas/latest.html#security-scheme-object
 */
export interface SecurityScheme {
  ref?: Reference;
  /**
   * REQUIRED. The type of the security scheme. Valid values are "apiKey", "http", "mutualTLS", "oauth2", "openIdConnect".
   */
  type?: string;
  /**
   * A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  /**
   * REQUIRED. The name of the header, query or cookie parameter to be used.
   */
  name?: string;
  /**
   * REQUIRED. The location of the API key. Valid values are "query", "header" or "cookie".
   */
  in?: string;
  /**
   * REQUIRED. The name of the HTTP Authorization scheme to be used in the Authorization header as defined in [RFC7235]. The values used SHOULD be registered in the IANA Authentication Scheme registry.
   */
  scheme?: string;
  /**
   * A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.
   */
  bearer_format?: string;
  flows?: OAuthFlows;
  /**
   * REQUIRED. OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of a URL. The OpenID Connect standard requires the use of TLS.
   */
  open_id_connect_url?: string;
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value23 | undefined;
  };
}
/**
 * See: https://spec.openapis.org/oas/latest.html#oauth-flows-object
 */
export interface OAuthFlows {
  implicit?: OAuthFlow;
  password?: OAuthFlow;
  client_credentials?: OAuthFlow;
  authorization_code?: OAuthFlow;
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value22 | undefined;
  };
}
/**
 * Configuration details for a supported OAuth Flow See: https://spec.openapis.org/oas/latest.html#oauth-flow-object
 */
export interface OAuthFlow {
  authorization_url?: string;
  token_url?: string;
  refresh_url?: string;
  scopes?: {
    [k: string]: string | undefined;
  };
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value21 | undefined;
  };
}
/**
 * Lists the required security schemes to execute this operation. See: https://spec.openapis.org/oas/v3.1.0#security-requirement-object
 */
export interface SecurityRequirement {
  /**
   * Each name MUST correspond to a security scheme which is declared in the Security Schemes under the Components Object. If the security scheme is of type "oauth2" or "openIdConnect", then the value is a list of scope names required for the execution, and the list MAY be empty if authorization does not require a specified scope. For other security scheme types, the array MAY contain a list of role names which are required for the execution, but are not otherwise defined or exchanged in-band.
   */
  name?: string;
  scopes?: string[];
}
/**
 * Adds metadata to a single tag that is used by the Operation Object. See: https://spec.openapis.org/oas/v3.1.0#tag-object
 */
export interface Tag {
  /**
   * REQUIRED. The name of the tag.
   */
  name?: string;
  /**
   * A description for the tag. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  external_docs?: ExternalDocumentation;
  /**
   * Extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value25 | undefined;
  };
}
/**
 * DocumentConfiguration allows for controlling the default responses
 */
export interface DocumentConfiguration {
  /**
   * default_responses is used to control the default responses generated in this OpenAPI document.
   */
  default_responses?: {
    [k: string]: Response | undefined;
  };
}
/**
 * OpenAPIServiceSpec defines configuration for generating OpenAPI documentation for gRPC services.
 */
export interface OpenAPIServiceSpec {
  /**
   * selector is a dot-separated gRPC service method selector. If the selector begins with '~.', the current proto package will be added to the beginning of the path. For instance: `~.MyService`. Since no proto package can be deduced in the global config file, this alias cannot be used in the global config file. If the selector does not begin with '~.', it will be treated as a fully qualified method name (FQMN).
   */
  selector?: string;
  document?: Document;
  /**
   * methods maps each method to an operation configuration.
   */
  methods?: {
    [k: string]: Operation | undefined;
  };
}
/**
 * Describes a single API operation on a path. NOTE: this operation object is a partial implementation of the OpenAPI Operation object. Fields overridden here will only impact this method but will be used for all different HTTP bindings of the same method. See: https://spec.openapis.org/oas/v3.1.0#operation-object
 */
export interface Operation {
  /**
   * A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier.
   */
  tags?: string[];
  /**
   * A short summary of what the operation does. Default is the proto docstring for this method.
   */
  summary?: string;
  /**
   * A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;
  external_docs?: ExternalDocumentation;
  /**
   * Override the operation ID, if left unset, a default value will be provided.
   */
  operation_id?: string;
  /**
   * A list of parameters that are applicable for this operation. Note that path and query parameters get populated by the generator and will override any overlapping keys. You might use this to define headers and values that are not defined on the request payload.
   */
  parameters?: Parameter | undefined[];
  /**
   * The list of possible responses returned from executing this operation. NOTE: This list is additive meaning that it will override any generated response from the proto files.
   */
  responses?: {
    [k: string]: Response | undefined;
  };
  /**
   * Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is false.
   */
  deprecated?: boolean;
  /**
   * A declaration of which security mechanisms can be used for this operation. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. To make security optional, an empty security requirement ({}) can be included in the array. This definition overrides any declared top-level security. To remove a top-level security declaration, an empty array can be used.
   */
  security?: SecurityRequirement[];
  /**
   * An alternative server array to service this operation. If an alternative server object is specified at the Path Item Object or Root level, it will be overridden by this value.
   */
  servers?: Server[];
  /**
   * extensions that start with "x-" such as "x-foo" used to describe extra functionality that is not covered by standard OpenAPI specification. See: https://spec.openapis.org/oas/latest.html#specification-extensions
   */
  extensions?: {
    [k: string]: Value27 | undefined;
  };
}
/**
 * OpenAPIMessageSpec defines configuration for generating OpenAPI documentation for protobuf messages.
 */
export interface OpenAPIMessageSpec {
  /**
   * selector is a dot-separated protobuf message selector. If the selector begins with a '.', it will be treated as an absolute path. If it begins with '~.', the current proto package will be added to the beginning of the path. For instance: `~.MyMessage`. Since no proto package can be deduced in the global config file, this alias cannot be used in the global config file. If the path does not begin with a '.' or '~.', it will be treated as a relative path and a search from the current proto package will be performed in order to find the message.
   */
  selector?: string;
  schema?: Schema | undefined;
  /**
   * fields allows controlling the OpenAPI v3.1 generation for individual fields in this proto message.
   */
  fields?: {
    [k: string]: Schema | undefined;
  };
}
/**
 * OpenAPIEnumSpec defines configuration for generating OpenAPI documentation for protobuf enums.
 */
export interface OpenAPIEnumSpec {
  /**
   * selector is a dot-separated protobuf enum selector. If the selector begins with a '.', it will be treated as an absolute path. If it begins with '~.', the current proto package will be added to the beginning of the path. For instance: `~.MyEnum`. Since no proto package can be deduced in the global config file, this alias cannot be used in the global config file. If the path does not begin with a '.' or '~.', it will be treated as a relative path and a search from the current proto package will be performed in order to find the enum.
   */
  selector?: string;
  schema?: Schema | undefined;
}
