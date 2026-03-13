/* eslint-disable */

export type Type =
  | 'minecraft:empty'
  | 'empty'
  | 'minecraft:entity'
  | 'entity'
  | 'minecraft:block'
  | 'block'
  | 'minecraft:chest'
  | 'chest'
  | 'minecraft:fishing'
  | 'fishing'
  | 'minecraft:gift'
  | 'gift'
  | 'minecraft:advancement_reward'
  | 'advancement_reward'
  | 'minecraft:barter'
  | 'barter'
  | 'minecraft:command'
  | 'command'
  | 'minecraft:selector'
  | 'selector'
  | 'minecraft:advancement_entity'
  | 'advancement_entity'
  | 'minecraft:generic'
  | 'generic';
/**
 * Namespaced ID of the function to apply.
 */
export type Function = string;
/**
 * Namespaced ID of condition.
 */
export type Condition = string;
/**
 * Determines conditions for this function to be applied. If multiple conditions are specified, all must pass.
 */
export type Conditions = {
  /**
   * A function.
   */
  [k: string]:
    | {
        condition?: Condition;
        [k: string]: unknown | undefined;
      }
    | undefined;
}[];
/**
 *  Applies functions to all item stacks produced by this table. Functions are applied in order, so for example looting_enchant must be after set_count to work correctly.
 */
export type Functions = {
  /**
   * A function.
   */
  [k: string]:
    | {
        function?: Function;
        conditions?: Conditions;
        [k: string]: unknown | undefined;
      }
    | undefined;
}[];
/**
 * Namespaced ID of condition.
 */
export type Condition1 = string;
/**
 * Determines conditions for this pool to be used. If multiple conditions are specified, all must pass.
 */
export type Conditions1 = {
  /**
   * A condition.
   */
  [k: string]:
    | {
        condition?: Condition1;
        [k: string]: unknown | undefined;
      }
    | undefined;
}[];
/**
 * Namespaced ID of the function to apply.
 */
export type Function1 = string;
/**
 * Namespaced ID of condition.
 */
export type Condition2 = string;
/**
 * Determines conditions for this function to be applied. If multiple conditions are specified, all must pass.
 */
export type Conditions2 = {
  condition?: Condition2;
  [k: string]: unknown | undefined;
}[];
/**
 * Applies functions to all item stacks produced by this pool. Functions are applied in order, so for example looting_enchant must be after set_count to work correctly.
 */
export type Functions1 = {
  /**
   * A function.
   */
  [k: string]:
    | {
        function?: Function1;
        conditions?: Conditions2;
        [k: string]: unknown | undefined;
      }
    | undefined;
}[];
/**
 * Specifies the number of rolls on the pool.
 */
export type Rolls = {
  [k: string]: unknown | undefined;
} & (
  | number
  | {
      type?: Type1;
      [k: string]: unknown | undefined;
    }
);
/**
 * The number provider type.
 */
export type Type1 = 'minecraft:constant' | 'minecraft:uniform' | 'minecraft:binomial' | 'minecraft:score';
/**
 * Specifies the number of bonus rolls on the pool per point of luck. Rounded down after multiplying.
 */
export type BonusRolls = {
  [k: string]: unknown | undefined;
} & (
  | number
  | {
      type?: Type1;
      [k: string]: unknown | undefined;
    }
);
/**
 * Namespaced ID of condition.
 */
export type Condition3 = string;
/**
 * Determines conditions for this entry to be used. If multiple conditions are specified, all must pass.
 */
export type Conditions3 = {
  /**
   * A condition.
   */
  [k: string]:
    | {
        condition?: Condition3;
        [k: string]: unknown | undefined;
      }
    | undefined;
}[];
/**
 * Namespaced ID of the function to apply.
 */
export type Function2 = string;
/**
 * Namespaced ID of condition.
 */
export type Condition4 = string;
/**
 * Determines conditions for this function to be applied. If multiple conditions are specified, all must pass.
 */
export type Conditions4 = {
  condition?: Condition4;
  [k: string]: unknown | undefined;
}[];
/**
 * Applies functions to the item stack or item stacks being produced. Functions are applied in order, so for example looting_enchant must be after set_count to work correctly.
 */
export type Functions2 = {
  /**
   * A function.
   */
  [k: string]:
    | {
        function?: Function2;
        conditions?: Conditions4;
        [k: string]: unknown | undefined;
      }
    | undefined;
}[];
/**
 * Namespaced ID type of entry.
 */
export type Type2 =
  | 'minecraft:item'
  | 'minecraft:tag'
  | 'minecraft:loot_table'
  | 'minecraft:group'
  | 'minecraft:alternatives'
  | 'minecraft:sequence'
  | 'minecraft:dynamic'
  | 'minecraft:empty';
export type Name = string;
export type Children = unknown[];
/**
 * For type 'tag', if set to true, it chooses one item of the tag, each with the same weight and quality. If false, it generates one of each of the items in the tag.
 */
export type Expand = boolean;
/**
 * Determines how often this entry is chosen out of all the entries in the pool. Entries with higher weights are used more often (chance is this entry's weight⁄total of all considered entries' weights).
 */
export type Weight = number;
/**
 * Modifies the entry's weight based on the killing/opening/fishing player's luck attribute. Formula is floor( weight + (quality * generic.luck)).
 */
export type Quality = number;
/**
 * A list of all things that can be produced by this pool. One entry is chosen per roll as a weighted random selection from all entries without failing conditions.
 */
export type Entries = {
  conditions?: Conditions3;
  functions?: Functions2;
  type?: Type2;
  name?: Name;
  children?: Children;
  expand?: Expand;
  weight?: Weight;
  quality?: Quality;
  [k: string]: unknown | undefined;
}[];
/**
 * A list of all pools for this loot table. Each pool used generates items from its list of items based on the number of rolls. Pools are applied in order.
 */
export type Pools = {
  conditions?: Conditions1;
  functions?: Functions1;
  rolls?: Rolls;
  bonus_rolls?: BonusRolls;
  entries?: Entries;
  [k: string]: unknown | undefined;
}[];

/**
 * Configuration file defining a loot table for a data pack for Minecraft.
 */
export interface MinecraftDataPackLootTable {
  type?: Type;
  functions?: Functions;
  pools?: Pools;
  [k: string]: unknown | undefined;
}
