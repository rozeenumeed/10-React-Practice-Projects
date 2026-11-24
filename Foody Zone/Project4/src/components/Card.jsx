
import React from 'react'

const Card = (Props) => {
  return (
    <div className='h-40 w-[350px] flex  gap-5 p-4 bg-white shadow-lg rounded-xl'>

      <img
        className='h-28 w-28 rounded-full object-cover'
        src={Props.imageSource}
        alt="Item Photo"
      />

      <div className='flex flex-col gap-2 justify-between text-black'>
        <div>
        <h1 className='font-bold text-xl'>{Props.Name}</h1>

        <p className='text-gray-600 text-sm'>
          {Props.Para}
        </p>
           </div>
        <button  className='bg-orange-500  text-white rounded-lg px-4 py-1 w-fit font-semibold'>
          Rs. {Props.Price}
        </button>
      </div>

    </div>
  )
}

export default Card
