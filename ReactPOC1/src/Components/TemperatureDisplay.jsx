import React from 'react'

function TemperatureDisplay({temp}) {
  const fara = (temp * 9 / 5) + 32
  return (
    <div>
      <h1>Temp Display</h1>
      <p>Temp in celsius: {temp} C</p>
      <p>Temp in Fara: {fara} F</p>
    </div>
  )
}

export default TemperatureDisplay
