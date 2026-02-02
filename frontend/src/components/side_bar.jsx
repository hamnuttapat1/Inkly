import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuPencil } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { FiSidebar } from "react-icons/fi";
import { BiChat } from "react-icons/bi";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";
import { IoCreateOutline } from "react-icons/io5";
import { CiBookmarkMinus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { PiSignOutBold } from "react-icons/pi";

const Side_bar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    const menuItems = [
        {
            section: 'Explore', items: [
                { label: 'Home', icon: <AiOutlineHome size={25} />, path: '/home' },
                { label: 'Discussion', icon: <BiChat size={25} />, path: '/discussion' },
                { label: 'Note Forum', icon: <BiChat size={25} />, path: '/note_forum' },
                { label: 'Search', icon: <RiSearch2Line size={25} />, path: '/search' },
                { label: 'Following', icon: <HiOutlineUsers size={25} />, path: '/following' },
            ]
        },
        {
            section: 'My content', items: [
                { label: 'My Notes', icon: <CgNotes size={25} />, path: '/my_notes' },
                { label: 'Create Note', icon: <IoCreateOutline size={25} />, path: '/create_note' },
                { label: 'Bookmarks', icon: <CiBookmarkMinus size={25} />, path: '/bookmarks' },
            ]
        },
        {
            section: 'Account', items: [
                { label: 'Profile', icon: <CgProfile size={25} />, path: '/profile' },
                { label: 'Sign Out', icon: <PiSignOutBold size={25} />, path: '/signin' },
            ]
        },
    ];

    return (
        <div className={`${isOpen ? 'w-100' : 'w-24'} h-screen bg-white shadow-2xl flex flex-col transition-all duration-300`}>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row'>
                    {isOpen && <LuPencil size={25} className='mt-14.75 ml-7.75' />}
                    {isOpen && <img src='\src\assets\image.png' className=' w-19 h-10 mt-13.5 ml-5' />}
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className='mt-12 mr-5 cursor-pointer hover:bg-[#E8FFDF] rounded-xl'>
                    <FiSidebar size={45} />
                </button>
            </div>

            {isOpen ? (
                <div className='flex flex-col gap-4 overflow-y-auto '>
                    {menuItems.map((section, idx) => (
                        <div key={idx} className=''>
                            <p className="font-['Kalam'] text-[20px] mt-10.25 ml-7.75">{section.section}</p>
                            <div className='gap-2'>
                                {section.items.map((item, itemIdx) => (
                                    <button key={itemIdx} onClick={() => navigate(item.path)} className='flex flex-row items-center gap-10.5 mt-[29.5px] hover:bg-[#E8FFDF] w-full h-8.75 rounded-2xl transition-all duration-200 '>
                                        <div className='ml-18.75 opacity-45'>{item.icon}</div>
                                        <p className="font-['Inter'] text-[24px] ">{item.label}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='flex flex-col gap-4 items-center mt-8'>
                    {menuItems.map((section) =>
                        section.items.map((item, idx) => (
                            <div key={idx} className='relative group'>
                                <button onClick={() => navigate(item.path)} className='hover:bg-[#E8FFDF] p-2 rounded-lg transition-all duration-200'>
                                    <div className='opacity-60'>{item.icon}</div>
                                </button>
                                <div className='absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none'>
                                    {item.label}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    )
}

export default Side_bar
