import React from 'react';
import Clover from '../Components/Clover';
import Header from '../Components/Header';
import leprechaun from '../images/leprechaun.png';
import {Redirect} from 'react-router-dom';

class Home extends React.Component {
  constructor(props){
    super(props);    
    this.state ={
    balls: [],
    loading: false,
    mounted: false,
    roll: false,
    }
  }
  
  ballCheck = (selectBall) => {    
    const x = document.getElementById(selectBall.target.innerText);

    if (x.style.backgroundColor === "red") {
      x.style.backgroundColor = "purple";
      let newBalls = this.state.balls.filter((event) =>(event!==selectBall.target.innerText)).sort();
      this.setState({balls: newBalls});
      return null;    
    }

    if (this.state.balls.length >= 6) {
      alert('mais de 6 bolas!');    
      return null;
    }
    
    x.style.backgroundColor = "red";    
    const intBalls = [...this.state.balls, x.innerText].sort();
    this.setState({balls: intBalls});
  }

  componentDidMount = () => {
    this.setState({mounted: true}) 
  }

  componentDidUpdate = () => {    
    if (this.state.balls.length >= 6 && this.state.mounted) {
      localStorage.setItem('savedBalls', `${JSON.stringify(this.state.balls)}`); 
      setTimeout(() => (this.setState({loading: true, mounted: false})), 2500);
    }
    if (this.state.balls.length >= 6 && this.state.mounted) {
      document.querySelector(".helloText").innerHTML = "Barabam!"
      setTimeout(() => (this.setState({roll: true, mounted: false})), 100);      
    }
  }

  componentWillUnmount = () => {
    this.setState({loading: false, mounted: false});
  }

  render(){    
    const {loading, roll} = this.state;
    return(
      <div className='pageStyle'>  
        <Header />        
        <div className='homeHello'>          
          <img src={leprechaun} alt='leprechaun' className={`${roll ? "roll" : "img01"}`} />
          <div className='helloText'>
            <span>Bem-vindo ao Pote de Ouro!</span>
            <span>Que tal uma ajudinha com seu bilhete da Mega Sena?</span>
          </div>
        </div>
        <div>Escolha seis números nas bolas abaixo:</div>
        <Clover
          pushButton={this.ballCheck}
        />
        {(loading) && <Redirect to="/result" />}
      </div>
    );
  }
}

export default Home;
