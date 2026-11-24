import React from 'react'
import Card from './Card'

const Breakfast = () => {
    const BreakfastArray = [
  {
    imageSource: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
    name: "Noodles",
    para: "Hot and spicy noodles with fresh vegetables.",
    price: 500
  },
  {
    imageSource: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    name: "Fresh Salad",
    para: "Healthy salad with fresh vegetables and dressing.",
    price: 350
  }
];
  return (
   <div className='w-screen h-[82vh] flex justify-center items-center'>
         <div className='flex flex-wrap gap-4 justify-center'>
           {BreakfastArray.map((e, index) => (
             <div key={index}>
               <Card imageSource={e.imageSource} Name={e.name} Para={e.para} Price={e.price} />
             </div>
           ))}
         </div>
       </div>
  )
}

export default Breakfast
