/* eslint-disable */

/**
 * Version range of the package or SDK to use
 */
export type VersionConstraint = (('any' | '') | Version | string) | undefined;
export type Version = string;
export type Dependency =
  | (
      | (('any' | '') | Version | string)
      | null
      | SDKDependency
      | HostedDependency
      | {
          git:
            | string
            | {
                /**
                 * URI of the repository hosting this package
                 */
                url?: string;
                /**
                 * Path of this package relative to the Git repo's root
                 */
                path?: string;
                /**
                 * The branch, tag, or anything else Git allows to identify a commit.
                 */
                ref?: string;
                /**
                 * Pattern for matching git tags with version placeholders
                 */
                tag_pattern?: string;
                [k: string]: unknown | undefined;
              };
          version?: VersionConstraint | undefined;
        }
      | {
          path?: string;
        }
    )
  | undefined;
/**
 * A list of flavors that include the asset. [Learn more.](https://docs.flutter.dev/deployment/flavors#conditionally-bundling-assets-based-on-flavor)
 */
export type AssetFlavors = string[];
/**
 * A list of transformers to apply to the asset. [Learn more.](https://docs.flutter.dev/ui/assets/asset-transformation)
 */
export type AssetTransformers = {
  /**
   * A Dart command-line app that is invoked with dart run with at least two arguments: --input, which contains the path to the file to transform and --output, which is the location where the transformer code must write its output to
   */
  package: string;
  /**
   * @minItems 1
   */
  args?: [string, ...string[]];
  [k: string]: unknown | undefined;
}[];
/**
 * A list of platforms that include the asset. [Learn more.](https://docs.flutter.dev/tools/pubspec#assets)
 */
export type AssetPlatforms = ('android' | 'ios' | 'linux' | 'macos' | 'web' | 'windows')[];
/**
 * A list of font families and their fonts. [Learn more.](https://docs.flutter.dev/cookbook/design/fonts#declare-the-font-in-the-pubspec-yaml-file)
 */
export type Fonts = {
  /**
   * The name of the typeface. You use this name in the `fontFamily` property of a `TextStyle` object.
   */
  family: string;
  /**
   * @minItems 1
   */
  fonts: [
    {
      /**
       * The path to the font file. Flutter supports the following font formats: OpenType font collections: .ttc, TrueType fonts: .ttf, OpenType fonts: .otf. Flutter does not support fonts in the Web Open Font Format, .woff and .woff2, on desktop platforms.
       */
      asset: string;
      /**
       * The style property specifies whether the glyphs in the font file display as either italic or normal. These values correspond to the FontStyle. You can use these styles in the fontStyle property of a TextStyle object. [Learn more.](https://docs.flutter.dev/cookbook/design/fonts#set-font-weight)
       */
      style?: 'normal' | 'italic';
      /**
       * The weight property specifies the weight of the outlines in the file. These values correspond to the FontWeight and can be used in the fontWeight property of a TextStyle object. You can't use the weight property to override the weight of the font. [Learn more.](https://docs.flutter.dev/cookbook/design/fonts#specify-the-font-weight)
       */
      weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
      [k: string]: unknown | undefined;
    },
    ...{
      /**
       * The path to the font file. Flutter supports the following font formats: OpenType font collections: .ttc, TrueType fonts: .ttf, OpenType fonts: .otf. Flutter does not support fonts in the Web Open Font Format, .woff and .woff2, on desktop platforms.
       */
      asset: string;
      /**
       * The style property specifies whether the glyphs in the font file display as either italic or normal. These values correspond to the FontStyle. You can use these styles in the fontStyle property of a TextStyle object. [Learn more.](https://docs.flutter.dev/cookbook/design/fonts#set-font-weight)
       */
      style?: 'normal' | 'italic';
      /**
       * The weight property specifies the weight of the outlines in the file. These values correspond to the FontWeight and can be used in the fontWeight property of a TextStyle object. You can't use the weight property to override the weight of the font. [Learn more.](https://docs.flutter.dev/cookbook/design/fonts#specify-the-font-weight)
       */
      weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
      [k: string]: unknown | undefined;
    }[]
  ];
  [k: string]: unknown | undefined;
}[];
/**
 * Shaders, in the form of GLSL files with the .frag extension. The Flutter command-line tool compiles the shader to its appropriate backend format, and generates its necessary runtime metadata. The compiled shader is then included in the application just like an asset. [Learn more](https://docs.flutter.dev/ui/design/graphics/fragment-shaders#adding-shaders-to-an-application)
 */
export type FragmentShaders = string[];

/**
 * Dart Pubspec file
 */
export interface Pubspec {
  /**
   * The name of this package. The name is how other packages refer to yours, should you publish it. [Learn more](https://dart.dev/tools/pub/pubspec#name)
   */
  name: string;
  /**
   * A version number is required to host your package on the pub.dev site, but can be omitted for local-only packages. If you omit it, your package is implicitly versioned 0.0.0. [Learn more](https://dart.dev/tools/pub/pubspec#version)
   */
  version?: string;
  /**
   * A short, plain text sales-pitch for your package in English. [Learn More](https://dart.dev/tools/pub/pubspec#description)
   */
  description?: string;
  /**
   * A URL pointing to the website for your package. [Learn more](https://dart.dev/tools/pub/pubspec#homepage)
   */
  homepage?: string | null;
  /**
   * The optional repository field should contain the URL for your package's source code repository. [Learn more](https://dart.dev/tools/pub/pubspec#repository)
   */
  repository?: string;
  /**
   * A URL for the package's issue tracker, where existing bugs can be viewed and new bugs can be filed. [Learn more](https://dart.dev/tools/pub/pubspec#issue_tracker)
   */
  issue_tracker?: string;
  /**
   * A site that hosts documentation, separate from the main homepage and from the Pub-generated API reference. [Learn more](https://dart.dev/tools/pub/pubspec#documentation)
   */
  documentation?: string;
  /**
   * A package may expose one or more of its scripts as executables that can be run directly from the command line. [Learn more](https://dart.dev/tools/pub/pubspec#executables)
   */
  executables?: {
    [k: string]: (string | null) | undefined;
  };
  /**
   * The platforms field specifies which platforms the package supports. [Learn more](https://dart.dev/tools/pub/pubspec#platforms)
   */
  platforms?: {
    android?: null;
    ios?: null;
    linux?: null;
    macos?: null;
    web?: null;
    windows?: null;
  };
  /**
   * Can be used to specify a custom pub package server to publish. Specify none to prevent a package from being published. [Learn more.](https://dart.dev/tools/pub/pubspec#publish_to)
   */
  publish_to?: (string | 'none') & string;
  /**
   * List of URLs where users can sponsor development of the package. [Learn more.](https://dart.dev/tools/pub/pubspec#funding)
   */
  funding?: string[];
  /**
   * Gitignore style list of files where pub will not search for accidentally exposed keys. [Learn more.](https://dart.dev/tools/pub/pubspec#false_secrets)
   */
  false_secrets?: unknown[];
  /**
   * Showcase widgets or other visual elements using screenshots displayed that will be displayed on pub.dev. [Learn more.](https://dart.dev/tools/pub/pubspec#screenshots)
   *
   * @maxItems 10
   */
  screenshots?:
    | []
    | [
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        },
        {
          description: string;
          path: string;
          [k: string]: unknown | undefined;
        }
      ];
  /**
   * Pub.dev displays the topics on the package page as well as in the search results. [See the list of available topics](https://pub.dev/topics) [Learn more.](https://dart.dev/tools/pub/pubspec#topics)
   *
   * @maxItems 5
   */
  topics?:
    | []
    | [string]
    | [string, string]
    | [string, string, string]
    | [string, string, string, string]
    | [string, string, string, string, string];
  /**
   * A list of security advisory identifiers that are ignored for this package. [See pub.dev Security Advisories](https://dart.dev/tools/pub/security-advisories) [Learn more.](https://dart.dev/tools/pub/pubspec#ignored_advisories)
   */
  ignored_advisories?: string[];
  environment?: {
    [k: string]: VersionConstraint | undefined;
  };
  workspace?: string[];
  resolution?: 'external' | 'local' | 'workspace';
  dependencies?: Dependencies;
  dev_dependencies?: Dependencies;
  dependency_overrides?: Dependencies;
  /**
   * Flutter-specific metadata. [Learn more.](https://docs.flutter.dev/tools/pubspec)
   */
  flutter?: {
    /**
     * Whether this project uses the Material Design package. Required if you use the Material icon font
     */
    'uses-material-design'?: boolean;
    /**
     * Enables generation of localized strings from arb files
     */
    generate?: boolean;
    /**
     * A list of directories or files that contain images or other assets. [Learn more.](https://flutter.dev/docs/development/ui/assets-and-images)
     */
    assets?: (
      | string
      | {
          path: string;
          flavors?: AssetFlavors;
          transformers?: AssetTransformers;
          platforms?: AssetPlatforms;
        }
    )[];
    fonts?: Fonts;
    shaders?: FragmentShaders;
    [k: string]: unknown | undefined;
  } | null;
  [k: string]: unknown | undefined;
}
export interface Dependencies {
  [k: string]: Dependency | undefined;
}
export interface SDKDependency {
  /**
   * The SDK which contains this package
   */
  sdk: string;
  version?: VersionConstraint | undefined;
}
export interface HostedDependency {
  hosted:
    | string
    | {
        name?: string;
        /**
         * The package server hosting this package
         */
        url: string;
        [k: string]: unknown | undefined;
      };
  version?: VersionConstraint | undefined;
}
