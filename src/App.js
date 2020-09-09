import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/comidas" component={comidas} />
          <Route exact path="/bebidas" component={bebidas} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
