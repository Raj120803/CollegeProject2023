import React from 'react'
import back from "./image/back.jpg"
import "./back.css"

function Back() {
  return (
    <>
    
    <div className="back">
		<img className="back" src={back}/>
		<h1>back exercises</h1>
		<p>Maximize your back with these workouts and<br/> tips</p>

	</div>
	<div className="deadlift">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/7Q_GnXm7LbI?controls=0&amp;start=52" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

		<h1>Deadlift</h1>
		<p>The deadlift is a weight training exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, torso perpendicular to the floor, before being placed back on the ground.</p>
	</div>
	<div className="lat">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/Z_3xHwuO8Tk?controls=0&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>lat pulldown</h1>
		<p>The pull-down exercise is a strength training exercise designed to develop the latissimus dorsi muscle. It performs the functions of downward rotation and depression of the scapulae combined with adduction and extension of the shoulder joint</p>
	</div>

	<div className="bent">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/9efgcAjQe7E?controls=0&amp;start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>bent over row</h1>
		<p>A bent-over row (or barbell row) is a weight training exercise that targets a variety of back muscles.</p>
	</div>
		
		<div className="button">
		
	</div>
    </>
  )
}
export default Back;