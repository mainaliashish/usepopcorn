import React from "react";
import Rating from "./Rating";

function WatchedMovies({ watched }) {
  return (
    <div>
      <ul className="list">
        {watched.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <Rating icon="⭐️" average={movie.imdbRating}/>
              <Rating icon="🌟" average={movie.userRating}/>
              <Rating icon="⏳" average={movie.runtime}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WatchedMovies;
