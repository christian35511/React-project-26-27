import React,{useEffect} from "react";
import { useRef } from "react";

export default function StudentForm(){
    const nameInput = useRef(null);
    function focusInput(){
        nameInput.current.focus();

    }
    return(
        <div>
            <h1>student registration pages</h1>
            <input type="text" 
            ref={nameInput} 
            placeholder="enter your name"/>
            <button onClick={focusInput}>register</button>
        </div>
    )
}