import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";

const Top_bar = () => {
    return (
        <div className='flex w-screen h-20 bg-white shadow-2xl items-center'>
            <button className='flex flex-row gap-2 ml-3 sm:ml-10'>
                <p className='text-orange-400'>School</p>
                <p className='text-black'>Community</p>
            </button>
            <div className='flex ml-auto gap-2 mr-2 sm:mr-5 sm:gap-5 '>
                <button className='flex flex-row bg-orange-400 rounded-3xl w-11 h-11 sm:w-20 justify-center items-center gap-1 cursor-pointer'>
                    <p>+</p>
                    <p className='hidden sm:block'>Create</p>
                </button>
                <Link to="/signin" className=' flex items-center shrink-0 rounded-3xl bg-orange-400 w-11 h-11 sm:w-30 justify-center gap-2'>
                    <span className='hidden sm:block'>
                        Sign In
                    </span>
                    <MdAccountCircle size={30} className='' />
                </Link>
                <button className='items-center rounded-3xl bg-orange-400 p-3 cursor-pointer'>
                    <FiSearch size={20} className='' />
                </button>
            </div>
        </div>


    )
}

export default Top_bar