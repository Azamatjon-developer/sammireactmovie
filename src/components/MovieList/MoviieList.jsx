import React from "react";
import "./MovieList.css";
import MovieListItem from "../MovieListItem/MovieListItem";
const MoviieList = ({ data }) => {
  return (
    <ul className="movieList ">
      {data.map((item) => (
        <MovieListItem  key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default MoviieList;  
