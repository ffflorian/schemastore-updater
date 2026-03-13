/* eslint-disable */

/**
 * The package unique identifier
 */
export type PackageIdentifier = string;
/**
 * The package version
 */
export type PackageVersion = string;
/**
 * Package moniker or tag
 */
export type Tag = string | null;
/**
 * The distribution channel
 */
export type Channel = string | null;
/**
 * The package meta-data locale
 */
export type Locale = string | null;
/**
 * The installer supported operating system
 *
 * @maxItems 2
 */
export type Platform = [] | [Platform1] | [Platform1, Platform1] | null;
export type Platform1 = 'Windows.Desktop' | 'Windows.Universal';
/**
 * The installer minimum operating system version
 */
export type MinimumOSVersion = string | null;
/**
 * Enumeration of supported installer types
 */
export type InstallerType =
  | ('msix' | 'msi' | 'appx' | 'exe' | 'zip' | 'inno' | 'nullsoft' | 'wix' | 'burn' | 'pwa')
  | null;
/**
 * Scope indicates if the installer is per user or per machine
 */
export type Scope = ('user' | 'machine') | null;
/**
 * List of supported installer modes
 *
 * @maxItems 3
 */
export type InstallModes =
  | []
  | [InstallModes1]
  | [InstallModes1, InstallModes1]
  | [InstallModes1, InstallModes1, InstallModes1]
  | null;
export type InstallModes1 = 'interactive' | 'silent' | 'silentWithProgress';
/**
 * List of additional non-zero installer success exit codes other than known default values by winget
 *
 * @maxItems 16
 */
export type InstallerSuccessCodes =
  | []
  | [number]
  | [number, number]
  | [number, number, number]
  | [number, number, number, number]
  | [number, number, number, number, number]
  | [number, number, number, number, number, number]
  | [number, number, number, number, number, number, number]
  | [number, number, number, number, number, number, number, number]
  | [number, number, number, number, number, number, number, number, number]
  | [number, number, number, number, number, number, number, number, number, number]
  | [number, number, number, number, number, number, number, number, number, number, number]
  | [number, number, number, number, number, number, number, number, number, number, number, number]
  | [number, number, number, number, number, number, number, number, number, number, number, number, number]
  | [number, number, number, number, number, number, number, number, number, number, number, number, number, number]
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  | [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ]
  | null;
/**
 * The upgrade method
 */
export type UpgradeBehavior = ('install' | 'uninstallPrevious') | null;
/**
 * List of commands or aliases to run the package
 *
 * @maxItems 16
 */
export type Commands =
  | []
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string]
  | [string, string, string, string, string, string]
  | [string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
  | [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  | [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  | null;
/**
 * List of protocols the package provides a handler for
 *
 * @maxItems 16
 */
export type Protocols =
  | []
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string]
  | [string, string, string, string, string, string]
  | [string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
  | [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  | [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  | null;
/**
 * List of file extensions the package could support
 *
 * @maxItems 256
 */
export type FileExtensions = string[] | null;
export type Dependencies = {
  /**
   * List of Windows feature dependencies
   *
   * @maxItems 16
   */
  WindowsFeatures?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | null;
  /**
   * List of Windows library dependencies
   *
   * @maxItems 16
   */
  WindowsLibraries?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | null;
  /**
   * List of package dependencies from current source
   *
   * @maxItems 16
   */
  PackageDependencies?:
    | []
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | null;
  /**
   * List of external package dependencies
   *
   * @maxItems 16
   */
  ExternalDependencies?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | null;
  [k: string]: unknown | undefined;
} & Dependencies1;
export type Dependencies1 = {
  /**
   * List of Windows feature dependencies
   *
   * @maxItems 16
   */
  WindowsFeatures?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | null;
  /**
   * List of Windows library dependencies
   *
   * @maxItems 16
   */
  WindowsLibraries?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | null;
  /**
   * List of package dependencies from current source
   *
   * @maxItems 16
   */
  PackageDependencies?:
    | []
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        },
        {
          PackageIdentifier: PackageIdentifier;
          MinimumVersion?: PackageVersion;
          [k: string]: unknown | undefined;
        }
      ]
    | null;
  /**
   * List of external package dependencies
   *
   * @maxItems 16
   */
  ExternalDependencies?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string]
    | [string, string, string, string, string, string]
    | [string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | null;
  [k: string]: unknown | undefined;
} | null;
/**
 * PackageFamilyName for appx or msix installer. Could be used for correlation of packages across sources
 */
export type PackageFamilyName = string | null;
/**
 * ProductCode could be used for correlation of packages across sources
 */
export type ProductCode = string | null;
/**
 * List of appx or msix installer capabilities
 *
 * @maxItems 1000
 */
export type Capabilities = string[] | null;
/**
 * List of appx or msix installer restricted capabilities
 *
 * @maxItems 1000
 */
export type RestrictedCapabilities = string[] | null;

/**
 * A representation of a single-file manifest representing an app in the OWC. v1.0.0
 */
export interface HttpsAkaMsWingetManifestSingleton100SchemaJson {
  PackageIdentifier: PackageIdentifier;
  PackageVersion: PackageVersion;
  /**
   * The package meta-data locale
   */
  PackageLocale: string;
  /**
   * The publisher name
   */
  Publisher: string;
  /**
   * The publisher home page
   */
  PublisherUrl?: string | null;
  /**
   * The publisher support page
   */
  PublisherSupportUrl?: string | null;
  /**
   * The publisher privacy page or the package privacy page
   */
  PrivacyUrl?: string | null;
  /**
   * The package author
   */
  Author?: string | null;
  /**
   * The package name
   */
  PackageName: string;
  /**
   * The package home page
   */
  PackageUrl?: string | null;
  /**
   * The package license
   */
  License: string;
  /**
   * The license page
   */
  LicenseUrl?: string | null;
  /**
   * The package copyright
   */
  Copyright?: string | null;
  /**
   * The package copyright page
   */
  CopyrightUrl?: string | null;
  /**
   * The short package description
   */
  ShortDescription: string;
  /**
   * The full package description
   */
  Description?: string | null;
  /**
   * The most common package term
   */
  Moniker?: string | null;
  /**
   * List of additional package search terms
   *
   * @maxItems 16
   */
  Tags?:
    | []
    | [Tag]
    | [Tag, Tag]
    | [Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | null;
  Channel?: Channel;
  InstallerLocale?: Locale;
  Platform?: Platform;
  MinimumOSVersion?: MinimumOSVersion;
  InstallerType?: InstallerType;
  Scope?: Scope;
  InstallModes?: InstallModes;
  InstallerSwitches?: InstallerSwitches;
  InstallerSuccessCodes?: InstallerSuccessCodes;
  UpgradeBehavior?: UpgradeBehavior;
  Commands?: Commands;
  Protocols?: Protocols;
  FileExtensions?: FileExtensions;
  Dependencies?: Dependencies;
  PackageFamilyName?: PackageFamilyName;
  ProductCode?: ProductCode;
  Capabilities?: Capabilities;
  RestrictedCapabilities?: RestrictedCapabilities;
  /**
   * @minItems 1
   * @maxItems 1
   */
  Installers: [Installer];
  /**
   * The manifest type
   */
  ManifestType: 'singleton';
  /**
   * The manifest syntax version
   */
  ManifestVersion: string;
  [k: string]: unknown | undefined;
}
export interface InstallerSwitches {
  /**
   * Silent is the value that should be passed to the installer when user chooses a silent or quiet install
   */
  Silent?: string | null;
  /**
   * SilentWithProgress is the value that should be passed to the installer when user chooses a non-interactive install
   */
  SilentWithProgress?: string | null;
  /**
   * Interactive is the value that should be passed to the installer when user chooses an interactive install
   */
  Interactive?: string | null;
  /**
   * InstallLocation is the value passed to the installer for custom install location. <INSTALLPATH> token can be included in the switch value so that winget will replace the token with user provided path
   */
  InstallLocation?: string | null;
  /**
   * Log is the value passed to the installer for custom log file path. <LOGPATH> token can be included in the switch value so that winget will replace the token with user provided path
   */
  Log?: string | null;
  /**
   * Upgrade is the value that should be passed to the installer when user chooses an upgrade
   */
  Upgrade?: string | null;
  /**
   * Custom switches will be passed directly to the installer by winget
   */
  Custom?: string | null;
  [k: string]: unknown | undefined;
}
export interface Installer {
  InstallerLocale?: Locale;
  Platform?: Platform;
  MinimumOSVersion?: MinimumOSVersion;
  /**
   * The installer target architecture
   */
  Architecture: 'x86' | 'x64' | 'arm' | 'arm64' | 'neutral';
  InstallerType?: InstallerType;
  Scope?: Scope;
  /**
   * The installer Url
   */
  InstallerUrl: string;
  /**
   * Sha256 is required. Sha256 of the installer
   */
  InstallerSha256: string;
  /**
   * SignatureSha256 is recommended for appx or msix. It is the sha256 of signature file inside appx or msix. Could be used during streaming install if applicable
   */
  SignatureSha256?: string | null;
  InstallModes?: InstallModes;
  InstallerSwitches?: InstallerSwitches;
  InstallerSuccessCodes?: InstallerSuccessCodes;
  UpgradeBehavior?: UpgradeBehavior;
  Commands?: Commands;
  Protocols?: Protocols;
  FileExtensions?: FileExtensions;
  Dependencies?: Dependencies;
  PackageFamilyName?: PackageFamilyName;
  ProductCode?: ProductCode;
  Capabilities?: Capabilities;
  RestrictedCapabilities?: RestrictedCapabilities;
  [k: string]: unknown | undefined;
}
