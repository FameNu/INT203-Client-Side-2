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
    </div>
</template>
