import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={login} />
        <Route exact path="/comidas" component={comidas} />
        <Route exact path="/bebidas" component={bebidas} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
