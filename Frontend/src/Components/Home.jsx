import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import Footer from './Footer';


 function Home() {
  return (
    <div>
    <TopNav/>
   <div style={{minHeight:"300px"}}>
  
   <Outlet/>
   </div>

<Footer/>
</div>
)
}
export default Home;