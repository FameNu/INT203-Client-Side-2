<script setup>
import { reactive } from 'vue';
import PokerList from './poker/PokerList.vue';
import TestPage from './TestPage.vue';

const pageOfPokerGame = reactive({
    pokerList: {
        selected: true,
    },
    testPage: {
        selected: false,
    }
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
    </div>
    <PokerList v-if="pageOfPokerGame.pokerList.selected" />
    <TestPage v-if="pageOfPokerGame.testPage.selected" />
</template>

<style scoped></style>
