import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Head/Header'
import "./homepage.css"
function Homepage() {
  return (
    <div>
        <Header/>
        <div className='homepage-topdiv'>
          <h1>Enhance Your Product Images with </h1>
          <h2>Expert Photoshop Services</h2>
        </div>
         <div className='h-p-secndDiv'>
          <p className='h-p-descrip'>From a simple white background to the most complex clipping paths. Get pixel perfect image editing services,  Get Flawless Edits in just 12-16 hours with Sheneditz.</p>
         </div>
         <div>
          
         </div>
    </div>

  )
}

export default Homepage