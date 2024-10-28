import React, { useEffect, useState } from "react";
import { tempWatchedData } from "../utils/constants";
import WatchedMovies from "./WatchedMovies";
import WatchedMovieHeader from "./WatchedMovieHeader";

function MainBox() {
  const [watched, setWatched] = useState([]);
  const [isOpen2, setIsOpen2] = useState(true);
  useEffect(() => {
    setWatched(tempWatchedData);
  }, []);
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
