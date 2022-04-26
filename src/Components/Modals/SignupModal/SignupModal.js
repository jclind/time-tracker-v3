import React, { useState } from 'react'
import Modal from 'react-modal'
import FormInput from '../../FormInput/FormInput'
import { AiOutlineClose, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { useAuth } from '../../../context/AuthContext'
import { TailSpin } from 'react-loader-spinner'
import { AiOutlineWarning } from 'react-icons/ai'
Modal.setAppElement('#root')

const SignupModal = ({
  signupModalOpen,
  setSignupModalOpen,
  setLoginModalOpen,
}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { handleSignup } = useAuth()

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

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)

    if (!email) {
      return setError('Please enter email')
    }
    if (!password) {
      return setError('Please enter password')
    } else if (password.length < 6) {
      return setError('Password must be 6 characters or greater')
    }

    const signupError = await handleSignup(email, password)

    if (signupError) {
      return setError('ERROR:', signupError.code)
    }
    setLoading(false)
    closeModal()
  }
  const handleSwitchToLogin = () => {
    closeModal()
    setLoginModalOpen(true)
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
      {error && (
        <div className='form-error'>
          <AiOutlineWarning className='icon' />
          {error}
        </div>
      )}
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
        <button
          className='signup-btn action-btn btn'
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
            'Sign Up'
          )}
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
