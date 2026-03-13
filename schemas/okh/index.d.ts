/* eslint-disable */

/**
 * This is a JSON-Schema which can validate an 'okh.toml' file, which holds an Open Source Hardware (OSH) projects Open Know-How (OKH) meta-data.
 */
export type Manifest = {
  [k: string]: unknown | undefined;
} & {
  /**
   * Link to OKH JSON-Schema
   */
  $schema?: 'https://json.schemastore.org/okh.schema.json' | 'https://w3id.org/oseg/schema/okh.schema.json';
  /**
   * reference to one or multiple valid attestation(s) that the documentation is complete and fully qualifies as open source hardware;\
   * issuing conformity assessment bodies according to DIN SPEC 3105-2:\
   * - [Open Hardware Observatory](https://en.oho.wiki/wiki/Request_certification_for_your_project)\
   * - [Open Source Ecology Germany](https://gitlab.opensourceecology.de/verein/projekte/cab/CAB)\
   * - [OSHWA certification programme](https://certification.oshwa.org/)
   */
  attestation?: (RelPathOrWebUrl & RelPathOrWebUrl1) | (RelPathOrWebUrl & RelPathOrWebUrl1)[];
  auxiliary?: Auxiliary;
  bom?: Bom;
  /**
   * repo-relative path to the contribution guide
   */
  'contribution-guide'?: (WebUrl | RelPath) & string;
  /**
   * patent class identifier of the Cooperative Patent Classification that describes best the field of technology of the OSH module.\
   * Get it from here: <https://worldwide.espacenet.com/classification>
   */
  'cpc-patent-class'?: string | string[];
  /**
   * IETF BCP 47 language tag(s) for the language(s) in which the documentation is written
   */
  'documentation-language'?: Language[] | Language;
  /**
   * ODRL-ID representing the development stage of the documentation; get it from: <https://w3id.org/oseg/ont/otrl>
   */
  'documentation-readiness-level'?:
    | DocumentationProcessCommenced
    | CollaborativeDocumentationInProgress
    | FullDocumentationPublished
    | FullDocumentationPublishedAudited
    | FullDocumentationForProductQualification;
  export?: Export;
  forkOf?: WebUrl;
  /**
   * functional description, e.g. what it actually does, what problem it solves, for whom, under which conditions etc.\
   * So if you wish that someone finds & uses your OSH specifically e.g. for COVID-19-crisis response, include relevant keywords in this field
   */
  function: string;
  image?: ImageMulti;
  /**
   * An SPDX license _expression
   * (see: <https://spdx.github.io/spdx-spec/v2-draft/SPDX-license-expressions/>),
   * usually a single SPDX license ID
   * (see complete list: <https://spdx.org/licenses/>),
   * or a combination of those,
   * combined with AND or OR.
   * If your license is not SPDX registered (yet),
   * use a custom string prefixed with 'LicenseRef-',
   * for example 'LicenseRef-MyVeryOwnLicense-1.3';
   * please use the 'SPDX identifier' from
   * <https://scancode-licensedb.aboutcode.org/>,
   * if your license is there but not SPDX registered.
   * Use 'LicenseRef-NOASSERTION' if no license is specified,
   * 'LicenseRef-NONE' if no license is specified
   * (which usually means: all rights reserved),
   * or 'LicenseRef-AllRightsReserved' or similar
   * for projects clearly indicating that they are proprietary.
   */
  license: string;
  /**
   * organization/individual behind the hardware design (holder of intellectual property)
   */
  licensor: StringMulti | Agent[] | Agent;
  /**
   * URL or repo-relative path to manufacturing instructions; multiple inputs possible (with one entry each)
   */
  'manufacturing-instructions'?: (RelPathOrWebUrl & RelPathOrWebUrl1) | (RelPathOrWebUrl & RelPathOrWebUrl1)[];
  mass?: Mass;
  /**
   * working title of the OSH Module or Part
   */
  name: string;
  /**
   * version of OKH specification the OSH projects metadata follows (different version → different data fields in this file). In the past this was 'OKH-LOSHv1.0' for a long time; now it should be a minor version release of the OKH spec, e.g. '2.4'.
   */
  okhv: 'OKH-LOSHv1.0' | '2.3' | '2.4';
  /**
   * organization of the licensor or that represents (some of) the contributors of to project
   */
  organization?: StringMulti | Organization | Organization[];
  'outer-dimensions'?: OuterDimensions;
  /**
   * physical component(s) of this open source hardware module, for which technical documentation (design files etc.) is available under a free/open license
   */
  part?: Part[];
  /**
   * The DOI(s) or web URL(s) of one or multiple associated publication(s)
   */
  publication?: DoiOrWebUrl | DoiOrWebUrl[];
  rdf?: RdfNamespace;
  /**
   * repo-relative path (or absolute HTTP(S) URL) to to the corresponding ReadMe, which is the (human) entry-point into (the sources of) an OSH project
   */
  readme?: (RelPathOrWebUrl & RelPathOrWebUrl1) | (RelPathOrWebUrl & RelPathOrWebUrl1)[];
  /**
   * URL or repo local path to the release package of this version of the OSH module
   */
  release?: (WebUrl | RelPath) & string;
  /**
   * URL to the (human browsable) place where development happens;
   * typically a (git) repository or Wiki page.
   * Following this link, people should be able to contribute to the development:
   * reporting issues, suggesting changes, connecting to the team etc.
   */
  repo: string;
  /**
   * associated software package(s) used to operate this piece of open source hardware
   */
  software?: Software[];
  /**
   * relative or absolute path to source file (e.g. native CAD file);\
   * multiple inputs possible (with one entry each)
   */
  source?: (RelPathOrWebUrl & RelPathOrWebUrl1) | (RelPathOrWebUrl & RelPathOrWebUrl1)[];
  /**
   * document-number of the official standard the OSH module complies;\
   * multiple inputs possible (with one entry each)
   */
  'standard-compliance'?: string | string[];
  /**
   * OTRL-ID representing the development stage of the OSH module; get it from: <https://w3id.org/oseg/ont/otrl>
   */
  'technology-readiness-level'?:
    | Ideation
    | Conception
    | Development
    | PrototypingAndTesting
    | ManufacturingDevelopment
    | ProductQualification;
  /**
   * identifier of the applying Technology-specific Documentation Criteria (TsDC) according to DIN SPEC 3105-1 - get it from: <https://w3id.org/oseg/ont/tsdc/core> - multiple inputs possible (with one entry each)
   */
  tsdc?: string | string[];
  /**
   * URL or repo-relative path to user manual
   */
  'user-manual'?: (RelPathOrWebUrl & RelPathOrWebUrl1) | (RelPathOrWebUrl & RelPathOrWebUrl1)[];
  /**
   * version of this Module, preferably following the [semantic versioning-scheme v2.0.0](https://semver.org/#semantic-versioning-200)
   */
  version?: string;
};
export type RelPathOrWebUrl = WebUrl | RelPath;
export type WebUrl = string;
export type RelPath = string;
export type RelPathOrWebUrl1 = string;
/**
 * relative or absolute path to files that are neither source files nor their exports, but still useful in the repository (e.g. KiCAD library files);\
 * multiple inputs possible (with one entry each)
 */
export type Auxiliary = (RelPathOrWebUrl & RelPathOrWebUrl1) | (RelPathOrWebUrl & RelPathOrWebUrl1)[];
/**
 * URL or repo-relative path to the bill of materials
 */
export type Bom = (RelPathOrWebUrl & RelPathOrWebUrl1) | (RelPathOrWebUrl & RelPathOrWebUrl1)[];
/**
 * Language as a BCP 47 language tag
 */
export type Language = string;
/**
 * Published information under free open source license
 */
export type DocumentationProcessCommenced = 'ODRL-1';
/**
 * Provision of documentation files and in editable formats enabling collaboration development
 */
export type CollaborativeDocumentationInProgress = 'ODRL-2';
/**
 * Complete documentation as per DIN SPEC 3105-1
 */
export type FullDocumentationPublished = 'ODRL-3';
/**
 * Public evidence of documentation maturity
 */
export type FullDocumentationPublishedAudited = 'ODRL-3*';
/**
 * Product qualification documents published enabling decentralized commercial distribution
 */
export type FullDocumentationForProductQualification = 'ODRL-4';
/**
 * relative or absolute path to export file (e.g. STEP export of 3D model or PDF export of drawing);\
 * multiple inputs possible (with one entry each)
 */
export type Export = (RelPathOrWebUrl & RelPathOrWebUrl1) | (RelPathOrWebUrl & RelPathOrWebUrl1)[];
export type ImageMulti = Image | Image[];
export type Image = (RelPathOrWebUrl & RelPathOrWebUrl1) | ImageObject;
export type StringMulti = string | string[];
/**
 * A person or organization
 */
export type Agent = Person | Organization;
/**
 * Mass of the part in g (grams).
 */
export type Mass = number;
/**
 * a physical component of an open source hardware module, for which technical documentation (design files etc.) is available under a free/open license
 */
export type Part = {
  auxiliary?: Auxiliary;
  export?: Export;
  image?: ImageMulti;
  mass?: Mass;
  name: Name;
  'outer-dimensions'?: OuterDimensions;
  /**
   * relative or absolute path to source file (e.g. native CAD file);\
   * multiple inputs possible (with one entry each)
   */
  source?: (RelPathOrWebUrl & RelPathOrWebUrl1) | (RelPathOrWebUrl & RelPathOrWebUrl1)[];
  /**
   * identifier of the applying Technology-specific Documentation Criteria (TsDC) according to DIN SPEC 3105-1 - get it from: <https://w3id.org/oseg/ont/tsdc/core> - multiple inputs possible (with one entry each)
   */
  tsdc?: string | string[];
} & Part1;
/**
 * working title of the OSH Module or Part
 */
export type Name = string;
export type Part1 =
  | {
      source: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      export: unknown;
      [k: string]: unknown | undefined;
    };
export type DoiOrWebUrl = Doi | WebUrl;
export type Doi = string;
/**
 * Product idea; needs are identified and initial specifications are defined
 */
export type Ideation = 'OTRL-1';
/**
 * Mature product concept has been formulated
 */
export type Conception = 'OTRL-2';
/**
 * Product model is developed
 */
export type Development = 'OTRL-3';
/**
 * Full functional prototype is built and tested
 */
export type PrototypingAndTesting = 'OTRL-4';
/**
 * Fairly reliable processes identified and characterized
 */
export type ManufacturingDevelopment = 'OTRL-5';
/**
 * Certificate marking conformity assessment or comparable
 */
export type ProductQualification = 'OTRL-6';

/**
 * a single image reference (project relative path or absolute URL), optionally with additional meta-data
 */
export interface ImageObject {
  /**
   * Project relative path or absolute URL linking to the image file
   */
  location: (WebUrl | RelPath) & string;
  /**
   * Human oriented description of what is visible in the image.
   * This matters for example:
   * - for visually impaired or blind people
   * - in case the image is for some reason not available
   * - to put as a caption next to the image
   */
  depicts?: string | LangText | LangText[];
  /**
   * Denotes the slot the image fills within the subject it belongs to.
   * You may also think of it as the 'role' the image plays for its parent.
   * The available slots are predefined,
   * see the [OKH image slots](http://w3id.org/oseg/ont/okhimg#slots);
   * there you will also read about the ability to define custom ones,
   * though you might also consider proposing a new common tag
   * [in an issue](https://github.com/iop-alliance/OpenKnowHow/issues/new).
   * An image can fill multiple slots,
   * but each slot can be filled at most once.
   * This is useful for things like the projects icon,
   * or the left-side view of the 3D model.
   */
  slots?: ((
    | {
        [k: string]: unknown | undefined;
      }
    | (
        | 'icon-main'
        | 'icon-main-bw'
        | 'logo'
        | 'logo-bw'
        | 'model-3d'
        | 'model-from-back'
        | 'model-from-below'
        | 'model-from-front'
        | 'model-from-left'
        | 'model-from-right'
        | 'model-from-above'
        | 'model-main'
        | 'organization-logo'
        | 'organization-logo-bw'
        | 'photo-packaging'
        | 'photo-thing-main'
        | 'social'
        | 'symbol'
      )
  ) &
    string)[];
  /**
   * Links to a tag fit to describe the image.
   * The available tags are predefined,
   * see the [OKH image tags](http://w3id.org/oseg/ont/okhimg#tags);
   * there you will also read about the ability to define custom ones,
   * though you might also consider proposing a new common tag
   * [in an issue](https://github.com/iop-alliance/OpenKnowHow/issues/new).
   * An image can have multiple tags
   * and each tag can be used by multiple images
   * even within a single project.
   */
  tags?: ((
    | {
        [k: string]: unknown | undefined;
      }
    | (
        | 'art'
        | 'assembly'
        | 'bw'
        | 'color'
        | 'diagram'
        | 'drawing'
        | 'gray'
        | 'icon'
        | 'logo'
        | 'model'
        | 'photo'
        | 'screenshot'
      )
  ) &
    string)[];
}
/**
 * a text and the language it is written in
 */
export interface LangText {
  /**
   * the text content
   */
  text: string;
  /**
   * The BCP 47 language tag the content is written in
   */
  language: string;
}
/**
 * A person (alive, dead, undead, or fictional)
 */
export interface Person {
  /**
   * E-Mail of the person
   */
  email?: string;
  /**
   * Full name of the person
   */
  name?: string;
  /**
   * Home-page of the person
   */
  url?: string;
  [k: string]: unknown | undefined;
}
/**
 * An organization such as a school, NGO, corporation, club, etc.
 */
export interface Organization {
  /**
   * E-Mail of the organization
   */
  email?: string;
  /**
   * Name of the organization
   */
  name?: string;
  /**
   * Home-page of the organization
   */
  url?: string;
  [k: string]: unknown | undefined;
}
/**
 * Outer dimensions of the OSH module or part in mm (millimeters), which completely encompass the product.
 */
export interface OuterDimensions {
  depth: number;
  height: number;
  width: number;
}
/**
 * absolute HTTP IRI (ending int '/' or '#') representing the RDF namespace of the triples generated from the manifest, and optionally the name of the prefix
 */
export interface RdfNamespace {
  namespace: string;
  prefix?: string;
}
export interface Software {
  /**
   * unambiguous reference to the installation guide for the corresponding software release
   */
  'installation-guide'?: (WebUrl | RelPath) & string;
  /**
   * unambiguous reference to the software release used for this version of the OSH module
   */
  release: (WebUrl | RelPath) & string;
}
