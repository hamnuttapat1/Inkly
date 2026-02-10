import React, { useState } from 'react'
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineFire } from "react-icons/ai";
import { MdQueryBuilder } from "react-icons/md";
import { GoThumbsup } from "react-icons/go";
import { FaRegCalendarTimes } from "react-icons/fa";

const Home_Top_bar = () => {
  const [sortBy, setSortBy] = useState('hot')

  const buttons = ['hot', 'new', 'top']

  return (
    <div className='w-full h-41.75 bg-white shadow-md'>
      <div className=''>
        <div className='flex flex-row items-center ml-7 mt-2 gap-3.75'>
          <PiBookOpenTextLight size={50} className='opacity-70' />
          <p className='font-["Julius Sans One"] text-[40px] text-[#3E4A34] font-thin select-none'>HOME</p>
        </div>
        <div className='mt-1 ml-7 flex flex-row items-center'>
          <p className='text-[#124C09] font-["Inter"] text-[24px] select-none'>Sorted by:</p>
          <div className='flex gap-3 ml-4'>
            {buttons.map((btn) => (
              <button
                key={btn}
                onClick={() => setSortBy(btn)}
                className={`px-4 py-2 w-20 rounded-3xl font-["Inter"] text-[20px] capitalize transition-colors flex items-center select-none ${sortBy === btn
                  ? 'bg-[#FFB667]/50 text-[#C5620C]'
                  : 'bg-white '
                  }`}
              >
                {btn === 'hot' && <AiOutlineFire className="w-4 h-4 shrink-0" />}
                {btn === 'new' && <FaRegCalendarTimes className="w-3 h-3 shrink-0" />}
                {btn === 'top' && <GoThumbsup className="w-4 h-4 shrink-0" />}
                {btn}
              </button>
            ))}
          </div>
        </div>
        <div className='ml-7'>
          <p className='text-[#124C09] font-["Inter"] text-[24px] select-none'>Filter by:</p>
        </div>
      </div>
    </div>
  )
}

export default Home_Top_bar