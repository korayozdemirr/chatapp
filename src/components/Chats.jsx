import React from 'react'

const Chats = () => {
  return (
    <div>
      <div className='p-3 flex items-center gap-3 text-white cursor-pointer hover:bg-[#2f2d52]'>
        <img src='https://www.korayozdemir.com/_next/image?url=%2Fprofil.jpg&w=828&q=75' alt=''/>
        <div className=''>
          <span className='text-lg font-medium'>Koray Özdemir</span>
          <p className='text-sm text-gray-400'>Selam</p>
        </div>
      </div>
    </div>
  )
}

export default Chats