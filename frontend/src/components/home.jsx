import React from 'react'
import { FaFireAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className='w-screen h-30 bg-gray-100'>
      <div >
        <div className='flex flex-row gap-5 justify-around pt-20'>
          <button className='cursor-pointer'>Recommend</button>
          <button className='flex flex-row gap-2 cursor-pointer'>
            <FaFireAlt size={20} className='text-red-500' />
            <p>Weekly Trend</p>
          </button>
          <p className='cursor-pointer'>abc</p>
          
        </div>
      </div>
    </div>
  )
}

export default Home