import React from 'react';

export default class Options extends React.Component {

    render() {
        return(
            <nav>
                <button className="gear" href="#" onClick={ () => this.props.onClick() }></button>
                <ul className={ "options" + (this.props.visible ? " visible": "") }>
                    <li><button className="restart" onClick={ () => this.props.handleRestart() }></button></li>
                    <li><a rel="noreferrer" className="github" href="https://github.com/mkeke/2021-knuts-kabal" target="_blank"> </a></li>
                </ul>
            </nav>        
        );
    }
}