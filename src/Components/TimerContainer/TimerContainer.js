import React, { useState } from 'react'
import TagsButton from '../TagsButton/TagsButton'
import Timer from '../Timer/Timer'
import TimerButtons from '../TimerButtons/TimerButtons'
import TimerTextInputs from '../TimerTextInputs/TimerTextInputs'
import './TimerContainer.scss'

const TimerContainer = () => {
  const [time, setTime] = useState(0)
  const [paused, setPaused] = useState(true)

  const [titleVal, setTitleVal] = useState('')
  const [descriptionVal, setDescriptionVal] = useState('')

  const toggleTimer = () => {
    setPaused(!paused)
  }
  const clearTimer = () => {
    setTime(0)
  }

  return (
    <div className='timer-container'>
      <Timer time={time} setTime={setTime} paused={paused} />
      <TagsButton />
      <TimerTextInputs
        titleVal={titleVal}
        setTitleVal={setTitleVal}
        descriptionVal={descriptionVal}
        setDescriptionVal={setDescriptionVal}
      />
      <TimerButtons
        time={time}
        paused={paused}
        toggleTimer={toggleTimer}
        clearTimer={clearTimer}
      />
    </div>
  )
}

export default TimerContainer
