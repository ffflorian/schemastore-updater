/* eslint-disable */

export interface HelmChartYaml {
  /**
   * The apiVersion field should be v2 for Helm charts that require at least Helm 3. Charts supporting previous Helm versions have an apiVersion set to v1 and are still installable by Helm 3. v3 is experimental.
   */
  apiVersion: 'v1' | 'v2' | 'v3';
  /**
   * The name of the chart
   */
  name: string;
  /**
   * A SemVer 2 version
   */
  version: string;
  /**
   * The optional kubeVersion field can define semver constraints on supported Kubernetes versions. Helm will validate the version constraints when installing the chart and fail if the cluster runs an unsupported Kubernetes version.
   */
  kubeVersion?: string;
  /**
   * A single-sentence description of this project
   */
  description?: string;
  /**
   * The type of the chart
   */
  type?: 'application' | 'library';
  /**
   * A list of keywords about this project
   */
  keywords?: string[];
  /**
   * The URL of this projects home page
   */
  home?: string;
  /**
   * A list of URLs to source code for this project
   */
  sources?: string[];
  /**
   * In Helm, one chart may depend on any number of other charts. These dependencies can be dynamically linked using the dependencies field in Chart.yaml or brought in to the charts/ directory and managed manually.
   * The charts required by the current chart are defined as a list in the dependencies field.
   */
  dependencies?: {
    /**
     * The name of the chart
     */
    name: string;
    /**
     * The version of the chart
     */
    version?: string;
    /**
     * The repository URL or alias
     */
    repository?: string;
    /**
     * A yaml path that resolves to a boolean, used for enabling/disabling charts
     */
    condition?: string;
    /**
     * Tags can be used to group charts for enabling/disabling together
     */
    tags?: string[];
    /**
     * ImportValues holds the mapping of source values to parent key to be imported. Each item can be a string or pair of child/parent sublist items.
     */
    'import-values'?: (
      | string
      | {
          /**
           * The destination path in the parent chart's values
           */
          parent: string;
          /**
           * The source key of the values to be imported
           */
          child: string;
        }
    )[];
    /**
     * Alias to be used for the chart. Useful when you have to add the same chart multiple times
     */
    alias?: string;
    /**
     * A list of subcharts (by name or alias) that need to be ready before this subchart can be installed. Only available when apiVersion is v3.
     */
    'depends-on'?: string[];
  }[];
  maintainers?: {
    /**
     * The maintainers name
     */
    name: string;
    /**
     * The maintainers email
     */
    email?: string;
    /**
     * A URL for the maintainer
     */
    url?: string;
  }[];
  /**
   * A URL to an SVG or PNG image to be used as an icon
   */
  icon?: string;
  /**
   * Note that the appVersion field is not related to the version field. It is a way of specifying the version of the application. For example, the drupal chart may have an appVersion: "8.2.1", indicating that the version of Drupal included in the chart (by default) is 8.2.1. This field is informational, and has no impact on chart version calculations. Wrapping the version in quotes is highly recommended. It forces the YAML parser to treat the version number as a string. Leaving it unquoted can lead to parsing issues in some cases. For example, YAML interprets 1.0 as a floating point value, and a git commit SHA like 1234e10 as scientific notation.
   */
  appVersion?: string;
  /**
   * When managing charts in a Chart Repository, it is sometimes necessary to deprecate a chart. The optional deprecated field in Chart.yaml can be used to mark a chart as deprecated. If the latest version of a chart in the repository is marked as deprecated, then the chart as a whole is considered to be deprecated. The chart name can be later reused by publishing a newer version that is not marked as deprecated.
   */
  deprecated?: boolean;
  /**
   * A list of annotations keyed by name
   */
  annotations?: {
    /**
     * A JSON array of subchart names (by name or alias) that must be fully deployed and in a ready state before the current chart resources can be installed.
     */
    'helm.sh/depends-on/subcharts'?: string;
    /**
     * This annotation is used to provide some details about the changes introduced by a given chart version. Artifact Hub can generate and display a ChangeLog based on the entries in the changes field in all your chart versions.
     * This annotation can be provided using two different formats: using a plain list of strings with the description of the change or using a list of objects with some extra structured information (see example below). Please feel free to use the one that better suits your needs. The UI experience will be slightly different depending on the choice. When using the list of objects option the valid supported kinds are added, changed, deprecated, removed, fixed and security.
     */
    'artifacthub.io/changes'?: string;
    /**
     * Use this annotation to indicate that this chart version contains security updates. When a package release contains security updates, a special message will be displayed in the Artifact Hub UI as well as in the new release email notification.
     */
    'artifacthub.io/containsSecurityUpdates'?: 'true' | 'false';
    /**
     * By default, Artifact Hub will try to extract the containers images used by Helm charts from the manifests generated from a dry-run install using the default values. If you prefer, you can also provide a list of containers images manually by using this annotation.
     * Containers images will be scanned for security vulnerabilities. The security report generated will be available in the package detail view. It is possible to whitelist images so that they are not scanned by setting the whitelisted flag to true.
     */
    'artifacthub.io/crds'?: string;
    /**
     * This annotation can be used to list the operator's CRDs. They will be visible in the package's detail view as cards.
     */
    'artifacthub.io/images'?: string;
    /**
     * Use this annotation to provide a list of example CRs for the operator's CRDs. Each of the examples can be opened from the corresponding CRD card in the package's detail view.
     */
    'artifacthub.io/crdsExamples'?: string;
    /**
     * Use this annotation to indicate the chart's license. By default, Artifact Hub tries to read the chart's license from the LICENSE file in the chart, but it's possible to override or provide it with this annotation. It must be a valid SPDX identifier.
     */
    'artifacthub.io/license'?: string;
    /**
     * This annotation allows including named links, which will be rendered nicely in Artifact Hub. You can use this annotation to include links not included previously in the Chart.yaml file, or you can use it to name links already present (in the sources section, for example).
     */
    'artifacthub.io/links'?: string;
    /**
     * This annotation can be used if you want to display a different name for a given user in Artifact Hub than the one used in the Chart.yaml file. If the email used matches, the name used in the annotations entry will be displayed in Artifact Hub. It's also possible to include maintainers that should only be listed in Artifact Hub by adding additional entries.
     */
    'artifacthub.io/maintainers'?: string;
    /**
     * Use this annotation to indicate that your chart represents an operator. Artifact Hub at the moment also considers your chart to represent an operator if the word operator appears in the chart name.
     */
    'artifacthub.io/operator'?: 'true' | 'false';
    /**
     * Use this annotation to indicate the capabilities of the operator your chart provides. It must be one of the following options: Basic Install, Seamless Upgrades, Full Lifecycle, Deep Insights or Auto Pilot. For more information please see the capability level diagram.
     */
    'artifacthub.io/operatorCapabilities'?:
      | 'Basic Install'
      | 'Seamless Upgrades'
      | 'Full Lifecycle'
      | 'Deep Insights'
      | 'Auto Pilot';
    /**
     * Use this annotation to indicate that this chart version is a pre-release. This status will be displayed in the UI's package view, as well as in new releases notifications emails.
     */
    'artifacthub.io/prerelease'?: 'true' | 'false';
    /**
     * This annotation allows recommending other related packages. Recommended packages will be featured in the package detail view in Artifact Hub.
     */
    'artifacthub.io/recommendations'?: string;
    /**
     * This annotation can be used to provide some information about the key used to sign a given chart version. This information will be displayed on the Artifact Hub UI, making it easier for users to get the information they need to verify the integrity and origin of your chart. The url field indicates where users can find the public key and it is mandatory when a sign key entry is provided.
     */
    'artifacthub.io/signKey'?: string;
    [k: string]: string | undefined;
  };
}
