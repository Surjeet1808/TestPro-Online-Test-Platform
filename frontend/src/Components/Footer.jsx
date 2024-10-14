import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    
          <div className='h-[5rem] flex flex-col justify-around items-center gap-3 p-3 border-t-2'>
                 <div className='flex justify-center items-center gap-2 font-semibold text-[#01b4dc]' >
                      <FontAwesomeIcon icon={faBookmark} />
                      <h1>TestPro</h1>
                 </div>
                 <div >
                       <h1 className='font-semibold text-center'>© 2024 TestPro. All Rights Reserved.</h1>
                 </div>
          </div>
    
  )
}

export default Footer