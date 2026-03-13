/* eslint-disable */

/**
 * Business model metadata
 */
export type Meta = {
  [k: string]: unknown | undefined;
} & {
  /**
   * Name of the business model
   */
  name: string;
  /**
   * One-liner description
   */
  tagline?: string;
  /**
   * Creation date (ISO 8601)
   */
  created?: string;
  /**
   * Last updated date (ISO 8601)
   */
  updated?: string;
  /**
   * Portfolio position (Osterwalder's Invincible Company)
   */
  portfolio: 'explore' | 'exploit';
  /**
   * Current stage within the portfolio
   */
  stage: string;
  /**
   * Relative path to parent business model file
   */
  derived_from?: string;
};

/**
 * A YAML-based format for describing business models, based on Alexander Osterwalder's work (v2 structure)
 */
export interface BMMLBusinessModelV2 {
  /**
   * BMML format version
   */
  version: '2.0';
  meta: Meta;
  /**
   * Customer segments the business targets
   */
  customer_segments?: CustomerSegment[];
  /**
   * Value propositions offered to customer segments
   */
  value_propositions?: ValueProposition[];
  /**
   * Connections between value propositions and customer segments (VPC detail)
   */
  fits?: Fit[];
  /**
   * Channels to reach customer segments
   */
  channels?: Channel[];
  /**
   * Types of relationships with customer segments
   */
  customer_relationships?: CustomerRelationship[];
  /**
   * Revenue streams from customer segments
   */
  revenue_streams?: RevenueStream[];
  /**
   * Key resources needed to deliver value propositions
   */
  key_resources?: KeyResource[];
  /**
   * Key activities needed to deliver value propositions
   */
  key_activities?: KeyActivity[];
  /**
   * Key partnerships that provide resources or activities
   */
  key_partnerships?: KeyPartnership[];
  /**
   * Cost items (replaces v1 cost_structure)
   */
  costs?: Cost[];
}
/**
 * A customer segment with optional profile (jobs, pains, gains)
 */
export interface CustomerSegment {
  /**
   * Unique identifier with cs- prefix
   */
  id: string;
  /**
   * Name of the customer segment
   */
  name: string;
  /**
   * Who they are
   */
  description?: string;
  /**
   * Jobs to be done (Customer Profile)
   */
  jobs?: Job[];
  /**
   * Customer pains (Customer Profile)
   */
  pains?: Pain[];
  /**
   * Customer gains (Customer Profile)
   */
  gains?: Gain[];
}
/**
 * A job the customer is trying to accomplish
 */
export interface Job {
  /**
   * Unique identifier with job- prefix
   */
  id: string;
  /**
   * What they're trying to accomplish
   */
  description: string;
}
/**
 * A customer pain point
 */
export interface Pain {
  /**
   * Unique identifier with pain- prefix
   */
  id: string;
  /**
   * What frustrates them or blocks them
   */
  description: string;
}
/**
 * A desired customer gain
 */
export interface Gain {
  /**
   * Unique identifier with gain- prefix
   */
  id: string;
  /**
   * What they want to achieve or experience
   */
  description: string;
}
/**
 * A value proposition with optional value map (products, pain relievers, gain creators)
 */
export interface ValueProposition {
  /**
   * Unique identifier with vp- prefix
   */
  id: string;
  /**
   * Name of the value proposition
   */
  name: string;
  /**
   * What you offer
   */
  description?: string;
  /**
   * Products and services that deliver this value (Value Map)
   */
  products_services?: ProductService[];
  /**
   * How this VP relieves customer pains (Value Map)
   */
  pain_relievers?: PainReliever[];
  /**
   * How this VP creates customer gains (Value Map)
   */
  gain_creators?: GainCreator[];
}
/**
 * A product or service offering
 */
export interface ProductService {
  /**
   * Unique identifier with ps- prefix
   */
  id: string;
  /**
   * Name of the product or service
   */
  name: string;
}
/**
 * How a value proposition relieves a specific pain
 */
export interface PainReliever {
  /**
   * Unique identifier with pr- prefix
   */
  id: string;
  /**
   * How it relieves pain
   */
  name: string;
}
/**
 * How a value proposition creates a specific gain
 */
export interface GainCreator {
  /**
   * Unique identifier with gc- prefix
   */
  id: string;
  /**
   * How it creates gain
   */
  name: string;
}
/**
 * A fit between value propositions and customer segments (VPC detail)
 */
export interface Fit {
  /**
   * Unique identifier with fit- prefix
   */
  id: string;
  /**
   * Which VP(s) and CS(s) this fit connects
   */
  for: {
    /**
     * Value propositions in this fit
     *
     * @minItems 1
     */
    value_propositions: [string, ...string[]];
    /**
     * Customer segments in this fit
     *
     * @minItems 1
     */
    customer_segments: [string, ...string[]];
  };
  /**
   * Tuple mappings: [reliever/creator, pain/gain]
   */
  mappings?: [string, string][];
}
/**
 * A channel to reach customer segments with value propositions
 */
export interface Channel {
  /**
   * Unique identifier with ch- prefix
   */
  id: string;
  /**
   * Name of the channel
   */
  name: string;
  /**
   * Which VPs and CSs this channel serves
   */
  for?: {
    /**
     * Value propositions delivered through this channel
     */
    value_propositions?: string[];
    /**
     * Customer segments reached through this channel
     */
    customer_segments?: string[];
  };
}
/**
 * A type of relationship with customer segments
 */
export interface CustomerRelationship {
  /**
   * Unique identifier with cr- prefix
   */
  id: string;
  /**
   * Name/type of relationship
   */
  name: string;
  /**
   * Which customer segments this relationship applies to
   */
  for?: {
    /**
     * Customer segments with this relationship type
     */
    customer_segments?: string[];
  };
}
/**
 * A revenue stream from customer segments for value propositions
 */
export interface RevenueStream {
  /**
   * Unique identifier with rs- prefix
   */
  id: string;
  /**
   * Name of the revenue stream
   */
  name: string;
  /**
   * Who pays (source of revenue)
   */
  from?: {
    /**
     * Customer segments this revenue comes from
     */
    customer_segments?: string[];
  };
  /**
   * What they pay for
   */
  for?: {
    /**
     * Value propositions this revenue is for
     */
    value_propositions?: string[];
  };
}
/**
 * A key resource needed to deliver value
 */
export interface KeyResource {
  /**
   * Unique identifier with kr- prefix
   */
  id: string;
  /**
   * Name of the resource
   */
  name: string;
  /**
   * Which value propositions need this resource
   */
  for?: {
    /**
     * Value propositions that need this resource
     */
    value_propositions?: string[];
  };
}
/**
 * A key activity needed to deliver value
 */
export interface KeyActivity {
  /**
   * Unique identifier with ka- prefix
   */
  id: string;
  /**
   * Name of the activity
   */
  name: string;
  /**
   * Which value propositions require this activity
   */
  for?: {
    /**
     * Value propositions that require this activity
     */
    value_propositions?: string[];
  };
}
/**
 * A key partnership that provides resources or activities
 */
export interface KeyPartnership {
  /**
   * Unique identifier with kp- prefix
   */
  id: string;
  /**
   * Name of the partner
   */
  name: string;
  /**
   * Which resources/activities this partner provides
   */
  for?: {
    /**
     * Resources this partner provides
     */
    key_resources?: string[];
    /**
     * Activities this partner performs
     */
    key_activities?: string[];
  };
}
/**
 * A cost item linked to resources or activities
 */
export interface Cost {
  /**
   * Unique identifier with cost- prefix
   */
  id: string;
  /**
   * Name of the cost
   */
  name: string;
  /**
   * Which resources/activities incur this cost
   */
  for?: {
    /**
     * Resources that incur this cost
     */
    key_resources?: string[];
    /**
     * Activities that incur this cost
     */
    key_activities?: string[];
  };
}
