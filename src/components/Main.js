import React, { useState, useEffect } from "react";
import { tempMovieData } from "../utils/constants";
import NavBar from "./Navbar";
import SideBox from "./SideBox";
import MainBox from "./MainBox";

function Main() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(tempMovieData)
  }, [])
  return (
    <>
      <NavBar movieLength={movies.length} />
      <main className="main">
        <SideBox movies={movies}/>
        <MainBox />
      </main>
    </>
  );
}
export default Main;
