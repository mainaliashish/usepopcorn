import React, { useState } from "react";
import MovieCard from "./MovieCard";

function SideBox({ movies, selectedId, setSelectedId }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <ul className="list">
          {
            <MovieCard movies={movies} selectedId={selectedId} setSelectedId={setSelectedId} />
          }
        </ul>
      )}
    </div>
  );
}

export default SideBox;
