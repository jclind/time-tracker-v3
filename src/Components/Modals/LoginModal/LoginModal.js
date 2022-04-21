import React, { useState } from 'react'
import Modal from 'react-modal'
import FormInput from '../../FormInput/FormInput'
import { AiOutlineClose, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
Modal.setAppElement('#root')

const LoginModal = ({ loginModalOpen, setLoginModalOpen }) => {
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
    setLoginModalOpen(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }
  const handleSwitchToSignup = () => {
    closeModal()
  }

  return (
    <Modal
      isOpen={loginModalOpen}
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
      <h2>Login</h2>
      <button className='close-modal-btn btn' onClick={closeModal}>
        <AiOutlineClose className='icon' />
      </button>
      <form onSubmit={handleSubmit} className='login-form form'>
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
        <button className='login-btn action-btn btn' type='submit'>
          Login
        </button>
        <button
          className='switch-form btn'
          onClick={handleSwitchToSignup}
          type='button'
        >
          Already have an account?
        </button>
      </form>
    </Modal>
  )
}

export default LoginModal
