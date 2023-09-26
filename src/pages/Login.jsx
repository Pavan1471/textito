import React from "react";
// import plus from "./plus.png";
import axios from "axios";
import './login.css'

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import LoadingOverlay from 'react-loading-overlay';
// import { Skeleton, Spinner } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  // const notify = () => toast.success("Log in successful");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [userID, setUserID] = useState(""); // state to store the user ID

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/user", {
        email: email,
        password: password,
      });
      console.log(response.status);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);

      // set the userID variable after the axios request is completed
      const user = response.data.id;

      if (localStorage.getItem("token")) {
        toast.success("Log in successful");
   
        

        setTimeout(() => {
          navigate("/");
          
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please check your credentials.");

    }
   finally {
    setIsLoading(false); // End loading
  }
  };
  useEffect(() => {
    console.log(userID);
  }, [userID],[isLoading]);

  console.log(userID);
  return (
    <>
      <ToastContainer />
    {/* <LoadingOverlay
  active={isLoading}
  spinner
  text='Loading your content...'
  >
  <p>Some content or children or something.</p>
</LoadingOverlay> */}
     <center>
     <form class="form1">
        <p class="title">Login</p>
        <p class="message">Signup now and get full access to our app. </p>

        <label>
          <input
            required=""
            placeholder="Email"
            type="email"
            class="inputss"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {/* <span>Email</span> */}
        </label>

        <label>
          <input
            required=""
            placeholder="Password"
            type="password"
            class="inputss"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {/* <span>Password</span> */}
        </label>
        <button onClick={handleSubmit} class="submit">
        <div>
    {/* {isLoading ? <div><Spinner/></div> : ( */}
      <div>Login</div>
    {/* )} */}
  </div>
        </button>
        <p class="signin">
          Didn't have an acount ? <a onClick={()=>{
             navigate("/register");
          }} href="#">SignUp</a>{" "}
        </p>
      </form>
     </center>
    </>
  );
}
export default Login;