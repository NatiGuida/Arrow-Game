import React from 'react';
import Up from './arrows/up';
import Right from './arrows/right';
import Down from './arrows/down';
import Left from './arrows/left';
import './styles.css';

export default class Game extends React.PureComponent {
  constructor(props) {
    super(props);

    this.randomKey = this.randomKey.bind(this);
    this.randomImg = this.randomImg.bind(this);

    this.arrows = [
      {
        id: 'up',
        icon: <Up />
      },
      {
        id: 'right',
        icon: <Right />
      },
      {
        id: 'down',
        icon: <Down />
      },
      {
        id: 'left',
        icon: <Left />
      }
    ];

    this.state = {
      position: this.randomKey(),
      success: null
    };
  }

  componentWillReceiveProps(nextProps) {
    const { position } = this.state;
    const {
      activeKey,
      isKeyPress,
      run,
      lastKey,
      lastKeyAvailable,
      setAvailableLastKey,
      lostPointScore,
      addPointScore
    } = nextProps;
    const indice = position[0];

    if (!run) return null;

    const arrowId = this.arrows[indice].id;

    if (isKeyPress && activeKey) {
      if (arrowId === activeKey) {
        this.setState({
          success: true
        });
      } else {
        this.setState({
          success: false
        });
      }
    } else if (!isKeyPress && lastKey) {
      if (lastKeyAvailable) {
        if (arrowId === lastKey) {
          position.shift();
          position.push(this.randomImg());
          addPointScore();
        } else {
          lostPointScore();
        }
        setAvailableLastKey();
      }
    }
  }

  randomImg() {
    return Math.floor(Math.random() * this.arrows.length);
  }

  randomKey() {
    const random = [];
    for (let i = 0; i < 6; i++) {
      random.push(this.randomImg());
    }

    return random;
  }

  render() {
    const { position, success } = this.state;
    const { isKeyPress, run } = this.props;

    return (
      <section className='game-container'>
        {position.map((i, key) => {
          let className = null;
          const arrowIcon = this.arrows[i].icon;

          if (key === 0 && isKeyPress && run) {
            className = success ? 'key-success' : 'key-fail';
          }

          return (
            <div className={className} key={key}>
              {arrowIcon}
            </div>
          );
        })}
      </section>
    );
  }
}
