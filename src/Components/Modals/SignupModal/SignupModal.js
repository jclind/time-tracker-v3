import React, { useState } from 'react'
import Modal from 'react-modal'
import FormInput from '../../FormInput/FormInput'
import { AiOutlineClose, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import './SignupModal.scss'
Modal.setAppElement('#root')

const SignupModal = ({ signupModalOpen, setSignupModalOpen }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const primaryBackground = (() => {
    if (document.querySelector('.app')) {
      const style = getComputedStyle(document.querySelector('.app'))
      return style.getPropertyValue('--primary-background')
    }
  })()
  const primaryText = (() => {
    if (document.querySelector('.app')) {
      const style = getComputedStyle(document.querySelector('.app'))
      return style.getPropertyValue('--primary-text')
    }
  })()

  const closeModal = () => {
    setSignupModalOpen(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }
  const handleSwitchToLogin = () => {
    closeModal()
  }

  return (
    <Modal
      isOpen={signupModalOpen}
      onRequestClose={closeModal}
      contentLabel='Example Modal'
      className='game-over-modal modal'
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          background: primaryBackground,
          color: primaryText,
        },
      }}
    >
      <h2>Sign Up</h2>
      <button className='close-modal-btn btn' onClick={closeModal}>
        <AiOutlineClose className='icon' />
      </button>
      <form onSubmit={handleSubmit} className='signup-form form'>
        <div className='inputs'>
          <FormInput
            val={email}
            setVal={setEmail}
            placeholder='JohnSmith@gmail.com'
            name='email'
            inputType='email'
            icon={<AiOutlineMail className='icon' />}
          />
          <FormInput
            val={password}
            setVal={setPassword}
            placeholder='Sup3rSecr3t'
            name='password'
            inputType='password'
            icon={<AiOutlineLock className='icon' />}
            showPasswordBtn={true}
          />
        </div>
        <button className='signup-btn action-btn btn' type='submit'>
          Sign Up
        </button>
        <button
          className='switch-form btn'
          onClick={handleSwitchToLogin}
          type='button'
        >
          Already have an account?
        </button>
      </form>
    </Modal>
  )
}

export default SignupModal
