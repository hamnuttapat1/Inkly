import React from 'react'
import { RiStickyNoteAddLine } from "react-icons/ri";
import { TiUserOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

const Profile_top_bar = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-19.5 bg-white shadow-md '>
            <div className='flex flex-row  gap-3 items-center mt-5'>
                <TiUserOutline size={40} className='opacity-70 ml-7' />
                <p className='font-["Julius Sans One"] text-[40px] text-[#3E4A34] font-thin select-none'>PROFILE</p>
                <div className='flex gap-10 ml-auto mr-7'>
                    <button onClick={() => navigate('/edit_profile')} className='w-51.25 h-14.25 rounded-md bg-[#34C759]/70 text-white font-["Inter"] text-[20px] cursor-pointer hover:bg-[#34C759] hover:scale-105 transition-all duration-200'>Edit profile</button>
                </div>
            </div>
        </div>
    )
}

export default Profile_top_bar