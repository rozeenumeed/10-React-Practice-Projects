import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className='h-screen w-screen flex'>
      <div className='w-2/3 h-screen flex items-center'>
      <img className="h-[70%]   w-[80%] pl-15 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdqqQttQrsqnp4fVzoqIDw690XT2wCKeEcTuCS7J6FVg&s=10" alt="Dices"/>
      </div>
      <div className='w-1/3 h-screen gap-9 flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold' >DICE GAME</h1>
        <button onClick={()=>{
navigate('/MainLogic')
        }
           
        } className='w-1/2 h-6 cursor-pointer hover:scale-105 bg-black text-white '>START</button>
      </div>
    </div>
  )
}

export default Home
