/* eslint-disable */

/**
 * https://docs.docker.com/engine/reference/commandline/dockerd/#daemon
 */
export interface DockerDaemonConfigurationSchema {
  'allow-nondistributable-artifacts'?: unknown[];
  'api-cors-header'?: string;
  'authorization-plugins'?: unknown[];
  bip?: string;
  bridge?: string;
  'cgroup-parent'?: string;
  'cluster-advertise'?: string;
  'cluster-store'?: string;
  'cluster-store-opts'?: {
    [k: string]: unknown | undefined;
  };
  containerd?: string;
  'containerd-namespace'?: string;
  'containerd-plugin-namespace'?: string;
  'data-root'?: string;
  debug?: boolean;
  'default-address-pools'?: {
    base?: string;
    size?: number;
    [k: string]: unknown | undefined;
  }[];
  'default-cgroupns-mode'?: 'private' | 'host';
  'default-ipc-mode'?: 'shareable' | 'private';
  'default-gateway'?: string;
  'default-gateway-v6'?: string;
  'default-runtime'?: string;
  'default-shm-size'?: string;
  'default-ulimits'?: {
    nofile?: {
      Hard?: number;
      Name?: string;
      Soft?: number;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  dns?: unknown[];
  'dns-opts'?: string[];
  'dns-search'?: string[];
  'exec-opts'?: string[];
  'exec-root'?: string;
  experimental?: boolean;
  features?: {
    [k: string]: unknown | undefined;
  };
  'fixed-cidr'?: string;
  'fixed-cidr-v6'?: string;
  group?: string;
  hosts?: string[];
  icc?: boolean;
  init?: boolean;
  'init-path'?: string;
  'insecure-registries'?: string[];
  ip?: string;
  'ip-forward'?: boolean;
  'ip-masq'?: boolean;
  iptables?: boolean;
  ip6tables?: boolean;
  ipv6?: boolean;
  labels?: unknown[];
  'live-restore'?: boolean;
  'log-driver'?: string;
  'log-level'?: string;
  'log-opts'?: {
    'cache-disabled'?: string;
    'cache-max-file'?: string;
    'cache-max-size'?: string;
    'cache-compress'?: string;
    env?: string;
    labels?: string;
    'max-file'?: string;
    'max-size'?: string;
    [k: string]: unknown | undefined;
  };
  'max-concurrent-downloads'?: number;
  'max-concurrent-uploads'?: number;
  'max-download-attempts'?: number;
  mtu?: number;
  'no-new-privileges'?: boolean;
  'node-generic-resources'?: string[];
  'oom-score-adjust'?: number;
  pidfile?: string;
  'raw-logs'?: boolean;
  'registry-mirrors'?: string[];
  runtimes?: {
    'cc-runtime'?: {
      path?: string;
      [k: string]: unknown | undefined;
    };
    custom?: {
      path?: string;
      runtimeArgs?: string[];
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  'seccomp-profile'?: string;
  'selinux-enabled'?: boolean;
  'shutdown-timeout'?: number;
  'storage-driver'?: string;
  'storage-opts'?: unknown[];
  'swarm-default-advertise-addr'?: string;
  tls?: boolean;
  tlscacert?: string;
  tlscert?: string;
  tlskey?: string;
  tlsverify?: boolean;
  'userland-proxy'?: boolean;
  'userland-proxy-path'?: string;
  'userns-remap'?: string;
  [k: string]: unknown | undefined;
}
