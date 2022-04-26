import React from 'react'
import './TimerButtons.scss'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const TimerButtons = ({ time, paused, toggleTimer, clearTimer }) => {
  return (
    <div className='timer-buttons'>
      <button
        className={
          paused && time
            ? 'toggle-timer-btn start start-time btn'
            : paused
            ? 'toggle-timer-btn start start-no-time btn'
            : 'toggle-timer-btn stop btn'
        }
        onClick={toggleTimer}
      >
        {paused ? 'Start' : 'Stop'}
      </button>
      <>
        <button
          className={time && paused ? 'clear-btn paused btn' : 'clear-btn btn'}
          onClick={clearTimer}
        >
          Clear
        </button>
        <button
          className={
            time && paused ? 'submit-btn paused btn' : 'submit-btn btn'
          }
        >
          <AiOutlinePlusCircle className='icon' />
        </button>
      </>
    </div>
  )
}

export default TimerButtons
