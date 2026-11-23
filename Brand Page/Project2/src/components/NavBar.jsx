import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' h-[20%] w-screen bg-amber-500 '>
        <div className='flex justify-between py-3 px-5' >
      <img className='h-full w-20 ' src='https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png' alt="logo"/>
       <div className='flex gap-3 font-bold justify-center items-center hover:underline'>
         <Link to="/Menu">MENU</Link>
                <Link to="/About">ABOUT</Link>
                       <Link to="/Location">LOCATION</Link>
                              <Link to="/Contact">CONTACT</Link>
       </div>
       <button className='bg-red-800 text-white font-bold w-20 h-10 rounded-md'>Login</button>
       </div>
    </div>
  )
}

export default NavBar
