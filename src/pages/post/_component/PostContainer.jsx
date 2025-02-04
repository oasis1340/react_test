import React, { useEffect, useState } from 'react';
import getPosts from '../_function/getPosts';
import { Link } from 'react-router-dom';

const PostContainer = () => {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
      .then((posts) => posts.slice(0, 10))
      .then(setPosts)
      .catch(console.error)
  }, [])

  console.log(posts)

  return (
    <div>
      {posts.map(({id, title}, i) => (
        <Link key={i} to={`/post/${id}`}>
          <li >{title}</li>
        </Link>
      ))}
    </div>
  );
};

export default PostContainer;