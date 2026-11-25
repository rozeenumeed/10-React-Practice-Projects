import React from 'react'
import{Plus} from 'lucide-react'
import { useState } from 'react'

const InputBar = (Props) => {
 

  return (
    <div className='w-[90%]  flex justify-between  h-10 px-5 m-auto my-6'>
      <input onChange={Props.EnteredValue} 
      onKeyDown={(e)=>{
       if( e.key==="Enter"){
        Props.MatchFunction();
       }

      }}
      className='w-[83%] p-2 focus:outline-none border-2 border-amber-500 bg-white' type="search" placeholder="🔍"></input>
      <button onClick={Props.PopUpFunctionality} className='w-10 cursor-pointer flex justify-center items-center border-2 rounded-full bg-white'><Plus /></button>
    </div>
  )
}

export default InputBar
