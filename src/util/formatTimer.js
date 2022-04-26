const formatTimer = milliseconds => {
  const roundedMilliseconds = Math.floor((milliseconds % 1000) / 10)
  const seconds = Math.floor((milliseconds / 1000) % 60)
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60)
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24)

  if (hours) {
    return (
      hours +
      ':' +
      (minutes < 10 ? '0' : '') +
      minutes +
      ':' +
      (seconds < 10 ? '0' : '') +
      seconds
    )
  }
  return (
    hours +
    ':' +
    (minutes < 10 ? '0' : '') +
    minutes +
    ':' +
    (seconds < 10 ? '0' : '') +
    seconds +
    '.' +
    (roundedMilliseconds < 10 ? '0' : '') +
    roundedMilliseconds
  )
}

export default formatTimer
