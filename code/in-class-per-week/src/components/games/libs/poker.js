import { ref, reactive, computed } from 'vue';

class Poker {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.faceDown = ref(false);
    }

    pioritySuit = () => {
        switch (this.suit) {
            case 'spade':
                return 4;
            case 'heart':
                return 3;
            case 'diamond':
                return 2;
            case 'club':
                return 1;
        }
    };

    piorityValue = () => {
        switch (this.value) {
            case 'A':
                return 14;
            case 'K':
                return 13;
            case 'Q':
                return 12;
            case 'J':
                return 11;
            case '10':
                return 10;
            case '9':
                return 9;
            case '8':
                return 8;
            case '7':
                return 7;
            case '6':
                return 6;
            case '5':
                return 5;
            case '4':
                return 4;
            case '3':
                return 3;
            case '2':
                return 2;
        }
    };

    filpCard = () => {
        this.faceDown.value = !this.faceDown.value;
    };
}

function PokerMangement() {
    const deck = reactive([]);
    /*
    deck = [
        {suit: 'hearts', value: '2'},
    ]
    */
    const suits = ['spade', 'heart', 'diamond', 'club'];
    const values = [
        'A',
        'K',
        'Q',
        'J',
        '10',
        '9',
        '8',
        '7',
        '6',
        '5',
        '4',
        '3',
        '2',
    ];

    const initDeck = () => {
        if (deck.length !== 0) {
            const loopCount = suits.length * values.length;
            for (let i = 0; i < loopCount; i++) {
                deck.pop();
            }
        }
        suits.forEach((suit) => {
            values.forEach((value) => {
                deck.push(new Poker(suit, value));
            });
        });
        return deck;
    };

    const getDeck = () => {
        return deck;
    };

    const shuffleDeck = () => {
        for (let i = 0; i < 1000; i++) {
            const location1 = Math.floor(Math.random() * deck.length);
            const location2 = Math.floor(Math.random() * deck.length);
            const temp = deck[location1];

            deck[location1] = deck[location2];
            deck[location2] = temp;
        }
    };

    const resetDeck = () => {
        initDeck();
        shuffleDeck();
    };

    const compareCards = (card1, card2) => {};

    const countCardsInDeck = () => {
        return deck.length;
    };

    const countFaceDown = () => {
        return deck.filter((card) => card.faceDown).length;
    };

    const countFaceUp = () => {
        return deck.filter((card) => !card.faceDown).length;
    };

    const findToFilpCard = ({ suit, value }) => {
        const index = deck.findIndex(
            (card) => card.suit === suit && card.value === value
        );
        if (index !== -1) {
            deck[index].filpCard();
        }
    };

    return {
        initDeck,
        getDeck,
        shuffleDeck,
        resetDeck,
        compareCards,
        countCardsInDeck,
        countFaceDown,
        countFaceUp,
        findToFilpCard,
    };
}

export default PokerMangement;
