import React from 'react'
import Card from './Card'

const Dinner = () => {
    const DinnerArray = [
  {
    imageSource: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    name: "Chicken Burger",
    para: "Delicious chicken burger with fresh vegetables and cheese.",
    price: 450
  },
  {
    imageSource: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    name: "Pizza",
    para: "Freshly baked pizza with cheese and delicious toppings.",
    price: 1200
  }
];
  return (
    <div className='w-screen h-[82vh] flex  justify-center items-center'>
          <div className='flex flex-wrap gap-4 justify-center'>
            {DinnerArray.map((e, index) => (
              <div key={index}>
                <Card imageSource={e.imageSource} Name={e.name} Para={e.para} Price={e.price} />
              </div>
            ))}
          </div>
        </div>
  )
}

export default Dinner
