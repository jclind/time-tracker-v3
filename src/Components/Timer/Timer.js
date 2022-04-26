import React, { useState, useEffect } from 'react'
import './Timer.scss'
import formatTimer from '../../util/formatTimer'

const Timer = () => {
  const [time, setTime] = useState(0)
  const [paused, setPaused] = useState(false)
  // const [startTime, setStartTime] = useState(null)
  let startTime = null

  const startTimer = () => {
    setPaused(false)
  }
  const stopTimer = () => {}
  const clearTimer = () => {}

  useEffect(() => {
    let timerInterval
    if (!paused) {
      timerInterval = setInterval(() => {
        if (!startTime) {
          startTime = new Date().getTime()
        }
        const currTime = new Date().getTime()

        setTime(currTime - startTime)
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
