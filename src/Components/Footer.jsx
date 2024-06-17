import React from 'react';

const Footer = () => {
  return (
    <div className='h-[25vh] -mb-10 text-white overflow-hidden'>
        <ul className='h-[90%] w-full flex justify-around items-center'>
          <li className='flex flex-col gap-y-2 h-full'>
              <a href="google.com" target='_blank'>Links here</a>
              <a href="google.com" target='_blank'>Links here</a>
              <a href="google.com" target='_blank'>Links here</a>
              <a href="google.com" target='_blank'>Links here</a>
          </li>
          <li className='flex flex-col gap-y-2 h-full'>
            <a href="google.com" target='_blank'>Links here</a>
            <a href="google.com" target='_blank'>Links here</a>
            <a href="google.com" target='_blank'>Links here</a>
            <a href="google.com" target='_blank'>Links here</a>
            <a href="google.com" target='_blank'>Links here</a>
          </li>
          <li className='flex flex-col gap-y-2 h-full'>
            <a href="google.com" target='_blank'>Links here</a>
            <a href="google.com" target='_blank'>Links here</a>
            <a href="google.com" target='_blank'>Links here</a>
            <a href="google.com" target='_blank'>Links here</a>
          </li>
        </ul>
    </div>
  )
}

export default Footer;
