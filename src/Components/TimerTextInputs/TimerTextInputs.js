import React from 'react'
import FormInput from '../FormInput/FormInput'
import './TimerTextInputs.scss'

const TimerTextInputs = ({
  titleVal,
  setTitleVal,
  descriptionVal,
  setDescriptionVal,
}) => {
  return (
    <div className='timer-text-inputs'>
      <div className='title-container'>
        <input
          type='text'
          className='title'
          value={titleVal}
          onChange={e => setTitleVal(e.target.value)}
        />
        <label className={titleVal && 'filled'}>Time Title</label>
      </div>
      <div className='description-container'>
        <textarea
          className='description'
          rows={5}
          value={descriptionVal}
          onChange={e => setDescriptionVal(e.target.value)}
        ></textarea>
        <label className={descriptionVal && 'filled'}>Time Description</label>
      </div>
    </div>
  )
}

export default TimerTextInputs
