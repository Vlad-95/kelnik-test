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
  display: grid;
  grid-template-columns: 80px 2.3fr 1fr 1fr 1fr;
  gap: 20px;
  border-top: 1px solid fade(@blue1, 10%);
  padding: 17px 0 23px;

  &__image {
    .row-align-center-mixin();
    .row-justify-center-mixin();
    // width: 80px;
    // min-width: 80px;
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

  &:last-child {
    border-bottom: 1px solid fade(@blue1, 10%);
  }
}

@media screen and (max-width: 1440px) {
  .item {
    gap: 10px;
    grid-template-columns: auto auto 1fr 80px;
    grid-template-areas: 'caption caption caption image' 'square flat price image';
    border: 1px solid fade(@blue1, 10%);
    border-radius: 8px;
    padding: 16px 24px;

    &__image {
      grid-area: image;
    }

    &__caption {
      grid-area: caption;
    }

    &__square {
      grid-area: square;

      &:after {
        content: 'м2';
        margin-left: 4px;
      }
    }

    &__flat {
      grid-area: flat;

      &:after {
        content: 'этаж';
        margin-left: 4px;
      }
    }

    &__price {
      grid-area: price;

      &:after {
        content: '₽';
        margin-left: 4px;
      }
    }

    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
}

@media screen and (max-width: 576px) {
  .item {
    grid-template-columns: 1fr 80px;
    grid-template-areas: 'caption image' 'square image' 'flat image' 'price image';
  }
}
</style>
