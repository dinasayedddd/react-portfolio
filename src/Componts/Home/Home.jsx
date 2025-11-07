import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import img1 from '../../assets/img_bg_1-PzvG2r05.jpg';
import img2 from '../../assets/img_bg_2-DzCs5o-0.jpg';


export default function Home() {
  const images = [img1, img2];



  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="content"
      style={{
        backgroundImage: `url(${images[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
   <div className="content-info">

       <h1>Hi!</h1>
      <h2>I'm Dina Sayed</h2>
      <p>
        100% html5 bootstrap templates Made By{" "}
        <Link to="https://colorlib.com/">Colorlib.com</Link>
      </p>
   </div>
      <button>
        Download CV <i className="fa-solid fa-download"></i>
      </button>
    </div>
  );
}
