import React from 'react';
import { Link } from 'react-router-dom';

const Application = ({handler}) => {
    return (
        <div>
          <Link onClick={handler} to='/customer'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                  </svg>
            <span className='text-slate-200 '>Customer</span>
            <span className='p-1 ml-10'></span>
        </div></Link>
          <Link onClick={handler} to='/product'>
              <div className='flex justify-between rounded-md hover:bg-cyan-800  p-1'>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                                  </svg>
            <span className='text-slate-200 mt-1'>Product</span>
            <span className='p-2 ml-10'></span>
        </div></Link>
          <Link onClick={handler} to='/order'>
              <div className='flex justify-between rounded-md hover:bg-cyan-800  p-1'>
            
              <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                  </svg>
            <span className='text-slate-200  text-justify mt-1'>Order</span>
            <span className='p-4 ml-10'></span>
        </div></Link>
       
          <Link onClick={handler} to='/invoice'>
              <div className='flex justify-between rounded-md hover:bg-cyan-800 p-1'>
            
              <svg class="icon line" width="18" id="receipt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                      <path d="M17,16V3L13,5,10,3,7,5,3,3V17.83A3.13,3.13,0,0,0,5.84,21,3,3,0,0,0,9,18V17a1,1,0,0,1,1-1H20a1,1,0,0,1,1,1v1a3,3,0,0,1-3,3H6"></path>
                                      <line x1="8" y1="10" x2="12" y2="10"></line>
                                  </svg>
            <span className='text-slate-200  text-justify'>Invoice</span>
            <span className='p-3 ml-10'></span>
        </div></Link>
          <Link onClick={handler} to='/todo'>
              <div className='flex justify-between rounded-md hover:bg-cyan-800 p-1'>
            
              <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                                  </svg>
            <span className='text-slate-200  text-justify mt-2'>Todo</span>
            <span className='p-5 ml-10'></span>
        </div></Link>
          <Link onClick={handler} to='/calender'>
              <div className='flex justify-between rounded-md hover:bg-cyan-800 p-1'>
            
              <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                  </svg>
                                
            <span className='text-slate-200  text-justify ml-3 mt-0'>Calender</span>
            <span className='bg-green-400 text-xs text-white rounded-md font-bold p-0.5 ml-10'>New</span>
        </div></Link>
       
        </div>
    );
};

export default Application;