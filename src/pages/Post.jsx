function Post() {
    return (
      <>
<center>
<div class="card">
  <span class="title">Create Post</span>
  <form class="form">
    <div class="group">
    <input type="text" required=""></input>
    <label for="name">Category</label>
    </div>
<div class="group">
    <input  type="email" id="email" name="email" required=""></input>
    <label for="email">Tags</label>
    </div>
<div class="group">
    <textarea  id="comment" name="comment" rows="5" required=""></textarea>
    <label for="comment">Text</label>
</div>
    <center>
    <button type="submit">Post</button>
    </center>
  </form>
</div>
</center>
      </>
    );
  }
  
  export default Post;