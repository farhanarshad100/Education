import Link from 'next/link';
import { useEffect, useState } from 'react';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 className='font-bold text-5xl mb-4'>Blog List</h1>
      <ul className='flex gap-3'>
        {blogs.map((post) => (
          <li className='bg-gray-400 p-4 text-center' key={post.id} style={{ marginBottom: '20px' }}>
            <Link href={`/blog/${post.id}`}>
            <img src={post.author.avatar} alt='' />
              <h2>{post.title}</h2>
              <p>{post.author.name}</p>
              <p>{post.author.bio}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
