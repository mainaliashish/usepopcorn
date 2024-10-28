import React, { useEffect, useState } from "react";
import { tempMovieData } from "../utils/constants";
import MovieCard from "./MovieCard";

function SideBox() {
  const [isOpen1, setIsOpen1] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(tempMovieData)
  }, [])
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
            <MovieCard movies={movies} />
          }
        </ul>
      )}
    </div>
  );
}

export default SideBox;
