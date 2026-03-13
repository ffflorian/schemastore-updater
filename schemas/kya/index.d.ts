/* eslint-disable */

/**
 * JSON-LD contexts used to interpret terms. Must include the KYA context.
 *
 * @minItems 1
 */
export type JSONLDContext = [string, ...string[]];
/**
 * A URI value.
 */
export type URI = string;
/**
 * JSON-LD types for the verifiable presentation. Must include VerifiablePresentation and KyaManifest.
 *
 * @minItems 1
 */
export type ManifestTypes = {
  [k: string]: unknown | undefined;
} & [string, ...string[]];
/**
 * The KYA specification version this manifest conforms to.
 */
export type KYAVersion = string;
/**
 * A DID string per the DID URI scheme.
 */
export type DecentralizedIdentifier = string;
/**
 * A short human-readable name for the agent.
 */
export type AgentName = string;
/**
 * A concise human-readable description of the agent’s purpose and constraints.
 */
export type AgentLabel = string;
/**
 * A URI value.
 */
export type URI1 = string;
/**
 * URIs (often DIDs or fragments) identifying authorities overseeing the agent’s operation.
 */
export type GoverningAuthority = URI1[];
/**
 * Inventory of public keys (verification methods) used by the agent and its governance.
 *
 * @minItems 1
 */
export type VerificationMethods = [VerificationMethod, ...VerificationMethod[]];
/**
 * A DID string per the DID URI scheme.
 */
export type DecentralizedIdentifier1 = string;
/**
 * Verification method URIs authorized for authentication.
 *
 * @minItems 1
 */
export type AuthenticationKeys = [URI1, ...URI1[]];
/**
 * Verification method URIs authorized to assert statements (e.g., sign agent actions).
 *
 * @minItems 1
 */
export type AssertionKeys = [URI1, ...URI1[]];
/**
 * Verification method URIs authorized to invoke governance capabilities, including manifest updates.
 *
 * @minItems 1
 */
export type GovernanceKeys = [URI1, ...URI1[]];
/**
 * Verification method URIs used for key agreement (e.g., encrypted channels).
 */
export type KeyAgreementKeys = URI1[];
/**
 * Minimum number of valid governance proofs expected for the manifest (policy-level threshold).
 */
export type MinimumProofsRequired = number;
/**
 * A 32-byte SHA-256 digest encoded as 64 hex characters.
 */
export type SHA256HexDigest = string;
/**
 * Whether enforcement is strict (deny-by-default) or permissive (allow-by-default with exceptions).
 */
export type PermissionMode = 'strict' | 'permissive';
/**
 * Hostnames or domains the agent is allowed to interact with.
 */
export type PermittedDomains = string[];
/**
 * Region or jurisdiction codes in which operation is permitted (policy-defined).
 */
export type PermittedRegions = string[];
/**
 * Region or jurisdiction codes in which operation is forbidden (policy-defined).
 */
export type ForbiddenRegions = string[];
/**
 * Maximum permitted value for a single transaction (units defined by currency).
 */
export type MaximumTransactionValue = number;
/**
 * ISO 4217 currency code associated with value-denominated limits.
 */
export type Currency = string;
/**
 * A compact duration string (e.g., 30d, 12h, 60m).
 */
export type Duration = string;
/**
 * Optional deployment metadata, including update policy and confidential compute constraints.
 */
export type Deployment = {
  [k: string]: unknown | undefined;
};
/**
 * An RFC 3339 date-time string.
 */
export type DateTime = string;
/**
 * Optional treasury identifiers and usage classifications for operational funds or reserves.
 */
export type Treasury = TreasuryItem[];
/**
 * Either an embedded VC payload or a referenced VC by digest.
 */
export type VerifiableCredentialEntry = EmbeddedVerifiableCredential | ReferencedVerifiableCredential;
/**
 * A VC embedded directly in the manifest.
 */
export type EmbeddedVerifiableCredential = (
  | {
      validFrom: DateTime;
      [k: string]: unknown | undefined;
    }
  | {
      issuanceDate: DateTime;
      [k: string]: unknown | undefined;
    }
) & {
  [k: string]: unknown | undefined;
} & VCPayloadDispatch;
/**
 * Conditional typing rules mapping known VC types to credentialSubject shapes.
 */
export type VCPayloadDispatch = {
  [k: string]: unknown | undefined;
};
/**
 * Evidence credentials embedded or referenced by digest for verification workflows.
 */
export type VerifiableCredentials = VerifiableCredentialEntry[];
/**
 * Cryptographic proofs establishing integrity and authorized governance invocation.
 *
 * @minItems 1
 */
export type ManifestProofs = [ManifestProof, ...ManifestProof[]];

/**
 * Know Your Agent (KYA) Manifest for autonomous AI agents (identity, governance, and operational constraints).
 */
export interface KYAManifest {
  '@context': JSONLDContext;
  id: URI;
  type: ManifestTypes;
  kyaVersion: KYAVersion;
  agentId: DecentralizedIdentifier;
  name?: AgentName;
  label?: AgentLabel;
  governingAuthority?: GoverningAuthority;
  verificationMethod: VerificationMethods;
  authentication: AuthenticationKeys;
  assertionMethod: AssertionKeys;
  capabilityInvocation: GovernanceKeys;
  keyAgreement?: KeyAgreementKeys;
  minProofsRequired?: MinimumProofsRequired;
  legal?: LegalTerms;
  permissionMode?: PermissionMode;
  permittedDomains?: PermittedDomains;
  permittedRegions?: PermittedRegions;
  forbiddenRegions?: ForbiddenRegions;
  maxTransactionValue?: MaximumTransactionValue;
  currency?: Currency;
  operatingLimits?: OperatingLimits;
  signingPolicy?: SigningPolicy;
  deployment?: Deployment;
  governance?: Governance;
  treasury?: Treasury;
  verifiableCredential?: VerifiableCredentials;
  proof: ManifestProofs;
  [k: string]: unknown | undefined;
}
/**
 * A DID verification method entry (key material and controller).
 */
export interface VerificationMethod {
  id: URI1;
  type: string;
  controller: DecentralizedIdentifier1;
  publicKeyMultibase: string;
  [k: string]: unknown | undefined;
}
/**
 * Optional legal terms and dispute resolution metadata.
 */
export interface LegalTerms {
  termsUri?: URI1;
  termsHash?: SHA256HexDigest;
  disputeResolution?: DisputeResolutionPath[];
  [k: string]: unknown | undefined;
}
/**
 * One dispute resolution mechanism, ordered by priority.
 */
export interface DisputeResolutionPath {
  priority?: number;
  mechanism?: 'onChain' | 'digitalLegalFiling' | 'analogCourt' | 'arbitrator' | 'ai' | 'aiHitl';
  entity?:
    | string
    | {
        [k: string]: unknown | undefined;
      };
  escalationPossible?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Rate and spend-limiting constraints, such as rolling period spend caps.
 */
export interface OperatingLimits {
  periodSpendLimit?: number;
  periodDuration?: Duration;
  [k: string]: unknown | undefined;
}
/**
 * Policy constraints defining when multi-signature or specific signers are required.
 */
export interface SigningPolicy {
  defaultSignaturesRequired: number;
  constraints?: SigningConstraint[];
  [k: string]: unknown | undefined;
}
/**
 * An intent-scoped signing rule and its signature requirement.
 */
export interface SigningConstraint {
  intent: string;
  condition?: {
    [k: string]: unknown | undefined;
  };
  requirement: {
    threshold: number;
    /**
     * @minItems 1
     */
    signers: [string, ...string[]];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Optional governance endpoints, visibility, and oracle references.
 */
export interface Governance {
  controlUri: URI1;
  validFrom?: DateTime;
  validUntil?: DateTime;
  pulseInterval?: number;
  visibility?: 'public' | 'private' | 'permissioned';
  statusUri?: URI1;
  telemetryUri?: URI1;
  oracles?: Oracle[];
  [k: string]: unknown | undefined;
}
/**
 * A governance oracle definition used for external inputs (e.g., prices, FX rates, attestations).
 */
export interface Oracle {
  id: string;
  /**
   * @minItems 1
   */
  serviceEndpoint: [URI1, ...URI1[]];
  providerDid?: DecentralizedIdentifier1;
  /**
   * @minItems 1
   */
  purpose: [string, ...string[]];
  role?: 'primary' | 'backup' | 'validator';
  safetyBounds?: OracleSafetyBounds;
  [k: string]: unknown | undefined;
}
/**
 * Optional bounds for oracle freshness, deviation, and confidence.
 */
export interface OracleSafetyBounds {
  maxStaleness?: number;
  maxDeviation?: number;
  slippageTolerance?: number;
  minConfidence?: number;
  [k: string]: unknown | undefined;
}
/**
 * A treasury identifier and its intended operational usage.
 */
export interface TreasuryItem {
  id: URI1;
  /**
   * @minItems 1
   */
  assetHints: [string, ...string[]];
  /**
   * @minItems 1
   */
  networks: [string, ...string[]];
  usage: 'operational' | 'reserve' | 'escrow' | 'receivable';
  [k: string]: unknown | undefined;
}
/**
 * A VC referenced by digest (and optionally a retrievable location).
 */
export interface ReferencedVerifiableCredential {
  id: URI1;
  /**
   * @minItems 1
   */
  type: [string, ...string[]];
  issuer: DecentralizedIdentifier1;
  digestMultibase: string;
  location?: URI1;
  [k: string]: unknown | undefined;
}
/**
 * A data integrity proof used to authorize capabilityInvocation for the manifest.
 */
export interface ManifestProof {
  type: string;
  cryptosuite?: string;
  verificationMethod: URI1;
  proofPurpose: 'capabilityInvocation';
  proofValue: string;
  [k: string]: unknown | undefined;
}
