/* eslint-disable */

/**
 * @minItems 1
 */
export type ObservableNames = [string, ...string[]];

export interface HttpsJsonSchemastoreOrgPopxfCorr10Json {
  $schema: 'https://json.schemastore.org/popxf-corr-1.0.json';
  [k: string]:
    | {
        row_names: ObservableNames;
        col_names: ObservableNames;
        correlations: {
          [k: string]:
            | (
                | [[number, ...number[]], ...[number, ...number[]][]]
                | [
                    [
                      [[number, ...number[]], ...[number, ...number[]][]],
                      ...[[number, ...number[]], ...[number, ...number[]][]][]
                    ],
                    ...[
                      [[number, ...number[]], ...[number, ...number[]][]],
                      ...[[number, ...number[]], ...[number, ...number[]][]][]
                    ][]
                  ]
              )
            | undefined;
        };
      }
    | undefined;
}
