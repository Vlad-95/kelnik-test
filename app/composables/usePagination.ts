import type { Apartment } from '~~/types/apartment';

export const usePagination = (
  items: Ref<Apartment[]>,
  itemsPerPage: number = 5
) => {
  const currentPage = ref(1);

  const displayItems = computed(() => {
    const startIndex = 0;
    const endIndex = currentPage.value * itemsPerPage;
    return items.value.slice(startIndex, endIndex);
  });

  const hasMoreItems = computed(() => {
    return currentPage.value * itemsPerPage < items.value.length;
  });

  const loadMore = () => {
    if (hasMoreItems.value) {
      currentPage.value++;
    }
  };

  const resetPagination = () => {
    currentPage.value = 1;
  };

  return {
    displayItems,
    hasMoreItems,
    loadMore,
    resetPagination,
    currentPage,
  };
};
