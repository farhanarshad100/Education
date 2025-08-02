import React from "react";
// console.log(tech)


const tech = [
  // Frontend
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Vue.js",
  "Svelte",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "jQuery",
]
const menubar = [
  // Frontend
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Vue.js",
  "Svelte",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "jQuery",
]
const myArray = ['apple', 'banana', 'orange'];
const List = () =>{
    return(
<>
<h2 className="mb-5 text-3xl mt-3 font-semibold">Tag List</h2>  

<ul>
    {myArray.map((myArray, i)=>(
        <li key={i}>{myArray}</li>
        
    ))}
</ul>


</>
    )
}
export default List