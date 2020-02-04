const React = require('react');
require('./styles.css');

class Accountant extends React.PureComponent {
  render() {
    const { timer } = this.props;
    return (
      <section className='accountant-container'>
        00:00:
        {timer !== 10 && 0}
        {timer}
      </section>
    );
  }
}

module.exports = Accountant;
