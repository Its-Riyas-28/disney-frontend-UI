import React from 'react'
import logo from './../assets/images/Logo.png'

function Header() {
  return (
    <div>
        <img src={logo} alt='Disney Logo' className='w-[80px] object-cover md:w-[115px]'/>
    </div>
  )
}

export default Header