<script setup>
import SearchIcon from './components/SearchIcon.vue';
import Sort from './components/Sort.vue';
import { sortGroupsSec } from './libs/utiltis.js';

import { ref, reactive, computed, watch } from 'vue';

import data from './data/groups.json';

const keyword = ref('');
const groups = reactive(data);
groups.sort((a, b) => a.section - b.section);

const maxPerPage = ref(10);
const page = ref(1);
const getAllPage = () => {
    return Math.ceil(groups.length / maxPerPage.value);
};
const startPositon = computed(() => {
    return (page.value - 1) * maxPerPage.value;
});
const endPosition = computed(() => {
    return page.value * maxPerPage.value - 1;
});
const selectPage = (pageNum) => {
    page.value = pageNum;
};

const filterGroups = computed(() => {
    return groups.filter((group) => {
        return (
            group.groupName
                .toLowerCase()
                .includes(keyword.value.toLowerCase()) ||
            group.repo.toLowerCase().includes(keyword.value.toLowerCase()) ||
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

watch([maxPerPage, page], (newValue, oldValue) => {
    console.log(newValue);
    console.log(oldValue);
    filterGroups.slice(startPositon.value, maxPerPage.value);
});

function extractURL(url) {
    const lastSlash = url.lastIndexOf('/');
    const dotGit = url.lastIndexOf('.git');

    const nameProj = url.slice(lastSlash + 1, dotGit);
    return nameProj;
}

const addNewPage = ref(false);
const section = ref('');
const groupName = ref('');
const repo = ref('');
const numMembers = ref(0);
const newGroup = ref({
    section: '',
    groupName: '',
    repo: '',
    members: [],
});

const addNewMember = () => {
    newGroup.value.members = [];
    for (let i = 0; i < numMembers.value; i++) {
        newGroup.value.members.push({
            stdId: '',
            stdName: '',
            projectCo: false,
        });
    }
};

const saveNewMember = () => {
    console.log(newGroup.value);
    // groups.push(newGroup.value)
    // addNewPage.value = false
    // section.value = ''
    // groupName.value = ''
    // repo.value = ''
    // numMembers.value = 0
    // newGroup.value.members = []
};

const fontSize = ref(16);
const fontColor = ref('black');

const isPlaying = ref(false);
const player = ref('');
const musicControl = () => {
    isPlaying.value = !isPlaying.value;
    if (isPlaying.value) player.value.play();
    else player.value.pause();
};
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
            <div id="setting" class="flex flex-col gap-2 p-4">
                <div class="flex items-center gap-2" id="set-font-size">
                    <label for="font-size">Font Size: </label>
                    <!-- <input
                        type="number"
                        name="font-size"
                        id="font-size"
                        min="10"
                        max="30"
                        v-model="fontSize"
                    /> -->
                    <input
                        type="range"
                        name="font-size"
                        id="font-size"
                        min="10"
                        max="48"
                        value="16"
                        class="range range-xs w-40"
                        v-model="fontSize"
                    />
                    <button class="btn btn-sm" @click="fontSize = 16">Default Size</button>
                </div>
                <div class="flex items-center gap-2" id="set-font-color">
                    <label for="font-color">Font Color: </label>
                    <input
                        type="color"
                        name="font-color"
                        id="font-color"
                        v-model="fontColor"
                    />
                    <button class="btn btn-sm" @click="fontColor = 'black'">Default Color</button>
                </div>
                <div id="control-music-box">
                    <audio controls class="hidden" ref="player">
                        <!-- <source src="./assets/music/sample.mp3" type="audio/mp3" /> -->
                        <source
                            src="./assets/music/mashle.mp3"
                            type="audio/mp3"
                        />
                    </audio>
                    <input
                        type="checkbox"
                        class="toggle"
                        @click="musicControl"
                        v-model="isPlaying"
                    />
                </div>
            </div>
        </header>
        <div id="class-2">
            <main class="p-2">
                <section id="search" class="flex justify-between">
                    <div class="flex justify-center items-center gap-4">
                        <div
                            class="text-blue-300"
                            @click="addNewPage = !addNewPage"
                        >
                            Add New Group
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <button
                            v-for="n in getAllPage()"
                            class="w-8"
                            :class="
                                page == n
                                    ? 'text-blue-500 bg-slate-200'
                                    : 'text-black'
                            "
                            @click="selectPage(n)"
                        >
                            {{ n }}
                        </button>
                    </div>
                    <div class="border-4 border-purple-400 rounded-lg p-3">
                        <label for="max-page">Set number of rows/page: </label>
                        <input
                            type="number"
                            @change="selectPage(1)"
                            v-model="maxPerPage"
                            min="1"
                            class="w-10 border-none"
                            name="max-page"
                            id="max-page"
                        />
                    </div>
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
            <section id="new-group" v-if="addNewPage">
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
                        <div
                            v-for="(member, index) in newGroup.members"
                            :key="index"
                        >
                            <input
                                type="checkbox"
                                id="proj-coor"
                                v-model="member.projectCo"
                            />
                            Project Coordinator - Student ID:
                            <input
                                type="text"
                                name=""
                                id="std-id"
                                v-model="member.stdId"
                            />
                            Student Name:
                            <input
                                type="text"
                                name=""
                                id="std-name"
                                v-model="member.stdName"
                            />
                        </div>
                    </div>
                    <div class="flex justify-center gap-2">
                        <button
                            class="bg-indigo-700 text-white px-2 py-1 rounded-lg"
                            @click="saveNewMember"
                        >
                            OK
                        </button>
                        <button
                            class="bg-red-600 text-white px-2 py-1 rounded-lg"
                            @click="addNewPage = false"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </section>
            <section id="groupwork" class="p-4" v-else>
                <div class="grid grid-cols-12 font-semibold text-xl gap-2 p-2">
                    <h3 class="flex items-center justify-center">
                        Section
                        <!-- <button class="cursor-pointer" @click="handleSort">
                            <Sort />
                        </button> -->
                        <button
                            class="cursor-pointer"
                            @click="sortGroupsSec(groups)"
                        >
                            <Sort />
                        </button>
                    </h3>
                    <h3 class="col-span-2">Group Name</h3>
                    <h3 class="col-span-2">GitHub Repository</h3>
                    <h3 class="col-span-4">Members</h3>
                    <h3 class="col-span-3">Link</h3>
                </div>
                <hr />
                <div>
                    <p>start Position: {{ startPositon }}</p>
                    <p>End Position: {{ endPosition }}</p>
                    <p>current Page: {{ page }}</p>
                </div>
                <hr />
                <div
                    v-for="(group, index) in filterGroups"
                    :key="group.ID"
                    :style="index % 2 == 0 ? 'background-color: #EAEAEA' : ''"
                >
                    <!-- <div
                    v-for="(group, index) in groups"
                    :key="group.ID"
                    :style="index % 2 == 0 ? 'background-color: #EAEAEA' : ''"
                > -->
                    <div
                        class="grid grid-cols-12 gap-2 p-2 border-b border-purple-500"
                    >
                        <p>{{ group.section }}</p>
                        <p class="col-span-2">{{ group.groupName }}</p>
                        <p class="col-span-2">
                            <a :href="group.repo" target="_blank">{{
                                extractURL(group.repo)
                            }}</a>
                        </p>
                        <ul class="col-span-4 list-disc">
                            <li
                                v-for="member of group.members"
                                :key="member.studentId"
                            >
                                {{ member.studentId }} -
                                {{ member.studentName }}
                            </li>
                        </ul>
                        <img
                            :src="'/groupImages/pic-' + (index + 1) + '.jpg'"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
#groupwork {
    font-size: v-bind(fontSize + 'px');
    color: v-bind(fontColor);
}
</style>
