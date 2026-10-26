import React from "react";
import { useState,useEffect } from "react";

export default function Timer(){
    const[seconds,setSeconds] = useState(0)
    useEffect(()=>{
        const intervalId = setInterval(()=>
        
        {
            setSeconds(prevSeconds=> prevSeconds + 1);
         },1000);
         return()=>{
            clearInterval(intervalId);
         }
         },[]);
            
         
    return(

        <div>
       <h1>Student Study Timer</h1>
       <p>elapsed time:{seconds} second</p>
        </div>
    )
}