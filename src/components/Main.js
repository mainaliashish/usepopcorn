import React, { useState, useEffect } from "react";
import { API_KEY } from "../utils/constants";
import NavBar from "./Navbar";
import NumResults from "./NumResults";
import SideBox from "./SideBox";
import MainBox from "./MainBox";
import Loading from "./Loading";
import Error from './Error';
import Search from "./Search";


function Main(){
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState("king");
  const [selectedId, setSelectedId] = useState(null);

  // const queryString = 'king';
  // tt0167260
  // console.log(movies);
  // console.log(selectedId)
  useEffect(() => {
    fetchMovies();
  }, [query])
  async function fetchMovies() {
    try {
    setIsLoading(true)
    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`);
    if (!res.ok) throw new Error('something went wrong')
    const data = await res.json();
    if (data.Response === 'False') throw new Error("No results found");
    setMovies(data.Search);
    } catch(err) {
      console.log(err.message);
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  if (query.length < 2) {
    setMovies([]);
    setError("");
    return;
  }
  // console.log(movies)
  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery}/>
        <NumResults movieLength={movies.length}/>
      </NavBar>
      <main className="main"> 
        {isLoading && <Loading/>}
        {
          // (isLoading ? <Loading /> : <SideBox movies={movies}/>)
          !isLoading && !error && <SideBox movies={movies} selectedId={selectedId} setSelectedId={setSelectedId}/>
        }
        {
          error && <Error message={error}/>
        }
        <MainBox selectedId={selectedId} />
      </main>
    </>
  );
}
export default Main;
