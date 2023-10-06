import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Countries from './Pages/Countries'




function App() {
    return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/Countries' element={<Countries />} />
  
          <Route path='*' element={<h1>404 Page</h1>} />
        </Routes>
      </div>
    )
  }
  
  export default App