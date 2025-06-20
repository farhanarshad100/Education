import React from "react";
const user = [
    {id:1, name: "Geeks", age: 30},
    {id:2, name: "for", age: 40},
    {id:3, name: "geek", age: 20}
]
const names = user.map(u => u.name);
console.log(names);
const Listobjects = () =>{
return(
    <>
    <h3>List object</h3>
    <ul>
        {user.map((user) =>(
                 <li key={user.id}>
                    {user.name} is {user.age} years old.
                 </li>
        ))}
   
    </ul>
    </>
)
}

export default Listobjects