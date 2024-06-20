import { create } from 'zustand';
import { persist, PersistOptions, createJSONStorage } from 'zustand/middleware';
export interface FilterState {
  mapCoordinates: [number, number];
  mapZoom: number;
  selectedName: string;
  searchParams: string;
  selectedRadio: string;
  selectedType: string[];
  selectedBeds: string[];
  selectedPrice: number[];
  selectedSize: number[];
  selectedArea: string[];
  polygonData: GeoJSON.Polygon | null;
  reset: boolean;
  setMapObject: (name: string, coordinates: [number, number], zoom: number) => void;
  setFilter: (field: keyof FilterState, value: any) => void;
  toggleReset: () => void;
  clearFilters: () => void;
  setPolygonData: (polygon: GeoJSON.Polygon | null) => void;
}

type FilterStateCreator = (
  set: (
    partial: Partial<FilterState> | ((state: FilterState) => Partial<FilterState>),
    replace?: boolean
  ) => void,
  get: () => FilterState,
  api: any
) => FilterState;

const createFilterState: FilterStateCreator = (set, get) => ({
  mapCoordinates: [-4.883333, 36.516666], //координати карти
  mapZoom: 11, //zoom карти
  selectedName: '', //за іменем для map
  searchParams: '', //поле пошуку
  selectedRadio: 'New Building', //radio
  selectedType: [], //apartment, villa ...
  selectedBeds: [], //stydio, 1,2,3
  selectedPrice: [], //ціна
  selectedSize: [], //розмір 
  selectedArea: [], //район
  polygonData: null, //дані полігону
  reset: false,
  setMapObject: (name: string, coordinates: [number, number], zoom: number) =>
    set(state => ({ ...state, selectedName: name, mapCoordinates: coordinates, mapZoom: zoom })),
  setFilter: (field, value) => set(state => ({ ...state, [field]: value })),
  setPolygonData: (polygon: GeoJSON.Polygon | null) => set(state => ({ ...state, polygonData: polygon })),
  toggleReset: () => set(state => ({ reset: !state.reset })),
  clearFilters: () =>
    set({
      mapCoordinates: [-4.883333, 36.516666], //координати карти
      mapZoom: 11, //zoom карти
      selectedName: '',
      searchParams: '', //поле пошуку
      selectedRadio: 'New Building',
      selectedType: [],
      selectedBeds: [],
      selectedPrice: [],
      selectedSize: [],
      selectedArea: [],
      polygonData: null, //дані полігону
    }),
});

const useFilterStore = create(
  persist<FilterState>(createFilterState, {
    name: 'filter-storage', //ім'я обєкта
    storage: createJSONStorage(() => sessionStorage), 
 
  } as PersistOptions<FilterState>)
);

export default useFilterStore;
