import React from 'react'
import { members } from '../../model'
import '../Director/Directors.css'

const Directors = () => {
  return (
    <>
    <h4 className='heading m-3'>Board of Directors</h4>
    <div className='row mx-auto  p-3 ' >
   { members.map((member,index)=> {
    return(
        <div key={index} className="col col-lg-4 col-sm-12 col-md-6 mx-auto mb-5 " >
    <div className='card mx-auto wrapper'>
    <div className="upper">
        <img src={member.image} alt='member' className='members'></img>
    </div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(95, 188, 240, 1)" fill-opacity="1" d="M0,288L120,250.7C240,213,480,139,720,144C960,149,1200,235,1320,277.3L1440,320L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
  
  <div className="card-body card-styles text-center ">
    <h5 className="card-title mt-4">{member.name}</h5>
    <b className="card-text">{member.designation}</b>
  </div>
    </div>
 </div>
    )
    })
    }

    </div>
   
    </>
  )
}

export default Directors
