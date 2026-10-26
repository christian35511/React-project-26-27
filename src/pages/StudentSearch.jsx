import React from "react";
import { useState,useMemo } from "react";

export default function StudentSearch(){
    const [search, setSearch] = useState("")
    const student=[
        {id:1, name:"thierry"},
        {id:2, name:"christian"},
        {id:3, name:"soumaya"},
        {id:4, name:"Ange Igiraneza"},

    ];
    const filteredStudents = useMemo(()=>{
        console.log("filtering Student ...");
        return students.filter((student)=> students.filter
        .toLowerCase().includes(search.toLocaleLowerCase())
    );
    },[search])
    return (
        <div>
            <input type="text" 
            placeholder="search by name"
            value={search} 
            onChange={(e)=> setSearch(e.target.value)}/>

            <ul>
                {student
                .fiter(student=>student.name.toLocaleLowerCase().includes(search.toLowerCase()))
                .map(students=>(
                        <li key={student.id}>{student.name}</li> 
                ))

                }
                         </ul>
        </div>
    )
}
