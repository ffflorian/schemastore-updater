/* eslint-disable */

/**
 * Bozr test suite schema definition
 */
export type HttpsJsonSchemastoreOrgBozrJson = {
  /**
   * Short name of the test that will be used in reports.
   */
  name?: string;
  /**
   * Long description of the test.
   */
  description?: string;
  /**
   * Ignore test due to a reason
   */
  ignore?: string;
  calls: {
    args?: {
      [k: string]: unknown | undefined;
    };
    on: {
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'CONNECT' | 'TRACE';
      url: string;
      headers?: {
        Accept?: 'application/json' | 'application/xml' | 'text/xml' | 'text/csv';
        'Content-Type'?: 'application/json' | 'application/xml' | 'text/xml' | 'text/csv';
        Authorization?: string;
        [k: string]: unknown | undefined;
      };
      params?: {
        [k: string]: unknown | undefined;
      };
      body?:
        | string
        | {
            [k: string]: unknown | undefined;
          };
      bodyFile?: string;
    };
    expect: {
      statusCode?:
        | 200
        | 201
        | 202
        | 203
        | 204
        | 205
        | 206
        | 207
        | 208
        | 209
        | 226
        | 300
        | 301
        | 302
        | 303
        | 304
        | 305
        | 306
        | 307
        | 308
        | 400
        | 401
        | 402
        | 403
        | 404
        | 405
        | 406
        | 407
        | 408
        | 409
        | 410
        | 411
        | 412
        | 413
        | 414
        | 415
        | 416
        | 417
        | 418
        | 421
        | 422
        | 423
        | 424
        | 426
        | 428
        | 429
        | 431
        | 451
        | 500
        | 501
        | 502
        | 503
        | 504
        | 505
        | 506
        | 507
        | 508
        | 510
        | 511;
      contentType?: string;
      headers?: {
        [k: string]: unknown | undefined;
      };
      body?: {
        [k: string]: unknown | undefined;
      };
      exactBody?: {
        [k: string]: unknown | undefined;
      };
      bodyPath?: {
        [k: string]: unknown | undefined;
      };
      bodySchemaFile?: string;
      bodySchema?: string;
      bodySchemaURI?: string;
      /**
       * @minItems 1
       */
      absent?: [unknown, ...unknown[]];
    };
    remember?: {
      bodyPath?: {
        [k: string]: unknown | undefined;
      };
      headers?: {
        [k: string]: unknown | undefined;
      };
    };
  }[];
}[];
