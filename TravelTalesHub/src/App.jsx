import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Countries from './Pages/Countries'




function App() {
    return (
      <div className='App'>
       
        <Routes>
         

          <Route path='/Countries' element={<Countries />} />
  
          <Route path='*' element={<h1>404 Page</h1>} />
        </Routes>
      </div>
    )
  }

  export default App