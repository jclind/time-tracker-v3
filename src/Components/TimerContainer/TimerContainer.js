import React from 'react'
import TagsButton from '../TagsButton/TagsButton'
import Timer from '../Timer/Timer'
import './TimerContainer.scss'

const TimerContainer = () => {
  return (
    <div className='timer-container'>
      <Timer />
      <TagsButton />
    </div>
  )
}

export default TimerContainer
