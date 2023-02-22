import React from "react";
import { Route, Switch, Redirect } from "react-router";
import "./App.css";
import { Home } from "./pages/Home";
import { Main } from "./pages/Main";
import { PokemonCreate } from "./pages/PokemonCreate";
import { PokemonDetail } from "./pages/PokemonDetail";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>  {/*se encarga de renderizar solo la primera Route que coincida con la URL actual*/}
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:id" component={PokemonDetail} />
        <Route exact path="/create" component={PokemonCreate} />
        <Route exact path="/notFound" component={NotFound} />
        <Redirect from="*" to="/notFound" />  {/*redirección desde cualquier otra URL que no coincida con las rutas anteriores a la URL /notFound.*/}
      </Switch>
    </div>
  );
}

export default App;
