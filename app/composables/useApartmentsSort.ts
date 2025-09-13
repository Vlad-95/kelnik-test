import type { Apartment } from '~~/types/apartment';
import { useSortStore } from '~~/stores/useSortStore';

export const useApartmentsSort = (apartments: Ref<Apartment[]>) => {
  const sortStore = useSortStore();
  const { sort } = storeToRefs(sortStore);

  const sortApartments = computed(() => {
    if (!apartments.value.length) return [];

    const apartmentsArray = [...apartments.value];

    if (!sort.value.square && !sort.value.flat && !sort.value.price) {
      return apartmentsArray;
    }

    return apartmentsArray.sort((a, b) => {
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
    sort,
    sortApartments,
  };
};
