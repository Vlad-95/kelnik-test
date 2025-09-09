<template>
  <form action="" class="filter">
    <div class="filter__checkboxes">
      <label class="filter__checkbox-item">
        <input type="checkbox" />
        <p>1к</p>
      </label>

      <label class="filter__checkbox-item">
        <input type="checkbox" />
        <p>2к</p>
      </label>

      <label class="filter__checkbox-item">
        <input type="checkbox" />
        <p>3к</p>
      </label>

      <label class="filter__checkbox-item">
        <input type="checkbox" />
        <p>4к</p>
      </label>
    </div>
  </form>
</template>

<script lang="ts" setup></script>

<style>
.filter {
  padding: 40px;
  border-radius: 10px;
  background: linear-gradient(
    135deg,
    rgba(174, 228, 178, 0.3) 0%,
    rgba(149, 208, 161, 0.3) 100%
  );
}
</style>
