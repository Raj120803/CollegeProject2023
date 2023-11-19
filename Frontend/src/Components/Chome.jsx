import React from 'react';
import "./home.css";

import img1 from "./image/4722395.jpg";
import img2 from "./image/1651306893492.jpeg";
import img3 from "./image/1651306893499.png";

function Chome() {
  return (
<>
<header className='header3'></header>
<div>
    <h1 style={{color:"gray", textDecoration:"underline"}}>WORKOUTS</h1>
</div>
<div>
    <p>
        Whether you’re into bodybuilding, power lifting, strength training or just<br/> getting started, these
        workouts and tips will help you reach your goals.
    </p>
</div>
<img className="one" src={img1}/>
<img className="one" src={img2}/>
<img className="two" src={img3}/>
</>
  )
}
export default Chome;