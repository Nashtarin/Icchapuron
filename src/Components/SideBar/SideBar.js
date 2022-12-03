import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/llggoo.png'
import Application from './Application';
import Pages from './Pages';
const SideBar = ({open,handler}) => {
    return (
        <div  className="fixed z-40 h-screen p-4 overflow-y-scroll bg-cyan-900 w-75" >
       
        <img src={logo} alt="" />
        <button onClick={handler}type="button" data-drawer-dismiss="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Close menu</span>
        </button>
        {/* <h5 className='text-white'>DashBoard</h5> */}
      <div className="py-4 overflow-y-auto">
     <Link onClick={handler} to='/dashboard'>
     <div className='flex justify-between rounded-md bg-cyan-800 p-1'>
            {/* <FontAwesomeIcon icon={faHome}/> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                  </svg>
            <span className='text-slate-200 '>DashBoard</span>
            <span className='bg-sky-400 text-xs text-white rounded-md font-bold p-1 ml-10'>6</span>
        </div></Link>
        
        <div className='my-3'>
        <h6 className='text-slate-200 text-left mb-2 text-sm'>APPLICATION</h6>
        <Application handler={handler}/>
            
        </div>
        <div className='my-3'>
        <h6 className='text-slate-200 text-left mb-2 text-sm'>PAGES</h6>
        <Pages handler={handler}/>
            
        </div>
        <div className='my-3'>
        <h6 className='text-slate-200 text-left mb-2 text-sm'>COMPONENTS</h6>
        <Pages handler={handler}/>
            
        </div>
       
       </div>
    </div>
    );
};

export default SideBar;