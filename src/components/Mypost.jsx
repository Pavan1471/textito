// import user from "./user.png";
import userss from "./asserts/man.png";
// import {useState} from 'react'
import like from "./asserts/like.png";
// import { useState } from "react";
import axios from "axios";
import comment from "./asserts/comment.png";
import Comments from "./Comments";
import { useState, useEffect } from "react";

const Mypost= async () =>{
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [usersss, setUsersss] = useState("Priya");
  function handlePost() {
    setIsOpen(true);
  }
  const username = localStorage.getItem("username")
  console.log(username)
  setUsersss(username)
  const [post, setPost] = useState([]);
  try {

    const response = await axios.post("http://localhost:5000/mypost", {
        username:usersss,
      
    });
    console.log(response.status);
    console.log(response.data);
  }
  catch(err){
    console.log(err)
  }
  useEffect(() => {
    console.log(usersss);
  }, [usersss]);
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

export default Mypost;