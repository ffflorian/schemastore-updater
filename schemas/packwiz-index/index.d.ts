/* eslint-disable */

/**
 * The index file of the modpack, storing references to every file to be downloaded in the pack.
 */
export interface IndexTomlPackwiz {
  /**
   * The default hash format for every file in the index.
   */
  'hash-format': 'sha256' | 'sha512' | 'sha1' | 'md5' | 'murmur2';
  /**
   * The files listed in this index. If it is not defined, defaults to an empty list.
   */
  files?: FileObject[];
}
/**
 * A single file in the index, to be downloaded by the modpack installer.
 */
export interface FileObject {
  /**
   * The path to the file to be downloaded, relative to this index file using forward slashes. Must not reference a file outside the pack root, and should not include characters or filenames restricted on common operating systems.
   */
  file: string;
  /**
   * The hash of the specified file, as a string. Binary hashes should be stored as hexadecimal, and case should be ignored during parsing. Numeric hashes (e.g. Murmur2) should still be stored as a string, to ensure the value is preserved correctly.
   */
  hash?: string;
  /**
   * The name with which this file should be downloaded, instead of the filename specified in the path. Not compatible with metafile, and may not be very well supported.
   */
  alias?: string;
  /**
   * The hash format for the hash of the specified file. Defaults to the hash format specified in the index - ideally remove this value if it is equal to the hash format for the index to save space.
   */
  'hash-format'?: 'sha256' | 'sha512' | 'sha1' | 'md5' | 'murmur2';
  /**
   * True when this entry points to a .toml metadata file, which references a file outside the pack.
   */
  metafile?: boolean;
  /**
   * When this is set to true, the file is not overwritten if it already exists, to preserve changes made by a user.
   */
  preserve?: boolean;
}
