import { faArrowRightArrowLeft, faCheck, faCheckCircle, faCube, faFile, faFileArrowUp, faFileCirclePlus, faRadio, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const FormControl = ({handler}) => {
    return (
        <div className='ml-6'>
        <Link onClick={handler} to='/formelements'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faCube}/>
       <span className='text-slate-200'>Form Elements</span>
       <span className='px-1 ml-1'></span>
   </div></Link>
        <Link onClick={handler} to='/forminput'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faFile}/>
       <span className='text-slate-200 '>Form Input</span>
       <span className='px-2 ml-5'></span>
   </div></Link>
        <Link onClick={handler} to='/formvalidation'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faFileArrowUp}/>
       <span className='text-slate-200 '>Form Validation</span>
       <span className='px-0.5'></span>
   </div></Link>
        <Link onClick={handler} to='/formswitch'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faArrowRightArrowLeft}/>
       <span className='text-slate-200 '>Form Switch</span>
       <span className='px-2 ml-4'></span>
   </div></Link>
        <Link onClick={handler} to='/formcheckbox'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faCheck}/>
       <span className='text-slate-200 '>Form Checkbox</span>
       <span className='px-1 ml-2'></span>
   </div></Link>
        <Link onClick={handler} to='/formradio'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faCheckCircle}/>
       <span className='text-slate-200 '>Form Radio</span>
       <span className='px-3 ml-5'></span>
   </div></Link>
        <Link onClick={handler} to='/formtextarea'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faFileCirclePlus}/>
       <span className='text-slate-200 '>Form Textarea</span>
       <span className='px-2 ml-3'></span>
   </div></Link>
    </div>
    );
};

export default FormControl;