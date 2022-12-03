import React from 'react';
import { Link } from 'react-router-dom';

const Authentication = ({handler}) => {
    return (
        <div className='ml-12'>
             <Link onClick={handler} to='/login'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
        </svg>
            <span className='text-slate-200 font-semibold'>Login</span>
            <span className='px-6 ml-10'></span>
        </div></Link>
        <Link onClick={handler} to='/register'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
            <span className='text-slate-200 font-semibold mt-1'>Register</span>
            <span className='p-4 ml-10'></span>
        </div></Link>
             <Link onClick={handler} to='/resetpassword'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
        </svg>
            <span className='text-slate-200 font-semibold ml-2'>Reset Password</span>
            <span className='p-0 ml-8'></span>
        </div></Link>
             <Link onClick={handler} to='/confirmemail'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
            <span className='text-slate-200 font-semibold ml-2'>Confirm Email</span>
            <span className='p-0 ml-10'></span>
        </div></Link>
         
             <Link onClick={handler} to='/lockscreen'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
            <span className='text-slate-200 font-semibold'>Lock Screen</span>
            <span className='p-0 ml-10'></span>
        </div></Link>
            
        </div>
    );
};

export default Authentication;