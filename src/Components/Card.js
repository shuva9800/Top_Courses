import React from 'react';
// import { GiAk47,GiAk47U } from "react-icons/gi"
import { useState } from 'react';
import { toast } from 'react-toastify';
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
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
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}></img>
            <div  className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
            <button onClick={changeHandeler}>
            {
                value?(<FcLike fontSize="1.75rem" />):( <FcLikePlaceholder fontSize="1.75rem" />)
            }
               
            </button>
        </div>
        </div>

        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>{(course.description.length>100)?`${course.description.substring(0,100)}...`:course.description

            }</p>
        </div>
    </div>
  )
}


export default Card;