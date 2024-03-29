import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../actions";

export const Clean = () => {
  const pokeFilter = useSelector((state) => state.pokemonsFilter);
  const dispatch = useDispatch();

// se renderiza el botón "Clean" y se muestra sólo si hay filtros aplicados, 
// cuando se hace clic, se envía una acción al store de Redux para obtener todos los pokemons y 
// se actualiza la lista de pokemons en la pantalla.
  return (
    <div>
      {(pokeFilter.length > 0 || !Array.isArray(pokeFilter)) && (
        <div className="cleanContainer">
          <button
            className="cleanFilter"
            onClick={() => dispatch(getPokemons())}
          >
            Clean
          </button>
        </div>
      )}
    </div>
  );
};
