import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar bg-info'>
      <div className='container-fluid'>
      
        <Link to='/countries' style={{ color: 'black' }}>
               Countries
          </Link>
      </div>
    </nav>
  )
}

export default Navbar