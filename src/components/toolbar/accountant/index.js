import React from 'react';
import './styles.css';

export default class Accountant extends React.PureComponent {
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

