/* eslint-disable */

/**
 * publiccode.yml is a metadata standard for repositories containing software developed or acquired by the Public Administration, aimed at making them easily discoverable and thus reusable by other entities.
 *
 * By including a publiccode.yml file in the root of a repository and populating it with information about the software, technicians and civil servants can evaluate it. Automatic indexing tools can also be built, since the format is easily readable by both humans and machines.
 *
 * publiccode.yml is mandatory for all public software developed in Italy according to the national guidelines; this enables the Developers Italia crawler to build the national software catalog. The standard is designed to be interoperable internationally. Country-specific sections are deprecated in version 0.7 in favour of the generic supports and organisation keys.
 */
export interface JSONSchemaForPubliccodeYml {
  /**
   * The publiccode.yml specification version this file adheres to.
   */
  publiccodeYmlVersion:
    | '0'
    | '0.2'
    | '0.2.0'
    | '0.2.1'
    | '0.2.2'
    | '0.3'
    | '0.3.0'
    | '0.4'
    | '0.4.0'
    | '0.5'
    | '0.5.0'
    | '0.6'
    | '0.6.0'
    | '0.7'
    | '0.7.0';
  /**
   * The (short) public name of the software, as most people usually refer to it. If the software has both an internal code name and a commercial name, use the commercial name. It can be localised in the description section.
   */
  name: string;
  /**
   * The name of the suite to which the software belongs.
   */
  applicationSuite?: string;
  /**
   * A unique identifier for this software: a URL to the source code repository (git, svn, ...) where it is published. Prefer HTTP/HTTPS URLs that do not require authentication, if the repository supports multiple protocols.
   *
   * Forks meant to contribute upstream should not change this value, so parsers can skip technical forks. A fork meant to be maintained separately from the original should change it, to become a distinct project.
   */
  url: string;
  /**
   * A human-readable landing page, useful when url only serves source code to a source control client rather than a browsable page. Ideally where a "Go to the application source code" button would lead. Can also point to a page offering an automated installer download.
   */
  landingURL?: string;
  /**
   * The URL(s) of the original project(s), if this software is a variant or fork of another software. Its presence identifies this software as descending from the specified repositories.
   */
  isBasedOn?: string | string[];
  /**
   * The latest stable version number of the software. It is a display only string; parsers should not assume semantic versioning or any other specific format.
   */
  softwareVersion?: string;
  /**
   * The date the latest version was released.
   */
  releaseDate?: string;
  /**
   * The path to the logo of the software. Vector formats (SVG or SVGZ) are preferred, but PNG is also accepted. It can be a relative path from the repository root or an absolute URL to the raw file, but the file must reside in the same repository as this publiccode.yml.
   */
  logo?: string;
  /**
   * @deprecated
   * DEPRECATED. A monochromatic (black) logo. The logo should be in vector format; raster formats are only allowed as a fallback. In this case, they should be transparent PNGs, minimum 1000px wide. The key value can be the relative path to the file starting from the root of the repository, or it can be an absolute URL pointing to the raw logo. In both cases, the file must reside inside the same repository where the publiccode.yml file is stored.
   */
  monochromeLogo?: string;
  /**
   * @deprecated
   * DEPRECATED. A list of Media Types (MIME Types) as mandated in RFC 6838 which the application can handle as input.
   *
   * In case the software does not support any input, you can skip this field or use application/x.empty.
   */
  inputTypes?: string[];
  /**
   * @deprecated
   * DEPRECATED. A list of Media Types (MIME Types) as mandated in RFC 6838 which the application can handle as output.
   *
   * In case the software does not support any output, you can skip this field or use application/x.empty.
   */
  outputTypes?: string[];
  /**
   * The platforms that users use to access and operate the software, rather than the platform the software itself runs on. Use predefined values if possible.
   */
  platforms: string | [string, ...string[]];
  /**
   * A list of categories that can be used to describe the software and can help build catalogs of open software.
   */
  categories?: (
    | 'accounting'
    | 'agile-project-management'
    | 'applicant-tracking'
    | 'application-development'
    | 'appointment-scheduling'
    | 'backup'
    | 'billing-and-invoicing'
    | 'blog'
    | 'budgeting'
    | 'business-intelligence'
    | 'business-process-management'
    | 'cad'
    | 'call-center-management'
    | 'cloud-management'
    | 'collaboration'
    | 'communications'
    | 'compliance-management'
    | 'contact-management'
    | 'content-management'
    | 'crm'
    | 'customer-service-and-support'
    | 'data-analytics'
    | 'data-collection'
    | 'data-visualization'
    | 'design'
    | 'design-system'
    | 'digital-asset-management'
    | 'digital-citizenship'
    | 'document-management'
    | 'donor-management'
    | 'e-commerce'
    | 'e-signature'
    | 'educational-content'
    | 'email-management'
    | 'email-marketing'
    | 'employee-management'
    | 'enterprise-project-management'
    | 'enterprise-social-networking'
    | 'erp'
    | 'event-management'
    | 'facility-management'
    | 'feedback-and-reviews-management'
    | 'financial-reporting'
    | 'fleet-management'
    | 'fundraising'
    | 'gamification'
    | 'geographic-information-systems'
    | 'grant-management'
    | 'graphic-design'
    | 'help-desk'
    | 'hr'
    | 'ide'
    | 'identity-management'
    | 'instant-messaging'
    | 'integrated-library-system'
    | 'inventory-management'
    | 'it-asset-management'
    | 'it-development'
    | 'it-management'
    | 'it-security'
    | 'it-service-management'
    | 'knowledge-management'
    | 'learning-management-system'
    | 'marketing'
    | 'mind-mapping'
    | 'mobile-marketing'
    | 'mobile-payment'
    | 'network-management'
    | 'office'
    | 'online-booking'
    | 'online-community'
    | 'payment-gateway'
    | 'payroll'
    | 'predictive-analysis'
    | 'procurement'
    | 'productivity-suite'
    | 'project-collaboration'
    | 'project-management'
    | 'property-management'
    | 'real-estate-management'
    | 'regulations-and-directives'
    | 'remote-support'
    | 'resource-management'
    | 'sales-management'
    | 'seo'
    | 'service-desk'
    | 'social-media-management'
    | 'survey'
    | 'talent-management'
    | 'task-management'
    | 'taxes-management'
    | 'test-management'
    | 'time-management'
    | 'time-tracking'
    | 'translation'
    | 'video-conferencing'
    | 'video-editing'
    | 'visitor-management'
    | 'voip'
    | 'warehouse-management'
    | 'web-collaboration'
    | 'web-conferencing'
    | 'website-builder'
    | 'whistleblowing'
    | 'workflow-management'
    | 'other'
  )[];
  /**
   * The names of prominent public administrations known to be using this software, serving as testimonials. Parsers are encouraged to enrich this list with independently obtained signals of usage, such as forks owned by an administration.
   */
  usedBy?: string[];
  /**
   * A link to a public roadmap of the software.
   */
  roadmap?: string;
  developmentStatus: 'concept' | 'development' | 'beta' | 'stable' | 'obsolete';
  softwareType:
    | 'standalone/mobile'
    | 'standalone/iot'
    | 'standalone/desktop'
    | 'standalone/web'
    | 'standalone/backend'
    | 'standalone/other'
    | 'addon'
    | 'library'
    | 'configurationFiles';
  /**
   * A list of standards, regulations, frameworks or systems that the software supports or complies with.
   */
  supports?: {
    /**
     * An identifier for the supported standard, regulation, framework or system. It is either a known alias in the form alias:<name>, or any other valid URI referencing the resource directly.
     */
    id: (
      | (
          | 'alias:gdpr'
          | 'alias:eidas'
          | 'alias:nis2'
          | 'alias:cra'
          | 'alias:spid'
          | 'alias:cie'
          | 'alias:anpr'
          | 'alias:pagopa'
          | 'alias:io'
        )
      | {
          [k: string]: unknown | undefined;
        }
    ) &
      string;
  }[];
  intendedAudience?: {
    /**
     * Countries explicitly included in the intended audience, i.e. whose processes, technologies or laws the software explicitly claims compliance with. Uses uppercase ISO 3166-1 alpha-2 codes; lowercase codes are deprecated but still accepted.
     */
    countries?: ({
      [k: string]: unknown | undefined;
    } & string)[];
    /**
     * Countries explicitly marked as NOT supported, for instance when the software conflicts with a specific law, process or technology. Uses uppercase ISO 3166-1 alpha-2 codes; lowercase codes are deprecated but still accepted.
     */
    unsupportedCountries?: ({
      [k: string]: unknown | undefined;
    } & string)[];
    /**
     * Tags related to the field of application of the software.
     */
    scope?: (
      | 'agriculture'
      | 'culture'
      | 'defence'
      | 'education'
      | 'emergency-services'
      | 'employment'
      | 'energy'
      | 'environment'
      | 'finance-and-economic-development'
      | 'foreign-affairs'
      | 'government'
      | 'healthcare'
      | 'infrastructures'
      | 'justice'
      | 'local-authorities'
      | 'manufacturing'
      | 'research'
      | 'science-and-technology'
      | 'security'
      | 'society'
      | 'sport'
      | 'tourism'
      | 'transportation'
      | 'welfare'
    )[];
  };
  /**
   * A general, user-visible description of the software, for instance to build a web page describing it. Since the content is written in a specific language, specify the language as the subsection name, using an IETF BCP 47 language tag. The primary language subtag cannot be omitted.
   */
  description: {
    [k: string]: unknown | undefined;
  };
  legal: {
    /**
     * The license under which the software is distributed, as a valid SPDX expression referring to one or more open source licenses.
     */
    license: string;
    /**
     * The entity that owns the copyright on most of the code in the repository, normally the one reported at the top of most files. Multiple owners, or an informal group (e.g. "Linus Torvalds and all Linux contributors"), can be listed as an English sentence. Omit if there is no main copyright owner; point to legal/authorsFile instead if the repo has an authors file.
     */
    mainCopyrightOwner?: string;
    /**
     * @deprecated
     * DEPRECATED. This string describes the entity that owns this repository; this might or might not be the same entity who owns the copyright on the code itself. Use organisation/name instead.
     */
    repoOwner?: string;
    /**
     * @deprecated
     * DEPRECATED. Some open-source software identify copyright holders through a file listing all entities that own the copyright. This key refers to that file using a path relative to the root of the repository.
     */
    authorsFile?: string;
  };
  /**
   * Information on the maintenance status of the software, useful to evaluate whether it is actively developed.
   */
  maintenance: {
    [k: string]: unknown | undefined;
  };
  /**
   * An overview of the localisation features of the software.
   */
  localisation: {
    /**
     * If true, the software has infrastructure in place or is otherwise designed to be multilingual. It does not need to be available in more than one language.
     */
    localisationReady: boolean;
    /**
     * If present, this is the list of languages in which the software is available. Of course, this list will contain at least one language. The primary language subtag cannot be omitted, as mandated by the BCP 47.
     *
     * @minItems 1
     */
    availableLanguages: [string, ...string[]];
  };
  /**
   * An overview of the system-level dependencies required to install and use this software, such as a database. Do not list source code level dependencies (e.g. software libraries); focus only on runtime and system-level dependencies that must be installed and maintained separately.
   */
  dependsOn?: {
    /**
     * Runtime dependencies distributed under an open source license.
     */
    open?: Dependency[];
    /**
     * Runtime dependencies distributed under a proprietary license.
     */
    proprietary?: Dependency[];
    /**
     * Hardware dependencies that must be owned to use the software.
     */
    hardware?: Dependency[];
  };
  organisation?: Organisation;
  /**
   * A list of organisations that are currently known to be funding the development of this software.
   */
  fundedBy?: FundingOrganisation[];
  IT?: IT;
  /**
   * @deprecated
   * DEPRECATED. Use the uppercase IT country code. The entire country-specific section will be removed in publiccode.yml 1.0.
   */
  it?: IT;
}
export interface Dependency {
  /**
   * The name of the dependency (e.g. MySQL, NFC Reader)
   */
  name: string;
  /**
   * The first compatible version
   */
  versionMin?: number | string;
  /**
   * The latest compatible version
   */
  versionMax?: number | string;
  /**
   * The only major version for which the software is compatible. It assumes compatibility with all patches and bugfixes later applied to this version.
   */
  version?: number | string;
  /**
   * Whether the dependency is optional or mandatory
   */
  optional?: boolean;
}
/**
 * The organisation publishing the software.
 */
export interface Organisation {
  /**
   * The canonical name of the organisation publishing the software.
   */
  name?: string;
  /**
   * The organisation publishing the software as a stable resolvable URI or a persistent identifier.
   */
  uri: string;
}
export interface FundingOrganisation {
  /**
   * The name of the organisation funding the software development.
   */
  name: string;
  /**
   * The URI identifying the organisation.
   */
  uri?: string;
}
/**
 * @deprecated
 * DEPRECATED. Country-specific sections will be removed in publiccode.yml 1.0. Use supports for compliance and integrations, and organisation for the publishing administration.
 */
export interface IT {
  /**
   * @deprecated
   * DEPRECATED together with the entire Italian section. Version 1.0 is used by current files; 0.2 is accepted for compatibility with older publiccode.yml versions.
   */
  countryExtensionVersion: '0.2' | '1.0';
  /**
   * @deprecated
   * DEPRECATED. This section contains keys for declaring compliance with Italian legislation. Use supports where an appropriate identifier or alias exists.
   */
  conforme?: {
    /**
     * @deprecated
     * DEPRECATED. If true, the software is compliant with the former Italian design guidelines.
     */
    lineeGuidaDesign?: boolean;
    /**
     * @deprecated
     * DEPRECATED. If true, the software is compliant with the former Italian interoperability guidelines.
     */
    modelloInteroperabilita?: boolean;
    /**
     * @deprecated
     * DEPRECATED. If true, the software is compliant with the Italian minimum ICT security measures for Public Administrations.
     */
    misureMinimeSicurezza?: boolean;
    /**
     * @deprecated
     * DEPRECATED. If true, the software complies with the GDPR. Use supports with alias:gdpr instead.
     */
    gdpr?: boolean;
  };
  /**
   * @deprecated
   * DEPRECATED. Use supports with the corresponding platform alias instead.
   */
  piattaforme?: {
    /**
     * @deprecated
     * DEPRECATED. If true, the software interfaces with SPID. Use supports with alias:spid instead.
     */
    spid?: boolean;
    /**
     * @deprecated
     * DEPRECATED. If true, the software interfaces with the Italian electronic identity card. Use supports with alias:cie instead.
     */
    cie?: boolean;
    /**
     * @deprecated
     * DEPRECATED. If true, the software interfaces with ANPR. Use supports with alias:anpr instead.
     */
    anpr?: boolean;
    /**
     * @deprecated
     * DEPRECATED. If true, the software interfaces with pagoPA. Use supports with alias:pagopa instead.
     */
    pagopa?: boolean;
    /**
     * @deprecated
     * DEPRECATED. If true, the software interfaces with the IO app. Use supports with alias:io instead.
     */
    io?: boolean;
  };
  /**
   * @deprecated
   * DEPRECATED. Use organisation to identify the publishing administration.
   */
  riuso?: {
    /**
     * @deprecated
     * DEPRECATED. This key represents the administration code in the Italian Public Administration index. Use organisation/uri instead.
     */
    codiceIPA?: string;
  };
}
