/* eslint-disable */

export type HttpsJsonSchemastoreOrgCatalogInfoJson =
  | (Entity & {
      apiVersion?: 'backstage.io/v1alpha1' | 'backstage.io/v1beta1';
      kind?: 'API';
      spec: {
        /**
         * The type of the API definition.
         */
        type: string;
        /**
         * The lifecycle state of the API.
         */
        lifecycle: string;
        /**
         * An entity reference to the owner of the API.
         */
        owner: string;
        /**
         * An entity reference to the system that the API belongs to.
         */
        system?: string;
        /**
         * The definition of the API, based on the format defined by the type.
         */
        definition:
          | string
          | {
              /**
               * Interprets the contents of the referenced file as JSON and embeds the parsed structure.
               */
              $json?: string;
              /**
               * Interprets the contents of the referenced file as plain text and embeds it as a string.
               */
              $text?: string;
              /**
               * Interprets the contents of the referenced file as YAML and embeds the parsed structure.
               */
              $yaml?: string;
              [k: string]: unknown | undefined;
            };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    })
  | (Entity & {
      apiVersion?: 'backstage.io/v1alpha1' | 'backstage.io/v1beta1';
      kind?: 'Component';
      spec: {
        /**
         * The type of component.
         */
        type: string;
        /**
         * The lifecycle state of the component.
         */
        lifecycle: string;
        /**
         * An entity reference to the owner of the component.
         */
        owner: string;
        /**
         * An entity reference to the system that the component belongs to.
         */
        system?: string;
        /**
         * An entity reference to another component of which the component is a part.
         */
        subcomponentOf?: string;
        /**
         * An array of entity references to the APIs that are provided by the component.
         */
        providesApis?: string[];
        /**
         * An array of entity references to the APIs that are consumed by the component.
         */
        consumesApis?: string[];
        /**
         * An array of references to other entities that the component depends on to function.
         */
        dependsOn?: string[];
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    })
  | (Entity & {
      apiVersion?: 'backstage.io/v1alpha1' | 'backstage.io/v1beta1';
      kind?: 'Domain';
      spec: {
        /**
         * An entity reference to the owner of the component.
         */
        owner: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    })
  | (Entity & {
      apiVersion?: 'backstage.io/v1alpha1' | 'backstage.io/v1beta1';
      kind?: 'Group';
      spec: {
        /**
         * The type of group. There is currently no enforced set of values for this field, so it is left up to the adopting organization to choose a nomenclature that matches their org hierarchy.
         */
        type: string;
        /**
         * Optional profile information about the group, mainly for display purposes. All fields of this structure are also optional. The email would be a group email of some form, that the group may wish to be used for contacting them. The picture is expected to be a URL pointing to an image that's representative of the group, and that a browser could fetch and render on a group page or similar.
         */
        profile?: {
          /**
           * A simple display name to present to users.
           */
          displayName?: string;
          /**
           * An email where this entity can be reached.
           */
          email?: string;
          /**
           * The URL of an image that represents this entity.
           */
          picture?: string;
          [k: string]: unknown | undefined;
        };
        /**
         * The immediate parent group in the hierarchy, if any. Not all groups must have a parent; the catalog supports multi-root hierarchies. Groups may however not have more than one parent. This field is an entity reference.
         */
        parent?: string;
        /**
         * The immediate child groups of this group in the hierarchy (whose parent field points to this group). The list must be present, but may be empty if there are no child groups. The items are not guaranteed to be ordered in any particular way. The entries of this array are entity references.
         */
        children: string[];
        /**
         * The users that are members of this group. The entries of this array are entity references.
         */
        members?: string[];
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    })
  | (Entity & {
      apiVersion?: 'backstage.io/v1alpha1' | 'backstage.io/v1beta1';
      kind?: 'Location';
      spec: {
        /**
         * The single location type, that's common to the targets specified in the spec. If it is left out, it is inherited from the location type that originally read the entity data.
         */
        type?: string;
        /**
         * A single target as a string. Can be either an absolute path/URL (depending on the type), or a relative path such as ./details/catalog-info.yaml which is resolved relative to the location of this Location entity itself.
         */
        target?: string;
        /**
         * A list of targets as strings. They can all be either absolute paths/URLs (depending on the type), or relative paths such as ./details/catalog-info.yaml which are resolved relative to the location of this Location entity itself.
         */
        targets?: string[];
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    })
  | (Entity & {
      apiVersion?: 'backstage.io/v1alpha1' | 'backstage.io/v1beta1';
      kind?: 'Resource';
      spec: {
        /**
         * The type of resource.
         */
        type: string;
        /**
         * An entity reference to the owner of the resource.
         */
        owner: string;
        /**
         * An array of references to other entities that the resource depends on to function.
         */
        dependsOn?: string[];
        /**
         * An entity reference to the system that the resource belongs to.
         */
        system?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    })
  | (Entity & {
      apiVersion?: 'backstage.io/v1alpha1' | 'backstage.io/v1beta1';
      kind?: 'System';
      spec: {
        /**
         * An entity reference to the owner of the component.
         */
        owner: string;
        /**
         * An entity reference to the domain that the system belongs to.
         */
        domain?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    })
  | (Entity & {
      apiVersion?: 'backstage.io/v1beta2';
      kind?: 'Template';
      spec: {
        /**
         * The type of component created by the template. The software catalog accepts any type value, but an organization should take great care to establish a proper taxonomy for these. Tools including Backstage itself may read this field and behave differently depending on its value. For example, a website type component may present tooling in the Backstage interface that is specific to just websites.
         */
        type: string;
        parameters?:
          | {
              [k: string]: unknown | undefined;
            }
          | {
              [k: string]: unknown | undefined;
            }[];
        /**
         * A list of steps to execute.
         */
        steps: {
          /**
           * The ID of the step, which can be used to refer to its outputs.
           */
          id?: string;
          /**
           * The name of the step, which will be displayed in the UI during the scaffolding process.
           */
          name?: string;
          /**
           * The name of the action to execute.
           */
          action: string;
          /**
           * A templated object describing the inputs to the action.
           */
          input?: {
            [k: string]: unknown | undefined;
          };
          /**
           * A templated condition that skips the step when evaluated to false. If the condition is true or not defined, the step is executed. The condition is true, if the input is not `false`, `undefined`, `null`, `""`, `0`, or `[]`.
           */
          if?: string | boolean;
          [k: string]: unknown | undefined;
        }[];
        /**
         * A templated object describing the outputs of the scaffolding task.
         */
        output?: {
          /**
           * A list of external hyperlinks, typically pointing to resources created or updated by the template
           */
          links?: {
            /**
             * A url in a standard uri format.
             */
            url?: string;
            /**
             * An entity reference to an entity in the catalog.
             */
            entityRef?: string;
            /**
             * A user friendly display name for the link.
             */
            title?: string;
            /**
             * A key representing a visual icon to be displayed in the UI.
             */
            icon?: string;
            [k: string]: unknown | undefined;
          }[];
          [k: string]: string | undefined;
        };
        /**
         * The user (or group) owner of the template
         */
        owner?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    })
  | (Entity & {
      apiVersion?: 'scaffolder.backstage.io/v1beta3';
      kind?: 'Template';
      spec: {
        /**
         * The type of component created by the template. The software catalog accepts any type value, but an organization should take great care to establish a proper taxonomy for these. Tools including Backstage itself may read this field and behave differently depending on its value. For example, a website type component may present tooling in the Backstage interface that is specific to just websites.
         */
        type: string;
        /**
         * The user (or group) owner of the template
         */
        owner?: string;
        parameters?:
          | {
              /**
               * Object used for authorizing the parameter
               */
              'backstage:permissions'?: {
                tags?: string[];
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            }
          | {
              /**
               * Object used for authorizing the parameter
               */
              'backstage:permissions'?: {
                tags?: string[];
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            }[];
        /**
         * A way to redefine the presentation of the scaffolder.
         */
        presentation?: {
          /**
           * A way to redefine the labels for actionable buttons.
           */
          buttonLabels?: {
            /**
             * A button which return the user to one step back.
             */
            backButtonText?: string;
            /**
             * A button which start the execution of the template.
             */
            createButtonText?: string;
            /**
             * A button which open the review step to verify the input prior to start the execution.
             */
            reviewButtonText?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        /**
         * A task recovery section.
         */
        EXPERIMENTAL_recovery?: {
          /**
           * Recovery strategy for your task (none or startOver). By default none
           */
          EXPERIMENTAL_strategy?: string;
          [k: string]: unknown | undefined;
        };
        /**
         * A list of decorators and their inputs that the form should trigger before submitting the job
         */
        EXPERIMENTAL_formDecorators?: {
          /**
           * The form hook ID
           */
          id?: string;
          /**
           * A object describing the inputs to the form hook.
           */
          input?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        }[];
        /**
         * A list of steps to execute.
         */
        steps: {
          /**
           * The ID of the step, which can be used to refer to its outputs.
           */
          id?: string;
          /**
           * The name of the step, which will be displayed in the UI during the scaffolding process.
           */
          name?: string;
          /**
           * The name of the action to execute.
           */
          action: string;
          /**
           * A templated object describing the inputs to the action.
           */
          input?: {
            [k: string]: unknown | undefined;
          };
          /**
           * A templated condition that skips the step when evaluated to false. If the condition is true or not defined, the step is executed. The condition is true, if the input is not `false`, `undefined`, `null`, `""`, `0`, or `[]`.
           */
          if?: string | boolean;
          /**
           * Object used for authorizing the step
           */
          'backstage:permissions'?: {
            tags?: string[];
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        }[];
        /**
         * A templated object describing the outputs of the scaffolding task.
         */
        output?: {
          /**
           * A list of external hyperlinks, typically pointing to resources created or updated by the template
           */
          links?: {
            /**
             * A url in a standard uri format.
             */
            url?: string;
            /**
             * An entity reference to an entity in the catalog.
             */
            entityRef?: string;
            /**
             * A user friendly display name for the link.
             */
            title?: string;
            /**
             * A key representing a visual icon to be displayed in the UI.
             */
            icon?: string;
            [k: string]: unknown | undefined;
          }[];
          /**
           * A list of Markdown text blobs, like output data from the template.
           */
          text?: {
            /**
             * A user friendly display name for the text.
             */
            title?: string;
            /**
             * A key representing a visual icon to be displayed in the UI.
             */
            icon?: string;
            /**
             * The text blob to display in the UI, rendered as Markdown.
             */
            content?: string;
            [k: string]: unknown | undefined;
          }[];
          [k: string]: string | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    })
  | (Entity & {
      apiVersion?: 'backstage.io/v1alpha1' | 'backstage.io/v1beta1';
      kind?: 'User';
      spec: {
        /**
         * Optional profile information about the user, mainly for display purposes. All fields of this structure are also optional. The email would be a primary email of some form, that the user may wish to be used for contacting them. The picture is expected to be a URL pointing to an image that's representative of the user, and that a browser could fetch and render on a profile page or similar.
         */
        profile?: {
          /**
           * A simple display name to present to users.
           */
          displayName?: string;
          /**
           * An email where this user can be reached.
           */
          email?: string;
          /**
           * The URL of an image that represents this user.
           */
          picture?: string;
          [k: string]: unknown | undefined;
        };
        /**
         * The list of groups that the user is a direct member of (i.e., no transitive memberships are listed here). The list must be present, but may be empty if the user is not member of any groups. The items are not guaranteed to be ordered in any particular way. The entries of this array are entity references.
         */
        memberOf: string[];
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    });
/**
 * The status level / severity of the status item.
 */
export type StatusLevel = 'info' | 'warning' | 'error';

/**
 * The parts of the format that's common to all versions/kinds of entity.
 */
export interface Entity {
  /**
   * The version of specification format for this particular entity that this is written against.
   */
  apiVersion: string;
  /**
   * The high level entity type being described.
   */
  kind: string;
  /**
   * Metadata fields common to all versions/kinds of entity.
   */
  metadata: {
    /**
     * A globally unique ID for the entity. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations. The field can (optionally) be specified when performing update or delete operations, but the server is free to reject requests that do so in such a way that it breaks semantics.
     */
    uid?: string;
    /**
     * An opaque string that changes for each update operation to any part of the entity, including metadata. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations. The field can (optionally) be specified when performing update or delete operations, and the server will then reject the operation if it does not match the current stored value.
     */
    etag?: string;
    /**
     * A positive nonzero number that indicates the current generation of data for this entity; the value is incremented each time the spec changes. This field can not be set by the user at creation time, and the server will reject an attempt to do so. The field will be populated in read operations.
     */
    generation?: number;
    /**
     * The name of the entity. Must be unique within the catalog at any given point in time, for any given namespace + kind pair.
     */
    name: string;
    /**
     * The namespace that the entity belongs to.
     */
    namespace?: string;
    /**
     * A display name of the entity, to be presented in user interfaces instead of the name property, when available.
     */
    title?: string;
    /**
     * A short (typically relatively few words, on one line) description of the entity.
     */
    description?: string;
    /**
     * Key/value pairs of identifying information attached to the entity.
     */
    labels?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Key/value pairs of non-identifying auxiliary information attached to the entity.
     */
    annotations?: {
      [k: string]: unknown | undefined;
    };
    /**
     * A list of single-valued strings, to for example classify catalog entities in various ways.
     */
    tags?: string[];
    /**
     * A list of external hyperlinks related to the entity. Links can provide additional contextual information that may be located outside of Backstage itself. For example, an admin dashboard or external CMS page.
     */
    links?: {
      /**
       * A url in a standard uri format.
       */
      url: string;
      /**
       * A user friendly display name for the link.
       */
      title?: string;
      /**
       * A key representing a visual icon to be displayed in the UI.
       */
      icon?: string;
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  };
  /**
   * The specification data describing the entity itself.
   */
  spec?: {
    [k: string]: unknown | undefined;
  };
  /**
   * The relations that this entity has with other entities.
   */
  relations?: Relation[];
  status?: Status;
}
/**
 * A directed relation from one entity to another.
 */
export interface Relation {
  /**
   * The type of relation.
   */
  type: string;
  target: Reference;
}
/**
 * A reference by name to another entity.
 */
export interface Reference {
  /**
   * The kind field of the entity.
   */
  kind: string;
  /**
   * The metadata.namespace field of the entity.
   */
  namespace: string;
  /**
   * The metadata.name field of the entity.
   */
  name: string;
}
/**
 * The current status of the entity, as claimed by various sources.
 */
export interface Status {
  items?: StatusItem[];
  [k: string]: unknown | undefined;
}
/**
 * A specific status item on a well known format.
 */
export interface StatusItem {
  type: string;
  level: StatusLevel;
  /**
   * A brief message describing the status, intended for human consumption.
   */
  message: string;
  error?: Error;
  [k: string]: unknown | undefined;
}
/**
 * An optional serialized error object related to the status.
 */
export interface Error {
  /**
   * The type name of the error
   */
  name: string;
  /**
   * The message of the error
   */
  message: string;
  /**
   * An error code associated with the error
   */
  code?: string;
  /**
   * An error stack trace
   */
  stack?: string;
  [k: string]: unknown | undefined;
}
