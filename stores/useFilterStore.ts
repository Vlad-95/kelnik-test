import type { SortConfig, FilterConfig } from '../types/filter';
import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filter', () => {
  const sort = ref<SortConfig>({
    square: null,
    flat: null,
    price: null,
  });

  const filters = ref<FilterConfig>({
    rooms: [],
    price: [],
    square: [],
  });

  // Сортировка
  const toggleSquareSort = () => {
    resetOtherSorts('square');

    if (sort.value.square == null) {
      sort.value.square = 'asc';
    } else if (sort.value.square == 'asc') {
      sort.value.square = 'desc';
    } else {
      sort.value.square = null;
    }
  };

  const toggleFlatSort = () => {
    resetOtherSorts('flat');

    if (sort.value.flat == null) {
      sort.value.flat = 'asc';
    } else if (sort.value.flat == 'asc') {
      sort.value.flat = 'desc';
    } else {
      sort.value.flat = null;
    }
  };

  const togglePriceSort = () => {
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

  // Фильтрация
  const toggleRoomsFilter = (item: number) => {
    const index = filters.value.rooms.indexOf(item);
    if (index === -1) {
      filters.value.rooms.push(item);
    } else {
      filters.value.rooms.splice(index, 1);
    }
  };

  const togglePriceFilter = (item: [number, number]) => {
    filters.value.price = item;
  };

  const toggleSquareFilter = (item: [number, number]) => {
    filters.value.square = item;
  };

  const resetFilters = () => {
    filters.value.rooms = [];
    filters.value.price = [];
    filters.value.square = [];
  };

  return {
    sort,
    filters,
    toggleSquareSort,
    toggleFlatSort,
    togglePriceSort,
    toggleRoomsFilter,
    togglePriceFilter,
    toggleSquareFilter,
    resetFilters,
  };
});
