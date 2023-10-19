import React from 'react';
import '../Navbar/Navbar.css';
import '../Aboutus/Aboutus';
import '../Director/Directors';
import '../Footer/Footer';
import '../Mousigned/Mousigned';
import '../Partnership/Partners';
// import { members } from '../../model'
// import '../Director/Directors.css'



const Navbar = () => {
    return (
        <>
    <div className="navbar">
    <nav class="navbar navbar-expand-lg ">
   <div className="develop">
    <div className="develop1">
    <a class="navbar-brand" href="#">IIT ROORKEE</a>
    </div>
    <div className="develop2">
        DEVELOPMENT FOUNDATION
    </div>
    </div>
      <ul class="ul navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#aboutus">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#directors">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#partner">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#footer">Contact Us</a>
        </li>
        <button className='donate'>DONATE</button>
      </ul>
   
 
    </nav>
    </div>
        </>
    )
}

export default Navbar
