import React from 'react'

const Specialty = ({titulo, src, info}) => {
  return (
    <div className='specialty'>
      <img src={src} />
      <h3>{titulo}</h3>
      <p>{info}</p>
    </div>
  )
}

export default Specialty;