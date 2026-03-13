/* eslint-disable */

/**
 * USTX file format for OpenUTAU
 */
export interface HttpsJsonSchemastoreOrgOpenutauUstxJson {
  /**
   * Name of the project
   */
  name?: string;
  comment?: string;
  output_dir?: string;
  cache_dir?: string;
  /**
   * Version of the USTX file format
   */
  ustx_version?: string;
  /**
   * Resolution of the project in ticks per quarter note
   */
  resolution?: number;
  /**
   * Tempo of the project in beats per minute, deprecated in favor of tempos
   */
  bpm?: number;
  /**
   * Number of beats per bar, deprecated in favor of time_signatures
   */
  beat_per_bar?: number;
  /**
   * Beat unit, deprecated in favor of time_signatures, deprecated in favor of time_signatures
   */
  beat_unit?: number;
  /**
   * List of expression definitions
   */
  expressions?: {
    [k: string]:
      | {
          /**
           * Name of the expression
           */
          name: string;
          /**
           * Abbreviation of the expression
           */
          abbr: string;
          /**
           * Type of the expression
           */
          type: 'Curve' | 'Options' | 'Numerical';
          /**
           * Minimum value of the expression
           */
          min?: number;
          /**
           * Maximum value of the expression
           */
          max?: number;
          /**
           * Default value of the expression
           */
          default_value?: number;
          /**
           * Whether the expression is a utau resampler flag
           */
          is_flag?: boolean;
          /**
           * UTAU resampler flag header, used if the expression is a numerical expression
           */
          flag?: string;
          /**
           * List of options, used if the expression is an options expression
           */
          options?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  /**
   * Expressions used by the user when saving the project
   */
  exp_selectors?: string[];
  /**
   * Index of the expression the user was editing when saving the project
   */
  exp_primary?: number;
  /**
   * Index of the expression the user was viewing as background when saving the project
   */
  exp_secondary?: number;
  /**
   * List of time signatures
   */
  time_signatures?: {
    /**
     * Position of the time signature in bars
     */
    bar_position?: number;
    /**
     * Number of beats per bar
     */
    beat_per_bar?: number;
    /**
     * Beat unit
     */
    beat_unit?: number;
    [k: string]: unknown | undefined;
  }[];
  /**
   * List of tempos
   */
  tempos?: {
    /**
     * Position of the tempo in ticks
     */
    position?: number;
    /**
     * Tempo in beats per minute
     */
    bpm?: number;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Tracks in the project
   */
  tracks?: {
    /**
     * Singer of the track
     */
    singer?: string;
    /**
     * Phonemizer of the track
     */
    phonemizer?: string;
    /**
     * Renderer settings of the track
     */
    renderer_settings?: {
      /**
       * Renderer of the track
       */
      renderer?: string;
      /**
       * UTAU Resampler of the track, if the renderer is CLASSIC
       */
      resampler?: string;
      /**
       * UTAU Wavtool of the track, if the renderer is CLASSIC
       */
      wavtool?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Name of the track
     */
    track_name?: string;
    /**
     * Color of the track
     */
    track_color?: string;
    /**
     * Whether the track is muted
     */
    mute?: boolean;
    /**
     * Whether the track is soloed
     */
    solo?: boolean;
    /**
     * Volume of the track
     */
    volume?: number;
    /**
     * Pan of the track
     */
    pan?: number;
    /**
     * List of voice color names
     */
    voice_color_names?: string[];
    [k: string]: unknown | undefined;
  }[];
  /**
   * Voice parts in the project
   */
  voice_parts?: {
    /**
     * Name of the voice part
     */
    name?: string;
    /**
     * Index of the track the voice part is in
     */
    track_no?: number;
    /**
     * Position of the voice part in ticks
     */
    position?: number;
    /**
     * Notes in the voice part
     */
    notes?: {
      /**
       * Position of the note in the voice part, in ticks
       */
      position?: number;
      /**
       * Duration of the note in ticks
       */
      duration?: number;
      /**
       * Tone of the note, MIDI number, C4 is 60
       */
      tone?: number;
      /**
       * Lyric of the note
       */
      lyric?: string;
      /**
       * Pitch control points in the note
       */
      pitch?: {
        /**
         * Pitch control points
         */
        data?: {
          /**
           * Offset of the control point from the starting point of the note in ticks
           */
          x?: number;
          /**
           * Tone value of the control point from the tone of the note in 1/10 semitone
           */
          y?: number;
          /**
           * Shape of the control point
           */
          shape?: 'l' | 'i' | 'o' | 'io';
          snap_first?: boolean;
          [k: string]: unknown | undefined;
        }[];
        [k: string]: unknown | undefined;
      };
      /**
       * Vibrato of the note
       */
      vibrato?: {
        /**
         * Length of the vibrato, relative to the duration of the note, 0~100
         */
        length?: number;
        /**
         * Period of the vibrato in Milliseconds
         */
        period?: number;
        /**
         * Depth of the vibrato in cents
         */
        depth?: number;
        /**
         * Fade in of the vibrato in Milliseconds
         */
        in?: number;
        /**
         * Fade out of the vibrato in Milliseconds
         */
        out?: number;
        [k: string]: unknown | undefined;
      };
      /**
       * Edited numerical or options expressions of the note
       */
      phoneme_expressions?: {
        /**
         * Index of the phoneme that the expression belongs to
         */
        index?: number;
        /**
         * Abbreviation of the expression
         */
        abbr?: string;
        /**
         * Value of the expression
         */
        value?: number;
        [k: string]: unknown | undefined;
      }[];
      /**
       * Overridden phoneme aliases in the note
       */
      phoneme_overrides?: {
        /**
         * Index of the phoneme that the override belongs to
         */
        index?: number;
        /**
         * Phoneme after overriding
         */
        phoneme?: string;
        [k: string]: unknown | undefined;
      }[];
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  }[];
  /**
   * Wave parts in the project
   */
  wave_parts?: {
    /**
     * Name of the wave part
     */
    name?: string;
    /**
     * Index of the track the wave part is in
     */
    track_no?: number;
    /**
     * Position of the wave part in ticks
     */
    position?: number;
    /**
     * Relative path of the audio file
     */
    relative_path?: string;
    /**
     * Duration of the audio file in Milliseconds
     */
    file_duration_ms?: number;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
