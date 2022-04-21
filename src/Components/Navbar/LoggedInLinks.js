import React from 'react'

const LoggedInLinks = () => {
  const handleAccountLoginLinkClick = e => {}
  const handleLogoutLinkClick = e => {}

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
