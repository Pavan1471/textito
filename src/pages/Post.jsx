import { useState } from "react";
import axios  from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Post() {
  const navigate = useNavigate();
  const [post_id, setPost_id] = useState("");
  const [post_data, setPost_data] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = localStorage.getItem('token');
    console.log(data)
    setPost_id(data);
    // setIsLoading(true);
    try {
      const username = localStorage.getItem("username")
      console.log(username)
      const response = await axios.post("http://localhost:5000/createpost", {
        post_id: username,
        post_data: post_data,
      });
      toast.success("Post successful");
   
        

        setTimeout(() => {
          navigate("/");
          
        }, 1000);
      console.log(response.status);
      console.log(response.data);
      console.log(post_data);
    }
    catch{
      console.log("ji")
    }
  }
    return (
      <>
         <ToastContainer />
<center>
<div class="card">
  <span class="title">Create Post</span>
  <form class="formsss">
    <div class="group">
    <input type="text" required=""></input>
    <label for="name">Category</label>
    </div>
<div class="group">
    <input  type="email" id="email" name="email" required=""></input>
    <label for="email">Tags</label>
    </div>
<div class="group">
    <textarea onChange={(e) => setPost_data(e.target.value)} id="comment" name="comment" rows="5" required=""></textarea>
    <label for="comment">Text</label>
</div>
    <center>
    <button onClick={handleSubmit} type="submit">Post</button>
    </center>
  </form>
</div>
</center>
      </>
    );
  }
  
  export default Post;