import React from 'react'
import Attach from '../img/attach.png'
import Img from '../img/img.png'
const Input = () => {
  return (
    <div className='h-12 bg-white p-3 flex items-center justify-between'>
      <input type="text" placeholder='Type Something...' className='w-full border-none outline-none text-[#2f2d52] text-lg placeholder:text-gray-500' />
      <div className='flex items-center gap-3 '>
        <img src={Attach} alt="" className='h-6 cursor-pointer' />
        <input type="file" className='hidden' id='file' />
        <label htmlFor='file'>
            <img src={Img} className='h-6 cursor-pointer w-10' alt="" />
        </label>
        <button className='border-none p-2 -mr-1 bg-[#8da4f1] cursor-pointer'>Send</button>
      </div>
    </div>  
  )
}

export default Input