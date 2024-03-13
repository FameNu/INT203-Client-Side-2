<script setup>
import TodoList from '../wk7/TodoList.vue';
import AddEditTodo from '../wk8/AddEditTodo.vue';
import todos from '../../../data/todos.json';
import { ref, reactive } from 'vue';
const addPage = ref(false);
const modelEditTodo = ref({
  id: undefined,
  category: '',
  description: '',
});
const handlerAddPage = (status) => {
  addPage.value = status;
};
const openModalToEdit = (todo) => {
  // console.log(todo)
  modelEditTodo.value = todo;
  addPage.value = true
}
const clearModal = (flag) => {
  addPage.value = flag
}
</script>

<template>
  <div class="w-full">
    <div>
      <div class="flex justify-end">
        <button
          @click="handlerAddPage(true)"
          class="px-2 py-0.5 text-green-600 rounded-lg hover:text-green-500"
        >
          Add new Todo
        </button> 
      </div>
      <TodoList :todos="todos" @editMode="openModalToEdit" />
    </div>
    <Teleport v-if="addPage" to="#addEditModal">
      <div
        class="absolute left-0 right-0 top-1/3 m-auto bg-slate-50 flex items-center justify-center p-4 w-1/2 shadow-md rounded-lg"
      >
        <!-- <button 
            @click="handlerAddPage(false)" 
            class="text-red-500 btn"
        >
          Close
        </button> -->
        <AddEditTodo @closeModal="clearModal" :todo="modelEditTodo" />
      </div>
    </Teleport>
    <!-- <Teleport v-if="editPage" to="#addEditModal">
      <div
        class="absolute left-0 right-0 top-1/3 m-auto bg-slate-50 flex flex-col items-start p-4 h-48 w-72 shadow-md rounded-lg"
      >
        <h1 class="text-4xl">Edit Page</h1>
        Category: <input type="text" v-model="modelEdit.category" class="input input-bordered" />
        Description: <input type="text" v-model="modelEdit.description" class="input input-bordered" />
        <button 
            @click="handlerEditPage(false)" 
            class="text-red-500 btn"
        >
          Close
        </button>
      </div>
    </Teleport> -->
  </div>
</template>

<style scoped></style>
