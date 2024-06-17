import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/post/${index}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
