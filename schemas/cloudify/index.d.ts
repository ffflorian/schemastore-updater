/* eslint-disable */

/**
 * The constraints the input value must comply with. Read more details about the format and usage of the constraints in the Constraints section below.
 */
export type InputPropertyConstraints =
  | {
      equal?: number | string | boolean;
      greater_than?: number | string | boolean;
      greater_or_equal?: number | string | boolean;
      less_than?: number | string | boolean;
      less_or_equal?: number | string | boolean;
      [k: string]: unknown | undefined;
    }
  | {
      [k: string]: unknown | undefined;
    };
/**
 * This interface was referenced by `NodeTemplates`'s JSON-Schema definition
 * via the `patternProperty` "".
 */
export type NodeTemplate = {
  [k: string]: unknown | undefined;
} & {
  /**
   * The node-type of this node template.
   */
  type: (
    | string
    | (
        | 'cloudify.nodes.Root'
        | 'cloudify.nodes.Tier'
        | 'cloudify.nodes.Compute'
        | 'cloudify.nodes.Container'
        | 'cloudify.nodes.Network'
        | 'cloudify.nodes.Subnet'
        | 'cloudify.nodes.Router'
        | 'cloudify.nodes.Port'
        | 'cloudify.nodes.VirtualIP'
        | 'cloudify.nodes.SecurityGroup'
        | 'cloudify.nodes.LoadBalancer'
        | 'cloudify.nodes.Volume'
        | 'cloudify.nodes.FileSystem'
        | 'cloudify.nodes.ObjectStorage'
        | 'cloudify.nodes.SoftwareComponent'
        | 'cloudify.nodes.WebServer'
        | 'cloudify.nodes.ApplicationServer'
        | 'cloudify.nodes.DBMS'
        | 'cloudify.nodes.MessageBugServer'
        | 'cloudify.nodes.ApplicationModule'
        | 'cloudify.nodes.Component'
        | 'cloudify.nodes.ServiceComponent'
        | 'cloudify.nodes.SharedResource'
        | 'cloudify.nodes.aws.dynamodb.Table'
        | 'cloudify.nodes.aws.iam.Group'
        | 'cloudify.nodes.aws.iam.AccessKey'
        | 'cloudify.nodes.aws.iam.LoginProfile'
        | 'cloudify.nodes.aws.iam.User'
        | 'cloudify.nodes.aws.iam.Role'
        | 'cloudify.nodes.aws.iam.RolePolicy'
        | 'cloudify.nodes.aws.iam.InstanceProfile'
        | 'cloudify.nodes.aws.iam.Policy'
        | 'cloudify.nodes.aws.lambda.Function'
        | 'cloudify.nodes.aws.lambda.Invoke'
        | 'cloudify.nodes.aws.lambda.Permission'
        | 'cloudify.nodes.aws.rds.Instance'
        | 'cloudify.nodes.aws.rds.InstanceReadReplica'
        | 'cloudify.nodes.aws.rds.SubnetGroup'
        | 'cloudify.nodes.aws.rds.OptionGroup'
        | 'cloudify.nodes.aws.rds.Option'
        | 'cloudify.nodes.aws.rds.ParameterGroup'
        | 'cloudify.nodes.aws.rds.Parameter'
        | 'cloudify.nodes.aws.route53.HostedZone'
        | 'cloudify.nodes.aws.route53.RecordSet'
        | 'cloudify.nodes.aws.SQS.Queue'
        | 'cloudify.nodes.aws.SNS.Topic'
        | 'cloudify.nodes.aws.SNS.Subscription'
        | 'cloudify.nodes.aws.elb.LoadBalancer'
        | 'cloudify.nodes.aws.elb.Classic.LoadBalancer'
        | 'cloudify.nodes.aws.elb.Classic.HealthCheck'
        | 'cloudify.nodes.aws.elb.Listener'
        | 'cloudify.nodes.aws.elb.Classic.Listener'
        | 'cloudify.nodes.aws.elb.Rule'
        | 'cloudify.nodes.aws.elb.TargetGroup'
        | 'cloudify.nodes.aws.elb.Classic.Policy'
        | 'cloudify.nodes.aws.elb.Classic.Policy.Stickiness'
        | 'cloudify.nodes.aws.s3.BaseBucket'
        | 'cloudify.nodes.aws.s3.BaseBucketObject'
        | 'cloudify.nodes.aws.s3.Bucket'
        | 'cloudify.nodes.aws.s3.BucketPolicy'
        | 'cloudify.nodes.aws.s3.BucketLifecycleConfiguration'
        | 'cloudify.nodes.aws.s3.BucketTagging'
        | 'cloudify.nodes.aws.s3.BucketObject'
        | 'cloudify.nodes.aws.ec2.BaseType'
        | 'cloudify.nodes.aws.ec2.Vpc'
        | 'cloudify.nodes.aws.ec2.VpcPeering'
        | 'cloudify.nodes.aws.ec2.VpcPeeringRequest'
        | 'cloudify.nodes.aws.ec2.VpcPeeringAcceptRequest'
        | 'cloudify.nodes.aws.ec2.VpcPeeringRejectRequest'
        | 'cloudify.nodes.aws.ec2.Subnet'
        | 'cloudify.nodes.aws.ec2.SecurityGroup'
        | 'cloudify.nodes.aws.ec2.SecurityGroupRuleIngress'
        | 'cloudify.nodes.aws.ec2.SecurityGroupRuleEgress'
        | 'cloudify.nodes.aws.ec2.NATGateway'
        | 'cloudify.nodes.aws.ec2.Interface'
        | 'cloudify.nodes.aws.ec2.Instances'
        | 'cloudify.nodes.aws.ec2.Keypair'
        | 'cloudify.nodes.aws.ec2.ElasticIP'
        | 'cloudify.nodes.aws.ec2.NetworkACL'
        | 'cloudify.nodes.aws.ec2.NetworkAclEntry'
        | 'cloudify.nodes.aws.ec2.DHCPOptions'
        | 'cloudify.nodes.aws.ec2.VPNGateway'
        | 'cloudify.nodes.aws.ec2.VPNConnection'
        | 'cloudify.nodes.aws.ec2.VPNConnectionRoute'
        | 'cloudify.nodes.aws.ec2.CustomerGateway'
        | 'cloudify.nodes.aws.ec2.InternetGateway'
        | 'cloudify.nodes.aws.ec2.RouteTable'
        | 'cloudify.nodes.aws.ec2.Route'
        | 'cloudify.nodes.aws.ec2.Image'
        | 'cloudify.nodes.aws.ec2.Tags'
        | 'cloudify.nodes.aws.ec2.EBSVolume'
        | 'cloudify.nodes.aws.ec2.EBSAttachment'
        | 'cloudify.nodes.aws.autoscaling.Group'
        | 'cloudify.nodes.aws.autoscaling.LaunchConfiguration'
        | 'cloudify.nodes.aws.autoscaling.Policy'
        | 'cloudify.nodes.aws.autoscaling.LifecycleHook'
        | 'cloudify.nodes.aws.autoscaling.NotificationConfiguration'
        | 'cloudify.nodes.aws.cloudwatch.Alarm'
        | 'cloudify.nodes.aws.cloudwatch.Rule'
        | 'cloudify.nodes.aws.cloudwatch.Event'
        | 'cloudify.nodes.aws.cloudwatch.Target'
        | 'cloudify.nodes.aws.efs.FileSystem'
        | 'cloudify.nodes.aws.efs.MountTarget'
        | 'cloudify.nodes.aws.efs.FileSystemTags'
        | 'cloudify.nodes.aws.kms.CustomerMasterKey'
        | 'cloudify.nodes.aws.kms.Alias'
        | 'cloudify.nodes.aws.kms.Grant'
        | 'cloudify.nodes.aws.CloudFormation.Stack'
        | 'cloudify.nodes.aws.ecs.Cluster'
        | 'cloudify.nodes.aws.ecs.Service'
        | 'cloudify.nodes.aws.ecs.TaskDefinition'
        | 'cloudify.nodes.swift.s3.Bucket'
        | 'cloudify.nodes.swift.s3.BucketObject'
        | 'cloudify.nodes.aws.eks.Cluster'
        | 'cloudify.nodes.aws.eks.NodeGroup'
        | 'cloudify.azure.nodes.storage.StorageAccount'
        | 'cloudify.azure.nodes.storage.DataDisk'
        | 'cloudify.azure.nodes.storage.FileShare'
        | 'cloudify.azure.nodes.network.VirtualNetwork'
        | 'cloudify.azure.nodes.network.NetworkSecurityGroup'
        | 'cloudify.azure.nodes.network.NetworkSecurityRule'
        | 'cloudify.azure.nodes.network.Subnet'
        | 'cloudify.azure.nodes.network.RouteTable'
        | 'cloudify.azure.nodes.network.Route'
        | 'cloudify.azure.nodes.network.NetworkInterfaceCard'
        | 'cloudify.azure.nodes.network.IPConfiguration'
        | 'cloudify.azure.nodes.network.PublicIPAddress'
        | 'cloudify.azure.nodes.compute.AvailabilitySet'
        | 'cloudify.azure.nodes.compute.VirtualMachine'
        | 'cloudify.azure.nodes.compute.WindowsVirtualMachine'
        | 'cloudify.azure.nodes.compute.VirtualMachineExtension'
        | 'cloudify.azure.nodes.network.LoadBalancer'
        | 'cloudify.azure.nodes.network.LoadBalancer.BackendAddressPool'
        | 'cloudify.azure.nodes.network.LoadBalancer.Probe'
        | 'cloudify.azure.nodes.network.LoadBalancer.IncomingNATRule'
        | 'cloudify.azure.nodes.network.LoadBalancer.Rule'
        | 'cloudify.azure.Deployment'
        | 'cloudify.azure.nodes.compute.ContainerService'
        | 'cloudify.azure.nodes.Plan'
        | 'cloudify.azure.nodes.WebApp'
        | 'cloudify.azure.nodes.PublishingUser'
        | 'cloudify.azure.nodes.compute.ManagedCluster'
        | 'cloudify.gcp.project'
        | 'cloudify.gcp.nodes.Instance'
        | 'cloudify.gcp.nodes.InstanceGroup'
        | 'cloudify.gcp.nodes.Volume'
        | 'cloudify.gcp.nodes.Snapshot'
        | 'cloudify.gcp.nodes.Network'
        | 'cloudify.gcp.nodes.SubNetwork'
        | 'cloudify.gcp.nodes.VPCNetworkPeering'
        | 'cloudify.gcp.nodes.Route'
        | 'cloudify.gcp.nodes.FirewallRule'
        | 'cloudify.gcp.nodes.SecurityGroup'
        | 'cloudify.gcp.nodes.Access'
        | 'cloudify.gcp.nodes.KeyPair'
        | 'cloudify.gcp.nodes.ExternalIP'
        | 'cloudify.gcp.nodes.GlobalAddress'
        | 'cloudify.gcp.nodes.StaticIP'
        | 'cloudify.gcp.nodes.Address'
        | 'cloudify.gcp.nodes.Image'
        | 'cloudify.gcp.nodes.HealthCheck'
        | 'cloudify.gcp.nodes.BackendService'
        | 'cloudify.gcp.nodes.RegionBackendService'
        | 'cloudify.gcp.nodes.UrlMap'
        | 'cloudify.gcp.nodes.TargetProxy'
        | 'cloudify.gcp.nodes.SslCertificate'
        | 'cloudify.gcp.nodes.ForwardingRule'
        | 'cloudify.gcp.nodes.GlobalForwardingRule'
        | 'cloudify.gcp.nodes.DNSZone'
        | 'cloudify.gcp.nodes.DNSRecord'
        | 'cloudify.gcp.nodes.DNSAAAARecord'
        | 'cloudify.gcp.nodes.DNSMXRecord'
        | 'cloudify.gcp.nodes.DNSNSRecord'
        | 'cloudify.gcp.nodes.DNSTXTRecord'
        | 'cloudify.gcp.nodes.KubernetesCluster'
        | 'cloudify.gcp.nodes.KubernetesNodePool'
        | 'cloudify.gcp.nodes.KubernetesClusterMonitoring'
        | 'cloudify.gcp.nodes.KubernetesClusterlegacyAbac'
        | 'cloudify.gcp.nodes.KubernetesClusterNetworkPolicy'
        | 'cloudify.gcp.nodes.Topic'
        | 'cloudify.gcp.nodes.TopicPolicy'
        | 'cloudify.gcp.nodes.TopicMessage'
        | 'cloudify.gcp.nodes.Subscription'
        | 'cloudify.gcp.nodes.SubscriptionPolicy'
        | 'cloudify.gcp.nodes.Acknowledge'
        | 'cloudify.gcp.nodes.PullRequest'
        | 'cloudify.gcp.nodes.StackDriverGroup'
        | 'cloudify.gcp.nodes.StackDriverTimeSeries'
        | 'cloudify.gcp.nodes.StackDriverUpTimeCheckConfig'
        | 'cloudify.gcp.nodes.LoggingSink'
        | 'cloudify.gcp.nodes.LoggingExclusion'
        | 'cloudify.gcp.nodes.Logging.BillingAccounts.sinks'
        | 'cloudify.gcp.nodes.Logging.Folders.sinks'
        | 'cloudify.gcp.nodes.Logging.Organizations.sinks'
        | 'cloudify.gcp.nodes.Logging.Projects.sinks'
        | 'cloudify.gcp.nodes.Logging.BillingAccounts.exclusions'
        | 'cloudify.gcp.nodes.Logging.Folders.exclusions'
        | 'cloudify.gcp.nodes.Logging.Organizations.exclusions'
        | 'cloudify.gcp.nodes.Logging.Projects.exclusions'
        | 'cloudify.gcp.nodes.Logging.Projects.metrics'
        | 'cloudify.kubernetes.resources.StatefulSet'
        | 'cloudify.nodes.helm.Binary'
        | 'cloudify.nodes.helm.Release'
        | 'cloudify.nodes.helm.Repo'
      )
  ) &
    string;
  /**
   * The properties of the node template, matching its node type properties schema.
   */
  properties?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Instances configuration. (Deprecated. Replaced with capabilities.scalable)
   */
  instances?: {
    [k: string]: unknown | undefined;
  };
  interfaces?: NodeTemplateInterfaces;
  relationships?: NodeTemplateRelationships;
  /**
   * Used for specifying the node template capabilities (Supported since: cloudify_dsl_1_3.) Only the scalable capability is supported.
   */
  capabilities?: {
    [k: string]: unknown | undefined;
  };
};
/**
 * This interface was referenced by `NodeTemplateInterface`'s JSON-Schema definition
 * via the `patternProperty` "".
 */
export type NodeTemplateInterfaceAction =
  | string
  | {
      /**
       * The script or plugin task name to execute.
       */
      implementation?: string;
      /**
       * Schema of inputs to be passed to the implementation as kwargs.
       */
      inputs?: {
        [k: string]: unknown | undefined;
      };
      /**
       * Valid values: central_deployment_agent, host_agent. See the Plugins Specification for more info.
       */
      executor?: 'central_deployment_agent' | 'host_agent';
      /**
       * Maximum number of retries for a task. -1 means infinite retries (Default: task_retries in the Cloudify Manager config.yaml file for remote workflows, and task_retries workflow configuration for local workflows).
       */
      max_retries?: number;
      /**
       * Minimum wait time (in seconds) between task retries (Default: task_retry_interval in the Cloudify Manager config.yaml file for remote workflows and task_retry_interval workflow configuration for local workflows).
       */
      retry_interval?: number;
      /**
       * Number of seconds to wait before the operation is terminated by the orchestrator. A value of 0 (or no value at all, which is the default) means no timeout.
       */
      timeone?: number;
      /**
       * If true (the default), and a timeout occurred, then, the operation will raise a RecoverableError, resulting in the operation being retried. Otherwise, a NonRecoverableError is raised, ending the execution with a failure.
       */
      timeout_recoverable?: boolean;
    };
/**
 * Used for specifying the relationships that this node template has with other node templates.
 */
export type NodeTemplateRelationships = NodeTemplateRelationship[];

export interface Blueprint {
  /**
   * tosca_definitions_version is a top level property of the blueprint which is used to specify the DSL version used. For Cloudify, the versions that are currently defined are cloudify_dsl_1_0, cloudify_dsl_1_1, cloudify_dsl_1_2 and cloudify_dsl_1_3.
   */
  tosca_definitions_version?: 'cloudify_dsl_1_0' | 'cloudify_dsl_1_1' | 'cloudify_dsl_1_2' | 'cloudify_dsl_1_3';
  /**
   * imports enable the author of a blueprint to reuse blueprint files, or parts of them, and to use predefined types (e.g. from the types.yaml file).
   */
  imports?: (
    | string
    | (
        | 'http://www.getcloudify.org/spec/cloudify/4.5/types.yaml'
        | 'plugin:cloudify-ansible-plugin'
        | 'plugin:cloudify-aws-plugin'
        | 'plugin:cloudify-azure-plugin'
        | 'plugin:cloudify-cloudstack-plugin'
        | 'plugin:cloudify-diamond-plugin'
        | 'plugin:cloudify-fabric-plugin'
        | 'plugin:cloudify-gcp-plugin'
        | 'plugin:cloudify-host-pool-plugin'
        | 'plugin:cloudify-kubernetes-plugin'
        | 'plugin:cloudify-openstack-plugin'
        | 'plugin:cloudify-utilities-plugin'
        | 'plugin:cloudify-vsphere-plugin'
        | 'plugin:cloudify-terraform-plugin'
        | 'plugin:cloudify-helm-plugin'
      )
  )[];
  data_types?: DataTypes;
  /**
   * inputs are parameters that are injected into a blueprint when a deployment is created. These parameters can be referenced by using the get_input intrinsic function.
   */
  inputs?: {
    aws_access_key_id?: InputProperty;
    aws_secret_access_key?: InputProperty;
    aws_region_name?: InputProperty;
    aws_account_id?: InputProperty;
    aws_region_zone1?: InputProperty;
    aws_region_zone2?: InputProperty;
    aws_cloudwatch_log_arn?: InputProperty;
    [k: string]: InputProperty;
  };
  dsl_definitions?: {
    [k: string]: unknown | undefined;
  };
  node_types?: NodeTypes;
  node_templates?: NodeTemplates;
  [k: string]: unknown | undefined;
}
/**
 * To use data_types, the definitions version must be cloudify_dsl_1_2 or higher.
 */
export interface DataTypes {
  [k: string]: DataType;
}
/**
 * This interface was referenced by `DataTypes`'s JSON-Schema definition
 * via the `patternProperty` "".
 */
export interface DataType {
  /**
   * Description for the data type.
   */
  description?: string;
  /**
   * Dictionary of the data type properties.
   */
  properties?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Parent data type.
   */
  derived_from?: string;
}
/**
 * inputs are parameters that are injected into a blueprint when a deployment is created. These parameters can be referenced by using the get_input intrinsic function.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "".
 */
export interface InputProperty {
  /**
   * An optional description for the input.
   */
  description?: string;
  /**
   * The required data type of the input. Not specifying a data type means the type can be anything, including a list, an array or a dictionary. Valid types: string, integer, float, boolean, list, dict, regex or a custom data type.
   */
  type?: string | ('string' | 'integer' | 'float' | 'boolean' | 'list' | 'dict' | 'regex');
  /**
   * An optional default value for the input.
   */
  default?: {
    [k: string]: unknown | undefined;
  };
  constraints?: InputPropertyConstraints;
  /**
   * a boolean value to indicate whether the input is required must be passed or not.
   */
  required?: boolean;
}
export interface NodeTypes {
  [k: string]: NodeType;
}
/**
 * This interface was referenced by `NodeTypes`'s JSON-Schema definition
 * via the `patternProperty` "".
 */
export interface NodeType {
  /**
   * A string referencing a parent type.
   */
  derived_from?: string;
  /**
   * A dictionary of node interfaces.
   */
  interfaces?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A dictionary of node properties.
   */
  properties?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * node_templates represent the actual instances of node types that eventually represent the running application/service, as described in the blueprint. node_templates are more commonly referred to as nodes. Nodes can comprise more than one instance. For example, you might define a node that contains two VMs. Each VM is a node_instance.
 */
export interface NodeTemplates {
  [k: string]: NodeTemplate;
}
/**
 * Used for a mapping plugins to interfaces operation, or for specifying inputs for already-mapped node type operations.
 */
export interface NodeTemplateInterfaces {
  [k: string]: NodeTemplateInterface;
}
/**
 * This interface was referenced by `NodeTemplateInterfaces`'s JSON-Schema definition
 * via the `patternProperty` "".
 */
export interface NodeTemplateInterface {
  configure?: NodeTemplateInterfaceAction;
  delete?: NodeTemplateInterfaceAction;
  [k: string]: NodeTemplateInterfaceAction;
}
export interface NodeTemplateRelationship {
  /**
   * Either a newly-declared relationship type or one of the relationship types provided by default when importing the types.yaml file.
   */
  type: string;
  /**
   * The name of the node to which the current node is related.
   */
  target?: string;
  /**
   * Valid values: all_to_all and all_to_one (See explanation below.)
   */
  connection_type?: 'all_to_all' | 'all_to_one';
  /**
   * A dictionary of interfaces.
   */
  source_interfaces?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A dictionary of interfaces.
   */
  target_interfaces?: {
    [k: string]: unknown | undefined;
  };
}
