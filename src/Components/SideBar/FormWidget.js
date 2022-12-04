import { faDashboard, faFileAlt, faFileArrowUp, faFileCircleCheck, faFileClipboard, faFileInvoice, faICursor, faMousePointer, faPager, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const FormWidget = ({handler}) => {
    return (
        <div className='ml-6'>
        <Link onClick={handler} to='/datepicker'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faFileAlt}/>
       <span className='text-slate-200 '>Date Picker</span>
       <span className='px-5 ml-1'></span>
   </div></Link>
   <Link onClick={handler} to='/select2'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faMousePointer}/>
       <span className='text-slate-200 '>Select2</span>
       <span className='px-6 ml-6'></span>
   </div></Link>
        <Link onClick={handler} to='/fileupload'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faFileArrowUp}/>
       <span className='text-slate-200 '>File Upload</span>
       <span className='px-5 ml-2'></span>
   </div></Link>

        <Link onClick={handler} to='/formquill'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faFileInvoice}/>
       <span className='text-slate-200 '>Form Quill</span>
       <span className='px-5 ml-3'></span>
   </div></Link>

        </div>
    );
};

export default FormWidget;