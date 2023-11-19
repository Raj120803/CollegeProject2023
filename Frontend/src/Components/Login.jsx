import React, { useState } from 'react'
import "./Login.css";
import axios from "axios"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet"></link>

function Login() {
	const [user, setUser] = useState({
		username: "",
		email: "",
		number:"",
		password: ""
	})
	
	const navigate = useNavigate()
	const handleApi = async (e) => {
		e.preventDefault()
		console.log(user)

		const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
		if (!gmailRegex.test(user.email)) {
			alert("Invalid Gmail address. Please use a Gmail.");
			return;
		}
		console.log(user)

		const response = await axios.post('http://localhost:4000/registration', {
			...user
		}).catch((err) => {
			console.log(err)
		});
		console.log(response?.data)
		if (response?.data.msg === "Sign Up successfull") {
			alert('Signup successfull !');
			// setInterval(handleApi, 5000)
			navigate("/Answer");
		}
		else {
			console.log(user)
			alert("Please provide all required fields: username, email,number and password")
			// console.log(username,email,password,"hyy")
		}
	}
	


	const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:4000/login', { ...user });

    if (response?.data.mssg === "login success") {
    

      alert('Login successful!');
      navigate("/Answer");
    } else {
      console.log(user);
      alert("Incorrect email and password");
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred during login");
  }
};


	return (
		<>
			<div className='fine'>

			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div className="mainstuct">
					<input type="checkbox" id="chk" aria-hidden="true" />

					<div className="signup">
			
							<label className='a' for="chk" aria-hidden="true">Sign up</label>
							<input className='inputlog' type="text" name="txt" placeholder="User name" value={user.name} onChange={(e) => { setUser({ ...user, username: e.target.value }) }} required="" />
							<input className='inputlog' type="email" name="email" placeholder="Email" value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} required="" />
							<input className='inputlog' type="number" name="number" placeholder="mobile number" value={user.number} onChange={(e) => { setUser({ ...user, number: e.target.value }) }} required="" />
							<input className='inputlog'  name="pswd" placeholder="Password" value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} required="" />
							<button className='button1' type="submit" onClick={handleApi} >Sign up</button>
							<li><Link  className='own' to="/Owner">Admin Login</Link></li>
						
					</div>




					<div className="login">
						<form>
							<label for="chk" aria-hidden="true">Login</label>
							<input className='inputlogin' type="email" name="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
           				    <input className='inputlogin1' type="password" name="password" placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
            				<button className='button1' onClick={handleLogin}>Login</button>
							<li><Link to="/"></Link></li>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
export default Login;