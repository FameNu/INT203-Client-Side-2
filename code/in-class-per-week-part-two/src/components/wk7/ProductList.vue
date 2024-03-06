<script setup>
import products from '../../../data/products.json';
import ListModal from './ListModal.vue';
</script>

<template>
  <ListModal :items="products" v-slot="{ item }">
    <div class="flex text-gray-800 divide-y divide-slate-100">
      <div class="w-1/12">{{ item.id }}</div>
      <div class="w-3/12">{{ item.name }}</div>
      <div class="w-5/12">{{ item.detail }}</div>
      <div class="w-2/12">{{ item.price }}</div>
      <div class="w-1/12">{{ item.instock }}</div>
    </div>
  </ListModal>
</template>

<style scoped></style>
