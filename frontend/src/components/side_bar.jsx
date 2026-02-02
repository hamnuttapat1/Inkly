import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuPencil } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { FiSidebar } from "react-icons/fi";

const Side_bar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    const menuItems = [
        {
            section: 'Explore', items: [
                { label: 'Home', icon: <AiOutlineHome size={25} />, path: '/home' },
                { label: 'Discussion', icon: <AiOutlineHome size={25} />, path: '/discussion' },
                { label: 'Note Forum', icon: <AiOutlineHome size={25} />, path: '/note_forum' },
                { label: 'Search', icon: <AiOutlineHome size={25} />, path: '/search' },
                { label: 'Following', icon: <AiOutlineHome size={25} />, path: '/following' },
            ]
        },
        {
            section: 'My content', items: [
                { label: 'My Notes', icon: <AiOutlineHome size={25} />, path: '/my_notes' },
                { label: 'Create Note', icon: <AiOutlineHome size={25} />, path: '/create-note' },
                { label: 'Bookmarks', icon: <AiOutlineHome size={25} />, path: '/bookmarks' },
            ]
        },
        {
            section: 'Account', items: [
                { label: 'Profile', icon: <AiOutlineHome size={25} />, path: '/profile' },
                { label: 'Sign Out', icon: <AiOutlineHome size={25} />, path: '/signout' },
            ]
        },
    ];

    return (
        <div className={`${isOpen ? 'w-100' : 'w-24'} h-screen bg-gray-200 shadow-2xl flex flex-col transition-all duration-300`}>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row'>
                    {isOpen && <LuPencil size={25} className='mt-14.75 ml-7.75' />}
                    {isOpen && <img src='\src\assets\image.png' className=' w-19 h-10 mt-13.5 ml-5' />}
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className='mt-12 mr-5 cursor-pointer'>
                    <FiSidebar size={45} />
                </button>
            </div>

            {isOpen ? (
                <div className='flex flex-col gap-4 overflow-y-auto hover:bg-white'>
                    {menuItems.map((section, idx) => (
                        <div key={idx} className=''>
                            <p className="font-['Kalam'] text-[20px] mt-10.25 ml-7.75">{section.section}</p>
                            <div className='gap-2'>
                                {section.items.map((item, itemIdx) => (
                                    <button key={itemIdx} onClick={() => navigate(item.path)} className='flex flex-row  items-center gap-10.5 mt-[29.5px] hover:bg-gray-300  w-full h-8.75 rounded-2xl'>
                                        <div className='ml-18.75 opacity-60'>{item.icon}</div>
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
                            <button key={idx} onClick={() => navigate(item.path)} className='hover:bg-gray-300 p-2 rounded-lg'>
                                <div className='opacity-60'>{item.icon}</div>
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    )
}

export default Side_bar
