import { Link } from 'react-router-dom'
import React from 'react'



function Navbar() {
  return (
    <nav className='navbar bg-black object-fit-fill'>
      <div className='container-fluid'>
        <Link to='/countries'>
              <button className='btn btn-black text-white'>Discover</button> 
          </Link>
      <Link to="/">
        <button className='btn btn-black text-white'>Home</button>
      </Link>
      <div className="dropdown">
      <button className="btn btn-black text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Follow Us
      </button>
      <ul className="dropdown-menu dropdown-menu-dark">
        <li><a className="dropdown-item " href="#">Instagram</a></li>
        <li><a className="dropdown-item" href="#">Facebook</a></li>
        <li><a className="dropdown-item" href="#">Twitter</a></li>
      </ul>
    </div>
    <Link to="/About">
        <button className='btn btn-black text-white'>About </button>
      </Link>
      <Link to="/Login">
        <button className='btn btn-black text-white'>Login </button>
      </Link>
      
      </div>
    </nav>
  )
}

export default Navbar