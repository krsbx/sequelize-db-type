export type GeoJsons = {
  Point: {
    type: 'Point';
    coordinates: [number, number];
  };
  LineString: {
    type: 'LineString';
    coordinates: [number, number][];
  };
  Polygon: {
    type: 'Polygon';
    coordinates: [number, number][][];
  };
  MultiPoint: {
    type: 'MultiPoint';
    coordinates: [number, number][];
  };
  MultiLineString: {
    type: 'MultiLineString';
    coordinates: [number, number][][];
  };
  MultiPolygon: {
    type: 'MultiPolygon';
    coordinates: [number, number][][][];
  };
  GeometryCollection: {
    type: 'GeometryCollection';
    geometries: GeoJsons[keyof GeoJsons][];
  };
};

export type GeoJson =
  | GeoJsons['Point']
  | GeoJsons['LineString']
  | GeoJsons['Polygon']
  | GeoJsons['MultiPoint']
  | GeoJsons['MultiLineString']
  | GeoJsons['MultiPolygon']
  | GeoJsons['GeometryCollection'];
