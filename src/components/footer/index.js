const React = require('react');
require('./styles.css');

class Footer extends React.PureComponent {
  render() {
    return (
      <section className="footer-container">
        Follow me on Twitter <a href='https://www.twitter.com/natiguidaa' target='_blanck'>@NatiGuidaa</a>
      </section>
    );
  }
}

module.exports = Footer;
