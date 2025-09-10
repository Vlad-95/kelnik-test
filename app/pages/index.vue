<template>
  <div class="apartments">
    <div class="apartments__wrap">
      <h1 class="page-title">Квартиры</h1>
      <div class="apartments__content">
        <Sort />
        <ApartmentsList />
        <Pagination />
      </div>

      <aside class="apartments__side">
        <Filter />
      </aside>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.apartments {
  padding: 96px 0;

  &__wrap {
    display: grid;
    grid-template-columns: 1fr 399px;
    gap: 0 80px;
    grid-template-areas: 'title side' 'content side';
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
