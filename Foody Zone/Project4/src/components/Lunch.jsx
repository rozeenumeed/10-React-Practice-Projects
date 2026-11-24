import React from 'react'
import Card from './Card'

const Lunch = () => {
    const LunchArray = [
  {
    imageSource: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    name: "Ice Cream",
    para: "Sweet and creamy ice cream for dessert lovers.",
    price: 250
  }
];
  return (
    <div className='w-screen h-[82vh] flex justify-center items-center'>
          <div className='flex flex-wrap gap-4 justify-center'>
            {LunchArray.map((e, index) => (
              <div key={index}>
                <Card imageSource={e.imageSource} Name={e.name} Para={e.para} Price={e.price} />
              </div>
            ))}
          </div>
        </div>
  )
}

export default Lunch
