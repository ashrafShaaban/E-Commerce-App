import React from 'react'
import Products from './Products'
import './home.css'

export default function Home() {
  return (
    <div className='hero'>
        <div className="card bg-dark text-white border-0 ">
          <div className='bg'>
          <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
              <h5 className="card-title  display-3 fw-bolder  mb-0 " >NEW SEASON ARRIVALS</h5>
              <p className="card-text lead fs-2 " >CHECK OUT ALL TRENDS </p>
          
            </div>    
          </div>  
          </div>
        </div>
        <Products />
    </div>
  )
}
