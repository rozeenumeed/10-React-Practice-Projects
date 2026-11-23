import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import MainLogic from './components/MainLogic'
import Rules from './components/Rules'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/MainLogic" element={<MainLogic/>}/>
        <Route path="/Rules" element={<Rules/>}/>
      </Routes>
    </div>
  )
}

export default App
