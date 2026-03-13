/* eslint-disable */

/**
 * A damage type's for a Minecraft data pack config schema
 */
export interface MinecraftDataPackDamageType {
  message_id: string;
  scaling: 'never' | 'always' | 'when_caused_by_living_non_player';
  exhaustion: number;
  effects?: 'hurt' | 'thorns' | 'drowning' | 'burning' | 'poking' | 'freezing';
  death_message_type?: 'default' | 'fall_variants' | 'intentional_game_design';
  [k: string]: unknown | undefined;
}
