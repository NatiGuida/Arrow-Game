import React from 'react';
import Check from '../../../img/garrapata.png';
import './styles.css';

export default class GameScore extends React.PureComponent {
  render() {
    const { score } = this.props; 
    return (
      <section className='game-score-container'>
        <div className='point'>
          <img src={Check} alt='point' />
          Puntuacion del juego
        </div>
        <div className='score'>{score}</div>
      </section>
    );
  }
}

