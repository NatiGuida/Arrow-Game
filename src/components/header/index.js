const React = require('react');
require('./styles.css');

class Header extends React.PureComponent {
  render() {
    return (
      <section>
        <h1>
          Arrows Game
        </h1>
        <p>
          Arrows Game es un mini juego creado por <a href='https://www.twitter.com/framlopez_' target='_blanck'>@Framlopez_</a> y en esta ocasion decidi crear mi version, espero que les guste.</p>
      </section>
    );
  }
}

module.exports = Header;
