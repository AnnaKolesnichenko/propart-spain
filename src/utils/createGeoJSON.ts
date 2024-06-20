import { FeatureCollection, GeoJsonProperties, Point } from 'geojson';

export const createGeoJSON = (dataMarker: any): FeatureCollection<Point, GeoJsonProperties> => {
  return {
    type: 'FeatureCollection',
    features: dataMarker.map((item: any) => ({
      type: 'Feature',
      properties: {
        id: item._id.$oid,
        photo: item.pictures[0],
        name: item.name,
        price: item.price_from
      },
      geometry: {
        type: 'Point',
        coordinates: [item.coordinates.lng, item.coordinates.lat]
      }
    }))
  };
};
