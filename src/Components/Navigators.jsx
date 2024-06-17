import React, { useContext } from 'react';
import { SearchContext } from '../Pages/Home';
import {  NavLink } from 'react-router-dom';

const Navigators = () => {

    const [searchKey] = useContext(SearchContext);

  return (
    <div className='h-[10vh] w-full flex items-center text-white justify-between px-5'>
        <div className='flex items-center gap-5'>
            <NavLink to='/popular'>
                <h1 className='cursor-pointer hover:text-red-600 transition-hover duration-150'>Popular Movies</h1>
            </NavLink>
            <NavLink to='/top_rated'>
                <h1 className='cursor-pointer hover:text-red-600 transition-hover duration-150'>Top Rated Movies</h1>
            </NavLink>
            <NavLink to='/upcoming'>
                <h1 className='cursor-pointer hover:text-red-600 transition-hover duration-150'>Upcoming Movies</h1>
            </NavLink>
        </div>

        <div className='flex items-center gap-5'>
            <h1 className='text-xl text-white'>Your Search:</h1>
            <h1 className='text-xl text-red-600'> {searchKey ? searchKey : "Not searched Yet"}</h1>
        </div>

      
    </div>
  )
}

export default Navigators;
