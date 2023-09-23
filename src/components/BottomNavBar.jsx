import { Outlet, Link } from "react-router-dom";
import home from "./home.png";
// import './App.css';
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
          <img className="foot" src={home}></img>
        </Link>

        <Link to="/post">
          <img className="foot" src={home}></img>
        </Link>

        <Link to="/activity">
          <img className="foot" src={home}></img>
        </Link>
        <Link to="/profile">
          <img className="foot" src={home}></img>
        </Link>
        {/* </div> */}
      </div>
    </>
  );
};

export default BottomNavBar;
