<script setup>
import { onBeforeMount, onMounted, onUnmounted, onUpdated, ref } from 'vue';
import ElementFooter from './ElementFooter.vue';

onBeforeMount(() => {
  console.log('Footer.vue, Before Mount');
});
onMounted(() => {
  console.log('Footer.vue, Mounted');
});
onUpdated(() => {
  console.log('Footer.vue, on update')
})
onUnmounted(() => {
    console.log('Footer.vue, un mounted');
})

const value = ref(0);
</script>

<template>
  <div class="bg-green-200">
    <h1>This is Footer Component</h1>
    <div>
      <span>range bar: </span>
      <input type="range" v-model="value" />
      {{ value }}
    </div>
  </div>
  <div class="w-full flex gap-12 justify-around bg-blue-200 p-4">
    <ElementFooter>
        <template #header>
            <h1>Contact</h1>
        </template>
        <template #default>
            <p>IG: <span class="text-blue-400">GoGo</span></p>
            <p>FaceBook: <span class="text-green-400">Face Cook</span></p>
        </template>
    </ElementFooter>
    <ElementFooter>
        <template #header>
            <h1>Info</h1>
        </template>
        <template #default>
            <p>Age: <span class="text-blue-400">89</span></p>
            <p>height: <span class="text-red-500">170</span></p>
            <p>weigth: <span class="text-red-500">70</span></p>
        </template>
    </ElementFooter>
  </div>
</template>

<style scoped></style>
