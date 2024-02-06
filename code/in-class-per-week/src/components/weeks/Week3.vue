<script setup>
import { ref, reactive, toRef, toRefs } from 'vue'
// let count = ref(0)
// setInterval(() => {
//   console.log('count', ++count.value)
// }, 1000)

// -------------------------------

// ref() with Object
// const profile = ref({
//   name: 'Evan Aftanas',
//   age: 30,
//   creator: 'Vue.js'
// })
// console.log(profile.value)
// console.log(profile.value.name)

// // reactive() with Array
// const topics = reactive(['Vue', 'React', 'Angular'])
// console.log(topics)

// // reactive() to ref() 
// const cube = reactive({
//   length: 10,
//   width: 20,
//   height: 30
// })
// const length = toRef(cube, 'length')
// console.log(length.value)
// length.value *= 10
// console.log(cube.length)
// console.log(cube.width)

// const { width, height } = toRefs(cube)
// console.log(width.value)
// console.log(height.value)

// // v-models
// const name = ref('')
const section = ref('')
const groupName = ref('')
const repo = ref('')
const numMembers = ref(0)
const newGroup = ref({
  section: '',
  groupName: '',
  repo: '',
  members: []
})

const addNewMember = () => {
  newGroup.value.members = []
  for (let i = 0; i < numMembers.value; i++) {
    newGroup.value.members.push({
      stdId: '',
      stdName: '',
      projectCo: false
    })
  }
}

const saveNewMember = () => {
  console.log(newGroup.value)
}
</script>

<template>
<!-- <div>Count: {{ count }}</div> -->

<!-- <div>
  <h1>{{ profile.name }}</h1>
  <p>Age: {{ profile.age }}</p>
  <p>Creator: {{ profile.creator }}</p>
</div>
<div>
  <h1>ref() with array</h1>
  <p v-for="framework in topics">{{ framework }}</p>
</div>
<div>
  <h1>v-model</h1>
  <input type="text" v-model="name">
  <h2>{{ name }}</h2>
</div> -->

<!-- Group Project -->
<div class="w-full p-3 bg-slate-50 flex flex-col gap-2">
    <div>
      Section:
      <select v-model.number="section">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      {{ section }}
    </div>
    <div>
      Group Name:
      <input
        type="text"
        v-model.trim="groupName"
        class="border border-gray-300 rounded-lg"
      />
    </div>
    <div>
      GitHub Repository:
      <input
        type="text"
        v-model.trim="repo"
        class="w-1/2 border border-gray-300 rounded-lg"
      />
    </div>
    <div>
      Number of Members:
      <input
        type="number"
        v-model="numMembers"
        min="0"
        max="10"
        class="border border-gray-300 rounded-lg"
        @change="addNewMember"
      />
    </div>
    <div>
      <div v-for="(member, index) in newGroup.members" :key="index">
        <input type="checkbox" id="proj-coor" v-model="member.projectCo">
        Project Coordinator - 
        Student ID:
        <input type="text" name="" id="std-id" v-model="member.stdId">
        Student Name:
        <input type="text" name="" id="std-name" v-model="member.stdName">
      </div>
    </div>
    <div class="flex justify-center gap-2">
      <button class="bg-indigo-700 text-white px-2 py-1 rounded-lg" @click="saveNewMember">OK</button>
      <button class="bg-red-600 text-white px-2 py-1 rounded-lg">Cancel</button>
    </div>
  </div>
</template>