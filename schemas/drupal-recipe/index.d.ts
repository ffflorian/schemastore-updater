/* eslint-disable */

export type UserInterfaceNameForTheRecipe = string;
export type TheTypeOfTheRecipeUsedForAdministrativePurposes =
  | 'Administration'
  | 'Block type'
  | 'Comment type'
  | 'Contact form'
  | 'Content field'
  | 'Content type'
  | 'Editor'
  | 'Maintenance'
  | 'Media type'
  | 'Performance'
  | 'Responsive image'
  | 'Search'
  | 'Site'
  | 'Taxonomy'
  | 'Text format'
  | 'Text format editor'
  | 'Theme'
  | 'User role'
  | 'User type'
  | 'Users'
  | 'Workflow';
export type ListOfRecipesThatThisRecipeDependsOnRecipesMustBeInstalledRelativeToTheDrupalRootDirectory = string[];
export type ListOfModulesToBeInstalled = string[];
/**
 * The same as set, but accepts multiple property/value pairs.
 */
export type SetMultiple = [] | [Set];
/**
 * The same as setThirdPartySetting, but accepts multiple property/value pairs.
 */
export type SetThirdPartySettings = [] | [SetThirdPartySetting];
/**
 * Value: The component id
 */
export type HidesAComponentFromAnEntityViewDisplayOrEntityFormDisplay = string;
/**
 * Value: The list of component ids
 */
export type HideComponents = [] | [string];
/**
 * Allows adding adding the configuration for multiple fields.
 */
export type SetComponents = [] | [SetComponent];
export type SetsWhetherLayoutBuilderOverridesAreAllowed = boolean;
/**
 * The contents are stored in a directory relative to the recipe file.
 */
export type ListOfContentToBeCreated = [] | [string];

export interface NewRecipe {
  name: UserInterfaceNameForTheRecipe;
  description: string;
  type: TheTypeOfTheRecipeUsedForAdministrativePurposes;
  recipes?: ListOfRecipesThatThisRecipeDependsOnRecipesMustBeInstalledRelativeToTheDrupalRootDirectory;
  install?: ListOfModulesToBeInstalled;
  config?: {
    import?: AListOfConfigurationsToBeInstalled;
    actions?: KeyValue;
    [k: string]: unknown | undefined;
  };
  content?: ListOfContentToBeCreated;
  [k: string]: unknown | undefined;
}
/**
 * The key is the configuration provider and the value is the list of configuration names.
 */
export interface AListOfConfigurationsToBeInstalled {
  [k: string]: (string | string[]) | undefined;
}
/**
 * The key is the configuration object targeted and the value is the action to be performed. For each action additional properties can be provided.
 */
export interface KeyValue {
  [k: string]:
    | {
        set?: Set1;
        setMultiple?: SetMultiple;
        /**
         * Creates a clone of any config entity with a new ID.
         */
        cloneAs?: string;
        create?: Create1;
        createIfNotExists?: CreateIfNotExists1;
        createForEach?: CreateForEach1;
        createForEachIfNotExists?: CreateForEachIfNotExists1;
        setThirdPartySetting?: SetThirdPartySetting1;
        setThirdPartySettings?: SetThirdPartySettings;
        simpleConfigUpdate?: SimpleConfigUpdate1;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * This interface was referenced by `KeyValue`'s JSON-Schema definition
 * via the `patternProperty` "block.block.*".
 */
export interface BlockBlock {
  /**
   * Sets the region in which a block should be. Which regions are available depends on which theme the block is in. Only works on blocks.
   */
  setRegion?:
    | 'sidebar_first'
    | 'sidebar_second'
    | 'content'
    | 'header'
    | 'primary_menu'
    | 'secondary_menu'
    | 'footer'
    | 'highlighted'
    | 'help'
    | 'page_top'
    | 'page_bottom'
    | 'breadcrumb';
  /**
   * Sets status
   */
  setStatus?: boolean;
  /**
   * Sets the weight (position relative to other blocks in the same region of the same theme) of a block. Accepts any number. Works on Blocks.
   */
  setWeight?: number;
  placeBlockInDefaultTheme?: PlaceBlockInDefaultTheme;
  placeBlockInAdminTheme?: PlaceBlockInDefaultTheme;
  /**
   * Creates a clone of any config entity with a new ID.
   */
  cloneAs?: string;
  create?: Create;
  createIfNotExists?: CreateIfNotExists;
  createForEach?: CreateForEach;
  createForEachIfNotExists?: CreateForEachIfNotExists;
  set?: Set;
  setMultiple?: SetMultiple;
  setThirdPartySetting?: SetThirdPartySetting;
  setThirdPartySettings?: SetThirdPartySettings;
  simpleConfigUpdate?: SimpleConfigUpdate;
}
export interface PlaceBlockInDefaultTheme {
  /**
   * The block id
   */
  id: string;
  /**
   * The region accepts an array keyed by theme name.
   */
  region: {
    [k: string]: unknown | undefined;
  };
  /**
   * A fallback used if no match found in the region array.
   */
  default_region: string;
  /**
   * Place the block before/after any blocks already in the region.
   */
  position: 'first' | 'last';
  /**
   * The plugin id
   */
  plugin: string;
  [k: string]: unknown | undefined;
}
/**
 * Creates a config entity.
 */
export interface Create {
  [k: string]: unknown | undefined;
}
/**
 * Creates a config entity if it does not exist. Existence is determined by it having the same ID.
 */
export interface CreateIfNotExists {
  [k: string]: unknown | undefined;
}
/**
 * Loop over bundle config entities to create other config entities that are coupled to those bundles.
 */
export interface CreateForEach {
  [k: string]: unknown | undefined;
}
/**
 * Extends createForEach, to create only when it doesn't exist.
 */
export interface CreateForEachIfNotExists {
  [k: string]: unknown | undefined;
}
/**
 * Changes a property of a config entity. This is a pretty low-level method and should generally only be used if no dedicated method exists. Works on all config entities.
 */
export interface Set {
  /**
   * The property name i.e. label
   */
  property_name: string;
  /**
   * The property value i.e. Logged-in user
   */
  value: string | number | boolean | unknown[];
  [k: string]: unknown | undefined;
}
/**
 * Set third-party settings values for any config entity that can carry third-party settings.
 */
export interface SetThirdPartySetting {
  /**
   * The module name
   */
  module: string;
  /**
   * The key i.e. enabled
   */
  key: string;
  /**
   * The property value i.e. true
   */
  value: string | number | boolean | unknown[];
  [k: string]: unknown | undefined;
}
/**
 * Used to make updates to any configuration value.
 */
export interface SimpleConfigUpdate {
  [k: string]: unknown | undefined;
}
/**
 * This interface was referenced by `KeyValue`'s JSON-Schema definition
 * via the `patternProperty` "core.entity_form_display.*.*.*".
 */
export interface FormDisplay {
  hideComponent?: HidesAComponentFromAnEntityViewDisplayOrEntityFormDisplay;
  hideComponents?: HideComponents;
  setComponent?: SetComponent;
  setComponents?: SetComponents;
  /**
   * Creates a clone of any config entity with a new ID.
   */
  cloneAs?: string;
  create?: Create;
  createIfNotExists?: CreateIfNotExists;
  createForEach?: CreateForEach;
  createForEachIfNotExists?: CreateForEachIfNotExists;
  set?: Set;
  setMultiple?: SetMultiple;
  setThirdPartySetting?: SetThirdPartySetting;
  setThirdPartySettings?: SetThirdPartySettings;
  simpleConfigUpdate?: SimpleConfigUpdate;
}
/**
 * Allows adding a field to an entity's view or form displays.
 */
export interface SetComponent {
  /**
   * The field id. i.e. field_tags
   */
  name?: string;
  options?: {
    /**
     * The field type. i.e. entity_reference_label
     */
    type?: string;
    /**
     * Label position. i.e. above
     */
    label?: 'above' | 'below' | 'hidden' | 'inline';
    settings?: {
      link?: boolean;
      [k: string]: unknown | undefined;
    };
    third_party_settings?: {
      [k: string]: unknown | undefined;
    };
    weight?: number;
    region?:
      | 'sidebar_first'
      | 'sidebar_second'
      | 'content'
      | 'header'
      | 'primary_menu'
      | 'secondary_menu'
      | 'footer'
      | 'highlighted'
      | 'help'
      | 'page_top'
      | 'page_bottom'
      | 'breadcrumb';
    [k: string]: unknown | undefined;
  };
}
/**
 * This interface was referenced by `KeyValue`'s JSON-Schema definition
 * via the `patternProperty` "core.entity_view_display.*.*.*".
 */
export interface FormDisplay1 {
  allowLayoutOverrides?: SetsWhetherLayoutBuilderOverridesAreAllowed;
  hideComponent?: HidesAComponentFromAnEntityViewDisplayOrEntityFormDisplay;
  hideComponents?: HideComponents;
  setComponent?: SetComponent;
  setComponents?: SetComponents;
  /**
   * Creates a clone of any config entity with a new ID.
   */
  cloneAs?: string;
  create?: Create;
  createIfNotExists?: CreateIfNotExists;
  createForEach?: CreateForEach;
  createForEachIfNotExists?: CreateForEachIfNotExists;
  set?: Set;
  setMultiple?: SetMultiple;
  setThirdPartySetting?: SetThirdPartySetting;
  setThirdPartySettings?: SetThirdPartySettings;
  simpleConfigUpdate?: SimpleConfigUpdate;
}
/**
 * This interface was referenced by `KeyValue`'s JSON-Schema definition
 * via the `patternProperty` "contact.form.*".
 */
export interface ContactForm {
  /**
   * Sets the message that a contact form should display to users when they submit the form. Only works on contact forms.
   */
  setMessage?: string;
  /**
   * Sets the email addresses that should be notified when a user submits a contact form. Accepts an array of email addresses. Only works on contact forms.
   */
  setRecipients?: [] | [string];
  /**
   * Sets the path (URL) where users should be redirected when they submit a contact form. Must start with a slash. Only works on contact forms.
   */
  setRedirectPath?: string;
  /**
   * Sets a message to be emailed to the person who submitted a contact form. Only works on contact forms.
   */
  setReply?: string;
  /**
   * Sets the weight (position relative to other blocks in the same region of the same theme) of a block. Accepts any number. Works on Blocks.
   */
  setWeight?: number;
  /**
   * Creates a clone of any config entity with a new ID.
   */
  cloneAs?: string;
  create?: Create;
  createIfNotExists?: CreateIfNotExists;
  createForEach?: CreateForEach;
  createForEachIfNotExists?: CreateForEachIfNotExists;
  set?: Set;
  setMultiple?: SetMultiple;
  setThirdPartySetting?: SetThirdPartySetting;
  setThirdPartySettings?: SetThirdPartySettings;
  simpleConfigUpdate?: SimpleConfigUpdate;
}
/**
 * This interface was referenced by `KeyValue`'s JSON-Schema definition
 * via the `patternProperty` "editor.editor.*".
 */
export interface EditorEditor {
  /**
   * Add a new toolbar item.
   */
  addItemToToolbar?: {
    /**
     * The toolbar item name
     */
    item_name: string;
    /**
     * Specific the position, optionally replacing the item that's already in that position.
     */
    position?: number;
    /**
     * If there's already something at that position, replace it.
     */
    replace?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Creates a clone of any config entity with a new ID.
   */
  cloneAs?: string;
  create?: Create;
  createIfNotExists?: CreateIfNotExists;
  createForEach?: CreateForEach;
  createForEachIfNotExists?: CreateForEachIfNotExists;
  set?: Set;
  setMultiple?: SetMultiple;
  setThirdPartySetting?: SetThirdPartySetting;
  setThirdPartySettings?: SetThirdPartySettings;
  simpleConfigUpdate?: SimpleConfigUpdate;
}
/**
 * This interface was referenced by `KeyValue`'s JSON-Schema definition
 * via the `patternProperty` "field.field.*.*.*".
 */
export interface FieldField {
  /**
   * Sets the default value of a field, which can be changed by users when editing content. Exactly what the default value should look like, varies by field type. Works on fields and base field overrides.
   */
  setDefaultValue?: string;
  /**
   * Changes the user-facing description of a field. Works on fields and base field overrides.
   */
  setDescription?: string;
  /**
   * Changes the human-readable label of a field. Works on fields and base field overrides.
   */
  setLabel?: string;
  /**
   * Sets whether users must enter a value for a field. Works on fields and base field overrides.
   */
  setRequired?: boolean;
  /**
   * Sets whether a field should be translatable in the UI, or not. Works on fields and base field overrides. (Note that most fields are translatable by default.)
   */
  setTranslatable?: boolean;
  /**
   * Changes field settings. Exactly which settings are available, and what they mean, varies by the field type. Any preexisting settings are added automatically, with the incoming settings taking precedence. Works on fields and base field overrides.
   */
  setSettings?: {
    display_summary?: boolean;
    required_summary?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Creates a clone of any config entity with a new ID.
   */
  cloneAs?: string;
  create?: Create;
  createIfNotExists?: CreateIfNotExists;
  createForEach?: CreateForEach;
  createForEachIfNotExists?: CreateForEachIfNotExists;
  set?: Set;
  setMultiple?: SetMultiple;
  setThirdPartySetting?: SetThirdPartySetting;
  setThirdPartySettings?: SetThirdPartySettings;
  simpleConfigUpdate?: SimpleConfigUpdate;
}
/**
 * This interface was referenced by `KeyValue`'s JSON-Schema definition
 * via the `patternProperty` "field.storage.*.*".
 */
export interface FieldStorage {
  /**
   * If you have a field that you want to add to every content type, but you don't know how many content types there are, or what they're called, there's an addToAllBundles config action that will automatically add a field to every content type.
   */
  addToAllBundles?: {
    label?: string;
    description?: string;
    /**
     * If field_meta_tags already exists on any content type, you'll get an error.
     */
    fail_if_exists?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Creates a clone of any config entity with a new ID.
   */
  cloneAs?: string;
  create?: Create;
  createIfNotExists?: CreateIfNotExists;
  createForEach?: CreateForEach;
  createForEachIfNotExists?: CreateForEachIfNotExists;
  set?: Set;
  setMultiple?: SetMultiple;
  setThirdPartySetting?: SetThirdPartySetting;
  setThirdPartySettings?: SetThirdPartySettings;
  simpleConfigUpdate?: SimpleConfigUpdate;
}
/**
 * This interface was referenced by `KeyValue`'s JSON-Schema definition
 * via the `patternProperty` "workflows.workflow.*".
 */
export interface WorkflowsWorkflow {
  /**
   * If you have an entity type or entity bundle that you want to add to a content moderation workflow, you can use config actions.
   */
  addNodeTypes?: [] | [string];
  /**
   * Opt every taxonomy vocabulary into moderation.
   */
  addTaxonomyVocabularies?: string;
  /**
   * Creates a clone of any config entity with a new ID.
   */
  cloneAs?: string;
  create?: Create;
  createIfNotExists?: CreateIfNotExists;
  createForEach?: CreateForEach;
  createForEachIfNotExists?: CreateForEachIfNotExists;
  set?: Set;
  setMultiple?: SetMultiple;
  setThirdPartySetting?: SetThirdPartySetting;
  setThirdPartySettings?: SetThirdPartySettings;
  simpleConfigUpdate?: SimpleConfigUpdate;
}
/**
 * This interface was referenced by `KeyValue`'s JSON-Schema definition
 * via the `patternProperty` "user.role.*".
 */
export interface UserRole {
  /**
   * Used to add permissions to user roles.
   */
  grantPermission?: string;
  /**
   * Add multiple roles.
   */
  grantPermissions?: [] | [string];
  /**
   * Grants permissions for every bundle of an entity type.
   */
  grantPermissionsForEachNodeType?: string[];
  /**
   * Grants permissions for every taxonomy vocabulary.
   */
  grantPermissionsForEachTaxonomyVocabulary?: string[];
  /**
   * Grants permissions for every media type.
   */
  grantPermissionsForEachMediaType?: string[];
  /**
   * Creates a clone of any config entity with a new ID.
   */
  cloneAs?: string;
  create?: Create;
  createIfNotExists?: CreateIfNotExists;
  createForEach?: CreateForEach;
  createForEachIfNotExists?: CreateForEachIfNotExists;
  set?: Set;
  setMultiple?: SetMultiple;
  setThirdPartySetting?: SetThirdPartySetting;
  setThirdPartySettings?: SetThirdPartySettings;
  simpleConfigUpdate?: SimpleConfigUpdate;
}
/**
 * Changes a property of a config entity. This is a pretty low-level method and should generally only be used if no dedicated method exists. Works on all config entities.
 */
export interface Set1 {
  /**
   * The property name i.e. label
   */
  property_name: string;
  /**
   * The property value i.e. Logged-in user
   */
  value: string | number | boolean | unknown[];
  [k: string]: unknown | undefined;
}
/**
 * Creates a config entity.
 */
export interface Create1 {
  [k: string]: unknown | undefined;
}
/**
 * Creates a config entity if it does not exist. Existence is determined by it having the same ID.
 */
export interface CreateIfNotExists1 {
  [k: string]: unknown | undefined;
}
/**
 * Loop over bundle config entities to create other config entities that are coupled to those bundles.
 */
export interface CreateForEach1 {
  [k: string]: unknown | undefined;
}
/**
 * Extends createForEach, to create only when it doesn't exist.
 */
export interface CreateForEachIfNotExists1 {
  [k: string]: unknown | undefined;
}
/**
 * Set third-party settings values for any config entity that can carry third-party settings.
 */
export interface SetThirdPartySetting1 {
  /**
   * The module name
   */
  module: string;
  /**
   * The key i.e. enabled
   */
  key: string;
  /**
   * The property value i.e. true
   */
  value: string | number | boolean | unknown[];
  [k: string]: unknown | undefined;
}
/**
 * Used to make updates to any configuration value.
 */
export interface SimpleConfigUpdate1 {
  [k: string]: unknown | undefined;
}
