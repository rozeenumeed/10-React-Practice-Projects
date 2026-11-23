import React from 'react'

const Body = () => {
  return (
    <div className='w-screen flex'>
        <div className='w-1/2 p-12 flex flex-col gap-6'>
   <h1 className='font-extrabold text-7xl'>YOUR FEET DESERVE THE BEST</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae, nisi fugit optio qui eos libero repellat modi velit ad ducimus ea. Ipsa repellat aut libero eos error illum accusamus.</p>
       <div className='flex gap-5'>
        <button className='bg-red-800 text-white font-bold w-25 h-10 '>ShopNow</button>
          <button className='bg-red-800 text-white font-bold w-25 h-10 '>Category</button>
       </div>
        </div>
      <div className='w-1/2'>
        <img className='h-full w-full bg-transparent' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqcE0cGQrWw6Qp3ZRxk88b0zFKz-MjlnRjcxd8zgyJg&s=10" alt="shoe img"></img>
      </div>
        
    </div>
  )
}

export default Body
