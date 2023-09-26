// import user from "./user.png";
import userss from "./asserts/man.png";
// import {useState} from 'react'
import like from "./asserts/like.png";
// import { useState } from "react";
import axios from "axios";
import comment from "./asserts/comment.png";
import Comments from "./Comments";
import { useState, useEffect } from "react";

function PostComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(false);
  function handlePost() {
    setIsOpen(true);
  }
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/post")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        // setIsLoaded(false);
        // setIsLoaded(true) // set loading to false after fetching the data
      })
      .catch((err) => {
        // Handle the error here (for example, show a toast notification)
        // toast.error("Error fetching user data!");
        // setIsLoaded(false);
        // setIsLoaded(true)// even if there's an error, we should set loading to false
      });
  }, []);
  const userArray = Array.from(user);
 userArray.reverse();
  return (
    
      <div style={{marginBottom:"10px"}}>
        {userArray.map((user) => (
          <>
          <div className="post-container">
            <div className="post">
              <img className="user-img" src={userss}></img>
              <div className="post-head">
                <div>{user.post_id}</div>
                <div>Nellore</div>
              </div>

              <div>2 hours ago</div>
            </div>
            <div className="post-content">{user.post_data}</div>
            <hr></hr>
            <div className="post-like">
              <img className="post-img" src={like}></img>
              <div className="like-count">967k Likes</div>
              <img className="post-img" src={comment}></img>
              <div className="like-count">349 Comments</div>
              {/* <img className="post-img" src={comment}></img> */}
            </div>
            </div>
          </>
        ))}
      </div>

      // {isOpen && <Comments />}
    
  );
}

export default PostComponent;
