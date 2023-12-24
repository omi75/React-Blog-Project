import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Footer() {
  const {page,totalPage,handlePageChange}=useContext(AppContext)
  return (
    <div className='w-full flex justify-center border shadow-lg bg-green-400 py-1 lg:py-[0.3rem] fixed bottom-0'>
        <div className='sm:w-[40%] flex justify-between gap-x-3'>
          <div className='flex gap-x-4'>
            {
              page > 1 &&
              <button className='border-[3px] border-black rounded-md font-semibold py-1 px-2 ' onClick={()=>handlePageChange(page-1)}>
                Previous</button>
            }

            {
              page<totalPage &&
              <button className='border-[3px] border-black rounded-md font-semibold py-1 px-2 ' onClick={()=> handlePageChange(page+1)}>
                Next</button>
            }
          </div>
          <p className='text-md font-bold flex items-center'>Page {page} of {totalPage}</p>
        </div>
    </div>
  )
}

export default Footer