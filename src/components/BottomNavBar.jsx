import { Outlet, Link } from "react-router-dom";
import add from './asserts/plus.png'
import user from './asserts/user.png'
import search from './asserts/search.png'
import activity from './asserts/bell.png'
import {AiFillLinkedin} from "react-icons/ai";
import { FaBeer } from "react-icons/fa";
// import {AiFillHome} from "react-icons/ai";
// import {AiOutlineSearch} from "react-icons/ai";
// import {AiFillBell} from "react-icons/ai";
// import {AiOutlineBell} from "react-icons/ai";
// // import {} from "react-icons/ai";
// // import {} from "react-icons/ai";
// // import {} from "react-icons/ai";
// // import {} from "react-icons/ai";
// // import {} from "react-icons/ai";
import home from "./asserts/home.png";
// import './App.css';
const icons = [AiFillLinkedin];
const BottomNavBar = () => {
  return (
    <>

      <Outlet />
      <div className="footer">
        {/* <div className="nav"> */}
        <Link to="/">
          <img className="foot" src={home}></img>
        </Link>

        <Link to="/search">
          <img className="foot" src={search}></img>
        </Link>

        <Link to="/post">
          <img id="post-btn" className="foot" src={add}></img>
        </Link>

        <Link to="/activity">
          <img className="foot" src={activity}></img>
        </Link>
        <Link to="/profile">
          <img className="foot" src={user}></img>
        </Link>
        {/* </div> */}
      </div>
    </>
  );
};

export default BottomNavBar;
