import React, { useContext, useState } from 'react';
import { SearchContext } from '../Pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-router-dom';

const Header = () => {

    const [searchKey, setSearchKey] = useContext(SearchContext);


    const [searchText, setSearchText] = useState('');

    const hanldeSearchText = (e) => {
        setSearchText(e.target.value);
    }

    const hanldeSubmit = (e) => {
        e.preventDefault();
        setSearchKey(searchText);
        setSearchText('');
    }


  return (
    <div className='h-[15vh] w-full text-2xl text-white flex justify-between px-6'>
        <h1 className='h-full flex justify-center items-center text-red-600 text-5xl'>NetFish</h1>
        <div className='h-full w-[35%]  flex justify-center items-center'>
            <Form onSubmit={hanldeSubmit}  className='h-full w-full flex justify-center items-center gap-6'>
                <input value={searchText} onChange={hanldeSearchText} type="text" placeholder='Search Movies' className='bg-gray-900 h-[60%] w-[80%] rounded-2xl p-3 text-xl border border-white focus:outline-none focus:border-2' />
                <button type='submit'>
                    <FontAwesomeIcon icon={ faSearch } className='text-4xl text-white hover:text-red-600 transition-hover duration-150 active:text-red-200'/>
                </button>
            </Form>
        </div>
    </div>
  )
}

export default Header;
