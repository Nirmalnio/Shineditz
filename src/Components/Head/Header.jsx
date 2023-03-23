import React from 'react'
import "./Header.css"
import Logo from '../../Assets/Images/Shine Logo 3.jpg'
function Header() {
  return (
    <div className='headerDiv'>
        <div>
            <img src={Logo} alt="Shineditz" className='headerlogo' />
        </div>
        <div className='headermenu'>
            <ul>
                <li>Services</li>
                <li>Samples</li>
                <li>Pricing</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Header