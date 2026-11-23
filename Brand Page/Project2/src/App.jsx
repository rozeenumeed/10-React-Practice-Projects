import React from 'react'
import NavBar from './components/NavBar'
import Body from './components/Body'
import Menu from './components/Menu'
import About from './components/About'
import Location from './components/Location'
import Contact from './components/Contact'
import {Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
    <NavBar/>
  

<Routes>
  <Route path='/' element={<Body/>}/>
  <Route path='/Menu' element={<Menu/>}/>
  <Route path='/Location' element={<Location/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
</Routes>
    </div>
  )
}

export default App
