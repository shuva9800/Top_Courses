import React from "react";

function Filter({items, catagory, setCatagory}){
    function filterHandler(value){
        setCatagory(value);
        // console.log(value);
    }
    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {items.map( (item)=>{
                return(<button
                   className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${catagory === item.title ? 
            "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"}
            `}
                key={item.id}

                onClick={()=>(filterHandler(item.title))}>{item.title}</button>)
            })}
        </div> 
           )
}



export default Filter;