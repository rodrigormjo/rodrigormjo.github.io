import React from 'react';
import Header from '../Components/Header';

class Result extends React.Component {
  constructor(props){
    super(props); 
    this.state ={ 
      loadBalls: [],
    }    
  }

  componentDidMount = () => {
    this.loadStorage();    
  }

  loadStorage = () => {
    const x = JSON.parse(localStorage.getItem('savedBalls'));
    const y = x.map((each) => parseInt(each, 10));    
    this.setState({loadBalls: y});
  }

  checkNumbers = () => {
    const check = this.state.loadBalls;
    let even = 0;  
    check.map((number) =>(number % 2 === 0) ? even += 1 : "");
    return even;
  }

  render(){
    // const {loadBalls} = this.state;
    this.checkNumbers();     
    const stringBalls = JSON.parse(localStorage.getItem('savedBalls'));
    return(
      <div className='pageStyle'>
        <Header />
        <div className='resultCol'>
          <span>Números escolhidos</span>
          <div className='resultLine'>
              <div className='balls'>{stringBalls[0]}</div>
              <div className='balls'>{stringBalls[1]}</div>
              <div className='balls'>{stringBalls[2]}</div>
              <div className='balls'>{stringBalls[3]}</div>
              <div className='balls'>{stringBalls[4]}</div>
              <div className='balls'>{stringBalls[5]}</div>
          </div>
          <div>
            {(this.checkNumbers() === 0)
              && <span className='epa'>Você possuí nenhum número par e 6 números ímpares.
                Menos de 1% dos sorteios sai com 6 números ímpares, melhor escolher de novo...
            </span > }
            {(this.checkNumbers() === 1)
              && <span className='epa'>Você possuí 1 número par e 5 números ímpares.
              9% das vezes o sorteio sai com esses valores, vamos escolher de novo?
            </span> }
            {(this.checkNumbers() === 2)
              && <span className='quase'>Você possuí 2 números pares e 4 números ímpares.
              24% das vezes o sorteio sai com esses valores, nada mal mas pode melhorar...
            </span> }
            {(this.checkNumbers() === 3)
              && <span className='top'>Você possuí 3 números pares e 3 números ímpares.
              31% das vezes o sorteio sai com esses valores, boa estratégia!
            </span> }
            {(this.checkNumbers() === 4)
              && <span className='quase'>Você possuí 4 números pares e 2 números ímpares.
              24% das vezes o sorteio sai com esses valores, nada mal mas pode melhorar...
            </span> }
            {(this.checkNumbers() === 5)
              && <span className='epa'>Você possuí 1 número par e 5 números ímpares.
              10% das vezes o sorteio sai com esses valores, vamos escolher de novo?
            </span> }
            {(this.checkNumbers() === 6)
              && <span className='epa'>Você possuí 6 números pares e nenhum número ímpar.
                Menos de 1% dos sorteios sai com 6 números pares, melhor escolher de novo...
            </span > }
            
          </div>
        </div>
      </div>
      
    );
  }
}

export default Result;
