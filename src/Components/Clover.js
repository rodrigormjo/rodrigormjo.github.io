import React from 'react';
import PropTypes from 'prop-types';

export default class Clover extends React.Component {
  constructor(){
    super();   
    this.state ={
    balls: [],
    }    
  }

  cartela = () => {
    let element = [];
    for (let i = 1; i < 61; i += 1) {
      if(i < 10) {
        element.push(`0${i}`);
      }
      if(i >= 10) {
        element.push(i.toString());
      }
    }
    return element;
  };  

  render() {
    const {pushButton} = this.props;  
    return(      
      <div className='ballKeeper'>      
          {this.cartela().map((element) => (<div
          key={`Id${element}`}
          id={element}
          className="balls"    
          onClick={pushButton}          
          >
            {element}
          </div>))}
      </div>
    );
  }  
}

Clover.propTypes = {
  pushButton: PropTypes.func.isRequired,
};
