import React from 'react'
import Logo from '../../Assets/Images/Shine Logo 3.jpg'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footermaindiv'>

      <div className='footerinside'>
           <div>
                <img src={Logo} alt="" className='footerlogo'/>
           </div>

           <div className='footeroptions'>
            <div>
              <b>Product</b>
              <span></span>
            </div>

            <div>
              <b>Company</b>

            </div>

            <div>
                <b>Legal</b>
            </div>

           </div>
      </div>

    </div>
  )
}

export default Footer