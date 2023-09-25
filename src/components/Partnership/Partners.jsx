import React from 'react'
import '../Partnership/Partnership.css'

const cpartner=[
  {
    image:"satia.svg"
  },
  {
    image:"pfs.svg"
  },
  {
    image:"director.png"
  }
]
const gpartner=[
  {
    image:"gic.svg"
  },
  {
    image:"utdb.svg"
  }
]

const Partners = () => {
  return (
    <>
      <div className='partner m-3 p-3'>
        <h4 className='heading '>Our Partners</h4>
        <h5 className='mt-5 ms-5 subhead'>Corporate Partners</h5>
        <div className='row p-5'>
        {
          cpartner.map((partner,index)=>{
            return(
             
              <div className='col col-lg-4 text-center wrap align-middle col-sm-12 mb-5'>
                <img key={index} alt="partner" src={partner.image} className='mx-auto align-middle'></img>
                </div>
               
            )
          })
        }
        </div>
        <h5 className='mt-5 ms-5 subhead'>Government Partners</h5>
        <div className='row p-5'>
        {
          gpartner.map((partner,index)=>{
            return(
             
              <div className='col col-lg-4 text-center wrap align-middle col-sm-12 mb-5'>
                <img key={index} alt="partner" src={partner.image} className='mx-auto align-middle'></img>
                </div>
               
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default Partners
