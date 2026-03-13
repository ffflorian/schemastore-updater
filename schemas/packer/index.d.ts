/* eslint-disable */

export type Provisioner = {
  type: 'shell' | 'ansible-local';
  [k: string]: unknown | undefined;
} & Provisioner1;
export type Provisioner1 = ProvisionerAnsibleLocal | ProvisionerShell;

export interface HttpsJsonSchemastoreOrgPackerJson {
  min_packer_version?: string;
  description?: string;
  variables?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "[a-zA-Z0-9_-]".
     */
    [k: string]: string;
  };
  builders: (BuilderVagrant | BuilderVirtualboxIso)[];
  provisioners?: Provisioner[];
  'post-processors'?: (('vagrant' | 'compress') | PostProcessor)[];
  [k: string]: unknown | undefined;
}
export interface BuilderVagrant {
  type?: 'vagrant';
  add_cacert?: string;
  add_capath?: string;
  add_clean?: boolean;
  add_force?: boolean;
  add_insecure?: boolean;
  box_name?: string;
  box_version?: string;
  checksum?: string;
  checksum_type?: string;
  global_id?: string;
  output_dir?: string;
  output_vagrantfile?: string;
  package_include?: string;
  provider?: string;
  skip_add?: boolean;
  source_path?: string;
  teardown_method?: string;
  template?: string;
  [k: string]: unknown | undefined;
}
export interface BuilderVirtualboxIso {
  bundle_iso?: boolean;
  communicator?: string;
  disk_size?: number;
  export_opts?: string[];
  format?: string;
  guest_additions_interface?: string;
  guest_additions_mode?: string;
  guest_additions_path?: string;
  guest_additions_sha256?: string;
  guest_additions_url?: string;
  guest_os_type?: string;
  hard_drive_interface?: string;
  hard_drive_nonrotational?: boolean;
  hard_driver_discard?: boolean;
  headless?: boolean;
  http_bind_address?: number;
  http_directory?: string;
  http_port_max?: number;
  http_port_min?: number;
  iso_checksum?: string;
  iso_interface?: string;
  iso_target_extension?: string;
  iso_target_path?: string;
  iso_url?: string;
  iso_urls?: string[];
  keep_registered?: boolean;
  nvme_port_count?: number;
  output_directory?: string;
  output_filename?: string;
  sata_port_count?: number;
  shutdown_command?: string;
  skip_export?: boolean;
  type?: 'virtualbox-iso';
  virtualbox_version_file?: string;
  vm_name?: string;
  [k: string]: unknown | undefined;
}
export interface ProvisionerAnsibleLocal {
  playbook_file: string;
  [k: string]: unknown | undefined;
}
export interface ProvisionerShell {
  inline?: string[];
  [k: string]: unknown | undefined;
}
export interface PostProcessor {
  name?: string;
  type?: 'compress' | 'upload';
  endpoint?: string;
  keep_input_artifact?: boolean;
  only?: string[];
  format?: 'tar.gz';
  compression_level?: number;
  [k: string]: unknown | undefined;
}
