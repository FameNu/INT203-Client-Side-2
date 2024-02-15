<script setup>
import { computed, reactive } from 'vue';
import poker from '../libs/poker.js';
const manager = reactive(poker());
manager.initDeck();

const handlerShuffleDeck = () => {
    manager.shuffleDeck();
}

const displayCard = computed(() => {
    return manager.getDeck();
})
</script>

<template>
    <h1 class="text-3xl mb-4">Card List</h1>
    <button class="btn" @click="handlerShuffleDeck">Shuffle Deck</button>
    <div id="card-list" class="flex flex-wrap gap-3">
        <div
            id="card"
            v-for="card of displayCard"
        >
            <div class="flex items-center gap-2">
                <img
                    class="card-symbols"
                    :src="`/card-icon/${card.suit}.png`"
                    alt="card"
                />
                <p class="text-lg">{{ card.value }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-symbols {
    height: 3rem;
}
</style>
