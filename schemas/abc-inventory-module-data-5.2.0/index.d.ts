/* eslint-disable */

export type ABCInventoryTransaction =
  | ABCInventoryReceiveTransaction
  | ABCInventoryBuildTransaction
  | ABCInventoryTransferTransaction
  | ABCInventoryStatusChangeTransaction
  | ABCInventoryDistributeTransaction
  | ABCInventoryDestroyTransaction
  | ABCInventorySellTransaction
  | ABCInventoryAdjustTransaction
  | ABCInventoryChangeExpiryTransaction
  | ABCInventoryChangeAttributesTransaction;
export type ABCStatus =
  | 'RELEASED'
  | 'CONDITIONAL_RELEASED'
  | 'QUARANTINE'
  | 'IN_TRANSIT'
  | 'ON_HOLD'
  | 'EXPIRED'
  | 'DAMAGED'
  | 'REJECTED';
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
 */
export type ABCInventoryEntry = ABCInventoryEntryWithoutUpstreams | ABCInventoryEntryWithUpstreams;

/**
 * Schema defining the structure of ABCInventoryModuleData including Principal Data, inventory, and transaction data in ABC-Plan's Inventory Management Module. Version 5.2.0 adds Rejected status.
 */
export interface ABCInventoryModuleDataJSONSchema {
  /**
   * Link to https://json.schemastore.org/abc-inventory-module-data-5.2.0.json
   */
  $schema: 'https://json.schemastore.org/abc-inventory-module-data-5.2.0.json';
  ABCProducts: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      name: string;
      isActive: boolean;
    };
  };
  ABCVendors: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      name: string;
      isActive: boolean;
    };
  };
  ABCMaterialCategories: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      name: string;
      prefix: string;
      isActive: boolean;
    };
  };
  ABCMaterialNumbers: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      productID: string | null;
      vendorID: string | null;
      materialCategoryID: string;
      number: number;
      name: string;
      description: string;
      unitOfMeasure: string;
      isActive: boolean;
    };
  };
  ABCLocations: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      name: string;
      isActive: boolean;
    };
  };
  ABCTags: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      name: string;
      isActive: boolean;
    };
  };
  ABCReasonCodes: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      code: string;
      description: string;
      isActive: boolean;
    };
  };
  ABCTransactions: ABCInventoryTransaction[];
  ABCInventoryEntries: {
    [k: string]: ABCInventoryEntry;
  };
}
export interface ABCInventoryReceiveTransaction {
  uid: string;
  timestamp: number;
  transactionType: 'receive';
  transactionData: {
    lotNumber: string;
    materialNumberID: string;
    materialCategoryID: string;
    quantity: number;
    dateOfExpiry: string;
    dateOfManufacture: string;
    poNumber: string;
    statusID: ABCStatus;
    locationID: string;
    tagIDs: string[];
    productID: string | null;
    notes: string;
  };
  targetLotID?: string;
}
export interface ABCInventoryBuildTransaction {
  uid: string;
  timestamp: number;
  transactionType: 'build';
  transactionData: {
    lotNumber: string;
    materialNumberID: string;
    materialCategoryID: string;
    quantity: number;
    dateOfExpiry: string;
    dateOfManufacture: string;
    poNumber: string;
    statusID: ABCStatus;
    locationID: string;
    tagIDs: string[];
    upstreams: {
      lotID: string;
      quantity: number;
    }[];
    upstreamIDs: string[];
    upstreamLotNumbers: string[];
    upstreamQuantities: number[];
    upstreamMaterialNumberIDs: string[];
    upstreamMaterialCategoryIDs: string[];
    upstreamLocationIDs: string[];
    productID: string | null;
    upstreamProductIDs: (string | null)[];
    notes: string;
  };
  targetLotID?: string;
}
export interface ABCInventoryTransferTransaction {
  uid: string;
  timestamp: number;
  transactionType: 'transfer';
  transactionData: {
    lotID: string;
    newLocationID: string;
    quantity: number;
    lotNumber: string;
    materialNumberID: string;
    locationID: string;
    productID: string | null;
    materialCategoryID: string;
    notes: string;
  };
  targetLotID?: string;
}
export interface ABCInventoryStatusChangeTransaction {
  uid: string;
  timestamp: number;
  transactionType: 'statusChange';
  transactionData: {
    lotID: string;
    newStatusID: ABCStatus;
    quantity: number;
    lotNumber: string;
    materialNumberID: string;
    locationID: string;
    productID: string | null;
    materialCategoryID: string;
    notes: string;
  };
  targetLotID?: string;
}
export interface ABCInventoryDistributeTransaction {
  uid: string;
  timestamp: number;
  transactionType: 'distribute';
  transactionData: {
    lotID: string;
    quantity: number;
    lotNumber: string;
    materialNumberID: string;
    locationID: string;
    productID: string | null;
    materialCategoryID: string;
    notes: string;
  };
}
export interface ABCInventoryDestroyTransaction {
  uid: string;
  timestamp: number;
  transactionType: 'destroy';
  transactionData: {
    lotID: string;
    lotNumber: string;
    materialNumberID: string;
    locationID: string;
    productID: string | null;
    materialCategoryID: string;
    notes: string;
  };
}
export interface ABCInventorySellTransaction {
  uid: string;
  timestamp: number;
  transactionType: 'sell';
  transactionData: {
    lotID: string;
    quantity: number;
    lotNumber: string;
    materialNumberID: string;
    locationID: string;
    productID: string | null;
    materialCategoryID: string;
    notes: string;
  };
}
export interface ABCInventoryAdjustTransaction {
  uid: string;
  timestamp: number;
  transactionType: 'adjust';
  transactionData: {
    lotID: string;
    newQuantity: number;
    reasonCodeID: string;
    lotNumber: string;
    materialNumberID: string;
    locationID: string;
    productID: string | null;
    materialCategoryID: string;
    notes: string;
  };
  oldQuantity: number;
}
export interface ABCInventoryChangeExpiryTransaction {
  uid: string;
  timestamp: number;
  transactionType: 'changeExpiry';
  transactionData: {
    lotID: string;
    newDateOfExpiry: string;
    lotNumber: string;
    materialNumberID: string;
    locationID: string;
    productID: string | null;
    materialCategoryID: string;
    notes: string;
  };
}
export interface ABCInventoryChangeAttributesTransaction {
  uid: string;
  timestamp: number;
  transactionType: 'changeAttributes';
  transactionData: {
    lotID: string;
    lotNumber: string;
    materialNumberID: string;
    materialCategoryID: string;
    productID: string | null;
    locationID: string;
    dateOfManufacture?: string;
    poNumber?: string;
    tagIDs?: string[];
    notes?: string;
  };
}
export interface ABCInventoryEntryWithoutUpstreams {
  lotNumber: string;
  materialNumberID: string;
  materialCategoryID: string;
  productID: string | null;
  quantity: number;
  dateOfExpiry: string;
  dateOfManufacture: string;
  poNumber: string;
  statusID: ABCStatus;
  locationID: string;
  tagIDs: string[];
  hasUpstreams: false;
  transactionNotes: string[];
  lotNumberLowercase: string;
}
export interface ABCInventoryEntryWithUpstreams {
  lotNumber: string;
  materialNumberID: string;
  materialCategoryID: string;
  productID: string | null;
  quantity: number;
  dateOfExpiry: string;
  dateOfManufacture: string;
  poNumber: string;
  statusID: ABCStatus;
  locationID: string;
  tagIDs: string[];
  hasUpstreams: true;
  upstreamIDs: string[];
  upstreamQuantities: number[];
  upstreamLotNumbers: string[];
  transactionNotes: string[];
  lotNumberLowercase: string;
}
