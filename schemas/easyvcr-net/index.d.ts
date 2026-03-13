/* eslint-disable */

/**
 * How long, in milliseconds, the recorded request took to complete
 */
export type Duration = number;
/**
 * When the request was recorded
 */
export type RecordedAt = string;
/**
 * The request body
 */
export type Body = string;
/**
 * The type of content in the request body
 */
export type BodyContentType = string;
/**
 * The HTTP method
 */
export type Method = string;
/**
 * The request URI
 */
export type Uri = string;
/**
 * The response body
 */
export type Body1 = string;
/**
 * The type of content in the response body
 */
export type BodyContentType1 = string;
/**
 * The HTTP version
 */
export type HTTPVersion = string;
/**
 * The HTTP status code
 */
export type Code = number;
/**
 * The HTTP status code description
 */
export type Description = string;
/**
 * A schema for an EasyVCR .NET recording
 * https://github.com/EasyPost/easyvcr-csharp
 */
export type EasyVCRNETCassette = {
  Duration?: Duration;
  RecordedAt?: RecordedAt;
  Request?: Request;
  Response?: Response;
  [k: string]: unknown | undefined;
}[];

/**
 * The request that was recorded
 */
export interface Request {
  Body?: Body;
  BodyContentType?: BodyContentType;
  ContentHeaders?: ContentHeaders;
  Method?: Method;
  RequestHeaders?: RequestHeaders;
  Uri?: Uri;
  [k: string]: unknown | undefined;
}
/**
 * The request content headers
 */
export interface ContentHeaders {
  [k: string]: unknown | undefined;
}
/**
 * The request headers
 */
export interface RequestHeaders {
  [k: string]: unknown | undefined;
}
/**
 * The response that was recorded
 */
export interface Response {
  Body?: Body1;
  BodyContentType?: BodyContentType1;
  ContentHeaders?: ContentHeaders1;
  HttpVersion?: HTTPVersion;
  ResponseHeaders?: ResponseHeaders;
  Status?: Status;
  [k: string]: unknown | undefined;
}
/**
 * The response content headers
 */
export interface ContentHeaders1 {
  [k: string]: unknown | undefined;
}
/**
 * The response headers
 */
export interface ResponseHeaders {
  [k: string]: unknown | undefined;
}
/**
 * The HTTP status
 */
export interface Status {
  Code?: Code;
  Message?: Description;
  [k: string]: unknown | undefined;
}
