<script setup>
import SearchIcon from './components/SearchIcon.vue'

import { ref, reactive } from 'vue' // ------------- Yo
// for v-text
const counter = 1

// for v-html
const rawHTML = '<span style="color: red">This should be red.</span>'
const notHTML = '<span style="color: red">This should be red.</span>'

// for v-bind
const headingStyle = 'color: Green'

// for boolean attributes
const setButton = (disabled) => {
    console.log(disabled)
    return !disabled
}

// for calling functions
const date = new Date()

function toTitleDate(date) {
    return date.toDateString().slice(4)
}

function formatDate(date) {
    return date.toLocaleDateString()
}

// for v-show
const hide = false

import data from './data/groups.json'

// console.log(data.filter((group) => group.section == '2'))

const groups = reactive(data)

function extractURL(url) {
    const lastSlash = url.lastIndexOf('/')
    const dotGit = url.lastIndexOf('.git')

    const nameProj = url.slice(lastSlash + 1, dotGit)
    return nameProj
}

const status = reactive({
    selectedClass: true,
})

function selectedClassProj() {
    status.selectedClass = true
}

function selectedClassTest() {
    status.selectedClass = false
}

function handlerInput(e) {
    const keyword = e.target.value
    // console.log(keyword)
    filterGroups(keyword)
}

function filterGroups(keyword) {
    data = data.filter((group) => group.groupName.includes(keyword))
    console.log(data)
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
        <div class="navbar border-b-4">
            <button class="btn btn-ghost" @click="selectedClassProj">
                week2 class
            </button>
            <button class="btn btn-ghost" @click="selectedClassTest">
                test project 1
            </button>
        </div>
        <div id="class-2" v-if="status.selectedClass">
            <main class="p-2">
                <section id="search" class="flex justify-end">
                    <div class="flex gap-2 items-center w-1/4">
                        <SearchIcon />
                        <input
                            type="text"
                            class="border-2 border-purple-500 rounded-lg p-2 w-full outline-none focus:border-purple-500"
                            placeholder="Search"
                            @input="handlerInput"
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
                    v-for="group in groups"
                    :key="group.ID"
                    :style="
                        group.ID % 2 == 0 ? 'background-color: #EAEAEA' : ''
                    "
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
                            v-bind:key="member.studentId"
                        >
                            {{ member.studentId }} - {{ member.studentName }}
                        </li>
                    </ul>
                </div>
            </section>
            <!-- <div v-show="hide" id="play-ground" class="p-2">
      <div>
        <h1>v-text</h1>
        <span>use v-text</span>
        <p v-text="counter"></p>
        <p>use 'Mustache' -> {{ counter }}</p>
      </div>
      <hr>
      <div>
        <h1>v-html</h1>
        <span>use v-html</span>
        <p v-html="rawHTML"></p>
        <p>use 'Mustache' -> {{ rawHTML }}</p>
      </div>
      <hr>
      <div>
        <h1>v-bind</h1>
        <span>use v-bind</span>
        <h2 v-bind:style="headingStyle">use 'v-bind:style' Heading 2</h2>
        <h2 :style="headingStyle">use ':style' Hello</h2>
      </div>
      <hr>
      <div>
        <h1>Boolean Attributes</h1>
        <button :disabled="setButton(true)">-- Disble--</button>
        <button :disabled="setButton(false)">-- Not disabled --</button>
      </div>
      <hr>
      <div>
        <h1>Calling Functions</h1>
        <span :title="toTitleDate(date)">
          Full date: {{ formatDate(date) }}
        </span>
      </div>
      <hr>
      <div>
        <h1>v-show</h1>
        <p v-show="hide">{{ notHTML }}</p>
      </div>
    </div> -->
        </div>
        <div id="test-proj">
            <main class="p-2">
                <div class="absolute">Number of Groups: {{ groups.length }}</div>
                <section id="search" class="flex justify-end">
                    <div class="flex gap-2 items-center w-1/4">
                        <SearchIcon />
                        <input
                            type="text"
                            class="border-2 border-purple-500 rounded-lg p-2 w-full outline-none focus:border-purple-500"
                            placeholder="Search"
                        />
                    </div>
                </section>
            </main>
            <section id="groupwork" class="p-4 flex flex-wrap flex-1">
                <div
                    v-for="group in groups"
                    :key="group.ID"
                    :style="
                        group.ID % 2 == 0 ? 'background-color: #EAEAEA' : ''
                    "
                    class="flex flex-col gap-2 p-2 border-b border-purple-500 w-1/3"
                >
                    <p>
                        Section&lt;{{ group.section }}> - {{ group.groupName }}
                    </p>
                    <p class="font-bold">
                        Link Github:
                        <a :href="group.repo" target="_blank">{{
                            extractURL(group.repo)
                        }}</a>
                    </p>
                    <p
                        v-for="member of group.members"
                        v-bind:key="member.studentId"
                    >
                        {{ member.studentId }} - {{ member.studentName }}
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped></style>
