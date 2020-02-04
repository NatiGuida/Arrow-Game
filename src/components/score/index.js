const React = require('react');
const BestScore = require('./best-score');
const GameScore = require('./game-score');
require('./styles.css');

class Score extends React.PureComponent {
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

module.exports = Score;
