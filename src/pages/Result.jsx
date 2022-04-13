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

  sumNumbers = () => {
    const balls = this.state.loadBalls;
    let sum = 0;  
    balls.map((number) => sum += parseInt(number, 10));
    return sum;
  }



  render(){
    // const {loadBalls} = this.state;        
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
          <br />
          <div>
            {(this.checkNumbers() === 0)
              && <span className='epa'>&#9940; Você possuí nenhum número par e 6 números ímpares.
                Só 1% dos sorteios sai com 6 números ímpares, melhor escolher de novo...                
            </span > }
            {(this.checkNumbers() === 1)
              && <span className='epa'>&#9940; Você possuí 1 número par e 5 números ímpares.
              9% das vezes o sorteio sai com esses valores, vamos escolher de novo?
            </span> }
            {(this.checkNumbers() === 2)
              && <span className='quase'>&#9899; Você possuí 2 números pares e 4 números ímpares.
              24% das vezes o sorteio sai com esses valores, nada mal mas pode melhorar...
            </span> }
            {(this.checkNumbers() === 3)
              && <span className='top'>&#9989; Você possuí 3 números pares e 3 números ímpares.
              31% das vezes o sorteio sai com esses valores, boa estratégia!
            </span> }
            {(this.checkNumbers() === 4)
              && <span className='quase'>&#9899; Você possuí 4 números pares e 2 números ímpares.
              24% das vezes o sorteio sai com esses valores, nada mal mas pode melhorar...
            </span> }
            {(this.checkNumbers() === 5)
              && <span className='epa'>&#9940; Você possuí 1 número par e 5 números ímpares.
              10% das vezes o sorteio sai com esses valores, vamos escolher de novo?
            </span> }
            {(this.checkNumbers() === 6)
              && <span className='epa'>Você possuí 6 números pares e nenhum número ímpar.
                Menos de 1% dos sorteios sai com 6 números pares, melhor escolher de novo...
            </span > }            
          </div>
          <br />
          <div>
            {(this.sumNumbers() <= 117)
              && <span className='epa'>&#9940; A soma dos números escolhidos está abaixo de 117.
              Essa soma ocorre apenas 5% dos sorteios. Melhor escolher de novo...
            </span > }
            {(this.sumNumbers() >= 118 && this.sumNumbers() <= 150)
              && <span className='quase'>&#9899; A soma dos números escolhidos está entre 118 e 150.
              Apenas 17% dos sorteios sai com essa combinação. Quase bom...tente mais uma vez.
            </span > }
            {(this.sumNumbers() >= 151 && this.sumNumbers() <= 183)
              && <span className='top'>&#9989; A soma dos números escolhidos está entre 151 e 183.
              Essa combinação ocorre 28% dos sorteios. Agora ficou muito bom!
            </span > } 
            {(this.sumNumbers() >= 184 && this.sumNumbers() <= 216)
              && <span className='top'>&#9989; A soma dos números escolhidos está entre 184 e 216.
              Essa combinação ocorre 29% dos sorteios. Excelente!
            </span > }
            {(this.sumNumbers() >= 219 && this.sumNumbers() <= 249)
              && <span className='quase'>&#9899; A soma dos números escolhidos está entre 217 e 249.
              Os sorteios ficam em 16% com essa combinação. Nem bom, nem ruim...
            </span > }
            {(this.sumNumbers() >= 250)
              && <span className='epa'>&#9940; A soma dos números escolhidos está acima de 250.
              Essa soma ocorre apenas 5% dos sorteios. Melhor escolher de novo...
            </span > }
          </div>          
        </div>
      </div>
      
    );
  }
}

export default Result;
