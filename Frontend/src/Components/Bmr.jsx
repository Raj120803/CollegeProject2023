// BMRCalculator.js
import React, { useState } from "react";
import "./bmr.css"

function Bmr() {
    const [weight, setWeight] = useState(70); // Initial weight value
    const [height, setHeight] = useState(170); // Initial height value
    const [age, setAge] = useState(30); // Initial age value
    const [gender, setGender] = useState('male'); // Initial gender value
    const [bmr, setBMR] = useState(0);
  
    const calculateBMR = () => {
      let bmrValue = 0;
      if (gender === 'male') {
        bmrValue = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmrValue = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
      setBMR(bmrValue);
    };
  
    return (
        <>
        <div className="bodybmr">
      <div className="bmr-calculator">
        <h4>BMR Calculator</h4>
        <div className="cover">
        <label className="wt">
          Weight (kg):
          <input className="inpu" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <label className="wt">
          Height (cm):
          <input className="inpu" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label className="wt">
          Age:
          <input className="inpu" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        </div>
        <label className="wt">
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <button onClick={calculateBMR}>Calculate BMR</button>
        <div className="result">
          <p>Your Basal Metabolic Rate (BMR) is: {bmr.toFixed(2)} calories/day</p>
        </div>
      </div>
      </div>
      </>
    );
  }
  

export default Bmr;
