
import React from 'react'
import { X } from 'lucide-react'

const Add = (Props) => {
  return (
    <div className='fixed inset-0 flex justify-center items-center  backdrop-blur-sm'>

      <div className='w-[350px] bg-white p-5 shadow-xl rounded-xl relative'>

        <button
          onClick={Props.closeFunctionality}
          className='absolute right-4 top-3 text-xl cursor-pointer'
        >
          <X size={20} />
        </button>

        <div className='flex flex-col gap-2 mt-8'>
          <label className='font-medium'>Name</label>
          <input
            type="text"
            onChange={Props.AddedName}
            placeholder="Enter name"
            className='border-2 border-gray-400 h-9 px-2 outline-none'
          />
        </div>

        <div className='flex flex-col gap-2 mt-5'>
          <label className='font-medium'>Email</label>
          <input
            type="email"
            onChange={Props.AddedMail}
            placeholder="Enter email"
            className='border-2 border-gray-400 h-9 px-2 outline-none'
          />          
        </div>

        <div className='flex justify-end mt-5'>
          <button 
          onClick={Props.DisplayedContact}
          className='cursor-pointer hover:scale-105 bg-amber-400 border-2 border-amber-600 rounded-lg px-3 py-2 font-semibold'>
            Add Contact
          </button>
          
        </div>

      </div>
    </div>
  )
}

export default Add
