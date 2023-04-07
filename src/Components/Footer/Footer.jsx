import React from 'react'
import Logo from '../../Assets/Images/Shine Logo 3.jpg'
import AszenLogo from '../../Assets/Images/Aszen Logo 1.jpg'
import { Link } from 'react-router-dom'
import "./Footer.css"
function Footer() {
  return (
    <div className='footermaindiv'>

      <div className='footerinside'>
           <div>
                <img src={Logo} alt="" className='footerlogo'/> <br />
                <span className='footerlogotxt'>Enhancing photo images</span> 
               <div style={{padding:"20px"}}> <small >powered by <img src={AszenLogo} className='AszenLogo' alt="Aszentech"/> </small>

           </div>
           </div>

           <div className='footeroptions'>
            <div>
              <b>Product</b>
              <span>Services</span>
              <span>Samples</span>
              <span>Pricing</span>

            </div>

            <div>
              <b>Company</b>
              <span>About Us</span>
              <span>Contact us</span>
            </div>

            <div>
                <b>Legal</b>
                <span>Terms & Conditions</span>
                 <span>Privacy Piolicy</span>
            </div>

           </div>

          
      </div>
      <div className='footerbtm'>
     <div>
        <small>Copyrights 2023@aszentech.All rights issued</small>
     </div>
        <div>{""}</div>
     <div>

     </div>
      </div>
    </div>
  )
}

export default Footer