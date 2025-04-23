import React from 'react'
import "./MovieList.css"
import MovieListItem from '../MovieListItem/MovieListItem'
const MoviieList = () => {
  return (
    <div className='movieList'>
      <MovieListItem/>
      <MovieListItem/>
      <MovieListItem/>
      <MovieListItem/>

    </div>
  )
}

export default MoviieList
