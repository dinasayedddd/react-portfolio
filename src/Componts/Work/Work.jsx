import React, { useState } from "react";
import "./Work.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import img1 from '../../assets/img-1-C4nS0eD8.jpg';
import img2 from '../../assets/img-2-D-4H1m4L.jpg';
import img3 from '../../assets/img-3-pR2ZEVY9.jpg';
import img4 from '../../assets/img-4-tHccITd-.jpg';
import img5 from '../../assets/img-5-lAucr__a.jpg';
import img6 from '../../assets/img-6-DFW03AZ3.jpg';

export const images = [
  { id: 1, category: "graphic", src: img1 },
  { id: 2, category: "graphic", src: img2 },
  { id: 3, category: "graphic", src: img3 },
  { id: 4, category: "graphic", src: img4 },
  { id: 5, category: "graphic", src: img5 },
  { id: 6, category: "graphic", src: img6 },
  { id: 7, category: "apps", src: img5 },
  { id: 8, category: "apps", src: img6 },
];
ّ


export default function Work() {
  const [activeTab, setActiveTab] = useState("graphic");
  const [showAll, setShowAll] = useState(false);

  const filtered = images.filter((img) => img.category === activeTab);
  const displayedImages = showAll ? filtered : filtered.slice(0, 4);

  return (
    <div id="work" className="container py-5">
      <p className="workTitle text-center">MY WORK</p>
      <h2 className="workHeading text-center mb-4">RECENT WORK</h2>

      <ul className="nav nav-tabs mb-4 justify-content-center ">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "graphic" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("graphic");
              setShowAll(false);
            }}
          >
            Graphic Design
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "apps" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("apps");
              setShowAll(false);
            }}
          >
            Apps
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "software" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("software");
              setShowAll(false);
            }}
          >
            Software
          </button>
        </li>
      </ul>

      <div className="row">
        {displayedImages.map((img) => (
          <div className="col-md-6 mb-4" key={img.id}>
            <div
              className="project"
              style={{ backgroundImage: `url(${img.src})` }}
            >
              <div className="overlay">
                <div className="overlay-content">
                  <h3>Work 02</h3>
                  <span>Animation</span>
                  <p className="icons">
                    <span><i className="fa-solid fa-share-nodes"></i></span>
                    <span><i className="fa-regular fa-eye"></i> 100</span>
                    <span><i className="fa-regular fa-heart"></i> 48</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length > 4 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary showMoreButton"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
