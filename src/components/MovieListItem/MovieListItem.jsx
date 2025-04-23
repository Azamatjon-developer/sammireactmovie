import React from "react";
import "./MovieListItem.css";

const MovieListItem = () => {
  return (
    <div className="list-group-item">
      <div className="movie-item-row">
        <span className="list-group-item-label">Empire of Usman</span>
        <input
          className="list-group-item-input"
          type="number"
          defaultValue={"989"}
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
    </div>
  );
};

export default MovieListItem;
