import type { SortConfig } from '../types/sort';
import { defineStore } from 'pinia';

export const useSortStore = defineStore('sort', () => {
  const sort = ref<SortConfig>({
    square: null,
    flat: null,
    price: null,
  });

  const toggleSquare = () => {
    resetOtherSorts('square');

    if (sort.value.square == null) {
      sort.value.square = 'asc';
    } else if (sort.value.square == 'asc') {
      sort.value.square = 'desc';
    } else {
      sort.value.square = null;
    }
  };

  const toggleFlat = () => {
    resetOtherSorts('flat');

    if (sort.value.flat == null) {
      sort.value.flat = 'asc';
    } else if (sort.value.flat == 'asc') {
      sort.value.flat = 'desc';
    } else {
      sort.value.flat = null;
    }
  };

  const togglePrice = () => {
    resetOtherSorts('price');

    if (sort.value.price == null) {
      sort.value.price = 'asc';
    } else if (sort.value.price == 'asc') {
      sort.value.price = 'desc';
    } else {
      sort.value.price = null;
    }
  };

  const resetOtherSorts = (activeSort: keyof SortConfig) => {
    Object.keys(sort.value).forEach((key) => {
      if (key !== activeSort) {
        sort.value[key as keyof SortConfig] = null;
      }
    });
  };

  return {
    sort,
    toggleSquare,
    toggleFlat,
    togglePrice,
  };
});
