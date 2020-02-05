import React from 'react';
import './styles.css';

export default class Accountant extends React.PureComponent {
  render() {
    const { timer } = this.props;
    const seconds = timer !== 10 ? `0${timer}` : timer;
    const formatedTimer = `00:00:${seconds}`;
    return (
      <section className='accountant-container'>
        {formatedTimer}
      </section>
    );
  }
}

