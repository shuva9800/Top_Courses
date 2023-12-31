import React from 'react';
// import { GiAk47,GiAk47U } from "react-icons/gi"
import { useState } from 'react';
import { toast } from 'react-toastify';
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
// import { FaBeer } from "react-icons/fa";

export const Card = ({course,setLikedCourses,likedCourses}) => {
 
    function changeHandeler(){
      
          //logic
          if(likedCourses.includes(course.id)) {
            //pehle se like hua pada tha
            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
            toast.warning("like removed");
        }
        else {
            //pehle se like nahi hai ye course
            //insert karna h ye course liked courses me 
            if(likedCourses.length === 0 ) {
                setLikedCourses([course.id]);
            }
            else {
                //non-empty pehle se
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
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
                likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem" />):( <FcLikePlaceholder fontSize="1.75rem" />)
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