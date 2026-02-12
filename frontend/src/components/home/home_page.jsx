import React from 'react'
import { GiPlainCircle } from "react-icons/gi";
import { GoPaperclip } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { PiChatText } from "react-icons/pi";
import { LuEye } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuBookmarkMinus } from "react-icons/lu";


const Home_page = () => {
    return (
        <div className='w-full h-full bg-[#EEF2E1] grid grid-cols-3 flex flex-row overflow-auto'>
            <div className='flex w-[300px] h-[400px] mt-[60px] ml-[80px] rounded-[16px] bg-white justify-center'>
                <div className='w-[240px] justify-center'>
                    <p className='font-[Inter] text-[20px] text-[#124C09] font-semibold mt-[24px]'>
                        Biology : Mitosis and Meiosis
                    </p>
                    <div className='mt-[16px] flex flex-row items-center gap-[10px]'>
                        <GiPlainCircle size={12} className='text-[#577F4E]' />
                        <p className='font-[Inter] text-[18px] text-[#124C09] font-semibold'>Student 1</p>
                    </div>
                    <p className='mt-[12px] font-[Inter] text-[14px] text-[#124C09] font-semibold'>
                        Detailed diagrams and explanations of cell division processes. Comparison between mitosis and meiosis with color-coded phases and...
                    </p>
                    <div className='w-full flex justify-center'>
                        <button className='flex flex-row w-[160px] h-[30px] items-center mt-[10px] justify-center bg-[#b3b3b6a4] rounded-[12px] gap-[8px] cursor-pointer select-none hover:bg-[#B3B3B6]/80'>
                            <GoPaperclip size={12} className='text-white' />
                            <p className='text-white font-[Inter] text-[14px] font-semibold'>3 Attchment(s)</p>
                        </button>
                    </div>
                    <div className='flex flex-row mt-[12px] items-center gap-[8px]'>
                        <p className='flex h-[28px] w-auto bg-[#E8FFDF] items-center px-[8px] rounded-[12px] text-[#124C09]/70 text-[13px]'>#Biology</p>
                        <p className='flex h-[28px] w-auto bg-[#E8FFDF] items-center px-[8px] rounded-[12px] text-[#124C09]/70 text-[13px]'>#Cell</p>
                    </div>
                    <p className='mt-[20px] w-full border-[1px]'>
                    </p>
                    <div className='flex flex-row justify-between mt-[12px]'>
                        <div className='gap-[6px] flex flex-row items-center'>
                            <button className='cursor-pointer flex flex-row items-center gap-[6px]'>
                                <IoHeartOutline size={14} className='text-[#292D32]' />
                                <p className='font-[Inter] text-[14px] font-semibold text-[#124C09] select-none'>222</p>
                            </button>
                            <button className='cursor-pointer flex flex-row items-center gap-[6px]'>
                                <PiChatText size={14} className='text-[#292D32]' />
                                <p className='font-[Inter] text-[14px] font-semibold text-[#124C09] select-none'>34</p>
                            </button>
                            <div className='flex flex-row items-center gap-[6px]'>
                                <LuEye size={14} className='text-[#292D32]' />
                                <p className='font-[Inter] text-[14px] font-semibold text-[#124C09] select-none'>1.2k</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-[16px]'>
                            <button className='cursor-pointer'>
                                <MdOutlineFileDownload size={14} className='text-[#292D32] ' />
                            </button>
                            <button className='cursor-pointer'>
                                <LuBookmarkMinus size={14} className='text-[#292D32] ' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home_page