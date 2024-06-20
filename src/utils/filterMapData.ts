interface FilterMapParamsType {
    selectedType: string[];
    selectedBeds: string[];
    selectedPrice: number[];
    selectedSize: number[];
    selectedArea: string[];
  }
  
  export const filterMapData = (data: any, filters: FilterMapParamsType) => {
    return data.filter((item: any) => {
      const { selectedType, selectedBeds, selectedPrice, selectedSize, selectedArea } = filters;
  
      // Фільтрація за типом
      if (selectedType.length > 0 && !selectedType.includes(item.short_description.type)) {
        return false;
      }
  
      // Фільтрація за кількістю кімнат
      if (
        selectedBeds.length > 0 &&
        item.short_description.rooms !== undefined &&
        !selectedBeds.includes(item.short_description.rooms.toString())
      ) {
        return false;
      }
  
      // Фільтрація за ціною
      if (selectedPrice.length > 0) {
        const [minPrice, maxPrice] = selectedPrice;
        if (item.price_from < minPrice || item.price_from > maxPrice) {
          return false;
        }
      }
  
      // Фільтрація за розміром
      if (selectedSize.length > 0) {
        const [minSize, maxSize] = selectedSize;
        if (item.size_m2 < minSize || item.size_m2 > maxSize) {
          return false;
        }
      }
  
      // Фільтрація за областю
      if (selectedArea.length > 0 && !selectedArea.includes(item.area)) {
        return false;
      }
  
      // Якщо жодна з умов не відхилена, повертаємо true
      return true;
    });
  };
  

/*interface FilterParams {
  selectedType: string[];
  selectedBeds: string[];
  selectedPrice: number[];
  selectedSize: number[];
  selectedArea: string[];
}

export const filterMapData = (
  data: any[],
  { selectedType, selectedBeds, selectedPrice, selectedSize, selectedArea }: FilterParams
): any[] => {
  return data.filter(item => {
    if (selectedType.length > 0 && !selectedType.includes(item.type)) return false;
    if (selectedBeds.length > 0 && !selectedBeds.includes(item.beds)) return false;
    if (
      selectedPrice.length > 0 &&
      (item.price < selectedPrice[0] || item.price > selectedPrice[1])
    )
      return false;
    if (selectedSize.length > 0 && (item.size < selectedSize[0] || item.size > selectedSize[1]))
      return false;
    if (selectedArea.length > 0 && !selectedArea.includes(item.area)) return false;
    return true;
  });
};
*/
/*
interface FilterParams {
    selectedType: string[];
    selectedBeds: number[]; // Assuming beds is a number
    selectedPrice: number[];
    selectedSize: number[];
    selectedArea: string[];
  }
  
  export const filterMapData = (
    data: any[],
    { selectedType, selectedBeds, selectedPrice, selectedSize, selectedArea }: FilterParams
  ): any[] => {
    return data.filter(item => {
      // Check if any of the floor plans match the filters
      const floorPlans = Object.values(item.floorPlans || {}).flatMap((plan: any) => plan.plans);
      const matches = floorPlans.some((plan: any) => {
        if (selectedType.length > 0 && !selectedType.includes(plan.description.type)) return false;
        if (selectedBeds.length > 0 && !selectedBeds.includes(plan.description.rooms)) return false;
        if (selectedPrice.length > 0 && (plan.price_from < selectedPrice[0] || plan.price_from > selectedPrice[1])) return false;
        if (selectedSize.length > 0 && (plan.description.area < selectedSize[0] || plan.description.area > selectedSize[1])) return false;
        return true;
      });
  
      // Additional top-level filters if needed
      if (selectedArea.length > 0 && !selectedArea.includes(item.area)) return false;
  
      return matches;
    });
  };
  */
/*
interface FilterParams {
  selectedType: string[];
  selectedBeds: string[];
  selectedPrice: number[];
  selectedSize: number[];
  selectedArea: string[];
}

export const filterMapData = (
  data: any[],
  { selectedType, selectedBeds, selectedPrice, selectedSize, selectedArea }: FilterParams
): any[] => {
  return data.filter(item => {
    if (selectedType.length > 0 && !selectedType.includes(item.type)) return false;
    if (selectedBeds.length > 0 && !selectedBeds.includes(item.beds)) return false;
    if (
      selectedPrice.length > 0 &&
      (item.price < selectedPrice[0] || item.price > selectedPrice[1])
    )
      return false;
    if (selectedSize.length > 0 && (item.size < selectedSize[0] || item.size > selectedSize[1]))
      return false;
    if (selectedArea.length > 0 && !selectedArea.includes(item.area)) return false;
    return true;
  });
};
*/
/*
import { FilterState } from "@/store/filterStore";

export const filterMapData = (data: any[], filters: FilterState): any[] => {
    return data.filter(item => {
      if (filters.selectedType.length > 0 && !filters.selectedType.includes(item.type)) return false;
      if (filters.selectedBeds.length > 0 && !filters.selectedBeds.includes(item.beds)) return false;
      if (filters.selectedPrice.length > 0 && (item.price < filters.selectedPrice[0] || item.price > filters.selectedPrice[1])) return false;
      if (filters.selectedSize.length > 0 && (item.size < filters.selectedSize[0] || item.size > filters.selectedSize[1])) return false;
      if (filters.selectedArea.length > 0 && !filters.selectedArea.includes(item.area)) return false;
      return true;
    });
  };
  */
