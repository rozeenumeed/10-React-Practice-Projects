import React from 'react'
import{CircleUserRound,Trash} from 'lucide-react'

const Crad = (Props) => {
  return (
    <div className='bg-yellow-100 justify-between flex p-3 w-[80%] my-5 m-auto rounded-md'>
        <div className='flex w-[90%]  gap-3  items-center'>
       <i className='text-amber-600'> <CircleUserRound  size={40}/></i>
      <div className='break-all'>
         <h1 className='font-bold text-[19px]'>{Props.ReceivedName}</h1>
         <p className='text-gray-600 italic'>{Props.ReceivedMail}</p>
      </div>
      </div>
      <button onClick={Props.DeleteFunction} className='text-amber-600 cursor-pointer'><Trash /></button>
     
    </div>
  )
}

export default Crad
