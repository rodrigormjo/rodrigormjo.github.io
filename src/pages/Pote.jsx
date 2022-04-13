import React from 'react';
import Header from '../Components/Header';

class Pote extends React.Component {
  constructor(props){
    super(props);    
    this.state ={
    gag: 7,
    }
  } 

  RNG = () => {
    const x = Math.floor(Math.random() * 5);    
    return x;
  }

  componentDidMount = () => {
    const y = this.RNG();
    this.setState({gag: y});
  }

  render(){
    const {gag} = this.state;
    return(
      <div className='pageStyle'>
        <Header />
        {(gag === 0) && <span>Caramba! Como você veio parar aqui?</span> }
        {(gag === 1) && <span>Não seria melhor ir assistir o filme do Pelé?</span> }
        {(gag === 2) && <span>Uma cerveja gelada cai bem! Você cair aqui não...</span> }
        {(gag === 3) && <span>O segredo da vida é...Ah peraí você clicou no lugar errado</span> }
        {(gag === 4) && <span>Erro 404. Que diabéisso?</span> }
      </div>
    );
  }
}

export default Pote;
