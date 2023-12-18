import React from "react";
import {filterData, apiUrl} from "./data"
import {useState} from "react";
import {useEffect} from "react"
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";

const App = () => {
  return (
   <div>
      <Navbar/>
      <Filter  items={filterData}/>
      <Cards/>
   </div>
  );
};

export default App;
