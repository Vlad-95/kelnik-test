import type { Apartment } from '~~/types/apartment';

export const useData = () => {
  const apartments = ref<Apartment[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchData = async () => {
    try {
      loading.value = true;
      error.value = null;

      const { data } = await useFetch<any>('/json/data.json');
      apartments.value = data.value.apartments || [];
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
