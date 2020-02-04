import React from 'react';
import Star from '../../../img/brillante.png';
import './styles.css';

export default class BestScore extends React.PureComponent {

  render() {
    const localScore = localStorage.getItem('bestScore');

    return (
      <section className='best-score-container'>
        <div className='best'>
          <img src={Star} alt='best' />
          Mejor puntuacion
        </div>
        <div className='score'>
          {localScore === null ? (
            0
          ) : (
            <React.Fragment>{localScore} </React.Fragment>
          )}
        </div>
      </section>
    );
  }
}

