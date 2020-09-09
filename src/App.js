import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Explore from './pages/Explore';
import { ReceitasContextProvider } from './Context/ReceitasContext';

function App() {
  return (
    <div className="meals">
      <ReceitasContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/comidas" component={Comidas} />
            <Route exact path="/bebidas" component={Bebidas} />
            <Route exact path="/explorar" component={Explore} />
          </Switch>
        </BrowserRouter>
      </ReceitasContextProvider>
    </div>
  );
}

export default App;
