import React, { useState } from 'react'
import { RxCaretUp } from "react-icons/rx";
import { RxCaretDown } from "react-icons/rx";
import { RiSearch2Line } from "react-icons/ri";

const Search_top_bar = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [activeTab, setActiveTab] = useState('all');

    return (
        <div className={`w-full bg-white shadow-md transition-all duration-300 ${showFilters ? 'h-114.25' : 'h-auto'}`}>
            <div className='flex flex-row mt-2 gap-3 items-center'>
                <RiSearch2Line size={40} className='opacity-70 ml-7 ' />
                <p className='font-["Julius Sans One"] text-[40px] text-[#3E4A34] font-thin select-none'>SEARCH</p>
            </div>
            <div className='ml-7 mr-7 mt-2 flex flex-row gap-3 w- items-center border-2 rounded-2xl p-1 pl-5 '>
                <button className='cursor-pointer'>
                    <RiSearch2Line size={30} className='flex opacity-50' />
                </button>
                <input type='text' placeholder='Search discussions by title, subject, or tags...' className='flex flex-1 items-center bg-transparent font-["Inter"] text-[24px] outline-none border-none focus:outline-none focus:ring-0'></input>
            </div>
            <div className='ml-7 mt-2 text-[#577F4E] font-["Inter"] flex fex-row items-center gap-3'>
                <button onClick={() => setShowFilters(!showFilters)} className='text-[#577F4E] font-["Inter"]'>
                    {showFilters ? <RxCaretUp strokeWidth={2} className='' /> : <RxCaretDown strokeWidth={2} className='' />}
                </button>
                <p>{showFilters ? 'Hide Filters' : 'Show Filters'}</p>
            </div>
            {showFilters && (
                <div className='flex flex-row gap-4 ml-7 pt-7.25 pl-14.75 pb-7.25 bg-[#F8F6F6] rounded-[15px] items-center'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[24px] text-[#577F4E] font-["Inter"]'>Sort by</label>
                        <select className='px-4 py-2 border-2 bg-white border-[#577F4E] rounded-lg font-["Inter"] cursor-pointer'>
                            <option>Latest upload</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[24px] text-[#577F4E] font-["Inter"]'>Filter tags</label>
                        <select className='px-4 py-2 border-2 bg-white border-[#577F4E] rounded-lg font-["Inter"] cursor-pointer'>
                            <option>Include any</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[24px] text-[#577F4E] font-["Inter"]'>Exclude tags</label>
                        <select className='px-4 py-2 border-2 bg-white border-[#577F4E] rounded-lg font-["Inter"] cursor-pointer'>
                            <option>Exclude any</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[24px] text-[#577F4E] font-["Inter"]'>Subject</label>
                        <select className='px-4 py-2 border-2 bg-white border-[#577F4E] rounded-lg font-["Inter"] cursor-pointer'>
                            <option>Any</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-[24px] text-[#577F4E] font-["Inter"] mt-0.5'>Year</label>
                        <input type='text' placeholder='Any' className='px-4 py-1 h-9.5 border-2 bg-white border-[#577F4E] rounded-lg font-["Inter"]' />
                    </div>
                </div>
            )}
            <div className='flex flex-row justify-between items-center ml-7 mr-7 mt-2 mb-2 border-b-2 border-none'>
                <div className='flex flex-row gap-8'>
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`pb-1 font-["Inter"] text-[24px] ${activeTab === 'all' ? 'text-[#577F4E] border-b-2 border-[#577F4E]' : 'text-gray-500'}`}
                    >
                        All result
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
                <button className='bg-[#34C759]/70 text-white px-11.75 py-2 rounded-sm font-["Inter"] text-[20px] cursor-pointer hover:bg-[#34C759] hover:scale-105 transition-all duration-200'>
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search_top_bar