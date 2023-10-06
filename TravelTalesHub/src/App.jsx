import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Countries from './Pages/Countries'
import HomePage from './Pages/HomePage'
import Tourist from './Pages/TouristPlaces'
import Navbar from './components/NavBar'




function App() {
    return (
      <div className='App'>
       <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/countries' element={<Countries />} />
  
          <Route path='*' element={<h1>404 Page</h1>} />
        </Routes>
      </div>
    )
  }

  export default App