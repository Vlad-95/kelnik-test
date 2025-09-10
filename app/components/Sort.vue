<template>
  <div class="sort">
    <div class="sort__image">Планировка</div>
    <div class="sort__caption">Квартира</div>
    <div class="sort__square">S, м<sup>2</sup></div>
    <div class="sort__flat">Этаж</div>
    <div class="sort__price">Цена, ₽</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.sort {
  display: grid;
  grid-template-columns: 80px 2.3fr 1fr 1fr 1fr;
  gap: 20px;
  padding-bottom: 11px;

  &__image,
  &__caption,
  &__square,
  &__flat,
  &__price {
    font-size: 0.875rem;
    line-height: 1.428;
  }
}

@media screen and (max-width: 1200px) {
  .sort {
    gap: 10px;
  }
}
</style>
