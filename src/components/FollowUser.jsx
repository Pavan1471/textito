import users from "./asserts/man.png";
import verified from './asserts/verified.png'
import PostComponent from "./PostComponent";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function FollowUser() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/followers")
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
    
      <div style={{marginBottom:"5px"}}>
        {userArray.map((user) => (
          <>
          <div className="post-containerss">

            <img style={{width:"50px",marginLeft:"30px",fontWeight:"bold"}} src={users}></img>

           <div style={{marginLeft:"30px"}}>{user.fullname}</div>
           <button className="followbtn">Follow</button>
            </div>


          </>
        ))}
      </div>

      // {isOpen && <Comments />}
    
  );
  return(
    <div>Hii</div>
  )
}
  export default FollowUser;