<script setup>
defineProps({
  items: {
    type: Array,
    require: true,
  },
});
</script>

<template>
  <div>
    <div class="text-2xl font-bold tracking-wide">
      <slot name="header"></slot>
    </div>
    <div class="flex flex-wrap gap-4">
      <slot
        v-for="(item, index) in items"
        :item="item"
        :index="index"
        :key="index"
      >
      </slot>
    </div>
  </div>
</template>

<style scoped></style>
