import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='flex justify-between p-3 bg-blue-400'>
      <img className="h-15 w-15" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TafLw3_h44INBoRmORk8_wvpUGJjn3pKPayBNoXbzA&s=10 " alt="logo"  />
    <div className='flex font-bold gap-5 justify-center items-center   mr-10'>
        <Link to="/">Home</Link>
<Link to="/About">About</Link>
<Link to="/Contact">Contact</Link>
<Link to="/Forms">All Forms</Link>
    </div>
    </div>
  )
}

export default NavBar
