import React from 'react'
import Logo from '../../Assets/Images/Shine Logo 3.jpg'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { facebookicon,youtubeicon,instaIcon,linkedin } from '../../Assets/icon'

function Footer() {
  return (
    <div className='footermaindiv'>

      <div className='footerinside'>
           <div>
                <img src={Logo} alt="" className='footerlogo'/> <br />
                <span className='footerlogotxt'>Enhancing photo images</span>
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
     <div className='d-flex align-items-center'>
       <div className='mx-2'><a href="https://www.facebook.com/shineditzz">
        {facebookicon}
       </a></div>
       <div className='mx-2'><a href="https://www.youtube.com/channel/UCR0rBe3RisbD_tXq-FMeTFA">
        {youtubeicon}</a></div>
       <div className='mx-2'><a href="https://www.instagram.com/shineditzz/">
        {instaIcon}</a></div>
       <div className='mx-2'><a href="https://www.linkedin.com/in/aszen-technologies/">
        {linkedin}</a></div>
     </div>
      </div>
    </div>
  )
}

export default Footer