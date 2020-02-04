const React = require('react');
const Accountant = require('./accountant');
const Restart = require('./restart');
require('./styles.css');

class Toolbar extends React.PureComponent {
  render() {
    const { timer, handleRePlayClick, desabledRePlay } = this.props;
    return (
      <section className='toolbar-container'>
        <Accountant timer={timer}/>
        <Restart 
          handleRePlayClick={handleRePlayClick}
          desabledRePlay={desabledRePlay}
        />
      </section>
    );
  }
}

module.exports = Toolbar;
