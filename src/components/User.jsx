import users from "./asserts/man.png";
import verified from './asserts/verified.png'
import PostComponent from "./PostComponent";
import React from "react";
import Mypost from "./Mypost";
import { useEffect, useState } from "react";
import axios from "axios";
function User() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/myprofile", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.email);
        console.log(res.data);
        const users = res.email;
        // console.log(users)

     
        
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
   
  }, []);
  const username =  localStorage.setItem('username',user.fullname);
  console.log(username);

  return (
    <>
      <center>
      <div className="profile-head">
      <img className="profile-img" src={users}></img>
   <div className="profile-data">
   <div className="profile-name">{user.fullname}</div>
    <img className="tick" src={verified}></img>
   </div>
    <div className="profile-username">@{user.username}</div>

      </div>
      </center>
      <div className="followers">
        <div>
          <div className="post-count">147</div>
          <div className="post-text">Posts</div>
        </div>
        <div>
          <div className="post-count">999k</div>
          <div className="post-text">Followers</div>
        </div>
        <div>
          <div className="post-count">14</div>
          <div className="post-text">Following</div>
        </div>
      </div>
      <br></br>

     <div className="my-posts">My Posts</div>

      <br></br>
      <PostComponent/>
      {/* <Mypost/> */}
    </>
  );
}

export default User;
