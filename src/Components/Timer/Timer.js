import React, { useState, useEffect } from 'react'
import './Timer.scss'
import formatTimer from '../../util/formatTimer'

const Timer = ({ time, setTime, paused }) => {
  useEffect(() => {
    let timerInterval
    if (!paused) {
      let startTime = new Date().getTime()
      timerInterval = setInterval(() => {
        const currTime = new Date().getTime()

        setTime(time + currTime - startTime)
      }, 10)
    }

    return () => {
      clearInterval(timerInterval)
    }
  }, [paused])

  return (
    <div className='timer'>
      <div className='time'>{formatTimer(time)}</div>
    </div>
  )
}

export default Timer
