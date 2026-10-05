/* eslint-disable */

export type GeoJSON =
  | GeoJSONPoint
  | GeoJSONLineString
  | GeoJSONPolygon
  | GeoJSONMultiPoint
  | GeoJSONMultiLineString
  | GeoJSONMultiPolygon
  | GeoJSONGeometryCollection
  | GeoJSONFeature
  | GeoJSONFeatureCollection;

export interface GeoJSONPoint {
  type: 'Point';
  /**
   * @minItems 2
   */
  coordinates: [number, number, ...number[]];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONLineString {
  type: 'LineString';
  /**
   * @minItems 2
   */
  coordinates: [[number, number, ...number[]], [number, number, ...number[]], ...[number, number, ...number[]][]];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONPolygon {
  type: 'Polygon';
  coordinates: [
    [number, number, ...number[]],
    [number, number, ...number[]],
    [number, number, ...number[]],
    [number, number, ...number[]],
    ...[number, number, ...number[]][]
  ][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiPoint {
  type: 'MultiPoint';
  coordinates: [number, number, ...number[]][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiLineString {
  type: 'MultiLineString';
  coordinates: [[number, number, ...number[]], [number, number, ...number[]], ...[number, number, ...number[]][]][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiPolygon {
  type: 'MultiPolygon';
  coordinates: [
    [number, number, ...number[]],
    [number, number, ...number[]],
    [number, number, ...number[]],
    [number, number, ...number[]],
    ...[number, number, ...number[]][]
  ][][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONGeometryCollection {
  type: 'GeometryCollection';
  geometries: (
    | GeoJSONPoint
    | GeoJSONLineString
    | GeoJSONPolygon
    | GeoJSONMultiPoint
    | GeoJSONMultiLineString
    | GeoJSONMultiPolygon
  )[];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONFeature {
  type: 'Feature';
  id?: number | string;
  properties: null | {
    [k: string]: unknown | undefined;
  };
  geometry:
    | null
    | GeoJSONPoint
    | GeoJSONLineString
    | GeoJSONPolygon
    | GeoJSONMultiPoint
    | GeoJSONMultiLineString
    | GeoJSONMultiPolygon
    | GeoJSONGeometryCollection;
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONFeatureCollection {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
