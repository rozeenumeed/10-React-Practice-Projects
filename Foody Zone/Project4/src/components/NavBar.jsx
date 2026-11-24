
import React from 'react'
import { useNavigate, } from 'react-router-dom'
import { useState } from 'react';

const NavBar = (Props) => {

  const navigate = useNavigate();
 
  return (
    <div className='[&_span]:text-red-600 px-10 pr-20 flex justify-between items-center bg-gray-600 h-[18vh] w-screen'>

      <h1 className='font-bold text-2xl'>
        F<span>oo</span>dy Z<span>o</span>ne
      </h1>

      <div className='flex gap-3 items-end h-full pb-5 [&>button]:bg-red-600 [&>button]:text-white [&>button]:py-1 [&>button]:font-medium [&>button]:hover:scale-105 [&>button]:cursor-pointer [&>button]:rounded-md [&>button]:px-3'>

        <button onClick={() => navigate("/")}>All Items</button>

        <button onClick={() => navigate("/Breakfast")}>Breakfast</button>

        <button onClick={() => navigate("/Lunch")}>Lunch</button>

        <button onClick={() => navigate("/Dinner")}>Dinner</button>

      </div>

      <input
        type="search"
        className='border-2 h-8 w-50 focus:outline-none p-2'
        placeholder="Search items"
        onKeyDown={(e)=>{
         if (e.key === "Enter") {
         Props.functionality(e);
  }
        }}
        
      />
      
    </div>
  )
}

export default NavBar
