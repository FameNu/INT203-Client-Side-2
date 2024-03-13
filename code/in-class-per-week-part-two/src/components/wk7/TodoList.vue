<script setup>
import { reactive } from 'vue';
import BaseCard from './BaseCard.vue';
import ListModel from './ListModal.vue';
import todos from '../../../data/todos.json';
const settingCard = reactive({
  title: 'INT203',
  subTitle: 'Client-side Programming 2',
  content: 'Hello world ™™™™™',
  size: 'md',
  variant: 'flat',
});
const props = defineProps({
  counter: Number,
});
</script>

<template>
  <!-- <hr />
  <ListModel :items="todos" /> -->
  <hr />
  <!-- <ListModel :items="todos" v-slot="slotProps"> -->
  <ListModel :items="todos">
    <!-- <p>index: {{ slotProps.index }}</p>
    <p>id: {{ slotProps.item.id }}</p>
    <p>category: {{ slotProps.item.category }}</p> -->
    <template #header>TODO LIST</template>
    <template #default="slotProps">
      <BaseCard :size="settingCard.size" :variant="settingCard.variant">
        <template #title>{{ slotProps.item.id }}</template>
        <template #subTitle>{{ slotProps.item.category }}</template>
        <template #content>{{ slotProps.item.description }}</template>
        <template #action>
          <button class="btn" @click="$emit('editMode', slotProps.item)">Edit</button>
          <button class="btn">delete</button>
        </template>
      </BaseCard>
    </template>
  </ListModel>
  <hr />
  <!-- <p>Counter: {{ props.counter }}</p>
  <div class="flex flex-wrap gap-5">
    <BaseCard
      :size="settingCard.size"
      :variant="settingCard.variant"
      v-for="n in props.counter"
    >
      <template #title>
        <h1>{{ settingCard.title }} - {{ n }}</h1>
      </template>
      <template #subTitle>
        <h3>{{ settingCard.subTitle }}</h3>
      </template>
      <template #content>
        <p>{{ settingCard.content }}</p>
      </template>
      <template #action>
        <button class="btn">Edit</button>
        <button class="btn">delete</button>
      </template>
    </BaseCard>
  </div> -->
</template>

<style scoped></style>
