/* eslint-disable */

/**
 * A detailed specification of all fields in the proposed `POPxf` data format is given below. Each subsection describes the structure, expected data type, and allowed values of the corresponding entries in the `JSON` object. The data type *object* mentioned below refers to a `JSON` object literal and corresponds to a set of key/value pairs representing named subfields. The format is divided into two main components: the `metadata` and `data` fields. An additional `$schema` field is included to specify the version of the `POPxf` `JSON` schema used. All quantities defined in this specification refer to a single datafile. They may be indexed by a superscript $(n)$ with $n \in [1,N]$ to denote quantities in a collection of $N$ datafiles. This is particularly relevant for discussing correlated predictions stored in separate files. Since this specification focuses on the format of a single datafile, we will omit the superscript $(n)$ to keep the notation concise. As a convention, we assume that all dimensionful quantities are given in units of GeV.
 */
export type SpecificationOfFieldsInThePOPxfJSONFormat = {
  [k: string]: unknown | undefined;
} & {
  $schema: $SchemaField;
  metadata: MetadataField;
  data: DataField;
};
/**
 * The `$schema` field allows identifying a `JSON` file as conforming to the `POPxf` format and specifies the version of the `POPxf` `JSON` schema used. It must be set to
 *
 * `"https://json.schemastore.org/popxf-1.0.json"`
 *
 * for files conforming to this version of the specification. The version number will be incremented for future revisions of the `JSON` schema.
 */
export type $SchemaField = 'https://json.schemastore.org/popxf-1.0.json';
/**
 * The `data` field contains the numerical representation of all polynomial terms, which define the polynomials $P_k$ and observables $O_m$. This information is provided in terms of central values of polynomial coefficients $\vec{p}_k$ and observable coefficients $\vec{o}_m$, and uncertainties of observable coefficients $\vec{\sigma}_m$.
 *
 * Each component of $\vec{o}_m$, $\vec{p}_k$, and $\vec{\sigma}_m$ is labelled by a *monomial key*, written as a stringified tuple of model parameters (e.g., Wilson coefficients) defined in `metadata.parameters`. For example, the key `"('C1', 'C2')"` corresponds to the monomial $C_1 C_2$. While the model parameters can be complex numbers, the monomials are defined for the real and imaginary parts of the model parameters (see below) and are therefore strictly real. The format and conventions for monomial keys are as follows:
 *
 * - Each key is a string representation of a Python-style tuple: a comma-separated array of strings enclosed in parentheses.
 * - The length of the tuple is determined by the polynomial degree $d$, as defined by the `metadata` field `polynomial_degree` (default value: $d=2$, i.e. quadratic polynomial, if `polynomial_degree` is omitted). The tuple length equals $d$, unless a real/imaginary tag is included (see below), in which case the length is $d+1$.
 * - The first $d$ entries in the tuple are model parameter names, as defined in the `metadata` field `parameters`. These names must be sorted alphabetically to ensure unique monomial keys (assuming the same sorting rules as Python's `sort()` method which sorts alphabetically according to ASCII or UNICODE-value, where all upper-case letters come before all lower-case letters, and shorter strings take precedence). Empty strings `''` are used to represent constant terms (equivalent to $1$) and to pad monomials of lower degree. For example, for a quadratic polynomial in real parameters (see below for how complex parameters are handled):
 *   - A constant $1$ is written as `"('','')"`,
 *   - A linear term $C_1$ is written as `"('', 'C1')"`,
 *   - A quadratic term $C_1 C_2$ is written as `"('C1', 'C2')"`.
 * - To handle complex parameters, the tuple may optionally include a real/imaginary tag as its final element. This tag consists of `R` (real) and `I` (imaginary) characters, and its length must match the polynomial degree $d$. It indicates whether each parameter refers to its real or imaginary part. For example:
 *   - `"('', 'C1', 'RI')"` corresponds to $\mathrm{Im}(C_1)$;
 *   - `"('C1', 'C2', 'IR')"` corresponds to $\mathrm{Im}(C_1)\mathrm{Re}(C_2)$.
 * - If the real/imaginary tag is omitted, the parameters are assumed to be real. For example:
 *   - `"('', 'C1')"` corresponds to $\mathrm{Re}(C_1)$;
 *   - `"('C1', 'C2')"` corresponds to $\mathrm{Re}(C_1)\mathrm{Re}(C_2)$.
 *
 * These conventions ensure a canonical and unambiguous representation of polynomial terms while offering flexibility in the naming of model parameters. Missing monomials are implicitly treated as having zero coefficients.
 *
 *  The `data` field is a `JSON` object with the following subfields:
 */
export type DataField =
  | {
      observable_central: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      polynomial_central: unknown;
      [k: string]: unknown | undefined;
    };

/**
 * The `metadata` field contains all contextual and structural information required to interpret the numerical predictions. It is a `JSON` object with the following subfields:
 */
export interface MetadataField {
  /**
   * Array of $M$ names identifying each observable $O_m$. Must be an array of unique, non-empty strings, with at least one entry.
   *
   * @minItems 1
   */
  observable_names: [string, ...string[]];
  /**
   * Array of $S$ names identifying each model parameter $C_s$ (e.g., Wilson coefficient names). Must be an array of unique, non-empty strings, with at least one entry. In general, this includes $S_\mathbb{R}$ real-valued and $S_\mathbb{C}$ complex-valued parameters with $S = S_\mathbb{R} + S_\mathbb{C}$. The real-valued parameters and the real and imaginary parts of the complex-valued parameters are used as the $R=S_\mathbb{R} + 2\ S_\mathbb{C}$ independent variables of all polynomial terms and can be grouped together in a real-valued parameter vector $\vec{C}$ of length $R$.
   *
   * @minItems 1
   */
  parameters: [string, ...string[]];
  /**
   * Defines the parameter basis (e.g. an operator basis in an EFT). At least one of the two subfields `wcxf` and `custom` has to be present. If both subfields are present, any element of `parameters` (see above) not belonging to the `wcxf` basis is interpreted as belonging to the `custom` basis. The subfields are defined as follows:
   */
  basis:
    | {
        wcxf: unknown;
        [k: string]: unknown | undefined;
      }
    | {
        custom: unknown;
        [k: string]: unknown | undefined;
      };
  /**
   * *This field is required to express observables as functions of polynomials. It requires the simultaneous presence of `metadata.observable_expressions` and `data.polynomial_central`.*
   *
   * Array of $K$ names identifying the individual polynomials $P_k$ that enter the observable predictions through the functions defined in `metadata.observable_expressions` (see below). Must contain unique, non-empty strings.
   *
   * @minItems 1
   */
  polynomial_names?: [string, ...string[]];
  /**
   * *This field is required to express observables as functions of polynomials. It requires the simultaneous presence of `metadata.polynomial_names` and `data.polynomial_central`.*
   *
   * Defines how each observable is constructed from the named polynomials. Must be an array of $M$ objects, one per observable. The length and order of the array must match those of the `observable_names` field. Each object must contain:
   *
   * @minItems 1
   */
  observable_expressions?: [
    {
      /**
       * An object where each key is a string that is a Python-compatible variable name (used as variable in the `expression` field described below), and each value is a string identifying a polynomial name from `polynomial_names`. For example, `{"num": "polynomial 1", "den": "polynomial 2"}`.
       */
      variables: {
        [k: string]: string | undefined;
      };
      /**
       * A Python-compatible mathematical expression using the variable names defined in `variables`, e.g. `"num/den"`. Standard mathematical functions like `sqrt` or `cos` that are implemented in packages like `numpy` may be used.
       */
      expression: string;
    },
    ...{
      /**
       * An object where each key is a string that is a Python-compatible variable name (used as variable in the `expression` field described below), and each value is a string identifying a polynomial name from `polynomial_names`. For example, `{"num": "polynomial 1", "den": "polynomial 2"}`.
       */
      variables: {
        [k: string]: string | undefined;
      };
      /**
       * A Python-compatible mathematical expression using the variable names defined in `variables`, e.g. `"num/den"`. Standard mathematical functions like `sqrt` or `cos` that are implemented in packages like `numpy` may be used.
       */
      expression: string;
    }[]
  ];
  /**
   * The renormalisation scale in GeV at which the parameter vector $\vec{C}$, the polynomial coefficients ${\vec{p}_k \supset \vec{b}_k, \vec{c}_k, ...}$, and the observable coefficients ${\vec{o}_m \supset \vec{b}_m, \vec{c}_m, ...}$ and their uncertainties $\vec{\sigma}_m$ are defined. The parameter vector $\vec{C}$ that enters a given polynomial $P_k$ or observable $O_m$ has to be given at the same scale at which the polynomial coefficients $\vec{p}_k$ or observable coefficients $\vec{o}_m$ are defined, such that the polynomial or observable itself is scale-independent up to higher-order corrections in perturbation theory.
   *
   * This field can take one of two forms:
   *
   * - **single number**: A common scale $\mu$ at which all polynomial coefficients $\vec p_k$ or observable coefficients $\vec o_m$ are defined.
   *
   *   - If the observables $O_m$ are expressed in terms of polynomials $P_k$, the polynomials are functions of the parameters evolved to the common scale $\mu$:
   *
   *     $$P_k = a_{k} + \vec{C}(\mu) \cdot \vec{b}_{k}(\mu) + \dots\ $$
   *
   *   - If the observables $O_m$ are themselves polynomials, they are themselves functions of the parameters evolved to the common scale $\mu$:
   *
   *     $$O_m = a_m + \vec{C}(\mu) \cdot \vec{b}_m(\mu) + \dots\ $$
   *
   * - **array of numbers**: An array defining separate scales $\mu_k$ of polynomial coefficients $\vec p_k$  if `metadata.polynomial_names` is present, or separate scales $\mu_m$ of observable coefficients $\vec o_m$ if `metadata.polynomial_names` is absent.
   *
   *   - If `metadata.polynomial_names` is present, the observables $O_m$ are expressed in terms of polynomials $P_k$ and each polynomial is a function of the parameters evolved to its corresponding scale $\mu_k$:
   *
   *     $$P_k = a_{k} + \vec{C}(\mu_k) \cdot \vec{b}_{k}(\mu_k) + \dots\ $$
   *
   *     The length and order of the array defining the scales $\mu_k$ must match those of the field `metadata.polynomial_names`. To avoid ambiguities, the following restrictions apply to this case:
   *
   *     - `data.observable_central` must be absent;
   *     - `data.observable_uncertainties` must be absent or only define uncertainties for the parameter-independent terms (i.e. only the SM uncertainties in EFT applications).
   *   - If `metadata.polynomial_names` is absent, the observables $O_m$ are themselves polynomials and each observable is a function of the parameters evolved to its corresponding scale $\mu_m$:
   *
   *     $$O_m = a_m + \vec{C}(\mu_m) \cdot \vec{b}_m(\mu_m) + \dots\ $$
   *
   *     The length and order of the array defining the scales $\mu_m$ must match those of the field `metadata.observable_names`.
   */
  scale: number | [number, ...number[]];
  /**
   * Specifies the maximum degree of polynomial terms included in the expansion. If omitted, the default value is 2 (i.e., quadratic polynomial). Values higher than 2 may be used to represent observables involving higher-order terms in the model parameters. The current implementation of the `JSON` schema defining the data format supports values up to 5. Higher degrees are not prohibited in principle but are currently unsupported to avoid excessively large data structures.
   */
  polynomial_degree?: 1 | 2 | 3 | 4 | 5;
  /**
   * Collects relevant data that may be required by a third party to reproduce the prediction. Each element of the array should be an object that corresponds to a step in the workflow and has three predefined fields: `description`, `tool` and `inputs`, specified below. In addition, any additional fields containing data deemed useful in this context can be included.
   *
   * Schematic example:
   *
   * ```json
   *   "reproducibility": [
   *     {
   *       "description": "Description of the first step",
   *       "tool": { ... },
   *       "inputs": { ... }
   *     },
   *     {
   *       "description": "Description of the second step",
   *       "tool": { ... },
   *       "inputs": { ... }
   *     },
   *     ...
   *   ]
   * ```
   * The predefined fields are as follows:
   *
   * @minItems 1
   */
  reproducibility?: [
    {
      /**
       * Free-form text description of the method and tool used in this step of obtaining the predictions.
       */
      description?: string;
      /**
       * Specifies the numerical values of input parameters used by the tool in producing the numerical values of the polynomial coefficients. Each entry maps an input name (a string) or a group of names (a stringified tuple such as `"('m1','m2')"`) to one of the following:
       */
      inputs?: {
        [k: string]:
          | (
              | number
              | {
                  /**
                   * central value / mean; a single number for a single input name, or an array of numbers for a group of input names;
                   */
                  mean: number | [number, number, ...number[]];
                  /**
                   * uncertainty / standard deviation; a single number for a single input name, or an array of numbers for a group of input names;
                   */
                  std?: number | [number, number, ...number[]];
                  /**
                   * correlation matrix; must only be used if a group of input names is given and requires the presence of `std`.
                   *
                   * @minItems 2
                   */
                  corr?: [
                    [number, number, ...number[]],
                    [number, number, ...number[]],
                    ...[number, number, ...number[]][]
                  ];
                }
              | {
                  /**
                   * a user-defined name identifying the probability distribution (e.g. `"uniform"`);
                   */
                  distribution_type: string;
                  /**
                   * an object where each key is a user-defined name of a parameter of the probability distribution, and each value is a single number in the univariate case, or an array of numbers or arrays in the multivariate case (e.g. `{"a":0, "b":1}` for a uniform distribution with boundaries $a$ and $b$).
                   */
                  distribution_parameters: {
                    [k: string]:
                      | (
                          | number
                          | [
                              number | [number, number, ...number[]],
                              number | [number, number, ...number[]],
                              ...(number | [number, number, ...number[]])[]
                            ]
                        )
                      | undefined;
                  };
                  /**
                   * Description of the custom distribution implemented, defining the fields in `distribution_parameters`.
                   */
                  distribution_description: string;
                }
            )
          | undefined;
      };
      /**
       * Provides free-form information about the tool, software or technique used in a particular step of the workflow. The predefined subfields are `name`, `version`, and `settings`. Any number of additional fields may be included to record or link to supplementary metadata, such as model information/configuration, perturbative order, scale choice, PDF sets, simulation settings, input parameter cards, etc. The predefined subfields are as follows:
       */
      tool?: {
        /**
         * name of tool, e.g. `"MadGraph5_aMC@NLO"`, `"POWHEG"`,  `"SHERPA"`, `"WHIZARD"`, `"flavio"`, `"FeynCalc"`, `"analytical calculation"`, ...
         */
        name: string;
        /**
         * version of the tool, e.g. `"1.2"`
         */
        version?: string;
        /**
         * object containing information about the tool settings with free-form substructure. For example:
         *       - `perturbative_order` (e.g. `"LO"`, `"NLO"`, `"NLOQCD"`, ...)
         *       - `PDF`: name, version, and set of the PDF used.
         *       - `UFO`: name and version of UFO model used, as well as any other relevant information such as flavor schemes or webpage link.
         *       - `scale_choice`: Nominal scale choice employed when computing the predictions. This could be an array of fixed scales or a string describing a dynamical scale choice like `"dynamical:HT/2"`. This field is particularly relevant when RGE effects are folded into the prediction, see the description of `metadata.scale` above.
         *       - `renormalization_scheme`: details of the renormalization scheme used in the computation.
         *       - `covariant_derivative_sign`: sign convention used for the covariant derivative (`"+"` or `"-"`).
         *       - `gamma5_scheme`: scheme used for $\gamma_5$ in dimensional regularization (`"BMHV"`, `"KKS"`, ...).
         *       - `evanescent`: details of the treatment of evanescent operators, e.g. a reference to the scheme used.
         *       - `approximations`: Any relevant approximations used, such as the use of the first leading-logarithmic approximation for RG evolution.
         *       - any other relevant settings specific to the tool or calculation.
         */
        settings?: {
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    },
    ...{
      /**
       * Free-form text description of the method and tool used in this step of obtaining the predictions.
       */
      description?: string;
      /**
       * Specifies the numerical values of input parameters used by the tool in producing the numerical values of the polynomial coefficients. Each entry maps an input name (a string) or a group of names (a stringified tuple such as `"('m1','m2')"`) to one of the following:
       */
      inputs?: {
        [k: string]:
          | (
              | number
              | {
                  /**
                   * central value / mean; a single number for a single input name, or an array of numbers for a group of input names;
                   */
                  mean: number | [number, number, ...number[]];
                  /**
                   * uncertainty / standard deviation; a single number for a single input name, or an array of numbers for a group of input names;
                   */
                  std?: number | [number, number, ...number[]];
                  /**
                   * correlation matrix; must only be used if a group of input names is given and requires the presence of `std`.
                   *
                   * @minItems 2
                   */
                  corr?: [
                    [number, number, ...number[]],
                    [number, number, ...number[]],
                    ...[number, number, ...number[]][]
                  ];
                }
              | {
                  /**
                   * a user-defined name identifying the probability distribution (e.g. `"uniform"`);
                   */
                  distribution_type: string;
                  /**
                   * an object where each key is a user-defined name of a parameter of the probability distribution, and each value is a single number in the univariate case, or an array of numbers or arrays in the multivariate case (e.g. `{"a":0, "b":1}` for a uniform distribution with boundaries $a$ and $b$).
                   */
                  distribution_parameters: {
                    [k: string]:
                      | (
                          | number
                          | [
                              number | [number, number, ...number[]],
                              number | [number, number, ...number[]],
                              ...(number | [number, number, ...number[]])[]
                            ]
                        )
                      | undefined;
                  };
                  /**
                   * Description of the custom distribution implemented, defining the fields in `distribution_parameters`.
                   */
                  distribution_description: string;
                }
            )
          | undefined;
      };
      /**
       * Provides free-form information about the tool, software or technique used in a particular step of the workflow. The predefined subfields are `name`, `version`, and `settings`. Any number of additional fields may be included to record or link to supplementary metadata, such as model information/configuration, perturbative order, scale choice, PDF sets, simulation settings, input parameter cards, etc. The predefined subfields are as follows:
       */
      tool?: {
        /**
         * name of tool, e.g. `"MadGraph5_aMC@NLO"`, `"POWHEG"`,  `"SHERPA"`, `"WHIZARD"`, `"flavio"`, `"FeynCalc"`, `"analytical calculation"`, ...
         */
        name: string;
        /**
         * version of the tool, e.g. `"1.2"`
         */
        version?: string;
        /**
         * object containing information about the tool settings with free-form substructure. For example:
         *       - `perturbative_order` (e.g. `"LO"`, `"NLO"`, `"NLOQCD"`, ...)
         *       - `PDF`: name, version, and set of the PDF used.
         *       - `UFO`: name and version of UFO model used, as well as any other relevant information such as flavor schemes or webpage link.
         *       - `scale_choice`: Nominal scale choice employed when computing the predictions. This could be an array of fixed scales or a string describing a dynamical scale choice like `"dynamical:HT/2"`. This field is particularly relevant when RGE effects are folded into the prediction, see the description of `metadata.scale` above.
         *       - `renormalization_scheme`: details of the renormalization scheme used in the computation.
         *       - `covariant_derivative_sign`: sign convention used for the covariant derivative (`"+"` or `"-"`).
         *       - `gamma5_scheme`: scheme used for $\gamma_5$ in dimensional regularization (`"BMHV"`, `"KKS"`, ...).
         *       - `evanescent`: details of the treatment of evanescent operators, e.g. a reference to the scheme used.
         *       - `approximations`: Any relevant approximations used, such as the use of the first leading-logarithmic approximation for RG evolution.
         *       - any other relevant settings specific to the tool or calculation.
         */
        settings?: {
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }[]
  ];
  /**
   * Optional free-form metadata for documentation purposes. May include fields such as authorship, contact information, date, description of the observable, information identifying the associated correlation file (e.g. hash value or filename), or external references. The format is unrestricted, allowing any `JSON`-encodable content.
   */
  misc?: {
    [k: string]: unknown | undefined;
  };
}
