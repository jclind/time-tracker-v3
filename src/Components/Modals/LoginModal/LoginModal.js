import React, { useState } from 'react'
import Modal from 'react-modal'
import FormInput from '../../FormInput/FormInput'
import { AiOutlineClose, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { useAuth } from '../../../context/AuthContext'
import { TailSpin } from 'react-loader-spinner'
import { AiOutlineWarning } from 'react-icons/ai'
Modal.setAppElement('#root')

const LoginModal = ({
  loginModalOpen,
  setLoginModalOpen,
  setSignupModalOpen,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { handleLogin } = useAuth()

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

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    if (!email) {
      setLoading(false)
      return setError('Please enter email')
    }
    if (!password) {
      setLoading(false)
      return setError('Please enter password')
    }

    const loginError = await handleLogin(email, password)
    if (loginError) {
      setLoading(false)
      return setError(`ERROR: ${loginError.code}`)
    }
    setLoading(false)
    closeModal()
  }
  const handleSwitchToSignup = () => {
    closeModal()
    setSignupModalOpen(true)
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
      {error && (
        <div className='form-error'>
          <AiOutlineWarning className='icon' />
          {error}
        </div>
      )}
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
        <button
          className='login-btn action-btn btn'
          type='submit'
          disabled={loading}
        >
          {loading ? (
            <TailSpin
              height='30'
              width='30'
              color='white'
              arialLabel='loading'
              className='spinner'
            />
          ) : (
            'Login'
          )}
        </button>
        <button
          className='switch-form btn'
          onClick={handleSwitchToSignup}
          type='button'
        >
          Don't have an account?
        </button>
      </form>
    </Modal>
  )
}

export default LoginModal
