<script setup>
import { ref, computed, reactive } from 'vue';
import poker from '../libs/poker.js';
import FaceDownCard from '../element/FaceDownCard.vue';
import { rankPoker, findHighCardOnHand } from '../libs/rankPoker.js';
const dealer = poker();
dealer.initDeck();
dealer.shuffleDeck();
const deckOnTable = dealer.getDeck();
const cardOnTable = deckOnTable.slice(0, 5);
const player1 = {
    name: 'Player 1',
    hand: deckOnTable.slice(5, 7),
    highCard: '',
    rank: 0,
}
// const cardOnPlayerHand = deckOnTable.slice(5, 7);
rankPoker(cardOnTable, player1);
</script>

<template>
    <h1 class="text-3xl mb-4">Poker Ranking</h1>
    <div class="flex flex-col flex-wrap gap-3">
        <div class="flex flex-col gap-3">
            <h2 class="text-2xl">Royal Flush</h2>
            <p>10, J, Q, K, A of the same suit</p>
        </div>
        <div class="flex flex-col gap-3">
            <h2 class="text-2xl">Straight Flush</h2>
            <p>Five cards of the same suit in sequence</p>
        </div>
        <div class="flex flex-col gap-3">
            <h2 class="text-2xl">Four of a Kind</h2>
            <p>Four cards of the same rank</p>
        </div>
        <div class="flex flex-col gap-3">
            <h2 class="text-2xl">Full House</h2>
            <p>Three of a kind with a pair</p>
        </div>
        <div class="flex flex-col gap-3">
            <h2 class="text-2xl">Flush</h2>
            <p>Five cards of the same suit</p>
        </div>
        <div class="flex flex-col gap-3">
            <h2 class="text-2xl">Straight</h2>
            <p>Five cards in sequence</p>
        </div>
        <div class="flex flex-col gap-3">
            <h2 class="text-2xl">Three of a Kind</h2>
            <p>Three cards of the same rank</p>
        </div>
        <div class="flex flex-col gap-3">
            <h2 class="text-2xl">Two Pair</h2>
            <p>Two pairs of cards</p>
        </div>
        <div class="flex flex-col gap-3">
            <h2 class="text-2xl">One Pair</h2>
            <p>One pair of cards</p>
        </div>
        <div class="flex flex-col gap-3">
            <h2 class="text-2xl">High Card</h2>
            <p>None of the above</p>
        </div>
    </div>
    <hr>
    <h3 class="text-3xl">Card on Table</h3>
    <div class="flex gap-4">
        <div v-for="card of cardOnTable">
            <FaceDownCard :class="!card.faceDown ? 'hidden' : 'card-element'" />
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
    <hr>
    <h3 class="text-3xl">Card on Hand</h3>
    <div class="flex gap-4">
        <div v-for="card of player1.hand">
            <FaceDownCard :class="!card.faceDown ? 'hidden' : 'card-element'" />
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
