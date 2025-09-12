import type { Apartment } from '~~/types/apartment';

export const useData = () => {
  const apartments = ref<Apartment[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchData = async () => {
    try {
      loading.value = true;
      error.value = null;

      const response = await $fetch<any>('/json/data.json');

      apartments.value = response.flats || [];
    } catch (err) {
      error.value = 'Ошибка при загрузке данных';
      console.error('Error fetching data:', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    apartments,
    loading,
    error,
    fetchData,
  };
};
