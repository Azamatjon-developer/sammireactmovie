import React from 'react';
import "./MoviesAddInfo.css";

const MoviesAddInfo = () => {
  return (
    <div className='movies-add-movie container'>
      <h3 className='text-center mb-4'>Yangi kino qo'shish</h3>
      <form className='add-form d-flex justify-content-between align-items-center gap-3' action="">
        <input
          type="text"
          placeholder='Qanday kino'
          className='form-control new-post-label'
        />
        <input
          type="text"
          placeholder='Necha marta ko‘rilgan'
          className='form-control new-post-label'
        />
        <button type='submit' className='btn btn-dark px-4'>
          Add
        </button>
      </form>
    </div>
  );
};

export default MoviesAddInfo;
