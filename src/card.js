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

    render() {
        // TODO improve direct array lookup
        return(
            <li
                style={{opacity: this.props.item.opacity}}
                className={`${this.props.item.suit} ${["nah","sel","opt"][this.props.item.status]} ${this.props.face?"":"back"}`}
                onClick={ ()=>this.props.onClick() }>

                {this.props.item.face ? (
                    <span>
                        {this.getSymbol(this.props.item.suit)}<br />
                        {this.props.item.rank}
                    </span>
                ) : (
                    <span>
                        deck<br />
                        {this.getSymbol("nbsp")}
                    </span>
                )}
            </li>
        );
    }
}
