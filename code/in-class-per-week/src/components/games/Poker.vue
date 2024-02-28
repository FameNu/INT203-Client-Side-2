<script setup>
import { reactive } from 'vue';
import PokerList from './poker/PokerList.vue';
import TestPage from './TestPage.vue';
import PokerRank from './poker/PokerRank.vue';

const pageOfPokerGame = reactive({
    pokerList: {
        selected: false,
    },
    testPage: {
        selected: false,
    },
    ranking: {
        selected: true,
    },
});
</script>

<template>
    <div>
        <div class="flex items-center gap-2">
            <p>Poker List:</p>
            <input
                type="checkbox"
                class="toggle"
                v-model="pageOfPokerGame.pokerList.selected"
            />
        </div>
        <div class="flex items-center gap-2">
            <p>Test Page:</p>
            <input
                type="checkbox"
                class="toggle"
                v-model="pageOfPokerGame.testPage.selected"
            />
        </div>
        <div class="flex items-center gap-2">
            <p>Poker Ranking:</p>
            <input
                type="checkbox"
                class="toggle"
                v-model="pageOfPokerGame.ranking.selected"
            />
        </div>
    </div>
    <PokerList v-if="pageOfPokerGame.pokerList.selected" />
    <TestPage v-if="pageOfPokerGame.testPage.selected" />
    <PokerRank v-if="pageOfPokerGame.ranking.selected" />
</template>

<style scoped></style>
