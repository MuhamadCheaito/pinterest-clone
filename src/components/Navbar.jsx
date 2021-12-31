import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {IoMdSearch } from 'react-icons/io';
import { RiPushpin2Fill } from 'react-icons/ri';
const Navbar = ({searchTerm, setSearchTerm, user}) => {
    const navigate = useNavigate();

    if(!user) return null;

    return (
        <div className='flex gap-2 md:gap-5 w-full mt-5 pb-7'>
            <div data-tooltip-target="tooltip-light" data-tooltip-style="light" className='flex justify-start items-center w-full px-2 rounded-md bg-gray-200 border-none outline-none focus-within:shadow-sm'>
                <IoMdSearch fontSize={21} className='ml-1'/>
                <input 
                 type="text"
                 onChange={(e) => setSearchTerm(e.target.value)}
                 placeholder='Search'
                 value={searchTerm}
                 onFocus={() => navigate('/search')}
                 className='p-2 w-full bg-gray-200 outline-none'
                />
            </div>
            <div className='flex gap-3'>
            <Link to='create-pin'>    
                <button type="button" className=" flex justify-center items-center h-full w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-full text-sm px-3 py-1 text-center mr-2 mb-2">
                    <RiPushpin2Fill />
                </button>
            </Link>
            </div>
        </div>
    )
}

export default Navbar
