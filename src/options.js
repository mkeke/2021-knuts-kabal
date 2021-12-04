import React from 'react';

export default class Options extends React.Component {

    render() {
        return(
            <nav>
                <button className="gear" href="#" onClick={ () => this.props.onClick() }></button>
                <ul className={ "options" + (this.props.visible ? " visible": "") }>
                    <li><button
                            className="undo" 
                            onClick={ () => this.props.handleUndo() }
                        ></button></li>
                    <li><button 
                            className={"hint" + (this.props.showHint?" active":"")}
                            onClick={ () => this.props.toggleHint() }
                        ></button></li>
                    <li><button 
                            className={"deal-all" + (this.props.dealAll?" active":"")}
                            onClick={ () => this.props.toggleDealAll() }
                        ></button></li>
                    <li><button
                            className="restart" 
                            onClick={ () => this.props.handleRestart() }
                        ></button></li>
                    <li><a rel="noreferrer" className="github" href="https://github.com/mkeke/2021-knuts-kabal" target="_blank"> </a></li>
                </ul>
            </nav>        
        );
    }
}