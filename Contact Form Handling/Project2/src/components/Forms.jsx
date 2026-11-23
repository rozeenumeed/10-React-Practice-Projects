
import React from 'react'

const Forms = () => {

  const data = JSON.parse(localStorage.getItem("userData")) || [];

  return (
    <div className='p-10'>

      {data.map((item, index) => (

        <div key={index} className='border-2 border-black p-5 m-5 rounded-lg'>

          <h1>Name: {item.nameForm}</h1>

          <h1>Email: {item.FormMail}</h1>

          <h1>Message: {item.TextDesc}</h1>

        </div>

      ))}

    </div>
  )
}

export default Forms
