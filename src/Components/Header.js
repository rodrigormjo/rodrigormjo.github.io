import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/St.png'

class Header extends React.Component {
  constructor(props){
    super(props);    
    this.state ={
    color: 'red',
    mounted: false,
    }    
  }

  changeHex() {
    let hex = '#';
    const hexChart = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    for(let i = 0; i < 6; i+=1){
      const index = Math.floor(Math.random() * 16);
      hex += hexChart[index];
    }
    this.setState({color: hex});    
  }

  componentDidMount() {
    this.mounted = true;  
    setInterval(() => {
      if(this.mounted) {
        this.changeHex();    
        document.querySelector(".headerImg01").style.backgroundColor = this.state.color;
      }      
    }, 850);    
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render(){    
    return(
      <div  className='fixedStyle'>        
        <div className='imageStyle'>          
          <Link to="/pote" className='img01Style'>
            <img src={img} alt='goldPot' className='headerImg01' />
          </Link>          
          <div className='logoStyle'>
            <span className='titleStyle'>O Pote de Ouro</span>
            <span className='subtitleStyle'>Aumente suas chances de ganhar na loteria!</span>
            <div className='headerStyle'>              
              <Link to="/">
                <button className="linkStyle">Gerador</button>
              </Link>
              <Link to="/stats">
                <button className="linkStyle">Dicas</button>
              </Link>
              {/* <Link to="/closure">
                <button className="linkStyle">Fechamento</button>
              </Link> */}
            </div>
          </div>          
        </div>
      </div>
    );
  }
}

export default Header;
