import React from "react";
import Card from"./Card";

function Cards({apidata, catagory}){
   
  function getcourseData(){
        let coursedata=[];

        if(catagory==="All")
        {
             // Object.value(apidata).forEach(array =>(
        //     array.forEach(coursevalue =>{
        //         coursedata.push(coursevalue)}
        //     )
        // )

        // )
        for(let key in apidata){
            // console.log(key, apidata[key])

           for( let value of apidata[key]){
            // console.log("i am inside 2nd loop")
            // console.log(value);
            coursedata.push(value);

            }
        }
        // console.log(coursedata);
        return coursedata;

        }

        
  //for Development card
  else{
  
    return apidata[catagory]
  }
        
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getcourseData().map((course)=>{
                return(<Card key={course.id} course={course}></Card>)
            }
                
            )}
        </div>
    )

}


export default Cards;