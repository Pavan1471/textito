import React from "react";
// import plus from "./plus.png";
import axios from "axios";
import './login.css'
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Skeleton, Spinner } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register(){
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // console.log("hii");
    // console.log(mobile);
    try {
      const response = await axios.post("http://localhost:5000/register", {
        fullname: fullname,
        username: username,
        email: email,
        password: password,
      });
      console.log(response.data);
      toast.success("Registration successful");
     
    } catch (error) {
      console.error("Error:", error.response.data);
      toast.error("Registration not successful");
    }
    finally{
      setIsLoading(false);
    }
    navigate("/login");
  };
  return(
    <>
    <ToastContainer />
      <center>
      <form class="form1">
    <p class="titles">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input required="" placeholder="Full Name" type="text" class="inputss"
             value={fullname}
             onChange={(e) => setFullname(e.target.value)}></input>

            {/* <span>Firstname</span> */}
        </label>

        <label>
            <input required="" placeholder="Username" type="text" class="inputss"
             value={username}
             onChange={(e) => setUsername(e.target.value)}></input>
            {/* <span>Lastname</span> */}
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="Email" type="email" class="inputss"
         value={email}
         onChange={(e) => setEmail(e.target.value)}></input>
        {/* <span>Email</span> */}
    </label> 
        
    <label>
    <input required="" placeholder="Password" type="password" class="inputss"
    value={password}
         onChange={(e) => setPassword(e.target.value)} ></input>
        {/* <span>Password</span> */}
    </label>
    <label>
        <input required="" placeholder="Confirm password" type="password" class="inputss"></input>
        {/* <span>Confirm password</span> */}
    </label>
    <button onClick={handleSubmit} class="submit">
    <div>
    {/* {isLoading ? <div><Spinner/></div> : ( */}
      <div>Register</div>
    {/* )} */}
  </div>
    </button>
    <p class="signin">Already have an acount ? <a onClick={()=>{
             navigate("/login");
          }} href="#">Login</a> </p>
</form>
      </center>
    </>
  )
}
export default Register;