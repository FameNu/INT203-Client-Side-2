<script setup>
import { ref, reactive } from 'vue';
import FaceDownCard from './element/FaceDownCard.vue';
const visible = ref(false);
const handleFilpCard = () => {
    listCard.forEach((card) => {
        card.faceDown = !card.faceDown;
    });
};
const handleFilpEachCard = (card) => {
    card.faceDown = !card.faceDown;
};
const listCard = reactive([
    {
        suit: 'spade',
        value: 'A',
        faceDown: true,
    },
    {
        suit: 'heart',
        value: 'A',
        faceDown: true,
    },
    {
        suit: 'diamond',
        value: 'A',
        faceDown: true,
    },
    {
        suit: 'club',
        value: 'A',
        faceDown: true,
    },
]);
</script>

<template>
    <button class="btn" @click="handleFilpCard">Filp</button>
    <div id="card-lists-test" class="flex gap-3">
        <div
            v-for="card of listCard"
            :key="`${card.suit}-${card.value}`"
            @click="handleFilpEachCard(card)"
        >
            <div class="card-element">
                <FaceDownCard :class="card.faceDown ? 'hidden' : ''" />
                <div :class="card.faceDown ? '' : 'hidden'">
                    <p class="value-card">{{ card.value }}</p>
                </div>
            </div>
            <div>
                <h1>card detail</h1>
                <p>face down: {{ card.faceDown }}</p>
            </div>
        </div>
    </div>
    <!-- <div class="card-element">
        <p :class="visible ? '' : 'hidden'">Hello</p>
        <FaceDownCard :class="visible ? 'hidden' : ''" />
    </div> -->
</template>
