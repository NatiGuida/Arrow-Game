const React = require("react");
const Restart = require("../toolbar/restart");
require("./styles.css");

class Modal extends React.PureComponent {
  render() {
    const { score, handleRePlayClick } = this.props;
    const twitt = `Tu score: ${score}`;
    const href = `https://twitter.com/intent/tweet?button_hashtag=ArrowGame ${twitt}&ref_src=twsrc%5Etfw`;
    return (
      <section className="modal-container">
        <div className="modal">
          <span>Se acabo el tiempo!</span>
          <span>Tu puntaje fue de : {score}</span>
          <Restart 
            handleRePlayClick={handleRePlayClick}
          />
          <a
            href={href}
            class="twitter-hashtag-button"
            data-show-count="false"
            target="_blanck"
          >
            Compartir
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </section>
    );
  }
}

module.exports = Modal;
