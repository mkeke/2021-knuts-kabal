import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';

import Board from './board';

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