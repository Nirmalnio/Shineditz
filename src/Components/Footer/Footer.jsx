import React from 'react'
import Logo from '../../Assets/Images/Shine Logo 3.jpg'
import AszenLogo from '../../Assets/Images/Aszen Logo 1.jpg'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { facebookicon, youtubeicon, instaIcon, linkedin } from '../../Assets/icon'

function Footer() {


  const aszen = () => {
    window.location.href('http://aszentech.com/')
  }
  return (
    <div className='footermaindiv'>

      <div className='footerinside'>
        <div className='logofoot'>
          <img src={Logo} alt="" className='footerlogo' /> 
          {/* <span className='footerlogotxt'>Enhancing photo images</span>  */}
          
        </div>

        <div className='footeroptions'>
          <div>
            <b className='ben' >Product</b>
           <Link to='/services' style={{ textDecoration: "none" }}><span>Services</span></Link> 
           <Link to='/samples' style={{ textDecoration: "none" }}><span>Samples</span> </Link> 
           <Link to='/pricing' style={{ textDecoration: "none" }}> <span>Pricing</span></Link> 
            

          </div>

          <div>
            <b className='ben'>Company</b>            
           <Link to='/aboutus' style={{ textDecoration: "none" }}><span>About Us</span></Link> 
           <Link to='/contact' style={{ textDecoration: "none" }}><span>Contact Us</span> </Link> 
         
          </div>

          <div>
            <b className='ben'>Legal</b>
            <Link to='/' style={{ textDecoration: "none" }}><span>Terms & Conditions</span></Link> 
            <Link to='/' style={{ textDecoration: "none" }}><span>Privacy Piolicy</span> </Link> 
          
          </div>

        </div>


      </div>
      <div className='footerbtm'>
        <div>
          <small>Copyrights 2023@aszentech.All rights issued</small>
        </div>
        <div>{""}</div>
        <div className='d-flex align-items-center'>
          <div className='mx-2'><a href="https://www.facebook.com/p/Vista-editz-100064031984655/">
            {facebookicon}
          </a></div>
          <div className='mx-2'><a href="https://www.youtube.com/@vistaedits8287">
            {youtubeicon}</a></div>
          <div className='mx-2'><a href="https://www.instagram.com/vista_editz/">
            {instaIcon}</a></div>
          <div className='mx-2'><a href="https://www.linkedin.com/in/aszen-technologies/">
            {linkedin}</a></div>
        </div>
      </div>
    </div>
  )
}

export default Footer