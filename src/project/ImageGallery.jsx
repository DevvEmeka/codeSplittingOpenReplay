import React, { useEffect, useState } from "react";

const ImageGallery = (isPosts) => {
  const [posts, setPosts] = useState([]);

useEffect(() => {
    const response =  fetch('https://jsonplaceholder.typicode.com/posts') //the api
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(err => console.log(err))
}, []);

  return (
    <>
    <h1>DYNAMIC IMPORT! TUTORIAL</h1>
    <button ></button>
    <div>
      <div>{posts.map((post) => {
        return <li key={post.id}>{post.title}</li>
      })}</div>
    </div>
    </>
  );
}

export default ImageGallery