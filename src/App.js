import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Closure from './pages/Closure';
import NotFound from './Components/NotFound';
import Result from './pages/Result';
import Pote from './pages/Pote';
import Stats from './pages/Stats';

function App() {  
  return (    
    <>      
      <BrowserRouter basename="/https://rodrigormjo.github.io">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/closure" component={ Closure } />
          <Route  exact path="/stats" component={ Stats} />
          <Route  exact path="/result" component={ Result } />
          <Route  exact path="/pote" component={ Pote } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </>    
  );
}

export default App;
