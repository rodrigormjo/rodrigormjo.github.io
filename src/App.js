import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Closure from './pages/Closure';
import NotFound from './Components/NotFound';
import Result from './pages/Result';
import Pote from './pages/Pote';
import Stats from './pages/Stats';
import Memory from './Context/Memory';
import LuckyDay from './pages/LuckyDay';

class App extends React.Component {
  constructor(props){
    super(props);    
    this.state ={
    teste: 171,    
    }
  }

  increaseState = () => {
    const {teste} = this.state;    
    this.setState({teste: teste + 1})
  }

  decreaseState = () => {
    const {teste} = this.state;
    this.setState({teste: teste - 1})
  }
  
  render () {
    const contextMemory = {
      teste: this.state.teste,      
      increaseState: this.increaseState,
      decreaseState: this.decreaseState,
    }

    return (
      <>
        <Memory.Provider value={contextMemory}>
          <BrowserRouter basename="rodrigormjo.github.io">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/closure" component={ Closure } />
              <Route exact path="/lucky" component={ LuckyDay } />
              <Route  exact path="/stats" component={ Stats} />
              <Route  exact path="/result" component={ Result } />
              <Route  exact path="/pote" component={ Pote } />
              <Route path="*" component={ NotFound } />
            </Switch>
          </BrowserRouter>
        </Memory.Provider> 
      </> 
    );
  }
}

export default App;
