<script setup>
import { reactive } from 'vue';
import Week1 from './components/weeks/Week1.vue';
import Week2 from './components/weeks/Week2.vue';
import Week3 from './components/weeks/Week3.vue';
import Week4 from './components/weeks/Week4.vue';

const classes = reactive([
    {
        id: 'wk1',
        title: 'Week 1',
        selected: false,
    },
    {
        id: 'wk2',
        title: 'Week 2',
        selected: false,
    },
    {
        id: 'wk3',
        title: 'Week 3',
        selected: false,
    },
    {
        id: 'wk4',
        title: 'Week 4',
        selected: true,
    }
]);

const selectClass = (classId) => {
    classes.forEach((classWk) => {
        classWk.selected = classWk.id === classId;
    });
}
</script>

<template>
    <header class="w-full">
        <header>
            <section
                id="banner"
                class="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 p-2"
            >
                <img src="./assets/vue-icon.png" class="h-14 m-4" />
                <div>
                    <h1
                        class="text-3xl text-white font-semiblod tracking-wider"
                    >
                        Vue Creative Project
                    </h1>
                    <h2 class="text-2xl text-white italic">
                        Learning by doing
                    </h2>
                </div>
            </section>
        </header>
    </header>
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
    <div v-if="classes[0].selected" class="p-4">
        <h1 class="text-4xl">Week 1</h1>
        <Week1 />
    </div>
    <div v-if="classes[1].selected" class="p-4">
        <h1 class="text-4xl">Week 2</h1>
        <Week2 />
    </div>
    <div v-if="classes[2].selected" class="p-4">
        <h1 class="text-4xl">Week 3</h1>
        <Week3 />
    </div>
    <div v-if="classes[3].selected" class="p-4">
        <h1 class="text-4xl">Week 4</h1>
        <Week4 />
    </div>
</template>

<style scoped></style>
