'use client';
import Card from "@/Component/Card";
import List from "@/Component/List";
import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";

const element = <h3>Hello varible</h3>;
const About = () =>{

const about = {
  heading: "How to make react",
  description: "Time management is the process of planning and controlling how you spend your time to increase efficiency, effectiveness, and productivity. It involves prioritizing tasks, setting realistic goals, and avoiding distractions to make the most of your available time."
};

const object = "zeeshan"


const multipulBg = ["bg-amber-500", "bg-amber-600", "bg-amber-700"]


const updateBg = [
  "#ff5733",       // hex color
  "rgb(100, 149, 237)",  // rgb color
  "lightseagreen"  // named CSS color
]

// console.log(about)
    return(
        <>
        <h1 className="text-4xl font-bold mb-5">About</h1>
        <div className="flex flex-wrap">
{multipulBg.map((bg, i) =>(

  <Card key={i} className={bg}>
            <h1 className="text-2xl font-bold text-white mb-3">{about.heading}</h1>
              <p className="text-white">{about.description}</p>
    </Card>
))}
      
{updateBg.map((color, index) => (
    <Card key={index} style={{backgroundColor:color}} className="text-white">
        <h2>Hello</h2>
    </Card>
))}
</div>

{element}


<List/>
        </>
    )
}
export default About;