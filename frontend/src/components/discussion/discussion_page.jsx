import React from 'react'
import { GiPlainCircle } from "react-icons/gi";
import { GoPaperclip } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { GoComment } from "react-icons/go";
import { LuEye } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
const Discussion_page = () => {
    return (
        <div className='w-full h-full bg-[#EEF2E1] overflow-auto'>
            <div className='flex flex-col w-full h-[180px] max-w-[calc(100%-110px)] mx-[55px] my-[70px] bg-white rounded-[15px] '>
                <div className='flex justify-between flex-row w-full'>
                    <div className='mt-[7px] ml-[15px] flex flex-row justify-center gap-[20px]'>
                        <GiPlainCircle size={38} className='text-[#577F4E]' />
                        <div>
                            <p className='font-["Inter"] text-[16px] font-semibold text-[#124C09]/70'>Student1</p>
                            <p className='font-["Inter"] text-[10px] font-regular text-[#124C09]/70'>2 hours ago</p>
                        </div>
                    </div>
                    <div className='mt-[10px] mr-[48px]'>
                        <div className='w-[185px] h-[35px] bg-[#B3B3B6]/60 text-white items-center flex justify-center rounded-[15px] gap-[10px] select-none'>
                            <GoPaperclip size={16} className='text-white' />
                            <p>1 Attachment(s)</p>
                        </div>
                    </div>
                </div>
                <div className='mt-[23px] ml-[15px]'>
                    <p className='font-["Inter"] text-[20px] font-regular'>How to approach complex integration problems?</p>
                </div>
                <div className='mt-[17px] ml-[15px]'>
                    <p className='font-["Inter"] text-[14px] font-regular'>I'm struggling with trigonometric substitution in integration. Can someone explain the intuition behind choosing the right substitution?</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row items-center gap-[10px] mt-[8px] ml-[15px]'>
                        <p className='flex w-auto bg-[#E8FFDF] items-center px-[15px]  rounded-[15px] text-[#124C09]/70 font-["Inter"] text-[14px] font-regular'>#Calculus</p>
                        <p className='flex w-auto bg-[#E8FFDF] items-center px-[15px] rounded-[15px] text-[#124C09]/70 font-["Inter"] text-[14px] font-regular'>#Integration</p>
                        <p className='flex w-auto bg-[#E8FFDF] items-center px-[15px] rounded-[15px] text-[#124C09]/70 font-["Inter"] text-[14px] font-regular'>#Math</p>
                    </div>
                    <div className='flex flex-row gap-[26px] mr-[100px] mt-[15px] gap-[25px]'>
                        <div className='gap-[8px] items-center flex flex-row'>
                            <IoHeartOutline size={16} className='text-[#292D32]' />
                            <p className='font-["Inter"] text-[14px] font-regular'>332</p>
                        </div>
                        <div className='gap-[8px] items-center flex flex-row'>
                            <GoComment size={16} className='text-[#292D32]' />
                            <p className='font-["Inter"] text-[14px] font-regular'>44</p>
                        </div>
                        <div className='gap-[8px] items-center flex flex-row'>
                            <LuEye size={16} className='text-[#292D32]' />
                            <p className='font-["Inter"] text-[14px] font-regular'>1277</p>
                        </div>
                        <div className='gap-[8px] items-center flex flex-row'>
                            <MdOutlineFileDownload size={16} className='text-[#292D32]' />
                            <p className='font-["Inter"] text-[14px] font-regular'>156</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Discussion_page