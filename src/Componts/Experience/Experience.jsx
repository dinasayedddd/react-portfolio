import React from 'react'
import './Experience.css'

export default function Experience() {
  return (
    <>
    <div id="experience" className="container py-5">
  <p className="experienceTitle">EXPERIENCE</p>
  <h2 className="experienceHeading">WORK EXPERIENCE</h2>

  <ul className="timeline">
    <li>
      <div className="timeline-badge blue"><i className="fa-solid fa-pencil"></i></div>
      <div className="timeline-panel">
        <h2>Full Stack Developer <span>2017-2018</span></h2>
        <p>
          Tolerably earnestly middleton extremely distrusts she boy now not.
          Add and offered prepare how cordial two promise. Greatly who affixed
          suppose but enquire compact prepare all put. Added forth chief trees
          but rooms think may.
        </p>
      </div>
    </li>

    <li>
      <div className="timeline-badge red"><i className="fa-solid fa-pencil"></i></div>
      <div className="timeline-panel">
        <h2>Front End Developer at Google Company <span>2017-2018</span></h2>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life. One day however a small line of
          blind text by the name of Lorem Ipsum decided to leave for the far
          World of Grammar.
        </p>
      </div>
    </li>

    <li>
      <div className="timeline-badge yellow"><i className="fa-solid fa-pencil"></i></div>
      <div className="timeline-panel">
        <h2>System Analyst <span>2017-2018</span></h2>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life. One day however a small line of
          blind text by the name of Lorem Ipsum decided to leave for the far
          World of Grammar.
        </p>
      </div>
    </li>

    <li><div className="timeline-end"></div></li>
  </ul>
</div>

      
    </>
  )
}
