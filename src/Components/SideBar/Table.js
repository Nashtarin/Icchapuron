import { faDatabase, faTable, faTableCells, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({handler}) => {
    return (
        <div className='ml-7'>
        <Link onClick={handler} to='/basictable'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faTable}/>
       <span className='text-slate-200 '>Basic Table</span>
       <span className='px-8 ml-1'></span>
   </div></Link>
   <Link onClick={handler} to='/datatable'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faTableColumns}/>
       <span className='text-slate-200 '>Data Table</span>
       <span className='px-6 ml-6'></span>
   </div></Link>
        <Link onClick={handler} to='/editabletable'>
<div className='flex justify-between rounded-md  hover:bg-cyan-800 p-1'>
   
<FontAwesomeIcon className='mt-1' icon={faTableCells}/>
       <span className='text-slate-200 ml-1'>Editable Table</span>
       <span className='px-6 ml-2'></span>
   </div></Link>


            
        </div>
    );
};

export default Table;