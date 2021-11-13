import React from 'react';
import Card from './card';

export default class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: this.createCards(),
            selected: undefined,
        };
    }

    createCards() {
        const cards = [];
        const suits = ["spades","clubs","hearts","diamonds"];

        // build deck of cards
        for(const suit of suits) {
            for(let i=1; i<=13; i++) {
                cards.push({
                    suit: suit, // string: [spades|clubs|hearts|diamonds]
                    rank: i,    // int: [1-13]
                    face: false, // boolean: true = facing up, false = facing down
                    pile: 0,    // int: [0-n] number of cards underneath the card
                    status: 0,  // int: 0=free, 1=selected, 2=option

                    order: undefined, // int: [0-51] array index, to allow comparing cards

                    // TODO remove test values
                    opacity: 1,
                });
            }
        }

        // shuffle cards
        for (let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }

        // add sequence number as attribute
        // needing the sequence for traversing the array
        this.refreshSequence(cards);

        return cards;
    }

    refreshSequence(cards) {
        for (const [i, card] of cards.entries()) {
            card.order = i;
        }
    }

    isLegalMove(from, to) {
        const cards = this.state.cards.slice();

        return to >= 0 && (
            cards[from].suit === cards[to].suit ||
            cards[from].rank === cards[to].rank
        );
    }

    handleCardClick(i) {

        const cards = this.state.cards.slice();
        let selected = this.state.selected;

        /*
        console.log(cards.length + " cards in deck");
        console.log("clicked index " + i);
        console.log(cards[i]);
        */

        // TODO use constants instead of 0 1 2

        if (!cards[i].face) {
            // card is facing down

            // clear status on cards
            cards.map((card,index) => {
                cards[index].status = 0;
                return true;
            });

            // show card
            cards[i].face = true;
            // auto-select card
            cards[i].status = 1;
            selected = i;

            // visualize option to the left
            if (this.isLegalMove(i, i-1)) {
                cards[i-1].status = 2;
            }
            // visualize option 3 steps to the left
            if (this.isLegalMove(i, i-3)) {
                cards[i-3].status = 2;
            }

        } else {
            if (cards[i].status === 0) {
                // card is not previously selected

                // clear status on cards
                cards.map((card,index) => {
                    cards[index].status = 0;
                    return true;
                });
                // Select current card
                cards[i].status = 1;
                selected = i;

                // visualize option to the left
                if (this.isLegalMove(i, i-1)) {
                    cards[i-1].status = 2;
                }
                // visualize option 3 steps to the left
                if (this.isLegalMove(i, i-3)) {
                    cards[i-3].status = 2;
                }

            } else if (cards[i].status === 1) {
                // card is selected

                // deselect card and all other cards
                cards.map((card,index) => {
                    cards[index].status = 0;
                    return true;
                });
                selected = undefined;

            } else if (cards[i].status === 2) {
                // card is an option

                // deselect card and all other cards
                cards.map((card,index) => {
                    cards[index].status = 0;
                    return true;
                });

                // update card suit + rank in new position
                cards[i].suit = cards[selected].suit;
                cards[i].rank = cards[selected].rank;
                cards[i].pile += cards[selected].pile;

                // remove selected card position
                cards.splice(selected, 1);
            }
        }
        this.refreshSequence(cards);
        this.setState({cards:cards, selected:selected});

        /*
        // lets try to remove the card and see what happens
        cards.splice(i, 1);
        this.refreshSequence(cards);
        this.setState({cards:cards});
        // gosh! dang! it works!
        */

        /*
        // lets set opacity and see if a transition occurs
        cards[i].opacity = 0;
        this.setState({cards:cards});
        // gosh! dang! it works!
        */
    }

    renderCard(card) {
        // each list item should also have a key associated with it
        // react uses this key to create a relationship between the component
        // and the DOM element.
        return(
            <Card
                key={card.suit+card.rank}
                item={card}
                onClick={ () => this.handleCardClick(card.order) }
            />
        );
    }

    render() {
        // get cards facing up
        const piles = this.state.cards.filter( item => item.face );

        // get cards facing down
        const deck = this.state.cards.filter( item => !item.face );

        return(
            <div className="board">
                {piles.length > 0 &&
                    <ul className="cards">
                        { piles.map(card => this.renderCard(card)) }
                    </ul>
                }
                {deck.length > 0 &&
                    <ul className="deck">
                        { this.renderCard(deck[0]) }
                    </ul>
                }
            </div>
        );
    }
}
