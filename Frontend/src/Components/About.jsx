import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom';
import img from "./image/gymflex-removebg-preview.png"

function About() {
  return (
    <>
    <div className="abt">
    
      <div className="Back1">
        <Link to="/Home">Back</Link>
        
    </div>

 
 </div>
 <div className="content">
     
         <h1>About Us..</h1>
         <div className="img">
     </div>
     <p> GYMFLEX is committed to serve fitness enthusiasts with top quality fitness equipment and accessories. We build the best home gym, office, and sports complex gym. We are also the pioneers of performance accessories in India, such as wrist support, BFR bands, squat shoes, knee sleeves and powerlifting belts. We believe in every aspect of life a person can perform- One Rep More! And our made to last products will serve as a reminder for this power within you.
     </p>

 </div>
 <div className="social-menu">
 
    <ul>
    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/facebook-new.png" alt="facebook-new"/>
      <li><Link to="https://www.instagram.com" target="blank"><i className="fa fa-instagram"></i></Link></li>
      <li><Link to="https://www.youtube.com" target="blank"><i className="fa fa-youtube"></i></Link></li>
    </ul>
  </div>
    </>
  )
}
export default About;
