
import React from 'react'
import Body from './components/Body'
import NavBar from './components/NavBar'
import Breakfast from './components/Breakfast'
import Lunch from './components/Lunch'
import Dinner from './components/Dinner'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

const App = () => {
   const [search,setSearch]=useState(" ");
   function handleSearchValue(e){
    setSearch(e.target.value);
   }
  return (
    <div className="min-h-screen w-screen relative overflow-y-auto">

      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center blur-[3px]"
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJNTpMZ8SyX5chUSzZsaq79bicemVuYKn2sTV39ZGPw&s=10')"
        }}
      />

      <div className="relative z-10">
        <NavBar functionality={handleSearchValue}/>

        <Routes>
          <Route path="/" element={<Body functionality={search}  />} />
          <Route path="/Breakfast" element={<Breakfast />} />
          <Route path="/Lunch" element={<Lunch />} />
          <Route path="/Dinner" element={<Dinner />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
