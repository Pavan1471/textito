import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activity from './pages/Activity';
import Home from './pages/Home';
import Post from './pages/Post';
import Profile from './pages/Profile';
import Search from './pages/Search';
import BottomNavBar from './components/BottomNavBar';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<BottomNavBar />}>
        <Route path="/"  element={<Home />} />
         <Route path="/search" element={<Search />} />
         <Route path="/post" element={<Post/>}/>
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
