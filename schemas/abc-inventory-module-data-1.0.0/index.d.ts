/* eslint-disable */

/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
 */
export type ABCInventoryEntry = ABCInventoryEntryWithoutUpstreams | ABCInventoryEntryWithUpstreams;
export type ABCStatus = 'RELEASED' | 'CONDITIONAL_RELEASED' | 'QUARANTINE' | 'ON_HOLD' | 'EXPIRED' | 'DAMAGED';
export type ABCInventoryTransaction =
  | ABCInventoryReceiveTransaction
  | ABCInventoryBuildTransaction
  | ABCInventoryTransferTransaction
  | ABCInventoryStatusChangeTransaction
  | ABCInventoryDistributeTransaction
  | ABCInventoryDestroyTransaction
  | ABCInventorySellTransaction
  | ABCInventoryAdjustTransaction
  | ABCInventoryChangeExpiryTransaction;

/**
 * Schema defining the structure of ABCInventoryModuleData including Principal Data, inventory, and transaction data in ABC-Plan's Inventory Management Module.
 */
export interface ABCInventoryModuleDataJSONSchema {
  /**
   * Link to https://www.schemastore.org/abc-inventory-module-data-1.0.0.json
   */
  $schema: 'https://www.schemastore.org/abc-inventory-module-data-1.0.0.json';
  ABCInventoryEntries: {
    [k: string]: ABCInventoryEntry;
  };
  ABCLocations: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      isActive: boolean;
      name: string;
    };
  };
  ABCMaterialCategories: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      isActive: boolean;
      name: string;
      prefix: string;
    };
  };
  ABCMaterialNumbers: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      description: string;
      isActive: boolean;
      materialCategoryID: string;
      name: string;
      number: number;
      productID: string | null;
      unitOfMeasure: string;
      vendorID: string | null;
    };
  };
  ABCProducts: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      isActive: boolean;
      name: string;
    };
  };
  ABCReasonCodes: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      description: string;
      code: string;
      isActive: boolean;
    };
  };
  ABCTransactions: ABCInventoryTransaction[];
  ABCVendors: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      isActive: boolean;
      name: string;
    };
  };
}
export interface ABCInventoryEntryWithoutUpstreams {
  cost: number;
  dateOfExpiry: string;
  dateOfManufacture: string;
  hasUpstreams: false;
  locationID: string;
  lotNumber: string;
  lotNumberLowercase: string;
  materialNumberID: string;
  poNumber: string;
  productID: string | null;
  quantity: number;
  statusID: ABCStatus;
  transactionNotes: string[];
}
export interface ABCInventoryEntryWithUpstreams {
  cost: number;
  dateOfExpiry: string;
  dateOfManufacture: string;
  hasUpstreams: true;
  locationID: string;
  lotNumber: string;
  lotNumberLowercase: string;
  materialNumberID: string;
  poNumber: string;
  productID: string | null;
  quantity: number;
  statusID: ABCStatus;
  transactionNotes: string[];
  upstreamIDs: string[];
  upstreamLotNumbers: string[];
  upstreamQuantities: number[];
}
export interface ABCInventoryReceiveTransaction {
  targetLotID: string;
  timestamp: number;
  transactionData: {
    cost: number;
    dateOfExpiry: string;
    dateOfManufacture: string;
    locationID: string;
    lotNumber: string;
    materialNumberID: string;
    notes: string;
    poNumber: string;
    productID: string | null;
    quantity: number;
    statusID: ABCStatus;
  };
  transactionType: 'receive';
  uid: string;
}
export interface ABCInventoryBuildTransaction {
  targetLotID: string;
  timestamp: number;
  transactionData: {
    cost: number;
    dateOfExpiry: string;
    dateOfManufacture: string;
    locationID: string;
    lotNumber: string;
    materialNumberID: string;
    notes: string;
    poNumber: string;
    productID: string | null;
    quantity: number;
    statusID: ABCStatus;
    upstreamIDs: string[];
    upstreamLocationIDs: string[];
    upstreamLotNumbers: string[];
    upstreamMaterialNumberIDs: string[];
    upstreamProductIDs: (string | null)[];
    upstreamQuantities: number[];
    upstreams: {
      lotID: string;
      quantity: number;
    }[];
  };
  transactionType: 'build';
  uid: string;
}
export interface ABCInventoryTransferTransaction {
  targetLotID: string;
  timestamp: number;
  transactionData: {
    locationID: string;
    lotID: string;
    lotNumber: string;
    materialNumberID: string;
    newLocationID: string;
    notes: string;
    productID: string | null;
    quantity: number;
  };
  transactionType: 'transfer';
  uid: string;
}
export interface ABCInventoryStatusChangeTransaction {
  targetLotID: string;
  timestamp: number;
  transactionData: {
    locationID: string;
    lotID: string;
    lotNumber: string;
    materialNumberID: string;
    newStatusID: ABCStatus;
    notes: string;
    productID: string | null;
    quantity: number;
  };
  transactionType: 'statusChange';
  uid: string;
}
export interface ABCInventoryDistributeTransaction {
  timestamp: number;
  transactionData: {
    locationID: string;
    lotID: string;
    lotNumber: string;
    materialNumberID: string;
    notes: string;
    productID: string | null;
    quantity: number;
  };
  transactionType: 'distribute';
  uid: string;
}
export interface ABCInventoryDestroyTransaction {
  timestamp: number;
  transactionData: {
    locationID: string;
    lotID: string;
    lotNumber: string;
    materialNumberID: string;
    notes: string;
    productID: string | null;
  };
  transactionType: 'destroy';
  uid: string;
}
export interface ABCInventorySellTransaction {
  timestamp: number;
  transactionData: {
    cost: number;
    locationID: string;
    lotID: string;
    lotNumber: string;
    materialNumberID: string;
    notes: string;
    productID: string | null;
    quantity: number;
  };
  transactionType: 'sell';
  uid: string;
}
export interface ABCInventoryAdjustTransaction {
  timestamp: number;
  transactionData: {
    locationID: string;
    lotID: string;
    lotNumber: string;
    materialNumberID: string;
    newQuantity: number;
    notes: string;
    productID: string | null;
    reasonCodeID: string;
  };
  transactionType: 'adjust';
  uid: string;
}
export interface ABCInventoryChangeExpiryTransaction {
  timestamp: number;
  transactionData: {
    locationID: string;
    lotID: string;
    lotNumber: string;
    materialNumberID: string;
    newDateOfExpiry: string;
    notes: string;
    productID: string | null;
  };
  transactionType: 'changeExpiry';
  uid: string;
}
