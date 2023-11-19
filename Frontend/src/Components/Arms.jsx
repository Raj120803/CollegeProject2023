import React from 'react'
import "./arms.css"
import arms from "./image/arms.jpg"
function Arms() {
  return (
<>
<div className="arms">
		<img className="arms" src={arms}/>
		<h1>arms exercises</h1>
		<p>Essential tips and workouts for growing <br/>your guns</p>

	</div>
	<div className="dumbbel">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/ykJmrZ5v0Oo?controls=0&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>dumbbel curl</h1>
		<p>The term "biceps curl" refers to any of a number of weight training exercises that primarily targets the biceps brachii muscle. It may be performed using a barbell, dumbbell, resistance band, or other equipment</p>
	</div>
	<div className="wrist">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/qMtmHwaCmYI?controls=0&amp;start=18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>Wrist curl</h1>
		<p>The wrist curl is a weight training exercise for developing just the wrist flexor muscles of the forearm. It is therefore an isolation exercise. Ideally, it should be done in combination with the "reverse wrist curl" (also called wrist extension) to ensure equal development of the wrist flexor and wrist extensor muscles.</p>
	</div>

	<div className="cable">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/2-LAMcpzODU?controls=0&amp;start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>Cable Push Downs</h1>
		<p>The exercise is completed by pushing an object downward against resistance. This exercise is an example of the primary function of the triceps, extension of the elbow joint.</p>
	</div>
		<div className="button">
		
		
	</div>
</>  
)
}
export default Arms;