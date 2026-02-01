import React from 'react'
import { LuPencil } from "react-icons/lu";
const Side_bar = () => {
    return (
        <div className='flex w-[400px] h-screen bg-gray-200 shadow-2xl flex-col'>
            <div className='flex flex-row'>
                <LuPencil size={25} className='mt-[59px] ml-[31px]' />
                <img src='\src\assets\image.png' className=' w-[76px] h-[40px] mt-[54px] ml-[20px]' />

            </div>
            <div className=''>
                <p className="font-['Kalam'] text-[20px] mt-[41px] ml-[31px]">Explore</p>
            </div>
        </div>


    )
}

export default Side_bar