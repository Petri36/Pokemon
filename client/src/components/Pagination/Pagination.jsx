import React, { useState } from "react";
import "./paginator.scss";

export const Pagination = ({ pokeTotal, setPokeCurrent }) => {
  const cards = 9;
  const [currentPag, setCurrentPag] = useState(0); // cambiar el número de la página que se muestra cuando el usuario hace clic en un botón de paginación.

  const next = () => {
    const totalPoke = pokeTotal.length;
    const next = currentPag + 1; // avanzar a la siguiente página en la lista de Pokemon.
    const index = next * cards;
    if (index > totalPoke) return;
    setPokeCurrent([...pokeTotal].splice(index, cards));
    setCurrentPag(next);
  };

  const prev = () => { // retroceder a la página anterior en la lista de Pokemon.
    const prev = currentPag - 1;
    if (prev < 0) return;
    const index = prev * cards;
    setPokeCurrent([...pokeTotal].splice(index, cards));
    setCurrentPag(prev);
  };

  return (
    <div>
      <div className="prev-next">
        <button onClick={() => prev()}>Prev</button>
        <label> {currentPag + 1} </label>
        <button onClick={() => next()}>Next</button>
      </div>
    </div>
  );
};
