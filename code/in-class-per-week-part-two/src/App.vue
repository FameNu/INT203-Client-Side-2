<script setup>
import { onBeforeMount, onMounted, onUpdated, ref } from 'vue';
import Footers from './components/Footer.vue';

onBeforeMount(() => {
  console.log('Before Mount');
});
onMounted(() => {
  console.log('Mounted');
});
onUpdated(() => {
  console.log('App.vue, on update')
})

console.log('App.vue');
const hasFotter = ref(true);
const yourName = ref('')
</script>

<template>
  <div>
    <h1 class="text-green-400">Vue 3 App</h1>
    <div>
      <span>Footer</span>
      <input type="checkbox" v-model="hasFotter"> {{ hasFotter }}
    </div>
    <div>
      <span>Your Name: </span>
      <input type="text" class="input input-bordered" v-model="yourName"> {{ yourName }}
    </div>
    <Footers />
  </div>
</template>

<style scoped></style>
