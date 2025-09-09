<template>
  <div class="apartments">
    <div class="apartments__wrap">
      <div class="apartments__content">
        <h1 class="page-title">Квартиры</h1>
        <Sort />
        <ApartmentsList />
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
    gap: 80px;
  }
}
</style>
