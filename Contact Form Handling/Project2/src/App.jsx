import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Forms from './components/Forms'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
       <NavBar/>
         
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Forms" element={<Forms />} />
      </Routes>
    </div>
  )
}

export default App
