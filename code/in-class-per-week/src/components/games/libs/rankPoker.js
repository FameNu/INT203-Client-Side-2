import { Poker } from "./poker";

function rankPoker(tableCard, player) { // list of up to 5 cards, and 2 cards
    let rank = 0;
    player.highCard = findHighCardOnHand(player.hand);
    console.log('player.highCard: ', player.highCard);
    if (player.hand[0].value === player.hand[1].value) rank = 1;
}

function findHighCardOnHand(aryCard) {
    if (aryCard[0].suit > aryCard[1].suit) return aryCard[0];
    if (aryCard[0].suit < aryCard[1].suit) return aryCard[1];
    if (aryCard[0].value > aryCard[1].value) return aryCard[0];
    return aryCard[1];
}

function playerHasPair(tableCard, player) {
    
}

function getRankName(rank) {
    switch (rank) {
        case 0:
            return 'High Card';
        case 1:
            return 'Pair';
        case 2:
            return 'Two Pair';
        case 3:
            return 'Three of a Kind';
        case 4:
            return 'Straight';
        case 5:
            return 'Flush';
        case 6:
            return 'Full House';
        case 7:
            return 'Four of a Kind';
        case 8:
            return 'Straight Flush';
        case 9:
            return 'Royal Flush';
    }
}

function sortBySuitAndValue(aryCard) {
    aryCard.sort((a, b) => {
        if (a.suit < b.suit) return 1;
        if (a.suit > b.suit) return -1;
        if (a.value < b.value) return 1;
        if (a.value > b.value) return -1;
    });
}

export { rankPoker, findHighCardOnHand };