/* eslint-disable */

export interface K2FSignaturesV1 {
  version: 1;
  /**
   * @minItems 1
   * @maxItems 1
   */
  signatures: [
    {
      alg: 'ed25519';
      public_key: string;
      signature: string;
      /**
       * UTC unix seconds.
       */
      signed_at: number;
      signed_by?: string;
    }
  ];
}
