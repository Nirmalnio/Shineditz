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
                    <Link className="drpdwnlink" to="/services">Clipping path</Link>
                    <Link className="drpdwnlink" to="/services">Color correction</Link>
                    <Link className="drpdwnlink" to="/services">shadow correstion</Link>
                    <Link className="drpdwnlink" to="/services">Ghost removal</Link>
                    <Link className="drpdwnlink" to="/services">Image Masking</Link>

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

    <Offcanvas show={show} onHide={handleClose} /* responsive="lg" */ placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shineditz</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <div className='p-3 d-flex flex-column align-items-center mobdiv'>
               <Link  to="/pricing"><div className='mob-options'>Pricing</div></Link> 
               <Link to="/services"><div  className='mob-options'>services</div></Link> 
               <Link to="/contact" style={{textDecoration:"none"}}>
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