<script setup>
import { ref, computed, reactive } from 'vue';
import poker from '../libs/poker.js';
import FaceDownCard from '../element/FaceDownCard.vue';
const manager = poker();
manager.initDeck();
// const deck = reactive(manager.initDeck());

const handlerShuffleDeck = () => {
    manager.shuffleDeck();
};

const displayCard = computed(() => {
    return manager.getDeck();
});
const countCards = ref(manager.countCardsInDeck())
const countFaceDown = (manager.countFaceDown())
const countFaceUp = ref(manager.countFaceUp())
const handleFilpCard = (card) => {
    manager.findToFilpCard(card);
};
</script>

<template>
    <h1 class="text-3xl mb-4">Card List</h1>
    <button class="btn" @click="handlerShuffleDeck">Shuffle Deck</button>
    <button class="btn" @click="manager.resetDeck">Reset</button>
    <p>Card in deck: {{ manager.countCardsInDeck() }}</p>
    <p>Card Face down: {{ manager.countFaceDown() }}</p>
    <p>Card Face up: {{ manager.countFaceUp() }}</p>
    <div id="card-list" class="m-1 p-2 flex flex-wrap justify-center gap-3">
        <div
            v-for="card of displayCard"
            :key="`${card.suit}-${card.value}`"
            :id="`${card.suit}-${card.value}`"
            @click="handleFilpCard(card)"
        >
            <FaceDownCard :class="!card.faceDown ? 'hidden' : 'card-element'"/>
            <div :class="card.faceDown ? 'hidden' : 'card-element'">
                <div class="flex w-4/5">
                    <p class="value-card">{{ card.value }}</p>
                </div>
                <img
                    class="card-symbols"
                    :src="`/card-icon/${card.suit}.png`"
                    alt="card"
                />
                <div class="flex flex-row-reverse w-4/5">
                    <p class="value-card">{{ card.value }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-symbols {
    height: 3rem;
}
</style>
