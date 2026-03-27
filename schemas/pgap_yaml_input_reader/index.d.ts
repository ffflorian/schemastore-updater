/* eslint-disable */

/**
 * The value of this keyword MUST be a URI (containing a scheme) and this URI MUST be normalized.
 */
export type Schema = string;
/**
 * Name of the project that generated the genome assembly
 */
export type Consortium = string;
/**
 * Appears in the COMMENT section of each GenBank sequence record.
 */
export type FreeTextCommentAboutTheGenomeAssembly = string;
/**
 * NCBI internal flag used for testing.
 */
export type Reserved = boolean;
/**
 * Sequence Read Archive (SRA) accession for the run (with SRR, ERR or DRR prefix)
 */
export type SRAAccession = string;
/**
 * Sequence reads used to build the assembly
 */
export type SRAAssemblyData = {
  accession: SRAAccession;
}[];
export type FirstName = string;
export type LastName = string;
export type FirstLetterOfMiddleName = string;
/**
 * Optional, but include if intending to submit to GenBank. Authors can be different from the contact.
 */
export type AuthorSOfTheGenomeAssembly = {
  author: {
    first_name: FirstName;
    last_name: LastName;
    middle_initial?: FirstLetterOfMiddleName;
  };
}[];
export type BioProjectIDPRJXXForTheProjectIfAvailable = string;
export type BioSampleIDSAMXXXForTheSequencedSampleIfAvailable = string;
export type StateOrRegion = string;
export type FaxNumber = string;
export type City = string;
export type Country = string;
export type DepartmentOrDivisionSubmittingTheGenomeAssembly = string;
export type EmailAddress = string;
export type OrganizationOrConsortiumSubmittingTheGenomeAssembly = string;
export type PhoneNumber = string;
export type PostalCode = string;
export type StreetAddress = string;
export type ClassOfInputType = string;
export type LocationOfInputFile = string;
/**
 * One to 9-letter prefix to use for naming genes on this genome assembly. If an official locus tag prefix was already reserved from an INSDC organization (GenBank, ENA or DDBJ) for the given BioSample and BioProject pair, provide here. Otherwise, provide a string of your choice. If no value is provided, the prefix 'pgaptmp' will be used. See more details in this Note about locus tags at: https://github.com/ncbi/pgap/wiki/Input-Files#Note-about-locus-tags
 */
export type LocusTagPrefix = string;
/**
 * Strain of the sequenced organism
 */
export type Strain = string;
/**
 * Binomial name or, if the species is unknown, genus for the sequenced organism. This identifier must be valid in NCBI Taxonomy. See Taxonomy information for how to find out if the name is valid: https://github.com/ncbi/pgap/wiki/Input-Files#Taxonomy-information
 */
export type GenusAndSpecies = string;
export type AuthorS = {
  author?: {
    first_name: FirstName;
    last_name: LastName;
    middle_initial?: FirstLetterOfMiddleName;
  };
}[];
/**
 * Can be only one of: published, in-press, unpublished
 */
export type PublicationStatus = 'published' | 'in-press' | 'unpublished';
export type PubMedIDForThePublication = number & string;
export type Title = string;
export type PublicationDescribingTheGenomeAssembly = {
  publication: {
    authors?: AuthorS;
    status?: PublicationStatus;
    pmid?: PubMedIDForThePublication;
    title?: Title;
  };
}[];
/**
 * Possible values are linear or circular. Circular means that the first base in the sequence is adjacent to the last base. Please provide the topology in the metadata YAML file only if it is applicable to ALL sequences in the fasta file. If some sequences in the assembled genome are circular and others linear, include the topology in the definition line of each sequence in the fasta file with the tag value pair [topology=circular] or [topology=linear], after the SeqID and a space (e.g. >seq1 [topology=circular]). If the topology is provided in neither the metadata YAML nor the fasta file, the sequences will be presumed to be linear.
 */
export type TopologyOfTheSequencesIncludedInTheFastaFile = string;
/**
 * Possible values are chromosome or plasmid. Please provide the location in the metadata YAML file only if it is applicable to ALL sequences in the fasta file. If some sequences in the assembled genome are chromosomes and others plasmids, include the location in the definition line of each sequence in the fasta file with the tag value pair [location=chromosome] or [location=plasmid], after the SeqID and a space (e.g. >seq1 [location=plasmid]). In plasmid case add [plasmid-name=<plasmidname>]. If the location is provided in neither the metadata YAML nor the fasta file, the sequences will be presumed to be chromosome. Note: since 2021 releases of PGAPx this will affect noticeably the annotation on the molecule
 */
export type LocationOfTheSequencesIncludedInTheFastaFile = string;

/**
 * NCBI Prokaryotic Genome Annotation Pipeline (PGAP) input metadata (submol) JSON/YAML configuration file
 */
export interface NCBIPGAPSubmolYAML {
  $schema?: Schema;
  consortium?: Consortium;
  comment?: FreeTextCommentAboutTheGenomeAssembly;
  tp_assembly?: Reserved;
  sra?: SRAAssemblyData;
  authors: AuthorSOfTheGenomeAssembly;
  bioproject?: BioProjectIDPRJXXForTheProjectIfAvailable;
  biosample?: BioSampleIDSAMXXXForTheSequencedSampleIfAvailable;
  contact_info: SubmitterContactInformation;
  fasta?: {
    class?: ClassOfInputType;
    location?: LocationOfInputFile;
  };
  locus_tag_prefix?: LocusTagPrefix;
  organism?: {
    strain?: Strain;
    genus_species?: GenusAndSpecies;
  };
  publications?: PublicationDescribingTheGenomeAssembly;
  topology?: TopologyOfTheSequencesIncludedInTheFastaFile;
  location?: LocationOfTheSequencesIncludedInTheFastaFile;
}
/**
 * Optional, but include if intending to submit to GenBank. The main contact for this genome assembly.
 */
export interface SubmitterContactInformation {
  state?: StateOrRegion;
  fax?: FaxNumber;
  city: City;
  country: Country;
  department: DepartmentOrDivisionSubmittingTheGenomeAssembly;
  email: EmailAddress;
  first_name: FirstName;
  middle_initial?: FirstLetterOfMiddleName;
  last_name: LastName;
  organization: OrganizationOrConsortiumSubmittingTheGenomeAssembly;
  phone?: PhoneNumber;
  postal_code: PostalCode;
  street: StreetAddress;
}
