import React, { useState } from 'react'
import SignupModal from '../Modals/SignupModal/SignupModal'
import LoginModal from '../Modals/LoginModal/LoginModal'

const LoggedOutLinks = () => {
  const [signupModalOpen, setSignupModalOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const handleLoginLinkClick = e => {
    setLoginModalOpen(true)
  }
  const handleSignupLinkClick = e => {
    setSignupModalOpen(true)
  }

  return (
    <div className='nav-links'>
      <button className='nav-link btn' onClick={handleLoginLinkClick}>
        <div className='text'>Login</div>
        <div className='underline'></div>
      </button>
      <button className='nav-link btn' onClick={handleSignupLinkClick}>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </button>
      <SignupModal
        signupModalOpen={signupModalOpen}
        setSignupModalOpen={setSignupModalOpen}
        setLoginModalOpen={setLoginModalOpen}
      />
      <LoginModal
        loginModalOpen={loginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        setSignupModalOpen={setSignupModalOpen}
      />
    </div>
  )
}

export default LoggedOutLinks
