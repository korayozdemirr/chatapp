import React from 'react'
import Navbar from "./NavBar"
import Search from './Search'
const SideBar = () => {
  return (
    <div className='flex-1 bg-purple-900'>
      <Navbar />
      <Search />
    </div>
  )
}

export default SideBar