import React from 'react'
import "./about.css"

 function Bmi() {
	function BMI() {
		var h=document.getElementById('h').value;
		var w=document.getElementById('w').value;
		if(h<=0 || w<=0){
			document.getElementById("result").innerHTML="Please enter valid height and weight";
		}
		else{
		var bmi=w/(h/100*h/100);
		var bmio=(bmi.toFixed(2));

		
		if(bmi < 18.6){
			document.getElementById("result").innerHTML="Your BMI is " + bmio+ "  (Under Weight)";
	}else if(bmi >= 18.6 && bmi < 24.9){
		document.getElementById("result").innerHTML="Your BMI is " + bmio+ "  (Normal)";
	}else {
		document.getElementById("result").innerHTML="Your BMI is " + bmio+ "  (Over Weight)";
	}
}

	
	}
  return (
    <>
	<div className='bodybmi'>
    <div className="BMI">
			<h2>BMI Calculator</h2>
			<p className="text">Height</p>
			<input type="text" id="h"/>
			<p className="text">Weight</p>
			<input type="text" id="w"/>
			<p id="result"></p>
			<button id="btn8" onClick={BMI}>Calculate</button>
			<p id="info">Please enter height [cm] and weight [kg]</p>
		</div>
		</div>
    </>
  )
}
export default Bmi;
