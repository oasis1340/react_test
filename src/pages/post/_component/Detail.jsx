import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPost from '../_function/getPost';

const Detail = () => {
  const {id} = useParams();

  const [post, setPost] = useState({})
  useEffect(() => {
    getPost(id)
      .then(setPost)
      .catch(console.error)
  }, [])

  console.log(post)

  return (
    <div>
      <p>제목 : {post.title}</p>
      <p>내용 : {post.body}</p>
    </div>
  );
};

export default Detail;