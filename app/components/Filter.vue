<template>
  <form action="" class="filter">
    <div class="filter__checkboxes">
      <FilterCheckbox :label="'1к'" />
      <FilterCheckbox :label="'2к'" />
      <FilterCheckbox :label="'3к'" />
      <FilterCheckbox :label="'4к'" />
    </div>

    <div class="filter__ranges">
      <FilterRange :values="apartmentPrice" caption="Стоимость квартиры, ₽" />
      <FilterRange :values="apartmentSquare" caption="Площадь квартиры, м2" />
    </div>

    <div class="filter__reset">
      <button type="button">Сбросить параметры</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import FilterCheckbox from './FilterCheckbox.vue';
import FilterRange from './FilterRange.vue';

const apartmentPrice = ref([0, 100]);
const apartmentSquare = ref([0, 100]);
</script>

<style lang="less">
.filter {
  padding: 40px;
  padding-bottom: 45px;
  border-radius: 10px;
  background-color: @green2;

  &__checkboxes {
    .row-align-start-mixin();
    flex-wrap: wrap;
    gap: 10px 16px;
    margin-bottom: 25px;
  }

  &__ranges {
    .column-align-start-mixin();
    gap: 30px;
  }

  &__reset {
    margin-top: 35px;
    padding-left: 15px;

    button {
      background-color: transparent;
      border: none;
      font-size: 0.875rem;
      line-height: 1.428;
      padding: 0;
      color: @blue1;
      cursor: pointer;
      position: relative;
      padding-right: 15px;

      &:before {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background-image: url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.99996 5.22223L1.37727 7.84492C1.12213 8.10007 0.641687 8.0333 0.304183 7.6958C-0.0333213 7.35829 -0.100086 6.87786 0.15506 6.62271L2.77775 4.00002L0.155017 1.37729C-0.100129 1.12214 -0.0333644 0.641701 0.30414 0.304197C0.641644 -0.0333071 1.12208 -0.100072 1.37723 0.155074L3.99996 2.77781L6.62282 0.154956C6.87796 -0.10019 7.3584 -0.0334256 7.6959 0.304079C8.03341 0.641583 8.10017 1.12202 7.84503 1.37717L5.22217 4.00002L7.84498 6.62283C8.10013 6.87797 8.03336 7.35841 7.69586 7.69592C7.35836 8.03342 6.87792 8.10019 6.62277 7.84504L3.99996 5.22223Z' fill='%23FF0000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.99996 5.22223L1.37727 7.84492C1.12213 8.10007 0.641687 8.0333 0.304183 7.6958C-0.0333213 7.35829 -0.100086 6.87786 0.15506 6.62271L2.77775 4.00002L0.155017 1.37729C-0.100129 1.12214 -0.0333644 0.641701 0.30414 0.304197C0.641644 -0.0333071 1.12208 -0.100072 1.37723 0.155074L3.99996 2.77781L6.62282 0.154956C6.87796 -0.10019 7.3584 -0.0334256 7.6959 0.304079C8.03341 0.641583 8.10017 1.12202 7.84503 1.37717L5.22217 4.00002L7.84498 6.62283C8.10013 6.87797 8.03336 7.35841 7.69586 7.69592C7.35836 8.03342 6.87792 8.10019 6.62277 7.84504L3.99996 5.22223Z' fill='%230B1739'/%3E%3C/svg%3E%0A");
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .filter {
    padding: 20px;
  }
}

@media screen and (max-width: 960px) {
  .filter {
    margin-bottom: 40px;
  }
}
</style>
