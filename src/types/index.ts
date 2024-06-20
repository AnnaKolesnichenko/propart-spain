//Map------------------------
import { Marker } from 'mapbox-gl';
export interface UserDataMarker {
  content: string;
  lng: number;
  lat: number;
}

export interface MarkerElement {
  id: number;
  element: Marker;
}

//-------------------
//data
export interface ProjectDataType {
  _id: { $oid: string };
  name: string;
  completion: string;
  size: number;
  hidden: boolean;
  price_from: number;
  size_m2: number;
  location: string;
  short_description: {
    total_floors: number;
    type: string;
    rooms: number;
  };
  pictures: string[];
  coordinates: {
    lng: string;
    lat: string;
  };
  area: string;
  about: Record<string, { title: string; description: string }>;
  floorPlans: Record<string, any>;
  _class: string;
}





//-------------------

export interface SelectedSwiperCardTypes {
  id: number;
  name: string;
  area: string;
  price: string;
  bed: string;
  value: string;
  floors: string;
  src: string;
}


export interface FilterProjectNameType {
  id: string;
  name: string;
  coordinates: [number, number];
}
