import React, { useState } from 'react'

function TemperaatureInput({temp, updateTemp}) {
 

  return (
    <div>
      <label htmlFor="">Enter Temperature
        <input 
        type="number" 
        value= {temp}
        onChange =
         { (e) => updateTemp(e.target.value)} 
         />
      </label>
    </div>
  )
}

export default TemperaatureInput
