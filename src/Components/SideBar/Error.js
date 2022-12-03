import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({handler}) => {
    return (
        <div className='ml-12'>
             <Link onClick={handler} to='/error404'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                          </svg>
            <span className='text-slate-200 font-semibold ml-3'>Error404</span>
            <span className='px-5 ml-10'></span>
        </div></Link>
        <Link onClick={handler} to='/error500'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"></path>
                                          </svg>
            <span className='text-slate-200 font-semibold mt-1 ml-1'>Error500</span>
            <span className='p-4 ml-10'></span>
        </div></Link>
            
        </div>
    );
};

export default Error;