import React from 'react';

export default class Card extends React.Component {
    getSymbol(s) {
        return {
            hearts: '\u2665',
            diamonds: '\u2666',
            clubs: '\u2663',
            spades: '\u2660',
            nbsp: '\u00A0',
        }[s];
    }
    getRank(r) {
        switch(r) {
            case 1: 
                return "A";
            case 11: 
                return "J";
            case 12: 
                return "Q";
            case 13: 
                return "K"; 
            default:
                return r;
        }
    }
    getStatusClass(s) {
        switch(s) {
            case 1: 
                return "sel";
            case 2: 
                return "opt";
            default:
                return "nah";
        }
    }
    getFaceClass(f) {
        return f ? "" : "back";
    }

    render() {
        return(
            <li
                style={{opacity: this.props.item.opacity}}
                className={`
                    ${this.props.item.suit}
                    ${this.getStatusClass(this.props.item.status)} 
                    ${this.getFaceClass(this.props.item.face)}
                `}
                onClick={ ()=>this.props.onClick() }>

                {this.props.item.face ? (
                    <span>
                        {this.getSymbol(this.props.item.suit)}<br />
                        {this.getRank(this.props.item.rank)}
                    </span>
                ) : (
                    <span>
                        {this.getSymbol("nbsp")}<br />
                        ({this.props.remaining})
                    </span>
                )}
            </li>
        );
    }
}
