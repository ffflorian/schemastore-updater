/* eslint-disable */

/**
 * Specifies how to index fields at different paths for this index.
 */
export type Mappings =
  | {
      dynamic?: true;
    }
  | {
      /**
       * Enables or disables dynamic mapping of fields for this index.
       * If set to true, Atlas Search recursively indexes all fields and embedded documents in the document except:
       * Fields of certain data types. To learn more, see BSON Data Types.
       * Any fields explicitly excluded by the mappings.fields parameter.
       * If set to false, you must specify individual fields to index using mappings.fields.
       * If omitted, defaults to false.
       */
      dynamic?: boolean;
      fields: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^.*$".
         */
        [k: string]: MappingsField | MappingsField[];
      };
    };
export type StoredSource =
  | {
      /**
       * List that contains the field names or dot-separated paths to fields to store.
       * In addition to the specified fields, Atlas Search stores _id also by default.
       */
      include: string[];
      /**
       * List that contains the field names or dot-separated paths to fields to exclude from being stored.
       * If specified, Atlas Search stores original documents except the fields listed here.
       */
      exclude?: string[];
    }
  | {
      /**
       * List that contains the field names or dot-separated paths to fields to store.
       * In addition to the specified fields, Atlas Search stores _id also by default.
       */
      include?: string[];
      /**
       * List that contains the field names or dot-separated paths to fields to exclude from being stored.
       * If specified, Atlas Search stores original documents except the fields listed here.
       */
      exclude: string[];
    };

export interface JSONSchemaForMongoDBAtlasSearchIndexDefinition {
  /**
   * Specifies the analyzer to apply to string fields when indexing.
   * If you set this only at the top and do not specify an analyzer for the fields in the index definition, Atlas Search applies this analyzer to all the fields.
   * To use a different analyzer for each field, you must specify a different analyzer for the field.
   * If omitted, defaults to Standard Analyzer.
   */
  analyzer?: string;
  /**
   * Specifies the Custom Analyzers to use in this index.
   */
  analyzers?: Analyzer[];
  mappings: Mappings;
  /**
   * Specifies a name for the index. In each namespace, names of all indexes in the namespace must be unique.
   * If omitted, defaults to default.
   */
  name?: string;
  /**
   * Specifies the analyzer to apply to query text before searching with it.
   * If omitted, defaults to Standard Analyzer.
   */
  searchAnalyzer?: string;
  /**
   * Specifies fields in the documents to store for query-time look-ups using the returnedStoredSource option.
   * You can store fields of all BSON Data Types on Atlas Search.
   *
   * Value can be one of the following:
   * true, to store all fields
   * false, to not store any fields
   * Object that specifies the fields to include or exclude from storage
   *
   * If omitted, defaults to false.
   */
  storedSource?: boolean | StoredSource;
  /**
   * Synonym mappings to use in your index.
   */
  synonyms?: Synonym[];
}
export interface Analyzer {
  /**
   * Name of the custom analyzer.
   * Names must be unique within an index, and may not start with any of the following strings:
   * - lucene.
   * - builtin.
   * - mongodb.
   */
  name: string;
  /**
   * Array containing zero or more character filters.
   */
  charFilters?: CharFilter[];
  tokenizer: Tokenizer;
  /**
   * Array containing zero or more token filters.
   */
  tokenFilters?: TokenFilter[];
}
export interface CharFilter {
  /**
   * Human-readable label that identifies this character filter type.
   */
  type: 'htmlStrip' | 'icuNormalize' | 'mapping' | 'persian';
  /**
   * List that contains the HTML tags to exclude from filtering.
   */
  ignoredTags?: string[];
}
/**
 * Tokenizer to use to create tokens.
 */
export interface Tokenizer {
  type:
    | 'edgeGram'
    | 'keyword'
    | 'nGram'
    | 'regexCaptureGroup'
    | 'regexSplit'
    | 'standard'
    | 'uaxUrlEmail'
    | 'whitespace';
}
export interface TokenFilter {
  /**
   * Human-readable label that identifies this token filter type.
   */
  type:
    | 'asciiFolding'
    | 'daitchMokotoffSoundex'
    | 'edgeGram'
    | 'icuFolding'
    | 'icuNormalizer'
    | 'length'
    | 'lowercase'
    | 'nGram'
    | 'regex'
    | 'reverse'
    | 'shingle'
    | 'snowballStemming'
    | 'stopword'
    | 'trim';
}
export interface MappingsField {
  type?:
    | 'autocomplete'
    | 'boolean'
    | 'date'
    | 'dateFacet'
    | 'document'
    | 'embeddedDocuments'
    | 'geo'
    | 'number'
    | 'numberFacet'
    | 'objectId'
    | 'string'
    | 'stringFacet'
    | 'token'
    | 'uuid';
  analyzer?: string;
  maxGrams?: number;
  minGrams?: number;
  tokenization?: 'edgeGram' | 'rightEdgeGram' | 'nGram';
  foldDiacritics?: boolean;
  dynamic?: boolean;
  fields?: {
    [k: string]: unknown | undefined;
  };
  indexShapes?: boolean;
  representation?: 'int64' | 'double';
  indexIntegers?: boolean;
  indexDoubles?: boolean;
  searchAnalyzer?: string;
  indexOptions?: 'docs' | 'freqs' | 'positions' | 'offsets';
  store?: boolean;
  ignoreAbove?: number;
  multi?: {
    type?: 'string';
    analyzer?: string;
    [k: string]: unknown | undefined;
  };
  norms?: 'include' | 'omit';
}
export interface Synonym {
  name?: string;
  analyzer?:
    | 'lucene.standard'
    | 'lucene.simple'
    | 'lucene.whitespace'
    | 'lucene.keyword'
    | 'lucene.arabic'
    | 'lucene.armenian'
    | 'lucene.basque'
    | 'lucene.bengali'
    | 'lucene.brazilian'
    | 'lucene.bulgarian'
    | 'lucene.catalan'
    | 'lucene.chinese'
    | 'lucene.cjk'
    | 'lucene.czech'
    | 'lucene.danish'
    | 'lucene.dutch'
    | 'lucene.english'
    | 'lucene.finnish'
    | 'lucene.french'
    | 'lucene.galician'
    | 'lucene.german'
    | 'lucene.greek'
    | 'lucene.hindi'
    | 'lucene.hungarian'
    | 'lucene.indonesian'
    | 'lucene.irish'
    | 'lucene.italian'
    | 'lucene.japanese'
    | 'lucene.korean'
    | 'lucene.latvian'
    | 'lucene.lithuanian'
    | 'lucene.morfologik'
    | 'lucene.nori'
    | 'lucene.norwegian'
    | 'lucene.persian'
    | 'lucene.portuguese'
    | 'lucene.romanian'
    | 'lucene.russian'
    | 'lucene.smartcn'
    | 'lucene.sorani'
    | 'lucene.spanish'
    | 'lucene.swedish'
    | 'lucene.thai'
    | 'lucene.turkish'
    | 'lucene.ukrainian'
    | 'nGram'
    | 'edgeGram'
    | 'daitchMokotoffSoundex'
    | 'shingle';
  source?: {
    collection?: string;
    [k: string]: unknown | undefined;
  };
}
