import React, { useState } from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { PiBookmarkSimpleLight } from "react-icons/pi";

const Bookmarks_top_bar = () => {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <div className={`w-full bg-white shadow-md transition-all duration-300 h-58.25`}>
            <div className='flex flex-row mt-2 gap-3 items-center'>
                <PiBookmarkSimpleLight size={40} className='opacity-70 ml-7' />
                <p className='font-["Julius Sans One"] text-[40px] text-[#3E4A34] font-thin select-none'>BOOKMARKS</p>
            </div>
            <div className='ml-7 mr-7 mt-2 flex flex-row gap-3 w- items-center border-2 rounded-2xl p-1 pl-5 '>
                <button className='cursor-pointer'>
                    <RiSearch2Line size={30} className='flex opacity-50' />
                </button>
                <input type='text' placeholder='Search discussions by title, subject, or tags...' className='flex flex-1 items-center bg-transparent font-["Inter"] text-[24px] outline-none border-none focus:outline-none focus:ring-0'></input>
            </div>
            <div className='flex flex-row justify-between items-center ml-7 mr-7 mt-2 mb-2 border-b-2 border-none'>
                <div className='flex flex-row gap-8'>
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`pb-1 font-["Inter"] text-[24px] ${activeTab === 'all' ? 'text-[#577F4E] border-b-2 border-[#577F4E]' : 'text-gray-500'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setActiveTab('notes')}
                        className={`pb-1 font-["Inter"] text-[24px] ${activeTab === 'notes' ? 'text-[#577F4E] border-b-2 border-[#577F4E]' : 'text-gray-500'}`}
                    >
                        Notes
                    </button>
                    <button
                        onClick={() => setActiveTab('discussion')}
                        className={`pb-1 font-["Inter"] text-[24px] ${activeTab === 'discussion' ? 'text-[#577F4E] border-b-2 border-[#577F4E]' : 'text-gray-500'}`}
                    >
                        Discussion
                    </button>
                </div>
            </div>
            <div className='ml-7 mt-5 mb-5 gap-5 text-[#577F4E] font-["Inter"] flex flex-row items-center'>
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

export default Bookmarks_top_bar