import React, { useState } from "react";
import "./paginator.scss";

export const Pagination = ({ pokeTotal, setPokeCurrent }) => {
  const cards = 12;
  const [currentPag, setCurrentPag] = useState(0);

  const totalPages = Math.ceil(pokeTotal.length / cards);

  const goToPage = (page) => {
    const index = page * cards;
    setPokeCurrent([...pokeTotal].splice(index, cards));
    setCurrentPag(page);
  };

  const prev = () => {
    const prev = currentPag - 1;
    if (prev < 0) return;
    goToPage(prev);
  };

  const next = () => {
    const next = currentPag + 1;
    if (next >= totalPages) return;
    goToPage(next);
  };

  return (
    <div className="pagination">
      <button onClick={prev} disabled={currentPag === 0}>
        Prev
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => goToPage(index)}
          className={index === currentPag ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={next} disabled={currentPag === totalPages - 1}>
        Next
      </button>
    </div>
  );
};
