<script setup>
import SearchIcon from '../../components/SearchIcon.vue';

import { ref, reactive, computed } from 'vue'; // ------------- Yo
// for v-text
const counter = 1;

// for v-html
const rawHTML = '<span style="color: red">This should be red.</span>';
const notHTML = '<span style="color: red">This should be red.</span>';

// for v-bind
const headingStyle = 'color: Green';

// for boolean attributes
const setButton = (disabled) => {
    console.log(disabled);
    return !disabled;
};

// for calling functions
const date = new Date();

function toTitleDate(date) {
    return date.toDateString().slice(4);
}

function formatDate(date) {
    return date.toLocaleDateString();
}

// for v-show
const hide = true;

// for v-if, v-else, v-else-if
let block1 = ref(false);
let block2 = ref(false);
let block3 = ref(false);

// for v-for
// array 
const members = ['John', 'Jane', 'Jack', 'Jill', 'Jenny'];
//object 
const member = {
    name: 'John',
    age: 23,
    email: 'johnzaza@gmail.com'
};

// for v-on
const onCounting = ref(1)
const increment = () => {
    onCounting.value += 1;
}
const newValue = ref(0)
const updateValue = (event) => {
    onCounting.value = parseInt(event.target.value);
}
</script>

<template>
    <div v-show="hide" id="play-ground" class="p-2">
        <div>
            <h1>v-text</h1>
            <span>use v-text</span>
            <p v-text="counter"></p>
            <p>use 'Mustache' -> {{ counter }}</p>
        </div>
        <hr />
        <div>
            <h1>v-html</h1>
            <span>use v-html</span>
            <p v-html="rawHTML"></p>
            <p>use 'Mustache' -> {{ rawHTML }}</p>
        </div>
        <hr />
        <div>
            <h1>v-bind</h1>
            <span>use v-bind</span>
            <h2 v-bind:style="headingStyle">use 'v-bind:style' Heading 2</h2>
            <h2 :style="headingStyle">use ':style' Hello</h2>
        </div>
        <hr />
        <div>
            <h1>Boolean Attributes</h1>
            <button :disabled="setButton(true)">-- Disble--</button>
            <button :disabled="setButton(false)">-- Not disabled --</button>
        </div>
        <hr />
        <div>
            <h1>Calling Functions</h1>
            <span :title="toTitleDate(date)">
                Full date: {{ formatDate(date) }}
            </span>
        </div>
        <hr />
        <div>
            <h1>v-show</h1>
            <p v-show="hide">{{ notHTML }}</p>
        </div>
        <hr>
        <div>
            <h1>v-if, v-else, v-else-if</h1>
            <label for="if1">Block 1 </label><input type="checkbox" name="block1" id="if1" v-model="block1"><br>
            <label for="if2">Block 2 </label><input type="checkbox" name="block2" id="if2" v-model="block2"><br>
            <label for="if3">Block 3 </label><input type="checkbox" name="block2" id="if3" v-model="block3">
        </div>
        <div v-if="block1">
            <p>Block 1</p>
        </div>
        <div v-else-if="block2 && block3">
            <p>Block 2</p>
        </div>
        <div v-else>
            <p>Block 3</p>
        </div>
        <hr>
        <div>
            <h1>v-for</h1>
            <ul>
                <li v-for="(n) in 5">{{ n }}</li>
            </ul>
            <div class="flex gap-8 items-center">
                <h2>v-for array</h2>
                <div class="border-2 border-green-300 p-4 rounded-lg" v-for="(name, index) in members" :key="index">
                    <p>{{index}}. name: {{ name }}</p>
                </div>
            </div>
            <div class="border-2 border-green-300 p-4 rounded-lg w-fit">
                <p v-for="(item, key, index) in member" :key="index">
                    {{index}}. {{ key }}: {{ item }}
                </p>
            </div>
        </div>
        <hr>
        <div>
            <h1>v-on</h1>
            <div>
                <h2>Click to increment</h2>
                <p class="border-2 border-green-300 p-4 rounded-lg w-fit">{{ onCounting }}</p>
                <button class="btn" @click="increment">Increment</button>
            </div>
            <div>
                <h2>Enter button to increment</h2>
                <input type="text" @keyup.enter="updateValue" v-model="newValue">
            </div>
        </div>
        <hr>
        <div>
            <h1>event</h1>
            <a @click.prevent="'www.github.com'">GitHub</a>
        </div>
    </div>
</template>
