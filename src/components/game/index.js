import React from 'react';
import Up from './arrows/up';
import Right from './arrows/right';
import Down from './arrows/down';
import Left from './arrows/left';
import  './styles.css';

export default class Game extends React.PureComponent {

  constructor(props) {
    super(props); 

    this.randomKey = this.randomKey.bind(this);
    this.randomImg = this.randomImg.bind(this);

    this.arrows = [
      {
        id: 'up',
        icon: <Up />,
      },
      {
        id: 'right',
        icon: <Right />,
      },
      {
        id: 'down',
        icon: <Down />,
      },
      {
        id: 'left',
        icon: <Left />,
      }
    ];

    this.state = {
      position: [],
      success: null
    };
  }
  
  /*
  * TODO: Esto es necesario ?
  */

 componentDidMount() { 
   this.randomKey();
  }
  
  componentWillReceiveProps(nextProps) {
    const { position } = this.state;
    const { activeKey, isKeyPress, run, lastKey, lastKeyAvailable, setAvailableLastKey, lostPointScore, addPointScore } = nextProps;
    const indice = position[0];


    if (!run) return null;

    if (isKeyPress && activeKey) {
      if (this.arrows[indice].id === activeKey) {
        this.setState({
          success: true,
        });
      } else {
        this.setState({
          success: false,
        });
      }
    } else if (!isKeyPress && lastKey) {
      if (this.arrows[indice].id === lastKey && lastKeyAvailable) {
        position.shift();
        position.push(this.randomImg());
        setAvailableLastKey();
        addPointScore();
      } else if (lastKeyAvailable) {
        setAvailableLastKey();
        lostPointScore();
      }
    }
  }

  /*
   * TODO: Podemos usar get random()
   * TODO: No puedo agregar un solo random. Dividir lógica.
   * TODO: No está parametrizable la variable de cantidad
   * TODO: Mejorar nombre de variables
   * TODO: Revisar que estamos guardando en position. No se puede simplificar la lógica?
   */

  randomImg() {
    return Math.floor(Math.random()*this.arrows.length);
  }
  
  randomKey() {
    const random = [];
    for (let i = 0; i < 6; i++) {
      random.push(this.randomImg());
    };
    this.setState({
      position: random,
    });
  }

  /*
   * TODO: Simplificar sintaxis de la función
   * TODO: Consumir directamente arrows (relación con cómo guardamos los datos en getRandom)
   */

  render() {
    const { position, success } = this.state;
    const { isKeyPress, run } = this.props;

    return (
      <section className='game-container'>
        {position.map((i, key) => {
          const className = success ? 'key-success' : 'key-fail';

          return (key === 0 && isKeyPress && run) ? (
            <div className={className} key={key}>
              {this.arrows[i].icon}
            </div>
          ) : (
            <div key={key}>
              {this.arrows[i].icon}
            </div>
          );
        })}
      </section>
    );
  }
}

