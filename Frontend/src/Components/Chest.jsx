import React from 'react'
import "./chest.css"
import chest from "./image/PINUT_062617_FI-1.jpg"
function Chest() {
  return (
    <>
    <div className="chest">
    <img className="chest" src={chest}/>
    <h1>chest exercises</h1>
    <p>Get the chest you want with these upper-body <br/>workouts and tips</p>

</div>

<div className="bench">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rT7DgCr-3pg?controls=0&amp;start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h1>Barbell Bench Press</h1>
    <p>The bench press, or chest press, is an upper-body weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench.</p>
</div>
<div className="incline">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/DbFgADa2PL8?controls=0&amp;start=58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h1>incline bench press</h1>
    <p>An incline elevates the shoulders and lowers the pelvis as if reclining in a chair; this variation emphasizes anterior deltoids with little emphasis at the upper (clavicular) head of the pectoralis major</p>
</div>
<div className="flys">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/eozdVDA78K0?controls=0&amp;start=17" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h1>Dumbbell Flys</h1>
    <p>The chest fly or pectoral fly (abbreviated to pec fly) primarily works the pectoralis major muscles to move the arms horizontally forward</p>
</div>

    
</>
  )
}
export default Chest;