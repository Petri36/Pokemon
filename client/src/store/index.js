import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducer/index.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// crea una instancia del store de Redux con un middleware adicional llamado thunk que se utiliza para manejar 
// acciones asíncronas y una herramienta llamada Redux DevTools que permite el seguimiento y la depuración de la aplicación de Redux en el navegador.

export default store;
