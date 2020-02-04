const React = require('react');
const Header = require('../components/header');
const Toolbar = require('../components/toolbar');
const Game = require('../components/game');
const Score = require('../components/score');
const Modal = require('../components/modal');
const Footer = require('../components/footer');
require('./styles.css');

class Application extends React.PureComponent {
  constructor(props) {
    super(props); 

    this.state = {
      timer: 10,
      desabledPlay: false,
      desabledRePlay: true,
      run: false, 
      activeKey: '',
      isKeyPress: false,
      lastKey: '',
      lastKeyAvailable: false,
      score: 0,
      lastScore: 0,
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
    document.addEventListener('keydown', (e) => {
      const { run, timer } = this.state;

      if (!run && timer !== 0 && (e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 37) ) {
        this.handlePlayClick();
      }

      switch (e.keyCode) {
        case 38:
          this.setState({
            activeKey: 'up',
            isKeyPress: true,
            lastKeyAvailable: true,
          });
          break;
        case 39:
          this.setState({
            activeKey: 'right',
            isKeyPress: true,
            lastKeyAvailable: true,
          });
          break;
        case 40:
          this.setState({
            activeKey: 'down',
            isKeyPress: true,
            lastKeyAvailable: true,
          });
          break;
        case 37:
          this.setState({
            activeKey: 'left',
            isKeyPress: true,
            lastKeyAvailable: true,
          });
          break;
        default:
          break;
      }
    })

    document.addEventListener('keyup', (e) => {
      switch (e.keyCode) {
        case 38:
          this.setState({
            activeKey: null,
            isKeyPress: false,
            lastKey: 'up',
          });
          break;
        case 39:
          this.setState({
            activeKey: null,
            isKeyPress: false,
            lastKey: 'right',
          });
          break;
        case 40:
          this.setState({
            activeKey: null,
            isKeyPress: false,
            lastKey: 'down',
          });
          break;
        case 37:
          this.setState({
            activeKey: null,
            isKeyPress: false,
            lastKey: 'left',
          });
          break;
        default:
          break;
      }
    })
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
      run: false,
    });
    this.bestScore();
  }

  bestScore() {
    const { score, lastScore } = this.state;
    localStorage.setItem('bestScore', lastScore);
    const localScore = localStorage.getItem('bestScore');

    if(score > localScore) {
      localStorage.setItem('bestScore', score);
      this.setState({
        lastScore: score,
      });
    } else {
      localStorage.setItem('score', localScore);
    }
  }

  handleRePlayClick() {
    this.stopTimer();
    this.setState({
      timer: 10,
      desabledRePlay: true,
      desabledPlay: false,
      score: 0,
    });
  }

  handlePlayClick() {
    this.startTimer();
    this.setState({
      desabledRePlay: false,
      desabledPlay: true,
      run: true,
    });
  }

  setAvailableLastKey() {
    this.setState({
      lastKeyAvailable: false,
    });
  }

  lostPointScore() {
    const { score } = this.state;
    this.setState({
      score: score - 1,
    });
  }

  addPointScore() {
    const { score } = this.state;
    this.setState({
      score: score + 1,
    });
  }

  render() {
    const { timer, desabledRePlay, activeKey, isKeyPress, run, lastKey, lastKeyAvailable, score, lastScore } = this.state;

    if (timer === 0 && run) {
      this.stopTimer();
    }

    return (
      <React.Fragment>
        {timer !== 10 && !run && 
          <div className="invisible-cap" />
        }
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
          <Score 
            score={score}
            lastScore={lastScore}
          />
          {timer !== 10 && !run && 
            <Modal 
              score={score}
              handleRePlayClick={this.handleRePlayClick}
            />
          }
          <Footer />
        </section>
      </React.Fragment>
    );
  }
}

module.exports = Application;
