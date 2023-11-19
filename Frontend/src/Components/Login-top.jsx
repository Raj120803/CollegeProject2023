import React from 'react'
import "./home.css";
import {Nav,Nabar, NavDropdown} from "react-bootstrap";

import { Link } from 'react-router-dom';
import img from "./image/gymflex-removebg-preview (1).png";

 function TopNavlog() {

  return (
    
    <nav>

      <Link to="/Home" > <img className="logo" src={img}/></Link>

        <div className="menu">
            <ul>
                <li><Link to="/Blogs">BLOGS</Link></li>
                <li><Link to="#">WORKOUTS</Link>
                    <div className="workouts">
                        <ul>
                            <li><Link to="/Home/Abs">ABS EXERCISE</Link></li>
                            <li><Link to="/Home/Arms">ARMS EXERCISE</Link></li>
                            <li><Link to="/Home/Back">BACK EXERCISE</Link></li>
                            <li><Link to="/Home/Chest">CHEST EXERCISE</Link></li>
                            <li><Link to="/Home/Legs">LEGS EXERCISE</Link></li>
                            <li><Link to="/Home/Sholder">SHOULDERS EXERCISE</Link></li>
                        </ul>

                    </div>
                </li>
                <li><Link to="/Bmi">BMI</Link></li>
                <li><Link to="">BMR</Link></li>
               <li style={{color:"black"}}><Link to="/Login">Logout
              
                </Link>
               </li>
                
                
            </ul>

        </div>

    </nav>

  )
}
export default TopNavlog;
