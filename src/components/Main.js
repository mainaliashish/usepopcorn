import React, { useState, useEffect } from "react";
import { API_KEY } from "../utils/constants";
import NavBar from "./Navbar";
import NumResults from "./NumResults";
import SideBox from "./SideBox";
import MainBox from "./MainBox";
import Loading from "./Loading";
import Error from './Error'

function Main(){
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const queryString = 'king';
  useEffect(() => {
    fetchMovies();
  }, [])
  async function fetchMovies() {
    try {
    setIsLoading(true)
    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${queryString}`);
    if (!res.ok) throw new Error('something went wrong')
    const data = await res.json();
  // console.log(data.Response)
    if (data.Response === 'False') throw new Error("No results found");
    setMovies(data.Search);
    // setIsLoading(false)
    } catch(err) {
      console.log(err.message);
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  // console.log(movies)
  return (
    <>
      <NavBar>
        <NumResults movieLength={movies.length}/>
      </NavBar>
      <main className="main"> 
        {isLoading && <Loading/>}
        {
          // (isLoading ? <Loading /> : <SideBox movies={movies}/>)
          !isLoading && !error && <SideBox movies={movies}/>
        }
        {
          error && <Error message={error}/>
        }
        <MainBox />
      </main>
    </>
  );
}
export default Main;
