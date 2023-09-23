import user from './user.png'
function PostComponent() {
  return (
    <div className="post-container">
       <img className='user-img' src={user}></img>
      <div className='post-head'>
       
        <div>Pavan</div>
        <div>Nellore 1min ago</div>

      </div>

      <div>X</div>

    </div>
  );
}

export default PostComponent;
