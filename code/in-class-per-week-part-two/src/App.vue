<script setup>
import { reactive } from 'vue';
import Week6 from './components/week/Week6.vue';
import Week7 from './components/week/Week7.vue';
import Week8 from './components/week/Week8.vue';
import Nav from './views/Nav.vue';
const classes = reactive([
  {
    id: 'wk6',
    title: 'Week 6',
    selected: false,
  },
  {
    id: 'wk7',
    title: 'Week 7',
    selected: false,
  },
  {
    id: 'wk8',
    title: 'Week 8',
    selected: true,
  },
]);

const selectClass = (classId) => {
  classes.forEach((classWk) => {
    classWk.selected = classWk.id === classId;
  });
};
</script>

<template>
  <Nav></Nav>
  <div class="join pb-4">
    <input
      class="join-item btn"
      type="radio"
      v-for="classWk in classes"
      name="options"
      :id="classWk.id"
      :aria-label="classWk.title"
      :checked="classWk.selected"
      @click="selectClass(classWk.id)"
    />
  </div>
  <RouterView />
  <div class="p-4" v-if="classes[0].selected">
    <Week6 />
  </div>
  <div class="p-4" v-if="classes[1].selected">
    <Week7 />
  </div>
  <div class="p-4" v-if="classes[2].selected">
    <Week8 />
  </div>
</template>

<style scoped></style>
