

import React, { useState, useEffect } from 'react'
import { MessageSquareText, Phone } from 'lucide-react'
import Forms from './Forms'

const Body = () => {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [textDesc, settextDesc] = useState("");
  const [confirmMessage, setconfirmMessage] = useState(false);

  useEffect(() => {
    if (confirmMessage) {
      const timer = setTimeout(() => {
        setconfirmMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [confirmMessage]);

  function PreventReloadForm(e) {
    e.preventDefault();

    // Pehle se saved data lena
    const oldData = JSON.parse(localStorage.getItem("userData")) || [];

    // Naya data banana
    const newData = {
      nameForm: name,
      FormMail: mail,
      TextDesc: textDesc
    };

    // Naya data purane data mein add karna
    oldData.push(newData);

    // Saara data Local Storage mein save karna
    localStorage.setItem("userData", JSON.stringify(oldData));

    setconfirmMessage(true);

    // Inputs clear karna
    setName("");
    setMail("");
    settextDesc("");
  }

  return (
    <div className='m-15 box-border relative'>
      <h1 className='font-extrabold text-6xl'>CONTACT US</h1>

      <p className='my-4 w-[90%]'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Inventore, maxime minus. Illum iusto delectus, atque itaque
        illo praesentium fugiat!
      </p>

      <div className='flex w-full'>

        <div className='w-1/2'>

          <div className='flex gap-5 mt-15'>
            <button className='bg-black w-50 cursor-pointer flex h-12 justify-center items-center gap-3 text-white'>
              <MessageSquareText />
              VIA SUPPORT CHAT
            </button>

            <button className='bg-black w-50 cursor-pointer flex h-12 justify-center items-center gap-3 text-white'>
              <Phone />
              VIA CHAT
            </button>
          </div>

          <button className='w-105 mt-5 h-12 justify-center items-center border-2'>
            VIA EMIAL FORM
          </button>

          <form onSubmit={PreventReloadForm} className='flex flex-col gap-5 mt-8 w-105'>

            {/* Name */}
            <div className='relative'>
              <label className='absolute -top-2 left-4 bg-white px-1 text-sm font-semibold'>
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full h-12 border-2 border-black-400 px-4 outline-none focus:border-black'
              />
            </div>

            {/* Email */}
            <div className='relative'>
              <label className='absolute -top-2 left-4 bg-white px-1 text-sm font-semibold'>
                E-Mail
              </label>

              <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className='w-full h-12 border-2 border-black-400 px-4 outline-none focus:border-black'
              />
            </div>

            {/* Message */}
            <div className='relative'>
              <label className='absolute -top-2 left-4 bg-white px-1 text-sm font-semibold'>
                TEXT
              </label>

              <textarea
                value={textDesc}
                onChange={(e) => settextDesc(e.target.value)}
                rows="5"
                className='w-full border-2 border-black-400 p-4 outline-none focus:border-black'
              />
            </div>

            <button
              type="submit"
              className='bg-black text-white p-3 hover:scale-105 cursor-pointer'
            >
              Submit
            </button>

          </form>
        </div>

        <div className='w-1/2'>
          <img
            className="h-150 box-border"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKaL683rnaA1KHp1nZJNHdUOh5ENqTXfrTUy60YrYCQ&s=10"
            alt="Service image"
          />
        </div>
      </div>

      {confirmMessage && (
        <div className='bg-green-600 text-white fixed bottom-5 right-5 p-3 rounded-lg shadow-lg animate-[slide_0.5s_ease-in-out]'>
          Form Submitted Successfully!!!
        </div>
      )}

    </div>
  )
}

export default Body
