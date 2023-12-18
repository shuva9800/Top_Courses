import React from "react";

function Filter({items}){
    return(
        <div>
            {items.map( (item)=>{
                return(<button>{item.title}</button>)
            })}
        </div> 
           )
}



export default Filter;