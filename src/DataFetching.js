import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios // axios for making http requests
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`) // get single post from request
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]); // depend on id
  return (
    <div>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <h2>Id</h2> <span>{post.id}</span>
      <h2>Title</h2> <span>{post.title}</span>
      <h2>Body</h2> <span>{post.body}</span>
    </div>
  );
}

export default DataFetching;
