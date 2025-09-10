<template>
  <div class="filter-range">
    <div class="filter-range__caption">{{ caption }}</div>
    <div class="filter-range__values">
      <div>
        от <span>{{ value[0] }}</span>
      </div>
      <div>
        до <span>{{ value[1] }}</span>
      </div>
    </div>

    <Slider v-model="value" :tooltips="false" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Slider from '@vueform/slider';

const props = defineProps({
  values: {
    type: Array,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
});

const value = ref(props.values);
</script>

<style lang="less">
:root {
  --slider-bg: fade(@blue1, 10%);
  --slider-height: 3px;
  --slider-handle-bg: @green1;
  --slider-connect-bg: @green1;
  --slider-handle-height: 14px;
  --slider-handle-width: 14px;
  --slider-handle-shadow: none;
}

.filter-range {
  width: 100%;

  &__caption {
    font-size: 0.875rem;
    line-height: 1.428;
    margin-bottom: 10px;
  }

  &__values {
    .row-align-center-mixin();
    gap: 10px;
    margin-bottom: 13px;

    div {
      width: 50%;
      font-size: 1rem;
      color: fade(@blue1, 50%);

      span {
        color: @blue1;
        font-weight: 500;
      }
    }
  }
}
</style>
