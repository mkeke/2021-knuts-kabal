import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';

class Card extends React.Component {
    getSymbol(s) {
        return {
            hearts: '\u2665',
            diamonds: '\u2666',
            clubs: '\u2663',
            spades: '\u2660',
        }[s];
    }
    render() {
        return(
            <li
                className={this.props.item.suit}
                onClick={ ()=>this.props.onClick() }>
                {this.getSymbol(this.props.item.suit)}<br />{this.props.item.rank}
            </li>
        );
    }    
}

class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: this.createCards(),
        };

        /*
        this.state.cards.map(
            e=>console.log(e.order + " " + e.suit + " " + e.rank));
        */
    }

    createCards() {
        const cards = [];
        const suits = ["spades","clubs","hearts","diamonds"];

        // build deck of cards
        for(const suit of suits) {
            for(let i=1; i<=13; i++) {
                cards.push({
                    suit: suit,
                    rank: i,
                    face: true, // Math.random() < 0.5, //true, // false,
                    pile: 0,
                    visible: true,
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

    handleTileClick(i) {
        console.log("clicked " + i);

        // update state for the current tile

        /*
        const state = this.state.foo.slice();
        state[i] = "clicked";
        this.setState({
            foo: state
        });
        */
    }

    handleCardClick(i) {
        // reference to this.state.cards[i]
        console.log("clicked " + i);
        console.log(this.state.cards[i]);
    }

    renderCard(card) {
        // TODO the param is a sequence number.
        // reference to this.state.cards[i]
        // onclick needs this number

        // each list item should also have a key associated with it
        return(
            <Card
                key={card.order}
                item={card}
                onClick={ () => this.handleCardClick(card.order) }
            />
        );
    }

    render() {
        // get visible cards facing up
        const piles = this.state.cards.filter( item => item.face && item.visible );

        // get visible cards facing down
        const deck = this.state.cards.filter( item => !item.face && item.visible );
        // TODO render the first one. get pile size

        return(
            <div className="board">
                <ul className="cards">
                {
                    // TODO send sequence number
                    piles.map(item => this.renderCard(item))
                }
                </ul>
                <ul className="deck">
                {
                    // TODO send sequence number
                    deck.map(item => this.renderCard(item))
                }
                </ul>
            </div>
        );
    }

}

class Game extends React.Component {
    render() {
        return(
            <div className="game">
                <Board />
            </div>
        );
    }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);