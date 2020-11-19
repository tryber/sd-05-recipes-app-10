import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import DetalhesComida from './pages/DetalhesComida';
import Explore from './pages/Explore';
import Perfil from './pages/Perfil';
import './App.css';
import { ReceitasContextProvider } from './Context/ReceitasContext';
// import ExplorarComidasOuBebidas from './pages/ExplorarComidas';
import ExplorarComidasOuBebidasPorIngrediente from './pages/ExplorarComidasOuBebidasPorIngrediente';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarComidasOuBebidasPorArea from './pages/ExplorarComidasOuBebidasPorArea';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import ReceitasProcesso from './pages/ReceitasProcesso';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="meals">
      <BrowserRouter>
        <ReceitasContextProvider>
          <Switch>
            <Route exact path="/teste" component={Login} />
            <Route exact path="/comidas" component={Comidas} />
            <Route exact path="/bebidas" component={Bebidas} />
            <Route exact path="/comidas/:idMeal" component={DetalhesComida} />
            <Route path="/comidas/:id/in-progress" component={ReceitasProcesso} />
            <Route path="/bebidas/:id/in-progress" component={ReceitasProcesso} />
            <Route exact path="/explorar" component={Explore} />
            <Route exact path="/explorar/bebidas" component={ExplorarBebidas} />
            <Route exact path="/explorar/comidas" component={ExplorarComidas} />
            <Route
              exact
              path="/explorar/comidas/ingredientes"
              component={ExplorarComidasOuBebidasPorIngrediente}
            />
            <Route
              exact
              path="/explorar/bebidas/ingredientes"
              component={ExplorarComidasOuBebidasPorIngrediente}
            />
            <Route
              exact
              path="/explorar/comidas/area"
              component={ExplorarComidasOuBebidasPorArea}
            />
            <Route
              exact
              path="/explorar/bebidas/area"
              component={NotFound}
            />
            <Route exact path="/perfil" component={Perfil} />
            <Route exact path="/receitas-feitas" component={ReceitasFeitas} />
            <Route exact path="/receitas-favoritas" component={ReceitasFavoritas} />
            <Route path="/bebidas/:id" component={DetalhesComida} />
            <Route path="/comidas/:id" component={DetalhesComida} />

          </Switch>
        </ReceitasContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
