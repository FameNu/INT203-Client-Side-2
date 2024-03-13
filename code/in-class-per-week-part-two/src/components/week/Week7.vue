<script setup>
import { ref } from 'vue';
import TodoList from '../wk7/TodoList.vue'
import ProductList from '../wk7/ProductList.vue'
import TodoManager from '../wk8/TodoManager.vue'
const count = ref(3)
const multiple = ref(1)
</script>
 
<template>
<h1 class="text-4xl mb-4">Week 7</h1>
<!-- <p>Number of Card: <input type="number" class="input input-bordered" v-model="count"></p>
<p>multiple <input type="number" class="input input-bordered" v-model="multiple"></p> -->
<!-- <TodoList :counter="count * multiple" /> -->
<TodoList />
<!-- <TodoList /> -->
<!-- <ProductList></ProductList> -->
</template>
 
<style scoped>

</style>