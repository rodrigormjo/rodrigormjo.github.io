import React from 'react';
import Header from './Header';

class NotFound extends React.Component {
  render(){
    return(
      <div className='pageStyle'>
        <Header />
        <p>Página não encontrada</p>         
      </div>
    );
  }
}

export default NotFound;
