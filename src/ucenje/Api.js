import React, { useState, useEffect } from 'react';

const Api = () => {
    const image = 'https://image.tmdb.org/t/p/w500'
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
    <div className="posts-container">
       {posts.map((post) => {
          return (
             <div className="post-card" key={post.id}>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
                <div className="button">
                <div className="delete-btn">Delete</div>
                
                </div>
             </div>
          );
       })}
    </div>
    );
 };

export default Api

/*
const App = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);
 
    // GET with fetch API
    useEffect(() => {
       const fetchPost = async () => {
          const response = await fetch(
             'https://jsonplaceholder.typicode.com/posts?_limit=10'
          );
          const data = await response.json();
          console.log(data);
          setPosts(data);
       };
       fetchPost();
    }, []);*/

    /*const fetchPost = async () => {
        try {
           const response = await fetch(
              'https://jsonplaceholder.typicode.com/posts?_limit=10'
           );
           const data = await response.json();
           setPosts(data);
        } catch (error) {
           console.log(error);
        }
     };*/