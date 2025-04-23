import React from "react";
import "./MovieListItem.css";

const MovieListItem = ({name,viewers,favourite}) => {
  return (
    <li className={`list-group-item ${favourite && 'favourite'}`}>
      <div className="movie-item-row">
        <span className="list-group-item-label">{name}</span>
        <input
          className="list-group-item-input"
          type="number"
          defaultValue={viewers}
        />
        <div className="btn-group">
          <button className="btn-cookie btn-sm" type="button">
            <i className="fas fa-cookie"></i>
          </button>
          <button className="btn-cookie btn-sm" type="button">
            <i className="fas fa-trash"></i>
          </button>
          <button className="btn-cookie btn-sm" type="button">
            <i className="fas fa-star"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default MovieListItem;
