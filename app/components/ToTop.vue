<template>
  <button
    ref="toTop"
    type="button"
    class="to-top"
    @click="scrollToTop"
  ></button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const toTop = ref<HTMLElement | null>(null);

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (!toTop.value) return;

    if (window.scrollY > 100) {
      toTop.value.classList.add('active');
    } else {
      toTop.value.classList.remove('active');
    }
  });
});
</script>

<style lang="less">
.to-top {
  position: fixed;
  right: 32px;
  bottom: 32px;
  width: 40px;
  height: 40px;
  background-color: @green2;
  background-size: 10px 15px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='15' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 14.0032L5 2.00317M5 2.00317L9.00063 6.00317M5 2.00317L0.999365 6.00317' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  border-radius: 100px;
  padding: 0;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0;

  &:hover {
    background-color: @green1;
  }

  &.active {
    opacity: 1;
  }
}
</style>
