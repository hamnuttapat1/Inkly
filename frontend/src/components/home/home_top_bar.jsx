import React from 'react'
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineFire } from "react-icons/ai";
import { MdQueryBuilder } from "react-icons/md";
import { GoThumbsup } from "react-icons/go";
import { FaRegCalendarTimes } from "react-icons/fa";
import { useSortContext } from '../../context/SortContext';

const Home_Top_bar = () => {
  const { sortBy, setSortBy } = useSortContext();
  const buttons = ['hot', 'new', 'top'];

  return (
    <div className='w-full bg-white shadow-md py-3'>
      <div className=''>
        <div className='flex flex-row items-center ml-5 mt-1.5 gap-3'>
          <PiBookOpenTextLight size={38} className='opacity-70' />
          <p className='font-["Julius Sans One"] text-[32px] text-[#3E4A34] font-thin select-none'>HOME</p>
        </div>
        <div className='mt-1 ml-5 flex flex-row items-center'>
          <p className='text-[#124C09] font-["Inter"] text-[18px] select-none'>Sorted by:</p>
          <div className='flex gap-2.5 ml-3'>
            {buttons.map((btn) => (
              <button
                key={btn}
                onClick={() => setSortBy(btn)}
                className={`px-3 py-1.5 w-16 rounded-3xl font-["Inter"] text-[16px] capitalize transition-colors flex items-center select-none ${sortBy === btn
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
        <div className='ml-5'>
          <p className='text-[#124C09] font-["Inter"] text-[18px] select-none'>Filter by:</p>
        </div>
      </div>
    </div>
  )
}

export default Home_Top_bar