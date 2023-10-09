import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Countries from './Pages/Countries'
import HomePage from './Pages/HomePage'
import CountriesDetailPage from './Pages/CountriesDetailPage'
import Tourist from './Pages/TouristPlaces'
import Navbar from './components/NavBar'
import AddPlaces from './Pages/AddPlaces'
import Login from './Pages/Login'





function App() {
    return (
      <div className='App'>
       <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/countries' element={<Countries />} />
          <Route path='/countries/:countryId' element={<CountriesDetailPage />}/>
          <Route path='/AddPlaces' element={<AddPlaces />} />
          <Route path='/countries/:countryId/:touristId/newplace' element={<AddPlaces />} />
          <Route path='/Login' element={<Login />} />
          <Route path='*' element={<h1>404 Page</h1>} />
        </Routes>
      </div>
    )
  }

  export default App