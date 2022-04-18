import React from 'react';
import Memory from '../Context/Memory';

class Lucky extends React.Component {
  render () {
    return (
      <Memory.Consumer>
        {
          value => (
            <div>
              <div>{value.teste}</div>
              <button type='button' onClick={value.increaseState}>+</button>
              <button type='button' onClick={value.decreaseState}>-</button>
            </div>              
          )
        }        
      </Memory.Consumer>
    )
  }
}

export default Lucky;
