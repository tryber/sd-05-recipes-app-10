import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Explore from './pages/Explore';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/comidas" component={Comidas} />
        <Route exact path="/bebidas" component={Bebidas} />
        <Route exact path="/explore" component={Explore} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
