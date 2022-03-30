import React from 'react';
import Header from '../Components/Header';

class Home extends React.Component {  
  render(){
    return(
      <div className='pageStyle'>
      <Header />
      <p>Página Principal</p>
      </div>
    );
  }
}

export default Home;
