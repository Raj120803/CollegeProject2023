import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import img from "./image/gymflex-removebg-preview.png";


 function Footer() {
  return (
    <>
    <footer className='footer1'>
    <div className="row">
        <div className="col">
            <img src={img}className="log"/>
            <p>© GYMFLEX Official Store</p>
        </div>
        <div className="col">
            <h3>company</h3>
            <ul>
                <li><Link to="/About">about us</Link></li>
                <li><Link to="#">our services</Link></li>
                <li><Link to="#">privacy policy</Link></li>
            </ul>
        </div>
        <div className="coll">
            <h3>Help & Info</h3>
            <ul>
                <li><Link to="contact.html">Contact Us</Link></li>
                <li><Link to="faq.html">faq</Link></li>
            </ul>
        </div>
        
    </div>
</footer>
    </>
  )
}
export default Footer;