<template>
  <div class="apartments" v-if="apartments && apartments.length">
    <div class="apartments__wrap">
      <h1 class="page-title">Квартиры</h1>
      <div class="apartments__content">
        <Sort />
        <ApartmentsList :apartments="sortApartments" />
        <Pagination />
      </div>

      <aside class="apartments__side">
        <Filter :apartments="apartments" />
      </aside>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSortStore } from '~~/stores/useSortStore';
const { apartments, loading, error, fetchData } = useData();
const { sortApartments } = useApartmentsSort(apartments);

// Store
const sortStore = useSortStore();

onMounted(() => {
  fetchData();
});
</script>

<style lang="less">
.apartments {
  padding: 96px 0;

  &__wrap {
    display: grid;
    grid-template-columns: 1fr 399px;
    grid-template-rows: auto 1fr;
    gap: 0 80px;
    grid-template-areas: 'title side' 'content side';
    align-items: start;
  }

  .page-title {
    grid-area: title;
  }

  &__content {
    grid-area: content;
  }

  &__side {
    grid-area: side;
  }
}

@media screen and (max-width: 1440px) {
  .apartments {
    padding: 48px 0;

    &__wrap {
      gap: 0 28px;
      grid-template-columns: 1fr 318px;
    }
  }
}

@media screen and (max-width: 960px) {
  .apartments {
    &__wrap {
      grid-template-columns: 1fr;
      grid-template-areas: 'title' 'side' 'content';
    }
  }
}
</style>
