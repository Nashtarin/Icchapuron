import { faNetworkWired, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = ({handler}) => {
    return (
        <div className='ml-16'>
             <Link onClick={handler} to='/error404'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
  <FontAwesomeIcon className='mt-1' icon={faPauseCircle}/>
            <span className='text-slate-200   ml-1'>Error404</span>
            <span className='px-10 ml-10'></span>
        </div></Link>
        <Link onClick={handler} to='/error500'>
     <div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
        
     <FontAwesomeIcon className='mt-2' icon={faNetworkWired}/>
            <span className='text-slate-200 mt-1 ml-1'>Error500</span>
            <span className='px-10 ml-10'></span>
        </div></Link>
            
        </div>
    );
};

export default Error;