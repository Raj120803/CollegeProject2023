import React from 'react'
import "./sholder.css"
import sholder from "./image/shoulders.jpg"
function Sholder() {
  return (
    <>
    
		<div className="shoulders">
		<img className="shoulders" src={sholder}/>
		<h1>shoulders exercises</h1>
		<p>Build your shoulders, traps and delts with these upper-body <br/>workouts and tips</p>

	</div>

	<div className="press">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/2yjwXTZQDDI?controls=0&amp;start=17" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>overhead press</h1>
		<p>The overhead press is an upper-body weight training exercise in which the trainee presses a weight overhead while seated or standing. It is mainly used to develop the anterior deltoid muscles of the shoulder</p>
	</div>

	<div className="side">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/3VcKaXpzqRo?controls=0&amp;start=21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>Lateral Raises</h1>
		<p>The shoulder fly (also known as a lateral raise) works the deltoid muscle of the shoulder. The movement starts with the arms straight, and the hands holding weights at the sides or in front of the body</p>
	</div>

	<div className="rear">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/ttvfGg9d76c?controls=0&amp;start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>Bent-Over Rear Delt Fly</h1>
		<p>Movements for the posterior deltoid done in the transverse plane are also referred to by terms like rear delt fly, reverse fly, rear lateral raise, bent-over lateral raises or other variations</p>
	</div>

	
    </>
  )
}
export default Sholder;