import React from 'react'
import { RiStickyNoteAddLine } from "react-icons/ri";

const Create_note_top_bar = () => {
    return (
        <div className='w-full h-29.5 bg-white shadow-md '>
            <div className='flex flex-row  gap-3 items-center mt-5'>
                <RiStickyNoteAddLine size={40} className='opacity-70 ml-7 mt-1' />
                <p className='font-["Julius Sans One"] text-[40px] text-[#3E4A34] font-thin select-none'>CREATE NEW NOTES</p>
                <div className='flex gap-10 ml-auto mr-7'>
                    <button className='w-51.25 h-14.25 rounded-md border border-[#838181] opacity-60 font-["Inter"] text-[20px] cursor-pointer hover:bg-gray-100 hover:opacity-100 hover:border-[#5a5a5a] transition-all duration-200'>Cancel</button>
                    <button className='w-51.25 h-14.25 rounded-md bg-[#34C759]/70 text-white font-["Inter"] text-[20px] cursor-pointer hover:bg-[#34C759] hover:scale-105 transition-all duration-200'>Publish Note</button>
                </div>
            </div>
        </div>
    )
}

export default Create_note_top_bar