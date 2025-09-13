<template>
  <button type="button" class="load-more" @click="$emit('loadMore')">
    Загрузить еще
  </button>
</template>

<script lang="ts" setup></script>

<style lang="less">
.load-more {
  background-color: transparent;
  border: 1px solid fade(@blue1, 10%);
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  padding: 8px 24px;
  margin-top: 46px;
  color: @blue1;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: fade(@blue1, 10%);
  }
}
</style>
