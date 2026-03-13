/* eslint-disable */

/**
 * Schema for the info.json metadata file of a Cinnamon Spice, as documented at: <https://github.com/linuxmint/cinnamon-spices-extensions>, <https://github.com/linuxmint/cinnamon-spices-applet>, <https://github.com/linuxmint/cinnamon-spices-desklets>, and <https://github.com/linuxmint/cinnamon-spices-themes>
 */
export type CinnamonSpiceInfoJsonSchema =
  | {
      /**
       * The JSON schema to validate the file against
       */
      $schema?: string;
      /**
       * The primary, current author of this Cinnamon Spice; the GitHub style `Name <email> (url)` is supported
       */
      author: string;
    }
  | {
      /**
       * The JSON schema to validate the file against
       */
      $schema?: string;
      /**
       * The primary, current author of this Cinnamon Spice; the GitHub style `Name <email> (url)` is supported.
       */
      author: string;
      /**
       * A list of other contributors to this Cinnamon Spice; the GitHub style `Name <email> (url)` is supported.
       *
       * @minItems 1
       */
      contributors?: [string, ...string[]];
      /**
       * A short description of this Cinnamon Spice to be displayed in the catalog
       */
      description: string;
      /**
       * DEPRECATED: Use the `author` field instead
       */
      git_author?: string;
      /**
       * The license under which this Cinnamon Spice is released
       */
      license?:
        | (
            | '0BSD'
            | 'AAL'
            | 'AFL-1.1'
            | 'AFL-1.2'
            | 'AFL-2.0'
            | 'AFL-2.1'
            | 'AFL-3.0'
            | 'AGPL-3.0'
            | 'AGPL-3.0-only'
            | 'AGPL-3.0-or-later'
            | 'Apache-1.1'
            | 'Apache-2.0'
            | 'APL-1.0'
            | 'APSL-1.0'
            | 'APSL-1.1'
            | 'APSL-1.2'
            | 'APSL-2.0'
            | 'Artistic-1.0'
            | 'Artistic-1.0-cl8'
            | 'Artistic-1.0-Perl'
            | 'Artistic-2.0'
            | 'BSD-1-Clause'
            | 'BSD-2-Clause'
            | 'BSD-2-Clause-Patent'
            | 'BSD-3-Clause'
            | 'BSD-3-Clause-LBNL'
            | 'BSL-1.0'
            | 'CAL-1.0'
            | 'CAL-1.0-Combined-Work-Exception'
            | 'CATOSL-1.1'
            | 'CDDL-1.0'
            | 'CECILL-2.1'
            | 'CERN-OHL-P-2.0'
            | 'CERN-OHL-S-2.0'
            | 'CERN-OHL-W-2.0'
            | 'CNRI-Python'
            | 'CPAL-1.0'
            | 'CPL-1.0'
            | 'CUA-OPL-1.0'
            | 'ECL-1.0'
            | 'ECL-2.0'
            | 'EFL-1.0'
            | 'EFL-2.0'
            | 'Entessa'
            | 'EPL-1.0'
            | 'EPL-2.0'
            | 'EUDatagrid'
            | 'EUPL-1.1'
            | 'EUPL-1.2'
            | 'Fair'
            | 'Frameworx-1.0'
            | 'GPL-2.0'
            | 'GPL-2.0+'
            | 'GPL-2.0-only'
            | 'GPL-2.0-or-later'
            | 'GPL-3.0'
            | 'GPL-3.0+'
            | 'GPL-3.0-only'
            | 'GPL-3.0-or-later'
            | 'GPL-3.0-with-GCC-exception'
            | 'HPND'
            | 'ICU'
            | 'Intel'
            | 'IPA'
            | 'IPL-1.0'
            | 'ISC'
            | 'Jam'
            | 'LGPL-2.0'
            | 'LGPL-2.0+'
            | 'LGPL-2.0-only'
            | 'LGPL-2.0-or-later'
            | 'LGPL-2.1'
            | 'LGPL-2.1+'
            | 'LGPL-2.1-only'
            | 'LGPL-2.1-or-later'
            | 'LGPL-3.0'
            | 'LGPL-3.0+'
            | 'LGPL-3.0-only'
            | 'LGPL-3.0-or-later'
            | 'LiLiQ-P-1.1'
            | 'LiLiQ-R-1.1'
            | 'LiLiQ-Rplus-1.1'
            | 'LPL-1.0'
            | 'LPL-1.02'
            | 'LPPL-1.3c'
            | 'MirOS'
            | 'MIT'
            | 'MIT-0'
            | 'MIT-Modern-Variant'
            | 'Motosoto'
            | 'MPL-1.0'
            | 'MPL-1.1'
            | 'MPL-2.0'
            | 'MPL-2.0-no-copyleft-exception'
            | 'MS-PL'
            | 'MS-RL'
            | 'MulanPSL-2.0'
            | 'Multics'
            | 'NASA-1.3'
            | 'Naumen'
            | 'NCSA'
            | 'NGPL'
            | 'Nokia'
            | 'NPOSL-3.0'
            | 'NTP'
            | 'OCLC-2.0'
            | 'OFL-1.1'
            | 'OFL-1.1-no-RFN'
            | 'OFL-1.1-RFN'
            | 'OGTSL'
            | 'OLDAP-2.8'
            | 'OLFL-1.3'
            | 'OSET-PL-2.1'
            | 'OSL-1.0'
            | 'OSL-2.0'
            | 'OSL-2.1'
            | 'OSL-3.0'
            | 'PHP-3.0'
            | 'PHP-3.01'
            | 'PostgreSQL'
            | 'Python-2.0'
            | 'QPL-1.0'
            | 'RPL-1.1'
            | 'RPL-1.5'
            | 'RPSL-1.0'
            | 'RSCPL'
            | 'SimPL-2.0'
            | 'SISSL'
            | 'Sleepycat'
            | 'SPL-1.0'
            | 'UCL-1.0'
            | 'Unicode-3.0'
            | 'Unicode-DFS-2016'
            | 'Unlicense'
            | 'UPL-1.0'
            | 'VSL-1.0'
            | 'W3C'
            | 'Watcom-1.0'
            | 'wxWindows'
            | 'Xnet'
            | 'Zlib'
            | 'ZPL-2.0'
            | 'ZPL-2.1'
          )
        | string;
      /**
       * An unique name for this Cinnamon Spice
       */
      name: string;
      /**
       * The name of the author who originally wrote this Cinnamon Spice if it is not the same as the current `author`; the GitHub style `Name <email> (url)` is supported.
       */
      original_author?: string;
      /**
       * DEPRECATED: The icon should be in the `icon.png` file, and the screenshot in the `screenshot.png` file
       */
      thubmnail?: string;
      /**
       * The url of the home page for this Cinnamon Spice, e.g., the GitHub repository
       */
      url?: string;
    };
