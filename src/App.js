import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Unfolding from './pages/Unfolding';
import Closure from './pages/Closure';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/closure" component={ Closure } />
          <Route  exact path="/unfolding" component={ Unfolding } />
          <Route path="*" component={ NotFound } />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
