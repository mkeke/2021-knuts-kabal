/*
    solve.js
    determine if a deck can be solved, and print the first solution
    theory: any deck is solvable, regardless of how it is shuffled
    (not confirmed)
*/

const log = console.log;

const createDeck = () => {
    const cards = [];
    const suits = ["spades","clubs","hearts","diamonds"];

    // build deck of cards
    for(const suit of suits) {
        for(let i=1; i<=13; i++) {
            cards.push({
                suit: suit,
                rank: i,
            });
        }
    }

    // shuffle cards
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
}

const isLegalMove = (deck, from, to) => 
    to >= 0 && (
        deck[from].suit === deck[to].suit ||
        deck[from].rank === deck[to].rank
);

let count = 0;
const solve = (d, str) => {
    if(d.length == 1) {
        log(str);
        process.exit();
    } else {
        for (let i=0; i<d.length; i++) {
            if(isLegalMove(d, i, i-1)) {
                let foo = str + `${d[i].suit} ${d[i].rank} --> ${d[i-1].suit} ${d[i-1].rank}\n`;
                let tempDeck = [...d];
                tempDeck[i-1] = tempDeck[i];
                tempDeck.splice(i, 1);
                solve(tempDeck, foo);
            }
            if(isLegalMove(d, i, i-3)) {
                let foo = str + `${d[i].suit} ${d[i].rank} --> ${d[i-3].suit} ${d[i-3].rank}\n`;
                let tempDeck = [...d];
                tempDeck[i-3] = tempDeck[i];
                tempDeck.splice(i, 1);
                solve(tempDeck, foo);
            }
        }
    }
}

const deck = createDeck();
log(deck);
solve(deck, "");
