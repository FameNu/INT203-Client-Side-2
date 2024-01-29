<script setup>
import { ref } from 'vue'
const counter = ref(0)
const isDark = ref(false)
function decrement() {
    counter.value <= 0 ? (counter.value = 0) : --counter.value
}
function changeTheme() {
  isDark.value = !isDark.value
}
</script>

<template>
    <div :class="isDark ? 'bg-black' : 'bg-white'" class="border-solid border-4 hover:border-dotted rounded-md">
        <h2
            class="text-green-600 tracking-widest font-semibold text-2xl p-4 m-0 cursor-pointer"
        >
            Hello world
        </h2>
        <input @click="changeTheme" type="checkbox" class="toggle" checked />
    </div>
    <div>
        <button
            @click="decrement"
            class="px-2 py-1 bg-red-300 text-white rounded-lg m-2 hover:opacity-75"
        >
            -
        </button>
        <span class="text-xl">Counter: {{ counter }}</span>
        <button
            @click="counter++"
            class="px-2 py-1 bg-green-300 text-white rounded-lg m-2 hover:opacity-75"
        >
            +
        </button>
    </div>
</template>

<style scoped></style>
