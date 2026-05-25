/* eslint-disable */

/**
 * Categorical compliance screening receipt for agentic-payment flows. Emitted by a screening provider when a wallet, agent, or payee passes the regulatory gate at admission time. Retained as part of an audit chain under framework-bound retention obligations (UK MLR 2017, EU AMLD5/6, MiCA Art. 80, AMLR Art. 56, DORA Art. 14). The categorical screen result (ALLOW / REFER / DENY) is load-bearing for downstream regulatory obligations -- a REFER under UK POCA 2002 s.330 carries a mandatory SAR obligation that a DENY does not, so a score / tier projection is NOT a valid substitute. Canonicalisation discipline pinned in-band via canon_version; see https://github.com/x402-foundation/x402/pull/2436.
 */
export interface AlgoVoiComplianceReceiptV1 {
  /**
   * Content-addressed identity reference for the payer. Typically of the form 'sha256:<lowercase-hex>' where the hash is taken over the JCS-canonical bytes of an identity object. The receipt MUST NOT carry cleartext identity content -- only the content-addressed reference -- so the screening provider's retention layer is GDPR Art. 5(1)(c) minimal by construction.
   */
  payer_ref: string;
  /**
   * Categorical screening outcome. ALLOW = clear to proceed under regulatory gate. REFER = enhanced due diligence required (and under UK POCA 2002 s.330 a mandatory SAR obligation if jurisdiction includes UK). DENY = transaction refused under sanctions / AML rule. Closed set; a score / tier projection is NOT a valid substitute and would lose the SAR distinction.
   */
  screen_result: 'ALLOW' | 'REFER' | 'DENY';
  /**
   * Epoch-millisecond integer timestamp of the screening decision. Substrate Rule 1: timestamp_ms MUST be an integer, not a float, not an RFC 3339 string -- the integer-millisecond shape is what makes year-five re-canonicalisation deterministic from retained bytes alone.
   */
  screen_timestamp_ms: number;
  /**
   * Decentralised Identifier of the screening provider. Most production deployments use did:web (e.g. did:web:api.algovoi.co.uk) so the public key for verification is resolvable via the DID Document at https://<host>/.well-known/did.json.
   */
  screen_provider_did: string;
  /**
   * Ordered list of jurisdictions under which the screening was performed. Element order is load-bearing: per RFC 8785 §3.2.3 array element order is preserved in canonicalisation, so ['UK','EU'] and ['EU','UK'] produce distinct canonical bytes and distinct SHA-256 hashes. Producer-side ordering MUST match the order under which the regulatory rules were applied.
   *
   * @minItems 1
   */
  jurisdiction_flags: [string, ...string[]];
  /**
   * In-band canonicalisation rule version pin. Carries the version of the JCS canonicalisation discipline active at emission time, so a year-five re-canonicalisation against retained bytes alone knows which rule to apply. The discipline is defined in x402-foundation/x402 PR #2436 (three-voice coalition co-signed). Current value: jcs-rfc8785-v1.
   */
  canon_version: 'jcs-rfc8785-v1';
}
