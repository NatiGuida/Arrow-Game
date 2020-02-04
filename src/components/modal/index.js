const React = require('react');
const Restart = require('../toolbar/restart');
const Twitter = require('../../img/twitter.png')
require('./styles.css');

class Modal extends React.PureComponent {
  render() {
    const { score, handleRePlayClick } = this.props;
    const twitt = `Mi score fue de: ${score} by @NatiGuidaa`;
    const href = `https://twitter.com/intent/tweet?button_hashtag=ArrowGame ${twitt}&ref_src=twsrc%5Etfw`;
    return (
      <section className='modal-container'>
        <div className='modal'>
          <span>Se acabo el tiempo!</span>
          <span>Tu puntaje fue de: <b>{score}</b></span>
          <div className='modal-button-container'>
            <a
              href={href}
              className='twitter-hashtag-button twitter-button'
              data-show-count='false'
              target='_blanck'
            >
              <img src={Twitter} alt='twitter' />
              Compartir
            </a>
            <script
              async
              src='https://platform.twitter.com/widgets.js'
              charset='utf-8'
            ></script>
            <Restart handleRePlayClick={handleRePlayClick} />
          </div>
        </div>
      </section>
    );
  }
}

module.exports = Modal;
