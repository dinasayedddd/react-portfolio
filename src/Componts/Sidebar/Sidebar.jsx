import React from 'react'
import './Sidebar.css'
import about1 from '../../assets/about-BgAkqdr2.jpg'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <>
     <div className="sidebar ">
    <img src={about1} alt="Your Image"/>
    <h3>Jackson Ford</h3>
    <p> <span> UI/UX/Designer </span> in Philippines </p>
    



   
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



