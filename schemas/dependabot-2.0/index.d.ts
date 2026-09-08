/* eslint-disable */

export type GitHubDependabotV2Config = {
  version: ConfigFileVersion;
  /**
   * Enable ecosystems that have beta-level support
   */
  'enable-beta-ecosystems'?: boolean;
  updates: PackageEcosystem[];
  registries?: Registry;
  /**
   * Define groups that span multiple package ecosystems, allowing consolidated pull requests across different ecosystems
   */
  'multi-ecosystem-groups'?: {
    [k: string]: MultiEcosystemGroup | undefined;
  };
};
/**
 * Dependabot configuration files require this key, and its value must be 2
 */
export type ConfigFileVersion = 2;
/**
 * Element for each one package manager that you want GitHub Dependabot to monitor for new versions
 */
export type PackageEcosystem = (
  | {
      directories: Directories;
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * Location of package manifests
       */
      directory: string;
      [k: string]: unknown | undefined;
    }
) & {
  /**
   * Customize which updates are allowed
   */
  allow?: ((
    | {
        'dependency-name': string;
        [k: string]: unknown | undefined;
      }
    | {
        'dependency-type': DependencyType;
        [k: string]: unknown | undefined;
      }
  ) & {
    'dependency-name'?: string;
    'dependency-type'?: DependencyType;
    'update-types'?: UpdateTypes;
  })[];
  /**
   * Assignees to set on pull requests
   *
   * @minItems 1
   */
  assignees?: [string, ...string[]];
  /**
   * Dependabot attempts to detect your commit message preferences and use similar patterns. Use this option to specify your preferences explicitly.
   */
  'commit-message'?: (
    | {
        /**
         * A prefix for all commit messages. When you specify a prefix for commit messages, GitHub will automatically add a colon between the defined prefix and the commit message provided the defined prefix ends with a letter, number, closing parenthesis, or closing bracket. This means that, for example, if you end the prefix with a whitespace, there will be no colon added between the prefix and the commit message.
         */
        prefix: string;
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * A separate prefix for all commit messages that update dependencies in the Development dependency group. When you specify a value for this option, the prefix is used only for updates to dependencies in the Production dependency group. This is not supported by all package ecosystems.
         */
        'prefix-development': string;
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * Specifies that any prefix is followed by a list of the dependencies updated in the commit.
         */
        include: 'scope';
        [k: string]: unknown | undefined;
      }
  ) & {
    /**
     * A prefix for all commit messages. When you specify a prefix for commit messages, GitHub will automatically add a colon between the defined prefix and the commit message provided the defined prefix ends with a letter, number, closing parenthesis, or closing bracket. This means that, for example, if you end the prefix with a whitespace, there will be no colon added between the prefix and the commit message.
     */
    prefix?: string;
    /**
     * A separate prefix for all commit messages that update dependencies in the Development dependency group. When you specify a value for this option, the prefix is used only for updates to dependencies in the Production dependency group. This is not supported by all package ecosystems.
     */
    'prefix-development'?: string;
    /**
     * Specifies that any prefix is followed by a list of the dependencies updated in the commit.
     */
    include?: 'scope';
  };
  /**
   * Defines a cooldown period for dependency updates, allowing updates to be delayed for a configurable number of days. This feature enables users to customize how often Dependabot generates new version updates, offering greater control over update frequency.
   */
  cooldown?: {
    /**
     * Default cooldown period for dependencies without specific rules (optional).
     */
    'default-days'?: number;
    /**
     * Cooldown period for major version updates (optional, applies only to package managers supporting SemVer).
     */
    'semver-major-days'?: number;
    /**
     * Cooldown period for minor version updates (optional, applies only to package managers supporting SemVer).
     */
    'semver-minor-days'?: number;
    /**
     * Cooldown period for patch version updates (optional, applies only to package managers supporting SemVer).
     */
    'semver-patch-days'?: number;
    /**
     * List of dependencies to apply cooldown. Supports wildcards (`*`).
     *
     * @maxItems 100
     */
    include?: string[];
    /**
     * List of dependencies excluded from cooldown. Supports wildcards (`*`).
     *
     * @maxItems 100
     */
    exclude?: string[];
  };
  directories?: Directories;
  /**
   * Location of package manifests
   */
  directory?: string;
  /**
   * List of file paths to exclude from dependency updates
   *
   * @minItems 0
   */
  'exclude-paths'?: string[];
  /**
   * Configure groups for dependencies. Each 'groups' property is arbitrary will appear in pull request titles and branch names. For example, the code snippet '{"groups": {"NPM dependencies": {"patterns": ["*"]}}}' sets the group name to 'NPM dependencies'.
   */
  groups?: {
    [k: string]:
      | {
          /**
           * Use to specify a whether the rules in the group apply to version updates or security updates.
           */
          'applies-to'?: 'version-updates' | 'security-updates';
          /**
           * Specify a dependency type to be included in the group.
           */
          'dependency-type'?: 'development' | 'production';
          /**
           * Define strings of characters that match with a dependency name (or multiple dependency names) to include those dependencies in the group.
           *
           * @minItems 1
           */
          patterns?: [string, ...string[]];
          /**
           * Exclude certain dependencies from the group. If a dependency is excluded from a group, Dependabot will continue to raise single pull requests to update the dependency to its latest version.
           *
           * @minItems 1
           */
          'exclude-patterns'?: [string, ...string[]];
          /**
           * Specify the semantic versioning level to include in the group
           *
           * @minItems 1
           */
          'update-types'?: ['major' | 'minor' | 'patch', ...('major' | 'minor' | 'patch')[]];
          /**
           * Configure how dependencies are grouped within this group.
           */
          'group-by'?: 'dependency-name';
        }
      | undefined;
  };
  /**
   * Ignore certain dependencies or versions
   */
  ignore?: ((
    | {
        /**
         * Use to ignore updates for dependencies with matching names, optionally using * to match zero or more characters.
         */
        'dependency-name': string;
        [k: string]: unknown | undefined;
      }
    | {
        'update-types': UpdateTypes;
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * Use to ignore specific versions or ranges of versions. If you want to define a range, use the standard pattern for the package manager.
         */
        versions: string | [string, ...string[]];
        [k: string]: unknown | undefined;
      }
  ) & {
    /**
     * Use to ignore updates for dependencies with matching names, optionally using * to match zero or more characters.
     */
    'dependency-name'?: string;
    'update-types'?: UpdateTypes;
    /**
     * Use to ignore specific versions or ranges of versions. If you want to define a range, use the standard pattern for the package manager.
     */
    versions?: string | [string, ...string[]];
  })[];
  /**
   * Allow or deny code execution in manifest files
   */
  'insecure-external-code-execution'?: 'allow' | 'deny';
  /**
   * Labels to set on pull requests
   *
   * @minItems 0
   */
  labels?: string[];
  /**
   * Associate all pull requests raised for a package manager with a milestone. You need to specify the numeric identifier of the milestone and not its label.
   */
  milestone?: number;
  /**
   * A name for the update configuration.
   */
  name?: string;
  /**
   * Limit number of open pull requests for version updates
   */
  'open-pull-requests-limit'?: number;
  /**
   * Package manager to use
   */
  'package-ecosystem': (
    | PackageEcosystemValues
    | {
        [k: string]: unknown | undefined;
      }
  ) &
    string;
  /**
   * Pull request branch name preferences
   */
  'pull-request-branch-name'?: {
    /**
     * Change separator for PR branch name
     */
    separator: '-' | '_' | '/';
  };
  /**
   * Disable automatic rebasing. 'auto' is the default and Dependabot will rebase open pull requests when changes are detected. 'disabled' will disable automatic rebasing.
   */
  'rebase-strategy'?: 'auto' | 'disabled';
  registries?: [string, ...string[]] | '*';
  schedule?: Schedule;
  /**
   * Specify a different branch for manifest files and for pull requests.
   */
  'target-branch'?: string;
  /**
   * Tell Dependabot to vendor dependencies when updating them. Don't use this option if you're using 'gomod'.
   */
  vendor?: boolean;
  /**
   * How to update manifest version requirements
   */
  'versioning-strategy'?: 'auto' | 'increase' | 'increase-if-necessary' | 'lockfile-only' | 'widen';
  /**
   * Array of dependency patterns to include in a multi-ecosystem group. Required when using multi-ecosystem-group. Use '*' to include all dependencies.
   *
   * @minItems 1
   */
  patterns?: [string, ...string[]];
  /**
   * String identifier linking this ecosystem to a multi-ecosystem group
   */
  'multi-ecosystem-group'?: string;
};
/**
 * Locations of package manifests
 *
 * @minItems 1
 */
export type Directories = [string, ...string[]];
export type DependencyType = 'direct' | 'indirect' | 'all' | 'production' | 'development';
/**
 * Use to allow specific types of updates. You can combine this with 'dependency-name: "*"' to allow particular update-types for all dependencies.
 *
 * @minItems 1
 */
export type UpdateTypes = [
  'version-update:semver-major' | 'version-update:semver-minor' | 'version-update:semver-patch',
  ...('version-update:semver-major' | 'version-update:semver-minor' | 'version-update:semver-patch')[]
];
export type PackageEcosystemValues =
  | 'bazel'
  | 'bun'
  | 'bundler'
  | 'cargo'
  | 'composer'
  | 'conda'
  | 'deno'
  | 'devcontainers'
  | 'docker'
  | 'docker-compose'
  | 'dotnet-sdk'
  | 'elm'
  | 'github-actions'
  | 'gitsubmodule'
  | 'gomod'
  | 'gradle'
  | 'helm'
  | 'julia'
  | 'maven'
  | 'mix'
  | 'nix'
  | 'npm'
  | 'nuget'
  | 'opentofu'
  | 'pip'
  | 'pre-commit'
  | 'pub'
  | 'rust-toolchain'
  | 'sbt'
  | 'swift'
  | 'terraform'
  | 'uv'
  | 'vcpkg';
/**
 * Schedule preferences
 */
export type Schedule = {
  interval: ScheduleInterval;
  /**
   * Specify an alternative day to check for updates
   */
  day?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  /**
   * Specify an alternative time of day to check for updates (format: hh:mm)
   */
  time?: string;
  /**
   * The time zone identifier must be from the Time Zone database maintained by IANA
   */
  timezone?:
    | 'Africa/Abidjan'
    | 'Africa/Accra'
    | 'Africa/Addis_Ababa'
    | 'Africa/Algiers'
    | 'Africa/Asmara'
    | 'Africa/Asmera'
    | 'Africa/Bamako'
    | 'Africa/Bangui'
    | 'Africa/Banjul'
    | 'Africa/Bissau'
    | 'Africa/Blantyre'
    | 'Africa/Brazzaville'
    | 'Africa/Bujumbura'
    | 'Africa/Cairo'
    | 'Africa/Casablanca'
    | 'Africa/Ceuta'
    | 'Africa/Conakry'
    | 'Africa/Dakar'
    | 'Africa/Dar_es_Salaam'
    | 'Africa/Djibouti'
    | 'Africa/Douala'
    | 'Africa/El_Aaiun'
    | 'Africa/Freetown'
    | 'Africa/Gaborone'
    | 'Africa/Harare'
    | 'Africa/Johannesburg'
    | 'Africa/Juba'
    | 'Africa/Kampala'
    | 'Africa/Khartoum'
    | 'Africa/Kigali'
    | 'Africa/Kinshasa'
    | 'Africa/Lagos'
    | 'Africa/Libreville'
    | 'Africa/Lome'
    | 'Africa/Luanda'
    | 'Africa/Lubumbashi'
    | 'Africa/Lusaka'
    | 'Africa/Malabo'
    | 'Africa/Maputo'
    | 'Africa/Maseru'
    | 'Africa/Mbabane'
    | 'Africa/Mogadishu'
    | 'Africa/Monrovia'
    | 'Africa/Nairobi'
    | 'Africa/Ndjamena'
    | 'Africa/Niamey'
    | 'Africa/Nouakchott'
    | 'Africa/Ouagadougou'
    | 'Africa/Porto-Novo'
    | 'Africa/Sao_Tome'
    | 'Africa/Timbuktu'
    | 'Africa/Tripoli'
    | 'Africa/Tunis'
    | 'Africa/Windhoek'
    | 'America/Adak'
    | 'America/Anchorage'
    | 'America/Anguilla'
    | 'America/Antigua'
    | 'America/Araguaina'
    | 'America/Argentina/Buenos_Aires'
    | 'America/Argentina/Catamarca'
    | 'America/Argentina/ComodRivadavia'
    | 'America/Argentina/Cordoba'
    | 'America/Argentina/Jujuy'
    | 'America/Argentina/La_Rioja'
    | 'America/Argentina/Mendoza'
    | 'America/Argentina/Rio_Gallegos'
    | 'America/Argentina/Salta'
    | 'America/Argentina/San_Juan'
    | 'America/Argentina/San_Luis'
    | 'America/Argentina/Tucuman'
    | 'America/Argentina/Ushuaia'
    | 'America/Aruba'
    | 'America/Asuncion'
    | 'America/Atikokan'
    | 'America/Atka'
    | 'America/Bahia'
    | 'America/Bahia_Banderas'
    | 'America/Barbados'
    | 'America/Belem'
    | 'America/Belize'
    | 'America/Blanc-Sablon'
    | 'America/Boa_Vista'
    | 'America/Bogota'
    | 'America/Boise'
    | 'America/Buenos_Aires'
    | 'America/Cambridge_Bay'
    | 'America/Campo_Grande'
    | 'America/Cancun'
    | 'America/Caracas'
    | 'America/Catamarca'
    | 'America/Cayenne'
    | 'America/Cayman'
    | 'America/Chicago'
    | 'America/Chihuahua'
    | 'America/Ciudad_Juarez'
    | 'America/Coral_Harbour'
    | 'America/Cordoba'
    | 'America/Costa_Rica'
    | 'America/Coyhaique'
    | 'America/Creston'
    | 'America/Cuiaba'
    | 'America/Curacao'
    | 'America/Danmarkshavn'
    | 'America/Dawson'
    | 'America/Dawson_Creek'
    | 'America/Denver'
    | 'America/Detroit'
    | 'America/Dominica'
    | 'America/Edmonton'
    | 'America/Eirunepe'
    | 'America/El_Salvador'
    | 'America/Ensenada'
    | 'America/Fort_Nelson'
    | 'America/Fort_Wayne'
    | 'America/Fortaleza'
    | 'America/Glace_Bay'
    | 'America/Godthab'
    | 'America/Goose_Bay'
    | 'America/Grand_Turk'
    | 'America/Grenada'
    | 'America/Guadeloupe'
    | 'America/Guatemala'
    | 'America/Guayaquil'
    | 'America/Guyana'
    | 'America/Halifax'
    | 'America/Havana'
    | 'America/Hermosillo'
    | 'America/Indiana/Indianapolis'
    | 'America/Indiana/Knox'
    | 'America/Indiana/Marengo'
    | 'America/Indiana/Petersburg'
    | 'America/Indiana/Tell_City'
    | 'America/Indiana/Vevay'
    | 'America/Indiana/Vincennes'
    | 'America/Indiana/Winamac'
    | 'America/Indianapolis'
    | 'America/Inuvik'
    | 'America/Iqaluit'
    | 'America/Jamaica'
    | 'America/Jujuy'
    | 'America/Juneau'
    | 'America/Kentucky/Louisville'
    | 'America/Kentucky/Monticello'
    | 'America/Knox_IN'
    | 'America/Kralendijk'
    | 'America/La_Paz'
    | 'America/Lima'
    | 'America/Los_Angeles'
    | 'America/Louisville'
    | 'America/Lower_Princes'
    | 'America/Maceio'
    | 'America/Managua'
    | 'America/Manaus'
    | 'America/Marigot'
    | 'America/Martinique'
    | 'America/Matamoros'
    | 'America/Mazatlan'
    | 'America/Mendoza'
    | 'America/Menominee'
    | 'America/Merida'
    | 'America/Metlakatla'
    | 'America/Mexico_City'
    | 'America/Miquelon'
    | 'America/Moncton'
    | 'America/Monterrey'
    | 'America/Montevideo'
    | 'America/Montreal'
    | 'America/Montserrat'
    | 'America/Nassau'
    | 'America/New_York'
    | 'America/Nipigon'
    | 'America/Nome'
    | 'America/Noronha'
    | 'America/North_Dakota/Beulah'
    | 'America/North_Dakota/Center'
    | 'America/North_Dakota/New_Salem'
    | 'America/Nuuk'
    | 'America/Ojinaga'
    | 'America/Panama'
    | 'America/Pangnirtung'
    | 'America/Paramaribo'
    | 'America/Phoenix'
    | 'America/Port-au-Prince'
    | 'America/Port_of_Spain'
    | 'America/Porto_Acre'
    | 'America/Porto_Velho'
    | 'America/Puerto_Rico'
    | 'America/Punta_Arenas'
    | 'America/Rainy_River'
    | 'America/Rankin_Inlet'
    | 'America/Recife'
    | 'America/Regina'
    | 'America/Resolute'
    | 'America/Rio_Branco'
    | 'America/Rosario'
    | 'America/Santa_Isabel'
    | 'America/Santarem'
    | 'America/Santiago'
    | 'America/Santo_Domingo'
    | 'America/Sao_Paulo'
    | 'America/Scoresbysund'
    | 'America/Shiprock'
    | 'America/Sitka'
    | 'America/St_Barthelemy'
    | 'America/St_Johns'
    | 'America/St_Kitts'
    | 'America/St_Lucia'
    | 'America/St_Thomas'
    | 'America/St_Vincent'
    | 'America/Swift_Current'
    | 'America/Tegucigalpa'
    | 'America/Thule'
    | 'America/Thunder_Bay'
    | 'America/Tijuana'
    | 'America/Toronto'
    | 'America/Tortola'
    | 'America/Vancouver'
    | 'America/Virgin'
    | 'America/Whitehorse'
    | 'America/Winnipeg'
    | 'America/Yakutat'
    | 'America/Yellowknife'
    | 'Antarctica/Casey'
    | 'Antarctica/Davis'
    | 'Antarctica/DumontDUrville'
    | 'Antarctica/Macquarie'
    | 'Antarctica/Mawson'
    | 'Antarctica/McMurdo'
    | 'Antarctica/Palmer'
    | 'Antarctica/Rothera'
    | 'Antarctica/South_Pole'
    | 'Antarctica/Syowa'
    | 'Antarctica/Troll'
    | 'Antarctica/Vostok'
    | 'Arctic/Longyearbyen'
    | 'Asia/Aden'
    | 'Asia/Almaty'
    | 'Asia/Amman'
    | 'Asia/Anadyr'
    | 'Asia/Aqtau'
    | 'Asia/Aqtobe'
    | 'Asia/Ashgabat'
    | 'Asia/Ashkhabad'
    | 'Asia/Atyrau'
    | 'Asia/Baghdad'
    | 'Asia/Bahrain'
    | 'Asia/Baku'
    | 'Asia/Bangkok'
    | 'Asia/Barnaul'
    | 'Asia/Beirut'
    | 'Asia/Bishkek'
    | 'Asia/Brunei'
    | 'Asia/Calcutta'
    | 'Asia/Chita'
    | 'Asia/Choibalsan'
    | 'Asia/Chongqing'
    | 'Asia/Chungking'
    | 'Asia/Colombo'
    | 'Asia/Dacca'
    | 'Asia/Damascus'
    | 'Asia/Dhaka'
    | 'Asia/Dili'
    | 'Asia/Dubai'
    | 'Asia/Dushanbe'
    | 'Asia/Famagusta'
    | 'Asia/Gaza'
    | 'Asia/Harbin'
    | 'Asia/Hebron'
    | 'Asia/Ho_Chi_Minh'
    | 'Asia/Hong_Kong'
    | 'Asia/Hovd'
    | 'Asia/Irkutsk'
    | 'Asia/Istanbul'
    | 'Asia/Jakarta'
    | 'Asia/Jayapura'
    | 'Asia/Jerusalem'
    | 'Asia/Kabul'
    | 'Asia/Kamchatka'
    | 'Asia/Karachi'
    | 'Asia/Kashgar'
    | 'Asia/Kathmandu'
    | 'Asia/Katmandu'
    | 'Asia/Khandyga'
    | 'Asia/Kolkata'
    | 'Asia/Krasnoyarsk'
    | 'Asia/Kuala_Lumpur'
    | 'Asia/Kuching'
    | 'Asia/Kuwait'
    | 'Asia/Macao'
    | 'Asia/Macau'
    | 'Asia/Magadan'
    | 'Asia/Makassar'
    | 'Asia/Manila'
    | 'Asia/Muscat'
    | 'Asia/Nicosia'
    | 'Asia/Novokuznetsk'
    | 'Asia/Novosibirsk'
    | 'Asia/Omsk'
    | 'Asia/Oral'
    | 'Asia/Phnom_Penh'
    | 'Asia/Pontianak'
    | 'Asia/Pyongyang'
    | 'Asia/Qatar'
    | 'Asia/Qostanay'
    | 'Asia/Qyzylorda'
    | 'Asia/Rangoon'
    | 'Asia/Riyadh'
    | 'Asia/Saigon'
    | 'Asia/Sakhalin'
    | 'Asia/Samarkand'
    | 'Asia/Seoul'
    | 'Asia/Shanghai'
    | 'Asia/Singapore'
    | 'Asia/Srednekolymsk'
    | 'Asia/Taipei'
    | 'Asia/Tashkent'
    | 'Asia/Tbilisi'
    | 'Asia/Tehran'
    | 'Asia/Tel_Aviv'
    | 'Asia/Thimbu'
    | 'Asia/Thimphu'
    | 'Asia/Tokyo'
    | 'Asia/Tomsk'
    | 'Asia/Ujung_Pandang'
    | 'Asia/Ulaanbaatar'
    | 'Asia/Ulan_Bator'
    | 'Asia/Urumqi'
    | 'Asia/Ust-Nera'
    | 'Asia/Vientiane'
    | 'Asia/Vladivostok'
    | 'Asia/Yakutsk'
    | 'Asia/Yangon'
    | 'Asia/Yekaterinburg'
    | 'Asia/Yerevan'
    | 'Atlantic/Azores'
    | 'Atlantic/Bermuda'
    | 'Atlantic/Canary'
    | 'Atlantic/Cape_Verde'
    | 'Atlantic/Faeroe'
    | 'Atlantic/Faroe'
    | 'Atlantic/Jan_Mayen'
    | 'Atlantic/Madeira'
    | 'Atlantic/Reykjavik'
    | 'Atlantic/South_Georgia'
    | 'Atlantic/St_Helena'
    | 'Atlantic/Stanley'
    | 'Australia/ACT'
    | 'Australia/Adelaide'
    | 'Australia/Brisbane'
    | 'Australia/Broken_Hill'
    | 'Australia/Canberra'
    | 'Australia/Currie'
    | 'Australia/Darwin'
    | 'Australia/Eucla'
    | 'Australia/Hobart'
    | 'Australia/LHI'
    | 'Australia/Lindeman'
    | 'Australia/Lord_Howe'
    | 'Australia/Melbourne'
    | 'Australia/NSW'
    | 'Australia/North'
    | 'Australia/Perth'
    | 'Australia/Queensland'
    | 'Australia/South'
    | 'Australia/Sydney'
    | 'Australia/Tasmania'
    | 'Australia/Victoria'
    | 'Australia/West'
    | 'Australia/Yancowinna'
    | 'Brazil/Acre'
    | 'Brazil/DeNoronha'
    | 'Brazil/East'
    | 'Brazil/West'
    | 'CET'
    | 'CST6CDT'
    | 'Canada/Atlantic'
    | 'Canada/Central'
    | 'Canada/Eastern'
    | 'Canada/Mountain'
    | 'Canada/Newfoundland'
    | 'Canada/Pacific'
    | 'Canada/Saskatchewan'
    | 'Canada/Yukon'
    | 'Chile/Continental'
    | 'Chile/EasterIsland'
    | 'Cuba'
    | 'EET'
    | 'EST'
    | 'EST5EDT'
    | 'Egypt'
    | 'Eire'
    | 'Etc/GMT'
    | 'Etc/GMT+0'
    | 'Etc/GMT+1'
    | 'Etc/GMT+10'
    | 'Etc/GMT+11'
    | 'Etc/GMT+12'
    | 'Etc/GMT+2'
    | 'Etc/GMT+3'
    | 'Etc/GMT+4'
    | 'Etc/GMT+5'
    | 'Etc/GMT+6'
    | 'Etc/GMT+7'
    | 'Etc/GMT+8'
    | 'Etc/GMT+9'
    | 'Etc/GMT-0'
    | 'Etc/GMT-1'
    | 'Etc/GMT-10'
    | 'Etc/GMT-11'
    | 'Etc/GMT-12'
    | 'Etc/GMT-13'
    | 'Etc/GMT-14'
    | 'Etc/GMT-2'
    | 'Etc/GMT-3'
    | 'Etc/GMT-4'
    | 'Etc/GMT-5'
    | 'Etc/GMT-6'
    | 'Etc/GMT-7'
    | 'Etc/GMT-8'
    | 'Etc/GMT-9'
    | 'Etc/GMT0'
    | 'Etc/Greenwich'
    | 'Etc/UCT'
    | 'Etc/UTC'
    | 'Etc/Universal'
    | 'Etc/Zulu'
    | 'Europe/Amsterdam'
    | 'Europe/Andorra'
    | 'Europe/Astrakhan'
    | 'Europe/Athens'
    | 'Europe/Belfast'
    | 'Europe/Belgrade'
    | 'Europe/Berlin'
    | 'Europe/Bratislava'
    | 'Europe/Brussels'
    | 'Europe/Bucharest'
    | 'Europe/Budapest'
    | 'Europe/Busingen'
    | 'Europe/Chisinau'
    | 'Europe/Copenhagen'
    | 'Europe/Dublin'
    | 'Europe/Gibraltar'
    | 'Europe/Guernsey'
    | 'Europe/Helsinki'
    | 'Europe/Isle_of_Man'
    | 'Europe/Istanbul'
    | 'Europe/Jersey'
    | 'Europe/Kaliningrad'
    | 'Europe/Kiev'
    | 'Europe/Kirov'
    | 'Europe/Kyiv'
    | 'Europe/Lisbon'
    | 'Europe/Ljubljana'
    | 'Europe/London'
    | 'Europe/Luxembourg'
    | 'Europe/Madrid'
    | 'Europe/Malta'
    | 'Europe/Mariehamn'
    | 'Europe/Minsk'
    | 'Europe/Monaco'
    | 'Europe/Moscow'
    | 'Europe/Nicosia'
    | 'Europe/Oslo'
    | 'Europe/Paris'
    | 'Europe/Podgorica'
    | 'Europe/Prague'
    | 'Europe/Riga'
    | 'Europe/Rome'
    | 'Europe/Samara'
    | 'Europe/San_Marino'
    | 'Europe/Sarajevo'
    | 'Europe/Saratov'
    | 'Europe/Simferopol'
    | 'Europe/Skopje'
    | 'Europe/Sofia'
    | 'Europe/Stockholm'
    | 'Europe/Tallinn'
    | 'Europe/Tirane'
    | 'Europe/Tiraspol'
    | 'Europe/Ulyanovsk'
    | 'Europe/Uzhgorod'
    | 'Europe/Vaduz'
    | 'Europe/Vatican'
    | 'Europe/Vienna'
    | 'Europe/Vilnius'
    | 'Europe/Volgograd'
    | 'Europe/Warsaw'
    | 'Europe/Zagreb'
    | 'Europe/Zaporozhye'
    | 'Europe/Zurich'
    | 'GB'
    | 'GB-Eire'
    | 'GMT'
    | 'GMT+0'
    | 'GMT-0'
    | 'GMT0'
    | 'Greenwich'
    | 'HST'
    | 'Hongkong'
    | 'Iceland'
    | 'Indian/Antananarivo'
    | 'Indian/Chagos'
    | 'Indian/Christmas'
    | 'Indian/Cocos'
    | 'Indian/Comoro'
    | 'Indian/Kerguelen'
    | 'Indian/Mahe'
    | 'Indian/Maldives'
    | 'Indian/Mauritius'
    | 'Indian/Mayotte'
    | 'Indian/Reunion'
    | 'Iran'
    | 'Israel'
    | 'Jamaica'
    | 'Japan'
    | 'Kwajalein'
    | 'Libya'
    | 'MET'
    | 'MST'
    | 'MST7MDT'
    | 'Mexico/BajaNorte'
    | 'Mexico/BajaSur'
    | 'Mexico/General'
    | 'NZ'
    | 'NZ-CHAT'
    | 'Navajo'
    | 'PRC'
    | 'PST8PDT'
    | 'Pacific/Apia'
    | 'Pacific/Auckland'
    | 'Pacific/Bougainville'
    | 'Pacific/Chatham'
    | 'Pacific/Chuuk'
    | 'Pacific/Easter'
    | 'Pacific/Efate'
    | 'Pacific/Enderbury'
    | 'Pacific/Fakaofo'
    | 'Pacific/Fiji'
    | 'Pacific/Funafuti'
    | 'Pacific/Galapagos'
    | 'Pacific/Gambier'
    | 'Pacific/Guadalcanal'
    | 'Pacific/Guam'
    | 'Pacific/Honolulu'
    | 'Pacific/Johnston'
    | 'Pacific/Kanton'
    | 'Pacific/Kiritimati'
    | 'Pacific/Kosrae'
    | 'Pacific/Kwajalein'
    | 'Pacific/Majuro'
    | 'Pacific/Marquesas'
    | 'Pacific/Midway'
    | 'Pacific/Nauru'
    | 'Pacific/Niue'
    | 'Pacific/Norfolk'
    | 'Pacific/Noumea'
    | 'Pacific/Pago_Pago'
    | 'Pacific/Palau'
    | 'Pacific/Pitcairn'
    | 'Pacific/Pohnpei'
    | 'Pacific/Ponape'
    | 'Pacific/Port_Moresby'
    | 'Pacific/Rarotonga'
    | 'Pacific/Saipan'
    | 'Pacific/Samoa'
    | 'Pacific/Tahiti'
    | 'Pacific/Tarawa'
    | 'Pacific/Tongatapu'
    | 'Pacific/Truk'
    | 'Pacific/Wake'
    | 'Pacific/Wallis'
    | 'Pacific/Yap'
    | 'Poland'
    | 'Portugal'
    | 'ROC'
    | 'ROK'
    | 'Singapore'
    | 'Turkey'
    | 'UCT'
    | 'US/Alaska'
    | 'US/Aleutian'
    | 'US/Arizona'
    | 'US/Central'
    | 'US/East-Indiana'
    | 'US/Eastern'
    | 'US/Hawaii'
    | 'US/Indiana-Starke'
    | 'US/Michigan'
    | 'US/Mountain'
    | 'US/Pacific'
    | 'US/Samoa'
    | 'UTC'
    | 'Universal'
    | 'W-SU'
    | 'WET'
    | 'Zulu';
  [k: string]: unknown | undefined;
};
export type ScheduleInterval = 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'semiannually' | 'yearly' | 'cron';

/**
 * The top-level registries key is optional. It allows you to specify authentication details that Dependabot can use to access private package registries.
 */
export interface Registry {
  [k: string]:
    | {
        /**
         * Identifies the type of registry.
         */
        type:
          | 'cargo-registry'
          | 'composer-repository'
          | 'docker-registry'
          | 'git'
          | 'goproxy-server'
          | 'hex-organization'
          | 'hex-repository'
          | 'helm-registry'
          | 'maven-repository'
          | 'npm-registry'
          | 'nuget-feed'
          | 'pub-repository'
          | 'python-index'
          | 'rubygems-server'
          | 'terraform-registry';
        /**
         * The URL to use to access the dependencies in this registry. The protocol is optional. If not specified, 'https://' is assumed. Dependabot adds or ignores trailing slashes as required.
         */
        url: string;
        /**
         * The username that Dependabot uses to access the registry.
         */
        username?: string;
        /**
         * A reference to a Dependabot secret containing the password for the specified user.
         */
        password?: string;
        /**
         * A reference to a Dependabot secret containing an access key for this registry.
         */
        key?: string;
        /**
         * A reference to a Dependabot secret containing an access token for this registry.
         */
        token?: string;
        /**
         * For registries with type: python-index, if the boolean value is true, pip resolves dependencies by using the specified URL rather than the base URL of the Python Package Index (by default https://pypi.org/simple).
         */
        'replaces-base'?: boolean;
        /**
         * For registries with type: npm-registry, the npm scope or scopes served by this registry, for example '@my-org'. Dependabot binds only the listed scopes to this registry when generating the .npmrc, so packages outside those scopes continue to resolve from the base registry. This value takes precedence over scope inference from an existing .npmrc or from the lockfile.
         */
        scope?: [string, ...string[]] | string;
        organization?: string;
        repo?: string;
        'auth-key'?: string;
        'public-key-fingerprint'?: string;
        /**
         * The name of the cargo registry.
         */
        registry?: string;
        /**
         * The tenant ID for Azure OIDC authentication.
         */
        'tenant-id'?: string;
        /**
         * The client ID for Azure OIDC authentication.
         */
        'client-id'?: string;
        /**
         * The JFrog OIDC provider name for authentication.
         */
        'jfrog-oidc-provider-name'?: string;
        /**
         * The identity mapping name for JFrog OIDC authentication.
         */
        'identity-mapping-name'?: string;
        /**
         * The audience for OIDC or AWS authentication.
         */
        audience?: string;
        /**
         * The AWS region for AWS CodeArtifact authentication.
         */
        'aws-region'?: string;
        /**
         * The AWS account ID for AWS CodeArtifact authentication.
         */
        'account-id'?: string;
        /**
         * The AWS role name for AWS CodeArtifact authentication.
         */
        'role-name'?: string;
        /**
         * The domain for AWS CodeArtifact authentication.
         */
        domain?: string;
        /**
         * The domain owner for AWS CodeArtifact authentication.
         */
        'domain-owner'?: string;
      }
    | undefined;
}
/**
 * Define a group that spans multiple package ecosystems, allowing consolidated pull requests across different ecosystems
 */
export interface MultiEcosystemGroup {
  /**
   * Schedule preferences for the group
   */
  schedule: {
    interval: ScheduleInterval;
    /**
     * Specify an alternative day to check for updates
     */
    day?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
    /**
     * Specify an alternative time of day to check for updates (format: hh:mm)
     */
    time?: string;
    /**
     * The time zone identifier must be from the Time Zone database maintained by IANA
     */
    timezone?:
      | 'Africa/Abidjan'
      | 'Africa/Accra'
      | 'Africa/Addis_Ababa'
      | 'Africa/Algiers'
      | 'Africa/Asmara'
      | 'Africa/Asmera'
      | 'Africa/Bamako'
      | 'Africa/Bangui'
      | 'Africa/Banjul'
      | 'Africa/Bissau'
      | 'Africa/Blantyre'
      | 'Africa/Brazzaville'
      | 'Africa/Bujumbura'
      | 'Africa/Cairo'
      | 'Africa/Casablanca'
      | 'Africa/Ceuta'
      | 'Africa/Conakry'
      | 'Africa/Dakar'
      | 'Africa/Dar_es_Salaam'
      | 'Africa/Djibouti'
      | 'Africa/Douala'
      | 'Africa/El_Aaiun'
      | 'Africa/Freetown'
      | 'Africa/Gaborone'
      | 'Africa/Harare'
      | 'Africa/Johannesburg'
      | 'Africa/Juba'
      | 'Africa/Kampala'
      | 'Africa/Khartoum'
      | 'Africa/Kigali'
      | 'Africa/Kinshasa'
      | 'Africa/Lagos'
      | 'Africa/Libreville'
      | 'Africa/Lome'
      | 'Africa/Luanda'
      | 'Africa/Lubumbashi'
      | 'Africa/Lusaka'
      | 'Africa/Malabo'
      | 'Africa/Maputo'
      | 'Africa/Maseru'
      | 'Africa/Mbabane'
      | 'Africa/Mogadishu'
      | 'Africa/Monrovia'
      | 'Africa/Nairobi'
      | 'Africa/Ndjamena'
      | 'Africa/Niamey'
      | 'Africa/Nouakchott'
      | 'Africa/Ouagadougou'
      | 'Africa/Porto-Novo'
      | 'Africa/Sao_Tome'
      | 'Africa/Timbuktu'
      | 'Africa/Tripoli'
      | 'Africa/Tunis'
      | 'Africa/Windhoek'
      | 'America/Adak'
      | 'America/Anchorage'
      | 'America/Anguilla'
      | 'America/Antigua'
      | 'America/Araguaina'
      | 'America/Argentina/Buenos_Aires'
      | 'America/Argentina/Catamarca'
      | 'America/Argentina/ComodRivadavia'
      | 'America/Argentina/Cordoba'
      | 'America/Argentina/Jujuy'
      | 'America/Argentina/La_Rioja'
      | 'America/Argentina/Mendoza'
      | 'America/Argentina/Rio_Gallegos'
      | 'America/Argentina/Salta'
      | 'America/Argentina/San_Juan'
      | 'America/Argentina/San_Luis'
      | 'America/Argentina/Tucuman'
      | 'America/Argentina/Ushuaia'
      | 'America/Aruba'
      | 'America/Asuncion'
      | 'America/Atikokan'
      | 'America/Atka'
      | 'America/Bahia'
      | 'America/Bahia_Banderas'
      | 'America/Barbados'
      | 'America/Belem'
      | 'America/Belize'
      | 'America/Blanc-Sablon'
      | 'America/Boa_Vista'
      | 'America/Bogota'
      | 'America/Boise'
      | 'America/Buenos_Aires'
      | 'America/Cambridge_Bay'
      | 'America/Campo_Grande'
      | 'America/Cancun'
      | 'America/Caracas'
      | 'America/Catamarca'
      | 'America/Cayenne'
      | 'America/Cayman'
      | 'America/Chicago'
      | 'America/Chihuahua'
      | 'America/Ciudad_Juarez'
      | 'America/Coral_Harbour'
      | 'America/Cordoba'
      | 'America/Costa_Rica'
      | 'America/Coyhaique'
      | 'America/Creston'
      | 'America/Cuiaba'
      | 'America/Curacao'
      | 'America/Danmarkshavn'
      | 'America/Dawson'
      | 'America/Dawson_Creek'
      | 'America/Denver'
      | 'America/Detroit'
      | 'America/Dominica'
      | 'America/Edmonton'
      | 'America/Eirunepe'
      | 'America/El_Salvador'
      | 'America/Ensenada'
      | 'America/Fort_Nelson'
      | 'America/Fort_Wayne'
      | 'America/Fortaleza'
      | 'America/Glace_Bay'
      | 'America/Godthab'
      | 'America/Goose_Bay'
      | 'America/Grand_Turk'
      | 'America/Grenada'
      | 'America/Guadeloupe'
      | 'America/Guatemala'
      | 'America/Guayaquil'
      | 'America/Guyana'
      | 'America/Halifax'
      | 'America/Havana'
      | 'America/Hermosillo'
      | 'America/Indiana/Indianapolis'
      | 'America/Indiana/Knox'
      | 'America/Indiana/Marengo'
      | 'America/Indiana/Petersburg'
      | 'America/Indiana/Tell_City'
      | 'America/Indiana/Vevay'
      | 'America/Indiana/Vincennes'
      | 'America/Indiana/Winamac'
      | 'America/Indianapolis'
      | 'America/Inuvik'
      | 'America/Iqaluit'
      | 'America/Jamaica'
      | 'America/Jujuy'
      | 'America/Juneau'
      | 'America/Kentucky/Louisville'
      | 'America/Kentucky/Monticello'
      | 'America/Knox_IN'
      | 'America/Kralendijk'
      | 'America/La_Paz'
      | 'America/Lima'
      | 'America/Los_Angeles'
      | 'America/Louisville'
      | 'America/Lower_Princes'
      | 'America/Maceio'
      | 'America/Managua'
      | 'America/Manaus'
      | 'America/Marigot'
      | 'America/Martinique'
      | 'America/Matamoros'
      | 'America/Mazatlan'
      | 'America/Mendoza'
      | 'America/Menominee'
      | 'America/Merida'
      | 'America/Metlakatla'
      | 'America/Mexico_City'
      | 'America/Miquelon'
      | 'America/Moncton'
      | 'America/Monterrey'
      | 'America/Montevideo'
      | 'America/Montreal'
      | 'America/Montserrat'
      | 'America/Nassau'
      | 'America/New_York'
      | 'America/Nipigon'
      | 'America/Nome'
      | 'America/Noronha'
      | 'America/North_Dakota/Beulah'
      | 'America/North_Dakota/Center'
      | 'America/North_Dakota/New_Salem'
      | 'America/Nuuk'
      | 'America/Ojinaga'
      | 'America/Panama'
      | 'America/Pangnirtung'
      | 'America/Paramaribo'
      | 'America/Phoenix'
      | 'America/Port-au-Prince'
      | 'America/Port_of_Spain'
      | 'America/Porto_Acre'
      | 'America/Porto_Velho'
      | 'America/Puerto_Rico'
      | 'America/Punta_Arenas'
      | 'America/Rainy_River'
      | 'America/Rankin_Inlet'
      | 'America/Recife'
      | 'America/Regina'
      | 'America/Resolute'
      | 'America/Rio_Branco'
      | 'America/Rosario'
      | 'America/Santa_Isabel'
      | 'America/Santarem'
      | 'America/Santiago'
      | 'America/Santo_Domingo'
      | 'America/Sao_Paulo'
      | 'America/Scoresbysund'
      | 'America/Shiprock'
      | 'America/Sitka'
      | 'America/St_Barthelemy'
      | 'America/St_Johns'
      | 'America/St_Kitts'
      | 'America/St_Lucia'
      | 'America/St_Thomas'
      | 'America/St_Vincent'
      | 'America/Swift_Current'
      | 'America/Tegucigalpa'
      | 'America/Thule'
      | 'America/Thunder_Bay'
      | 'America/Tijuana'
      | 'America/Toronto'
      | 'America/Tortola'
      | 'America/Vancouver'
      | 'America/Virgin'
      | 'America/Whitehorse'
      | 'America/Winnipeg'
      | 'America/Yakutat'
      | 'America/Yellowknife'
      | 'Antarctica/Casey'
      | 'Antarctica/Davis'
      | 'Antarctica/DumontDUrville'
      | 'Antarctica/Macquarie'
      | 'Antarctica/Mawson'
      | 'Antarctica/McMurdo'
      | 'Antarctica/Palmer'
      | 'Antarctica/Rothera'
      | 'Antarctica/South_Pole'
      | 'Antarctica/Syowa'
      | 'Antarctica/Troll'
      | 'Antarctica/Vostok'
      | 'Arctic/Longyearbyen'
      | 'Asia/Aden'
      | 'Asia/Almaty'
      | 'Asia/Amman'
      | 'Asia/Anadyr'
      | 'Asia/Aqtau'
      | 'Asia/Aqtobe'
      | 'Asia/Ashgabat'
      | 'Asia/Ashkhabad'
      | 'Asia/Atyrau'
      | 'Asia/Baghdad'
      | 'Asia/Bahrain'
      | 'Asia/Baku'
      | 'Asia/Bangkok'
      | 'Asia/Barnaul'
      | 'Asia/Beirut'
      | 'Asia/Bishkek'
      | 'Asia/Brunei'
      | 'Asia/Calcutta'
      | 'Asia/Chita'
      | 'Asia/Choibalsan'
      | 'Asia/Chongqing'
      | 'Asia/Chungking'
      | 'Asia/Colombo'
      | 'Asia/Dacca'
      | 'Asia/Damascus'
      | 'Asia/Dhaka'
      | 'Asia/Dili'
      | 'Asia/Dubai'
      | 'Asia/Dushanbe'
      | 'Asia/Famagusta'
      | 'Asia/Gaza'
      | 'Asia/Harbin'
      | 'Asia/Hebron'
      | 'Asia/Ho_Chi_Minh'
      | 'Asia/Hong_Kong'
      | 'Asia/Hovd'
      | 'Asia/Irkutsk'
      | 'Asia/Istanbul'
      | 'Asia/Jakarta'
      | 'Asia/Jayapura'
      | 'Asia/Jerusalem'
      | 'Asia/Kabul'
      | 'Asia/Kamchatka'
      | 'Asia/Karachi'
      | 'Asia/Kashgar'
      | 'Asia/Kathmandu'
      | 'Asia/Katmandu'
      | 'Asia/Khandyga'
      | 'Asia/Kolkata'
      | 'Asia/Krasnoyarsk'
      | 'Asia/Kuala_Lumpur'
      | 'Asia/Kuching'
      | 'Asia/Kuwait'
      | 'Asia/Macao'
      | 'Asia/Macau'
      | 'Asia/Magadan'
      | 'Asia/Makassar'
      | 'Asia/Manila'
      | 'Asia/Muscat'
      | 'Asia/Nicosia'
      | 'Asia/Novokuznetsk'
      | 'Asia/Novosibirsk'
      | 'Asia/Omsk'
      | 'Asia/Oral'
      | 'Asia/Phnom_Penh'
      | 'Asia/Pontianak'
      | 'Asia/Pyongyang'
      | 'Asia/Qatar'
      | 'Asia/Qostanay'
      | 'Asia/Qyzylorda'
      | 'Asia/Rangoon'
      | 'Asia/Riyadh'
      | 'Asia/Saigon'
      | 'Asia/Sakhalin'
      | 'Asia/Samarkand'
      | 'Asia/Seoul'
      | 'Asia/Shanghai'
      | 'Asia/Singapore'
      | 'Asia/Srednekolymsk'
      | 'Asia/Taipei'
      | 'Asia/Tashkent'
      | 'Asia/Tbilisi'
      | 'Asia/Tehran'
      | 'Asia/Tel_Aviv'
      | 'Asia/Thimbu'
      | 'Asia/Thimphu'
      | 'Asia/Tokyo'
      | 'Asia/Tomsk'
      | 'Asia/Ujung_Pandang'
      | 'Asia/Ulaanbaatar'
      | 'Asia/Ulan_Bator'
      | 'Asia/Urumqi'
      | 'Asia/Ust-Nera'
      | 'Asia/Vientiane'
      | 'Asia/Vladivostok'
      | 'Asia/Yakutsk'
      | 'Asia/Yangon'
      | 'Asia/Yekaterinburg'
      | 'Asia/Yerevan'
      | 'Atlantic/Azores'
      | 'Atlantic/Bermuda'
      | 'Atlantic/Canary'
      | 'Atlantic/Cape_Verde'
      | 'Atlantic/Faeroe'
      | 'Atlantic/Faroe'
      | 'Atlantic/Jan_Mayen'
      | 'Atlantic/Madeira'
      | 'Atlantic/Reykjavik'
      | 'Atlantic/South_Georgia'
      | 'Atlantic/St_Helena'
      | 'Atlantic/Stanley'
      | 'Australia/ACT'
      | 'Australia/Adelaide'
      | 'Australia/Brisbane'
      | 'Australia/Broken_Hill'
      | 'Australia/Canberra'
      | 'Australia/Currie'
      | 'Australia/Darwin'
      | 'Australia/Eucla'
      | 'Australia/Hobart'
      | 'Australia/LHI'
      | 'Australia/Lindeman'
      | 'Australia/Lord_Howe'
      | 'Australia/Melbourne'
      | 'Australia/NSW'
      | 'Australia/North'
      | 'Australia/Perth'
      | 'Australia/Queensland'
      | 'Australia/South'
      | 'Australia/Sydney'
      | 'Australia/Tasmania'
      | 'Australia/Victoria'
      | 'Australia/West'
      | 'Australia/Yancowinna'
      | 'Brazil/Acre'
      | 'Brazil/DeNoronha'
      | 'Brazil/East'
      | 'Brazil/West'
      | 'CET'
      | 'CST6CDT'
      | 'Canada/Atlantic'
      | 'Canada/Central'
      | 'Canada/Eastern'
      | 'Canada/Mountain'
      | 'Canada/Newfoundland'
      | 'Canada/Pacific'
      | 'Canada/Saskatchewan'
      | 'Canada/Yukon'
      | 'Chile/Continental'
      | 'Chile/EasterIsland'
      | 'Cuba'
      | 'EET'
      | 'EST'
      | 'EST5EDT'
      | 'Egypt'
      | 'Eire'
      | 'Etc/GMT'
      | 'Etc/GMT+0'
      | 'Etc/GMT+1'
      | 'Etc/GMT+10'
      | 'Etc/GMT+11'
      | 'Etc/GMT+12'
      | 'Etc/GMT+2'
      | 'Etc/GMT+3'
      | 'Etc/GMT+4'
      | 'Etc/GMT+5'
      | 'Etc/GMT+6'
      | 'Etc/GMT+7'
      | 'Etc/GMT+8'
      | 'Etc/GMT+9'
      | 'Etc/GMT-0'
      | 'Etc/GMT-1'
      | 'Etc/GMT-10'
      | 'Etc/GMT-11'
      | 'Etc/GMT-12'
      | 'Etc/GMT-13'
      | 'Etc/GMT-14'
      | 'Etc/GMT-2'
      | 'Etc/GMT-3'
      | 'Etc/GMT-4'
      | 'Etc/GMT-5'
      | 'Etc/GMT-6'
      | 'Etc/GMT-7'
      | 'Etc/GMT-8'
      | 'Etc/GMT-9'
      | 'Etc/GMT0'
      | 'Etc/Greenwich'
      | 'Etc/UCT'
      | 'Etc/UTC'
      | 'Etc/Universal'
      | 'Etc/Zulu'
      | 'Europe/Amsterdam'
      | 'Europe/Andorra'
      | 'Europe/Astrakhan'
      | 'Europe/Athens'
      | 'Europe/Belfast'
      | 'Europe/Belgrade'
      | 'Europe/Berlin'
      | 'Europe/Bratislava'
      | 'Europe/Brussels'
      | 'Europe/Bucharest'
      | 'Europe/Budapest'
      | 'Europe/Busingen'
      | 'Europe/Chisinau'
      | 'Europe/Copenhagen'
      | 'Europe/Dublin'
      | 'Europe/Gibraltar'
      | 'Europe/Guernsey'
      | 'Europe/Helsinki'
      | 'Europe/Isle_of_Man'
      | 'Europe/Istanbul'
      | 'Europe/Jersey'
      | 'Europe/Kaliningrad'
      | 'Europe/Kiev'
      | 'Europe/Kirov'
      | 'Europe/Kyiv'
      | 'Europe/Lisbon'
      | 'Europe/Ljubljana'
      | 'Europe/London'
      | 'Europe/Luxembourg'
      | 'Europe/Madrid'
      | 'Europe/Malta'
      | 'Europe/Mariehamn'
      | 'Europe/Minsk'
      | 'Europe/Monaco'
      | 'Europe/Moscow'
      | 'Europe/Nicosia'
      | 'Europe/Oslo'
      | 'Europe/Paris'
      | 'Europe/Podgorica'
      | 'Europe/Prague'
      | 'Europe/Riga'
      | 'Europe/Rome'
      | 'Europe/Samara'
      | 'Europe/San_Marino'
      | 'Europe/Sarajevo'
      | 'Europe/Saratov'
      | 'Europe/Simferopol'
      | 'Europe/Skopje'
      | 'Europe/Sofia'
      | 'Europe/Stockholm'
      | 'Europe/Tallinn'
      | 'Europe/Tirane'
      | 'Europe/Tiraspol'
      | 'Europe/Ulyanovsk'
      | 'Europe/Uzhgorod'
      | 'Europe/Vaduz'
      | 'Europe/Vatican'
      | 'Europe/Vienna'
      | 'Europe/Vilnius'
      | 'Europe/Volgograd'
      | 'Europe/Warsaw'
      | 'Europe/Zagreb'
      | 'Europe/Zaporozhye'
      | 'Europe/Zurich'
      | 'GB'
      | 'GB-Eire'
      | 'GMT'
      | 'GMT+0'
      | 'GMT-0'
      | 'GMT0'
      | 'Greenwich'
      | 'HST'
      | 'Hongkong'
      | 'Iceland'
      | 'Indian/Antananarivo'
      | 'Indian/Chagos'
      | 'Indian/Christmas'
      | 'Indian/Cocos'
      | 'Indian/Comoro'
      | 'Indian/Kerguelen'
      | 'Indian/Mahe'
      | 'Indian/Maldives'
      | 'Indian/Mauritius'
      | 'Indian/Mayotte'
      | 'Indian/Reunion'
      | 'Iran'
      | 'Israel'
      | 'Jamaica'
      | 'Japan'
      | 'Kwajalein'
      | 'Libya'
      | 'MET'
      | 'MST'
      | 'MST7MDT'
      | 'Mexico/BajaNorte'
      | 'Mexico/BajaSur'
      | 'Mexico/General'
      | 'NZ'
      | 'NZ-CHAT'
      | 'Navajo'
      | 'PRC'
      | 'PST8PDT'
      | 'Pacific/Apia'
      | 'Pacific/Auckland'
      | 'Pacific/Bougainville'
      | 'Pacific/Chatham'
      | 'Pacific/Chuuk'
      | 'Pacific/Easter'
      | 'Pacific/Efate'
      | 'Pacific/Enderbury'
      | 'Pacific/Fakaofo'
      | 'Pacific/Fiji'
      | 'Pacific/Funafuti'
      | 'Pacific/Galapagos'
      | 'Pacific/Gambier'
      | 'Pacific/Guadalcanal'
      | 'Pacific/Guam'
      | 'Pacific/Honolulu'
      | 'Pacific/Johnston'
      | 'Pacific/Kanton'
      | 'Pacific/Kiritimati'
      | 'Pacific/Kosrae'
      | 'Pacific/Kwajalein'
      | 'Pacific/Majuro'
      | 'Pacific/Marquesas'
      | 'Pacific/Midway'
      | 'Pacific/Nauru'
      | 'Pacific/Niue'
      | 'Pacific/Norfolk'
      | 'Pacific/Noumea'
      | 'Pacific/Pago_Pago'
      | 'Pacific/Palau'
      | 'Pacific/Pitcairn'
      | 'Pacific/Pohnpei'
      | 'Pacific/Ponape'
      | 'Pacific/Port_Moresby'
      | 'Pacific/Rarotonga'
      | 'Pacific/Saipan'
      | 'Pacific/Samoa'
      | 'Pacific/Tahiti'
      | 'Pacific/Tarawa'
      | 'Pacific/Tongatapu'
      | 'Pacific/Truk'
      | 'Pacific/Wake'
      | 'Pacific/Wallis'
      | 'Pacific/Yap'
      | 'Poland'
      | 'Portugal'
      | 'ROC'
      | 'ROK'
      | 'Singapore'
      | 'Turkey'
      | 'UCT'
      | 'US/Alaska'
      | 'US/Aleutian'
      | 'US/Arizona'
      | 'US/Central'
      | 'US/East-Indiana'
      | 'US/Eastern'
      | 'US/Hawaii'
      | 'US/Indiana-Starke'
      | 'US/Michigan'
      | 'US/Mountain'
      | 'US/Pacific'
      | 'US/Samoa'
      | 'UTC'
      | 'Universal'
      | 'W-SU'
      | 'WET'
      | 'Zulu';
    [k: string]: unknown | undefined;
  };
  /**
   * Labels to set on pull requests (additive - merges with ecosystem-level labels)
   *
   * @minItems 0
   */
  labels?: string[];
  /**
   * Assignees to set on pull requests (additive - merges with ecosystem-level assignees)
   *
   * @minItems 1
   */
  assignees?: [string, ...string[]];
  /**
   * Associate all pull requests raised for this group with a milestone. You need to specify the numeric identifier of the milestone and not its label.
   */
  milestone?: number;
  /**
   * Specify a different branch for manifest files and for pull requests.
   */
  'target-branch'?: string;
  /**
   * Commit message preferences for the group
   */
  'commit-message'?: (
    | {
        /**
         * A prefix for all commit messages
         */
        prefix: string;
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * A separate prefix for all commit messages that update dependencies in the Development dependency group
         */
        'prefix-development': string;
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * Specifies that any prefix is followed by a list of the dependencies updated in the commit
         */
        include: 'scope';
        [k: string]: unknown | undefined;
      }
  ) & {
    /**
     * A prefix for all commit messages
     */
    prefix?: string;
    /**
     * A separate prefix for all commit messages that update dependencies in the Development dependency group
     */
    'prefix-development'?: string;
    /**
     * Specifies that any prefix is followed by a list of the dependencies updated in the commit
     */
    include?: 'scope';
  };
  /**
   * Pull request branch name preferences for the group
   */
  'pull-request-branch-name'?: {
    /**
     * Change separator for PR branch name
     */
    separator: '-' | '_' | '/';
  };
  /**
   * Limit number of open pull requests for version updates.
   */
  'open-pull-requests-limit'?: number;
  /**
   * Specify the semantic versioning update types for the group.
   *
   * @minItems 1
   */
  'update-types'?: ['major' | 'minor' | 'patch', ...('major' | 'minor' | 'patch')[]];
  /**
   * Specify a dependency type to be included in the group.
   */
  'dependency-type'?: 'production' | 'development';
  /**
   * Exclude certain dependencies from the group.
   *
   * @minItems 1
   */
  'exclude-patterns'?: [string, ...string[]];
}
