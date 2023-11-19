import React from 'react';
import { Outlet } from 'react-router-dom';
// import TopNav from './TopNav';
import TopNavlog from './Login-top';
import Footer from './Footer';

 function Loginhome() {
  return (
    <div>
    <TopNavlog/>
   <div style={{minHeight:"300px"}}>
   <Outlet/>
   </div>

<Footer/>
</div>
)
}
export default Loginhome;