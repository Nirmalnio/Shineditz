import React from 'react'
import "./Header.css"
import Logo from '../../Assets/Images/Shine Logo 3.jpg'
import AszenLogo from '../../Assets/Images/Aszen Logo 1.jpg'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { menuicon } from "../../Assets/icon"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect, createRef } from "react"
import { animateScroll as scroll } from 'react-scroll';
function Header() {


  const [show, setShow] = useState(false);

  const [links, setlinks] = useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path d="M12 16.5l-6-6 1.5-1.5 4.5 4.5 4.5-4.5 1.5 1.5z" fill="currentColor" />
  </svg>


  const handleOptionClick = (id) => {
    window.location.href = "/services" + '#' + id;
  };


  return (
    <>
      <div className='headerDiv'>
        <div>
          <Link to="/"> <img src={Logo} alt="Shineditz" className='headerlogo' /></Link><br />
          <small style={{ marginLeft: "20px", marginTop: "-10px" }}>powered by <img src={AszenLogo} className='AszenLogo' alt="Aszentech" /></small>
        </div>
        <div className='d-flex align-items-center'>
        <div className='headermenu'>
          <ul>
            <li className='dropdown'>
              <div className='dropbtn'>Services&nbsp;{arrow}</div>
              <div className='dropdown-content'>
                <Link className="drpdwnlink" to="/services"
                // onClick={()=>handleOptionClick("ClippingPath")}
                >Clipping path</Link>
                <Link className="drpdwnlink" to="/services"
                  onClick={() => handleOptionClick("Color_Correction_Services")}
                >Color correction</Link>
                <Link className="drpdwnlink" to="/services"
                  onClick={() => handleOptionClick("ShadowCreation")}
                >shadow correstion</Link>
                <Link className="drpdwnlink" to="/services"
                  onClick={() => handleOptionClick("GhostMannequin")}
                >Ghost removal</Link>
                <Link className="drpdwnlink" to="/services"
                  onClick={() => handleOptionClick("Imagemasking")}
                >Image Masking</Link>
                <Link className='drpdwnlink' to="/services"
                  onClick={() => handleOptionClick("PhotoRetouching")}
                >Photo Retouching</Link>
              </div>
            </li>

            <Link to='/samples' style={{ textDecoration: "none" }}><li>Samples</li></Link>
            <Link to="/pricing" style={{ textDecoration: "none" }} ><li>Pricing</li> </Link>
            <Link to="/aboutus" style={{ textDecoration: "none" }}><li>About Us</li></Link>
          </ul>
      </div>
        <Link to="/contact" style={{ textDecoration: "none" }}>
            <div className='contactus-btn'>
              Contact us
            </div>
      </Link>
        </div>
        
      <div className='mobmenu' onClick={handleShow}>
        <GiHamburgerMenu size={30} />
      </div>
    </div >

      <Offcanvas show={show} onHide={handleClose} /* responsive="lg" */ placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shineditz</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='p-3 d-flex flex-column align-items-center mobdiv'>
            <Link to="/pricing"><div className='mob-options'>Pricing</div></Link>
            <Link to="/services"><div className='mob-options'>Services</div></Link>
            <Link to="/samples"><div className='mob-options'>Samples</div></Link>
            <Link to="/aboutus"><div className='mob-options'>About us</div></Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <div className='contactus-btn2'>
                Contact us
              </div>
            </Link>

          </div>
        </Offcanvas.Body>
      </Offcanvas> 
    </>
  )
}

export default Header