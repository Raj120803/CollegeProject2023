import React from 'react'
import "./legs.css"
import legs from "./image/legs.jpg"

function Legs() {
  return (
    <>
    <div className="legs">
		<img className="legs" src={legs}/>
		<h1>legs exercises</h1>
		<p>Dominate leg day with these ultimate lower-body<br/> workouts</p>

	</div>
	<div className="squat">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/SW_C1A-rejs?controls=0&amp;start=17" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>Squat</h1>
		<p>A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up</p>
	</div>

	<div className="lunge">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/D7KaRcUTQeE?controls=0&amp;start=20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>Lunge</h1>
		<p>A lunge can refer to any position of the human body where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind</p>
	</div>

	<div className="calf">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/3UWi44yN-wM?controls=0&amp;start=14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>Calf Raises</h1>
		<p>Calf raises are a method of exercising the gastrocnemius, tibialis posterior, peroneals and soleus muscles of the lower leg</p>
	</div>

	
    </>
  )
}
export default Legs;