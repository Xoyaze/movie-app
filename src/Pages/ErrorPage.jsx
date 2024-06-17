import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='h-screen w-screen bg-black text-gray-300 text-5xl  flex justify-center items-center flex-col gap-6'>
      <p className='hover:text-white cursor-default'>Sorry, cannot find the page you're looking for.</p>
      <Link className='text-2xl text-white flex gap-2 items-center hover:text-red-600 transition-hover duration-150' to='/'>
        <FontAwesomeIcon icon={ faArrowAltCircleLeft} />
        <span>Go back</span>  
      </Link>
    </div>
  )
}

export default ErrorPage;