import React from 'react'

function Spinner() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-y-5'>
      <div className='spinner bg-black'/>
      <p className=' font-bold'>Loading ..</p>
    </div>
  )
}

export default Spinner