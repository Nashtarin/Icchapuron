import { fa1, faArrowCircleDown, faArrowDown, faArrowDown19, faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Authentication from './Authentication';
import Error from './Error';

const Pages = ({handler}) => {
    const [arrow,setArrow]=useState(false)
  
    const arrowHandler=()=>{
        setArrow(!arrow)
    }
    
    return (
        <div>
               <Link onClick={handler} to='/chat'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                  </svg>
            <span className='text-slate-200 '>Chat</span>
            <span className='p-3 px-7 ml-10'></span>
        </div></Link>
               <Link onClick={handler} to='/userprofile'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
           <FontAwesomeIcon icon={faUser}/>
            <span className='text-slate-200 '>User Profile</span>
            <span className='p-1 ml-10'></span>
        </div></Link>
        <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                  </svg>
            <span className='text-slate-200  ml-2 mt-1'>Authentication</span>
            {arrow?<span onClick={arrowHandler} className='p-1 ml-2'><FontAwesomeIcon icon={faArrowDown}/></span>   :<span onClick={arrowHandler} className='p-1 ml-2'><FontAwesomeIcon icon={faArrowRight}/></span>}
            <br/>
            
          
        </div>
        {arrow &&  <Authentication handler={handler}/>}
        <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"></path>
                                          </svg>
            <span className='text-slate-200  ml-4 mt-1'>Error</span>
            {arrow?<span onClick={arrowHandler} className='px-6 ml-16'><FontAwesomeIcon icon={faArrowDown}/></span>   :<span onClick={arrowHandler} className='px-7 ml-10'><FontAwesomeIcon icon={faArrowRight}/></span>}
            <br/>
            
          
        </div>
        {arrow &&  <Error handler={handler}/>}
        <Link onClick={handler} to='/comingsoon'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                                  </svg>
            <span className='text-slate-200 '>Comingsoon</span>
            <span className='p-0.5 ml-10'></span>
        </div></Link>
        <Link onClick={handler} to='/maintenance'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                  </svg>
            <span className='text-slate-200 '>Maintenance</span>
            <span className='p-0.5 ml-10'></span>
        </div></Link>
        <Link onClick={handler} to='/blankpage'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                  </svg>
            <span className='text-slate-200 '>Blank Page</span>
            <span className='p-2 ml-10'></span>
        </div></Link>
        <Link onClick={handler} to='/faq'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                                  </svg>
            <span className='text-slate-200 '>FAQ</span>
            <span className='px-8 ml-10'></span>
        </div></Link>
        <Link onClick={handler} to='/pricing'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                  </svg>
            <span className='text-slate-200 '>Pricing</span>
            <span className='px-6 ml-10'></span>
        </div></Link>
        <Link onClick={handler} to='/timeline'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                  </svg>
            <span className='text-slate-200 '>Timeline</span>
            <span className='px-5 ml-10'></span>
        </div></Link>
        

        </div>
    );
};

export default Pages;