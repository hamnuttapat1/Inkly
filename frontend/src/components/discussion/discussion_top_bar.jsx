import React from 'react'
import { BiMessageSquare } from "react-icons/bi";
import { RiSearch2Line } from "react-icons/ri";

const Discussion_top_bar = () => {
  return (
    <div className='w-full h-51.75 bg-white shadow-md '>
      <div className='flex flex-row mt-2 gap-3 items-center'>
        <BiMessageSquare size={40} className='opacity-70 ml-7 mt-2' />
        <p className='font-["Julius Sans One"] text-[40px] text-[#3E4A34] font-thin'>DISCUSSION FORUM</p>
      </div>
      <div className='ml-7 mr-7 mt-2 flex flex-row gap-3 w- items-center border-2 rounded-3xl p-1 pl-5 '>
        <RiSearch2Line size={30} className='flex opacity-50' />
        <input type='text' placeholder='Search discussions by title, subject, or tags...' className='flex flex-1 items-center font-["Inter"] text-[24px]'></input>
      </div>
      <div className='ml-12 mt-2 text-[#577F4E] font-["Inter"]'>
        Sorted by:
      </div>
    </div>
  )
}

export default Discussion_top_bar