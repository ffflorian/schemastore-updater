/* eslint-disable */

/**
 * Linguistic Schema Definition Language schema
 */
export type LSDLSchema =
  | LSDLSchema1
  | LSDLSchema2
  | LSDLSchema3
  | LSDLSchema4
  | LSDLSchema5
  | LSDLSchema6
  | LSDLSchema7
  | LSDLSchema8
  | LSDLSchema9
  | LSDLSchema10
  | LSDLSchema11
  | LSDLSchema12;
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 *
 * Items: A term in the linguistic schema
 */
export type Terms = [string | FullTerm, ...(string | FullTerm)[]];
/**
 * A list of related entities which are used to group the query when this entity is shown
 *
 * @minItems 1
 *
 * Items: A reference to an entity in a linguistic relationship
 */
export type EntityReferences = [string | FullEntityReference, ...(string | FullEntityReference)[]];
/**
 * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
 *
 * @minItems 1
 * @maxItems 1
 */
export type Conditions = [Condition];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 *
 * Items: The phrasings on a linguistic relationship
 */
export type Phrasings = [
  (
    | AttributePhrasing
    | NamePhrasing
    | AdjectivePhrasing
    | DynamicAdjectivePhrasing
    | NounPhrasing
    | DynamicNounPhrasing
    | PrepositionPhrasing
    | VerbPhrasing
  ),
  ...(
    | AttributePhrasing
    | NamePhrasing
    | AdjectivePhrasing
    | DynamicAdjectivePhrasing
    | NounPhrasing
    | DynamicNounPhrasing
    | PrepositionPhrasing
    | VerbPhrasing
  )[]
];
/**
 * An attribute phrasing on a linguistic relationship
 */
export type AttributePhrasing = {
  Attribute: AttributePhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases = [PrepPhrase, ...PrepPhrase[]];
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing = {
  Name: NamePhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing = {
  /**
   * Properties of an adjective phrasing
   */
  Adjective: AdjectivePhrasingProperty | AntonymPhrasingProperty;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * Additional adverb phrases which apply to the phrasing
 *
 * @minItems 1
 *
 * Items: An adverb phrase in a linguistic relationship
 */
export type AdverbPhrases = [
  AdverbPhraseProperty | AdverbAntonymPhraseProperty,
  ...(AdverbPhraseProperty | AdverbAntonymPhraseProperty)[]
];
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing = {
  Noun: NounPhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing = {
  DynamicNoun: DynamicNounPhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing = {
  Preposition: PrepositionPhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing = {
  Verb: VerbPhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * The global text substitutions in the linguistic schema.
 *
 * @minItems 1
 */
export type GlobalSubstitutions = [GlobalSubstitution, ...GlobalSubstitution[]];
/**
 * Examples associated with the linguistic schema.
 *
 * @minItems 1
 *
 * Items: An example utterance associated with the linguistic schema
 */
export type Examples = [string | FullExample, ...(string | FullExample)[]];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 *
 * Items: The phrasings on a linguistic relationship
 */
export type Phrasings3 = [
  (
    | AttributePhrasing3
    | NamePhrasing3
    | AdjectivePhrasing3
    | DynamicAdjectivePhrasing3
    | NounPhrasing3
    | DynamicNounPhrasing3
    | PrepositionPhrasing3
    | VerbPhrasing3
  ),
  ...(
    | AttributePhrasing3
    | NamePhrasing3
    | AdjectivePhrasing3
    | DynamicAdjectivePhrasing3
    | NounPhrasing3
    | DynamicNounPhrasing3
    | PrepositionPhrasing3
    | VerbPhrasing3
  )[]
];
/**
 * An attribute phrasing on a linguistic relationship
 */
export type AttributePhrasing3 = {
  Attribute: AttributePhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing3 = {
  Name: NamePhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing3 = {
  /**
   * Properties of an adjective phrasing
   */
  Adjective: AdjectivePhrasingProperty | AntonymPhrasingProperty;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing3 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing3 = {
  Noun: NounPhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing3 = {
  DynamicNoun: DynamicNounPhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing3 = {
  Preposition: PrepositionPhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing3 = {
  Verb: VerbPhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 *
 * Items: A term in the linguistic schema
 */
export type Terms52 = [string | FullTerm4, ...(string | FullTerm4)[]];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 *
 * Items: The phrasings on a linguistic relationship
 */
export type Phrasings4 = [
  (
    | AttributePhrasing4
    | NamePhrasing4
    | AdjectivePhrasing4
    | DynamicAdjectivePhrasing4
    | NounPhrasing4
    | DynamicNounPhrasing4
    | PrepositionPhrasing4
    | VerbPhrasing4
  ),
  ...(
    | AttributePhrasing4
    | NamePhrasing4
    | AdjectivePhrasing4
    | DynamicAdjectivePhrasing4
    | NounPhrasing4
    | DynamicNounPhrasing4
    | PrepositionPhrasing4
    | VerbPhrasing4
  )[]
];
/**
 * An attribute phrasing on a linguistic relationship
 */
export type AttributePhrasing4 = {
  Attribute: AttributePhrasingProperties4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases32 = [PrepPhrase4, ...PrepPhrase4[]];
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing4 = {
  Name: NamePhrasingProperties;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing4 = {
  /**
   * Properties of an adjective phrasing
   */
  Adjective: AdjectivePhrasingProperty4 | AntonymPhrasingProperty4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing4 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing4 = {
  Noun: NounPhrasingProperties4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing4 = {
  DynamicNoun: DynamicNounPhrasingProperties4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing4 = {
  Preposition: PrepositionPhrasingProperties4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing4 = {
  Verb: VerbPhrasingProperties4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 *
 * Items: The phrasings on a linguistic relationship
 */
export type Phrasings8 = [
  (
    | AttributePhrasing4
    | NamePhrasing4
    | AdjectivePhrasing8
    | DynamicAdjectivePhrasing4
    | NounPhrasing4
    | DynamicNounPhrasing4
    | PrepositionPhrasing4
    | VerbPhrasing4
  ),
  ...(
    | AttributePhrasing4
    | NamePhrasing4
    | AdjectivePhrasing8
    | DynamicAdjectivePhrasing4
    | NounPhrasing4
    | DynamicNounPhrasing4
    | PrepositionPhrasing4
    | VerbPhrasing4
  )[]
];
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing8 = {
  /**
   * Properties of an adjective phrasing
   */
  Adjective:
    | {
        /**
         * The entity which is described via an adjective
         */
        Subject: string | FullRoleReference;
        Adjectives: Terms52;
        Antonyms?: Terms52;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference;
        PrepositionalPhrases?: PrepPhrases32;
      }
    | {
        /**
         * The entity which is described via an adjective
         */
        Subject: string | FullRoleReference;
        Antonyms: Terms52;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference;
        PrepositionalPhrases?: PrepPhrases32;
      };
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 *
 * Items: A term in the linguistic schema
 */
export type Terms102 = [string | FullTerm9, ...(string | FullTerm9)[]];
/**
 * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
 *
 * @minItems 1
 * @maxItems 1
 */
export type Conditions9 = [Condition9];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 *
 * Items: The phrasings on a linguistic relationship
 */
export type Phrasings9 = [
  (
    | AttributePhrasing9
    | NamePhrasing4
    | AdjectivePhrasing9
    | DynamicAdjectivePhrasing9
    | NounPhrasing9
    | DynamicNounPhrasing9
    | PrepositionPhrasing9
    | VerbPhrasing9
  ),
  ...(
    | AttributePhrasing9
    | NamePhrasing4
    | AdjectivePhrasing9
    | DynamicAdjectivePhrasing9
    | NounPhrasing9
    | DynamicNounPhrasing9
    | PrepositionPhrasing9
    | VerbPhrasing9
  )[]
];
/**
 * An attribute phrasing on a linguistic relationship
 */
export type AttributePhrasing9 = {
  Attribute: AttributePhrasingProperties9;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases72 = [PrepPhrase9, ...PrepPhrase9[]];
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing9 = {
  /**
   * Properties of an adjective phrasing
   */
  Adjective:
    | {
        /**
         * The entity which is described via an adjective
         */
        Subject: string | FullRoleReference;
        Adjectives: Terms102;
        Antonyms?: Terms102;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference;
        PrepositionalPhrases?: PrepPhrases72;
      }
    | {
        /**
         * The entity which is described via an adjective
         */
        Subject: string | FullRoleReference;
        Antonyms: Terms102;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference;
        PrepositionalPhrases?: PrepPhrases72;
      };
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing9 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties9;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing9 = {
  Noun: NounPhrasingProperties9;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing9 = {
  DynamicNoun: DynamicNounPhrasingProperties9;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing9 = {
  Preposition: PrepositionPhrasingProperties9;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing9 = {
  Verb: VerbPhrasingProperties9;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 *
 * Items: A term in the linguistic schema
 */
export type Terms112 = [string | FullTerm10, ...(string | FullTerm10)[]];
/**
 * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
 *
 * @minItems 1
 * @maxItems 1
 */
export type Conditions10 = [Condition10];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 *
 * Items: The phrasings on a linguistic relationship
 */
export type Phrasings10 = [
  (
    | AttributePhrasing10
    | NamePhrasing4
    | AdjectivePhrasing10
    | DynamicAdjectivePhrasing10
    | NounPhrasing10
    | DynamicNounPhrasing10
    | PrepositionPhrasing10
    | VerbPhrasing10
  ),
  ...(
    | AttributePhrasing10
    | NamePhrasing4
    | AdjectivePhrasing10
    | DynamicAdjectivePhrasing10
    | NounPhrasing10
    | DynamicNounPhrasing10
    | PrepositionPhrasing10
    | VerbPhrasing10
  )[]
];
/**
 * An attribute phrasing on a linguistic relationship
 */
export type AttributePhrasing10 = {
  Attribute: AttributePhrasingProperties10;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases80 = [PrepPhrase10, ...PrepPhrase10[]];
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing10 = {
  /**
   * Properties of an adjective phrasing
   */
  Adjective:
    | {
        /**
         * The entity which is described via an adjective
         */
        Subject: string | FullRoleReference;
        Adjectives: Terms112;
        Antonyms?: Terms112;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference;
        PrepositionalPhrases?: PrepPhrases80;
      }
    | {
        /**
         * The entity which is described via an adjective
         */
        Subject: string | FullRoleReference;
        Antonyms: Terms112;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference;
        PrepositionalPhrases?: PrepPhrases80;
      };
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing10 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties10;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing10 = {
  Noun: NounPhrasingProperties10;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing10 = {
  DynamicNoun: DynamicNounPhrasingProperties10;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing10 = {
  Preposition: PrepositionPhrasingProperties10;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing10 = {
  Verb: VerbPhrasingProperties10;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties3;
/**
 * Words which can be used to refer to this entity
 *
 * @minItems 1
 *
 * Items: A term in the linguistic schema
 */
export type Words = [string | FullWord, ...(string | FullWord)[]];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 *
 * Items: The phrasings on a linguistic relationship
 */
export type Phrasings11 = [
  (
    | AttributePhrasing11
    | NamePhrasing11
    | AdjectivePhrasing11
    | DynamicAdjectivePhrasing11
    | NounPhrasing11
    | DynamicNounPhrasing11
    | PrepositionPhrasing11
    | VerbPhrasing11
  ) &
    SharedPhrasingProperties,
  ...((
    | AttributePhrasing11
    | NamePhrasing11
    | AdjectivePhrasing11
    | DynamicAdjectivePhrasing11
    | NounPhrasing11
    | DynamicNounPhrasing11
    | PrepositionPhrasing11
    | VerbPhrasing11
  ) &
    SharedPhrasingProperties)[]
];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases88 = [PrepPhrase11, ...PrepPhrase11[]];
/**
 * The global text substitutions in the linguistic schema.
 *
 * @minItems 1
 */
export type GlobalSubstitutions11 = [GlobalSubstitution11, ...GlobalSubstitution11[]];

/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema1 {
  /**
   * Version of LSDL
   */
  Version: '4.1.0';
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  DynamicImprovement?: DynamicImprovement;
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: 'Default' | 'VeryHigh' | 'High' | 'Medium' | 'Low';
  Namespaces?: Namespaces;
  Entities?: Entities;
  Relationships?: Relationships;
  GlobalSubstitutions?: GlobalSubstitutions;
  Examples?: Examples;
  Agents?: Agents;
}
/**
 * Dynamic improvement settings for the linguistic schema.
 */
export interface DynamicImprovement {
  /**
   * Indicates which heuristics should be run to automatically improve the linguistic schema.
   */
  Schema?: 'Default' | 'Full' | 'None';
  /**
   * Indicates which heuristics and external data should be used to interpret parts of the user utterance that are not understood.
   */
  RuntimeUnderstanding?: 'Default' | 'Full' | 'None';
}
/**
 * Additional linguistic schemas referenced by objects within this linguistic schema
 */
export interface Namespaces {
  [k: string]: LsdlReference | undefined;
}
/**
 * A reference to an additional linguistic schema.
 */
export interface LsdlReference {}
/**
 * The entities in the linguistic schema.
 */
export interface Entities {
  [k: string]: Entity | undefined;
}
/**
 * An entity in the linguistic schema
 */
export interface Entity {
  /**
   * The definition for an entity
   */
  Definition: BindingEntityDefinition | TextEntityDefinition;
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates whether the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Visibility?: ('Visible' | 'Hidden' | 'Children') | FullVisibilityProperty;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  /**
   * Indicates whether this entity represents the Name or ID of something
   */
  NameType?: 'None' | 'Name' | 'Identifier';
  Units?: Terms;
  Instances?: Instances;
  ImplicitGroupings?: EntityReferences;
}
export interface BindingEntityDefinition {
  /**
   * The conceptual model object binding
   */
  Binding:
    | (
        | {
            /**
             * The name of the table.
             */
            Table: string;
          }
        | {
            /**
             * The name of the conceptual entity (e.g. table or pod)
             */
            ConceptualEntity: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the column
             */
            Column: string;
          }
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the measure
             */
            Measure: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the property
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the property
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the property
             */
            VariationSet?: string;
            /**
             * The name of the property
             */
            ConceptualProperty: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the hierarchy
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the hierarchy
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the hierarchy
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
            /**
             * The name of the hierarchy level
             */
            HierarchyLevel: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the hierarchy
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
            /**
             * The name of the hierarchy level
             */
            HierarchyLevel: string;
          }
      );
}
export interface TextEntityDefinition {
  /**
   * The textual definition
   */
  Text: string;
}
/**
 * Indicates whether the entity is hidden.
 */
export interface FullVisibilityProperty {
  /**
   * Indicates whether the entity is hidden.
   */
  Value: 'Visible' | 'Hidden' | 'Children';
  /**
   * The state of the visibility property
   */
  State?: 'Default' | 'Authored' | 'Generated' | 'Suggested';
  [k: string]: unknown | undefined;
}
/**
 * A term in the linguistic schema
 */
export interface FullTerm {
  [k: string]: TermProperties | undefined;
}
/**
 * Properties of a term in the linguistic schema
 */
export interface TermProperties {
  /**
   * The part of speech of the term
   */
  Type?: 'Noun' | 'Verb' | 'Adverb' | 'Adjective' | 'Preposition';
  /**
   * The state of the term
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The source of the term
   */
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource;
  /**
   * The weight to apply to the term
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which the term is derived
   */
  TemplateSchema?: string;
  /**
   * Indicates the last date and time (in UTC) that this term was modified.
   */
  LastModified?: string;
}
/**
 * Indicates who/what created the object in the linguistic schema.
 */
export interface FullSource {
  /**
   * Indicates the type of the creator of the object
   */
  Type?: 'Default' | 'User' | 'Internal' | 'External';
  /**
   * Specific name of the agent that created the object.
   */
  Agent?: string;
  [k: string]: unknown | undefined;
}
/**
 * Defines how instance values from the model are recognized
 */
export interface Instances {
  /**
   * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
   */
  Index?: 'Default' | 'All' | 'None';
  /**
   * Indicates whether values that appear to be plural should match singular words in the utterance.
   */
  PluralNormalization?: 'Default' | 'Normalized' | 'None';
  Synonyms?: InstanceSynonyms;
  Weights?: InstanceWeights;
}
/**
 * Defines a set of values which are synonyms of instances of this entity.
 */
export interface InstanceSynonyms {
  /**
   * A conceptual property, column, or measure in the conceptual model to which a linguistic schema object is bound.
   */
  SynonymBinding:
    | {
        /**
         * The name of the table containing the column or measure
         */
        Table: string;
        /**
         * The name of the property containing the variation set that contains the column or measure
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the column or measure
         */
        VariationSet?: string;
        /**
         * The name of the column
         */
        Column: string;
      }
    | {
        /**
         * The name of the table containing the column or measure
         */
        Table: string;
        /**
         * The name of the property containing the variation set that contains the column or measure
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the column or measure
         */
        VariationSet?: string;
        /**
         * The name of the measure
         */
        Measure: string;
      }
    | {
        /**
         * The name of the conceptual entity containing the property
         */
        ConceptualEntity: string;
        /**
         * The name of the property containing the variation set that contains the property
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the property
         */
        VariationSet?: string;
        /**
         * The name of the property
         */
        ConceptualProperty: string;
      };
  /**
   * A conceptual property, column, or measure in the conceptual model to which a linguistic schema object is bound.
   */
  ValueBinding:
    | {
        /**
         * The name of the table containing the column or measure
         */
        Table: string;
        /**
         * The name of the property containing the variation set that contains the column or measure
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the column or measure
         */
        VariationSet?: string;
        /**
         * The name of the column
         */
        Column: string;
      }
    | {
        /**
         * The name of the table containing the column or measure
         */
        Table: string;
        /**
         * The name of the property containing the variation set that contains the column or measure
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the column or measure
         */
        VariationSet?: string;
        /**
         * The name of the measure
         */
        Measure: string;
      }
    | {
        /**
         * The name of the conceptual entity containing the property
         */
        ConceptualEntity: string;
        /**
         * The name of the property containing the variation set that contains the property
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the property
         */
        VariationSet?: string;
        /**
         * The name of the property
         */
        ConceptualProperty: string;
      };
  /**
   * The state of the instance synonyms
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
}
/**
 * Reference to property in the model which contains the weight to apply to instances of this entity.
 */
export interface InstanceWeights {
  /**
   * A conceptual property, column, or measure in the conceptual model to which a linguistic schema object is bound.
   */
  Binding:
    | {
        /**
         * The name of the table containing the column or measure
         */
        Table: string;
        /**
         * The name of the property containing the variation set that contains the column or measure
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the column or measure
         */
        VariationSet?: string;
        /**
         * The name of the column
         */
        Column: string;
      }
    | {
        /**
         * The name of the table containing the column or measure
         */
        Table: string;
        /**
         * The name of the property containing the variation set that contains the column or measure
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the column or measure
         */
        VariationSet?: string;
        /**
         * The name of the measure
         */
        Measure: string;
      }
    | {
        /**
         * The name of the conceptual entity containing the property
         */
        ConceptualEntity: string;
        /**
         * The name of the property containing the variation set that contains the property
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the property
         */
        VariationSet?: string;
        /**
         * The name of the property
         */
        ConceptualProperty: string;
      };
}
/**
 * A reference to an entity in a linguistic relationship
 */
export interface FullEntityReference {
  /**
   * Identifier for a linguistic schema object
   */
  Entity: string;
  /**
   * Identifier for a linguistic schema object
   */
  Namespace?: string;
}
/**
 * The relationships in the linguistic schema.
 */
export interface Relationships {
  [k: string]: Relationship | undefined;
}
/**
 * A relationship in the linguistic schema
 */
export interface Relationship {
  /**
   * The conceptual model object which embodies the relationship
   */
  Binding?:
    | {
        /**
         * The name of the table.
         */
        Table: string;
      }
    | {
        /**
         * The name of the conceptual entity (e.g. table or pod)
         */
        ConceptualEntity: string;
      };
  /**
   * The state of the relationship
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The weight to apply to this relationship
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this relationship is derived
   */
  TemplateSchema?: string;
  /**
   * Indicates the last date and time (in UTC) that this relationship was modified.
   */
  LastModified?: string;
  Roles?: Roles;
  SemanticSlots?: SemanticSlots;
  Conditions?: Conditions;
  Phrasings?: Phrasings;
}
/**
 * References to linguistic entities which participate in the relationship
 */
export interface Roles {
  /**
   * A role in a linguistic relationship.
   */
  [k: string]: string | FullRole | undefined;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole {
  /**
   * A reference to an entity in a linguistic relationship
   */
  Target: string | FullEntityReference;
  Nouns?: Terms;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference;
}
/**
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference {
  /**
   * Identifier for a linguistic schema object
   */
  Role: string;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference;
  /**
   * A role which indicates how long the relationship occurred
   */
  Duration?: string | FullRoleReference;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference;
  /**
   * An aggregate function applied to the role
   */
  Aggregation?: 'None' | 'Sum' | 'Average' | 'Count' | 'Min' | 'Max' | 'Median' | 'Variance' | 'StandardDeviation';
  /**
   * The operator with which to compare the value and the role
   */
  Operator:
    | 'Equals'
    | 'NotEquals'
    | 'GreaterThan'
    | 'LessThan'
    | 'GreaterThanOrEquals'
    | 'LessThanOrEquals'
    | 'Contains'
    | 'NotContains'
    | 'StartsWith'
    | 'NotStartsWith';
  /**
   * The value to which the role is compared
   */
  Value:
    | {
        /**
         * A text value to use in a condition
         */
        Text: (string | null) | [string | null];
      }
    | {
        /**
         * A number value to use in a condition
         */
        Number: (number | null) | [number | null];
      }
    | {
        /**
         * A Boolean value to use in a condition
         */
        Boolean: (boolean | null) | [boolean | null];
      }
    | ((string | null) | [string | null])
    | ((number | null) | [number | null])
    | ((boolean | null) | [boolean | null])
    | null;
}
/**
 * Properties of an attribute phrasing
 */
export interface AttributePhrasingProperties {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase {
  Prepositions: Terms;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference;
}
export interface PhrasingProperties {
  /**
   * The state of the phrasing
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The weight to apply to the phrasing
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which the phrasing is derived
   */
  TemplateSchema?: string;
  /**
   * Indicates the last date and time (in UTC) that this phrasing was modified.
   */
  LastModified?: string;
  /**
   * Identifier for a linguistic schema object
   */
  ID?: string;
  /**
   * The source of the phrasing
   */
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource;
  [k: string]: unknown | undefined;
}
/**
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference;
  /**
   * The entity which is the name of the Subject
   */
  Name: string | FullRoleReference;
}
export interface AdjectivePhrasingProperty {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference;
  Adjectives: Terms;
  Antonyms?: Terms;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference;
  AdverbPhrases?: AdverbPhrases;
  PrepositionalPhrases?: PrepPhrases;
}
export interface AdverbPhraseProperty {
  Adverbs: Terms;
  Antonyms?: Terms;
  /**
   * The measure which the adverb pertains to
   */
  Measurement?: string | FullRoleReference;
}
export interface AdverbAntonymPhraseProperty {
  Antonyms: Terms;
  /**
   * The measure which the adverb pertains to
   */
  Measurement?: string | FullRoleReference;
}
export interface AntonymPhrasingProperty {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference;
  Antonyms: Terms;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference;
  Nouns: Terms;
  PrepositionalPhrases?: PrepPhrases;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference;
  Prepositions: Terms;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference;
  Verbs: Terms;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference;
  AdverbPhrases?: AdverbPhrases;
  PrepositionalPhrases?: PrepPhrases;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution {
  [k: string]: string | FullGlobalSubstitutionProperties | undefined;
}
export interface FullGlobalSubstitutionProperties {
  /**
   * The sequence of words to substitute into the utterance.
   */
  Substitute: string;
  /**
   * The state of the global substitution
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Identifies the shared template schema from which this global substitution is derived
   */
  TemplateSchema?: string;
}
/**
 * An example utterance associated with the linguistic schema
 */
export interface FullExample {
  [k: string]: ExampleProperties | undefined;
}
/**
 * Metadata properties about an example utterance
 */
export interface ExampleProperties {
  /**
   * Identifies the shared template schema from which the example is derived
   */
  TemplateSchema?: string;
}
/**
 * A list of agents that have modified this linguistic schema.
 */
export interface Agents {
  [k: string]: AgentProperties | undefined;
}
/**
 * Properties of an agent in the linguistic schema
 */
export interface AgentProperties {
  /**
   * Indicates the last date and time (in UTC) that this agent modified the linguistic schema.
   */
  LastModified?: string;
  /**
   * Indicates whether a modeling environment should use the agent to improve the linguistic schema.
   */
  State?: 'Enabled' | 'Disabled';
  /**
   * Version information provided by the agent
   */
  Version?: string;
}
/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema2 {
  /**
   * Version of LSDL
   */
  Version: '4.0.0';
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  DynamicImprovement?: DynamicImprovement;
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: 'Default' | 'VeryHigh' | 'High' | 'Medium' | 'Low';
  Namespaces?: Namespaces;
  Entities?: Entities;
  Relationships?: Relationships;
  GlobalSubstitutions?: GlobalSubstitutions;
  Examples?: Examples;
  Agents?: Agents1;
}
/**
 * A list of agents that have modified this linguistic schema.
 */
export interface Agents1 {
  [k: string]: AgentProperties1 | undefined;
}
/**
 * Properties of an agent in the linguistic schema
 */
export interface AgentProperties1 {
  /**
   * Indicates the last date and time (in UTC) that this agent modified the linguistic schema.
   */
  LastModified?: string;
  /**
   * Indicates whether a modeling environment should use the agent to improve the linguistic schema.
   */
  State?: 'Enabled' | 'Disabled';
}
/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema3 {
  /**
   * Version of LSDL
   */
  Version: '3.5.0';
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  /**
   * Indicates which heuristics should be run to automatically improve the linguistic schema.
   */
  DynamicImprovement?: 'Default' | 'Full' | 'HighConfidence' | 'None';
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: 'Default' | 'VeryHigh' | 'High' | 'Medium' | 'Low';
  Namespaces?: Namespaces;
  Entities?: Entities;
  Relationships?: Relationships;
  GlobalSubstitutions?: GlobalSubstitutions;
  Examples?: Examples;
  Agents?: Agents1;
}
/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema4 {
  /**
   * Version of LSDL
   */
  Version: '3.4.0';
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  /**
   * Indicates which heuristics should be run to automatically improve the linguistic schema.
   */
  DynamicImprovement?: 'Default' | 'Full' | 'HighConfidence' | 'None';
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: 'Default' | 'VeryHigh' | 'High' | 'Medium' | 'Low';
  Namespaces?: Namespaces;
  Entities?: Entities;
  Relationships?: Relationships3;
  GlobalSubstitutions?: GlobalSubstitutions;
  Examples?: Examples;
  Agents?: Agents3;
}
/**
 * The relationships in the linguistic schema.
 */
export interface Relationships3 {
  [k: string]: Relationship3 | undefined;
}
/**
 * A relationship in the linguistic schema
 */
export interface Relationship3 {
  /**
   * The conceptual model object which embodies the relationship
   */
  Binding?:
    | {
        /**
         * The name of the table.
         */
        Table: string;
      }
    | {
        /**
         * The name of the conceptual entity (e.g. table or pod)
         */
        ConceptualEntity: string;
      };
  /**
   * The state of the relationship
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The weight to apply to this relationship
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this relationship is derived
   */
  TemplateSchema?: string;
  Roles?: Roles;
  SemanticSlots?: SemanticSlots;
  Conditions?: Conditions;
  Phrasings?: Phrasings3;
}
export interface PhrasingProperties3 {
  /**
   * The state of the phrasing
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The weight to apply to the phrasing
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which the phrasing is derived
   */
  TemplateSchema?: string;
  [k: string]: unknown | undefined;
}
/**
 * A list of agents that have modified this linguistic schema.
 */
export interface Agents3 {
  [k: string]: AgentProperties3 | undefined;
}
/**
 * Properties of an agent in the linguistic schema
 */
export interface AgentProperties3 {
  /**
   * Indicates the last date and time (in UTC) that this agent modified the linguistic schema.
   */
  LastModified?: string;
}
/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema5 {
  /**
   * Version of LSDL
   */
  Version: '3.3.0';
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  /**
   * Indicates which heuristics should be run to automatically improve the linguistic schema.
   */
  DynamicImprovement?: 'Default' | 'Full' | 'HighConfidence' | 'None';
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: 'Default' | 'VeryHigh' | 'High' | 'Medium' | 'Low';
  Namespaces?: Namespaces;
  Entities?: Entities4;
  Relationships?: Relationships4;
  GlobalSubstitutions?: GlobalSubstitutions;
  Examples?: Examples;
  Agents?: Agents3;
}
/**
 * The entities in the linguistic schema.
 */
export interface Entities4 {
  [k: string]: Entity4 | undefined;
}
/**
 * An entity in the linguistic schema
 *
 * This interface was referenced by `Entities4`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Entity4 {
  /**
   * The definition for an entity
   */
  Definition: BindingEntityDefinition | TextEntityDefinition;
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates whether the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Visibility?: ('Visible' | 'Hidden' | 'Children') | FullVisibilityProperty;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms52;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  /**
   * Indicates whether this entity represents the Name or ID of something
   */
  NameType?: 'None' | 'Name' | 'Identifier';
  Units?: Terms52;
  Instances?: Instances;
  ImplicitGroupings?: EntityReferences;
}
/**
 * A term in the linguistic schema
 */
export interface FullTerm4 {
  [k: string]: TermProperties4 | undefined;
}
/**
 * Properties of the term
 *
 * This interface was referenced by `FullTerm4`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface TermProperties4 {
  /**
   * The part of speech of the term
   */
  Type?: 'Noun' | 'Verb' | 'Adjective' | 'Preposition';
  /**
   * The state of the term
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The source of the term
   */
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource;
  /**
   * The weight to apply to the term
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which the term is derived
   */
  TemplateSchema?: string;
  /**
   * Indicates the last date and time (in UTC) that this term was modified.
   */
  LastModified?: string;
}
/**
 * The relationships in the linguistic schema.
 */
export interface Relationships4 {
  [k: string]: Relationship4 | undefined;
}
/**
 * A relationship in the linguistic schema
 *
 * This interface was referenced by `Relationships4`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Relationship4 {
  /**
   * The conceptual model object which embodies the relationship
   */
  Binding?:
    | {
        /**
         * The name of the table.
         */
        Table: string;
      }
    | {
        /**
         * The name of the conceptual entity (e.g. table or pod)
         */
        ConceptualEntity: string;
      };
  /**
   * The state of the relationship
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The weight to apply to this relationship
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this relationship is derived
   */
  TemplateSchema?: string;
  Roles?: Roles4;
  SemanticSlots?: SemanticSlots;
  Conditions?: Conditions;
  Phrasings?: Phrasings4;
}
/**
 * References to linguistic entities which participate in the relationship
 */
export interface Roles4 {
  /**
   * A role in a linguistic relationship.
   *
   * This interface was referenced by `Roles4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullRole4 | undefined;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole4 {
  /**
   * A reference to an entity in a linguistic relationship
   */
  Target: string | FullEntityReference;
  Nouns?: Terms52;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference;
}
/**
 * Properties of an attribute phrasing
 */
export interface AttributePhrasingProperties4 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases32;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase4 {
  Prepositions: Terms52;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference;
}
export interface AdjectivePhrasingProperty4 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference;
  Adjectives: Terms52;
  Antonyms?: Terms52;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases32;
}
export interface AntonymPhrasingProperty4 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference;
  Antonyms: Terms52;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases32;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties4 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases32;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties4 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference;
  Nouns: Terms52;
  PrepositionalPhrases?: PrepPhrases32;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties4 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases32;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties4 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference;
  Prepositions: Terms52;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases32;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties4 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference;
  Verbs: Terms52;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases32;
}
/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema6 {
  /**
   * Version of LSDL
   */
  Version: '3.2.0';
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  /**
   * Indicates which heuristics should be run to automatically improve the linguistic schema.
   */
  DynamicImprovement?: 'Default' | 'Full' | 'HighConfidence' | 'None';
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: 'Default' | 'VeryHigh' | 'High' | 'Medium' | 'Low';
  Namespaces?: Namespaces;
  Entities?: Entities5;
  Relationships?: Relationships4;
  GlobalSubstitutions?: GlobalSubstitutions;
  Examples?: Examples;
  Agents?: Agents3;
}
/**
 * The entities in the linguistic schema.
 */
export interface Entities5 {
  [k: string]: Entity5 | undefined;
}
/**
 * An entity in the linguistic schema
 *
 * This interface was referenced by `Entities5`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Entity5 {
  /**
   * The definition for an entity
   */
  Definition: BindingEntityDefinition | TextEntityDefinition;
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates whether the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Visibility?: ('Visible' | 'Hidden' | 'Children') | FullVisibilityProperty;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms52;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  /**
   * Indicates whether this entity represents the Name or ID of something
   */
  NameType?: 'None' | 'Name' | 'Identifier';
  Units?: Terms52;
  Instances?: Instances;
}
/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema7 {
  /**
   * Version of LSDL
   */
  Version: '3.1.0';
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  /**
   * Indicates which heuristics should be run to automatically improve the linguistic schema.
   */
  DynamicImprovement?: 'Default' | 'Full' | 'HighConfidence' | 'None';
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: 'Default' | 'VeryHigh' | 'High' | 'Medium' | 'Low';
  Namespaces?: Namespaces;
  Entities?: Entities5;
  Relationships?: Relationships4;
  GlobalSubstitutions?: GlobalSubstitutions;
  Examples?: Examples;
}
/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema8 {
  /**
   * Version of LSDL
   */
  Version: '3.0.0';
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  /**
   * Indicates which heuristics should be run to automatically improve the linguistic schema.
   */
  DynamicImprovement?: 'Default' | 'Full' | 'HighConfidence' | 'None';
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: 'Default' | 'VeryHigh' | 'High' | 'Medium' | 'Low';
  Namespaces?: Namespaces;
  Entities?: Entities7;
  Relationships?: Relationships4;
  GlobalSubstitutions?: GlobalSubstitutions;
  Examples?: Examples;
}
/**
 * The entities in the linguistic schema.
 */
export interface Entities7 {
  [k: string]: Entity7 | undefined;
}
/**
 * An entity in the linguistic schema
 *
 * This interface was referenced by `Entities7`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Entity7 {
  /**
   * The definition for an entity
   */
  Definition: BindingEntityDefinition | TextEntityDefinition;
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates whether the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Visibility?: ('Visible' | 'Hidden' | 'Children') | FullVisibilityProperty;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms52;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  Units?: Terms52;
  Instances?: Instances;
}
/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema9 {
  /**
   * Version of LSDL
   */
  Version: '2.0.0';
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  /**
   * Indicates which heuristics should be run to automatically improve the linguistic schema.
   */
  DynamicImprovement?: 'Default' | 'Full' | 'HighConfidence' | 'None';
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: 'Default' | 'VeryHigh' | 'High' | 'Medium' | 'Low';
  Namespaces?: Namespaces;
  Entities?: Entities8;
  Relationships?: Relationships8;
  GlobalSubstitutions?: GlobalSubstitutions;
  Examples?: Examples;
}
/**
 * The entities in the linguistic schema.
 */
export interface Entities8 {
  [k: string]: Entity8 | undefined;
}
/**
 * An entity in the linguistic schema
 *
 * This interface was referenced by `Entities8`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Entity8 {
  Definition: EntityDefinition;
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Hidden?: boolean;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms52;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  Units?: Terms52;
  Instances?: Instances8;
}
/**
 * The definition for the entity
 */
export interface EntityDefinition {
  /**
   * The conceptual model object binding
   */
  Binding:
    | (
        | {
            /**
             * The name of the table.
             */
            Table: string;
          }
        | {
            /**
             * The name of the conceptual entity (e.g. table or pod)
             */
            ConceptualEntity: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the column
             */
            Column: string;
          }
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the measure
             */
            Measure: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the property
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the property
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the property
             */
            VariationSet?: string;
            /**
             * The name of the property
             */
            ConceptualProperty: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the hierarchy
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the hierarchy
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the hierarchy
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
            /**
             * The name of the hierarchy level
             */
            HierarchyLevel: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the hierarchy
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
            /**
             * The name of the hierarchy level
             */
            HierarchyLevel: string;
          }
      );
}
/**
 * Defines how instance values from the model are recognized
 */
export interface Instances8 {
  /**
   * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
   */
  Index?: 'Default' | 'None';
  /**
   * Indicates whether values that appear to be plural should match singular words in the utterance.
   */
  PluralNormalization?: 'Default' | 'Normalized' | 'None';
  Synonyms?: InstanceSynonyms;
  Weights?: InstanceWeights;
}
/**
 * The relationships in the linguistic schema.
 */
export interface Relationships8 {
  [k: string]: Relationship8 | undefined;
}
/**
 * A relationship in the linguistic schema
 *
 * This interface was referenced by `Relationships8`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Relationship8 {
  /**
   * The conceptual model object which embodies the relationship
   */
  Binding?:
    | {
        /**
         * The name of the table.
         */
        Table: string;
      }
    | {
        /**
         * The name of the conceptual entity (e.g. table or pod)
         */
        ConceptualEntity: string;
      };
  /**
   * The state of the relationship
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The weight to apply to this relationship
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this relationship is derived
   */
  TemplateSchema?: string;
  Roles?: Roles4;
  SemanticSlots?: SemanticSlots;
  Conditions?: Conditions;
  Phrasings?: Phrasings8;
}
/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema10 {
  /**
   * Version of LSDL
   */
  Version: '1.1.0' | '1.2.0';
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  /**
   * Indicates which heuristics should be run to automatically improve the linguistic schema.
   */
  DynamicImprovement?: 'Default' | 'Full' | 'HighConfidence' | 'None';
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: 'Default' | 'VeryHigh' | 'High' | 'Medium' | 'Low';
  Namespaces?: Namespaces;
  Entities?: Entities9;
  Relationships?: Relationships9;
  GlobalSubstitutions?: GlobalSubstitutions;
}
/**
 * The entities in the linguistic schema.
 */
export interface Entities9 {
  [k: string]: Entity9 | undefined;
}
/**
 * An entity in the linguistic schema
 *
 * This interface was referenced by `Entities9`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Entity9 {
  /**
   * The conceptual model object which represents the entity
   */
  Binding:
    | (
        | {
            /**
             * The name of the table.
             */
            Table: string;
          }
        | {
            /**
             * The name of the conceptual entity (e.g. table or pod)
             */
            ConceptualEntity: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the column
             */
            Column: string;
          }
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the measure
             */
            Measure: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the property
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the property
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the property
             */
            VariationSet?: string;
            /**
             * The name of the property
             */
            ConceptualProperty: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the hierarchy
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the hierarchy
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the hierarchy
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
            /**
             * The name of the hierarchy level
             */
            HierarchyLevel: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the hierarchy
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
            /**
             * The name of the hierarchy level
             */
            HierarchyLevel: string;
          }
      );
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Hidden?: boolean;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms102;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  Units?: Terms102;
  Instances?: Instances8;
}
/**
 * A term in the linguistic schema
 */
export interface FullTerm9 {
  [k: string]: TermProperties9 | undefined;
}
/**
 * Properties of the term
 *
 * This interface was referenced by `FullTerm9`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface TermProperties9 {
  /**
   * The part of speech of the term
   */
  Type?: 'Noun' | 'Verb' | 'Adjective' | 'Preposition';
  /**
   * The state of the term
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The weight to apply to the term
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which the term is derived
   */
  TemplateSchema?: string;
  /**
   * Indicates the last date and time (in UTC) that this term was modified.
   */
  LastModified?: string;
}
/**
 * The relationships in the linguistic schema.
 */
export interface Relationships9 {
  [k: string]: Relationship9 | undefined;
}
/**
 * A relationship in the linguistic schema
 *
 * This interface was referenced by `Relationships9`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Relationship9 {
  /**
   * The conceptual model object which embodies the relationship
   */
  Binding?:
    | {
        /**
         * The name of the table.
         */
        Table: string;
      }
    | {
        /**
         * The name of the conceptual entity (e.g. table or pod)
         */
        ConceptualEntity: string;
      };
  /**
   * The state of the relationship
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The weight to apply to this relationship
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this relationship is derived
   */
  TemplateSchema?: string;
  Roles?: Roles9;
  SemanticSlots?: SemanticSlots;
  Conditions?: Conditions9;
  Phrasings?: Phrasings9;
}
/**
 * References to linguistic entities which participate in the relationship
 */
export interface Roles9 {
  /**
   * A role in a linguistic relationship.
   *
   * This interface was referenced by `Roles9`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullRole9 | undefined;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole9 {
  /**
   * The linguistic entity which is the target of the role
   */
  Target: string | FullEntityReference;
  Nouns?: Terms102;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition9 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference;
  /**
   * The operator with which to compare the value and the role
   */
  Operator:
    | 'Equals'
    | 'NotEquals'
    | 'GreaterThan'
    | 'LessThan'
    | 'GreaterThanOrEquals'
    | 'LessThanOrEquals'
    | 'Contains'
    | 'NotContains'
    | 'StartsWith'
    | 'NotStartsWith';
  /**
   * The value to which the role is compared
   */
  Value:
    | {
        /**
         * A text value to use in a condition
         */
        Text: (string | null) | [string | null];
      }
    | {
        /**
         * A number value to use in a condition
         */
        Number: (number | null) | [number | null];
      }
    | {
        /**
         * A Boolean value to use in a condition
         */
        Boolean: (boolean | null) | [boolean | null];
      }
    | ((string | null) | [string | null])
    | ((number | null) | [number | null])
    | ((boolean | null) | [boolean | null])
    | null;
}
/**
 * Properties of an attribute phrasing
 */
export interface AttributePhrasingProperties9 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases72;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase9 {
  Prepositions: Terms102;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties9 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases72;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties9 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference;
  Nouns: Terms102;
  PrepositionalPhrases?: PrepPhrases72;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties9 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases72;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties9 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference;
  Prepositions: Terms102;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases72;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties9 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference;
  Verbs: Terms102;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases72;
}
/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema11 {
  /**
   * Version of LSDL
   */
  Version: '1.0.0';
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  /**
   * Indicates which heuristics should be run to automatically improve the linguistic schema.
   */
  DynamicImprovement?: 'Default' | 'Full' | 'HighConfidence' | 'None';
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: 'Default' | 'VeryHigh' | 'High' | 'Medium' | 'Low';
  Namespaces?: Namespaces;
  Entities?: Entities10;
  Relationships?: Relationships10;
  GlobalSubstitutions?: GlobalSubstitutions;
}
/**
 * The entities in the linguistic schema.
 */
export interface Entities10 {
  [k: string]: Entity10 | undefined;
}
/**
 * An entity in the linguistic schema
 *
 * This interface was referenced by `Entities10`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Entity10 {
  /**
   * The conceptual model object which represents the entity
   */
  Binding:
    | (
        | {
            /**
             * The name of the table.
             */
            Table: string;
          }
        | {
            /**
             * The name of the conceptual entity (e.g. table or pod)
             */
            ConceptualEntity: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the column
             */
            Column: string;
          }
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the measure
             */
            Measure: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the property
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the property
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the property
             */
            VariationSet?: string;
            /**
             * The name of the property
             */
            ConceptualProperty: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the hierarchy
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the hierarchy
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the hierarchy
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
            /**
             * The name of the hierarchy level
             */
            HierarchyLevel: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the hierarchy
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
            /**
             * The name of the hierarchy level
             */
            HierarchyLevel: string;
          }
      );
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms112;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  Units?: Terms112;
  Instances?: Instances8;
}
/**
 * A term in the linguistic schema
 */
export interface FullTerm10 {
  [k: string]: TermProperties10 | undefined;
}
/**
 * Properties of the term
 *
 * This interface was referenced by `FullTerm10`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface TermProperties10 {
  /**
   * The part of speech of the term
   */
  Type?: 'Noun';
  /**
   * The state of the term
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The weight to apply to the term
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which the term is derived
   */
  TemplateSchema?: string;
}
/**
 * The relationships in the linguistic schema.
 */
export interface Relationships10 {
  [k: string]: Relationship10 | undefined;
}
/**
 * A relationship in the linguistic schema
 *
 * This interface was referenced by `Relationships10`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Relationship10 {
  /**
   * The conceptual model object which embodies the relationship
   */
  Binding?:
    | {
        /**
         * The name of the table.
         */
        Table: string;
      }
    | {
        /**
         * The name of the conceptual entity (e.g. table or pod)
         */
        ConceptualEntity: string;
      };
  /**
   * The state of the relationship
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * The weight to apply to this relationship
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this relationship is derived
   */
  TemplateSchema?: string;
  Roles?: Roles10;
  SemanticSlots?: SemanticSlots;
  Conditions?: Conditions10;
  Phrasings?: Phrasings10;
}
/**
 * References to linguistic entities which participate in the relationship
 */
export interface Roles10 {
  /**
   * A role in a linguistic relationship.
   *
   * This interface was referenced by `Roles10`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullRole10 | undefined;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole10 {
  /**
   * The linguistic entity which is the target of the role
   */
  Target: string | FullEntityReference;
  Nouns?: Terms112;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition10 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference;
  /**
   * The operator with which to compare the value and the role
   */
  Operator: 'Equals' | 'GreaterThan' | 'LessThan' | 'GreaterThanOrEquals' | 'LessThanOrEquals';
  /**
   * The value to which the role is compared
   */
  Value:
    | {
        /**
         * A text value to use in a condition
         */
        Text: (string | null) | [string | null];
      }
    | {
        /**
         * A number value to use in a condition
         */
        Number: (number | null) | [number | null];
      }
    | {
        /**
         * A Boolean value to use in a condition
         */
        Boolean: (boolean | null) | [boolean | null];
      }
    | ((string | null) | [string | null])
    | ((number | null) | [number | null])
    | ((boolean | null) | [boolean | null])
    | null;
}
/**
 * Properties of an attribute phrasing
 */
export interface AttributePhrasingProperties10 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases80;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase10 {
  Prepositions: Terms112;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties10 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases80;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties10 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference;
  Nouns: Terms112;
  PrepositionalPhrases?: PrepPhrases80;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties10 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases80;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties10 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference;
  Prepositions: Terms112;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases80;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties10 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference;
  Verbs: Terms112;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases80;
}
/**
 * Linguistic Schema Definition Language schema
 */
export interface LSDLSchema12 {
  /**
   * Version of LSDL
   */
  Version: '0.7.0';
  /**
   * Target language for the linguistic schema
   */
  Language: string;
  /**
   * Indicates which heuristics should be run to automatically improve the linguistic schema.
   */
  DynamicImprovement?: 'Default' | 'Full' | 'HighConfidence' | 'None';
  Namespaces?: Namespaces;
  Entities?: Entities11;
  Relationships?: Relationships11;
  GlobalSubstitutions?: GlobalSubstitutions11;
}
/**
 * The entities in the linguistic schema.
 */
export interface Entities11 {
  [k: string]: Entity11 | undefined;
}
/**
 * An entity in the linguistic schema
 *
 * This interface was referenced by `Entities11`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Entity11 {
  /**
   * The conceptual model object which represents the entity
   */
  Binding:
    | (
        | {
            /**
             * The name of the table.
             */
            Table: string;
          }
        | {
            /**
             * The name of the conceptual entity (e.g. table or pod)
             */
            ConceptualEntity: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the column
             */
            Column: string;
          }
        | {
            /**
             * The name of the table containing the column or measure
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the column or measure
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the column or measure
             */
            VariationSet?: string;
            /**
             * The name of the measure
             */
            Measure: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the property
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the property
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the property
             */
            VariationSet?: string;
            /**
             * The name of the property
             */
            ConceptualProperty: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the hierarchy
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the hierarchy
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
          }
      )
    | (
        | {
            /**
             * The name of the table containing the hierarchy
             */
            Table: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
            /**
             * The name of the hierarchy level
             */
            HierarchyLevel: string;
          }
        | {
            /**
             * The name of the conceptual entity containing the hierarchy
             */
            ConceptualEntity: string;
            /**
             * The name of the property containing the variation set that contains the hierarchy
             */
            VariationSource?: string;
            /**
             * The name of the variation set that contains the hierarchy
             */
            VariationSet?: string;
            /**
             * The name of the hierarchy
             */
            Hierarchy: string;
            /**
             * The name of the hierarchy level
             */
            HierarchyLevel: string;
          }
      );
  /**
   * The state of the entity
   */
  State?: 'UserAuthored' | 'Generated' | 'Deleted';
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  Words?: Words;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time';
  Instances?: Instances11;
}
/**
 * A term in the linguistic schema
 */
export interface FullWord {
  [k: string]: WordProperties | undefined;
}
/**
 * Properties of the term
 *
 * This interface was referenced by `FullWord`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface WordProperties {
  /**
   * The part of speech of the term
   */
  Type?: 'Noun';
  /**
   * The state of the term
   */
  State?: 'UserAuthored' | 'Generated' | 'Deleted';
  /**
   * The weight to apply to the term
   */
  Weight?: number;
}
/**
 * Defines how instance values from the model are recognized
 */
export interface Instances11 {
  Synonyms?: InstanceSynonyms11;
  Weights?: InstanceWeights;
}
/**
 * Defines a set of values which are synonyms of instances of this entity.
 */
export interface InstanceSynonyms11 {
  /**
   * A conceptual property, column, or measure in the conceptual model to which a linguistic schema object is bound.
   */
  SynonymBinding:
    | {
        /**
         * The name of the table containing the column or measure
         */
        Table: string;
        /**
         * The name of the property containing the variation set that contains the column or measure
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the column or measure
         */
        VariationSet?: string;
        /**
         * The name of the column
         */
        Column: string;
      }
    | {
        /**
         * The name of the table containing the column or measure
         */
        Table: string;
        /**
         * The name of the property containing the variation set that contains the column or measure
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the column or measure
         */
        VariationSet?: string;
        /**
         * The name of the measure
         */
        Measure: string;
      }
    | {
        /**
         * The name of the conceptual entity containing the property
         */
        ConceptualEntity: string;
        /**
         * The name of the property containing the variation set that contains the property
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the property
         */
        VariationSet?: string;
        /**
         * The name of the property
         */
        ConceptualProperty: string;
      };
  /**
   * A conceptual property, column, or measure in the conceptual model to which a linguistic schema object is bound.
   */
  ValueBinding:
    | {
        /**
         * The name of the table containing the column or measure
         */
        Table: string;
        /**
         * The name of the property containing the variation set that contains the column or measure
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the column or measure
         */
        VariationSet?: string;
        /**
         * The name of the column
         */
        Column: string;
      }
    | {
        /**
         * The name of the table containing the column or measure
         */
        Table: string;
        /**
         * The name of the property containing the variation set that contains the column or measure
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the column or measure
         */
        VariationSet?: string;
        /**
         * The name of the measure
         */
        Measure: string;
      }
    | {
        /**
         * The name of the conceptual entity containing the property
         */
        ConceptualEntity: string;
        /**
         * The name of the property containing the variation set that contains the property
         */
        VariationSource?: string;
        /**
         * The name of the variation set that contains the property
         */
        VariationSet?: string;
        /**
         * The name of the property
         */
        ConceptualProperty: string;
      };
  /**
   * The state of the instance synonyms
   */
  State?: 'UserAuthored' | 'Generated' | 'Deleted';
}
/**
 * The relationships in the linguistic schema.
 */
export interface Relationships11 {
  [k: string]: Relationship11 | undefined;
}
/**
 * A relationship in the linguistic schema
 *
 * This interface was referenced by `Relationships11`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Relationship11 {
  /**
   * The conceptual model object which embodies the relationship
   */
  Binding?:
    | {
        /**
         * The name of the table.
         */
        Table: string;
      }
    | {
        /**
         * The name of the conceptual entity (e.g. table or pod)
         */
        ConceptualEntity: string;
      };
  /**
   * The state of the relationship
   */
  State?: 'UserAuthored' | 'Generated' | 'Deleted';
  /**
   * The weight to apply to this relationship
   */
  Weight?: number;
  Roles?: Roles11;
  SemanticSlots?: SemanticSlots11;
  Conditions?: Conditions10;
  Phrasings?: Phrasings11;
}
/**
 * References to linguistic entities which participate in the relationship
 */
export interface Roles11 {
  /**
   * A role in a linguistic relationship.
   *
   * This interface was referenced by `Roles11`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullRole11 | undefined;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole11 {
  /**
   * The linguistic entity which is the target of the role
   */
  Target: string | FullEntityReference;
  Nouns?: Words;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots11 {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference;
}
/**
 * An attribute phrasing on a linguistic relationship
 */
export interface AttributePhrasing11 {
  Attribute: AttributePhrasingProperties11;
  State?: unknown;
  Weight?: unknown;
}
/**
 * Properties of an attribute phrasing
 */
export interface AttributePhrasingProperties11 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases88;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase11 {
  Prepositions: Words;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference;
}
/**
 * A name phrasing on a linguistic relationship
 */
export interface NamePhrasing11 {
  Name: NamePhrasingProperties;
  State?: unknown;
  Weight?: unknown;
}
/**
 * An adjective phrasing on a linguistic relationship
 */
export interface AdjectivePhrasing11 {
  /**
   * Properties of an adjective phrasing
   */
  Adjective:
    | {
        /**
         * The entity which is described via an adjective
         */
        Subject: string | FullRoleReference;
        Adjectives: Words;
        Antonyms?: Words;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference;
        PrepositionalPhrases?: PrepPhrases88;
      }
    | {
        /**
         * The entity which is described via an adjective
         */
        Subject: string | FullRoleReference;
        Antonyms: Words;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference;
        PrepositionalPhrases?: PrepPhrases88;
      };
  State?: unknown;
  Weight?: unknown;
}
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export interface DynamicAdjectivePhrasing11 {
  DynamicAdjective: DynamicAdjectivePhrasingProperties11;
  State?: unknown;
  Weight?: unknown;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties11 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases88;
}
/**
 * A noun phrasing on a linguistic relationship
 */
export interface NounPhrasing11 {
  Noun: NounPhrasingProperties11;
  State?: unknown;
  Weight?: unknown;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties11 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference;
  Nouns: Words;
  PrepositionalPhrases?: PrepPhrases88;
}
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export interface DynamicNounPhrasing11 {
  DynamicNoun: DynamicNounPhrasingProperties11;
  State?: unknown;
  Weight?: unknown;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties11 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases88;
}
/**
 * A preposition phrasing on a linguistic relationship
 */
export interface PrepositionPhrasing11 {
  Preposition: PrepositionPhrasingProperties11;
  State?: unknown;
  Weight?: unknown;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties11 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference;
  Prepositions: Words;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases88;
}
/**
 * A verb phrasing on a linguistic relationship
 */
export interface VerbPhrasing11 {
  Verb: VerbPhrasingProperties11;
  State?: unknown;
  Weight?: unknown;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties11 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference;
  Verbs: Words;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases88;
}
export interface SharedPhrasingProperties {
  /**
   * The state of the phrasing
   */
  State?: 'UserAuthored' | 'Generated' | 'Deleted';
  /**
   * The weight to apply to the phrasing
   */
  Weight?: number;
  [k: string]: unknown | undefined;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution11 {
  /**
   * This interface was referenced by `GlobalSubstitution11`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullGlobalSubstitutionProperties11 | undefined;
}
export interface FullGlobalSubstitutionProperties11 {
  /**
   * The sequence of words to substitute into the utterance.
   */
  Substitute: string;
  /**
   * The state of the global substitution
   */
  State?: 'UserAuthored' | 'Generated' | 'Deleted';
}
