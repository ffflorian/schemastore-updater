/* eslint-disable */

/**
 * LiteRT-LM execution backend.
 */
export type Backend = 'cpu' | 'gpu' | 'npu';
/**
 * Target platform of a recommendation.
 */
export type Platform = 'android' | 'ios' | 'macos' | 'windows' | 'linux';

/**
 * litertlm_manifest.json sits at the root of a Hugging Face model repo that ships .litertlm bundles for the LiteRT-LM runtime. It describes every bundle in the repo: the backends each file is verified on, which file a device should pick, what it requires, and how fast it measured.
 * https://github.com/john-rocky/hf-to-litertlm/blob/main/manifest/SCHEMA.md
 */
export interface LitertlmDeploymentManifest {
  /**
   * Version of the manifest format. The 0.1 line is the compatibility line: a 0.1.x release only adds optional fields, so a 0.2 manifest is rejected rather than half-parsed.
   */
  manifest_schema: string;
  /**
   * Hugging Face repo id (owner/name) the manifest lives in. Together with a variant's file name this is the download address.
   */
  repo: string;
  /**
   * Date the manifest was generated (YYYY-MM-DD).
   */
  generated: string;
  /**
   * Tool that produced the manifest.
   */
  generator?: string;
  model: Model;
  /**
   * One entry per .litertlm file in the repo.
   *
   * @minItems 1
   */
  variants: [Variant, ...Variant[]];
  [k: string]: unknown | undefined;
}
/**
 * Model-level facts. Fields marked Derived are read out of the bundle header by the generator; the rest are curated.
 */
export interface Model {
  /**
   * Human-readable model name.
   */
  display_name: string;
  /**
   * Hugging Face id of the source model.
   */
  base_model?: string;
  /**
   * Free-text architecture label, e.g. "lfm2-hybrid" or "qwen3-dense".
   */
  architecture?: string;
  /**
   * Parameter count in billions.
   */
  parameters_b?: number;
  /**
   * SPDX identifier, or a pointer to the license file.
   */
  license?: string;
  /**
   * Derived: the bundle's max_num_tokens.
   */
  context_length?: number;
  capabilities?: Capabilities;
  session_defaults?: SessionDefaults;
  [k: string]: unknown | undefined;
}
/**
 * Capability flags derived from the bundle header, so they are readable before download.
 */
export interface Capabilities {
  /**
   * Derived: the bundle declares image input.
   */
  vision?: boolean;
  /**
   * Derived: the bundle declares audio input.
   */
  audio?: boolean;
  /**
   * Derived: whether the bundle declares a thinking channel, and its markers. Mirrors the first declared channel.
   */
  thinking?: {
    /**
     * True when the bundle declares a channel.
     */
    declared?: boolean;
    channel?: ChannelMarkers;
    [k: string]: unknown | undefined;
  };
  /**
   * Derived (manifest 0.1.1 and later): the bundle's full declared channel set, whether thinking, tool-call, or anything else the model declares.
   */
  channels?: DeclaredChannel[];
  [k: string]: unknown | undefined;
}
/**
 * Exact marker strings of a channel, whitespace included.
 */
export interface ChannelMarkers {
  /**
   * Opening marker, e.g. "<think>".
   */
  start?: string;
  /**
   * Closing marker, e.g. "</think>".
   */
  end?: string;
  [k: string]: unknown | undefined;
}
/**
 * One entry of the bundle's declared channel set (manifest 0.1.1 and later).
 */
export interface DeclaredChannel {
  /**
   * Channel name as declared in the bundle header.
   */
  name: string;
  /**
   * Opening marker, whitespace included.
   */
  start: string;
  /**
   * Closing marker, whitespace included.
   */
  end: string;
  /**
   * True when the bundle marks this channel as its reasoning channel.
   */
  is_reasoning?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Curated session knobs a wrapper should set that the engine cannot infer. An open object: readers take keys by name and ignore what they do not consume.
 */
export interface SessionDefaults {
  /**
   * A floor on the output-token budget (e.g. 2048 for reasoning models), never a cap.
   */
  max_output_tokens_min?: number;
  /**
   * Curated guidance worth surfacing to the app developer.
   */
  notes?: string;
  /**
   * Sampler hint.
   */
  temperature?: number;
  /**
   * Sampler hint.
   */
  top_k?: number;
  /**
   * Sampler hint.
   */
  top_p?: number;
  [k: string]: unknown | undefined;
}
/**
 * One .litertlm file. Fields marked Derived are read from Hub metadata or the bundle header; the rest are curated and carry evidence.
 */
export interface Variant {
  /**
   * File name inside the repo.
   */
  file: string;
  /**
   * Derived: SHA-256 of the file from Hub LFS metadata. Verify after download.
   */
  sha256?: string;
  /**
   * Derived: file size in bytes.
   */
  size_bytes?: number;
  /**
   * Quantization recipe, stated honestly, e.g. "int4 block-32 linears, fp32 activations".
   */
  quantization: string;
  /**
   * Backends this file is verified to generate on, not merely load. A resolver never returns a backend absent from this list.
   *
   * @minItems 1
   */
  backends: [Backend, ...Backend[]];
  /**
   * LiteRT-LM execution backend.
   */
  default_backend?: 'cpu' | 'gpu' | 'npu';
  /**
   * Earliest LiteRT-LM release the file is verified on, e.g. "0.15.0".
   */
  min_runtime_version?: string;
  /**
   * The fastest verified choice per platform and device class.
   */
  recommended?: Recommendation[];
  requirements?: Requirements;
  /**
   * Measured performance rows with conditions and provenance.
   */
  measured?: MeasuredRow[];
  /**
   * Short, factual known issues, with upstream links where they exist.
   */
  known_issues?: string[];
  /**
   * Derived: the bundle's section table.
   */
  sections?: Section[];
  [k: string]: unknown | undefined;
}
/**
 * The fastest verified backend for a platform, optionally narrowed to a device class.
 */
export interface Recommendation {
  platform: Platform;
  /**
   * Free-text device class the recommendation applies to, e.g. "midrange" or "flagship".
   */
  device_class?: string;
  /**
   * LiteRT-LM execution backend.
   */
  backend: 'cpu' | 'gpu' | 'npu';
  /**
   * Why this backend wins on this platform, in words that carry the evidence.
   */
  reason?: string;
  [k: string]: unknown | undefined;
}
/**
 * What the variant needs beyond the runtime version.
 */
export interface Requirements {
  /**
   * Peak resident memory observed while generating, in megabytes.
   */
  peak_ram_mb?: number;
  /**
   * Platform caveats to surface to the app developer.
   */
  platform_notes?: string[];
  [k: string]: unknown | undefined;
}
/**
 * One measured performance row. Every row states its conditions and its provenance; rows come from generation-verified backends only.
 */
export interface MeasuredRow {
  /**
   * Device the row was measured on, e.g. "Pixel 8a (Tensor G3)".
   */
  device: string;
  /**
   * Operating system of the device.
   */
  os?: string;
  /**
   * LiteRT-LM execution backend.
   */
  backend: 'cpu' | 'gpu' | 'npu';
  /**
   * LiteRT-LM release and build the row was measured with.
   */
  runtime: string;
  /**
   * Prompt length in tokens.
   */
  prompt_tokens?: number;
  /**
   * Number of generated tokens.
   */
  decode_tokens?: number;
  /**
   * Prefill throughput in tokens per second.
   */
  prefill_tps?: number | string;
  /**
   * Decode throughput in tokens per second.
   */
  decode_tps?: number | string;
  /**
   * Time to first token in seconds.
   */
  ttft_s?: number | string;
  /**
   * Context budget (max_num_tokens) the run used.
   */
  max_num_tokens?: number;
  /**
   * Whether a compiled-model cache was in use. "no" means a cold compile; caches mask load regressions and inflate disk cost.
   */
  cache?: string;
  /**
   * Number of runs the row summarizes.
   */
  runs?: number;
  /**
   * Engine load time in seconds under the row's cache condition (manifest 0.1.2 and later).
   */
  load_s?: number;
  /**
   * Peak resident memory during the run, in megabytes (manifest 0.1.2 and later).
   */
  peak_memory_mb?: number;
  /**
   * Date of the measurement (YYYY-MM-DD).
   */
  date: string;
  /**
   * Provenance of the numbers: which log or model-card table they come from.
   */
  source: string;
  /**
   * Pointer to the primary log. Stripped from published manifests and kept in the converter's own records.
   */
  evidence?: string;
  [k: string]: unknown | undefined;
}
/**
 * Derived: one row of the bundle's section table.
 */
export interface Section {
  /**
   * Section data type as named in the bundle header, e.g. "LlmMetadataProto", "HF_Tokenizer_Zlib" or "TFLiteModel".
   */
  type?: string;
  /**
   * Section size in bytes.
   */
  size_bytes?: number;
  /**
   * The section's model_type item when present, e.g. "tf_lite_prefill_decode" or "tf_lite_embedder".
   */
  model_type?: string;
  /**
   * The section's backend_constraint item when present: a comma-separated list of backends the engine will load it on.
   */
  backend_constraint?: string;
  [k: string]: unknown | undefined;
}
