import type { Apartment } from '~~/types/apartment';
import { useFilterStore } from '~~/stores/useFilterStore';

export const useApartmentsFilter = (apartments: Ref<Apartment[]>) => {
  const filterStore = useFilterStore();
  const { sort, filters } = storeToRefs(filterStore);

  const filteredAndSortedApartments = computed(() => {
    if (!apartments.value.length) return [];

    let filtered = [...apartments.value].filter((item) => {
      if (
        filters.value.rooms.length > 0 &&
        !filters.value.rooms.includes(item.rooms)
      ) {
        return false;
      }

      if (filters.value.price.length === 2) {
        if (
          item.price < filters.value.price[0] ||
          item.price > filters.value.price[1]
        ) {
          return false;
        }
      }

      if (filters.value.square.length === 2) {
        if (
          item.square < filters.value.square[0] ||
          item.square > filters.value.square[1]
        ) {
          return false;
        }
      }

      return true;
    });

    if (!sort.value.square && !sort.value.flat && !sort.value.price) {
      return filtered;
    }

    return filtered.sort((a, b) => {
      if (sort.value.square) {
        const diff = a.square - b.square;
        if (diff !== 0) {
          return sort.value.square === 'asc' ? diff : -diff;
        }
      }

      if (sort.value.flat) {
        const diff = a.flat - b.flat;
        if (diff !== 0) {
          return sort.value.flat === 'asc' ? diff : -diff;
        }
      }

      if (sort.value.price) {
        const diff = a.price - b.price;
        if (diff !== 0) {
          return sort.value.price === 'asc' ? diff : -diff;
        }
      }

      return 0;
    });
  });

  return {
    filteredAndSortedApartments,
  };
};
