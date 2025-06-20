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

const List = () =>{
    return(
<>
<h2 className="mb-5 text-3xl mt-3 font-semibold">Tag List</h2>  
<ul className="flex gap-3">

    
    {tech.map((tech, index)=>(
 <li className="bg-gray-300 px-3 py-2 rounded-md" key={index}>{tech}</li>
    ))}
   
</ul>
</>
    )
}
export default List