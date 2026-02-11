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
        <div className='w-full h-full bg-[#EEF2E1] flex flex-row overflow-auto'>
            <div className='flex w-[350px] h-[480px] mt-[80px] ml-[110px] rounded-[20px] bg-white justify-center'>
                <div className='w-[270px] justify-center'>
                    <p className='font-[Inter] text-[24px] text-[#124C09] font-semibold mt-[32.5px]'>
                        Biology : Mitosis and Meiosis
                    </p>
                    <div className='mt-[20px] flex flex-row items-center gap-[15px]'>
                        <GiPlainCircle size={15} className='text-[#577F4E]' />
                        <p className='font-[Inter] text-[24px] text-[#124C09] font-semibold'>Student 1</p>
                    </div>
                    <p className='mt-[15px] font-[Inter] text-[16px] text-[#124C09] font-semibold'>
                        Detailed diagrams and explanations of cell division processes. Comparison between mitosis and meiosis with color-coded phases and...
                    </p>
                    <div className='w-full flex justify-center'>
                        <button className='flex flex-row w-[184px] h-[35px] items-center mt-[13px] justify-center bg-[#b3b3b6a4] rounded-[15px] gap-[10px] cursor-pointer select-none hover:bg-[#B3B3B6]/80'>
                            <GoPaperclip size={14} className='text-white' />
                            <p className='text-white font-[Inter] text-[16px] font-semibold'>3 Attchment(s)</p>
                        </button>
                    </div>
                    <div className='flex flex-row mt-[17px] items-center gap-[10px]'>
                        <p className='flex h-[35px] w-auto bg-[#E8FFDF] items-center pl-[9.5px] pr-[9.5px] rounded-[15px] text-[#124C09]/70'>#Biology</p>
                        <p className='flex h-[35px] w-auto bg-[#E8FFDF] items-center pl-[9.5px] pr-[9.5px] rounded-[15px] text-[#124C09]/70'>#Cell</p>
                    </div>
                    <p className='mt-[26px] w-full border-[1px]'>
                    </p>
                    <div className='flex flex-row justify-between mt-[17.5px]'>
                        <div className='gap-[7px] flex flex-row items-center'>
                            <button className='cursor-pointer flex flex-row items-center gap-[7px]'>
                                <IoHeartOutline size={16} className='text-[#292D32]' />
                                <p className='font-[Inter] text-[16px] font-semibold text-[#124C09] select-none'>222</p>
                            </button>
                            <button className='cursor-pointer flex flex-row items-center gap-[7px]'>
                                <PiChatText size={16} className='text-[#292D32]' />
                                <p className='font-[Inter] text-[16px] font-semibold text-[#124C09] select-none'>34</p>
                            </button>
                            <div className='flex flex-row items-center gap-[7px]'>
                                <LuEye size={16} className='text-[#292D32]' />
                                <p className='font-[Inter] text-[16px] font-semibold text-[#124C09] select-none'>1.2k</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-[22px]'>
                            <button className='cursor-pointer'>
                                <MdOutlineFileDownload size={16} className='text-[#292D32] ' />
                            </button>
                            <button className='cursor-pointer'>
                                <LuBookmarkMinus size={16} className='text-[#292D32] ' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home_page