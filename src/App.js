import React from "react";
import {filterData, apiUrl} from "./data"
import {useState} from "react";
import {useEffect} from "react"
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Loader from "./Components/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const[apidata, setData]=useState(null);

  const[loading, setLoading]=useState(true);
  const[catagory, setCatagory]=useState(filterData[0].title);
  

 async function collectdata(){
  setLoading(true);
  try{
    
    let data =await fetch(apiUrl);
    let value=await data.json();
    setData(value.data)
    // console.log(value.data)

  }
  catch(err){
    toast.error("galat api call ha");
  }
  setLoading(false);
 }

 useEffect(()=>{
  collectdata();

 },[])

  
  return (
   <div className="min-h-screen flex flex-col bg-bgDark2">
      <div >
      <Navbar/>
      </div>
      
      <di  className="bg-bgDark2">
      <Filter  items={filterData} catagory={catagory} setCatagory={setCatagory}/>
      </di>
      
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading? <Loader />: <Cards apidata={apidata} catagory={catagory}/>}
      </div>
   </div>
  );
};

export default App;
