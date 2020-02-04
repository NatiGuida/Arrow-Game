const React = require('react');
const Star = require('../../../img/brillante.png')
require('./styles.css');

class BestScore extends React.PureComponent {
  render() {
    const { lastScore } = this.props;
    return (
      <section className='best-score-container'>
        <div className='best'>
          <img src={Star} alt='best' />
          Mejor puntuacion
        </div>
        <div className='score'>
          {lastScore}
        </div>
      </section>
    );
  }
}

module.exports = BestScore;
