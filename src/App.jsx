import React, { useEffect, useState } from 'react'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const formatTime = () => {
    let hour = time.getHours();
    let munits = time.getMinutes();
    let sec = time.getSeconds();

    let merdium = hour >= 12 ? "PM" : "AM"

    hour = hour % 12 || 12;

    return `${padZero(hour)}:${padZero(munits)}:${padZero(sec)}:${padZero(merdium)}`
  }

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number
  }
  return (
    <div className='clock-container'>
      <div className='clock'>
        <span>{formatTime()}</span>
      </div>
    </div>
  )
}

export default App