import React from 'react'

const Message = () => {
  return (
    <div className='flex gap-5 mb-5'>
      <div className='flex flex-col text-gray-400 font-light'>
        <img src='https://www.korayozdemir.com/_next/image?url=%2Fprofil.jpg&w=828&q=75' className='w-10 h-10 rounded-full object-cover' />
        <span>just now</span>
      </div>
      <div className='max-w-[80%] flex flex-col gap-2'>
        <p className='bg-white py-2 px-5 max-w-max'>Hello world</p>
      </div>
    </div>
  )
}

export default Message