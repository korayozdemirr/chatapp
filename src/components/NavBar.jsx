import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center bg-indigo-900 h-14 p-3 justify-between text-zinc-300'>
      <span className='font-bold'>Chat App</span>
      <div className='flex gap-3'>
        <img src='https://www.korayozdemir.com/_next/image?url=%2Fprofil.jpg&w=828&q=75' className='bg-zinc-300 h-6 w-6 rounded-full object-cover'/>
        <span>Jhon</span>
        <button className='bg-purple-700 text-xs cursor-pointer p-1'>Logout</button>
      </div>
    </div>
  )
}

export default NavBar