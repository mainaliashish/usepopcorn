import React from "react";
import Rating from "./Rating";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function WatchedMovieHeader({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <Rating icon="#️⃣" average={watched.length} />
        <Rating icon="⭐️" average={avgImdbRating} />
        <Rating icon="🌟" average={avgUserRating} />
        <Rating icon="⏳" average={avgRuntime} />
      </div>
    </div>
  );
}

export default WatchedMovieHeader;
