/* eslint-disable */

export type Computes = (
  | {
      type?: 'add' | 'divide' | 'multiply' | 'subtract';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Number Value
       */
      value?: string | number;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'and' | 'prepend' | 'append';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * String Value
       */
      value?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'arrayTranslate';
      /**
       * Column Computed
       */
      column?: number;
      translationTable?:
        | string
        | {
            /**
             * Translation key-value pairs
             */
            [k: string]: (string | number) | undefined;
          };
      /**
       * Array Separator
       */
      arraySeparator?: string;
      /**
       * Result Separator
       */
      resultSeparator?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'awk';
      /**
       * Awk Script Name
       */
      script?: string;
      /**
       * Exclude Lines Matching
       */
      exclude?: string;
      /**
       * Keep Lines Matching
       */
      keep?: string;
      /**
       * Column Separator
       */
      separators?: string;
      /**
       * Column Computed
       */
      selectColumns?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'convert';
      /**
       * Column Computed
       */
      column?: number;
      conversion?: 'hex2Dec' | 'array2SimpleStatus';
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'duplicateColumn';
      /**
       * Column Computed
       */
      column?: number;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'excludeMatchingLines' | 'keepOnlyMatchingLines';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Regular Expression To Match
       */
      regExp?: string;
      /**
       * Value List To Match
       */
      valueList?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'extract';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Subcolumn Extracted
       */
      subColumn?: number;
      /**
       * Subcolumn Separators
       */
      subSeparators?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'extractPropertyFromWbemPath';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Property Extracted
       */
      property?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'json2Csv';
      /**
       * JSON Entry Key
       */
      entryKey?: string;
      /**
       * Properties To Capture
       */
      properties?: string;
      /**
       * Column Separator
       */
      separator?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'keepColumns';
      /**
       * Columns kept
       */
      columnNumbers?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'perBitTranslation';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * List Of Bits
       */
      bitList?: string;
      /**
       * Translation Table Name
       */
      translationTable?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'replace';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Value Replaced
       */
      existingValue?: string;
      /**
       * New Value
       */
      newValue?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'substring';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Starting Character Index
       */
      start?: string;
      /**
       * Substring Length
       */
      length?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'translate';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Translation Table Name
       */
      translationTable?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'xml2Csv';
      /**
       * XML Record Tag
       */
      recordTag?: string;
      /**
       * Properties To Capture
       */
      properties?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'encode';
      /**
       * The column index used for the Encode computation.
       */
      column?: number;
      /**
       * The encoding algorithm or format to apply (base64 or url).
       */
      encoding?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'decode';
      /**
       * The column index used for the Decode computation.
       */
      column?: number;
      /**
       * The encoding algorithm or format to reverse (base64 or url).
       */
      encoding?: string;
      [k: string]: unknown | undefined;
    }
)[];
/**
 * HTTP Method
 */
export type HttpMethod = 'get' | 'post' | 'delete' | 'put';
/**
 * Result Content Expected
 */
export type ResultContent = 'http_status' | 'header' | 'body' | 'all';
/**
 * Device Types
 */
export type DeviceKind =
  | 'hp'
  | 'nt'
  | 'linux'
  | 'osf1'
  | 'solaris'
  | 'sunos'
  | 'rs6000'
  | 'storage'
  | 'vms'
  | 'oob'
  | 'other';

export interface HttpsJsonSchemastoreOrgMetricshubConnectorJson {
  metrics?: Metrics;
  /**
   * Declared Connector Constants
   */
  constants?: {
    [k: string]: string | undefined;
  };
  /**
   * Sudo-able Commands
   */
  sudoCommands?: string[];
  beforeAll?: Sources;
  afterAll?: Sources;
  /**
   * List of beforeAll source dependencies specified as sets of source names.
   */
  beforeAllSourceDep?: string[][];
  /**
   * List of afterAll source dependencies specified as sets of source names.
   */
  afterAllSourceDep?: string[][];
  /**
   * Monitor Identity Properties
   */
  monitors?: {
    /**
     * Battery Monitor
     */
    battery?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Battery ID
             */
            id?: string;
            /**
             * Battery Display Name
             */
            name?: string;
            /**
             * Battery Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Battery Vendor
             */
            vendor?: string;
            /**
             * Battery Model
             */
            model?: string;
            /**
             * Battery Chemistry
             */
            chemistry?: string;
            /**
             * Additional Battery Information
             */
            info?: string;
            /**
             * Battery Type
             */
            type?: string;
            /**
             * Custom attributes
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Battery Status (ok, degraded, critical)
             */
            'hw.status{hw.type="battery"}'?: string;
            /**
             * Battery Charge Ratio (Between 0.00 and 1.00)
             */
            'hw.battery.charge'?: string;
            /**
             * Battery Time Left (In minutes)
             */
            'hw.battery.time_left'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          /**
           * The order the sources will be executed in.
           */
          executionOrder?: string[];
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Battery ID
             */
            id?: string;
            /**
             * Battery Display Name
             */
            name?: string;
            /**
             * Battery Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Battery Vendor
             */
            vendor?: string;
            /**
             * Battery Model
             */
            model?: string;
            /**
             * Battery Chemistry
             */
            chemistry?: string;
            /**
             * Additional Battery Information
             */
            info?: string;
            /**
             * Battery Type
             */
            type?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Battery Status (ok, degraded, critical)
             */
            'hw.status{hw.type="battery"}'?: string;
            /**
             * Battery Charge Ratio (Between 0.00 and 1.00)
             */
            'hw.battery.charge'?: string;
            /**
             * Battery Time Left (In minutes)
             */
            'hw.battery.time_left'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Blade Server Monitor
     */
    blade?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Blade ID
             */
            id?: string;
            /**
             * Blade Display Name
             */
            name?: string;
            /**
             * Blade Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Blade Name
             */
            blade_name?: string;
            /**
             * Blade Model
             */
            model?: string;
            /**
             * Blade Serial Number
             */
            serial_number?: string;
            /**
             * Additional Blade Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Blade ID
             */
            id?: string;
            /**
             * Blade Display Name
             */
            name?: string;
            /**
             * Blade Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Blade Name
             */
            blade_name?: string;
            /**
             * Blade Model
             */
            model?: string;
            /**
             * Blade Serial Number
             */
            serial_number?: string;
            /**
             * Additional Blade Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Blade Status (ok, degraded, critical)
             */
            'hw.status{hw.type="blade"}'?: string;
            /**
             * Blade Power State (on, suspended, off)
             */
            'hw.power_state{hw.type="blade"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Blade Status (ok, degraded, critical)
             */
            'hw.status{hw.type="blade"}'?: string;
            /**
             * Blade Power State (on, suspended, off)
             */
            'hw.power_state{hw.type="blade"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * CPU Monitor
     */
    cpu?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * ID
             */
            id?: string;
            /**
             * Display Name
             */
            name?: string;
            /**
             * Custom attributes
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * CPU ID
             */
            id?: string;
            /**
             * CPU Display Name
             */
            name?: string;
            /**
             * CPU Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * CPU Vendor
             */
            vendor?: string;
            /**
             * CPU Model
             */
            model?: string;
            /**
             * Additional CPU Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * CPU Speed Threshold
             */
            'hw.cpu.speed.limit{limit_type="max"}'?: string;
            /**
             * CPU Error Threshold (degraded)
             */
            'hw.errors.limit{hw.type="cpu", limit_type="degraded"}'?: string;
            /**
             * CPU Error Threshold (critical)
             */
            'hw.errors.limit{hw.type="cpu", limit_type="critical"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * CPU Status (ok, degraded, critical)
             */
            'hw.status{hw.type="cpu"}'?: string;
            /**
             * CPU Predicted Failure Status (true/1 or false/0)
             */
            'hw.status{hw.type="cpu", state="predicted_failure"}'?: string;
            /**
             * CPU Speed (in Hertz)
             */
            'hw.cpu.speed'?: string;
            /**
             * CPU Error Count
             */
            'hw.errors{hw.type="cpu"}'?: string;
            /**
             * CPU Power Consumption (in Watts)
             */
            'hw.power{hw.type="cpu"}'?: string;
            /**
             * CPU Energy Usage (in Kilowatts-hour)
             */
            'hw.energy{hw.type="cpu"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Disk Controller Monitor
     */
    disk_controller?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Disk Controller ID
             */
            id?: string;
            /**
             * Disk Controller Display Name
             */
            name?: string;
            /**
             * Disk Controller Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Disk Controller Vendor
             */
            vendor?: string;
            /**
             * Disk Controller Model
             */
            model?: string;
            /**
             * Disk Controller Number
             */
            controller_number?: string;
            /**
             * Disk Controller BIOS Version
             */
            bios_version?: string;
            /**
             * Disk Controller Firmware Version
             */
            firmware_version?: string;
            /**
             * Disk Controller Driver Version
             */
            driver_version?: string;
            /**
             * Disk Controller Serial Number
             */
            serial_number?: string;
            /**
             * Additional Disk Controller Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Disk Controller ID
             */
            id?: string;
            /**
             * Disk Controller Display Name
             */
            name?: string;
            /**
             * Disk Controller Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Disk Controller Vendor
             */
            vendor?: string;
            /**
             * Disk Controller Model
             */
            model?: string;
            /**
             * Disk Controller Number
             */
            controller_number?: string;
            /**
             * Disk Controller BIOS Version
             */
            bios_version?: string;
            /**
             * Disk Controller Firmware Version
             */
            firmware_version?: string;
            /**
             * Disk Controller Driver Version
             */
            driver_version?: string;
            /**
             * Disk Controller Serial Number
             */
            serial_number?: string;
            /**
             * Additional Disk Controller Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Disk Controller Status (ok, degraded, critical)
             */
            'hw.status{hw.type="disk_controller"}'?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          /**
           * The order the sources will be executed in.
           */
          executionOrder?: string[];
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Disk Controller Status (ok, degraded, critical)
             */
            'hw.status{hw.type="disk_controller"}'?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Enclosure Monitor
     */
    enclosure?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Enclosure ID
             */
            id?: string;
            /**
             * Enclosure Display Name
             */
            name?: string;
            /**
             * Enclosure Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Enclosure Model
             */
            model?: string;
            /**
             * Enclosure Type
             */
            type?: string;
            /**
             * Enclosure BIOS Version
             */
            bios_version?: string;
            /**
             * Enclosure Serial Number
             */
            serial_number?: string;
            /**
             * Enclosure Hostname
             */
            device_hostname?: string;
            /**
             * Additional Enclosure Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Enclosure Status (ok, degraded, critical)
             */
            'hw.status{hw.type="enclosure"}'?: string;
            /**
             * Enclosure Intrusion Status
             */
            'hw.status{hw.type="enclosure", state="open"}'?: string;
            /**
             * Enclosure Power Consumption (in Watts)
             */
            'hw.enclosure.power'?: string;
            /**
             * Enclosure Energy Usage (in Kilowatts-hour)
             */
            'hw.enclosure.energy'?: string;
            /**
             * Enclosure Power State (on, suspended, off)
             */
            'hw.power_state{hw.type="enclosure"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Enclosure ID
             */
            id?: string;
            /**
             * Enclosure Display Name
             */
            name?: string;
            /**
             * Enclosure Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Enclosure Model
             */
            model?: string;
            /**
             * Enclosure Type
             */
            type?: string;
            /**
             * Enclosure BIOS Version
             */
            bios_version?: string;
            /**
             * Enclosure Serial Number
             */
            serial_number?: string;
            /**
             * Enclosure Hostname
             */
            device_hostname?: string;
            /**
             * Additional Enclosure Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Enclosure Status (ok, degraded, critical)
             */
            'hw.status{hw.type="enclosure"}'?: string;
            /**
             * Enclosure Intrusion Status
             */
            'hw.status{hw.type="enclosure", state="open"}'?: string;
            /**
             * Enclosure Power Consumption (in Watts)
             */
            'hw.enclosure.power'?: string;
            /**
             * Enclosure Energy Usage (in Kilowatts-hour)
             */
            'hw.enclosure.energy'?: string;
            /**
             * Enclosure Power State (on, suspended, off)
             */
            'hw.power_state{hw.type="enclosure"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Fan Monitor
     */
    fan?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Fan ID
             */
            id?: string;
            /**
             * Fan Display Name
             */
            name?: string;
            /**
             * Fan Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Fan Sensor Location
             */
            sensor_location?: string;
            /**
             * Additional Fan Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Fan Speed Limit (degraded)
             */
            'hw.fan.speed.limit{limit_type="low.degraded"}'?: string;
            /**
             * Fan Speed Limit (critical)
             */
            'hw.fan.speed.limit{limit_type="low.critical"}'?: string;
            /**
             * Fan Speed Limit (degraded)
             */
            'hw.fan.speed_ratio.limit{limit_type="low.degraded"}'?: string;
            /**
             * Fan Speed Limit (critical)
             */
            'hw.fan.speed_ratio.limit{limit_type="low.critical"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Fan ID
             */
            id?: string;
            /**
             * Fan Display Name
             */
            name?: string;
            /**
             * Fan Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Fan Sensor Location
             */
            sensor_location?: string;
            /**
             * Additional Fan Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Fan Speed Limit (degraded)
             */
            'hw.fan.speed.limit{limit_type="low.degraded"}'?: string;
            /**
             * Fan Speed Limit (critical)
             */
            'hw.fan.speed.limit{limit_type="low.critical"}'?: string;
            /**
             * Fan Speed Limit (degraded)
             */
            'hw.fan.speed_ratio.limit{limit_type="low.degraded"}'?: string;
            /**
             * Fan Speed Limit (critical)
             */
            'hw.fan.speed_ratio.limit{limit_type="low.critical"}'?: string;
            /**
             * Fan Status (ok, degraded, critical)
             */
            'hw.status{hw.type="fan"}'?: string;
            /**
             * Fan Speed (In RPM)
             */
            'hw.fan.speed'?: string;
            /**
             * Fan Speed Ratio (Between 0.00 and 1.00)
             */
            'hw.fan.speed_ratio'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Fan Status (ok, degraded, critical)
             */
            'hw.status{hw.type="fan"}'?: string;
            /**
             * Fan Speed (In RPM)
             */
            'hw.fan.speed'?: string;
            /**
             * Fan Speed Ratio (Between 0.00 and 1.00)
             */
            'hw.fan.speed_ratio'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * GPU Monitor
     */
    gpu?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * GPU ID
             */
            id?: string;
            /**
             * GPU Display Name
             */
            name?: string;
            /**
             * GPU Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * GPU Vendor
             */
            vendor?: string;
            /**
             * GPU Model
             */
            model?: string;
            /**
             * GPU Firmware Version
             */
            firmware_version?: string;
            /**
             * GPU Driver Version
             */
            driver_version?: string;
            /**
             * GPU Serial Number
             */
            serial_number?: string;
            /**
             * Additional GPU Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * GPU Memory Size (In Bytes)
             */
            'hw.gpu.memory.limit'?: string;
            /**
             * GPU Utilization Limit (degraded)
             */
            'hw.gpu.utilization.limit{limit_type="degraded"}'?: string;
            /**
             * GPU Utilization Limit (critical)
             */
            'hw.gpu.utilization.limit{limit_type="critical"}'?: string;
            /**
             * GPU Memory Utilization Limit (degraded)
             */
            'hw.gpu.memory.utilization.limit{limit_type="degraded"}'?: string;
            /**
             * GPU Memory Utilization Limit (critical)
             */
            'hw.gpu.memory.utilization.limit{limit_type="critical"}'?: string;
            /**
             * GPU Status (ok, degraded, critical)
             */
            'hw.status{hw.type="gpu"}'?: string;
            /**
             * GPU Predicted Failure Status (true/1 or false/0)
             */
            'hw.status{hw.type="gpu", state="predicted_failure"}'?: string;
            /**
             * GPU Corrected Error Count
             */
            'hw.errors{hw.type="gpu", hw.error.type="corrected"}'?: string;
            /**
             * GPU Error Count
             */
            'hw.errors{hw.type="gpu"}'?: string;
            /**
             * GPU General Utilization (Between 0.00 and 1.00)
             */
            'hw.gpu.utilization{task="general"}'?: string;
            /**
             * GPU Encoder Utilization (Between 0.00 and 1.00)
             */
            'hw.gpu.utilization{task="encoder"}'?: string;
            /**
             * GPU Decoder Utilization (Between 0.00 and 1.00)
             */
            'hw.gpu.utilization{task="decoder"}'?: string;
            /**
             * GPU Memory Utilization (Between 0.00 and 1.00)
             */
            'hw.gpu.memory.utilization'?: string;
            /**
             * GPU Received Bytes
             */
            'hw.gpu.io{direction="receive"}'?: string;
            /**
             * GPU Transmitted Bytes
             */
            'hw.gpu.io{direction="transmit"}'?: string;
            /**
             * GPU Power Consumption (In Watts)
             */
            'hw.power{hw.type="gpu"}'?: string;
            /**
             * GPU Energy Usage (In Kilowatts-hour)
             */
            'hw.energy{hw.type="gpu"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * GPU ID
             */
            id?: string;
            /**
             * GPU Display Name
             */
            name?: string;
            /**
             * GPU Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * GPU Vendor
             */
            vendor?: string;
            /**
             * GPU Model
             */
            model?: string;
            /**
             * GPU Firmware Version
             */
            firmware_version?: string;
            /**
             * GPU Driver Version
             */
            driver_version?: string;
            /**
             * GPU Serial Number
             */
            serial_number?: string;
            /**
             * Additional GPU Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * GPU Memory Size (In Bytes)
             */
            'hw.gpu.memory.limit'?: string;
            /**
             * GPU Utilization Limit (degraded)
             */
            'hw.gpu.utilization.limit{limit_type="degraded"}'?: string;
            /**
             * GPU Utilization Limit (critical)
             */
            'hw.gpu.utilization.limit{limit_type="critical"}'?: string;
            /**
             * GPU Memory Utilization Limit (degraded)
             */
            'hw.gpu.memory.utilization.limit{limit_type="degraded"}'?: string;
            /**
             * GPU Memory Utilization Limit (critical)
             */
            'hw.gpu.memory.utilization.limit{limit_type="critical"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * GPU Status (ok, degraded, critical)
             */
            'hw.status{hw.type="gpu"}'?: string;
            /**
             * GPU Predicted Failure Status (true/1 or false/0)
             */
            'hw.status{hw.type="gpu", state="predicted_failure"}'?: string;
            /**
             * GPU Corrected Error Count
             */
            'hw.errors{hw.type="gpu", hw.error.type="corrected"}'?: string;
            /**
             * GPU Error Count
             */
            'hw.errors{hw.type="gpu"}'?: string;
            /**
             * GPU General Utilization (Between 0.00 and 1.00)
             */
            'hw.gpu.utilization{task="general"}'?: string;
            /**
             * GPU Encoder Utilization (Between 0.00 and 1.00)
             */
            'hw.gpu.utilization{task="encoder"}'?: string;
            /**
             * GPU Decoder Utilization (Between 0.00 and 1.00)
             */
            'hw.gpu.utilization{task="decoder"}'?: string;
            /**
             * GPU Memory Utilization (Between 0.00 and 1.00)
             */
            'hw.gpu.memory.utilization'?: string;
            /**
             * GPU Received Bytes
             */
            'hw.gpu.io{direction="receive"}'?: string;
            /**
             * GPU Transmitted Bytes
             */
            'hw.gpu.io{direction="transmit"}'?: string;
            /**
             * GPU Power Consumption (In Watts)
             */
            'hw.power{hw.type="gpu"}'?: string;
            /**
             * GPU Energy Usage (In Kilowatts-hour)
             */
            'hw.energy{hw.type="gpu"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * LED Monitor
     */
    led?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * LED ID
             */
            id?: string;
            /**
             * Led Display Name
             */
            name?: string;
            /**
             * Led Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Led Color
             */
            color?: string;
            /**
             * Led On Status (ok, degraded, critical)
             */
            __on_status?: string;
            /**
             * Led Off Status (ok, degraded, critical)
             */
            __off_status?: string;
            /**
             * Led Blinking Status (ok, degraded, critical)
             */
            __blinking_status?: string;
            /**
             * Additional LED Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * GPU Memory Size (In Bytes)
             */
            'hw.gpu.memory.limit'?: string;
            /**
             * GPU Utilization Limit (degraded)
             */
            'hw.gpu.utilization.limit{limit_type="degraded"}'?: string;
            /**
             * GPU Utilization Limit (critical)
             */
            'hw.gpu.utilization.limit{limit_type="critical"}'?: string;
            /**
             * GPU Memory Utilization Limit (degraded)
             */
            'hw.gpu.memory.utilization.limit{limit_type="degraded"}'?: string;
            /**
             * GPU Memory Utilization Limit (critical)
             */
            'hw.gpu.memory.utilization.limit{limit_type="critical"}'?: string;
            /**
             * GPU Status (ok, degraded, critical)
             */
            'hw.status{hw.type="gpu"}'?: string;
            /**
             * GPU Predicted Failure Status (true/1 or false/0)
             */
            'hw.status{hw.type="gpu", state="predicted_failure"}'?: string;
            /**
             * GPU Corrected Error Count
             */
            'hw.errors{hw.type="gpu", hw.error.type="corrected"}'?: string;
            /**
             * GPU Error Count
             */
            'hw.errors{hw.type="gpu"}'?: string;
            /**
             * GPU General Utilization (Between 0.00 and 1.00)
             */
            'hw.gpu.utilization{task="general"}'?: string;
            /**
             * GPU Encoder Utilization (Between 0.00 and 1.00)
             */
            'hw.gpu.utilization{task="encoder"}'?: string;
            /**
             * GPU Decoder Utilization (Between 0.00 and 1.00)
             */
            'hw.gpu.utilization{task="decoder"}'?: string;
            /**
             * GPU Memory Utilization (Between 0.00 and 1.00)
             */
            'hw.gpu.memory.utilization'?: string;
            /**
             * GPU Received Bytes
             */
            'hw.gpu.io{direction="receive"}'?: string;
            /**
             * GPU Transmitted Bytes
             */
            'hw.gpu.io{direction="transmit"}'?: string;
            /**
             * GPU Power Consumption (In Watts)
             */
            'hw.power{hw.type="gpu"}'?: string;
            /**
             * GPU Energy Usage (In Kilowatts-hour)
             */
            'hw.energy{hw.type="gpu"}'?: string;
            /**
             * Led Status (ok, degraded, critical)
             */
            'hw.status{hw.type="led"}'?: string;
            /**
             * Led Indicator (on, off, blinking)
             */
            'hw.led.indicator'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * LED ID
             */
            id?: string;
            /**
             * Led Display Name
             */
            name?: string;
            /**
             * Led Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Led Color
             */
            color?: string;
            /**
             * Led On Status (ok, degraded, critical)
             */
            __on_status?: string;
            /**
             * Led Off Status (ok, degraded, critical)
             */
            __off_status?: string;
            /**
             * Led Blinking Status (ok, degraded, critical)
             */
            __blinking_status?: string;
            /**
             * Additional LED Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Led Status (ok, degraded, critical)
             */
            'hw.status{hw.type="led"}'?: string;
            /**
             * Led Indicator (on, off, blinking)
             */
            'hw.led.indicator'?: string;
            /**
             * Custom metrics
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Logical Disk Monitor
     */
    logical_disk?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Logical Disk ID
             */
            id?: string;
            /**
             * Logical Disk Display Name
             */
            name?: string;
            /**
             * Logical Disk Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Logical Disk Raid Level
             */
            raid_level?: string;
            /**
             * Logical Disk Type
             */
            type?: string;
            /**
             * Logical Disk Used Capacity Report (true/1 or false/0)
             */
            __use_for_capacity_report?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Logical Disk Size
             */
            'hw.logical_disk.limit'?: string;
            /**
             * Logical Disk Status (ok, failed, critical)
             */
            'hw.status{hw.type="logical_disk"}'?: string;
            /**
             * Logical Disk Error Count
             */
            'hw.errors{hw.type="logical_disk"}'?: string;
            /**
             * Logical Disk Free Space (In Bytes)
             */
            'hw.logical_disk.usage{state="free"}'?: string;
            [k: string]: unknown | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          /**
           * The order the sources will be executed in.
           */
          executionOrder?: string[];
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Logical Disk ID
             */
            id?: string;
            /**
             * Logical Disk Display Name
             */
            name?: string;
            /**
             * Logical Disk Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Logical Disk Raid Level
             */
            raid_level?: string;
            /**
             * Logical Disk Type
             */
            type?: string;
            /**
             * Logical Disk Used Capacity Report (true/1 or false/0)
             */
            __use_for_capacity_report?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Logical Disk Size
             */
            'hw.logical_disk.limit'?: string;
            [k: string]: unknown | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Logical Disk Status (ok, failed, critical)
             */
            'hw.status{hw.type="logical_disk"}'?: string;
            /**
             * Logical Disk Error Count
             */
            'hw.errors{hw.type="logical_disk"}'?: string;
            /**
             * Logical Disk Free Space (In Bytes)
             */
            'hw.logical_disk.usage{state="free"}'?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * LUN Monitor
     */
    lun?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * LUN ID
             */
            id?: string;
            /**
             * LUN Display Name
             */
            name?: string;
            /**
             * LUN Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * LUN Device Accessed Remotely
             */
            remote_device_name?: string;
            /**
             * LUN Device Accessed Locally
             */
            local_device_name?: string;
            /**
             * LUN Array Name
             */
            array_name?: string;
            /**
             * LUN World Wide Name
             */
            wwn?: string;
            /**
             * Additional LUN Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * LUN Distinct Paths Expected
             */
            'hw.lun.paths.limit{limit_type="low.degraded"}'?: string;
            /**
             * LUN Status (ok, failed, critical)
             */
            'hw.status{hw.type="lun"}'?: string;
            /**
             * LUN Available Paths Count
             */
            'hw.lun.paths'?: string;
            /**
             * Battery Time Left
             */
            'hw.lun.'?: number;
            /**
             * Custom metrics
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * LUN ID
             */
            id?: string;
            /**
             * LUN Display Name
             */
            name?: string;
            /**
             * LUN Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * LUN Device Accessed Remotely
             */
            remote_device_name?: string;
            /**
             * LUN Device Accessed Locally
             */
            local_device_name?: string;
            /**
             * LUN Array Name
             */
            array_name?: string;
            /**
             * LUN World Wide Name
             */
            wwn?: string;
            /**
             * Additional LUN Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * LUN Distinct Paths Expected
             */
            'hw.lun.paths.limit{limit_type="low.degraded"}'?: string;
            /**
             * Custom metrics
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * LUN Status (ok, failed, critical)
             */
            'hw.status{hw.type="lun"}'?: string;
            /**
             * LUN Available Paths Count
             */
            'hw.lun.paths'?: string;
            /**
             * Battery Time Left
             */
            'hw.lun.'?: number;
            /**
             * Custom metrics
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            /**
             * LUN Available Path Textual Information
             */
            AvailablePathInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Memory Monitor
     */
    memory?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Memory ID
             */
            id?: string;
            /**
             * Memory Display Name
             */
            name?: string;
            /**
             * Memory Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Memory Vendor
             */
            vendor?: string;
            /**
             * Memory Model
             */
            model?: string;
            /**
             * Memory Serial Number
             */
            serial_number?: string;
            /**
             * Memory Type
             */
            type?: string;
            /**
             * Additional Memory Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Memory Size (In Bytes)
             */
            'hw.memory.limit'?: string;
            /**
             * Memory Error Threshold (degraded)
             */
            'hw.errors.limit{hw.type="memory", limit_type="degraded"}'?: string;
            /**
             * Memory Error Threshold (critical)
             */
            'hw.errors.limit{hw.type="memory", limit_type="critical"}'?: string;
            /**
             * Memory Status (ok, failed, critical)
             */
            'hw.status{hw.type="memory"}'?: string;
            /**
             * Memory Predicted Failure Status (true/1 or false/0)
             */
            'hw.status{hw.type="memory", state="predicted_failure"}'?: number;
            /**
             * Memory Error Count
             */
            'hw.errors{hw.type="memory"}'?: number;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          /**
           * The order the sources will be executed in.
           */
          executionOrder?: string[];
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Memory ID
             */
            id?: string;
            /**
             * Memory Display Name
             */
            name?: string;
            /**
             * Memory Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Memory Vendor
             */
            vendor?: string;
            /**
             * Memory Model
             */
            model?: string;
            /**
             * Memory Serial Number
             */
            serial_number?: string;
            /**
             * Memory Type
             */
            type?: string;
            /**
             * Additional Memory Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Memory Size (In Bytes)
             */
            'hw.memory.limit'?: string;
            /**
             * Memory Error Threshold (degraded)
             */
            'hw.errors.limit{hw.type="memory", limit_type="degraded"}'?: string;
            /**
             * Memory Error Threshold (critical)
             */
            'hw.errors.limit{hw.type="memory", limit_type="critical"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Memory Status (ok, failed, critical)
             */
            'hw.status{hw.type="memory"}'?: string;
            /**
             * Memory Predicted Failure Status (true/1 or false/0)
             */
            'hw.status{hw.type="memory", state="predicted_failure"}'?: number;
            /**
             * Memory Error Count
             */
            'hw.errors{hw.type="memory"}'?: number;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Network Monitor
     */
    network?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Network Card ID
             */
            id?: string;
            /**
             * Network Card Display Name
             */
            name?: string;
            /**
             * Network Card Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Network Card Vendor
             */
            vendor?: string;
            /**
             * Network Card Model
             */
            model?: string;
            /**
             * Network Card Type
             */
            device_type?: string;
            /**
             * Network Card Physical Address
             */
            physical_address?: string;
            /**
             * Network Card Physical Address Type
             */
            physical_address_type?: string;
            /**
             * Network Card Logical Address
             */
            logical_address?: string;
            /**
             * Network Card Logical Address Type
             */
            logical_address_type?: string;
            /**
             * Network Card Serial Number
             */
            serial_number?: string;
            /**
             * Network Card Bandwidth
             */
            bandwidth?: string;
            /**
             * Additional Network Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Network Card Status (ok, failed, critical)
             */
            'hw.status{hw.type="network"}'?: string;
            /**
             * Network Card Link Status (1/ok or 0/degraded)
             */
            'hw.network.up'?: string;
            /**
             * Network Card Full Duplex Status
             */
            'hw.network.full_duplex'?: string;
            /**
             * Network Card Zero Buffer Credit Error Count
             */
            'hw.errors{hw.type="network", hw.error.type="zero_buffer_credit"}'?: string;
            /**
             * Network Card Network Error Count
             */
            'hw.errors{hw.type="network"}'?: string;
            /**
             * Network Card Bytes Received
             */
            'hw.network.io{direction="receive"}'?: string;
            /**
             * Network Card Bytes Transmitted
             */
            'hw.network.io{direction="transmit"}'?: string;
            /**
             * Network Card Packets Received
             */
            'hw.network.packets{direction="receive"}'?: string;
            /**
             * Network Card Packets Transmitted
             */
            'hw.network.packets{direction="transmit"}'?: string;
            /**
             * Network Card Link Speed (In bits)
             */
            'hw.network.bandwidth.limit'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Network Card ID
             */
            id?: string;
            /**
             * Network Card Display Name
             */
            name?: string;
            /**
             * Network Card Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Network Card Vendor
             */
            vendor?: string;
            /**
             * Network Card Model
             */
            model?: string;
            /**
             * Network Card Type
             */
            device_type?: string;
            /**
             * Network Card Physical Address
             */
            physical_address?: string;
            /**
             * Network Card Physical Address Type
             */
            physical_address_type?: string;
            /**
             * Network Card Logical Address
             */
            logical_address?: string;
            /**
             * Network Card Logical Address Type
             */
            logical_address_type?: string;
            /**
             * Network Card Serial Number
             */
            serial_number?: string;
            /**
             * Network Card Bandwidth
             */
            bandwidth?: string;
            /**
             * Additional Network Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Network Card Status (ok, failed, critical)
             */
            'hw.status{hw.type="network"}'?: string;
            /**
             * Network Card Link Status (1/ok or 0/degraded)
             */
            'hw.network.up'?: string;
            /**
             * Network Card Full Duplex Status
             */
            'hw.network.full_duplex'?: string;
            /**
             * Network Card Zero Buffer Credit Error Count
             */
            'hw.errors{hw.type="network", hw.error.type="zero_buffer_credit"}'?: string;
            /**
             * Network Card Network Error Count
             */
            'hw.errors{hw.type="network"}'?: string;
            /**
             * Network Card Bytes Received
             */
            'hw.network.io{direction="receive"}'?: string;
            /**
             * Network Card Bytes Transmitted
             */
            'hw.network.io{direction="transmit"}'?: string;
            /**
             * Network Card Packets Received
             */
            'hw.network.packets{direction="receive"}'?: string;
            /**
             * Network Card Packets Transmitted
             */
            'hw.network.packets{direction="transmit"}'?: string;
            /**
             * Network Card Link Speed (In bits)
             */
            'hw.network.bandwidth.limit'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Other Device Monitor
     */
    other_device?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Other Device ID
             */
            id?: string;
            /**
             * Other Device Display Name
             */
            name?: string;
            /**
             * Other Device Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Other Device Additional Label
             */
            additional_label?: string;
            /**
             * Additional Other Device Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Other Device Value Limit (degraded)
             */
            'hw.other_device.value.limit{limit_type="degraded"}'?: string;
            /**
             * Other Device Value Limit (critical)
             */
            'hw.other_device.value.limit{limit_type="critical"}'?: string;
            /**
             * Other Device Uses Limit (degraded)
             */
            'hw.other_device.uses.limit{limit_type="degraded"}'?: string;
            /**
             * Other Device Uses Limit (critical)
             */
            'hw.other_device.uses.limit{limit_type="critical"}'?: string;
            /**
             * Other Device Status (ok, failed, critical)
             */
            'hw.status{hw.type="other_device"}'?: string;
            /**
             * Other Device Uses
             */
            'hw.other_device.uses'?: string;
            /**
             * Other Device Value
             */
            'hw.other_device.value'?: string;
            /**
             * Other Device Power Consumption (in Watts)
             */
            'hw.power{hw.type="other_device"}'?: string;
            /**
             * Other Device Energy Usage (in Kilowatts-hour)
             */
            'hw.energy{hw.type="other_device"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Other Device ID
             */
            id?: string;
            /**
             * Other Device Display Name
             */
            name?: string;
            /**
             * Other Device Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Other Device Additional Label
             */
            additional_label?: string;
            /**
             * Additional Other Device Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Other Device Value Limit (degraded)
             */
            'hw.other_device.value.limit{limit_type="degraded"}'?: string;
            /**
             * Other Device Value Limit (critical)
             */
            'hw.other_device.value.limit{limit_type="critical"}'?: string;
            /**
             * Other Device Uses Limit (degraded)
             */
            'hw.other_device.uses.limit{limit_type="degraded"}'?: string;
            /**
             * Other Device Uses Limit (critical)
             */
            'hw.other_device.uses.limit{limit_type="critical"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Other Device Status (ok, failed, critical)
             */
            'hw.status{hw.type="other_device"}'?: string;
            /**
             * Other Device Uses
             */
            'hw.other_device.uses'?: string;
            /**
             * Other Device Value
             */
            'hw.other_device.value'?: string;
            /**
             * Other Device Power Consumption (in Watts)
             */
            'hw.power{hw.type="other_device"}'?: string;
            /**
             * Other Device Energy Usage (in Kilowatts-hour)
             */
            'hw.energy{hw.type="other_device"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Physical Disk Monitor
     */
    physical_disk?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Physical Disk ID
             */
            id?: string;
            /**
             * Physical Disk Display Name
             */
            name?: string;
            /**
             * Physical Disk Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Physical Disk Vendor
             */
            vendor?: string;
            /**
             * Physical Disk Model
             */
            model?: string;
            /**
             * Physical Disk Firmware Version
             */
            firmware_version?: string;
            /**
             * Physical Disk Serial Number
             */
            serial_number?: string;
            /**
             * Additional Physical Disk Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Physical Disk Status (ok, failed, critical)
             */
            'hw.status{hw.type="physical_disk"}'?: string;
            /**
             * Physical Disk Predicted Failure Status (true/1 or false/0)
             */
            'hw.status{hw.type="physical_disk", state="predicted_failure"}'?: string;
            /**
             * Physical Disk Transport Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="transport"}'?: string;
            /**
             * Physical Disk Illegal Request Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="illegal_request"}'?: string;
            /**
             * Physical Disk No Device Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="no_device"}'?: string;
            /**
             * Physical Disk Device Not Ready Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="device_not_ready"}'?: string;
            /**
             * Physical Disk Recoverable Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="recoverable"}'?: string;
            /**
             * Physical Disk Hard Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="hard"}'?: string;
            /**
             * Physical Disk Media Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="media"}'?: string;
            /**
             * Physical Disk Remaining Endurance (Between 0.00 and 1.00)
             */
            'hw.physical_disk.endurance_utilization{state="remaining"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Physical Disk ID
             */
            id?: string;
            /**
             * Physical Disk Display Name
             */
            name?: string;
            /**
             * Physical Disk Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Physical Disk Vendor
             */
            vendor?: string;
            /**
             * Physical Disk Model
             */
            model?: string;
            /**
             * Physical Disk Firmware Version
             */
            firmware_version?: string;
            /**
             * Physical Disk Serial Number
             */
            serial_number?: string;
            /**
             * Additional Physical Disk Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Physical Disk Size (In Bytes)
             */
            serial_number?: string;
            [k: string]: unknown | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Physical Disk Status (ok, failed, critical)
             */
            'hw.status{hw.type="physical_disk"}'?: string;
            /**
             * Physical Disk Predicted Failure Status (true/1 or false/0)
             */
            'hw.status{hw.type="physical_disk", state="predicted_failure"}'?: string;
            /**
             * Physical Disk Transport Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="transport"}'?: string;
            /**
             * Physical Disk Illegal Request Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="illegal_request"}'?: string;
            /**
             * Physical Disk No Device Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="no_device"}'?: string;
            /**
             * Physical Disk Device Not Ready Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="device_not_ready"}'?: string;
            /**
             * Physical Disk Recoverable Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="recoverable"}'?: string;
            /**
             * Physical Disk Hard Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="hard"}'?: string;
            /**
             * Physical Disk Media Error Count
             */
            'hw.errors{hw.type="physical_disk", hw.error.type="media"}'?: string;
            /**
             * Physical Disk Remaining Endurance (Between 0.00 and 1.00)
             */
            'hw.physical_disk.endurance_utilization{state="remaining"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Power Supply Monitor
     */
    power_supply?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Power Supply ID
             */
            id?: string;
            /**
             * Power Supply Display Name
             */
            name?: string;
            /**
             * Power Supply Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Power Supply Type
             */
            power_supply_type?: string;
            /**
             * Additional Power Supply Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Power Supply Maximum Output (In Watts)
             */
            'hw.power_supply.limit'?: string;
            /**
             * Power Supply Status (ok, failed, critical)
             */
            'hw.status{hw.type="power_supply"}'?: string;
            /**
             * Power Supply Utilization Ratio (Between 0.00 and 1.00)
             */
            'hw.power_supply.utilization'?: string;
            /**
             * Power Supply Power Consumption (In Watts)
             */
            'hw.power_supply.power'?: string;
            [k: string]: unknown | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Power Supply ID
             */
            id?: string;
            /**
             * Power Supply Display Name
             */
            name?: string;
            /**
             * Power Supply Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Power Supply Type
             */
            power_supply_type?: string;
            /**
             * Additional Power Supply Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Power Supply Maximum Output (In Watts)
             */
            'hw.power_supply.limit'?: string;
            [k: string]: unknown | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Power Supply Status (ok, failed, critical)
             */
            'hw.status{hw.type="power_supply"}'?: string;
            /**
             * Power Supply Utilization Ratio (Between 0.00 and 1.00)
             */
            'hw.power_supply.utilization'?: string;
            /**
             * Power Supply Power Consumption (In Watts)
             */
            'hw.power_supply.power'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Robotics Monitor
     */
    robotics?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Robotics ID
             */
            id?: string;
            /**
             * Robotics Display Name
             */
            name?: string;
            /**
             * Robotics Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Robotics Vendor
             */
            vendor?: string;
            /**
             * Robotics Model
             */
            model?: string;
            /**
             * Robotics Type
             */
            robotics_type?: string;
            /**
             * Robotics Serial Number
             */
            serial_number?: string;
            /**
             * Additional Robotics Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Robotics Error Threshold (degraded)
             */
            'hw.errors.limit{hw.type="robotics", limit_type="degraded"}'?: string;
            /**
             * Robotics Error Threshold (critical)
             */
            'hw.errors.limit{hw.type="robotics", limit_type="critical"}'?: string;
            /**
             * Robotics Status (ok, failed, critical)
             */
            'hw.status{hw.type="robotics"}'?: string;
            /**
             * Robotics Move Count
             */
            'hw.robotics.moves'?: string;
            /**
             * Robotics Error Count
             */
            'hw.errors{hw.type="robotics"}'?: number;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Robotics ID
             */
            id?: string;
            /**
             * Robotics Display Name
             */
            name?: string;
            /**
             * Robotics Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Robotics Vendor
             */
            vendor?: string;
            /**
             * Robotics Model
             */
            model?: string;
            /**
             * Robotics Type
             */
            robotics_type?: string;
            /**
             * Robotics Serial Number
             */
            serial_number?: string;
            /**
             * Additional Robotics Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Robotics Error Threshold (degraded)
             */
            'hw.errors.limit{hw.type="robotics", limit_type="degraded"}'?: string;
            /**
             * Robotics Error Threshold (critical)
             */
            'hw.errors.limit{hw.type="robotics", limit_type="critical"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Robotics Status (ok, failed, critical)
             */
            'hw.status{hw.type="robotics"}'?: string;
            /**
             * Robotics Move Count
             */
            'hw.robotics.moves'?: string;
            /**
             * Robotics Error Count
             */
            'hw.errors{hw.type="robotics"}'?: number;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Tape Drive Monitor
     */
    tape_drive?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Tape Drive ID
             */
            id?: string;
            /**
             * Tape Drive Display Name
             */
            name?: string;
            /**
             * Tape Drive Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Tape Drive Vendor
             */
            vendor?: string;
            /**
             * Tape Drive Model
             */
            model?: string;
            /**
             * Tape Drive Serial Number
             */
            serial_number?: string;
            /**
             * Additional Tape Drive Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Tape Drive Error Threshold (degraded)
             */
            'hw.errors.limit{hw.type="tape_drive", limit_type="degraded"}'?: string;
            /**
             * Tape Drive Error Threshold (critical)
             */
            'hw.errors.limit{hw.type="tape_drive", limit_type="critical"}'?: string;
            /**
             * Tape Drive Status (ok, failed, critical)
             */
            'hw.status{hw.type="tape_drive"}'?: string;
            /**
             * Tape Drive Mount Operations Count
             */
            'hw.tape_drive.operations{type="mount"}'?: string;
            /**
             * Tape Drive Unmount Operations Count
             */
            'hw.tape_drive.operations{type="unmount"}'?: string;
            /**
             * Tape Drive Error Count
             */
            'hw.errors{hw.type="tape_drive"}'?: string;
            /**
             * Tape Drive Needs Cleaning (1/true or 0/false)
             */
            'hw.status{hw.type="tape_drive", state="needs_cleaning"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Tape Drive ID
             */
            id?: string;
            /**
             * Tape Drive Display Name
             */
            name?: string;
            /**
             * Tape Drive Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Tape Drive Vendor
             */
            vendor?: string;
            /**
             * Tape Drive Model
             */
            model?: string;
            /**
             * Tape Drive Serial Number
             */
            serial_number?: string;
            /**
             * Additional Tape Drive Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Tape Drive Error Threshold (degraded)
             */
            'hw.errors.limit{hw.type="tape_drive", limit_type="degraded"}'?: string;
            /**
             * Tape Drive Error Threshold (critical)
             */
            'hw.errors.limit{hw.type="tape_drive", limit_type="critical"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Tape Drive Status (ok, failed, critical)
             */
            'hw.status{hw.type="tape_drive"}'?: string;
            /**
             * Tape Drive Mount Operations Count
             */
            'hw.tape_drive.operations{type="mount"}'?: string;
            /**
             * Tape Drive Unmount Operations Count
             */
            'hw.tape_drive.operations{type="unmount"}'?: string;
            /**
             * Tape Drive Error Count
             */
            'hw.errors{hw.type="tape_drive"}'?: string;
            /**
             * Tape Drive Needs Cleaning (1/true or 0/false)
             */
            'hw.status{hw.type="tape_drive", state="needs_cleaning"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Temperature Monitor
     */
    temperature?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Temperature ID
             */
            id?: string;
            /**
             * Temperature Display Name
             */
            name?: string;
            /**
             * Temperature Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Temperature Sensor Location
             */
            sensor_location?: string;
            /**
             * Additional Temperature Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Temperature Threshold (degraded)
             */
            'hw.temperature.limit{limit_type="high.degraded"}'?: string;
            /**
             * Temperature Threshold (critical)
             */
            'hw.temperature.limit{limit_type="high.critical"}'?: string;
            /**
             * Battery Status (ok, failed, critical)
             */
            'hw.status{hw.type="temperature"}'?: string;
            /**
             * Temperature (In Degrees Celsius)
             */
            'hw.temperature'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Temperature ID
             */
            id?: string;
            /**
             * Temperature Display Name
             */
            name?: string;
            /**
             * Temperature Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Temperature Sensor Location
             */
            sensor_location?: string;
            /**
             * Additional Temperature Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Temperature Threshold (degraded)
             */
            'hw.temperature.limit{limit_type="high.degraded"}'?: string;
            /**
             * Temperature Threshold (critical)
             */
            'hw.temperature.limit{limit_type="high.critical"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Battery Status (ok, failed, critical)
             */
            'hw.status{hw.type="temperature"}'?: string;
            /**
             * Temperature (In Degrees Celsius)
             */
            'hw.temperature'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * VM Monitor
     */
    vm?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Virtual Machine ID
             */
            id?: string;
            /**
             * Virtual Machine Name
             */
            name?: string;
            /**
             * Virtual Machine ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Virtual Machine Hostname
             */
            'vm.host.name'?: string;
            /**
             * Additional Virtual Machine Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            additionalProperties?: string;
            [k: string]: unknown | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Virtual Machine Power State (on, suspended, off)
             */
            'hw.power_state{hw.type="vm"}'?: string;
            /**
             * Virtual Machine Power Ratio (Relative power share of the VM on its host.)
             */
            'hw.vm.power_ratio'?: string;
            /**
             * Virtual Machine Power Consumption (In Watts)
             */
            'hw.power{hw.type="vm"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Virtual Machine ID
             */
            id?: string;
            /**
             * Virtual Machine Name
             */
            name?: string;
            /**
             * Virtual Machine ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Virtual Machine Hostname
             */
            'vm.host.name'?: string;
            /**
             * Additional Virtual Machine Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            additionalProperties?: string;
            [k: string]: unknown | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Virtual Machine Power State (on, suspended, off)
             */
            'hw.power_state{hw.type="vm"}'?: string;
            /**
             * Virtual Machine Power Ratio (Relative power share of the VM on its host.)
             */
            'hw.vm.power_ratio'?: string;
            /**
             * Virtual Machine Power Consumption (In Watts)
             */
            'hw.power{hw.type="vm"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Voltage Monitor
     */
    voltage?: {
      /**
       * Simple monitoring job
       */
      simple?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Voltage ID
             */
            id?: string;
            /**
             * Voltage Display Name
             */
            name?: string;
            /**
             * Voltage Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Voltage Sensor Location
             */
            sensor_location?: string;
            /**
             * Additional Voltage Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Voltage Lower Threshold (In mV)
             */
            'hw.voltage.limit{limit_type="low.critical"}'?: string;
            /**
             * Voltage Upper Threshold (In mV)
             */
            'hw.voltage.limit{limit_type="high.degraded"}'?: string;
            /**
             * Voltage Status (ok, failed, critical)
             */
            'hw.status{hw.type="voltage"}'?: string;
            /**
             * Voltage (In mV)
             */
            'hw.voltage'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Discovery monitoring job
       */
      discovery?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        /**
         * Discovery Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Discovery Attributes
           */
          attributes?: {
            /**
             * Voltage ID
             */
            id?: string;
            /**
             * Voltage Display Name
             */
            name?: string;
            /**
             * Voltage Display ID
             */
            __display_id?: string;
            /**
             * Parent Device Type (Default: Enclosure)
             */
            'hw.parent.type'?: string;
            /**
             * Parent Device ID
             */
            'hw.parent.id'?: string;
            /**
             * Voltage Sensor Location
             */
            sensor_location?: string;
            /**
             * Additional Voltage Information
             */
            info?: string;
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Discovery Metrics
           */
          metrics?: {
            /**
             * Voltage Lower Threshold (In mV)
             */
            'hw.voltage.limit{limit_type="low.critical"}'?: string;
            /**
             * Voltage Upper Threshold (In mV)
             */
            'hw.voltage.limit{limit_type="high.degraded"}'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          conditionalCollection?: {
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * Collect monitoring job
       */
      collect?: {
        /**
         * The order the sources will be executed in.
         */
        executionOrder?: string[];
        sources?: Sources;
        metrics?: Metrics;
        keys?: string[];
        /**
         * Collect Instance Type
         */
        type?: 'monoInstance' | 'multiInstance';
        /**
         * Collect Mapping
         */
        mapping?: {
          source?: string;
          /**
           * Collect Attributes
           */
          attributes?: {
            /**
             * Custom attribute
             */
            [k: string]: string | undefined;
          };
          /**
           * Collect Metrics
           */
          metrics?: {
            /**
             * Voltage Status (ok, failed, critical)
             */
            'hw.status{hw.type="voltage"}'?: string;
            /**
             * Voltage (In mV)
             */
            'hw.voltage'?: string;
            /**
             * Custom metric
             */
            [k: string]: string | undefined;
          };
          legacyTextParameters?: {
            StatusInformation?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    [k: string]:
      | {
          /**
           * Discovery monitoring job
           */
          discovery?: {
            /**
             * The order the sources will be executed in.
             */
            executionOrder?: string[];
            sources?: Sources;
            metrics?: Metrics;
            /**
             * Discovery Mapping
             */
            mapping?: {
              source?: string;
              /**
               * Discovery Attributes
               */
              attributes?: {
                /**
                 * ID
                 */
                id?: string;
                /**
                 * Display Name
                 */
                name?: string;
                /**
                 * Custom attribute
                 */
                [k: string]: string | undefined;
              };
              /**
               * Discovery Metrics
               */
              metrics?: {
                /**
                 * Custom metric
                 */
                [k: string]: string | undefined;
              };
              conditionalCollection?: {
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          };
          /**
           * Collect monitoring job
           */
          collect?: {
            /**
             * The order the sources will be executed in.
             */
            executionOrder?: string[];
            sources?: Sources;
            metrics?: Metrics;
            keys?: string[];
            /**
             * Collect Instance Type
             */
            type?: 'monoInstance' | 'multiInstance';
            /**
             * Collect Mapping
             */
            mapping?: {
              source?: string;
              /**
               * Collect Attributes
               */
              attributes?: {
                /**
                 * ID
                 */
                id?: string;
                /**
                 * Custom attribute
                 */
                [k: string]: string | undefined;
              };
              /**
               * Collect Metrics
               */
              metrics?: {
                /**
                 * Custom metric
                 */
                [k: string]: string | undefined;
              };
              legacyTextParameters?: {
                StatusInformation?: string;
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          };
          /**
           * Simple monitoring job
           */
          simple?: {
            /**
             * The order the sources will be executed in.
             */
            executionOrder?: string[];
            sources?: Sources;
            metrics?: Metrics;
            /**
             * Discovery Mapping
             */
            mapping?: {
              source?: string;
              /**
               * Discovery Attributes
               */
              attributes?: {
                /**
                 * ID
                 */
                id?: string;
                /**
                 * Display Name
                 */
                name?: string;
                /**
                 * Custom attributes
                 */
                [k: string]: string | undefined;
              };
              /**
               * Discovery Metrics
               */
              metrics?: {
                /**
                 * Custom metric
                 */
                [k: string]: string | undefined;
              };
              conditionalCollection?: {
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  /**
   * Contains Translation Tables
   */
  translations?: {
    /**
     * Translation Table Name
     */
    [k: string]:
      | {
          /**
           * Translation Table Entry
           */
          [k: string]: string | undefined;
        }
      | undefined;
  };
  /**
   * Connector Identity Properties
   */
  connector?: {
    /**
     * Connector Display Name
     */
    displayName?: string;
    /**
     * Connector Typical Platform Description
     */
    platforms?: string[] | string;
    /**
     * Connector Prerequisites
     */
    reliesOn?: string;
    /**
     * Connector Current Version
     */
    version?: string;
    /**
     * Connector Library Project Version
     */
    projectVersion?: string;
    /**
     * Connector Short Description
     */
    information?: string;
    /**
     * Connector default variables defined on the Connector Template.
     */
    variables?: {
      [k: string]:
        | {
            /**
             * Description of the connector variable.
             */
            description?: string;
            /**
             * Default value of the connector variable.
             */
            defaultValue?: string;
            [k: string]: unknown | undefined;
          }
        | undefined;
    };
    detection?: {
      connectionTypes?: ('remote' | 'local')[];
      /**
       * Disable Auto Detection
       */
      disableAutoDetection?: boolean;
      /**
       * Last Resort Only (Activates if no connector contains specified monitor type)
       */
      onLastResort?: string;
      /**
       * Connector OS Compatibility List (Comma-separated)
       */
      appliesTo?: DeviceKind[];
      /**
       * Superseded Connector List
       */
      supersedes?: string[];
      criteria?: (
        | {
            /**
             * Criteria Type
             */
            type?: 'deviceType';
            forceSerialization?: boolean;
            /**
             * Valid Device Types
             */
            keep?: DeviceKind[];
            /**
             * Invalid Device Types
             */
            exclude?: DeviceKind[];
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'http';
            forceSerialization?: boolean;
            /**
             * HTTP Method
             */
            method?: 'get' | 'post' | 'delete' | 'put';
            /**
             * HTTP Url
             */
            url?: string;
            /**
             * Http Path
             */
            path?: string;
            /**
             * HTTP Header
             */
            header?: string;
            /**
             * HTTP Body
             */
            body?: string;
            /**
             * Valid Result
             */
            expectedResult?: string;
            /**
             * Custom Error Message
             */
            errorMessage?: string;
            resultContent?: ResultContent;
            /**
             * HTTP Authentication Token
             */
            authenticationToken?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'ipmi';
            forceSerialization?: boolean;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'commandLine';
            forceSerialization?: boolean;
            /**
             * OS Command
             */
            commandLine?: string;
            /**
             * Custom Error Message
             */
            errorMessage?: string;
            /**
             * Valid Result
             */
            expectedResult?: string;
            /**
             * Command Executed On Local Agent
             */
            executeLocally?: boolean;
            /**
             * OS Command Timeout
             */
            timeout?: number;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'process';
            forceSerialization?: boolean;
            /**
             * Regular Expression Matching Command Line Of Process
             */
            commandLine?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'productRequirements';
            forceSerialization?: boolean;
            /**
             * MetricsHubs Minimum Version
             */
            engineVersion?: string;
            /**
             * BMC Sentry Hardware KM Minimum Version
             */
            kmVersion?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'service';
            forceSerialization?: boolean;
            /**
             * Service Name
             */
            name?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'snmpGet';
            forceSerialization?: boolean;
            /**
             * SNMP Get OID
             */
            oid?: string;
            /**
             * Valid Result
             */
            expectedResult?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'snmpGetNext';
            forceSerialization?: boolean;
            /**
             * SNMP GetNext OID
             */
            oid?: string;
            /**
             * Valid Result
             */
            expectedResult?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'wbem';
            forceSerialization?: boolean;
            /**
             * WBEM Query
             */
            query?: string;
            /**
             * WBEM Namespace
             */
            namespace?: string;
            /**
             * Valid Result
             */
            expectedResult?: string;
            /**
             * Custom Error Message
             */
            errorMessage?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'wmi';
            forceSerialization?: boolean;
            /**
             * WMI Query
             */
            query?: string;
            /**
             * WMI Namespace
             */
            namespace?: string;
            /**
             * Valid Result
             */
            expectedResult?: string;
            /**
             * Custom Error Message
             */
            errorMessage?: string;
            [k: string]: unknown | undefined;
          }
        | {
            /**
             * Criteria Type
             */
            type?: 'sql';
            forceSerialization?: boolean;
            /**
             * Optional database name to connect to
             */
            database?: string;
            /**
             * SQL query
             */
            query?: string;
            /**
             * Valid Result (regexp or literal, engine-defined)
             */
            expectedResult?: string;
            /**
             * Custom Error Message
             */
            errorMessage?: string;
            [k: string]: unknown | undefined;
          }
        | {
            /**
             * Criteria Type
             */
            type?: 'jmx';
            forceSerialization?: boolean;
            /**
             * JMX ObjectName pattern
             */
            objectName?: string;
            /**
             * Attributes to fetch from the MBean
             *
             * @minItems 1
             */
            attributes?: [string, ...string[]];
            /**
             * Valid Result (regexp over fetched attribute values)
             */
            expectedResult?: string;
            /**
             * Custom Error Message
             */
            errorMessage?: string;
            [k: string]: unknown | undefined;
          }
      )[];
      /**
       * Connector tags List (e.g. Hardware, Storage, System)
       */
      tags?: string[];
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Connectors Extended
   */
  extends?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Metric definitions describing the collected OpenTelemetry metrics and their metadata (unit, description, and type).
 */
export interface Metrics {
  [k: string]:
    | {
        /**
         * The measurement unit of the metric (e.g., 'Cel', 's', 'By'). Default is an empty string.
         */
        unit?: string;
        /**
         * A human-readable explanation of what the metric measures and its context.
         */
        description?: string;
        /**
         * Defines the metric type being collected. Can be a simple string type (Gauge, Counter, UpDownCounter) or an object with state set mapping.
         */
        type?:
          | ('Gauge' | 'Counter' | 'UpDownCounter')
          | {
              /**
               * A list defining the possible states that this metric can represent (e.g., ['ok', 'degraded', 'failed']). Typically used when the metric indicates a binary value (0 or 1) corresponding to each defined state.
               */
              stateSet?: unknown[];
              /**
               * Specifies the output metric type when 'stateSet' is defined. Determines how the resulting metric will be emitted in OpenTelemetry.
               */
              output?: 'Gauge' | 'Counter' | 'UpDownCounter';
              [k: string]: unknown | undefined;
            };
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Contains Sources
 */
export interface Sources {
  /**
   * Source Name
   */
  [k: string]:
    | (
        | {
            type?: 'http';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            method?: HttpMethod;
            /**
             * HTTP Path
             */
            path?: string;
            /**
             * HTTP Url
             */
            url?: string;
            /**
             * HTTP Header
             */
            header?: string;
            /**
             * HTTP Body
             */
            body?: string;
            /**
             * HTTP Authentication Token
             */
            authenticationToken?: string;
            resultContent?: ResultContent;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'ipmi';
            forceSerialization?: boolean;
            computes?: Computes;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'commandLine';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * Command Line
             */
            commandLine?: string;
            /**
             * OS Command Timeout
             */
            timeout?: number;
            /**
             * Command Executed On Local Agent
             */
            executeLocally?: boolean;
            /**
             * Exclude Lines Matching
             */
            exclude?: string;
            /**
             * Keep Lines Matching
             */
            keep?: string;
            /**
             * Begin At Line Number
             */
            beginAtLineNumber?: number;
            /**
             * End At Line Number
             */
            endAtLineNumber?: number;
            /**
             * Column Separator
             */
            separator?: string;
            /**
             * Columns Selected
             */
            selectColumns?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'copy';
            /**
             * Source Copied
             */
            from?: string;
            computes?: Computes;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'static';
            /**
             * Source Value
             */
            value?: string;
            computes?: Computes;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'snmpGet';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * OID Queried
             */
            oid?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'snmpTable';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * OID Queried
             */
            oid?: string;
            /**
             * Columns Selected
             */
            selectColumns?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'tableJoin';
            forceSerialization?: boolean;
            computes?: Computes;
            /**
             * Left Table
             */
            leftTable?: string;
            /**
             * Right Table
             */
            rightTable?: string;
            /**
             * Left Key Column
             */
            leftKeyColumn?: number;
            /**
             * Right Key Column
             */
            rightKeyColumn?: number;
            /**
             * Line Used If No Matches From Right Table
             */
            defaultRightLine?: string;
            /**
             * Is WBEM Identifier
             */
            isWbemKey?: boolean;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'tableUnion';
            forceSerialization?: boolean;
            computes?: Computes;
            /**
             * Tables To Be Concatenated
             */
            tables?: string[];
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'wbem';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * WBEM Query
             */
            query?: string;
            /**
             * WBEM Namespace
             */
            namespace?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'wmi';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * WMI Query
             */
            query?: string;
            /**
             * WMI Namespace
             */
            namespace?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'sql';
            forceSerialization?: boolean;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * The list of tables to be used in the SQL query
             */
            tables?: {
              /**
               * Source to be used as a table
               */
              source?: string;
              /**
               * Alias for the table
               */
              alias?: string;
              /**
               * SQL table columns
               */
              columns?: {
                /**
                 * Column name
                 */
                name?: string;
                /**
                 * SQL column type
                 */
                type?: string;
                /**
                 * Column number in the source
                 */
                number?: number;
                [k: string]: unknown | undefined;
              }[];
              [k: string]: unknown | undefined;
            }[];
            computes?: Computes;
            /**
             * SQL Query
             */
            query?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'awk';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * Awk script name or inline definition
             */
            script?: string;
            /**
             * Exclude lines matching this regular expression
             */
            exclude?: string;
            /**
             * Keep only lines matching this regular expression
             */
            keep?: string;
            /**
             * Column separator
             */
            separator?: string;
            /**
             * Columns selected from the result
             */
            selectColumns?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'internalDbQuery';
            forceSerialization?: boolean;
            computes?: Computes;
            /**
             * Internal database query to execute
             */
            query?: string;
            /**
             * Optional query parameters
             */
            parameters?: string[];
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'jmx';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * JMX ObjectName pattern identifying the MBean
             */
            objectName?: string;
            /**
             * List of MBean attributes to query
             */
            attributes?: string[];
            resultContent?: ResultContent;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'eventLog';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * Windows Event Log name
             */
            logName?: string;
            /**
             * List of event IDs to filter
             */
            eventIds?: string[];
            /**
             * List of event sources to filter
             */
            sources?: string[];
            /**
             * List of event log levels to filter. Accepts level names (e.g., 'error', 'warn', 'info', 'success', 'failure') or numeric codes (1-5).
             */
            levels?: (string | number)[];
            /**
             * Maximum number of events to retrieve per poll (default: 50, -1 for unlimited)
             */
            maxEventsPerPoll?: number;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'file';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * File path patterns to read (e.g., C:\logs\*.log, /var/log/app/*.log). Supports wildcards.
             */
            paths?: string[];
            maxSizePerPoll?: number | string;
            /**
             * Processing mode: LOG for incremental reading with cursors, or FLAT for full-file read on each poll (default: LOG).
             */
            mode?: 'LOG' | 'FLAT';
            [k: string]: unknown | undefined;
          }
      )
    | undefined;
}
/**
 * Execute For Each Entry
 */
export interface ExecuteForEachEntryOf {
  source?: string;
  concatMethod?:
    | ('list' | 'json_array' | 'json_array_extended')
    | {
        concatStart?: string;
        concatEnd?: string;
        [k: string]: unknown | undefined;
      };
  [k: string]: unknown | undefined;
}
