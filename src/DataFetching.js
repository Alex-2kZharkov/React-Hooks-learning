import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios // axios for making http requests
      .get('https://jsonplaceholder.typicode.com/posts') // get data from request
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ul>
      {posts.map((item) => {
        return <li key={item.id}> {item.title}</li>; // simply show every element as list item
      })}
    </ul>
  );
}

export default DataFetching;
