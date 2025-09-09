<template>
  <div class="item">
    <div class="item__image">
      <img src="/images/apartment-image1.png" alt="" />
    </div>
    <div class="item__caption">3-комнатная №104</div>
    <div class="item__square">63,1</div>
    <div class="item__flat"><span>1</span> из 17</div>
    <div class="item__price">6 630 500</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.item {
  .row-align-start-mixin();
  gap: 20px;
  border-top: 1px solid fade(@blue1, 10%);

  &__image {
    .row-align-center-mixin();
    .row-justify-center-mixin();
    width: 80px;
    min-width: 80px;
    height: 80px;

    img {
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
    }
  }

  &__caption,
  &__square,
  &__flat,
  &__price {
    line-height: 1.5;
  }

  &__flat {
    color: fade(@blue1, 50%);

    span {
      color: @blue1;
      // opacity: 1;
    }
  }
}
</style>
