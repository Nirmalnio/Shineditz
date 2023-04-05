import React from 'react'
import "./Header.css"
import Logo from '../../Assets/Images/Shine Logo 3.jpg'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import {menuicon} from "../../Assets/icon"
import { GiHamburgerMenu} from "react-icons/gi";
import { useState,useEffect } from "react"
function Header() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
  <path d="M12 16.5l-6-6 1.5-1.5 4.5 4.5 4.5-4.5 1.5 1.5z" fill="currentColor"/>
</svg>
                                      
  
  return (
    <>
    <div className='headerDiv'>
        <div>
           <Link to="/"> <img src={Logo} alt="Shineditz" className='headerlogo' /></Link>
        </div>
        <div className='headermenu'>
            <ul>
                <li className='dropdown'>
                  <div className='dropbtn'>Services&nbsp;{arrow}</div>
                  <div className='dropdown-content'>
                    <Link className="drpdwnlink" to="/serives">Clipping path</Link>
                    <Link className="drpdwnlink" to="/serives">Color correction</Link>
                    <Link className="drpdwnlink" to="/serives">shadow correstion</Link>
                    <Link className="drpdwnlink" to="/serives">Ghost removal</Link>
                    <Link className="drpdwnlink" to="/serives">Image Masking</Link>
                    <Link className="drpdwnlink" to="/serives"></Link>
                    <Link className="drpdwnlink" to="/serives"></Link>
                    <Link className="drpdwnlink" to="/serives"></Link>
                  </div>
                </li>
                
                <li>Samples</li>
                <Link to="/pricing" style={{textDecoration:"none"}} ><li>Pricing</li> </Link>
                <li>About Us</li>
          </ul>
        </div>
        <Link to="/contact" style={{textDecoration:"none"}}>
        <div className='contactus-btn'>
           Contact us
        </div>
        </Link> 
          <div className='mobmenu' onClick={handleShow}>
              <GiHamburgerMenu/>
          </div>
    </div>

    <Offcanvas show={show} onHide={handleClose} responsive="lg" placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shineditz</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
        </Offcanvas.Body>
    </Offcanvas> 
    </>
  )
}

export default Header