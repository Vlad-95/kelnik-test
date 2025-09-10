<template>
  <label class="filter-checkbox">
    <input type="checkbox" v-model="value" />
    <p>{{ label }}</p>
  </label>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref(false);

const props = defineProps({
  label: String,
});
</script>

<style lang="less">
.filter-checkbox {
  position: relative;

  input {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;

    &:checked {
      & + p {
        background-color: @green1;
        box-shadow: 0px 6px 20px #95d0a1;
      }
    }

    &:hover:not(:checked) {
      & + p {
        color: fade(@blue1, 20%);
      }
    }
  }

  p {
    display: block;
    width: 44px;
    height: 44px;
    border-radius: 100px;
    text-align: center;
    line-height: 44px;
    background-color: @white;
    cursor: pointer;
    margin: 0;
    transition: 0.3s;
  }
}
</style>
