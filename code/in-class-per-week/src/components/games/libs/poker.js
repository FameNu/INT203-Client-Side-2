class Poker {

}

function PokerMangement() {
    let deck = [];

    /*
    deck = [
        {suit: 'hearts', value: '2'},
    ]
    */

    const initDeck = () => {
        const suits = ['spade', 'heart', 'diamond', 'club'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        suits.forEach(suit => {
            values.forEach(value => {
                deck.push({suit, value});
            });
        });
    }

    const getDeck = () => {
        return deck;
    }

    const shuffleDeck = () => {
        for (let i = 0; i < 1000; i++) {
            const location1 = Math.floor((Math.random() * deck.length));
            const location2 = Math.floor((Math.random() * deck.length));
            const temp = deck[location1];

            deck[location1] = deck[location2];
            deck[location2] = temp;
        }
    }

    return {
        initDeck,
        getDeck,
        shuffleDeck
    }
}

export default PokerMangement;