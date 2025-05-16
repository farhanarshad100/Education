import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      fetch('/api/blogs')
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((b) => b.id.toString() === id);
          setBlog(found);
        });
    }
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
        <img src={blog.author.avatar} alt='' />
      <h1>{blog.title}</h1>
      <p>{blog.author.name}</p>
      <p>{blog.author.bio}</p>
      <ul>
        <li><a href={blog.author.social.twitter} target="_blank"  rel="noopener noreferrer">ggg</a></li>
   
        {/* <li>{blog.social.twitter}</li> */}
      </ul>
    </div>
  );
};

export default BlogDetails;
