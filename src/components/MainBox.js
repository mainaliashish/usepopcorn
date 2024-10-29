import React, { useEffect, useState } from "react";
import { tempWatchedData, API_KEY } from "../utils/constants";
import WatchedMovies from "./WatchedMovies";
import WatchedMovieHeader from "./WatchedMovieHeader";

function MainBox({ selectedId }) {
  console.log(selectedId);
  const [watched, setWatched] = useState([]);
  const [isOpen2, setIsOpen2] = useState(true);
  useEffect(() => {
    setWatched(tempWatchedData);
    fetchWatchedMovie();
  }, [selectedId]);

  async function fetchWatchedMovie() {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`);
    const data = await res.json();
    // console.log(data);
    setWatched(data);
  }
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
      {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedMovieHeader watched={watched} />
          <WatchedMovies watched={watched} />
        </>
      )}
    </div>
  );
}

export default MainBox;
