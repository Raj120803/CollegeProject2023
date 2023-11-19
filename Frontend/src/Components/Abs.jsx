import React from 'react'
import { Link } from 'react-router-dom';
import abs from "./image/abs.jpg"
import "./abs.css"
import TopNav from './TopNav';
import Footer from './Footer';

function Abs() {
  return (
    <>
    <TopNav/>
    <div className="abs">
		<img className="abs" src={abs}/>
		<h1>abs and core exercises</h1>
		<p>Sculpt a solid six-pack and chiseled <br/>midsection</p>

	</div>
	<div className="crunches">

		<iframe width="560" height="315" src="https://www.youtube.com/embed/Xyd_fa5zoEU?controls=0&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>crunches</h1>
		<p>The crunch is one of the most popular abdominal exercises. It works the rectus abdominis muscle.It allows both building "six-pack" abs, and tightening the belly. Crunches use the exerciser's own body weight to tone muscle, and are recommended as a low-cost exercise that can be performed at home.</p>
		
	</div>

	<div className="laying">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/xqTh6NqbAtM?controls=0&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>Laying Leg Raises</h1>
		<p>The leg raise is a strength training exercise which targets the iliopsoas (the anterior hip flexors). Because the abdominal muscles are used isometrically to stabilize the body during the motion, leg raises are also often used to strengthen the rectus abdominis muscle and the internal and external oblique muscles.</p>
	</div>
	<div className="hanging">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/X-ACS9vpRyU?controls=0&amp;start=9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>Hanging Knee Raises</h1>
		<p>The leg raise is a strength training exercise which targets the iliopsoas (the anterior hip flexors). Because the abdominal muscles are used isometrically to stabilize the body during the motion, leg raises are also often used to strengthen the rectus abdominis muscle and the internal and external oblique muscles.</p>
		
	</div>

	<div className="plank">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/pSHjTRCQxIw?controls=0&amp;start=8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<h1>plank</h1>
		<p>The plank (also called a front hold, hover, or abdominal bridge) is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.</p>
	</div>


    <Footer/>
    </>
  )
}
export default Abs;