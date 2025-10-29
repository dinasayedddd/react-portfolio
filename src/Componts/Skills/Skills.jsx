import React from "react";
import "./Skills.css";

export default function Skills() {

  return (
    <>
    <div
      id="skills"
      className="container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100"
    >
      <p className="skillsTitle">MY SPECIALTY</p>
      <h2 className="skillsHeading">MY SKILLS</h2>
      <p className="skillsText">
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <h3 className="mb-2 progressTitle">Photoshop</h3>
          <div className="progress proColor1">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <h3 className="mb-2 progressTitle">HTML5</h3>
          <div className="progress proColor2">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <h3 className="mb-2 progressTitle">WordPress</h3>
          <div className="progress proColor3">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="col-md-6">
          <h3 className="mb-2 progressTitle">jQuery</h3>
          <div className="progress proColor4">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <h3 className="mb-2 progressTitle">CSS3</h3>
          <div className="progress proColor5">
            <div
              className="progress-bar bg-dark"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <h3 className="mb-2 progressTitle">SEO</h3>
          <div className="progress proColor6">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "80% " }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
</>
  );
}

