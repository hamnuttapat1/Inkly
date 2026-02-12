import React from 'react'
import { GiPlainCircle } from "react-icons/gi";
import { GoPaperclip } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { PiChatText } from "react-icons/pi";
import { LuEye } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuBookmarkMinus } from "react-icons/lu";
import { otherNotes } from '../../constants/Others_note_data';

const Home_page = () => {
    // Helper function to format large numbers (e.g., 1132 -> 1.1k)
    const formatViews = (views) => {
        if (views >= 1000) {
            return (views / 1000).toFixed(1) + 'k';
        }
        return views.toString();
    };

    return (
        <div className='w-full h-full bg-[#EEF2E1] overflow-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8'>
                {otherNotes.map((note) => (
                    <div key={note.id} className='bg-white rounded-xl p-6 shadow-sm flex flex-col'>
                        {/* Title */}
                        <h3 className='text-lg font-semibold text-gray-800 mb-3'>{note.title}</h3>
                        
                        {/* Author */}
                        <div className='flex items-center gap-2 mb-3'>
                            <div className='w-6 h-6 bg-green-600 rounded-full'></div>
                            <span className='text-sm font-medium text-gray-700'>{note.author}</span>
                        </div>

                        {/* Description */}
                        <p className='text-sm text-gray-600 mb-4 flex-grow line-clamp-3'>
                            {note.description}
                        </p>

                        {/* Attachments */}
                        {note.attachments > 0 && (
                            <div className='mb-4'>
                                <span className='text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full'>
                                    📎 {note.attachments} Attachment(s)
                                </span>
                            </div>
                        )}

                        {/* Tags */}
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {note.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className='text-xs text-green-700 bg-green-50 px-3 py-1 rounded-full font-medium'
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className='border-t border-gray-200 mb-4'></div>

                        {/* Stats and Actions */}
                        <div className='flex items-center justify-between text-sm text-gray-600'>
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-1'>
                                    <IoHeartOutline size={16} />
                                    <span>{note.likes}</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <PiChatText size={16} />
                                    <span>{note.comments}</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <LuEye size={16} />
                                    <span>{formatViews(note.views)}</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button className='hover:text-gray-800 transition'>
                                    <MdOutlineFileDownload size={16} />
                                </button>
                                <button className='hover:text-gray-800 transition'>
                                    <LuBookmarkMinus size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home_page
