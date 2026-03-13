/* eslint-disable */

export type ListOfCallbacksToProvideRoutes = string[];
export type RoutePath = string;
export type AControllerToExecuteWhenTheRouteIsMatched = string;
export type MethodOfTheIncomingRequestToMatchTheRoute = ('GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE')[];

export interface JSONSchemaForDrupalRoutingFile {
  route_callbacks?: ListOfCallbacksToProvideRoutes;
  [k: string]:
    | {
        path?: RoutePath;
        defaults?: DefaultRouteParameters;
        requirements?: ListOfRequirementsThatMakesASpecificRouteOnlyMatchUnderSpecificConditions;
        methods?: MethodOfTheIncomingRequestToMatchTheRoute;
        options?: AdditionalRouteOptions;
      }
    | undefined;
}
export interface DefaultRouteParameters {
  _controller?: AControllerToExecuteWhenTheRouteIsMatched;
  _form?: string;
  _title?: string;
  _title_callback?: string;
  _access?: string;
  _entity_list?: string;
  _entity_form?: string;
  _entity_view?: string;
  [k: string]: unknown | undefined;
}
export interface ListOfRequirementsThatMakesASpecificRouteOnlyMatchUnderSpecificConditions {
  _access?: string;
  _custom_access?: string;
  _format?: string;
  _entity_access?: string;
  _entity_create_access?: string;
  _entity_delete_multiple_access?: string;
  _module_dependencies?: string;
  _csrf_token?: string;
  _user_is_logged_in?: string;
  _access_theme?: string;
  _permission?: string;
  [k: string]: unknown | undefined;
}
export interface AdditionalRouteOptions {
  no_cache?: boolean;
  _admin_route?: boolean;
  _no_path?: boolean;
  _maintenance_access?: boolean;
  _node_operation_route?: boolean;
  parameters?: {
    [k: string]: unknown | undefined;
  };
  _auth?: string[];
  [k: string]: unknown | undefined;
}
