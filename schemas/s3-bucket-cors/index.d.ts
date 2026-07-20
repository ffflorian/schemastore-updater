/* eslint-disable */

/**
 * JSON CORS configuration document for an Amazon S3 bucket. Matches the array-of-rules shape accepted by the S3 console and PutBucketCors.
 *
 * @minItems 1
 * @maxItems 100
 */
export type AmazonS3BucketCORSConfiguration = [
  {
    /**
     * Optional unique identifier for the rule.
     */
    ID?: string;
    /**
     * HTTP methods the origin is allowed to execute.
     *
     * @minItems 1
     */
    AllowedMethods: ['GET' | 'PUT' | 'POST' | 'DELETE' | 'HEAD', ...('GET' | 'PUT' | 'POST' | 'DELETE' | 'HEAD')[]];
    /**
     * Origins allowed to make cross-origin requests. Use * to allow all.
     *
     * @minItems 1
     */
    AllowedOrigins: [string, ...string[]];
    /**
     * Headers allowed in a preflight Access-Control-Request-Headers value. Supports a single * wildcard per entry.
     */
    AllowedHeaders?: string[];
    /**
     * Response headers that browsers may expose to client applications.
     */
    ExposeHeaders?: string[];
    /**
     * Seconds browsers may cache a preflight response.
     */
    MaxAgeSeconds?: number;
  },
  ...{
    /**
     * Optional unique identifier for the rule.
     */
    ID?: string;
    /**
     * HTTP methods the origin is allowed to execute.
     *
     * @minItems 1
     */
    AllowedMethods: ['GET' | 'PUT' | 'POST' | 'DELETE' | 'HEAD', ...('GET' | 'PUT' | 'POST' | 'DELETE' | 'HEAD')[]];
    /**
     * Origins allowed to make cross-origin requests. Use * to allow all.
     *
     * @minItems 1
     */
    AllowedOrigins: [string, ...string[]];
    /**
     * Headers allowed in a preflight Access-Control-Request-Headers value. Supports a single * wildcard per entry.
     */
    AllowedHeaders?: string[];
    /**
     * Response headers that browsers may expose to client applications.
     */
    ExposeHeaders?: string[];
    /**
     * Seconds browsers may cache a preflight response.
     */
    MaxAgeSeconds?: number;
  }[]
];
