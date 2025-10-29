import React from 'react'
import './Sidebar.css'
import dina1 from "../../assets/dina1.png";
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <>
     <div className="sidebar ">
    <img src={dina1} alt="Your Image"/>
    <h3>Dina Sayed</h3>
    <p>Front-End <span>React.js</span> </p>

   
<nav className="mt-2 w-100">
  <a className="nav-link" > <Link to='/home'>Home</Link> </a>
  <a className="nav-link" > <Link to='/about'>About</Link> </a>
  <a className="nav-link" > <Link to='/skills'>Skills</Link></a>
  <a className="nav-link" > <Link to='/experience'>Experience</Link></a>
  <a className="nav-link" > <Link to='/work'>Work</Link></a>
</nav>

  </div>

  <div className="home">
    {/* <Home /> */}
  </div>
  
    
    </>
  )
}



