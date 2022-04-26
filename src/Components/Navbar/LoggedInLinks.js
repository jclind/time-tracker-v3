import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const LoggedInLinks = () => {
  const [error, setError] = useState('')
  const { handleLogout } = useAuth()

  const handleAccountLoginLinkClick = e => {}
  const handleLogoutLinkClick = async e => {
    const logoutError = await handleLogout()
    if (logoutError) {
      setError(`ERROR: ${logoutError.code}`)
    }
  }

  return (
    <div className='nav-links'>
      <button className='nav-link btn' onClick={handleAccountLoginLinkClick}>
        Account
      </button>
      <button className='nav-link btn' onClick={handleLogoutLinkClick}>
        Logout
      </button>
    </div>
  )
}

export default LoggedInLinks
