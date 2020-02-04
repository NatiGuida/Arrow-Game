import React from 'react';
import BestScore from './best-score';
import GameScore from './game-score';
import  './styles.css';

export default class Score extends React.PureComponent {
  render() {
    const { score, lastScore } = this.props;
    return (
      <section className='score-container'>
        <BestScore lastScore={lastScore} />
        <GameScore score={score} />
      </section>
    );
  }
}
