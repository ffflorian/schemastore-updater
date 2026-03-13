/* eslint-disable */

/**
 * A reference to the related reporting descriptor.
 */
export type ReportingDescriptorReference = {
  [k: string]: unknown | undefined;
} & {
  /**
   * The id of the descriptor.
   */
  id?: string;
  /**
   * The index into an array of descriptors in toolComponent.ruleDescriptors, toolComponent.notificationDescriptors, or toolComponent.taxonomyDescriptors, depending on context.
   */
  index?: number;
  /**
   * A guid that uniquely identifies the descriptor.
   */
  guid?: string;
  toolComponent?: ToolComponentReference;
  /**
   * Key/value pairs that provide additional information about the reporting descriptor reference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A description of the reporting descriptor relationship.
 */
export type Message = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A short description of the artifact location.
 */
export type Message1 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A reference used to locate the descriptor whose configuration was overridden.
 */
export type ReportingDescriptorReference1 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * The id of the descriptor.
   */
  id?: string;
  /**
   * The index into an array of descriptors in toolComponent.ruleDescriptors, toolComponent.notificationDescriptors, or toolComponent.taxonomyDescriptors, depending on context.
   */
  index?: number;
  /**
   * A guid that uniquely identifies the descriptor.
   */
  guid?: string;
  toolComponent?: ToolComponentReference;
  /**
   * Key/value pairs that provide additional information about the reporting descriptor reference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * Identifies the artifact and region.
 */
export type PhysicalLocation = {
  [k: string]: unknown | undefined;
} & {
  address?: Address;
  artifactLocation?: ArtifactLocation1;
  region?: Region;
  contextRegion?: Region1;
  /**
   * Key/value pairs that provide additional information about the physical location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message relevant to the region.
 */
export type Message2 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message relevant to the location.
 */
export type Message3 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A description of the location relationship.
 */
export type Message4 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message that describes the condition that was encountered.
 */
export type Message5 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message relevant to this call stack.
 */
export type Message6 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A reference used to locate the descriptor relevant to this notification.
 */
export type ReportingDescriptorReference2 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * The id of the descriptor.
   */
  id?: string;
  /**
   * The index into an array of descriptors in toolComponent.ruleDescriptors, toolComponent.notificationDescriptors, or toolComponent.taxonomyDescriptors, depending on context.
   */
  index?: number;
  /**
   * A guid that uniquely identifies the descriptor.
   */
  guid?: string;
  toolComponent?: ToolComponentReference;
  /**
   * Key/value pairs that provide additional information about the reporting descriptor reference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A reference used to locate the rule descriptor associated with this notification.
 */
export type ReportingDescriptorReference3 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * The id of the descriptor.
   */
  id?: string;
  /**
   * The index into an array of descriptors in toolComponent.ruleDescriptors, toolComponent.notificationDescriptors, or toolComponent.taxonomyDescriptors, depending on context.
   */
  index?: number;
  /**
   * A guid that uniquely identifies the descriptor.
   */
  guid?: string;
  toolComponent?: ToolComponentReference;
  /**
   * Key/value pairs that provide additional information about the reporting descriptor reference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A description of the graph.
 */
export type Message7 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A short description of the node.
 */
export type Message8 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * Identifies the artifact and region.
 */
export type PhysicalLocation1 = {
  [k: string]: unknown | undefined;
} & {
  address?: Address1;
  artifactLocation?: ArtifactLocation8;
  region?: Region3;
  contextRegion?: Region4;
  /**
   * Key/value pairs that provide additional information about the physical location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A short description of the artifact location.
 */
export type Message9 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message relevant to the region.
 */
export type Message10 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message relevant to the location.
 */
export type Message11 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A description of the location relationship.
 */
export type Message12 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A short description of the edge.
 */
export type Message13 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A short description of the artifact.
 */
export type Message14 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A reference used to locate the descriptor whose configuration was overridden.
 */
export type ReportingDescriptorReference4 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * The id of the descriptor.
   */
  id?: string;
  /**
   * The index into an array of descriptors in toolComponent.ruleDescriptors, toolComponent.notificationDescriptors, or toolComponent.taxonomyDescriptors, depending on context.
   */
  index?: number;
  /**
   * A guid that uniquely identifies the descriptor.
   */
  guid?: string;
  toolComponent?: ToolComponentReference3;
  /**
   * Key/value pairs that provide additional information about the reporting descriptor reference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message that describes the condition that was encountered.
 */
export type Message15 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message relevant to this call stack.
 */
export type Message16 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A reference used to locate the descriptor relevant to this notification.
 */
export type ReportingDescriptorReference5 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * The id of the descriptor.
   */
  id?: string;
  /**
   * The index into an array of descriptors in toolComponent.ruleDescriptors, toolComponent.notificationDescriptors, or toolComponent.taxonomyDescriptors, depending on context.
   */
  index?: number;
  /**
   * A guid that uniquely identifies the descriptor.
   */
  guid?: string;
  toolComponent?: ToolComponentReference3;
  /**
   * Key/value pairs that provide additional information about the reporting descriptor reference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A reference used to locate the rule descriptor associated with this notification.
 */
export type ReportingDescriptorReference6 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * The id of the descriptor.
   */
  id?: string;
  /**
   * The index into an array of descriptors in toolComponent.ruleDescriptors, toolComponent.notificationDescriptors, or toolComponent.taxonomyDescriptors, depending on context.
   */
  index?: number;
  /**
   * A guid that uniquely identifies the descriptor.
   */
  guid?: string;
  toolComponent?: ToolComponentReference3;
  /**
   * Key/value pairs that provide additional information about the reporting descriptor reference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * Information about how to locate a relevant reporting descriptor.
 */
export type ReportingDescriptorReference7 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * The id of the descriptor.
   */
  id?: string;
  /**
   * The index into an array of descriptors in toolComponent.ruleDescriptors, toolComponent.notificationDescriptors, or toolComponent.taxonomyDescriptors, depending on context.
   */
  index?: number;
  /**
   * A guid that uniquely identifies the descriptor.
   */
  guid?: string;
  toolComponent?: ToolComponentReference3;
  /**
   * Key/value pairs that provide additional information about the reporting descriptor reference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * Information about how to locate a relevant reporting descriptor.
 */
export type ReportingDescriptorReference8 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * The id of the descriptor.
   */
  id?: string;
  /**
   * The index into an array of descriptors in toolComponent.ruleDescriptors, toolComponent.notificationDescriptors, or toolComponent.taxonomyDescriptors, depending on context.
   */
  index?: number;
  /**
   * A guid that uniquely identifies the descriptor.
   */
  guid?: string;
  toolComponent?: ToolComponentReference3;
  /**
   * Key/value pairs that provide additional information about the reporting descriptor reference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message that describes the result. The first sentence of the message only will be displayed when visible space is limited.
 */
export type Message17 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message relevant to the code flow.
 */
export type Message18 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message relevant to the thread flow.
 */
export type Message19 = (
  | {
      [k: string]: unknown | undefined;
    }
  | {
      [k: string]: unknown | undefined;
    }
) & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * Represents a path through a graph.
 */
export type GraphTraversal = {
  /**
   * The index within the run.graphs to be associated with the result.
   */
  runGraphIndex?: number;
  /**
   * The index within the result.graphs to be associated with the result.
   */
  resultGraphIndex?: number;
  description?: Message20;
  /**
   * Values of relevant expressions at the start of the graph traversal that may change during graph traversal.
   */
  initialState?: {
    [k: string]: MultiformatMessageString10 | undefined;
  };
  /**
   * Values of relevant expressions at the start of the graph traversal that remain constant for the graph traversal.
   */
  immutableState?: {
    [k: string]: MultiformatMessageString10 | undefined;
  };
  /**
   * The sequences of edges traversed by this graph traversal.
   *
   * @minItems 0
   */
  edgeTraversals?: EdgeTraversal[];
  /**
   * Key/value pairs that provide additional information about the graph traversal.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
} & {
  [k: string]: unknown | undefined;
};
/**
 * A description of this graph traversal.
 */
export type Message20 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message to display to the user as the edge is traversed.
 */
export type Message21 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message describing the role played by the attachment.
 */
export type Message22 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message relevant to the rectangle.
 */
export type Message23 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A physical location relevant to a result. Specifies a reference to a programming artifact together with a range of bytes or characters within that artifact.
 */
export type PhysicalLocation2 = {
  [k: string]: unknown | undefined;
} & {
  address?: Address1;
  artifactLocation?: ArtifactLocation8;
  region?: Region3;
  contextRegion?: Region4;
  /**
   * Key/value pairs that provide additional information about the physical location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A message that describes the proposed fix, enabling viewers to present the proposed change to an end user.
 */
export type Message24 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * Information about how to locate a relevant reporting descriptor.
 */
export type ReportingDescriptorReference9 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * The id of the descriptor.
   */
  id?: string;
  /**
   * The index into an array of descriptors in toolComponent.ruleDescriptors, toolComponent.notificationDescriptors, or toolComponent.taxonomyDescriptors, depending on context.
   */
  index?: number;
  /**
   * A guid that uniquely identifies the descriptor.
   */
  guid?: string;
  toolComponent?: ToolComponentReference3;
  /**
   * Key/value pairs that provide additional information about the reporting descriptor reference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};
/**
 * A description of the reporting descriptor relationship.
 */
export type Message25 = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A plain text message string.
   */
  text?: string;
  /**
   * A Markdown message string.
   */
  markdown?: string;
  /**
   * The identifier for this message.
   */
  id?: string;
  /**
   * An array of strings to substitute into the message string.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
};

export interface SARIFExternalPropertyFileSchemaVersion210Rtm0JSONSchema {
  /**
   * The URI of the JSON schema corresponding to the version of the external property file format.
   */
  $schema?: string;
  /**
   * The SARIF format version of this external properties object.
   */
  version: '2.1.0';
  /**
   * A stable, unique identifier for this external properties object, in the form of a GUID.
   */
  guid?: string;
  /**
   * A stable, unique identifier for the run associated with this external properties object, in the form of a GUID.
   */
  runGuid?: string;
  conversion?: Conversion;
  /**
   * An array of graph objects that will merged with an external run.
   *
   * @minItems 0
   */
  graphs?: Graph[];
  externalizedProperties?: PropertyBag1;
  /**
   * An array of artifact objects that will be merged with an external run.
   *
   * @minItems 0
   */
  artifacts?: Artifact[];
  /**
   * Describes the invocation of the analysis tool that will be merged with an external run.
   *
   * @minItems 0
   */
  invocations?: Invocation1[];
  /**
   * An array of logical locations such as namespaces, types or functions that will be merged with an external run.
   *
   * @minItems 0
   */
  logicalLocations?: LogicalLocation2[];
  /**
   * An array of threadFlowLocation objects that will be merged with an external run.
   *
   * @minItems 0
   */
  threadFlowLocations?: ThreadFlowLocation[];
  /**
   * An array of result objects that will be merged with an external run.
   *
   * @minItems 0
   */
  results?: Result[];
  /**
   * Tool taxonomies that will be merged with an external run.
   *
   * @minItems 0
   */
  taxonomies?: ToolComponent2[];
  driver?: ToolComponent3;
  /**
   * Tool extensions that will be merged with an external run.
   *
   * @minItems 0
   */
  extensions?: ToolComponent2[];
  /**
   * Tool policies that will be merged with an external run.
   *
   * @minItems 0
   */
  policies?: ToolComponent2[];
  /**
   * Tool translations that will be merged with an external run.
   *
   * @minItems 0
   */
  translations?: ToolComponent2[];
  /**
   * Addresses that will be merged with with an external run.
   *
   * @minItems 0
   */
  addresses?: Address2[];
  /**
   * Requests that will be merged with an external run.
   *
   * @minItems 0
   */
  webRequests?: WebRequest2[];
  /**
   * Responses that will be merged with an external run.
   *
   * @minItems 0
   */
  webResponses?: WebResponse2[];
  /**
   * Key/value pairs that provide additional information about the external properties.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A conversion object that will be merged with an external run.
 */
export interface Conversion {
  tool: Tool;
  invocation?: Invocation;
  /**
   * The locations of the analysis tool's per-run log files.
   *
   * @minItems 0
   */
  analysisToolLogFiles?: ArtifactLocation[];
  /**
   * Key/value pairs that provide additional information about the conversion.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A tool object that describes the converter.
 */
export interface Tool {
  driver: ToolComponent;
  /**
   * Tool extensions that contributed to or reconfigured the analysis tool that was run.
   *
   * @minItems 0
   */
  extensions?: ToolComponent1[];
  /**
   * Key/value pairs that provide additional information about the tool.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The analysis tool that was run.
 */
export interface ToolComponent {
  /**
   * A unique identifier for the tool component in the form of a GUID.
   */
  guid?: string;
  /**
   * The name of the tool component.
   */
  name: string;
  /**
   * The organization or company that produced the tool component.
   */
  organization?: string;
  /**
   * A product suite to which the tool component belongs.
   */
  product?: string;
  /**
   * A localizable string containing the name of the suite of products to which the tool component belongs.
   */
  productSuite?: string;
  shortDescription?: MultiformatMessageString;
  fullDescription?: MultiformatMessageString1;
  /**
   * The name of the tool component along with its version and any other useful identifying information, such as its locale.
   */
  fullName?: string;
  /**
   * The tool component version, in whatever format the component natively provides.
   */
  version?: string;
  /**
   * The tool component version in the format specified by Semantic Versioning 2.0.
   */
  semanticVersion?: string;
  /**
   * The binary version of the tool component's primary executable file expressed as four non-negative integers separated by a period (for operating systems that express file versions in this way).
   */
  dottedQuadFileVersion?: string;
  /**
   * A string specifying the UTC date (and optionally, the time) of the component's release.
   */
  releaseDateUtc?: string;
  /**
   * The absolute URI from which the tool component can be downloaded.
   */
  downloadUri?: string;
  /**
   * The absolute URI at which information about this version of the tool component can be found.
   */
  informationUri?: string;
  /**
   * A dictionary, each of whose keys is a resource identifier and each of whose values is a multiformatMessageString object, which holds message strings in plain text and (optionally) Markdown format. The strings can include placeholders, which can be used to construct a message in combination with an arbitrary number of additional string arguments.
   */
  globalMessageStrings?: {
    [k: string]: MultiformatMessageString2 | undefined;
  };
  /**
   * An array of reportingDescriptor objects relevant to the notifications related to the configuration and runtime execution of the tool component.
   *
   * @minItems 0
   */
  notifications?: ReportingDescriptor[];
  /**
   * An array of reportingDescriptor objects relevant to the analysis performed by the tool component.
   *
   * @minItems 0
   */
  rules?: ReportingDescriptor[];
  /**
   * An array of reportingDescriptor objects relevant to the definitions of both standalone and tool-defined taxonomies.
   *
   * @minItems 0
   */
  taxa?: ReportingDescriptor[];
  /**
   * An array of the artifactLocation objects associated with the tool component.
   *
   * @minItems 0
   */
  locations?: ArtifactLocation[];
  /**
   * The language of the messages emitted into the log file during this run (expressed as an ISO 639-1 two-letter lowercase language code) and an optional region (expressed as an ISO 3166-1 two-letter uppercase subculture code associated with a country or region). The casing is recommended but not required (in order for this data to conform to RFC5646).
   */
  language?: string;
  /**
   * The kinds of data contained in this object.
   */
  contents?: ('localizedData' | 'nonLocalizedData')[];
  /**
   * Specifies whether this object contains a complete definition of the localizable and/or non-localizable data for this component, as opposed to including only data that is relevant to the results persisted to this log file.
   */
  isComprehensive?: boolean;
  /**
   * The semantic version of the localized strings defined in this component; maintained by components that provide translations.
   */
  localizedDataSemanticVersion?: string;
  /**
   * The minimum value of localizedDataSemanticVersion required in translations consumed by this component; used by components that consume translations.
   */
  minimumRequiredLocalizedDataSemanticVersion?: string;
  associatedComponent?: ToolComponentReference1;
  translationMetadata?: TranslationMetadata;
  /**
   * An array of toolComponentReference objects to declare the taxonomies supported by the tool component.
   *
   * @minItems 0
   */
  supportedTaxonomies?: ToolComponentReference2[];
  /**
   * Key/value pairs that provide additional information about the tool component.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A brief description of the tool component.
 */
export interface MultiformatMessageString {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A comprehensive description of the tool component.
 */
export interface MultiformatMessageString1 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString2 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Metadata that describes a specific report produced by the tool, as part of the analysis it provides or its runtime reporting.
 */
export interface ReportingDescriptor {
  /**
   * A stable, opaque identifier for the report.
   */
  id: string;
  /**
   * An array of stable, opaque identifiers by which this report was known in some previous version of the analysis tool.
   *
   * @minItems 0
   */
  deprecatedIds?: string[];
  /**
   * A unique identifier for the reporting descriptor in the form of a GUID.
   */
  guid?: string;
  /**
   * An array of unique identifies in the form of a GUID by which this report was known in some previous version of the analysis tool.
   *
   * @minItems 0
   */
  deprecatedGuids?: string[];
  /**
   * A report identifier that is understandable to an end user.
   */
  name?: string;
  /**
   * An array of readable identifiers by which this report was known in some previous version of the analysis tool.
   *
   * @minItems 0
   */
  deprecatedNames?: string[];
  shortDescription?: MultiformatMessageString3;
  fullDescription?: MultiformatMessageString4;
  /**
   * A set of name/value pairs with arbitrary names. Each value is a multiformatMessageString object, which holds message strings in plain text and (optionally) Markdown format. The strings can include placeholders, which can be used to construct a message in combination with an arbitrary number of additional string arguments.
   */
  messageStrings?: {
    [k: string]: MultiformatMessageString2 | undefined;
  };
  defaultConfiguration?: ReportingConfiguration;
  /**
   * A URI where the primary documentation for the report can be found.
   */
  helpUri?: string;
  help?: MultiformatMessageString5;
  /**
   * An array of objects that describe relationships between this reporting descriptor and others.
   *
   * @minItems 0
   */
  relationships?: ReportingDescriptorRelationship[];
  /**
   * Key/value pairs that provide additional information about the report.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString3 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString4 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Default reporting configuration information.
 */
export interface ReportingConfiguration {
  /**
   * Specifies whether the report may be produced during the scan.
   */
  enabled?: boolean;
  /**
   * Specifies the failure level for the report.
   */
  level?: 'none' | 'note' | 'warning' | 'error';
  /**
   * Specifies the relative priority of the report. Used for analysis output only.
   */
  rank?: number;
  parameters?: PropertyBag;
  /**
   * Key/value pairs that provide additional information about the reporting configuration.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Contains configuration information specific to a report.
 */
export interface PropertyBag {
  /**
   * A set of distinct strings that provide additional information.
   *
   * @minItems 0
   */
  tags?: string[];
  [k: string]: unknown | undefined;
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString5 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Information about the relation of one reporting descriptor to another.
 */
export interface ReportingDescriptorRelationship {
  target: ReportingDescriptorReference;
  /**
   * A set of distinct strings that categorize the relationship. Well-known kinds include 'canPrecede', 'canFollow', 'willPrecede', 'willFollow', 'superset', 'subset', 'equal', 'disjoint', 'relevant', and 'incomparable'.
   */
  kinds?: string[];
  description?: Message;
  /**
   * Key/value pairs that provide additional information about the reporting descriptor reference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A reference used to locate the toolComponent associated with the descriptor.
 */
export interface ToolComponentReference {
  /**
   * The 'name' property of the referenced toolComponent.
   */
  name?: string;
  /**
   * An index into the referenced toolComponent in tool.extensions.
   */
  index?: number;
  /**
   * The 'guid' property of the referenced toolComponent.
   */
  guid?: string;
  /**
   * Key/value pairs that provide additional information about the toolComponentReference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message1;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The component which is strongly associated with this component. For a translation, this refers to the component which has been translated. For an extension, this is the driver that provides the extension's plugin model.
 */
export interface ToolComponentReference1 {
  /**
   * The 'name' property of the referenced toolComponent.
   */
  name?: string;
  /**
   * An index into the referenced toolComponent in tool.extensions.
   */
  index?: number;
  /**
   * The 'guid' property of the referenced toolComponent.
   */
  guid?: string;
  /**
   * Key/value pairs that provide additional information about the toolComponentReference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Translation metadata, required for a translation, not populated by other component types.
 */
export interface TranslationMetadata {
  /**
   * The name associated with the translation metadata.
   */
  name: string;
  /**
   * The full name associated with the translation metadata.
   */
  fullName?: string;
  shortDescription?: MultiformatMessageString6;
  fullDescription?: MultiformatMessageString7;
  /**
   * The absolute URI from which the translation metadata can be downloaded.
   */
  downloadUri?: string;
  /**
   * The absolute URI from which information related to the translation metadata can be downloaded.
   */
  informationUri?: string;
  /**
   * Key/value pairs that provide additional information about the translation metadata.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString6 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString7 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
export interface ToolComponentReference2 {
  /**
   * The 'name' property of the referenced toolComponent.
   */
  name?: string;
  /**
   * An index into the referenced toolComponent in tool.extensions.
   */
  index?: number;
  /**
   * The 'guid' property of the referenced toolComponent.
   */
  guid?: string;
  /**
   * Key/value pairs that provide additional information about the toolComponentReference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A component, such as a plug-in or the driver, of the analysis tool that was run.
 */
export interface ToolComponent1 {
  /**
   * A unique identifier for the tool component in the form of a GUID.
   */
  guid?: string;
  /**
   * The name of the tool component.
   */
  name: string;
  /**
   * The organization or company that produced the tool component.
   */
  organization?: string;
  /**
   * A product suite to which the tool component belongs.
   */
  product?: string;
  /**
   * A localizable string containing the name of the suite of products to which the tool component belongs.
   */
  productSuite?: string;
  shortDescription?: MultiformatMessageString;
  fullDescription?: MultiformatMessageString1;
  /**
   * The name of the tool component along with its version and any other useful identifying information, such as its locale.
   */
  fullName?: string;
  /**
   * The tool component version, in whatever format the component natively provides.
   */
  version?: string;
  /**
   * The tool component version in the format specified by Semantic Versioning 2.0.
   */
  semanticVersion?: string;
  /**
   * The binary version of the tool component's primary executable file expressed as four non-negative integers separated by a period (for operating systems that express file versions in this way).
   */
  dottedQuadFileVersion?: string;
  /**
   * A string specifying the UTC date (and optionally, the time) of the component's release.
   */
  releaseDateUtc?: string;
  /**
   * The absolute URI from which the tool component can be downloaded.
   */
  downloadUri?: string;
  /**
   * The absolute URI at which information about this version of the tool component can be found.
   */
  informationUri?: string;
  /**
   * A dictionary, each of whose keys is a resource identifier and each of whose values is a multiformatMessageString object, which holds message strings in plain text and (optionally) Markdown format. The strings can include placeholders, which can be used to construct a message in combination with an arbitrary number of additional string arguments.
   */
  globalMessageStrings?: {
    [k: string]: MultiformatMessageString2 | undefined;
  };
  /**
   * An array of reportingDescriptor objects relevant to the notifications related to the configuration and runtime execution of the tool component.
   *
   * @minItems 0
   */
  notifications?: ReportingDescriptor[];
  /**
   * An array of reportingDescriptor objects relevant to the analysis performed by the tool component.
   *
   * @minItems 0
   */
  rules?: ReportingDescriptor[];
  /**
   * An array of reportingDescriptor objects relevant to the definitions of both standalone and tool-defined taxonomies.
   *
   * @minItems 0
   */
  taxa?: ReportingDescriptor[];
  /**
   * An array of the artifactLocation objects associated with the tool component.
   *
   * @minItems 0
   */
  locations?: ArtifactLocation[];
  /**
   * The language of the messages emitted into the log file during this run (expressed as an ISO 639-1 two-letter lowercase language code) and an optional region (expressed as an ISO 3166-1 two-letter uppercase subculture code associated with a country or region). The casing is recommended but not required (in order for this data to conform to RFC5646).
   */
  language?: string;
  /**
   * The kinds of data contained in this object.
   */
  contents?: ('localizedData' | 'nonLocalizedData')[];
  /**
   * Specifies whether this object contains a complete definition of the localizable and/or non-localizable data for this component, as opposed to including only data that is relevant to the results persisted to this log file.
   */
  isComprehensive?: boolean;
  /**
   * The semantic version of the localized strings defined in this component; maintained by components that provide translations.
   */
  localizedDataSemanticVersion?: string;
  /**
   * The minimum value of localizedDataSemanticVersion required in translations consumed by this component; used by components that consume translations.
   */
  minimumRequiredLocalizedDataSemanticVersion?: string;
  associatedComponent?: ToolComponentReference1;
  translationMetadata?: TranslationMetadata;
  /**
   * An array of toolComponentReference objects to declare the taxonomies supported by the tool component.
   *
   * @minItems 0
   */
  supportedTaxonomies?: ToolComponentReference2[];
  /**
   * Key/value pairs that provide additional information about the tool component.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * An invocation object that describes the invocation of the converter.
 */
export interface Invocation {
  /**
   * The command line used to invoke the tool.
   */
  commandLine?: string;
  /**
   * An array of strings, containing in order the command line arguments passed to the tool from the operating system.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * The locations of any response files specified on the tool's command line.
   *
   * @minItems 0
   */
  responseFiles?: ArtifactLocation[];
  /**
   * The Coordinated Universal Time (UTC) date and time at which the run started. See "Date/time properties" in the SARIF spec for the required format.
   */
  startTimeUtc?: string;
  /**
   * The Coordinated Universal Time (UTC) date and time at which the run ended. See "Date/time properties" in the SARIF spec for the required format.
   */
  endTimeUtc?: string;
  /**
   * The process exit code.
   */
  exitCode?: number;
  /**
   * An array of configurationOverride objects that describe rules related runtime overrides.
   *
   * @minItems 0
   */
  ruleConfigurationOverrides?: ConfigurationOverride[];
  /**
   * An array of configurationOverride objects that describe notifications related runtime overrides.
   *
   * @minItems 0
   */
  notificationConfigurationOverrides?: ConfigurationOverride[];
  /**
   * A list of runtime conditions detected by the tool during the analysis.
   *
   * @minItems 0
   */
  toolExecutionNotifications?: Notification[];
  /**
   * A list of conditions detected by the tool that are relevant to the tool's configuration.
   *
   * @minItems 0
   */
  toolConfigurationNotifications?: Notification[];
  /**
   * The reason for the process exit.
   */
  exitCodeDescription?: string;
  /**
   * The name of the signal that caused the process to exit.
   */
  exitSignalName?: string;
  /**
   * The numeric value of the signal that caused the process to exit.
   */
  exitSignalNumber?: number;
  /**
   * The reason given by the operating system that the process failed to start.
   */
  processStartFailureMessage?: string;
  /**
   * Specifies whether the tool's execution completed successfully.
   */
  executionSuccessful: boolean;
  /**
   * The machine that hosted the analysis tool run.
   */
  machine?: string;
  /**
   * The account that ran the analysis tool.
   */
  account?: string;
  /**
   * The process id for the analysis tool run.
   */
  processId?: number;
  executableLocation?: ArtifactLocation2;
  workingDirectory?: ArtifactLocation3;
  /**
   * The environment variables associated with the analysis tool process, expressed as key/value pairs.
   */
  environmentVariables?: {
    [k: string]: string | undefined;
  };
  stdin?: ArtifactLocation4;
  stdout?: ArtifactLocation5;
  stderr?: ArtifactLocation6;
  stdoutStderr?: ArtifactLocation7;
  /**
   * Key/value pairs that provide additional information about the invocation.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Information about how a specific rule or notification was reconfigured at runtime.
 */
export interface ConfigurationOverride {
  configuration: ReportingConfiguration1;
  descriptor: ReportingDescriptorReference1;
  /**
   * Key/value pairs that provide additional information about the configuration override.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies how the rule or notification was configured during the scan.
 */
export interface ReportingConfiguration1 {
  /**
   * Specifies whether the report may be produced during the scan.
   */
  enabled?: boolean;
  /**
   * Specifies the failure level for the report.
   */
  level?: 'none' | 'note' | 'warning' | 'error';
  /**
   * Specifies the relative priority of the report. Used for analysis output only.
   */
  rank?: number;
  parameters?: PropertyBag;
  /**
   * Key/value pairs that provide additional information about the reporting configuration.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Describes a condition relevant to the tool itself, as opposed to being relevant to a target being analyzed by the tool.
 */
export interface Notification {
  /**
   * The locations relevant to this notification.
   *
   * @minItems 0
   */
  locations?: Location[];
  message: Message5;
  /**
   * A value specifying the severity level of the notification.
   */
  level?: 'none' | 'note' | 'warning' | 'error';
  /**
   * The thread identifier of the code that generated the notification.
   */
  threadId?: number;
  /**
   * The Coordinated Universal Time (UTC) date and time at which the analysis tool generated the notification.
   */
  timeUtc?: string;
  exception?: Exception;
  descriptor?: ReportingDescriptorReference2;
  associatedRule?: ReportingDescriptorReference3;
  /**
   * Key/value pairs that provide additional information about the notification.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A location within a programming artifact.
 */
export interface Location {
  /**
   * Value that distinguishes this location from all other locations within a single result object.
   */
  id?: number;
  physicalLocation?: PhysicalLocation;
  logicalLocation?: LogicalLocation;
  message?: Message3;
  /**
   * A set of regions relevant to the location.
   *
   * @minItems 0
   */
  annotations?: Region2[];
  /**
   * An array of objects that describe relationships between this location and others.
   *
   * @minItems 0
   */
  relationships?: LocationRelationship[];
  /**
   * Key/value pairs that provide additional information about the location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The address of the location.
 */
export interface Address {
  /**
   * The address expressed as a byte offset from the start of the addressable region.
   */
  absoluteAddress?: number;
  /**
   * The address expressed as a byte offset from the absolute address of the top-most parent object.
   */
  relativeAddress?: number;
  /**
   * The number of bytes in this range of addresses.
   */
  length?: number;
  /**
   * An open-ended string that identifies the address kind. 'data', 'function', 'header','instruction', 'module', 'page', 'section', 'segment', 'stack', 'stackFrame', 'table' are well-known values.
   */
  kind?: string;
  /**
   * A name that is associated with the address, e.g., '.text'.
   */
  name?: string;
  /**
   * A human-readable fully qualified name that is associated with the address.
   */
  fullyQualifiedName?: string;
  /**
   * The byte offset of this address from the absolute or relative address of the parent object.
   */
  offsetFromParent?: number;
  /**
   * The index within run.addresses of the cached object for this address.
   */
  index?: number;
  /**
   * The index within run.addresses of the parent object.
   */
  parentIndex?: number;
  /**
   * Key/value pairs that provide additional information about the address.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation1 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message1;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies a portion of the artifact.
 */
export interface Region {
  /**
   * The line number of the first character in the region.
   */
  startLine?: number;
  /**
   * The column number of the first character in the region.
   */
  startColumn?: number;
  /**
   * The line number of the last character in the region.
   */
  endLine?: number;
  /**
   * The column number of the character following the end of the region.
   */
  endColumn?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first character in the region.
   */
  charOffset?: number;
  /**
   * The length of the region in characters.
   */
  charLength?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first byte in the region.
   */
  byteOffset?: number;
  /**
   * The length of the region in bytes.
   */
  byteLength?: number;
  snippet?: ArtifactContent;
  message?: Message2;
  /**
   * Specifies the source language, if any, of the portion of the artifact specified by the region object.
   */
  sourceLanguage?: string;
  /**
   * Key/value pairs that provide additional information about the region.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The portion of the artifact contents within the specified region.
 */
export interface ArtifactContent {
  /**
   * UTF-8-encoded content from a text artifact.
   */
  text?: string;
  /**
   * MIME Base64-encoded content from a binary artifact, or from a text artifact in its original encoding.
   */
  binary?: string;
  rendered?: MultiformatMessageString8;
  /**
   * Key/value pairs that provide additional information about the artifact content.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString8 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies a portion of the artifact that encloses the region. Allows a viewer to display additional context around the region.
 */
export interface Region1 {
  /**
   * The line number of the first character in the region.
   */
  startLine?: number;
  /**
   * The column number of the first character in the region.
   */
  startColumn?: number;
  /**
   * The line number of the last character in the region.
   */
  endLine?: number;
  /**
   * The column number of the character following the end of the region.
   */
  endColumn?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first character in the region.
   */
  charOffset?: number;
  /**
   * The length of the region in characters.
   */
  charLength?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first byte in the region.
   */
  byteOffset?: number;
  /**
   * The length of the region in bytes.
   */
  byteLength?: number;
  snippet?: ArtifactContent;
  message?: Message2;
  /**
   * Specifies the source language, if any, of the portion of the artifact specified by the region object.
   */
  sourceLanguage?: string;
  /**
   * Key/value pairs that provide additional information about the region.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The logical location associated with the result.
 */
export interface LogicalLocation {
  /**
   * Identifies the construct in which the result occurred. For example, this property might contain the name of a class or a method.
   */
  name?: string;
  /**
   * The index within the logical locations array.
   */
  index?: number;
  /**
   * The human-readable fully qualified name of the logical location.
   */
  fullyQualifiedName?: string;
  /**
   * The machine-readable name for the logical location, such as a mangled function name provided by a C++ compiler that encodes calling convention, return type and other details along with the function name.
   */
  decoratedName?: string;
  /**
   * Identifies the index of the immediate parent of the construct in which the result was detected. For example, this property might point to a logical location that represents the namespace that holds a type.
   */
  parentIndex?: number;
  /**
   * The type of construct this logical location component refers to. Should be one of 'function', 'member', 'module', 'namespace', 'parameter', 'resource', 'returnType', 'type', 'variable', 'object', 'array', 'property', 'value', 'element', 'text', 'attribute', 'comment', 'declaration', 'dtd' or 'processingInstruction', if any of those accurately describe the construct.
   */
  kind?: string;
  /**
   * Key/value pairs that provide additional information about the logical location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A region within an artifact where a result was detected.
 */
export interface Region2 {
  /**
   * The line number of the first character in the region.
   */
  startLine?: number;
  /**
   * The column number of the first character in the region.
   */
  startColumn?: number;
  /**
   * The line number of the last character in the region.
   */
  endLine?: number;
  /**
   * The column number of the character following the end of the region.
   */
  endColumn?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first character in the region.
   */
  charOffset?: number;
  /**
   * The length of the region in characters.
   */
  charLength?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first byte in the region.
   */
  byteOffset?: number;
  /**
   * The length of the region in bytes.
   */
  byteLength?: number;
  snippet?: ArtifactContent;
  message?: Message2;
  /**
   * Specifies the source language, if any, of the portion of the artifact specified by the region object.
   */
  sourceLanguage?: string;
  /**
   * Key/value pairs that provide additional information about the region.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Information about the relation of one location to another.
 */
export interface LocationRelationship {
  /**
   * A reference to the related location.
   */
  target: number;
  /**
   * A set of distinct strings that categorize the relationship. Well-known kinds include 'includes', 'isIncludedBy' and 'relevant'.
   */
  kinds?: string[];
  description?: Message4;
  /**
   * Key/value pairs that provide additional information about the location relationship.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The runtime exception, if any, relevant to this notification.
 */
export interface Exception {
  /**
   * A string that identifies the kind of exception, for example, the fully qualified type name of an object that was thrown, or the symbolic name of a signal.
   */
  kind?: string;
  /**
   * A message that describes the exception.
   */
  message?: string;
  stack?: Stack;
  /**
   * An array of exception objects each of which is considered a cause of this exception.
   *
   * @minItems 0
   */
  innerExceptions?: Exception1[];
  /**
   * Key/value pairs that provide additional information about the exception.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The sequence of function calls leading to the exception.
 */
export interface Stack {
  message?: Message6;
  /**
   * An array of stack frames that represents a sequence of calls, rendered in reverse chronological order, that comprise the call stack.
   *
   * @minItems 0
   */
  frames: StackFrame[];
  /**
   * Key/value pairs that provide additional information about the stack.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A function call within a stack trace.
 */
export interface StackFrame {
  location?: Location1;
  /**
   * The name of the module that contains the code of this stack frame.
   */
  module?: string;
  /**
   * The thread identifier of the stack frame.
   */
  threadId?: number;
  /**
   * The parameters of the call that is executing.
   *
   * @minItems 0
   */
  parameters?: string[];
  /**
   * Key/value pairs that provide additional information about the stack frame.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A location within a programming artifact.
 */
export interface Location1 {
  /**
   * Value that distinguishes this location from all other locations within a single result object.
   */
  id?: number;
  physicalLocation?: PhysicalLocation;
  logicalLocation?: LogicalLocation;
  message?: Message3;
  /**
   * A set of regions relevant to the location.
   *
   * @minItems 0
   */
  annotations?: Region2[];
  /**
   * An array of objects that describe relationships between this location and others.
   *
   * @minItems 0
   */
  relationships?: LocationRelationship[];
  /**
   * Key/value pairs that provide additional information about the location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
export interface Exception1 {
  /**
   * A string that identifies the kind of exception, for example, the fully qualified type name of an object that was thrown, or the symbolic name of a signal.
   */
  kind?: string;
  /**
   * A message that describes the exception.
   */
  message?: string;
  stack?: Stack;
  /**
   * An array of exception objects each of which is considered a cause of this exception.
   *
   * @minItems 0
   */
  innerExceptions?: Exception1[];
  /**
   * Key/value pairs that provide additional information about the exception.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation2 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message1;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation3 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message1;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation4 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message1;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation5 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message1;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation6 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message1;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation7 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message1;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A network of nodes and directed edges that describes some aspect of the structure of the code (for example, a call graph).
 */
export interface Graph {
  description?: Message7;
  /**
   * An array of node objects representing the nodes of the graph.
   *
   * @minItems 0
   */
  nodes?: Node[];
  /**
   * An array of edge objects representing the edges of the graph.
   *
   * @minItems 0
   */
  edges?: Edge[];
  /**
   * Key/value pairs that provide additional information about the graph.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Represents a node in a graph.
 */
export interface Node {
  /**
   * A string that uniquely identifies the node within its graph.
   */
  id: string;
  label?: Message8;
  location?: Location2;
  /**
   * Array of child nodes.
   *
   * @minItems 0
   */
  children?: Node[];
  /**
   * Key/value pairs that provide additional information about the node.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A code location associated with the node.
 */
export interface Location2 {
  /**
   * Value that distinguishes this location from all other locations within a single result object.
   */
  id?: number;
  physicalLocation?: PhysicalLocation1;
  logicalLocation?: LogicalLocation1;
  message?: Message11;
  /**
   * A set of regions relevant to the location.
   *
   * @minItems 0
   */
  annotations?: Region5[];
  /**
   * An array of objects that describe relationships between this location and others.
   *
   * @minItems 0
   */
  relationships?: LocationRelationship1[];
  /**
   * Key/value pairs that provide additional information about the location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The address of the location.
 */
export interface Address1 {
  /**
   * The address expressed as a byte offset from the start of the addressable region.
   */
  absoluteAddress?: number;
  /**
   * The address expressed as a byte offset from the absolute address of the top-most parent object.
   */
  relativeAddress?: number;
  /**
   * The number of bytes in this range of addresses.
   */
  length?: number;
  /**
   * An open-ended string that identifies the address kind. 'data', 'function', 'header','instruction', 'module', 'page', 'section', 'segment', 'stack', 'stackFrame', 'table' are well-known values.
   */
  kind?: string;
  /**
   * A name that is associated with the address, e.g., '.text'.
   */
  name?: string;
  /**
   * A human-readable fully qualified name that is associated with the address.
   */
  fullyQualifiedName?: string;
  /**
   * The byte offset of this address from the absolute or relative address of the parent object.
   */
  offsetFromParent?: number;
  /**
   * The index within run.addresses of the cached object for this address.
   */
  index?: number;
  /**
   * The index within run.addresses of the parent object.
   */
  parentIndex?: number;
  /**
   * Key/value pairs that provide additional information about the address.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The location of the artifact.
 */
export interface ArtifactLocation8 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message9;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies a portion of the artifact.
 */
export interface Region3 {
  /**
   * The line number of the first character in the region.
   */
  startLine?: number;
  /**
   * The column number of the first character in the region.
   */
  startColumn?: number;
  /**
   * The line number of the last character in the region.
   */
  endLine?: number;
  /**
   * The column number of the character following the end of the region.
   */
  endColumn?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first character in the region.
   */
  charOffset?: number;
  /**
   * The length of the region in characters.
   */
  charLength?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first byte in the region.
   */
  byteOffset?: number;
  /**
   * The length of the region in bytes.
   */
  byteLength?: number;
  snippet?: ArtifactContent1;
  message?: Message10;
  /**
   * Specifies the source language, if any, of the portion of the artifact specified by the region object.
   */
  sourceLanguage?: string;
  /**
   * Key/value pairs that provide additional information about the region.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The portion of the artifact contents within the specified region.
 */
export interface ArtifactContent1 {
  /**
   * UTF-8-encoded content from a text artifact.
   */
  text?: string;
  /**
   * MIME Base64-encoded content from a binary artifact, or from a text artifact in its original encoding.
   */
  binary?: string;
  rendered?: MultiformatMessageString9;
  /**
   * Key/value pairs that provide additional information about the artifact content.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * An alternate rendered representation of the artifact (e.g., a decompiled representation of a binary region).
 */
export interface MultiformatMessageString9 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies a portion of the artifact that encloses the region. Allows a viewer to display additional context around the region.
 */
export interface Region4 {
  /**
   * The line number of the first character in the region.
   */
  startLine?: number;
  /**
   * The column number of the first character in the region.
   */
  startColumn?: number;
  /**
   * The line number of the last character in the region.
   */
  endLine?: number;
  /**
   * The column number of the character following the end of the region.
   */
  endColumn?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first character in the region.
   */
  charOffset?: number;
  /**
   * The length of the region in characters.
   */
  charLength?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first byte in the region.
   */
  byteOffset?: number;
  /**
   * The length of the region in bytes.
   */
  byteLength?: number;
  snippet?: ArtifactContent1;
  message?: Message10;
  /**
   * Specifies the source language, if any, of the portion of the artifact specified by the region object.
   */
  sourceLanguage?: string;
  /**
   * Key/value pairs that provide additional information about the region.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The logical location associated with the result.
 */
export interface LogicalLocation1 {
  /**
   * Identifies the construct in which the result occurred. For example, this property might contain the name of a class or a method.
   */
  name?: string;
  /**
   * The index within the logical locations array.
   */
  index?: number;
  /**
   * The human-readable fully qualified name of the logical location.
   */
  fullyQualifiedName?: string;
  /**
   * The machine-readable name for the logical location, such as a mangled function name provided by a C++ compiler that encodes calling convention, return type and other details along with the function name.
   */
  decoratedName?: string;
  /**
   * Identifies the index of the immediate parent of the construct in which the result was detected. For example, this property might point to a logical location that represents the namespace that holds a type.
   */
  parentIndex?: number;
  /**
   * The type of construct this logical location component refers to. Should be one of 'function', 'member', 'module', 'namespace', 'parameter', 'resource', 'returnType', 'type', 'variable', 'object', 'array', 'property', 'value', 'element', 'text', 'attribute', 'comment', 'declaration', 'dtd' or 'processingInstruction', if any of those accurately describe the construct.
   */
  kind?: string;
  /**
   * Key/value pairs that provide additional information about the logical location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A region within an artifact where a result was detected.
 */
export interface Region5 {
  /**
   * The line number of the first character in the region.
   */
  startLine?: number;
  /**
   * The column number of the first character in the region.
   */
  startColumn?: number;
  /**
   * The line number of the last character in the region.
   */
  endLine?: number;
  /**
   * The column number of the character following the end of the region.
   */
  endColumn?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first character in the region.
   */
  charOffset?: number;
  /**
   * The length of the region in characters.
   */
  charLength?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first byte in the region.
   */
  byteOffset?: number;
  /**
   * The length of the region in bytes.
   */
  byteLength?: number;
  snippet?: ArtifactContent1;
  message?: Message10;
  /**
   * Specifies the source language, if any, of the portion of the artifact specified by the region object.
   */
  sourceLanguage?: string;
  /**
   * Key/value pairs that provide additional information about the region.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Information about the relation of one location to another.
 */
export interface LocationRelationship1 {
  /**
   * A reference to the related location.
   */
  target: number;
  /**
   * A set of distinct strings that categorize the relationship. Well-known kinds include 'includes', 'isIncludedBy' and 'relevant'.
   */
  kinds?: string[];
  description?: Message12;
  /**
   * Key/value pairs that provide additional information about the location relationship.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Represents a directed edge in a graph.
 */
export interface Edge {
  /**
   * A string that uniquely identifies the edge within its graph.
   */
  id: string;
  label?: Message13;
  /**
   * Identifies the source node (the node at which the edge starts).
   */
  sourceNodeId: string;
  /**
   * Identifies the target node (the node at which the edge ends).
   */
  targetNodeId: string;
  /**
   * Key/value pairs that provide additional information about the edge.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Key/value pairs that provide additional information that will be merged with an external run.
 */
export interface PropertyBag1 {
  /**
   * A set of distinct strings that provide additional information.
   *
   * @minItems 0
   */
  tags?: string[];
  [k: string]: unknown | undefined;
}
/**
 * A single artifact. In some cases, this artifact might be nested within another artifact.
 */
export interface Artifact {
  description?: Message14;
  location?: ArtifactLocation9;
  /**
   * Identifies the index of the immediate parent of the artifact, if this artifact is nested.
   */
  parentIndex?: number;
  /**
   * The offset in bytes of the artifact within its containing artifact.
   */
  offset?: number;
  /**
   * The length of the artifact in bytes.
   */
  length?: number;
  /**
   * The role or roles played by the artifact in the analysis.
   *
   * @minItems 0
   */
  roles?: (
    | 'analysisTarget'
    | 'attachment'
    | 'responseFile'
    | 'resultFile'
    | 'standardStream'
    | 'tracedFile'
    | 'unmodified'
    | 'modified'
    | 'added'
    | 'deleted'
    | 'renamed'
    | 'uncontrolled'
    | 'driver'
    | 'extension'
    | 'translation'
    | 'taxonomy'
    | 'policy'
    | 'referencedOnCommandLine'
    | 'memoryContents'
    | 'directory'
    | 'userSpecifiedConfiguration'
    | 'toolSpecifiedConfiguration'
    | 'debugOutputFile'
  )[];
  /**
   * The MIME type (RFC 2045) of the artifact.
   */
  mimeType?: string;
  contents?: ArtifactContent2;
  /**
   * Specifies the encoding for an artifact object that refers to a text file.
   */
  encoding?: string;
  /**
   * Specifies the source language for any artifact object that refers to a text file that contains source code.
   */
  sourceLanguage?: string;
  /**
   * A dictionary, each of whose keys is the name of a hash function and each of whose values is the hashed value of the artifact produced by the specified hash function.
   */
  hashes?: {
    [k: string]: string | undefined;
  };
  /**
   * The Coordinated Universal Time (UTC) date and time at which the artifact was most recently modified. See "Date/time properties" in the SARIF spec for the required format.
   */
  lastModifiedTimeUtc?: string;
  /**
   * Key/value pairs that provide additional information about the artifact.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The location of the artifact.
 */
export interface ArtifactLocation9 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message9;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The contents of the artifact.
 */
export interface ArtifactContent2 {
  /**
   * UTF-8-encoded content from a text artifact.
   */
  text?: string;
  /**
   * MIME Base64-encoded content from a binary artifact, or from a text artifact in its original encoding.
   */
  binary?: string;
  rendered?: MultiformatMessageString9;
  /**
   * Key/value pairs that provide additional information about the artifact content.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The runtime environment of the analysis tool run.
 */
export interface Invocation1 {
  /**
   * The command line used to invoke the tool.
   */
  commandLine?: string;
  /**
   * An array of strings, containing in order the command line arguments passed to the tool from the operating system.
   *
   * @minItems 0
   */
  arguments?: string[];
  /**
   * The locations of any response files specified on the tool's command line.
   *
   * @minItems 0
   */
  responseFiles?: ArtifactLocation10[];
  /**
   * The Coordinated Universal Time (UTC) date and time at which the run started. See "Date/time properties" in the SARIF spec for the required format.
   */
  startTimeUtc?: string;
  /**
   * The Coordinated Universal Time (UTC) date and time at which the run ended. See "Date/time properties" in the SARIF spec for the required format.
   */
  endTimeUtc?: string;
  /**
   * The process exit code.
   */
  exitCode?: number;
  /**
   * An array of configurationOverride objects that describe rules related runtime overrides.
   *
   * @minItems 0
   */
  ruleConfigurationOverrides?: ConfigurationOverride1[];
  /**
   * An array of configurationOverride objects that describe notifications related runtime overrides.
   *
   * @minItems 0
   */
  notificationConfigurationOverrides?: ConfigurationOverride1[];
  /**
   * A list of runtime conditions detected by the tool during the analysis.
   *
   * @minItems 0
   */
  toolExecutionNotifications?: Notification1[];
  /**
   * A list of conditions detected by the tool that are relevant to the tool's configuration.
   *
   * @minItems 0
   */
  toolConfigurationNotifications?: Notification1[];
  /**
   * The reason for the process exit.
   */
  exitCodeDescription?: string;
  /**
   * The name of the signal that caused the process to exit.
   */
  exitSignalName?: string;
  /**
   * The numeric value of the signal that caused the process to exit.
   */
  exitSignalNumber?: number;
  /**
   * The reason given by the operating system that the process failed to start.
   */
  processStartFailureMessage?: string;
  /**
   * Specifies whether the tool's execution completed successfully.
   */
  executionSuccessful: boolean;
  /**
   * The machine that hosted the analysis tool run.
   */
  machine?: string;
  /**
   * The account that ran the analysis tool.
   */
  account?: string;
  /**
   * The process id for the analysis tool run.
   */
  processId?: number;
  executableLocation?: ArtifactLocation11;
  workingDirectory?: ArtifactLocation12;
  /**
   * The environment variables associated with the analysis tool process, expressed as key/value pairs.
   */
  environmentVariables?: {
    [k: string]: string | undefined;
  };
  stdin?: ArtifactLocation13;
  stdout?: ArtifactLocation14;
  stderr?: ArtifactLocation15;
  stdoutStderr?: ArtifactLocation16;
  /**
   * Key/value pairs that provide additional information about the invocation.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation10 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message9;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Information about how a specific rule or notification was reconfigured at runtime.
 */
export interface ConfigurationOverride1 {
  configuration: ReportingConfiguration2;
  descriptor: ReportingDescriptorReference4;
  /**
   * Key/value pairs that provide additional information about the configuration override.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies how the rule or notification was configured during the scan.
 */
export interface ReportingConfiguration2 {
  /**
   * Specifies whether the report may be produced during the scan.
   */
  enabled?: boolean;
  /**
   * Specifies the failure level for the report.
   */
  level?: 'none' | 'note' | 'warning' | 'error';
  /**
   * Specifies the relative priority of the report. Used for analysis output only.
   */
  rank?: number;
  parameters?: PropertyBag2;
  /**
   * Key/value pairs that provide additional information about the reporting configuration.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Contains configuration information specific to a report.
 */
export interface PropertyBag2 {
  /**
   * A set of distinct strings that provide additional information.
   *
   * @minItems 0
   */
  tags?: string[];
  [k: string]: unknown | undefined;
}
/**
 * A reference used to locate the toolComponent associated with the descriptor.
 */
export interface ToolComponentReference3 {
  /**
   * The 'name' property of the referenced toolComponent.
   */
  name?: string;
  /**
   * An index into the referenced toolComponent in tool.extensions.
   */
  index?: number;
  /**
   * The 'guid' property of the referenced toolComponent.
   */
  guid?: string;
  /**
   * Key/value pairs that provide additional information about the toolComponentReference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Describes a condition relevant to the tool itself, as opposed to being relevant to a target being analyzed by the tool.
 */
export interface Notification1 {
  /**
   * The locations relevant to this notification.
   *
   * @minItems 0
   */
  locations?: Location3[];
  message: Message15;
  /**
   * A value specifying the severity level of the notification.
   */
  level?: 'none' | 'note' | 'warning' | 'error';
  /**
   * The thread identifier of the code that generated the notification.
   */
  threadId?: number;
  /**
   * The Coordinated Universal Time (UTC) date and time at which the analysis tool generated the notification.
   */
  timeUtc?: string;
  exception?: Exception2;
  descriptor?: ReportingDescriptorReference5;
  associatedRule?: ReportingDescriptorReference6;
  /**
   * Key/value pairs that provide additional information about the notification.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A location within a programming artifact.
 */
export interface Location3 {
  /**
   * Value that distinguishes this location from all other locations within a single result object.
   */
  id?: number;
  physicalLocation?: PhysicalLocation1;
  logicalLocation?: LogicalLocation1;
  message?: Message11;
  /**
   * A set of regions relevant to the location.
   *
   * @minItems 0
   */
  annotations?: Region5[];
  /**
   * An array of objects that describe relationships between this location and others.
   *
   * @minItems 0
   */
  relationships?: LocationRelationship1[];
  /**
   * Key/value pairs that provide additional information about the location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The runtime exception, if any, relevant to this notification.
 */
export interface Exception2 {
  /**
   * A string that identifies the kind of exception, for example, the fully qualified type name of an object that was thrown, or the symbolic name of a signal.
   */
  kind?: string;
  /**
   * A message that describes the exception.
   */
  message?: string;
  stack?: Stack1;
  /**
   * An array of exception objects each of which is considered a cause of this exception.
   *
   * @minItems 0
   */
  innerExceptions?: Exception3[];
  /**
   * Key/value pairs that provide additional information about the exception.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The sequence of function calls leading to the exception.
 */
export interface Stack1 {
  message?: Message16;
  /**
   * An array of stack frames that represents a sequence of calls, rendered in reverse chronological order, that comprise the call stack.
   *
   * @minItems 0
   */
  frames: StackFrame1[];
  /**
   * Key/value pairs that provide additional information about the stack.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A function call within a stack trace.
 */
export interface StackFrame1 {
  location?: Location4;
  /**
   * The name of the module that contains the code of this stack frame.
   */
  module?: string;
  /**
   * The thread identifier of the stack frame.
   */
  threadId?: number;
  /**
   * The parameters of the call that is executing.
   *
   * @minItems 0
   */
  parameters?: string[];
  /**
   * Key/value pairs that provide additional information about the stack frame.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A location within a programming artifact.
 */
export interface Location4 {
  /**
   * Value that distinguishes this location from all other locations within a single result object.
   */
  id?: number;
  physicalLocation?: PhysicalLocation1;
  logicalLocation?: LogicalLocation1;
  message?: Message11;
  /**
   * A set of regions relevant to the location.
   *
   * @minItems 0
   */
  annotations?: Region5[];
  /**
   * An array of objects that describe relationships between this location and others.
   *
   * @minItems 0
   */
  relationships?: LocationRelationship1[];
  /**
   * Key/value pairs that provide additional information about the location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
export interface Exception3 {
  /**
   * A string that identifies the kind of exception, for example, the fully qualified type name of an object that was thrown, or the symbolic name of a signal.
   */
  kind?: string;
  /**
   * A message that describes the exception.
   */
  message?: string;
  stack?: Stack1;
  /**
   * An array of exception objects each of which is considered a cause of this exception.
   *
   * @minItems 0
   */
  innerExceptions?: Exception3[];
  /**
   * Key/value pairs that provide additional information about the exception.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation11 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message9;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation12 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message9;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation13 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message9;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation14 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message9;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation15 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message9;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation16 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message9;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A logical location of a construct that produced a result.
 */
export interface LogicalLocation2 {
  /**
   * Identifies the construct in which the result occurred. For example, this property might contain the name of a class or a method.
   */
  name?: string;
  /**
   * The index within the logical locations array.
   */
  index?: number;
  /**
   * The human-readable fully qualified name of the logical location.
   */
  fullyQualifiedName?: string;
  /**
   * The machine-readable name for the logical location, such as a mangled function name provided by a C++ compiler that encodes calling convention, return type and other details along with the function name.
   */
  decoratedName?: string;
  /**
   * Identifies the index of the immediate parent of the construct in which the result was detected. For example, this property might point to a logical location that represents the namespace that holds a type.
   */
  parentIndex?: number;
  /**
   * The type of construct this logical location component refers to. Should be one of 'function', 'member', 'module', 'namespace', 'parameter', 'resource', 'returnType', 'type', 'variable', 'object', 'array', 'property', 'value', 'element', 'text', 'attribute', 'comment', 'declaration', 'dtd' or 'processingInstruction', if any of those accurately describe the construct.
   */
  kind?: string;
  /**
   * Key/value pairs that provide additional information about the logical location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A location visited by an analysis tool while simulating or monitoring the execution of a program.
 */
export interface ThreadFlowLocation {
  /**
   * The index within the run threadFlowLocations array.
   */
  index?: number;
  location?: Location5;
  stack?: Stack2;
  /**
   * A set of distinct strings that categorize the thread flow location. Well-known kinds include 'acquire', 'release', 'enter', 'exit', 'call', 'return', 'branch', 'implicit', 'false', 'true', 'caution', 'danger', 'unknown', 'unreachable', 'taint', 'function', 'handler', 'lock', 'memory', 'resource', 'scope' and 'value'.
   *
   * @minItems 0
   */
  kinds?: string[];
  /**
   * An array of references to rule or taxonomy reporting descriptors that are applicable to the thread flow location.
   *
   * @minItems 0
   */
  taxa?: ReportingDescriptorReference7[];
  /**
   * The name of the module that contains the code that is executing.
   */
  module?: string;
  /**
   * A dictionary, each of whose keys specifies a variable or expression, the associated value of which represents the variable or expression value. For an annotation of kind 'continuation', for example, this dictionary might hold the current assumed values of a set of global variables.
   */
  state?: {
    [k: string]: MultiformatMessageString10 | undefined;
  };
  /**
   * An integer representing a containment hierarchy within the thread flow.
   */
  nestingLevel?: number;
  /**
   * An integer representing the temporal order in which execution reached this location.
   */
  executionOrder?: number;
  /**
   * The Coordinated Universal Time (UTC) date and time at which this location was executed.
   */
  executionTimeUtc?: string;
  /**
   * Specifies the importance of this location in understanding the code flow in which it occurs. The order from most to least important is "essential", "important", "unimportant". Default: "important".
   */
  importance?: 'important' | 'essential' | 'unimportant';
  webRequest?: WebRequest;
  webResponse?: WebResponse;
  /**
   * Key/value pairs that provide additional information about the threadflow location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A location within a programming artifact.
 */
export interface Location5 {
  /**
   * Value that distinguishes this location from all other locations within a single result object.
   */
  id?: number;
  physicalLocation?: PhysicalLocation1;
  logicalLocation?: LogicalLocation1;
  message?: Message11;
  /**
   * A set of regions relevant to the location.
   *
   * @minItems 0
   */
  annotations?: Region5[];
  /**
   * An array of objects that describe relationships between this location and others.
   *
   * @minItems 0
   */
  relationships?: LocationRelationship1[];
  /**
   * Key/value pairs that provide additional information about the location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The call stack leading to this location.
 */
export interface Stack2 {
  message?: Message16;
  /**
   * An array of stack frames that represents a sequence of calls, rendered in reverse chronological order, that comprise the call stack.
   *
   * @minItems 0
   */
  frames: StackFrame1[];
  /**
   * Key/value pairs that provide additional information about the stack.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString10 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A web request associated with this thread flow location.
 */
export interface WebRequest {
  /**
   * The index within the run.webRequests array of the request object associated with this result.
   */
  index?: number;
  /**
   * The request protocol. Example: 'http'.
   */
  protocol?: string;
  /**
   * The request version. Example: '1.1'.
   */
  version?: string;
  /**
   * The target of the request.
   */
  target?: string;
  /**
   * The HTTP method. Well-known values are 'GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS', 'TRACE', 'CONNECT'.
   */
  method?: string;
  /**
   * The request headers.
   */
  headers?: {
    [k: string]: string | undefined;
  };
  /**
   * The request parameters.
   */
  parameters?: {
    [k: string]: string | undefined;
  };
  body?: ArtifactContent3;
  /**
   * Key/value pairs that provide additional information about the request.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The body of the request.
 */
export interface ArtifactContent3 {
  /**
   * UTF-8-encoded content from a text artifact.
   */
  text?: string;
  /**
   * MIME Base64-encoded content from a binary artifact, or from a text artifact in its original encoding.
   */
  binary?: string;
  rendered?: MultiformatMessageString9;
  /**
   * Key/value pairs that provide additional information about the artifact content.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A web response associated with this thread flow location.
 */
export interface WebResponse {
  /**
   * The index within the run.webResponses array of the response object associated with this result.
   */
  index?: number;
  /**
   * The response protocol. Example: 'http'.
   */
  protocol?: string;
  /**
   * The response version. Example: '1.1'.
   */
  version?: string;
  /**
   * The response status code. Example: 451.
   */
  statusCode?: number;
  /**
   * The response reason. Example: 'Not found'.
   */
  reasonPhrase?: string;
  /**
   * The response headers.
   */
  headers?: {
    [k: string]: string | undefined;
  };
  body?: ArtifactContent4;
  /**
   * Specifies whether a response was received from the server.
   */
  noResponseReceived?: boolean;
  /**
   * Key/value pairs that provide additional information about the response.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The body of the response.
 */
export interface ArtifactContent4 {
  /**
   * UTF-8-encoded content from a text artifact.
   */
  text?: string;
  /**
   * MIME Base64-encoded content from a binary artifact, or from a text artifact in its original encoding.
   */
  binary?: string;
  rendered?: MultiformatMessageString9;
  /**
   * Key/value pairs that provide additional information about the artifact content.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A result produced by an analysis tool.
 */
export interface Result {
  /**
   * The stable, unique identifier of the rule, if any, to which this notification is relevant. This member can be used to retrieve rule metadata from the rules dictionary, if it exists.
   */
  ruleId?: string;
  /**
   * The index within the tool component rules array of the rule object associated with this result.
   */
  ruleIndex?: number;
  rule?: ReportingDescriptorReference8;
  /**
   * A value that categorizes results by evaluation state.
   */
  kind?: 'notApplicable' | 'pass' | 'fail' | 'review' | 'open' | 'informational';
  /**
   * A value specifying the severity level of the result.
   */
  level?: 'none' | 'note' | 'warning' | 'error';
  message: Message17;
  analysisTarget?: ArtifactLocation17;
  /**
   * The set of locations where the result was detected. Specify only one location unless the problem indicated by the result can only be corrected by making a change at every specified location.
   *
   * @minItems 0
   */
  locations?: Location3[];
  /**
   * A stable, unique identifier for the result in the form of a GUID.
   */
  guid?: string;
  /**
   * A stable, unique identifier for the equivalence class of logically identical results to which this result belongs, in the form of a GUID.
   */
  correlationGuid?: string;
  /**
   * A positive integer specifying the number of times this logically unique result was observed in this run.
   */
  occurrenceCount?: number;
  /**
   * A set of strings that contribute to the stable, unique identity of the result.
   */
  partialFingerprints?: {
    [k: string]: string | undefined;
  };
  /**
   * A set of strings each of which individually defines a stable, unique identity for the result.
   */
  fingerprints?: {
    [k: string]: string | undefined;
  };
  /**
   * An array of 'stack' objects relevant to the result.
   *
   * @minItems 0
   */
  stacks?: Stack3[];
  /**
   * An array of 'codeFlow' objects relevant to the result.
   *
   * @minItems 0
   */
  codeFlows?: CodeFlow[];
  /**
   * An array of zero or more unique graph objects associated with the result.
   *
   * @minItems 0
   */
  graphs?: Graph[];
  /**
   * An array of one or more unique 'graphTraversal' objects.
   *
   * @minItems 0
   */
  graphTraversals?: GraphTraversal[];
  /**
   * A set of locations relevant to this result.
   *
   * @minItems 0
   */
  relatedLocations?: Location3[];
  /**
   * A set of suppressions relevant to this result.
   *
   * @minItems 0
   */
  suppressions?: Suppression[];
  /**
   * The state of a result relative to a baseline of a previous run.
   */
  baselineState?: 'new' | 'unchanged' | 'updated' | 'absent';
  /**
   * A number representing the priority or importance of the result.
   */
  rank?: number;
  /**
   * A set of artifacts relevant to the result.
   *
   * @minItems 0
   */
  attachments?: Attachment[];
  /**
   * An absolute URI at which the result can be viewed.
   */
  hostedViewerUri?: string;
  /**
   * The URIs of the work items associated with this result.
   *
   * @minItems 0
   */
  workItemUris?: string[];
  provenance?: ResultProvenance;
  /**
   * An array of 'fix' objects, each of which represents a proposed fix to the problem indicated by the result.
   *
   * @minItems 0
   */
  fixes?: Fix[];
  /**
   * An array of references to taxonomy reporting descriptors that are applicable to the result.
   *
   * @minItems 0
   */
  taxa?: ReportingDescriptorReference7[];
  webRequest?: WebRequest1;
  webResponse?: WebResponse1;
  /**
   * Key/value pairs that provide additional information about the result.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation17 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message9;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A call stack that is relevant to a result.
 */
export interface Stack3 {
  message?: Message16;
  /**
   * An array of stack frames that represents a sequence of calls, rendered in reverse chronological order, that comprise the call stack.
   *
   * @minItems 0
   */
  frames: StackFrame1[];
  /**
   * Key/value pairs that provide additional information about the stack.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A set of threadFlows which together describe a pattern of code execution relevant to detecting a result.
 */
export interface CodeFlow {
  message?: Message18;
  /**
   * An array of one or more unique threadFlow objects, each of which describes the progress of a program through a thread of execution.
   *
   * @minItems 1
   */
  threadFlows: [ThreadFlow, ...ThreadFlow[]];
  /**
   * Key/value pairs that provide additional information about the code flow.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
export interface ThreadFlow {
  /**
   * An string that uniquely identifies the threadFlow within the codeFlow in which it occurs.
   */
  id?: string;
  message?: Message19;
  /**
   * Values of relevant expressions at the start of the thread flow that may change during thread flow execution.
   */
  initialState?: {
    [k: string]: MultiformatMessageString10 | undefined;
  };
  /**
   * Values of relevant expressions at the start of the thread flow that remain constant.
   */
  immutableState?: {
    [k: string]: MultiformatMessageString10 | undefined;
  };
  /**
   * A temporally ordered array of 'threadFlowLocation' objects, each of which describes a location visited by the tool while producing the result.
   *
   * @minItems 1
   */
  locations: [ThreadFlowLocation, ...ThreadFlowLocation[]];
  /**
   * Key/value pairs that provide additional information about the thread flow.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Represents the traversal of a single edge during a graph traversal.
 */
export interface EdgeTraversal {
  /**
   * Identifies the edge being traversed.
   */
  edgeId: string;
  message?: Message21;
  /**
   * The values of relevant expressions after the edge has been traversed.
   */
  finalState?: {
    [k: string]: MultiformatMessageString10 | undefined;
  };
  /**
   * The number of edge traversals necessary to return from a nested graph.
   */
  stepOverEdgeCount?: number;
  /**
   * Key/value pairs that provide additional information about the edge traversal.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A suppression that is relevant to a result.
 */
export interface Suppression {
  /**
   * A stable, unique identifier for the suppression in the form of a GUID.
   */
  guid?: string;
  /**
   * A string that indicates where the suppression is persisted.
   */
  kind: 'inSource' | 'external';
  /**
   * A string that indicates the state of the suppression.
   */
  state?: 'accepted' | 'underReview' | 'rejected';
  /**
   * A string representing the justification for the suppression.
   */
  justification?: string;
  location?: Location6;
  /**
   * Key/value pairs that provide additional information about the suppression.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A location within a programming artifact.
 */
export interface Location6 {
  /**
   * Value that distinguishes this location from all other locations within a single result object.
   */
  id?: number;
  physicalLocation?: PhysicalLocation1;
  logicalLocation?: LogicalLocation1;
  message?: Message11;
  /**
   * A set of regions relevant to the location.
   *
   * @minItems 0
   */
  annotations?: Region5[];
  /**
   * An array of objects that describe relationships between this location and others.
   *
   * @minItems 0
   */
  relationships?: LocationRelationship1[];
  /**
   * Key/value pairs that provide additional information about the location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * An artifact relevant to a result.
 */
export interface Attachment {
  description?: Message22;
  artifactLocation: ArtifactLocation18;
  /**
   * An array of regions of interest within the attachment.
   *
   * @minItems 0
   */
  regions?: Region5[];
  /**
   * An array of rectangles specifying areas of interest within the image.
   *
   * @minItems 0
   */
  rectangles?: Rectangle[];
  /**
   * Key/value pairs that provide additional information about the attachment.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation18 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message9;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * An area within an image.
 */
export interface Rectangle {
  /**
   * The Y coordinate of the top edge of the rectangle, measured in the image's natural units.
   */
  top?: number;
  /**
   * The X coordinate of the left edge of the rectangle, measured in the image's natural units.
   */
  left?: number;
  /**
   * The Y coordinate of the bottom edge of the rectangle, measured in the image's natural units.
   */
  bottom?: number;
  /**
   * The X coordinate of the right edge of the rectangle, measured in the image's natural units.
   */
  right?: number;
  message?: Message23;
  /**
   * Key/value pairs that provide additional information about the rectangle.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Information about how and when the result was detected.
 */
export interface ResultProvenance {
  /**
   * The Coordinated Universal Time (UTC) date and time at which the result was first detected. See "Date/time properties" in the SARIF spec for the required format.
   */
  firstDetectionTimeUtc?: string;
  /**
   * The Coordinated Universal Time (UTC) date and time at which the result was most recently detected. See "Date/time properties" in the SARIF spec for the required format.
   */
  lastDetectionTimeUtc?: string;
  /**
   * A GUID-valued string equal to the automationDetails.guid property of the run in which the result was first detected.
   */
  firstDetectionRunGuid?: string;
  /**
   * A GUID-valued string equal to the automationDetails.guid property of the run in which the result was most recently detected.
   */
  lastDetectionRunGuid?: string;
  /**
   * The index within the run.invocations array of the invocation object which describes the tool invocation that detected the result.
   */
  invocationIndex?: number;
  /**
   * An array of physicalLocation objects which specify the portions of an analysis tool's output that a converter transformed into the result.
   *
   * @minItems 0
   */
  conversionSources?: PhysicalLocation2[];
  /**
   * Key/value pairs that provide additional information about the result.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A proposed fix for the problem represented by a result object. A fix specifies a set of artifacts to modify. For each artifact, it specifies a set of bytes to remove, and provides a set of new bytes to replace them.
 */
export interface Fix {
  description?: Message24;
  /**
   * One or more artifact changes that comprise a fix for a result.
   *
   * @minItems 1
   */
  artifactChanges: [ArtifactChange, ...ArtifactChange[]];
  /**
   * Key/value pairs that provide additional information about the fix.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A change to a single artifact.
 */
export interface ArtifactChange {
  artifactLocation: ArtifactLocation19;
  /**
   * An array of replacement objects, each of which represents the replacement of a single region in a single artifact specified by 'artifactLocation'.
   *
   * @minItems 1
   */
  replacements: [Replacement, ...Replacement[]];
  /**
   * Key/value pairs that provide additional information about the change.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Specifies the location of an artifact.
 */
export interface ArtifactLocation19 {
  /**
   * A string containing a valid relative or absolute URI.
   */
  uri?: string;
  /**
   * A string which indirectly specifies the absolute URI with respect to which a relative URI in the "uri" property is interpreted.
   */
  uriBaseId?: string;
  /**
   * The index within the run artifacts array of the artifact object associated with the artifact location.
   */
  index?: number;
  description?: Message9;
  /**
   * Key/value pairs that provide additional information about the artifact location.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The replacement of a single region of an artifact.
 */
export interface Replacement {
  deletedRegion: Region6;
  insertedContent?: ArtifactContent5;
  /**
   * Key/value pairs that provide additional information about the replacement.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A region within an artifact where a result was detected.
 */
export interface Region6 {
  /**
   * The line number of the first character in the region.
   */
  startLine?: number;
  /**
   * The column number of the first character in the region.
   */
  startColumn?: number;
  /**
   * The line number of the last character in the region.
   */
  endLine?: number;
  /**
   * The column number of the character following the end of the region.
   */
  endColumn?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first character in the region.
   */
  charOffset?: number;
  /**
   * The length of the region in characters.
   */
  charLength?: number;
  /**
   * The zero-based offset from the beginning of the artifact of the first byte in the region.
   */
  byteOffset?: number;
  /**
   * The length of the region in bytes.
   */
  byteLength?: number;
  snippet?: ArtifactContent1;
  message?: Message10;
  /**
   * Specifies the source language, if any, of the portion of the artifact specified by the region object.
   */
  sourceLanguage?: string;
  /**
   * Key/value pairs that provide additional information about the region.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The content to insert at the location specified by the 'deletedRegion' property.
 */
export interface ArtifactContent5 {
  /**
   * UTF-8-encoded content from a text artifact.
   */
  text?: string;
  /**
   * MIME Base64-encoded content from a binary artifact, or from a text artifact in its original encoding.
   */
  binary?: string;
  rendered?: MultiformatMessageString9;
  /**
   * Key/value pairs that provide additional information about the artifact content.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A web request associated with this result.
 */
export interface WebRequest1 {
  /**
   * The index within the run.webRequests array of the request object associated with this result.
   */
  index?: number;
  /**
   * The request protocol. Example: 'http'.
   */
  protocol?: string;
  /**
   * The request version. Example: '1.1'.
   */
  version?: string;
  /**
   * The target of the request.
   */
  target?: string;
  /**
   * The HTTP method. Well-known values are 'GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS', 'TRACE', 'CONNECT'.
   */
  method?: string;
  /**
   * The request headers.
   */
  headers?: {
    [k: string]: string | undefined;
  };
  /**
   * The request parameters.
   */
  parameters?: {
    [k: string]: string | undefined;
  };
  body?: ArtifactContent3;
  /**
   * Key/value pairs that provide additional information about the request.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A web response associated with this result.
 */
export interface WebResponse1 {
  /**
   * The index within the run.webResponses array of the response object associated with this result.
   */
  index?: number;
  /**
   * The response protocol. Example: 'http'.
   */
  protocol?: string;
  /**
   * The response version. Example: '1.1'.
   */
  version?: string;
  /**
   * The response status code. Example: 451.
   */
  statusCode?: number;
  /**
   * The response reason. Example: 'Not found'.
   */
  reasonPhrase?: string;
  /**
   * The response headers.
   */
  headers?: {
    [k: string]: string | undefined;
  };
  body?: ArtifactContent4;
  /**
   * Specifies whether a response was received from the server.
   */
  noResponseReceived?: boolean;
  /**
   * Key/value pairs that provide additional information about the response.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A component, such as a plug-in or the driver, of the analysis tool that was run.
 */
export interface ToolComponent2 {
  /**
   * A unique identifier for the tool component in the form of a GUID.
   */
  guid?: string;
  /**
   * The name of the tool component.
   */
  name: string;
  /**
   * The organization or company that produced the tool component.
   */
  organization?: string;
  /**
   * A product suite to which the tool component belongs.
   */
  product?: string;
  /**
   * A localizable string containing the name of the suite of products to which the tool component belongs.
   */
  productSuite?: string;
  shortDescription?: MultiformatMessageString11;
  fullDescription?: MultiformatMessageString12;
  /**
   * The name of the tool component along with its version and any other useful identifying information, such as its locale.
   */
  fullName?: string;
  /**
   * The tool component version, in whatever format the component natively provides.
   */
  version?: string;
  /**
   * The tool component version in the format specified by Semantic Versioning 2.0.
   */
  semanticVersion?: string;
  /**
   * The binary version of the tool component's primary executable file expressed as four non-negative integers separated by a period (for operating systems that express file versions in this way).
   */
  dottedQuadFileVersion?: string;
  /**
   * A string specifying the UTC date (and optionally, the time) of the component's release.
   */
  releaseDateUtc?: string;
  /**
   * The absolute URI from which the tool component can be downloaded.
   */
  downloadUri?: string;
  /**
   * The absolute URI at which information about this version of the tool component can be found.
   */
  informationUri?: string;
  /**
   * A dictionary, each of whose keys is a resource identifier and each of whose values is a multiformatMessageString object, which holds message strings in plain text and (optionally) Markdown format. The strings can include placeholders, which can be used to construct a message in combination with an arbitrary number of additional string arguments.
   */
  globalMessageStrings?: {
    [k: string]: MultiformatMessageString10 | undefined;
  };
  /**
   * An array of reportingDescriptor objects relevant to the notifications related to the configuration and runtime execution of the tool component.
   *
   * @minItems 0
   */
  notifications?: ReportingDescriptor1[];
  /**
   * An array of reportingDescriptor objects relevant to the analysis performed by the tool component.
   *
   * @minItems 0
   */
  rules?: ReportingDescriptor1[];
  /**
   * An array of reportingDescriptor objects relevant to the definitions of both standalone and tool-defined taxonomies.
   *
   * @minItems 0
   */
  taxa?: ReportingDescriptor1[];
  /**
   * An array of the artifactLocation objects associated with the tool component.
   *
   * @minItems 0
   */
  locations?: ArtifactLocation10[];
  /**
   * The language of the messages emitted into the log file during this run (expressed as an ISO 639-1 two-letter lowercase language code) and an optional region (expressed as an ISO 3166-1 two-letter uppercase subculture code associated with a country or region). The casing is recommended but not required (in order for this data to conform to RFC5646).
   */
  language?: string;
  /**
   * The kinds of data contained in this object.
   */
  contents?: ('localizedData' | 'nonLocalizedData')[];
  /**
   * Specifies whether this object contains a complete definition of the localizable and/or non-localizable data for this component, as opposed to including only data that is relevant to the results persisted to this log file.
   */
  isComprehensive?: boolean;
  /**
   * The semantic version of the localized strings defined in this component; maintained by components that provide translations.
   */
  localizedDataSemanticVersion?: string;
  /**
   * The minimum value of localizedDataSemanticVersion required in translations consumed by this component; used by components that consume translations.
   */
  minimumRequiredLocalizedDataSemanticVersion?: string;
  associatedComponent?: ToolComponentReference4;
  translationMetadata?: TranslationMetadata1;
  /**
   * An array of toolComponentReference objects to declare the taxonomies supported by the tool component.
   *
   * @minItems 0
   */
  supportedTaxonomies?: ToolComponentReference5[];
  /**
   * Key/value pairs that provide additional information about the tool component.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString11 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString12 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Metadata that describes a specific report produced by the tool, as part of the analysis it provides or its runtime reporting.
 */
export interface ReportingDescriptor1 {
  /**
   * A stable, opaque identifier for the report.
   */
  id: string;
  /**
   * An array of stable, opaque identifiers by which this report was known in some previous version of the analysis tool.
   *
   * @minItems 0
   */
  deprecatedIds?: string[];
  /**
   * A unique identifier for the reporting descriptor in the form of a GUID.
   */
  guid?: string;
  /**
   * An array of unique identifies in the form of a GUID by which this report was known in some previous version of the analysis tool.
   *
   * @minItems 0
   */
  deprecatedGuids?: string[];
  /**
   * A report identifier that is understandable to an end user.
   */
  name?: string;
  /**
   * An array of readable identifiers by which this report was known in some previous version of the analysis tool.
   *
   * @minItems 0
   */
  deprecatedNames?: string[];
  shortDescription?: MultiformatMessageString13;
  fullDescription?: MultiformatMessageString14;
  /**
   * A set of name/value pairs with arbitrary names. Each value is a multiformatMessageString object, which holds message strings in plain text and (optionally) Markdown format. The strings can include placeholders, which can be used to construct a message in combination with an arbitrary number of additional string arguments.
   */
  messageStrings?: {
    [k: string]: MultiformatMessageString10 | undefined;
  };
  defaultConfiguration?: ReportingConfiguration3;
  /**
   * A URI where the primary documentation for the report can be found.
   */
  helpUri?: string;
  help?: MultiformatMessageString15;
  /**
   * An array of objects that describe relationships between this reporting descriptor and others.
   *
   * @minItems 0
   */
  relationships?: ReportingDescriptorRelationship1[];
  /**
   * Key/value pairs that provide additional information about the report.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString13 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString14 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Default reporting configuration information.
 */
export interface ReportingConfiguration3 {
  /**
   * Specifies whether the report may be produced during the scan.
   */
  enabled?: boolean;
  /**
   * Specifies the failure level for the report.
   */
  level?: 'none' | 'note' | 'warning' | 'error';
  /**
   * Specifies the relative priority of the report. Used for analysis output only.
   */
  rank?: number;
  parameters?: PropertyBag2;
  /**
   * Key/value pairs that provide additional information about the reporting configuration.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString15 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Information about the relation of one reporting descriptor to another.
 */
export interface ReportingDescriptorRelationship1 {
  target: ReportingDescriptorReference9;
  /**
   * A set of distinct strings that categorize the relationship. Well-known kinds include 'canPrecede', 'canFollow', 'willPrecede', 'willFollow', 'superset', 'subset', 'equal', 'disjoint', 'relevant', and 'incomparable'.
   */
  kinds?: string[];
  description?: Message25;
  /**
   * Key/value pairs that provide additional information about the reporting descriptor reference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * The component which is strongly associated with this component. For a translation, this refers to the component which has been translated. For an extension, this is the driver that provides the extension's plugin model.
 */
export interface ToolComponentReference4 {
  /**
   * The 'name' property of the referenced toolComponent.
   */
  name?: string;
  /**
   * An index into the referenced toolComponent in tool.extensions.
   */
  index?: number;
  /**
   * The 'guid' property of the referenced toolComponent.
   */
  guid?: string;
  /**
   * Key/value pairs that provide additional information about the toolComponentReference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Translation metadata, required for a translation, not populated by other component types.
 */
export interface TranslationMetadata1 {
  /**
   * The name associated with the translation metadata.
   */
  name: string;
  /**
   * The full name associated with the translation metadata.
   */
  fullName?: string;
  shortDescription?: MultiformatMessageString16;
  fullDescription?: MultiformatMessageString17;
  /**
   * The absolute URI from which the translation metadata can be downloaded.
   */
  downloadUri?: string;
  /**
   * The absolute URI from which information related to the translation metadata can be downloaded.
   */
  informationUri?: string;
  /**
   * Key/value pairs that provide additional information about the translation metadata.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString16 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A message string or message format string rendered in multiple formats.
 */
export interface MultiformatMessageString17 {
  /**
   * A plain text message string or format string.
   */
  text: string;
  /**
   * A Markdown message string or format string.
   */
  markdown?: string;
  /**
   * Key/value pairs that provide additional information about the message.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
export interface ToolComponentReference5 {
  /**
   * The 'name' property of the referenced toolComponent.
   */
  name?: string;
  /**
   * An index into the referenced toolComponent in tool.extensions.
   */
  index?: number;
  /**
   * The 'guid' property of the referenced toolComponent.
   */
  guid?: string;
  /**
   * Key/value pairs that provide additional information about the toolComponentReference.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A component, such as a plug-in or the driver, of the analysis tool that was run.
 */
export interface ToolComponent3 {
  /**
   * A unique identifier for the tool component in the form of a GUID.
   */
  guid?: string;
  /**
   * The name of the tool component.
   */
  name: string;
  /**
   * The organization or company that produced the tool component.
   */
  organization?: string;
  /**
   * A product suite to which the tool component belongs.
   */
  product?: string;
  /**
   * A localizable string containing the name of the suite of products to which the tool component belongs.
   */
  productSuite?: string;
  shortDescription?: MultiformatMessageString11;
  fullDescription?: MultiformatMessageString12;
  /**
   * The name of the tool component along with its version and any other useful identifying information, such as its locale.
   */
  fullName?: string;
  /**
   * The tool component version, in whatever format the component natively provides.
   */
  version?: string;
  /**
   * The tool component version in the format specified by Semantic Versioning 2.0.
   */
  semanticVersion?: string;
  /**
   * The binary version of the tool component's primary executable file expressed as four non-negative integers separated by a period (for operating systems that express file versions in this way).
   */
  dottedQuadFileVersion?: string;
  /**
   * A string specifying the UTC date (and optionally, the time) of the component's release.
   */
  releaseDateUtc?: string;
  /**
   * The absolute URI from which the tool component can be downloaded.
   */
  downloadUri?: string;
  /**
   * The absolute URI at which information about this version of the tool component can be found.
   */
  informationUri?: string;
  /**
   * A dictionary, each of whose keys is a resource identifier and each of whose values is a multiformatMessageString object, which holds message strings in plain text and (optionally) Markdown format. The strings can include placeholders, which can be used to construct a message in combination with an arbitrary number of additional string arguments.
   */
  globalMessageStrings?: {
    [k: string]: MultiformatMessageString10 | undefined;
  };
  /**
   * An array of reportingDescriptor objects relevant to the notifications related to the configuration and runtime execution of the tool component.
   *
   * @minItems 0
   */
  notifications?: ReportingDescriptor1[];
  /**
   * An array of reportingDescriptor objects relevant to the analysis performed by the tool component.
   *
   * @minItems 0
   */
  rules?: ReportingDescriptor1[];
  /**
   * An array of reportingDescriptor objects relevant to the definitions of both standalone and tool-defined taxonomies.
   *
   * @minItems 0
   */
  taxa?: ReportingDescriptor1[];
  /**
   * An array of the artifactLocation objects associated with the tool component.
   *
   * @minItems 0
   */
  locations?: ArtifactLocation10[];
  /**
   * The language of the messages emitted into the log file during this run (expressed as an ISO 639-1 two-letter lowercase language code) and an optional region (expressed as an ISO 3166-1 two-letter uppercase subculture code associated with a country or region). The casing is recommended but not required (in order for this data to conform to RFC5646).
   */
  language?: string;
  /**
   * The kinds of data contained in this object.
   */
  contents?: ('localizedData' | 'nonLocalizedData')[];
  /**
   * Specifies whether this object contains a complete definition of the localizable and/or non-localizable data for this component, as opposed to including only data that is relevant to the results persisted to this log file.
   */
  isComprehensive?: boolean;
  /**
   * The semantic version of the localized strings defined in this component; maintained by components that provide translations.
   */
  localizedDataSemanticVersion?: string;
  /**
   * The minimum value of localizedDataSemanticVersion required in translations consumed by this component; used by components that consume translations.
   */
  minimumRequiredLocalizedDataSemanticVersion?: string;
  associatedComponent?: ToolComponentReference4;
  translationMetadata?: TranslationMetadata1;
  /**
   * An array of toolComponentReference objects to declare the taxonomies supported by the tool component.
   *
   * @minItems 0
   */
  supportedTaxonomies?: ToolComponentReference5[];
  /**
   * Key/value pairs that provide additional information about the tool component.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A physical or virtual address, or a range of addresses, in an 'addressable region' (memory or a binary file).
 */
export interface Address2 {
  /**
   * The address expressed as a byte offset from the start of the addressable region.
   */
  absoluteAddress?: number;
  /**
   * The address expressed as a byte offset from the absolute address of the top-most parent object.
   */
  relativeAddress?: number;
  /**
   * The number of bytes in this range of addresses.
   */
  length?: number;
  /**
   * An open-ended string that identifies the address kind. 'data', 'function', 'header','instruction', 'module', 'page', 'section', 'segment', 'stack', 'stackFrame', 'table' are well-known values.
   */
  kind?: string;
  /**
   * A name that is associated with the address, e.g., '.text'.
   */
  name?: string;
  /**
   * A human-readable fully qualified name that is associated with the address.
   */
  fullyQualifiedName?: string;
  /**
   * The byte offset of this address from the absolute or relative address of the parent object.
   */
  offsetFromParent?: number;
  /**
   * The index within run.addresses of the cached object for this address.
   */
  index?: number;
  /**
   * The index within run.addresses of the parent object.
   */
  parentIndex?: number;
  /**
   * Key/value pairs that provide additional information about the address.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
}
/**
 * A web request object.
 */
export interface WebRequest2 {
  /**
   * The index within the run.webRequests array of the request object associated with this result.
   */
  index?: number;
  /**
   * The request protocol. Example: 'http'.
   */
  protocol?: string;
  /**
   * The request version. Example: '1.1'.
   */
  version?: string;
  /**
   * The target of the request.
   */
  target?: string;
  /**
   * The HTTP method. Well-known values are 'GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS', 'TRACE', 'CONNECT'.
   */
  method?: string;
  /**
   * The request headers.
   */
  headers?: {
    [k: string]: string | undefined;
  };
  /**
   * The request parameters.
   */
  parameters?: {
    [k: string]: string | undefined;
  };
  body?: ArtifactContent3;
  /**
   * Key/value pairs that provide additional information about the request.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A web response object.
 */
export interface WebResponse2 {
  /**
   * The index within the run.webResponses array of the response object associated with this result.
   */
  index?: number;
  /**
   * The response protocol. Example: 'http'.
   */
  protocol?: string;
  /**
   * The response version. Example: '1.1'.
   */
  version?: string;
  /**
   * The response status code. Example: 451.
   */
  statusCode?: number;
  /**
   * The response reason. Example: 'Not found'.
   */
  reasonPhrase?: string;
  /**
   * The response headers.
   */
  headers?: {
    [k: string]: string | undefined;
  };
  body?: ArtifactContent4;
  /**
   * Specifies whether a response was received from the server.
   */
  noResponseReceived?: boolean;
  /**
   * Key/value pairs that provide additional information about the response.
   */
  properties?: {
    /**
     * A set of distinct strings that provide additional information.
     *
     * @minItems 0
     */
    tags?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
