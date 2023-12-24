import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Header() {
  const {fetchBlobData}=useContext(AppContext)
  return (
    <div className='w-full border shadow-lg bg-green-500 fixed top-0'>
        <h1 className='cursor-pointer text-center text-2xl font-bold py-2 uppercase' 
        onClick={()=>fetchBlobData()} >My Blobs</h1>
    </div>
  )
}

export default Header