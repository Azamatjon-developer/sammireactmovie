import React from "react";
import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../searchPanel/SearchPanel";
import "../app/App.css";
import AppFilter from '../app-filter/AppFilter';
import MoviieList from "../MovieList/MoviieList";
import MoviesAddInfo from "../MoviesAddInfo/MoviesAddInfo";


 
const App = () => {
  return (
    <div className="app font-monospace">
      {" "}
      <div className="content">
        <AppInfo />
        <div className="searchPanel ">
          <SearchPanel />
          <AppFilter/>
        </div>
        <MoviieList/>
        <MoviesAddInfo/> 
      </div>
    </div>
  );
};

export default App;
