/* eslint-disable */

/**
 * Configuration file for kind (Kubernetes IN Docker) clusters using apiVersion kind.x-k8s.io/v1alpha4.
 */
export interface KindClusterConfiguration {
  /**
   * Resource kind. Must be Cluster.
   */
  kind: 'Cluster';
  /**
   * kind config API version.
   */
  apiVersion: 'kind.x-k8s.io/v1alpha4';
  /**
   * Cluster name. Overridden by --name / KIND_CLUSTER_NAME.
   */
  name?: string;
  /**
   * Node definitions. Defaults to a single control-plane node when omitted.
   */
  nodes?: Node[];
  networking?: Networking;
  /**
   * Kubernetes feature gates applied cluster-wide.
   */
  featureGates?: {
    [k: string]: boolean | undefined;
  };
  /**
   * kube-apiserver --runtime-config key/value pairs.
   */
  runtimeConfig?: {
    [k: string]: string | undefined;
  };
  /**
   * RFC 7386 merge patches (inline YAML) applied to kubeadm config.
   */
  kubeadmConfigPatches?: string[];
  /**
   * RFC 6902 JSON patches for kubeadm config.
   */
  kubeadmConfigPatchesJSON6902?: PatchJSON6902[];
  /**
   * TOML merge patches applied to every node containerd config.
   */
  containerdConfigPatches?: string[];
  /**
   * RFC 6902 patches applied to every node containerd config.
   */
  containerdConfigPatchesJSON6902?: string[];
}
export interface Node {
  /**
   * Node role in the kind cluster.
   */
  role?: 'control-plane' | 'worker';
  /**
   * Node container image (kindest/node tag).
   */
  image?: string;
  /**
   * Labels applied to the node.
   */
  labels?: {
    [k: string]: string | undefined;
  };
  extraMounts?: Mount[];
  extraPortMappings?: PortMapping[];
  kubeadmConfigPatches?: string[];
  kubeadmConfigPatchesJSON6902?: PatchJSON6902[];
}
export interface Mount {
  hostPath: string;
  containerPath: string;
  readOnly?: boolean;
  selinuxRelabel?: boolean;
  propagation?: 'None' | 'HostToContainer' | 'Bidirectional';
}
export interface PortMapping {
  containerPort: number;
  hostPort?: number;
  listenAddress?: string;
  protocol?: 'TCP' | 'UDP' | 'SCTP';
}
export interface PatchJSON6902 {
  group?: string;
  version?: string;
  kind?: string;
  patch: string;
  name?: string;
  namespace?: string;
}
export interface Networking {
  ipFamily?: 'ipv4' | 'ipv6' | 'dual';
  apiServerPort?: number;
  apiServerAddress?: string;
  podSubnet?: string;
  serviceSubnet?: string;
  disableDefaultCNI?: boolean;
  kubeProxyMode?: 'iptables' | 'ipvs' | 'nftables' | 'none';
  dnsSearch?: string[];
}
