import React from 'react'
import "./FrontLogin.css"
import { Link} from 'react-router-dom';
 function FrontLogin() {

    
  return (
  <>
	<header className='header10'>
	
		<div className="titel">
			<h1>GYM FLEX</h1>
		</div>
		<div className="button">
			<Link to="/home" className="btn7">SKIP</Link>
			<Link to="/Login" className="btn7">LOGIN</Link>
            
		</div>
	</header>
    </>
  )
}
export default FrontLogin;