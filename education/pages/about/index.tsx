'use client';
import axios from "axios";
import React from "react";

import { useEffect, useState } from "react";

const About = () =>{
    const [posts, setPosts] = useState([]) ;
useEffect(() =>{
    fetch ('/api/blogs')
    .then(res => res.json())
    .then(data => setPosts(data));
}, [])



    return(
        <>
        <h1>Blog</h1>

        {posts.map((blogList) =>(
            <div key={blogList.id} className = "mb-6 p-4 border rounded-lg shadow">
                <h1 className="text-xl font-semibold">{blogList.title}</h1>
                <p className="text-gray-600 text-sm">by {blogList.author} on {blogList.publishedAt} </p>
                <p className="mt-2 text-gray-800">{blogList.content}</p>
            </div>
        ))}
        </>
    )
}
export default About;