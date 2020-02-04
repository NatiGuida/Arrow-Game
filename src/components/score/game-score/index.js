const React = require("react");
const Check = require('../../../img/garrapata.png')
require("./styles.css");

class GameScore extends React.PureComponent {
  render() {
    const { score } = this.props; 
    return (
      <section className="game-score-container">
        <div className="point">
          <img src={Check} alt='point' />
          Puntuacion del juego
        </div>
        <div className="score">{score}</div>
      </section>
    );
  }
}

module.exports = GameScore;
