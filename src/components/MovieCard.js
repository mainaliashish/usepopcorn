import React from 'react'

function MovieCard({ movies, setSelectedId, selectedId }) {
  // console.log(setSelectedId)
  // console.log(selectedId)
  function handleSelectMovie(id) {
    setSelectedId(id);
  }
  return (
    movies?.map((movie) => (
        <li onClick={() => handleSelectMovie(movie.imdbID)} key={movie.imdbID} className='cursor-pointer'>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>🗓</span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </li>
      ))
  )
}

export default MovieCard