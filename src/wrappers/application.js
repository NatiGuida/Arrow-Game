import React from 'react';
import Header from '../components/header';
import Toolbar from '../components/toolbar';
import Game from '../components/game';
import Score from '../components/score';
import Modal from '../components/modal';
import Footer from '../components/footer';
import './styles.css';

const initialTimer = 10; 

export default class Application extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      timer: initialTimer,
      desabledPlay: false,
      desabledRePlay: true,
      run: false,
      activeKey: '',
      isKeyPress: false,
      lastKey: '',
      lastKeyAvailable: false,
      score: 0,
      lastScore: 0
    };

    this.setAvailableLastKey = this.setAvailableLastKey.bind(this);
    this.handleRePlayClick = this.handleRePlayClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.lostPointScore = this.lostPointScore.bind(this);
    this.addPointScore = this.addPointScore.bind(this);
    this.bestScore = this.bestScore.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', e => {
      const { run, timer } = this.state;

      if (
        !run &&
        timer !== 0 &&
        (e.keyCode === 38 ||
          e.keyCode === 39 ||
          e.keyCode === 40 ||
          e.keyCode === 37)
      ) {
        this.handlePlayClick();
      }

      const lastKeyPress = {
        lastKeyAvailable: true,
        isKeyPress: true,
      };

      switch (e.keyCode) {
        case 38:
          lastKeyPress.activeKey = 'up'
          break;
        case 39:
          lastKeyPress.activeKey = 'right'
          break;
        case 40:
          lastKeyPress.activeKey =  'down'
          break;
        case 37:
          lastKeyPress.activeKey = 'left'
          break;
        default:
          break;
      }
      this.setState({
        ...lastKeyPress,
      });
    });

    document.addEventListener('keyup', e => {
      const activeKeyPress = {
        activeKey: null,
        isKeyPress: false,
      };

      switch (e.keyCode) {
        case 38:
          activeKeyPress.lastKey = 'up'
          break;
        case 39:
          activeKeyPress.lastKey = 'right'
          break;
        case 40:
          activeKeyPress.lastKey = 'down'
          break;
        case 37:
          activeKeyPress.lastKey = 'left'
          break;
        default:
          break;
      }

      this.setState({
        ...activeKeyPress,
      });
    });
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({
        timer: this.state.timer - 1
      });
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState({
      run: false
    });
    this.bestScore();
  }

  bestScore() {
    const { score } = this.state;
    const localScore = localStorage.getItem('bestScore');

    if (score > localScore) {
      localStorage.setItem('bestScore', score);
      this.setState({
        lastScore: score
      });
    } else {
      localStorage.setItem('bestScore', localScore);
    }
  }

  handleRePlayClick() {
    this.stopTimer();
    this.setState({
      timer: initialTimer,
      desabledRePlay: true,
      desabledPlay: false,
      score: 0
    });
  }

  handlePlayClick() {
    this.startTimer();
    this.setState({
      desabledRePlay: false,
      desabledPlay: true,
      run: true
    });
  }

  setAvailableLastKey() {
    this.setState({
      lastKeyAvailable: false
    });
  }

  lostPointScore() {
    const { score } = this.state;
    this.setState({
      score: score - 1
    });
  }

  addPointScore() {
    const { score } = this.state;
    this.setState({
      score: score + 1
    });
  }

  render() {
    const {
      timer,
      desabledRePlay,
      activeKey,
      isKeyPress,
      run,
      lastKey,
      lastKeyAvailable,
      score,
      lastScore
    } = this.state;

    if (timer === 0 && run) {
      this.stopTimer();
    }

    const finishGame = timer !== initialTimer && !run;

    return (
      <React.Fragment>
        {finishGame && <div className='invisible-cap' />}
        <section className='application-container'>
          <Header />
          <Toolbar
            timer={timer}
            handleRePlayClick={this.handleRePlayClick}
            desabledRePlay={desabledRePlay}
          />
          <Game
            activeKey={activeKey}
            isKeyPress={isKeyPress}
            run={run}
            lastKey={lastKey}
            lastKeyAvailable={lastKeyAvailable}
            setAvailableLastKey={this.setAvailableLastKey}
            lostPointScore={this.lostPointScore}
            addPointScore={this.addPointScore}
          />
          <Score score={score} lastScore={lastScore} />
          {finishGame && (
            <Modal 
              score={score} 
              handleRePlayClick={this.handleRePlayClick}
            />
          )}
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}
