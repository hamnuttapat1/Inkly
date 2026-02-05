import React from 'react'
import { BiMessageSquare } from "react-icons/bi";
import { RiSearch2Line } from "react-icons/ri";

const My_notes_top_bar = () => {
    return (
        <div className='w-full h-51.75 bg-white shadow-md '>
            <div className='flex flex-row mt-2 gap-3 items-center'>
                <BiMessageSquare size={40} className='opacity-70 ml-7 mt-2' />
                <p className='font-["Julius Sans One"] text-[40px] text-[#3E4A34] font-thin'>MY NOTES</p>
            </div>
            <div className='ml-7 mr-7 mt-2 flex flex-row gap-3 w- items-center border-2 rounded-2xl p-1 pl-5 '>
                <button className='cursor-pointer'>
                    <RiSearch2Line size={30} className='flex opacity-50' />
                </button>
                <input type='text' placeholder='Search discussions by title, subject, or tags...' className='flex flex-1 items-center bg-transparent font-["Inter"] text-[24px] outline-none border-none focus:outline-none focus:ring-0'></input>
            </div>
            <div className='ml-12 mt-2 gap-5 text-[#577F4E] font-["Inter"] flex flex-row items-center'>
                <p className='mt-0.5'>Sorted by:</p>
                <select className=' bg-white border border-gray-300 rounded-md  text-[#577F4E] font-["Inter"]'>
                    <option>Date create</option>
                    <option>Most Recent</option>
                    <option>Title A-Z</option>
                    <option>Title Z-A</option>
                </select>
            </div>
        </div>
    )
}

export default My_notes_top_bar