import React from 'react'
import "../Footer/Footer.css"
import { links } from '../../links'
import {FaLocationDot} from "react-icons/fa6"

const Footer = () => {
  return (
    <>
      <div id ="footer" className="foot p-5 mt-5 row">
      <div className='col col-lg-8 col-sm-12 d-flex align-items-center listWrap'>
      <ul className='list mb-3'>
         {
            links.map((link,index)=>{
              return(
                <li key={index} ><a href={link.path} className='linkStyle mx-auto'><h4 className='mb-3 info'>{link.title}</h4></a></li>
              )
               })
         }
            
         </ul>
      </div>
      <div className='col col-lg-4 col-sm-12  text-center '>
      <h3 className='mb-3 contacts'>Contact Us </h3>
      <div className='text-start info mx-auto'>
      <p>Email:ceo.df@iitr.ac.in</p>
      <p >Mobile no.:+91 8868055581</p>
      </div>
      <div className='info mx-auto mb-3 text-start'>
     <FaLocationDot className='me-3'/> 
     DORA Office, Near CEC and Trainee centre, Indian Institute of Technology Roorkee, Roorkee, Uttarakhand 247667
      </div>
      <img src="map.svg" className='size' alt="maps"></img>
      </div>
         
      </div>
    </>
  )
}

export default Footer
