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
 */
export type Terms = [string | FullTerm, ...(string | FullTerm)[]];
/**
 * Nouns which indicate the units represented in this numeric property entity.
 *
 * @minItems 1
 */
export type Terms1 = [string | FullTerm, ...(string | FullTerm)[]];
/**
 * A list of related entities which are used to group the query when this entity is shown
 *
 * @minItems 1
 */
export type EntityReferences = [string | FullEntityReference, ...(string | FullEntityReference)[]];
/**
 * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
 *
 * @minItems 1
 */
export type Terms2 = [string | FullTerm, ...(string | FullTerm)[]];
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
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms3 = [string | FullTerm, ...(string | FullTerm)[]];
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
 * Adjectives used to describe the Subject (with a high measurement)
 *
 * @minItems 1
 */
export type Terms4 = [string | FullTerm, ...(string | FullTerm)[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms5 = [string | FullTerm, ...(string | FullTerm)[]];
/**
 * Additional adverb phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type AdverbPhrases = [
  AdverbPhraseProperty | AdverbAntonymPhraseProperty,
  ...(AdverbPhraseProperty | AdverbAntonymPhraseProperty)[]
];
/**
 * Adverbs used to describe the relationship (high measurement)
 *
 * @minItems 1
 */
export type Terms6 = [string | FullTerm, ...(string | FullTerm)[]];
/**
 * Adverbs used to describe the relationship (low measurement)
 *
 * @minItems 1
 */
export type Terms7 = [string | FullTerm, ...(string | FullTerm)[]];
/**
 * Adverbs used to describe the relationship (low measurement)
 *
 * @minItems 1
 */
export type Terms8 = [string | FullTerm, ...(string | FullTerm)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases1 = [PrepPhrase, ...PrepPhrase[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms9 = [string | FullTerm, ...(string | FullTerm)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases2 = [PrepPhrase, ...PrepPhrase[]];
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases3 = [PrepPhrase, ...PrepPhrase[]];
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing = {
  Noun: NounPhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * Nouns used to describe the Subject
 *
 * @minItems 1
 */
export type Terms10 = [string | FullTerm, ...(string | FullTerm)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases4 = [PrepPhrase, ...PrepPhrase[]];
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing = {
  DynamicNoun: DynamicNounPhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases5 = [PrepPhrase, ...PrepPhrase[]];
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing = {
  Preposition: PrepositionPhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms11 = [string | FullTerm, ...(string | FullTerm)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases6 = [PrepPhrase, ...PrepPhrase[]];
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing = {
  Verb: VerbPhrasingProperties;
  [k: string]: unknown | undefined;
} & PhrasingProperties;
/**
 * Verbs used to describe the relationship
 *
 * @minItems 1
 */
export type Terms12 = [string | FullTerm, ...(string | FullTerm)[]];
/**
 * Additional adverb phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type AdverbPhrases1 = [
  AdverbPhraseProperty | AdverbAntonymPhraseProperty,
  ...(AdverbPhraseProperty | AdverbAntonymPhraseProperty)[]
];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases7 = [PrepPhrase, ...PrepPhrase[]];
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
 */
export type Examples = [string | FullExample, ...(string | FullExample)[]];
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 */
export type Terms13 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * Nouns which indicate the units represented in this numeric property entity.
 *
 * @minItems 1
 */
export type Terms14 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * A list of related entities which are used to group the query when this entity is shown
 *
 * @minItems 1
 */
export type EntityReferences1 = [string | FullEntityReference1, ...(string | FullEntityReference1)[]];
/**
 * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
 *
 * @minItems 1
 */
export type Terms15 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
 *
 * @minItems 1
 * @maxItems 1
 */
export type Conditions1 = [Condition1];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 */
export type Phrasings1 = [
  (
    | AttributePhrasing1
    | NamePhrasing1
    | AdjectivePhrasing1
    | DynamicAdjectivePhrasing1
    | NounPhrasing1
    | DynamicNounPhrasing1
    | PrepositionPhrasing1
    | VerbPhrasing1
  ),
  ...(
    | AttributePhrasing1
    | NamePhrasing1
    | AdjectivePhrasing1
    | DynamicAdjectivePhrasing1
    | NounPhrasing1
    | DynamicNounPhrasing1
    | PrepositionPhrasing1
    | VerbPhrasing1
  )[]
];
/**
 * An attribute phrasing on a linguistic relationship
 */
export type AttributePhrasing1 = {
  Attribute: AttributePhrasingProperties1;
  [k: string]: unknown | undefined;
} & PhrasingProperties1;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases8 = [PrepPhrase1, ...PrepPhrase1[]];
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms16 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing1 = {
  Name: NamePhrasingProperties1;
  [k: string]: unknown | undefined;
} & PhrasingProperties1;
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing1 = {
  /**
   * Properties of an adjective phrasing
   */
  Adjective: AdjectivePhrasingProperty1 | AntonymPhrasingProperty1;
  [k: string]: unknown | undefined;
} & PhrasingProperties1;
/**
 * Adjectives used to describe the Subject (with a high measurement)
 *
 * @minItems 1
 */
export type Terms17 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms18 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * Additional adverb phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type AdverbPhrases2 = [
  AdverbPhraseProperty1 | AdverbAntonymPhraseProperty1,
  ...(AdverbPhraseProperty1 | AdverbAntonymPhraseProperty1)[]
];
/**
 * Adverbs used to describe the relationship (high measurement)
 *
 * @minItems 1
 */
export type Terms19 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * Adverbs used to describe the relationship (low measurement)
 *
 * @minItems 1
 */
export type Terms20 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * Adverbs used to describe the relationship (low measurement)
 *
 * @minItems 1
 */
export type Terms21 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases9 = [PrepPhrase1, ...PrepPhrase1[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms22 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases10 = [PrepPhrase1, ...PrepPhrase1[]];
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing1 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties1;
  [k: string]: unknown | undefined;
} & PhrasingProperties1;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases11 = [PrepPhrase1, ...PrepPhrase1[]];
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing1 = {
  Noun: NounPhrasingProperties1;
  [k: string]: unknown | undefined;
} & PhrasingProperties1;
/**
 * Nouns used to describe the Subject
 *
 * @minItems 1
 */
export type Terms23 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases12 = [PrepPhrase1, ...PrepPhrase1[]];
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing1 = {
  DynamicNoun: DynamicNounPhrasingProperties1;
  [k: string]: unknown | undefined;
} & PhrasingProperties1;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases13 = [PrepPhrase1, ...PrepPhrase1[]];
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing1 = {
  Preposition: PrepositionPhrasingProperties1;
  [k: string]: unknown | undefined;
} & PhrasingProperties1;
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms24 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases14 = [PrepPhrase1, ...PrepPhrase1[]];
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing1 = {
  Verb: VerbPhrasingProperties1;
  [k: string]: unknown | undefined;
} & PhrasingProperties1;
/**
 * Verbs used to describe the relationship
 *
 * @minItems 1
 */
export type Terms25 = [string | FullTerm1, ...(string | FullTerm1)[]];
/**
 * Additional adverb phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type AdverbPhrases3 = [
  AdverbPhraseProperty1 | AdverbAntonymPhraseProperty1,
  ...(AdverbPhraseProperty1 | AdverbAntonymPhraseProperty1)[]
];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases15 = [PrepPhrase1, ...PrepPhrase1[]];
/**
 * The global text substitutions in the linguistic schema.
 *
 * @minItems 1
 */
export type GlobalSubstitutions1 = [GlobalSubstitution1, ...GlobalSubstitution1[]];
/**
 * Examples associated with the linguistic schema.
 *
 * @minItems 1
 */
export type Examples1 = [string | FullExample1, ...(string | FullExample1)[]];
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 */
export type Terms26 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * Nouns which indicate the units represented in this numeric property entity.
 *
 * @minItems 1
 */
export type Terms27 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * A list of related entities which are used to group the query when this entity is shown
 *
 * @minItems 1
 */
export type EntityReferences2 = [string | FullEntityReference2, ...(string | FullEntityReference2)[]];
/**
 * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
 *
 * @minItems 1
 */
export type Terms28 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
 *
 * @minItems 1
 * @maxItems 1
 */
export type Conditions2 = [Condition2];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 */
export type Phrasings2 = [
  (
    | AttributePhrasing2
    | NamePhrasing2
    | AdjectivePhrasing2
    | DynamicAdjectivePhrasing2
    | NounPhrasing2
    | DynamicNounPhrasing2
    | PrepositionPhrasing2
    | VerbPhrasing2
  ),
  ...(
    | AttributePhrasing2
    | NamePhrasing2
    | AdjectivePhrasing2
    | DynamicAdjectivePhrasing2
    | NounPhrasing2
    | DynamicNounPhrasing2
    | PrepositionPhrasing2
    | VerbPhrasing2
  )[]
];
/**
 * An attribute phrasing on a linguistic relationship
 */
export type AttributePhrasing2 = {
  Attribute: AttributePhrasingProperties2;
  [k: string]: unknown | undefined;
} & PhrasingProperties2;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases16 = [PrepPhrase2, ...PrepPhrase2[]];
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms29 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing2 = {
  Name: NamePhrasingProperties2;
  [k: string]: unknown | undefined;
} & PhrasingProperties2;
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing2 = {
  /**
   * Properties of an adjective phrasing
   */
  Adjective: AdjectivePhrasingProperty2 | AntonymPhrasingProperty2;
  [k: string]: unknown | undefined;
} & PhrasingProperties2;
/**
 * Adjectives used to describe the Subject (with a high measurement)
 *
 * @minItems 1
 */
export type Terms30 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms31 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * Additional adverb phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type AdverbPhrases4 = [
  AdverbPhraseProperty2 | AdverbAntonymPhraseProperty2,
  ...(AdverbPhraseProperty2 | AdverbAntonymPhraseProperty2)[]
];
/**
 * Adverbs used to describe the relationship (high measurement)
 *
 * @minItems 1
 */
export type Terms32 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * Adverbs used to describe the relationship (low measurement)
 *
 * @minItems 1
 */
export type Terms33 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * Adverbs used to describe the relationship (low measurement)
 *
 * @minItems 1
 */
export type Terms34 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases17 = [PrepPhrase2, ...PrepPhrase2[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms35 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases18 = [PrepPhrase2, ...PrepPhrase2[]];
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing2 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties2;
  [k: string]: unknown | undefined;
} & PhrasingProperties2;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases19 = [PrepPhrase2, ...PrepPhrase2[]];
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing2 = {
  Noun: NounPhrasingProperties2;
  [k: string]: unknown | undefined;
} & PhrasingProperties2;
/**
 * Nouns used to describe the Subject
 *
 * @minItems 1
 */
export type Terms36 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases20 = [PrepPhrase2, ...PrepPhrase2[]];
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing2 = {
  DynamicNoun: DynamicNounPhrasingProperties2;
  [k: string]: unknown | undefined;
} & PhrasingProperties2;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases21 = [PrepPhrase2, ...PrepPhrase2[]];
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing2 = {
  Preposition: PrepositionPhrasingProperties2;
  [k: string]: unknown | undefined;
} & PhrasingProperties2;
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms37 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases22 = [PrepPhrase2, ...PrepPhrase2[]];
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing2 = {
  Verb: VerbPhrasingProperties2;
  [k: string]: unknown | undefined;
} & PhrasingProperties2;
/**
 * Verbs used to describe the relationship
 *
 * @minItems 1
 */
export type Terms38 = [string | FullTerm2, ...(string | FullTerm2)[]];
/**
 * Additional adverb phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type AdverbPhrases5 = [
  AdverbPhraseProperty2 | AdverbAntonymPhraseProperty2,
  ...(AdverbPhraseProperty2 | AdverbAntonymPhraseProperty2)[]
];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases23 = [PrepPhrase2, ...PrepPhrase2[]];
/**
 * The global text substitutions in the linguistic schema.
 *
 * @minItems 1
 */
export type GlobalSubstitutions2 = [GlobalSubstitution2, ...GlobalSubstitution2[]];
/**
 * Examples associated with the linguistic schema.
 *
 * @minItems 1
 */
export type Examples2 = [string | FullExample2, ...(string | FullExample2)[]];
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 */
export type Terms39 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * Nouns which indicate the units represented in this numeric property entity.
 *
 * @minItems 1
 */
export type Terms40 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * A list of related entities which are used to group the query when this entity is shown
 *
 * @minItems 1
 */
export type EntityReferences3 = [string | FullEntityReference3, ...(string | FullEntityReference3)[]];
/**
 * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
 *
 * @minItems 1
 */
export type Terms41 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
 *
 * @minItems 1
 * @maxItems 1
 */
export type Conditions3 = [Condition3];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
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
  Attribute: AttributePhrasingProperties3;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases24 = [PrepPhrase3, ...PrepPhrase3[]];
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms42 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing3 = {
  Name: NamePhrasingProperties3;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing3 = {
  /**
   * Properties of an adjective phrasing
   */
  Adjective: AdjectivePhrasingProperty3 | AntonymPhrasingProperty3;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * Adjectives used to describe the Subject (with a high measurement)
 *
 * @minItems 1
 */
export type Terms43 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms44 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * Additional adverb phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type AdverbPhrases6 = [
  AdverbPhraseProperty3 | AdverbAntonymPhraseProperty3,
  ...(AdverbPhraseProperty3 | AdverbAntonymPhraseProperty3)[]
];
/**
 * Adverbs used to describe the relationship (high measurement)
 *
 * @minItems 1
 */
export type Terms45 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * Adverbs used to describe the relationship (low measurement)
 *
 * @minItems 1
 */
export type Terms46 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * Adverbs used to describe the relationship (low measurement)
 *
 * @minItems 1
 */
export type Terms47 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases25 = [PrepPhrase3, ...PrepPhrase3[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms48 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases26 = [PrepPhrase3, ...PrepPhrase3[]];
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing3 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties3;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases27 = [PrepPhrase3, ...PrepPhrase3[]];
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing3 = {
  Noun: NounPhrasingProperties3;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * Nouns used to describe the Subject
 *
 * @minItems 1
 */
export type Terms49 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases28 = [PrepPhrase3, ...PrepPhrase3[]];
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing3 = {
  DynamicNoun: DynamicNounPhrasingProperties3;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases29 = [PrepPhrase3, ...PrepPhrase3[]];
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing3 = {
  Preposition: PrepositionPhrasingProperties3;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms50 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases30 = [PrepPhrase3, ...PrepPhrase3[]];
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing3 = {
  Verb: VerbPhrasingProperties3;
  [k: string]: unknown | undefined;
} & PhrasingProperties3;
/**
 * Verbs used to describe the relationship
 *
 * @minItems 1
 */
export type Terms51 = [string | FullTerm3, ...(string | FullTerm3)[]];
/**
 * Additional adverb phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type AdverbPhrases7 = [
  AdverbPhraseProperty3 | AdverbAntonymPhraseProperty3,
  ...(AdverbPhraseProperty3 | AdverbAntonymPhraseProperty3)[]
];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases31 = [PrepPhrase3, ...PrepPhrase3[]];
/**
 * The global text substitutions in the linguistic schema.
 *
 * @minItems 1
 */
export type GlobalSubstitutions3 = [GlobalSubstitution3, ...GlobalSubstitution3[]];
/**
 * Examples associated with the linguistic schema.
 *
 * @minItems 1
 */
export type Examples3 = [string | FullExample3, ...(string | FullExample3)[]];
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 */
export type Terms52 = [string | FullTerm4, ...(string | FullTerm4)[]];
/**
 * Nouns which indicate the units represented in this numeric property entity.
 *
 * @minItems 1
 */
export type Terms53 = [string | FullTerm4, ...(string | FullTerm4)[]];
/**
 * A list of related entities which are used to group the query when this entity is shown
 *
 * @minItems 1
 */
export type EntityReferences4 = [string | FullEntityReference4, ...(string | FullEntityReference4)[]];
/**
 * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
 *
 * @minItems 1
 */
export type Terms54 = [string | FullTerm4, ...(string | FullTerm4)[]];
/**
 * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
 *
 * @minItems 1
 * @maxItems 1
 */
export type Conditions4 = [Condition4];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
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
} & PhrasingProperties4;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases32 = [PrepPhrase4, ...PrepPhrase4[]];
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms55 = [string | FullTerm4, ...(string | FullTerm4)[]];
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing4 = {
  Name: NamePhrasingProperties4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties4;
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
} & PhrasingProperties4;
/**
 * Adjectives used to describe the Subject (with a high measurement)
 *
 * @minItems 1
 */
export type Terms56 = [string | FullTerm4, ...(string | FullTerm4)[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms57 = [string | FullTerm4, ...(string | FullTerm4)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases33 = [PrepPhrase4, ...PrepPhrase4[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms58 = [string | FullTerm4, ...(string | FullTerm4)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases34 = [PrepPhrase4, ...PrepPhrase4[]];
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing4 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties4;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases35 = [PrepPhrase4, ...PrepPhrase4[]];
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing4 = {
  Noun: NounPhrasingProperties4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties4;
/**
 * Nouns used to describe the Subject
 *
 * @minItems 1
 */
export type Terms59 = [string | FullTerm4, ...(string | FullTerm4)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases36 = [PrepPhrase4, ...PrepPhrase4[]];
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing4 = {
  DynamicNoun: DynamicNounPhrasingProperties4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties4;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases37 = [PrepPhrase4, ...PrepPhrase4[]];
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing4 = {
  Preposition: PrepositionPhrasingProperties4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties4;
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms60 = [string | FullTerm4, ...(string | FullTerm4)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases38 = [PrepPhrase4, ...PrepPhrase4[]];
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing4 = {
  Verb: VerbPhrasingProperties4;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties4;
/**
 * Verbs used to describe the relationship
 *
 * @minItems 1
 */
export type Terms61 = [string | FullTerm4, ...(string | FullTerm4)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases39 = [PrepPhrase4, ...PrepPhrase4[]];
/**
 * The global text substitutions in the linguistic schema.
 *
 * @minItems 1
 */
export type GlobalSubstitutions4 = [GlobalSubstitution4, ...GlobalSubstitution4[]];
/**
 * Examples associated with the linguistic schema.
 *
 * @minItems 1
 */
export type Examples4 = [string | FullExample4, ...(string | FullExample4)[]];
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 */
export type Terms62 = [string | FullTerm5, ...(string | FullTerm5)[]];
/**
 * Nouns which indicate the units represented in this numeric property entity.
 *
 * @minItems 1
 */
export type Terms63 = [string | FullTerm5, ...(string | FullTerm5)[]];
/**
 * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
 *
 * @minItems 1
 */
export type Terms64 = [string | FullTerm5, ...(string | FullTerm5)[]];
/**
 * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
 *
 * @minItems 1
 * @maxItems 1
 */
export type Conditions5 = [Condition5];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 */
export type Phrasings5 = [
  (
    | AttributePhrasing5
    | NamePhrasing5
    | AdjectivePhrasing5
    | DynamicAdjectivePhrasing5
    | NounPhrasing5
    | DynamicNounPhrasing5
    | PrepositionPhrasing5
    | VerbPhrasing5
  ),
  ...(
    | AttributePhrasing5
    | NamePhrasing5
    | AdjectivePhrasing5
    | DynamicAdjectivePhrasing5
    | NounPhrasing5
    | DynamicNounPhrasing5
    | PrepositionPhrasing5
    | VerbPhrasing5
  )[]
];
/**
 * An attribute phrasing on a linguistic relationship
 */
export type AttributePhrasing5 = {
  Attribute: AttributePhrasingProperties5;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties5;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases40 = [PrepPhrase5, ...PrepPhrase5[]];
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms65 = [string | FullTerm5, ...(string | FullTerm5)[]];
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing5 = {
  Name: NamePhrasingProperties5;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties5;
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing5 = {
  /**
   * Properties of an adjective phrasing
   */
  Adjective: AdjectivePhrasingProperty5 | AntonymPhrasingProperty5;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties5;
/**
 * Adjectives used to describe the Subject (with a high measurement)
 *
 * @minItems 1
 */
export type Terms66 = [string | FullTerm5, ...(string | FullTerm5)[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms67 = [string | FullTerm5, ...(string | FullTerm5)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases41 = [PrepPhrase5, ...PrepPhrase5[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms68 = [string | FullTerm5, ...(string | FullTerm5)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases42 = [PrepPhrase5, ...PrepPhrase5[]];
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing5 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties5;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties5;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases43 = [PrepPhrase5, ...PrepPhrase5[]];
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing5 = {
  Noun: NounPhrasingProperties5;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties5;
/**
 * Nouns used to describe the Subject
 *
 * @minItems 1
 */
export type Terms69 = [string | FullTerm5, ...(string | FullTerm5)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases44 = [PrepPhrase5, ...PrepPhrase5[]];
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing5 = {
  DynamicNoun: DynamicNounPhrasingProperties5;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties5;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases45 = [PrepPhrase5, ...PrepPhrase5[]];
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing5 = {
  Preposition: PrepositionPhrasingProperties5;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties5;
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms70 = [string | FullTerm5, ...(string | FullTerm5)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases46 = [PrepPhrase5, ...PrepPhrase5[]];
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing5 = {
  Verb: VerbPhrasingProperties5;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties5;
/**
 * Verbs used to describe the relationship
 *
 * @minItems 1
 */
export type Terms71 = [string | FullTerm5, ...(string | FullTerm5)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases47 = [PrepPhrase5, ...PrepPhrase5[]];
/**
 * The global text substitutions in the linguistic schema.
 *
 * @minItems 1
 */
export type GlobalSubstitutions5 = [GlobalSubstitution5, ...GlobalSubstitution5[]];
/**
 * Examples associated with the linguistic schema.
 *
 * @minItems 1
 */
export type Examples5 = [string | FullExample5, ...(string | FullExample5)[]];
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 */
export type Terms72 = [string | FullTerm6, ...(string | FullTerm6)[]];
/**
 * Nouns which indicate the units represented in this numeric property entity.
 *
 * @minItems 1
 */
export type Terms73 = [string | FullTerm6, ...(string | FullTerm6)[]];
/**
 * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
 *
 * @minItems 1
 */
export type Terms74 = [string | FullTerm6, ...(string | FullTerm6)[]];
/**
 * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
 *
 * @minItems 1
 * @maxItems 1
 */
export type Conditions6 = [Condition6];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 */
export type Phrasings6 = [
  (
    | AttributePhrasing6
    | NamePhrasing6
    | AdjectivePhrasing6
    | DynamicAdjectivePhrasing6
    | NounPhrasing6
    | DynamicNounPhrasing6
    | PrepositionPhrasing6
    | VerbPhrasing6
  ),
  ...(
    | AttributePhrasing6
    | NamePhrasing6
    | AdjectivePhrasing6
    | DynamicAdjectivePhrasing6
    | NounPhrasing6
    | DynamicNounPhrasing6
    | PrepositionPhrasing6
    | VerbPhrasing6
  )[]
];
/**
 * An attribute phrasing on a linguistic relationship
 */
export type AttributePhrasing6 = {
  Attribute: AttributePhrasingProperties6;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties6;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases48 = [PrepPhrase6, ...PrepPhrase6[]];
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms75 = [string | FullTerm6, ...(string | FullTerm6)[]];
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing6 = {
  Name: NamePhrasingProperties6;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties6;
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing6 = {
  /**
   * Properties of an adjective phrasing
   */
  Adjective: AdjectivePhrasingProperty6 | AntonymPhrasingProperty6;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties6;
/**
 * Adjectives used to describe the Subject (with a high measurement)
 *
 * @minItems 1
 */
export type Terms76 = [string | FullTerm6, ...(string | FullTerm6)[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms77 = [string | FullTerm6, ...(string | FullTerm6)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases49 = [PrepPhrase6, ...PrepPhrase6[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms78 = [string | FullTerm6, ...(string | FullTerm6)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases50 = [PrepPhrase6, ...PrepPhrase6[]];
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing6 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties6;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties6;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases51 = [PrepPhrase6, ...PrepPhrase6[]];
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing6 = {
  Noun: NounPhrasingProperties6;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties6;
/**
 * Nouns used to describe the Subject
 *
 * @minItems 1
 */
export type Terms79 = [string | FullTerm6, ...(string | FullTerm6)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases52 = [PrepPhrase6, ...PrepPhrase6[]];
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing6 = {
  DynamicNoun: DynamicNounPhrasingProperties6;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties6;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases53 = [PrepPhrase6, ...PrepPhrase6[]];
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing6 = {
  Preposition: PrepositionPhrasingProperties6;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties6;
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms80 = [string | FullTerm6, ...(string | FullTerm6)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases54 = [PrepPhrase6, ...PrepPhrase6[]];
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing6 = {
  Verb: VerbPhrasingProperties6;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties6;
/**
 * Verbs used to describe the relationship
 *
 * @minItems 1
 */
export type Terms81 = [string | FullTerm6, ...(string | FullTerm6)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases55 = [PrepPhrase6, ...PrepPhrase6[]];
/**
 * The global text substitutions in the linguistic schema.
 *
 * @minItems 1
 */
export type GlobalSubstitutions6 = [GlobalSubstitution6, ...GlobalSubstitution6[]];
/**
 * Examples associated with the linguistic schema.
 *
 * @minItems 1
 */
export type Examples6 = [string | FullExample6, ...(string | FullExample6)[]];
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 */
export type Terms82 = [string | FullTerm7, ...(string | FullTerm7)[]];
/**
 * Nouns which indicate the units represented in this numeric property entity.
 *
 * @minItems 1
 */
export type Terms83 = [string | FullTerm7, ...(string | FullTerm7)[]];
/**
 * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
 *
 * @minItems 1
 */
export type Terms84 = [string | FullTerm7, ...(string | FullTerm7)[]];
/**
 * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
 *
 * @minItems 1
 * @maxItems 1
 */
export type Conditions7 = [Condition7];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 */
export type Phrasings7 = [
  (
    | AttributePhrasing7
    | NamePhrasing7
    | AdjectivePhrasing7
    | DynamicAdjectivePhrasing7
    | NounPhrasing7
    | DynamicNounPhrasing7
    | PrepositionPhrasing7
    | VerbPhrasing7
  ),
  ...(
    | AttributePhrasing7
    | NamePhrasing7
    | AdjectivePhrasing7
    | DynamicAdjectivePhrasing7
    | NounPhrasing7
    | DynamicNounPhrasing7
    | PrepositionPhrasing7
    | VerbPhrasing7
  )[]
];
/**
 * An attribute phrasing on a linguistic relationship
 */
export type AttributePhrasing7 = {
  Attribute: AttributePhrasingProperties7;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties7;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases56 = [PrepPhrase7, ...PrepPhrase7[]];
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms85 = [string | FullTerm7, ...(string | FullTerm7)[]];
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing7 = {
  Name: NamePhrasingProperties7;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties7;
/**
 * An adjective phrasing on a linguistic relationship
 */
export type AdjectivePhrasing7 = {
  /**
   * Properties of an adjective phrasing
   */
  Adjective: AdjectivePhrasingProperty7 | AntonymPhrasingProperty7;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties7;
/**
 * Adjectives used to describe the Subject (with a high measurement)
 *
 * @minItems 1
 */
export type Terms86 = [string | FullTerm7, ...(string | FullTerm7)[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms87 = [string | FullTerm7, ...(string | FullTerm7)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases57 = [PrepPhrase7, ...PrepPhrase7[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms88 = [string | FullTerm7, ...(string | FullTerm7)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases58 = [PrepPhrase7, ...PrepPhrase7[]];
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing7 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties7;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties7;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases59 = [PrepPhrase7, ...PrepPhrase7[]];
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing7 = {
  Noun: NounPhrasingProperties7;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties7;
/**
 * Nouns used to describe the Subject
 *
 * @minItems 1
 */
export type Terms89 = [string | FullTerm7, ...(string | FullTerm7)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases60 = [PrepPhrase7, ...PrepPhrase7[]];
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing7 = {
  DynamicNoun: DynamicNounPhrasingProperties7;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties7;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases61 = [PrepPhrase7, ...PrepPhrase7[]];
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing7 = {
  Preposition: PrepositionPhrasingProperties7;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties7;
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms90 = [string | FullTerm7, ...(string | FullTerm7)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases62 = [PrepPhrase7, ...PrepPhrase7[]];
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing7 = {
  Verb: VerbPhrasingProperties7;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties7;
/**
 * Verbs used to describe the relationship
 *
 * @minItems 1
 */
export type Terms91 = [string | FullTerm7, ...(string | FullTerm7)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases63 = [PrepPhrase7, ...PrepPhrase7[]];
/**
 * The global text substitutions in the linguistic schema.
 *
 * @minItems 1
 */
export type GlobalSubstitutions7 = [GlobalSubstitution7, ...GlobalSubstitution7[]];
/**
 * Examples associated with the linguistic schema.
 *
 * @minItems 1
 */
export type Examples7 = [string | FullExample7, ...(string | FullExample7)[]];
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 */
export type Terms92 = [string | FullTerm8, ...(string | FullTerm8)[]];
/**
 * Nouns which indicate the units represented in this numeric property entity.
 *
 * @minItems 1
 */
export type Terms93 = [string | FullTerm8, ...(string | FullTerm8)[]];
/**
 * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
 *
 * @minItems 1
 */
export type Terms94 = [string | FullTerm8, ...(string | FullTerm8)[]];
/**
 * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
 *
 * @minItems 1
 * @maxItems 1
 */
export type Conditions8 = [Condition8];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
 */
export type Phrasings8 = [
  (
    | AttributePhrasing8
    | NamePhrasing8
    | AdjectivePhrasing8
    | DynamicAdjectivePhrasing8
    | NounPhrasing8
    | DynamicNounPhrasing8
    | PrepositionPhrasing8
    | VerbPhrasing8
  ),
  ...(
    | AttributePhrasing8
    | NamePhrasing8
    | AdjectivePhrasing8
    | DynamicAdjectivePhrasing8
    | NounPhrasing8
    | DynamicNounPhrasing8
    | PrepositionPhrasing8
    | VerbPhrasing8
  )[]
];
/**
 * An attribute phrasing on a linguistic relationship
 */
export type AttributePhrasing8 = {
  Attribute: AttributePhrasingProperties8;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties8;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases64 = [PrepPhrase8, ...PrepPhrase8[]];
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms95 = [string | FullTerm8, ...(string | FullTerm8)[]];
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing8 = {
  Name: NamePhrasingProperties8;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties8;
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
        Subject: string | FullRoleReference8;
        Adjectives: Terms96;
        Antonyms?: Terms97;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference8;
        PrepositionalPhrases?: PrepPhrases65;
      }
    | {
        /**
         * The entity which is described via an adjective
         */
        Subject: string | FullRoleReference8;
        Antonyms: Terms98;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference8;
        PrepositionalPhrases?: PrepPhrases66;
      };
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties8;
/**
 * Adjectives used to describe the Subject (with a high measurement)
 *
 * @minItems 1
 */
export type Terms96 = [string | FullTerm8, ...(string | FullTerm8)[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms97 = [string | FullTerm8, ...(string | FullTerm8)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases65 = [PrepPhrase8, ...PrepPhrase8[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms98 = [string | FullTerm8, ...(string | FullTerm8)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases66 = [PrepPhrase8, ...PrepPhrase8[]];
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing8 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties8;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties8;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases67 = [PrepPhrase8, ...PrepPhrase8[]];
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing8 = {
  Noun: NounPhrasingProperties8;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties8;
/**
 * Nouns used to describe the Subject
 *
 * @minItems 1
 */
export type Terms99 = [string | FullTerm8, ...(string | FullTerm8)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases68 = [PrepPhrase8, ...PrepPhrase8[]];
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing8 = {
  DynamicNoun: DynamicNounPhrasingProperties8;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties8;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases69 = [PrepPhrase8, ...PrepPhrase8[]];
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing8 = {
  Preposition: PrepositionPhrasingProperties8;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties8;
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms100 = [string | FullTerm8, ...(string | FullTerm8)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases70 = [PrepPhrase8, ...PrepPhrase8[]];
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing8 = {
  Verb: VerbPhrasingProperties8;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties8;
/**
 * Verbs used to describe the relationship
 *
 * @minItems 1
 */
export type Terms101 = [string | FullTerm8, ...(string | FullTerm8)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases71 = [PrepPhrase8, ...PrepPhrase8[]];
/**
 * The global text substitutions in the linguistic schema.
 *
 * @minItems 1
 */
export type GlobalSubstitutions8 = [GlobalSubstitution8, ...GlobalSubstitution8[]];
/**
 * Examples associated with the linguistic schema.
 *
 * @minItems 1
 */
export type Examples8 = [string | FullExample8, ...(string | FullExample8)[]];
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 */
export type Terms102 = [string | FullTerm9, ...(string | FullTerm9)[]];
/**
 * Nouns which indicate the units represented in this numeric property entity.
 *
 * @minItems 1
 */
export type Terms103 = [string | FullTerm9, ...(string | FullTerm9)[]];
/**
 * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
 *
 * @minItems 1
 */
export type Terms104 = [string | FullTerm9, ...(string | FullTerm9)[]];
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
 */
export type Phrasings9 = [
  (
    | AttributePhrasing9
    | NamePhrasing9
    | AdjectivePhrasing9
    | DynamicAdjectivePhrasing9
    | NounPhrasing9
    | DynamicNounPhrasing9
    | PrepositionPhrasing9
    | VerbPhrasing9
  ),
  ...(
    | AttributePhrasing9
    | NamePhrasing9
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
} & PhrasingProperties9;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases72 = [PrepPhrase9, ...PrepPhrase9[]];
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms105 = [string | FullTerm9, ...(string | FullTerm9)[]];
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing9 = {
  Name: NamePhrasingProperties9;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties9;
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
        Subject: string | FullRoleReference9;
        Adjectives: Terms106;
        Antonyms?: Terms107;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference9;
        PrepositionalPhrases?: PrepPhrases73;
      }
    | {
        /**
         * The entity which is described via an adjective
         */
        Subject: string | FullRoleReference9;
        Antonyms: Terms108;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference9;
        PrepositionalPhrases?: PrepPhrases74;
      };
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties9;
/**
 * Adjectives used to describe the Subject (with a high measurement)
 *
 * @minItems 1
 */
export type Terms106 = [string | FullTerm9, ...(string | FullTerm9)[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms107 = [string | FullTerm9, ...(string | FullTerm9)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases73 = [PrepPhrase9, ...PrepPhrase9[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms108 = [string | FullTerm9, ...(string | FullTerm9)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases74 = [PrepPhrase9, ...PrepPhrase9[]];
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing9 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties9;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties9;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases75 = [PrepPhrase9, ...PrepPhrase9[]];
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing9 = {
  Noun: NounPhrasingProperties9;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties9;
/**
 * Nouns used to describe the Subject
 *
 * @minItems 1
 */
export type Terms109 = [string | FullTerm9, ...(string | FullTerm9)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases76 = [PrepPhrase9, ...PrepPhrase9[]];
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing9 = {
  DynamicNoun: DynamicNounPhrasingProperties9;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties9;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases77 = [PrepPhrase9, ...PrepPhrase9[]];
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing9 = {
  Preposition: PrepositionPhrasingProperties9;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties9;
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms110 = [string | FullTerm9, ...(string | FullTerm9)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases78 = [PrepPhrase9, ...PrepPhrase9[]];
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing9 = {
  Verb: VerbPhrasingProperties9;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties9;
/**
 * Verbs used to describe the relationship
 *
 * @minItems 1
 */
export type Terms111 = [string | FullTerm9, ...(string | FullTerm9)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases79 = [PrepPhrase9, ...PrepPhrase9[]];
/**
 * The global text substitutions in the linguistic schema.
 *
 * @minItems 1
 */
export type GlobalSubstitutions9 = [GlobalSubstitution9, ...GlobalSubstitution9[]];
/**
 * Terms which can be used to refer to this entity
 *
 * @minItems 1
 */
export type Terms112 = [string | FullTerm10, ...(string | FullTerm10)[]];
/**
 * Nouns which indicate the units represented in this numeric property entity.
 *
 * @minItems 1
 */
export type Terms113 = [string | FullTerm10, ...(string | FullTerm10)[]];
/**
 * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
 *
 * @minItems 1
 */
export type Terms114 = [string | FullTerm10, ...(string | FullTerm10)[]];
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
 */
export type Phrasings10 = [
  (
    | AttributePhrasing10
    | NamePhrasing10
    | AdjectivePhrasing10
    | DynamicAdjectivePhrasing10
    | NounPhrasing10
    | DynamicNounPhrasing10
    | PrepositionPhrasing10
    | VerbPhrasing10
  ),
  ...(
    | AttributePhrasing10
    | NamePhrasing10
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
} & PhrasingProperties10;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases80 = [PrepPhrase10, ...PrepPhrase10[]];
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms115 = [string | FullTerm10, ...(string | FullTerm10)[]];
/**
 * A name phrasing on a linguistic relationship
 */
export type NamePhrasing10 = {
  Name: NamePhrasingProperties10;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties10;
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
        Subject: string | FullRoleReference10;
        Adjectives: Terms116;
        Antonyms?: Terms117;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference10;
        PrepositionalPhrases?: PrepPhrases81;
      }
    | {
        /**
         * The entity which is described via an adjective
         */
        Subject: string | FullRoleReference10;
        Antonyms: Terms118;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference10;
        PrepositionalPhrases?: PrepPhrases82;
      };
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties10;
/**
 * Adjectives used to describe the Subject (with a high measurement)
 *
 * @minItems 1
 */
export type Terms116 = [string | FullTerm10, ...(string | FullTerm10)[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms117 = [string | FullTerm10, ...(string | FullTerm10)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases81 = [PrepPhrase10, ...PrepPhrase10[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Terms118 = [string | FullTerm10, ...(string | FullTerm10)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases82 = [PrepPhrase10, ...PrepPhrase10[]];
/**
 * A dynamic adjective phrasing on a linguistic relationship
 */
export type DynamicAdjectivePhrasing10 = {
  DynamicAdjective: DynamicAdjectivePhrasingProperties10;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties10;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases83 = [PrepPhrase10, ...PrepPhrase10[]];
/**
 * A noun phrasing on a linguistic relationship
 */
export type NounPhrasing10 = {
  Noun: NounPhrasingProperties10;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties10;
/**
 * Nouns used to describe the Subject
 *
 * @minItems 1
 */
export type Terms119 = [string | FullTerm10, ...(string | FullTerm10)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases84 = [PrepPhrase10, ...PrepPhrase10[]];
/**
 * A dynamic noun phrasing on a linguistic relationship
 */
export type DynamicNounPhrasing10 = {
  DynamicNoun: DynamicNounPhrasingProperties10;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties10;
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases85 = [PrepPhrase10, ...PrepPhrase10[]];
/**
 * A preposition phrasing on a linguistic relationship
 */
export type PrepositionPhrasing10 = {
  Preposition: PrepositionPhrasingProperties10;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties10;
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Terms120 = [string | FullTerm10, ...(string | FullTerm10)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases86 = [PrepPhrase10, ...PrepPhrase10[]];
/**
 * A verb phrasing on a linguistic relationship
 */
export type VerbPhrasing10 = {
  Verb: VerbPhrasingProperties10;
  State?: unknown;
  Weight?: unknown;
  TemplateSchema?: unknown;
} & PhrasingProperties10;
/**
 * Verbs used to describe the relationship
 *
 * @minItems 1
 */
export type Terms121 = [string | FullTerm10, ...(string | FullTerm10)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases87 = [PrepPhrase10, ...PrepPhrase10[]];
/**
 * The global text substitutions in the linguistic schema.
 *
 * @minItems 1
 */
export type GlobalSubstitutions10 = [GlobalSubstitution10, ...GlobalSubstitution10[]];
/**
 * Words which can be used to refer to this entity
 *
 * @minItems 1
 */
export type Words = [string | FullWord, ...(string | FullWord)[]];
/**
 * Nouns which can be used to refer to the entity which is the target of the role, when used in the context of the relationship
 *
 * @minItems 1
 */
export type Words1 = [string | FullWord, ...(string | FullWord)[]];
/**
 * A set of conditions which are required to be true for instances of the relationship represented in the semantic model
 *
 * @minItems 1
 * @maxItems 1
 */
export type Conditions11 = [Condition11];
/**
 * A set of syntactic frames which define the types of language used to describe the relationship
 *
 * @minItems 1
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
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Words2 = [string | FullWord, ...(string | FullWord)[]];
/**
 * Adjectives used to describe the Subject (with a high measurement)
 *
 * @minItems 1
 */
export type Words3 = [string | FullWord, ...(string | FullWord)[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Words4 = [string | FullWord, ...(string | FullWord)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases89 = [PrepPhrase11, ...PrepPhrase11[]];
/**
 * Adjectives used to describe the Subject (with a low measurement)
 *
 * @minItems 1
 */
export type Words5 = [string | FullWord, ...(string | FullWord)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases90 = [PrepPhrase11, ...PrepPhrase11[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases91 = [PrepPhrase11, ...PrepPhrase11[]];
/**
 * Nouns used to describe the Subject
 *
 * @minItems 1
 */
export type Words6 = [string | FullWord, ...(string | FullWord)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases92 = [PrepPhrase11, ...PrepPhrase11[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases93 = [PrepPhrase11, ...PrepPhrase11[]];
/**
 * Prepositions used in the prepositional phrase
 *
 * @minItems 1
 */
export type Words7 = [string | FullWord, ...(string | FullWord)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases94 = [PrepPhrase11, ...PrepPhrase11[]];
/**
 * Verbs used to describe the relationship
 *
 * @minItems 1
 */
export type Words8 = [string | FullWord, ...(string | FullWord)[]];
/**
 * Additional prepositional phrases which apply to the phrasing
 *
 * @minItems 1
 */
export type PrepPhrases95 = [PrepPhrase11, ...PrepPhrase11[]];
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
  Units?: Terms1;
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
  [k: string]: (string | FullRole) | undefined;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole {
  /**
   * A reference to an entity in a linguistic relationship
   */
  Target: string | FullEntityReference;
  Nouns?: Terms2;
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
  Prepositions: Terms3;
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
  Adjectives: Terms4;
  Antonyms?: Terms5;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference;
  AdverbPhrases?: AdverbPhrases;
  PrepositionalPhrases?: PrepPhrases1;
}
export interface AdverbPhraseProperty {
  Adverbs: Terms6;
  Antonyms?: Terms7;
  /**
   * The measure which the adverb pertains to
   */
  Measurement?: string | FullRoleReference;
}
export interface AdverbAntonymPhraseProperty {
  Antonyms: Terms8;
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
  Antonyms: Terms9;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases2;
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
  PrepositionalPhrases?: PrepPhrases3;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference;
  Nouns: Terms10;
  PrepositionalPhrases?: PrepPhrases4;
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
  PrepositionalPhrases?: PrepPhrases5;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference;
  Prepositions: Terms11;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference;
  PrepositionalPhrases?: PrepPhrases6;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference;
  Verbs: Terms12;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference;
  AdverbPhrases?: AdverbPhrases1;
  PrepositionalPhrases?: PrepPhrases7;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution {
  [k: string]: (string | FullGlobalSubstitutionProperties) | undefined;
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
  DynamicImprovement?: DynamicImprovement1;
  /**
   * Indicates the confidence score required for an interpretation of an utterance to be returned.
   */
  MinResultConfidence?: 'Default' | 'VeryHigh' | 'High' | 'Medium' | 'Low';
  Namespaces?: Namespaces1;
  Entities?: Entities1;
  Relationships?: Relationships1;
  GlobalSubstitutions?: GlobalSubstitutions1;
  Examples?: Examples1;
  Agents?: Agents1;
}
/**
 * Dynamic improvement settings for the linguistic schema.
 */
export interface DynamicImprovement1 {
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
export interface Namespaces1 {
  [k: string]: LsdlReference1 | undefined;
}
/**
 * A reference to an additional linguistic schema.
 */
export interface LsdlReference1 {}
/**
 * The entities in the linguistic schema.
 */
export interface Entities1 {
  [k: string]: Entity1 | undefined;
}
/**
 * An entity in the linguistic schema
 */
export interface Entity1 {
  /**
   * The definition for an entity
   */
  Definition: BindingEntityDefinition1 | TextEntityDefinition1;
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates whether the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Visibility?: ('Visible' | 'Hidden' | 'Children') | FullVisibilityProperty1;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms13;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  /**
   * Indicates whether this entity represents the Name or ID of something
   */
  NameType?: 'None' | 'Name' | 'Identifier';
  Units?: Terms14;
  Instances?: Instances1;
  ImplicitGroupings?: EntityReferences1;
}
export interface BindingEntityDefinition1 {
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
export interface TextEntityDefinition1 {
  /**
   * The textual definition
   */
  Text: string;
}
/**
 * Indicates whether the entity is hidden.
 */
export interface FullVisibilityProperty1 {
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
export interface FullTerm1 {
  [k: string]: TermProperties1 | undefined;
}
/**
 * Properties of a term in the linguistic schema
 */
export interface TermProperties1 {
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
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource1;
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
export interface FullSource1 {
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
export interface Instances1 {
  /**
   * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
   */
  Index?: 'Default' | 'All' | 'None';
  /**
   * Indicates whether values that appear to be plural should match singular words in the utterance.
   */
  PluralNormalization?: 'Default' | 'Normalized' | 'None';
  Synonyms?: InstanceSynonyms1;
  Weights?: InstanceWeights1;
}
/**
 * Defines a set of values which are synonyms of instances of this entity.
 */
export interface InstanceSynonyms1 {
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
export interface InstanceWeights1 {
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
export interface FullEntityReference1 {
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
export interface Relationships1 {
  [k: string]: Relationship1 | undefined;
}
/**
 * A relationship in the linguistic schema
 */
export interface Relationship1 {
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
  Roles?: Roles1;
  SemanticSlots?: SemanticSlots1;
  Conditions?: Conditions1;
  Phrasings?: Phrasings1;
}
/**
 * References to linguistic entities which participate in the relationship
 */
export interface Roles1 {
  /**
   * A role in a linguistic relationship.
   */
  [k: string]: (string | FullRole1) | undefined;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole1 {
  /**
   * A reference to an entity in a linguistic relationship
   */
  Target: string | FullEntityReference1;
  Nouns?: Terms15;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference1;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference1;
}
/**
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference1 {
  /**
   * Identifier for a linguistic schema object
   */
  Role: string;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots1 {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference1;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference1;
  /**
   * A role which indicates how long the relationship occurred
   */
  Duration?: string | FullRoleReference1;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference1;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition1 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference1;
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
export interface AttributePhrasingProperties1 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference1;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference1;
  PrepositionalPhrases?: PrepPhrases8;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase1 {
  Prepositions: Terms16;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference1;
}
export interface PhrasingProperties1 {
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
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource1;
  [k: string]: unknown | undefined;
}
/**
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties1 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference1;
  /**
   * The entity which is the name of the Subject
   */
  Name: string | FullRoleReference1;
}
export interface AdjectivePhrasingProperty1 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference1;
  Adjectives: Terms17;
  Antonyms?: Terms18;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference1;
  AdverbPhrases?: AdverbPhrases2;
  PrepositionalPhrases?: PrepPhrases9;
}
export interface AdverbPhraseProperty1 {
  Adverbs: Terms19;
  Antonyms?: Terms20;
  /**
   * The measure which the adverb pertains to
   */
  Measurement?: string | FullRoleReference1;
}
export interface AdverbAntonymPhraseProperty1 {
  Antonyms: Terms21;
  /**
   * The measure which the adverb pertains to
   */
  Measurement?: string | FullRoleReference1;
}
export interface AntonymPhrasingProperty1 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference1;
  Antonyms: Terms22;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference1;
  PrepositionalPhrases?: PrepPhrases10;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties1 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference1;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference1;
  PrepositionalPhrases?: PrepPhrases11;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties1 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference1;
  Nouns: Terms23;
  PrepositionalPhrases?: PrepPhrases12;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties1 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference1;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference1;
  PrepositionalPhrases?: PrepPhrases13;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties1 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference1;
  Prepositions: Terms24;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference1;
  PrepositionalPhrases?: PrepPhrases14;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties1 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference1;
  Verbs: Terms25;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference1;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference1;
  AdverbPhrases?: AdverbPhrases3;
  PrepositionalPhrases?: PrepPhrases15;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution1 {
  [k: string]: (string | FullGlobalSubstitutionProperties1) | undefined;
}
export interface FullGlobalSubstitutionProperties1 {
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
export interface FullExample1 {
  [k: string]: ExampleProperties1 | undefined;
}
/**
 * Metadata properties about an example utterance
 */
export interface ExampleProperties1 {
  /**
   * Identifies the shared template schema from which the example is derived
   */
  TemplateSchema?: string;
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
  Namespaces?: Namespaces2;
  Entities?: Entities2;
  Relationships?: Relationships2;
  GlobalSubstitutions?: GlobalSubstitutions2;
  Examples?: Examples2;
  Agents?: Agents2;
}
/**
 * Additional linguistic schemas referenced by objects within this linguistic schema
 */
export interface Namespaces2 {
  [k: string]: LsdlReference2 | undefined;
}
/**
 * A reference to an additional linguistic schema.
 */
export interface LsdlReference2 {}
/**
 * The entities in the linguistic schema.
 */
export interface Entities2 {
  [k: string]: Entity2 | undefined;
}
/**
 * An entity in the linguistic schema
 */
export interface Entity2 {
  /**
   * The definition for an entity
   */
  Definition: BindingEntityDefinition2 | TextEntityDefinition2;
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates whether the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Visibility?: ('Visible' | 'Hidden' | 'Children') | FullVisibilityProperty2;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms26;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  /**
   * Indicates whether this entity represents the Name or ID of something
   */
  NameType?: 'None' | 'Name' | 'Identifier';
  Units?: Terms27;
  Instances?: Instances2;
  ImplicitGroupings?: EntityReferences2;
}
export interface BindingEntityDefinition2 {
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
export interface TextEntityDefinition2 {
  /**
   * The textual definition
   */
  Text: string;
}
/**
 * Indicates whether the entity is hidden.
 */
export interface FullVisibilityProperty2 {
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
export interface FullTerm2 {
  [k: string]: TermProperties2 | undefined;
}
/**
 * Properties of a term in the linguistic schema
 */
export interface TermProperties2 {
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
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource2;
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
export interface FullSource2 {
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
export interface Instances2 {
  /**
   * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
   */
  Index?: 'Default' | 'All' | 'None';
  /**
   * Indicates whether values that appear to be plural should match singular words in the utterance.
   */
  PluralNormalization?: 'Default' | 'Normalized' | 'None';
  Synonyms?: InstanceSynonyms2;
  Weights?: InstanceWeights2;
}
/**
 * Defines a set of values which are synonyms of instances of this entity.
 */
export interface InstanceSynonyms2 {
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
export interface InstanceWeights2 {
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
export interface FullEntityReference2 {
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
export interface Relationships2 {
  [k: string]: Relationship2 | undefined;
}
/**
 * A relationship in the linguistic schema
 */
export interface Relationship2 {
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
  Roles?: Roles2;
  SemanticSlots?: SemanticSlots2;
  Conditions?: Conditions2;
  Phrasings?: Phrasings2;
}
/**
 * References to linguistic entities which participate in the relationship
 */
export interface Roles2 {
  /**
   * A role in a linguistic relationship.
   */
  [k: string]: (string | FullRole2) | undefined;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole2 {
  /**
   * A reference to an entity in a linguistic relationship
   */
  Target: string | FullEntityReference2;
  Nouns?: Terms28;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference2;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference2;
}
/**
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference2 {
  /**
   * Identifier for a linguistic schema object
   */
  Role: string;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots2 {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference2;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference2;
  /**
   * A role which indicates how long the relationship occurred
   */
  Duration?: string | FullRoleReference2;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference2;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition2 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference2;
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
export interface AttributePhrasingProperties2 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference2;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference2;
  PrepositionalPhrases?: PrepPhrases16;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase2 {
  Prepositions: Terms29;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference2;
}
export interface PhrasingProperties2 {
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
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource2;
  [k: string]: unknown | undefined;
}
/**
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties2 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference2;
  /**
   * The entity which is the name of the Subject
   */
  Name: string | FullRoleReference2;
}
export interface AdjectivePhrasingProperty2 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference2;
  Adjectives: Terms30;
  Antonyms?: Terms31;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference2;
  AdverbPhrases?: AdverbPhrases4;
  PrepositionalPhrases?: PrepPhrases17;
}
export interface AdverbPhraseProperty2 {
  Adverbs: Terms32;
  Antonyms?: Terms33;
  /**
   * The measure which the adverb pertains to
   */
  Measurement?: string | FullRoleReference2;
}
export interface AdverbAntonymPhraseProperty2 {
  Antonyms: Terms34;
  /**
   * The measure which the adverb pertains to
   */
  Measurement?: string | FullRoleReference2;
}
export interface AntonymPhrasingProperty2 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference2;
  Antonyms: Terms35;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference2;
  PrepositionalPhrases?: PrepPhrases18;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties2 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference2;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference2;
  PrepositionalPhrases?: PrepPhrases19;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties2 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference2;
  Nouns: Terms36;
  PrepositionalPhrases?: PrepPhrases20;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties2 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference2;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference2;
  PrepositionalPhrases?: PrepPhrases21;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties2 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference2;
  Prepositions: Terms37;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference2;
  PrepositionalPhrases?: PrepPhrases22;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties2 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference2;
  Verbs: Terms38;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference2;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference2;
  AdverbPhrases?: AdverbPhrases5;
  PrepositionalPhrases?: PrepPhrases23;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution2 {
  [k: string]: (string | FullGlobalSubstitutionProperties2) | undefined;
}
export interface FullGlobalSubstitutionProperties2 {
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
export interface FullExample2 {
  [k: string]: ExampleProperties2 | undefined;
}
/**
 * Metadata properties about an example utterance
 */
export interface ExampleProperties2 {
  /**
   * Identifies the shared template schema from which the example is derived
   */
  TemplateSchema?: string;
}
/**
 * A list of agents that have modified this linguistic schema.
 */
export interface Agents2 {
  [k: string]: AgentProperties2 | undefined;
}
/**
 * Properties of an agent in the linguistic schema
 */
export interface AgentProperties2 {
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
  Namespaces?: Namespaces3;
  Entities?: Entities3;
  Relationships?: Relationships3;
  GlobalSubstitutions?: GlobalSubstitutions3;
  Examples?: Examples3;
  Agents?: Agents3;
}
/**
 * Additional linguistic schemas referenced by objects within this linguistic schema
 */
export interface Namespaces3 {
  [k: string]: LsdlReference3 | undefined;
}
/**
 * A reference to an additional linguistic schema.
 */
export interface LsdlReference3 {}
/**
 * The entities in the linguistic schema.
 */
export interface Entities3 {
  [k: string]: Entity3 | undefined;
}
/**
 * An entity in the linguistic schema
 */
export interface Entity3 {
  /**
   * The definition for an entity
   */
  Definition: BindingEntityDefinition3 | TextEntityDefinition3;
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates whether the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Visibility?: ('Visible' | 'Hidden' | 'Children') | FullVisibilityProperty3;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms39;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  /**
   * Indicates whether this entity represents the Name or ID of something
   */
  NameType?: 'None' | 'Name' | 'Identifier';
  Units?: Terms40;
  Instances?: Instances3;
  ImplicitGroupings?: EntityReferences3;
}
export interface BindingEntityDefinition3 {
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
export interface TextEntityDefinition3 {
  /**
   * The textual definition
   */
  Text: string;
}
/**
 * Indicates whether the entity is hidden.
 */
export interface FullVisibilityProperty3 {
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
export interface FullTerm3 {
  [k: string]: TermProperties3 | undefined;
}
/**
 * Properties of a term in the linguistic schema
 */
export interface TermProperties3 {
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
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource3;
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
export interface FullSource3 {
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
export interface Instances3 {
  /**
   * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
   */
  Index?: 'Default' | 'All' | 'None';
  /**
   * Indicates whether values that appear to be plural should match singular words in the utterance.
   */
  PluralNormalization?: 'Default' | 'Normalized' | 'None';
  Synonyms?: InstanceSynonyms3;
  Weights?: InstanceWeights3;
}
/**
 * Defines a set of values which are synonyms of instances of this entity.
 */
export interface InstanceSynonyms3 {
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
export interface InstanceWeights3 {
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
export interface FullEntityReference3 {
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
  Roles?: Roles3;
  SemanticSlots?: SemanticSlots3;
  Conditions?: Conditions3;
  Phrasings?: Phrasings3;
}
/**
 * References to linguistic entities which participate in the relationship
 */
export interface Roles3 {
  /**
   * A role in a linguistic relationship.
   */
  [k: string]: (string | FullRole3) | undefined;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole3 {
  /**
   * A reference to an entity in a linguistic relationship
   */
  Target: string | FullEntityReference3;
  Nouns?: Terms41;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference3;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference3;
}
/**
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference3 {
  /**
   * Identifier for a linguistic schema object
   */
  Role: string;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots3 {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference3;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference3;
  /**
   * A role which indicates how long the relationship occurred
   */
  Duration?: string | FullRoleReference3;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference3;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition3 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference3;
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
export interface AttributePhrasingProperties3 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference3;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference3;
  PrepositionalPhrases?: PrepPhrases24;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase3 {
  Prepositions: Terms42;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference3;
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
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties3 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference3;
  /**
   * The entity which is the name of the Subject
   */
  Name: string | FullRoleReference3;
}
export interface AdjectivePhrasingProperty3 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference3;
  Adjectives: Terms43;
  Antonyms?: Terms44;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference3;
  AdverbPhrases?: AdverbPhrases6;
  PrepositionalPhrases?: PrepPhrases25;
}
export interface AdverbPhraseProperty3 {
  Adverbs: Terms45;
  Antonyms?: Terms46;
  /**
   * The measure which the adverb pertains to
   */
  Measurement?: string | FullRoleReference3;
}
export interface AdverbAntonymPhraseProperty3 {
  Antonyms: Terms47;
  /**
   * The measure which the adverb pertains to
   */
  Measurement?: string | FullRoleReference3;
}
export interface AntonymPhrasingProperty3 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference3;
  Antonyms: Terms48;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference3;
  PrepositionalPhrases?: PrepPhrases26;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties3 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference3;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference3;
  PrepositionalPhrases?: PrepPhrases27;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties3 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference3;
  Nouns: Terms49;
  PrepositionalPhrases?: PrepPhrases28;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties3 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference3;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference3;
  PrepositionalPhrases?: PrepPhrases29;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties3 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference3;
  Prepositions: Terms50;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference3;
  PrepositionalPhrases?: PrepPhrases30;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties3 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference3;
  Verbs: Terms51;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference3;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference3;
  AdverbPhrases?: AdverbPhrases7;
  PrepositionalPhrases?: PrepPhrases31;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution3 {
  [k: string]: (string | FullGlobalSubstitutionProperties3) | undefined;
}
export interface FullGlobalSubstitutionProperties3 {
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
export interface FullExample3 {
  [k: string]: ExampleProperties3 | undefined;
}
/**
 * Metadata properties about an example utterance
 */
export interface ExampleProperties3 {
  /**
   * Identifies the shared template schema from which the example is derived
   */
  TemplateSchema?: string;
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
  Namespaces?: Namespaces4;
  Entities?: Entities4;
  Relationships?: Relationships4;
  GlobalSubstitutions?: GlobalSubstitutions4;
  Examples?: Examples4;
  Agents?: Agents4;
}
/**
 * Additional linguistic schemas referenced by objects within this linguistic schema
 */
export interface Namespaces4 {
  [k: string]: LsdlReference4;
}
/**
 * A reference to an additional linguistic schema.
 *
 * This interface was referenced by `Namespaces4`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface LsdlReference4 {}
/**
 * The entities in the linguistic schema.
 */
export interface Entities4 {
  [k: string]: Entity4;
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
  Definition: BindingEntityDefinition4 | TextEntityDefinition4;
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates whether the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Visibility?: ('Visible' | 'Hidden' | 'Children') | FullVisibilityProperty4;
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
  Units?: Terms53;
  Instances?: Instances4;
  ImplicitGroupings?: EntityReferences4;
}
export interface BindingEntityDefinition4 {
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
export interface TextEntityDefinition4 {
  /**
   * The textual definition
   */
  Text: string;
}
/**
 * Indicates whether the entity is hidden.
 */
export interface FullVisibilityProperty4 {
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
export interface FullTerm4 {
  [k: string]: TermProperties4;
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
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource4;
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
export interface FullSource4 {
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
export interface Instances4 {
  /**
   * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
   */
  Index?: 'Default' | 'All' | 'None';
  /**
   * Indicates whether values that appear to be plural should match singular words in the utterance.
   */
  PluralNormalization?: 'Default' | 'Normalized' | 'None';
  Synonyms?: InstanceSynonyms4;
  Weights?: InstanceWeights4;
}
/**
 * Defines a set of values which are synonyms of instances of this entity.
 */
export interface InstanceSynonyms4 {
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
export interface InstanceWeights4 {
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
export interface FullEntityReference4 {
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
export interface Relationships4 {
  [k: string]: Relationship4;
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
  SemanticSlots?: SemanticSlots4;
  Conditions?: Conditions4;
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
  [k: string]: string | FullRole4;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole4 {
  /**
   * A reference to an entity in a linguistic relationship
   */
  Target: string | FullEntityReference4;
  Nouns?: Terms54;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference4;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference4;
}
/**
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference4 {
  /**
   * Identifier for a linguistic schema object
   */
  Role: string;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots4 {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference4;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference4;
  /**
   * A role which indicates how long the relationship occurred
   */
  Duration?: string | FullRoleReference4;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference4;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition4 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference4;
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
export interface AttributePhrasingProperties4 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference4;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference4;
  PrepositionalPhrases?: PrepPhrases32;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase4 {
  Prepositions: Terms55;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference4;
}
export interface PhrasingProperties4 {
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
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties4 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference4;
  /**
   * The entity which is the name of the Subject
   */
  Name: string | FullRoleReference4;
}
export interface AdjectivePhrasingProperty4 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference4;
  Adjectives: Terms56;
  Antonyms?: Terms57;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference4;
  PrepositionalPhrases?: PrepPhrases33;
}
export interface AntonymPhrasingProperty4 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference4;
  Antonyms: Terms58;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference4;
  PrepositionalPhrases?: PrepPhrases34;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties4 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference4;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference4;
  PrepositionalPhrases?: PrepPhrases35;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties4 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference4;
  Nouns: Terms59;
  PrepositionalPhrases?: PrepPhrases36;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties4 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference4;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference4;
  PrepositionalPhrases?: PrepPhrases37;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties4 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference4;
  Prepositions: Terms60;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference4;
  PrepositionalPhrases?: PrepPhrases38;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties4 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference4;
  Verbs: Terms61;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference4;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference4;
  PrepositionalPhrases?: PrepPhrases39;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution4 {
  /**
   * This interface was referenced by `GlobalSubstitution4`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullGlobalSubstitutionProperties4;
}
export interface FullGlobalSubstitutionProperties4 {
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
export interface FullExample4 {
  [k: string]: ExampleProperties4;
}
/**
 * Metadata properties about an example utterance
 *
 * This interface was referenced by `FullExample4`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface ExampleProperties4 {
  /**
   * Identifies the shared template schema from which the example is derived
   */
  TemplateSchema?: string;
}
/**
 * A list of agents that have modified this linguistic schema.
 */
export interface Agents4 {
  [k: string]: AgentProperties4;
}
/**
 * Properties of the term
 *
 * This interface was referenced by `Agents4`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface AgentProperties4 {
  /**
   * Indicates the last date and time (in UTC) that this agent modified the linguistic schema.
   */
  LastModified?: string;
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
  Namespaces?: Namespaces5;
  Entities?: Entities5;
  Relationships?: Relationships5;
  GlobalSubstitutions?: GlobalSubstitutions5;
  Examples?: Examples5;
  Agents?: Agents5;
}
/**
 * Additional linguistic schemas referenced by objects within this linguistic schema
 */
export interface Namespaces5 {
  [k: string]: LsdlReference5;
}
/**
 * A reference to an additional linguistic schema.
 *
 * This interface was referenced by `Namespaces5`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface LsdlReference5 {}
/**
 * The entities in the linguistic schema.
 */
export interface Entities5 {
  [k: string]: Entity5;
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
  Definition: BindingEntityDefinition5 | TextEntityDefinition5;
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates whether the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Visibility?: ('Visible' | 'Hidden' | 'Children') | FullVisibilityProperty5;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms62;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  /**
   * Indicates whether this entity represents the Name or ID of something
   */
  NameType?: 'None' | 'Name' | 'Identifier';
  Units?: Terms63;
  Instances?: Instances5;
}
export interface BindingEntityDefinition5 {
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
export interface TextEntityDefinition5 {
  /**
   * The textual definition
   */
  Text: string;
}
/**
 * Indicates whether the entity is hidden.
 */
export interface FullVisibilityProperty5 {
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
export interface FullTerm5 {
  [k: string]: TermProperties5;
}
/**
 * Properties of the term
 *
 * This interface was referenced by `FullTerm5`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface TermProperties5 {
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
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource5;
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
export interface FullSource5 {
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
export interface Instances5 {
  /**
   * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
   */
  Index?: 'Default' | 'All' | 'None';
  /**
   * Indicates whether values that appear to be plural should match singular words in the utterance.
   */
  PluralNormalization?: 'Default' | 'Normalized' | 'None';
  Synonyms?: InstanceSynonyms5;
  Weights?: InstanceWeights5;
}
/**
 * Defines a set of values which are synonyms of instances of this entity.
 */
export interface InstanceSynonyms5 {
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
export interface InstanceWeights5 {
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
 * The relationships in the linguistic schema.
 */
export interface Relationships5 {
  [k: string]: Relationship5;
}
/**
 * A relationship in the linguistic schema
 *
 * This interface was referenced by `Relationships5`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Relationship5 {
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
  Roles?: Roles5;
  SemanticSlots?: SemanticSlots5;
  Conditions?: Conditions5;
  Phrasings?: Phrasings5;
}
/**
 * References to linguistic entities which participate in the relationship
 */
export interface Roles5 {
  /**
   * A role in a linguistic relationship.
   *
   * This interface was referenced by `Roles5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullRole5;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole5 {
  /**
   * The linguistic entity which is the target of the role
   */
  Target: string | FullEntityReference5;
  Nouns?: Terms64;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference5;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference5;
}
/**
 * A reference to an entity in a linguistic relationship
 */
export interface FullEntityReference5 {
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
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference5 {
  /**
   * Identifier for a linguistic schema object
   */
  Role: string;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots5 {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference5;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference5;
  /**
   * A role which indicates how long the relationship occurred
   */
  Duration?: string | FullRoleReference5;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference5;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition5 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference5;
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
export interface AttributePhrasingProperties5 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference5;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference5;
  PrepositionalPhrases?: PrepPhrases40;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase5 {
  Prepositions: Terms65;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference5;
}
export interface PhrasingProperties5 {
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
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties5 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference5;
  /**
   * The entity which is the name of the Subject
   */
  Name: string | FullRoleReference5;
}
export interface AdjectivePhrasingProperty5 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference5;
  Adjectives: Terms66;
  Antonyms?: Terms67;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference5;
  PrepositionalPhrases?: PrepPhrases41;
}
export interface AntonymPhrasingProperty5 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference5;
  Antonyms: Terms68;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference5;
  PrepositionalPhrases?: PrepPhrases42;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties5 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference5;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference5;
  PrepositionalPhrases?: PrepPhrases43;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties5 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference5;
  Nouns: Terms69;
  PrepositionalPhrases?: PrepPhrases44;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties5 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference5;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference5;
  PrepositionalPhrases?: PrepPhrases45;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties5 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference5;
  Prepositions: Terms70;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference5;
  PrepositionalPhrases?: PrepPhrases46;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties5 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference5;
  Verbs: Terms71;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference5;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference5;
  PrepositionalPhrases?: PrepPhrases47;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution5 {
  /**
   * This interface was referenced by `GlobalSubstitution5`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullGlobalSubstitutionProperties5;
}
export interface FullGlobalSubstitutionProperties5 {
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
export interface FullExample5 {
  [k: string]: ExampleProperties5;
}
/**
 * Metadata properties about an example utterance
 *
 * This interface was referenced by `FullExample5`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface ExampleProperties5 {
  /**
   * Identifies the shared template schema from which the example is derived
   */
  TemplateSchema?: string;
}
/**
 * A list of agents that have modified this linguistic schema.
 */
export interface Agents5 {
  [k: string]: AgentProperties5;
}
/**
 * Properties of the term
 *
 * This interface was referenced by `Agents5`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface AgentProperties5 {
  /**
   * Indicates the last date and time (in UTC) that this agent modified the linguistic schema.
   */
  LastModified?: string;
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
  Namespaces?: Namespaces6;
  Entities?: Entities6;
  Relationships?: Relationships6;
  GlobalSubstitutions?: GlobalSubstitutions6;
  Examples?: Examples6;
}
/**
 * Additional linguistic schemas referenced by objects within this linguistic schema
 */
export interface Namespaces6 {
  [k: string]: LsdlReference6;
}
/**
 * A reference to an additional linguistic schema.
 *
 * This interface was referenced by `Namespaces6`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface LsdlReference6 {}
/**
 * The entities in the linguistic schema.
 */
export interface Entities6 {
  [k: string]: Entity6;
}
/**
 * An entity in the linguistic schema
 *
 * This interface was referenced by `Entities6`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Entity6 {
  /**
   * The definition for an entity
   */
  Definition: BindingEntityDefinition6 | TextEntityDefinition6;
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates whether the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Visibility?: ('Visible' | 'Hidden' | 'Children') | FullVisibilityProperty6;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms72;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  /**
   * Indicates whether this entity represents the Name or ID of something
   */
  NameType?: 'None' | 'Name' | 'Identifier';
  Units?: Terms73;
  Instances?: Instances6;
}
export interface BindingEntityDefinition6 {
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
export interface TextEntityDefinition6 {
  /**
   * The textual definition
   */
  Text: string;
}
/**
 * Indicates whether the entity is hidden.
 */
export interface FullVisibilityProperty6 {
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
export interface FullTerm6 {
  [k: string]: TermProperties6;
}
/**
 * Properties of the term
 *
 * This interface was referenced by `FullTerm6`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface TermProperties6 {
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
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource6;
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
export interface FullSource6 {
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
export interface Instances6 {
  /**
   * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
   */
  Index?: 'Default' | 'All' | 'None';
  /**
   * Indicates whether values that appear to be plural should match singular words in the utterance.
   */
  PluralNormalization?: 'Default' | 'Normalized' | 'None';
  Synonyms?: InstanceSynonyms6;
  Weights?: InstanceWeights6;
}
/**
 * Defines a set of values which are synonyms of instances of this entity.
 */
export interface InstanceSynonyms6 {
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
export interface InstanceWeights6 {
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
 * The relationships in the linguistic schema.
 */
export interface Relationships6 {
  [k: string]: Relationship6;
}
/**
 * A relationship in the linguistic schema
 *
 * This interface was referenced by `Relationships6`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Relationship6 {
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
  Roles?: Roles6;
  SemanticSlots?: SemanticSlots6;
  Conditions?: Conditions6;
  Phrasings?: Phrasings6;
}
/**
 * References to linguistic entities which participate in the relationship
 */
export interface Roles6 {
  /**
   * A role in a linguistic relationship.
   *
   * This interface was referenced by `Roles6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullRole6;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole6 {
  /**
   * The linguistic entity which is the target of the role
   */
  Target: string | FullEntityReference6;
  Nouns?: Terms74;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference6;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference6;
}
/**
 * A reference to an entity in a linguistic relationship
 */
export interface FullEntityReference6 {
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
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference6 {
  /**
   * Identifier for a linguistic schema object
   */
  Role: string;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots6 {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference6;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference6;
  /**
   * A role which indicates how long the relationship occurred
   */
  Duration?: string | FullRoleReference6;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference6;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition6 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference6;
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
export interface AttributePhrasingProperties6 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference6;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference6;
  PrepositionalPhrases?: PrepPhrases48;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase6 {
  Prepositions: Terms75;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference6;
}
export interface PhrasingProperties6 {
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
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties6 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference6;
  /**
   * The entity which is the name of the Subject
   */
  Name: string | FullRoleReference6;
}
export interface AdjectivePhrasingProperty6 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference6;
  Adjectives: Terms76;
  Antonyms?: Terms77;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference6;
  PrepositionalPhrases?: PrepPhrases49;
}
export interface AntonymPhrasingProperty6 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference6;
  Antonyms: Terms78;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference6;
  PrepositionalPhrases?: PrepPhrases50;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties6 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference6;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference6;
  PrepositionalPhrases?: PrepPhrases51;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties6 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference6;
  Nouns: Terms79;
  PrepositionalPhrases?: PrepPhrases52;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties6 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference6;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference6;
  PrepositionalPhrases?: PrepPhrases53;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties6 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference6;
  Prepositions: Terms80;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference6;
  PrepositionalPhrases?: PrepPhrases54;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties6 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference6;
  Verbs: Terms81;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference6;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference6;
  PrepositionalPhrases?: PrepPhrases55;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution6 {
  /**
   * This interface was referenced by `GlobalSubstitution6`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullGlobalSubstitutionProperties6;
}
export interface FullGlobalSubstitutionProperties6 {
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
export interface FullExample6 {
  [k: string]: ExampleProperties6;
}
/**
 * Metadata properties about an example utterance
 *
 * This interface was referenced by `FullExample6`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface ExampleProperties6 {
  /**
   * Identifies the shared template schema from which the example is derived
   */
  TemplateSchema?: string;
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
  Namespaces?: Namespaces7;
  Entities?: Entities7;
  Relationships?: Relationships7;
  GlobalSubstitutions?: GlobalSubstitutions7;
  Examples?: Examples7;
}
/**
 * Additional linguistic schemas referenced by objects within this linguistic schema
 */
export interface Namespaces7 {
  [k: string]: LsdlReference7;
}
/**
 * A reference to an additional linguistic schema.
 *
 * This interface was referenced by `Namespaces7`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface LsdlReference7 {}
/**
 * The entities in the linguistic schema.
 */
export interface Entities7 {
  [k: string]: Entity7;
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
  Definition: BindingEntityDefinition7 | TextEntityDefinition7;
  /**
   * The state of the entity
   */
  State?: 'Authored' | 'Generated' | 'Suggested' | 'Deleted';
  /**
   * Indicates whether the entity is hidden. Hidden entities are ignored for all purposes other than being available nodes along paths between other related entities.
   */
  Visibility?: ('Visible' | 'Hidden' | 'Children') | FullVisibilityProperty7;
  /**
   * The weight to apply to this entity
   */
  Weight?: number;
  /**
   * Identifies the shared template schema from which this entity is derived
   */
  TemplateSchema?: string;
  Terms?: Terms82;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  Units?: Terms83;
  Instances?: Instances7;
}
export interface BindingEntityDefinition7 {
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
export interface TextEntityDefinition7 {
  /**
   * The textual definition
   */
  Text: string;
}
/**
 * Indicates whether the entity is hidden.
 */
export interface FullVisibilityProperty7 {
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
export interface FullTerm7 {
  [k: string]: TermProperties7;
}
/**
 * Properties of the term
 *
 * This interface was referenced by `FullTerm7`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface TermProperties7 {
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
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource7;
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
export interface FullSource7 {
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
export interface Instances7 {
  /**
   * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
   */
  Index?: 'Default' | 'All' | 'None';
  /**
   * Indicates whether values that appear to be plural should match singular words in the utterance.
   */
  PluralNormalization?: 'Default' | 'Normalized' | 'None';
  Synonyms?: InstanceSynonyms7;
  Weights?: InstanceWeights7;
}
/**
 * Defines a set of values which are synonyms of instances of this entity.
 */
export interface InstanceSynonyms7 {
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
export interface InstanceWeights7 {
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
 * The relationships in the linguistic schema.
 */
export interface Relationships7 {
  [k: string]: Relationship7;
}
/**
 * A relationship in the linguistic schema
 *
 * This interface was referenced by `Relationships7`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface Relationship7 {
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
  Roles?: Roles7;
  SemanticSlots?: SemanticSlots7;
  Conditions?: Conditions7;
  Phrasings?: Phrasings7;
}
/**
 * References to linguistic entities which participate in the relationship
 */
export interface Roles7 {
  /**
   * A role in a linguistic relationship.
   *
   * This interface was referenced by `Roles7`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullRole7;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole7 {
  /**
   * The linguistic entity which is the target of the role
   */
  Target: string | FullEntityReference7;
  Nouns?: Terms84;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference7;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference7;
}
/**
 * A reference to an entity in a linguistic relationship
 */
export interface FullEntityReference7 {
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
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference7 {
  /**
   * Identifier for a linguistic schema object
   */
  Role: string;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots7 {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference7;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference7;
  /**
   * A role which indicates how long the relationship occurred
   */
  Duration?: string | FullRoleReference7;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference7;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition7 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference7;
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
export interface AttributePhrasingProperties7 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference7;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference7;
  PrepositionalPhrases?: PrepPhrases56;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase7 {
  Prepositions: Terms85;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference7;
}
export interface PhrasingProperties7 {
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
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties7 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference7;
  /**
   * The entity which is the name of the Subject
   */
  Name: string | FullRoleReference7;
}
export interface AdjectivePhrasingProperty7 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference7;
  Adjectives: Terms86;
  Antonyms?: Terms87;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference7;
  PrepositionalPhrases?: PrepPhrases57;
}
export interface AntonymPhrasingProperty7 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference7;
  Antonyms: Terms88;
  /**
   * The entity which measures the extent to which the Adjectives apply
   */
  Measurement?: string | FullRoleReference7;
  PrepositionalPhrases?: PrepPhrases58;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties7 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference7;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference7;
  PrepositionalPhrases?: PrepPhrases59;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties7 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference7;
  Nouns: Terms89;
  PrepositionalPhrases?: PrepPhrases60;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties7 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference7;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference7;
  PrepositionalPhrases?: PrepPhrases61;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties7 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference7;
  Prepositions: Terms90;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference7;
  PrepositionalPhrases?: PrepPhrases62;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties7 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference7;
  Verbs: Terms91;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference7;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference7;
  PrepositionalPhrases?: PrepPhrases63;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution7 {
  /**
   * This interface was referenced by `GlobalSubstitution7`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullGlobalSubstitutionProperties7;
}
export interface FullGlobalSubstitutionProperties7 {
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
export interface FullExample7 {
  [k: string]: ExampleProperties7;
}
/**
 * Metadata properties about an example utterance
 *
 * This interface was referenced by `FullExample7`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface ExampleProperties7 {
  /**
   * Identifies the shared template schema from which the example is derived
   */
  TemplateSchema?: string;
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
  Namespaces?: Namespaces8;
  Entities?: Entities8;
  Relationships?: Relationships8;
  GlobalSubstitutions?: GlobalSubstitutions8;
  Examples?: Examples8;
}
/**
 * Additional linguistic schemas referenced by objects within this linguistic schema
 */
export interface Namespaces8 {
  [k: string]: LsdlReference8;
}
/**
 * A reference to an additional linguistic schema.
 *
 * This interface was referenced by `Namespaces8`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface LsdlReference8 {}
/**
 * The entities in the linguistic schema.
 */
export interface Entities8 {
  [k: string]: Entity8;
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
  Terms?: Terms92;
  /**
   * The overall semantic category of the entity
   */
  SemanticType?: 'Person' | 'Animate' | 'Inanimate' | 'Location' | 'Time' | 'Duration';
  Units?: Terms93;
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
 * A term in the linguistic schema
 */
export interface FullTerm8 {
  [k: string]: TermProperties8;
}
/**
 * Properties of the term
 *
 * This interface was referenced by `FullTerm8`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface TermProperties8 {
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
  Source?: ('Default' | 'User' | 'Internal' | 'External') | FullSource8;
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
export interface FullSource8 {
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
export interface Instances8 {
  /**
   * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
   */
  Index?: 'Default' | 'None';
  /**
   * Indicates whether values that appear to be plural should match singular words in the utterance.
   */
  PluralNormalization?: 'Default' | 'Normalized' | 'None';
  Synonyms?: InstanceSynonyms8;
  Weights?: InstanceWeights8;
}
/**
 * Defines a set of values which are synonyms of instances of this entity.
 */
export interface InstanceSynonyms8 {
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
export interface InstanceWeights8 {
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
 * The relationships in the linguistic schema.
 */
export interface Relationships8 {
  [k: string]: Relationship8;
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
  Roles?: Roles8;
  SemanticSlots?: SemanticSlots8;
  Conditions?: Conditions8;
  Phrasings?: Phrasings8;
}
/**
 * References to linguistic entities which participate in the relationship
 */
export interface Roles8 {
  /**
   * A role in a linguistic relationship.
   *
   * This interface was referenced by `Roles8`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullRole8;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole8 {
  /**
   * The linguistic entity which is the target of the role
   */
  Target: string | FullEntityReference8;
  Nouns?: Terms94;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference8;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference8;
}
/**
 * A reference to an entity in a linguistic relationship
 */
export interface FullEntityReference8 {
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
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference8 {
  /**
   * Identifier for a linguistic schema object
   */
  Role: string;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots8 {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference8;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference8;
  /**
   * A role which indicates how long the relationship occurred
   */
  Duration?: string | FullRoleReference8;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference8;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition8 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference8;
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
export interface AttributePhrasingProperties8 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference8;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference8;
  PrepositionalPhrases?: PrepPhrases64;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase8 {
  Prepositions: Terms95;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference8;
}
export interface PhrasingProperties8 {
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
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties8 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference8;
  /**
   * The entity which is the name of the Subject
   */
  Name: string | FullRoleReference8;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties8 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference8;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference8;
  PrepositionalPhrases?: PrepPhrases67;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties8 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference8;
  Nouns: Terms99;
  PrepositionalPhrases?: PrepPhrases68;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties8 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference8;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference8;
  PrepositionalPhrases?: PrepPhrases69;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties8 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference8;
  Prepositions: Terms100;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference8;
  PrepositionalPhrases?: PrepPhrases70;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties8 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference8;
  Verbs: Terms101;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference8;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference8;
  PrepositionalPhrases?: PrepPhrases71;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution8 {
  /**
   * This interface was referenced by `GlobalSubstitution8`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullGlobalSubstitutionProperties8;
}
export interface FullGlobalSubstitutionProperties8 {
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
export interface FullExample8 {
  [k: string]: ExampleProperties8;
}
/**
 * Metadata properties about an example utterance
 *
 * This interface was referenced by `FullExample8`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface ExampleProperties8 {
  /**
   * Identifies the shared template schema from which the example is derived
   */
  TemplateSchema?: string;
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
  Namespaces?: Namespaces9;
  Entities?: Entities9;
  Relationships?: Relationships9;
  GlobalSubstitutions?: GlobalSubstitutions9;
}
/**
 * Additional linguistic schemas referenced by objects within this linguistic schema
 */
export interface Namespaces9 {
  [k: string]: LsdlReference9;
}
/**
 * A reference to an additional linguistic schema.
 *
 * This interface was referenced by `Namespaces9`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface LsdlReference9 {}
/**
 * The entities in the linguistic schema.
 */
export interface Entities9 {
  [k: string]: Entity9;
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
  Units?: Terms103;
  Instances?: Instances9;
}
/**
 * A term in the linguistic schema
 */
export interface FullTerm9 {
  [k: string]: TermProperties9;
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
 * Defines how instance values from the model are recognized
 */
export interface Instances9 {
  /**
   * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
   */
  Index?: 'Default' | 'None';
  /**
   * Indicates whether values that appear to be plural should match singular words in the utterance.
   */
  PluralNormalization?: 'Default' | 'Normalized' | 'None';
  Synonyms?: InstanceSynonyms9;
  Weights?: InstanceWeights9;
}
/**
 * Defines a set of values which are synonyms of instances of this entity.
 */
export interface InstanceSynonyms9 {
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
export interface InstanceWeights9 {
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
 * The relationships in the linguistic schema.
 */
export interface Relationships9 {
  [k: string]: Relationship9;
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
  SemanticSlots?: SemanticSlots9;
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
  [k: string]: string | FullRole9;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole9 {
  /**
   * The linguistic entity which is the target of the role
   */
  Target: string | FullEntityReference9;
  Nouns?: Terms104;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference9;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference9;
}
/**
 * A reference to an entity in a linguistic relationship
 */
export interface FullEntityReference9 {
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
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference9 {
  /**
   * Identifier for a linguistic schema object
   */
  Role: string;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots9 {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference9;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference9;
  /**
   * A role which indicates how long the relationship occurred
   */
  Duration?: string | FullRoleReference9;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference9;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition9 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference9;
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
  Subject: string | FullRoleReference9;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference9;
  PrepositionalPhrases?: PrepPhrases72;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase9 {
  Prepositions: Terms105;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference9;
}
export interface PhrasingProperties9 {
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
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties9 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference9;
  /**
   * The entity which is the name of the Subject
   */
  Name: string | FullRoleReference9;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties9 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference9;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference9;
  PrepositionalPhrases?: PrepPhrases75;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties9 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference9;
  Nouns: Terms109;
  PrepositionalPhrases?: PrepPhrases76;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties9 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference9;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference9;
  PrepositionalPhrases?: PrepPhrases77;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties9 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference9;
  Prepositions: Terms110;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference9;
  PrepositionalPhrases?: PrepPhrases78;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties9 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference9;
  Verbs: Terms111;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference9;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference9;
  PrepositionalPhrases?: PrepPhrases79;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution9 {
  /**
   * This interface was referenced by `GlobalSubstitution9`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullGlobalSubstitutionProperties9;
}
export interface FullGlobalSubstitutionProperties9 {
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
  Namespaces?: Namespaces10;
  Entities?: Entities10;
  Relationships?: Relationships10;
  GlobalSubstitutions?: GlobalSubstitutions10;
}
/**
 * Additional linguistic schemas referenced by objects within this linguistic schema
 */
export interface Namespaces10 {
  [k: string]: LsdlReference10;
}
/**
 * A reference to an additional linguistic schema.
 *
 * This interface was referenced by `Namespaces10`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface LsdlReference10 {}
/**
 * The entities in the linguistic schema.
 */
export interface Entities10 {
  [k: string]: Entity10;
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
  Units?: Terms113;
  Instances?: Instances10;
}
/**
 * A term in the linguistic schema
 */
export interface FullTerm10 {
  [k: string]: TermProperties10;
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
 * Defines how instance values from the model are recognized
 */
export interface Instances10 {
  /**
   * Indicates whether the values of this entity should be available in the term index, enabling recognition, completion, and suggestions.
   */
  Index?: 'Default' | 'None';
  /**
   * Indicates whether values that appear to be plural should match singular words in the utterance.
   */
  PluralNormalization?: 'Default' | 'Normalized' | 'None';
  Synonyms?: InstanceSynonyms10;
  Weights?: InstanceWeights10;
}
/**
 * Defines a set of values which are synonyms of instances of this entity.
 */
export interface InstanceSynonyms10 {
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
export interface InstanceWeights10 {
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
 * The relationships in the linguistic schema.
 */
export interface Relationships10 {
  [k: string]: Relationship10;
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
  SemanticSlots?: SemanticSlots10;
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
  [k: string]: string | FullRole10;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole10 {
  /**
   * The linguistic entity which is the target of the role
   */
  Target: string | FullEntityReference10;
  Nouns?: Terms114;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference10;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference10;
}
/**
 * A reference to an entity in a linguistic relationship
 */
export interface FullEntityReference10 {
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
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference10 {
  /**
   * Identifier for a linguistic schema object
   */
  Role: string;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots10 {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference10;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference10;
  /**
   * A role which indicates how long the relationship occurred
   */
  Duration?: string | FullRoleReference10;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference10;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition10 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference10;
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
  Subject: string | FullRoleReference10;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference10;
  PrepositionalPhrases?: PrepPhrases80;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase10 {
  Prepositions: Terms115;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference10;
}
export interface PhrasingProperties10 {
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
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties10 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference10;
  /**
   * The entity which is the name of the Subject
   */
  Name: string | FullRoleReference10;
}
/**
 * Properties of a dynamic adjective phrasing
 */
export interface DynamicAdjectivePhrasingProperties10 {
  /**
   * The entity which is described via an adjective
   */
  Subject: string | FullRoleReference10;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference10;
  PrepositionalPhrases?: PrepPhrases83;
}
/**
 * Properties of a noun phrasing
 */
export interface NounPhrasingProperties10 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference10;
  Nouns: Terms119;
  PrepositionalPhrases?: PrepPhrases84;
}
/**
 * Properties of a dynamic noun phrasing
 */
export interface DynamicNounPhrasingProperties10 {
  /**
   * The entity which is described via a noun
   */
  Subject: string | FullRoleReference10;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference10;
  PrepositionalPhrases?: PrepPhrases85;
}
/**
 * Properties of a preposition phrasing
 */
export interface PrepositionPhrasingProperties10 {
  /**
   * The entity which is the subject of the prepositional phrase
   */
  Subject: string | FullRoleReference10;
  Prepositions: Terms120;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference10;
  PrepositionalPhrases?: PrepPhrases86;
}
/**
 * Properties of a verb phrasing
 */
export interface VerbPhrasingProperties10 {
  /**
   * The entity which is the subject of the verb
   */
  Subject?: string | FullRoleReference10;
  Verbs: Terms121;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference10;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference10;
  PrepositionalPhrases?: PrepPhrases87;
}
/**
 * A global text substitution in the linguistic schema.
 */
export interface GlobalSubstitution10 {
  /**
   * This interface was referenced by `GlobalSubstitution10`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | FullGlobalSubstitutionProperties10;
}
export interface FullGlobalSubstitutionProperties10 {
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
  Namespaces?: Namespaces11;
  Entities?: Entities11;
  Relationships?: Relationships11;
  GlobalSubstitutions?: GlobalSubstitutions11;
}
/**
 * Additional linguistic schemas referenced by objects within this linguistic schema
 */
export interface Namespaces11 {
  [k: string]: LsdlReference11;
}
/**
 * A reference to an additional linguistic schema.
 *
 * This interface was referenced by `Namespaces11`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export interface LsdlReference11 {}
/**
 * The entities in the linguistic schema.
 */
export interface Entities11 {
  [k: string]: Entity11;
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
  [k: string]: WordProperties;
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
  Weights?: InstanceWeights11;
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
 * Reference to property in the model which contains the weight to apply to instances of this entity.
 */
export interface InstanceWeights11 {
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
 * The relationships in the linguistic schema.
 */
export interface Relationships11 {
  [k: string]: Relationship11;
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
  Conditions?: Conditions11;
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
  [k: string]: string | FullRole11;
}
/**
 * A role in a linguistic relationship.
 */
export interface FullRole11 {
  /**
   * The linguistic entity which is the target of the role
   */
  Target: string | FullEntityReference11;
  Nouns?: Words1;
  /**
   * A role which indicates the quantity of this role's entity which participates in the relationship
   */
  Quantity?: string | FullRoleReference11;
  /**
   * A role which indicates the amount of this role's entity which participates in the relationship
   */
  Amount?: string | FullRoleReference11;
}
/**
 * A reference to an entity in a linguistic relationship
 */
export interface FullEntityReference11 {
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
 * A reference to a role in a linguistic relationship
 */
export interface FullRoleReference11 {
  /**
   * Identifier for a linguistic schema object
   */
  Role: string;
}
/**
 * Defines how roles fill common semantic slots in the relationship
 */
export interface SemanticSlots11 {
  /**
   * A role which indicates where the relationship takes place
   */
  Where?: string | FullRoleReference11;
  /**
   * A role which indicates when the relationship takes place
   */
  When?: string | FullRoleReference11;
  /**
   * A role which indicates the number of times the relationship occurred
   */
  Occurrences?: string | FullRoleReference11;
}
/**
 * A filter on a relationship that defines the circumstances under which a row in the semantic model represents an instance of the relationship
 */
export interface Condition11 {
  /**
   * A role in the relationship to compare to the value
   */
  Target: string | FullRoleReference11;
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
  Subject: string | FullRoleReference11;
  /**
   * The entity which is the object of the phrasing
   */
  Object: string | FullRoleReference11;
  PrepositionalPhrases?: PrepPhrases88;
}
/**
 * A prepositional phrase used in a phrasing
 */
export interface PrepPhrase11 {
  Prepositions: Words2;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference11;
}
/**
 * A name phrasing on a linguistic relationship
 */
export interface NamePhrasing11 {
  Name: NamePhrasingProperties11;
  State?: unknown;
  Weight?: unknown;
}
/**
 * Properties of a name phrasing
 */
export interface NamePhrasingProperties11 {
  /**
   * The entity which is the subject of the phrasing
   */
  Subject: string | FullRoleReference11;
  /**
   * The entity which is the name of the Subject
   */
  Name: string | FullRoleReference11;
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
        Subject: string | FullRoleReference11;
        Adjectives: Words3;
        Antonyms?: Words4;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference11;
        PrepositionalPhrases?: PrepPhrases89;
      }
    | {
        /**
         * The entity which is described via an adjective
         */
        Subject: string | FullRoleReference11;
        Antonyms: Words5;
        /**
         * The entity which measures the extent to which the Adjectives apply
         */
        Measurement?: string | FullRoleReference11;
        PrepositionalPhrases?: PrepPhrases90;
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
  Subject: string | FullRoleReference11;
  /**
   * The column entity (or table entity with a name phrasing) which is used to describe the Subject
   */
  Adjective: string | FullRoleReference11;
  PrepositionalPhrases?: PrepPhrases91;
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
  Subject: string | FullRoleReference11;
  Nouns: Words6;
  PrepositionalPhrases?: PrepPhrases92;
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
  Subject: string | FullRoleReference11;
  /**
   * The column entity (or table entity with a name phrasing) which is the used to describe the Subject
   */
  Noun: string | FullRoleReference11;
  PrepositionalPhrases?: PrepPhrases93;
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
  Subject: string | FullRoleReference11;
  Prepositions: Words7;
  /**
   * The entity which is the object of the prepositional phrase
   */
  Object: string | FullRoleReference11;
  PrepositionalPhrases?: PrepPhrases94;
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
  Subject?: string | FullRoleReference11;
  Verbs: Words8;
  /**
   * The entity which is the indirect object of the verb
   */
  IndirectObject?: string | FullRoleReference11;
  /**
   * The entity which is the direct object of the verb
   */
  Object?: string | FullRoleReference11;
  PrepositionalPhrases?: PrepPhrases95;
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
  [k: string]: string | FullGlobalSubstitutionProperties11;
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
