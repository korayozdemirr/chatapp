import React from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import Messages from "./Messages"
import Input from "./Input"
const Chat = () => {
  return (
    <div className='flex-[2]'>
      <div className='h-12 flex items-center justify-between bg-[#db5b8d] p-3 text-zinc-50'>
        <span>Koray</span>
        <div className='flex gap-3'>
          <img src={Cam} className="h-6 cursor-pointer" alt="" />
          <img src={Add} className="h-6 cursor-pointer" alt="" />
          <img src={More} className="h-6 cursor-pointer" alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat