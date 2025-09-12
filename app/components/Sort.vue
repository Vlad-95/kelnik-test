<template>
  <div class="sort">
    <div class="sort__image">Планировка</div>
    <div class="sort__caption">Квартира</div>
    <div class="sort__square" :class="squareSort" @click="toggleSquareSort">
      S, м<sup>2</sup>
      <div class="sort__toggle">
        <span class="sort__toggle-up"></span>
        <span class="sort__toggle-down"></span>
      </div>
    </div>
    <div class="sort__flat" :class="flatSort" @click="toggleFlatSort">
      Этаж
      <div class="sort__toggle">
        <span class="sort__toggle-up"></span>
        <span class="sort__toggle-down"></span>
      </div>
    </div>
    <div class="sort__price" :class="priceSort" @click="togglePriceSort">
      Цена, ₽
      <div class="sort__toggle">
        <span class="sort__toggle-up"></span>
        <span class="sort__toggle-down"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Refs
type SortDirection = 'asc' | 'desc' | null;

const squareSort: Ref<SortDirection> = ref(null);
const flatSort: Ref<SortDirection> = ref(null);
const priceSort: Ref<SortDirection> = ref(null);

// Methods
const toggleSquareSort = (): void => {
  if (squareSort.value == null) {
    squareSort.value = 'asc';
  } else if (squareSort.value == 'asc') {
    squareSort.value = 'desc';
  } else {
    squareSort.value = null;
  }
};

const toggleFlatSort = (): void => {
  if (flatSort.value == null) {
    flatSort.value = 'asc';
  } else if (flatSort.value == 'asc') {
    flatSort.value = 'desc';
  } else {
    flatSort.value = null;
  }
};

const togglePriceSort = (): void => {
  if (priceSort.value == null) {
    priceSort.value = 'asc';
  } else if (priceSort.value == 'asc') {
    priceSort.value = 'desc';
  } else {
    priceSort.value = null;
  }
};
</script>

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

  &__square,
  &__flat,
  &__price {
    .row-align-center-mixin();
    cursor: pointer;
    transition: 0.3s;

    &.asc {
      color: @green1;

      .sort__toggle-up {
        background-image: url("data:image/svg+xml,%3Csvg width='7' height='4' viewBox='0 0 7 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='1'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.82332 3.7465C2.98558 3.91016 3.19984 4 3.42953 4C3.65864 4 3.87404 3.91016 4.03517 3.7465L6.69026 0.987232C6.91366 0.761203 6.91366 0.395551 6.69026 0.169522C6.46743 -0.0565073 6.10577 -0.0565073 5.88236 0.169522L3.42953 2.72451L0.976121 0.169522C0.75272 -0.0565073 0.391623 -0.0565073 0.168222 0.169522C-0.0551788 0.395551 -0.0551788 0.761203 0.168222 0.987232L2.82332 3.7465Z' fill='%233eb57c'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.82332 3.7465C2.98558 3.91016 3.19984 4 3.42953 4C3.65864 4 3.87404 3.91016 4.03517 3.7465L6.69026 0.987232C6.91366 0.761203 6.91366 0.395551 6.69026 0.169522C6.46743 -0.0565073 6.10577 -0.0565073 5.88236 0.169522L3.42953 2.72451L0.976121 0.169522C0.75272 -0.0565073 0.391623 -0.0565073 0.168222 0.169522C-0.0551788 0.395551 -0.0551788 0.761203 0.168222 0.987232L2.82332 3.7465Z' fill='%233eb57c'/%3E%3C/g%3E%3C/svg%3E%0A");
      }
    }

    &.desc {
      color: @green1;

      .sort__toggle-down {
        background-image: url("data:image/svg+xml,%3Csvg width='7' height='4' viewBox='0 0 7 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='1'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.82332 3.7465C2.98558 3.91016 3.19984 4 3.42953 4C3.65864 4 3.87404 3.91016 4.03517 3.7465L6.69026 0.987232C6.91366 0.761203 6.91366 0.395551 6.69026 0.169522C6.46743 -0.0565073 6.10577 -0.0565073 5.88236 0.169522L3.42953 2.72451L0.976121 0.169522C0.75272 -0.0565073 0.391623 -0.0565073 0.168222 0.169522C-0.0551788 0.395551 -0.0551788 0.761203 0.168222 0.987232L2.82332 3.7465Z' fill='%233eb57c'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.82332 3.7465C2.98558 3.91016 3.19984 4 3.42953 4C3.65864 4 3.87404 3.91016 4.03517 3.7465L6.69026 0.987232C6.91366 0.761203 6.91366 0.395551 6.69026 0.169522C6.46743 -0.0565073 6.10577 -0.0565073 5.88236 0.169522L3.42953 2.72451L0.976121 0.169522C0.75272 -0.0565073 0.391623 -0.0565073 0.168222 0.169522C-0.0551788 0.395551 -0.0551788 0.761203 0.168222 0.987232L2.82332 3.7465Z' fill='%233eb57c'/%3E%3C/g%3E%3C/svg%3E%0A");
      }
    }
  }

  &__toggle {
    .column-align-center-mixin();
    gap: 2px;
    margin-left: 8px;

    &-up,
    &-down {
      width: 7px;
      height: 4px;
      background-image: url("data:image/svg+xml,%3Csvg width='7' height='4' viewBox='0 0 7 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.4'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.82332 3.7465C2.98558 3.91016 3.19984 4 3.42953 4C3.65864 4 3.87404 3.91016 4.03517 3.7465L6.69026 0.987232C6.91366 0.761203 6.91366 0.395551 6.69026 0.169522C6.46743 -0.0565073 6.10577 -0.0565073 5.88236 0.169522L3.42953 2.72451L0.976121 0.169522C0.75272 -0.0565073 0.391623 -0.0565073 0.168222 0.169522C-0.0551788 0.395551 -0.0551788 0.761203 0.168222 0.987232L2.82332 3.7465Z' fill='%23FF0000'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.82332 3.7465C2.98558 3.91016 3.19984 4 3.42953 4C3.65864 4 3.87404 3.91016 4.03517 3.7465L6.69026 0.987232C6.91366 0.761203 6.91366 0.395551 6.69026 0.169522C6.46743 -0.0565073 6.10577 -0.0565073 5.88236 0.169522L3.42953 2.72451L0.976121 0.169522C0.75272 -0.0565073 0.391623 -0.0565073 0.168222 0.169522C-0.0551788 0.395551 -0.0551788 0.761203 0.168222 0.987232L2.82332 3.7465Z' fill='%230B1739'/%3E%3C/g%3E%3C/svg%3E%0A");
      transition: 0.3s;
    }

    &-up {
      transform: rotate(180deg);
    }
  }
}

@media screen and (max-width: 1440px) {
  .sort {
    .row-align-center-mixin();
    &__image,
    &__caption {
      display: none;
    }

    &__square,
    &__flat,
    &__price {
      font-size: 1rem;
    }
  }
}
</style>
