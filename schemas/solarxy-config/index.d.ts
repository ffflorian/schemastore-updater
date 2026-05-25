/* eslint-disable */

export type AssetCategory = 'hero' | 'prop' | 'environment' | 'default';

export interface ProjectConfig {
  budgets?: Budgets;
  filenames?: FilenameClassifier;
  format_version?: number;
  review?: ReviewSettings;
  thresholds?: ValidationThresholds;
  validation?: ValidationConfig;
}
export interface Budgets {
  default?: number;
  environment?: number;
  hero?: number;
  prop?: number;
}
export interface FilenameClassifier {
  rules?: ClassifierRule[];
}
export interface ClassifierRule {
  category: AssetCategory;
  pattern: string;
}
/**
 * Project-level review-system settings. User-level prefs (display name for the `author` field, panel open default) live in [`crate::preferences::ReviewPrefs`].
 */
export interface ReviewSettings {
  /**
   * Override location of the `.solarxy-review.json` sidecar. `None` (default) ⇒ sibling to the model file. Relative paths are resolved against the model's parent directory (so `".solarxy"` produces `<model_dir>/.solarxy/<stem>.solarxy-review.json`). Absolute paths are used as-is.
   */
  sidecar_dir?: string | null;
}
export interface ValidationThresholds {
  flipped_normal_dot?: number;
  triangle_budget_tolerance_percent?: number;
}
export interface ValidationConfig {
  allow_open_mesh?: boolean;
  degenerate_triangles?: boolean;
  flipped_normals?: boolean;
  index_buffer?: boolean;
  material_refs?: boolean;
  non_manifold_edges?: boolean;
  normal_mismatch?: boolean;
  triangle_budget?: boolean;
  uv_presence?: boolean;
}
