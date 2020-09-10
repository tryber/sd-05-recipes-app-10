import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Explore from './pages/Explore';
import './App.css';
import { ReceitasContextProvider } from './Context/ReceitasContext';
import ExplorarComidasOuBebidas from './pages/ExplorarComidasOuBebidas';
import ExplorarComidasOuBebidasPorIngrediente from './pages/ExplorarComidasOuBebidasPorIngrediente';

function App() {
  return (
    <div className="meals">
        <BrowserRouter>
      <ReceitasContextProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/comidas" component={Comidas} />
            <Route exact path="/bebidas" component={Bebidas} />
            <Route exact path="/explorar" component={Explore} />
            <Route exact path="/explorar/comidas" component={ExplorarComidasOuBebidas} />
            <Route exact path="/explorar/comidas/ingredientes" component={ExplorarComidasOuBebidasPorIngrediente} />
            <Route exact path="/explorar/bebidas/ingredientes" component={ExplorarComidasOuBebidasPorIngrediente} />
          </Switch>
      </ReceitasContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
///explorar/comidas/ingredientes
// /explorar/bebidas/ingredientes