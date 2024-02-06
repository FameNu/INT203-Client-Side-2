<script setup>
import SearchIcon from './components/SearchIcon.vue';

import { ref, reactive, computed } from 'vue';

import data from './data/groups.json';

const keyword = ref('');
const groups = reactive(data);

const filterGroups = computed(() => {
    return groups.filter((group) => {
        return (
            group.groupName
                .toLowerCase()
                .includes(keyword.value.toLowerCase()) ||
            group.members.some((member) => {
                return (
                    (member.studentId + '').includes(keyword.value) ||
                    member.studentName
                        .toLowerCase()
                        .includes(keyword.value.toLowerCase())
                );
            })
        );
    });
});

function extractURL(url) {
    const lastSlash = url.lastIndexOf('/');
    const dotGit = url.lastIndexOf('.git');

    const nameProj = url.slice(lastSlash + 1, dotGit);
    return nameProj;
}
</script>

<template>
    <div class="w-full">
        <header>
            <section
                id="banner"
                class="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 p-2"
            >
                <img src="./assets/vue-icon.png" class="h-14" />
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
        <div id="class-2">
            <main class="p-2">
                <section id="search" class="flex justify-end">
                    <div class="flex gap-2 items-center w-1/4">
                        <SearchIcon />
                        <input
                            type="text"
                            class="border-2 border-purple-500 rounded-lg p-2 w-full outline-none focus:border-purple-500"
                            placeholder="Search"
                            v-model="keyword"
                        />
                    </div>
                </section>
            </main>
            <section id="groupwork" class="p-4">
                <div class="grid grid-cols-12 font-semibold text-xl gap-2 p-2">
                    <h3>Section</h3>
                    <h3 class="col-span-2">Group Name</h3>
                    <h3 class="col-span-5">GitHub Repository</h3>
                    <h3 class="col-span-4">Members</h3>
                </div>
                <hr />
                <div
                    v-for="(group, index) in filterGroups"
                    :key="group.ID"
                    :style="index % 2 == 0 ? 'background-color: #EAEAEA' : ''"
                    class="grid grid-cols-12 gap-2 p-2 border-b border-purple-500"
                >
                    <p>{{ group.section }}</p>
                    <p class="col-span-2">{{ group.groupName }}</p>
                    <p class="col-span-5">
                        <a :href="group.repo" target="_blank">{{
                            extractURL(group.repo)
                        }}</a>
                    </p>
                    <ul class="col-span-4 list-disc">
                        <li
                            v-for="member of group.members"
                            :key="member.studentId"
                        >
                            {{ member.studentId }} - {{ member.studentName }}
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped></style>
