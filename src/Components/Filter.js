import React from "react";

function Filter({items, catagory, setCatagory}){
    function filterHandler(value){
        setCatagory(value);
        // console.log(value);
    }
    return(
        <div>
            {items.map( (item)=>{
                return(<button key={item.id}
                onClick={()=>(filterHandler(item.title))}>{item.title}</button>)
            })}
        </div> 
           )
}



export default Filter;