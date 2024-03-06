import React from 'react'
import pizzaLogo from '../../assets/Pizza_Hut_logo.svg.png'
import viteLogo from '/vite.svg'

function Header() {
  return (
    <div className=' flex justify-around px-20 py-5 gap-16 bg-transparent'>
        <img src={pizzaLogo} alt="Pizza Hut" className='w-1/12 '/>

        <ul className='flex items-center justify-between w-3/5 gap-10 px-5 bg-transparent'>
          <li>Home</li>
          <li>Specialities</li>
          <li>About us</li>
          <li>Contact</li>
          </ul>
    </div>
  )
}

export default Header