import React from 'react';
import Card from './card';
import Arrow from './arrow';
import Options from './options';

export default class Board extends React.Component {

    constructor(props) {
        super(props);

        const dealAll = false;

        this.state = {
            cards: this.createCards(dealAll),
            // cards: this.customCards(),
            selected: undefined,
            optionsExpanded: false,
            showHint: false,
            dealAll: dealAll,
        };
    }

    customCards() {
        const cards = [
            { suit: 'diamonds', rank: 11 },
            { suit: 'clubs', rank: 8 },
            { suit: 'hearts', rank: 8 },
            { suit: 'spades', rank: 5 },
            { suit: 'diamonds', rank: 5 },
            { suit: 'spades', rank: 9 },
            { suit: 'spades', rank: 7 },
            { suit: 'spades', rank: 3 },
            { suit: 'diamonds', rank: 12 },
            { suit: 'diamonds', rank: 1 },
            { suit: 'hearts', rank: 10 },
            { suit: 'clubs', rank: 3 },
            { suit: 'clubs', rank: 1 },
            { suit: 'spades', rank: 10 },
            { suit: 'spades', rank: 12 },
            { suit: 'clubs', rank: 13 },
            { suit: 'diamonds', rank: 8 },
            { suit: 'diamonds', rank: 10 },
            { suit: 'diamonds', rank: 6 },
            { suit: 'clubs', rank: 11 },
            { suit: 'clubs', rank: 6 },
            { suit: 'diamonds', rank: 2 },
            { suit: 'spades', rank: 4 },
            { suit: 'diamonds', rank: 13 },
            { suit: 'clubs', rank: 4 },
            { suit: 'hearts', rank: 12 },
            { suit: 'hearts', rank: 13 },
            { suit: 'hearts', rank: 4 },
            { suit: 'spades', rank: 8 },
            { suit: 'hearts', rank: 7 },
            { suit: 'hearts', rank: 2 },
            { suit: 'hearts', rank: 5 },
            { suit: 'hearts', rank: 11 },
            { suit: 'clubs', rank: 7 },
            { suit: 'hearts', rank: 3 },
            { suit: 'spades', rank: 6 },
            { suit: 'diamonds', rank: 9 },
            { suit: 'spades', rank: 2 },
            { suit: 'clubs', rank: 5 },
            { suit: 'clubs', rank: 9 },
            { suit: 'clubs', rank: 2 },
            { suit: 'spades', rank: 1 },
            { suit: 'diamonds', rank: 3 },
            { suit: 'hearts', rank: 6 },
            { suit: 'clubs', rank: 10 },
            { suit: 'spades', rank: 13 },
            { suit: 'spades', rank: 11 },
            { suit: 'clubs', rank: 12 },
            { suit: 'hearts', rank: 1 },
            { suit: 'diamonds', rank: 7 },
            { suit: 'diamonds', rank: 4 },
            { suit: 'hearts', rank: 9 }
        ];

        this.refreshSequence(cards);
        cards.map((el, i) => {
            cards[i].face = true;
            cards[i].pile = 0;
            cards[i].status = 0;
            return true;
        });

        return cards;
    }

    createCards(dealAll = this.state.dealAll) {
        const cards = [];
        const suits = ["spades","clubs","hearts","diamonds"];

        // build deck of cards
        for(const suit of suits) {
            for(let i=1; i<=13; i++) {
                cards.push({
                    suit: suit, // string: [spades|clubs|hearts|diamonds]
                    rank: i,    // int: [1-13]
                    face: dealAll, // boolean: true = facing up, false = facing down
                    pile: 0,    // int: [0-n] number of cards underneath the card
                    status: 0,  // int: 0=free, 1=selected, 2=option
                    sequence: undefined, // int: [0-51] array index, to allow comparing neighbor cards
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
            card.sequence = i;
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

            // if hints activated
            if(this.state.showHint) {
                // set active card and flag option to the left
                if (this.isLegalMove(i, i-1)) {
                    cards[i-1].status = 2;
                    cards[i].status = 1;
                    selected = i;
                }
                // set active card and flag option 3 steps to the left
                if (this.isLegalMove(i, i-3)) {
                    cards[i-3].status = 2;
                    cards[i].status = 1;
                    selected = i;
                }
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

                // flag option to the left (not necessarily visualized)
                if (this.isLegalMove(i, i-1)) {
                    cards[i-1].status = 2;
                }
                // flag option 3 steps to the left (not necessarily visualized)
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
    }

    handleOptionClick() {
        // 
        this.setState({optionsExpanded: !this.state.optionsExpanded});
    }

    handleRestart() {
        // rebuild deck
        this.setState ({
            cards: this.createCards(),
            selected: undefined,
        });

    }

    toggleHint() {
        this.setState({
            showHint: !this.state.showHint
        });
    }

    toggleDealAll() {
        const cards = this.state.cards.slice();
        if (!this.state.dealAll) {
            // make all cards face up
            cards.map(c => {
                c.face = true;
                return c;
            });
        }
        this.setState({
            dealAll: !this.state.dealAll,
            cards: cards
        });
    }

    renderCard(card, remaining) {
        // Each list item should have a key associated with it.
        // React uses this key to create a relationship between the component
        // and the DOM element.
        return(
            <Card
                key={card.suit+card.rank}
                item={card}
                remaining={remaining}
                onClick={ () => this.handleCardClick(card.sequence) }
                showHint={this.state.showHint}
            />
        );
    }

    renderArrow(line) {
        return(
            <Arrow
                key={line}
                line={line}
            />
        );
    }

    renderOptions() {
        return(
            <Options
                visible={this.state.optionsExpanded}
                onClick={ () => this.handleOptionClick() }
                handleRestart={ () => this.handleRestart() }
                showHint={this.state.showHint}
                toggleHint={ () => this.toggleHint() }
                dealAll={this.state.dealAll}
                toggleDealAll={ () => this.toggleDealAll() }
            />
        );
    }

    render() {
        // get cards facing up
        const piles = this.state.cards.filter( item => item.face );

        // get cards facing down
        const deck = this.state.cards.filter( item => !item.face );

        // neat trick to call render n times
        const numArrows = Math.max(0, Math.ceil(piles.length / 7) - 1);
        const arrowArray = [...Array(numArrows)];

        return(
            <>
            <div className="board">
                {piles.length > 0 &&
                    <ul className="cards">
                        { piles.map(card => this.renderCard(card)) }
                    </ul>
                }
                {arrowArray.length > 0 &&
                    <ul className="arrow">
                        { arrowArray.map((item, i) => this.renderArrow(i)) }
                    </ul>
                }
                <footer>
                    {this.renderOptions()}
                    <ul className="deck">
                    {deck.length > 0 ? this.renderCard(deck[0], deck.length)
                    :(
                        <li className="empty"></li>
                    )}
                    </ul>
                </footer>
            </div>
            <div className="test"></div>
            </>
        );
    }
}
