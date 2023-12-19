import React from 'react';
import { GiAk47,GiAk47U } from "react-icons/gi"
import { useState } from 'react';
import { toast } from 'react-toastify';
// import { FaBeer } from "react-icons/fa";

export const Card = ({course}) => {
    const[value,setValue]=useState(false)
    function changeHandeler(){
        if(value===false){
            setValue(true);
            toast("Add To Fevourite List...")
            console.log(value);
        }
        else{
            setValue(false);
            toast("Remove From Fevourite List...")
            console.log(value);
        }

    }
    // console.log(course);
  return (
    <div>
        <div>
            <img src={course.image.url}></img>
        </div>

        <div>
            <button onClick={changeHandeler}>
            {
                value?(<GiAk47U />):( <GiAk47 />)
            }
               
            </button>
        </div>
        <div className='description'>
            <p>{course.title}</p>
            <p>{(course.description.length>100)?`${course.description.substring(0,100)}...`:course.description

            }</p>
        </div>
    </div>
  )
}


export default Card;