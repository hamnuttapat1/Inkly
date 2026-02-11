import React, { useState } from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { PiBookmarkSimpleLight } from "react-icons/pi";

const Bookmarks_top_bar = () => {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <div className={`w-full bg-white shadow-md transition-all duration-300 py-3`}>
            <div className='flex flex-row mt-1.5 gap-3 items-center'>
                <PiBookmarkSimpleLight size={32} className='opacity-70 ml-5' />
                <p className='font-["Julius Sans One"] text-[32px] text-[#3E4A34] font-thin select-none'>BOOKMARKS</p>
            </div>
            <div className='ml-5 mr-5 mt-1.5 flex flex-row gap-3 w- items-center border-2 rounded-2xl p-1.5 pl-4 '>
                <button className='cursor-pointer'>
                    <RiSearch2Line size={22} className='flex opacity-50' />
                </button>
                <input type='text' placeholder='Search discussions by title, subject, or tags...' className='select-none flex flex-1 items-center bg-transparent font-["Inter"] text-[18px] outline-none border-none focus:outline-none focus:ring-0'></input>
            </div>
            <div className='flex flex-row justify-between items-center ml-5 mr-5 mt-2 mb-2 border-b-2 border-none select-none'>
                <div className='flex flex-row gap-6'>
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`pb-1 font-["Inter"] text-[18px] ${activeTab === 'all' ? 'text-[#577F4E] border-b-2 border-[#577F4E]' : 'text-gray-500'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setActiveTab('notes')}
                        className={`pb-1 font-["Inter"] text-[18px] ${activeTab === 'notes' ? 'text-[#577F4E] border-b-2 border-[#577F4E]' : 'text-gray-500'}`}
                    >
                        Notes
                    </button>
                    <button
                        onClick={() => setActiveTab('discussion')}
                        className={`pb-1 font-["Inter"] text-[18px] ${activeTab === 'discussion' ? 'text-[#577F4E] border-b-2 border-[#577F4E]' : 'text-gray-500'}`}
                    >
                        Discussion
                    </button>
                </div>
            </div>
            <div className='ml-5 mt-4 mb-4 gap-4 text-[#577F4E] font-["Inter"] text-[16px] flex flex-row items-center select-none'>
                <p className='mt-0.5'>Sorted by:</p>
                <select className=' bg-white border border-gray-300 rounded-md text-[#577F4E] font-["Inter"] text-[16px] select-none'>
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