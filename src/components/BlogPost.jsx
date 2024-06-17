import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPost(storedPosts[id]);
    const storedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
    setComments(storedComments);
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComments = [...comments, { username: user.username, text: comment }];
    setComments(newComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(newComments));
    setComment('');
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        <h3>Comments</h3>
        {comments.map((c, index) => (
          <div key={index}>
            <strong>{c.username}</strong>
            <p>{c.text}</p>
          </div>
        ))}
        {user && (
          <form onSubmit={handleCommentSubmit}>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
            <button type="submit">Add Comment</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
