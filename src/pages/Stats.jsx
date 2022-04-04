import React from 'react';
import Header from '../Components/Header';
import { mega } from '../Mega';

class Stats extends React.Component {
  constructor(props){
    super(props);    
    this.state ={
      loading: false,
      ballCount: {},
    }
  }  

  componentDidMount = () => {
    this.mostProccedBalls();
    this.setState({loading: true});    
  }

  cartela = () => {
    let element = {};
    for (let i = 1; i < 61; i += 1) {
      if (i < 10) {
        const x = `0${i}`;
        element[x] = 0;
      }    
      if (i >= 10) {        
        element[i] = 0;
      } 
    }
    return element;
  };

  objectMap = (obj, fn) => Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  )

  ballProcCount = (ball) => {        
    let x = 0;
    mega.map(
      (key) => this.objectMap(key, v => (v === ball)? x += 1 : '')
    );    
    return x - 1;
  }

  mostProccedBalls = () => {
    let x = this.cartela();
    for (let i = 1; i < 61; i += 1) {
      if (i <10) {
        const y = `0${i}`;
        x[y] = this.ballProcCount(i);
      }
      if (i >= 10) {
        x[i] = this.ballProcCount(i);
      }
    }
    const topBalls = Object.entries(x).sort((a,b) => b[1]-a[1]);
    this.setState({ballCount: topBalls});
  }




  render(){
    const {loading, ballCount} = this.state;    
    return(
      <div className='pageStyle'>
        <Header />      
        <p>TOP 6 dezenas</p>
        <span>Mais sorteadas:</span>
        <div>          
          {loading && <div className='balls'>{ballCount[0][0]}</div>}
          {loading && <div className='balls'>{ballCount[1][0]}</div>}
          {loading && <div className='balls'>{ballCount[2][0]}</div>}
          {loading && <div className='balls'>{ballCount[3][0]}</div>}
          {loading && <div className='balls'>{ballCount[4][0]}</div>}
          {loading && <div className='balls'>{ballCount[5][0]}</div>}
        </div>
        <br />
        <span>Menos sorteadas:</span>
        <div>          
          {loading && <div className='balls'>{ballCount[ballCount.length - 1][0]}</div>}
          {loading && <div className='balls'>{ballCount[ballCount.length - 2][0]}</div>}
          {loading && <div className='balls'>{ballCount[ballCount.length - 3][0]}</div>}
          {loading && <div className='balls'>{ballCount[ballCount.length - 4][0]}</div>}
          {loading && <div className='balls'>{ballCount[ballCount.length - 5][0]}</div>}
          {loading && <div className='balls'>{ballCount[ballCount.length - 6][0]}</div>}
        </div>     
      </div>
    );
  }
}

export default Stats;
