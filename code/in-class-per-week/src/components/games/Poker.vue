<script setup>
import { reactive } from 'vue';
import PokerList from './poker/PokerList.vue';

const pageOfPokerGame = reactive({
    pokerList: {
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
    </div>
    <PokerList v-if="pageOfPokerGame.pokerList.selected" />
</template>

<style scoped></style>
