import user from "./man.png";
import verified from './verified.png'
import PostComponent from "./PostComponent";
function User() {
  return (
    <>
      <center>
      <div className="profile-head">
      <img className="profile-img" src={user}></img>
   <div className="profile-data">
   <div className="profile-name">Puttu Pavan Kumar</div>
    <img className="tick" src={verified}></img>
   </div>
    <div className="profile-username">@Pavan147</div>

      </div>
      </center>
      <div className="followers">
        <div>
          <div className="post-count">147</div>
          <div className="post-text">Posts</div>
        </div>
        <div>
          <div className="post-count">107k</div>
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
    </>
  );
}

export default User;
