/* eslint-disable */

/**
 * The canonical CV object SigmaCV produces and validates (schemaVersion 2). Derived from the Zod schema; source at https://github.com/BasileChretien/sigmacv.
 */
export interface SigmaCVCanonicalCV {
  schemaVersion: 2;
  id: string;
  owner: {
    orcid: string;
    /**
     * @maxItems 200
     */
    openAlexAuthorIds: string[];
    displayName: string;
    honorific?: string;
    headline?: string;
    summary?: string;
    photo?: string;
    contact?: {
      email?: string;
      phone?: string;
      website?: string;
      location?: string;
    };
    /**
     * @maxItems 20
     */
    links?:
      | []
      | [
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ]
      | [
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          },
          {
            label: string;
            url: string;
          }
        ];
    personal?: {
      phoneticName?: string;
      dateOfBirth?: string;
      gender?: string;
      nationality?: string;
      address?: string;
    };
    metrics?: {
      h_index?: number;
      i10_index?: number;
      works_count?: number;
      cited_by_count?: number;
      fwci_mean?: number;
      fwci_n?: number;
      top10pct_share?: number;
      rcr_mean?: number;
      rcr_n?: number;
      '2yr_mean_citedness'?: number;
    };
    countsByYear?: {
      year: number;
      works: number;
      citations: number;
    }[];
    wikidataUri?: string;
    /**
     * @maxItems 20
     */
    wikidataSameAs?:
      | []
      | [string]
      | [string, string]
      | [string, string, string]
      | [string, string, string, string]
      | [string, string, string, string, string]
      | [string, string, string, string, string, string]
      | [string, string, string, string, string, string, string]
      | [string, string, string, string, string, string, string, string]
      | [string, string, string, string, string, string, string, string, string]
      | [string, string, string, string, string, string, string, string, string, string]
      | [string, string, string, string, string, string, string, string, string, string, string]
      | [string, string, string, string, string, string, string, string, string, string, string, string]
      | [string, string, string, string, string, string, string, string, string, string, string, string, string]
      | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
      | [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ]
      | [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ]
      | [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ]
      | [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ]
      | [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ]
      | [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ];
  };
  display: {
    template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
    cslStyle?: string;
    customStyle?: {
      id: string;
      title: string;
      xml: string;
    };
    locale?: string;
    highlightSelf?: boolean;
    highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
    cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
    showMetrics?: boolean;
    /**
     * @maxItems 100
     */
    metrics?: string[];
    showCharts?: boolean;
    showOpenAccess?: boolean;
    showAuthorRole?: boolean;
    showCitationCounts?: boolean;
    showProvenance?: boolean;
    peerReviewedOnly?: boolean;
    countLetters?: boolean;
    publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
    publicationsLimit?: number;
    excludedItems?: {
      /**
       * @maxItems 10000
       */
      [k: string]: string[] | undefined;
    };
    /**
     * @maxItems 20000
     */
    dismissedDuplicates?: string[];
    sectionsCustomized?: boolean;
    showAuthorshipTable?: boolean;
    /**
     * @maxItems 50
     */
    authorshipRoles?: string[];
    accentColor?: string;
    fontPairing?: 'serif' | 'sans' | 'palatino';
    density?: 'comfortable' | 'compact';
    publicContact?: {
      email?: boolean;
      phone?: boolean;
      location?: boolean;
    };
    publicAttribution?: boolean;
  };
  /**
   * @maxItems 60
   */
  sections: {
    id: string;
    type:
      | 'publications'
      | 'preprints'
      | 'datasets'
      | 'positions'
      | 'education'
      | 'conference'
      | 'awards'
      | 'talks'
      | 'teaching'
      | 'supervision'
      | 'service'
      | 'peer-review'
      | 'editorial'
      | 'grants'
      | 'clinical-trials'
      | 'patents'
      | 'narrative-knowledge'
      | 'narrative-individuals'
      | 'narrative-community'
      | 'narrative-society'
      | 'statement'
      | 'skills'
      | 'languages'
      | 'references'
      | 'other';
    title: string;
    visible: boolean;
    order: number;
    /**
     * @maxItems 10000
     */
    items: {
      id: string;
      source:
        | 'openalex'
        | 'orcid'
        | 'oep'
        | 'datacite'
        | 'crossref'
        | 'openaire'
        | 'dblp'
        | 'ukri'
        | 'nih'
        | 'nsf'
        | 'clinicaltrials'
        | 'ctis'
        | 'ictrp'
        | 'epo'
        | 'derived'
        | 'manual';
      sourceId: string;
      csl?: {
        id: string;
        type: string;
        title?: string;
        author?: {
          family?: string;
          given?: string;
          literal?: string;
          'dropping-particle'?: string;
          'non-dropping-particle'?: string;
          suffix?: string;
          [k: string]: unknown | undefined;
        }[];
        editor?: {
          family?: string;
          given?: string;
          literal?: string;
          'dropping-particle'?: string;
          'non-dropping-particle'?: string;
          suffix?: string;
          [k: string]: unknown | undefined;
        }[];
        issued?: {
          'date-parts'?: (number | string)[][];
          raw?: string;
          literal?: string;
          [k: string]: unknown | undefined;
        };
        'container-title'?: string;
        'collection-title'?: string;
        publisher?: string;
        'publisher-place'?: string;
        volume?: string;
        issue?: string;
        page?: string;
        number?: string;
        DOI?: string;
        URL?: string;
        ISSN?: string | string[];
        ISBN?: string;
        abstract?: string;
        language?: string;
      };
      displayText?: string;
      displayTextOverride?: string;
      included: boolean;
      notMine?: boolean;
      notMineAssertedAt?: string;
      notMineReason?: 'different-person' | 'duplicate' | 'wrong-field' | 'other';
      order: number;
      authoredBySelf: boolean;
      /**
       * @maxItems 100
       */
      selfNameVariants: string[];
      meta: {
        year?: number;
        type?: string;
        doi?: string;
        citedByCount?: number;
        fwci?: number;
        topDecile?: boolean;
        oaStatus?: string;
        oaIsOpen?: boolean;
        license?: string;
        pmid?: string;
        rcr?: number;
        rorId?: string;
        institution?: string;
        funderId?: string;
        funderName?: string;
        awardId?: string;
        lastVerifiedAt?: string;
        authorRole?: string;
        authorCount?: number;
        authorPosition?: number;
        isCorresponding?: boolean;
        matchBasis?: 'orcid' | 'openalex-id' | 'both' | 'claimed';
        claimed?: boolean;
        peerReviewed?: boolean;
        enriched?: boolean;
        reviewFlag?: 'orcid-conflict' | 'name-matched' | 'orcid-doi' | 'duplicate';
        duplicateOf?: {
          itemId: string;
          tier?: 'exact' | 'related' | 'strong' | 'weak';
          relationship?:
            | 'same-work'
            | 'preprint-of'
            | 'published-version-of'
            | 'version-of'
            | 'translation-of'
            | 'erratum-of';
          groupId: string;
        };
      };
    }[];
    body?: string;
  }[];
  /**
   * @maxItems 20
   */
  presets?:
    | []
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ]
    | [
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        },
        {
          id: string;
          name: string;
          display: {
            template?: 'classic' | 'modern' | 'sidebar' | 'ats' | 'rirekisho';
            cslStyle?: string;
            customStyle?: {
              id: string;
              title: string;
              xml: string;
            };
            locale?: string;
            highlightSelf?: boolean;
            highlightStyle?: 'accent' | 'bold' | 'underline' | 'accent-underline';
            cvLicense?: 'none' | 'CC0-1.0' | 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'all-rights-reserved';
            showMetrics?: boolean;
            /**
             * @maxItems 100
             */
            metrics?: string[];
            showCharts?: boolean;
            showOpenAccess?: boolean;
            showAuthorRole?: boolean;
            showCitationCounts?: boolean;
            showProvenance?: boolean;
            peerReviewedOnly?: boolean;
            countLetters?: boolean;
            publicationOrder?: 'custom' | 'citations' | 'year-desc' | 'year-asc';
            publicationsLimit?: number;
            excludedItems?: {
              /**
               * @maxItems 10000
               */
              [k: string]: string[] | undefined;
            };
            /**
             * @maxItems 20000
             */
            dismissedDuplicates?: string[];
            sectionsCustomized?: boolean;
            showAuthorshipTable?: boolean;
            /**
             * @maxItems 50
             */
            authorshipRoles?: string[];
            accentColor?: string;
            fontPairing?: 'serif' | 'sans' | 'palatino';
            density?: 'comfortable' | 'compact';
            publicContact?: {
              email?: boolean;
              phone?: boolean;
              location?: boolean;
            };
            publicAttribution?: boolean;
          };
          sectionVisibility?: {
            [k: string]: boolean | undefined;
          };
        }
      ];
  provenance: {
    generatedAt: string;
    lastSyncedAt?: string;
    sources: (
      | 'openalex'
      | 'orcid'
      | 'oep'
      | 'crossref'
      | 'datacite'
      | 'openaire'
      | 'dblp'
      | 'ukri'
      | 'nih'
      | 'nsf'
      | 'clinicaltrials'
      | 'ctis'
      | 'ictrp'
      | 'epo'
      | 'ror'
      | 'wikidata'
      | 'derived'
      | 'manual'
    )[];
  };
}
