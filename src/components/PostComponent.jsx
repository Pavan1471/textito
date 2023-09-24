import user from "./user.png";
// import {useState} from 'react'
import like from "./like.png";
import comment from "./comment.png";
import Comments from "./Comments";
import { useState } from "react";


function PostComponent() {
  const [isOpen, setIsOpen] = useState(false);

  function handlePost(){
    setIsOpen(true);
  
  }

  return (
    <>
      <div className="post-container">
        <div className="post">
          <img className="user-img" src={user}></img>
          <div className="post-head">
            <div>Pavan Kumar</div>
            <div>Nellore</div>
          </div>

          <div>2 hours ago</div>
        </div>
        <div className="post-content">Hii How are you..?</div>
        <hr></hr>
        <div className="post-like">
          <img className="post-img" src={like}></img>
          <div className="like-count">967k Likes</div>
          <img className="post-img" src={comment}></img>
          <div className="like-count">349 Comments</div>
          {/* <img className="post-img" src={comment}></img> */}
        </div>
        
      </div>
      <div className="post-container">
        <div className="post">
          <img className="user-img" src={user}></img>
          <div className="post-head">
            <div>Mani Chandra</div>
            <div>Hyderbad</div>
          </div>

          <div>7 hours ago</div>
        </div>
        <div className="post-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius natus velit repudiandae. Molestias debitis neque deserunt. Soluta ut molestias reiciendis. Doloremque quo aliquam laboriosam eius?</div>
        <hr></hr>
        <div className="post-like">
          <img className="post-img" src={like}></img>
          <div onClick={handlePost} className="like-count">967k Likes</div>
          <img className="post-img" src={comment}></img>
          <div className="like-count">349 Comments</div>
          {/* <img className="post-img" src={comment}></img> */}
        </div>
        
      </div>

{isOpen&&
<Comments/>

}



    </>
  );
}

export default PostComponent;
