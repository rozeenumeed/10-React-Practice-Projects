
import React from 'react'


const Rules = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-gray-100 gap-6'>

      <h1 className='text-5xl font-bold'>GAME RULES</h1>

      <div className='bg-white p-8 rounded-xl shadow-lg w-[60%]'>
        <h2 className='text-2xl font-bold mb-5'>How to Play?</h2>

        <div className='flex flex-col gap-4 text-lg'>
          <p>1. Select any one number from 1 to 6.</p>
          <p>2. Click on the dice to roll it.</p>
          <p>3. If your selected number matches the dice number, you win points.</p>
          <p>4. If your selected number does not match, you lose points.</p>
          <p>5. Try to achieve the highest score!</p>
        </div>

        <p className='mt-6 text-center font-bold text-xl'>
          GOOD LUCK!
        </p>
      </div>

    </div>
  )
}

export default Rules
