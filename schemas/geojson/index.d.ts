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
    | GeoJSONPoint1
    | GeoJSONLineString1
    | GeoJSONPolygon1
    | GeoJSONMultiPoint1
    | GeoJSONMultiLineString1
    | GeoJSONMultiPolygon1
  )[];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONPoint1 {
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
export interface GeoJSONLineString1 {
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
export interface GeoJSONPolygon1 {
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
export interface GeoJSONMultiPoint1 {
  type: 'MultiPoint';
  coordinates: [number, number, ...number[]][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiLineString1 {
  type: 'MultiLineString';
  coordinates: [[number, number, ...number[]], [number, number, ...number[]], ...[number, number, ...number[]][]][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiPolygon1 {
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
export interface GeoJSONFeature {
  type: 'Feature';
  id?: number | string;
  properties: null | {
    [k: string]: unknown | undefined;
  };
  geometry:
    | null
    | GeoJSONPoint2
    | GeoJSONLineString2
    | GeoJSONPolygon2
    | GeoJSONMultiPoint2
    | GeoJSONMultiLineString2
    | GeoJSONMultiPolygon2
    | GeoJSONGeometryCollection1;
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONPoint2 {
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
export interface GeoJSONLineString2 {
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
export interface GeoJSONPolygon2 {
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
export interface GeoJSONMultiPoint2 {
  type: 'MultiPoint';
  coordinates: [number, number, ...number[]][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiLineString2 {
  type: 'MultiLineString';
  coordinates: [[number, number, ...number[]], [number, number, ...number[]], ...[number, number, ...number[]][]][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiPolygon2 {
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
export interface GeoJSONGeometryCollection1 {
  type: 'GeometryCollection';
  geometries: (
    | GeoJSONPoint3
    | GeoJSONLineString3
    | GeoJSONPolygon3
    | GeoJSONMultiPoint3
    | GeoJSONMultiLineString3
    | GeoJSONMultiPolygon3
  )[];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONPoint3 {
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
export interface GeoJSONLineString3 {
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
export interface GeoJSONPolygon3 {
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
export interface GeoJSONMultiPoint3 {
  type: 'MultiPoint';
  coordinates: [number, number, ...number[]][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiLineString3 {
  type: 'MultiLineString';
  coordinates: [[number, number, ...number[]], [number, number, ...number[]], ...[number, number, ...number[]][]][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiPolygon3 {
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
export interface GeoJSONFeatureCollection {
  type: 'FeatureCollection';
  features: GeoJSONFeature1[];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONFeature1 {
  type: 'Feature';
  id?: number | string;
  properties: null | {
    [k: string]: unknown | undefined;
  };
  geometry:
    | null
    | GeoJSONPoint4
    | GeoJSONLineString4
    | GeoJSONPolygon4
    | GeoJSONMultiPoint4
    | GeoJSONMultiLineString4
    | GeoJSONMultiPolygon4
    | GeoJSONGeometryCollection2;
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONPoint4 {
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
export interface GeoJSONLineString4 {
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
export interface GeoJSONPolygon4 {
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
export interface GeoJSONMultiPoint4 {
  type: 'MultiPoint';
  coordinates: [number, number, ...number[]][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiLineString4 {
  type: 'MultiLineString';
  coordinates: [[number, number, ...number[]], [number, number, ...number[]], ...[number, number, ...number[]][]][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiPolygon4 {
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
export interface GeoJSONGeometryCollection2 {
  type: 'GeometryCollection';
  geometries: (
    | GeoJSONPoint5
    | GeoJSONLineString5
    | GeoJSONPolygon5
    | GeoJSONMultiPoint5
    | GeoJSONMultiLineString5
    | GeoJSONMultiPolygon5
  )[];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONPoint5 {
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
export interface GeoJSONLineString5 {
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
export interface GeoJSONPolygon5 {
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
export interface GeoJSONMultiPoint5 {
  type: 'MultiPoint';
  coordinates: [number, number, ...number[]][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiLineString5 {
  type: 'MultiLineString';
  coordinates: [[number, number, ...number[]], [number, number, ...number[]], ...[number, number, ...number[]][]][];
  /**
   * @minItems 4
   */
  bbox?: [number, number, number, number, ...number[]];
  [k: string]: unknown | undefined;
}
export interface GeoJSONMultiPolygon5 {
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
