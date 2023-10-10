import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Countries from './Pages/Countries'
import HomePage from './Pages/HomePage'
import CountriesDetailPage from './Pages/CountriesDetailPage'
import Navbar from './components/NavBar'
import AddPlaces from './Pages/AddPlaces'
import Login from './Pages/Login'
import TouristPlaces from './Pages/TouristPlaces'
import Footer from'./Pages/Footer'





function App() {
    return (
      <div className='App'>
       <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/countries' element={<Countries />} />
          <Route path='/countries/:countryId' element={<CountriesDetailPage />}/>
          <Route path='/AddPlaces/:countryId' element={<AddPlaces />} />
          <Route path='/Login' element={<Login />} />
          <Route
          path="/countries/:countryId/tourist/:touristId"
          element={<TouristPlaces />} />
        <Route path="*" element={<h1>You Landed On Wrong Page</h1>} />
        </Routes>
        <Footer />
      </div>
   
    )
  }

  export default App