
import React from 'react'
import Card from './Card'
import {useState,useEffect} from 'react'

const DataArray = [
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
  },
  {
    imageSource: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    name: "Pasta",
    para: "Creamy pasta with rich sauce and Italian herbs.",
    price: 650
  },
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
  },
  {
    imageSource: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    name: "Ice Cream",
    para: "Sweet and creamy ice cream for dessert lovers.",
    price: 250
  }
];


const Body = (Props) => {
  let SearchedData=Props.functionality;
  const [cardDisplay,setcardDisplay]=useState(
  <div className='flex flex-wrap gap-4 justify-center'>
        {DataArray.map((e, index) => (
          <div key={index}>
            <Card imageSource={e.imageSource} Name={e.name} Para={e.para} Price={e.price} />
          </div>
        ))}
      </div>
);

function matching() {
  let matchedCards = [];

  DataArray.map((elem, index) => {
    if (elem.name.toLowerCase().includes(SearchedData.toLowerCase())) {
      matchedCards.push(
        <div key={index}>
          <Card
            imageSource={elem.imageSource}
            Name={elem.name}
            Para={elem.para}
            Price={elem.price}
          />
        </div>
      );
    }
  });

  setcardDisplay(
    <div className='flex flex-wrap gap-4 justify-center'>
      {matchedCards}
    </div>
  );
}
useEffect(() => {
  if (SearchedData === "") {
    setcardDisplay(
      <div className='flex flex-wrap gap-4 '>
        {DataArray.map((e, index) => (
          <div key={index}>
            <Card
              imageSource={e.imageSource}
              Name={e.name}
              Para={e.para}
              Price={e.price}
            />
          </div>
        ))}
      </div>
    );
  } else {
    matching();
  }
}, [SearchedData]);
  return (
   <div className='w-screen min-h-[82vh] flex flex-wrap justify-center content-start gap-4 py-5 overflow-y-auto'>
  {cardDisplay}
</div>
  )

}

export default Body
