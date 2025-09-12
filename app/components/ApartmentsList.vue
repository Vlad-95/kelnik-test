<template>
  <div class="apartments-list" v-if="apartments">
    <ApartmentsListItem
      v-for="item in apartments"
      :itemData="item"
      :key="item.id"
    />
  </div>
</template>

<script lang="ts" setup>
import type { Apartment } from '~~/types/apartment';

const props = defineProps<{ apartments: Apartment[] }>();
</script>

<style></style>
