import React from 'react';
import Accountant from'./accountant';
import Restart from'./restart';
import './styles.css';

export default class Toolbar extends React.PureComponent {
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

