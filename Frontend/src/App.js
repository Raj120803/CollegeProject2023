import React from 'react';
import FrontLogin from './Components/FrontLogin';
import Login from './Components/Login';
import Home from './Components/Home';
import Blogs from "./Components/Blogs"
import About from './Components/About';
import Abs from "./Components/Abs"
import Back from './Components/Back';
import Arms from './Components/Arms';
import Legs from './Components/Legs';
import Bmi from './Components/Bmi';
import Bmr from './Components/Bmr';
import Loginhome from './Components/Loginhome';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Chome from './Components/Chome';
import Chest from './Components/Chest';
import Sholder from './Components/Sholder';
import Owner from './Components/Owner';
import UserData from './Components/UserData';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontLogin/>}/>
        <Route path='/home' element={<Home/>}>
             <Route path='' element={<Chome/>}/>
             <Route path='Abs' element={<Abs/>}/>
             <Route path='Arms' element={<Arms/>}/>
             <Route path='Back' element={<Back/>}/>
             <Route path='Chest' element={<Chest/>}/>
             <Route path='Legs' element={<Legs/>}/>
             <Route path='Sholder' element={<Sholder/>}/>
        </Route>
        <Route path='Bmi' element={<Bmi/>}/>
        <Route path='Bmr' element={<Bmr/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path='/Owner' element={<Owner/>}/>
        <Route path="/usertable" element={<UserData/>}/>
        <Route path="/Answer" element={<Loginhome/>}>
             <Route path='' element={<Chome/>}/>
             <Route path='Abs' element={<Abs/>}/>
             <Route path='Arms' element={<Arms/>}/>
             <Route path='Back' element={<Back/>}/>
             <Route path='Chest' element={<Chest/>}/>
             <Route path='Legs' element={<Legs/>}/>
             <Route path='Sholder' element={<Sholder/>}/>
        </Route>
        <Route path="Blogs" element={<Blogs/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
  )
}
export default App;