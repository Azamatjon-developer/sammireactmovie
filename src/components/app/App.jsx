import React from "react";
import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../searchPanel/SearchPanel";
import "../app/App.css";
import AppFilter from '../app-filter/AppFilter';
import MoviieList from "../MovieList/MoviieList";
import MoviesAddInfo from "../MoviesAddInfo/MoviesAddInfo";


 
const App = () => {
  const data = [
    {
      id:"1",
      name : "Polat",
      viewers:"122",
      favourite:false
    },
    {
      id:"2",
      name:"Usmon",
      viewers:"213",
      favourite:false,
    },
    {
      id:"3",
      name:"Panoh",
      viewers:"1234",
      favourite:true
    },
    {
      id:"4",
      name:"Sotqin",
      viewers:"990",
      favourite:true
    }
  ]
  return (
    <div className="app font-monospace">
      {" "}
      <div className="content">
        <AppInfo />
        <div className="searchPanel ">
          <SearchPanel />
          <AppFilter/>
        </div>
        <MoviieList data = {data}/>
        <MoviesAddInfo/> 
      </div>
    </div>
  );
};

export default App;
