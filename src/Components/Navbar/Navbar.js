import React from 'react'
import './Navbar.scss'
import { useAuth } from '../../context/AuthContext'
import LoggedOutLinks from './LoggedOutLinks'
import LoggedInLinks from './LoggedInLinks'

const Navbar = () => {
  const { user } = useAuth()

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <span className='nav-icon'>TIME TRACKER</span>
        </div>
        <div className='nav-content'>
          {user ? <LoggedInLinks /> : <LoggedOutLinks />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
