import React, { useState, useEffect } from 'react'
import './FormInput.scss'
import {
  AiOutlineCloseCircle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai'

const FormInput = ({
  val,
  setVal,
  inputType,
  placeholder,
  name,
  icon,
  showPasswordBtn,
}) => {
  const [type, setType] = useState(inputType)
  const [passwordShow, setPasswordShow] = useState(false)

  useEffect(() => {
    if (showPasswordBtn) {
      if (showPasswordBtn) {
        if (passwordShow) {
          setType('text')
        } else {
          setType('password')
        }
      }
    }
  }, [passwordShow])

  return (
    <label className='form-input-label'>
      <div className='name'>{name}:</div>
      <div className='input-icon'>{icon}</div>
      <input
        type={type}
        value={val}
        onChange={e => setVal(e.target.value)}
        placeholder={placeholder}
        style={{ padding: icon ? '0 0.5rem 0 2.75rem' : '0 0.5rem' }}
        className='form-input'
        data-testid='form-input'
      />
      <div className='icons'>
        {showPasswordBtn && (
          <div
            className='show-password-btn'
            onClick={() => setPasswordShow(!passwordShow)}
          >
            {passwordShow ? (
              <AiOutlineEye className='eye-icon icon' />
            ) : (
              <AiOutlineEyeInvisible className='eye-icon icon' />
            )}
          </div>
        )}
        {val && (
          <div
            onClick={() => setVal('')}
            className='delete-icon'
            data-testid='clear-input'
          >
            <AiOutlineCloseCircle className='icon' />
          </div>
        )}
      </div>
    </label>
  )
}

export default FormInput
